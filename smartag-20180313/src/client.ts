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
    this._endpoint = this.getEndpoint("smartag", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Activates a Smart Access Gateway (SAG) device.
   * 
   * @param request - ActivateSmartAccessGatewayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ActivateSmartAccessGatewayResponse
   */
  async activateSmartAccessGatewayWithOptions(request: $_model.ActivateSmartAccessGatewayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ActivateSmartAccessGatewayResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ActivateSmartAccessGateway",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ActivateSmartAccessGatewayResponse>(await this.callApi(params, req, runtime), new $_model.ActivateSmartAccessGatewayResponse({}));
  }

  /**
   * Activates a Smart Access Gateway (SAG) device.
   * 
   * @param request - ActivateSmartAccessGatewayRequest
   * @returns ActivateSmartAccessGatewayResponse
   */
  async activateSmartAccessGateway(request: $_model.ActivateSmartAccessGatewayRequest): Promise<$_model.ActivateSmartAccessGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.activateSmartAccessGatewayWithOptions(request, runtime);
  }

  /**
   * Enables a flow log.
   * 
   * @param request - ActiveFlowLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ActiveFlowLogResponse
   */
  async activeFlowLogWithOptions(request: $_model.ActiveFlowLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ActiveFlowLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.flowLogId)) {
      query["FlowLogId"] = request.flowLogId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ActiveFlowLog",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ActiveFlowLogResponse>(await this.callApi(params, req, runtime), new $_model.ActiveFlowLogResponse({}));
  }

  /**
   * Enables a flow log.
   * 
   * @param request - ActiveFlowLogRequest
   * @returns ActiveFlowLogResponse
   */
  async activeFlowLog(request: $_model.ActiveFlowLogRequest): Promise<$_model.ActiveFlowLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.activeFlowLogWithOptions(request, runtime);
  }

  /**
   * Creates an access control list (ACL) rule.
   * 
   * @param request - AddACLRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddACLRuleResponse
   */
  async addACLRuleWithOptions(request: $_model.AddACLRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddACLRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.destCidr)) {
      query["DestCidr"] = request.destCidr;
    }

    if (!$dara.isNull(request.destPortRange)) {
      query["DestPortRange"] = request.destPortRange;
    }

    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.dpiGroupIds)) {
      query["DpiGroupIds"] = request.dpiGroupIds;
    }

    if (!$dara.isNull(request.dpiSignatureIds)) {
      query["DpiSignatureIds"] = request.dpiSignatureIds;
    }

    if (!$dara.isNull(request.ipProtocol)) {
      query["IpProtocol"] = request.ipProtocol;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.policy)) {
      query["Policy"] = request.policy;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sourceCidr)) {
      query["SourceCidr"] = request.sourceCidr;
    }

    if (!$dara.isNull(request.sourcePortRange)) {
      query["SourcePortRange"] = request.sourcePortRange;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddACLRule",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddACLRuleResponse>(await this.callApi(params, req, runtime), new $_model.AddACLRuleResponse({}));
  }

  /**
   * Creates an access control list (ACL) rule.
   * 
   * @param request - AddACLRuleRequest
   * @returns AddACLRuleResponse
   */
  async addACLRule(request: $_model.AddACLRuleRequest): Promise<$_model.AddACLRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addACLRuleWithOptions(request, runtime);
  }

  /**
   * Adds a destination network address translation (DNAT) entry to a Smart Access Gateway (SAG) instance.
   * 
   * @param request - AddDnatEntryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddDnatEntryResponse
   */
  async addDnatEntryWithOptions(request: $_model.AddDnatEntryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddDnatEntryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.externalIp)) {
      query["ExternalIp"] = request.externalIp;
    }

    if (!$dara.isNull(request.externalPort)) {
      query["ExternalPort"] = request.externalPort;
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

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sagId)) {
      query["SagId"] = request.sagId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddDnatEntry",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddDnatEntryResponse>(await this.callApi(params, req, runtime), new $_model.AddDnatEntryResponse({}));
  }

  /**
   * Adds a destination network address translation (DNAT) entry to a Smart Access Gateway (SAG) instance.
   * 
   * @param request - AddDnatEntryRequest
   * @returns AddDnatEntryResponse
   */
  async addDnatEntry(request: $_model.AddDnatEntryRequest): Promise<$_model.AddDnatEntryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addDnatEntryWithOptions(request, runtime);
  }

  /**
   * Adds DNS forwarding configurations to an SCG5000 or SCG5000-5G instance. The device version must be 3.4.2 or later.
   * 
   * @param request - AddSmartAccessGatewayDnsForwardRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddSmartAccessGatewayDnsForwardResponse
   */
  async addSmartAccessGatewayDnsForwardWithOptions(request: $_model.AddSmartAccessGatewayDnsForwardRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddSmartAccessGatewayDnsForwardResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.masterIp)) {
      query["MasterIp"] = request.masterIp;
    }

    if (!$dara.isNull(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!$dara.isNull(request.outboundPortIndex)) {
      query["OutboundPortIndex"] = request.outboundPortIndex;
    }

    if (!$dara.isNull(request.outboundPortName)) {
      query["OutboundPortName"] = request.outboundPortName;
    }

    if (!$dara.isNull(request.outboundPortType)) {
      query["OutboundPortType"] = request.outboundPortType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sagInsId)) {
      query["SagInsId"] = request.sagInsId;
    }

    if (!$dara.isNull(request.sagSn)) {
      query["SagSn"] = request.sagSn;
    }

    if (!$dara.isNull(request.slaveIp)) {
      query["SlaveIp"] = request.slaveIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddSmartAccessGatewayDnsForward",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddSmartAccessGatewayDnsForwardResponse>(await this.callApi(params, req, runtime), new $_model.AddSmartAccessGatewayDnsForwardResponse({}));
  }

  /**
   * Adds DNS forwarding configurations to an SCG5000 or SCG5000-5G instance. The device version must be 3.4.2 or later.
   * 
   * @param request - AddSmartAccessGatewayDnsForwardRequest
   * @returns AddSmartAccessGatewayDnsForwardResponse
   */
  async addSmartAccessGatewayDnsForward(request: $_model.AddSmartAccessGatewayDnsForwardRequest): Promise<$_model.AddSmartAccessGatewayDnsForwardResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addSmartAccessGatewayDnsForwardWithOptions(request, runtime);
  }

  /**
   * You can call this operation to add a source network address translation (SNAT) entry to a Smart Access Gateway (SAG) instance.
   * 
   * @param request - AddSnatEntryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddSnatEntryResponse
   */
  async addSnatEntryWithOptions(request: $_model.AddSnatEntryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddSnatEntryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cidrBlock)) {
      query["CidrBlock"] = request.cidrBlock;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.snatIp)) {
      query["SnatIp"] = request.snatIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddSnatEntry",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddSnatEntryResponse>(await this.callApi(params, req, runtime), new $_model.AddSnatEntryResponse({}));
  }

  /**
   * You can call this operation to add a source network address translation (SNAT) entry to a Smart Access Gateway (SAG) instance.
   * 
   * @param request - AddSnatEntryRequest
   * @returns AddSnatEntryResponse
   */
  async addSnatEntry(request: $_model.AddSnatEntryRequest): Promise<$_model.AddSnatEntryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addSnatEntryWithOptions(request, runtime);
  }

  /**
   * Associates an access control list (ACL) with a Smart Access Gateway (SAG) instance.
   * 
   * @param request - AssociateACLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssociateACLResponse
   */
  async associateACLWithOptions(request: $_model.AssociateACLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssociateACLResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssociateACL",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssociateACLResponse>(await this.callApi(params, req, runtime), new $_model.AssociateACLResponse({}));
  }

  /**
   * Associates an access control list (ACL) with a Smart Access Gateway (SAG) instance.
   * 
   * @param request - AssociateACLRequest
   * @returns AssociateACLResponse
   */
  async associateACL(request: $_model.AssociateACLRequest): Promise<$_model.AssociateACLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.associateACLWithOptions(request, runtime);
  }

  /**
   * Associates a flow log with a Smart Access Gateway (SAG) instance.
   * 
   * @param request - AssociateFlowLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssociateFlowLogResponse
   */
  async associateFlowLogWithOptions(request: $_model.AssociateFlowLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssociateFlowLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.flowLogId)) {
      query["FlowLogId"] = request.flowLogId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssociateFlowLog",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssociateFlowLogResponse>(await this.callApi(params, req, runtime), new $_model.AssociateFlowLogResponse({}));
  }

  /**
   * Associates a flow log with a Smart Access Gateway (SAG) instance.
   * 
   * @param request - AssociateFlowLogRequest
   * @returns AssociateFlowLogResponse
   */
  async associateFlowLog(request: $_model.AssociateFlowLogRequest): Promise<$_model.AssociateFlowLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.associateFlowLogWithOptions(request, runtime);
  }

  /**
   * Applies a Quality of Service (QoS) policy to a Smart Access Gateway (SAG) instance.
   * 
   * @param request - AssociateQosRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssociateQosResponse
   */
  async associateQosWithOptions(request: $_model.AssociateQosRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssociateQosResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.qosId)) {
      query["QosId"] = request.qosId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssociateQos",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssociateQosResponse>(await this.callApi(params, req, runtime), new $_model.AssociateQosResponse({}));
  }

  /**
   * Applies a Quality of Service (QoS) policy to a Smart Access Gateway (SAG) instance.
   * 
   * @param request - AssociateQosRequest
   * @returns AssociateQosResponse
   */
  async associateQos(request: $_model.AssociateQosRequest): Promise<$_model.AssociateQosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.associateQosWithOptions(request, runtime);
  }

  /**
   * Associates a bandwidth plan for application acceleration with a Smart Access Gateway (SAG) instance.
   * 
   * @remarks
   * Before you associate a bandwidth plan for application acceleration with an SAG instance, make sure that the following requirements are met:
   * *   If you want to associate a bandwidth plan for application acceleration with an SAG CPE instance, the version of the SAG device associated with the SAG CPE instance must be 2.4.0 or later.
   *     If the version of the SAG device is earlier than 2.4.0, update it. For more information, see [Update the version of an SAG device](https://help.aliyun.com/document_detail/163948.html).
   * *   If you want to associate a bandwidth plan for application acceleration with an SAG app instance, the version of the SAG app must be 2.4.0 or later.
   *     If the version of the SAG app is earlier than 2.4.0, update it. For more information, see [Install the SAG app](https://help.aliyun.com/document_detail/102544.html).
   * *   The SAG instance to be associated is in the available state.
   * 
   * @param request - AssociateSmartAGWithApplicationBandwidthPackageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssociateSmartAGWithApplicationBandwidthPackageResponse
   */
  async associateSmartAGWithApplicationBandwidthPackageWithOptions(request: $_model.AssociateSmartAGWithApplicationBandwidthPackageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssociateSmartAGWithApplicationBandwidthPackageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationBandwidthPackageId)) {
      query["ApplicationBandwidthPackageId"] = request.applicationBandwidthPackageId;
    }

    if (!$dara.isNull(request.associateConfigs)) {
      query["AssociateConfigs"] = request.associateConfigs;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssociateSmartAGWithApplicationBandwidthPackage",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssociateSmartAGWithApplicationBandwidthPackageResponse>(await this.callApi(params, req, runtime), new $_model.AssociateSmartAGWithApplicationBandwidthPackageResponse({}));
  }

  /**
   * Associates a bandwidth plan for application acceleration with a Smart Access Gateway (SAG) instance.
   * 
   * @remarks
   * Before you associate a bandwidth plan for application acceleration with an SAG instance, make sure that the following requirements are met:
   * *   If you want to associate a bandwidth plan for application acceleration with an SAG CPE instance, the version of the SAG device associated with the SAG CPE instance must be 2.4.0 or later.
   *     If the version of the SAG device is earlier than 2.4.0, update it. For more information, see [Update the version of an SAG device](https://help.aliyun.com/document_detail/163948.html).
   * *   If you want to associate a bandwidth plan for application acceleration with an SAG app instance, the version of the SAG app must be 2.4.0 or later.
   *     If the version of the SAG app is earlier than 2.4.0, update it. For more information, see [Install the SAG app](https://help.aliyun.com/document_detail/102544.html).
   * *   The SAG instance to be associated is in the available state.
   * 
   * @param request - AssociateSmartAGWithApplicationBandwidthPackageRequest
   * @returns AssociateSmartAGWithApplicationBandwidthPackageResponse
   */
  async associateSmartAGWithApplicationBandwidthPackage(request: $_model.AssociateSmartAGWithApplicationBandwidthPackageRequest): Promise<$_model.AssociateSmartAGWithApplicationBandwidthPackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.associateSmartAGWithApplicationBandwidthPackageWithOptions(request, runtime);
  }

  /**
   * Associates a Smart Access Gateway (SAG) device with an SAG instance.
   * 
   * @param request - BindSerialNumberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindSerialNumberResponse
   */
  async bindSerialNumberWithOptions(request: $_model.BindSerialNumberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindSerialNumberResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.serialNumber)) {
      query["SerialNumber"] = request.serialNumber;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindSerialNumber",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindSerialNumberResponse>(await this.callApi(params, req, runtime), new $_model.BindSerialNumberResponse({}));
  }

  /**
   * Associates a Smart Access Gateway (SAG) device with an SAG instance.
   * 
   * @param request - BindSerialNumberRequest
   * @returns BindSerialNumberResponse
   */
  async bindSerialNumber(request: $_model.BindSerialNumberRequest): Promise<$_model.BindSerialNumberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindSerialNumberWithOptions(request, runtime);
  }

  /**
   * Associates a Smart Access Gateway (SAG) instance with a Cloud Connect Network (CCN) instance.
   * 
   * @param request - BindSmartAccessGatewayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindSmartAccessGatewayResponse
   */
  async bindSmartAccessGatewayWithOptions(request: $_model.BindSmartAccessGatewayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindSmartAccessGatewayResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ccnId)) {
      query["CcnId"] = request.ccnId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.smartAGUid)) {
      query["SmartAGUid"] = request.smartAGUid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindSmartAccessGateway",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindSmartAccessGatewayResponse>(await this.callApi(params, req, runtime), new $_model.BindSmartAccessGatewayResponse({}));
  }

  /**
   * Associates a Smart Access Gateway (SAG) instance with a Cloud Connect Network (CCN) instance.
   * 
   * @param request - BindSmartAccessGatewayRequest
   * @returns BindSmartAccessGatewayResponse
   */
  async bindSmartAccessGateway(request: $_model.BindSmartAccessGatewayRequest): Promise<$_model.BindSmartAccessGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindSmartAccessGatewayWithOptions(request, runtime);
  }

  /**
   * Associates a Smart Access Gateway (SAG) instance with a virtual border router (VBR).
   * 
   * @param request - BindVbrRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindVbrResponse
   */
  async bindVbrWithOptions(request: $_model.BindVbrRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindVbrResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.smartAGUid)) {
      query["SmartAGUid"] = request.smartAGUid;
    }

    if (!$dara.isNull(request.vbrId)) {
      query["VbrId"] = request.vbrId;
    }

    if (!$dara.isNull(request.vbrRegionId)) {
      query["VbrRegionId"] = request.vbrRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindVbr",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindVbrResponse>(await this.callApi(params, req, runtime), new $_model.BindVbrResponse({}));
  }

  /**
   * Associates a Smart Access Gateway (SAG) instance with a virtual border router (VBR).
   * 
   * @param request - BindVbrRequest
   * @returns BindVbrResponse
   */
  async bindVbr(request: $_model.BindVbrRequest): Promise<$_model.BindVbrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindVbrWithOptions(request, runtime);
  }

  /**
   * Resets the password of a virtual customer-premises equipment (vCPE) device of Smart Access Gateway (SAG).
   * 
   * @param request - ClearSagCipherRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClearSagCipherResponse
   */
  async clearSagCipherWithOptions(request: $_model.ClearSagCipherRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ClearSagCipherResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sagId)) {
      query["SagId"] = request.sagId;
    }

    if (!$dara.isNull(request.snNumber)) {
      query["SnNumber"] = request.snNumber;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ClearSagCipher",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ClearSagCipherResponse>(await this.callApi(params, req, runtime), new $_model.ClearSagCipherResponse({}));
  }

  /**
   * Resets the password of a virtual customer-premises equipment (vCPE) device of Smart Access Gateway (SAG).
   * 
   * @param request - ClearSagCipherRequest
   * @returns ClearSagCipherResponse
   */
  async clearSagCipher(request: $_model.ClearSagCipherRequest): Promise<$_model.ClearSagCipherResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.clearSagCipherWithOptions(request, runtime);
  }

  /**
   * Clears the routable IP addresses of a Smart Access Gateway (SAG) instance.
   * 
   * @param request - ClearSagRouteableAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClearSagRouteableAddressResponse
   */
  async clearSagRouteableAddressWithOptions(request: $_model.ClearSagRouteableAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ClearSagRouteableAddressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sagId)) {
      query["SagId"] = request.sagId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ClearSagRouteableAddress",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ClearSagRouteableAddressResponse>(await this.callApi(params, req, runtime), new $_model.ClearSagRouteableAddressResponse({}));
  }

  /**
   * Clears the routable IP addresses of a Smart Access Gateway (SAG) instance.
   * 
   * @param request - ClearSagRouteableAddressRequest
   * @returns ClearSagRouteableAddressResponse
   */
  async clearSagRouteableAddress(request: $_model.ClearSagRouteableAddressRequest): Promise<$_model.ClearSagRouteableAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.clearSagRouteableAddressWithOptions(request, runtime);
  }

  /**
   * Creates an access control list (ACL).
   * 
   * @param request - CreateACLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateACLResponse
   */
  async createACLWithOptions(request: $_model.CreateACLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateACLResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclType)) {
      query["AclType"] = request.aclType;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateACL",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateACLResponse>(await this.callApi(params, req, runtime), new $_model.CreateACLResponse({}));
  }

  /**
   * Creates an access control list (ACL).
   * 
   * @param request - CreateACLRequest
   * @returns CreateACLResponse
   */
  async createACL(request: $_model.CreateACLRequest): Promise<$_model.CreateACLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createACLWithOptions(request, runtime);
  }

  /**
   * Creates a Cloud Connect Network (CCN) instance.
   * 
   * @remarks
   * CCN is a matrix consisting of Alibaba Cloud distributed access gateways. It is an important component of Smart Access Gateway (SAG). After you associate an SAG instance with a CCN instance, the SAG instance connects the private networks associated with Alibaba Cloud. For more information, see [Overview of Cloud Connect Network](https://help.aliyun.com/document_detail/93667.html).
   * 
   * @param request - CreateCloudConnectNetworkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCloudConnectNetworkResponse
   */
  async createCloudConnectNetworkWithOptions(request: $_model.CreateCloudConnectNetworkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCloudConnectNetworkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cidrBlock)) {
      query["CidrBlock"] = request.cidrBlock;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.snatCidrBlock)) {
      query["SnatCidrBlock"] = request.snatCidrBlock;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCloudConnectNetwork",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCloudConnectNetworkResponse>(await this.callApi(params, req, runtime), new $_model.CreateCloudConnectNetworkResponse({}));
  }

  /**
   * Creates a Cloud Connect Network (CCN) instance.
   * 
   * @remarks
   * CCN is a matrix consisting of Alibaba Cloud distributed access gateways. It is an important component of Smart Access Gateway (SAG). After you associate an SAG instance with a CCN instance, the SAG instance connects the private networks associated with Alibaba Cloud. For more information, see [Overview of Cloud Connect Network](https://help.aliyun.com/document_detail/93667.html).
   * 
   * @param request - CreateCloudConnectNetworkRequest
   * @returns CreateCloudConnectNetworkResponse
   */
  async createCloudConnectNetwork(request: $_model.CreateCloudConnectNetworkRequest): Promise<$_model.CreateCloudConnectNetworkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCloudConnectNetworkWithOptions(request, runtime);
  }

  /**
   * Creates an enterprise code.
   * 
   * @param request - CreateEnterpriseCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEnterpriseCodeResponse
   */
  async createEnterpriseCodeWithOptions(request: $_model.CreateEnterpriseCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEnterpriseCodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.enterpriseCode)) {
      query["EnterpriseCode"] = request.enterpriseCode;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEnterpriseCode",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEnterpriseCodeResponse>(await this.callApi(params, req, runtime), new $_model.CreateEnterpriseCodeResponse({}));
  }

  /**
   * Creates an enterprise code.
   * 
   * @param request - CreateEnterpriseCodeRequest
   * @returns CreateEnterpriseCodeResponse
   */
  async createEnterpriseCode(request: $_model.CreateEnterpriseCodeRequest): Promise<$_model.CreateEnterpriseCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createEnterpriseCodeWithOptions(request, runtime);
  }

  /**
   * Creates a flow log.
   * 
   * @param request - CreateFlowLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFlowLogResponse
   */
  async createFlowLogWithOptions(request: $_model.CreateFlowLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFlowLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.activeAging)) {
      query["ActiveAging"] = request.activeAging;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.inactiveAging)) {
      query["InactiveAging"] = request.inactiveAging;
    }

    if (!$dara.isNull(request.logstoreName)) {
      query["LogstoreName"] = request.logstoreName;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.netflowServerIp)) {
      query["NetflowServerIp"] = request.netflowServerIp;
    }

    if (!$dara.isNull(request.netflowServerPort)) {
      query["NetflowServerPort"] = request.netflowServerPort;
    }

    if (!$dara.isNull(request.netflowVersion)) {
      query["NetflowVersion"] = request.netflowVersion;
    }

    if (!$dara.isNull(request.outputType)) {
      query["OutputType"] = request.outputType;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.slsRegionId)) {
      query["SlsRegionId"] = request.slsRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFlowLog",
      version: "2018-03-13",
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
   * Creates a flow log.
   * 
   * @param request - CreateFlowLogRequest
   * @returns CreateFlowLogResponse
   */
  async createFlowLog(request: $_model.CreateFlowLogRequest): Promise<$_model.CreateFlowLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFlowLogWithOptions(request, runtime);
  }

  /**
   * Creates a health check for a Smart Access Gateway (SAG) instance.
   * 
   * @param request - CreateHealthCheckRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateHealthCheckResponse
   */
  async createHealthCheckWithOptions(request: $_model.CreateHealthCheckRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateHealthCheckResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.dstIpAddr)) {
      query["DstIpAddr"] = request.dstIpAddr;
    }

    if (!$dara.isNull(request.dstPort)) {
      query["DstPort"] = request.dstPort;
    }

    if (!$dara.isNull(request.failCountThreshold)) {
      query["FailCountThreshold"] = request.failCountThreshold;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.probeCount)) {
      query["ProbeCount"] = request.probeCount;
    }

    if (!$dara.isNull(request.probeInterval)) {
      query["ProbeInterval"] = request.probeInterval;
    }

    if (!$dara.isNull(request.probeTimeout)) {
      query["ProbeTimeout"] = request.probeTimeout;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.rttFailThreshold)) {
      query["RttFailThreshold"] = request.rttFailThreshold;
    }

    if (!$dara.isNull(request.rttThreshold)) {
      query["RttThreshold"] = request.rttThreshold;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.srcIpAddr)) {
      query["SrcIpAddr"] = request.srcIpAddr;
    }

    if (!$dara.isNull(request.srcPort)) {
      query["SrcPort"] = request.srcPort;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateHealthCheck",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateHealthCheckResponse>(await this.callApi(params, req, runtime), new $_model.CreateHealthCheckResponse({}));
  }

  /**
   * Creates a health check for a Smart Access Gateway (SAG) instance.
   * 
   * @param request - CreateHealthCheckRequest
   * @returns CreateHealthCheckResponse
   */
  async createHealthCheck(request: $_model.CreateHealthCheckRequest): Promise<$_model.CreateHealthCheckResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createHealthCheckWithOptions(request, runtime);
  }

  /**
   * Creates a probing task for a Smart Access Gateway (SAG) device.
   * 
   * @remarks
   *   Only SAG-1000 devices whose software version is 2.7.0 or later support the probing feature.
   * *   The SAG instance must have the deep packet inspection (DPI) feature enabled. You can call the [SetAdvancedMonitorState](https://help.aliyun.com/document_detail/476404.html) operation to enable or disable the DPI feature.
   * 
   * @param request - CreateProbeTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProbeTaskResponse
   */
  async createProbeTaskWithOptions(request: $_model.CreateProbeTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateProbeTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.packetNumber)) {
      query["PacketNumber"] = request.packetNumber;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.probeTaskSourceAddress)) {
      query["ProbeTaskSourceAddress"] = request.probeTaskSourceAddress;
    }

    if (!$dara.isNull(request.protocol)) {
      query["Protocol"] = request.protocol;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sagId)) {
      query["SagId"] = request.sagId;
    }

    if (!$dara.isNull(request.sn)) {
      query["Sn"] = request.sn;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateProbeTask",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateProbeTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateProbeTaskResponse({}));
  }

  /**
   * Creates a probing task for a Smart Access Gateway (SAG) device.
   * 
   * @remarks
   *   Only SAG-1000 devices whose software version is 2.7.0 or later support the probing feature.
   * *   The SAG instance must have the deep packet inspection (DPI) feature enabled. You can call the [SetAdvancedMonitorState](https://help.aliyun.com/document_detail/476404.html) operation to enable or disable the DPI feature.
   * 
   * @param request - CreateProbeTaskRequest
   * @returns CreateProbeTaskResponse
   */
  async createProbeTask(request: $_model.CreateProbeTaskRequest): Promise<$_model.CreateProbeTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createProbeTaskWithOptions(request, runtime);
  }

  /**
   * Creates a quality of service (QoS) policy.
   * 
   * @param request - CreateQosRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateQosResponse
   */
  async createQosWithOptions(request: $_model.CreateQosRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateQosResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.qosDescription)) {
      query["QosDescription"] = request.qosDescription;
    }

    if (!$dara.isNull(request.qosName)) {
      query["QosName"] = request.qosName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateQos",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateQosResponse>(await this.callApi(params, req, runtime), new $_model.CreateQosResponse({}));
  }

  /**
   * Creates a quality of service (QoS) policy.
   * 
   * @param request - CreateQosRequest
   * @returns CreateQosResponse
   */
  async createQos(request: $_model.CreateQosRequest): Promise<$_model.CreateQosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createQosWithOptions(request, runtime);
  }

  /**
   * Creates a traffic throttling rule for a quality of service (QoS) policy.
   * 
   * @param request - CreateQosCarRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateQosCarResponse
   */
  async createQosCarWithOptions(request: $_model.CreateQosCarRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateQosCarResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.limitType)) {
      query["LimitType"] = request.limitType;
    }

    if (!$dara.isNull(request.maxBandwidthAbs)) {
      query["MaxBandwidthAbs"] = request.maxBandwidthAbs;
    }

    if (!$dara.isNull(request.maxBandwidthPercent)) {
      query["MaxBandwidthPercent"] = request.maxBandwidthPercent;
    }

    if (!$dara.isNull(request.minBandwidthAbs)) {
      query["MinBandwidthAbs"] = request.minBandwidthAbs;
    }

    if (!$dara.isNull(request.minBandwidthPercent)) {
      query["MinBandwidthPercent"] = request.minBandwidthPercent;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.percentSourceType)) {
      query["PercentSourceType"] = request.percentSourceType;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.qosId)) {
      query["QosId"] = request.qosId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateQosCar",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateQosCarResponse>(await this.callApi(params, req, runtime), new $_model.CreateQosCarResponse({}));
  }

  /**
   * Creates a traffic throttling rule for a quality of service (QoS) policy.
   * 
   * @param request - CreateQosCarRequest
   * @returns CreateQosCarResponse
   */
  async createQosCar(request: $_model.CreateQosCarRequest): Promise<$_model.CreateQosCarResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createQosCarWithOptions(request, runtime);
  }

  /**
   * Creates a traffic classification rule for a quality of service (QoS) policy.
   * 
   * @remarks
   * ## Prerequisites
   * A traffic throttling rule is created. For more information, see [CreateQosCar](https://help.aliyun.com/document_detail/131806.html).
   * 
   * @param request - CreateQosPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateQosPolicyResponse
   */
  async createQosPolicyWithOptions(request: $_model.CreateQosPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateQosPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.destCidr)) {
      query["DestCidr"] = request.destCidr;
    }

    if (!$dara.isNull(request.destPortRange)) {
      query["DestPortRange"] = request.destPortRange;
    }

    if (!$dara.isNull(request.dpiGroupIds)) {
      query["DpiGroupIds"] = request.dpiGroupIds;
    }

    if (!$dara.isNull(request.dpiSignatureIds)) {
      query["DpiSignatureIds"] = request.dpiSignatureIds;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ipProtocol)) {
      query["IpProtocol"] = request.ipProtocol;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.qosId)) {
      query["QosId"] = request.qosId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sourceCidr)) {
      query["SourceCidr"] = request.sourceCidr;
    }

    if (!$dara.isNull(request.sourcePortRange)) {
      query["SourcePortRange"] = request.sourcePortRange;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateQosPolicy",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateQosPolicyResponse>(await this.callApi(params, req, runtime), new $_model.CreateQosPolicyResponse({}));
  }

  /**
   * Creates a traffic classification rule for a quality of service (QoS) policy.
   * 
   * @remarks
   * ## Prerequisites
   * A traffic throttling rule is created. For more information, see [CreateQosCar](https://help.aliyun.com/document_detail/131806.html).
   * 
   * @param request - CreateQosPolicyRequest
   * @returns CreateQosPolicyResponse
   */
  async createQosPolicy(request: $_model.CreateQosPolicyRequest): Promise<$_model.CreateQosPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createQosPolicyWithOptions(request, runtime);
  }

  /**
   * Creates a subinterface for an Express Connect circuit.
   * 
   * @param request - CreateSagExpressConnectInterfaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSagExpressConnectInterfaceResponse
   */
  async createSagExpressConnectInterfaceWithOptions(request: $_model.CreateSagExpressConnectInterfaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSagExpressConnectInterfaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.IP)) {
      query["IP"] = request.IP;
    }

    if (!$dara.isNull(request.mask)) {
      query["Mask"] = request.mask;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.portName)) {
      query["PortName"] = request.portName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    if (!$dara.isNull(request.vlan)) {
      query["Vlan"] = request.vlan;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSagExpressConnectInterface",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSagExpressConnectInterfaceResponse>(await this.callApi(params, req, runtime), new $_model.CreateSagExpressConnectInterfaceResponse({}));
  }

  /**
   * Creates a subinterface for an Express Connect circuit.
   * 
   * @param request - CreateSagExpressConnectInterfaceRequest
   * @returns CreateSagExpressConnectInterfaceResponse
   */
  async createSagExpressConnectInterface(request: $_model.CreateSagExpressConnectInterfaceRequest): Promise<$_model.CreateSagExpressConnectInterfaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSagExpressConnectInterfaceWithOptions(request, runtime);
  }

  /**
   * Adds a static route to a Smart Access Gateway (SAG) instance.
   * 
   * @param request - CreateSagStaticRouteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSagStaticRouteResponse
   */
  async createSagStaticRouteWithOptions(request: $_model.CreateSagStaticRouteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSagStaticRouteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.destinationCidr)) {
      query["DestinationCidr"] = request.destinationCidr;
    }

    if (!$dara.isNull(request.nextHop)) {
      query["NextHop"] = request.nextHop;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.portName)) {
      query["PortName"] = request.portName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    if (!$dara.isNull(request.vlan)) {
      query["Vlan"] = request.vlan;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSagStaticRoute",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSagStaticRouteResponse>(await this.callApi(params, req, runtime), new $_model.CreateSagStaticRouteResponse({}));
  }

  /**
   * Adds a static route to a Smart Access Gateway (SAG) instance.
   * 
   * @param request - CreateSagStaticRouteRequest
   * @returns CreateSagStaticRouteResponse
   */
  async createSagStaticRoute(request: $_model.CreateSagStaticRouteRequest): Promise<$_model.CreateSagStaticRouteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSagStaticRouteWithOptions(request, runtime);
  }

  /**
   * Configures a service address for a Smart Access Gateway (SAG) device.
   * 
   * @param request - CreateServiceAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceAddressResponse
   */
  async createServiceAddressWithOptions(request: $_model.CreateServiceAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateServiceAddressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.address)) {
      query["Address"] = request.address;
    }

    if (!$dara.isNull(request.addressType)) {
      query["AddressType"] = request.addressType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sagId)) {
      query["SagId"] = request.sagId;
    }

    if (!$dara.isNull(request.sn)) {
      query["Sn"] = request.sn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateServiceAddress",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateServiceAddressResponse>(await this.callApi(params, req, runtime), new $_model.CreateServiceAddressResponse({}));
  }

  /**
   * Configures a service address for a Smart Access Gateway (SAG) device.
   * 
   * @param request - CreateServiceAddressRequest
   * @returns CreateServiceAddressResponse
   */
  async createServiceAddress(request: $_model.CreateServiceAddressRequest): Promise<$_model.CreateServiceAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createServiceAddressWithOptions(request, runtime);
  }

  /**
   * Creates a Smart Access Gateway (SAG) CPE or vCPE instance.
   * 
   * @param request - CreateSmartAccessGatewayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSmartAccessGatewayResponse
   */
  async createSmartAccessGatewayWithOptions(request: $_model.CreateSmartAccessGatewayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSmartAccessGatewayResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alreadyHaveSag)) {
      query["AlreadyHaveSag"] = request.alreadyHaveSag;
    }

    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.buyerMessage)) {
      query["BuyerMessage"] = request.buyerMessage;
    }

    if (!$dara.isNull(request.CPEVersion)) {
      query["CPEVersion"] = request.CPEVersion;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.haType)) {
      query["HaType"] = request.haType;
    }

    if (!$dara.isNull(request.hardWareSpec)) {
      query["HardWareSpec"] = request.hardWareSpec;
    }

    if (!$dara.isNull(request.maxBandWidth)) {
      query["MaxBandWidth"] = request.maxBandWidth;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.receiverAddress)) {
      query["ReceiverAddress"] = request.receiverAddress;
    }

    if (!$dara.isNull(request.receiverCity)) {
      query["ReceiverCity"] = request.receiverCity;
    }

    if (!$dara.isNull(request.receiverCountry)) {
      query["ReceiverCountry"] = request.receiverCountry;
    }

    if (!$dara.isNull(request.receiverDistrict)) {
      query["ReceiverDistrict"] = request.receiverDistrict;
    }

    if (!$dara.isNull(request.receiverEmail)) {
      query["ReceiverEmail"] = request.receiverEmail;
    }

    if (!$dara.isNull(request.receiverMobile)) {
      query["ReceiverMobile"] = request.receiverMobile;
    }

    if (!$dara.isNull(request.receiverName)) {
      query["ReceiverName"] = request.receiverName;
    }

    if (!$dara.isNull(request.receiverPhone)) {
      query["ReceiverPhone"] = request.receiverPhone;
    }

    if (!$dara.isNull(request.receiverState)) {
      query["ReceiverState"] = request.receiverState;
    }

    if (!$dara.isNull(request.receiverTown)) {
      query["ReceiverTown"] = request.receiverTown;
    }

    if (!$dara.isNull(request.receiverZip)) {
      query["ReceiverZip"] = request.receiverZip;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSmartAccessGateway",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSmartAccessGatewayResponse>(await this.callApi(params, req, runtime), new $_model.CreateSmartAccessGatewayResponse({}));
  }

  /**
   * Creates a Smart Access Gateway (SAG) CPE or vCPE instance.
   * 
   * @param request - CreateSmartAccessGatewayRequest
   * @returns CreateSmartAccessGatewayResponse
   */
  async createSmartAccessGateway(request: $_model.CreateSmartAccessGatewayRequest): Promise<$_model.CreateSmartAccessGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSmartAccessGatewayWithOptions(request, runtime);
  }

  /**
   * Creates a client account.
   * 
   * @param request - CreateSmartAccessGatewayClientUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSmartAccessGatewayClientUserResponse
   */
  async createSmartAccessGatewayClientUserWithOptions(request: $_model.CreateSmartAccessGatewayClientUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSmartAccessGatewayClientUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.clientIp)) {
      query["ClientIp"] = request.clientIp;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.userMail)) {
      query["UserMail"] = request.userMail;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSmartAccessGatewayClientUser",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSmartAccessGatewayClientUserResponse>(await this.callApi(params, req, runtime), new $_model.CreateSmartAccessGatewayClientUserResponse({}));
  }

  /**
   * Creates a client account.
   * 
   * @param request - CreateSmartAccessGatewayClientUserRequest
   * @returns CreateSmartAccessGatewayClientUserResponse
   */
  async createSmartAccessGatewayClientUser(request: $_model.CreateSmartAccessGatewayClientUserRequest): Promise<$_model.CreateSmartAccessGatewayClientUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSmartAccessGatewayClientUserWithOptions(request, runtime);
  }

  /**
   * Creates a Smart Access Gateway (SAG) app instance.
   * 
   * @param request - CreateSmartAccessGatewaySoftwareRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSmartAccessGatewaySoftwareResponse
   */
  async createSmartAccessGatewaySoftwareWithOptions(request: $_model.CreateSmartAccessGatewaySoftwareRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSmartAccessGatewaySoftwareResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.dataPlan)) {
      query["DataPlan"] = request.dataPlan;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.userCount)) {
      query["UserCount"] = request.userCount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSmartAccessGatewaySoftware",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSmartAccessGatewaySoftwareResponse>(await this.callApi(params, req, runtime), new $_model.CreateSmartAccessGatewaySoftwareResponse({}));
  }

  /**
   * Creates a Smart Access Gateway (SAG) app instance.
   * 
   * @param request - CreateSmartAccessGatewaySoftwareRequest
   * @returns CreateSmartAccessGatewaySoftwareResponse
   */
  async createSmartAccessGatewaySoftware(request: $_model.CreateSmartAccessGatewaySoftwareRequest): Promise<$_model.CreateSmartAccessGatewaySoftwareResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSmartAccessGatewaySoftwareWithOptions(request, runtime);
  }

  /**
   * Stops a flow log.
   * 
   * @param request - DeactiveFlowLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeactiveFlowLogResponse
   */
  async deactiveFlowLogWithOptions(request: $_model.DeactiveFlowLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeactiveFlowLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.flowLogId)) {
      query["FlowLogId"] = request.flowLogId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeactiveFlowLog",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeactiveFlowLogResponse>(await this.callApi(params, req, runtime), new $_model.DeactiveFlowLogResponse({}));
  }

  /**
   * Stops a flow log.
   * 
   * @param request - DeactiveFlowLogRequest
   * @returns DeactiveFlowLogResponse
   */
  async deactiveFlowLog(request: $_model.DeactiveFlowLogRequest): Promise<$_model.DeactiveFlowLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deactiveFlowLogWithOptions(request, runtime);
  }

  /**
   * Deletes an access control list (ACL).
   * 
   * @param request - DeleteACLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteACLResponse
   */
  async deleteACLWithOptions(request: $_model.DeleteACLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteACLResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteACL",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteACLResponse>(await this.callApi(params, req, runtime), new $_model.DeleteACLResponse({}));
  }

  /**
   * Deletes an access control list (ACL).
   * 
   * @param request - DeleteACLRequest
   * @returns DeleteACLResponse
   */
  async deleteACL(request: $_model.DeleteACLRequest): Promise<$_model.DeleteACLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteACLWithOptions(request, runtime);
  }

  /**
   * Deletes a rule from an ACL.
   * 
   * @param request - DeleteACLRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteACLRuleResponse
   */
  async deleteACLRuleWithOptions(request: $_model.DeleteACLRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteACLRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!$dara.isNull(request.acrId)) {
      query["AcrId"] = request.acrId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteACLRule",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteACLRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteACLRuleResponse({}));
  }

  /**
   * Deletes a rule from an ACL.
   * 
   * @param request - DeleteACLRuleRequest
   * @returns DeleteACLRuleResponse
   */
  async deleteACLRule(request: $_model.DeleteACLRuleRequest): Promise<$_model.DeleteACLRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteACLRuleWithOptions(request, runtime);
  }

  /**
   * Deletes a Cloud Connect Network (CCN) instance.
   * 
   * @remarks
   * >  Make sure that the CCN instance you want to delete is not associated with a Smart Access Gateway (SAG) instance or a Cloud Enterprise Network (CEN) instance.
   * 
   * @param request - DeleteCloudConnectNetworkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCloudConnectNetworkResponse
   */
  async deleteCloudConnectNetworkWithOptions(request: $_model.DeleteCloudConnectNetworkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCloudConnectNetworkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ccnId)) {
      query["CcnId"] = request.ccnId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCloudConnectNetwork",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCloudConnectNetworkResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCloudConnectNetworkResponse({}));
  }

  /**
   * Deletes a Cloud Connect Network (CCN) instance.
   * 
   * @remarks
   * >  Make sure that the CCN instance you want to delete is not associated with a Smart Access Gateway (SAG) instance or a Cloud Enterprise Network (CEN) instance.
   * 
   * @param request - DeleteCloudConnectNetworkRequest
   * @returns DeleteCloudConnectNetworkResponse
   */
  async deleteCloudConnectNetwork(request: $_model.DeleteCloudConnectNetworkRequest): Promise<$_model.DeleteCloudConnectNetworkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCloudConnectNetworkWithOptions(request, runtime);
  }

  /**
   * Removes a DNAT entry from a Smart Access Gateway (SAG) instance.
   * 
   * @param request - DeleteDnatEntryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDnatEntryResponse
   */
  async deleteDnatEntryWithOptions(request: $_model.DeleteDnatEntryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDnatEntryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dnatEntryId)) {
      query["DnatEntryId"] = request.dnatEntryId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sagId)) {
      query["SagId"] = request.sagId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDnatEntry",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDnatEntryResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDnatEntryResponse({}));
  }

  /**
   * Removes a DNAT entry from a Smart Access Gateway (SAG) instance.
   * 
   * @param request - DeleteDnatEntryRequest
   * @returns DeleteDnatEntryResponse
   */
  async deleteDnatEntry(request: $_model.DeleteDnatEntryRequest): Promise<$_model.DeleteDnatEntryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDnatEntryWithOptions(request, runtime);
  }

  /**
   * Deletes a specified enterprise code.
   * 
   * @remarks
   * Before you call this operation, take note of the following rules:
   * *   You cannot delete default enterprise codes.
   *     To delete a default enterprise code, change it to a custom enterprise code and then delete it. For more information, see [UpdateEnterpriseCode](https://help.aliyun.com/document_detail/197700.html).
   * *   You cannot delete enterprise codes that are associated with a Smart Access Gateway (SAG) APP instance.
   *     To delete an enterprise code that is associated with an SAG APP instance, associate the SAG APP instance with another enterprise code, and then delete the enterprise code. For more information, see [UpdateSmartAGEnterpriseCode](https://help.aliyun.com/document_detail/197701.html).
   * 
   * @param request - DeleteEnterpriseCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEnterpriseCodeResponse
   */
  async deleteEnterpriseCodeWithOptions(request: $_model.DeleteEnterpriseCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEnterpriseCodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.enterpriseCode)) {
      query["EnterpriseCode"] = request.enterpriseCode;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEnterpriseCode",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEnterpriseCodeResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEnterpriseCodeResponse({}));
  }

  /**
   * Deletes a specified enterprise code.
   * 
   * @remarks
   * Before you call this operation, take note of the following rules:
   * *   You cannot delete default enterprise codes.
   *     To delete a default enterprise code, change it to a custom enterprise code and then delete it. For more information, see [UpdateEnterpriseCode](https://help.aliyun.com/document_detail/197700.html).
   * *   You cannot delete enterprise codes that are associated with a Smart Access Gateway (SAG) APP instance.
   *     To delete an enterprise code that is associated with an SAG APP instance, associate the SAG APP instance with another enterprise code, and then delete the enterprise code. For more information, see [UpdateSmartAGEnterpriseCode](https://help.aliyun.com/document_detail/197701.html).
   * 
   * @param request - DeleteEnterpriseCodeRequest
   * @returns DeleteEnterpriseCodeResponse
   */
  async deleteEnterpriseCode(request: $_model.DeleteEnterpriseCodeRequest): Promise<$_model.DeleteEnterpriseCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEnterpriseCodeWithOptions(request, runtime);
  }

  /**
   * Deletes a flow log.
   * 
   * @param request - DeleteFlowLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFlowLogResponse
   */
  async deleteFlowLogWithOptions(request: $_model.DeleteFlowLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFlowLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.flowLogId)) {
      query["FlowLogId"] = request.flowLogId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFlowLog",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFlowLogResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFlowLogResponse({}));
  }

  /**
   * Deletes a flow log.
   * 
   * @param request - DeleteFlowLogRequest
   * @returns DeleteFlowLogResponse
   */
  async deleteFlowLog(request: $_model.DeleteFlowLogRequest): Promise<$_model.DeleteFlowLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFlowLogWithOptions(request, runtime);
  }

  /**
   * You can call this operation to delete a health check instance.
   * 
   * @param request - DeleteHealthCheckRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHealthCheckResponse
   */
  async deleteHealthCheckWithOptions(request: $_model.DeleteHealthCheckRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteHealthCheckResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.hcInstanceId)) {
      query["HcInstanceId"] = request.hcInstanceId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteHealthCheck",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteHealthCheckResponse>(await this.callApi(params, req, runtime), new $_model.DeleteHealthCheckResponse({}));
  }

  /**
   * You can call this operation to delete a health check instance.
   * 
   * @param request - DeleteHealthCheckRequest
   * @returns DeleteHealthCheckResponse
   */
  async deleteHealthCheck(request: $_model.DeleteHealthCheckRequest): Promise<$_model.DeleteHealthCheckResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteHealthCheckWithOptions(request, runtime);
  }

  /**
   * Deletes a probe task.
   * 
   * @param request - DeleteProbeTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteProbeTaskResponse
   */
  async deleteProbeTaskWithOptions(request: $_model.DeleteProbeTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteProbeTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.probeTaskId)) {
      query["ProbeTaskId"] = request.probeTaskId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sagId)) {
      query["SagId"] = request.sagId;
    }

    if (!$dara.isNull(request.sn)) {
      query["Sn"] = request.sn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteProbeTask",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteProbeTaskResponse>(await this.callApi(params, req, runtime), new $_model.DeleteProbeTaskResponse({}));
  }

  /**
   * Deletes a probe task.
   * 
   * @param request - DeleteProbeTaskRequest
   * @returns DeleteProbeTaskResponse
   */
  async deleteProbeTask(request: $_model.DeleteProbeTaskRequest): Promise<$_model.DeleteProbeTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteProbeTaskWithOptions(request, runtime);
  }

  /**
   * Deletes a Quality of Service (QoS) policy.
   * 
   * @param request - DeleteQosRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteQosResponse
   */
  async deleteQosWithOptions(request: $_model.DeleteQosRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteQosResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.qosId)) {
      query["QosId"] = request.qosId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteQos",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteQosResponse>(await this.callApi(params, req, runtime), new $_model.DeleteQosResponse({}));
  }

  /**
   * Deletes a Quality of Service (QoS) policy.
   * 
   * @param request - DeleteQosRequest
   * @returns DeleteQosResponse
   */
  async deleteQos(request: $_model.DeleteQosRequest): Promise<$_model.DeleteQosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteQosWithOptions(request, runtime);
  }

  /**
   * Deletes a speed limiting rule of a Quality of Service (QoS) policy.
   * 
   * @param request - DeleteQosCarRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteQosCarResponse
   */
  async deleteQosCarWithOptions(request: $_model.DeleteQosCarRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteQosCarResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.qosCarId)) {
      query["QosCarId"] = request.qosCarId;
    }

    if (!$dara.isNull(request.qosId)) {
      query["QosId"] = request.qosId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteQosCar",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteQosCarResponse>(await this.callApi(params, req, runtime), new $_model.DeleteQosCarResponse({}));
  }

  /**
   * Deletes a speed limiting rule of a Quality of Service (QoS) policy.
   * 
   * @param request - DeleteQosCarRequest
   * @returns DeleteQosCarResponse
   */
  async deleteQosCar(request: $_model.DeleteQosCarRequest): Promise<$_model.DeleteQosCarResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteQosCarWithOptions(request, runtime);
  }

  /**
   * Deletes a quintuple rule of a Quality of Service (QoS) policy.
   * 
   * @param request - DeleteQosPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteQosPolicyResponse
   */
  async deleteQosPolicyWithOptions(request: $_model.DeleteQosPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteQosPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.qosId)) {
      query["QosId"] = request.qosId;
    }

    if (!$dara.isNull(request.qosPolicyId)) {
      query["QosPolicyId"] = request.qosPolicyId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteQosPolicy",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteQosPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteQosPolicyResponse({}));
  }

  /**
   * Deletes a quintuple rule of a Quality of Service (QoS) policy.
   * 
   * @param request - DeleteQosPolicyRequest
   * @returns DeleteQosPolicyResponse
   */
  async deleteQosPolicy(request: $_model.DeleteQosPolicyRequest): Promise<$_model.DeleteQosPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteQosPolicyWithOptions(request, runtime);
  }

  /**
   * Deletes a route advertisement policy.
   * 
   * @param request - DeleteRouteDistributionStrategyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRouteDistributionStrategyResponse
   */
  async deleteRouteDistributionStrategyWithOptions(request: $_model.DeleteRouteDistributionStrategyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRouteDistributionStrategyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.destCidrBlock)) {
      query["DestCidrBlock"] = request.destCidrBlock;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.routeSource)) {
      query["RouteSource"] = request.routeSource;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRouteDistributionStrategy",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRouteDistributionStrategyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRouteDistributionStrategyResponse({}));
  }

  /**
   * Deletes a route advertisement policy.
   * 
   * @param request - DeleteRouteDistributionStrategyRequest
   * @returns DeleteRouteDistributionStrategyResponse
   */
  async deleteRouteDistributionStrategy(request: $_model.DeleteRouteDistributionStrategyRequest): Promise<$_model.DeleteRouteDistributionStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRouteDistributionStrategyWithOptions(request, runtime);
  }

  /**
   * Deletes a subinterface from a leased line port.
   * 
   * @param request - DeleteSagExpressConnectInterfaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSagExpressConnectInterfaceResponse
   */
  async deleteSagExpressConnectInterfaceWithOptions(request: $_model.DeleteSagExpressConnectInterfaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSagExpressConnectInterfaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.portName)) {
      query["PortName"] = request.portName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    if (!$dara.isNull(request.vlan)) {
      query["Vlan"] = request.vlan;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSagExpressConnectInterface",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSagExpressConnectInterfaceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSagExpressConnectInterfaceResponse({}));
  }

  /**
   * Deletes a subinterface from a leased line port.
   * 
   * @param request - DeleteSagExpressConnectInterfaceRequest
   * @returns DeleteSagExpressConnectInterfaceResponse
   */
  async deleteSagExpressConnectInterface(request: $_model.DeleteSagExpressConnectInterfaceRequest): Promise<$_model.DeleteSagExpressConnectInterfaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSagExpressConnectInterfaceWithOptions(request, runtime);
  }

  /**
   * You can call this operation to delete a static route.
   * 
   * @param request - DeleteSagStaticRouteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSagStaticRouteResponse
   */
  async deleteSagStaticRouteWithOptions(request: $_model.DeleteSagStaticRouteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSagStaticRouteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.destinationCidr)) {
      query["DestinationCidr"] = request.destinationCidr;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.portName)) {
      query["PortName"] = request.portName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    if (!$dara.isNull(request.vlan)) {
      query["Vlan"] = request.vlan;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSagStaticRoute",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSagStaticRouteResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSagStaticRouteResponse({}));
  }

  /**
   * You can call this operation to delete a static route.
   * 
   * @param request - DeleteSagStaticRouteRequest
   * @returns DeleteSagStaticRouteResponse
   */
  async deleteSagStaticRoute(request: $_model.DeleteSagStaticRouteRequest): Promise<$_model.DeleteSagStaticRouteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSagStaticRouteWithOptions(request, runtime);
  }

  /**
   * Deletes a service address from a Smart Access Gateway (SAG) device.
   * 
   * @param request - DeleteServiceAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteServiceAddressResponse
   */
  async deleteServiceAddressWithOptions(request: $_model.DeleteServiceAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteServiceAddressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.address)) {
      query["Address"] = request.address;
    }

    if (!$dara.isNull(request.addressType)) {
      query["AddressType"] = request.addressType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sagId)) {
      query["SagId"] = request.sagId;
    }

    if (!$dara.isNull(request.sn)) {
      query["Sn"] = request.sn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteServiceAddress",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteServiceAddressResponse>(await this.callApi(params, req, runtime), new $_model.DeleteServiceAddressResponse({}));
  }

  /**
   * Deletes a service address from a Smart Access Gateway (SAG) device.
   * 
   * @param request - DeleteServiceAddressRequest
   * @returns DeleteServiceAddressResponse
   */
  async deleteServiceAddress(request: $_model.DeleteServiceAddressRequest): Promise<$_model.DeleteServiceAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteServiceAddressWithOptions(request, runtime);
  }

  /**
   * Deletes a Smart Access Gateway (SAG) instance.
   * 
   * @remarks
   *   The SAG instance that you want to delete is an SAG CPE instance or an SAG vCPE instance.
   * *   The SAG instance that you want to delete is locked due to overdue payments.
   * *   The SAG instance that you want to delete is not associated with a Cloud Connect Network (CCN) instance or a virtual border router (VBR). If the SAG instance is associated with a CCN instance or a VBR, dissociate the SAG instance from the CCN instance or VBR first. For more information, see [Detach a network](https://help.aliyun.com/document_detail/164903.html).
   * 
   * @param request - DeleteSmartAccessGatewayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSmartAccessGatewayResponse
   */
  async deleteSmartAccessGatewayWithOptions(request: $_model.DeleteSmartAccessGatewayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSmartAccessGatewayResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSmartAccessGateway",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSmartAccessGatewayResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSmartAccessGatewayResponse({}));
  }

  /**
   * Deletes a Smart Access Gateway (SAG) instance.
   * 
   * @remarks
   *   The SAG instance that you want to delete is an SAG CPE instance or an SAG vCPE instance.
   * *   The SAG instance that you want to delete is locked due to overdue payments.
   * *   The SAG instance that you want to delete is not associated with a Cloud Connect Network (CCN) instance or a virtual border router (VBR). If the SAG instance is associated with a CCN instance or a VBR, dissociate the SAG instance from the CCN instance or VBR first. For more information, see [Detach a network](https://help.aliyun.com/document_detail/164903.html).
   * 
   * @param request - DeleteSmartAccessGatewayRequest
   * @returns DeleteSmartAccessGatewayResponse
   */
  async deleteSmartAccessGateway(request: $_model.DeleteSmartAccessGatewayRequest): Promise<$_model.DeleteSmartAccessGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSmartAccessGatewayWithOptions(request, runtime);
  }

  /**
   * Deletes a client account from a Smart Access Gateway (SAG) app instance.
   * 
   * @param request - DeleteSmartAccessGatewayClientUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSmartAccessGatewayClientUserResponse
   */
  async deleteSmartAccessGatewayClientUserWithOptions(request: $_model.DeleteSmartAccessGatewayClientUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSmartAccessGatewayClientUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSmartAccessGatewayClientUser",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSmartAccessGatewayClientUserResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSmartAccessGatewayClientUserResponse({}));
  }

  /**
   * Deletes a client account from a Smart Access Gateway (SAG) app instance.
   * 
   * @param request - DeleteSmartAccessGatewayClientUserRequest
   * @returns DeleteSmartAccessGatewayClientUserResponse
   */
  async deleteSmartAccessGatewayClientUser(request: $_model.DeleteSmartAccessGatewayClientUserRequest): Promise<$_model.DeleteSmartAccessGatewayClientUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSmartAccessGatewayClientUserWithOptions(request, runtime);
  }

  /**
   * Disables DNS forwarding for SCG5000 or SCG5000-5G devices whose software version is 3.4.2 or later.
   * 
   * @param request - DeleteSmartAccessGatewayDnsForwardRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSmartAccessGatewayDnsForwardResponse
   */
  async deleteSmartAccessGatewayDnsForwardWithOptions(request: $_model.DeleteSmartAccessGatewayDnsForwardRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSmartAccessGatewayDnsForwardResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sagInsId)) {
      query["SagInsId"] = request.sagInsId;
    }

    if (!$dara.isNull(request.sagSn)) {
      query["SagSn"] = request.sagSn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSmartAccessGatewayDnsForward",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSmartAccessGatewayDnsForwardResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSmartAccessGatewayDnsForwardResponse({}));
  }

  /**
   * Disables DNS forwarding for SCG5000 or SCG5000-5G devices whose software version is 3.4.2 or later.
   * 
   * @param request - DeleteSmartAccessGatewayDnsForwardRequest
   * @returns DeleteSmartAccessGatewayDnsForwardResponse
   */
  async deleteSmartAccessGatewayDnsForward(request: $_model.DeleteSmartAccessGatewayDnsForwardRequest): Promise<$_model.DeleteSmartAccessGatewayDnsForwardResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSmartAccessGatewayDnsForwardWithOptions(request, runtime);
  }

  /**
   * Removes an SNAT entry from a Smart Access Gateway (SAG) instance.
   * 
   * @param request - DeleteSnatEntryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSnatEntryResponse
   */
  async deleteSnatEntryWithOptions(request: $_model.DeleteSnatEntryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSnatEntryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSnatEntry",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSnatEntryResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSnatEntryResponse({}));
  }

  /**
   * Removes an SNAT entry from a Smart Access Gateway (SAG) instance.
   * 
   * @param request - DeleteSnatEntryRequest
   * @returns DeleteSnatEntryResponse
   */
  async deleteSnatEntry(request: $_model.DeleteSnatEntryRequest): Promise<$_model.DeleteSnatEntryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSnatEntryWithOptions(request, runtime);
  }

  /**
   * Queries the information about an access control list (ACL).
   * 
   * @param request - DescribeACLAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeACLAttributeResponse
   */
  async describeACLAttributeWithOptions(request: $_model.DescribeACLAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeACLAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeACLAttribute",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeACLAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeACLAttributeResponse({}));
  }

  /**
   * Queries the information about an access control list (ACL).
   * 
   * @param request - DescribeACLAttributeRequest
   * @returns DescribeACLAttributeResponse
   */
  async describeACLAttribute(request: $_model.DescribeACLAttributeRequest): Promise<$_model.DescribeACLAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeACLAttributeWithOptions(request, runtime);
  }

  /**
   * Queries access control lists (ACLs) in a specified region.
   * 
   * @param request - DescribeACLsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeACLsResponse
   */
  async describeACLsWithOptions(request: $_model.DescribeACLsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeACLsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclIds)) {
      query["AclIds"] = request.aclIds;
    }

    if (!$dara.isNull(request.aclType)) {
      query["AclType"] = request.aclType;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeACLs",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeACLsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeACLsResponse({}));
  }

  /**
   * Queries access control lists (ACLs) in a specified region.
   * 
   * @param request - DescribeACLsRequest
   * @returns DescribeACLsResponse
   */
  async describeACLs(request: $_model.DescribeACLsRequest): Promise<$_model.DescribeACLsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeACLsWithOptions(request, runtime);
  }

  /**
   * Queries the Smart Access Gateway (SAG) instances in a region that can be associated with a Cloud Connect Network (CCN) instance.
   * 
   * @param request - DescribeBindableSmartAccessGatewaysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBindableSmartAccessGatewaysResponse
   */
  async describeBindableSmartAccessGatewaysWithOptions(request: $_model.DescribeBindableSmartAccessGatewaysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBindableSmartAccessGatewaysResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ccnId)) {
      query["CcnId"] = request.ccnId;
    }

    if (!$dara.isNull(request.crossAccount)) {
      query["CrossAccount"] = request.crossAccount;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBindableSmartAccessGateways",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBindableSmartAccessGatewaysResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBindableSmartAccessGatewaysResponse({}));
  }

  /**
   * Queries the Smart Access Gateway (SAG) instances in a region that can be associated with a Cloud Connect Network (CCN) instance.
   * 
   * @param request - DescribeBindableSmartAccessGatewaysRequest
   * @returns DescribeBindableSmartAccessGatewaysResponse
   */
  async describeBindableSmartAccessGateways(request: $_model.DescribeBindableSmartAccessGatewaysRequest): Promise<$_model.DescribeBindableSmartAccessGatewaysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBindableSmartAccessGatewaysWithOptions(request, runtime);
  }

  /**
   * Queries the DNS settings of a Smart Access Gateway (SAG) instance associated with SAG app.
   * 
   * @param request - DescribeClientUserDNSRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClientUserDNSResponse
   */
  async describeClientUserDNSWithOptions(request: $_model.DescribeClientUserDNSRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClientUserDNSResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeClientUserDNS",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeClientUserDNSResponse>(await this.callApi(params, req, runtime), new $_model.DescribeClientUserDNSResponse({}));
  }

  /**
   * Queries the DNS settings of a Smart Access Gateway (SAG) instance associated with SAG app.
   * 
   * @param request - DescribeClientUserDNSRequest
   * @returns DescribeClientUserDNSResponse
   */
  async describeClientUserDNS(request: $_model.DescribeClientUserDNSRequest): Promise<$_model.DescribeClientUserDNSResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeClientUserDNSWithOptions(request, runtime);
  }

  /**
   * Queries Cloud Connect Network (CCN) instances that you have created in a specific region.
   * 
   * @param request - DescribeCloudConnectNetworksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCloudConnectNetworksResponse
   */
  async describeCloudConnectNetworksWithOptions(request: $_model.DescribeCloudConnectNetworksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCloudConnectNetworksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ccnId)) {
      query["CcnId"] = request.ccnId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCloudConnectNetworks",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCloudConnectNetworksResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCloudConnectNetworksResponse({}));
  }

  /**
   * Queries Cloud Connect Network (CCN) instances that you have created in a specific region.
   * 
   * @param request - DescribeCloudConnectNetworksRequest
   * @returns DescribeCloudConnectNetworksResponse
   */
  async describeCloudConnectNetworks(request: $_model.DescribeCloudConnectNetworksRequest): Promise<$_model.DescribeCloudConnectNetworksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCloudConnectNetworksWithOptions(request, runtime);
  }

  /**
   * Queries the automatic upgrade policy of a Smart Access Gateway (SAG) instance.
   * 
   * @param request - DescribeDeviceAutoUpgradePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDeviceAutoUpgradePolicyResponse
   */
  async describeDeviceAutoUpgradePolicyWithOptions(request: $_model.DescribeDeviceAutoUpgradePolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDeviceAutoUpgradePolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.serialNumber)) {
      query["SerialNumber"] = request.serialNumber;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.versionType)) {
      query["VersionType"] = request.versionType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDeviceAutoUpgradePolicy",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDeviceAutoUpgradePolicyResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDeviceAutoUpgradePolicyResponse({}));
  }

  /**
   * Queries the automatic upgrade policy of a Smart Access Gateway (SAG) instance.
   * 
   * @param request - DescribeDeviceAutoUpgradePolicyRequest
   * @returns DescribeDeviceAutoUpgradePolicyResponse
   */
  async describeDeviceAutoUpgradePolicy(request: $_model.DescribeDeviceAutoUpgradePolicyRequest): Promise<$_model.DescribeDeviceAutoUpgradePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDeviceAutoUpgradePolicyWithOptions(request, runtime);
  }

  /**
   * Queries DNAT entries that are associated with a Smart Access Gateway (SAG) instance.
   * 
   * @param request - DescribeDnatEntriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDnatEntriesResponse
   */
  async describeDnatEntriesWithOptions(request: $_model.DescribeDnatEntriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDnatEntriesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sagId)) {
      query["SagId"] = request.sagId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDnatEntries",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDnatEntriesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDnatEntriesResponse({}));
  }

  /**
   * Queries DNAT entries that are associated with a Smart Access Gateway (SAG) instance.
   * 
   * @param request - DescribeDnatEntriesRequest
   * @returns DescribeDnatEntriesResponse
   */
  async describeDnatEntries(request: $_model.DescribeDnatEntriesRequest): Promise<$_model.DescribeDnatEntriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDnatEntriesWithOptions(request, runtime);
  }

  /**
   * Queries Smart Access Gateway (SAG) instances that are associated with a specified flow log.
   * 
   * @param request - DescribeFlowLogSagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFlowLogSagsResponse
   */
  async describeFlowLogSagsWithOptions(request: $_model.DescribeFlowLogSagsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFlowLogSagsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.flowLogId)) {
      query["FlowLogId"] = request.flowLogId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFlowLogSags",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeFlowLogSagsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeFlowLogSagsResponse({}));
  }

  /**
   * Queries Smart Access Gateway (SAG) instances that are associated with a specified flow log.
   * 
   * @param request - DescribeFlowLogSagsRequest
   * @returns DescribeFlowLogSagsResponse
   */
  async describeFlowLogSags(request: $_model.DescribeFlowLogSagsRequest): Promise<$_model.DescribeFlowLogSagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFlowLogSagsWithOptions(request, runtime);
  }

  /**
   * Queries flow logs in a specified region.
   * 
   * @param request - DescribeFlowLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFlowLogsResponse
   */
  async describeFlowLogsWithOptions(request: $_model.DescribeFlowLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFlowLogsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.flowLogId)) {
      query["FlowLogId"] = request.flowLogId;
    }

    if (!$dara.isNull(request.flowLogName)) {
      query["FlowLogName"] = request.flowLogName;
    }

    if (!$dara.isNull(request.outputType)) {
      query["OutputType"] = request.outputType;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFlowLogs",
      version: "2018-03-13",
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
   * Queries flow logs in a specified region.
   * 
   * @param request - DescribeFlowLogsRequest
   * @returns DescribeFlowLogsResponse
   */
  async describeFlowLogs(request: $_model.DescribeFlowLogsRequest): Promise<$_model.DescribeFlowLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFlowLogsWithOptions(request, runtime);
  }

  /**
   * Queries the authorization information about a Cloud Connect Network (CCN) instance.
   * 
   * @param request - DescribeGrantRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGrantRulesResponse
   */
  async describeGrantRulesWithOptions(request: $_model.DescribeGrantRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGrantRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.associatedCcnId)) {
      query["AssociatedCcnId"] = request.associatedCcnId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGrantRules",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGrantRulesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGrantRulesResponse({}));
  }

  /**
   * Queries the authorization information about a Cloud Connect Network (CCN) instance.
   * 
   * @param request - DescribeGrantRulesRequest
   * @returns DescribeGrantRulesResponse
   */
  async describeGrantRules(request: $_model.DescribeGrantRulesRequest): Promise<$_model.DescribeGrantRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGrantRulesWithOptions(request, runtime);
  }

  /**
   * Queries the permission information about a Smart Access Gateway (SAG) instance.
   * 
   * @param request - DescribeGrantSagRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGrantSagRulesResponse
   */
  async describeGrantSagRulesWithOptions(request: $_model.DescribeGrantSagRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGrantSagRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGrantSagRules",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGrantSagRulesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGrantSagRulesResponse({}));
  }

  /**
   * Queries the permission information about a Smart Access Gateway (SAG) instance.
   * 
   * @param request - DescribeGrantSagRulesRequest
   * @returns DescribeGrantSagRulesResponse
   */
  async describeGrantSagRules(request: $_model.DescribeGrantSagRulesRequest): Promise<$_model.DescribeGrantSagRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGrantSagRulesWithOptions(request, runtime);
  }

  /**
   * Queries authorization information about Smart Access Gateway (SAG) instances and cross-account virtual border routers (VBRs).
   * 
   * @param request - DescribeGrantSagVbrRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGrantSagVbrRulesResponse
   */
  async describeGrantSagVbrRulesWithOptions(request: $_model.DescribeGrantSagVbrRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGrantSagVbrRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.vbrInstanceId)) {
      query["VbrInstanceId"] = request.vbrInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGrantSagVbrRules",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGrantSagVbrRulesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGrantSagVbrRulesResponse({}));
  }

  /**
   * Queries authorization information about Smart Access Gateway (SAG) instances and cross-account virtual border routers (VBRs).
   * 
   * @param request - DescribeGrantSagVbrRulesRequest
   * @returns DescribeGrantSagVbrRulesResponse
   */
  async describeGrantSagVbrRules(request: $_model.DescribeGrantSagVbrRulesRequest): Promise<$_model.DescribeGrantSagVbrRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGrantSagVbrRulesWithOptions(request, runtime);
  }

  /**
   * Queries the detailed information about a health check instance.
   * 
   * @param request - DescribeHealthCheckAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHealthCheckAttributeResponse
   */
  async describeHealthCheckAttributeWithOptions(request: $_model.DescribeHealthCheckAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHealthCheckAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.hcInstanceId)) {
      query["HcInstanceId"] = request.hcInstanceId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHealthCheckAttribute",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHealthCheckAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHealthCheckAttributeResponse({}));
  }

  /**
   * Queries the detailed information about a health check instance.
   * 
   * @param request - DescribeHealthCheckAttributeRequest
   * @returns DescribeHealthCheckAttributeResponse
   */
  async describeHealthCheckAttribute(request: $_model.DescribeHealthCheckAttributeRequest): Promise<$_model.DescribeHealthCheckAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHealthCheckAttributeWithOptions(request, runtime);
  }

  /**
   * Queries health checks that are associated with a Smart Access Gateway (SAG) instance.
   * 
   * @param request - DescribeHealthChecksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHealthChecksResponse
   */
  async describeHealthChecksWithOptions(request: $_model.DescribeHealthChecksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHealthChecksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.hcInstanceId)) {
      query["HcInstanceId"] = request.hcInstanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHealthChecks",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHealthChecksResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHealthChecksResponse({}));
  }

  /**
   * Queries health checks that are associated with a Smart Access Gateway (SAG) instance.
   * 
   * @param request - DescribeHealthChecksRequest
   * @returns DescribeHealthChecksResponse
   */
  async describeHealthChecks(request: $_model.DescribeHealthChecksRequest): Promise<$_model.DescribeHealthChecksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHealthChecksWithOptions(request, runtime);
  }

  /**
   * Queries traffic throttling rules of a quality of service (QoS) policy.
   * 
   * @param request - DescribeQosCarsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeQosCarsResponse
   */
  async describeQosCarsWithOptions(request: $_model.DescribeQosCarsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeQosCarsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
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

    if (!$dara.isNull(request.qosCarId)) {
      query["QosCarId"] = request.qosCarId;
    }

    if (!$dara.isNull(request.qosId)) {
      query["QosId"] = request.qosId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeQosCars",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeQosCarsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeQosCarsResponse({}));
  }

  /**
   * Queries traffic throttling rules of a quality of service (QoS) policy.
   * 
   * @param request - DescribeQosCarsRequest
   * @returns DescribeQosCarsResponse
   */
  async describeQosCars(request: $_model.DescribeQosCarsRequest): Promise<$_model.DescribeQosCarsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeQosCarsWithOptions(request, runtime);
  }

  /**
   * Queries quality of service (QoS) rules that contain 5-tuples.
   * 
   * @param request - DescribeQosPoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeQosPoliciesResponse
   */
  async describeQosPoliciesWithOptions(request: $_model.DescribeQosPoliciesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeQosPoliciesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
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

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.qosId)) {
      query["QosId"] = request.qosId;
    }

    if (!$dara.isNull(request.qosPolicyId)) {
      query["QosPolicyId"] = request.qosPolicyId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeQosPolicies",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeQosPoliciesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeQosPoliciesResponse({}));
  }

  /**
   * Queries quality of service (QoS) rules that contain 5-tuples.
   * 
   * @param request - DescribeQosPoliciesRequest
   * @returns DescribeQosPoliciesResponse
   */
  async describeQosPolicies(request: $_model.DescribeQosPoliciesRequest): Promise<$_model.DescribeQosPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeQosPoliciesWithOptions(request, runtime);
  }

  /**
   * Queries quality of service (QoS) policies in a specified region.
   * 
   * @param request - DescribeQosesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeQosesResponse
   */
  async describeQosesWithOptions(request: $_model.DescribeQosesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeQosesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
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

    if (!$dara.isNull(request.qosIds)) {
      query["QosIds"] = request.qosIds;
    }

    if (!$dara.isNull(request.qosName)) {
      query["QosName"] = request.qosName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeQoses",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeQosesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeQosesResponse({}));
  }

  /**
   * Queries quality of service (QoS) policies in a specified region.
   * 
   * @param request - DescribeQosesRequest
   * @returns DescribeQosesResponse
   */
  async describeQoses(request: $_model.DescribeQosesRequest): Promise<$_model.DescribeQosesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeQosesWithOptions(request, runtime);
  }

  /**
   * Queries available regions.
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

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2018-03-13",
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
   * Queries available regions.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: $_model.DescribeRegionsRequest): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Queries route advertisement policies.
   * 
   * @param request - DescribeRouteDistributionStrategiesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRouteDistributionStrategiesResponse
   */
  async describeRouteDistributionStrategiesWithOptions(request: $_model.DescribeRouteDistributionStrategiesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRouteDistributionStrategiesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRouteDistributionStrategies",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRouteDistributionStrategiesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRouteDistributionStrategiesResponse({}));
  }

  /**
   * Queries route advertisement policies.
   * 
   * @param request - DescribeRouteDistributionStrategiesRequest
   * @returns DescribeRouteDistributionStrategiesResponse
   */
  async describeRouteDistributionStrategies(request: $_model.DescribeRouteDistributionStrategiesRequest): Promise<$_model.DescribeRouteDistributionStrategiesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRouteDistributionStrategiesWithOptions(request, runtime);
  }

  /**
   * Queries a Smart Access Gateway (SAG) device.
   * 
   * @param request - DescribeSAGDeviceInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSAGDeviceInfoResponse
   */
  async describeSAGDeviceInfoWithOptions(request: $_model.DescribeSAGDeviceInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSAGDeviceInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSAGDeviceInfo",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSAGDeviceInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSAGDeviceInfoResponse({}));
  }

  /**
   * Queries a Smart Access Gateway (SAG) device.
   * 
   * @param request - DescribeSAGDeviceInfoRequest
   * @returns DescribeSAGDeviceInfoResponse
   */
  async describeSAGDeviceInfo(request: $_model.DescribeSAGDeviceInfoRequest): Promise<$_model.DescribeSAGDeviceInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSAGDeviceInfoWithOptions(request, runtime);
  }

  /**
   * Queries the DNS servers used by a Smart Access Gateway (SAG) device.
   * 
   * @param request - DescribeSagCurrentDnsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSagCurrentDnsResponse
   */
  async describeSagCurrentDnsWithOptions(request: $_model.DescribeSagCurrentDnsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSagCurrentDnsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSagCurrentDns",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSagCurrentDnsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSagCurrentDnsResponse({}));
  }

  /**
   * Queries the DNS servers used by a Smart Access Gateway (SAG) device.
   * 
   * @param request - DescribeSagCurrentDnsRequest
   * @returns DescribeSagCurrentDnsResponse
   */
  async describeSagCurrentDns(request: $_model.DescribeSagCurrentDnsRequest): Promise<$_model.DescribeSagCurrentDnsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSagCurrentDnsWithOptions(request, runtime);
  }

  /**
   * You can call this operation to query the top 10 Smart Access Gateway (SAG) instances that have the highest packet loss rates in a specific region.
   * 
   * @param request - DescribeSagDropTopNRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSagDropTopNResponse
   */
  async describeSagDropTopNWithOptions(request: $_model.DescribeSagDropTopNRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSagDropTopNResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.size)) {
      query["Size"] = request.size;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSagDropTopN",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSagDropTopNResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSagDropTopNResponse({}));
  }

  /**
   * You can call this operation to query the top 10 Smart Access Gateway (SAG) instances that have the highest packet loss rates in a specific region.
   * 
   * @param request - DescribeSagDropTopNRequest
   * @returns DescribeSagDropTopNResponse
   */
  async describeSagDropTopN(request: $_model.DescribeSagDropTopNRequest): Promise<$_model.DescribeSagDropTopNResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSagDropTopNWithOptions(request, runtime);
  }

  /**
   * Queries sub-interfaces added to an Express Connect circuit port.
   * 
   * @param request - DescribeSagExpressConnectInterfaceListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSagExpressConnectInterfaceListResponse
   */
  async describeSagExpressConnectInterfaceListWithOptions(request: $_model.DescribeSagExpressConnectInterfaceListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSagExpressConnectInterfaceListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.portName)) {
      query["PortName"] = request.portName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSagExpressConnectInterfaceList",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSagExpressConnectInterfaceListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSagExpressConnectInterfaceListResponse({}));
  }

  /**
   * Queries sub-interfaces added to an Express Connect circuit port.
   * 
   * @param request - DescribeSagExpressConnectInterfaceListRequest
   * @returns DescribeSagExpressConnectInterfaceListResponse
   */
  async describeSagExpressConnectInterfaceList(request: $_model.DescribeSagExpressConnectInterfaceListRequest): Promise<$_model.DescribeSagExpressConnectInterfaceListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSagExpressConnectInterfaceListWithOptions(request, runtime);
  }

  /**
   * Queries the global routing protocol.
   * 
   * @param request - DescribeSagGlobalRouteProtocolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSagGlobalRouteProtocolResponse
   */
  async describeSagGlobalRouteProtocolWithOptions(request: $_model.DescribeSagGlobalRouteProtocolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSagGlobalRouteProtocolResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSagGlobalRouteProtocol",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSagGlobalRouteProtocolResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSagGlobalRouteProtocolResponse({}));
  }

  /**
   * Queries the global routing protocol.
   * 
   * @param request - DescribeSagGlobalRouteProtocolRequest
   * @returns DescribeSagGlobalRouteProtocolResponse
   */
  async describeSagGlobalRouteProtocol(request: $_model.DescribeSagGlobalRouteProtocolRequest): Promise<$_model.DescribeSagGlobalRouteProtocolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSagGlobalRouteProtocolWithOptions(request, runtime);
  }

  /**
   * You can call this operation to query the high availability (HA) configuration of a Smart Access Gateway (SAG) instance.
   * 
   * @param request - DescribeSagHaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSagHaResponse
   */
  async describeSagHaWithOptions(request: $_model.DescribeSagHaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSagHaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSagHa",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSagHaResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSagHaResponse({}));
  }

  /**
   * You can call this operation to query the high availability (HA) configuration of a Smart Access Gateway (SAG) instance.
   * 
   * @param request - DescribeSagHaRequest
   * @returns DescribeSagHaResponse
   */
  async describeSagHa(request: $_model.DescribeSagHaRequest): Promise<$_model.DescribeSagHaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSagHaWithOptions(request, runtime);
  }

  /**
   * Queries the LAN port settings of a Smart Access Gateway (SAG) device.
   * 
   * @param request - DescribeSagLanListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSagLanListResponse
   */
  async describeSagLanListWithOptions(request: $_model.DescribeSagLanListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSagLanListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSagLanList",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSagLanListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSagLanListResponse({}));
  }

  /**
   * Queries the LAN port settings of a Smart Access Gateway (SAG) device.
   * 
   * @param request - DescribeSagLanListRequest
   * @returns DescribeSagLanListResponse
   */
  async describeSagLanList(request: $_model.DescribeSagLanListRequest): Promise<$_model.DescribeSagLanListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSagLanListWithOptions(request, runtime);
  }

  /**
   * Queries the management port settings of a Smart Access Gateway (SAG) device.
   * 
   * @param request - DescribeSagManagementPortRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSagManagementPortResponse
   */
  async describeSagManagementPortWithOptions(request: $_model.DescribeSagManagementPortRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSagManagementPortResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSagManagementPort",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSagManagementPortResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSagManagementPortResponse({}));
  }

  /**
   * Queries the management port settings of a Smart Access Gateway (SAG) device.
   * 
   * @param request - DescribeSagManagementPortRequest
   * @returns DescribeSagManagementPortResponse
   */
  async describeSagManagementPort(request: $_model.DescribeSagManagementPortRequest): Promise<$_model.DescribeSagManagementPortResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSagManagementPortWithOptions(request, runtime);
  }

  /**
   * Queries the number of clients connected to Alibaba Cloud through a Smart Access Gateway (SAG) app instance.
   * 
   * @param request - DescribeSagOnlineClientStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSagOnlineClientStatisticsResponse
   */
  async describeSagOnlineClientStatisticsWithOptions(request: $_model.DescribeSagOnlineClientStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSagOnlineClientStatisticsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGIds)) {
      query["SmartAGIds"] = request.smartAGIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSagOnlineClientStatistics",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSagOnlineClientStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSagOnlineClientStatisticsResponse({}));
  }

  /**
   * Queries the number of clients connected to Alibaba Cloud through a Smart Access Gateway (SAG) app instance.
   * 
   * @param request - DescribeSagOnlineClientStatisticsRequest
   * @returns DescribeSagOnlineClientStatisticsResponse
   */
  async describeSagOnlineClientStatistics(request: $_model.DescribeSagOnlineClientStatisticsRequest): Promise<$_model.DescribeSagOnlineClientStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSagOnlineClientStatisticsWithOptions(request, runtime);
  }

  /**
   * You can call this operation to query the information of a physical port.
   * 
   * @param request - DescribeSagPortListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSagPortListResponse
   */
  async describeSagPortListWithOptions(request: $_model.DescribeSagPortListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSagPortListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSagPortList",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSagPortListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSagPortListResponse({}));
  }

  /**
   * You can call this operation to query the information of a physical port.
   * 
   * @param request - DescribeSagPortListRequest
   * @returns DescribeSagPortListResponse
   */
  async describeSagPortList(request: $_model.DescribeSagPortListRequest): Promise<$_model.DescribeSagPortListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSagPortListWithOptions(request, runtime);
  }

  /**
   * Queries the ports for which the specified routing protocol is enabled.
   * 
   * @param request - DescribeSagPortRouteProtocolListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSagPortRouteProtocolListResponse
   */
  async describeSagPortRouteProtocolListWithOptions(request: $_model.DescribeSagPortRouteProtocolListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSagPortRouteProtocolListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSagPortRouteProtocolList",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSagPortRouteProtocolListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSagPortRouteProtocolListResponse({}));
  }

  /**
   * Queries the ports for which the specified routing protocol is enabled.
   * 
   * @param request - DescribeSagPortRouteProtocolListRequest
   * @returns DescribeSagPortRouteProtocolListResponse
   */
  async describeSagPortRouteProtocolList(request: $_model.DescribeSagPortRouteProtocolListRequest): Promise<$_model.DescribeSagPortRouteProtocolListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSagPortRouteProtocolListWithOptions(request, runtime);
  }

  /**
   * Queries remote logon information about a Smart Access Gateway (SAG) device.
   * 
   * @param request - DescribeSagRemoteAccessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSagRemoteAccessResponse
   */
  async describeSagRemoteAccessWithOptions(request: $_model.DescribeSagRemoteAccessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSagRemoteAccessResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.serialNumber)) {
      query["SerialNumber"] = request.serialNumber;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSagRemoteAccess",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSagRemoteAccessResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSagRemoteAccessResponse({}));
  }

  /**
   * Queries remote logon information about a Smart Access Gateway (SAG) device.
   * 
   * @param request - DescribeSagRemoteAccessRequest
   * @returns DescribeSagRemoteAccessResponse
   */
  async describeSagRemoteAccess(request: $_model.DescribeSagRemoteAccessRequest): Promise<$_model.DescribeSagRemoteAccessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSagRemoteAccessWithOptions(request, runtime);
  }

  /**
   * Queries the routes of a Smart Access Gateway (SAG) instance.
   * 
   * @param request - DescribeSagRouteListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSagRouteListResponse
   */
  async describeSagRouteListWithOptions(request: $_model.DescribeSagRouteListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSagRouteListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSagRouteList",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSagRouteListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSagRouteListResponse({}));
  }

  /**
   * Queries the routes of a Smart Access Gateway (SAG) instance.
   * 
   * @param request - DescribeSagRouteListRequest
   * @returns DescribeSagRouteListResponse
   */
  async describeSagRouteList(request: $_model.DescribeSagRouteListRequest): Promise<$_model.DescribeSagRouteListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSagRouteListWithOptions(request, runtime);
  }

  /**
   * Queries the configurations of Border Gateway Protocol (BGP) dynamic routing.
   * 
   * @param request - DescribeSagRouteProtocolBgpRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSagRouteProtocolBgpResponse
   */
  async describeSagRouteProtocolBgpWithOptions(request: $_model.DescribeSagRouteProtocolBgpRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSagRouteProtocolBgpResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSagRouteProtocolBgp",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSagRouteProtocolBgpResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSagRouteProtocolBgpResponse({}));
  }

  /**
   * Queries the configurations of Border Gateway Protocol (BGP) dynamic routing.
   * 
   * @param request - DescribeSagRouteProtocolBgpRequest
   * @returns DescribeSagRouteProtocolBgpResponse
   */
  async describeSagRouteProtocolBgp(request: $_model.DescribeSagRouteProtocolBgpRequest): Promise<$_model.DescribeSagRouteProtocolBgpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSagRouteProtocolBgpWithOptions(request, runtime);
  }

  /**
   * Queries the OSPF settings of a Smart Access Gateway (SAG) instance.
   * 
   * @param request - DescribeSagRouteProtocolOspfRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSagRouteProtocolOspfResponse
   */
  async describeSagRouteProtocolOspfWithOptions(request: $_model.DescribeSagRouteProtocolOspfRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSagRouteProtocolOspfResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSagRouteProtocolOspf",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSagRouteProtocolOspfResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSagRouteProtocolOspfResponse({}));
  }

  /**
   * Queries the OSPF settings of a Smart Access Gateway (SAG) instance.
   * 
   * @param request - DescribeSagRouteProtocolOspfRequest
   * @returns DescribeSagRouteProtocolOspfResponse
   */
  async describeSagRouteProtocolOspf(request: $_model.DescribeSagRouteProtocolOspfRequest): Promise<$_model.DescribeSagRouteProtocolOspfResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSagRouteProtocolOspfWithOptions(request, runtime);
  }

  /**
   * Queries the static routes of a Smart Access Gateway (SAG) instance.
   * 
   * @param request - DescribeSagStaticRouteListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSagStaticRouteListResponse
   */
  async describeSagStaticRouteListWithOptions(request: $_model.DescribeSagStaticRouteListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSagStaticRouteListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSagStaticRouteList",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSagStaticRouteListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSagStaticRouteListResponse({}));
  }

  /**
   * Queries the static routes of a Smart Access Gateway (SAG) instance.
   * 
   * @param request - DescribeSagStaticRouteListRequest
   * @returns DescribeSagStaticRouteListResponse
   */
  async describeSagStaticRouteList(request: $_model.DescribeSagStaticRouteListRequest): Promise<$_model.DescribeSagStaticRouteListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSagStaticRouteListWithOptions(request, runtime);
  }

  /**
   * You can call this operation to query the top 10 Smart Access Gateway (SAG) instances that have the highest data transfer rates in a specific region.
   * 
   * @param request - DescribeSagTrafficTopNRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSagTrafficTopNResponse
   */
  async describeSagTrafficTopNWithOptions(request: $_model.DescribeSagTrafficTopNRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSagTrafficTopNResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.size)) {
      query["Size"] = request.size;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSagTrafficTopN",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSagTrafficTopNResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSagTrafficTopNResponse({}));
  }

  /**
   * You can call this operation to query the top 10 Smart Access Gateway (SAG) instances that have the highest data transfer rates in a specific region.
   * 
   * @param request - DescribeSagTrafficTopNRequest
   * @returns DescribeSagTrafficTopNResponse
   */
  async describeSagTrafficTopN(request: $_model.DescribeSagTrafficTopNRequest): Promise<$_model.DescribeSagTrafficTopNResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSagTrafficTopNWithOptions(request, runtime);
  }

  /**
   * Queries the DNS servers used by a Smart Access Gateway (SAG) instance.
   * 
   * @param request - DescribeSagUserDnsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSagUserDnsResponse
   */
  async describeSagUserDnsWithOptions(request: $_model.DescribeSagUserDnsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSagUserDnsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSagUserDns",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSagUserDnsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSagUserDnsResponse({}));
  }

  /**
   * Queries the DNS servers used by a Smart Access Gateway (SAG) instance.
   * 
   * @param request - DescribeSagUserDnsRequest
   * @returns DescribeSagUserDnsResponse
   */
  async describeSagUserDns(request: $_model.DescribeSagUserDnsRequest): Promise<$_model.DescribeSagUserDnsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSagUserDnsWithOptions(request, runtime);
  }

  /**
   * Queries whether a specified virtual border router (VBR) is associated with a Smart Access Gateway (SAG) instance.
   * 
   * @param request - DescribeSagVbrRelationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSagVbrRelationsResponse
   */
  async describeSagVbrRelationsWithOptions(request: $_model.DescribeSagVbrRelationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSagVbrRelationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.vbrInstanceIds)) {
      query["VbrInstanceIds"] = request.vbrInstanceIds;
    }

    if (!$dara.isNull(request.vbrRegionId)) {
      query["VbrRegionId"] = request.vbrRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSagVbrRelations",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSagVbrRelationsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSagVbrRelationsResponse({}));
  }

  /**
   * Queries whether a specified virtual border router (VBR) is associated with a Smart Access Gateway (SAG) instance.
   * 
   * @param request - DescribeSagVbrRelationsRequest
   * @returns DescribeSagVbrRelationsResponse
   */
  async describeSagVbrRelations(request: $_model.DescribeSagVbrRelationsRequest): Promise<$_model.DescribeSagVbrRelationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSagVbrRelationsWithOptions(request, runtime);
  }

  /**
   * Queries the information about the 4G subscriber identity module (SIM) card used by the WAN port of a Smart Access Gateway (SAG) device.
   * 
   * @param request - DescribeSagWan4GRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSagWan4GResponse
   */
  async describeSagWan4GWithOptions(request: $_model.DescribeSagWan4GRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSagWan4GResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSagWan4G",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSagWan4GResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSagWan4GResponse({}));
  }

  /**
   * Queries the information about the 4G subscriber identity module (SIM) card used by the WAN port of a Smart Access Gateway (SAG) device.
   * 
   * @param request - DescribeSagWan4GRequest
   * @returns DescribeSagWan4GResponse
   */
  async describeSagWan4G(request: $_model.DescribeSagWan4GRequest): Promise<$_model.DescribeSagWan4GResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSagWan4GWithOptions(request, runtime);
  }

  /**
   * Queries the WAN port settings of a Smart Access Gateway (SAG) device.
   * 
   * @param request - DescribeSagWanListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSagWanListResponse
   */
  async describeSagWanListWithOptions(request: $_model.DescribeSagWanListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSagWanListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSagWanList",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSagWanListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSagWanListResponse({}));
  }

  /**
   * Queries the WAN port settings of a Smart Access Gateway (SAG) device.
   * 
   * @param request - DescribeSagWanListRequest
   * @returns DescribeSagWanListResponse
   */
  async describeSagWanList(request: $_model.DescribeSagWanListRequest): Promise<$_model.DescribeSagWanListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSagWanListWithOptions(request, runtime);
  }

  /**
   * Queries the SNAT settings of the WAN port of a Smart Access Gateway (SAG) device.
   * 
   * @param request - DescribeSagWanSnatRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSagWanSnatResponse
   */
  async describeSagWanSnatWithOptions(request: $_model.DescribeSagWanSnatRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSagWanSnatResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSagWanSnat",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSagWanSnatResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSagWanSnatResponse({}));
  }

  /**
   * Queries the SNAT settings of the WAN port of a Smart Access Gateway (SAG) device.
   * 
   * @param request - DescribeSagWanSnatRequest
   * @returns DescribeSagWanSnatResponse
   */
  async describeSagWanSnat(request: $_model.DescribeSagWanSnatRequest): Promise<$_model.DescribeSagWanSnatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSagWanSnatWithOptions(request, runtime);
  }

  /**
   * You can call this operation to query the Wi-Fi settings of a Smart Access Gateway (SAG) instance.
   * 
   * @param request - DescribeSagWifiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSagWifiResponse
   */
  async describeSagWifiWithOptions(request: $_model.DescribeSagWifiRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSagWifiResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSagWifi",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSagWifiResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSagWifiResponse({}));
  }

  /**
   * You can call this operation to query the Wi-Fi settings of a Smart Access Gateway (SAG) instance.
   * 
   * @param request - DescribeSagWifiRequest
   * @returns DescribeSagWifiResponse
   */
  async describeSagWifi(request: $_model.DescribeSagWifiRequest): Promise<$_model.DescribeSagWifiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSagWifiWithOptions(request, runtime);
  }

  /**
   * Queries the information about a Smart Access Gateway (SAG) instance.
   * 
   * @param request - DescribeSmartAccessGatewayAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSmartAccessGatewayAttributeResponse
   */
  async describeSmartAccessGatewayAttributeWithOptions(request: $_model.DescribeSmartAccessGatewayAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSmartAccessGatewayAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSmartAccessGatewayAttribute",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSmartAccessGatewayAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSmartAccessGatewayAttributeResponse({}));
  }

  /**
   * Queries the information about a Smart Access Gateway (SAG) instance.
   * 
   * @param request - DescribeSmartAccessGatewayAttributeRequest
   * @returns DescribeSmartAccessGatewayAttributeResponse
   */
  async describeSmartAccessGatewayAttribute(request: $_model.DescribeSmartAccessGatewayAttributeRequest): Promise<$_model.DescribeSmartAccessGatewayAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSmartAccessGatewayAttributeWithOptions(request, runtime);
  }

  /**
   * Queries client accounts added to a Smart Access Gateway (SAG) app instance.
   * 
   * @param request - DescribeSmartAccessGatewayClientUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSmartAccessGatewayClientUsersResponse
   */
  async describeSmartAccessGatewayClientUsersWithOptions(request: $_model.DescribeSmartAccessGatewayClientUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSmartAccessGatewayClientUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.userMail)) {
      query["UserMail"] = request.userMail;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSmartAccessGatewayClientUsers",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSmartAccessGatewayClientUsersResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSmartAccessGatewayClientUsersResponse({}));
  }

  /**
   * Queries client accounts added to a Smart Access Gateway (SAG) app instance.
   * 
   * @param request - DescribeSmartAccessGatewayClientUsersRequest
   * @returns DescribeSmartAccessGatewayClientUsersResponse
   */
  async describeSmartAccessGatewayClientUsers(request: $_model.DescribeSmartAccessGatewayClientUsersRequest): Promise<$_model.DescribeSmartAccessGatewayClientUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSmartAccessGatewayClientUsersWithOptions(request, runtime);
  }

  /**
   * Queries the high availability (HA) settings of a Smart Access Gateway (SAG) instance.
   * 
   * @param request - DescribeSmartAccessGatewayHaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSmartAccessGatewayHaResponse
   */
  async describeSmartAccessGatewayHaWithOptions(request: $_model.DescribeSmartAccessGatewayHaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSmartAccessGatewayHaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSmartAccessGatewayHa",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSmartAccessGatewayHaResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSmartAccessGatewayHaResponse({}));
  }

  /**
   * Queries the high availability (HA) settings of a Smart Access Gateway (SAG) instance.
   * 
   * @param request - DescribeSmartAccessGatewayHaRequest
   * @returns DescribeSmartAccessGatewayHaResponse
   */
  async describeSmartAccessGatewayHa(request: $_model.DescribeSmartAccessGatewayHaRequest): Promise<$_model.DescribeSmartAccessGatewayHaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSmartAccessGatewayHaWithOptions(request, runtime);
  }

  /**
   * Queries the version of a Smart Access Gateway (SAG) device.
   * 
   * @param request - DescribeSmartAccessGatewayVersionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSmartAccessGatewayVersionsResponse
   */
  async describeSmartAccessGatewayVersionsWithOptions(request: $_model.DescribeSmartAccessGatewayVersionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSmartAccessGatewayVersionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    if (!$dara.isNull(request.versionType)) {
      query["VersionType"] = request.versionType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSmartAccessGatewayVersions",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSmartAccessGatewayVersionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSmartAccessGatewayVersionsResponse({}));
  }

  /**
   * Queries the version of a Smart Access Gateway (SAG) device.
   * 
   * @param request - DescribeSmartAccessGatewayVersionsRequest
   * @returns DescribeSmartAccessGatewayVersionsResponse
   */
  async describeSmartAccessGatewayVersions(request: $_model.DescribeSmartAccessGatewayVersionsRequest): Promise<$_model.DescribeSmartAccessGatewayVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSmartAccessGatewayVersionsWithOptions(request, runtime);
  }

  /**
   * Queries Smart Access Gateway (SAG) instances.
   * 
   * @param request - DescribeSmartAccessGatewaysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSmartAccessGatewaysResponse
   */
  async describeSmartAccessGatewaysWithOptions(request: $_model.DescribeSmartAccessGatewaysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSmartAccessGatewaysResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclIds)) {
      query["AclIds"] = request.aclIds;
    }

    if (!$dara.isNull(request.associatedCcnId)) {
      query["AssociatedCcnId"] = request.associatedCcnId;
    }

    if (!$dara.isNull(request.associatedCcnName)) {
      query["AssociatedCcnName"] = request.associatedCcnName;
    }

    if (!$dara.isNull(request.businessState)) {
      query["BusinessState"] = request.businessState;
    }

    if (!$dara.isNull(request.canAssociateQos)) {
      query["CanAssociateQos"] = request.canAssociateQos;
    }

    if (!$dara.isNull(request.hardwareType)) {
      query["HardwareType"] = request.hardwareType;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.serialNumber)) {
      query["SerialNumber"] = request.serialNumber;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.smartAGIds)) {
      query["SmartAGIds"] = request.smartAGIds;
    }

    if (!$dara.isNull(request.softwareVersion)) {
      query["SoftwareVersion"] = request.softwareVersion;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.unboundAclIds)) {
      query["UnboundAclIds"] = request.unboundAclIds;
    }

    if (!$dara.isNull(request.versionComparator)) {
      query["VersionComparator"] = request.versionComparator;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSmartAccessGateways",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSmartAccessGatewaysResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSmartAccessGatewaysResponse({}));
  }

  /**
   * Queries Smart Access Gateway (SAG) instances.
   * 
   * @param request - DescribeSmartAccessGatewaysRequest
   * @returns DescribeSmartAccessGatewaysResponse
   */
  async describeSmartAccessGateways(request: $_model.DescribeSmartAccessGatewaysRequest): Promise<$_model.DescribeSmartAccessGatewaysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSmartAccessGatewaysWithOptions(request, runtime);
  }

  /**
   * You can call this operation to query source network address translation (SNAT) entries associated with a Smart Access Gateway (SAG) instance.
   * 
   * @param request - DescribeSnatEntriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSnatEntriesResponse
   */
  async describeSnatEntriesWithOptions(request: $_model.DescribeSnatEntriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSnatEntriesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSnatEntries",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSnatEntriesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSnatEntriesResponse({}));
  }

  /**
   * You can call this operation to query source network address translation (SNAT) entries associated with a Smart Access Gateway (SAG) instance.
   * 
   * @param request - DescribeSnatEntriesRequest
   * @returns DescribeSnatEntriesResponse
   */
  async describeSnatEntries(request: $_model.DescribeSnatEntriesRequest): Promise<$_model.DescribeSnatEntriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSnatEntriesWithOptions(request, runtime);
  }

  /**
   * Queries Smart Access Gateway (SAG) instances that are not associated with a flow log in a specific region.
   * 
   * @param request - DescribeUnbindFlowLogSagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUnbindFlowLogSagsResponse
   */
  async describeUnbindFlowLogSagsWithOptions(request: $_model.DescribeUnbindFlowLogSagsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUnbindFlowLogSagsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUnbindFlowLogSags",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUnbindFlowLogSagsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUnbindFlowLogSagsResponse({}));
  }

  /**
   * Queries Smart Access Gateway (SAG) instances that are not associated with a flow log in a specific region.
   * 
   * @param request - DescribeUnbindFlowLogSagsRequest
   * @returns DescribeUnbindFlowLogSagsResponse
   */
  async describeUnbindFlowLogSags(request: $_model.DescribeUnbindFlowLogSagsRequest): Promise<$_model.DescribeUnbindFlowLogSagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUnbindFlowLogSagsWithOptions(request, runtime);
  }

  /**
   * Queries the amount of data transfer generated by each client account of a Smart Access Gateway (SAG) app instance.
   * 
   * @param request - DescribeUserFlowStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserFlowStatisticsResponse
   */
  async describeUserFlowStatisticsWithOptions(request: $_model.DescribeUserFlowStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserFlowStatisticsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.statisticsDate)) {
      query["StatisticsDate"] = request.statisticsDate;
    }

    if (!$dara.isNull(request.userNames)) {
      query["UserNames"] = request.userNames;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUserFlowStatistics",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUserFlowStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUserFlowStatisticsResponse({}));
  }

  /**
   * Queries the amount of data transfer generated by each client account of a Smart Access Gateway (SAG) app instance.
   * 
   * @param request - DescribeUserFlowStatisticsRequest
   * @returns DescribeUserFlowStatisticsResponse
   */
  async describeUserFlowStatistics(request: $_model.DescribeUserFlowStatisticsRequest): Promise<$_model.DescribeUserFlowStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserFlowStatisticsWithOptions(request, runtime);
  }

  /**
   * Queries the number of clients that are connected to Alibaba Cloud through a specific Smart Access Gateway (SAG) app instance.
   * 
   * @param request - DescribeUserOnlineClientStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserOnlineClientStatisticsResponse
   */
  async describeUserOnlineClientStatisticsWithOptions(request: $_model.DescribeUserOnlineClientStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserOnlineClientStatisticsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.userNames)) {
      query["UserNames"] = request.userNames;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUserOnlineClientStatistics",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUserOnlineClientStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUserOnlineClientStatisticsResponse({}));
  }

  /**
   * Queries the number of clients that are connected to Alibaba Cloud through a specific Smart Access Gateway (SAG) app instance.
   * 
   * @param request - DescribeUserOnlineClientStatisticsRequest
   * @returns DescribeUserOnlineClientStatisticsResponse
   */
  async describeUserOnlineClientStatistics(request: $_model.DescribeUserOnlineClientStatisticsRequest): Promise<$_model.DescribeUserOnlineClientStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserOnlineClientStatisticsWithOptions(request, runtime);
  }

  /**
   * You can call this operation to query the connection information about a client based on the ID of the Smart Access Gateway (SAG) APP instance and username of the client account.
   * 
   * @param request - DescribeUserOnlineClientsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserOnlineClientsResponse
   */
  async describeUserOnlineClientsWithOptions(request: $_model.DescribeUserOnlineClientsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserOnlineClientsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUserOnlineClients",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUserOnlineClientsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUserOnlineClientsResponse({}));
  }

  /**
   * You can call this operation to query the connection information about a client based on the ID of the Smart Access Gateway (SAG) APP instance and username of the client account.
   * 
   * @param request - DescribeUserOnlineClientsRequest
   * @returns DescribeUserOnlineClientsResponse
   */
  async describeUserOnlineClients(request: $_model.DescribeUserOnlineClientsRequest): Promise<$_model.DescribeUserOnlineClientsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserOnlineClientsWithOptions(request, runtime);
  }

  /**
   * Enables diagnostics for Smart Access Gateway (SAG) devices
   * 
   * @param request - DiagnoseSmartAccessGatewayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DiagnoseSmartAccessGatewayResponse
   */
  async diagnoseSmartAccessGatewayWithOptions(request: $_model.DiagnoseSmartAccessGatewayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DiagnoseSmartAccessGatewayResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DiagnoseSmartAccessGateway",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DiagnoseSmartAccessGatewayResponse>(await this.callApi(params, req, runtime), new $_model.DiagnoseSmartAccessGatewayResponse({}));
  }

  /**
   * Enables diagnostics for Smart Access Gateway (SAG) devices
   * 
   * @param request - DiagnoseSmartAccessGatewayRequest
   * @returns DiagnoseSmartAccessGatewayResponse
   */
  async diagnoseSmartAccessGateway(request: $_model.DiagnoseSmartAccessGatewayRequest): Promise<$_model.DiagnoseSmartAccessGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.diagnoseSmartAccessGatewayWithOptions(request, runtime);
  }

  /**
   * Disables the deep packet inspection (DPI) feature for a Smart Access Gateway (SAG) instance.
   * 
   * @param request - DisableSmartAGDpiMonitorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableSmartAGDpiMonitorResponse
   */
  async disableSmartAGDpiMonitorWithOptions(request: $_model.DisableSmartAGDpiMonitorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableSmartAGDpiMonitorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableSmartAGDpiMonitor",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableSmartAGDpiMonitorResponse>(await this.callApi(params, req, runtime), new $_model.DisableSmartAGDpiMonitorResponse({}));
  }

  /**
   * Disables the deep packet inspection (DPI) feature for a Smart Access Gateway (SAG) instance.
   * 
   * @param request - DisableSmartAGDpiMonitorRequest
   * @returns DisableSmartAGDpiMonitorResponse
   */
  async disableSmartAGDpiMonitor(request: $_model.DisableSmartAGDpiMonitorRequest): Promise<$_model.DisableSmartAGDpiMonitorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableSmartAGDpiMonitorWithOptions(request, runtime);
  }

  /**
   * Disables a client account of a Smart Access Gateway (SAG) app instance.
   * 
   * @param request - DisableSmartAccessGatewayUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableSmartAccessGatewayUserResponse
   */
  async disableSmartAccessGatewayUserWithOptions(request: $_model.DisableSmartAccessGatewayUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableSmartAccessGatewayUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableSmartAccessGatewayUser",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableSmartAccessGatewayUserResponse>(await this.callApi(params, req, runtime), new $_model.DisableSmartAccessGatewayUserResponse({}));
  }

  /**
   * Disables a client account of a Smart Access Gateway (SAG) app instance.
   * 
   * @param request - DisableSmartAccessGatewayUserRequest
   * @returns DisableSmartAccessGatewayUserResponse
   */
  async disableSmartAccessGatewayUser(request: $_model.DisableSmartAccessGatewayUserRequest): Promise<$_model.DisableSmartAccessGatewayUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableSmartAccessGatewayUserWithOptions(request, runtime);
  }

  /**
   * Disassociates an access control list (ACL) from a Smart Access Gateway (SAG) instance.
   * 
   * @param request - DisassociateACLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisassociateACLResponse
   */
  async disassociateACLWithOptions(request: $_model.DisassociateACLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisassociateACLResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisassociateACL",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisassociateACLResponse>(await this.callApi(params, req, runtime), new $_model.DisassociateACLResponse({}));
  }

  /**
   * Disassociates an access control list (ACL) from a Smart Access Gateway (SAG) instance.
   * 
   * @param request - DisassociateACLRequest
   * @returns DisassociateACLResponse
   */
  async disassociateACL(request: $_model.DisassociateACLRequest): Promise<$_model.DisassociateACLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disassociateACLWithOptions(request, runtime);
  }

  /**
   * Disassociates a Smart Access Gateway (SAG) instance from a flow log.
   * 
   * @param request - DisassociateFlowLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisassociateFlowLogResponse
   */
  async disassociateFlowLogWithOptions(request: $_model.DisassociateFlowLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisassociateFlowLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.flowLogId)) {
      query["FlowLogId"] = request.flowLogId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisassociateFlowLog",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisassociateFlowLogResponse>(await this.callApi(params, req, runtime), new $_model.DisassociateFlowLogResponse({}));
  }

  /**
   * Disassociates a Smart Access Gateway (SAG) instance from a flow log.
   * 
   * @param request - DisassociateFlowLogRequest
   * @returns DisassociateFlowLogResponse
   */
  async disassociateFlowLog(request: $_model.DisassociateFlowLogRequest): Promise<$_model.DisassociateFlowLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disassociateFlowLogWithOptions(request, runtime);
  }

  /**
   * Disassociates a Smart Access Gateway (SAG) instance from a Quality of Service (QoS) policy.
   * 
   * @param request - DisassociateQosRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisassociateQosResponse
   */
  async disassociateQosWithOptions(request: $_model.DisassociateQosRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisassociateQosResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.qosId)) {
      query["QosId"] = request.qosId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisassociateQos",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisassociateQosResponse>(await this.callApi(params, req, runtime), new $_model.DisassociateQosResponse({}));
  }

  /**
   * Disassociates a Smart Access Gateway (SAG) instance from a Quality of Service (QoS) policy.
   * 
   * @param request - DisassociateQosRequest
   * @returns DisassociateQosResponse
   */
  async disassociateQos(request: $_model.DisassociateQosRequest): Promise<$_model.DisassociateQosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disassociateQosWithOptions(request, runtime);
  }

  /**
   * Generates a diagnosis report for a Smart Access Gateway (SAG) device.
   * 
   * @param request - DiscribeSmartAccessGatewayDiagnosisReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DiscribeSmartAccessGatewayDiagnosisReportResponse
   */
  async discribeSmartAccessGatewayDiagnosisReportWithOptions(request: $_model.DiscribeSmartAccessGatewayDiagnosisReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DiscribeSmartAccessGatewayDiagnosisReportResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DiscribeSmartAccessGatewayDiagnosisReport",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DiscribeSmartAccessGatewayDiagnosisReportResponse>(await this.callApi(params, req, runtime), new $_model.DiscribeSmartAccessGatewayDiagnosisReportResponse({}));
  }

  /**
   * Generates a diagnosis report for a Smart Access Gateway (SAG) device.
   * 
   * @param request - DiscribeSmartAccessGatewayDiagnosisReportRequest
   * @returns DiscribeSmartAccessGatewayDiagnosisReportResponse
   */
  async discribeSmartAccessGatewayDiagnosisReport(request: $_model.DiscribeSmartAccessGatewayDiagnosisReportRequest): Promise<$_model.DiscribeSmartAccessGatewayDiagnosisReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.discribeSmartAccessGatewayDiagnosisReportWithOptions(request, runtime);
  }

  /**
   * Disassociates a Smart Access Gateway (SAG) instance from a bandwidth plan for application acceleration.
   * 
   * @remarks
   * When you call **DissociateSmartAGFromApplicationBandwidthPackage**, you can set the **SmartAGId** parameter to specify an SAG instance, or set the **SmartAGIdList** to specify multiple SAG instances.
   * 
   * @param request - DissociateSmartAGFromApplicationBandwidthPackageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DissociateSmartAGFromApplicationBandwidthPackageResponse
   */
  async dissociateSmartAGFromApplicationBandwidthPackageWithOptions(request: $_model.DissociateSmartAGFromApplicationBandwidthPackageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DissociateSmartAGFromApplicationBandwidthPackageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationBandwidthPackageId)) {
      query["ApplicationBandwidthPackageId"] = request.applicationBandwidthPackageId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.smartAGIdList)) {
      query["SmartAGIdList"] = request.smartAGIdList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DissociateSmartAGFromApplicationBandwidthPackage",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DissociateSmartAGFromApplicationBandwidthPackageResponse>(await this.callApi(params, req, runtime), new $_model.DissociateSmartAGFromApplicationBandwidthPackageResponse({}));
  }

  /**
   * Disassociates a Smart Access Gateway (SAG) instance from a bandwidth plan for application acceleration.
   * 
   * @remarks
   * When you call **DissociateSmartAGFromApplicationBandwidthPackage**, you can set the **SmartAGId** parameter to specify an SAG instance, or set the **SmartAGIdList** to specify multiple SAG instances.
   * 
   * @param request - DissociateSmartAGFromApplicationBandwidthPackageRequest
   * @returns DissociateSmartAGFromApplicationBandwidthPackageResponse
   */
  async dissociateSmartAGFromApplicationBandwidthPackage(request: $_model.DissociateSmartAGFromApplicationBandwidthPackageRequest): Promise<$_model.DissociateSmartAGFromApplicationBandwidthPackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dissociateSmartAGFromApplicationBandwidthPackageWithOptions(request, runtime);
  }

  /**
   * Downgrades the bandwidth of a Smart Access Gateway (SAG) instance.
   * 
   * @param request - DowngradeSmartAccessGatewayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DowngradeSmartAccessGatewayResponse
   */
  async downgradeSmartAccessGatewayWithOptions(request: $_model.DowngradeSmartAccessGatewayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DowngradeSmartAccessGatewayResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.bandWidthSpec)) {
      query["BandWidthSpec"] = request.bandWidthSpec;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DowngradeSmartAccessGateway",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DowngradeSmartAccessGatewayResponse>(await this.callApi(params, req, runtime), new $_model.DowngradeSmartAccessGatewayResponse({}));
  }

  /**
   * Downgrades the bandwidth of a Smart Access Gateway (SAG) instance.
   * 
   * @param request - DowngradeSmartAccessGatewayRequest
   * @returns DowngradeSmartAccessGatewayResponse
   */
  async downgradeSmartAccessGateway(request: $_model.DowngradeSmartAccessGatewayRequest): Promise<$_model.DowngradeSmartAccessGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.downgradeSmartAccessGatewayWithOptions(request, runtime);
  }

  /**
   * Decreases the quota of client accounts that can be connected to a Smart Access Gateway (SAG) app instance.
   * 
   * @param request - DowngradeSmartAccessGatewaySoftwareRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DowngradeSmartAccessGatewaySoftwareResponse
   */
  async downgradeSmartAccessGatewaySoftwareWithOptions(request: $_model.DowngradeSmartAccessGatewaySoftwareRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DowngradeSmartAccessGatewaySoftwareResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.dataPlan)) {
      query["DataPlan"] = request.dataPlan;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.userCount)) {
      query["UserCount"] = request.userCount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DowngradeSmartAccessGatewaySoftware",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DowngradeSmartAccessGatewaySoftwareResponse>(await this.callApi(params, req, runtime), new $_model.DowngradeSmartAccessGatewaySoftwareResponse({}));
  }

  /**
   * Decreases the quota of client accounts that can be connected to a Smart Access Gateway (SAG) app instance.
   * 
   * @param request - DowngradeSmartAccessGatewaySoftwareRequest
   * @returns DowngradeSmartAccessGatewaySoftwareResponse
   */
  async downgradeSmartAccessGatewaySoftware(request: $_model.DowngradeSmartAccessGatewaySoftwareRequest): Promise<$_model.DowngradeSmartAccessGatewaySoftwareResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.downgradeSmartAccessGatewaySoftwareWithOptions(request, runtime);
  }

  /**
   * Enables monitoring based on the deep packet inspection (DPI) feature for a Smart Access Gateway (SAG) instance.
   * 
   * @remarks
   *   The DPI feature is enabled for the SAG instance. For more information, see [UpdateSmartAGDpiAttribute](https://help.aliyun.com/document_detail/196146.html).
   * *   Log Service is activated. For more information, see [Quick Start](https://help.aliyun.com/document_detail/54604.html).
   * 
   * @param request - EnableSmartAGDpiMonitorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableSmartAGDpiMonitorResponse
   */
  async enableSmartAGDpiMonitorWithOptions(request: $_model.EnableSmartAGDpiMonitorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableSmartAGDpiMonitorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.slsLogStore)) {
      query["SlsLogStore"] = request.slsLogStore;
    }

    if (!$dara.isNull(request.slsProjectName)) {
      query["SlsProjectName"] = request.slsProjectName;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableSmartAGDpiMonitor",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableSmartAGDpiMonitorResponse>(await this.callApi(params, req, runtime), new $_model.EnableSmartAGDpiMonitorResponse({}));
  }

  /**
   * Enables monitoring based on the deep packet inspection (DPI) feature for a Smart Access Gateway (SAG) instance.
   * 
   * @remarks
   *   The DPI feature is enabled for the SAG instance. For more information, see [UpdateSmartAGDpiAttribute](https://help.aliyun.com/document_detail/196146.html).
   * *   Log Service is activated. For more information, see [Quick Start](https://help.aliyun.com/document_detail/54604.html).
   * 
   * @param request - EnableSmartAGDpiMonitorRequest
   * @returns EnableSmartAGDpiMonitorResponse
   */
  async enableSmartAGDpiMonitor(request: $_model.EnableSmartAGDpiMonitorRequest): Promise<$_model.EnableSmartAGDpiMonitorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableSmartAGDpiMonitorWithOptions(request, runtime);
  }

  /**
   * Activates a client account of a Smart Access Gateway (SAG) app instance.
   * 
   * @param request - EnableSmartAccessGatewayUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableSmartAccessGatewayUserResponse
   */
  async enableSmartAccessGatewayUserWithOptions(request: $_model.EnableSmartAccessGatewayUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableSmartAccessGatewayUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableSmartAccessGatewayUser",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableSmartAccessGatewayUserResponse>(await this.callApi(params, req, runtime), new $_model.EnableSmartAccessGatewayUserResponse({}));
  }

  /**
   * Activates a client account of a Smart Access Gateway (SAG) app instance.
   * 
   * @param request - EnableSmartAccessGatewayUserRequest
   * @returns EnableSmartAccessGatewayUserResponse
   */
  async enableSmartAccessGatewayUser(request: $_model.EnableSmartAccessGatewayUserRequest): Promise<$_model.EnableSmartAccessGatewayUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableSmartAccessGatewayUserWithOptions(request, runtime);
  }

  /**
   * Queries the configuration errors of the deep packet inspection (DPI) feature in an access control list (ACL).
   * 
   * @remarks
   *   An application-aware ACL is created. For more information, see [AddACLRule](https://help.aliyun.com/document_detail/114012.html).
   * *   The application-aware ACL is applied to a Smart Access Gateway (SAG) instance. For more information, see [AssociateACL](https://help.aliyun.com/document_detail/114009.html).
   * 
   * @param request - GetAclAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAclAttributeResponse
   */
  async getAclAttributeWithOptions(request: $_model.GetAclAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAclAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAclAttribute",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAclAttributeResponse>(await this.callApi(params, req, runtime), new $_model.GetAclAttributeResponse({}));
  }

  /**
   * Queries the configuration errors of the deep packet inspection (DPI) feature in an access control list (ACL).
   * 
   * @remarks
   *   An application-aware ACL is created. For more information, see [AddACLRule](https://help.aliyun.com/document_detail/114012.html).
   * *   The application-aware ACL is applied to a Smart Access Gateway (SAG) instance. For more information, see [AssociateACL](https://help.aliyun.com/document_detail/114009.html).
   * 
   * @param request - GetAclAttributeRequest
   * @returns GetAclAttributeResponse
   */
  async getAclAttribute(request: $_model.GetAclAttributeRequest): Promise<$_model.GetAclAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAclAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the status of the deep packet inspection (DPI) feature of a Smart Access Gateway (SAG) instance.
   * 
   * @param request - GetAdvancedMonitorStateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAdvancedMonitorStateResponse
   */
  async getAdvancedMonitorStateWithOptions(request: $_model.GetAdvancedMonitorStateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAdvancedMonitorStateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sagId)) {
      query["SagId"] = request.sagId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAdvancedMonitorState",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAdvancedMonitorStateResponse>(await this.callApi(params, req, runtime), new $_model.GetAdvancedMonitorStateResponse({}));
  }

  /**
   * Queries the status of the deep packet inspection (DPI) feature of a Smart Access Gateway (SAG) instance.
   * 
   * @param request - GetAdvancedMonitorStateRequest
   * @returns GetAdvancedMonitorStateResponse
   */
  async getAdvancedMonitorState(request: $_model.GetAdvancedMonitorStateRequest): Promise<$_model.GetAdvancedMonitorStateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAdvancedMonitorStateWithOptions(request, runtime);
  }

  /**
   * Queries the number of Cloud Connect Network (CCN) instances that can be created within the current account in a region.
   * 
   * @param request - GetCloudConnectNetworkUseLimitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCloudConnectNetworkUseLimitResponse
   */
  async getCloudConnectNetworkUseLimitWithOptions(request: $_model.GetCloudConnectNetworkUseLimitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCloudConnectNetworkUseLimitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCloudConnectNetworkUseLimit",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCloudConnectNetworkUseLimitResponse>(await this.callApi(params, req, runtime), new $_model.GetCloudConnectNetworkUseLimitResponse({}));
  }

  /**
   * Queries the number of Cloud Connect Network (CCN) instances that can be created within the current account in a region.
   * 
   * @param request - GetCloudConnectNetworkUseLimitRequest
   * @returns GetCloudConnectNetworkUseLimitResponse
   */
  async getCloudConnectNetworkUseLimit(request: $_model.GetCloudConnectNetworkUseLimitRequest): Promise<$_model.GetCloudConnectNetworkUseLimitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCloudConnectNetworkUseLimitWithOptions(request, runtime);
  }

  /**
   * Queries the attributes of a quality of service (QoS) policy.
   * 
   * @param request - GetQosAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQosAttributeResponse
   */
  async getQosAttributeWithOptions(request: $_model.GetQosAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetQosAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.qosId)) {
      query["QosId"] = request.qosId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQosAttribute",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetQosAttributeResponse>(await this.callApi(params, req, runtime), new $_model.GetQosAttributeResponse({}));
  }

  /**
   * Queries the attributes of a quality of service (QoS) policy.
   * 
   * @param request - GetQosAttributeRequest
   * @returns GetQosAttributeResponse
   */
  async getQosAttribute(request: $_model.GetQosAttributeRequest): Promise<$_model.GetQosAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQosAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the settings of the deep packet inspection (DPI) feature for a Smart Access Gateway (SAG) instance.
   * 
   * @param request - GetSmartAGDpiAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSmartAGDpiAttributeResponse
   */
  async getSmartAGDpiAttributeWithOptions(request: $_model.GetSmartAGDpiAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSmartAGDpiAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSmartAGDpiAttribute",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSmartAGDpiAttributeResponse>(await this.callApi(params, req, runtime), new $_model.GetSmartAGDpiAttributeResponse({}));
  }

  /**
   * Queries the settings of the deep packet inspection (DPI) feature for a Smart Access Gateway (SAG) instance.
   * 
   * @param request - GetSmartAGDpiAttributeRequest
   * @returns GetSmartAGDpiAttributeResponse
   */
  async getSmartAGDpiAttribute(request: $_model.GetSmartAGDpiAttributeRequest): Promise<$_model.GetSmartAGDpiAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSmartAGDpiAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the number of Smart Access Gateway (SAG) instances that you can purchase.
   * 
   * @param request - GetSmartAccessGatewayUseLimitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSmartAccessGatewayUseLimitResponse
   */
  async getSmartAccessGatewayUseLimitWithOptions(request: $_model.GetSmartAccessGatewayUseLimitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSmartAccessGatewayUseLimitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSmartAccessGatewayUseLimit",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSmartAccessGatewayUseLimitResponse>(await this.callApi(params, req, runtime), new $_model.GetSmartAccessGatewayUseLimitResponse({}));
  }

  /**
   * Queries the number of Smart Access Gateway (SAG) instances that you can purchase.
   * 
   * @param request - GetSmartAccessGatewayUseLimitRequest
   * @returns GetSmartAccessGatewayUseLimitResponse
   */
  async getSmartAccessGatewayUseLimit(request: $_model.GetSmartAccessGatewayUseLimitRequest): Promise<$_model.GetSmartAccessGatewayUseLimitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSmartAccessGatewayUseLimitWithOptions(request, runtime);
  }

  /**
   * Authorizes a Cloud Enterprise Network (CEN) instance to communicate with a Cloud Connect Network (CCN) instance that belongs to another Alibaba Cloud account.
   * 
   * @param request - GrantInstanceToCbnRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GrantInstanceToCbnResponse
   */
  async grantInstanceToCbnWithOptions(request: $_model.GrantInstanceToCbnRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GrantInstanceToCbnResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ccnInstanceId)) {
      query["CcnInstanceId"] = request.ccnInstanceId;
    }

    if (!$dara.isNull(request.cenInstanceId)) {
      query["CenInstanceId"] = request.cenInstanceId;
    }

    if (!$dara.isNull(request.cenUid)) {
      query["CenUid"] = request.cenUid;
    }

    if (!$dara.isNull(request.grantTrafficService)) {
      query["GrantTrafficService"] = request.grantTrafficService;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GrantInstanceToCbn",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GrantInstanceToCbnResponse>(await this.callApi(params, req, runtime), new $_model.GrantInstanceToCbnResponse({}));
  }

  /**
   * Authorizes a Cloud Enterprise Network (CEN) instance to communicate with a Cloud Connect Network (CCN) instance that belongs to another Alibaba Cloud account.
   * 
   * @param request - GrantInstanceToCbnRequest
   * @returns GrantInstanceToCbnResponse
   */
  async grantInstanceToCbn(request: $_model.GrantInstanceToCbnRequest): Promise<$_model.GrantInstanceToCbnResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.grantInstanceToCbnWithOptions(request, runtime);
  }

  /**
   * Authorizes a Smart Access Gateway (SAG) instance to communicate with a Cloud Connect Network (CCN) instance that belongs to another Alibaba Cloud account.
   * 
   * @param request - GrantSagInstanceToCcnRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GrantSagInstanceToCcnResponse
   */
  async grantSagInstanceToCcnWithOptions(request: $_model.GrantSagInstanceToCcnRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GrantSagInstanceToCcnResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ccnInstanceId)) {
      query["CcnInstanceId"] = request.ccnInstanceId;
    }

    if (!$dara.isNull(request.ccnUid)) {
      query["CcnUid"] = request.ccnUid;
    }

    if (!$dara.isNull(request.grantTrafficService)) {
      query["GrantTrafficService"] = request.grantTrafficService;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GrantSagInstanceToCcn",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GrantSagInstanceToCcnResponse>(await this.callApi(params, req, runtime), new $_model.GrantSagInstanceToCcnResponse({}));
  }

  /**
   * Authorizes a Smart Access Gateway (SAG) instance to communicate with a Cloud Connect Network (CCN) instance that belongs to another Alibaba Cloud account.
   * 
   * @param request - GrantSagInstanceToCcnRequest
   * @returns GrantSagInstanceToCcnResponse
   */
  async grantSagInstanceToCcn(request: $_model.GrantSagInstanceToCcnRequest): Promise<$_model.GrantSagInstanceToCcnResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.grantSagInstanceToCcnWithOptions(request, runtime);
  }

  /**
   * Acquires permissions from a virtual border router (VBR) under another account.
   * 
   * @param request - GrantSagInstanceToVbrRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GrantSagInstanceToVbrResponse
   */
  async grantSagInstanceToVbrWithOptions(request: $_model.GrantSagInstanceToVbrRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GrantSagInstanceToVbrResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.vbrInstanceId)) {
      query["VbrInstanceId"] = request.vbrInstanceId;
    }

    if (!$dara.isNull(request.vbrRegionId)) {
      query["VbrRegionId"] = request.vbrRegionId;
    }

    if (!$dara.isNull(request.vbrUid)) {
      query["VbrUid"] = request.vbrUid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GrantSagInstanceToVbr",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GrantSagInstanceToVbrResponse>(await this.callApi(params, req, runtime), new $_model.GrantSagInstanceToVbrResponse({}));
  }

  /**
   * Acquires permissions from a virtual border router (VBR) under another account.
   * 
   * @param request - GrantSagInstanceToVbrRequest
   * @returns GrantSagInstanceToVbrResponse
   */
  async grantSagInstanceToVbr(request: $_model.GrantSagInstanceToVbrRequest): Promise<$_model.GrantSagInstanceToVbrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.grantSagInstanceToVbrWithOptions(request, runtime);
  }

  /**
   * Closes a connection based on the Smart Access Gateway (SAG) app instance ID and username.
   * 
   * @param request - KickOutClientsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns KickOutClientsResponse
   */
  async kickOutClientsWithOptions(request: $_model.KickOutClientsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.KickOutClientsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.username)) {
      query["Username"] = request.username;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "KickOutClients",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.KickOutClientsResponse>(await this.callApi(params, req, runtime), new $_model.KickOutClientsResponse({}));
  }

  /**
   * Closes a connection based on the Smart Access Gateway (SAG) app instance ID and username.
   * 
   * @param request - KickOutClientsRequest
   * @returns KickOutClientsResponse
   */
  async kickOutClients(request: $_model.KickOutClientsRequest): Promise<$_model.KickOutClientsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.kickOutClientsWithOptions(request, runtime);
  }

  /**
   * Queries network qualities of endpoints for Smart Access Gateway (SAG) instances.
   * 
   * @param request - ListAccessPointNetworkQualitiesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAccessPointNetworkQualitiesResponse
   */
  async listAccessPointNetworkQualitiesWithOptions(request: $_model.ListAccessPointNetworkQualitiesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAccessPointNetworkQualitiesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAccessPointNetworkQualities",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAccessPointNetworkQualitiesResponse>(await this.callApi(params, req, runtime), new $_model.ListAccessPointNetworkQualitiesResponse({}));
  }

  /**
   * Queries network qualities of endpoints for Smart Access Gateway (SAG) instances.
   * 
   * @param request - ListAccessPointNetworkQualitiesRequest
   * @returns ListAccessPointNetworkQualitiesResponse
   */
  async listAccessPointNetworkQualities(request: $_model.ListAccessPointNetworkQualitiesRequest): Promise<$_model.ListAccessPointNetworkQualitiesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAccessPointNetworkQualitiesWithOptions(request, runtime);
  }

  /**
   * Queries access points in a region.
   * 
   * @remarks
   * An access point connects Smart Access Gateway (SAG) instances to Cloud Connect Network (CCN). Some regions may contain more than one access point. After an SAG instance is associated with a CCN instance, the system selects the nearest access point to establish connections to Alibaba Cloud. This topic describes how to query access points in a specific region. For more information about the areas that support CCN, see [Introduction to CCN](https://help.aliyun.com/document_detail/93667.html).
   * 
   * @param request - ListAccessPointsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAccessPointsResponse
   */
  async listAccessPointsWithOptions(request: $_model.ListAccessPointsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAccessPointsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAccessPoints",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAccessPointsResponse>(await this.callApi(params, req, runtime), new $_model.ListAccessPointsResponse({}));
  }

  /**
   * Queries access points in a region.
   * 
   * @remarks
   * An access point connects Smart Access Gateway (SAG) instances to Cloud Connect Network (CCN). Some regions may contain more than one access point. After an SAG instance is associated with a CCN instance, the system selects the nearest access point to establish connections to Alibaba Cloud. This topic describes how to query access points in a specific region. For more information about the areas that support CCN, see [Introduction to CCN](https://help.aliyun.com/document_detail/93667.html).
   * 
   * @param request - ListAccessPointsRequest
   * @returns ListAccessPointsResponse
   */
  async listAccessPoints(request: $_model.ListAccessPointsRequest): Promise<$_model.ListAccessPointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAccessPointsWithOptions(request, runtime);
  }

  /**
   * Queries the service addresses of a Smart Access Gateway (SAG) device.
   * 
   * @param request - ListAvailableServiceAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAvailableServiceAddressResponse
   */
  async listAvailableServiceAddressWithOptions(request: $_model.ListAvailableServiceAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAvailableServiceAddressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addressType)) {
      query["AddressType"] = request.addressType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sagId)) {
      query["SagId"] = request.sagId;
    }

    if (!$dara.isNull(request.sn)) {
      query["Sn"] = request.sn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAvailableServiceAddress",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAvailableServiceAddressResponse>(await this.callApi(params, req, runtime), new $_model.ListAvailableServiceAddressResponse({}));
  }

  /**
   * Queries the service addresses of a Smart Access Gateway (SAG) device.
   * 
   * @param request - ListAvailableServiceAddressRequest
   * @returns ListAvailableServiceAddressResponse
   */
  async listAvailableServiceAddress(request: $_model.ListAvailableServiceAddressRequest): Promise<$_model.ListAvailableServiceAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAvailableServiceAddressWithOptions(request, runtime);
  }

  /**
   * Queries configuration errors of the deep packet inspection (DPI) feature.
   * 
   * @remarks
   * ## Background information
   * If you have configured an application-aware access control list (ACL) or a quality of service (QoS) policy and associated it with a Smart Access Gateway (SAG) instance, you can call this operation to query whether the ACL rules or 5-tuples in the QoS policy are applied to the SAG instance. If settings are not applied to the SAG instance, the error information is returned.
   * 
   * @param request - ListDpiConfigErrorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDpiConfigErrorResponse
   */
  async listDpiConfigErrorWithOptions(request: $_model.ListDpiConfigErrorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDpiConfigErrorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dpiConfigType)) {
      query["DpiConfigType"] = request.dpiConfigType;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.ruleInstanceId)) {
      query["RuleInstanceId"] = request.ruleInstanceId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDpiConfigError",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDpiConfigErrorResponse>(await this.callApi(params, req, runtime), new $_model.ListDpiConfigErrorResponse({}));
  }

  /**
   * Queries configuration errors of the deep packet inspection (DPI) feature.
   * 
   * @remarks
   * ## Background information
   * If you have configured an application-aware access control list (ACL) or a quality of service (QoS) policy and associated it with a Smart Access Gateway (SAG) instance, you can call this operation to query whether the ACL rules or 5-tuples in the QoS policy are applied to the SAG instance. If settings are not applied to the SAG instance, the error information is returned.
   * 
   * @param request - ListDpiConfigErrorRequest
   * @returns ListDpiConfigErrorResponse
   */
  async listDpiConfigError(request: $_model.ListDpiConfigErrorRequest): Promise<$_model.ListDpiConfigErrorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDpiConfigErrorWithOptions(request, runtime);
  }

  /**
   * Queries the information about application groups supported by Smart Access Gateway (SAG) instances in a specified region.
   * 
   * @param request - ListDpiGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDpiGroupsResponse
   */
  async listDpiGroupsWithOptions(request: $_model.ListDpiGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDpiGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dpiGroupIds)) {
      query["DpiGroupIds"] = request.dpiGroupIds;
    }

    if (!$dara.isNull(request.dpiGroupNames)) {
      query["DpiGroupNames"] = request.dpiGroupNames;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDpiGroups",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDpiGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListDpiGroupsResponse({}));
  }

  /**
   * Queries the information about application groups supported by Smart Access Gateway (SAG) instances in a specified region.
   * 
   * @param request - ListDpiGroupsRequest
   * @returns ListDpiGroupsResponse
   */
  async listDpiGroups(request: $_model.ListDpiGroupsRequest): Promise<$_model.ListDpiGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDpiGroupsWithOptions(request, runtime);
  }

  /**
   * Queries the information about an application or an application group in a region, or about the applications supported by Smart Access Gateway (SAG) in a region.
   * 
   * @remarks
   * This operation supports the following features:
   * *   Queries the information about all applications supported by the SAG instance in a specified region.
   * *   Queries the information about an application by application ID in a specified region.
   * *   Queries the information about an application by application name in a specified region.
   * *   Queries the information about an application group by group ID in a specified region.
   * If this is the first time you call this operation, we recommend that you query all applications supported by the SAG instance in the specified region by region ID. Then, you can query the information about a specified application.
   * 
   * @param request - ListDpiSignaturesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDpiSignaturesResponse
   */
  async listDpiSignaturesWithOptions(request: $_model.ListDpiSignaturesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDpiSignaturesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dpiGroupId)) {
      query["DpiGroupId"] = request.dpiGroupId;
    }

    if (!$dara.isNull(request.dpiSignatureIds)) {
      query["DpiSignatureIds"] = request.dpiSignatureIds;
    }

    if (!$dara.isNull(request.dpiSignatureNames)) {
      query["DpiSignatureNames"] = request.dpiSignatureNames;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDpiSignatures",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDpiSignaturesResponse>(await this.callApi(params, req, runtime), new $_model.ListDpiSignaturesResponse({}));
  }

  /**
   * Queries the information about an application or an application group in a region, or about the applications supported by Smart Access Gateway (SAG) in a region.
   * 
   * @remarks
   * This operation supports the following features:
   * *   Queries the information about all applications supported by the SAG instance in a specified region.
   * *   Queries the information about an application by application ID in a specified region.
   * *   Queries the information about an application by application name in a specified region.
   * *   Queries the information about an application group by group ID in a specified region.
   * If this is the first time you call this operation, we recommend that you query all applications supported by the SAG instance in the specified region by region ID. Then, you can query the information about a specified application.
   * 
   * @param request - ListDpiSignaturesRequest
   * @returns ListDpiSignaturesResponse
   */
  async listDpiSignatures(request: $_model.ListDpiSignaturesRequest): Promise<$_model.ListDpiSignaturesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDpiSignaturesWithOptions(request, runtime);
  }

  /**
   * Queries enterprise codes.
   * 
   * @param request - ListEnterpriseCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEnterpriseCodeResponse
   */
  async listEnterpriseCodeWithOptions(request: $_model.ListEnterpriseCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListEnterpriseCodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enterpriseCode)) {
      query["EnterpriseCode"] = request.enterpriseCode;
    }

    if (!$dara.isNull(request.isDefault)) {
      query["IsDefault"] = request.isDefault;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEnterpriseCode",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEnterpriseCodeResponse>(await this.callApi(params, req, runtime), new $_model.ListEnterpriseCodeResponse({}));
  }

  /**
   * Queries enterprise codes.
   * 
   * @param request - ListEnterpriseCodeRequest
   * @returns ListEnterpriseCodeResponse
   */
  async listEnterpriseCode(request: $_model.ListEnterpriseCodeRequest): Promise<$_model.ListEnterpriseCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEnterpriseCodeWithOptions(request, runtime);
  }

  /**
   * Queries a probe task.
   * 
   * @param request - ListProbeTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProbeTaskResponse
   */
  async listProbeTaskWithOptions(request: $_model.ListProbeTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListProbeTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.probeTaskId)) {
      query["ProbeTaskId"] = request.probeTaskId;
    }

    if (!$dara.isNull(request.protocol)) {
      query["Protocol"] = request.protocol;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sagId)) {
      query["SagId"] = request.sagId;
    }

    if (!$dara.isNull(request.sagName)) {
      query["SagName"] = request.sagName;
    }

    if (!$dara.isNull(request.sn)) {
      query["Sn"] = request.sn;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProbeTask",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProbeTaskResponse>(await this.callApi(params, req, runtime), new $_model.ListProbeTaskResponse({}));
  }

  /**
   * Queries a probe task.
   * 
   * @param request - ListProbeTaskRequest
   * @returns ListProbeTaskResponse
   */
  async listProbeTask(request: $_model.ListProbeTaskRequest): Promise<$_model.ListProbeTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listProbeTaskWithOptions(request, runtime);
  }

  /**
   * Queries features that are not supported by a specified Smart Access Gateway (SAG) device.
   * 
   * @param request - ListSmartAGApiUnsupportedFeatureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSmartAGApiUnsupportedFeatureResponse
   */
  async listSmartAGApiUnsupportedFeatureWithOptions(request: $_model.ListSmartAGApiUnsupportedFeatureRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSmartAGApiUnsupportedFeatureResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.openApiName)) {
      query["OpenApiName"] = request.openApiName;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.serialNumber)) {
      query["SerialNumber"] = request.serialNumber;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSmartAGApiUnsupportedFeature",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSmartAGApiUnsupportedFeatureResponse>(await this.callApi(params, req, runtime), new $_model.ListSmartAGApiUnsupportedFeatureResponse({}));
  }

  /**
   * Queries features that are not supported by a specified Smart Access Gateway (SAG) device.
   * 
   * @param request - ListSmartAGApiUnsupportedFeatureRequest
   * @returns ListSmartAGApiUnsupportedFeatureResponse
   */
  async listSmartAGApiUnsupportedFeature(request: $_model.ListSmartAGApiUnsupportedFeatureRequest): Promise<$_model.ListSmartAGApiUnsupportedFeatureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSmartAGApiUnsupportedFeatureWithOptions(request, runtime);
  }

  /**
   * Queries information about Smart Access Gateway (SAG) instances within specific access points in a specific region.
   * 
   * @param request - ListSmartAGByAccessPointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSmartAGByAccessPointResponse
   */
  async listSmartAGByAccessPointWithOptions(request: $_model.ListSmartAGByAccessPointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSmartAGByAccessPointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessPointId)) {
      query["AccessPointId"] = request.accessPointId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGStatus)) {
      query["SmartAGStatus"] = request.smartAGStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSmartAGByAccessPoint",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSmartAGByAccessPointResponse>(await this.callApi(params, req, runtime), new $_model.ListSmartAGByAccessPointResponse({}));
  }

  /**
   * Queries information about Smart Access Gateway (SAG) instances within specific access points in a specific region.
   * 
   * @param request - ListSmartAGByAccessPointRequest
   * @returns ListSmartAGByAccessPointResponse
   */
  async listSmartAGByAccessPoint(request: $_model.ListSmartAGByAccessPointRequest): Promise<$_model.ListSmartAGByAccessPointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSmartAGByAccessPointWithOptions(request, runtime);
  }

  /**
   * Modifies the name of an access control list (ACL).
   * 
   * @param request - ModifyACLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyACLResponse
   */
  async modifyACLWithOptions(request: $_model.ModifyACLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyACLResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyACL",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyACLResponse>(await this.callApi(params, req, runtime), new $_model.ModifyACLResponse({}));
  }

  /**
   * Modifies the name of an access control list (ACL).
   * 
   * @param request - ModifyACLRequest
   * @returns ModifyACLResponse
   */
  async modifyACL(request: $_model.ModifyACLRequest): Promise<$_model.ModifyACLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyACLWithOptions(request, runtime);
  }

  /**
   * Modifies an access control list (ACL) rule.
   * 
   * @param request - ModifyACLRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyACLRuleResponse
   */
  async modifyACLRuleWithOptions(request: $_model.ModifyACLRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyACLRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!$dara.isNull(request.acrId)) {
      query["AcrId"] = request.acrId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.destCidr)) {
      query["DestCidr"] = request.destCidr;
    }

    if (!$dara.isNull(request.destPortRange)) {
      query["DestPortRange"] = request.destPortRange;
    }

    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.dpiGroupIds)) {
      query["DpiGroupIds"] = request.dpiGroupIds;
    }

    if (!$dara.isNull(request.dpiSignatureIds)) {
      query["DpiSignatureIds"] = request.dpiSignatureIds;
    }

    if (!$dara.isNull(request.ipProtocol)) {
      query["IpProtocol"] = request.ipProtocol;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.policy)) {
      query["Policy"] = request.policy;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sourceCidr)) {
      query["SourceCidr"] = request.sourceCidr;
    }

    if (!$dara.isNull(request.sourcePortRange)) {
      query["SourcePortRange"] = request.sourcePortRange;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyACLRule",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyACLRuleResponse>(await this.callApi(params, req, runtime), new $_model.ModifyACLRuleResponse({}));
  }

  /**
   * Modifies an access control list (ACL) rule.
   * 
   * @param request - ModifyACLRuleRequest
   * @returns ModifyACLRuleResponse
   */
  async modifyACLRule(request: $_model.ModifyACLRuleRequest): Promise<$_model.ModifyACLRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyACLRuleWithOptions(request, runtime);
  }

  /**
   * Modifies the DNS settings of a Smart Access Gateway (SAG) app instance.
   * 
   * @param request - ModifyClientUserDNSRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyClientUserDNSResponse
   */
  async modifyClientUserDNSWithOptions(request: $_model.ModifyClientUserDNSRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyClientUserDNSResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appDNS)) {
      query["AppDNS"] = request.appDNS;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.recoveredDNS)) {
      query["RecoveredDNS"] = request.recoveredDNS;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyClientUserDNS",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyClientUserDNSResponse>(await this.callApi(params, req, runtime), new $_model.ModifyClientUserDNSResponse({}));
  }

  /**
   * Modifies the DNS settings of a Smart Access Gateway (SAG) app instance.
   * 
   * @param request - ModifyClientUserDNSRequest
   * @returns ModifyClientUserDNSResponse
   */
  async modifyClientUserDNS(request: $_model.ModifyClientUserDNSRequest): Promise<$_model.ModifyClientUserDNSResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyClientUserDNSWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of a Cloud Connect Network (CCN) instance.
   * 
   * @param request - ModifyCloudConnectNetworkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyCloudConnectNetworkResponse
   */
  async modifyCloudConnectNetworkWithOptions(request: $_model.ModifyCloudConnectNetworkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyCloudConnectNetworkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ccnId)) {
      query["CcnId"] = request.ccnId;
    }

    if (!$dara.isNull(request.cidrBlock)) {
      query["CidrBlock"] = request.cidrBlock;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.interworkingStatus)) {
      query["InterworkingStatus"] = request.interworkingStatus;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyCloudConnectNetwork",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyCloudConnectNetworkResponse>(await this.callApi(params, req, runtime), new $_model.ModifyCloudConnectNetworkResponse({}));
  }

  /**
   * Modifies the configurations of a Cloud Connect Network (CCN) instance.
   * 
   * @param request - ModifyCloudConnectNetworkRequest
   * @returns ModifyCloudConnectNetworkResponse
   */
  async modifyCloudConnectNetwork(request: $_model.ModifyCloudConnectNetworkRequest): Promise<$_model.ModifyCloudConnectNetworkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyCloudConnectNetworkWithOptions(request, runtime);
  }

  /**
   * Modifies the automatic upgrade policy of a Smart Access Gateway (SAG) device.
   * 
   * @param request - ModifyDeviceAutoUpgradePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDeviceAutoUpgradePolicyResponse
   */
  async modifyDeviceAutoUpgradePolicyWithOptions(request: $_model.ModifyDeviceAutoUpgradePolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDeviceAutoUpgradePolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cronExpression)) {
      query["CronExpression"] = request.cronExpression;
    }

    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.serialNumber)) {
      query["SerialNumber"] = request.serialNumber;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.timeZone)) {
      query["TimeZone"] = request.timeZone;
    }

    if (!$dara.isNull(request.upgradeType)) {
      query["UpgradeType"] = request.upgradeType;
    }

    if (!$dara.isNull(request.versionType)) {
      query["VersionType"] = request.versionType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDeviceAutoUpgradePolicy",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDeviceAutoUpgradePolicyResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDeviceAutoUpgradePolicyResponse({}));
  }

  /**
   * Modifies the automatic upgrade policy of a Smart Access Gateway (SAG) device.
   * 
   * @param request - ModifyDeviceAutoUpgradePolicyRequest
   * @returns ModifyDeviceAutoUpgradePolicyResponse
   */
  async modifyDeviceAutoUpgradePolicy(request: $_model.ModifyDeviceAutoUpgradePolicyRequest): Promise<$_model.ModifyDeviceAutoUpgradePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDeviceAutoUpgradePolicyWithOptions(request, runtime);
  }

  /**
   * Modifies the settings of a flow log.
   * 
   * @param request - ModifyFlowLogAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyFlowLogAttributeResponse
   */
  async modifyFlowLogAttributeWithOptions(request: $_model.ModifyFlowLogAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyFlowLogAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.activeAging)) {
      query["ActiveAging"] = request.activeAging;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.flowLogId)) {
      query["FlowLogId"] = request.flowLogId;
    }

    if (!$dara.isNull(request.inactiveAging)) {
      query["InactiveAging"] = request.inactiveAging;
    }

    if (!$dara.isNull(request.logstoreName)) {
      query["LogstoreName"] = request.logstoreName;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.netflowServerIp)) {
      query["NetflowServerIp"] = request.netflowServerIp;
    }

    if (!$dara.isNull(request.netflowServerPort)) {
      query["NetflowServerPort"] = request.netflowServerPort;
    }

    if (!$dara.isNull(request.netflowVersion)) {
      query["NetflowVersion"] = request.netflowVersion;
    }

    if (!$dara.isNull(request.outputType)) {
      query["OutputType"] = request.outputType;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.slsRegionId)) {
      query["SlsRegionId"] = request.slsRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyFlowLogAttribute",
      version: "2018-03-13",
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
   * Modifies the settings of a flow log.
   * 
   * @param request - ModifyFlowLogAttributeRequest
   * @returns ModifyFlowLogAttributeResponse
   */
  async modifyFlowLogAttribute(request: $_model.ModifyFlowLogAttributeRequest): Promise<$_model.ModifyFlowLogAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyFlowLogAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies a health check.
   * 
   * @param request - ModifyHealthCheckRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyHealthCheckResponse
   */
  async modifyHealthCheckWithOptions(request: $_model.ModifyHealthCheckRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyHealthCheckResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.dstIpAddr)) {
      query["DstIpAddr"] = request.dstIpAddr;
    }

    if (!$dara.isNull(request.dstPort)) {
      query["DstPort"] = request.dstPort;
    }

    if (!$dara.isNull(request.failCountThreshold)) {
      query["FailCountThreshold"] = request.failCountThreshold;
    }

    if (!$dara.isNull(request.hcInstanceId)) {
      query["HcInstanceId"] = request.hcInstanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.probeCount)) {
      query["ProbeCount"] = request.probeCount;
    }

    if (!$dara.isNull(request.probeInterval)) {
      query["ProbeInterval"] = request.probeInterval;
    }

    if (!$dara.isNull(request.probeTimeout)) {
      query["ProbeTimeout"] = request.probeTimeout;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.rttFailThreshold)) {
      query["RttFailThreshold"] = request.rttFailThreshold;
    }

    if (!$dara.isNull(request.rttThreshold)) {
      query["RttThreshold"] = request.rttThreshold;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.srcIpAddr)) {
      query["SrcIpAddr"] = request.srcIpAddr;
    }

    if (!$dara.isNull(request.srcPort)) {
      query["SrcPort"] = request.srcPort;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyHealthCheck",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyHealthCheckResponse>(await this.callApi(params, req, runtime), new $_model.ModifyHealthCheckResponse({}));
  }

  /**
   * Modifies a health check.
   * 
   * @param request - ModifyHealthCheckRequest
   * @returns ModifyHealthCheckResponse
   */
  async modifyHealthCheck(request: $_model.ModifyHealthCheckRequest): Promise<$_model.ModifyHealthCheckResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyHealthCheckWithOptions(request, runtime);
  }

  /**
   * You can call this operation to modify a quality of service (QoS) policy, for example, its name.
   * 
   * @param request - ModifyQosRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyQosResponse
   */
  async modifyQosWithOptions(request: $_model.ModifyQosRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyQosResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.qosDescription)) {
      query["QosDescription"] = request.qosDescription;
    }

    if (!$dara.isNull(request.qosId)) {
      query["QosId"] = request.qosId;
    }

    if (!$dara.isNull(request.qosName)) {
      query["QosName"] = request.qosName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyQos",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyQosResponse>(await this.callApi(params, req, runtime), new $_model.ModifyQosResponse({}));
  }

  /**
   * You can call this operation to modify a quality of service (QoS) policy, for example, its name.
   * 
   * @param request - ModifyQosRequest
   * @returns ModifyQosResponse
   */
  async modifyQos(request: $_model.ModifyQosRequest): Promise<$_model.ModifyQosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyQosWithOptions(request, runtime);
  }

  /**
   * Modifies a traffic throttling rule in a quality of service (QoS) policy.
   * 
   * @param request - ModifyQosCarRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyQosCarResponse
   */
  async modifyQosCarWithOptions(request: $_model.ModifyQosCarRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyQosCarResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.limitType)) {
      query["LimitType"] = request.limitType;
    }

    if (!$dara.isNull(request.maxBandwidthAbs)) {
      query["MaxBandwidthAbs"] = request.maxBandwidthAbs;
    }

    if (!$dara.isNull(request.maxBandwidthPercent)) {
      query["MaxBandwidthPercent"] = request.maxBandwidthPercent;
    }

    if (!$dara.isNull(request.minBandwidthAbs)) {
      query["MinBandwidthAbs"] = request.minBandwidthAbs;
    }

    if (!$dara.isNull(request.minBandwidthPercent)) {
      query["MinBandwidthPercent"] = request.minBandwidthPercent;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.percentSourceType)) {
      query["PercentSourceType"] = request.percentSourceType;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.qosCarId)) {
      query["QosCarId"] = request.qosCarId;
    }

    if (!$dara.isNull(request.qosId)) {
      query["QosId"] = request.qosId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyQosCar",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyQosCarResponse>(await this.callApi(params, req, runtime), new $_model.ModifyQosCarResponse({}));
  }

  /**
   * Modifies a traffic throttling rule in a quality of service (QoS) policy.
   * 
   * @param request - ModifyQosCarRequest
   * @returns ModifyQosCarResponse
   */
  async modifyQosCar(request: $_model.ModifyQosCarRequest): Promise<$_model.ModifyQosCarResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyQosCarWithOptions(request, runtime);
  }

  /**
   * Modifies a traffic classification rule of a quality of service (QoS) policy.
   * 
   * @param request - ModifyQosPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyQosPolicyResponse
   */
  async modifyQosPolicyWithOptions(request: $_model.ModifyQosPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyQosPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.destCidr)) {
      query["DestCidr"] = request.destCidr;
    }

    if (!$dara.isNull(request.destPortRange)) {
      query["DestPortRange"] = request.destPortRange;
    }

    if (!$dara.isNull(request.dpiGroupIds)) {
      query["DpiGroupIds"] = request.dpiGroupIds;
    }

    if (!$dara.isNull(request.dpiSignatureIds)) {
      query["DpiSignatureIds"] = request.dpiSignatureIds;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ipProtocol)) {
      query["IpProtocol"] = request.ipProtocol;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.qosId)) {
      query["QosId"] = request.qosId;
    }

    if (!$dara.isNull(request.qosPolicyId)) {
      query["QosPolicyId"] = request.qosPolicyId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sourceCidr)) {
      query["SourceCidr"] = request.sourceCidr;
    }

    if (!$dara.isNull(request.sourcePortRange)) {
      query["SourcePortRange"] = request.sourcePortRange;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyQosPolicy",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyQosPolicyResponse>(await this.callApi(params, req, runtime), new $_model.ModifyQosPolicyResponse({}));
  }

  /**
   * Modifies a traffic classification rule of a quality of service (QoS) policy.
   * 
   * @param request - ModifyQosPolicyRequest
   * @returns ModifyQosPolicyResponse
   */
  async modifyQosPolicy(request: $_model.ModifyQosPolicyRequest): Promise<$_model.ModifyQosPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyQosPolicyWithOptions(request, runtime);
  }

  /**
   * Modifies the route advertisement policy for a CIDR block.
   * 
   * @param request - ModifyRouteDistributionStrategyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyRouteDistributionStrategyResponse
   */
  async modifyRouteDistributionStrategyWithOptions(request: $_model.ModifyRouteDistributionStrategyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyRouteDistributionStrategyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.destCidrBlock)) {
      query["DestCidrBlock"] = request.destCidrBlock;
    }

    if (!$dara.isNull(request.hcInstanceId)) {
      query["HcInstanceId"] = request.hcInstanceId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.routeDistribution)) {
      query["RouteDistribution"] = request.routeDistribution;
    }

    if (!$dara.isNull(request.routeSource)) {
      query["RouteSource"] = request.routeSource;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyRouteDistributionStrategy",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyRouteDistributionStrategyResponse>(await this.callApi(params, req, runtime), new $_model.ModifyRouteDistributionStrategyResponse({}));
  }

  /**
   * Modifies the route advertisement policy for a CIDR block.
   * 
   * @param request - ModifyRouteDistributionStrategyRequest
   * @returns ModifyRouteDistributionStrategyResponse
   */
  async modifyRouteDistributionStrategy(request: $_model.ModifyRouteDistributionStrategyRequest): Promise<$_model.ModifyRouteDistributionStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyRouteDistributionStrategyWithOptions(request, runtime);
  }

  /**
   * Modifies the password that is used to log on to a smart access gateway (SAG) device.
   * 
   * @param request - ModifySAGAdminPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySAGAdminPasswordResponse
   */
  async modifySAGAdminPasswordWithOptions(request: $_model.ModifySAGAdminPasswordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySAGAdminPasswordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySAGAdminPassword",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySAGAdminPasswordResponse>(await this.callApi(params, req, runtime), new $_model.ModifySAGAdminPasswordResponse({}));
  }

  /**
   * Modifies the password that is used to log on to a smart access gateway (SAG) device.
   * 
   * @param request - ModifySAGAdminPasswordRequest
   * @returns ModifySAGAdminPasswordResponse
   */
  async modifySAGAdminPassword(request: $_model.ModifySAGAdminPasswordRequest): Promise<$_model.ModifySAGAdminPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySAGAdminPasswordWithOptions(request, runtime);
  }

  /**
   * Modifies the sub-interface information of an Express Connect circuit port.
   * 
   * @param request - ModifySagExpressConnectInterfaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySagExpressConnectInterfaceResponse
   */
  async modifySagExpressConnectInterfaceWithOptions(request: $_model.ModifySagExpressConnectInterfaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySagExpressConnectInterfaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.IP)) {
      query["IP"] = request.IP;
    }

    if (!$dara.isNull(request.mask)) {
      query["Mask"] = request.mask;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.portName)) {
      query["PortName"] = request.portName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    if (!$dara.isNull(request.vlan)) {
      query["Vlan"] = request.vlan;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySagExpressConnectInterface",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySagExpressConnectInterfaceResponse>(await this.callApi(params, req, runtime), new $_model.ModifySagExpressConnectInterfaceResponse({}));
  }

  /**
   * Modifies the sub-interface information of an Express Connect circuit port.
   * 
   * @param request - ModifySagExpressConnectInterfaceRequest
   * @returns ModifySagExpressConnectInterfaceResponse
   */
  async modifySagExpressConnectInterface(request: $_model.ModifySagExpressConnectInterfaceRequest): Promise<$_model.ModifySagExpressConnectInterfaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySagExpressConnectInterfaceWithOptions(request, runtime);
  }

  /**
   * Changes the routing protocol of a Smart Access Gateway (SAG) instance.
   * 
   * @param request - ModifySagGlobalRouteProtocolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySagGlobalRouteProtocolResponse
   */
  async modifySagGlobalRouteProtocolWithOptions(request: $_model.ModifySagGlobalRouteProtocolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySagGlobalRouteProtocolResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.routeProtocol)) {
      query["RouteProtocol"] = request.routeProtocol;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySagGlobalRouteProtocol",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySagGlobalRouteProtocolResponse>(await this.callApi(params, req, runtime), new $_model.ModifySagGlobalRouteProtocolResponse({}));
  }

  /**
   * Changes the routing protocol of a Smart Access Gateway (SAG) instance.
   * 
   * @param request - ModifySagGlobalRouteProtocolRequest
   * @returns ModifySagGlobalRouteProtocolResponse
   */
  async modifySagGlobalRouteProtocol(request: $_model.ModifySagGlobalRouteProtocolRequest): Promise<$_model.ModifySagGlobalRouteProtocolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySagGlobalRouteProtocolWithOptions(request, runtime);
  }

  /**
   * Modifies the high availability (HA) settings of a Smart Access Gateway (SAG) device.
   * 
   * @param request - ModifySagHaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySagHaResponse
   */
  async modifySagHaWithOptions(request: $_model.ModifySagHaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySagHaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.portName)) {
      query["PortName"] = request.portName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    if (!$dara.isNull(request.virtualIp)) {
      query["VirtualIp"] = request.virtualIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySagHa",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySagHaResponse>(await this.callApi(params, req, runtime), new $_model.ModifySagHaResponse({}));
  }

  /**
   * Modifies the high availability (HA) settings of a Smart Access Gateway (SAG) device.
   * 
   * @param request - ModifySagHaRequest
   * @returns ModifySagHaResponse
   */
  async modifySagHa(request: $_model.ModifySagHaRequest): Promise<$_model.ModifySagHaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySagHaWithOptions(request, runtime);
  }

  /**
   * You can call this operation to modify the LAN port configurations of a Smart Access Gateway (SAG) device.
   * 
   * @param request - ModifySagLanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySagLanResponse
   */
  async modifySagLanWithOptions(request: $_model.ModifySagLanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySagLanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endIp)) {
      query["EndIp"] = request.endIp;
    }

    if (!$dara.isNull(request.IP)) {
      query["IP"] = request.IP;
    }

    if (!$dara.isNull(request.IPType)) {
      query["IPType"] = request.IPType;
    }

    if (!$dara.isNull(request.lease)) {
      query["Lease"] = request.lease;
    }

    if (!$dara.isNull(request.mask)) {
      query["Mask"] = request.mask;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.portName)) {
      query["PortName"] = request.portName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    if (!$dara.isNull(request.startIp)) {
      query["StartIp"] = request.startIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySagLan",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySagLanResponse>(await this.callApi(params, req, runtime), new $_model.ModifySagLanResponse({}));
  }

  /**
   * You can call this operation to modify the LAN port configurations of a Smart Access Gateway (SAG) device.
   * 
   * @param request - ModifySagLanRequest
   * @returns ModifySagLanResponse
   */
  async modifySagLan(request: $_model.ModifySagLanRequest): Promise<$_model.ModifySagLanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySagLanWithOptions(request, runtime);
  }

  /**
   * Modifies the settings of a Smart Access Gateway (SAG) device port.
   * 
   * @param request - ModifySagManagementPortRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySagManagementPortResponse
   */
  async modifySagManagementPortWithOptions(request: $_model.ModifySagManagementPortRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySagManagementPortResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.gateway)) {
      query["Gateway"] = request.gateway;
    }

    if (!$dara.isNull(request.IP)) {
      query["IP"] = request.IP;
    }

    if (!$dara.isNull(request.mask)) {
      query["Mask"] = request.mask;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySagManagementPort",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySagManagementPortResponse>(await this.callApi(params, req, runtime), new $_model.ModifySagManagementPortResponse({}));
  }

  /**
   * Modifies the settings of a Smart Access Gateway (SAG) device port.
   * 
   * @param request - ModifySagManagementPortRequest
   * @returns ModifySagManagementPortResponse
   */
  async modifySagManagementPort(request: $_model.ModifySagManagementPortRequest): Promise<$_model.ModifySagManagementPortResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySagManagementPortWithOptions(request, runtime);
  }

  /**
   * Modifies the role of a port.
   * 
   * @remarks
   * >  If you modify the role of a port, the current role configurations of the port are deleted.
   * 
   * @param request - ModifySagPortRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySagPortRoleResponse
   */
  async modifySagPortRoleWithOptions(request: $_model.ModifySagPortRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySagPortRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.portName)) {
      query["PortName"] = request.portName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.role)) {
      query["Role"] = request.role;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySagPortRole",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySagPortRoleResponse>(await this.callApi(params, req, runtime), new $_model.ModifySagPortRoleResponse({}));
  }

  /**
   * Modifies the role of a port.
   * 
   * @remarks
   * >  If you modify the role of a port, the current role configurations of the port are deleted.
   * 
   * @param request - ModifySagPortRoleRequest
   * @returns ModifySagPortRoleResponse
   */
  async modifySagPortRole(request: $_model.ModifySagPortRoleRequest): Promise<$_model.ModifySagPortRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySagPortRoleWithOptions(request, runtime);
  }

  /**
   * You can call this operation to modify the routing protocol of a port.
   * 
   * @param request - ModifySagPortRouteProtocolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySagPortRouteProtocolResponse
   */
  async modifySagPortRouteProtocolWithOptions(request: $_model.ModifySagPortRouteProtocolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySagPortRouteProtocolResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.portName)) {
      query["PortName"] = request.portName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.remoteAs)) {
      query["RemoteAs"] = request.remoteAs;
    }

    if (!$dara.isNull(request.remoteIp)) {
      query["RemoteIp"] = request.remoteIp;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.routeProtocol)) {
      query["RouteProtocol"] = request.routeProtocol;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    if (!$dara.isNull(request.vlan)) {
      query["Vlan"] = request.vlan;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySagPortRouteProtocol",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySagPortRouteProtocolResponse>(await this.callApi(params, req, runtime), new $_model.ModifySagPortRouteProtocolResponse({}));
  }

  /**
   * You can call this operation to modify the routing protocol of a port.
   * 
   * @param request - ModifySagPortRouteProtocolRequest
   * @returns ModifySagPortRouteProtocolResponse
   */
  async modifySagPortRouteProtocol(request: $_model.ModifySagPortRouteProtocolRequest): Promise<$_model.ModifySagPortRouteProtocolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySagPortRouteProtocolWithOptions(request, runtime);
  }

  /**
   * Modifies the remote access IP address of a Smart Access Gateway (SAG) device.
   * 
   * @param request - ModifySagRemoteAccessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySagRemoteAccessResponse
   */
  async modifySagRemoteAccessWithOptions(request: $_model.ModifySagRemoteAccessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySagRemoteAccessResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.remoteAccessIp)) {
      query["RemoteAccessIp"] = request.remoteAccessIp;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.serialNumber)) {
      query["SerialNumber"] = request.serialNumber;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySagRemoteAccess",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySagRemoteAccessResponse>(await this.callApi(params, req, runtime), new $_model.ModifySagRemoteAccessResponse({}));
  }

  /**
   * Modifies the remote access IP address of a Smart Access Gateway (SAG) device.
   * 
   * @param request - ModifySagRemoteAccessRequest
   * @returns ModifySagRemoteAccessResponse
   */
  async modifySagRemoteAccess(request: $_model.ModifySagRemoteAccessRequest): Promise<$_model.ModifySagRemoteAccessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySagRemoteAccessWithOptions(request, runtime);
  }

  /**
   * Modifies the Border Gateway Protocol (BGP) settings of a Smart Access Gateway (SAG) device.
   * 
   * @param request - ModifySagRouteProtocolBgpRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySagRouteProtocolBgpResponse
   */
  async modifySagRouteProtocolBgpWithOptions(request: $_model.ModifySagRouteProtocolBgpRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySagRouteProtocolBgpResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.holdTime)) {
      query["HoldTime"] = request.holdTime;
    }

    if (!$dara.isNull(request.keepAlive)) {
      query["KeepAlive"] = request.keepAlive;
    }

    if (!$dara.isNull(request.localAs)) {
      query["LocalAs"] = request.localAs;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.routerId)) {
      query["RouterId"] = request.routerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySagRouteProtocolBgp",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySagRouteProtocolBgpResponse>(await this.callApi(params, req, runtime), new $_model.ModifySagRouteProtocolBgpResponse({}));
  }

  /**
   * Modifies the Border Gateway Protocol (BGP) settings of a Smart Access Gateway (SAG) device.
   * 
   * @param request - ModifySagRouteProtocolBgpRequest
   * @returns ModifySagRouteProtocolBgpResponse
   */
  async modifySagRouteProtocolBgp(request: $_model.ModifySagRouteProtocolBgpRequest): Promise<$_model.ModifySagRouteProtocolBgpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySagRouteProtocolBgpWithOptions(request, runtime);
  }

  /**
   * Modifies the Open Shortest Path First (OSPF) settings of a Smart Access Gateway (SAG) instance.
   * 
   * @param request - ModifySagRouteProtocolOspfRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySagRouteProtocolOspfResponse
   */
  async modifySagRouteProtocolOspfWithOptions(request: $_model.ModifySagRouteProtocolOspfRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySagRouteProtocolOspfResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.areaId)) {
      query["AreaId"] = request.areaId;
    }

    if (!$dara.isNull(request.authenticationType)) {
      query["AuthenticationType"] = request.authenticationType;
    }

    if (!$dara.isNull(request.deadTime)) {
      query["DeadTime"] = request.deadTime;
    }

    if (!$dara.isNull(request.helloTime)) {
      query["HelloTime"] = request.helloTime;
    }

    if (!$dara.isNull(request.md5Key)) {
      query["Md5Key"] = request.md5Key;
    }

    if (!$dara.isNull(request.md5KeyId)) {
      query["Md5KeyId"] = request.md5KeyId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.routerId)) {
      query["RouterId"] = request.routerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySagRouteProtocolOspf",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySagRouteProtocolOspfResponse>(await this.callApi(params, req, runtime), new $_model.ModifySagRouteProtocolOspfResponse({}));
  }

  /**
   * Modifies the Open Shortest Path First (OSPF) settings of a Smart Access Gateway (SAG) instance.
   * 
   * @param request - ModifySagRouteProtocolOspfRequest
   * @returns ModifySagRouteProtocolOspfResponse
   */
  async modifySagRouteProtocolOspf(request: $_model.ModifySagRouteProtocolOspfRequest): Promise<$_model.ModifySagRouteProtocolOspfResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySagRouteProtocolOspfWithOptions(request, runtime);
  }

  /**
   * Modifies a static route.
   * 
   * @param request - ModifySagStaticRouteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySagStaticRouteResponse
   */
  async modifySagStaticRouteWithOptions(request: $_model.ModifySagStaticRouteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySagStaticRouteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.destinationCidr)) {
      query["DestinationCidr"] = request.destinationCidr;
    }

    if (!$dara.isNull(request.nextHop)) {
      query["NextHop"] = request.nextHop;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.portName)) {
      query["PortName"] = request.portName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    if (!$dara.isNull(request.vlan)) {
      query["Vlan"] = request.vlan;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySagStaticRoute",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySagStaticRouteResponse>(await this.callApi(params, req, runtime), new $_model.ModifySagStaticRouteResponse({}));
  }

  /**
   * Modifies a static route.
   * 
   * @param request - ModifySagStaticRouteRequest
   * @returns ModifySagStaticRouteResponse
   */
  async modifySagStaticRoute(request: $_model.ModifySagStaticRouteRequest): Promise<$_model.ModifySagStaticRouteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySagStaticRouteWithOptions(request, runtime);
  }

  /**
   * Modifies the DNS servers used by a Smart Access Gateway (SAG) instance.
   * 
   * @param request - ModifySagUserDnsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySagUserDnsResponse
   */
  async modifySagUserDnsWithOptions(request: $_model.ModifySagUserDnsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySagUserDnsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.masterDns)) {
      query["MasterDns"] = request.masterDns;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.slaveDns)) {
      query["SlaveDns"] = request.slaveDns;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySagUserDns",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySagUserDnsResponse>(await this.callApi(params, req, runtime), new $_model.ModifySagUserDnsResponse({}));
  }

  /**
   * Modifies the DNS servers used by a Smart Access Gateway (SAG) instance.
   * 
   * @param request - ModifySagUserDnsRequest
   * @returns ModifySagUserDnsResponse
   */
  async modifySagUserDns(request: $_model.ModifySagUserDnsRequest): Promise<$_model.ModifySagUserDnsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySagUserDnsWithOptions(request, runtime);
  }

  /**
   * Modifies the WAN port configurations of a Smart Access Gateway (SAG) device.
   * 
   * @remarks
   * We recommend that you understand the functionality of a WAN port before you modify its settings. For more information, see [Configure a WAN port](https://help.aliyun.com/document_detail/163955.html).
   * 
   * @param request - ModifySagWanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySagWanResponse
   */
  async modifySagWanWithOptions(request: $_model.ModifySagWanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySagWanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.gateway)) {
      query["Gateway"] = request.gateway;
    }

    if (!$dara.isNull(request.IP)) {
      query["IP"] = request.IP;
    }

    if (!$dara.isNull(request.IPType)) {
      query["IPType"] = request.IPType;
    }

    if (!$dara.isNull(request.ISP)) {
      query["ISP"] = request.ISP;
    }

    if (!$dara.isNull(request.mask)) {
      query["Mask"] = request.mask;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.portName)) {
      query["PortName"] = request.portName;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    if (!$dara.isNull(request.username)) {
      query["Username"] = request.username;
    }

    if (!$dara.isNull(request.weight)) {
      query["Weight"] = request.weight;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySagWan",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySagWanResponse>(await this.callApi(params, req, runtime), new $_model.ModifySagWanResponse({}));
  }

  /**
   * Modifies the WAN port configurations of a Smart Access Gateway (SAG) device.
   * 
   * @remarks
   * We recommend that you understand the functionality of a WAN port before you modify its settings. For more information, see [Configure a WAN port](https://help.aliyun.com/document_detail/163955.html).
   * 
   * @param request - ModifySagWanRequest
   * @returns ModifySagWanResponse
   */
  async modifySagWan(request: $_model.ModifySagWanRequest): Promise<$_model.ModifySagWanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySagWanWithOptions(request, runtime);
  }

  /**
   * You can call this operation to modify the SNAT configurations of a WAN port of a Smart Access Gateway (SAG) device.
   * 
   * @param request - ModifySagWanSnatRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySagWanSnatResponse
   */
  async modifySagWanSnatWithOptions(request: $_model.ModifySagWanSnatRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySagWanSnatResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    if (!$dara.isNull(request.snat)) {
      query["Snat"] = request.snat;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySagWanSnat",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySagWanSnatResponse>(await this.callApi(params, req, runtime), new $_model.ModifySagWanSnatResponse({}));
  }

  /**
   * You can call this operation to modify the SNAT configurations of a WAN port of a Smart Access Gateway (SAG) device.
   * 
   * @param request - ModifySagWanSnatRequest
   * @returns ModifySagWanSnatResponse
   */
  async modifySagWanSnat(request: $_model.ModifySagWanSnatRequest): Promise<$_model.ModifySagWanSnatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySagWanSnatWithOptions(request, runtime);
  }

  /**
   * You can call this operation to modify the Wi-Fi settings of a Smart Access Gateway (SAG) device.
   * 
   * @param request - ModifySagWifiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySagWifiResponse
   */
  async modifySagWifiWithOptions(request: $_model.ModifySagWifiRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySagWifiResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authenticationType)) {
      query["AuthenticationType"] = request.authenticationType;
    }

    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.channel)) {
      query["Channel"] = request.channel;
    }

    if (!$dara.isNull(request.encryptAlgorithm)) {
      query["EncryptAlgorithm"] = request.encryptAlgorithm;
    }

    if (!$dara.isNull(request.isAuth)) {
      query["IsAuth"] = request.isAuth;
    }

    if (!$dara.isNull(request.isBroadcast)) {
      query["IsBroadcast"] = request.isBroadcast;
    }

    if (!$dara.isNull(request.isEnable)) {
      query["IsEnable"] = request.isEnable;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.SSID)) {
      query["SSID"] = request.SSID;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySagWifi",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySagWifiResponse>(await this.callApi(params, req, runtime), new $_model.ModifySagWifiResponse({}));
  }

  /**
   * You can call this operation to modify the Wi-Fi settings of a Smart Access Gateway (SAG) device.
   * 
   * @param request - ModifySagWifiRequest
   * @returns ModifySagWifiResponse
   */
  async modifySagWifi(request: $_model.ModifySagWifiRequest): Promise<$_model.ModifySagWifiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySagWifiWithOptions(request, runtime);
  }

  /**
   * Modifies the configuration of a Smart Access Gateway (SAG) instance.
   * 
   * @param request - ModifySmartAccessGatewayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySmartAccessGatewayResponse
   */
  async modifySmartAccessGatewayWithOptions(request: $_model.ModifySmartAccessGatewayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySmartAccessGatewayResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cidrBlock)) {
      query["CidrBlock"] = request.cidrBlock;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.enableSoftwareConnectionAudit)) {
      query["EnableSoftwareConnectionAudit"] = request.enableSoftwareConnectionAudit;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.position)) {
      query["Position"] = request.position;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.routingStrategy)) {
      query["RoutingStrategy"] = request.routingStrategy;
    }

    if (!$dara.isNull(request.securityLockThreshold)) {
      query["SecurityLockThreshold"] = request.securityLockThreshold;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySmartAccessGateway",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySmartAccessGatewayResponse>(await this.callApi(params, req, runtime), new $_model.ModifySmartAccessGatewayResponse({}));
  }

  /**
   * Modifies the configuration of a Smart Access Gateway (SAG) instance.
   * 
   * @param request - ModifySmartAccessGatewayRequest
   * @returns ModifySmartAccessGatewayResponse
   */
  async modifySmartAccessGateway(request: $_model.ModifySmartAccessGatewayRequest): Promise<$_model.ModifySmartAccessGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySmartAccessGatewayWithOptions(request, runtime);
  }

  /**
   * Modifies the maximum bandwidth and email address of a client account on a Smart Access Gateway (SAG) app instance.
   * 
   * @param request - ModifySmartAccessGatewayClientUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySmartAccessGatewayClientUserResponse
   */
  async modifySmartAccessGatewayClientUserWithOptions(request: $_model.ModifySmartAccessGatewayClientUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySmartAccessGatewayClientUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySmartAccessGatewayClientUser",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySmartAccessGatewayClientUserResponse>(await this.callApi(params, req, runtime), new $_model.ModifySmartAccessGatewayClientUserResponse({}));
  }

  /**
   * Modifies the maximum bandwidth and email address of a client account on a Smart Access Gateway (SAG) app instance.
   * 
   * @param request - ModifySmartAccessGatewayClientUserRequest
   * @returns ModifySmartAccessGatewayClientUserResponse
   */
  async modifySmartAccessGatewayClientUser(request: $_model.ModifySmartAccessGatewayClientUserRequest): Promise<$_model.ModifySmartAccessGatewayClientUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySmartAccessGatewayClientUserWithOptions(request, runtime);
  }

  /**
   * Modifies the parameters of a Smart Access Gateway (SAG) instance.
   * 
   * @param request - ModifySmartAccessGatewayUpBandwidthRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySmartAccessGatewayUpBandwidthResponse
   */
  async modifySmartAccessGatewayUpBandwidthWithOptions(request: $_model.ModifySmartAccessGatewayUpBandwidthRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySmartAccessGatewayUpBandwidthResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.upBandwidth4G)) {
      query["UpBandwidth4G"] = request.upBandwidth4G;
    }

    if (!$dara.isNull(request.upBandwidthWan)) {
      query["UpBandwidthWan"] = request.upBandwidthWan;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySmartAccessGatewayUpBandwidth",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySmartAccessGatewayUpBandwidthResponse>(await this.callApi(params, req, runtime), new $_model.ModifySmartAccessGatewayUpBandwidthResponse({}));
  }

  /**
   * Modifies the parameters of a Smart Access Gateway (SAG) instance.
   * 
   * @param request - ModifySmartAccessGatewayUpBandwidthRequest
   * @returns ModifySmartAccessGatewayUpBandwidthResponse
   */
  async modifySmartAccessGatewayUpBandwidth(request: $_model.ModifySmartAccessGatewayUpBandwidthRequest): Promise<$_model.ModifySmartAccessGatewayUpBandwidthResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySmartAccessGatewayUpBandwidthWithOptions(request, runtime);
  }

  /**
   * Moves Smart Access Gateway (SAG) resources from one resource group to another.
   * 
   * @param request - MoveResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveResourceGroupResponse
   */
  async moveResourceGroupWithOptions(request: $_model.MoveResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MoveResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.newResourceGroupId)) {
      query["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
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
      action: "MoveResourceGroup",
      version: "2018-03-13",
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
   * Moves Smart Access Gateway (SAG) resources from one resource group to another.
   * 
   * @param request - MoveResourceGroupRequest
   * @returns MoveResourceGroupResponse
   */
  async moveResourceGroup(request: $_model.MoveResourceGroupRequest): Promise<$_model.MoveResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.moveResourceGroupWithOptions(request, runtime);
  }

  /**
   * Probes the network connectivity between a Smart Access Gateway (SAG) instance and an access point.
   * 
   * @remarks
   * You can call this operation to test the connectivity between an SAG instance and a specified access point.
   * *   If the SAG instance can connect to the access point, the ID of the request is returned in this operation.
   * *   If the SAG instance cannot connect to the access point, the ID of the request and corresponding error messages are returned in this operation.
   * 
   * @param request - ProbeAccessPointNetworkQualityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ProbeAccessPointNetworkQualityResponse
   */
  async probeAccessPointNetworkQualityWithOptions(request: $_model.ProbeAccessPointNetworkQualityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ProbeAccessPointNetworkQualityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessPointIds)) {
      query["AccessPointIds"] = request.accessPointIds;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ProbeAccessPointNetworkQuality",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ProbeAccessPointNetworkQualityResponse>(await this.callApi(params, req, runtime), new $_model.ProbeAccessPointNetworkQualityResponse({}));
  }

  /**
   * Probes the network connectivity between a Smart Access Gateway (SAG) instance and an access point.
   * 
   * @remarks
   * You can call this operation to test the connectivity between an SAG instance and a specified access point.
   * *   If the SAG instance can connect to the access point, the ID of the request is returned in this operation.
   * *   If the SAG instance cannot connect to the access point, the ID of the request and corresponding error messages are returned in this operation.
   * 
   * @param request - ProbeAccessPointNetworkQualityRequest
   * @returns ProbeAccessPointNetworkQualityResponse
   */
  async probeAccessPointNetworkQuality(request: $_model.ProbeAccessPointNetworkQualityRequest): Promise<$_model.ProbeAccessPointNetworkQualityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.probeAccessPointNetworkQualityWithOptions(request, runtime);
  }

  /**
   * Restarts a Smart Access Gateway (SAG) instance.
   * 
   * @param request - RebootSmartAccessGatewayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RebootSmartAccessGatewayResponse
   */
  async rebootSmartAccessGatewayWithOptions(request: $_model.RebootSmartAccessGatewayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RebootSmartAccessGatewayResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.serialNumber)) {
      query["SerialNumber"] = request.serialNumber;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RebootSmartAccessGateway",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RebootSmartAccessGatewayResponse>(await this.callApi(params, req, runtime), new $_model.RebootSmartAccessGatewayResponse({}));
  }

  /**
   * Restarts a Smart Access Gateway (SAG) instance.
   * 
   * @param request - RebootSmartAccessGatewayRequest
   * @returns RebootSmartAccessGatewayResponse
   */
  async rebootSmartAccessGateway(request: $_model.RebootSmartAccessGatewayRequest): Promise<$_model.RebootSmartAccessGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rebootSmartAccessGatewayWithOptions(request, runtime);
  }

  /**
   * Resets the password that a client account uses to log on to the Smart Access Gateway (SAG) app.
   * 
   * @param request - ResetSmartAccessGatewayClientUserPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetSmartAccessGatewayClientUserPasswordResponse
   */
  async resetSmartAccessGatewayClientUserPasswordWithOptions(request: $_model.ResetSmartAccessGatewayClientUserPasswordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetSmartAccessGatewayClientUserPasswordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetSmartAccessGatewayClientUserPassword",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetSmartAccessGatewayClientUserPasswordResponse>(await this.callApi(params, req, runtime), new $_model.ResetSmartAccessGatewayClientUserPasswordResponse({}));
  }

  /**
   * Resets the password that a client account uses to log on to the Smart Access Gateway (SAG) app.
   * 
   * @param request - ResetSmartAccessGatewayClientUserPasswordRequest
   * @returns ResetSmartAccessGatewayClientUserPasswordResponse
   */
  async resetSmartAccessGatewayClientUserPassword(request: $_model.ResetSmartAccessGatewayClientUserPasswordRequest): Promise<$_model.ResetSmartAccessGatewayClientUserPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetSmartAccessGatewayClientUserPasswordWithOptions(request, runtime);
  }

  /**
   * Disallows a Cloud Enterprise Network (CEN) instance to communicate with a Cloud Connect Network (CCN) instance.
   * 
   * @param request - RevokeInstanceFromCbnRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeInstanceFromCbnResponse
   */
  async revokeInstanceFromCbnWithOptions(request: $_model.RevokeInstanceFromCbnRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeInstanceFromCbnResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ccnInstanceId)) {
      query["CcnInstanceId"] = request.ccnInstanceId;
    }

    if (!$dara.isNull(request.cenInstanceId)) {
      query["CenInstanceId"] = request.cenInstanceId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokeInstanceFromCbn",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokeInstanceFromCbnResponse>(await this.callApi(params, req, runtime), new $_model.RevokeInstanceFromCbnResponse({}));
  }

  /**
   * Disallows a Cloud Enterprise Network (CEN) instance to communicate with a Cloud Connect Network (CCN) instance.
   * 
   * @param request - RevokeInstanceFromCbnRequest
   * @returns RevokeInstanceFromCbnResponse
   */
  async revokeInstanceFromCbn(request: $_model.RevokeInstanceFromCbnRequest): Promise<$_model.RevokeInstanceFromCbnResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revokeInstanceFromCbnWithOptions(request, runtime);
  }

  /**
   * Revokes the permissions that a Smart Access Gateway (SAG) instance has on virtual border routers (VBRs) in a different Alibaba Cloud account.
   * 
   * @param request - RevokeInstanceFromVbrRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeInstanceFromVbrResponse
   */
  async revokeInstanceFromVbrWithOptions(request: $_model.RevokeInstanceFromVbrRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeInstanceFromVbrResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.vbrInstanceId)) {
      query["VbrInstanceId"] = request.vbrInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokeInstanceFromVbr",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokeInstanceFromVbrResponse>(await this.callApi(params, req, runtime), new $_model.RevokeInstanceFromVbrResponse({}));
  }

  /**
   * Revokes the permissions that a Smart Access Gateway (SAG) instance has on virtual border routers (VBRs) in a different Alibaba Cloud account.
   * 
   * @param request - RevokeInstanceFromVbrRequest
   * @returns RevokeInstanceFromVbrResponse
   */
  async revokeInstanceFromVbr(request: $_model.RevokeInstanceFromVbrRequest): Promise<$_model.RevokeInstanceFromVbrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revokeInstanceFromVbrWithOptions(request, runtime);
  }

  /**
   * Disallows a Smart Access Gateway (SAG) instance to communicate with a Cloud Connect Network (CCN) instance.
   * 
   * @param request - RevokeSagInstanceFromCcnRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeSagInstanceFromCcnResponse
   */
  async revokeSagInstanceFromCcnWithOptions(request: $_model.RevokeSagInstanceFromCcnRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeSagInstanceFromCcnResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ccnInstanceId)) {
      query["CcnInstanceId"] = request.ccnInstanceId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokeSagInstanceFromCcn",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokeSagInstanceFromCcnResponse>(await this.callApi(params, req, runtime), new $_model.RevokeSagInstanceFromCcnResponse({}));
  }

  /**
   * Disallows a Smart Access Gateway (SAG) instance to communicate with a Cloud Connect Network (CCN) instance.
   * 
   * @param request - RevokeSagInstanceFromCcnRequest
   * @returns RevokeSagInstanceFromCcnResponse
   */
  async revokeSagInstanceFromCcn(request: $_model.RevokeSagInstanceFromCcnRequest): Promise<$_model.RevokeSagInstanceFromCcnResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revokeSagInstanceFromCcnWithOptions(request, runtime);
  }

  /**
   * Enables roaming for the SAG app to allow clients to access Alibaba Cloud across regions.
   * 
   * @remarks
   * Before you call `RoamClientUser`, we recommend that you read and understand the features and usage notes of roaming. For more information, see [Configure roaming on clients](https://help.aliyun.com/document_detail/177220.html).
   * 
   * @param request - RoamClientUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RoamClientUserResponse
   */
  async roamClientUserWithOptions(request: $_model.RoamClientUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RoamClientUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.originRegionId)) {
      query["OriginRegionId"] = request.originRegionId;
    }

    if (!$dara.isNull(request.originSmartAGId)) {
      query["OriginSmartAGId"] = request.originSmartAGId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.targetSmartAGId)) {
      query["TargetSmartAGId"] = request.targetSmartAGId;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RoamClientUser",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RoamClientUserResponse>(await this.callApi(params, req, runtime), new $_model.RoamClientUserResponse({}));
  }

  /**
   * Enables roaming for the SAG app to allow clients to access Alibaba Cloud across regions.
   * 
   * @remarks
   * Before you call `RoamClientUser`, we recommend that you read and understand the features and usage notes of roaming. For more information, see [Configure roaming on clients](https://help.aliyun.com/document_detail/177220.html).
   * 
   * @param request - RoamClientUserRequest
   * @returns RoamClientUserResponse
   */
  async roamClientUser(request: $_model.RoamClientUserRequest): Promise<$_model.RoamClientUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.roamClientUserWithOptions(request, runtime);
  }

  /**
   * Enables or disables the deep packet inspection (DPI) feature for a Smart Access Gateway (SAG) instance.
   * 
   * @param request - SetAdvancedMonitorStateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetAdvancedMonitorStateResponse
   */
  async setAdvancedMonitorStateWithOptions(request: $_model.SetAdvancedMonitorStateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetAdvancedMonitorStateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sagId)) {
      query["SagId"] = request.sagId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetAdvancedMonitorState",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetAdvancedMonitorStateResponse>(await this.callApi(params, req, runtime), new $_model.SetAdvancedMonitorStateResponse({}));
  }

  /**
   * Enables or disables the deep packet inspection (DPI) feature for a Smart Access Gateway (SAG) instance.
   * 
   * @param request - SetAdvancedMonitorStateRequest
   * @returns SetAdvancedMonitorStateResponse
   */
  async setAdvancedMonitorState(request: $_model.SetAdvancedMonitorStateRequest): Promise<$_model.SetAdvancedMonitorStateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setAdvancedMonitorStateWithOptions(request, runtime);
  }

  /**
   * Synchronizes the settings of a Smart Access Gateway (SAG) device to the associated SAG instance.
   * 
   * @remarks
   * *SynchronizeSmartAGWebConfig** is an asynchronous operation. After you send a request, the request ID is returned but the operation is still being performed in the system background. You can call the [DescribeSAGDeviceInfo](https://help.aliyun.com/document_detail/164279.html) operation to query the status of an SAG device.
   * *   If an SAG device is in the **Synchronizing** state, the settings of the SAG device are being synchronized to the associated SAG instance.
   * *   If an SAG device is in the **Synchronized** state, the settings of the SAG device are synchronized to the associated SAG instance.
   * 
   * @param request - SynchronizeSmartAGWebConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SynchronizeSmartAGWebConfigResponse
   */
  async synchronizeSmartAGWebConfigWithOptions(request: $_model.SynchronizeSmartAGWebConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SynchronizeSmartAGWebConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SynchronizeSmartAGWebConfig",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SynchronizeSmartAGWebConfigResponse>(await this.callApi(params, req, runtime), new $_model.SynchronizeSmartAGWebConfigResponse({}));
  }

  /**
   * Synchronizes the settings of a Smart Access Gateway (SAG) device to the associated SAG instance.
   * 
   * @remarks
   * *SynchronizeSmartAGWebConfig** is an asynchronous operation. After you send a request, the request ID is returned but the operation is still being performed in the system background. You can call the [DescribeSAGDeviceInfo](https://help.aliyun.com/document_detail/164279.html) operation to query the status of an SAG device.
   * *   If an SAG device is in the **Synchronizing** state, the settings of the SAG device are being synchronized to the associated SAG instance.
   * *   If an SAG device is in the **Synchronized** state, the settings of the SAG device are synchronized to the associated SAG instance.
   * 
   * @param request - SynchronizeSmartAGWebConfigRequest
   * @returns SynchronizeSmartAGWebConfigResponse
   */
  async synchronizeSmartAGWebConfig(request: $_model.SynchronizeSmartAGWebConfigRequest): Promise<$_model.SynchronizeSmartAGWebConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.synchronizeSmartAGWebConfigWithOptions(request, runtime);
  }

  /**
   * Disassociates a Smart Access Gateway (SAG) device from the associated SAG instance.
   * 
   * @param request - UnbindSerialNumberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindSerialNumberResponse
   */
  async unbindSerialNumberWithOptions(request: $_model.UnbindSerialNumberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnbindSerialNumberResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.serialNumber)) {
      query["SerialNumber"] = request.serialNumber;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnbindSerialNumber",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnbindSerialNumberResponse>(await this.callApi(params, req, runtime), new $_model.UnbindSerialNumberResponse({}));
  }

  /**
   * Disassociates a Smart Access Gateway (SAG) device from the associated SAG instance.
   * 
   * @param request - UnbindSerialNumberRequest
   * @returns UnbindSerialNumberResponse
   */
  async unbindSerialNumber(request: $_model.UnbindSerialNumberRequest): Promise<$_model.UnbindSerialNumberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unbindSerialNumberWithOptions(request, runtime);
  }

  /**
   * Disassociates a Smart Access Gateway (SAG) instance from the associated Cloud Connect Network (CCN) instance.
   * 
   * @param request - UnbindSmartAccessGatewayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindSmartAccessGatewayResponse
   */
  async unbindSmartAccessGatewayWithOptions(request: $_model.UnbindSmartAccessGatewayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnbindSmartAccessGatewayResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ccnId)) {
      query["CcnId"] = request.ccnId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.smartAGUid)) {
      query["SmartAGUid"] = request.smartAGUid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnbindSmartAccessGateway",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnbindSmartAccessGatewayResponse>(await this.callApi(params, req, runtime), new $_model.UnbindSmartAccessGatewayResponse({}));
  }

  /**
   * Disassociates a Smart Access Gateway (SAG) instance from the associated Cloud Connect Network (CCN) instance.
   * 
   * @param request - UnbindSmartAccessGatewayRequest
   * @returns UnbindSmartAccessGatewayResponse
   */
  async unbindSmartAccessGateway(request: $_model.UnbindSmartAccessGatewayRequest): Promise<$_model.UnbindSmartAccessGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unbindSmartAccessGatewayWithOptions(request, runtime);
  }

  /**
   * Disassociates a Smart Access Gateway (SAG) instance from a virtual border router (VBR).
   * 
   * @param request - UnbindVbrRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindVbrResponse
   */
  async unbindVbrWithOptions(request: $_model.UnbindVbrRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnbindVbrResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.smartAGUid)) {
      query["SmartAGUid"] = request.smartAGUid;
    }

    if (!$dara.isNull(request.vbrId)) {
      query["VbrId"] = request.vbrId;
    }

    if (!$dara.isNull(request.vbrRegionId)) {
      query["VbrRegionId"] = request.vbrRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnbindVbr",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnbindVbrResponse>(await this.callApi(params, req, runtime), new $_model.UnbindVbrResponse({}));
  }

  /**
   * Disassociates a Smart Access Gateway (SAG) instance from a virtual border router (VBR).
   * 
   * @param request - UnbindVbrRequest
   * @returns UnbindVbrResponse
   */
  async unbindVbr(request: $_model.UnbindVbrRequest): Promise<$_model.UnbindVbrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unbindVbrWithOptions(request, runtime);
  }

  /**
   * Unlocks a Smart Access Gateway (SAG) instance.
   * 
   * @param request - UnlockSmartAccessGatewayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnlockSmartAccessGatewayResponse
   */
  async unlockSmartAccessGatewayWithOptions(request: $_model.UnlockSmartAccessGatewayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnlockSmartAccessGatewayResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnlockSmartAccessGateway",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnlockSmartAccessGatewayResponse>(await this.callApi(params, req, runtime), new $_model.UnlockSmartAccessGatewayResponse({}));
  }

  /**
   * Unlocks a Smart Access Gateway (SAG) instance.
   * 
   * @param request - UnlockSmartAccessGatewayRequest
   * @returns UnlockSmartAccessGatewayResponse
   */
  async unlockSmartAccessGateway(request: $_model.UnlockSmartAccessGatewayRequest): Promise<$_model.UnlockSmartAccessGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unlockSmartAccessGatewayWithOptions(request, runtime);
  }

  /**
   * Modifies the attributes of a specified enterprise code.
   * 
   * @param request - UpdateEnterpriseCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEnterpriseCodeResponse
   */
  async updateEnterpriseCodeWithOptions(request: $_model.UpdateEnterpriseCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateEnterpriseCodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.enterpriseCode)) {
      query["EnterpriseCode"] = request.enterpriseCode;
    }

    if (!$dara.isNull(request.isDefault)) {
      query["IsDefault"] = request.isDefault;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateEnterpriseCode",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateEnterpriseCodeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateEnterpriseCodeResponse({}));
  }

  /**
   * Modifies the attributes of a specified enterprise code.
   * 
   * @param request - UpdateEnterpriseCodeRequest
   * @returns UpdateEnterpriseCodeResponse
   */
  async updateEnterpriseCode(request: $_model.UpdateEnterpriseCodeRequest): Promise<$_model.UpdateEnterpriseCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateEnterpriseCodeWithOptions(request, runtime);
  }

  /**
   * Modifies a probe task.
   * 
   * @param request - UpdateProbeTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateProbeTaskResponse
   */
  async updateProbeTaskWithOptions(request: $_model.UpdateProbeTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateProbeTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.packetNumber)) {
      query["PacketNumber"] = request.packetNumber;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.probeTaskId)) {
      query["ProbeTaskId"] = request.probeTaskId;
    }

    if (!$dara.isNull(request.probeTaskSourceAddress)) {
      query["ProbeTaskSourceAddress"] = request.probeTaskSourceAddress;
    }

    if (!$dara.isNull(request.protocol)) {
      query["Protocol"] = request.protocol;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sagId)) {
      query["SagId"] = request.sagId;
    }

    if (!$dara.isNull(request.sn)) {
      query["Sn"] = request.sn;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateProbeTask",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateProbeTaskResponse>(await this.callApi(params, req, runtime), new $_model.UpdateProbeTaskResponse({}));
  }

  /**
   * Modifies a probe task.
   * 
   * @param request - UpdateProbeTaskRequest
   * @returns UpdateProbeTaskResponse
   */
  async updateProbeTask(request: $_model.UpdateProbeTaskRequest): Promise<$_model.UpdateProbeTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateProbeTaskWithOptions(request, runtime);
  }

  /**
   * Switches the access point of a Smart Access Gateway (SAG) instance.
   * 
   * @remarks
   * ## Prerequisites
   * Before you call this operation, you can call the [ListAccessPoints](https://help.aliyun.com/document_detail/183876.html) operation to view the switchable access points of the SAG instance.
   * 
   * @param request - UpdateSmartAGAccessPointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSmartAGAccessPointResponse
   */
  async updateSmartAGAccessPointWithOptions(request: $_model.UpdateSmartAGAccessPointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSmartAGAccessPointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessPointId)) {
      query["AccessPointId"] = request.accessPointId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSmartAGAccessPoint",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSmartAGAccessPointResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSmartAGAccessPointResponse({}));
  }

  /**
   * Switches the access point of a Smart Access Gateway (SAG) instance.
   * 
   * @remarks
   * ## Prerequisites
   * Before you call this operation, you can call the [ListAccessPoints](https://help.aliyun.com/document_detail/183876.html) operation to view the switchable access points of the SAG instance.
   * 
   * @param request - UpdateSmartAGAccessPointRequest
   * @returns UpdateSmartAGAccessPointResponse
   */
  async updateSmartAGAccessPoint(request: $_model.UpdateSmartAGAccessPointRequest): Promise<$_model.UpdateSmartAGAccessPointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSmartAGAccessPointWithOptions(request, runtime);
  }

  /**
   * Enables or disables the deep packet inspection (DPI) feature for a Smart Access Gateway (SAG) instance.
   * 
   * @param request - UpdateSmartAGDpiAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSmartAGDpiAttributeResponse
   */
  async updateSmartAGDpiAttributeWithOptions(request: $_model.UpdateSmartAGDpiAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSmartAGDpiAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dpiEnabled)) {
      query["DpiEnabled"] = request.dpiEnabled;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSmartAGDpiAttribute",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSmartAGDpiAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSmartAGDpiAttributeResponse({}));
  }

  /**
   * Enables or disables the deep packet inspection (DPI) feature for a Smart Access Gateway (SAG) instance.
   * 
   * @param request - UpdateSmartAGDpiAttributeRequest
   * @returns UpdateSmartAGDpiAttributeResponse
   */
  async updateSmartAGDpiAttribute(request: $_model.UpdateSmartAGDpiAttributeRequest): Promise<$_model.UpdateSmartAGDpiAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSmartAGDpiAttributeWithOptions(request, runtime);
  }

  /**
   * Associates a Smart Access Gateway (SAG) APP instance with another enterprise code.
   * 
   * @param request - UpdateSmartAGEnterpriseCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSmartAGEnterpriseCodeResponse
   */
  async updateSmartAGEnterpriseCodeWithOptions(request: $_model.UpdateSmartAGEnterpriseCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSmartAGEnterpriseCodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.enterpriseCode)) {
      query["EnterpriseCode"] = request.enterpriseCode;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSmartAGEnterpriseCode",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSmartAGEnterpriseCodeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSmartAGEnterpriseCodeResponse({}));
  }

  /**
   * Associates a Smart Access Gateway (SAG) APP instance with another enterprise code.
   * 
   * @param request - UpdateSmartAGEnterpriseCodeRequest
   * @returns UpdateSmartAGEnterpriseCodeResponse
   */
  async updateSmartAGEnterpriseCode(request: $_model.UpdateSmartAGEnterpriseCodeRequest): Promise<$_model.UpdateSmartAGEnterpriseCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSmartAGEnterpriseCodeWithOptions(request, runtime);
  }

  /**
   * Modifies the maximum bandwidth for application acceleration of client accounts on Smart Access Gateway (SAG) app.
   * 
   * @remarks
   * Before you set a maximum bandwidth value for a client, take note of the following rules:
   * *   The maximum bandwidth value of a client cannot exceed that of the SAG app instance to which the client belongs.
   * *   If you have not set maximum bandwidth values for clients that belong to an SAG app instance, and the maximum bandwidth value of the instance is less than 5 Mbit/s, for example, 4 Mbit/s, the maximum bandwidth value of each client that belongs to the SAG app instance is 4 Mbit/s by default.
   * *   If you have not set maximum bandwidth values for clients that belong to an SAG app instance, and the maximum bandwidth value of the instance is 5 Mbit/s or higher, the maximum bandwidth value of each client that belongs to the SAG app instance is 5 Mbit/s by default.
   * 
   * @param request - UpdateSmartAGUserAccelerateConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSmartAGUserAccelerateConfigResponse
   */
  async updateSmartAGUserAccelerateConfigWithOptions(request: $_model.UpdateSmartAGUserAccelerateConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSmartAGUserAccelerateConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSmartAGUserAccelerateConfig",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSmartAGUserAccelerateConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSmartAGUserAccelerateConfigResponse({}));
  }

  /**
   * Modifies the maximum bandwidth for application acceleration of client accounts on Smart Access Gateway (SAG) app.
   * 
   * @remarks
   * Before you set a maximum bandwidth value for a client, take note of the following rules:
   * *   The maximum bandwidth value of a client cannot exceed that of the SAG app instance to which the client belongs.
   * *   If you have not set maximum bandwidth values for clients that belong to an SAG app instance, and the maximum bandwidth value of the instance is less than 5 Mbit/s, for example, 4 Mbit/s, the maximum bandwidth value of each client that belongs to the SAG app instance is 4 Mbit/s by default.
   * *   If you have not set maximum bandwidth values for clients that belong to an SAG app instance, and the maximum bandwidth value of the instance is 5 Mbit/s or higher, the maximum bandwidth value of each client that belongs to the SAG app instance is 5 Mbit/s by default.
   * 
   * @param request - UpdateSmartAGUserAccelerateConfigRequest
   * @returns UpdateSmartAGUserAccelerateConfigResponse
   */
  async updateSmartAGUserAccelerateConfig(request: $_model.UpdateSmartAGUserAccelerateConfigRequest): Promise<$_model.UpdateSmartAGUserAccelerateConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSmartAGUserAccelerateConfigWithOptions(request, runtime);
  }

  /**
   * Modifies the password that is used to log on to an SCG5000 or SCG5000-5G device whose version is 3.4.2 or later.
   * 
   * @remarks
   * You can modify passwords that are used to log on to only SCG5000 and SCG5000-5G devices whose version is 3.4.2 or later.
   * 
   * @param request - UpdateSmartAccessGatewayAdminPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSmartAccessGatewayAdminPasswordResponse
   */
  async updateSmartAccessGatewayAdminPasswordWithOptions(request: $_model.UpdateSmartAccessGatewayAdminPasswordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSmartAccessGatewayAdminPasswordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.crossAccount)) {
      query["CrossAccount"] = request.crossAccount;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceUid)) {
      query["ResourceUid"] = request.resourceUid;
    }

    if (!$dara.isNull(request.sagInsId)) {
      query["SagInsId"] = request.sagInsId;
    }

    if (!$dara.isNull(request.sagSn)) {
      query["SagSn"] = request.sagSn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSmartAccessGatewayAdminPassword",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSmartAccessGatewayAdminPasswordResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSmartAccessGatewayAdminPasswordResponse({}));
  }

  /**
   * Modifies the password that is used to log on to an SCG5000 or SCG5000-5G device whose version is 3.4.2 or later.
   * 
   * @remarks
   * You can modify passwords that are used to log on to only SCG5000 and SCG5000-5G devices whose version is 3.4.2 or later.
   * 
   * @param request - UpdateSmartAccessGatewayAdminPasswordRequest
   * @returns UpdateSmartAccessGatewayAdminPasswordResponse
   */
  async updateSmartAccessGatewayAdminPassword(request: $_model.UpdateSmartAccessGatewayAdminPasswordRequest): Promise<$_model.UpdateSmartAccessGatewayAdminPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSmartAccessGatewayAdminPasswordWithOptions(request, runtime);
  }

  /**
   * Modifies the BGP configurations of an SCG5000 or SCG5000-5G device whose version is 3.4.2 or later.
   * 
   * @remarks
   * You can modify the BGP configuration only of SCG5000 and SCG5000-5G devices whose version is 3.4.2 or later.
   * 
   * @param request - UpdateSmartAccessGatewayBgpRouteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSmartAccessGatewayBgpRouteResponse
   */
  async updateSmartAccessGatewayBgpRouteWithOptions(request: $_model.UpdateSmartAccessGatewayBgpRouteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSmartAccessGatewayBgpRouteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.crossAccount)) {
      query["CrossAccount"] = request.crossAccount;
    }

    if (!$dara.isNull(request.holdTime)) {
      query["HoldTime"] = request.holdTime;
    }

    if (!$dara.isNull(request.keepAlive)) {
      query["KeepAlive"] = request.keepAlive;
    }

    if (!$dara.isNull(request.localAs)) {
      query["LocalAs"] = request.localAs;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceUid)) {
      query["ResourceUid"] = request.resourceUid;
    }

    if (!$dara.isNull(request.routerId)) {
      query["RouterId"] = request.routerId;
    }

    if (!$dara.isNull(request.sagInsId)) {
      query["SagInsId"] = request.sagInsId;
    }

    if (!$dara.isNull(request.sagSn)) {
      query["SagSn"] = request.sagSn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSmartAccessGatewayBgpRoute",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSmartAccessGatewayBgpRouteResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSmartAccessGatewayBgpRouteResponse({}));
  }

  /**
   * Modifies the BGP configurations of an SCG5000 or SCG5000-5G device whose version is 3.4.2 or later.
   * 
   * @remarks
   * You can modify the BGP configuration only of SCG5000 and SCG5000-5G devices whose version is 3.4.2 or later.
   * 
   * @param request - UpdateSmartAccessGatewayBgpRouteRequest
   * @returns UpdateSmartAccessGatewayBgpRouteResponse
   */
  async updateSmartAccessGatewayBgpRoute(request: $_model.UpdateSmartAccessGatewayBgpRouteRequest): Promise<$_model.UpdateSmartAccessGatewayBgpRouteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSmartAccessGatewayBgpRouteWithOptions(request, runtime);
  }

  /**
   * Modifies the DNS configuration of an SCG5000 or SCG5000-5G device whose version is 3.4.2 or later.
   * 
   * @remarks
   * You can modify the DNS configuration only of SCG5000 and SCG5000-5G devices whose version is 3.4.2 or later.
   * 
   * @param request - UpdateSmartAccessGatewayDnsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSmartAccessGatewayDnsResponse
   */
  async updateSmartAccessGatewayDnsWithOptions(request: $_model.UpdateSmartAccessGatewayDnsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSmartAccessGatewayDnsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.crossAccount)) {
      query["CrossAccount"] = request.crossAccount;
    }

    if (!$dara.isNull(request.masterDns)) {
      query["MasterDns"] = request.masterDns;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceUid)) {
      query["ResourceUid"] = request.resourceUid;
    }

    if (!$dara.isNull(request.sagInsId)) {
      query["SagInsId"] = request.sagInsId;
    }

    if (!$dara.isNull(request.sagSn)) {
      query["SagSn"] = request.sagSn;
    }

    if (!$dara.isNull(request.slaveDns)) {
      query["SlaveDns"] = request.slaveDns;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSmartAccessGatewayDns",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSmartAccessGatewayDnsResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSmartAccessGatewayDnsResponse({}));
  }

  /**
   * Modifies the DNS configuration of an SCG5000 or SCG5000-5G device whose version is 3.4.2 or later.
   * 
   * @remarks
   * You can modify the DNS configuration only of SCG5000 and SCG5000-5G devices whose version is 3.4.2 or later.
   * 
   * @param request - UpdateSmartAccessGatewayDnsRequest
   * @returns UpdateSmartAccessGatewayDnsResponse
   */
  async updateSmartAccessGatewayDns(request: $_model.UpdateSmartAccessGatewayDnsRequest): Promise<$_model.UpdateSmartAccessGatewayDnsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSmartAccessGatewayDnsWithOptions(request, runtime);
  }

  /**
   * Modifies the DNS forwarding configurations for a Smart Access Gateway (SAG) SCG5000 or SCG5000-5G instance. The version of the device must be 3.4.2 or later.
   * 
   * @param request - UpdateSmartAccessGatewayDnsForwardRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSmartAccessGatewayDnsForwardResponse
   */
  async updateSmartAccessGatewayDnsForwardWithOptions(request: $_model.UpdateSmartAccessGatewayDnsForwardRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSmartAccessGatewayDnsForwardResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.masterIp)) {
      query["MasterIp"] = request.masterIp;
    }

    if (!$dara.isNull(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!$dara.isNull(request.outboundPortIndex)) {
      query["OutboundPortIndex"] = request.outboundPortIndex;
    }

    if (!$dara.isNull(request.outboundPortName)) {
      query["OutboundPortName"] = request.outboundPortName;
    }

    if (!$dara.isNull(request.outboundPortType)) {
      query["OutboundPortType"] = request.outboundPortType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sagInsId)) {
      query["SagInsId"] = request.sagInsId;
    }

    if (!$dara.isNull(request.sagSn)) {
      query["SagSn"] = request.sagSn;
    }

    if (!$dara.isNull(request.slaveIp)) {
      query["SlaveIp"] = request.slaveIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSmartAccessGatewayDnsForward",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSmartAccessGatewayDnsForwardResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSmartAccessGatewayDnsForwardResponse({}));
  }

  /**
   * Modifies the DNS forwarding configurations for a Smart Access Gateway (SAG) SCG5000 or SCG5000-5G instance. The version of the device must be 3.4.2 or later.
   * 
   * @param request - UpdateSmartAccessGatewayDnsForwardRequest
   * @returns UpdateSmartAccessGatewayDnsForwardResponse
   */
  async updateSmartAccessGatewayDnsForward(request: $_model.UpdateSmartAccessGatewayDnsForwardRequest): Promise<$_model.UpdateSmartAccessGatewayDnsForwardResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSmartAccessGatewayDnsForwardWithOptions(request, runtime);
  }

  /**
   * Modifies the global routing protocol of an SCG5000 or SCG5000-5G device whose version is 3.4.2 or later.
   * 
   * @remarks
   * You can modify the global routing protocol only of SCG5000 and SCG5000-5G devices whose version is 3.4.2 or later.
   * 
   * @param request - UpdateSmartAccessGatewayGlobalRouteProtocolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSmartAccessGatewayGlobalRouteProtocolResponse
   */
  async updateSmartAccessGatewayGlobalRouteProtocolWithOptions(request: $_model.UpdateSmartAccessGatewayGlobalRouteProtocolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSmartAccessGatewayGlobalRouteProtocolResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.crossAccount)) {
      query["CrossAccount"] = request.crossAccount;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceUid)) {
      query["ResourceUid"] = request.resourceUid;
    }

    if (!$dara.isNull(request.routeProtocol)) {
      query["RouteProtocol"] = request.routeProtocol;
    }

    if (!$dara.isNull(request.sagInsId)) {
      query["SagInsId"] = request.sagInsId;
    }

    if (!$dara.isNull(request.sagSn)) {
      query["SagSn"] = request.sagSn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSmartAccessGatewayGlobalRouteProtocol",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSmartAccessGatewayGlobalRouteProtocolResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSmartAccessGatewayGlobalRouteProtocolResponse({}));
  }

  /**
   * Modifies the global routing protocol of an SCG5000 or SCG5000-5G device whose version is 3.4.2 or later.
   * 
   * @remarks
   * You can modify the global routing protocol only of SCG5000 and SCG5000-5G devices whose version is 3.4.2 or later.
   * 
   * @param request - UpdateSmartAccessGatewayGlobalRouteProtocolRequest
   * @returns UpdateSmartAccessGatewayGlobalRouteProtocolResponse
   */
  async updateSmartAccessGatewayGlobalRouteProtocol(request: $_model.UpdateSmartAccessGatewayGlobalRouteProtocolRequest): Promise<$_model.UpdateSmartAccessGatewayGlobalRouteProtocolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSmartAccessGatewayGlobalRouteProtocolWithOptions(request, runtime);
  }

  /**
   * Modifies the OSPF configurations for an SAG SCG5000 or SCG5000-5G device whose version is 3.4.2 or later.
   * 
   * @param request - UpdateSmartAccessGatewayOspfRouteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSmartAccessGatewayOspfRouteResponse
   */
  async updateSmartAccessGatewayOspfRouteWithOptions(request: $_model.UpdateSmartAccessGatewayOspfRouteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSmartAccessGatewayOspfRouteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.areaId)) {
      query["AreaId"] = request.areaId;
    }

    if (!$dara.isNull(request.authenticationType)) {
      query["AuthenticationType"] = request.authenticationType;
    }

    if (!$dara.isNull(request.crossAccount)) {
      query["CrossAccount"] = request.crossAccount;
    }

    if (!$dara.isNull(request.deadTime)) {
      query["DeadTime"] = request.deadTime;
    }

    if (!$dara.isNull(request.helloTime)) {
      query["HelloTime"] = request.helloTime;
    }

    if (!$dara.isNull(request.interfaceName)) {
      query["InterfaceName"] = request.interfaceName;
    }

    if (!$dara.isNull(request.md5Key)) {
      query["Md5Key"] = request.md5Key;
    }

    if (!$dara.isNull(request.md5KeyId)) {
      query["Md5KeyId"] = request.md5KeyId;
    }

    if (!$dara.isNull(request.networks)) {
      query["Networks"] = request.networks;
    }

    if (!$dara.isNull(request.ospfCost)) {
      query["OspfCost"] = request.ospfCost;
    }

    if (!$dara.isNull(request.ospfNetworkType)) {
      query["OspfNetworkType"] = request.ospfNetworkType;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.redistributeProtocol)) {
      query["RedistributeProtocol"] = request.redistributeProtocol;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceUid)) {
      query["ResourceUid"] = request.resourceUid;
    }

    if (!$dara.isNull(request.routerId)) {
      query["RouterId"] = request.routerId;
    }

    if (!$dara.isNull(request.sagInsId)) {
      query["SagInsId"] = request.sagInsId;
    }

    if (!$dara.isNull(request.sagSn)) {
      query["SagSn"] = request.sagSn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSmartAccessGatewayOspfRoute",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSmartAccessGatewayOspfRouteResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSmartAccessGatewayOspfRouteResponse({}));
  }

  /**
   * Modifies the OSPF configurations for an SAG SCG5000 or SCG5000-5G device whose version is 3.4.2 or later.
   * 
   * @param request - UpdateSmartAccessGatewayOspfRouteRequest
   * @returns UpdateSmartAccessGatewayOspfRouteResponse
   */
  async updateSmartAccessGatewayOspfRoute(request: $_model.UpdateSmartAccessGatewayOspfRouteRequest): Promise<$_model.UpdateSmartAccessGatewayOspfRouteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSmartAccessGatewayOspfRouteWithOptions(request, runtime);
  }

  /**
   * Modifies the port protocol of an SCG5000 or SCG5000-5G device whose version is 3.4.2 or later.
   * 
   * @remarks
   * You can modify the port protocol only of SCG5000 and SCG5000-5G devices whose version is 3.4.2 or later.
   * 
   * @param request - UpdateSmartAccessGatewayPortRouteProtocolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSmartAccessGatewayPortRouteProtocolResponse
   */
  async updateSmartAccessGatewayPortRouteProtocolWithOptions(request: $_model.UpdateSmartAccessGatewayPortRouteProtocolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSmartAccessGatewayPortRouteProtocolResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.crossAccount)) {
      query["CrossAccount"] = request.crossAccount;
    }

    if (!$dara.isNull(request.portName)) {
      query["PortName"] = request.portName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.remoteAs)) {
      query["RemoteAs"] = request.remoteAs;
    }

    if (!$dara.isNull(request.remoteIp)) {
      query["RemoteIp"] = request.remoteIp;
    }

    if (!$dara.isNull(request.resourceUid)) {
      query["ResourceUid"] = request.resourceUid;
    }

    if (!$dara.isNull(request.routeProtocol)) {
      query["RouteProtocol"] = request.routeProtocol;
    }

    if (!$dara.isNull(request.sagInsId)) {
      query["SagInsId"] = request.sagInsId;
    }

    if (!$dara.isNull(request.sagSn)) {
      query["SagSn"] = request.sagSn;
    }

    if (!$dara.isNull(request.vlan)) {
      query["Vlan"] = request.vlan;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSmartAccessGatewayPortRouteProtocol",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSmartAccessGatewayPortRouteProtocolResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSmartAccessGatewayPortRouteProtocolResponse({}));
  }

  /**
   * Modifies the port protocol of an SCG5000 or SCG5000-5G device whose version is 3.4.2 or later.
   * 
   * @remarks
   * You can modify the port protocol only of SCG5000 and SCG5000-5G devices whose version is 3.4.2 or later.
   * 
   * @param request - UpdateSmartAccessGatewayPortRouteProtocolRequest
   * @returns UpdateSmartAccessGatewayPortRouteProtocolResponse
   */
  async updateSmartAccessGatewayPortRouteProtocol(request: $_model.UpdateSmartAccessGatewayPortRouteProtocolRequest): Promise<$_model.UpdateSmartAccessGatewayPortRouteProtocolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSmartAccessGatewayPortRouteProtocolWithOptions(request, runtime);
  }

  /**
   * Upgrades a SAG device to a later version.
   * 
   * @param request - UpdateSmartAccessGatewayVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSmartAccessGatewayVersionResponse
   */
  async updateSmartAccessGatewayVersionWithOptions(request: $_model.UpdateSmartAccessGatewayVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSmartAccessGatewayVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.serialNumber)) {
      query["SerialNumber"] = request.serialNumber;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.versionCode)) {
      query["VersionCode"] = request.versionCode;
    }

    if (!$dara.isNull(request.versionType)) {
      query["VersionType"] = request.versionType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSmartAccessGatewayVersion",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSmartAccessGatewayVersionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSmartAccessGatewayVersionResponse({}));
  }

  /**
   * Upgrades a SAG device to a later version.
   * 
   * @param request - UpdateSmartAccessGatewayVersionRequest
   * @returns UpdateSmartAccessGatewayVersionResponse
   */
  async updateSmartAccessGatewayVersion(request: $_model.UpdateSmartAccessGatewayVersionRequest): Promise<$_model.UpdateSmartAccessGatewayVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSmartAccessGatewayVersionWithOptions(request, runtime);
  }

  /**
   * Modifies the Source Network Address Translation (SNAT) configuration of the WAN port on an SCG5000 or SCG5000-5G device whose version is 3.4.2 or later.
   * 
   * @remarks
   * You can modify the SNAT configuration of the WAN port only on SCG5000 and SCG5000-5G devices whose version is 3.4.2 or later.
   * 
   * @param request - UpdateSmartAccessGatewayWanSnatRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSmartAccessGatewayWanSnatResponse
   */
  async updateSmartAccessGatewayWanSnatWithOptions(request: $_model.UpdateSmartAccessGatewayWanSnatRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSmartAccessGatewayWanSnatResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.crossAccount)) {
      query["CrossAccount"] = request.crossAccount;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceUid)) {
      query["ResourceUid"] = request.resourceUid;
    }

    if (!$dara.isNull(request.sagInsId)) {
      query["SagInsId"] = request.sagInsId;
    }

    if (!$dara.isNull(request.sagSn)) {
      query["SagSn"] = request.sagSn;
    }

    if (!$dara.isNull(request.snat)) {
      query["Snat"] = request.snat;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSmartAccessGatewayWanSnat",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSmartAccessGatewayWanSnatResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSmartAccessGatewayWanSnatResponse({}));
  }

  /**
   * Modifies the Source Network Address Translation (SNAT) configuration of the WAN port on an SCG5000 or SCG5000-5G device whose version is 3.4.2 or later.
   * 
   * @remarks
   * You can modify the SNAT configuration of the WAN port only on SCG5000 and SCG5000-5G devices whose version is 3.4.2 or later.
   * 
   * @param request - UpdateSmartAccessGatewayWanSnatRequest
   * @returns UpdateSmartAccessGatewayWanSnatResponse
   */
  async updateSmartAccessGatewayWanSnat(request: $_model.UpdateSmartAccessGatewayWanSnatRequest): Promise<$_model.UpdateSmartAccessGatewayWanSnatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSmartAccessGatewayWanSnatWithOptions(request, runtime);
  }

  /**
   * Increases the bandwidth of a Smart Access Gateway (SAG) instance.
   * 
   * @param request - UpgradeSmartAccessGatewayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeSmartAccessGatewayResponse
   */
  async upgradeSmartAccessGatewayWithOptions(request: $_model.UpgradeSmartAccessGatewayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeSmartAccessGatewayResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.bandWidthSpec)) {
      query["BandWidthSpec"] = request.bandWidthSpec;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeSmartAccessGateway",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradeSmartAccessGatewayResponse>(await this.callApi(params, req, runtime), new $_model.UpgradeSmartAccessGatewayResponse({}));
  }

  /**
   * Increases the bandwidth of a Smart Access Gateway (SAG) instance.
   * 
   * @param request - UpgradeSmartAccessGatewayRequest
   * @returns UpgradeSmartAccessGatewayResponse
   */
  async upgradeSmartAccessGateway(request: $_model.UpgradeSmartAccessGatewayRequest): Promise<$_model.UpgradeSmartAccessGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeSmartAccessGatewayWithOptions(request, runtime);
  }

  /**
   * Increases the maximum number of client accounts supported by a Smart Access Gateway (SAG) app instance.
   * 
   * @param request - UpgradeSmartAccessGatewaySoftwareRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeSmartAccessGatewaySoftwareResponse
   */
  async upgradeSmartAccessGatewaySoftwareWithOptions(request: $_model.UpgradeSmartAccessGatewaySoftwareRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeSmartAccessGatewaySoftwareResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.dataPlan)) {
      query["DataPlan"] = request.dataPlan;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!$dara.isNull(request.userCount)) {
      query["UserCount"] = request.userCount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeSmartAccessGatewaySoftware",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradeSmartAccessGatewaySoftwareResponse>(await this.callApi(params, req, runtime), new $_model.UpgradeSmartAccessGatewaySoftwareResponse({}));
  }

  /**
   * Increases the maximum number of client accounts supported by a Smart Access Gateway (SAG) app instance.
   * 
   * @param request - UpgradeSmartAccessGatewaySoftwareRequest
   * @returns UpgradeSmartAccessGatewaySoftwareResponse
   */
  async upgradeSmartAccessGatewaySoftware(request: $_model.UpgradeSmartAccessGatewaySoftwareRequest): Promise<$_model.UpgradeSmartAccessGatewaySoftwareResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeSmartAccessGatewaySoftwareWithOptions(request, runtime);
  }

  /**
   * Queries the BGP configuration of an SCG5000 or SCG5000-5G device whose version is 3.4.2 or later.
   * 
   * @remarks
   * You can query the BGP configuration only of SCG5000 and SCG5000-5G devices whose version is 3.4.2 or later.
   * 
   * @param request - ViewSmartAccessGatewayBgpRouteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ViewSmartAccessGatewayBgpRouteResponse
   */
  async viewSmartAccessGatewayBgpRouteWithOptions(request: $_model.ViewSmartAccessGatewayBgpRouteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ViewSmartAccessGatewayBgpRouteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.crossAccount)) {
      query["CrossAccount"] = request.crossAccount;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceUid)) {
      query["ResourceUid"] = request.resourceUid;
    }

    if (!$dara.isNull(request.sagInsId)) {
      query["SagInsId"] = request.sagInsId;
    }

    if (!$dara.isNull(request.sagSn)) {
      query["SagSn"] = request.sagSn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ViewSmartAccessGatewayBgpRoute",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ViewSmartAccessGatewayBgpRouteResponse>(await this.callApi(params, req, runtime), new $_model.ViewSmartAccessGatewayBgpRouteResponse({}));
  }

  /**
   * Queries the BGP configuration of an SCG5000 or SCG5000-5G device whose version is 3.4.2 or later.
   * 
   * @remarks
   * You can query the BGP configuration only of SCG5000 and SCG5000-5G devices whose version is 3.4.2 or later.
   * 
   * @param request - ViewSmartAccessGatewayBgpRouteRequest
   * @returns ViewSmartAccessGatewayBgpRouteResponse
   */
  async viewSmartAccessGatewayBgpRoute(request: $_model.ViewSmartAccessGatewayBgpRouteRequest): Promise<$_model.ViewSmartAccessGatewayBgpRouteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.viewSmartAccessGatewayBgpRouteWithOptions(request, runtime);
  }

  /**
   * Queries the DNS configuration of an SCG5000 or SCG5000-5G device whose version is 3.4.2 or later.
   * 
   * @remarks
   * You can query the DNS configuration only of SCG5000 and SCG5000-5G devices whose version is 3.4.2 or later.
   * 
   * @param request - ViewSmartAccessGatewayDnsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ViewSmartAccessGatewayDnsResponse
   */
  async viewSmartAccessGatewayDnsWithOptions(request: $_model.ViewSmartAccessGatewayDnsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ViewSmartAccessGatewayDnsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.crossAccount)) {
      query["CrossAccount"] = request.crossAccount;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceUid)) {
      query["ResourceUid"] = request.resourceUid;
    }

    if (!$dara.isNull(request.sagInsId)) {
      query["SagInsId"] = request.sagInsId;
    }

    if (!$dara.isNull(request.sagSn)) {
      query["SagSn"] = request.sagSn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ViewSmartAccessGatewayDns",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ViewSmartAccessGatewayDnsResponse>(await this.callApi(params, req, runtime), new $_model.ViewSmartAccessGatewayDnsResponse({}));
  }

  /**
   * Queries the DNS configuration of an SCG5000 or SCG5000-5G device whose version is 3.4.2 or later.
   * 
   * @remarks
   * You can query the DNS configuration only of SCG5000 and SCG5000-5G devices whose version is 3.4.2 or later.
   * 
   * @param request - ViewSmartAccessGatewayDnsRequest
   * @returns ViewSmartAccessGatewayDnsResponse
   */
  async viewSmartAccessGatewayDns(request: $_model.ViewSmartAccessGatewayDnsRequest): Promise<$_model.ViewSmartAccessGatewayDnsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.viewSmartAccessGatewayDnsWithOptions(request, runtime);
  }

  /**
   * Queries the DNS forwarding list of a Smart Access Gateway (SAG) SCG5000 or SCG5000-5G instance. The version of the device must be 3.4.2 or later.
   * 
   * @param request - ViewSmartAccessGatewayDnsForwardsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ViewSmartAccessGatewayDnsForwardsResponse
   */
  async viewSmartAccessGatewayDnsForwardsWithOptions(request: $_model.ViewSmartAccessGatewayDnsForwardsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ViewSmartAccessGatewayDnsForwardsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sagInsId)) {
      query["SagInsId"] = request.sagInsId;
    }

    if (!$dara.isNull(request.sagSn)) {
      query["SagSn"] = request.sagSn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ViewSmartAccessGatewayDnsForwards",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ViewSmartAccessGatewayDnsForwardsResponse>(await this.callApi(params, req, runtime), new $_model.ViewSmartAccessGatewayDnsForwardsResponse({}));
  }

  /**
   * Queries the DNS forwarding list of a Smart Access Gateway (SAG) SCG5000 or SCG5000-5G instance. The version of the device must be 3.4.2 or later.
   * 
   * @param request - ViewSmartAccessGatewayDnsForwardsRequest
   * @returns ViewSmartAccessGatewayDnsForwardsResponse
   */
  async viewSmartAccessGatewayDnsForwards(request: $_model.ViewSmartAccessGatewayDnsForwardsRequest): Promise<$_model.ViewSmartAccessGatewayDnsForwardsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.viewSmartAccessGatewayDnsForwardsWithOptions(request, runtime);
  }

  /**
   * Queries the global routing protocol of an SCG5000 or SCG5000-5G device whose version is 3.4.2 or later.
   * 
   * @remarks
   * You can query the global protocol only of SCG5000 and SCG5000-5G devices whose version is 3.4.2 or later.
   * 
   * @param request - ViewSmartAccessGatewayGlobalRouteProtocolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ViewSmartAccessGatewayGlobalRouteProtocolResponse
   */
  async viewSmartAccessGatewayGlobalRouteProtocolWithOptions(request: $_model.ViewSmartAccessGatewayGlobalRouteProtocolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ViewSmartAccessGatewayGlobalRouteProtocolResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.crossAccount)) {
      query["CrossAccount"] = request.crossAccount;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceUid)) {
      query["ResourceUid"] = request.resourceUid;
    }

    if (!$dara.isNull(request.sagInsId)) {
      query["SagInsId"] = request.sagInsId;
    }

    if (!$dara.isNull(request.sagSn)) {
      query["SagSn"] = request.sagSn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ViewSmartAccessGatewayGlobalRouteProtocol",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ViewSmartAccessGatewayGlobalRouteProtocolResponse>(await this.callApi(params, req, runtime), new $_model.ViewSmartAccessGatewayGlobalRouteProtocolResponse({}));
  }

  /**
   * Queries the global routing protocol of an SCG5000 or SCG5000-5G device whose version is 3.4.2 or later.
   * 
   * @remarks
   * You can query the global protocol only of SCG5000 and SCG5000-5G devices whose version is 3.4.2 or later.
   * 
   * @param request - ViewSmartAccessGatewayGlobalRouteProtocolRequest
   * @returns ViewSmartAccessGatewayGlobalRouteProtocolResponse
   */
  async viewSmartAccessGatewayGlobalRouteProtocol(request: $_model.ViewSmartAccessGatewayGlobalRouteProtocolRequest): Promise<$_model.ViewSmartAccessGatewayGlobalRouteProtocolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.viewSmartAccessGatewayGlobalRouteProtocolWithOptions(request, runtime);
  }

  /**
   * Queries the BGP configuration of an SCG5000 or SCG5000-5G device whose version is 3.4.2 or later and has OSPF enabled.
   * 
   * @remarks
   * You can query the BGP configuration only of SCG5000 and SCG5000-5G devices whose version is 3.4.2 or later and have OSPF enabled.
   * 
   * @param request - ViewSmartAccessGatewayOspfRouteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ViewSmartAccessGatewayOspfRouteResponse
   */
  async viewSmartAccessGatewayOspfRouteWithOptions(request: $_model.ViewSmartAccessGatewayOspfRouteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ViewSmartAccessGatewayOspfRouteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.crossAccount)) {
      query["CrossAccount"] = request.crossAccount;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceUid)) {
      query["ResourceUid"] = request.resourceUid;
    }

    if (!$dara.isNull(request.sagInsId)) {
      query["SagInsId"] = request.sagInsId;
    }

    if (!$dara.isNull(request.sagSn)) {
      query["SagSn"] = request.sagSn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ViewSmartAccessGatewayOspfRoute",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ViewSmartAccessGatewayOspfRouteResponse>(await this.callApi(params, req, runtime), new $_model.ViewSmartAccessGatewayOspfRouteResponse({}));
  }

  /**
   * Queries the BGP configuration of an SCG5000 or SCG5000-5G device whose version is 3.4.2 or later and has OSPF enabled.
   * 
   * @remarks
   * You can query the BGP configuration only of SCG5000 and SCG5000-5G devices whose version is 3.4.2 or later and have OSPF enabled.
   * 
   * @param request - ViewSmartAccessGatewayOspfRouteRequest
   * @returns ViewSmartAccessGatewayOspfRouteResponse
   */
  async viewSmartAccessGatewayOspfRoute(request: $_model.ViewSmartAccessGatewayOspfRouteRequest): Promise<$_model.ViewSmartAccessGatewayOspfRouteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.viewSmartAccessGatewayOspfRouteWithOptions(request, runtime);
  }

  /**
   * Queries the ports that have routing protocols enabled on an SAG SCG5000 or SCG5000-5G device whose version is 3.4.2 or later.
   * 
   * @param request - ViewSmartAccessGatewayPortRouteProtocolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ViewSmartAccessGatewayPortRouteProtocolResponse
   */
  async viewSmartAccessGatewayPortRouteProtocolWithOptions(request: $_model.ViewSmartAccessGatewayPortRouteProtocolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ViewSmartAccessGatewayPortRouteProtocolResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.crossAccount)) {
      query["CrossAccount"] = request.crossAccount;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceUid)) {
      query["ResourceUid"] = request.resourceUid;
    }

    if (!$dara.isNull(request.sagInsId)) {
      query["SagInsId"] = request.sagInsId;
    }

    if (!$dara.isNull(request.sagSn)) {
      query["SagSn"] = request.sagSn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ViewSmartAccessGatewayPortRouteProtocol",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ViewSmartAccessGatewayPortRouteProtocolResponse>(await this.callApi(params, req, runtime), new $_model.ViewSmartAccessGatewayPortRouteProtocolResponse({}));
  }

  /**
   * Queries the ports that have routing protocols enabled on an SAG SCG5000 or SCG5000-5G device whose version is 3.4.2 or later.
   * 
   * @param request - ViewSmartAccessGatewayPortRouteProtocolRequest
   * @returns ViewSmartAccessGatewayPortRouteProtocolResponse
   */
  async viewSmartAccessGatewayPortRouteProtocol(request: $_model.ViewSmartAccessGatewayPortRouteProtocolRequest): Promise<$_model.ViewSmartAccessGatewayPortRouteProtocolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.viewSmartAccessGatewayPortRouteProtocolWithOptions(request, runtime);
  }

  /**
   * Queries the route details about an SCG5000 or SCG5000-5G device whose version is 3.4.2 or later.
   * 
   * @remarks
   * You can query the route details only of SCG5000 and SCG5000-5G devices whose version is 3.4.2 or later.
   * 
   * @param request - ViewSmartAccessGatewayRoutesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ViewSmartAccessGatewayRoutesResponse
   */
  async viewSmartAccessGatewayRoutesWithOptions(request: $_model.ViewSmartAccessGatewayRoutesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ViewSmartAccessGatewayRoutesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.crossAccount)) {
      query["CrossAccount"] = request.crossAccount;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceUid)) {
      query["ResourceUid"] = request.resourceUid;
    }

    if (!$dara.isNull(request.sagInsId)) {
      query["SagInsId"] = request.sagInsId;
    }

    if (!$dara.isNull(request.sagSn)) {
      query["SagSn"] = request.sagSn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ViewSmartAccessGatewayRoutes",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ViewSmartAccessGatewayRoutesResponse>(await this.callApi(params, req, runtime), new $_model.ViewSmartAccessGatewayRoutesResponse({}));
  }

  /**
   * Queries the route details about an SCG5000 or SCG5000-5G device whose version is 3.4.2 or later.
   * 
   * @remarks
   * You can query the route details only of SCG5000 and SCG5000-5G devices whose version is 3.4.2 or later.
   * 
   * @param request - ViewSmartAccessGatewayRoutesRequest
   * @returns ViewSmartAccessGatewayRoutesResponse
   */
  async viewSmartAccessGatewayRoutes(request: $_model.ViewSmartAccessGatewayRoutesRequest): Promise<$_model.ViewSmartAccessGatewayRoutesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.viewSmartAccessGatewayRoutesWithOptions(request, runtime);
  }

  /**
   * Queries the Source Network Address Translation (SNAT) configuration of the WAN port on an SCG5000 or SCG5000-5G device whose version is 3.4.2 or later.
   * 
   * @remarks
   * You can query the SNAT configuration of the WAN port only of SCG5000 and SCG5000-5G devices whose version is 3.4.2 or later.
   * 
   * @param request - ViewSmartAccessGatewayWanSnatRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ViewSmartAccessGatewayWanSnatResponse
   */
  async viewSmartAccessGatewayWanSnatWithOptions(request: $_model.ViewSmartAccessGatewayWanSnatRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ViewSmartAccessGatewayWanSnatResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.crossAccount)) {
      query["CrossAccount"] = request.crossAccount;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceUid)) {
      query["ResourceUid"] = request.resourceUid;
    }

    if (!$dara.isNull(request.sagInsId)) {
      query["SagInsId"] = request.sagInsId;
    }

    if (!$dara.isNull(request.sagSn)) {
      query["SagSn"] = request.sagSn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ViewSmartAccessGatewayWanSnat",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ViewSmartAccessGatewayWanSnatResponse>(await this.callApi(params, req, runtime), new $_model.ViewSmartAccessGatewayWanSnatResponse({}));
  }

  /**
   * Queries the Source Network Address Translation (SNAT) configuration of the WAN port on an SCG5000 or SCG5000-5G device whose version is 3.4.2 or later.
   * 
   * @remarks
   * You can query the SNAT configuration of the WAN port only of SCG5000 and SCG5000-5G devices whose version is 3.4.2 or later.
   * 
   * @param request - ViewSmartAccessGatewayWanSnatRequest
   * @returns ViewSmartAccessGatewayWanSnatResponse
   */
  async viewSmartAccessGatewayWanSnat(request: $_model.ViewSmartAccessGatewayWanSnatRequest): Promise<$_model.ViewSmartAccessGatewayWanSnatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.viewSmartAccessGatewayWanSnatWithOptions(request, runtime);
  }

}
