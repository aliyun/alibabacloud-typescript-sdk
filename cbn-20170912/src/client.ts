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
    this._endpoint = this.getEndpoint("cbn", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Enables a flow log. After the flow log is enabled, the system collects traffic information about a specified resource.
   * 
   * @remarks
   *   After you create a flow log, it is enabled by default. You can call this operation to enable a disabled flow log.
   * *   `ActiveFlowLog` is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the `DescribeFlowlogs` operation to query the status of a flow log.
   *     *   If a flow log is in the **Modifying** state, the flow log is being enabled. In this case, you can query the flow log but cannot perform other operations.
   *     *   If a flow log is in the **Active** state, the flow log is enabled.
   * 
   * @param request - ActiveFlowLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ActiveFlowLogResponse
   */
  async activeFlowLogWithOptions(request: $_model.ActiveFlowLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ActiveFlowLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

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
      version: "2017-09-12",
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
   * Enables a flow log. After the flow log is enabled, the system collects traffic information about a specified resource.
   * 
   * @remarks
   *   After you create a flow log, it is enabled by default. You can call this operation to enable a disabled flow log.
   * *   `ActiveFlowLog` is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the `DescribeFlowlogs` operation to query the status of a flow log.
   *     *   If a flow log is in the **Modifying** state, the flow log is being enabled. In this case, you can query the flow log but cannot perform other operations.
   *     *   If a flow log is in the **Active** state, the flow log is enabled.
   * 
   * @param request - ActiveFlowLogRequest
   * @returns ActiveFlowLogResponse
   */
  async activeFlowLog(request: $_model.ActiveFlowLogRequest): Promise<$_model.ActiveFlowLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.activeFlowLogWithOptions(request, runtime);
  }

  /**
   * Adds a traffic classification rule to a traffic marking policy.
   * 
   * @remarks
   * *AddTrafficMatchRuleToTrafficMarkingPolicy** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **ListTrafficMarkingPolicies** operation to query the status of a traffic classification rule.
   * *   If a traffic classification rule is in the **Creating** state, the traffic classification rule is being created. In this case, you can query the traffic classification rule but cannot perform other operations.
   * *   If a traffic classification rule is in the **Active** state, the traffic classification rule is added to the traffic marking policy.
   * 
   * @param request - AddTrafficMatchRuleToTrafficMarkingPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddTrafficMatchRuleToTrafficMarkingPolicyResponse
   */
  async addTrafficMatchRuleToTrafficMarkingPolicyWithOptions(request: $_model.AddTrafficMatchRuleToTrafficMarkingPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddTrafficMatchRuleToTrafficMarkingPolicyResponse> {
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.trafficMarkingPolicyId)) {
      query["TrafficMarkingPolicyId"] = request.trafficMarkingPolicyId;
    }

    if (!$dara.isNull(request.trafficMatchRules)) {
      query["TrafficMatchRules"] = request.trafficMatchRules;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddTrafficMatchRuleToTrafficMarkingPolicy",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddTrafficMatchRuleToTrafficMarkingPolicyResponse>(await this.callApi(params, req, runtime), new $_model.AddTrafficMatchRuleToTrafficMarkingPolicyResponse({}));
  }

  /**
   * Adds a traffic classification rule to a traffic marking policy.
   * 
   * @remarks
   * *AddTrafficMatchRuleToTrafficMarkingPolicy** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **ListTrafficMarkingPolicies** operation to query the status of a traffic classification rule.
   * *   If a traffic classification rule is in the **Creating** state, the traffic classification rule is being created. In this case, you can query the traffic classification rule but cannot perform other operations.
   * *   If a traffic classification rule is in the **Active** state, the traffic classification rule is added to the traffic marking policy.
   * 
   * @param request - AddTrafficMatchRuleToTrafficMarkingPolicyRequest
   * @returns AddTrafficMatchRuleToTrafficMarkingPolicyResponse
   */
  async addTrafficMatchRuleToTrafficMarkingPolicy(request: $_model.AddTrafficMatchRuleToTrafficMarkingPolicyRequest): Promise<$_model.AddTrafficMatchRuleToTrafficMarkingPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addTrafficMatchRuleToTrafficMarkingPolicyWithOptions(request, runtime);
  }

  /**
   * Adds a traffic classification rule to a traffic marking policy.
   * 
   * @remarks
   * ### Usage notes
   * The **AddTraficMatchRuleToTrafficMarkingPolicy** operation is deprecated and will be discontinued soon. If you need to add a traffic classification rule to a traffic marking policy, call the [AddTrafficMatchRuleToTrafficMarkingPolicy](https://help.aliyun.com/document_detail/427602.html) operation.
   * 
   * @deprecated OpenAPI AddTraficMatchRuleToTrafficMarkingPolicy is deprecated, please use Cbn::2017-09-12::AddTrafficMatchRuleToTrafficMarkingPolicy instead.
   * 
   * @param request - AddTraficMatchRuleToTrafficMarkingPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddTraficMatchRuleToTrafficMarkingPolicyResponse
   */
  // Deprecated
  async addTraficMatchRuleToTrafficMarkingPolicyWithOptions(request: $_model.AddTraficMatchRuleToTrafficMarkingPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddTraficMatchRuleToTrafficMarkingPolicyResponse> {
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.trafficMarkingPolicyId)) {
      query["TrafficMarkingPolicyId"] = request.trafficMarkingPolicyId;
    }

    if (!$dara.isNull(request.trafficMatchRules)) {
      query["TrafficMatchRules"] = request.trafficMatchRules;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddTraficMatchRuleToTrafficMarkingPolicy",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddTraficMatchRuleToTrafficMarkingPolicyResponse>(await this.callApi(params, req, runtime), new $_model.AddTraficMatchRuleToTrafficMarkingPolicyResponse({}));
  }

  /**
   * Adds a traffic classification rule to a traffic marking policy.
   * 
   * @remarks
   * ### Usage notes
   * The **AddTraficMatchRuleToTrafficMarkingPolicy** operation is deprecated and will be discontinued soon. If you need to add a traffic classification rule to a traffic marking policy, call the [AddTrafficMatchRuleToTrafficMarkingPolicy](https://help.aliyun.com/document_detail/427602.html) operation.
   * 
   * @deprecated OpenAPI AddTraficMatchRuleToTrafficMarkingPolicy is deprecated, please use Cbn::2017-09-12::AddTrafficMatchRuleToTrafficMarkingPolicy instead.
   * 
   * @param request - AddTraficMatchRuleToTrafficMarkingPolicyRequest
   * @returns AddTraficMatchRuleToTrafficMarkingPolicyResponse
   */
  // Deprecated
  async addTraficMatchRuleToTrafficMarkingPolicy(request: $_model.AddTraficMatchRuleToTrafficMarkingPolicyRequest): Promise<$_model.AddTraficMatchRuleToTrafficMarkingPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addTraficMatchRuleToTrafficMarkingPolicyWithOptions(request, runtime);
  }

  /**
   * Associates a bandwidth plan with a Cloud Enterprise Network (CEN) instance.
   * 
   * @remarks
   * You can associate multiple bandwidth plans with a CEN instance. However, the pair of areas connected by each bandwidth plan must be unique.
   * For example, if a CEN instance is associated with a bandwidth plan that connects networks in the Chinese mainland, you cannot associate another bandwidth plan that also connects networks in the Chinese mainland with the CEN instance. However, you can associate a bandwidth plan that connects the Chinese mainland to North America with the CEN instance.
   * 
   * @param request - AssociateCenBandwidthPackageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssociateCenBandwidthPackageResponse
   */
  async associateCenBandwidthPackageWithOptions(request: $_model.AssociateCenBandwidthPackageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssociateCenBandwidthPackageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cenBandwidthPackageId)) {
      query["CenBandwidthPackageId"] = request.cenBandwidthPackageId;
    }

    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
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
      action: "AssociateCenBandwidthPackage",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssociateCenBandwidthPackageResponse>(await this.callApi(params, req, runtime), new $_model.AssociateCenBandwidthPackageResponse({}));
  }

  /**
   * Associates a bandwidth plan with a Cloud Enterprise Network (CEN) instance.
   * 
   * @remarks
   * You can associate multiple bandwidth plans with a CEN instance. However, the pair of areas connected by each bandwidth plan must be unique.
   * For example, if a CEN instance is associated with a bandwidth plan that connects networks in the Chinese mainland, you cannot associate another bandwidth plan that also connects networks in the Chinese mainland with the CEN instance. However, you can associate a bandwidth plan that connects the Chinese mainland to North America with the CEN instance.
   * 
   * @param request - AssociateCenBandwidthPackageRequest
   * @returns AssociateCenBandwidthPackageResponse
   */
  async associateCenBandwidthPackage(request: $_model.AssociateCenBandwidthPackageRequest): Promise<$_model.AssociateCenBandwidthPackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.associateCenBandwidthPackageWithOptions(request, runtime);
  }

  /**
   * Creates an associated forwarding correlation.
   * 
   * @remarks
   * After you create a network instance connection on a transit router, you can configure an associated forwarding correlation to associate the network instance connection with the route table of an Enterprise Edition transit router. The Enterprise Edition transit router forwards traffic for the network instance based on the routes in the route table. Before you begin, we recommend that you take note of the following rules:
   * *   Only route tables of Enterprise Edition transit routers support associated forwarding correlations. For more information about the regions and zones that support Enterprise Edition transit routers, see [What is CEN?](https://help.aliyun.com/document_detail/181681.html)
   * *   Each network instance connection can have an associated forwarding correlation with only one route table of only one Enterprise Edition transit router.
   * *   **AssociateTransitRouterAttachmentWithRouteTable** is an asynchronous operation. After a request is sent, the system returns a **request ID** and runs the task in the background. You can call the **ListTransitRouterRouteTableAssociations** operation to query the status of an associated forwarding correlation.
   *     *   If an associated forwarding correlation is in the **Associating** state, the associated forwarding correlation is being created. You can query the associated forwarding correlation but cannot perform other operations.
   *     *   If an associated forwarding correlation is in the **Active** state, the associated forwarding correlation is created.
   * 
   * @param request - AssociateTransitRouterAttachmentWithRouteTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssociateTransitRouterAttachmentWithRouteTableResponse
   */
  async associateTransitRouterAttachmentWithRouteTableWithOptions(request: $_model.AssociateTransitRouterAttachmentWithRouteTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssociateTransitRouterAttachmentWithRouteTableResponse> {
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    if (!$dara.isNull(request.transitRouterRouteTableId)) {
      query["TransitRouterRouteTableId"] = request.transitRouterRouteTableId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssociateTransitRouterAttachmentWithRouteTable",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssociateTransitRouterAttachmentWithRouteTableResponse>(await this.callApi(params, req, runtime), new $_model.AssociateTransitRouterAttachmentWithRouteTableResponse({}));
  }

  /**
   * Creates an associated forwarding correlation.
   * 
   * @remarks
   * After you create a network instance connection on a transit router, you can configure an associated forwarding correlation to associate the network instance connection with the route table of an Enterprise Edition transit router. The Enterprise Edition transit router forwards traffic for the network instance based on the routes in the route table. Before you begin, we recommend that you take note of the following rules:
   * *   Only route tables of Enterprise Edition transit routers support associated forwarding correlations. For more information about the regions and zones that support Enterprise Edition transit routers, see [What is CEN?](https://help.aliyun.com/document_detail/181681.html)
   * *   Each network instance connection can have an associated forwarding correlation with only one route table of only one Enterprise Edition transit router.
   * *   **AssociateTransitRouterAttachmentWithRouteTable** is an asynchronous operation. After a request is sent, the system returns a **request ID** and runs the task in the background. You can call the **ListTransitRouterRouteTableAssociations** operation to query the status of an associated forwarding correlation.
   *     *   If an associated forwarding correlation is in the **Associating** state, the associated forwarding correlation is being created. You can query the associated forwarding correlation but cannot perform other operations.
   *     *   If an associated forwarding correlation is in the **Active** state, the associated forwarding correlation is created.
   * 
   * @param request - AssociateTransitRouterAttachmentWithRouteTableRequest
   * @returns AssociateTransitRouterAttachmentWithRouteTableResponse
   */
  async associateTransitRouterAttachmentWithRouteTable(request: $_model.AssociateTransitRouterAttachmentWithRouteTableRequest): Promise<$_model.AssociateTransitRouterAttachmentWithRouteTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.associateTransitRouterAttachmentWithRouteTableWithOptions(request, runtime);
  }

  /**
   * Associates the vSwitch of a virtual private cloud (VPC) with a multicast domain.
   * 
   * @remarks
   * - A vSwitch can be associated with only one multicast domain. Make sure that the vSwitch is not associated with other multicast domains. For more information about how to disassociate a vSwitch from a multicast domain, see [DisassociateTransitRouterMulticastDomain](https://help.aliyun.com/document_detail/429774.html).
   * - AssociateTransitRouterMulticastDomain is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the ListTransitRouterMulticastDomainAssociations operation to query whether a vSwitch is associated with the specified multicast domain.
   *   - If the status is Associating, it indicates that the vSwitch is being associated with the specified multicast domain. You can query the vSwitch but cannot perform other operations on the vSwitch.
   *   - If the status is Associated, the vSwitch is associated with the specified multicast domain.
   * - The VPC of the vSwitch must be associated with an Enterprise Edition transit router. For more information about how to associate a VPC with an Enterprise Edition transit router, see [CreateTransitRouterVpcAttachment](https://help.aliyun.com/document_detail/468237.html).
   * 
   * @param request - AssociateTransitRouterMulticastDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssociateTransitRouterMulticastDomainResponse
   */
  async associateTransitRouterMulticastDomainWithOptions(request: $_model.AssociateTransitRouterMulticastDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssociateTransitRouterMulticastDomainResponse> {
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    if (!$dara.isNull(request.transitRouterMulticastDomainId)) {
      query["TransitRouterMulticastDomainId"] = request.transitRouterMulticastDomainId;
    }

    if (!$dara.isNull(request.vSwitchIds)) {
      query["VSwitchIds"] = request.vSwitchIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssociateTransitRouterMulticastDomain",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssociateTransitRouterMulticastDomainResponse>(await this.callApi(params, req, runtime), new $_model.AssociateTransitRouterMulticastDomainResponse({}));
  }

  /**
   * Associates the vSwitch of a virtual private cloud (VPC) with a multicast domain.
   * 
   * @remarks
   * - A vSwitch can be associated with only one multicast domain. Make sure that the vSwitch is not associated with other multicast domains. For more information about how to disassociate a vSwitch from a multicast domain, see [DisassociateTransitRouterMulticastDomain](https://help.aliyun.com/document_detail/429774.html).
   * - AssociateTransitRouterMulticastDomain is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the ListTransitRouterMulticastDomainAssociations operation to query whether a vSwitch is associated with the specified multicast domain.
   *   - If the status is Associating, it indicates that the vSwitch is being associated with the specified multicast domain. You can query the vSwitch but cannot perform other operations on the vSwitch.
   *   - If the status is Associated, the vSwitch is associated with the specified multicast domain.
   * - The VPC of the vSwitch must be associated with an Enterprise Edition transit router. For more information about how to associate a VPC with an Enterprise Edition transit router, see [CreateTransitRouterVpcAttachment](https://help.aliyun.com/document_detail/468237.html).
   * 
   * @param request - AssociateTransitRouterMulticastDomainRequest
   * @returns AssociateTransitRouterMulticastDomainResponse
   */
  async associateTransitRouterMulticastDomain(request: $_model.AssociateTransitRouterMulticastDomainRequest): Promise<$_model.AssociateTransitRouterMulticastDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.associateTransitRouterMulticastDomainWithOptions(request, runtime);
  }

  /**
   * Attaches a network instance to a Cloud Enterprise Network (CEN) instance.
   * 
   * @remarks
   * CEN allows you to attach a network instance that belongs to another Alibaba Cloud account to your CEN instance. Before you attach the network instance, CEN must acquire permissions to access the network instance that belongs to another Alibaba Cloud account.
   * *   For more information about how to grant CEN permissions on virtual private clouds (VPCs) that belong to another Alibaba Cloud account, see [GrantInstanceToCen](https://help.aliyun.com/document_detail/126224.html).
   * *   For more information about how to grant CEN permissions on Cloud Connect Network (CCN) instances that belong to another Alibaba Cloud account, see [GrantInstanceToCbn](https://help.aliyun.com/document_detail/126141.html).
   * *   By default, you cannot grant permissions on virtual border routers (VBRs) that belong to another Alibaba Cloud account to a CEN instance. If you need to use this feature, contact your account manager.
   * 
   * @param request - AttachCenChildInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachCenChildInstanceResponse
   */
  async attachCenChildInstanceWithOptions(request: $_model.AttachCenChildInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachCenChildInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.childInstanceId)) {
      query["ChildInstanceId"] = request.childInstanceId;
    }

    if (!$dara.isNull(request.childInstanceOwnerId)) {
      query["ChildInstanceOwnerId"] = request.childInstanceOwnerId;
    }

    if (!$dara.isNull(request.childInstanceRegionId)) {
      query["ChildInstanceRegionId"] = request.childInstanceRegionId;
    }

    if (!$dara.isNull(request.childInstanceType)) {
      query["ChildInstanceType"] = request.childInstanceType;
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
      action: "AttachCenChildInstance",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachCenChildInstanceResponse>(await this.callApi(params, req, runtime), new $_model.AttachCenChildInstanceResponse({}));
  }

  /**
   * Attaches a network instance to a Cloud Enterprise Network (CEN) instance.
   * 
   * @remarks
   * CEN allows you to attach a network instance that belongs to another Alibaba Cloud account to your CEN instance. Before you attach the network instance, CEN must acquire permissions to access the network instance that belongs to another Alibaba Cloud account.
   * *   For more information about how to grant CEN permissions on virtual private clouds (VPCs) that belong to another Alibaba Cloud account, see [GrantInstanceToCen](https://help.aliyun.com/document_detail/126224.html).
   * *   For more information about how to grant CEN permissions on Cloud Connect Network (CCN) instances that belong to another Alibaba Cloud account, see [GrantInstanceToCbn](https://help.aliyun.com/document_detail/126141.html).
   * *   By default, you cannot grant permissions on virtual border routers (VBRs) that belong to another Alibaba Cloud account to a CEN instance. If you need to use this feature, contact your account manager.
   * 
   * @param request - AttachCenChildInstanceRequest
   * @returns AttachCenChildInstanceResponse
   */
  async attachCenChildInstance(request: $_model.AttachCenChildInstanceRequest): Promise<$_model.AttachCenChildInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachCenChildInstanceWithOptions(request, runtime);
  }

  /**
   * Queries whether your Alibaba Cloud account has the transit router feature activated.
   * 
   * @param request - CheckTransitRouterServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckTransitRouterServiceResponse
   */
  async checkTransitRouterServiceWithOptions(request: $_model.CheckTransitRouterServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckTransitRouterServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
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
      action: "CheckTransitRouterService",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckTransitRouterServiceResponse>(await this.callApi(params, req, runtime), new $_model.CheckTransitRouterServiceResponse({}));
  }

  /**
   * Queries whether your Alibaba Cloud account has the transit router feature activated.
   * 
   * @param request - CheckTransitRouterServiceRequest
   * @returns CheckTransitRouterServiceResponse
   */
  async checkTransitRouterService(request: $_model.CheckTransitRouterServiceRequest): Promise<$_model.CheckTransitRouterServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkTransitRouterServiceWithOptions(request, runtime);
  }

  /**
   * Cloud Enterprise Network (CEN) instances are basic network resources that are used to manage interconnected networks. You can use a CEN instance to manage a network that covers one or multiple regions. Before you can connect network instances, you must first call the CreateCen operation to create a CEN instance.
   * 
   * @remarks
   * *CreateCen** is an asynchronous operation. After you a request is sent, the system returns a request ID and runs the task in the background. You can call **DescribeCens** to query the status of the task.
   * *   If a CEN instance is in the **Creating** state, the CEN instance is being created. You can query the CEN instance but cannot perform other operations.
   * *   If a CEN instance is in the **Active** state, the CEN instance is created.
   * 
   * @param request - CreateCenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCenResponse
   */
  async createCenWithOptions(request: $_model.CreateCenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
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

    if (!$dara.isNull(request.protectionLevel)) {
      query["ProtectionLevel"] = request.protectionLevel;
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
      action: "CreateCen",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCenResponse>(await this.callApi(params, req, runtime), new $_model.CreateCenResponse({}));
  }

  /**
   * Cloud Enterprise Network (CEN) instances are basic network resources that are used to manage interconnected networks. You can use a CEN instance to manage a network that covers one or multiple regions. Before you can connect network instances, you must first call the CreateCen operation to create a CEN instance.
   * 
   * @remarks
   * *CreateCen** is an asynchronous operation. After you a request is sent, the system returns a request ID and runs the task in the background. You can call **DescribeCens** to query the status of the task.
   * *   If a CEN instance is in the **Creating** state, the CEN instance is being created. You can query the CEN instance but cannot perform other operations.
   * *   If a CEN instance is in the **Active** state, the CEN instance is created.
   * 
   * @param request - CreateCenRequest
   * @returns CreateCenResponse
   */
  async createCen(request: $_model.CreateCenRequest): Promise<$_model.CreateCenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCenWithOptions(request, runtime);
  }

  /**
   * Creates a bandwidth plan.
   * 
   * @remarks
   *   You must specify the areas to be connected when you create a bandwidth plan. An area contains one or more Alibaba Cloud regions. When you select areas for a bandwidth plan, make sure that the areas contain the regions that you want to connect. For more information about the supported areas and regions, see [Purchase a bandwidth plan](https://help.aliyun.com/document_detail/181560.html).
   * *   For more information about the billing rules, see [Billing](https://help.aliyun.com/document_detail/189836.html).
   * *   **CreateCenBandwidthPackage** is an asynchronous operation. After you send a request, the system returns a bandwidth plan instance ID and runs the task in the background. You can call the **DescribeCenBandwidthPackages** operation to query the status of a bandwidth plan. If a bandwidth plan is in the **Idle** or **InUse** state, the bandwidth plan is created.
   * 
   * @param request - CreateCenBandwidthPackageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCenBandwidthPackageResponse
   */
  async createCenBandwidthPackageWithOptions(request: $_model.CreateCenBandwidthPackageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCenBandwidthPackageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.autoRenewDuration)) {
      query["AutoRenewDuration"] = request.autoRenewDuration;
    }

    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.bandwidthPackageChargeType)) {
      query["BandwidthPackageChargeType"] = request.bandwidthPackageChargeType;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.geographicRegionAId)) {
      query["GeographicRegionAId"] = request.geographicRegionAId;
    }

    if (!$dara.isNull(request.geographicRegionBId)) {
      query["GeographicRegionBId"] = request.geographicRegionBId;
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

    if (!$dara.isNull(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
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
      action: "CreateCenBandwidthPackage",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCenBandwidthPackageResponse>(await this.callApi(params, req, runtime), new $_model.CreateCenBandwidthPackageResponse({}));
  }

  /**
   * Creates a bandwidth plan.
   * 
   * @remarks
   *   You must specify the areas to be connected when you create a bandwidth plan. An area contains one or more Alibaba Cloud regions. When you select areas for a bandwidth plan, make sure that the areas contain the regions that you want to connect. For more information about the supported areas and regions, see [Purchase a bandwidth plan](https://help.aliyun.com/document_detail/181560.html).
   * *   For more information about the billing rules, see [Billing](https://help.aliyun.com/document_detail/189836.html).
   * *   **CreateCenBandwidthPackage** is an asynchronous operation. After you send a request, the system returns a bandwidth plan instance ID and runs the task in the background. You can call the **DescribeCenBandwidthPackages** operation to query the status of a bandwidth plan. If a bandwidth plan is in the **Idle** or **InUse** state, the bandwidth plan is created.
   * 
   * @param request - CreateCenBandwidthPackageRequest
   * @returns CreateCenBandwidthPackageResponse
   */
  async createCenBandwidthPackage(request: $_model.CreateCenBandwidthPackageRequest): Promise<$_model.CreateCenBandwidthPackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCenBandwidthPackageWithOptions(request, runtime);
  }

  /**
   * Adds a route entry to a network instance and sets the next hop of the destination CIDR block to the transit router in the current region.
   * 
   * @remarks
   *   You can add routes only to virtual private clouds (VPCs) or virtual border routers (VBRs) that are connected to an Enterprise Edition transit router.
   * *   By default, the next hop of the routes is the **transit router connection**, which is the connection between the VBR and the Enterprise Edition transit router. You cannot modify the next hop.
   * *   **CreateCenChildInstanceRouteEntryToAttachment** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **DescribeRouteEntryList** operation to query the status of a route.
   *     *   If a route is in the **Pending** state, the route is being created. You can query the route but cannot perform other operations.
   *     *   If a route is in the **Available** state, the route is created.
   * 
   * @param request - CreateCenChildInstanceRouteEntryToAttachmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCenChildInstanceRouteEntryToAttachmentResponse
   */
  async createCenChildInstanceRouteEntryToAttachmentWithOptions(request: $_model.CreateCenChildInstanceRouteEntryToAttachmentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCenChildInstanceRouteEntryToAttachmentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.destinationCidrBlock)) {
      query["DestinationCidrBlock"] = request.destinationCidrBlock;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.routeTableId)) {
      query["RouteTableId"] = request.routeTableId;
    }

    if (!$dara.isNull(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCenChildInstanceRouteEntryToAttachment",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCenChildInstanceRouteEntryToAttachmentResponse>(await this.callApi(params, req, runtime), new $_model.CreateCenChildInstanceRouteEntryToAttachmentResponse({}));
  }

  /**
   * Adds a route entry to a network instance and sets the next hop of the destination CIDR block to the transit router in the current region.
   * 
   * @remarks
   *   You can add routes only to virtual private clouds (VPCs) or virtual border routers (VBRs) that are connected to an Enterprise Edition transit router.
   * *   By default, the next hop of the routes is the **transit router connection**, which is the connection between the VBR and the Enterprise Edition transit router. You cannot modify the next hop.
   * *   **CreateCenChildInstanceRouteEntryToAttachment** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **DescribeRouteEntryList** operation to query the status of a route.
   *     *   If a route is in the **Pending** state, the route is being created. You can query the route but cannot perform other operations.
   *     *   If a route is in the **Available** state, the route is created.
   * 
   * @param request - CreateCenChildInstanceRouteEntryToAttachmentRequest
   * @returns CreateCenChildInstanceRouteEntryToAttachmentResponse
   */
  async createCenChildInstanceRouteEntryToAttachment(request: $_model.CreateCenChildInstanceRouteEntryToAttachmentRequest): Promise<$_model.CreateCenChildInstanceRouteEntryToAttachmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCenChildInstanceRouteEntryToAttachmentWithOptions(request, runtime);
  }

  /**
   * Adds routes to a network instance.
   * 
   * @remarks
   * ## Limits
   * *   By default, the CreateCenChildInstanceRouteEntryToCen operation is unavailable. To call this operation,[submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
   * *   You cannot add a route entry to an Enterprise Edition transit router by calling the CreateCenChildInstanceRouteEntryToCen operation.
   * *   By default, the next hop of the route entry is the regional gateway of the Cloud Enterprise Network (CEN) instance. You cannot modify the next hop.
   * 
   * @param request - CreateCenChildInstanceRouteEntryToCenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCenChildInstanceRouteEntryToCenResponse
   */
  async createCenChildInstanceRouteEntryToCenWithOptions(request: $_model.CreateCenChildInstanceRouteEntryToCenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCenChildInstanceRouteEntryToCenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.childInstanceAliUid)) {
      query["ChildInstanceAliUid"] = request.childInstanceAliUid;
    }

    if (!$dara.isNull(request.childInstanceId)) {
      query["ChildInstanceId"] = request.childInstanceId;
    }

    if (!$dara.isNull(request.childInstanceRegionId)) {
      query["ChildInstanceRegionId"] = request.childInstanceRegionId;
    }

    if (!$dara.isNull(request.childInstanceType)) {
      query["ChildInstanceType"] = request.childInstanceType;
    }

    if (!$dara.isNull(request.destinationCidrBlock)) {
      query["DestinationCidrBlock"] = request.destinationCidrBlock;
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

    if (!$dara.isNull(request.routeTableId)) {
      query["RouteTableId"] = request.routeTableId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCenChildInstanceRouteEntryToCen",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCenChildInstanceRouteEntryToCenResponse>(await this.callApi(params, req, runtime), new $_model.CreateCenChildInstanceRouteEntryToCenResponse({}));
  }

  /**
   * Adds routes to a network instance.
   * 
   * @remarks
   * ## Limits
   * *   By default, the CreateCenChildInstanceRouteEntryToCen operation is unavailable. To call this operation,[submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
   * *   You cannot add a route entry to an Enterprise Edition transit router by calling the CreateCenChildInstanceRouteEntryToCen operation.
   * *   By default, the next hop of the route entry is the regional gateway of the Cloud Enterprise Network (CEN) instance. You cannot modify the next hop.
   * 
   * @param request - CreateCenChildInstanceRouteEntryToCenRequest
   * @returns CreateCenChildInstanceRouteEntryToCenResponse
   */
  async createCenChildInstanceRouteEntryToCen(request: $_model.CreateCenChildInstanceRouteEntryToCenRequest): Promise<$_model.CreateCenChildInstanceRouteEntryToCenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCenChildInstanceRouteEntryToCenWithOptions(request, runtime);
  }

  /**
   * Creates a quality of service (QoS) policy for an inter-region connection on an Enterprise Edition transit router.
   * 
   * @remarks
   *   Only inter-region connections created on Enterprise Edition transit routers support QoS policies.
   * *   Traffic scheduling applies only to outbound traffic on Enterprise Edition transit routers.
   *     For example, you create an inter-region connection between the China (Hangzhou) and China (Qingdao) regions, and create a QoS policy for the transit router in the China (Hangzhou) region. In this case, the QoS policy can ensure bandwidth for network traffic from the China (Hangzhou) region to the China (Qingdao) region. However, the QoS policy does not apply to network traffic from the China (Qingdao) region to the China (Hangzhou) region.
   * *   **CreateCenInterRegionTrafficQosPolicy** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the **ListCenInterRegionTrafficQosPolicies** operation to query the status of the task.
   *     *   If the QoS policy is in the **Creating** state, the QoS policy is being created. You can query the QoS policy but cannot perform other operations on the QoS policy.
   *     *   If the QoS policy is in the **Active** state, the QoS policy is created.
   * ### [](#)Prerequisites
   * Before you call the **CreateCenInterRegionTrafficQosPolicy** operation, make sure that the following requirements are met:
   * *   An inter-region connection is created. For more information, see [CreateTransitRouterPeerAttachment](https://help.aliyun.com/document_detail/261363.html).
   * *   A traffic marking policy is created. For more information, see [CreateTrafficMarkingPolicy](https://help.aliyun.com/document_detail/419025.html).
   * 
   * @param request - CreateCenInterRegionTrafficQosPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCenInterRegionTrafficQosPolicyResponse
   */
  async createCenInterRegionTrafficQosPolicyWithOptions(request: $_model.CreateCenInterRegionTrafficQosPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCenInterRegionTrafficQosPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bandwidthGuaranteeMode)) {
      query["BandwidthGuaranteeMode"] = request.bandwidthGuaranteeMode;
    }

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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.trafficQosPolicyDescription)) {
      query["TrafficQosPolicyDescription"] = request.trafficQosPolicyDescription;
    }

    if (!$dara.isNull(request.trafficQosPolicyName)) {
      query["TrafficQosPolicyName"] = request.trafficQosPolicyName;
    }

    if (!$dara.isNull(request.trafficQosQueues)) {
      query["TrafficQosQueues"] = request.trafficQosQueues;
    }

    if (!$dara.isNull(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    if (!$dara.isNull(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCenInterRegionTrafficQosPolicy",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCenInterRegionTrafficQosPolicyResponse>(await this.callApi(params, req, runtime), new $_model.CreateCenInterRegionTrafficQosPolicyResponse({}));
  }

  /**
   * Creates a quality of service (QoS) policy for an inter-region connection on an Enterprise Edition transit router.
   * 
   * @remarks
   *   Only inter-region connections created on Enterprise Edition transit routers support QoS policies.
   * *   Traffic scheduling applies only to outbound traffic on Enterprise Edition transit routers.
   *     For example, you create an inter-region connection between the China (Hangzhou) and China (Qingdao) regions, and create a QoS policy for the transit router in the China (Hangzhou) region. In this case, the QoS policy can ensure bandwidth for network traffic from the China (Hangzhou) region to the China (Qingdao) region. However, the QoS policy does not apply to network traffic from the China (Qingdao) region to the China (Hangzhou) region.
   * *   **CreateCenInterRegionTrafficQosPolicy** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the **ListCenInterRegionTrafficQosPolicies** operation to query the status of the task.
   *     *   If the QoS policy is in the **Creating** state, the QoS policy is being created. You can query the QoS policy but cannot perform other operations on the QoS policy.
   *     *   If the QoS policy is in the **Active** state, the QoS policy is created.
   * ### [](#)Prerequisites
   * Before you call the **CreateCenInterRegionTrafficQosPolicy** operation, make sure that the following requirements are met:
   * *   An inter-region connection is created. For more information, see [CreateTransitRouterPeerAttachment](https://help.aliyun.com/document_detail/261363.html).
   * *   A traffic marking policy is created. For more information, see [CreateTrafficMarkingPolicy](https://help.aliyun.com/document_detail/419025.html).
   * 
   * @param request - CreateCenInterRegionTrafficQosPolicyRequest
   * @returns CreateCenInterRegionTrafficQosPolicyResponse
   */
  async createCenInterRegionTrafficQosPolicy(request: $_model.CreateCenInterRegionTrafficQosPolicyRequest): Promise<$_model.CreateCenInterRegionTrafficQosPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCenInterRegionTrafficQosPolicyWithOptions(request, runtime);
  }

  /**
   * Creates queues in a quality of service (QoS) policy to manage network traffic based on finer granularities, improve service performance, and meet service-level agreements (SLAs).
   * 
   * @remarks
   * The **CreateCenInterRegionTrafficQosQueue** operation is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the **ListCenInterRegionTrafficQosPolicies** operation to query the status of the QoS policy to determine the status of the queue. When you call this operation, you must set the **TrafficQosPolicyId** parameter.
   * - If a QoS policy is in the **Modifying** state, the queue is being created. In this case, you can query the QoS policy and queue but cannot perform other operations.
   * - If a QoS policy is in the **Active** state, the queue is created.
   * 
   * @param request - CreateCenInterRegionTrafficQosQueueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCenInterRegionTrafficQosQueueResponse
   */
  async createCenInterRegionTrafficQosQueueWithOptions(request: $_model.CreateCenInterRegionTrafficQosQueueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCenInterRegionTrafficQosQueueResponse> {
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

    if (!$dara.isNull(request.dscps)) {
      query["Dscps"] = request.dscps;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.qosQueueDescription)) {
      query["QosQueueDescription"] = request.qosQueueDescription;
    }

    if (!$dara.isNull(request.qosQueueName)) {
      query["QosQueueName"] = request.qosQueueName;
    }

    if (!$dara.isNull(request.remainBandwidthPercent)) {
      query["RemainBandwidthPercent"] = request.remainBandwidthPercent;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.trafficQosPolicyId)) {
      query["TrafficQosPolicyId"] = request.trafficQosPolicyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCenInterRegionTrafficQosQueue",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCenInterRegionTrafficQosQueueResponse>(await this.callApi(params, req, runtime), new $_model.CreateCenInterRegionTrafficQosQueueResponse({}));
  }

  /**
   * Creates queues in a quality of service (QoS) policy to manage network traffic based on finer granularities, improve service performance, and meet service-level agreements (SLAs).
   * 
   * @remarks
   * The **CreateCenInterRegionTrafficQosQueue** operation is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the **ListCenInterRegionTrafficQosPolicies** operation to query the status of the QoS policy to determine the status of the queue. When you call this operation, you must set the **TrafficQosPolicyId** parameter.
   * - If a QoS policy is in the **Modifying** state, the queue is being created. In this case, you can query the QoS policy and queue but cannot perform other operations.
   * - If a QoS policy is in the **Active** state, the queue is created.
   * 
   * @param request - CreateCenInterRegionTrafficQosQueueRequest
   * @returns CreateCenInterRegionTrafficQosQueueResponse
   */
  async createCenInterRegionTrafficQosQueue(request: $_model.CreateCenInterRegionTrafficQosQueueRequest): Promise<$_model.CreateCenInterRegionTrafficQosQueueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCenInterRegionTrafficQosQueueWithOptions(request, runtime);
  }

  /**
   * Creates a routing policy. A routing policy filters routing information and facilitates network management.
   * 
   * @remarks
   * Routing policies are sorted by priority. A smaller value indicates a higher priority. Each routing policy is a collection of conditional statements and execution statements. Starting from the routing policy with the highest priority, the system matches routes against the match conditions specified by routing policies. If a route meets all the match conditions of a routing policy, the system permits or denies the route based on the action specified in the routing policy. You can also modify the attributes of permitted routes. By default, the system permits routes that meet none of the match conditions. For more information, see [Routing policy overview](https://help.aliyun.com/document_detail/124157.html).
   * `CreateCenRouteMap` is an asynchronous operation. After you send a request, the routing policy ID is returned but the operation is still being performed in the system background. You can call `DescribeCenRouteMaps` to query the status of a routing policy.
   * *   If a routing policy is in the **Creating** state, the routing policy is being created. In this case, you can query the routing policy but cannot perform other operations.
   * *   If a routing policy is in the **Active** state, the routing policy is created.
   * 
   * @param request - CreateCenRouteMapRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCenRouteMapResponse
   */
  async createCenRouteMapWithOptions(request: $_model.CreateCenRouteMapRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCenRouteMapResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.asPathMatchMode)) {
      query["AsPathMatchMode"] = request.asPathMatchMode;
    }

    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.cenRegionId)) {
      query["CenRegionId"] = request.cenRegionId;
    }

    if (!$dara.isNull(request.cidrMatchMode)) {
      query["CidrMatchMode"] = request.cidrMatchMode;
    }

    if (!$dara.isNull(request.communityMatchMode)) {
      query["CommunityMatchMode"] = request.communityMatchMode;
    }

    if (!$dara.isNull(request.communityOperateMode)) {
      query["CommunityOperateMode"] = request.communityOperateMode;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.destinationChildInstanceTypes)) {
      query["DestinationChildInstanceTypes"] = request.destinationChildInstanceTypes;
    }

    if (!$dara.isNull(request.destinationCidrBlocks)) {
      query["DestinationCidrBlocks"] = request.destinationCidrBlocks;
    }

    if (!$dara.isNull(request.destinationInstanceIds)) {
      query["DestinationInstanceIds"] = request.destinationInstanceIds;
    }

    if (!$dara.isNull(request.destinationInstanceIdsReverseMatch)) {
      query["DestinationInstanceIdsReverseMatch"] = request.destinationInstanceIdsReverseMatch;
    }

    if (!$dara.isNull(request.destinationRegionIds)) {
      query["DestinationRegionIds"] = request.destinationRegionIds;
    }

    if (!$dara.isNull(request.destinationRouteTableIds)) {
      query["DestinationRouteTableIds"] = request.destinationRouteTableIds;
    }

    if (!$dara.isNull(request.mapResult)) {
      query["MapResult"] = request.mapResult;
    }

    if (!$dara.isNull(request.matchAddressType)) {
      query["MatchAddressType"] = request.matchAddressType;
    }

    if (!$dara.isNull(request.matchAsns)) {
      query["MatchAsns"] = request.matchAsns;
    }

    if (!$dara.isNull(request.matchCommunitySet)) {
      query["MatchCommunitySet"] = request.matchCommunitySet;
    }

    if (!$dara.isNull(request.nextPriority)) {
      query["NextPriority"] = request.nextPriority;
    }

    if (!$dara.isNull(request.operateCommunitySet)) {
      query["OperateCommunitySet"] = request.operateCommunitySet;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.preference)) {
      query["Preference"] = request.preference;
    }

    if (!$dara.isNull(request.prependAsPath)) {
      query["PrependAsPath"] = request.prependAsPath;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.routeTypes)) {
      query["RouteTypes"] = request.routeTypes;
    }

    if (!$dara.isNull(request.sourceChildInstanceTypes)) {
      query["SourceChildInstanceTypes"] = request.sourceChildInstanceTypes;
    }

    if (!$dara.isNull(request.sourceInstanceIds)) {
      query["SourceInstanceIds"] = request.sourceInstanceIds;
    }

    if (!$dara.isNull(request.sourceInstanceIdsReverseMatch)) {
      query["SourceInstanceIdsReverseMatch"] = request.sourceInstanceIdsReverseMatch;
    }

    if (!$dara.isNull(request.sourceRegionIds)) {
      query["SourceRegionIds"] = request.sourceRegionIds;
    }

    if (!$dara.isNull(request.sourceRouteTableIds)) {
      query["SourceRouteTableIds"] = request.sourceRouteTableIds;
    }

    if (!$dara.isNull(request.transitRouterRouteTableId)) {
      query["TransitRouterRouteTableId"] = request.transitRouterRouteTableId;
    }

    if (!$dara.isNull(request.transmitDirection)) {
      query["TransmitDirection"] = request.transmitDirection;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCenRouteMap",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCenRouteMapResponse>(await this.callApi(params, req, runtime), new $_model.CreateCenRouteMapResponse({}));
  }

  /**
   * Creates a routing policy. A routing policy filters routing information and facilitates network management.
   * 
   * @remarks
   * Routing policies are sorted by priority. A smaller value indicates a higher priority. Each routing policy is a collection of conditional statements and execution statements. Starting from the routing policy with the highest priority, the system matches routes against the match conditions specified by routing policies. If a route meets all the match conditions of a routing policy, the system permits or denies the route based on the action specified in the routing policy. You can also modify the attributes of permitted routes. By default, the system permits routes that meet none of the match conditions. For more information, see [Routing policy overview](https://help.aliyun.com/document_detail/124157.html).
   * `CreateCenRouteMap` is an asynchronous operation. After you send a request, the routing policy ID is returned but the operation is still being performed in the system background. You can call `DescribeCenRouteMaps` to query the status of a routing policy.
   * *   If a routing policy is in the **Creating** state, the routing policy is being created. In this case, you can query the routing policy but cannot perform other operations.
   * *   If a routing policy is in the **Active** state, the routing policy is created.
   * 
   * @param request - CreateCenRouteMapRequest
   * @returns CreateCenRouteMapResponse
   */
  async createCenRouteMap(request: $_model.CreateCenRouteMapRequest): Promise<$_model.CreateCenRouteMapResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCenRouteMapWithOptions(request, runtime);
  }

  /**
   * Creates a flow log.
   * 
   * @remarks
   * Flow logs can be used to capture traffic information about transit routers and network instance connections, including inter-region connections, virtual private cloud (VPC) connections, VPN connections, Express Connect Router (ECR) connections, and virtual border router (VBR) connections. Before you create a flow log, take note of the following items:
   * *   Flow logs are supported only by Enterprise Edition transit routers.
   * *   Flow logs are used to capture information about outbound traffic on transit routers. Information about inbound traffic on transit routers is not captured.
   *     For example, an Elastic Compute Service (ECS) instance in the US (Silicon Valley) region accesses an ECS instance in the US (Virginia) region through Cloud Enterprise Network (CEN). After you enable the flow log feature for the transit router in the US (Virginia) region, you can check the log entries about packets sent from the ECS instance in the US (Virginia) region to the ECS instance in the US (Silicon Valley) region. However, packets sent from the ECS instance in the US (Silicon Valley) region to the ECS instance in the US (Virginia) region are not recorded. If you want to record the packets sent from the ECS instance in the US (Silicon Valley) region to the ECS instance in the US (Virginia) region, you must also enable the flow log feature on the transit router that is in the US (Silicon Valley) region.
   * *   If you use a flow log to capture traffic information about VPC connections, the flow log captures information only about traffic on the elastic network interface (ENI) of the transit router. For more information about how to view traffic information about other ENIs in the VPC, see [VPC flow log overview](https://help.aliyun.com/document_detail/127150.html).
   * *   `CreateFlowLog` is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the `DescribeFlowlogs` operation to query the status of a flow log.
   *     *   If the flow log is in the **Creating** state, the flow log is being created. In this case, you can query the flow log but cannot perform other operations.
   *     *   If the flow log is in the **Active** state, the flow log is created.
   * ### [](#)Prerequisites
   * Required resources are created. For more information about how to create resources, see the following topics:
   * *   [CreateTransitRouterVpcAttachment](https://help.aliyun.com/document_detail/468237.html)
   * *   [CreateTransitRouterEcrAttachment](https://help.aliyun.com/document_detail/2715446.html)
   * *   [CreateTransitRouterVpnAttachment](https://help.aliyun.com/document_detail/468249.html)
   * *   [CreateTransitRouterVbrAttachment](https://help.aliyun.com/document_detail/468243.html)
   * *   [CreateTransitRouterPeerAttachment](https://help.aliyun.com/document_detail/468270.html)
   * *   [CreateTransitRouter](https://help.aliyun.com/document_detail/468222.html)
   * 
   * @param request - CreateFlowlogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFlowlogResponse
   */
  async createFlowlogWithOptions(request: $_model.CreateFlowlogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFlowlogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.flowLogName)) {
      query["FlowLogName"] = request.flowLogName;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.logFormatString)) {
      query["LogFormatString"] = request.logFormatString;
    }

    if (!$dara.isNull(request.logStoreName)) {
      query["LogStoreName"] = request.logStoreName;
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

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    if (!$dara.isNull(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFlowlog",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFlowlogResponse>(await this.callApi(params, req, runtime), new $_model.CreateFlowlogResponse({}));
  }

  /**
   * Creates a flow log.
   * 
   * @remarks
   * Flow logs can be used to capture traffic information about transit routers and network instance connections, including inter-region connections, virtual private cloud (VPC) connections, VPN connections, Express Connect Router (ECR) connections, and virtual border router (VBR) connections. Before you create a flow log, take note of the following items:
   * *   Flow logs are supported only by Enterprise Edition transit routers.
   * *   Flow logs are used to capture information about outbound traffic on transit routers. Information about inbound traffic on transit routers is not captured.
   *     For example, an Elastic Compute Service (ECS) instance in the US (Silicon Valley) region accesses an ECS instance in the US (Virginia) region through Cloud Enterprise Network (CEN). After you enable the flow log feature for the transit router in the US (Virginia) region, you can check the log entries about packets sent from the ECS instance in the US (Virginia) region to the ECS instance in the US (Silicon Valley) region. However, packets sent from the ECS instance in the US (Silicon Valley) region to the ECS instance in the US (Virginia) region are not recorded. If you want to record the packets sent from the ECS instance in the US (Silicon Valley) region to the ECS instance in the US (Virginia) region, you must also enable the flow log feature on the transit router that is in the US (Silicon Valley) region.
   * *   If you use a flow log to capture traffic information about VPC connections, the flow log captures information only about traffic on the elastic network interface (ENI) of the transit router. For more information about how to view traffic information about other ENIs in the VPC, see [VPC flow log overview](https://help.aliyun.com/document_detail/127150.html).
   * *   `CreateFlowLog` is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the `DescribeFlowlogs` operation to query the status of a flow log.
   *     *   If the flow log is in the **Creating** state, the flow log is being created. In this case, you can query the flow log but cannot perform other operations.
   *     *   If the flow log is in the **Active** state, the flow log is created.
   * ### [](#)Prerequisites
   * Required resources are created. For more information about how to create resources, see the following topics:
   * *   [CreateTransitRouterVpcAttachment](https://help.aliyun.com/document_detail/468237.html)
   * *   [CreateTransitRouterEcrAttachment](https://help.aliyun.com/document_detail/2715446.html)
   * *   [CreateTransitRouterVpnAttachment](https://help.aliyun.com/document_detail/468249.html)
   * *   [CreateTransitRouterVbrAttachment](https://help.aliyun.com/document_detail/468243.html)
   * *   [CreateTransitRouterPeerAttachment](https://help.aliyun.com/document_detail/468270.html)
   * *   [CreateTransitRouter](https://help.aliyun.com/document_detail/468222.html)
   * 
   * @param request - CreateFlowlogRequest
   * @returns CreateFlowlogResponse
   */
  async createFlowlog(request: $_model.CreateFlowlogRequest): Promise<$_model.CreateFlowlogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFlowlogWithOptions(request, runtime);
  }

  /**
   * Creates a traffic marking policy. A traffic marking policy captures network traffic based on traffic classification rules and marks the traffic with the Differentiated Services Code Point (DSCP) values that you specify.
   * 
   * @remarks
   *   Only Enterprise Edition transit routers support traffic marking policies.
   * *   **CreateTrafficMarkingPolicy** is an asynchronous operation. After you send a request, the system returns a traffic marking policy ID and runs the task in the background. You can call the **ListTrafficMarkingPolicies** operation to query the status of a traffic marking policy.
   *     *   If a traffic marking policy is in the **Creating** state, the traffic marking policy is being created. You can query the traffic marking policy but cannot perform other operations.
   *     *   If a traffic marking policy is in the **Active** state, the traffic marking policy is created.
   * 
   * @param request - CreateTrafficMarkingPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTrafficMarkingPolicyResponse
   */
  async createTrafficMarkingPolicyWithOptions(request: $_model.CreateTrafficMarkingPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTrafficMarkingPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.markingDscp)) {
      query["MarkingDscp"] = request.markingDscp;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.trafficMarkingPolicyDescription)) {
      query["TrafficMarkingPolicyDescription"] = request.trafficMarkingPolicyDescription;
    }

    if (!$dara.isNull(request.trafficMarkingPolicyName)) {
      query["TrafficMarkingPolicyName"] = request.trafficMarkingPolicyName;
    }

    if (!$dara.isNull(request.trafficMatchRules)) {
      query["TrafficMatchRules"] = request.trafficMatchRules;
    }

    if (!$dara.isNull(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTrafficMarkingPolicy",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTrafficMarkingPolicyResponse>(await this.callApi(params, req, runtime), new $_model.CreateTrafficMarkingPolicyResponse({}));
  }

  /**
   * Creates a traffic marking policy. A traffic marking policy captures network traffic based on traffic classification rules and marks the traffic with the Differentiated Services Code Point (DSCP) values that you specify.
   * 
   * @remarks
   *   Only Enterprise Edition transit routers support traffic marking policies.
   * *   **CreateTrafficMarkingPolicy** is an asynchronous operation. After you send a request, the system returns a traffic marking policy ID and runs the task in the background. You can call the **ListTrafficMarkingPolicies** operation to query the status of a traffic marking policy.
   *     *   If a traffic marking policy is in the **Creating** state, the traffic marking policy is being created. You can query the traffic marking policy but cannot perform other operations.
   *     *   If a traffic marking policy is in the **Active** state, the traffic marking policy is created.
   * 
   * @param request - CreateTrafficMarkingPolicyRequest
   * @returns CreateTrafficMarkingPolicyResponse
   */
  async createTrafficMarkingPolicy(request: $_model.CreateTrafficMarkingPolicyRequest): Promise<$_model.CreateTrafficMarkingPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTrafficMarkingPolicyWithOptions(request, runtime);
  }

  /**
   * Creates an aggregate route.
   * 
   * @remarks
   * After you add an aggregate route to a route table of an Enterprise Edition transit router, the transit router advertises its routes only to route tables of associated virtual private clouds (VPCs) and have route synchronization enabled.
   * Perform the following operations before you create an aggregate route. Otherwise, the Enterprise Edition transit router does not advertise routes to VPC route tables:
   * *   Associated forwarding is enabled between the VPCs and the Enterprise Edition transit router. For more information, see [AssociateTransitRouterAttachmentWithRouteTable](https://help.aliyun.com/document_detail/261242.html).
   * *   Route synchronization is enabled for the VPCs. For more information, see [CreateTransitRouterVpcAttachment](https://help.aliyun.com/document_detail/261358.html).
   * 
   * @param tmpReq - CreateTransitRouteTableAggregationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTransitRouteTableAggregationResponse
   */
  async createTransitRouteTableAggregationWithOptions(tmpReq: $_model.CreateTransitRouteTableAggregationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTransitRouteTableAggregationResponse> {
    tmpReq.validate();
    let request = new $_model.CreateTransitRouteTableAggregationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.transitRouteTableAggregationScopeList)) {
      request.transitRouteTableAggregationScopeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.transitRouteTableAggregationScopeList, "TransitRouteTableAggregationScopeList", "json");
    }

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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.transitRouteTableAggregationCidr)) {
      query["TransitRouteTableAggregationCidr"] = request.transitRouteTableAggregationCidr;
    }

    if (!$dara.isNull(request.transitRouteTableAggregationDescription)) {
      query["TransitRouteTableAggregationDescription"] = request.transitRouteTableAggregationDescription;
    }

    if (!$dara.isNull(request.transitRouteTableAggregationName)) {
      query["TransitRouteTableAggregationName"] = request.transitRouteTableAggregationName;
    }

    if (!$dara.isNull(request.transitRouteTableAggregationScope)) {
      query["TransitRouteTableAggregationScope"] = request.transitRouteTableAggregationScope;
    }

    if (!$dara.isNull(request.transitRouteTableAggregationScopeListShrink)) {
      query["TransitRouteTableAggregationScopeList"] = request.transitRouteTableAggregationScopeListShrink;
    }

    if (!$dara.isNull(request.transitRouteTableId)) {
      query["TransitRouteTableId"] = request.transitRouteTableId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTransitRouteTableAggregation",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTransitRouteTableAggregationResponse>(await this.callApi(params, req, runtime), new $_model.CreateTransitRouteTableAggregationResponse({}));
  }

  /**
   * Creates an aggregate route.
   * 
   * @remarks
   * After you add an aggregate route to a route table of an Enterprise Edition transit router, the transit router advertises its routes only to route tables of associated virtual private clouds (VPCs) and have route synchronization enabled.
   * Perform the following operations before you create an aggregate route. Otherwise, the Enterprise Edition transit router does not advertise routes to VPC route tables:
   * *   Associated forwarding is enabled between the VPCs and the Enterprise Edition transit router. For more information, see [AssociateTransitRouterAttachmentWithRouteTable](https://help.aliyun.com/document_detail/261242.html).
   * *   Route synchronization is enabled for the VPCs. For more information, see [CreateTransitRouterVpcAttachment](https://help.aliyun.com/document_detail/261358.html).
   * 
   * @param request - CreateTransitRouteTableAggregationRequest
   * @returns CreateTransitRouteTableAggregationResponse
   */
  async createTransitRouteTableAggregation(request: $_model.CreateTransitRouteTableAggregationRequest): Promise<$_model.CreateTransitRouteTableAggregationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTransitRouteTableAggregationWithOptions(request, runtime);
  }

  /**
   * Creates an Enterprise Edition transit router.
   * 
   * @remarks
   *   You can call **CreateTransitRouter** to create an Enterprise Edition transit router. For more information about the regions that support Enterprise Edition transit routers, see [What is CEN?](https://help.aliyun.com/document_detail/181681.html)
   * *   **CreateTransitRouter** is an asynchronous operation. After you send a request, the transit router ID is returned but the operation is still being performed in the system background. You can call [ListTransitRouters](https://help.aliyun.com/document_detail/261219.html) to query the status of an Enterprise Edition transit router.
   *     *   If an Enterprise Edition transit router is in the **Creating** state, the Enterprise Edition transit router is being created. In this case, you can query the Enterprise Edition transit router but cannot perform other operations.
   *     *   If an Enterprise Edition transit router is in the **Active** state, the Enterprise Edition transit router is created.
   * 
   * @param tmpReq - CreateTransitRouterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTransitRouterResponse
   */
  async createTransitRouterWithOptions(tmpReq: $_model.CreateTransitRouterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTransitRouterResponse> {
    tmpReq.validate();
    let request = new $_model.CreateTransitRouterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.transitRouterCidrList)) {
      request.transitRouterCidrListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.transitRouterCidrList, "TransitRouterCidrList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

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

    if (!$dara.isNull(request.supportMulticast)) {
      query["SupportMulticast"] = request.supportMulticast;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.transitRouterCidrListShrink)) {
      query["TransitRouterCidrList"] = request.transitRouterCidrListShrink;
    }

    if (!$dara.isNull(request.transitRouterDescription)) {
      query["TransitRouterDescription"] = request.transitRouterDescription;
    }

    if (!$dara.isNull(request.transitRouterName)) {
      query["TransitRouterName"] = request.transitRouterName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTransitRouter",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTransitRouterResponse>(await this.callApi(params, req, runtime), new $_model.CreateTransitRouterResponse({}));
  }

  /**
   * Creates an Enterprise Edition transit router.
   * 
   * @remarks
   *   You can call **CreateTransitRouter** to create an Enterprise Edition transit router. For more information about the regions that support Enterprise Edition transit routers, see [What is CEN?](https://help.aliyun.com/document_detail/181681.html)
   * *   **CreateTransitRouter** is an asynchronous operation. After you send a request, the transit router ID is returned but the operation is still being performed in the system background. You can call [ListTransitRouters](https://help.aliyun.com/document_detail/261219.html) to query the status of an Enterprise Edition transit router.
   *     *   If an Enterprise Edition transit router is in the **Creating** state, the Enterprise Edition transit router is being created. In this case, you can query the Enterprise Edition transit router but cannot perform other operations.
   *     *   If an Enterprise Edition transit router is in the **Active** state, the Enterprise Edition transit router is created.
   * 
   * @param request - CreateTransitRouterRequest
   * @returns CreateTransitRouterResponse
   */
  async createTransitRouter(request: $_model.CreateTransitRouterRequest): Promise<$_model.CreateTransitRouterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTransitRouterWithOptions(request, runtime);
  }

  /**
   * Creates a custom CIDR block for a transit router. Custom CIDR blocks of a transit router are similar to the CIDR blocks of the loopback interface of a router.
   * 
   * @remarks
   * You can specify a CIDR block for a transit router. The CIDR block works in a similar way as the CIDR block of the loopback interface on a router. IP addresses within the CIDR block can be assigned to IPsec-VPN connections. For more information, see [Transit router CIDR blocks](https://help.aliyun.com/document_detail/462635.html).
   * The **CreateTransitRouterCidr** operation can be used to create a CIDR block only after you create a transit router.
   * The CIDR block must meet the following requirements:
   * *   Only Enterprise Edition transit routers support custom CIDR blocks.
   * *   For more information, see [Limits in transit router CIDR blocks](https://help.aliyun.com/document_detail/462635.html).
   * *   Each transit router supports at most five CIDR blocks. The subnet mask of a CIDR block must be 16 bits to 24 bits in length.
   * *   The following CIDR blocks and their subnets are not supported: 100.64.0.0/10, 224.0.0.0/4, 127.0.0.0/8, and 169.254.0.0/16.
   * *   The CIDR block cannot overlap with the CIDR blocks of the network instances that communicate with each other by using the CEN instance.
   * *   On the same CEN instance, each transit router CIDR block must be unique.
   * *   When you create the first VPN connection after you add a CIDR block for a transit router, three CIDR blocks within the CIDR block are reserved. An IP address is allocated from the remaining CIDR blocks to the IPsec-VPN connection.
   *     You can call the [ListTransitRouterCidrAllocation](https://help.aliyun.com/document_detail/464173.html) operation to query reserved CIDR blocks and IP addresses allocated to network connections.
   * 
   * @param request - CreateTransitRouterCidrRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTransitRouterCidrResponse
   */
  async createTransitRouterCidrWithOptions(request: $_model.CreateTransitRouterCidrRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTransitRouterCidrResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cidr)) {
      query["Cidr"] = request.cidr;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
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

    if (!$dara.isNull(request.publishCidrRoute)) {
      query["PublishCidrRoute"] = request.publishCidrRoute;
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

    if (!$dara.isNull(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTransitRouterCidr",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTransitRouterCidrResponse>(await this.callApi(params, req, runtime), new $_model.CreateTransitRouterCidrResponse({}));
  }

  /**
   * Creates a custom CIDR block for a transit router. Custom CIDR blocks of a transit router are similar to the CIDR blocks of the loopback interface of a router.
   * 
   * @remarks
   * You can specify a CIDR block for a transit router. The CIDR block works in a similar way as the CIDR block of the loopback interface on a router. IP addresses within the CIDR block can be assigned to IPsec-VPN connections. For more information, see [Transit router CIDR blocks](https://help.aliyun.com/document_detail/462635.html).
   * The **CreateTransitRouterCidr** operation can be used to create a CIDR block only after you create a transit router.
   * The CIDR block must meet the following requirements:
   * *   Only Enterprise Edition transit routers support custom CIDR blocks.
   * *   For more information, see [Limits in transit router CIDR blocks](https://help.aliyun.com/document_detail/462635.html).
   * *   Each transit router supports at most five CIDR blocks. The subnet mask of a CIDR block must be 16 bits to 24 bits in length.
   * *   The following CIDR blocks and their subnets are not supported: 100.64.0.0/10, 224.0.0.0/4, 127.0.0.0/8, and 169.254.0.0/16.
   * *   The CIDR block cannot overlap with the CIDR blocks of the network instances that communicate with each other by using the CEN instance.
   * *   On the same CEN instance, each transit router CIDR block must be unique.
   * *   When you create the first VPN connection after you add a CIDR block for a transit router, three CIDR blocks within the CIDR block are reserved. An IP address is allocated from the remaining CIDR blocks to the IPsec-VPN connection.
   *     You can call the [ListTransitRouterCidrAllocation](https://help.aliyun.com/document_detail/464173.html) operation to query reserved CIDR blocks and IP addresses allocated to network connections.
   * 
   * @param request - CreateTransitRouterCidrRequest
   * @returns CreateTransitRouterCidrResponse
   */
  async createTransitRouterCidr(request: $_model.CreateTransitRouterCidrRequest): Promise<$_model.CreateTransitRouterCidrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTransitRouterCidrWithOptions(request, runtime);
  }

  /**
   * Attaches an Express Connect Router (ECR) connection to the transit router in the same region.
   * 
   * @remarks
   *   Only Enterprise Edition transit routers support ECR connections.
   * *   The following methods describe how to attach an ECR connection to an Enterprise Edition transit router:
   *     *   If an Enterprise Edition transit router is created in the region, specify the **EcrId**, **RegionId**, and **TransitRouterId** parameters.
   *     *   If no Enterprise Edition transit router is created in the region, specify the **EcrId**, **CenId**, and **RegionId** parameters. An Enterprise Edition transit router is automatically created when you create an ECR connection.
   * *   CreateTransitRouterEcrAttachment is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the **ListTransitRouterEcrAttachments** operation to query the status of an ECR connection.
   *     *   If the ECR connection is in the **Attaching** state, the ECR connection is being created. In this case, you can query the ECR connection but cannot perform other operations on the ECR connection.
   *     *   If the ECR connection is in the **Attached** state, the ECR connection is created.
   * *   After you create an ECR connection, the ECR connection is not in route learning or associated forwarding relationships with Enterprise Edition transit routers.
   *     After you enable [route learning](https://help.aliyun.com/document_detail/468300.html) between the ECR connection and an Enterprise Edition transit router, the routes of the ECR are automatically advertised to the route tables of the Enterprise Edition transit router.
   * *   After you create an ECR connection, the routes in the route tables of the Enterprise Edition transit router to which the ECR connection is attached are automatically advertised to the route table of the ECR.
   * ### [](#)Prerequisite
   * *   The Alibaba Cloud account of the Enterprise Edition transit router and the Alibaba Cloud account of the ECR belong to the same enterprise.
   * *   The Enterprise Edition transit router and ECR can belong to the same Alibaba Cloud account or different Alibaba Cloud accounts. If the Enterprise Edition transit router and ECR belong to different Alibaba Cloud accounts, grant the transit router permissions on the ECR before you can attach the ECR to the transit router. For more information, see [Acquire permissions to connect to a network instance that belongs to another account](https://help.aliyun.com/document_detail/181553.html).
   * *   **Before you call this operation to attach an ECR connection to an Enterprise Edition transit router, you must call the [CreateExpressConnectRouterAssociation](https://help.aliyun.com/document_detail/2712082.html) operation to create an association between the ECR and transit router.**
   *     **If you call the DeleteTransitRouterEcrAttachment operation to forcefully delete an ECR connection, the association between the ECR connection and Enterprise Edition transit router is deleted.**
   * 
   * @param request - CreateTransitRouterEcrAttachmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTransitRouterEcrAttachmentResponse
   */
  async createTransitRouterEcrAttachmentWithOptions(request: $_model.CreateTransitRouterEcrAttachmentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTransitRouterEcrAttachmentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ecrId)) {
      query["EcrId"] = request.ecrId;
    }

    if (!$dara.isNull(request.ecrOwnerId)) {
      query["EcrOwnerId"] = request.ecrOwnerId;
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

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.transitRouterAttachmentDescription)) {
      query["TransitRouterAttachmentDescription"] = request.transitRouterAttachmentDescription;
    }

    if (!$dara.isNull(request.transitRouterAttachmentName)) {
      query["TransitRouterAttachmentName"] = request.transitRouterAttachmentName;
    }

    if (!$dara.isNull(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTransitRouterEcrAttachment",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTransitRouterEcrAttachmentResponse>(await this.callApi(params, req, runtime), new $_model.CreateTransitRouterEcrAttachmentResponse({}));
  }

  /**
   * Attaches an Express Connect Router (ECR) connection to the transit router in the same region.
   * 
   * @remarks
   *   Only Enterprise Edition transit routers support ECR connections.
   * *   The following methods describe how to attach an ECR connection to an Enterprise Edition transit router:
   *     *   If an Enterprise Edition transit router is created in the region, specify the **EcrId**, **RegionId**, and **TransitRouterId** parameters.
   *     *   If no Enterprise Edition transit router is created in the region, specify the **EcrId**, **CenId**, and **RegionId** parameters. An Enterprise Edition transit router is automatically created when you create an ECR connection.
   * *   CreateTransitRouterEcrAttachment is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the **ListTransitRouterEcrAttachments** operation to query the status of an ECR connection.
   *     *   If the ECR connection is in the **Attaching** state, the ECR connection is being created. In this case, you can query the ECR connection but cannot perform other operations on the ECR connection.
   *     *   If the ECR connection is in the **Attached** state, the ECR connection is created.
   * *   After you create an ECR connection, the ECR connection is not in route learning or associated forwarding relationships with Enterprise Edition transit routers.
   *     After you enable [route learning](https://help.aliyun.com/document_detail/468300.html) between the ECR connection and an Enterprise Edition transit router, the routes of the ECR are automatically advertised to the route tables of the Enterprise Edition transit router.
   * *   After you create an ECR connection, the routes in the route tables of the Enterprise Edition transit router to which the ECR connection is attached are automatically advertised to the route table of the ECR.
   * ### [](#)Prerequisite
   * *   The Alibaba Cloud account of the Enterprise Edition transit router and the Alibaba Cloud account of the ECR belong to the same enterprise.
   * *   The Enterprise Edition transit router and ECR can belong to the same Alibaba Cloud account or different Alibaba Cloud accounts. If the Enterprise Edition transit router and ECR belong to different Alibaba Cloud accounts, grant the transit router permissions on the ECR before you can attach the ECR to the transit router. For more information, see [Acquire permissions to connect to a network instance that belongs to another account](https://help.aliyun.com/document_detail/181553.html).
   * *   **Before you call this operation to attach an ECR connection to an Enterprise Edition transit router, you must call the [CreateExpressConnectRouterAssociation](https://help.aliyun.com/document_detail/2712082.html) operation to create an association between the ECR and transit router.**
   *     **If you call the DeleteTransitRouterEcrAttachment operation to forcefully delete an ECR connection, the association between the ECR connection and Enterprise Edition transit router is deleted.**
   * 
   * @param request - CreateTransitRouterEcrAttachmentRequest
   * @returns CreateTransitRouterEcrAttachmentResponse
   */
  async createTransitRouterEcrAttachment(request: $_model.CreateTransitRouterEcrAttachmentRequest): Promise<$_model.CreateTransitRouterEcrAttachmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTransitRouterEcrAttachmentWithOptions(request, runtime);
  }

  /**
   * Creates a multicast domain. A multicast domain is a multicast network in a region. Only resources in the same multicast domain can transmit and receive multicast packets.
   * 
   * @remarks
   * Before you call this operation, read the following rules:
   * *   Make sure that an Enterprise Edition transit router is deployed in the region where you want to create the multicast domain, and the multicast feature is enabled for the Enterprise Edition transit router. For more information, see [CreateTransitRouter](https://help.aliyun.com/document_detail/261169.html).
   *     If an Enterprise Edition transit router was created before you apply for multicast resources, the transit router does not support multicast. You can delete the transit router and create a new one. For more information about how to delete an Enterprise Edition transit router, see [DeleteTransitRouter](https://help.aliyun.com/document_detail/261218.html).
   * *   When you call **CreateTransitRouterMulticastDomain**, if you set **CenId** and **RegionId**, you do not need to set **TransitRouterId**. If you set **TransitRouterId**, you do not need to set **CenId** or **RegionId**.
   * 
   * @param request - CreateTransitRouterMulticastDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTransitRouterMulticastDomainResponse
   */
  async createTransitRouterMulticastDomainWithOptions(request: $_model.CreateTransitRouterMulticastDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTransitRouterMulticastDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.options)) {
      query["Options"] = request.options;
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

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    if (!$dara.isNull(request.transitRouterMulticastDomainDescription)) {
      query["TransitRouterMulticastDomainDescription"] = request.transitRouterMulticastDomainDescription;
    }

    if (!$dara.isNull(request.transitRouterMulticastDomainName)) {
      query["TransitRouterMulticastDomainName"] = request.transitRouterMulticastDomainName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTransitRouterMulticastDomain",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTransitRouterMulticastDomainResponse>(await this.callApi(params, req, runtime), new $_model.CreateTransitRouterMulticastDomainResponse({}));
  }

  /**
   * Creates a multicast domain. A multicast domain is a multicast network in a region. Only resources in the same multicast domain can transmit and receive multicast packets.
   * 
   * @remarks
   * Before you call this operation, read the following rules:
   * *   Make sure that an Enterprise Edition transit router is deployed in the region where you want to create the multicast domain, and the multicast feature is enabled for the Enterprise Edition transit router. For more information, see [CreateTransitRouter](https://help.aliyun.com/document_detail/261169.html).
   *     If an Enterprise Edition transit router was created before you apply for multicast resources, the transit router does not support multicast. You can delete the transit router and create a new one. For more information about how to delete an Enterprise Edition transit router, see [DeleteTransitRouter](https://help.aliyun.com/document_detail/261218.html).
   * *   When you call **CreateTransitRouterMulticastDomain**, if you set **CenId** and **RegionId**, you do not need to set **TransitRouterId**. If you set **TransitRouterId**, you do not need to set **CenId** or **RegionId**.
   * 
   * @param request - CreateTransitRouterMulticastDomainRequest
   * @returns CreateTransitRouterMulticastDomainResponse
   */
  async createTransitRouterMulticastDomain(request: $_model.CreateTransitRouterMulticastDomainRequest): Promise<$_model.CreateTransitRouterMulticastDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTransitRouterMulticastDomainWithOptions(request, runtime);
  }

  /**
   * To connect network instances across regions, such as virtual private clouds (VPCs), virtual border routers (VBRs), and IPsec-VPN connections that are connected to transit routers, you must create an inter-region connection between the network instances that you want to connect. You can call the CreateTransitRouterPeerAttachment operation to create an inter-region connection on an Enterprise Edition transit router.
   * 
   * @remarks
   *   Enterprise Edition transit routers allow you to allocate bandwidth resources to inter-region connections by using the following methods:
   *     *   **Allocate bandwidth resources from a bandwidth plan**:
   *         You must purchase a bandwidth plan, and then allocate bandwidth resources from the bandwidth plan to inter-region connections. For more information about how to purchase a bandwidth plan, see [CreateCenBandwidthPackage](https://help.aliyun.com/document_detail/65919.html).
   *     *   **Use pay-by-data-transfer bandwidth resources**:
   *         You can set a maximum bandwidth value for an inter-region connection. Then, you are charged for the amount of data transfer over the connection. For more information, see [Inter-region data transfer](https://help.aliyun.com/document_detail/337827.html).
   * *   **CreateTransitRouterPeerAttachment** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the **ListTransitRouterPeerAttachments** operation to query the status of an inter-region connection.
   *     *   If the inter-region connection is in the **Attaching** state, the inter-region connection is being created. In this case, you can query the connection but cannot perform other operations on the connection.
   *     *   If the inter-region connection is in the **Attached** state, the inter-region connection is created.
   * 
   * @param request - CreateTransitRouterPeerAttachmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTransitRouterPeerAttachmentResponse
   */
  async createTransitRouterPeerAttachmentWithOptions(request: $_model.CreateTransitRouterPeerAttachmentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTransitRouterPeerAttachmentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPublishRouteEnabled)) {
      query["AutoPublishRouteEnabled"] = request.autoPublishRouteEnabled;
    }

    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.bandwidthType)) {
      query["BandwidthType"] = request.bandwidthType;
    }

    if (!$dara.isNull(request.cenBandwidthPackageId)) {
      query["CenBandwidthPackageId"] = request.cenBandwidthPackageId;
    }

    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.defaultLinkType)) {
      query["DefaultLinkType"] = request.defaultLinkType;
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

    if (!$dara.isNull(request.peerTransitRouterId)) {
      query["PeerTransitRouterId"] = request.peerTransitRouterId;
    }

    if (!$dara.isNull(request.peerTransitRouterRegionId)) {
      query["PeerTransitRouterRegionId"] = request.peerTransitRouterRegionId;
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

    if (!$dara.isNull(request.transitRouterAttachmentDescription)) {
      query["TransitRouterAttachmentDescription"] = request.transitRouterAttachmentDescription;
    }

    if (!$dara.isNull(request.transitRouterAttachmentName)) {
      query["TransitRouterAttachmentName"] = request.transitRouterAttachmentName;
    }

    if (!$dara.isNull(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTransitRouterPeerAttachment",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTransitRouterPeerAttachmentResponse>(await this.callApi(params, req, runtime), new $_model.CreateTransitRouterPeerAttachmentResponse({}));
  }

  /**
   * To connect network instances across regions, such as virtual private clouds (VPCs), virtual border routers (VBRs), and IPsec-VPN connections that are connected to transit routers, you must create an inter-region connection between the network instances that you want to connect. You can call the CreateTransitRouterPeerAttachment operation to create an inter-region connection on an Enterprise Edition transit router.
   * 
   * @remarks
   *   Enterprise Edition transit routers allow you to allocate bandwidth resources to inter-region connections by using the following methods:
   *     *   **Allocate bandwidth resources from a bandwidth plan**:
   *         You must purchase a bandwidth plan, and then allocate bandwidth resources from the bandwidth plan to inter-region connections. For more information about how to purchase a bandwidth plan, see [CreateCenBandwidthPackage](https://help.aliyun.com/document_detail/65919.html).
   *     *   **Use pay-by-data-transfer bandwidth resources**:
   *         You can set a maximum bandwidth value for an inter-region connection. Then, you are charged for the amount of data transfer over the connection. For more information, see [Inter-region data transfer](https://help.aliyun.com/document_detail/337827.html).
   * *   **CreateTransitRouterPeerAttachment** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the **ListTransitRouterPeerAttachments** operation to query the status of an inter-region connection.
   *     *   If the inter-region connection is in the **Attaching** state, the inter-region connection is being created. In this case, you can query the connection but cannot perform other operations on the connection.
   *     *   If the inter-region connection is in the **Attached** state, the inter-region connection is created.
   * 
   * @param request - CreateTransitRouterPeerAttachmentRequest
   * @returns CreateTransitRouterPeerAttachmentResponse
   */
  async createTransitRouterPeerAttachment(request: $_model.CreateTransitRouterPeerAttachmentRequest): Promise<$_model.CreateTransitRouterPeerAttachmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTransitRouterPeerAttachmentWithOptions(request, runtime);
  }

  /**
   * Associates the route table of an Enterprise Edition transit router with a prefix list.
   * 
   * @remarks
   * To associate an Enterprise Edition transit router with a route prefix, you must meet the following requirements:
   * *   You are familiar with the limits and route compatibility notes of prefix lists. For more information, see [Prefix lists](https://help.aliyun.com/document_detail/445605.html).
   * *   A prefix list is created. For more information, see [CreateVpcPrefixList](https://help.aliyun.com/document_detail/437367.html).
   * *   If the prefix list and the Enterprise Edition transit router belong to different Alibaba Cloud accounts, the prefix list is shared with the Alibaba Cloud account that owns the Enterprise Edition transit router. For more information, see [Resource sharing](https://help.aliyun.com/document_detail/160622.html) and [API references for resource sharing](https://help.aliyun.com/document_detail/193445.html).
   * 
   * @param request - CreateTransitRouterPrefixListAssociationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTransitRouterPrefixListAssociationResponse
   */
  async createTransitRouterPrefixListAssociationWithOptions(request: $_model.CreateTransitRouterPrefixListAssociationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTransitRouterPrefixListAssociationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.nextHop)) {
      query["NextHop"] = request.nextHop;
    }

    if (!$dara.isNull(request.nextHopType)) {
      query["NextHopType"] = request.nextHopType;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.ownerUid)) {
      query["OwnerUid"] = request.ownerUid;
    }

    if (!$dara.isNull(request.prefixListId)) {
      query["PrefixListId"] = request.prefixListId;
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

    if (!$dara.isNull(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    if (!$dara.isNull(request.transitRouterTableId)) {
      query["TransitRouterTableId"] = request.transitRouterTableId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTransitRouterPrefixListAssociation",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTransitRouterPrefixListAssociationResponse>(await this.callApi(params, req, runtime), new $_model.CreateTransitRouterPrefixListAssociationResponse({}));
  }

  /**
   * Associates the route table of an Enterprise Edition transit router with a prefix list.
   * 
   * @remarks
   * To associate an Enterprise Edition transit router with a route prefix, you must meet the following requirements:
   * *   You are familiar with the limits and route compatibility notes of prefix lists. For more information, see [Prefix lists](https://help.aliyun.com/document_detail/445605.html).
   * *   A prefix list is created. For more information, see [CreateVpcPrefixList](https://help.aliyun.com/document_detail/437367.html).
   * *   If the prefix list and the Enterprise Edition transit router belong to different Alibaba Cloud accounts, the prefix list is shared with the Alibaba Cloud account that owns the Enterprise Edition transit router. For more information, see [Resource sharing](https://help.aliyun.com/document_detail/160622.html) and [API references for resource sharing](https://help.aliyun.com/document_detail/193445.html).
   * 
   * @param request - CreateTransitRouterPrefixListAssociationRequest
   * @returns CreateTransitRouterPrefixListAssociationResponse
   */
  async createTransitRouterPrefixListAssociation(request: $_model.CreateTransitRouterPrefixListAssociationRequest): Promise<$_model.CreateTransitRouterPrefixListAssociationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTransitRouterPrefixListAssociationWithOptions(request, runtime);
  }

  /**
   * Adds a route to a route table of an Enterprise Edition transit router.
   * 
   * @remarks
   * *CreateTransitRouterRouteEntry** is an asynchronous operation. After you send a request, the route ID is returned but the operation is still being performed in the system background. You can call **ListTransitRouterRouteEntries** to query the status of a route.
   * *   If a route is in the **Creating** state, the route is being created. In this case, you can query the route but cannot perform other operations.
   * *   If a route is in the **Active** state, the route is created.
   * 
   * @param request - CreateTransitRouterRouteEntryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTransitRouterRouteEntryResponse
   */
  async createTransitRouterRouteEntryWithOptions(request: $_model.CreateTransitRouterRouteEntryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTransitRouterRouteEntryResponse> {
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.transitRouterRouteEntryDescription)) {
      query["TransitRouterRouteEntryDescription"] = request.transitRouterRouteEntryDescription;
    }

    if (!$dara.isNull(request.transitRouterRouteEntryDestinationCidrBlock)) {
      query["TransitRouterRouteEntryDestinationCidrBlock"] = request.transitRouterRouteEntryDestinationCidrBlock;
    }

    if (!$dara.isNull(request.transitRouterRouteEntryName)) {
      query["TransitRouterRouteEntryName"] = request.transitRouterRouteEntryName;
    }

    if (!$dara.isNull(request.transitRouterRouteEntryNextHopId)) {
      query["TransitRouterRouteEntryNextHopId"] = request.transitRouterRouteEntryNextHopId;
    }

    if (!$dara.isNull(request.transitRouterRouteEntryNextHopType)) {
      query["TransitRouterRouteEntryNextHopType"] = request.transitRouterRouteEntryNextHopType;
    }

    if (!$dara.isNull(request.transitRouterRouteTableId)) {
      query["TransitRouterRouteTableId"] = request.transitRouterRouteTableId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTransitRouterRouteEntry",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTransitRouterRouteEntryResponse>(await this.callApi(params, req, runtime), new $_model.CreateTransitRouterRouteEntryResponse({}));
  }

  /**
   * Adds a route to a route table of an Enterprise Edition transit router.
   * 
   * @remarks
   * *CreateTransitRouterRouteEntry** is an asynchronous operation. After you send a request, the route ID is returned but the operation is still being performed in the system background. You can call **ListTransitRouterRouteEntries** to query the status of a route.
   * *   If a route is in the **Creating** state, the route is being created. In this case, you can query the route but cannot perform other operations.
   * *   If a route is in the **Active** state, the route is created.
   * 
   * @param request - CreateTransitRouterRouteEntryRequest
   * @returns CreateTransitRouterRouteEntryResponse
   */
  async createTransitRouterRouteEntry(request: $_model.CreateTransitRouterRouteEntryRequest): Promise<$_model.CreateTransitRouterRouteEntryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTransitRouterRouteEntryWithOptions(request, runtime);
  }

  /**
   * Creates a custom route table for an Enterprise Edition transit router.
   * 
   * @remarks
   *   Only Enterprise Edition transit routers support custom route tables. For more information about the regions and zones that support Enterprise Edition transit routers, see [What is CEN?](https://help.aliyun.com/document_detail/181681.html)
   * *   **CreateTransitRouterRouteTable** is an asynchronous operation. After you send a request, the route table ID is returned but the operation is still being performed in the system background. You can call **ListTransitRouterRouteTables** to query the status of a route table.
   *     *   If a route table is in the **Creating** state, the route table is being created. In this case, you can query the route table but cannot perform other operations.
   *     *   If a route table is in the **Active** state, the route table is created.
   * 
   * @param request - CreateTransitRouterRouteTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTransitRouterRouteTableResponse
   */
  async createTransitRouterRouteTableWithOptions(request: $_model.CreateTransitRouterRouteTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTransitRouterRouteTableResponse> {
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.routeTableOptions)) {
      query["RouteTableOptions"] = request.routeTableOptions;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    if (!$dara.isNull(request.transitRouterRouteTableDescription)) {
      query["TransitRouterRouteTableDescription"] = request.transitRouterRouteTableDescription;
    }

    if (!$dara.isNull(request.transitRouterRouteTableName)) {
      query["TransitRouterRouteTableName"] = request.transitRouterRouteTableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTransitRouterRouteTable",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTransitRouterRouteTableResponse>(await this.callApi(params, req, runtime), new $_model.CreateTransitRouterRouteTableResponse({}));
  }

  /**
   * Creates a custom route table for an Enterprise Edition transit router.
   * 
   * @remarks
   *   Only Enterprise Edition transit routers support custom route tables. For more information about the regions and zones that support Enterprise Edition transit routers, see [What is CEN?](https://help.aliyun.com/document_detail/181681.html)
   * *   **CreateTransitRouterRouteTable** is an asynchronous operation. After you send a request, the route table ID is returned but the operation is still being performed in the system background. You can call **ListTransitRouterRouteTables** to query the status of a route table.
   *     *   If a route table is in the **Creating** state, the route table is being created. In this case, you can query the route table but cannot perform other operations.
   *     *   If a route table is in the **Active** state, the route table is created.
   * 
   * @param request - CreateTransitRouterRouteTableRequest
   * @returns CreateTransitRouterRouteTableResponse
   */
  async createTransitRouterRouteTable(request: $_model.CreateTransitRouterRouteTableRequest): Promise<$_model.CreateTransitRouterRouteTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTransitRouterRouteTableWithOptions(request, runtime);
  }

  /**
   * Connects the virtual border routers (VBRs) among which you want to establish network communication to the transit router in the region. Then, the transit router can exchange data between the VBR and CEN instance over private connections.
   * 
   * @remarks
   *   For more information about the regions and zones that support Enterprise Edition transit routers, see [What is CEN?](https://help.aliyun.com/document_detail/181681.html)
   * *   You can use the following methods to create a VBR connection on an Enterprise Edition transit router:
   *     *   If an Enterprise Edition transit router is already created in the region, specify the **VbrId**, **RegionId**, and **TransitRouterId** parameters to create a VBR connection.
   *     *   If no Enterprise Edition transit router is already created in the region, specify the **VbrId**, **CenId**, and **RegionId** parameters to create a VBR connection. When you create a VBR connection, the system automatically creates an Enterprise Edition transit router in the specified region.
   * *   **CreateTransitRouterVbrAttachment** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call **ListTransitRouterVbrAttachments** to query the status of a VBR connection.
   *     *   If the VBR connection is in the **Attaching** state, the VBR connection is being created. In this case, you can query the VBR connection but cannot perform other operations.
   *     *   If the VBR connection is in the **Attached** state, the VBR connection is created.
   * *   The transit router and the VBR must belong to the same Alibaba Cloud account.
   * *   Transit routers can connect to VBRs that belong to the same or a different Alibaba Cloud account. To connect a transit router to a VBR that belongs to a different Alibaba Cloud account, grant permissions on the VBR to the transit router. For more information, see [Grant a transit router permissions on a network instance that belongs to another Alibaba Cloud account](https://help.aliyun.com/document_detail/181553.html).
   * *   After you create a VBR connection, it is not in route learning or associated forwarding relationship with transit router route tables by default.
   * 
   * @param request - CreateTransitRouterVbrAttachmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTransitRouterVbrAttachmentResponse
   */
  async createTransitRouterVbrAttachmentWithOptions(request: $_model.CreateTransitRouterVbrAttachmentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTransitRouterVbrAttachmentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPublishRouteEnabled)) {
      query["AutoPublishRouteEnabled"] = request.autoPublishRouteEnabled;
    }

    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

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

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.transitRouterAttachmentDescription)) {
      query["TransitRouterAttachmentDescription"] = request.transitRouterAttachmentDescription;
    }

    if (!$dara.isNull(request.transitRouterAttachmentName)) {
      query["TransitRouterAttachmentName"] = request.transitRouterAttachmentName;
    }

    if (!$dara.isNull(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    if (!$dara.isNull(request.vbrId)) {
      query["VbrId"] = request.vbrId;
    }

    if (!$dara.isNull(request.vbrOwnerId)) {
      query["VbrOwnerId"] = request.vbrOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTransitRouterVbrAttachment",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTransitRouterVbrAttachmentResponse>(await this.callApi(params, req, runtime), new $_model.CreateTransitRouterVbrAttachmentResponse({}));
  }

  /**
   * Connects the virtual border routers (VBRs) among which you want to establish network communication to the transit router in the region. Then, the transit router can exchange data between the VBR and CEN instance over private connections.
   * 
   * @remarks
   *   For more information about the regions and zones that support Enterprise Edition transit routers, see [What is CEN?](https://help.aliyun.com/document_detail/181681.html)
   * *   You can use the following methods to create a VBR connection on an Enterprise Edition transit router:
   *     *   If an Enterprise Edition transit router is already created in the region, specify the **VbrId**, **RegionId**, and **TransitRouterId** parameters to create a VBR connection.
   *     *   If no Enterprise Edition transit router is already created in the region, specify the **VbrId**, **CenId**, and **RegionId** parameters to create a VBR connection. When you create a VBR connection, the system automatically creates an Enterprise Edition transit router in the specified region.
   * *   **CreateTransitRouterVbrAttachment** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call **ListTransitRouterVbrAttachments** to query the status of a VBR connection.
   *     *   If the VBR connection is in the **Attaching** state, the VBR connection is being created. In this case, you can query the VBR connection but cannot perform other operations.
   *     *   If the VBR connection is in the **Attached** state, the VBR connection is created.
   * *   The transit router and the VBR must belong to the same Alibaba Cloud account.
   * *   Transit routers can connect to VBRs that belong to the same or a different Alibaba Cloud account. To connect a transit router to a VBR that belongs to a different Alibaba Cloud account, grant permissions on the VBR to the transit router. For more information, see [Grant a transit router permissions on a network instance that belongs to another Alibaba Cloud account](https://help.aliyun.com/document_detail/181553.html).
   * *   After you create a VBR connection, it is not in route learning or associated forwarding relationship with transit router route tables by default.
   * 
   * @param request - CreateTransitRouterVbrAttachmentRequest
   * @returns CreateTransitRouterVbrAttachmentResponse
   */
  async createTransitRouterVbrAttachment(request: $_model.CreateTransitRouterVbrAttachmentRequest): Promise<$_model.CreateTransitRouterVbrAttachmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTransitRouterVbrAttachmentWithOptions(request, runtime);
  }

  /**
   * Attaches virtual private clouds (VPCs) that you want to connect to a transit router. After you attach the VPCs to the same transit router, the VPCs can communicate with each other.
   * 
   * @remarks
   *   You can use the following methods to create a VPC connection from an Enterprise Edition transit router:
   *     *   If an Enterprise Edition transit router is already created in the region where you want to create a VPC connection, configure the **VpcId**, **ZoneMappings.N.VSwitchId**, **ZoneMappings.N.ZoneId**, **TransitRouterId**, and **RegionId** parameters.
   *     *   If no Enterprise Edition transit router is created in the region where you want to create a VPC connection, configure the **VpcId**, **ZoneMappings.N.VSwitchId**, **ZoneMappings.N.ZoneId**, **CenId**, and **RegionId** parameters. Then, the system automatically creates an Enterprise Edition transit router in the specified region.
   * *   **CreateTransitRouterVpcAttachment** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListTransitRouterVpcAttachments](https://help.aliyun.com/document_detail/261222.html) operation to query the status of a VPC connection.
   *     *   If the VPC connection is in the **Attaching** state, the VPC connection is being created. You can query the VPC connection but cannot perform other operations.
   *     *   If the VPC connection is in the **Attached** state, the VPC connection is created.
   * *   By default, route learning and associated forwarding are disabled between transit router route tables and VPC connections.
   * ### [](#)Prerequisites
   * Before you call this operation, make sure that the following requirements are met:
   * *   The VPC in the zones of the Enterprise Edition transit router contains at least one vSwitch. Each vSwitch must have at least one idle IP address. For more information, see [Regions and zones supported by Enterprise Edition transit routers](https://help.aliyun.com/document_detail/181681.html).
   * *   To connect to a network instance that belongs to another Alibaba Cloud account, you must first acquire the permissions from the account. For more information, see [Acquire permissions to connect to a network instance that belongs to another account](https://help.aliyun.com/document_detail/181553.html).
   * *   VPC connections incur fees. Make sure that you understand the billing rules of VPC connections before you create a VPC connection. For more information, see [Billing](https://help.aliyun.com/document_detail/189836.html).
   * 
   * @param tmpReq - CreateTransitRouterVpcAttachmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTransitRouterVpcAttachmentResponse
   */
  async createTransitRouterVpcAttachmentWithOptions(tmpReq: $_model.CreateTransitRouterVpcAttachmentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTransitRouterVpcAttachmentResponse> {
    tmpReq.validate();
    let request = new $_model.CreateTransitRouterVpcAttachmentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.transitRouterVPCAttachmentOptions)) {
      request.transitRouterVPCAttachmentOptionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.transitRouterVPCAttachmentOptions, "TransitRouterVPCAttachmentOptions", "json");
    }

    let query = { };
    if (!$dara.isNull(request.autoPublishRouteEnabled)) {
      query["AutoPublishRouteEnabled"] = request.autoPublishRouteEnabled;
    }

    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

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

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.transitRouterAttachmentDescription)) {
      query["TransitRouterAttachmentDescription"] = request.transitRouterAttachmentDescription;
    }

    if (!$dara.isNull(request.transitRouterAttachmentName)) {
      query["TransitRouterAttachmentName"] = request.transitRouterAttachmentName;
    }

    if (!$dara.isNull(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    if (!$dara.isNull(request.transitRouterVPCAttachmentOptionsShrink)) {
      query["TransitRouterVPCAttachmentOptions"] = request.transitRouterVPCAttachmentOptionsShrink;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.vpcOwnerId)) {
      query["VpcOwnerId"] = request.vpcOwnerId;
    }

    if (!$dara.isNull(request.zoneMappings)) {
      query["ZoneMappings"] = request.zoneMappings;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTransitRouterVpcAttachment",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTransitRouterVpcAttachmentResponse>(await this.callApi(params, req, runtime), new $_model.CreateTransitRouterVpcAttachmentResponse({}));
  }

  /**
   * Attaches virtual private clouds (VPCs) that you want to connect to a transit router. After you attach the VPCs to the same transit router, the VPCs can communicate with each other.
   * 
   * @remarks
   *   You can use the following methods to create a VPC connection from an Enterprise Edition transit router:
   *     *   If an Enterprise Edition transit router is already created in the region where you want to create a VPC connection, configure the **VpcId**, **ZoneMappings.N.VSwitchId**, **ZoneMappings.N.ZoneId**, **TransitRouterId**, and **RegionId** parameters.
   *     *   If no Enterprise Edition transit router is created in the region where you want to create a VPC connection, configure the **VpcId**, **ZoneMappings.N.VSwitchId**, **ZoneMappings.N.ZoneId**, **CenId**, and **RegionId** parameters. Then, the system automatically creates an Enterprise Edition transit router in the specified region.
   * *   **CreateTransitRouterVpcAttachment** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListTransitRouterVpcAttachments](https://help.aliyun.com/document_detail/261222.html) operation to query the status of a VPC connection.
   *     *   If the VPC connection is in the **Attaching** state, the VPC connection is being created. You can query the VPC connection but cannot perform other operations.
   *     *   If the VPC connection is in the **Attached** state, the VPC connection is created.
   * *   By default, route learning and associated forwarding are disabled between transit router route tables and VPC connections.
   * ### [](#)Prerequisites
   * Before you call this operation, make sure that the following requirements are met:
   * *   The VPC in the zones of the Enterprise Edition transit router contains at least one vSwitch. Each vSwitch must have at least one idle IP address. For more information, see [Regions and zones supported by Enterprise Edition transit routers](https://help.aliyun.com/document_detail/181681.html).
   * *   To connect to a network instance that belongs to another Alibaba Cloud account, you must first acquire the permissions from the account. For more information, see [Acquire permissions to connect to a network instance that belongs to another account](https://help.aliyun.com/document_detail/181553.html).
   * *   VPC connections incur fees. Make sure that you understand the billing rules of VPC connections before you create a VPC connection. For more information, see [Billing](https://help.aliyun.com/document_detail/189836.html).
   * 
   * @param request - CreateTransitRouterVpcAttachmentRequest
   * @returns CreateTransitRouterVpcAttachmentResponse
   */
  async createTransitRouterVpcAttachment(request: $_model.CreateTransitRouterVpcAttachmentRequest): Promise<$_model.CreateTransitRouterVpcAttachmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTransitRouterVpcAttachmentWithOptions(request, runtime);
  }

  /**
   * Attaches an IPsec-VPN connection to a transit router.
   * 
   * @remarks
   *   By default, route learning and associated forwarding are disabled between transit router route tables and IPsec-VPN attachments.
   * *   When you call `CreateTransitRouterVpnAttachment`, if you set **CenId** and **RegionId**, you do not need to set **TransitRouterId**. If you set **TransitRouterId** and **RegionId**, you do not need to set **CenId**.
   * ### Prerequisites
   * *   Before you attach an IPsec-VPN connection to a transit router, make sure that at least one IPsec-VPN connection is created in the region where the transit router is deployed. Make sure the IPsec-VPN connection is not associated with a resource. For more information, see [CreateVpnAttachment](https://help.aliyun.com/document_detail/442455.html).
   * *   If the IPsec-VPN connection to be attached to the transit router belongs to a different Alibaba Cloud account, make sure that the transit router has obtained the required permissions from the IPsec-VPN connection. For more information, see [GrantInstanceToTransitRouter](https://help.aliyun.com/document_detail/417520.html).
   * 
   * @param request - CreateTransitRouterVpnAttachmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTransitRouterVpnAttachmentResponse
   */
  async createTransitRouterVpnAttachmentWithOptions(request: $_model.CreateTransitRouterVpnAttachmentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTransitRouterVpnAttachmentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPublishRouteEnabled)) {
      query["AutoPublishRouteEnabled"] = request.autoPublishRouteEnabled;
    }

    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

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

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.transitRouterAttachmentDescription)) {
      query["TransitRouterAttachmentDescription"] = request.transitRouterAttachmentDescription;
    }

    if (!$dara.isNull(request.transitRouterAttachmentName)) {
      query["TransitRouterAttachmentName"] = request.transitRouterAttachmentName;
    }

    if (!$dara.isNull(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    if (!$dara.isNull(request.vpnId)) {
      query["VpnId"] = request.vpnId;
    }

    if (!$dara.isNull(request.vpnOwnerId)) {
      query["VpnOwnerId"] = request.vpnOwnerId;
    }

    if (!$dara.isNull(request.zone)) {
      query["Zone"] = request.zone;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTransitRouterVpnAttachment",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTransitRouterVpnAttachmentResponse>(await this.callApi(params, req, runtime), new $_model.CreateTransitRouterVpnAttachmentResponse({}));
  }

  /**
   * Attaches an IPsec-VPN connection to a transit router.
   * 
   * @remarks
   *   By default, route learning and associated forwarding are disabled between transit router route tables and IPsec-VPN attachments.
   * *   When you call `CreateTransitRouterVpnAttachment`, if you set **CenId** and **RegionId**, you do not need to set **TransitRouterId**. If you set **TransitRouterId** and **RegionId**, you do not need to set **CenId**.
   * ### Prerequisites
   * *   Before you attach an IPsec-VPN connection to a transit router, make sure that at least one IPsec-VPN connection is created in the region where the transit router is deployed. Make sure the IPsec-VPN connection is not associated with a resource. For more information, see [CreateVpnAttachment](https://help.aliyun.com/document_detail/442455.html).
   * *   If the IPsec-VPN connection to be attached to the transit router belongs to a different Alibaba Cloud account, make sure that the transit router has obtained the required permissions from the IPsec-VPN connection. For more information, see [GrantInstanceToTransitRouter](https://help.aliyun.com/document_detail/417520.html).
   * 
   * @param request - CreateTransitRouterVpnAttachmentRequest
   * @returns CreateTransitRouterVpnAttachmentResponse
   */
  async createTransitRouterVpnAttachment(request: $_model.CreateTransitRouterVpnAttachmentRequest): Promise<$_model.CreateTransitRouterVpnAttachmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTransitRouterVpnAttachmentWithOptions(request, runtime);
  }

  /**
   * Disables a flow log. A disabled flow log no longer captures information about network traffic.
   * 
   * @remarks
   * `DeactiveFlowLog` is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the `DescribeFlowlogs` operation to query the status of a flow log.
   * *   If a flow log is in the **Modifying** state, the flow log is being disabled. You can query the flow log but cannot perform other operations.
   * *   If a flow log is in the **Inactive** state, the flow log is disabled.
   * 
   * @param request - DeactiveFlowLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeactiveFlowLogResponse
   */
  async deactiveFlowLogWithOptions(request: $_model.DeactiveFlowLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeactiveFlowLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

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
      version: "2017-09-12",
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
   * Disables a flow log. A disabled flow log no longer captures information about network traffic.
   * 
   * @remarks
   * `DeactiveFlowLog` is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the `DescribeFlowlogs` operation to query the status of a flow log.
   * *   If a flow log is in the **Modifying** state, the flow log is being disabled. You can query the flow log but cannot perform other operations.
   * *   If a flow log is in the **Inactive** state, the flow log is disabled.
   * 
   * @param request - DeactiveFlowLogRequest
   * @returns DeactiveFlowLogResponse
   */
  async deactiveFlowLog(request: $_model.DeactiveFlowLogRequest): Promise<$_model.DeactiveFlowLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deactiveFlowLogWithOptions(request, runtime);
  }

  /**
   * Deletes a Cloud Enterprise Network (CEN) instance.
   * 
   * @remarks
   * *DeleteCen** is an asynchronous operation. After a request is sent, the system returns a **request ID** and runs the task in the background. You can call **DescribeCens** to query the status of a CEN instance.
   * *   If the CEN instance is in the **Deleting** state, the CEN instance is being deleted. In this case, you can query the CEN instance but cannot perform other operations.
   * *   If the CEN instance cannot be found, the CEN instance is deleted.
   * ### [](#)Prerequisites
   * The CEN instance that you want to delete is not associated with a bandwidth plan, and the transit router associated with the CEN instance does not have a network instance connection or a custom route table.
   * *   For more information about how to detach a network instance, see the following topics:
   *     *   [DeleteTransitRouterVpcAttachment](https://help.aliyun.com/document_detail/261220.html)
   *     *   [DeleteTransitRouterVbrAttachment](https://help.aliyun.com/document_detail/261223.html)
   *     *   [DeleteTransitRouterVpnAttachment](https://help.aliyun.com/document_detail/443992.html)
   *     *   [DeleteTransitRouterPeerAttachment](https://help.aliyun.com/document_detail/261227.html)
   *     > For more information about how to detach network instances from a Basic Edition transit router, see [DetachCenChildInstance](https://help.aliyun.com/document_detail/65915.html).
   * *   For more information about how to delete custom route tables from an Enterprise Edition transit router, see [DeleteTransitRouterRouteTable](https://help.aliyun.com/document_detail/261235.html).
   * *   For more information about how to disassociate a bandwidth plan from a CEN instance, see [UnassociateCenBandwidthPackage](https://help.aliyun.com/document_detail/65935.html).
   * 
   * @param request - DeleteCenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCenResponse
   */
  async deleteCenWithOptions(request: $_model.DeleteCenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
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
      action: "DeleteCen",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCenResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCenResponse({}));
  }

  /**
   * Deletes a Cloud Enterprise Network (CEN) instance.
   * 
   * @remarks
   * *DeleteCen** is an asynchronous operation. After a request is sent, the system returns a **request ID** and runs the task in the background. You can call **DescribeCens** to query the status of a CEN instance.
   * *   If the CEN instance is in the **Deleting** state, the CEN instance is being deleted. In this case, you can query the CEN instance but cannot perform other operations.
   * *   If the CEN instance cannot be found, the CEN instance is deleted.
   * ### [](#)Prerequisites
   * The CEN instance that you want to delete is not associated with a bandwidth plan, and the transit router associated with the CEN instance does not have a network instance connection or a custom route table.
   * *   For more information about how to detach a network instance, see the following topics:
   *     *   [DeleteTransitRouterVpcAttachment](https://help.aliyun.com/document_detail/261220.html)
   *     *   [DeleteTransitRouterVbrAttachment](https://help.aliyun.com/document_detail/261223.html)
   *     *   [DeleteTransitRouterVpnAttachment](https://help.aliyun.com/document_detail/443992.html)
   *     *   [DeleteTransitRouterPeerAttachment](https://help.aliyun.com/document_detail/261227.html)
   *     > For more information about how to detach network instances from a Basic Edition transit router, see [DetachCenChildInstance](https://help.aliyun.com/document_detail/65915.html).
   * *   For more information about how to delete custom route tables from an Enterprise Edition transit router, see [DeleteTransitRouterRouteTable](https://help.aliyun.com/document_detail/261235.html).
   * *   For more information about how to disassociate a bandwidth plan from a CEN instance, see [UnassociateCenBandwidthPackage](https://help.aliyun.com/document_detail/65935.html).
   * 
   * @param request - DeleteCenRequest
   * @returns DeleteCenResponse
   */
  async deleteCen(request: $_model.DeleteCenRequest): Promise<$_model.DeleteCenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCenWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteCenBandwidthPackageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCenBandwidthPackageResponse
   */
  async deleteCenBandwidthPackageWithOptions(request: $_model.DeleteCenBandwidthPackageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCenBandwidthPackageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cenBandwidthPackageId)) {
      query["CenBandwidthPackageId"] = request.cenBandwidthPackageId;
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
      action: "DeleteCenBandwidthPackage",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCenBandwidthPackageResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCenBandwidthPackageResponse({}));
  }

  /**
   * @param request - DeleteCenBandwidthPackageRequest
   * @returns DeleteCenBandwidthPackageResponse
   */
  async deleteCenBandwidthPackage(request: $_model.DeleteCenBandwidthPackageRequest): Promise<$_model.DeleteCenBandwidthPackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCenBandwidthPackageWithOptions(request, runtime);
  }

  /**
   * Deletes a route of a network instance from an Enterprise Edition transit router.
   * 
   * @remarks
   *   You can delete routes only from virtual private clouds (VPCs) and virtual border routers (VBRs) whose next hop is an **Enterprise Edition transit router connection**, which is the connection to the network instance.
   * *   **DeleteCenChildInstanceRouteEntryToAttachment** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **DescribeRouteEntryList** operation to query the status of a route.
   *     *   If a route is in the **Deleting** state, the route is being deleted. You can query the route but cannot perform other operations.
   *     *   If a route cannot be found, the route is deleted.
   * 
   * @param request - DeleteCenChildInstanceRouteEntryToAttachmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCenChildInstanceRouteEntryToAttachmentResponse
   */
  async deleteCenChildInstanceRouteEntryToAttachmentWithOptions(request: $_model.DeleteCenChildInstanceRouteEntryToAttachmentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCenChildInstanceRouteEntryToAttachmentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.destinationCidrBlock)) {
      query["DestinationCidrBlock"] = request.destinationCidrBlock;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.routeTableId)) {
      query["RouteTableId"] = request.routeTableId;
    }

    if (!$dara.isNull(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCenChildInstanceRouteEntryToAttachment",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCenChildInstanceRouteEntryToAttachmentResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCenChildInstanceRouteEntryToAttachmentResponse({}));
  }

  /**
   * Deletes a route of a network instance from an Enterprise Edition transit router.
   * 
   * @remarks
   *   You can delete routes only from virtual private clouds (VPCs) and virtual border routers (VBRs) whose next hop is an **Enterprise Edition transit router connection**, which is the connection to the network instance.
   * *   **DeleteCenChildInstanceRouteEntryToAttachment** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **DescribeRouteEntryList** operation to query the status of a route.
   *     *   If a route is in the **Deleting** state, the route is being deleted. You can query the route but cannot perform other operations.
   *     *   If a route cannot be found, the route is deleted.
   * 
   * @param request - DeleteCenChildInstanceRouteEntryToAttachmentRequest
   * @returns DeleteCenChildInstanceRouteEntryToAttachmentResponse
   */
  async deleteCenChildInstanceRouteEntryToAttachment(request: $_model.DeleteCenChildInstanceRouteEntryToAttachmentRequest): Promise<$_model.DeleteCenChildInstanceRouteEntryToAttachmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCenChildInstanceRouteEntryToAttachmentWithOptions(request, runtime);
  }

  /**
   * Deletes a route from a network instance that is attached to a Cloud Enterprise Network (CEN) instance.
   * 
   * @remarks
   * ## Limits
   * *   By default, the DeleteCenChildInstanceRouteEntryToCen operation is unavailable. To call this operation, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
   * *   You cannot delete a route entry from an Enterprise Edition transit router by calling the DeleteCenChildInstanceRouteEntryToCen operation.
   * 
   * @param request - DeleteCenChildInstanceRouteEntryToCenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCenChildInstanceRouteEntryToCenResponse
   */
  async deleteCenChildInstanceRouteEntryToCenWithOptions(request: $_model.DeleteCenChildInstanceRouteEntryToCenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCenChildInstanceRouteEntryToCenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.childInstanceAliUid)) {
      query["ChildInstanceAliUid"] = request.childInstanceAliUid;
    }

    if (!$dara.isNull(request.childInstanceId)) {
      query["ChildInstanceId"] = request.childInstanceId;
    }

    if (!$dara.isNull(request.childInstanceRegionId)) {
      query["ChildInstanceRegionId"] = request.childInstanceRegionId;
    }

    if (!$dara.isNull(request.childInstanceType)) {
      query["ChildInstanceType"] = request.childInstanceType;
    }

    if (!$dara.isNull(request.destinationCidrBlock)) {
      query["DestinationCidrBlock"] = request.destinationCidrBlock;
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

    if (!$dara.isNull(request.routeTableId)) {
      query["RouteTableId"] = request.routeTableId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCenChildInstanceRouteEntryToCen",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCenChildInstanceRouteEntryToCenResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCenChildInstanceRouteEntryToCenResponse({}));
  }

  /**
   * Deletes a route from a network instance that is attached to a Cloud Enterprise Network (CEN) instance.
   * 
   * @remarks
   * ## Limits
   * *   By default, the DeleteCenChildInstanceRouteEntryToCen operation is unavailable. To call this operation, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
   * *   You cannot delete a route entry from an Enterprise Edition transit router by calling the DeleteCenChildInstanceRouteEntryToCen operation.
   * 
   * @param request - DeleteCenChildInstanceRouteEntryToCenRequest
   * @returns DeleteCenChildInstanceRouteEntryToCenResponse
   */
  async deleteCenChildInstanceRouteEntryToCen(request: $_model.DeleteCenChildInstanceRouteEntryToCenRequest): Promise<$_model.DeleteCenChildInstanceRouteEntryToCenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCenChildInstanceRouteEntryToCenWithOptions(request, runtime);
  }

  /**
   * Deletes a quality of service (QoS) policy.
   * 
   * @remarks
   *   Before you delete a QoS policy, you must delete all queues in the QoS policy except the default queue. For more information, see [DeleteCenInterRegionTrafficQosQueue](https://help.aliyun.com/document_detail/419062.html).
   * *   **DeleteCenInterRegionTrafficQosPolicy** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **ListCenInterRegionTrafficQosPolicies** operation to query the status of a QoS policy.
   *     *   If a QoS policy is in the **Deleting** state, the QoS policy is being deleted. You can query the QoS policy but cannot perform other operations.
   *     *   If a QoS policy cannot be found, the QoS policy is deleted.
   * 
   * @param request - DeleteCenInterRegionTrafficQosPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCenInterRegionTrafficQosPolicyResponse
   */
  async deleteCenInterRegionTrafficQosPolicyWithOptions(request: $_model.DeleteCenInterRegionTrafficQosPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCenInterRegionTrafficQosPolicyResponse> {
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.trafficQosPolicyId)) {
      query["TrafficQosPolicyId"] = request.trafficQosPolicyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCenInterRegionTrafficQosPolicy",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCenInterRegionTrafficQosPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCenInterRegionTrafficQosPolicyResponse({}));
  }

  /**
   * Deletes a quality of service (QoS) policy.
   * 
   * @remarks
   *   Before you delete a QoS policy, you must delete all queues in the QoS policy except the default queue. For more information, see [DeleteCenInterRegionTrafficQosQueue](https://help.aliyun.com/document_detail/419062.html).
   * *   **DeleteCenInterRegionTrafficQosPolicy** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **ListCenInterRegionTrafficQosPolicies** operation to query the status of a QoS policy.
   *     *   If a QoS policy is in the **Deleting** state, the QoS policy is being deleted. You can query the QoS policy but cannot perform other operations.
   *     *   If a QoS policy cannot be found, the QoS policy is deleted.
   * 
   * @param request - DeleteCenInterRegionTrafficQosPolicyRequest
   * @returns DeleteCenInterRegionTrafficQosPolicyResponse
   */
  async deleteCenInterRegionTrafficQosPolicy(request: $_model.DeleteCenInterRegionTrafficQosPolicyRequest): Promise<$_model.DeleteCenInterRegionTrafficQosPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCenInterRegionTrafficQosPolicyWithOptions(request, runtime);
  }

  /**
   * Deletes a queue from a quality of service (QoS) policy.
   * 
   * @remarks
   *   You cannot delete the default queue.
   * *   **DeleteCenInterRegionTrafficQosQueue** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **ListCenInterRegionTrafficQosPolicies** operation to query the status of a queue. If a queue cannot be found, the queue is deleted.
   * 
   * @param request - DeleteCenInterRegionTrafficQosQueueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCenInterRegionTrafficQosQueueResponse
   */
  async deleteCenInterRegionTrafficQosQueueWithOptions(request: $_model.DeleteCenInterRegionTrafficQosQueueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCenInterRegionTrafficQosQueueResponse> {
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

    if (!$dara.isNull(request.qosQueueId)) {
      query["QosQueueId"] = request.qosQueueId;
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
      action: "DeleteCenInterRegionTrafficQosQueue",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCenInterRegionTrafficQosQueueResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCenInterRegionTrafficQosQueueResponse({}));
  }

  /**
   * Deletes a queue from a quality of service (QoS) policy.
   * 
   * @remarks
   *   You cannot delete the default queue.
   * *   **DeleteCenInterRegionTrafficQosQueue** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **ListCenInterRegionTrafficQosPolicies** operation to query the status of a queue. If a queue cannot be found, the queue is deleted.
   * 
   * @param request - DeleteCenInterRegionTrafficQosQueueRequest
   * @returns DeleteCenInterRegionTrafficQosQueueResponse
   */
  async deleteCenInterRegionTrafficQosQueue(request: $_model.DeleteCenInterRegionTrafficQosQueueRequest): Promise<$_model.DeleteCenInterRegionTrafficQosQueueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCenInterRegionTrafficQosQueueWithOptions(request, runtime);
  }

  /**
   * Deletes a routing policy.
   * 
   * @remarks
   * `DeleteCenRouteMap` is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the `DescribeCenRouteMaps` operation to query the status of a routing policy.
   * *   If a routing policy is in the **Deleting** state, the routing policy is being deleted. You can query the routing policy but cannot perform other operations.
   * *   If a routing policy cannot be found, it is deleted.
   * 
   * @param request - DeleteCenRouteMapRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCenRouteMapResponse
   */
  async deleteCenRouteMapWithOptions(request: $_model.DeleteCenRouteMapRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCenRouteMapResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.cenRegionId)) {
      query["CenRegionId"] = request.cenRegionId;
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

    if (!$dara.isNull(request.routeMapId)) {
      query["RouteMapId"] = request.routeMapId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCenRouteMap",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCenRouteMapResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCenRouteMapResponse({}));
  }

  /**
   * Deletes a routing policy.
   * 
   * @remarks
   * `DeleteCenRouteMap` is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the `DescribeCenRouteMaps` operation to query the status of a routing policy.
   * *   If a routing policy is in the **Deleting** state, the routing policy is being deleted. You can query the routing policy but cannot perform other operations.
   * *   If a routing policy cannot be found, it is deleted.
   * 
   * @param request - DeleteCenRouteMapRequest
   * @returns DeleteCenRouteMapResponse
   */
  async deleteCenRouteMap(request: $_model.DeleteCenRouteMapRequest): Promise<$_model.DeleteCenRouteMapResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCenRouteMapWithOptions(request, runtime);
  }

  /**
   * Deletes a flow log.
   * 
   * @remarks
   * `DeleteFlowlog` is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the `DescribeFlowlogs` operation to query the status of a flow log.
   * *   If a flow log is in the **Deleting** state, the flow log is being deleted. In this case, you can query the flow log but cannot perform other operations.
   * *   If a flow log cannot be found, the flow log is deleted.
   * 
   * @param request - DeleteFlowlogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFlowlogResponse
   */
  async deleteFlowlogWithOptions(request: $_model.DeleteFlowlogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFlowlogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

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
      action: "DeleteFlowlog",
      version: "2017-09-12",
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
   * @remarks
   * `DeleteFlowlog` is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the `DescribeFlowlogs` operation to query the status of a flow log.
   * *   If a flow log is in the **Deleting** state, the flow log is being deleted. In this case, you can query the flow log but cannot perform other operations.
   * *   If a flow log cannot be found, the flow log is deleted.
   * 
   * @param request - DeleteFlowlogRequest
   * @returns DeleteFlowlogResponse
   */
  async deleteFlowlog(request: $_model.DeleteFlowlogRequest): Promise<$_model.DeleteFlowlogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFlowlogWithOptions(request, runtime);
  }

  /**
   * Deletes the configuration of a cloud service connected to a Basic Edition transit router.
   * 
   * @remarks
   * *DeleteRouteServiceInCen** is an asynchronous operation. After a request is sent, the system returns a **request ID** and runs the task in the background. If the request parameters are invalid, the system returns a request ID, but the cloud service configuration is not deleted. You can call **DescribeRouteServicesInCen** to query the status of the task.
   * *   If a cloud service is in the **Deleting** state, the cloud service configuration is being deleted. In this case, you can only query the cloud service configuration and cannot perform other operations.
   * *   If the specified cloud service configuration cannot be found, the cloud service configuration is deleted.
   * 
   * @param request - DeleteRouteServiceInCenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRouteServiceInCenResponse
   */
  async deleteRouteServiceInCenWithOptions(request: $_model.DeleteRouteServiceInCenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRouteServiceInCenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessRegionId)) {
      query["AccessRegionId"] = request.accessRegionId;
    }

    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.host)) {
      query["Host"] = request.host;
    }

    if (!$dara.isNull(request.hostRegionId)) {
      query["HostRegionId"] = request.hostRegionId;
    }

    if (!$dara.isNull(request.hostVpcId)) {
      query["HostVpcId"] = request.hostVpcId;
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
      action: "DeleteRouteServiceInCen",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRouteServiceInCenResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRouteServiceInCenResponse({}));
  }

  /**
   * Deletes the configuration of a cloud service connected to a Basic Edition transit router.
   * 
   * @remarks
   * *DeleteRouteServiceInCen** is an asynchronous operation. After a request is sent, the system returns a **request ID** and runs the task in the background. If the request parameters are invalid, the system returns a request ID, but the cloud service configuration is not deleted. You can call **DescribeRouteServicesInCen** to query the status of the task.
   * *   If a cloud service is in the **Deleting** state, the cloud service configuration is being deleted. In this case, you can only query the cloud service configuration and cannot perform other operations.
   * *   If the specified cloud service configuration cannot be found, the cloud service configuration is deleted.
   * 
   * @param request - DeleteRouteServiceInCenRequest
   * @returns DeleteRouteServiceInCenResponse
   */
  async deleteRouteServiceInCen(request: $_model.DeleteRouteServiceInCenRequest): Promise<$_model.DeleteRouteServiceInCenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRouteServiceInCenWithOptions(request, runtime);
  }

  /**
   * Deletes a specified traffic marking policy.
   * 
   * @remarks
   *   **DeleteTrafficMarkingPolicy** is an asynchronous operation. After a request is sent, the system returns a **request ID** and runs the task in the background. You can call the **ListTrafficMarkingPolicies** operation to query the status of a traffic marking policy.
   *     *   If a traffic marking policy is in the **Deleting** state, the traffic marking policy is being deleted. You can query the traffic marking policy but cannot perform other operations.
   *     *   If a traffic marking policy cannot be found, the traffic marking policy is deleted.
   * *   Before you delete a traffic marking policy, you must delete all traffic classification rules from the policy. For more information, see [RemoveTrafficMatchRuleFromTrafficMarkingPolicy](https://help.aliyun.com/document_detail/468330.html).
   * 
   * @param request - DeleteTrafficMarkingPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTrafficMarkingPolicyResponse
   */
  async deleteTrafficMarkingPolicyWithOptions(request: $_model.DeleteTrafficMarkingPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTrafficMarkingPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.force)) {
      query["Force"] = request.force;
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

    if (!$dara.isNull(request.trafficMarkingPolicyId)) {
      query["TrafficMarkingPolicyId"] = request.trafficMarkingPolicyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTrafficMarkingPolicy",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTrafficMarkingPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTrafficMarkingPolicyResponse({}));
  }

  /**
   * Deletes a specified traffic marking policy.
   * 
   * @remarks
   *   **DeleteTrafficMarkingPolicy** is an asynchronous operation. After a request is sent, the system returns a **request ID** and runs the task in the background. You can call the **ListTrafficMarkingPolicies** operation to query the status of a traffic marking policy.
   *     *   If a traffic marking policy is in the **Deleting** state, the traffic marking policy is being deleted. You can query the traffic marking policy but cannot perform other operations.
   *     *   If a traffic marking policy cannot be found, the traffic marking policy is deleted.
   * *   Before you delete a traffic marking policy, you must delete all traffic classification rules from the policy. For more information, see [RemoveTrafficMatchRuleFromTrafficMarkingPolicy](https://help.aliyun.com/document_detail/468330.html).
   * 
   * @param request - DeleteTrafficMarkingPolicyRequest
   * @returns DeleteTrafficMarkingPolicyResponse
   */
  async deleteTrafficMarkingPolicy(request: $_model.DeleteTrafficMarkingPolicyRequest): Promise<$_model.DeleteTrafficMarkingPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTrafficMarkingPolicyWithOptions(request, runtime);
  }

  /**
   * Deletes an aggregate route.
   * 
   * @remarks
   *   Before you delete an aggregate route, make sure that your network has a redundant route to prevent service interruptions.
   * *   After an aggregate route is deleted, the aggregate route is automatically withdrawn from virtual private clouds (VPCs). Specific routes that fall within the aggregate route are advertised to the VPCs.
   * 
   * @param request - DeleteTransitRouteTableAggregationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTransitRouteTableAggregationResponse
   */
  async deleteTransitRouteTableAggregationWithOptions(request: $_model.DeleteTransitRouteTableAggregationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTransitRouteTableAggregationResponse> {
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.transitRouteTableAggregationCidr)) {
      query["TransitRouteTableAggregationCidr"] = request.transitRouteTableAggregationCidr;
    }

    if (!$dara.isNull(request.transitRouteTableId)) {
      query["TransitRouteTableId"] = request.transitRouteTableId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTransitRouteTableAggregation",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTransitRouteTableAggregationResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTransitRouteTableAggregationResponse({}));
  }

  /**
   * Deletes an aggregate route.
   * 
   * @remarks
   *   Before you delete an aggregate route, make sure that your network has a redundant route to prevent service interruptions.
   * *   After an aggregate route is deleted, the aggregate route is automatically withdrawn from virtual private clouds (VPCs). Specific routes that fall within the aggregate route are advertised to the VPCs.
   * 
   * @param request - DeleteTransitRouteTableAggregationRequest
   * @returns DeleteTransitRouteTableAggregationResponse
   */
  async deleteTransitRouteTableAggregation(request: $_model.DeleteTransitRouteTableAggregationRequest): Promise<$_model.DeleteTransitRouteTableAggregationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTransitRouteTableAggregationWithOptions(request, runtime);
  }

  /**
   * Deletes a transit router.
   * 
   * @remarks
   * *DeleteTransitRouter** is an asynchronous operation. After you send a request, the **request ID** is returned but the operation is still being performed in the system background. You can call **ListTransitRouters** to query the status of a transit router.
   * *   If a transit router is in the **Deleting** state, the transit router is being deleted. In this case, you can query the transit router but cannot perform other operations.
   * *   If a transit router cannot be found, the transit router is deleted.
   * #### Prerequisites
   * Before you delete a transit router, make sure that the following prerequisites are met:
   * - No network instance connections are created on the transit router. 
   * 	
   *     - For more information about how to delete a virtual private cloud (VPC) connection, see [DeleteTransitRouterVpcAttachment](https://help.aliyun.com/document_detail/261220.html). 
   *     - For more information about how to delete a virtual border router (VBR) connection, see [DeleteTransitRouterVbrAttachment](https://help.aliyun.com/document_detail/261223.html). 
   *     - For more information about how to delete a Cloud Connect Network (CCN) connection, see [DetachCenChildInstance](https://help.aliyun.com/document_detail/65915.html). 
   *     - For more information about how to delete a VPN connection, see [DeleteTransitRouterVpnAttachment](https://help.aliyun.com/document_detail/443992.html).
   *     - For more information about how to delete an inter-region connection, see [DeleteTransitRouterPeerAttachment](https://help.aliyun.com/document_detail/261227.html). 
   * - No custom route tables are created on the transit router. For more information about how to delete a custom route table, see [DeleteTransitRouterRouteTable](https://help.aliyun.com/document_detail/261235.html).
   * 
   * @param request - DeleteTransitRouterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTransitRouterResponse
   */
  async deleteTransitRouterWithOptions(request: $_model.DeleteTransitRouterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTransitRouterResponse> {
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTransitRouter",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTransitRouterResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTransitRouterResponse({}));
  }

  /**
   * Deletes a transit router.
   * 
   * @remarks
   * *DeleteTransitRouter** is an asynchronous operation. After you send a request, the **request ID** is returned but the operation is still being performed in the system background. You can call **ListTransitRouters** to query the status of a transit router.
   * *   If a transit router is in the **Deleting** state, the transit router is being deleted. In this case, you can query the transit router but cannot perform other operations.
   * *   If a transit router cannot be found, the transit router is deleted.
   * #### Prerequisites
   * Before you delete a transit router, make sure that the following prerequisites are met:
   * - No network instance connections are created on the transit router. 
   * 	
   *     - For more information about how to delete a virtual private cloud (VPC) connection, see [DeleteTransitRouterVpcAttachment](https://help.aliyun.com/document_detail/261220.html). 
   *     - For more information about how to delete a virtual border router (VBR) connection, see [DeleteTransitRouterVbrAttachment](https://help.aliyun.com/document_detail/261223.html). 
   *     - For more information about how to delete a Cloud Connect Network (CCN) connection, see [DetachCenChildInstance](https://help.aliyun.com/document_detail/65915.html). 
   *     - For more information about how to delete a VPN connection, see [DeleteTransitRouterVpnAttachment](https://help.aliyun.com/document_detail/443992.html).
   *     - For more information about how to delete an inter-region connection, see [DeleteTransitRouterPeerAttachment](https://help.aliyun.com/document_detail/261227.html). 
   * - No custom route tables are created on the transit router. For more information about how to delete a custom route table, see [DeleteTransitRouterRouteTable](https://help.aliyun.com/document_detail/261235.html).
   * 
   * @param request - DeleteTransitRouterRequest
   * @returns DeleteTransitRouterResponse
   */
  async deleteTransitRouter(request: $_model.DeleteTransitRouterRequest): Promise<$_model.DeleteTransitRouterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTransitRouterWithOptions(request, runtime);
  }

  /**
   * Deletes a CIDR block from a transit router.
   * 
   * @remarks
   * If IP addresses within the CIDR block have been allocated to network instances, the CIDR block cannot be deleted.
   * 
   * @param request - DeleteTransitRouterCidrRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTransitRouterCidrResponse
   */
  async deleteTransitRouterCidrWithOptions(request: $_model.DeleteTransitRouterCidrRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTransitRouterCidrResponse> {
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

    if (!$dara.isNull(request.transitRouterCidrId)) {
      query["TransitRouterCidrId"] = request.transitRouterCidrId;
    }

    if (!$dara.isNull(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTransitRouterCidr",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTransitRouterCidrResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTransitRouterCidrResponse({}));
  }

  /**
   * Deletes a CIDR block from a transit router.
   * 
   * @remarks
   * If IP addresses within the CIDR block have been allocated to network instances, the CIDR block cannot be deleted.
   * 
   * @param request - DeleteTransitRouterCidrRequest
   * @returns DeleteTransitRouterCidrResponse
   */
  async deleteTransitRouterCidr(request: $_model.DeleteTransitRouterCidrRequest): Promise<$_model.DeleteTransitRouterCidrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTransitRouterCidrWithOptions(request, runtime);
  }

  /**
   * Deletes an Express Connect Router (ECR) connection from an Enterprise Edition transit router.
   * 
   * @remarks
   * DeleteTransitRouterEcrAttachment is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the ListTransitRouterEcrAttachments operation to query the status of an ECR connection.
   * If the ECR connection is in the Detaching state, the ECR connection is being deleted. In this case, you can query the ECR connection but cannot perform other operations on the ECR connection. If the ECR connection cannot be found, the ECR connection is deleted. Before you call the DeleteTransitRouterEcrAttachment operation, make sure that all request parameters are valid. If a request is invalid, a request ID is returned but the ECR connection is not deleted.
   * 
   * @param request - DeleteTransitRouterEcrAttachmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTransitRouterEcrAttachmentResponse
   */
  async deleteTransitRouterEcrAttachmentWithOptions(request: $_model.DeleteTransitRouterEcrAttachmentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTransitRouterEcrAttachmentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.force)) {
      query["Force"] = request.force;
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

    if (!$dara.isNull(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTransitRouterEcrAttachment",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTransitRouterEcrAttachmentResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTransitRouterEcrAttachmentResponse({}));
  }

  /**
   * Deletes an Express Connect Router (ECR) connection from an Enterprise Edition transit router.
   * 
   * @remarks
   * DeleteTransitRouterEcrAttachment is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the ListTransitRouterEcrAttachments operation to query the status of an ECR connection.
   * If the ECR connection is in the Detaching state, the ECR connection is being deleted. In this case, you can query the ECR connection but cannot perform other operations on the ECR connection. If the ECR connection cannot be found, the ECR connection is deleted. Before you call the DeleteTransitRouterEcrAttachment operation, make sure that all request parameters are valid. If a request is invalid, a request ID is returned but the ECR connection is not deleted.
   * 
   * @param request - DeleteTransitRouterEcrAttachmentRequest
   * @returns DeleteTransitRouterEcrAttachmentResponse
   */
  async deleteTransitRouterEcrAttachment(request: $_model.DeleteTransitRouterEcrAttachmentRequest): Promise<$_model.DeleteTransitRouterEcrAttachmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTransitRouterEcrAttachmentWithOptions(request, runtime);
  }

  /**
   * Deletes a multicast domain.
   * 
   * @remarks
   * Before you delete a multicast domain, make sure that the following requirements are met:
   * *   The multicast domain is disassociated from all vSwitches. For more information, see [DisassociateTransitRouterMulticastDomain](https://help.aliyun.com/document_detail/429774.html).
   * *   All multicast sources and members are removed from the multicast domain. For more information, see [DeregisterTransitRouterMulticastGroupSources](https://help.aliyun.com/document_detail/429776.html) and [DeregisterTransitRouterMulticastGroupMembers](https://help.aliyun.com/document_detail/429779.html).
   * *   The multicast domain is not added to other multicast domains as a multicast member. If the multicast domain is added to another multicast domain as a multicast member, you must remove the multicast domain from the other multicast domain. For more information, see [DeregisterTransitRouterMulticastGroupMembers](https://help.aliyun.com/document_detail/429779.html).
   * *   Make sure all the request parameters are valid. If a request parameter is invalid, a request ID is returned after you call the operation, but the multicast domain is not deleted.
   * 
   * @param request - DeleteTransitRouterMulticastDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTransitRouterMulticastDomainResponse
   */
  async deleteTransitRouterMulticastDomainWithOptions(request: $_model.DeleteTransitRouterMulticastDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTransitRouterMulticastDomainResponse> {
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.transitRouterMulticastDomainId)) {
      query["TransitRouterMulticastDomainId"] = request.transitRouterMulticastDomainId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTransitRouterMulticastDomain",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTransitRouterMulticastDomainResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTransitRouterMulticastDomainResponse({}));
  }

  /**
   * Deletes a multicast domain.
   * 
   * @remarks
   * Before you delete a multicast domain, make sure that the following requirements are met:
   * *   The multicast domain is disassociated from all vSwitches. For more information, see [DisassociateTransitRouterMulticastDomain](https://help.aliyun.com/document_detail/429774.html).
   * *   All multicast sources and members are removed from the multicast domain. For more information, see [DeregisterTransitRouterMulticastGroupSources](https://help.aliyun.com/document_detail/429776.html) and [DeregisterTransitRouterMulticastGroupMembers](https://help.aliyun.com/document_detail/429779.html).
   * *   The multicast domain is not added to other multicast domains as a multicast member. If the multicast domain is added to another multicast domain as a multicast member, you must remove the multicast domain from the other multicast domain. For more information, see [DeregisterTransitRouterMulticastGroupMembers](https://help.aliyun.com/document_detail/429779.html).
   * *   Make sure all the request parameters are valid. If a request parameter is invalid, a request ID is returned after you call the operation, but the multicast domain is not deleted.
   * 
   * @param request - DeleteTransitRouterMulticastDomainRequest
   * @returns DeleteTransitRouterMulticastDomainResponse
   */
  async deleteTransitRouterMulticastDomain(request: $_model.DeleteTransitRouterMulticastDomainRequest): Promise<$_model.DeleteTransitRouterMulticastDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTransitRouterMulticastDomainWithOptions(request, runtime);
  }

  /**
   * Deletes an inter-region connection from an Enterprise Edition transit router.
   * 
   * @remarks
   * *DeleteTransitRouterPeerAttachment** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call **ListTransitRouterPeerAttachments** to query the status of an inter-region connection.
   * *   If an inter-region connection is in the **Detaching** state, the inter-region connection is being deleted. You can query the inter-region connection but cannot perform other operations.
   * *   If an inter-region connection cannot be found, the inter-region connection is deleted.
   * ## Prerequisites
   * Before you begin, make sure that the Enterprise Edition transit router that you use to create inter-region connections meets the following prerequisites:
   * *   No associated forwarding correlation is established between the inter-region connection and the route tables of the Enterprise Edition transit router. For more information about how to delete an associated forwarding correlation, see [DissociateTransitRouterAttachmentFromRouteTable](https://help.aliyun.com/document_detail/260944.html).
   * *   No route learning correlation is established between the inter-region connection and the route tables of the Enterprise Edition transit router. For more information about how to delete a route learning correlation, see [DisableTransitRouterRouteTablePropagation](https://help.aliyun.com/document_detail/260945.html).
   * *   The route tables of the Enterprise Edition transit router do not contain a custom route entry whose next hop is the network instance connection. For more information about how to delete custom routes from route tables of Enterprise Edition transit routers, see [DeleteTransitRouterRouteEntry](https://help.aliyun.com/document_detail/261240.html).
   * *   The route table does not contain a route whose next hop is the inter-region connection and that is generated from a prefix list. You can delete routes from a route table by disassociating the route table from the prefix list. For more information, see [DeleteTransitRouterPrefixListAssociation](https://help.aliyun.com/document_detail/445486.html).
   * *   No quality of service (QoS) policy is configured for the inter-region connection. For more information about how to delete QoS policies, see [DeleteCenInterRegionTrafficQosPolicy](https://help.aliyun.com/document_detail/427547.html).
   * 
   * @param request - DeleteTransitRouterPeerAttachmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTransitRouterPeerAttachmentResponse
   */
  async deleteTransitRouterPeerAttachmentWithOptions(request: $_model.DeleteTransitRouterPeerAttachmentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTransitRouterPeerAttachmentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.force)) {
      query["Force"] = request.force;
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

    if (!$dara.isNull(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTransitRouterPeerAttachment",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTransitRouterPeerAttachmentResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTransitRouterPeerAttachmentResponse({}));
  }

  /**
   * Deletes an inter-region connection from an Enterprise Edition transit router.
   * 
   * @remarks
   * *DeleteTransitRouterPeerAttachment** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call **ListTransitRouterPeerAttachments** to query the status of an inter-region connection.
   * *   If an inter-region connection is in the **Detaching** state, the inter-region connection is being deleted. You can query the inter-region connection but cannot perform other operations.
   * *   If an inter-region connection cannot be found, the inter-region connection is deleted.
   * ## Prerequisites
   * Before you begin, make sure that the Enterprise Edition transit router that you use to create inter-region connections meets the following prerequisites:
   * *   No associated forwarding correlation is established between the inter-region connection and the route tables of the Enterprise Edition transit router. For more information about how to delete an associated forwarding correlation, see [DissociateTransitRouterAttachmentFromRouteTable](https://help.aliyun.com/document_detail/260944.html).
   * *   No route learning correlation is established between the inter-region connection and the route tables of the Enterprise Edition transit router. For more information about how to delete a route learning correlation, see [DisableTransitRouterRouteTablePropagation](https://help.aliyun.com/document_detail/260945.html).
   * *   The route tables of the Enterprise Edition transit router do not contain a custom route entry whose next hop is the network instance connection. For more information about how to delete custom routes from route tables of Enterprise Edition transit routers, see [DeleteTransitRouterRouteEntry](https://help.aliyun.com/document_detail/261240.html).
   * *   The route table does not contain a route whose next hop is the inter-region connection and that is generated from a prefix list. You can delete routes from a route table by disassociating the route table from the prefix list. For more information, see [DeleteTransitRouterPrefixListAssociation](https://help.aliyun.com/document_detail/445486.html).
   * *   No quality of service (QoS) policy is configured for the inter-region connection. For more information about how to delete QoS policies, see [DeleteCenInterRegionTrafficQosPolicy](https://help.aliyun.com/document_detail/427547.html).
   * 
   * @param request - DeleteTransitRouterPeerAttachmentRequest
   * @returns DeleteTransitRouterPeerAttachmentResponse
   */
  async deleteTransitRouterPeerAttachment(request: $_model.DeleteTransitRouterPeerAttachmentRequest): Promise<$_model.DeleteTransitRouterPeerAttachmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTransitRouterPeerAttachmentWithOptions(request, runtime);
  }

  /**
   * Disassociates the route table of an Enterprise Edition transit router from a prefix list.
   * 
   * @remarks
   * After you disassociate a route table of an Enterprise Edition transit router from a prefix list, the routes that point to the CIDR blocks in the prefix list are automatically withdrawn from the route table. Before you disassociate the route table of an Enterprise Edition transit router from a prefix list, you must migrate workloads that use the routes in case services are interrupted.
   * 
   * @param request - DeleteTransitRouterPrefixListAssociationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTransitRouterPrefixListAssociationResponse
   */
  async deleteTransitRouterPrefixListAssociationWithOptions(request: $_model.DeleteTransitRouterPrefixListAssociationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTransitRouterPrefixListAssociationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.nextHop)) {
      query["NextHop"] = request.nextHop;
    }

    if (!$dara.isNull(request.nextHopType)) {
      query["NextHopType"] = request.nextHopType;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prefixListId)) {
      query["PrefixListId"] = request.prefixListId;
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

    if (!$dara.isNull(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    if (!$dara.isNull(request.transitRouterTableId)) {
      query["TransitRouterTableId"] = request.transitRouterTableId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTransitRouterPrefixListAssociation",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTransitRouterPrefixListAssociationResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTransitRouterPrefixListAssociationResponse({}));
  }

  /**
   * Disassociates the route table of an Enterprise Edition transit router from a prefix list.
   * 
   * @remarks
   * After you disassociate a route table of an Enterprise Edition transit router from a prefix list, the routes that point to the CIDR blocks in the prefix list are automatically withdrawn from the route table. Before you disassociate the route table of an Enterprise Edition transit router from a prefix list, you must migrate workloads that use the routes in case services are interrupted.
   * 
   * @param request - DeleteTransitRouterPrefixListAssociationRequest
   * @returns DeleteTransitRouterPrefixListAssociationResponse
   */
  async deleteTransitRouterPrefixListAssociation(request: $_model.DeleteTransitRouterPrefixListAssociationRequest): Promise<$_model.DeleteTransitRouterPrefixListAssociationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTransitRouterPrefixListAssociationWithOptions(request, runtime);
  }

  /**
   * Deletes blackhole routes and static routes that point to network instance connections from the route tables of an Enterprise Edition transit router.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   If you specify the **TransitRouterRouteEntryId** parameter to delete a specific route, you do not need to configure the **TransitRouterRouteTableId** or **TransitRouterRouteEntryDestinationCidrBlock**. Otherwise, parameter conflicts occur.
   * *   If you do not specify the **TransitRouterRouteEntryId** parameter, configure the following parameters based on the next hop type of the route that you want to delete:
   *     *   To delete a blackhole route, configure the following parameters: **TransitRouterRouteTableId**, **TransitRouterRouteEntryDestinationCidrBlock**, and **TransitRouterRouteEntryNextHopType**.
   *     *   To delete routes other than blackhole routes, configure the following parameters: **TransitRouterRouteTableId**, **TransitRouterRouteEntryDestinationCidrBlock**, **TransitRouterRouteEntryNextHopType**, and **TransitRouterRouteEntryNextHopId**.
   * *   **DeleteTransitRouterRouteEntry** is an asynchronous operation. After a request is sent, the system returns a **request ID** and runs the task in the background. You can call the **ListTransitRouterRouteEntries** operation to query the status of a route entry.
   *     *   If the route entry is in the **Deleting** state, the route entry is being deleted. In this case, you can query the route entry but cannot perform other operations.
   *     *   If a route entry cannot be found, it is deleted.
   * ### [](#)Limits
   * You can call this operation to delete only static routes. Automatically learned routes are not supported. You can call the [ListTransitRouterRouteEntries](https://help.aliyun.com/document_detail/260941.html) operation to query route types.
   * 
   * @param request - DeleteTransitRouterRouteEntryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTransitRouterRouteEntryResponse
   */
  async deleteTransitRouterRouteEntryWithOptions(request: $_model.DeleteTransitRouterRouteEntryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTransitRouterRouteEntryResponse> {
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.transitRouterRouteEntryDestinationCidrBlock)) {
      query["TransitRouterRouteEntryDestinationCidrBlock"] = request.transitRouterRouteEntryDestinationCidrBlock;
    }

    if (!$dara.isNull(request.transitRouterRouteEntryId)) {
      query["TransitRouterRouteEntryId"] = request.transitRouterRouteEntryId;
    }

    if (!$dara.isNull(request.transitRouterRouteEntryNextHopId)) {
      query["TransitRouterRouteEntryNextHopId"] = request.transitRouterRouteEntryNextHopId;
    }

    if (!$dara.isNull(request.transitRouterRouteEntryNextHopType)) {
      query["TransitRouterRouteEntryNextHopType"] = request.transitRouterRouteEntryNextHopType;
    }

    if (!$dara.isNull(request.transitRouterRouteTableId)) {
      query["TransitRouterRouteTableId"] = request.transitRouterRouteTableId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTransitRouterRouteEntry",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTransitRouterRouteEntryResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTransitRouterRouteEntryResponse({}));
  }

  /**
   * Deletes blackhole routes and static routes that point to network instance connections from the route tables of an Enterprise Edition transit router.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   If you specify the **TransitRouterRouteEntryId** parameter to delete a specific route, you do not need to configure the **TransitRouterRouteTableId** or **TransitRouterRouteEntryDestinationCidrBlock**. Otherwise, parameter conflicts occur.
   * *   If you do not specify the **TransitRouterRouteEntryId** parameter, configure the following parameters based on the next hop type of the route that you want to delete:
   *     *   To delete a blackhole route, configure the following parameters: **TransitRouterRouteTableId**, **TransitRouterRouteEntryDestinationCidrBlock**, and **TransitRouterRouteEntryNextHopType**.
   *     *   To delete routes other than blackhole routes, configure the following parameters: **TransitRouterRouteTableId**, **TransitRouterRouteEntryDestinationCidrBlock**, **TransitRouterRouteEntryNextHopType**, and **TransitRouterRouteEntryNextHopId**.
   * *   **DeleteTransitRouterRouteEntry** is an asynchronous operation. After a request is sent, the system returns a **request ID** and runs the task in the background. You can call the **ListTransitRouterRouteEntries** operation to query the status of a route entry.
   *     *   If the route entry is in the **Deleting** state, the route entry is being deleted. In this case, you can query the route entry but cannot perform other operations.
   *     *   If a route entry cannot be found, it is deleted.
   * ### [](#)Limits
   * You can call this operation to delete only static routes. Automatically learned routes are not supported. You can call the [ListTransitRouterRouteEntries](https://help.aliyun.com/document_detail/260941.html) operation to query route types.
   * 
   * @param request - DeleteTransitRouterRouteEntryRequest
   * @returns DeleteTransitRouterRouteEntryResponse
   */
  async deleteTransitRouterRouteEntry(request: $_model.DeleteTransitRouterRouteEntryRequest): Promise<$_model.DeleteTransitRouterRouteEntryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTransitRouterRouteEntryWithOptions(request, runtime);
  }

  /**
   * Deletes a custom route table from an Enterprise Edition transit router.
   * 
   * @remarks
   *   You cannot delete the default route table of an Enterprise Edition transit router.
   * *   **DeleteTransitRouterRouteTable** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **ListTransitRouterRouteTables** operation to query the status of a custom route table.
   *     *   If a custom route table is in the Deleting state, the custom route table is being deleted. In this case, you can query the custom route table but cannot perform other operations.
   *     *   If a custom route table cannot be found, the custom route table is deleted.
   * 
   * @param request - DeleteTransitRouterRouteTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTransitRouterRouteTableResponse
   */
  async deleteTransitRouterRouteTableWithOptions(request: $_model.DeleteTransitRouterRouteTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTransitRouterRouteTableResponse> {
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.transitRouterRouteTableId)) {
      query["TransitRouterRouteTableId"] = request.transitRouterRouteTableId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTransitRouterRouteTable",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTransitRouterRouteTableResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTransitRouterRouteTableResponse({}));
  }

  /**
   * Deletes a custom route table from an Enterprise Edition transit router.
   * 
   * @remarks
   *   You cannot delete the default route table of an Enterprise Edition transit router.
   * *   **DeleteTransitRouterRouteTable** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **ListTransitRouterRouteTables** operation to query the status of a custom route table.
   *     *   If a custom route table is in the Deleting state, the custom route table is being deleted. In this case, you can query the custom route table but cannot perform other operations.
   *     *   If a custom route table cannot be found, the custom route table is deleted.
   * 
   * @param request - DeleteTransitRouterRouteTableRequest
   * @returns DeleteTransitRouterRouteTableResponse
   */
  async deleteTransitRouterRouteTable(request: $_model.DeleteTransitRouterRouteTableRequest): Promise<$_model.DeleteTransitRouterRouteTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTransitRouterRouteTableWithOptions(request, runtime);
  }

  /**
   * Deletes a virtual border router (VBR) connection from an Enterprise Edition transit router.
   * 
   * @remarks
   * *DeleteTransitRouterVbrAttachment** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **ListTransitRouterVbrAttachments** operation to query the status of a VBR connection.
   * *   If a VBR connection is in the **Detaching** state, the VBR connection is being deleted. You can query the VBR connection but cannot perform other operations.
   * *   If a VBR connection cannot be found, the VBR connection is deleted.
   * ## Prerequisites
   * Before you delete a VBR connection for an Enterprise Edition transit router, make sure that the following requirements are met:
   * *   No associated forwarding correlation is established between the VBR connection and the route tables of the Enterprise Edition transit router. For more information about how to delete an associated forwarding correlation, see [DissociateTransitRouterAttachmentFromRouteTable](https://help.aliyun.com/document_detail/260944.html).
   * *   No route learning correlation is established between the VBR connection and the route tables of the Enterprise Edition transit router. For more information about how to delete a route learning correlation, see [DisableTransitRouterRouteTablePropagation](https://help.aliyun.com/document_detail/260945.html).
   * *   The route tables of the Enterprise Edition transit router do not contain a custom route entry whose next hop is the network instance connection. For more information about how to delete custom route entries, see [DeleteTransitRouterRouteEntry](https://help.aliyun.com/document_detail/261240.html).
   * *   The route tables of the Enterprise Edition transit router do not contain a route whose next hop is the VBR connection and that is generated from a prefix list. You can delete such routes by disassociating the route table from the prefix list. For more information, see [DeleteTransitRouterPrefixListAssociation](https://help.aliyun.com/document_detail/445486.html).
   * 
   * @param request - DeleteTransitRouterVbrAttachmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTransitRouterVbrAttachmentResponse
   */
  async deleteTransitRouterVbrAttachmentWithOptions(request: $_model.DeleteTransitRouterVbrAttachmentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTransitRouterVbrAttachmentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.force)) {
      query["Force"] = request.force;
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

    if (!$dara.isNull(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTransitRouterVbrAttachment",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTransitRouterVbrAttachmentResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTransitRouterVbrAttachmentResponse({}));
  }

  /**
   * Deletes a virtual border router (VBR) connection from an Enterprise Edition transit router.
   * 
   * @remarks
   * *DeleteTransitRouterVbrAttachment** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **ListTransitRouterVbrAttachments** operation to query the status of a VBR connection.
   * *   If a VBR connection is in the **Detaching** state, the VBR connection is being deleted. You can query the VBR connection but cannot perform other operations.
   * *   If a VBR connection cannot be found, the VBR connection is deleted.
   * ## Prerequisites
   * Before you delete a VBR connection for an Enterprise Edition transit router, make sure that the following requirements are met:
   * *   No associated forwarding correlation is established between the VBR connection and the route tables of the Enterprise Edition transit router. For more information about how to delete an associated forwarding correlation, see [DissociateTransitRouterAttachmentFromRouteTable](https://help.aliyun.com/document_detail/260944.html).
   * *   No route learning correlation is established between the VBR connection and the route tables of the Enterprise Edition transit router. For more information about how to delete a route learning correlation, see [DisableTransitRouterRouteTablePropagation](https://help.aliyun.com/document_detail/260945.html).
   * *   The route tables of the Enterprise Edition transit router do not contain a custom route entry whose next hop is the network instance connection. For more information about how to delete custom route entries, see [DeleteTransitRouterRouteEntry](https://help.aliyun.com/document_detail/261240.html).
   * *   The route tables of the Enterprise Edition transit router do not contain a route whose next hop is the VBR connection and that is generated from a prefix list. You can delete such routes by disassociating the route table from the prefix list. For more information, see [DeleteTransitRouterPrefixListAssociation](https://help.aliyun.com/document_detail/445486.html).
   * 
   * @param request - DeleteTransitRouterVbrAttachmentRequest
   * @returns DeleteTransitRouterVbrAttachmentResponse
   */
  async deleteTransitRouterVbrAttachment(request: $_model.DeleteTransitRouterVbrAttachmentRequest): Promise<$_model.DeleteTransitRouterVbrAttachmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTransitRouterVbrAttachmentWithOptions(request, runtime);
  }

  /**
   * Deletes a virtual private cloud (VPC) connection from an Enterprise Edition transit router.
   * 
   * @remarks
   * *DeleteTransitRouterVpcAttachment** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **ListTransitRouterVpcAttachments** operation to query the status of a VPC connection.
   * *   If a VPC connection is in the **Detaching** state, the VPC connection is being deleted. You can query the VPC connection but cannot perform other operations.
   * *   If a VPC connection cannot be found, it is deleted.
   * ## Prerequisites
   * Before you delete a VPC connection, make sure that the following requirements are met:
   * *   No associated forwarding correlation is established between the VPC connection and the route tables of the Enterprise Edition transit router. For more information about how to delete an associated forwarding correlation, see [DissociateTransitRouterAttachmentFromRouteTable](https://help.aliyun.com/document_detail/260944.html).
   * *   No route learning correlation is established between the VPC connection and the route tables of the Enterprise Edition transit router. For more information about how to delete a route learning correlation, see [DisableTransitRouterRouteTablePropagation](https://help.aliyun.com/document_detail/260945.html).
   * *   The route table of the VPC does not contain routes that point to the VPC connection. For more information about how to delete routes from a VPC route table, see [DeleteRouteEntry](https://help.aliyun.com/document_detail/36013.html).
   * *   The route tables of the Enterprise Edition transit router do not contain a custom route entry whose next hop is the network instance connection. For more information about how to delete custom routes from the route tables of an Enterprise Edition transit router, see [DeleteTransitRouterRouteEntry](https://help.aliyun.com/document_detail/261240.html).
   * *   The route tables of the Enterprise Edition transit router do not contain a route that is generated from a prefix list and the next hop is the VPC connection. You can delete such routes by disassociating the route table from the prefix list. For more information, see [DeleteTransitRouterPrefixListAssociation](https://help.aliyun.com/document_detail/445486.html).
   * 
   * @param request - DeleteTransitRouterVpcAttachmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTransitRouterVpcAttachmentResponse
   */
  async deleteTransitRouterVpcAttachmentWithOptions(request: $_model.DeleteTransitRouterVpcAttachmentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTransitRouterVpcAttachmentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.force)) {
      query["Force"] = request.force;
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

    if (!$dara.isNull(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTransitRouterVpcAttachment",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTransitRouterVpcAttachmentResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTransitRouterVpcAttachmentResponse({}));
  }

  /**
   * Deletes a virtual private cloud (VPC) connection from an Enterprise Edition transit router.
   * 
   * @remarks
   * *DeleteTransitRouterVpcAttachment** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **ListTransitRouterVpcAttachments** operation to query the status of a VPC connection.
   * *   If a VPC connection is in the **Detaching** state, the VPC connection is being deleted. You can query the VPC connection but cannot perform other operations.
   * *   If a VPC connection cannot be found, it is deleted.
   * ## Prerequisites
   * Before you delete a VPC connection, make sure that the following requirements are met:
   * *   No associated forwarding correlation is established between the VPC connection and the route tables of the Enterprise Edition transit router. For more information about how to delete an associated forwarding correlation, see [DissociateTransitRouterAttachmentFromRouteTable](https://help.aliyun.com/document_detail/260944.html).
   * *   No route learning correlation is established between the VPC connection and the route tables of the Enterprise Edition transit router. For more information about how to delete a route learning correlation, see [DisableTransitRouterRouteTablePropagation](https://help.aliyun.com/document_detail/260945.html).
   * *   The route table of the VPC does not contain routes that point to the VPC connection. For more information about how to delete routes from a VPC route table, see [DeleteRouteEntry](https://help.aliyun.com/document_detail/36013.html).
   * *   The route tables of the Enterprise Edition transit router do not contain a custom route entry whose next hop is the network instance connection. For more information about how to delete custom routes from the route tables of an Enterprise Edition transit router, see [DeleteTransitRouterRouteEntry](https://help.aliyun.com/document_detail/261240.html).
   * *   The route tables of the Enterprise Edition transit router do not contain a route that is generated from a prefix list and the next hop is the VPC connection. You can delete such routes by disassociating the route table from the prefix list. For more information, see [DeleteTransitRouterPrefixListAssociation](https://help.aliyun.com/document_detail/445486.html).
   * 
   * @param request - DeleteTransitRouterVpcAttachmentRequest
   * @returns DeleteTransitRouterVpcAttachmentResponse
   */
  async deleteTransitRouterVpcAttachment(request: $_model.DeleteTransitRouterVpcAttachmentRequest): Promise<$_model.DeleteTransitRouterVpcAttachmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTransitRouterVpcAttachmentWithOptions(request, runtime);
  }

  /**
   * Deletes a VPN attachment.
   * 
   * @remarks
   * Before you call the **DeleteTransitRouterVpnAttachment** operation, make sure that all request parameters are valid. If a request parameter is invalid, a **request ID** is returned, but the VPN attachment is not deleted.
   * 
   * @param request - DeleteTransitRouterVpnAttachmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTransitRouterVpnAttachmentResponse
   */
  async deleteTransitRouterVpnAttachmentWithOptions(request: $_model.DeleteTransitRouterVpnAttachmentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTransitRouterVpnAttachmentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.force)) {
      query["Force"] = request.force;
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

    if (!$dara.isNull(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTransitRouterVpnAttachment",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTransitRouterVpnAttachmentResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTransitRouterVpnAttachmentResponse({}));
  }

  /**
   * Deletes a VPN attachment.
   * 
   * @remarks
   * Before you call the **DeleteTransitRouterVpnAttachment** operation, make sure that all request parameters are valid. If a request parameter is invalid, a **request ID** is returned, but the VPN attachment is not deleted.
   * 
   * @param request - DeleteTransitRouterVpnAttachmentRequest
   * @returns DeleteTransitRouterVpnAttachmentResponse
   */
  async deleteTransitRouterVpnAttachment(request: $_model.DeleteTransitRouterVpnAttachmentRequest): Promise<$_model.DeleteTransitRouterVpnAttachmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTransitRouterVpnAttachmentWithOptions(request, runtime);
  }

  /**
   * Removes a multicast member from a multicast group.
   * 
   * @remarks
   * `DeregisterTransitRouterMulticastGroupMembers` is an asynchronous operation. After a request is sent, the system returns a **request ID** and runs the task in the background. You can call the `ListTransitRouterMulticastGroups` operation to query the status of a multicast member.
   * *   If the multicast member is in the **Deregistering** state, the multicast member is being removed. In this case, you can query the multicast member but cannot perform other operations on the multicast member.
   * *   If a multicast member cannot be found, the multicast member is removed from the multicast group.``
   * Before you call the DeregisterTransitRouterMulticastGroupMembers operation, make sure that all request parameters are valid. If a request parameter is invalid, a request ID is returned but the multicast member is not removed.
   * 
   * @param request - DeregisterTransitRouterMulticastGroupMembersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeregisterTransitRouterMulticastGroupMembersResponse
   */
  async deregisterTransitRouterMulticastGroupMembersWithOptions(request: $_model.DeregisterTransitRouterMulticastGroupMembersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeregisterTransitRouterMulticastGroupMembersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.groupIpAddress)) {
      query["GroupIpAddress"] = request.groupIpAddress;
    }

    if (!$dara.isNull(request.networkInterfaceIds)) {
      query["NetworkInterfaceIds"] = request.networkInterfaceIds;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.peerTransitRouterMulticastDomains)) {
      query["PeerTransitRouterMulticastDomains"] = request.peerTransitRouterMulticastDomains;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.transitRouterMulticastDomainId)) {
      query["TransitRouterMulticastDomainId"] = request.transitRouterMulticastDomainId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeregisterTransitRouterMulticastGroupMembers",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeregisterTransitRouterMulticastGroupMembersResponse>(await this.callApi(params, req, runtime), new $_model.DeregisterTransitRouterMulticastGroupMembersResponse({}));
  }

  /**
   * Removes a multicast member from a multicast group.
   * 
   * @remarks
   * `DeregisterTransitRouterMulticastGroupMembers` is an asynchronous operation. After a request is sent, the system returns a **request ID** and runs the task in the background. You can call the `ListTransitRouterMulticastGroups` operation to query the status of a multicast member.
   * *   If the multicast member is in the **Deregistering** state, the multicast member is being removed. In this case, you can query the multicast member but cannot perform other operations on the multicast member.
   * *   If a multicast member cannot be found, the multicast member is removed from the multicast group.``
   * Before you call the DeregisterTransitRouterMulticastGroupMembers operation, make sure that all request parameters are valid. If a request parameter is invalid, a request ID is returned but the multicast member is not removed.
   * 
   * @param request - DeregisterTransitRouterMulticastGroupMembersRequest
   * @returns DeregisterTransitRouterMulticastGroupMembersResponse
   */
  async deregisterTransitRouterMulticastGroupMembers(request: $_model.DeregisterTransitRouterMulticastGroupMembersRequest): Promise<$_model.DeregisterTransitRouterMulticastGroupMembersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deregisterTransitRouterMulticastGroupMembersWithOptions(request, runtime);
  }

  /**
   * Deletes a multicast source from a multicast group.
   * 
   * @remarks
   * `DeregisterTransitRouterMulticastGroupSources` is an asynchronous operation. After a request a sent, the system returns a **request ID** and runs the task in the background. You can call the `ListTransitRouterMulticastGroups` operation to query the status of a multicast source.
   * *   If a multicast source is in the **Deregistering** state, the multicast source is being deleted. You can query the multicast source but cannot perform other operations.
   * *   If a multicast source cannot be found, the multicast source is deleted.
   * Before you call DeregisterTransitRouterMulticastGroupSources, make sure that all the request parameters are valid. If a request parameter is invalid, a request ID is returned but the multicast source is not deleted.
   * 
   * @param request - DeregisterTransitRouterMulticastGroupSourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeregisterTransitRouterMulticastGroupSourcesResponse
   */
  async deregisterTransitRouterMulticastGroupSourcesWithOptions(request: $_model.DeregisterTransitRouterMulticastGroupSourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeregisterTransitRouterMulticastGroupSourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.groupIpAddress)) {
      query["GroupIpAddress"] = request.groupIpAddress;
    }

    if (!$dara.isNull(request.networkInterfaceIds)) {
      query["NetworkInterfaceIds"] = request.networkInterfaceIds;
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

    if (!$dara.isNull(request.transitRouterMulticastDomainId)) {
      query["TransitRouterMulticastDomainId"] = request.transitRouterMulticastDomainId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeregisterTransitRouterMulticastGroupSources",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeregisterTransitRouterMulticastGroupSourcesResponse>(await this.callApi(params, req, runtime), new $_model.DeregisterTransitRouterMulticastGroupSourcesResponse({}));
  }

  /**
   * Deletes a multicast source from a multicast group.
   * 
   * @remarks
   * `DeregisterTransitRouterMulticastGroupSources` is an asynchronous operation. After a request a sent, the system returns a **request ID** and runs the task in the background. You can call the `ListTransitRouterMulticastGroups` operation to query the status of a multicast source.
   * *   If a multicast source is in the **Deregistering** state, the multicast source is being deleted. You can query the multicast source but cannot perform other operations.
   * *   If a multicast source cannot be found, the multicast source is deleted.
   * Before you call DeregisterTransitRouterMulticastGroupSources, make sure that all the request parameters are valid. If a request parameter is invalid, a request ID is returned but the multicast source is not deleted.
   * 
   * @param request - DeregisterTransitRouterMulticastGroupSourcesRequest
   * @returns DeregisterTransitRouterMulticastGroupSourcesResponse
   */
  async deregisterTransitRouterMulticastGroupSources(request: $_model.DeregisterTransitRouterMulticastGroupSourcesRequest): Promise<$_model.DeregisterTransitRouterMulticastGroupSourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deregisterTransitRouterMulticastGroupSourcesWithOptions(request, runtime);
  }

  /**
   * Queries the information about a network instance, such as a virtual private cloud (VPC), a virtual border router, or a Cloud Connect Network (CCN) instance, that is attached to a Cloud Enterprise Network (CEN) instance.
   * 
   * @param request - DescribeCenAttachedChildInstanceAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCenAttachedChildInstanceAttributeResponse
   */
  async describeCenAttachedChildInstanceAttributeWithOptions(request: $_model.DescribeCenAttachedChildInstanceAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCenAttachedChildInstanceAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.childInstanceId)) {
      query["ChildInstanceId"] = request.childInstanceId;
    }

    if (!$dara.isNull(request.childInstanceRegionId)) {
      query["ChildInstanceRegionId"] = request.childInstanceRegionId;
    }

    if (!$dara.isNull(request.childInstanceType)) {
      query["ChildInstanceType"] = request.childInstanceType;
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
      action: "DescribeCenAttachedChildInstanceAttribute",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCenAttachedChildInstanceAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCenAttachedChildInstanceAttributeResponse({}));
  }

  /**
   * Queries the information about a network instance, such as a virtual private cloud (VPC), a virtual border router, or a Cloud Connect Network (CCN) instance, that is attached to a Cloud Enterprise Network (CEN) instance.
   * 
   * @param request - DescribeCenAttachedChildInstanceAttributeRequest
   * @returns DescribeCenAttachedChildInstanceAttributeResponse
   */
  async describeCenAttachedChildInstanceAttribute(request: $_model.DescribeCenAttachedChildInstanceAttributeRequest): Promise<$_model.DescribeCenAttachedChildInstanceAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCenAttachedChildInstanceAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the network instances that are attached to a CEN instance.
   * 
   * @remarks
   * You can use one of the following methods to query the information about the network instances that are attached to a CEN instance:
   * *   You can query all the network instances that are attached to a CEN instance by setting the `CenId` parameter.
   * *   You can query the network instances that are attached to a CEN instance in a specified region by setting the `CenId` and `ChildInstanceRegionId` parameters.
   * *   You can query a specified type of network instances that are attached to a CEN instance by setting the `CenId` and `ChildInstanceType` parameters.
   * 
   * @param request - DescribeCenAttachedChildInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCenAttachedChildInstancesResponse
   */
  async describeCenAttachedChildInstancesWithOptions(request: $_model.DescribeCenAttachedChildInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCenAttachedChildInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.childInstanceRegionId)) {
      query["ChildInstanceRegionId"] = request.childInstanceRegionId;
    }

    if (!$dara.isNull(request.childInstanceType)) {
      query["ChildInstanceType"] = request.childInstanceType;
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
      action: "DescribeCenAttachedChildInstances",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCenAttachedChildInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCenAttachedChildInstancesResponse({}));
  }

  /**
   * Queries the network instances that are attached to a CEN instance.
   * 
   * @remarks
   * You can use one of the following methods to query the information about the network instances that are attached to a CEN instance:
   * *   You can query all the network instances that are attached to a CEN instance by setting the `CenId` parameter.
   * *   You can query the network instances that are attached to a CEN instance in a specified region by setting the `CenId` and `ChildInstanceRegionId` parameters.
   * *   You can query a specified type of network instances that are attached to a CEN instance by setting the `CenId` and `ChildInstanceType` parameters.
   * 
   * @param request - DescribeCenAttachedChildInstancesRequest
   * @returns DescribeCenAttachedChildInstancesResponse
   */
  async describeCenAttachedChildInstances(request: $_model.DescribeCenAttachedChildInstancesRequest): Promise<$_model.DescribeCenAttachedChildInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCenAttachedChildInstancesWithOptions(request, runtime);
  }

  /**
   * Queries the information about bandwidth plans.
   * 
   * @param request - DescribeCenBandwidthPackagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCenBandwidthPackagesResponse
   */
  async describeCenBandwidthPackagesWithOptions(request: $_model.DescribeCenBandwidthPackagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCenBandwidthPackagesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.includeReservationData)) {
      query["IncludeReservationData"] = request.includeReservationData;
    }

    if (!$dara.isNull(request.isOrKey)) {
      query["IsOrKey"] = request.isOrKey;
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

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
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
      action: "DescribeCenBandwidthPackages",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCenBandwidthPackagesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCenBandwidthPackagesResponse({}));
  }

  /**
   * Queries the information about bandwidth plans.
   * 
   * @param request - DescribeCenBandwidthPackagesRequest
   * @returns DescribeCenBandwidthPackagesResponse
   */
  async describeCenBandwidthPackages(request: $_model.DescribeCenBandwidthPackagesRequest): Promise<$_model.DescribeCenBandwidthPackagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCenBandwidthPackagesWithOptions(request, runtime);
  }

  /**
   * Queries the routes of a network instance that is attached to a Cloud Enterprise Network (CEN) instance.
   * 
   * @param request - DescribeCenChildInstanceRouteEntriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCenChildInstanceRouteEntriesResponse
   */
  async describeCenChildInstanceRouteEntriesWithOptions(request: $_model.DescribeCenChildInstanceRouteEntriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCenChildInstanceRouteEntriesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.childInstanceId)) {
      query["ChildInstanceId"] = request.childInstanceId;
    }

    if (!$dara.isNull(request.childInstanceRegionId)) {
      query["ChildInstanceRegionId"] = request.childInstanceRegionId;
    }

    if (!$dara.isNull(request.childInstanceRouteTableId)) {
      query["ChildInstanceRouteTableId"] = request.childInstanceRouteTableId;
    }

    if (!$dara.isNull(request.childInstanceType)) {
      query["ChildInstanceType"] = request.childInstanceType;
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
      action: "DescribeCenChildInstanceRouteEntries",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCenChildInstanceRouteEntriesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCenChildInstanceRouteEntriesResponse({}));
  }

  /**
   * Queries the routes of a network instance that is attached to a Cloud Enterprise Network (CEN) instance.
   * 
   * @param request - DescribeCenChildInstanceRouteEntriesRequest
   * @returns DescribeCenChildInstanceRouteEntriesResponse
   */
  async describeCenChildInstanceRouteEntries(request: $_model.DescribeCenChildInstanceRouteEntriesRequest): Promise<$_model.DescribeCenChildInstanceRouteEntriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCenChildInstanceRouteEntriesWithOptions(request, runtime);
  }

  /**
   * Queries the remaining bandwidth of a bandwidth plan.
   * 
   * @param request - DescribeCenGeographicSpanRemainingBandwidthRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCenGeographicSpanRemainingBandwidthResponse
   */
  async describeCenGeographicSpanRemainingBandwidthWithOptions(request: $_model.DescribeCenGeographicSpanRemainingBandwidthRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCenGeographicSpanRemainingBandwidthResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.geographicRegionAId)) {
      query["GeographicRegionAId"] = request.geographicRegionAId;
    }

    if (!$dara.isNull(request.geographicRegionBId)) {
      query["GeographicRegionBId"] = request.geographicRegionBId;
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
      action: "DescribeCenGeographicSpanRemainingBandwidth",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCenGeographicSpanRemainingBandwidthResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCenGeographicSpanRemainingBandwidthResponse({}));
  }

  /**
   * Queries the remaining bandwidth of a bandwidth plan.
   * 
   * @param request - DescribeCenGeographicSpanRemainingBandwidthRequest
   * @returns DescribeCenGeographicSpanRemainingBandwidthResponse
   */
  async describeCenGeographicSpanRemainingBandwidth(request: $_model.DescribeCenGeographicSpanRemainingBandwidthRequest): Promise<$_model.DescribeCenGeographicSpanRemainingBandwidthResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCenGeographicSpanRemainingBandwidthWithOptions(request, runtime);
  }

  /**
   * Queries the areas that a Cloud Enterprise Network (CEN) instance can connect.
   * 
   * @param request - DescribeCenGeographicSpansRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCenGeographicSpansResponse
   */
  async describeCenGeographicSpansWithOptions(request: $_model.DescribeCenGeographicSpansRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCenGeographicSpansResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.geographicSpanId)) {
      query["GeographicSpanId"] = request.geographicSpanId;
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
      action: "DescribeCenGeographicSpans",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCenGeographicSpansResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCenGeographicSpansResponse({}));
  }

  /**
   * Queries the areas that a Cloud Enterprise Network (CEN) instance can connect.
   * 
   * @param request - DescribeCenGeographicSpansRequest
   * @returns DescribeCenGeographicSpansResponse
   */
  async describeCenGeographicSpans(request: $_model.DescribeCenGeographicSpansRequest): Promise<$_model.DescribeCenGeographicSpansResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCenGeographicSpansWithOptions(request, runtime);
  }

  /**
   * Queries the bandwidth of connections between regions.
   * 
   * @param request - DescribeCenInterRegionBandwidthLimitsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCenInterRegionBandwidthLimitsResponse
   */
  async describeCenInterRegionBandwidthLimitsWithOptions(request: $_model.DescribeCenInterRegionBandwidthLimitsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCenInterRegionBandwidthLimitsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.trRegionId)) {
      query["TrRegionId"] = request.trRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCenInterRegionBandwidthLimits",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCenInterRegionBandwidthLimitsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCenInterRegionBandwidthLimitsResponse({}));
  }

  /**
   * Queries the bandwidth of connections between regions.
   * 
   * @param request - DescribeCenInterRegionBandwidthLimitsRequest
   * @returns DescribeCenInterRegionBandwidthLimitsResponse
   */
  async describeCenInterRegionBandwidthLimits(request: $_model.DescribeCenInterRegionBandwidthLimitsRequest): Promise<$_model.DescribeCenInterRegionBandwidthLimitsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCenInterRegionBandwidthLimitsWithOptions(request, runtime);
  }

  /**
   * Queries the connections to PrivateZone.
   * 
   * @param request - DescribeCenPrivateZoneRoutesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCenPrivateZoneRoutesResponse
   */
  async describeCenPrivateZoneRoutesWithOptions(request: $_model.DescribeCenPrivateZoneRoutesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCenPrivateZoneRoutesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessRegionId)) {
      query["AccessRegionId"] = request.accessRegionId;
    }

    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.hostRegionId)) {
      query["HostRegionId"] = request.hostRegionId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
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
      action: "DescribeCenPrivateZoneRoutes",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCenPrivateZoneRoutesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCenPrivateZoneRoutesResponse({}));
  }

  /**
   * Queries the connections to PrivateZone.
   * 
   * @param request - DescribeCenPrivateZoneRoutesRequest
   * @returns DescribeCenPrivateZoneRoutesResponse
   */
  async describeCenPrivateZoneRoutes(request: $_model.DescribeCenPrivateZoneRoutesRequest): Promise<$_model.DescribeCenPrivateZoneRoutesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCenPrivateZoneRoutesWithOptions(request, runtime);
  }

  /**
   * Queries the details about routes in a region for a Cloud Enterprise Network (CEN) instance.
   * 
   * @param request - DescribeCenRegionDomainRouteEntriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCenRegionDomainRouteEntriesResponse
   */
  async describeCenRegionDomainRouteEntriesWithOptions(request: $_model.DescribeCenRegionDomainRouteEntriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCenRegionDomainRouteEntriesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.cenRegionId)) {
      query["CenRegionId"] = request.cenRegionId;
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
      action: "DescribeCenRegionDomainRouteEntries",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCenRegionDomainRouteEntriesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCenRegionDomainRouteEntriesResponse({}));
  }

  /**
   * Queries the details about routes in a region for a Cloud Enterprise Network (CEN) instance.
   * 
   * @param request - DescribeCenRegionDomainRouteEntriesRequest
   * @returns DescribeCenRegionDomainRouteEntriesResponse
   */
  async describeCenRegionDomainRouteEntries(request: $_model.DescribeCenRegionDomainRouteEntriesRequest): Promise<$_model.DescribeCenRegionDomainRouteEntriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCenRegionDomainRouteEntriesWithOptions(request, runtime);
  }

  /**
   * Queries routing policies.
   * 
   * @param request - DescribeCenRouteMapsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCenRouteMapsResponse
   */
  async describeCenRouteMapsWithOptions(request: $_model.DescribeCenRouteMapsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCenRouteMapsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.cenRegionId)) {
      query["CenRegionId"] = request.cenRegionId;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.routeMapId)) {
      query["RouteMapId"] = request.routeMapId;
    }

    if (!$dara.isNull(request.transitRouterRouteTableId)) {
      query["TransitRouterRouteTableId"] = request.transitRouterRouteTableId;
    }

    if (!$dara.isNull(request.transmitDirection)) {
      query["TransmitDirection"] = request.transmitDirection;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCenRouteMaps",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCenRouteMapsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCenRouteMapsResponse({}));
  }

  /**
   * Queries routing policies.
   * 
   * @param request - DescribeCenRouteMapsRequest
   * @returns DescribeCenRouteMapsResponse
   */
  async describeCenRouteMaps(request: $_model.DescribeCenRouteMapsRequest): Promise<$_model.DescribeCenRouteMapsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCenRouteMapsWithOptions(request, runtime);
  }

  /**
   * Queries the health check configurations of virtual border routers (VBRs) in a region.
   * 
   * @param request - DescribeCenVbrHealthCheckRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCenVbrHealthCheckResponse
   */
  async describeCenVbrHealthCheckWithOptions(request: $_model.DescribeCenVbrHealthCheckRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCenVbrHealthCheckResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.vbrInstanceId)) {
      query["VbrInstanceId"] = request.vbrInstanceId;
    }

    if (!$dara.isNull(request.vbrInstanceOwnerId)) {
      query["VbrInstanceOwnerId"] = request.vbrInstanceOwnerId;
    }

    if (!$dara.isNull(request.vbrInstanceRegionId)) {
      query["VbrInstanceRegionId"] = request.vbrInstanceRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCenVbrHealthCheck",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCenVbrHealthCheckResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCenVbrHealthCheckResponse({}));
  }

  /**
   * Queries the health check configurations of virtual border routers (VBRs) in a region.
   * 
   * @param request - DescribeCenVbrHealthCheckRequest
   * @returns DescribeCenVbrHealthCheckResponse
   */
  async describeCenVbrHealthCheck(request: $_model.DescribeCenVbrHealthCheckRequest): Promise<$_model.DescribeCenVbrHealthCheckResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCenVbrHealthCheckWithOptions(request, runtime);
  }

  /**
   * Queries the information about your Cloud Enterprise Network (CEN) instances.
   * 
   * @param request - DescribeCensRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCensResponse
   */
  async describeCensWithOptions(request: $_model.DescribeCensRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCensResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
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

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
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
      action: "DescribeCens",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCensResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCensResponse({}));
  }

  /**
   * Queries the information about your Cloud Enterprise Network (CEN) instances.
   * 
   * @param request - DescribeCensRequest
   * @returns DescribeCensResponse
   */
  async describeCens(request: $_model.DescribeCensRequest): Promise<$_model.DescribeCensResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCensWithOptions(request, runtime);
  }

  /**
   * Queries the regions in which you can attach network instances to Cloud Enterprise Network (CEN) instances.
   * 
   * @remarks
   * The regions that support CEN vary based on the network instance type. To query the regions where you can attach a specified type of network instance to CEN, set the `ProductType` parameter. If you do not set the `ProductType` parameter, the system queries all regions in which you can attach network instances to CEN, regardless of the network instance type.
   * 
   * @param request - DescribeChildInstanceRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeChildInstanceRegionsResponse
   */
  async describeChildInstanceRegionsWithOptions(request: $_model.DescribeChildInstanceRegionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeChildInstanceRegionsResponse> {
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

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
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
      action: "DescribeChildInstanceRegions",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeChildInstanceRegionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeChildInstanceRegionsResponse({}));
  }

  /**
   * Queries the regions in which you can attach network instances to Cloud Enterprise Network (CEN) instances.
   * 
   * @remarks
   * The regions that support CEN vary based on the network instance type. To query the regions where you can attach a specified type of network instance to CEN, set the `ProductType` parameter. If you do not set the `ProductType` parameter, the system queries all regions in which you can attach network instances to CEN, regardless of the network instance type.
   * 
   * @param request - DescribeChildInstanceRegionsRequest
   * @returns DescribeChildInstanceRegionsResponse
   */
  async describeChildInstanceRegions(request: $_model.DescribeChildInstanceRegionsRequest): Promise<$_model.DescribeChildInstanceRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeChildInstanceRegionsWithOptions(request, runtime);
  }

  /**
   * Queries flow logs.
   * 
   * @param request - DescribeFlowlogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFlowlogsResponse
   */
  async describeFlowlogsWithOptions(request: $_model.DescribeFlowlogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFlowlogsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.flowLogId)) {
      query["FlowLogId"] = request.flowLogId;
    }

    if (!$dara.isNull(request.flowLogName)) {
      query["FlowLogName"] = request.flowLogName;
    }

    if (!$dara.isNull(request.flowLogVersion)) {
      query["FlowLogVersion"] = request.flowLogVersion;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.logStoreName)) {
      query["LogStoreName"] = request.logStoreName;
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

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    if (!$dara.isNull(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFlowlogs",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeFlowlogsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeFlowlogsResponse({}));
  }

  /**
   * Queries flow logs.
   * 
   * @param request - DescribeFlowlogsRequest
   * @returns DescribeFlowlogsResponse
   */
  async describeFlowlogs(request: $_model.DescribeFlowlogsRequest): Promise<$_model.DescribeFlowlogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFlowlogsWithOptions(request, runtime);
  }

  /**
   * Queries regions in an area.
   * 
   * @param request - DescribeGeographicRegionMembershipRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGeographicRegionMembershipResponse
   */
  async describeGeographicRegionMembershipWithOptions(request: $_model.DescribeGeographicRegionMembershipRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGeographicRegionMembershipResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.geographicRegionId)) {
      query["GeographicRegionId"] = request.geographicRegionId;
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
      action: "DescribeGeographicRegionMembership",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGeographicRegionMembershipResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGeographicRegionMembershipResponse({}));
  }

  /**
   * Queries regions in an area.
   * 
   * @param request - DescribeGeographicRegionMembershipRequest
   * @returns DescribeGeographicRegionMembershipResponse
   */
  async describeGeographicRegionMembership(request: $_model.DescribeGeographicRegionMembershipRequest): Promise<$_model.DescribeGeographicRegionMembershipResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGeographicRegionMembershipWithOptions(request, runtime);
  }

  /**
   * Queries the network instances of other Alibaba Cloud accounts that have granted permissions to a Cloud Enterprise Network (CEN) instance.
   * 
   * @remarks
   * Before you call the **DescribeGrantRulesToCen** operation, make sure that all request parameters are valid. If a request parameter is invalid, a **request ID** is returned, but the network instances are not returned.
   * 
   * @param request - DescribeGrantRulesToCenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGrantRulesToCenResponse
   */
  async describeGrantRulesToCenWithOptions(request: $_model.DescribeGrantRulesToCenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGrantRulesToCenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.childInstanceId)) {
      query["ChildInstanceId"] = request.childInstanceId;
    }

    if (!$dara.isNull(request.childInstanceOwnerId)) {
      query["ChildInstanceOwnerId"] = request.childInstanceOwnerId;
    }

    if (!$dara.isNull(request.enabledIpv6)) {
      query["EnabledIpv6"] = request.enabledIpv6;
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

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
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
      action: "DescribeGrantRulesToCen",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGrantRulesToCenResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGrantRulesToCenResponse({}));
  }

  /**
   * Queries the network instances of other Alibaba Cloud accounts that have granted permissions to a Cloud Enterprise Network (CEN) instance.
   * 
   * @remarks
   * Before you call the **DescribeGrantRulesToCen** operation, make sure that all request parameters are valid. If a request parameter is invalid, a **request ID** is returned, but the network instances are not returned.
   * 
   * @param request - DescribeGrantRulesToCenRequest
   * @returns DescribeGrantRulesToCenResponse
   */
  async describeGrantRulesToCen(request: $_model.DescribeGrantRulesToCenRequest): Promise<$_model.DescribeGrantRulesToCenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGrantRulesToCenWithOptions(request, runtime);
  }

  /**
   * Queries the information about the permissions that the Alibaba Cloud account of a network instance granted to a Cloud Enterprise Network (CEN) instance in a different Alibaba Cloud account, the ID of the CEN instance, and the Alibaba Cloud account that pays the fees of the network instance.
   * 
   * @param request - DescribeGrantRulesToResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGrantRulesToResourceResponse
   */
  async describeGrantRulesToResourceWithOptions(request: $_model.DescribeGrantRulesToResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGrantRulesToResourceResponse> {
    request.validate();
    let query = { };
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

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGrantRulesToResource",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGrantRulesToResourceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGrantRulesToResourceResponse({}));
  }

  /**
   * Queries the information about the permissions that the Alibaba Cloud account of a network instance granted to a Cloud Enterprise Network (CEN) instance in a different Alibaba Cloud account, the ID of the CEN instance, and the Alibaba Cloud account that pays the fees of the network instance.
   * 
   * @param request - DescribeGrantRulesToResourceRequest
   * @returns DescribeGrantRulesToResourceResponse
   */
  async describeGrantRulesToResource(request: $_model.DescribeGrantRulesToResourceRequest): Promise<$_model.DescribeGrantRulesToResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGrantRulesToResourceWithOptions(request, runtime);
  }

  /**
   * Queries whether the routes of virtual private clouds (VPCs) and virtual border routers (VBRs) are advertised to the Cloud Enterprise Network (CEN) instance to which the VCPs and VBRs are attached.
   * 
   * @param request - DescribePublishedRouteEntriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePublishedRouteEntriesResponse
   */
  async describePublishedRouteEntriesWithOptions(request: $_model.DescribePublishedRouteEntriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePublishedRouteEntriesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.childInstanceId)) {
      query["ChildInstanceId"] = request.childInstanceId;
    }

    if (!$dara.isNull(request.childInstanceRegionId)) {
      query["ChildInstanceRegionId"] = request.childInstanceRegionId;
    }

    if (!$dara.isNull(request.childInstanceRouteTableId)) {
      query["ChildInstanceRouteTableId"] = request.childInstanceRouteTableId;
    }

    if (!$dara.isNull(request.childInstanceType)) {
      query["ChildInstanceType"] = request.childInstanceType;
    }

    if (!$dara.isNull(request.destinationCidrBlock)) {
      query["DestinationCidrBlock"] = request.destinationCidrBlock;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
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
      action: "DescribePublishedRouteEntries",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePublishedRouteEntriesResponse>(await this.callApi(params, req, runtime), new $_model.DescribePublishedRouteEntriesResponse({}));
  }

  /**
   * Queries whether the routes of virtual private clouds (VPCs) and virtual border routers (VBRs) are advertised to the Cloud Enterprise Network (CEN) instance to which the VCPs and VBRs are attached.
   * 
   * @param request - DescribePublishedRouteEntriesRequest
   * @returns DescribePublishedRouteEntriesResponse
   */
  async describePublishedRouteEntries(request: $_model.DescribePublishedRouteEntriesRequest): Promise<$_model.DescribePublishedRouteEntriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePublishedRouteEntriesWithOptions(request, runtime);
  }

  /**
   * Queries overlapping routes.
   * 
   * @param request - DescribeRouteConflictRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRouteConflictResponse
   */
  async describeRouteConflictWithOptions(request: $_model.DescribeRouteConflictRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRouteConflictResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.childInstanceId)) {
      query["ChildInstanceId"] = request.childInstanceId;
    }

    if (!$dara.isNull(request.childInstanceRegionId)) {
      query["ChildInstanceRegionId"] = request.childInstanceRegionId;
    }

    if (!$dara.isNull(request.childInstanceRouteTableId)) {
      query["ChildInstanceRouteTableId"] = request.childInstanceRouteTableId;
    }

    if (!$dara.isNull(request.childInstanceType)) {
      query["ChildInstanceType"] = request.childInstanceType;
    }

    if (!$dara.isNull(request.destinationCidrBlock)) {
      query["DestinationCidrBlock"] = request.destinationCidrBlock;
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
      action: "DescribeRouteConflict",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRouteConflictResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRouteConflictResponse({}));
  }

  /**
   * Queries overlapping routes.
   * 
   * @param request - DescribeRouteConflictRequest
   * @returns DescribeRouteConflictResponse
   */
  async describeRouteConflict(request: $_model.DescribeRouteConflictRequest): Promise<$_model.DescribeRouteConflictResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRouteConflictWithOptions(request, runtime);
  }

  /**
   * Queries the configurations of cloud services, such as the cloud service status and the ID of the associated VPC.
   * 
   * @param request - DescribeRouteServicesInCenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRouteServicesInCenResponse
   */
  async describeRouteServicesInCenWithOptions(request: $_model.DescribeRouteServicesInCenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRouteServicesInCenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessRegionId)) {
      query["AccessRegionId"] = request.accessRegionId;
    }

    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.host)) {
      query["Host"] = request.host;
    }

    if (!$dara.isNull(request.hostRegionId)) {
      query["HostRegionId"] = request.hostRegionId;
    }

    if (!$dara.isNull(request.hostVpcId)) {
      query["HostVpcId"] = request.hostVpcId;
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
      action: "DescribeRouteServicesInCen",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRouteServicesInCenResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRouteServicesInCenResponse({}));
  }

  /**
   * Queries the configurations of cloud services, such as the cloud service status and the ID of the associated VPC.
   * 
   * @param request - DescribeRouteServicesInCenRequest
   * @returns DescribeRouteServicesInCenResponse
   */
  async describeRouteServicesInCen(request: $_model.DescribeRouteServicesInCenRequest): Promise<$_model.DescribeRouteServicesInCenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRouteServicesInCenWithOptions(request, runtime);
  }

  /**
   * Queries the aggregate routes on an Enterprise Edition transit router.
   * 
   * @remarks
   * You can specify the values of the **TransitRouteTableId** and **TransitRouteTableAggregationCidr** parameters to query a specified aggregate route. If you specify only the **TransitRouteTableId** parameter, all aggregated routes in the route table are queried.
   * 
   * @param request - DescribeTransitRouteTableAggregationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTransitRouteTableAggregationResponse
   */
  async describeTransitRouteTableAggregationWithOptions(request: $_model.DescribeTransitRouteTableAggregationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTransitRouteTableAggregationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.transitRouteTableAggregationCidr)) {
      query["TransitRouteTableAggregationCidr"] = request.transitRouteTableAggregationCidr;
    }

    if (!$dara.isNull(request.transitRouteTableId)) {
      query["TransitRouteTableId"] = request.transitRouteTableId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTransitRouteTableAggregation",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTransitRouteTableAggregationResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTransitRouteTableAggregationResponse({}));
  }

  /**
   * Queries the aggregate routes on an Enterprise Edition transit router.
   * 
   * @remarks
   * You can specify the values of the **TransitRouteTableId** and **TransitRouteTableAggregationCidr** parameters to query a specified aggregate route. If you specify only the **TransitRouteTableId** parameter, all aggregated routes in the route table are queried.
   * 
   * @param request - DescribeTransitRouteTableAggregationRequest
   * @returns DescribeTransitRouteTableAggregationResponse
   */
  async describeTransitRouteTableAggregation(request: $_model.DescribeTransitRouteTableAggregationRequest): Promise<$_model.DescribeTransitRouteTableAggregationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTransitRouteTableAggregationWithOptions(request, runtime);
  }

  /**
   * Queries the configuration of an aggregate route.
   * 
   * @param request - DescribeTransitRouteTableAggregationDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTransitRouteTableAggregationDetailResponse
   */
  async describeTransitRouteTableAggregationDetailWithOptions(request: $_model.DescribeTransitRouteTableAggregationDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTransitRouteTableAggregationDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
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

    if (!$dara.isNull(request.transitRouteTableAggregationCidr)) {
      query["TransitRouteTableAggregationCidr"] = request.transitRouteTableAggregationCidr;
    }

    if (!$dara.isNull(request.transitRouteTableId)) {
      query["TransitRouteTableId"] = request.transitRouteTableId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTransitRouteTableAggregationDetail",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTransitRouteTableAggregationDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTransitRouteTableAggregationDetailResponse({}));
  }

  /**
   * Queries the configuration of an aggregate route.
   * 
   * @param request - DescribeTransitRouteTableAggregationDetailRequest
   * @returns DescribeTransitRouteTableAggregationDetailResponse
   */
  async describeTransitRouteTableAggregationDetail(request: $_model.DescribeTransitRouteTableAggregationDetailRequest): Promise<$_model.DescribeTransitRouteTableAggregationDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTransitRouteTableAggregationDetailWithOptions(request, runtime);
  }

  /**
   * Detaches a network instance from a Cloud Enterprise Network (CEN) instance.
   * 
   * @param request - DetachCenChildInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachCenChildInstanceResponse
   */
  async detachCenChildInstanceWithOptions(request: $_model.DetachCenChildInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachCenChildInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.cenOwnerId)) {
      query["CenOwnerId"] = request.cenOwnerId;
    }

    if (!$dara.isNull(request.childInstanceId)) {
      query["ChildInstanceId"] = request.childInstanceId;
    }

    if (!$dara.isNull(request.childInstanceOwnerId)) {
      query["ChildInstanceOwnerId"] = request.childInstanceOwnerId;
    }

    if (!$dara.isNull(request.childInstanceRegionId)) {
      query["ChildInstanceRegionId"] = request.childInstanceRegionId;
    }

    if (!$dara.isNull(request.childInstanceType)) {
      query["ChildInstanceType"] = request.childInstanceType;
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
      action: "DetachCenChildInstance",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachCenChildInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DetachCenChildInstanceResponse({}));
  }

  /**
   * Detaches a network instance from a Cloud Enterprise Network (CEN) instance.
   * 
   * @param request - DetachCenChildInstanceRequest
   * @returns DetachCenChildInstanceResponse
   */
  async detachCenChildInstance(request: $_model.DetachCenChildInstanceRequest): Promise<$_model.DetachCenChildInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachCenChildInstanceWithOptions(request, runtime);
  }

  /**
   * Disables the health check feature for a virtual border router (VBR).
   * 
   * @remarks
   * *DisableCenVbrHealthCheck** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **DescribeCenVbrHealthCheck** operation to query the status of health check configurations. If the health check configurations cannot be found, the health check configurations are deleted.
   * 
   * @param request - DisableCenVbrHealthCheckRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableCenVbrHealthCheckResponse
   */
  async disableCenVbrHealthCheckWithOptions(request: $_model.DisableCenVbrHealthCheckRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableCenVbrHealthCheckResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
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

    if (!$dara.isNull(request.vbrInstanceId)) {
      query["VbrInstanceId"] = request.vbrInstanceId;
    }

    if (!$dara.isNull(request.vbrInstanceOwnerId)) {
      query["VbrInstanceOwnerId"] = request.vbrInstanceOwnerId;
    }

    if (!$dara.isNull(request.vbrInstanceRegionId)) {
      query["VbrInstanceRegionId"] = request.vbrInstanceRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableCenVbrHealthCheck",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableCenVbrHealthCheckResponse>(await this.callApi(params, req, runtime), new $_model.DisableCenVbrHealthCheckResponse({}));
  }

  /**
   * Disables the health check feature for a virtual border router (VBR).
   * 
   * @remarks
   * *DisableCenVbrHealthCheck** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **DescribeCenVbrHealthCheck** operation to query the status of health check configurations. If the health check configurations cannot be found, the health check configurations are deleted.
   * 
   * @param request - DisableCenVbrHealthCheckRequest
   * @returns DisableCenVbrHealthCheckResponse
   */
  async disableCenVbrHealthCheck(request: $_model.DisableCenVbrHealthCheckRequest): Promise<$_model.DisableCenVbrHealthCheckResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableCenVbrHealthCheckWithOptions(request, runtime);
  }

  /**
   * Deletes a route learning correlation.
   * 
   * @remarks
   * *DisableTransitRouterRouteTablePropagation** is an synchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **ListTransitRouterRouteTablePropagations** operation to query the status of a route learning correlation.
   * *   If a route learning correlation is in the **Disabling** state, the route learning correlation is being deleted. You can query the route learning correlation but cannot perform other operations.
   * *   If a route learning correlation cannot be found, the route learning correlation is deleted.
   * 
   * @param request - DisableTransitRouterRouteTablePropagationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableTransitRouterRouteTablePropagationResponse
   */
  async disableTransitRouterRouteTablePropagationWithOptions(request: $_model.DisableTransitRouterRouteTablePropagationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableTransitRouterRouteTablePropagationResponse> {
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    if (!$dara.isNull(request.transitRouterRouteTableId)) {
      query["TransitRouterRouteTableId"] = request.transitRouterRouteTableId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableTransitRouterRouteTablePropagation",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableTransitRouterRouteTablePropagationResponse>(await this.callApi(params, req, runtime), new $_model.DisableTransitRouterRouteTablePropagationResponse({}));
  }

  /**
   * Deletes a route learning correlation.
   * 
   * @remarks
   * *DisableTransitRouterRouteTablePropagation** is an synchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **ListTransitRouterRouteTablePropagations** operation to query the status of a route learning correlation.
   * *   If a route learning correlation is in the **Disabling** state, the route learning correlation is being deleted. You can query the route learning correlation but cannot perform other operations.
   * *   If a route learning correlation cannot be found, the route learning correlation is deleted.
   * 
   * @param request - DisableTransitRouterRouteTablePropagationRequest
   * @returns DisableTransitRouterRouteTablePropagationResponse
   */
  async disableTransitRouterRouteTablePropagation(request: $_model.DisableTransitRouterRouteTablePropagationRequest): Promise<$_model.DisableTransitRouterRouteTablePropagationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableTransitRouterRouteTablePropagationWithOptions(request, runtime);
  }

  /**
   * Disassociates a vSwitch from a multicast domain.
   * 
   * @remarks
   *   Before you delete a vSwitch from a multicast domain, make sure that the vSwitch does not contain a multicast source or a multicast member. For more information about how to remove a multicast source or member from a vSwitch, see [DeregisterTransitRouterMulticastGroupSources](https://help.aliyun.com/document_detail/468416.html) and [DeregisterTransitRouterMulticastGroupMembers](https://help.aliyun.com/document_detail/468409.html).
   * *   If a request parameter is invalid, the system returns a request ID but does not disassociate the vSwitch from the multicast domain.
   * *   **DisassociateTransitRouterMulticastDomain** is an asynchronous operation. After a request is sent, the system returns a **request ID** and runs the task in the background. You can call the **ListTransitRouterMulticastDomainAssociations** operation to query whether a vSwitch is disassociated from the specified multicast domain.
   *     *   If the status is **Dissociating**, it indicates that the vSwitch is being disassociated from the specified multicast domain. You can query the vSwitch but cannot perform other operations on the vSwitch.
   *     *   If the vSwitch cannot be found, the vSwitch is disassociated from the multicast domain.
   * 
   * @param request - DisassociateTransitRouterMulticastDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisassociateTransitRouterMulticastDomainResponse
   */
  async disassociateTransitRouterMulticastDomainWithOptions(request: $_model.DisassociateTransitRouterMulticastDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisassociateTransitRouterMulticastDomainResponse> {
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    if (!$dara.isNull(request.transitRouterMulticastDomainId)) {
      query["TransitRouterMulticastDomainId"] = request.transitRouterMulticastDomainId;
    }

    if (!$dara.isNull(request.vSwitchIds)) {
      query["VSwitchIds"] = request.vSwitchIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisassociateTransitRouterMulticastDomain",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisassociateTransitRouterMulticastDomainResponse>(await this.callApi(params, req, runtime), new $_model.DisassociateTransitRouterMulticastDomainResponse({}));
  }

  /**
   * Disassociates a vSwitch from a multicast domain.
   * 
   * @remarks
   *   Before you delete a vSwitch from a multicast domain, make sure that the vSwitch does not contain a multicast source or a multicast member. For more information about how to remove a multicast source or member from a vSwitch, see [DeregisterTransitRouterMulticastGroupSources](https://help.aliyun.com/document_detail/468416.html) and [DeregisterTransitRouterMulticastGroupMembers](https://help.aliyun.com/document_detail/468409.html).
   * *   If a request parameter is invalid, the system returns a request ID but does not disassociate the vSwitch from the multicast domain.
   * *   **DisassociateTransitRouterMulticastDomain** is an asynchronous operation. After a request is sent, the system returns a **request ID** and runs the task in the background. You can call the **ListTransitRouterMulticastDomainAssociations** operation to query whether a vSwitch is disassociated from the specified multicast domain.
   *     *   If the status is **Dissociating**, it indicates that the vSwitch is being disassociated from the specified multicast domain. You can query the vSwitch but cannot perform other operations on the vSwitch.
   *     *   If the vSwitch cannot be found, the vSwitch is disassociated from the multicast domain.
   * 
   * @param request - DisassociateTransitRouterMulticastDomainRequest
   * @returns DisassociateTransitRouterMulticastDomainResponse
   */
  async disassociateTransitRouterMulticastDomain(request: $_model.DisassociateTransitRouterMulticastDomainRequest): Promise<$_model.DisassociateTransitRouterMulticastDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disassociateTransitRouterMulticastDomainWithOptions(request, runtime);
  }

  /**
   * Deletes an associated forwarding correlation.
   * 
   * @remarks
   * *DissociateTransitRouterAttachmentFromRouteTable** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **ListTransitRouterRouteTableAssociations** operation to query an associated forwarding correlation between a network instance connection and a route table.
   * *   If an associated forwarding correlation is in the **Dissociating** state, the associated forwarding correlation is being deleted. You can query the associated forwarding correlation but cannot perform other operations.
   * *   If an associated forwarding correlation cannot be found, the associated forwarding correlation is deleted.
   * 
   * @param request - DissociateTransitRouterAttachmentFromRouteTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DissociateTransitRouterAttachmentFromRouteTableResponse
   */
  async dissociateTransitRouterAttachmentFromRouteTableWithOptions(request: $_model.DissociateTransitRouterAttachmentFromRouteTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DissociateTransitRouterAttachmentFromRouteTableResponse> {
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    if (!$dara.isNull(request.transitRouterRouteTableId)) {
      query["TransitRouterRouteTableId"] = request.transitRouterRouteTableId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DissociateTransitRouterAttachmentFromRouteTable",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DissociateTransitRouterAttachmentFromRouteTableResponse>(await this.callApi(params, req, runtime), new $_model.DissociateTransitRouterAttachmentFromRouteTableResponse({}));
  }

  /**
   * Deletes an associated forwarding correlation.
   * 
   * @remarks
   * *DissociateTransitRouterAttachmentFromRouteTable** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **ListTransitRouterRouteTableAssociations** operation to query an associated forwarding correlation between a network instance connection and a route table.
   * *   If an associated forwarding correlation is in the **Dissociating** state, the associated forwarding correlation is being deleted. You can query the associated forwarding correlation but cannot perform other operations.
   * *   If an associated forwarding correlation cannot be found, the associated forwarding correlation is deleted.
   * 
   * @param request - DissociateTransitRouterAttachmentFromRouteTableRequest
   * @returns DissociateTransitRouterAttachmentFromRouteTableResponse
   */
  async dissociateTransitRouterAttachmentFromRouteTable(request: $_model.DissociateTransitRouterAttachmentFromRouteTableRequest): Promise<$_model.DissociateTransitRouterAttachmentFromRouteTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dissociateTransitRouterAttachmentFromRouteTableWithOptions(request, runtime);
  }

  /**
   * Enables the health check feature for a virtual border router (VBR) to detect anomalies on Express Connect circuits. You can modify the health check configuration of a VBR based on business requirements.
   * 
   * @remarks
   * You can enable the health check feature for a VBR to monitor the Express Connect circuit between your data center and Alibaba Cloud. This helps you detect connection issues in a timely manner.
   * Before you use the health check feature, take note of the following information:
   * *   If your VBR uses static routing, you must add a static route for the data center that is connected to the VBR after you configure the health check feature. Set the destination CIDR block to the source IP address of health checks, set the mask length to 32, and set the next hop to the IP address of the VBR on the Alibaba Cloud side.
   * *   If your VBR uses dynamic Border Gateway Protocol (BGP) routing, you do not need to add routes for the data center.
   * *   **EnableCenVbrHealthCheck** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **DescribeCenVbrHealthCheck** operation to query the status of health check configurations. If health check configurations are returned, health check is configured or modified.
   * 
   * @param request - EnableCenVbrHealthCheckRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableCenVbrHealthCheckResponse
   */
  async enableCenVbrHealthCheckWithOptions(request: $_model.EnableCenVbrHealthCheckRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableCenVbrHealthCheckResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.healthCheckInterval)) {
      query["HealthCheckInterval"] = request.healthCheckInterval;
    }

    if (!$dara.isNull(request.healthCheckOnly)) {
      query["HealthCheckOnly"] = request.healthCheckOnly;
    }

    if (!$dara.isNull(request.healthCheckSourceIp)) {
      query["HealthCheckSourceIp"] = request.healthCheckSourceIp;
    }

    if (!$dara.isNull(request.healthCheckTargetIp)) {
      query["HealthCheckTargetIp"] = request.healthCheckTargetIp;
    }

    if (!$dara.isNull(request.healthyThreshold)) {
      query["HealthyThreshold"] = request.healthyThreshold;
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

    if (!$dara.isNull(request.vbrInstanceId)) {
      query["VbrInstanceId"] = request.vbrInstanceId;
    }

    if (!$dara.isNull(request.vbrInstanceOwnerId)) {
      query["VbrInstanceOwnerId"] = request.vbrInstanceOwnerId;
    }

    if (!$dara.isNull(request.vbrInstanceRegionId)) {
      query["VbrInstanceRegionId"] = request.vbrInstanceRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableCenVbrHealthCheck",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableCenVbrHealthCheckResponse>(await this.callApi(params, req, runtime), new $_model.EnableCenVbrHealthCheckResponse({}));
  }

  /**
   * Enables the health check feature for a virtual border router (VBR) to detect anomalies on Express Connect circuits. You can modify the health check configuration of a VBR based on business requirements.
   * 
   * @remarks
   * You can enable the health check feature for a VBR to monitor the Express Connect circuit between your data center and Alibaba Cloud. This helps you detect connection issues in a timely manner.
   * Before you use the health check feature, take note of the following information:
   * *   If your VBR uses static routing, you must add a static route for the data center that is connected to the VBR after you configure the health check feature. Set the destination CIDR block to the source IP address of health checks, set the mask length to 32, and set the next hop to the IP address of the VBR on the Alibaba Cloud side.
   * *   If your VBR uses dynamic Border Gateway Protocol (BGP) routing, you do not need to add routes for the data center.
   * *   **EnableCenVbrHealthCheck** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **DescribeCenVbrHealthCheck** operation to query the status of health check configurations. If health check configurations are returned, health check is configured or modified.
   * 
   * @param request - EnableCenVbrHealthCheckRequest
   * @returns EnableCenVbrHealthCheckResponse
   */
  async enableCenVbrHealthCheck(request: $_model.EnableCenVbrHealthCheckRequest): Promise<$_model.EnableCenVbrHealthCheckResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableCenVbrHealthCheckWithOptions(request, runtime);
  }

  /**
   * Creates a route learning correlation.
   * 
   * @remarks
   * After you establish a network instance connection on a transit router, you can create a route learning correlation for the network instance connection. Then, the routes of the connected network instance are automatically advertised to the route table of the transit router. Before you begin, we recommend that you take note of the following rules:
   * *   You can create route learning correlations only on Enterprise Edition transit routers. For more information about the regions and zones that support Enterprise Edition transit routers, see [What is CEN?](https://help.aliyun.com/document_detail/181681.html)
   * *   **EnableTransitRouterRouteTablePropagation** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **ListTransitRouterRouteTablePropagations** operation to query the route learning status between a network instance connection and a route table.
   *     *   **Enabling** indicates that a route learning correlation is being created between the network instance connection and route table. You can query the route learning correlation but cannot perform other operations.
   *     *   **Active** indicates that the route learning correlation is created between the network instance connection and route table.
   * 
   * @param request - EnableTransitRouterRouteTablePropagationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableTransitRouterRouteTablePropagationResponse
   */
  async enableTransitRouterRouteTablePropagationWithOptions(request: $_model.EnableTransitRouterRouteTablePropagationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableTransitRouterRouteTablePropagationResponse> {
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    if (!$dara.isNull(request.transitRouterRouteTableId)) {
      query["TransitRouterRouteTableId"] = request.transitRouterRouteTableId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableTransitRouterRouteTablePropagation",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableTransitRouterRouteTablePropagationResponse>(await this.callApi(params, req, runtime), new $_model.EnableTransitRouterRouteTablePropagationResponse({}));
  }

  /**
   * Creates a route learning correlation.
   * 
   * @remarks
   * After you establish a network instance connection on a transit router, you can create a route learning correlation for the network instance connection. Then, the routes of the connected network instance are automatically advertised to the route table of the transit router. Before you begin, we recommend that you take note of the following rules:
   * *   You can create route learning correlations only on Enterprise Edition transit routers. For more information about the regions and zones that support Enterprise Edition transit routers, see [What is CEN?](https://help.aliyun.com/document_detail/181681.html)
   * *   **EnableTransitRouterRouteTablePropagation** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **ListTransitRouterRouteTablePropagations** operation to query the route learning status between a network instance connection and a route table.
   *     *   **Enabling** indicates that a route learning correlation is being created between the network instance connection and route table. You can query the route learning correlation but cannot perform other operations.
   *     *   **Active** indicates that the route learning correlation is created between the network instance connection and route table.
   * 
   * @param request - EnableTransitRouterRouteTablePropagationRequest
   * @returns EnableTransitRouterRouteTablePropagationResponse
   */
  async enableTransitRouterRouteTablePropagation(request: $_model.EnableTransitRouterRouteTablePropagationRequest): Promise<$_model.EnableTransitRouterRouteTablePropagationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableTransitRouterRouteTablePropagationWithOptions(request, runtime);
  }

  /**
   * Grants a transit router permissions on network instances that belong to another Alibaba Cloud account. To connect a transit router of Account B to a network instance of Account A, you must use Account A to grant permissions to the transit router of Account B.
   * 
   * @remarks
   *   The `GrantInstanceToTransitRouter` operation can be used to grant transit routers permissions on network instances that belong to other Alibaba Cloud accounts, including virtual private clouds (VPCs), virtual border routers (VBRs), IPsec-VPN connections, and Express Connect Router (ECRs).
   *     To grant transit routers permissions on Cloud Connect Network (CCN) instances, call the [GrantInstanceToCbn](https://help.aliyun.com/document_detail/126141.html) operation.
   * *   Before you call `GrantInstanceToTransitRouter`, take note of the billing rules, permission limits, and prerequisites on permission management of transit routers. For more information, see [Acquire permissions to connect to a network instance that belongs to another account](https://help.aliyun.com/document_detail/181553.html).
   * *   Before you grant a transit router permissions on a network instance, make sure that the following requirements are met:
   *     The account to which the network instance belongs and the account to which the transit router belongs are of the same type.
   *     The ID of the Alibaba Cloud account to which the transit router belongs is obtained.
   *     The ID of the Cloud Enterprise Network (CEN) instance to which the Enterprise Edition transit router belongs is obtained.
   *     Before you grant a transit router permissions on a VBR, contact your account manager to acquire permissions on the VBR.
   *     Before you grant a transit router permissions on an IPsec-VPN connection, make sure that the IPsec-VPN connection is not associated with a resource.
   *     If the IPsec-VPN connection is attached to a VPN gateway, the IPsec-VPN connection cannot be attached to transit routers within the same account or different accounts.
   *     If the IPsec-VPN connection is attached to a transit router, detach the IPsec-VPN connection from the transit router. For more information, see [Delete a network instance connection](https://help.aliyun.com/document_detail/181554.html).
   * 
   * @param request - GrantInstanceToTransitRouterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GrantInstanceToTransitRouterResponse
   */
  async grantInstanceToTransitRouterWithOptions(request: $_model.GrantInstanceToTransitRouterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GrantInstanceToTransitRouterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.cenOwnerId)) {
      query["CenOwnerId"] = request.cenOwnerId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
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
      action: "GrantInstanceToTransitRouter",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GrantInstanceToTransitRouterResponse>(await this.callApi(params, req, runtime), new $_model.GrantInstanceToTransitRouterResponse({}));
  }

  /**
   * Grants a transit router permissions on network instances that belong to another Alibaba Cloud account. To connect a transit router of Account B to a network instance of Account A, you must use Account A to grant permissions to the transit router of Account B.
   * 
   * @remarks
   *   The `GrantInstanceToTransitRouter` operation can be used to grant transit routers permissions on network instances that belong to other Alibaba Cloud accounts, including virtual private clouds (VPCs), virtual border routers (VBRs), IPsec-VPN connections, and Express Connect Router (ECRs).
   *     To grant transit routers permissions on Cloud Connect Network (CCN) instances, call the [GrantInstanceToCbn](https://help.aliyun.com/document_detail/126141.html) operation.
   * *   Before you call `GrantInstanceToTransitRouter`, take note of the billing rules, permission limits, and prerequisites on permission management of transit routers. For more information, see [Acquire permissions to connect to a network instance that belongs to another account](https://help.aliyun.com/document_detail/181553.html).
   * *   Before you grant a transit router permissions on a network instance, make sure that the following requirements are met:
   *     The account to which the network instance belongs and the account to which the transit router belongs are of the same type.
   *     The ID of the Alibaba Cloud account to which the transit router belongs is obtained.
   *     The ID of the Cloud Enterprise Network (CEN) instance to which the Enterprise Edition transit router belongs is obtained.
   *     Before you grant a transit router permissions on a VBR, contact your account manager to acquire permissions on the VBR.
   *     Before you grant a transit router permissions on an IPsec-VPN connection, make sure that the IPsec-VPN connection is not associated with a resource.
   *     If the IPsec-VPN connection is attached to a VPN gateway, the IPsec-VPN connection cannot be attached to transit routers within the same account or different accounts.
   *     If the IPsec-VPN connection is attached to a transit router, detach the IPsec-VPN connection from the transit router. For more information, see [Delete a network instance connection](https://help.aliyun.com/document_detail/181554.html).
   * 
   * @param request - GrantInstanceToTransitRouterRequest
   * @returns GrantInstanceToTransitRouterResponse
   */
  async grantInstanceToTransitRouter(request: $_model.GrantInstanceToTransitRouterRequest): Promise<$_model.GrantInstanceToTransitRouterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.grantInstanceToTransitRouterWithOptions(request, runtime);
  }

  /**
   * Queries routes in route tables of network instances that point to network instance connections on Enterprise Edition transit routers.
   * 
   * @remarks
   * Before you call the ListCenChildInstanceRouteEntriesToAttachment operation, make sure that all request parameter values are valid. If a parameter is set to an invalid value, a request ID is returned, but the routes to the network instance are not returned.
   * 
   * @param request - ListCenChildInstanceRouteEntriesToAttachmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCenChildInstanceRouteEntriesToAttachmentResponse
   */
  async listCenChildInstanceRouteEntriesToAttachmentWithOptions(request: $_model.ListCenChildInstanceRouteEntriesToAttachmentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCenChildInstanceRouteEntriesToAttachmentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.childInstanceRouteTableId)) {
      query["ChildInstanceRouteTableId"] = request.childInstanceRouteTableId;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.routeFilter)) {
      query["RouteFilter"] = request.routeFilter;
    }

    if (!$dara.isNull(request.serviceType)) {
      query["ServiceType"] = request.serviceType;
    }

    if (!$dara.isNull(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCenChildInstanceRouteEntriesToAttachment",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCenChildInstanceRouteEntriesToAttachmentResponse>(await this.callApi(params, req, runtime), new $_model.ListCenChildInstanceRouteEntriesToAttachmentResponse({}));
  }

  /**
   * Queries routes in route tables of network instances that point to network instance connections on Enterprise Edition transit routers.
   * 
   * @remarks
   * Before you call the ListCenChildInstanceRouteEntriesToAttachment operation, make sure that all request parameter values are valid. If a parameter is set to an invalid value, a request ID is returned, but the routes to the network instance are not returned.
   * 
   * @param request - ListCenChildInstanceRouteEntriesToAttachmentRequest
   * @returns ListCenChildInstanceRouteEntriesToAttachmentResponse
   */
  async listCenChildInstanceRouteEntriesToAttachment(request: $_model.ListCenChildInstanceRouteEntriesToAttachmentRequest): Promise<$_model.ListCenChildInstanceRouteEntriesToAttachmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCenChildInstanceRouteEntriesToAttachmentWithOptions(request, runtime);
  }

  /**
   * Queries quality of service (QoS) policies.
   * 
   * @remarks
   * Before you call the **ListCenInterRegionTrafficQosPolicies** operation, take note of the following information:
   * *   You must specify at least one of the **TransitRouterId** and **TrafficQosPolicyId** parameters.
   * *   If you do not specify a QoS policy ID (**TrafficQosPolicyId**), the system returns information based on the values of the **TransitRouterId**, **TransitRouterAttachmentId**, **TrafficQosPolicyName**, and **TrafficQosPolicyDescription** parameters. The information about the queues in the QoS policies is not returned. In this case, the **TrafficQosQueues** parameter is not included in the response.
   * *   If you specify a QoS policy ID (**TrafficQosPolicyId**), the system returns the information about the QoS policy and queues in the QoS policy. In this case, the **TrafficQosQueues** parameter is included in the response. If the value of the **TrafficQosQueues** parameter is an empty string, it indicates that the QoS policy contains only the default queue.
   * *   Make sure that all the request parameters are valid. If a request parameter is invalid, a request ID is returned but the information about the QoS policy is not returned.
   * 
   * @param request - ListCenInterRegionTrafficQosPoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCenInterRegionTrafficQosPoliciesResponse
   */
  async listCenInterRegionTrafficQosPoliciesWithOptions(request: $_model.ListCenInterRegionTrafficQosPoliciesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCenInterRegionTrafficQosPoliciesResponse> {
    request.validate();
    let query = { };
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.trafficQosPolicyDescription)) {
      query["TrafficQosPolicyDescription"] = request.trafficQosPolicyDescription;
    }

    if (!$dara.isNull(request.trafficQosPolicyId)) {
      query["TrafficQosPolicyId"] = request.trafficQosPolicyId;
    }

    if (!$dara.isNull(request.trafficQosPolicyName)) {
      query["TrafficQosPolicyName"] = request.trafficQosPolicyName;
    }

    if (!$dara.isNull(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    if (!$dara.isNull(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCenInterRegionTrafficQosPolicies",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCenInterRegionTrafficQosPoliciesResponse>(await this.callApi(params, req, runtime), new $_model.ListCenInterRegionTrafficQosPoliciesResponse({}));
  }

  /**
   * Queries quality of service (QoS) policies.
   * 
   * @remarks
   * Before you call the **ListCenInterRegionTrafficQosPolicies** operation, take note of the following information:
   * *   You must specify at least one of the **TransitRouterId** and **TrafficQosPolicyId** parameters.
   * *   If you do not specify a QoS policy ID (**TrafficQosPolicyId**), the system returns information based on the values of the **TransitRouterId**, **TransitRouterAttachmentId**, **TrafficQosPolicyName**, and **TrafficQosPolicyDescription** parameters. The information about the queues in the QoS policies is not returned. In this case, the **TrafficQosQueues** parameter is not included in the response.
   * *   If you specify a QoS policy ID (**TrafficQosPolicyId**), the system returns the information about the QoS policy and queues in the QoS policy. In this case, the **TrafficQosQueues** parameter is included in the response. If the value of the **TrafficQosQueues** parameter is an empty string, it indicates that the QoS policy contains only the default queue.
   * *   Make sure that all the request parameters are valid. If a request parameter is invalid, a request ID is returned but the information about the QoS policy is not returned.
   * 
   * @param request - ListCenInterRegionTrafficQosPoliciesRequest
   * @returns ListCenInterRegionTrafficQosPoliciesResponse
   */
  async listCenInterRegionTrafficQosPolicies(request: $_model.ListCenInterRegionTrafficQosPoliciesRequest): Promise<$_model.ListCenInterRegionTrafficQosPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCenInterRegionTrafficQosPoliciesWithOptions(request, runtime);
  }

  /**
   * Queries the information about quality of service (QoS) queues.
   * 
   * @remarks
   * You must specify at least one of the **TransitRouterId**, **TrafficQosPolicyId**, and **TrafficQosQueueId** parameters.
   * Make sure that all the request parameters are valid. If a request parameter is invalid, a **request ID** is returned but the QoS queue information is not returned.
   * 
   * @param request - ListCenInterRegionTrafficQosQueuesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCenInterRegionTrafficQosQueuesResponse
   */
  async listCenInterRegionTrafficQosQueuesWithOptions(request: $_model.ListCenInterRegionTrafficQosQueuesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCenInterRegionTrafficQosQueuesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.effectiveBandwidthFilter)) {
      query["EffectiveBandwidthFilter"] = request.effectiveBandwidthFilter;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.trafficQosPolicyId)) {
      query["TrafficQosPolicyId"] = request.trafficQosPolicyId;
    }

    if (!$dara.isNull(request.trafficQosQueueDescription)) {
      query["TrafficQosQueueDescription"] = request.trafficQosQueueDescription;
    }

    if (!$dara.isNull(request.trafficQosQueueId)) {
      query["TrafficQosQueueId"] = request.trafficQosQueueId;
    }

    if (!$dara.isNull(request.trafficQosQueueName)) {
      query["TrafficQosQueueName"] = request.trafficQosQueueName;
    }

    if (!$dara.isNull(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    if (!$dara.isNull(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCenInterRegionTrafficQosQueues",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCenInterRegionTrafficQosQueuesResponse>(await this.callApi(params, req, runtime), new $_model.ListCenInterRegionTrafficQosQueuesResponse({}));
  }

  /**
   * Queries the information about quality of service (QoS) queues.
   * 
   * @remarks
   * You must specify at least one of the **TransitRouterId**, **TrafficQosPolicyId**, and **TrafficQosQueueId** parameters.
   * Make sure that all the request parameters are valid. If a request parameter is invalid, a **request ID** is returned but the QoS queue information is not returned.
   * 
   * @param request - ListCenInterRegionTrafficQosQueuesRequest
   * @returns ListCenInterRegionTrafficQosQueuesResponse
   */
  async listCenInterRegionTrafficQosQueues(request: $_model.ListCenInterRegionTrafficQosQueuesRequest): Promise<$_model.ListCenInterRegionTrafficQosQueuesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCenInterRegionTrafficQosQueuesWithOptions(request, runtime);
  }

  /**
   * Queries the elastic network interfaces (ENIs) that can be used as multicast sources or members in a specified virtual private cloud (VPC).
   * 
   * @remarks
   * Before you call `ListGrantVSwitchEnis`, make sure that the VPC is attached to a Cloud Enterprise Network (CEN) instance. For more information, see [CreateTransitRouterVpcAttachment](https://help.aliyun.com/document_detail/468237.html).
   * 
   * @param request - ListGrantVSwitchEnisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGrantVSwitchEnisResponse
   */
  async listGrantVSwitchEnisWithOptions(request: $_model.ListGrantVSwitchEnisRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListGrantVSwitchEnisResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.networkInterfaceId)) {
      query["NetworkInterfaceId"] = request.networkInterfaceId;
    }

    if (!$dara.isNull(request.networkInterfaceName)) {
      query["NetworkInterfaceName"] = request.networkInterfaceName;
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

    if (!$dara.isNull(request.primaryIpAddress)) {
      query["PrimaryIpAddress"] = request.primaryIpAddress;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGrantVSwitchEnis",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGrantVSwitchEnisResponse>(await this.callApi(params, req, runtime), new $_model.ListGrantVSwitchEnisResponse({}));
  }

  /**
   * Queries the elastic network interfaces (ENIs) that can be used as multicast sources or members in a specified virtual private cloud (VPC).
   * 
   * @remarks
   * Before you call `ListGrantVSwitchEnis`, make sure that the VPC is attached to a Cloud Enterprise Network (CEN) instance. For more information, see [CreateTransitRouterVpcAttachment](https://help.aliyun.com/document_detail/468237.html).
   * 
   * @param request - ListGrantVSwitchEnisRequest
   * @returns ListGrantVSwitchEnisResponse
   */
  async listGrantVSwitchEnis(request: $_model.ListGrantVSwitchEnisRequest): Promise<$_model.ListGrantVSwitchEnisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listGrantVSwitchEnisWithOptions(request, runtime);
  }

  /**
   * Queries the vSwitches in a virtual private cloud (VPC) that belongs to another Alibaba Cloud account and is attached to a Cloud Enterprise Network (CEN) instance.
   * 
   * @remarks
   * Before you call the `ListGrantVSwitchesToCen` operation, make sure that the following requirements are met:
   * *   The permissions on the VPC are granted to the CEN instance. For more information, see [GrantInstanceToCen](https://help.aliyun.com/document_detail/126224.html).
   * *   The VPC is attached to the CEN instance.
   *     *   For more information about how to connect an Enterprise Edition transit router to a VPC, see [CreateTransitRouterVpcAttachment](https://help.aliyun.com/document_detail/261358.html).
   *     *   For more information about how to connect a Basic Edition transit router to a VPC, see [AttachCenChildInstance](https://help.aliyun.com/document_detail/65902.html).
   * 
   * @param request - ListGrantVSwitchesToCenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGrantVSwitchesToCenResponse
   */
  async listGrantVSwitchesToCenWithOptions(request: $_model.ListGrantVSwitchesToCenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListGrantVSwitchesToCenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.enabledIpv6)) {
      query["EnabledIpv6"] = request.enabledIpv6;
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

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGrantVSwitchesToCen",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGrantVSwitchesToCenResponse>(await this.callApi(params, req, runtime), new $_model.ListGrantVSwitchesToCenResponse({}));
  }

  /**
   * Queries the vSwitches in a virtual private cloud (VPC) that belongs to another Alibaba Cloud account and is attached to a Cloud Enterprise Network (CEN) instance.
   * 
   * @remarks
   * Before you call the `ListGrantVSwitchesToCen` operation, make sure that the following requirements are met:
   * *   The permissions on the VPC are granted to the CEN instance. For more information, see [GrantInstanceToCen](https://help.aliyun.com/document_detail/126224.html).
   * *   The VPC is attached to the CEN instance.
   *     *   For more information about how to connect an Enterprise Edition transit router to a VPC, see [CreateTransitRouterVpcAttachment](https://help.aliyun.com/document_detail/261358.html).
   *     *   For more information about how to connect a Basic Edition transit router to a VPC, see [AttachCenChildInstance](https://help.aliyun.com/document_detail/65902.html).
   * 
   * @param request - ListGrantVSwitchesToCenRequest
   * @returns ListGrantVSwitchesToCenResponse
   */
  async listGrantVSwitchesToCen(request: $_model.ListGrantVSwitchesToCenRequest): Promise<$_model.ListGrantVSwitchesToCenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listGrantVSwitchesToCenWithOptions(request, runtime);
  }

  /**
   * Queries the information about tags that are added to a Cloud Enterprise Network (CEN) instance.
   * 
   * @remarks
   * To call this operation, you must set at least one of **ResourceId.N** and **Tag.N.Key**.
   * *   If you set only **ResourceId.N**, the tags that are added to the specified CEN instances are returned.
   * *   If you set only **Tag.N.Key**, the CEN instances that have the specified tags are returned.
   * *   If you set both **ResourceId.N** and **Tag.N.Key**, the specified tags that are added to the specified CEN instances are returned.
   *     *   Make sure that the CEN instance specified by **ResourceId.N** has the tag specified by **Tag.N.Key**. Otherwise, the response returns null.
   *     *   If multiple tag keys are specified, the logical operator among these tag keys is **AND**.
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: $_model.ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
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

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2017-09-12",
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
   * Queries the information about tags that are added to a Cloud Enterprise Network (CEN) instance.
   * 
   * @remarks
   * To call this operation, you must set at least one of **ResourceId.N** and **Tag.N.Key**.
   * *   If you set only **ResourceId.N**, the tags that are added to the specified CEN instances are returned.
   * *   If you set only **Tag.N.Key**, the CEN instances that have the specified tags are returned.
   * *   If you set both **ResourceId.N** and **Tag.N.Key**, the specified tags that are added to the specified CEN instances are returned.
   *     *   Make sure that the CEN instance specified by **ResourceId.N** has the tag specified by **Tag.N.Key**. Otherwise, the response returns null.
   *     *   If multiple tag keys are specified, the logical operator among these tag keys is **AND**.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Queries the details about a traffic marking policy, such as the status and priority.
   * 
   * @remarks
   * Before you call the **ListTrafficMarkingPolicies** operation, take note of the following limits:
   * *   Specify at least one of the **TransitRouterId** and **TrafficMarkingPolicyId** parameters.
   * *   If you do not specify a traffic marking policy ID (**TrafficMarkingPolicyId**), the operation queries only the information about the traffic marking policy based on the **TransitRouterId**, **TrafficMarkingPolicyName**, and **TrafficMarkingPolicyDescription** parameters. The **TrafficMatchRules** parameter that contains the information about the traffic classification rules is not returned.
   * *   If you specify a traffic marking policy ID (**TrafficMarkingPolicyId**), the operation queries the information about the traffic marking policy and traffic classification rules. The **TrafficMatchRules** parameter is returned in the response. If the value of the **TrafficMatchRules** parameter is an empty array, the traffic marking policy does not contain a traffic classification rule.
   * 
   * @param request - ListTrafficMarkingPoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTrafficMarkingPoliciesResponse
   */
  async listTrafficMarkingPoliciesWithOptions(request: $_model.ListTrafficMarkingPoliciesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTrafficMarkingPoliciesResponse> {
    request.validate();
    let query = { };
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.trafficMarkingPolicyDescription)) {
      query["TrafficMarkingPolicyDescription"] = request.trafficMarkingPolicyDescription;
    }

    if (!$dara.isNull(request.trafficMarkingPolicyId)) {
      query["TrafficMarkingPolicyId"] = request.trafficMarkingPolicyId;
    }

    if (!$dara.isNull(request.trafficMarkingPolicyName)) {
      query["TrafficMarkingPolicyName"] = request.trafficMarkingPolicyName;
    }

    if (!$dara.isNull(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTrafficMarkingPolicies",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTrafficMarkingPoliciesResponse>(await this.callApi(params, req, runtime), new $_model.ListTrafficMarkingPoliciesResponse({}));
  }

  /**
   * Queries the details about a traffic marking policy, such as the status and priority.
   * 
   * @remarks
   * Before you call the **ListTrafficMarkingPolicies** operation, take note of the following limits:
   * *   Specify at least one of the **TransitRouterId** and **TrafficMarkingPolicyId** parameters.
   * *   If you do not specify a traffic marking policy ID (**TrafficMarkingPolicyId**), the operation queries only the information about the traffic marking policy based on the **TransitRouterId**, **TrafficMarkingPolicyName**, and **TrafficMarkingPolicyDescription** parameters. The **TrafficMatchRules** parameter that contains the information about the traffic classification rules is not returned.
   * *   If you specify a traffic marking policy ID (**TrafficMarkingPolicyId**), the operation queries the information about the traffic marking policy and traffic classification rules. The **TrafficMatchRules** parameter is returned in the response. If the value of the **TrafficMatchRules** parameter is an empty array, the traffic marking policy does not contain a traffic classification rule.
   * 
   * @param request - ListTrafficMarkingPoliciesRequest
   * @returns ListTrafficMarkingPoliciesResponse
   */
  async listTrafficMarkingPolicies(request: $_model.ListTrafficMarkingPoliciesRequest): Promise<$_model.ListTrafficMarkingPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTrafficMarkingPoliciesWithOptions(request, runtime);
  }

  /**
   * Queries the zones that support Enterprise Edition transit routers in a region.
   * 
   * @remarks
   *   You can call the **ListTransitRouterAvailableResource** operation to query the zones that support Enterprise Edition transit routers in a specified region.
   *     *   If you do not set **SupportMulticast** to **true**, general-purpose zones that support Enterprise Edition transit routers are queried.
   *     *   If you set **SupportMulticast** to **true**, zones in which Enterprise Edition transit routers support multicast are queried.
   * *   On May 31, 2022, VPC-connected Enterprise Edition transit routers were optimized. Optimized Enterprise Edition transit routers do not require you to specify the primary and secondary zones when you connect VPCs to the Enterprise Edition transit routers. You can specify one or more zones.
   *     *   If your Enterprise Edition transit router has not been optimized, you must specify the primary and secondary zones when you connect a VPC to your Enterprise Edition transit router. After you call **ListTransitRouterAvailableResource**, you can call **MasterZones** and **SlaveZones** to query the primary and secondary zones.
   *     *   If your Enterprise Edition transit router has been optimized, you can specify a zone as needed when you connect a VPC to your Enterprise Edition transit router. After you call **ListTransitRouterAvailableResource**, you can call **AvailableZones** to query the zones.
   * For more information about the optimization, see [Announcement: Optimization on VPC-connected Enterprise Edition transit routers](https://help.aliyun.com/document_detail/434191.html).
   * 
   * @param request - ListTransitRouterAvailableResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTransitRouterAvailableResourceResponse
   */
  async listTransitRouterAvailableResourceWithOptions(request: $_model.ListTransitRouterAvailableResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTransitRouterAvailableResourceResponse> {
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

    if (!$dara.isNull(request.supportMulticast)) {
      query["SupportMulticast"] = request.supportMulticast;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTransitRouterAvailableResource",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTransitRouterAvailableResourceResponse>(await this.callApi(params, req, runtime), new $_model.ListTransitRouterAvailableResourceResponse({}));
  }

  /**
   * Queries the zones that support Enterprise Edition transit routers in a region.
   * 
   * @remarks
   *   You can call the **ListTransitRouterAvailableResource** operation to query the zones that support Enterprise Edition transit routers in a specified region.
   *     *   If you do not set **SupportMulticast** to **true**, general-purpose zones that support Enterprise Edition transit routers are queried.
   *     *   If you set **SupportMulticast** to **true**, zones in which Enterprise Edition transit routers support multicast are queried.
   * *   On May 31, 2022, VPC-connected Enterprise Edition transit routers were optimized. Optimized Enterprise Edition transit routers do not require you to specify the primary and secondary zones when you connect VPCs to the Enterprise Edition transit routers. You can specify one or more zones.
   *     *   If your Enterprise Edition transit router has not been optimized, you must specify the primary and secondary zones when you connect a VPC to your Enterprise Edition transit router. After you call **ListTransitRouterAvailableResource**, you can call **MasterZones** and **SlaveZones** to query the primary and secondary zones.
   *     *   If your Enterprise Edition transit router has been optimized, you can specify a zone as needed when you connect a VPC to your Enterprise Edition transit router. After you call **ListTransitRouterAvailableResource**, you can call **AvailableZones** to query the zones.
   * For more information about the optimization, see [Announcement: Optimization on VPC-connected Enterprise Edition transit routers](https://help.aliyun.com/document_detail/434191.html).
   * 
   * @param request - ListTransitRouterAvailableResourceRequest
   * @returns ListTransitRouterAvailableResourceResponse
   */
  async listTransitRouterAvailableResource(request: $_model.ListTransitRouterAvailableResourceRequest): Promise<$_model.ListTransitRouterAvailableResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTransitRouterAvailableResourceWithOptions(request, runtime);
  }

  /**
   * Queries the CIDR blocks of a transit router.
   * 
   * @param request - ListTransitRouterCidrRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTransitRouterCidrResponse
   */
  async listTransitRouterCidrWithOptions(request: $_model.ListTransitRouterCidrRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTransitRouterCidrResponse> {
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

    if (!$dara.isNull(request.transitRouterCidrId)) {
      query["TransitRouterCidrId"] = request.transitRouterCidrId;
    }

    if (!$dara.isNull(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTransitRouterCidr",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTransitRouterCidrResponse>(await this.callApi(params, req, runtime), new $_model.ListTransitRouterCidrResponse({}));
  }

  /**
   * Queries the CIDR blocks of a transit router.
   * 
   * @param request - ListTransitRouterCidrRequest
   * @returns ListTransitRouterCidrResponse
   */
  async listTransitRouterCidr(request: $_model.ListTransitRouterCidrRequest): Promise<$_model.ListTransitRouterCidrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTransitRouterCidrWithOptions(request, runtime);
  }

  /**
   * Queries how a CIDR block is allocated.
   * 
   * @param request - ListTransitRouterCidrAllocationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTransitRouterCidrAllocationResponse
   */
  async listTransitRouterCidrAllocationWithOptions(request: $_model.ListTransitRouterCidrAllocationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTransitRouterCidrAllocationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.attachmentId)) {
      query["AttachmentId"] = request.attachmentId;
    }

    if (!$dara.isNull(request.attachmentName)) {
      query["AttachmentName"] = request.attachmentName;
    }

    if (!$dara.isNull(request.cidr)) {
      query["Cidr"] = request.cidr;
    }

    if (!$dara.isNull(request.cidrBlock)) {
      query["CidrBlock"] = request.cidrBlock;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dedicatedOwnerId)) {
      query["DedicatedOwnerId"] = request.dedicatedOwnerId;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
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

    if (!$dara.isNull(request.transitRouterCidrId)) {
      query["TransitRouterCidrId"] = request.transitRouterCidrId;
    }

    if (!$dara.isNull(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTransitRouterCidrAllocation",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTransitRouterCidrAllocationResponse>(await this.callApi(params, req, runtime), new $_model.ListTransitRouterCidrAllocationResponse({}));
  }

  /**
   * Queries how a CIDR block is allocated.
   * 
   * @param request - ListTransitRouterCidrAllocationRequest
   * @returns ListTransitRouterCidrAllocationResponse
   */
  async listTransitRouterCidrAllocation(request: $_model.ListTransitRouterCidrAllocationRequest): Promise<$_model.ListTransitRouterCidrAllocationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTransitRouterCidrAllocationWithOptions(request, runtime);
  }

  /**
   * Queries the information about Express Connect Router (ECR) connections on an Enterprise Edition transit router, such as the connection status, connection ID, and the payer of instance fees.
   * 
   * @remarks
   * You can use the following methods to query ECR connection information:
   * *   Specify the ID of an Enterprise Edition transit router.
   * *   Specify the ID of an Enterprise Edition transit router and the ID of the region in which the Enterprise Edition transit router is deployed.
   * *   Configure the **TransitRouterAttachmentId** parameter to specify the ECR connection that you want to query.
   * 
   * @param request - ListTransitRouterEcrAttachmentsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTransitRouterEcrAttachmentsResponse
   */
  async listTransitRouterEcrAttachmentsWithOptions(request: $_model.ListTransitRouterEcrAttachmentsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTransitRouterEcrAttachmentsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
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

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    if (!$dara.isNull(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTransitRouterEcrAttachments",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTransitRouterEcrAttachmentsResponse>(await this.callApi(params, req, runtime), new $_model.ListTransitRouterEcrAttachmentsResponse({}));
  }

  /**
   * Queries the information about Express Connect Router (ECR) connections on an Enterprise Edition transit router, such as the connection status, connection ID, and the payer of instance fees.
   * 
   * @remarks
   * You can use the following methods to query ECR connection information:
   * *   Specify the ID of an Enterprise Edition transit router.
   * *   Specify the ID of an Enterprise Edition transit router and the ID of the region in which the Enterprise Edition transit router is deployed.
   * *   Configure the **TransitRouterAttachmentId** parameter to specify the ECR connection that you want to query.
   * 
   * @param request - ListTransitRouterEcrAttachmentsRequest
   * @returns ListTransitRouterEcrAttachmentsResponse
   */
  async listTransitRouterEcrAttachments(request: $_model.ListTransitRouterEcrAttachmentsRequest): Promise<$_model.ListTransitRouterEcrAttachmentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTransitRouterEcrAttachmentsWithOptions(request, runtime);
  }

  /**
   * Queries whether a multicast domain is associated with a vSwitch.
   * 
   * @remarks
   *   You must set at least **TransitRouterMulticastDomainId** and **TransitRouterAttachmentId**. If you set **TransitRouterAttachmentId**, the information about the vSwitches in a virtual private cloud (VPC) that are associated with a multicast domain is returned. If you set **TransitRouterMulticastDomainId**, the information about the vSwitches that are associated with a multicast domain is returned.
   * *   Before you call **ListTransitRouterMulticastDomainAssociations**, make sure that all the request parameters are valid. If a request parameter is invalid, the system returns a **request ID** but does not return the vSwitches that are associated with the multicast domain.
   * 
   * @param request - ListTransitRouterMulticastDomainAssociationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTransitRouterMulticastDomainAssociationsResponse
   */
  async listTransitRouterMulticastDomainAssociationsWithOptions(request: $_model.ListTransitRouterMulticastDomainAssociationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTransitRouterMulticastDomainAssociationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
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

    if (!$dara.isNull(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    if (!$dara.isNull(request.transitRouterMulticastDomainId)) {
      query["TransitRouterMulticastDomainId"] = request.transitRouterMulticastDomainId;
    }

    if (!$dara.isNull(request.vSwitchIds)) {
      query["VSwitchIds"] = request.vSwitchIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTransitRouterMulticastDomainAssociations",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTransitRouterMulticastDomainAssociationsResponse>(await this.callApi(params, req, runtime), new $_model.ListTransitRouterMulticastDomainAssociationsResponse({}));
  }

  /**
   * Queries whether a multicast domain is associated with a vSwitch.
   * 
   * @remarks
   *   You must set at least **TransitRouterMulticastDomainId** and **TransitRouterAttachmentId**. If you set **TransitRouterAttachmentId**, the information about the vSwitches in a virtual private cloud (VPC) that are associated with a multicast domain is returned. If you set **TransitRouterMulticastDomainId**, the information about the vSwitches that are associated with a multicast domain is returned.
   * *   Before you call **ListTransitRouterMulticastDomainAssociations**, make sure that all the request parameters are valid. If a request parameter is invalid, the system returns a **request ID** but does not return the vSwitches that are associated with the multicast domain.
   * 
   * @param request - ListTransitRouterMulticastDomainAssociationsRequest
   * @returns ListTransitRouterMulticastDomainAssociationsResponse
   */
  async listTransitRouterMulticastDomainAssociations(request: $_model.ListTransitRouterMulticastDomainAssociationsRequest): Promise<$_model.ListTransitRouterMulticastDomainAssociationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTransitRouterMulticastDomainAssociationsWithOptions(request, runtime);
  }

  /**
   * @param request - ListTransitRouterMulticastDomainVSwitchesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTransitRouterMulticastDomainVSwitchesResponse
   */
  async listTransitRouterMulticastDomainVSwitchesWithOptions(request: $_model.ListTransitRouterMulticastDomainVSwitchesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTransitRouterMulticastDomainVSwitchesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.vSwitchIds)) {
      query["VSwitchIds"] = request.vSwitchIds;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTransitRouterMulticastDomainVSwitches",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTransitRouterMulticastDomainVSwitchesResponse>(await this.callApi(params, req, runtime), new $_model.ListTransitRouterMulticastDomainVSwitchesResponse({}));
  }

  /**
   * @param request - ListTransitRouterMulticastDomainVSwitchesRequest
   * @returns ListTransitRouterMulticastDomainVSwitchesResponse
   */
  async listTransitRouterMulticastDomainVSwitches(request: $_model.ListTransitRouterMulticastDomainVSwitchesRequest): Promise<$_model.ListTransitRouterMulticastDomainVSwitchesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTransitRouterMulticastDomainVSwitchesWithOptions(request, runtime);
  }

  /**
   * Queries the information about a multicast domain, such as the status, ID, and description.
   * 
   * @remarks
   *   If you configure one of the RegionId and CenId parameters, you must configure the other parameter. Otherwise, no information about the multicast domain is returned. You can configure only one of the TransitRouterId and TransitRouterMulticastDomainId parameters.
   * *   Make sure that all the request parameters are valid. If a request parameter is invalid, a **request ID** is returned but the information about the multicast domain is not returned.
   * 
   * @param request - ListTransitRouterMulticastDomainsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTransitRouterMulticastDomainsResponse
   */
  async listTransitRouterMulticastDomainsWithOptions(request: $_model.ListTransitRouterMulticastDomainsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTransitRouterMulticastDomainsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
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

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    if (!$dara.isNull(request.transitRouterMulticastDomainId)) {
      query["TransitRouterMulticastDomainId"] = request.transitRouterMulticastDomainId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTransitRouterMulticastDomains",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTransitRouterMulticastDomainsResponse>(await this.callApi(params, req, runtime), new $_model.ListTransitRouterMulticastDomainsResponse({}));
  }

  /**
   * Queries the information about a multicast domain, such as the status, ID, and description.
   * 
   * @remarks
   *   If you configure one of the RegionId and CenId parameters, you must configure the other parameter. Otherwise, no information about the multicast domain is returned. You can configure only one of the TransitRouterId and TransitRouterMulticastDomainId parameters.
   * *   Make sure that all the request parameters are valid. If a request parameter is invalid, a **request ID** is returned but the information about the multicast domain is not returned.
   * 
   * @param request - ListTransitRouterMulticastDomainsRequest
   * @returns ListTransitRouterMulticastDomainsResponse
   */
  async listTransitRouterMulticastDomains(request: $_model.ListTransitRouterMulticastDomainsRequest): Promise<$_model.ListTransitRouterMulticastDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTransitRouterMulticastDomainsWithOptions(request, runtime);
  }

  /**
   * Queries the detailed information about the multicast members and sources in a multicast domain.
   * 
   * @remarks
   * You can call the `ListTransitRouterMulticastGroups` operation to query the multicast sources and members in a multicast domain. Multicast sources and members are also known as multicast resources.
   * *   If you set **GroupIpAddress**, the system queries multicast resources in the multicast domain by multicast group.
   * *   If you set **VSwitchIds**, the system queries multicast resources in the multicast domain by vSwitch.
   * *   If you set **PeerTransitRouterMulticastDomains**, the system queries multicast resources that are also deployed in a different region.
   * *   If you set **ResourceType**, the system queries the multicast resources of the specified type in the multicast domain.
   * *   If you set **ResourceId**, the system queries multicast resources by resource.
   * *   If you set only **TransitRouterMulticastDomainId**, the system queries all the multicast resources in the multicast domain.
   * 
   * @param request - ListTransitRouterMulticastGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTransitRouterMulticastGroupsResponse
   */
  async listTransitRouterMulticastGroupsWithOptions(request: $_model.ListTransitRouterMulticastGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTransitRouterMulticastGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.groupIpAddress)) {
      query["GroupIpAddress"] = request.groupIpAddress;
    }

    if (!$dara.isNull(request.isGroupMember)) {
      query["IsGroupMember"] = request.isGroupMember;
    }

    if (!$dara.isNull(request.isGroupSource)) {
      query["IsGroupSource"] = request.isGroupSource;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.networkInterfaceIds)) {
      query["NetworkInterfaceIds"] = request.networkInterfaceIds;
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

    if (!$dara.isNull(request.peerTransitRouterMulticastDomains)) {
      query["PeerTransitRouterMulticastDomains"] = request.peerTransitRouterMulticastDomains;
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

    if (!$dara.isNull(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    if (!$dara.isNull(request.transitRouterMulticastDomainId)) {
      query["TransitRouterMulticastDomainId"] = request.transitRouterMulticastDomainId;
    }

    if (!$dara.isNull(request.vSwitchIds)) {
      query["VSwitchIds"] = request.vSwitchIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTransitRouterMulticastGroups",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTransitRouterMulticastGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListTransitRouterMulticastGroupsResponse({}));
  }

  /**
   * Queries the detailed information about the multicast members and sources in a multicast domain.
   * 
   * @remarks
   * You can call the `ListTransitRouterMulticastGroups` operation to query the multicast sources and members in a multicast domain. Multicast sources and members are also known as multicast resources.
   * *   If you set **GroupIpAddress**, the system queries multicast resources in the multicast domain by multicast group.
   * *   If you set **VSwitchIds**, the system queries multicast resources in the multicast domain by vSwitch.
   * *   If you set **PeerTransitRouterMulticastDomains**, the system queries multicast resources that are also deployed in a different region.
   * *   If you set **ResourceType**, the system queries the multicast resources of the specified type in the multicast domain.
   * *   If you set **ResourceId**, the system queries multicast resources by resource.
   * *   If you set only **TransitRouterMulticastDomainId**, the system queries all the multicast resources in the multicast domain.
   * 
   * @param request - ListTransitRouterMulticastGroupsRequest
   * @returns ListTransitRouterMulticastGroupsResponse
   */
  async listTransitRouterMulticastGroups(request: $_model.ListTransitRouterMulticastGroupsRequest): Promise<$_model.ListTransitRouterMulticastGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTransitRouterMulticastGroupsWithOptions(request, runtime);
  }

  /**
   * Queries inter-region connections on an Enterprise Edition transit router.
   * 
   * @remarks
   * You can use the following methods to query inter-region connections on an Enterprise Edition transit router:
   * *   Query all inter-region connections on an Enterprise Edition transit router by specifying the ID of the Enterprise Edition transit router.
   * *   Query all inter-region connections on an Enterprise Edition transit router by specifying the ID of the Cloud Enterprise Network (CEN) instance and the ID of the region where the transit router is deployed.
   * 
   * @param request - ListTransitRouterPeerAttachmentsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTransitRouterPeerAttachmentsResponse
   */
  async listTransitRouterPeerAttachmentsWithOptions(request: $_model.ListTransitRouterPeerAttachmentsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTransitRouterPeerAttachmentsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
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

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    if (!$dara.isNull(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTransitRouterPeerAttachments",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTransitRouterPeerAttachmentsResponse>(await this.callApi(params, req, runtime), new $_model.ListTransitRouterPeerAttachmentsResponse({}));
  }

  /**
   * Queries inter-region connections on an Enterprise Edition transit router.
   * 
   * @remarks
   * You can use the following methods to query inter-region connections on an Enterprise Edition transit router:
   * *   Query all inter-region connections on an Enterprise Edition transit router by specifying the ID of the Enterprise Edition transit router.
   * *   Query all inter-region connections on an Enterprise Edition transit router by specifying the ID of the Cloud Enterprise Network (CEN) instance and the ID of the region where the transit router is deployed.
   * 
   * @param request - ListTransitRouterPeerAttachmentsRequest
   * @returns ListTransitRouterPeerAttachmentsResponse
   */
  async listTransitRouterPeerAttachments(request: $_model.ListTransitRouterPeerAttachmentsRequest): Promise<$_model.ListTransitRouterPeerAttachmentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTransitRouterPeerAttachmentsWithOptions(request, runtime);
  }

  /**
   * Queries the prefix lists that are associated with an Enterprise Edition transit router.
   * 
   * @param request - ListTransitRouterPrefixListAssociationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTransitRouterPrefixListAssociationResponse
   */
  async listTransitRouterPrefixListAssociationWithOptions(request: $_model.ListTransitRouterPrefixListAssociationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTransitRouterPrefixListAssociationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nextHop)) {
      query["NextHop"] = request.nextHop;
    }

    if (!$dara.isNull(request.nextHopInstanceId)) {
      query["NextHopInstanceId"] = request.nextHopInstanceId;
    }

    if (!$dara.isNull(request.nextHopType)) {
      query["NextHopType"] = request.nextHopType;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.ownerUid)) {
      query["OwnerUid"] = request.ownerUid;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.prefixListId)) {
      query["PrefixListId"] = request.prefixListId;
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

    if (!$dara.isNull(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    if (!$dara.isNull(request.transitRouterTableId)) {
      query["TransitRouterTableId"] = request.transitRouterTableId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTransitRouterPrefixListAssociation",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTransitRouterPrefixListAssociationResponse>(await this.callApi(params, req, runtime), new $_model.ListTransitRouterPrefixListAssociationResponse({}));
  }

  /**
   * Queries the prefix lists that are associated with an Enterprise Edition transit router.
   * 
   * @param request - ListTransitRouterPrefixListAssociationRequest
   * @returns ListTransitRouterPrefixListAssociationResponse
   */
  async listTransitRouterPrefixListAssociation(request: $_model.ListTransitRouterPrefixListAssociationRequest): Promise<$_model.ListTransitRouterPrefixListAssociationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTransitRouterPrefixListAssociationWithOptions(request, runtime);
  }

  /**
   * Queries the details about routes in the route tables of an Enterprise Edition transit router.
   * 
   * @param request - ListTransitRouterRouteEntriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTransitRouterRouteEntriesResponse
   */
  async listTransitRouterRouteEntriesWithOptions(request: $_model.ListTransitRouterRouteEntriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTransitRouterRouteEntriesResponse> {
    request.validate();
    let query = { };
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

    if (!$dara.isNull(request.prefixListId)) {
      query["PrefixListId"] = request.prefixListId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.routeFilter)) {
      query["RouteFilter"] = request.routeFilter;
    }

    if (!$dara.isNull(request.transitRouterRouteEntryDestinationCidrBlock)) {
      query["TransitRouterRouteEntryDestinationCidrBlock"] = request.transitRouterRouteEntryDestinationCidrBlock;
    }

    if (!$dara.isNull(request.transitRouterRouteEntryIds)) {
      query["TransitRouterRouteEntryIds"] = request.transitRouterRouteEntryIds;
    }

    if (!$dara.isNull(request.transitRouterRouteEntryNames)) {
      query["TransitRouterRouteEntryNames"] = request.transitRouterRouteEntryNames;
    }

    if (!$dara.isNull(request.transitRouterRouteEntryNextHopId)) {
      query["TransitRouterRouteEntryNextHopId"] = request.transitRouterRouteEntryNextHopId;
    }

    if (!$dara.isNull(request.transitRouterRouteEntryNextHopResourceId)) {
      query["TransitRouterRouteEntryNextHopResourceId"] = request.transitRouterRouteEntryNextHopResourceId;
    }

    if (!$dara.isNull(request.transitRouterRouteEntryNextHopResourceType)) {
      query["TransitRouterRouteEntryNextHopResourceType"] = request.transitRouterRouteEntryNextHopResourceType;
    }

    if (!$dara.isNull(request.transitRouterRouteEntryNextHopType)) {
      query["TransitRouterRouteEntryNextHopType"] = request.transitRouterRouteEntryNextHopType;
    }

    if (!$dara.isNull(request.transitRouterRouteEntryOriginResourceId)) {
      query["TransitRouterRouteEntryOriginResourceId"] = request.transitRouterRouteEntryOriginResourceId;
    }

    if (!$dara.isNull(request.transitRouterRouteEntryOriginResourceType)) {
      query["TransitRouterRouteEntryOriginResourceType"] = request.transitRouterRouteEntryOriginResourceType;
    }

    if (!$dara.isNull(request.transitRouterRouteEntryStatus)) {
      query["TransitRouterRouteEntryStatus"] = request.transitRouterRouteEntryStatus;
    }

    if (!$dara.isNull(request.transitRouterRouteEntryType)) {
      query["TransitRouterRouteEntryType"] = request.transitRouterRouteEntryType;
    }

    if (!$dara.isNull(request.transitRouterRouteTableId)) {
      query["TransitRouterRouteTableId"] = request.transitRouterRouteTableId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTransitRouterRouteEntries",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTransitRouterRouteEntriesResponse>(await this.callApi(params, req, runtime), new $_model.ListTransitRouterRouteEntriesResponse({}));
  }

  /**
   * Queries the details about routes in the route tables of an Enterprise Edition transit router.
   * 
   * @param request - ListTransitRouterRouteEntriesRequest
   * @returns ListTransitRouterRouteEntriesResponse
   */
  async listTransitRouterRouteEntries(request: $_model.ListTransitRouterRouteEntriesRequest): Promise<$_model.ListTransitRouterRouteEntriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTransitRouterRouteEntriesWithOptions(request, runtime);
  }

  /**
   * Queries the associated forwarding correlations that are created for a route table of an Enterprise Edition transit router or a network instance connection.
   * 
   * @remarks
   * When you call **ListTransitRouterRouteTableAssociations**, you must set at least one of **TransitRouterRouteTableId** and **TransitRouterAttachmentId**.
   * *   If you set only **TransitRouterRouteTableId**, the network instance connections that are in associated forwarding correlation with a route table of an Enterprise Edition transit router are queried.
   * *   If you set only **TransitRouterAttachmentId**, the route table of an Enterprise Edition transit router that is in associated forwarding correlation with a network instance connection is queried.
   * *   If you set both **TransitRouterRouteTableId** and **TransitRouterAttachmentId**, the associated forwarding correlations between a specified network instance connection and a specified route table of an Enterprise Edition transit router are queried.
   *     *   If an associated forwarding correlation is created between the network instance connection and the route table of the Enterprise Edition transit router, the information about the associated forwarding correlation is returned.
   *     *   If no associated forwarding correlation is created between the network instance connection and the route table of the Enterprise Edition transit router, **TransitRouterAssociations** in the response is empty.
   * 
   * @param request - ListTransitRouterRouteTableAssociationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTransitRouterRouteTableAssociationsResponse
   */
  async listTransitRouterRouteTableAssociationsWithOptions(request: $_model.ListTransitRouterRouteTableAssociationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTransitRouterRouteTableAssociationsResponse> {
    request.validate();
    let query = { };
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    if (!$dara.isNull(request.transitRouterAttachmentResourceId)) {
      query["TransitRouterAttachmentResourceId"] = request.transitRouterAttachmentResourceId;
    }

    if (!$dara.isNull(request.transitRouterAttachmentResourceType)) {
      query["TransitRouterAttachmentResourceType"] = request.transitRouterAttachmentResourceType;
    }

    if (!$dara.isNull(request.transitRouterRouteTableId)) {
      query["TransitRouterRouteTableId"] = request.transitRouterRouteTableId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTransitRouterRouteTableAssociations",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTransitRouterRouteTableAssociationsResponse>(await this.callApi(params, req, runtime), new $_model.ListTransitRouterRouteTableAssociationsResponse({}));
  }

  /**
   * Queries the associated forwarding correlations that are created for a route table of an Enterprise Edition transit router or a network instance connection.
   * 
   * @remarks
   * When you call **ListTransitRouterRouteTableAssociations**, you must set at least one of **TransitRouterRouteTableId** and **TransitRouterAttachmentId**.
   * *   If you set only **TransitRouterRouteTableId**, the network instance connections that are in associated forwarding correlation with a route table of an Enterprise Edition transit router are queried.
   * *   If you set only **TransitRouterAttachmentId**, the route table of an Enterprise Edition transit router that is in associated forwarding correlation with a network instance connection is queried.
   * *   If you set both **TransitRouterRouteTableId** and **TransitRouterAttachmentId**, the associated forwarding correlations between a specified network instance connection and a specified route table of an Enterprise Edition transit router are queried.
   *     *   If an associated forwarding correlation is created between the network instance connection and the route table of the Enterprise Edition transit router, the information about the associated forwarding correlation is returned.
   *     *   If no associated forwarding correlation is created between the network instance connection and the route table of the Enterprise Edition transit router, **TransitRouterAssociations** in the response is empty.
   * 
   * @param request - ListTransitRouterRouteTableAssociationsRequest
   * @returns ListTransitRouterRouteTableAssociationsResponse
   */
  async listTransitRouterRouteTableAssociations(request: $_model.ListTransitRouterRouteTableAssociationsRequest): Promise<$_model.ListTransitRouterRouteTableAssociationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTransitRouterRouteTableAssociationsWithOptions(request, runtime);
  }

  /**
   * Queries the route learning correlations of an Enterprise Edition transit router.
   * 
   * @param request - ListTransitRouterRouteTablePropagationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTransitRouterRouteTablePropagationsResponse
   */
  async listTransitRouterRouteTablePropagationsWithOptions(request: $_model.ListTransitRouterRouteTablePropagationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTransitRouterRouteTablePropagationsResponse> {
    request.validate();
    let query = { };
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    if (!$dara.isNull(request.transitRouterAttachmentResourceId)) {
      query["TransitRouterAttachmentResourceId"] = request.transitRouterAttachmentResourceId;
    }

    if (!$dara.isNull(request.transitRouterAttachmentResourceType)) {
      query["TransitRouterAttachmentResourceType"] = request.transitRouterAttachmentResourceType;
    }

    if (!$dara.isNull(request.transitRouterRouteTableId)) {
      query["TransitRouterRouteTableId"] = request.transitRouterRouteTableId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTransitRouterRouteTablePropagations",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTransitRouterRouteTablePropagationsResponse>(await this.callApi(params, req, runtime), new $_model.ListTransitRouterRouteTablePropagationsResponse({}));
  }

  /**
   * Queries the route learning correlations of an Enterprise Edition transit router.
   * 
   * @param request - ListTransitRouterRouteTablePropagationsRequest
   * @returns ListTransitRouterRouteTablePropagationsResponse
   */
  async listTransitRouterRouteTablePropagations(request: $_model.ListTransitRouterRouteTablePropagationsRequest): Promise<$_model.ListTransitRouterRouteTablePropagationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTransitRouterRouteTablePropagationsWithOptions(request, runtime);
  }

  /**
   * Queries the route tables of an Enterprise Edition transit router.
   * 
   * @param request - ListTransitRouterRouteTablesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTransitRouterRouteTablesResponse
   */
  async listTransitRouterRouteTablesWithOptions(request: $_model.ListTransitRouterRouteTablesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTransitRouterRouteTablesResponse> {
    request.validate();
    let query = { };
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.routeTableOptions)) {
      query["RouteTableOptions"] = request.routeTableOptions;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    if (!$dara.isNull(request.transitRouterRouteTableIds)) {
      query["TransitRouterRouteTableIds"] = request.transitRouterRouteTableIds;
    }

    if (!$dara.isNull(request.transitRouterRouteTableNames)) {
      query["TransitRouterRouteTableNames"] = request.transitRouterRouteTableNames;
    }

    if (!$dara.isNull(request.transitRouterRouteTableStatus)) {
      query["TransitRouterRouteTableStatus"] = request.transitRouterRouteTableStatus;
    }

    if (!$dara.isNull(request.transitRouterRouteTableType)) {
      query["TransitRouterRouteTableType"] = request.transitRouterRouteTableType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTransitRouterRouteTables",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTransitRouterRouteTablesResponse>(await this.callApi(params, req, runtime), new $_model.ListTransitRouterRouteTablesResponse({}));
  }

  /**
   * Queries the route tables of an Enterprise Edition transit router.
   * 
   * @param request - ListTransitRouterRouteTablesRequest
   * @returns ListTransitRouterRouteTablesResponse
   */
  async listTransitRouterRouteTables(request: $_model.ListTransitRouterRouteTablesRequest): Promise<$_model.ListTransitRouterRouteTablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTransitRouterRouteTablesWithOptions(request, runtime);
  }

  /**
   * Queries the virtual border router (VBR) connections on an Enterprise Edition transit router.
   * 
   * @remarks
   * You can use the following methods to query VBR connections on an Enterprise Edition transit router:
   * *   Specify the ID of the Enterprise Edition transit router.
   * *   Specify the ID of the relevant Cloud Enterprise Network (CEN) instance and the region ID of the Enterprise Edition transit router.
   * 
   * @param request - ListTransitRouterVbrAttachmentsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTransitRouterVbrAttachmentsResponse
   */
  async listTransitRouterVbrAttachmentsWithOptions(request: $_model.ListTransitRouterVbrAttachmentsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTransitRouterVbrAttachmentsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
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

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    if (!$dara.isNull(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTransitRouterVbrAttachments",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTransitRouterVbrAttachmentsResponse>(await this.callApi(params, req, runtime), new $_model.ListTransitRouterVbrAttachmentsResponse({}));
  }

  /**
   * Queries the virtual border router (VBR) connections on an Enterprise Edition transit router.
   * 
   * @remarks
   * You can use the following methods to query VBR connections on an Enterprise Edition transit router:
   * *   Specify the ID of the Enterprise Edition transit router.
   * *   Specify the ID of the relevant Cloud Enterprise Network (CEN) instance and the region ID of the Enterprise Edition transit router.
   * 
   * @param request - ListTransitRouterVbrAttachmentsRequest
   * @returns ListTransitRouterVbrAttachmentsResponse
   */
  async listTransitRouterVbrAttachments(request: $_model.ListTransitRouterVbrAttachmentsRequest): Promise<$_model.ListTransitRouterVbrAttachmentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTransitRouterVbrAttachmentsWithOptions(request, runtime);
  }

  /**
   * Queries the status, billing method, zones, vSwitches, and elastic network interfaces (ENIs) of virtual private cloud (VPC) connections.
   * 
   * @remarks
   * You can use the following methods to query VPC connections on an Enterprise Edition transit router:
   * *   Specify the ID of the Enterprise Edition transit router.
   * *   Specify the ID of the relevant Cloud Enterprise Network (CEN) instance and the region ID of the Enterprise Edition transit router.
   * *   Specify the ID of the region where the Enterprise Edition transit router is deployed.
   * 
   * @param request - ListTransitRouterVpcAttachmentsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTransitRouterVpcAttachmentsResponse
   */
  async listTransitRouterVpcAttachmentsWithOptions(request: $_model.ListTransitRouterVpcAttachmentsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTransitRouterVpcAttachmentsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
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

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    if (!$dara.isNull(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTransitRouterVpcAttachments",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTransitRouterVpcAttachmentsResponse>(await this.callApi(params, req, runtime), new $_model.ListTransitRouterVpcAttachmentsResponse({}));
  }

  /**
   * Queries the status, billing method, zones, vSwitches, and elastic network interfaces (ENIs) of virtual private cloud (VPC) connections.
   * 
   * @remarks
   * You can use the following methods to query VPC connections on an Enterprise Edition transit router:
   * *   Specify the ID of the Enterprise Edition transit router.
   * *   Specify the ID of the relevant Cloud Enterprise Network (CEN) instance and the region ID of the Enterprise Edition transit router.
   * *   Specify the ID of the region where the Enterprise Edition transit router is deployed.
   * 
   * @param request - ListTransitRouterVpcAttachmentsRequest
   * @returns ListTransitRouterVpcAttachmentsResponse
   */
  async listTransitRouterVpcAttachments(request: $_model.ListTransitRouterVpcAttachmentsRequest): Promise<$_model.ListTransitRouterVpcAttachmentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTransitRouterVpcAttachmentsWithOptions(request, runtime);
  }

  /**
   * Queries the information about VPN attachments, such as the status and billing method of a VPN attachment, and the ID of an IPsec-VPN connection.
   * 
   * @remarks
   * You can use the following methods to call the ListTransitRouterVpnAttachments operation:
   * *   Specify only the **TransitRouterAttachmentId** parameter to query the information about a VPN attachment.
   * *   Specify only the **TransitRouterId** parameter to query the information about all VPN attachments on a transit router.
   * *   Specify the **CenId** and **RegionId** parameter to query the information about VPN attachments in a specified region.
   * Before you call the **ListTransitRouterVpnAttachments** operation, make sure that all request parameters are valid. If a request parameter is invalid, a **request ID** is returned, but the information about the VPN attachments is not returned.
   * 
   * @param request - ListTransitRouterVpnAttachmentsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTransitRouterVpnAttachmentsResponse
   */
  async listTransitRouterVpnAttachmentsWithOptions(request: $_model.ListTransitRouterVpnAttachmentsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTransitRouterVpnAttachmentsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
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

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    if (!$dara.isNull(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTransitRouterVpnAttachments",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTransitRouterVpnAttachmentsResponse>(await this.callApi(params, req, runtime), new $_model.ListTransitRouterVpnAttachmentsResponse({}));
  }

  /**
   * Queries the information about VPN attachments, such as the status and billing method of a VPN attachment, and the ID of an IPsec-VPN connection.
   * 
   * @remarks
   * You can use the following methods to call the ListTransitRouterVpnAttachments operation:
   * *   Specify only the **TransitRouterAttachmentId** parameter to query the information about a VPN attachment.
   * *   Specify only the **TransitRouterId** parameter to query the information about all VPN attachments on a transit router.
   * *   Specify the **CenId** and **RegionId** parameter to query the information about VPN attachments in a specified region.
   * Before you call the **ListTransitRouterVpnAttachments** operation, make sure that all request parameters are valid. If a request parameter is invalid, a **request ID** is returned, but the information about the VPN attachments is not returned.
   * 
   * @param request - ListTransitRouterVpnAttachmentsRequest
   * @returns ListTransitRouterVpnAttachmentsResponse
   */
  async listTransitRouterVpnAttachments(request: $_model.ListTransitRouterVpnAttachmentsRequest): Promise<$_model.ListTransitRouterVpnAttachmentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTransitRouterVpnAttachmentsWithOptions(request, runtime);
  }

  /**
   * Queries the information about transit routers that are connected to a Cloud Enterprise Network (CEN) instance.
   * 
   * @remarks
   * You can set the **RegionId** and **TransitRouterId** parameters based on your requirements.
   * *   If you do not set **RegionId** or **TransitRouterId**, the system queries all transit routers that are connected to the specified CEN instance.
   * *   If you set only **RegionId**, the system queries transit routers that are deployed in the specified region.
   * *   If you set only **TransitRouterId**, the system queries the specified transit router.
   * *   If you set both **RegionId** and **TransitRouterId**, the system queries the specified transit router in the specified region.
   * 
   * @param request - ListTransitRoutersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTransitRoutersResponse
   */
  async listTransitRoutersWithOptions(request: $_model.ListTransitRoutersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTransitRoutersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.featureFilter)) {
      query["FeatureFilter"] = request.featureFilter;
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

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    if (!$dara.isNull(request.transitRouterName)) {
      query["TransitRouterName"] = request.transitRouterName;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTransitRouters",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTransitRoutersResponse>(await this.callApi(params, req, runtime), new $_model.ListTransitRoutersResponse({}));
  }

  /**
   * Queries the information about transit routers that are connected to a Cloud Enterprise Network (CEN) instance.
   * 
   * @remarks
   * You can set the **RegionId** and **TransitRouterId** parameters based on your requirements.
   * *   If you do not set **RegionId** or **TransitRouterId**, the system queries all transit routers that are connected to the specified CEN instance.
   * *   If you set only **RegionId**, the system queries transit routers that are deployed in the specified region.
   * *   If you set only **TransitRouterId**, the system queries the specified transit router.
   * *   If you set both **RegionId** and **TransitRouterId**, the system queries the specified transit router in the specified region.
   * 
   * @param request - ListTransitRoutersRequest
   * @returns ListTransitRoutersResponse
   */
  async listTransitRouters(request: $_model.ListTransitRoutersRequest): Promise<$_model.ListTransitRoutersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTransitRoutersWithOptions(request, runtime);
  }

  /**
   * Modifies the name and description of a Cloud Enterprise Network (CEN) instance.
   * 
   * @remarks
   * *ModifyCenAttribute** is an asynchronous operation. After you send a request, the system returns the **request ID** but the operation is still being performed in the system background. You can call **DescribeCens** to query the status of a CEN instance.
   * *   If a CEN instance is in the **Modifying** state, the CEN instance is being modified. You can query the CEN instance but cannot perform other operations.
   * *   If a CEN instance is in the **Active** state, the CEN instance is modified.
   * 
   * @param request - ModifyCenAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyCenAttributeResponse
   */
  async modifyCenAttributeWithOptions(request: $_model.ModifyCenAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyCenAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
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

    if (!$dara.isNull(request.protectionLevel)) {
      query["ProtectionLevel"] = request.protectionLevel;
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
      action: "ModifyCenAttribute",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyCenAttributeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyCenAttributeResponse({}));
  }

  /**
   * Modifies the name and description of a Cloud Enterprise Network (CEN) instance.
   * 
   * @remarks
   * *ModifyCenAttribute** is an asynchronous operation. After you send a request, the system returns the **request ID** but the operation is still being performed in the system background. You can call **DescribeCens** to query the status of a CEN instance.
   * *   If a CEN instance is in the **Modifying** state, the CEN instance is being modified. You can query the CEN instance but cannot perform other operations.
   * *   If a CEN instance is in the **Active** state, the CEN instance is modified.
   * 
   * @param request - ModifyCenAttributeRequest
   * @returns ModifyCenAttributeResponse
   */
  async modifyCenAttribute(request: $_model.ModifyCenAttributeRequest): Promise<$_model.ModifyCenAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyCenAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the name and description of a bandwidth plan.
   * 
   * @param request - ModifyCenBandwidthPackageAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyCenBandwidthPackageAttributeResponse
   */
  async modifyCenBandwidthPackageAttributeWithOptions(request: $_model.ModifyCenBandwidthPackageAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyCenBandwidthPackageAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cenBandwidthPackageId)) {
      query["CenBandwidthPackageId"] = request.cenBandwidthPackageId;
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
      action: "ModifyCenBandwidthPackageAttribute",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyCenBandwidthPackageAttributeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyCenBandwidthPackageAttributeResponse({}));
  }

  /**
   * Modifies the name and description of a bandwidth plan.
   * 
   * @param request - ModifyCenBandwidthPackageAttributeRequest
   * @returns ModifyCenBandwidthPackageAttributeResponse
   */
  async modifyCenBandwidthPackageAttribute(request: $_model.ModifyCenBandwidthPackageAttributeRequest): Promise<$_model.ModifyCenBandwidthPackageAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyCenBandwidthPackageAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the maximum bandwidth of a bandwidth plan.
   * 
   * @param request - ModifyCenBandwidthPackageSpecRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyCenBandwidthPackageSpecResponse
   */
  async modifyCenBandwidthPackageSpecWithOptions(request: $_model.ModifyCenBandwidthPackageSpecRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyCenBandwidthPackageSpecResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.cenBandwidthPackageId)) {
      query["CenBandwidthPackageId"] = request.cenBandwidthPackageId;
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
      action: "ModifyCenBandwidthPackageSpec",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyCenBandwidthPackageSpecResponse>(await this.callApi(params, req, runtime), new $_model.ModifyCenBandwidthPackageSpecResponse({}));
  }

  /**
   * Modifies the maximum bandwidth of a bandwidth plan.
   * 
   * @param request - ModifyCenBandwidthPackageSpecRequest
   * @returns ModifyCenBandwidthPackageSpecResponse
   */
  async modifyCenBandwidthPackageSpec(request: $_model.ModifyCenBandwidthPackageSpecRequest): Promise<$_model.ModifyCenBandwidthPackageSpecResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyCenBandwidthPackageSpecWithOptions(request, runtime);
  }

  /**
   * Modifies a routing policy of a Cloud Enterprise Network (CEN) instance.
   * 
   * @remarks
   * `ModifyCenRouteMap` is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the `DescribeCenRouteMaps` operation to query the status of a routing policy.
   * *   **Modifying**: indicates that the system is modifying the routing policy. You can only query the routing policy, but cannot perform other operations.
   * *   **Active**: indicates that the routing policy is modified.
   * 
   * @param request - ModifyCenRouteMapRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyCenRouteMapResponse
   */
  async modifyCenRouteMapWithOptions(request: $_model.ModifyCenRouteMapRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyCenRouteMapResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.asPathMatchMode)) {
      query["AsPathMatchMode"] = request.asPathMatchMode;
    }

    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.cenRegionId)) {
      query["CenRegionId"] = request.cenRegionId;
    }

    if (!$dara.isNull(request.cidrMatchMode)) {
      query["CidrMatchMode"] = request.cidrMatchMode;
    }

    if (!$dara.isNull(request.communityMatchMode)) {
      query["CommunityMatchMode"] = request.communityMatchMode;
    }

    if (!$dara.isNull(request.communityOperateMode)) {
      query["CommunityOperateMode"] = request.communityOperateMode;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.destinationChildInstanceTypes)) {
      query["DestinationChildInstanceTypes"] = request.destinationChildInstanceTypes;
    }

    if (!$dara.isNull(request.destinationCidrBlocks)) {
      query["DestinationCidrBlocks"] = request.destinationCidrBlocks;
    }

    if (!$dara.isNull(request.destinationInstanceIds)) {
      query["DestinationInstanceIds"] = request.destinationInstanceIds;
    }

    if (!$dara.isNull(request.destinationInstanceIdsReverseMatch)) {
      query["DestinationInstanceIdsReverseMatch"] = request.destinationInstanceIdsReverseMatch;
    }

    if (!$dara.isNull(request.destinationRegionIds)) {
      query["DestinationRegionIds"] = request.destinationRegionIds;
    }

    if (!$dara.isNull(request.destinationRouteTableIds)) {
      query["DestinationRouteTableIds"] = request.destinationRouteTableIds;
    }

    if (!$dara.isNull(request.mapResult)) {
      query["MapResult"] = request.mapResult;
    }

    if (!$dara.isNull(request.matchAddressType)) {
      query["MatchAddressType"] = request.matchAddressType;
    }

    if (!$dara.isNull(request.matchAsns)) {
      query["MatchAsns"] = request.matchAsns;
    }

    if (!$dara.isNull(request.matchCommunitySet)) {
      query["MatchCommunitySet"] = request.matchCommunitySet;
    }

    if (!$dara.isNull(request.nextPriority)) {
      query["NextPriority"] = request.nextPriority;
    }

    if (!$dara.isNull(request.operateCommunitySet)) {
      query["OperateCommunitySet"] = request.operateCommunitySet;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.preference)) {
      query["Preference"] = request.preference;
    }

    if (!$dara.isNull(request.prependAsPath)) {
      query["PrependAsPath"] = request.prependAsPath;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.routeMapId)) {
      query["RouteMapId"] = request.routeMapId;
    }

    if (!$dara.isNull(request.routeTypes)) {
      query["RouteTypes"] = request.routeTypes;
    }

    if (!$dara.isNull(request.sourceChildInstanceTypes)) {
      query["SourceChildInstanceTypes"] = request.sourceChildInstanceTypes;
    }

    if (!$dara.isNull(request.sourceInstanceIds)) {
      query["SourceInstanceIds"] = request.sourceInstanceIds;
    }

    if (!$dara.isNull(request.sourceInstanceIdsReverseMatch)) {
      query["SourceInstanceIdsReverseMatch"] = request.sourceInstanceIdsReverseMatch;
    }

    if (!$dara.isNull(request.sourceRegionIds)) {
      query["SourceRegionIds"] = request.sourceRegionIds;
    }

    if (!$dara.isNull(request.sourceRouteTableIds)) {
      query["SourceRouteTableIds"] = request.sourceRouteTableIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyCenRouteMap",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyCenRouteMapResponse>(await this.callApi(params, req, runtime), new $_model.ModifyCenRouteMapResponse({}));
  }

  /**
   * Modifies a routing policy of a Cloud Enterprise Network (CEN) instance.
   * 
   * @remarks
   * `ModifyCenRouteMap` is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the `DescribeCenRouteMaps` operation to query the status of a routing policy.
   * *   **Modifying**: indicates that the system is modifying the routing policy. You can only query the routing policy, but cannot perform other operations.
   * *   **Active**: indicates that the routing policy is modified.
   * 
   * @param request - ModifyCenRouteMapRequest
   * @returns ModifyCenRouteMapResponse
   */
  async modifyCenRouteMap(request: $_model.ModifyCenRouteMapRequest): Promise<$_model.ModifyCenRouteMapResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyCenRouteMapWithOptions(request, runtime);
  }

  /**
   * Modifies the name, description, and capture window of a flow log.
   * 
   * @remarks
   * `ModifyFlowLogAttribute` is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the `DescribeFlowlogs` operation to query the status of a flow log.
   * *   If a flow log is in the **Modifying** state, the flow log is being modified. In this case, you can query the flow log but cannot perform other operations.
   * *   If a flow log is in the **Active** state, the flow log is modified.
   * 
   * @param request - ModifyFlowLogAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyFlowLogAttributeResponse
   */
  async modifyFlowLogAttributeWithOptions(request: $_model.ModifyFlowLogAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyFlowLogAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.flowLogId)) {
      query["FlowLogId"] = request.flowLogId;
    }

    if (!$dara.isNull(request.flowLogName)) {
      query["FlowLogName"] = request.flowLogName;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
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
      action: "ModifyFlowLogAttribute",
      version: "2017-09-12",
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
   * Modifies the name, description, and capture window of a flow log.
   * 
   * @remarks
   * `ModifyFlowLogAttribute` is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the `DescribeFlowlogs` operation to query the status of a flow log.
   * *   If a flow log is in the **Modifying** state, the flow log is being modified. In this case, you can query the flow log but cannot perform other operations.
   * *   If a flow log is in the **Active** state, the flow log is modified.
   * 
   * @param request - ModifyFlowLogAttributeRequest
   * @returns ModifyFlowLogAttributeResponse
   */
  async modifyFlowLogAttribute(request: $_model.ModifyFlowLogAttributeRequest): Promise<$_model.ModifyFlowLogAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyFlowLogAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the name and description of a traffic classification rule.
   * 
   * @param request - ModifyTrafficMatchRuleToTrafficMarkingPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyTrafficMatchRuleToTrafficMarkingPolicyResponse
   */
  async modifyTrafficMatchRuleToTrafficMarkingPolicyWithOptions(request: $_model.ModifyTrafficMatchRuleToTrafficMarkingPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyTrafficMatchRuleToTrafficMarkingPolicyResponse> {
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.trafficMarkingPolicyId)) {
      query["TrafficMarkingPolicyId"] = request.trafficMarkingPolicyId;
    }

    if (!$dara.isNull(request.trafficMatchRuleDescription)) {
      query["TrafficMatchRuleDescription"] = request.trafficMatchRuleDescription;
    }

    if (!$dara.isNull(request.trafficMatchRuleId)) {
      query["TrafficMatchRuleId"] = request.trafficMatchRuleId;
    }

    if (!$dara.isNull(request.trafficMatchRuleName)) {
      query["TrafficMatchRuleName"] = request.trafficMatchRuleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyTrafficMatchRuleToTrafficMarkingPolicy",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyTrafficMatchRuleToTrafficMarkingPolicyResponse>(await this.callApi(params, req, runtime), new $_model.ModifyTrafficMatchRuleToTrafficMarkingPolicyResponse({}));
  }

  /**
   * Modifies the name and description of a traffic classification rule.
   * 
   * @param request - ModifyTrafficMatchRuleToTrafficMarkingPolicyRequest
   * @returns ModifyTrafficMatchRuleToTrafficMarkingPolicyResponse
   */
  async modifyTrafficMatchRuleToTrafficMarkingPolicy(request: $_model.ModifyTrafficMatchRuleToTrafficMarkingPolicyRequest): Promise<$_model.ModifyTrafficMatchRuleToTrafficMarkingPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyTrafficMatchRuleToTrafficMarkingPolicyWithOptions(request, runtime);
  }

  /**
   * Edit an aggregate route.
   * 
   * @param tmpReq - ModifyTransitRouteTableAggregationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyTransitRouteTableAggregationResponse
   */
  async modifyTransitRouteTableAggregationWithOptions(tmpReq: $_model.ModifyTransitRouteTableAggregationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyTransitRouteTableAggregationResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyTransitRouteTableAggregationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.transitRouteTableAggregationScopeList)) {
      request.transitRouteTableAggregationScopeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.transitRouteTableAggregationScopeList, "TransitRouteTableAggregationScopeList", "json");
    }

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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.transitRouteTableAggregationCidr)) {
      query["TransitRouteTableAggregationCidr"] = request.transitRouteTableAggregationCidr;
    }

    if (!$dara.isNull(request.transitRouteTableAggregationDescription)) {
      query["TransitRouteTableAggregationDescription"] = request.transitRouteTableAggregationDescription;
    }

    if (!$dara.isNull(request.transitRouteTableAggregationName)) {
      query["TransitRouteTableAggregationName"] = request.transitRouteTableAggregationName;
    }

    if (!$dara.isNull(request.transitRouteTableAggregationScope)) {
      query["TransitRouteTableAggregationScope"] = request.transitRouteTableAggregationScope;
    }

    if (!$dara.isNull(request.transitRouteTableAggregationScopeListShrink)) {
      query["TransitRouteTableAggregationScopeList"] = request.transitRouteTableAggregationScopeListShrink;
    }

    if (!$dara.isNull(request.transitRouteTableId)) {
      query["TransitRouteTableId"] = request.transitRouteTableId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyTransitRouteTableAggregation",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyTransitRouteTableAggregationResponse>(await this.callApi(params, req, runtime), new $_model.ModifyTransitRouteTableAggregationResponse({}));
  }

  /**
   * Edit an aggregate route.
   * 
   * @param request - ModifyTransitRouteTableAggregationRequest
   * @returns ModifyTransitRouteTableAggregationResponse
   */
  async modifyTransitRouteTableAggregation(request: $_model.ModifyTransitRouteTableAggregationRequest): Promise<$_model.ModifyTransitRouteTableAggregationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyTransitRouteTableAggregationWithOptions(request, runtime);
  }

  /**
   * Modifies the CIDR block of a transit router.
   * 
   * @remarks
   *   Before you modify the CIDR block of a transit router, we recommend that you read the [limits on transit router CIDR blocks](https://help.aliyun.com/document_detail/462635.html).
   * *   If IP addresses within the CIDR block have been allocated to network instances, you cannot modify the CIDR block.
   * *   When you call **ModifyTransitRouterCidr**, if no parameter of the **PublishCidrRoute** operation is modified, ModifyTransitRouterCidr is a synchronous operation. After you call the operation, the new settings are immediately applied.
   * *   If a parameter of the **PublishCidrRoute** operation is modified, **ModifyTransitRouterCidr** is an asynchronous operation. After you call the operation, the request ID (**RequestId**) is returned but the operation is still being performed in the system background. You can call **ListTransitRouterCidr** to query the status of the CIDR block of the transit router.
   *     *   If the CIDR block of the transit router remains unchanged, the CIDR block is still being modified.
   *     *   If the CIDR block of the transit router is changed to the one that you specify in the request, the CIDR block has been modified.
   * 
   * @param request - ModifyTransitRouterCidrRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyTransitRouterCidrResponse
   */
  async modifyTransitRouterCidrWithOptions(request: $_model.ModifyTransitRouterCidrRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyTransitRouterCidrResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cidr)) {
      query["Cidr"] = request.cidr;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
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

    if (!$dara.isNull(request.publishCidrRoute)) {
      query["PublishCidrRoute"] = request.publishCidrRoute;
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

    if (!$dara.isNull(request.transitRouterCidrId)) {
      query["TransitRouterCidrId"] = request.transitRouterCidrId;
    }

    if (!$dara.isNull(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyTransitRouterCidr",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyTransitRouterCidrResponse>(await this.callApi(params, req, runtime), new $_model.ModifyTransitRouterCidrResponse({}));
  }

  /**
   * Modifies the CIDR block of a transit router.
   * 
   * @remarks
   *   Before you modify the CIDR block of a transit router, we recommend that you read the [limits on transit router CIDR blocks](https://help.aliyun.com/document_detail/462635.html).
   * *   If IP addresses within the CIDR block have been allocated to network instances, you cannot modify the CIDR block.
   * *   When you call **ModifyTransitRouterCidr**, if no parameter of the **PublishCidrRoute** operation is modified, ModifyTransitRouterCidr is a synchronous operation. After you call the operation, the new settings are immediately applied.
   * *   If a parameter of the **PublishCidrRoute** operation is modified, **ModifyTransitRouterCidr** is an asynchronous operation. After you call the operation, the request ID (**RequestId**) is returned but the operation is still being performed in the system background. You can call **ListTransitRouterCidr** to query the status of the CIDR block of the transit router.
   *     *   If the CIDR block of the transit router remains unchanged, the CIDR block is still being modified.
   *     *   If the CIDR block of the transit router is changed to the one that you specify in the request, the CIDR block has been modified.
   * 
   * @param request - ModifyTransitRouterCidrRequest
   * @returns ModifyTransitRouterCidrResponse
   */
  async modifyTransitRouterCidr(request: $_model.ModifyTransitRouterCidrRequest): Promise<$_model.ModifyTransitRouterCidrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyTransitRouterCidrWithOptions(request, runtime);
  }

  /**
   * You can call the ModifyTransitRouterMulticastDomain operation to modify the name, description, and feature options of a multicast domain.
   * 
   * @param request - ModifyTransitRouterMulticastDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyTransitRouterMulticastDomainResponse
   */
  async modifyTransitRouterMulticastDomainWithOptions(request: $_model.ModifyTransitRouterMulticastDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyTransitRouterMulticastDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.options)) {
      query["Options"] = request.options;
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

    if (!$dara.isNull(request.transitRouterMulticastDomainDescription)) {
      query["TransitRouterMulticastDomainDescription"] = request.transitRouterMulticastDomainDescription;
    }

    if (!$dara.isNull(request.transitRouterMulticastDomainId)) {
      query["TransitRouterMulticastDomainId"] = request.transitRouterMulticastDomainId;
    }

    if (!$dara.isNull(request.transitRouterMulticastDomainName)) {
      query["TransitRouterMulticastDomainName"] = request.transitRouterMulticastDomainName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyTransitRouterMulticastDomain",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyTransitRouterMulticastDomainResponse>(await this.callApi(params, req, runtime), new $_model.ModifyTransitRouterMulticastDomainResponse({}));
  }

  /**
   * You can call the ModifyTransitRouterMulticastDomain operation to modify the name, description, and feature options of a multicast domain.
   * 
   * @param request - ModifyTransitRouterMulticastDomainRequest
   * @returns ModifyTransitRouterMulticastDomainResponse
   */
  async modifyTransitRouterMulticastDomain(request: $_model.ModifyTransitRouterMulticastDomainRequest): Promise<$_model.ModifyTransitRouterMulticastDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyTransitRouterMulticastDomainWithOptions(request, runtime);
  }

  /**
   * Moves a Cloud Enterprise Network (CEN) instance or a bandwidth plan to another resource group.
   * 
   * @remarks
   * By default, CEN instances and bandwidth plans are in the default resource group. You can call the `MoveResourceGroup` operation to move CEN instances or bandwidth plans to another resource group.
   * 
   * @param request - MoveResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveResourceGroupResponse
   */
  async moveResourceGroupWithOptions(request: $_model.MoveResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MoveResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.newResourceGroupId)) {
      query["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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
      version: "2017-09-12",
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
   * Moves a Cloud Enterprise Network (CEN) instance or a bandwidth plan to another resource group.
   * 
   * @remarks
   * By default, CEN instances and bandwidth plans are in the default resource group. You can call the `MoveResourceGroup` operation to move CEN instances or bandwidth plans to another resource group.
   * 
   * @param request - MoveResourceGroupRequest
   * @returns MoveResourceGroupResponse
   */
  async moveResourceGroup(request: $_model.MoveResourceGroupRequest): Promise<$_model.MoveResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.moveResourceGroupWithOptions(request, runtime);
  }

  /**
   * Activates the transit router feature.
   * 
   * @remarks
   * You can call the `OpenTransitRouterService` operation to activate the transit router feature free of charge. After the `OpenTransitRouterService` operation succeeds, an order is automatically generated. You can use the returned order ID to query the order information in [Alibaba Cloud User Center](https://usercenter2-intl.aliyun.com/billing/#/account/overview).
   * 
   * @param request - OpenTransitRouterServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenTransitRouterServiceResponse
   */
  async openTransitRouterServiceWithOptions(request: $_model.OpenTransitRouterServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OpenTransitRouterServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
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
      action: "OpenTransitRouterService",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OpenTransitRouterServiceResponse>(await this.callApi(params, req, runtime), new $_model.OpenTransitRouterServiceResponse({}));
  }

  /**
   * Activates the transit router feature.
   * 
   * @remarks
   * You can call the `OpenTransitRouterService` operation to activate the transit router feature free of charge. After the `OpenTransitRouterService` operation succeeds, an order is automatically generated. You can use the returned order ID to query the order information in [Alibaba Cloud User Center](https://usercenter2-intl.aliyun.com/billing/#/account/overview).
   * 
   * @param request - OpenTransitRouterServiceRequest
   * @returns OpenTransitRouterServiceResponse
   */
  async openTransitRouterService(request: $_model.OpenTransitRouterServiceRequest): Promise<$_model.OpenTransitRouterServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.openTransitRouterServiceWithOptions(request, runtime);
  }

  /**
   * Cloud Enterprise Network (CEN) supports route advertisement. You can call this operation to advertise routes of virtual private clouds (VPCs) or virtual border routers (VBRs) attached to a CEN instance to the CEN instance. Other network instances attached to the CEN instance can learn the routes if route conflicts do not exist.
   * 
   * @remarks
   * The following table describes whether routes of different types are advertised to CEN by default. You can call the PublishRouteEntries operation to advertise routes to CEN.
   * |Route|Network instance|Advertised to CEN by default|
   * |---|---|---|
   * |Routes that route network traffic to Elastic Compute Service (ECS) instances|VPC|No|
   * |Routes that route network traffic to VPN gateways|VPC|No|
   * |Routes that route network traffic to high-availability virtual IP addresses (HAVIPs)|VPC|No|
   * |Routes that route network traffic to router interfaces|VPC|No|
   * |Routes that route network traffic to elastic network interfaces (ENIs)|VPC|No|
   * |Routes that route network traffic to IPv6 gateways|VPC|No|
   * |Routes that route network traffic to NAT gateways|VPC|No|
   * |System routes of VPCs|VPC|Yes|
   * |Routes that route network traffic to data centers|VBR|Yes|
   * |Border Gateway Protocol (BGP) routes|VBR|Yes|
   * 
   * @param request - PublishRouteEntriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishRouteEntriesResponse
   */
  async publishRouteEntriesWithOptions(request: $_model.PublishRouteEntriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PublishRouteEntriesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.childInstanceId)) {
      query["ChildInstanceId"] = request.childInstanceId;
    }

    if (!$dara.isNull(request.childInstanceRegionId)) {
      query["ChildInstanceRegionId"] = request.childInstanceRegionId;
    }

    if (!$dara.isNull(request.childInstanceRouteTableId)) {
      query["ChildInstanceRouteTableId"] = request.childInstanceRouteTableId;
    }

    if (!$dara.isNull(request.childInstanceType)) {
      query["ChildInstanceType"] = request.childInstanceType;
    }

    if (!$dara.isNull(request.destinationCidrBlock)) {
      query["DestinationCidrBlock"] = request.destinationCidrBlock;
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
      action: "PublishRouteEntries",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PublishRouteEntriesResponse>(await this.callApi(params, req, runtime), new $_model.PublishRouteEntriesResponse({}));
  }

  /**
   * Cloud Enterprise Network (CEN) supports route advertisement. You can call this operation to advertise routes of virtual private clouds (VPCs) or virtual border routers (VBRs) attached to a CEN instance to the CEN instance. Other network instances attached to the CEN instance can learn the routes if route conflicts do not exist.
   * 
   * @remarks
   * The following table describes whether routes of different types are advertised to CEN by default. You can call the PublishRouteEntries operation to advertise routes to CEN.
   * |Route|Network instance|Advertised to CEN by default|
   * |---|---|---|
   * |Routes that route network traffic to Elastic Compute Service (ECS) instances|VPC|No|
   * |Routes that route network traffic to VPN gateways|VPC|No|
   * |Routes that route network traffic to high-availability virtual IP addresses (HAVIPs)|VPC|No|
   * |Routes that route network traffic to router interfaces|VPC|No|
   * |Routes that route network traffic to elastic network interfaces (ENIs)|VPC|No|
   * |Routes that route network traffic to IPv6 gateways|VPC|No|
   * |Routes that route network traffic to NAT gateways|VPC|No|
   * |System routes of VPCs|VPC|Yes|
   * |Routes that route network traffic to data centers|VBR|Yes|
   * |Border Gateway Protocol (BGP) routes|VBR|Yes|
   * 
   * @param request - PublishRouteEntriesRequest
   * @returns PublishRouteEntriesResponse
   */
  async publishRouteEntries(request: $_model.PublishRouteEntriesRequest): Promise<$_model.PublishRouteEntriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.publishRouteEntriesWithOptions(request, runtime);
  }

  /**
   * Re-advertises an aggregate route.
   * 
   * @param request - RefreshTransitRouteTableAggregationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefreshTransitRouteTableAggregationResponse
   */
  async refreshTransitRouteTableAggregationWithOptions(request: $_model.RefreshTransitRouteTableAggregationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RefreshTransitRouteTableAggregationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
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

    if (!$dara.isNull(request.transitRouteTableAggregationCidr)) {
      query["TransitRouteTableAggregationCidr"] = request.transitRouteTableAggregationCidr;
    }

    if (!$dara.isNull(request.transitRouteTableId)) {
      query["TransitRouteTableId"] = request.transitRouteTableId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RefreshTransitRouteTableAggregation",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RefreshTransitRouteTableAggregationResponse>(await this.callApi(params, req, runtime), new $_model.RefreshTransitRouteTableAggregationResponse({}));
  }

  /**
   * Re-advertises an aggregate route.
   * 
   * @param request - RefreshTransitRouteTableAggregationRequest
   * @returns RefreshTransitRouteTableAggregationResponse
   */
  async refreshTransitRouteTableAggregation(request: $_model.RefreshTransitRouteTableAggregationRequest): Promise<$_model.RefreshTransitRouteTableAggregationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.refreshTransitRouteTableAggregationWithOptions(request, runtime);
  }

  /**
   * Creates or adds a multicast member.
   * 
   * @remarks
   * Enterprise Edition transit routers support only elastic network interfaces (ENIs) as multicast members. You can call the `RegisterTransitRouterMulticastGroupMembers` operation to specify an ENI in the current region or a different region as a multicast member.
   * *   If you specify a value for the **NetworkInterfaceIds** parameter, an ENI in the current region is to be specified as a multicast member. Make sure that the ENI and vSwitch are associated with the multicast group. For more information, see [AssociateTransitRouterMulticastDomain](https://help.aliyun.com/document_detail/429778.html).
   * *   If you specify a value for the **PeerTransitRouterMulticastDomains**, a multicast member in a multicast group that belongs to another region but has the same IP address as the current multicast group is to be specified as a multicast member for the current multicast group. Make sure that an inter-region connection is established between the regions. For more information, see [CreateTransitRouterPeerAttachment](https://help.aliyun.com/document_detail/261363.html).
   *     For example, you created Multicast Group 1 in Multicast Domain 1, which is in the China (Hangzhou) region. You created Multicast Group 2 in Multicast Domain 2, which is in the China (Shanghai) region. Multicast Group 1 and Multicast Group 2 use the same multicast IP address, and Multicast Member 2 is in Multicast Group 2 in the China (Shanghai) region. If you call the `RegisterTransitRouterMulticastGroupMembers` operation to add multicast members to Multicast Group 1 in the China (Hangzhou) region and set **PeerTransitRouterMulticastDomains** to the ID of Multicast Group 2, which is in the China (Shanghai) region, Multicast Member 2, which is in Multicast Domain 2 in the China (Shanghai) region is added to Multicast Group 1 in the China (Hangzhou) region.
   * *   `RegisterTransitRouterMulticastGroupMembers` is an asynchronous operation. After a request is sent, the system returns a **request ID** and runs the task in the background. You can call the `ListTransitRouterMulticastGroups` operation to query the status of a multicast member.
   *     *   If the multicast member is in the **Registering**, the multicast member is being created. In this case, you can query the multicast member but cannot perform other operations on the multicast member.
   *     *   If the multicast member is in the **Registered** state, the multicast member is created.
   * 
   * @param request - RegisterTransitRouterMulticastGroupMembersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RegisterTransitRouterMulticastGroupMembersResponse
   */
  async registerTransitRouterMulticastGroupMembersWithOptions(request: $_model.RegisterTransitRouterMulticastGroupMembersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RegisterTransitRouterMulticastGroupMembersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.groupIpAddress)) {
      query["GroupIpAddress"] = request.groupIpAddress;
    }

    if (!$dara.isNull(request.networkInterfaceIds)) {
      query["NetworkInterfaceIds"] = request.networkInterfaceIds;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.peerTransitRouterMulticastDomains)) {
      query["PeerTransitRouterMulticastDomains"] = request.peerTransitRouterMulticastDomains;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.transitRouterMulticastDomainId)) {
      query["TransitRouterMulticastDomainId"] = request.transitRouterMulticastDomainId;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RegisterTransitRouterMulticastGroupMembers",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RegisterTransitRouterMulticastGroupMembersResponse>(await this.callApi(params, req, runtime), new $_model.RegisterTransitRouterMulticastGroupMembersResponse({}));
  }

  /**
   * Creates or adds a multicast member.
   * 
   * @remarks
   * Enterprise Edition transit routers support only elastic network interfaces (ENIs) as multicast members. You can call the `RegisterTransitRouterMulticastGroupMembers` operation to specify an ENI in the current region or a different region as a multicast member.
   * *   If you specify a value for the **NetworkInterfaceIds** parameter, an ENI in the current region is to be specified as a multicast member. Make sure that the ENI and vSwitch are associated with the multicast group. For more information, see [AssociateTransitRouterMulticastDomain](https://help.aliyun.com/document_detail/429778.html).
   * *   If you specify a value for the **PeerTransitRouterMulticastDomains**, a multicast member in a multicast group that belongs to another region but has the same IP address as the current multicast group is to be specified as a multicast member for the current multicast group. Make sure that an inter-region connection is established between the regions. For more information, see [CreateTransitRouterPeerAttachment](https://help.aliyun.com/document_detail/261363.html).
   *     For example, you created Multicast Group 1 in Multicast Domain 1, which is in the China (Hangzhou) region. You created Multicast Group 2 in Multicast Domain 2, which is in the China (Shanghai) region. Multicast Group 1 and Multicast Group 2 use the same multicast IP address, and Multicast Member 2 is in Multicast Group 2 in the China (Shanghai) region. If you call the `RegisterTransitRouterMulticastGroupMembers` operation to add multicast members to Multicast Group 1 in the China (Hangzhou) region and set **PeerTransitRouterMulticastDomains** to the ID of Multicast Group 2, which is in the China (Shanghai) region, Multicast Member 2, which is in Multicast Domain 2 in the China (Shanghai) region is added to Multicast Group 1 in the China (Hangzhou) region.
   * *   `RegisterTransitRouterMulticastGroupMembers` is an asynchronous operation. After a request is sent, the system returns a **request ID** and runs the task in the background. You can call the `ListTransitRouterMulticastGroups` operation to query the status of a multicast member.
   *     *   If the multicast member is in the **Registering**, the multicast member is being created. In this case, you can query the multicast member but cannot perform other operations on the multicast member.
   *     *   If the multicast member is in the **Registered** state, the multicast member is created.
   * 
   * @param request - RegisterTransitRouterMulticastGroupMembersRequest
   * @returns RegisterTransitRouterMulticastGroupMembersResponse
   */
  async registerTransitRouterMulticastGroupMembers(request: $_model.RegisterTransitRouterMulticastGroupMembersRequest): Promise<$_model.RegisterTransitRouterMulticastGroupMembersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.registerTransitRouterMulticastGroupMembersWithOptions(request, runtime);
  }

  /**
   * Creates a multicast source for a one-to-many multicast network.
   * 
   * @remarks
   *   You can specify only elastic network interfaces (ENIs) as multicast sources.
   * *   `RegisterTransitRouterMulticastGroupSources` is an asynchronous operation. After a request is sent, the system returns a **request ID** and runs the task in the background. You can call the `ListTransitRouterMulticastGroups` operation to query the status of a multicast source.
   *     *   If a multicast source is in the **Registering** state, the multicast source is being created. You can query the multicast source but cannot perform other operations on the multicast source.
   *     *   If a multicast source is in the **Registered** state, the multicast source is created.
   * ### Prerequisite
   * Before you call `RegisterTransitRouterMulticastGroupSources`, make sure that the vSwitch on which the ENI is created is associated with the multicast domain. For more information, see [AssociateTransitRouterMulticastDomain](https://help.aliyun.com/document_detail/429778.html).
   * 
   * @param request - RegisterTransitRouterMulticastGroupSourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RegisterTransitRouterMulticastGroupSourcesResponse
   */
  async registerTransitRouterMulticastGroupSourcesWithOptions(request: $_model.RegisterTransitRouterMulticastGroupSourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RegisterTransitRouterMulticastGroupSourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.groupIpAddress)) {
      query["GroupIpAddress"] = request.groupIpAddress;
    }

    if (!$dara.isNull(request.networkInterfaceIds)) {
      query["NetworkInterfaceIds"] = request.networkInterfaceIds;
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

    if (!$dara.isNull(request.transitRouterMulticastDomainId)) {
      query["TransitRouterMulticastDomainId"] = request.transitRouterMulticastDomainId;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RegisterTransitRouterMulticastGroupSources",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RegisterTransitRouterMulticastGroupSourcesResponse>(await this.callApi(params, req, runtime), new $_model.RegisterTransitRouterMulticastGroupSourcesResponse({}));
  }

  /**
   * Creates a multicast source for a one-to-many multicast network.
   * 
   * @remarks
   *   You can specify only elastic network interfaces (ENIs) as multicast sources.
   * *   `RegisterTransitRouterMulticastGroupSources` is an asynchronous operation. After a request is sent, the system returns a **request ID** and runs the task in the background. You can call the `ListTransitRouterMulticastGroups` operation to query the status of a multicast source.
   *     *   If a multicast source is in the **Registering** state, the multicast source is being created. You can query the multicast source but cannot perform other operations on the multicast source.
   *     *   If a multicast source is in the **Registered** state, the multicast source is created.
   * ### Prerequisite
   * Before you call `RegisterTransitRouterMulticastGroupSources`, make sure that the vSwitch on which the ENI is created is associated with the multicast domain. For more information, see [AssociateTransitRouterMulticastDomain](https://help.aliyun.com/document_detail/429778.html).
   * 
   * @param request - RegisterTransitRouterMulticastGroupSourcesRequest
   * @returns RegisterTransitRouterMulticastGroupSourcesResponse
   */
  async registerTransitRouterMulticastGroupSources(request: $_model.RegisterTransitRouterMulticastGroupSourcesRequest): Promise<$_model.RegisterTransitRouterMulticastGroupSourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.registerTransitRouterMulticastGroupSourcesWithOptions(request, runtime);
  }

  /**
   * Deletes specified traffic classification rules from a traffic marking policy.
   * 
   * @remarks
   *   When you call **RemoveTrafficMatchRuleFromTrafficMarkingPolicy**, take note of the following rules:
   *     *   If you specify the ID of a traffic classification rule in the **TrafficMarkRuleIds** parameter, the specified traffic classification rule is deleted.
   *     *   If you do not specify a traffic classification rule ID in the **TrafficMarkRuleIds** parameter, no operation is performed after you call this operation.
   *     If you want to delete a traffic classification rule, you must specify the rule ID before you call this operation.
   * *   **RemoveTrafficMatchRuleFromTrafficMarkingPolicy** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **ListTrafficMarkingPolicies** operation to query the status of a traffic classification rule.
   *     *   If a traffic classification rule is in the **Deleting** state, the traffic classification rule is being deleted. In this case, you can query the traffic classification rule but cannot perform other operations.
   *     *   If a traffic classification rule cannot be found, the traffic classification rule is deleted.
   * 
   * @param request - RemoveTrafficMatchRuleFromTrafficMarkingPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveTrafficMatchRuleFromTrafficMarkingPolicyResponse
   */
  async removeTrafficMatchRuleFromTrafficMarkingPolicyWithOptions(request: $_model.RemoveTrafficMatchRuleFromTrafficMarkingPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveTrafficMatchRuleFromTrafficMarkingPolicyResponse> {
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.trafficMarkRuleIds)) {
      query["TrafficMarkRuleIds"] = request.trafficMarkRuleIds;
    }

    if (!$dara.isNull(request.trafficMarkingPolicyId)) {
      query["TrafficMarkingPolicyId"] = request.trafficMarkingPolicyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveTrafficMatchRuleFromTrafficMarkingPolicy",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveTrafficMatchRuleFromTrafficMarkingPolicyResponse>(await this.callApi(params, req, runtime), new $_model.RemoveTrafficMatchRuleFromTrafficMarkingPolicyResponse({}));
  }

  /**
   * Deletes specified traffic classification rules from a traffic marking policy.
   * 
   * @remarks
   *   When you call **RemoveTrafficMatchRuleFromTrafficMarkingPolicy**, take note of the following rules:
   *     *   If you specify the ID of a traffic classification rule in the **TrafficMarkRuleIds** parameter, the specified traffic classification rule is deleted.
   *     *   If you do not specify a traffic classification rule ID in the **TrafficMarkRuleIds** parameter, no operation is performed after you call this operation.
   *     If you want to delete a traffic classification rule, you must specify the rule ID before you call this operation.
   * *   **RemoveTrafficMatchRuleFromTrafficMarkingPolicy** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **ListTrafficMarkingPolicies** operation to query the status of a traffic classification rule.
   *     *   If a traffic classification rule is in the **Deleting** state, the traffic classification rule is being deleted. In this case, you can query the traffic classification rule but cannot perform other operations.
   *     *   If a traffic classification rule cannot be found, the traffic classification rule is deleted.
   * 
   * @param request - RemoveTrafficMatchRuleFromTrafficMarkingPolicyRequest
   * @returns RemoveTrafficMatchRuleFromTrafficMarkingPolicyResponse
   */
  async removeTrafficMatchRuleFromTrafficMarkingPolicy(request: $_model.RemoveTrafficMatchRuleFromTrafficMarkingPolicyRequest): Promise<$_model.RemoveTrafficMatchRuleFromTrafficMarkingPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeTrafficMatchRuleFromTrafficMarkingPolicyWithOptions(request, runtime);
  }

  /**
   * Removes a traffic classification rule from a traffic marking policy.
   * 
   * @remarks
   * ### [](#)Precautions
   * The **RemoveTraficMatchRuleFromTrafficMarkingPolicy** operation is deprecated and will be discontinued soon. To delete a traffic classification rule, call the [RemoveTrafficMatchRuleFromTrafficMarkingPolicy](https://help.aliyun.com/document_detail/452726.html) operation. Maintenance on this document has stopped.
   * 
   * @deprecated OpenAPI RemoveTraficMatchRuleFromTrafficMarkingPolicy is deprecated, please use Cbn::2017-09-12::RemoveTrafficMatchRuleFromTrafficMarkingPolicy instead.
   * 
   * @param request - RemoveTraficMatchRuleFromTrafficMarkingPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveTraficMatchRuleFromTrafficMarkingPolicyResponse
   */
  // Deprecated
  async removeTraficMatchRuleFromTrafficMarkingPolicyWithOptions(request: $_model.RemoveTraficMatchRuleFromTrafficMarkingPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveTraficMatchRuleFromTrafficMarkingPolicyResponse> {
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.trafficMarkRuleIds)) {
      query["TrafficMarkRuleIds"] = request.trafficMarkRuleIds;
    }

    if (!$dara.isNull(request.trafficMarkingPolicyId)) {
      query["TrafficMarkingPolicyId"] = request.trafficMarkingPolicyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveTraficMatchRuleFromTrafficMarkingPolicy",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveTraficMatchRuleFromTrafficMarkingPolicyResponse>(await this.callApi(params, req, runtime), new $_model.RemoveTraficMatchRuleFromTrafficMarkingPolicyResponse({}));
  }

  /**
   * Removes a traffic classification rule from a traffic marking policy.
   * 
   * @remarks
   * ### [](#)Precautions
   * The **RemoveTraficMatchRuleFromTrafficMarkingPolicy** operation is deprecated and will be discontinued soon. To delete a traffic classification rule, call the [RemoveTrafficMatchRuleFromTrafficMarkingPolicy](https://help.aliyun.com/document_detail/452726.html) operation. Maintenance on this document has stopped.
   * 
   * @deprecated OpenAPI RemoveTraficMatchRuleFromTrafficMarkingPolicy is deprecated, please use Cbn::2017-09-12::RemoveTrafficMatchRuleFromTrafficMarkingPolicy instead.
   * 
   * @param request - RemoveTraficMatchRuleFromTrafficMarkingPolicyRequest
   * @returns RemoveTraficMatchRuleFromTrafficMarkingPolicyResponse
   */
  // Deprecated
  async removeTraficMatchRuleFromTrafficMarkingPolicy(request: $_model.RemoveTraficMatchRuleFromTrafficMarkingPolicyRequest): Promise<$_model.RemoveTraficMatchRuleFromTrafficMarkingPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeTraficMatchRuleFromTrafficMarkingPolicyWithOptions(request, runtime);
  }

  /**
   * Associates a network instance connection with another route table of a transit router.
   * 
   * @param request - ReplaceTransitRouterRouteTableAssociationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReplaceTransitRouterRouteTableAssociationResponse
   */
  async replaceTransitRouterRouteTableAssociationWithOptions(request: $_model.ReplaceTransitRouterRouteTableAssociationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReplaceTransitRouterRouteTableAssociationResponse> {
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    if (!$dara.isNull(request.transitRouterRouteTableId)) {
      query["TransitRouterRouteTableId"] = request.transitRouterRouteTableId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReplaceTransitRouterRouteTableAssociation",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReplaceTransitRouterRouteTableAssociationResponse>(await this.callApi(params, req, runtime), new $_model.ReplaceTransitRouterRouteTableAssociationResponse({}));
  }

  /**
   * Associates a network instance connection with another route table of a transit router.
   * 
   * @param request - ReplaceTransitRouterRouteTableAssociationRequest
   * @returns ReplaceTransitRouterRouteTableAssociationResponse
   */
  async replaceTransitRouterRouteTableAssociation(request: $_model.ReplaceTransitRouterRouteTableAssociationRequest): Promise<$_model.ReplaceTransitRouterRouteTableAssociationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.replaceTransitRouterRouteTableAssociationWithOptions(request, runtime);
  }

  /**
   * Connects an on-premises network to a cloud service.
   * 
   * @remarks
   * Cloud services refer to Alibaba Cloud services that use the 100.64.0.0/10 CIDR block to provide services. These cloud services include Object Storage Service (OSS), Simple Log Service (SLS), and Data Transmission Service (DTS). If your on-premises network needs to access a cloud service, you must attach the virtual border router (VBR) or Cloud Connect Network (CCN) instance that is connected to your on-premises network to a Cloud Enterprise Network (CEN) instance. In addition, you must attach a virtual private cloud (VPC) that is deployed in the same region as the cloud service to the CEN instance. This way, your on-premises network can connect to the VPC that is deployed in the same region as the cloud service and access the cloud service through the VPC.
   * *   This operation is supported only by Basic Edition transit routers. An on-premises network associated with a VBR can use CEN to access only a cloud service that is deployed in the same region.
   *     For example, if cloud services are deployed in the China (Beijing) region, only on-premises networks connected to VBRs in the China (Beijing) region can access the cloud services.
   * *   **ResolveAndRouteServiceInCen** is an asynchronous operation. After a request is sent, the system returns a **request ID** and runs the task in the background. You can call **DescribeRouteServicesInCen** to query the status of a cloud service.
   *     *   If the cloud service is in the **Creating** state, the connection to the cloud service is being created. In this case, you can query the cloud service but cannot perform other operations.
   *     *   If the cloud service is in the **Active** state, the connection to the cloud service is created.
   *     *   If the cloud service is in the **Failed** state, the connection to the cloud service failed.
   * ### [](#)Prerequisites
   * Before you call this operation, make sure that the following conditions are met:
   * *   The VBR or CCN instance to which your on-premises network is connected is attached to a CEN instance.
   * *   A VPC that is deployed in the same region as the cloud service is attached to the CEN instance. For more information, see [AttachCenChildInstance](https://help.aliyun.com/document_detail/65902.html).
   * 
   * @param request - ResolveAndRouteServiceInCenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResolveAndRouteServiceInCenResponse
   */
  async resolveAndRouteServiceInCenWithOptions(request: $_model.ResolveAndRouteServiceInCenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResolveAndRouteServiceInCenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessRegionIds)) {
      query["AccessRegionIds"] = request.accessRegionIds;
    }

    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.host)) {
      query["Host"] = request.host;
    }

    if (!$dara.isNull(request.hostRegionId)) {
      query["HostRegionId"] = request.hostRegionId;
    }

    if (!$dara.isNull(request.hostVpcId)) {
      query["HostVpcId"] = request.hostVpcId;
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
      action: "ResolveAndRouteServiceInCen",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResolveAndRouteServiceInCenResponse>(await this.callApi(params, req, runtime), new $_model.ResolveAndRouteServiceInCenResponse({}));
  }

  /**
   * Connects an on-premises network to a cloud service.
   * 
   * @remarks
   * Cloud services refer to Alibaba Cloud services that use the 100.64.0.0/10 CIDR block to provide services. These cloud services include Object Storage Service (OSS), Simple Log Service (SLS), and Data Transmission Service (DTS). If your on-premises network needs to access a cloud service, you must attach the virtual border router (VBR) or Cloud Connect Network (CCN) instance that is connected to your on-premises network to a Cloud Enterprise Network (CEN) instance. In addition, you must attach a virtual private cloud (VPC) that is deployed in the same region as the cloud service to the CEN instance. This way, your on-premises network can connect to the VPC that is deployed in the same region as the cloud service and access the cloud service through the VPC.
   * *   This operation is supported only by Basic Edition transit routers. An on-premises network associated with a VBR can use CEN to access only a cloud service that is deployed in the same region.
   *     For example, if cloud services are deployed in the China (Beijing) region, only on-premises networks connected to VBRs in the China (Beijing) region can access the cloud services.
   * *   **ResolveAndRouteServiceInCen** is an asynchronous operation. After a request is sent, the system returns a **request ID** and runs the task in the background. You can call **DescribeRouteServicesInCen** to query the status of a cloud service.
   *     *   If the cloud service is in the **Creating** state, the connection to the cloud service is being created. In this case, you can query the cloud service but cannot perform other operations.
   *     *   If the cloud service is in the **Active** state, the connection to the cloud service is created.
   *     *   If the cloud service is in the **Failed** state, the connection to the cloud service failed.
   * ### [](#)Prerequisites
   * Before you call this operation, make sure that the following conditions are met:
   * *   The VBR or CCN instance to which your on-premises network is connected is attached to a CEN instance.
   * *   A VPC that is deployed in the same region as the cloud service is attached to the CEN instance. For more information, see [AttachCenChildInstance](https://help.aliyun.com/document_detail/65902.html).
   * 
   * @param request - ResolveAndRouteServiceInCenRequest
   * @returns ResolveAndRouteServiceInCenResponse
   */
  async resolveAndRouteServiceInCen(request: $_model.ResolveAndRouteServiceInCenRequest): Promise<$_model.ResolveAndRouteServiceInCenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resolveAndRouteServiceInCenWithOptions(request, runtime);
  }

  /**
   * Revokes the permissions that a transit router has on network instances that belong to another Alibaba Cloud account.
   * 
   * @remarks
   * `RevokeInstanceFromTransitRouter` can be used to revoke permissions on virtual private clouds (VPCs), virtual border routers (VBRs), IPsec-VPN connections, and Express Connect Router (ECRs) that belong to another Alibaba Cloud account.
   * To revoke permissions on Cloud Connect Network (CCN) instances that belong to another Alibaba Cloud account, call the [RevokeInstanceFromCbn](https://help.aliyun.com/document_detail/126142.html) operation.
   * ### [](#)Prerequisites
   * Before you call `RevokeInstanceFromTransitRouter`, you must detach the network instances from the transit router.
   * *   For more information about how to detach VPCs from Enterprise Edition transit routers, see [DeleteTransitRouterVpcAttachment](https://help.aliyun.com/document_detail/261220.html).
   * *   For more information about how to detach VBRs from Enterprise Edition transit routers, see [DeleteTransitRouterVbrAttachment](https://help.aliyun.com/document_detail/261223.html).
   * *   For more information about how to detach IPsec-VPN connections from Enterprise Edition transit routers, see [DeleteTransitRouterVpnAttachment](https://help.aliyun.com/document_detail/443992.html).
   * *   For more information about how to detach ECRs from Enterprise Edition transit routers, see [DeleteTransitRouterEcrAttachment](https://help.aliyun.com/document_detail/443992.html).
   * *   For more information about how to detach network instances from Basic Edition transit routers, see [DetachCenChildInstance](https://help.aliyun.com/document_detail/65915.html).
   * 
   * @param request - RevokeInstanceFromTransitRouterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeInstanceFromTransitRouterResponse
   */
  async revokeInstanceFromTransitRouterWithOptions(request: $_model.RevokeInstanceFromTransitRouterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeInstanceFromTransitRouterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.cenOwnerId)) {
      query["CenOwnerId"] = request.cenOwnerId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
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
      action: "RevokeInstanceFromTransitRouter",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokeInstanceFromTransitRouterResponse>(await this.callApi(params, req, runtime), new $_model.RevokeInstanceFromTransitRouterResponse({}));
  }

  /**
   * Revokes the permissions that a transit router has on network instances that belong to another Alibaba Cloud account.
   * 
   * @remarks
   * `RevokeInstanceFromTransitRouter` can be used to revoke permissions on virtual private clouds (VPCs), virtual border routers (VBRs), IPsec-VPN connections, and Express Connect Router (ECRs) that belong to another Alibaba Cloud account.
   * To revoke permissions on Cloud Connect Network (CCN) instances that belong to another Alibaba Cloud account, call the [RevokeInstanceFromCbn](https://help.aliyun.com/document_detail/126142.html) operation.
   * ### [](#)Prerequisites
   * Before you call `RevokeInstanceFromTransitRouter`, you must detach the network instances from the transit router.
   * *   For more information about how to detach VPCs from Enterprise Edition transit routers, see [DeleteTransitRouterVpcAttachment](https://help.aliyun.com/document_detail/261220.html).
   * *   For more information about how to detach VBRs from Enterprise Edition transit routers, see [DeleteTransitRouterVbrAttachment](https://help.aliyun.com/document_detail/261223.html).
   * *   For more information about how to detach IPsec-VPN connections from Enterprise Edition transit routers, see [DeleteTransitRouterVpnAttachment](https://help.aliyun.com/document_detail/443992.html).
   * *   For more information about how to detach ECRs from Enterprise Edition transit routers, see [DeleteTransitRouterEcrAttachment](https://help.aliyun.com/document_detail/443992.html).
   * *   For more information about how to detach network instances from Basic Edition transit routers, see [DetachCenChildInstance](https://help.aliyun.com/document_detail/65915.html).
   * 
   * @param request - RevokeInstanceFromTransitRouterRequest
   * @returns RevokeInstanceFromTransitRouterResponse
   */
  async revokeInstanceFromTransitRouter(request: $_model.RevokeInstanceFromTransitRouterRequest): Promise<$_model.RevokeInstanceFromTransitRouterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revokeInstanceFromTransitRouterWithOptions(request, runtime);
  }

  /**
   * Configures PrivateZone.
   * 
   * @remarks
   * Alibaba Cloud DNS PrivateZone (PrivateZone) is an Alibaba Cloud private domain name resolution and management service based on Virtual Private Cloud (VPC). After you attach virtual border routers (VBRs) and Cloud Connect Network (CCN) instances to a Cloud Enterprise Network (CEN) instance, you can enable the on-premises networks connected to the VBRs and CCN instances to access PrivateZone through the CEN instance. 
   * #### Usage notes
   * - The on-premises networks connected to VBRs or CCN instances must be deployed in the same region as the PrivateZone service. For example, if the PrivateZone service is deployed in the China (Beijing) region, only on-premises networks connected to VBRs or CCN instances in the China (Beijing) region can access the PrivateZone service. 
   * - **RoutePrivateZoneInCenToVpc** is an asynchronous operation. After you send a request, the **request ID** is returned but the operation is still being performed in the system background. You can call **DescribeCenPrivateZoneRoutes** to query the status of PrivateZone. 
   *     - If PrivateZone is in the **Creating** state, access to PrivateZone is being configured. In this case, you can query PrivateZone configurations but cannot perform other operations. 
   *     - If PrivateZone is in the **Active** state, access to PrivateZone is enabled. 
   *     - If PrivateZone is in the **Failed** state, configurations of access to PrivateZone failed. 
   * #### Prerequisites
   * Before you call **RoutePrivateZoneInCenToVpc**, make sure that the following conditions are met:
   * - PrivateZone is deployed. For more information, see [PrivateZone quick start](https://help.aliyun.com/document_detail/64627.html).
   * - The following network instances are attached to the same CEN instance: the VPC that is associated with the PrivateZone service, and the VBR and CCN instance that want to access the PrivateZone service. For more information, see [AttachCenChildInstance](https://help.aliyun.com/document_detail/468684.html). 
   * - If your on-premises network uses a CCN instance to connect to Alibaba Cloud and the account that owns the CCN instance is different from the account that owns the VPC or CEN instance, you must grant the CCN instance required permissions. For more information, see [Grant permissions to CCN](https://help.aliyun.com/document_detail/181654.html).
   * 
   * @param request - RoutePrivateZoneInCenToVpcRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RoutePrivateZoneInCenToVpcResponse
   */
  async routePrivateZoneInCenToVpcWithOptions(request: $_model.RoutePrivateZoneInCenToVpcRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RoutePrivateZoneInCenToVpcResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessRegionId)) {
      query["AccessRegionId"] = request.accessRegionId;
    }

    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.hostRegionId)) {
      query["HostRegionId"] = request.hostRegionId;
    }

    if (!$dara.isNull(request.hostVpcId)) {
      query["HostVpcId"] = request.hostVpcId;
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
      action: "RoutePrivateZoneInCenToVpc",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RoutePrivateZoneInCenToVpcResponse>(await this.callApi(params, req, runtime), new $_model.RoutePrivateZoneInCenToVpcResponse({}));
  }

  /**
   * Configures PrivateZone.
   * 
   * @remarks
   * Alibaba Cloud DNS PrivateZone (PrivateZone) is an Alibaba Cloud private domain name resolution and management service based on Virtual Private Cloud (VPC). After you attach virtual border routers (VBRs) and Cloud Connect Network (CCN) instances to a Cloud Enterprise Network (CEN) instance, you can enable the on-premises networks connected to the VBRs and CCN instances to access PrivateZone through the CEN instance. 
   * #### Usage notes
   * - The on-premises networks connected to VBRs or CCN instances must be deployed in the same region as the PrivateZone service. For example, if the PrivateZone service is deployed in the China (Beijing) region, only on-premises networks connected to VBRs or CCN instances in the China (Beijing) region can access the PrivateZone service. 
   * - **RoutePrivateZoneInCenToVpc** is an asynchronous operation. After you send a request, the **request ID** is returned but the operation is still being performed in the system background. You can call **DescribeCenPrivateZoneRoutes** to query the status of PrivateZone. 
   *     - If PrivateZone is in the **Creating** state, access to PrivateZone is being configured. In this case, you can query PrivateZone configurations but cannot perform other operations. 
   *     - If PrivateZone is in the **Active** state, access to PrivateZone is enabled. 
   *     - If PrivateZone is in the **Failed** state, configurations of access to PrivateZone failed. 
   * #### Prerequisites
   * Before you call **RoutePrivateZoneInCenToVpc**, make sure that the following conditions are met:
   * - PrivateZone is deployed. For more information, see [PrivateZone quick start](https://help.aliyun.com/document_detail/64627.html).
   * - The following network instances are attached to the same CEN instance: the VPC that is associated with the PrivateZone service, and the VBR and CCN instance that want to access the PrivateZone service. For more information, see [AttachCenChildInstance](https://help.aliyun.com/document_detail/468684.html). 
   * - If your on-premises network uses a CCN instance to connect to Alibaba Cloud and the account that owns the CCN instance is different from the account that owns the VPC or CEN instance, you must grant the CCN instance required permissions. For more information, see [Grant permissions to CCN](https://help.aliyun.com/document_detail/181654.html).
   * 
   * @param request - RoutePrivateZoneInCenToVpcRequest
   * @returns RoutePrivateZoneInCenToVpcResponse
   */
  async routePrivateZoneInCenToVpc(request: $_model.RoutePrivateZoneInCenToVpcRequest): Promise<$_model.RoutePrivateZoneInCenToVpcResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.routePrivateZoneInCenToVpcWithOptions(request, runtime);
  }

  /**
   * Configures, modifies, or deletes the bandwidth of inter-region connections for a Basic Edition transit router.
   * 
   * @remarks
   * This operation is used to manage bandwidth of inter-region connections only for Basic Edition transit routers.
   * ### [](#)Prerequisites
   * The Cloud Enterprise Network (CEN) instance is associated with a bandwidth plan. For more information, see [CreateCenBandwidthPackage](https://help.aliyun.com/document_detail/65919.html) and [AssociateCenBandwidthPackage](https://help.aliyun.com/document_detail/65934.html).
   * You can call the **SetCenInterRegionBandwidthLimit** operation to configure, change, or remove the bandwidth limit of an inter-region connection.
   * *   If you set **BandwidthLimit** to a value other than 0, the bandwidth of the inter-region connection is set to the specified value.
   * *   If you set **BandwidthLimit** to 0, the bandwidth of the inter-region connection is no longer limited.
   * ### [](#)Limits
   * *   The bandwidth limit of an inter-region connection cannot exceed the bandwidth limit of the associated bandwidth plan.
   * *   The sum of bandwidth limits of all inter-region connections cannot exceed the bandwidth limit of the associated bandwidth plan.
   * *   If bandwidth multiplexing is enabled for an inter-region connection, you cannot change the bandwidth of the inter-region connection.
   * *   The **SetCenInterRegionBandwidthLimit** operation can be used to configure, modify, or delete the bandwidth of inter-region connections only for Basic Edition transit routers.
   *     To configure, modify, or delete the bandwidth of inter-region connections for Enterprise Edition transit routers, call the [CreateTransitRouterPeerAttachment](https://help.aliyun.com/document_detail/261363.html), [UpdateTransitRouterPeerAttachmentAttribute](https://help.aliyun.com/document_detail/261229.html), or [DeleteTransitRouterPeerAttachment](https://help.aliyun.com/document_detail/261227.html) operation.
   * 
   * @param request - SetCenInterRegionBandwidthLimitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetCenInterRegionBandwidthLimitResponse
   */
  async setCenInterRegionBandwidthLimitWithOptions(request: $_model.SetCenInterRegionBandwidthLimitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetCenInterRegionBandwidthLimitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bandwidthLimit)) {
      query["BandwidthLimit"] = request.bandwidthLimit;
    }

    if (!$dara.isNull(request.bandwidthType)) {
      query["BandwidthType"] = request.bandwidthType;
    }

    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.localRegionId)) {
      query["LocalRegionId"] = request.localRegionId;
    }

    if (!$dara.isNull(request.oppositeRegionId)) {
      query["OppositeRegionId"] = request.oppositeRegionId;
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
      action: "SetCenInterRegionBandwidthLimit",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetCenInterRegionBandwidthLimitResponse>(await this.callApi(params, req, runtime), new $_model.SetCenInterRegionBandwidthLimitResponse({}));
  }

  /**
   * Configures, modifies, or deletes the bandwidth of inter-region connections for a Basic Edition transit router.
   * 
   * @remarks
   * This operation is used to manage bandwidth of inter-region connections only for Basic Edition transit routers.
   * ### [](#)Prerequisites
   * The Cloud Enterprise Network (CEN) instance is associated with a bandwidth plan. For more information, see [CreateCenBandwidthPackage](https://help.aliyun.com/document_detail/65919.html) and [AssociateCenBandwidthPackage](https://help.aliyun.com/document_detail/65934.html).
   * You can call the **SetCenInterRegionBandwidthLimit** operation to configure, change, or remove the bandwidth limit of an inter-region connection.
   * *   If you set **BandwidthLimit** to a value other than 0, the bandwidth of the inter-region connection is set to the specified value.
   * *   If you set **BandwidthLimit** to 0, the bandwidth of the inter-region connection is no longer limited.
   * ### [](#)Limits
   * *   The bandwidth limit of an inter-region connection cannot exceed the bandwidth limit of the associated bandwidth plan.
   * *   The sum of bandwidth limits of all inter-region connections cannot exceed the bandwidth limit of the associated bandwidth plan.
   * *   If bandwidth multiplexing is enabled for an inter-region connection, you cannot change the bandwidth of the inter-region connection.
   * *   The **SetCenInterRegionBandwidthLimit** operation can be used to configure, modify, or delete the bandwidth of inter-region connections only for Basic Edition transit routers.
   *     To configure, modify, or delete the bandwidth of inter-region connections for Enterprise Edition transit routers, call the [CreateTransitRouterPeerAttachment](https://help.aliyun.com/document_detail/261363.html), [UpdateTransitRouterPeerAttachmentAttribute](https://help.aliyun.com/document_detail/261229.html), or [DeleteTransitRouterPeerAttachment](https://help.aliyun.com/document_detail/261227.html) operation.
   * 
   * @param request - SetCenInterRegionBandwidthLimitRequest
   * @returns SetCenInterRegionBandwidthLimitResponse
   */
  async setCenInterRegionBandwidthLimit(request: $_model.SetCenInterRegionBandwidthLimitRequest): Promise<$_model.SetCenInterRegionBandwidthLimitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setCenInterRegionBandwidthLimitWithOptions(request, runtime);
  }

  /**
   * Creates tags and adds them to a resource.
   * 
   * @remarks
   *   Each tag consists of a tag key and a tag value. When you add a tag, you must specify the tag key and tag value.
   * *   If you want to add multiple tags to a Cloud Enterprise Network (CEN) instance, each tag key must be unique.
   * *   You can add at most 20 tags to a CEN instance.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
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

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2017-09-12",
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
   * Creates tags and adds them to a resource.
   * 
   * @remarks
   *   Each tag consists of a tag key and a tag value. When you add a tag, you must specify the tag key and tag value.
   * *   If you want to add multiple tags to a Cloud Enterprise Network (CEN) instance, each tag key must be unique.
   * *   You can add at most 20 tags to a CEN instance.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * 进行云企业网预付费带宽包临时升配
   * 
   * @param request - TempUpgradeCenBandwidthPackageSpecRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TempUpgradeCenBandwidthPackageSpecResponse
   */
  async tempUpgradeCenBandwidthPackageSpecWithOptions(request: $_model.TempUpgradeCenBandwidthPackageSpecRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TempUpgradeCenBandwidthPackageSpecResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.cenBandwidthPackageId)) {
      query["CenBandwidthPackageId"] = request.cenBandwidthPackageId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
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
      action: "TempUpgradeCenBandwidthPackageSpec",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TempUpgradeCenBandwidthPackageSpecResponse>(await this.callApi(params, req, runtime), new $_model.TempUpgradeCenBandwidthPackageSpecResponse({}));
  }

  /**
   * 进行云企业网预付费带宽包临时升配
   * 
   * @param request - TempUpgradeCenBandwidthPackageSpecRequest
   * @returns TempUpgradeCenBandwidthPackageSpecResponse
   */
  async tempUpgradeCenBandwidthPackageSpec(request: $_model.TempUpgradeCenBandwidthPackageSpecRequest): Promise<$_model.TempUpgradeCenBandwidthPackageSpecResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tempUpgradeCenBandwidthPackageSpecWithOptions(request, runtime);
  }

  /**
   * Disassociates a Cloud Enterprise Network (CEN) from a bandwidth plan. After the disassociation, the bandwidth can be associated with another CEN instance.
   * 
   * @remarks
   * No inter-region connections are configured in the bandwidth plan. For more information about how to delete inter-region connections, see [SetCenInterRegionBandwidthLimit](https://help.aliyun.com/document_detail/65942.html).
   * 
   * @param request - UnassociateCenBandwidthPackageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnassociateCenBandwidthPackageResponse
   */
  async unassociateCenBandwidthPackageWithOptions(request: $_model.UnassociateCenBandwidthPackageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnassociateCenBandwidthPackageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cenBandwidthPackageId)) {
      query["CenBandwidthPackageId"] = request.cenBandwidthPackageId;
    }

    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
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
      action: "UnassociateCenBandwidthPackage",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnassociateCenBandwidthPackageResponse>(await this.callApi(params, req, runtime), new $_model.UnassociateCenBandwidthPackageResponse({}));
  }

  /**
   * Disassociates a Cloud Enterprise Network (CEN) from a bandwidth plan. After the disassociation, the bandwidth can be associated with another CEN instance.
   * 
   * @remarks
   * No inter-region connections are configured in the bandwidth plan. For more information about how to delete inter-region connections, see [SetCenInterRegionBandwidthLimit](https://help.aliyun.com/document_detail/65942.html).
   * 
   * @param request - UnassociateCenBandwidthPackageRequest
   * @returns UnassociateCenBandwidthPackageResponse
   */
  async unassociateCenBandwidthPackage(request: $_model.UnassociateCenBandwidthPackageRequest): Promise<$_model.UnassociateCenBandwidthPackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unassociateCenBandwidthPackageWithOptions(request, runtime);
  }

  /**
   * @param request - UnroutePrivateZoneInCenToVpcRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnroutePrivateZoneInCenToVpcResponse
   */
  async unroutePrivateZoneInCenToVpcWithOptions(request: $_model.UnroutePrivateZoneInCenToVpcRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnroutePrivateZoneInCenToVpcResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessRegionId)) {
      query["AccessRegionId"] = request.accessRegionId;
    }

    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
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
      action: "UnroutePrivateZoneInCenToVpc",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnroutePrivateZoneInCenToVpcResponse>(await this.callApi(params, req, runtime), new $_model.UnroutePrivateZoneInCenToVpcResponse({}));
  }

  /**
   * @param request - UnroutePrivateZoneInCenToVpcRequest
   * @returns UnroutePrivateZoneInCenToVpcResponse
   */
  async unroutePrivateZoneInCenToVpc(request: $_model.UnroutePrivateZoneInCenToVpcRequest): Promise<$_model.UnroutePrivateZoneInCenToVpcResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unroutePrivateZoneInCenToVpcWithOptions(request, runtime);
  }

  /**
   * The ID of the request.
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

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2017-09-12",
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
   * The ID of the request.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Modifies the name and description of a quality of service (QoS) policy.
   * 
   * @param request - UpdateCenInterRegionTrafficQosPolicyAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCenInterRegionTrafficQosPolicyAttributeResponse
   */
  async updateCenInterRegionTrafficQosPolicyAttributeWithOptions(request: $_model.UpdateCenInterRegionTrafficQosPolicyAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCenInterRegionTrafficQosPolicyAttributeResponse> {
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.trafficQosPolicyDescription)) {
      query["TrafficQosPolicyDescription"] = request.trafficQosPolicyDescription;
    }

    if (!$dara.isNull(request.trafficQosPolicyId)) {
      query["TrafficQosPolicyId"] = request.trafficQosPolicyId;
    }

    if (!$dara.isNull(request.trafficQosPolicyName)) {
      query["TrafficQosPolicyName"] = request.trafficQosPolicyName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCenInterRegionTrafficQosPolicyAttribute",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCenInterRegionTrafficQosPolicyAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCenInterRegionTrafficQosPolicyAttributeResponse({}));
  }

  /**
   * Modifies the name and description of a quality of service (QoS) policy.
   * 
   * @param request - UpdateCenInterRegionTrafficQosPolicyAttributeRequest
   * @returns UpdateCenInterRegionTrafficQosPolicyAttributeResponse
   */
  async updateCenInterRegionTrafficQosPolicyAttribute(request: $_model.UpdateCenInterRegionTrafficQosPolicyAttributeRequest): Promise<$_model.UpdateCenInterRegionTrafficQosPolicyAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCenInterRegionTrafficQosPolicyAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the name, description, inter-region bandwidth, and Differentiated Services Code Point (DSCP) value of a quality of service (QoS) queue.
   * 
   * @param request - UpdateCenInterRegionTrafficQosQueueAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCenInterRegionTrafficQosQueueAttributeResponse
   */
  async updateCenInterRegionTrafficQosQueueAttributeWithOptions(request: $_model.UpdateCenInterRegionTrafficQosQueueAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCenInterRegionTrafficQosQueueAttributeResponse> {
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

    if (!$dara.isNull(request.dscps)) {
      query["Dscps"] = request.dscps;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.qosQueueDescription)) {
      query["QosQueueDescription"] = request.qosQueueDescription;
    }

    if (!$dara.isNull(request.qosQueueId)) {
      query["QosQueueId"] = request.qosQueueId;
    }

    if (!$dara.isNull(request.qosQueueName)) {
      query["QosQueueName"] = request.qosQueueName;
    }

    if (!$dara.isNull(request.remainBandwidthPercent)) {
      query["RemainBandwidthPercent"] = request.remainBandwidthPercent;
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
      action: "UpdateCenInterRegionTrafficQosQueueAttribute",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCenInterRegionTrafficQosQueueAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCenInterRegionTrafficQosQueueAttributeResponse({}));
  }

  /**
   * Modifies the name, description, inter-region bandwidth, and Differentiated Services Code Point (DSCP) value of a quality of service (QoS) queue.
   * 
   * @param request - UpdateCenInterRegionTrafficQosQueueAttributeRequest
   * @returns UpdateCenInterRegionTrafficQosQueueAttributeResponse
   */
  async updateCenInterRegionTrafficQosQueueAttribute(request: $_model.UpdateCenInterRegionTrafficQosQueueAttributeRequest): Promise<$_model.UpdateCenInterRegionTrafficQosQueueAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCenInterRegionTrafficQosQueueAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the name, description, and traffic classification rules of a traffic marking policy.
   * 
   * @param request - UpdateTrafficMarkingPolicyAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTrafficMarkingPolicyAttributeResponse
   */
  async updateTrafficMarkingPolicyAttributeWithOptions(request: $_model.UpdateTrafficMarkingPolicyAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTrafficMarkingPolicyAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addTrafficMatchRules)) {
      query["AddTrafficMatchRules"] = request.addTrafficMatchRules;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.deleteTrafficMatchRules)) {
      query["DeleteTrafficMatchRules"] = request.deleteTrafficMatchRules;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.trafficMarkingPolicyDescription)) {
      query["TrafficMarkingPolicyDescription"] = request.trafficMarkingPolicyDescription;
    }

    if (!$dara.isNull(request.trafficMarkingPolicyId)) {
      query["TrafficMarkingPolicyId"] = request.trafficMarkingPolicyId;
    }

    if (!$dara.isNull(request.trafficMarkingPolicyName)) {
      query["TrafficMarkingPolicyName"] = request.trafficMarkingPolicyName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTrafficMarkingPolicyAttribute",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTrafficMarkingPolicyAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTrafficMarkingPolicyAttributeResponse({}));
  }

  /**
   * Modifies the name, description, and traffic classification rules of a traffic marking policy.
   * 
   * @param request - UpdateTrafficMarkingPolicyAttributeRequest
   * @returns UpdateTrafficMarkingPolicyAttributeResponse
   */
  async updateTrafficMarkingPolicyAttribute(request: $_model.UpdateTrafficMarkingPolicyAttributeRequest): Promise<$_model.UpdateTrafficMarkingPolicyAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTrafficMarkingPolicyAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the name and description of a transit router.
   * 
   * @remarks
   * *UpdateTransitRouter** is an asynchronous operation. After a request is sent, the system returns a **request ID** and runs the task in the background. You can call the **ListTransitRouters** operation to query the status of a transit router.
   * *   If a transit router is in the **Modifying** state, the configuration of the transit router is being modified. You can query the transit router but cannot perform other operations.
   * *   If a transit router is in the **Active** state, the configuration of the transit router is modified.
   * 
   * @param request - UpdateTransitRouterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTransitRouterResponse
   */
  async updateTransitRouterWithOptions(request: $_model.UpdateTransitRouterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTransitRouterResponse> {
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

    if (!$dara.isNull(request.transitRouterDescription)) {
      query["TransitRouterDescription"] = request.transitRouterDescription;
    }

    if (!$dara.isNull(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    if (!$dara.isNull(request.transitRouterName)) {
      query["TransitRouterName"] = request.transitRouterName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTransitRouter",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTransitRouterResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTransitRouterResponse({}));
  }

  /**
   * Modifies the name and description of a transit router.
   * 
   * @remarks
   * *UpdateTransitRouter** is an asynchronous operation. After a request is sent, the system returns a **request ID** and runs the task in the background. You can call the **ListTransitRouters** operation to query the status of a transit router.
   * *   If a transit router is in the **Modifying** state, the configuration of the transit router is being modified. You can query the transit router but cannot perform other operations.
   * *   If a transit router is in the **Active** state, the configuration of the transit router is modified.
   * 
   * @param request - UpdateTransitRouterRequest
   * @returns UpdateTransitRouterResponse
   */
  async updateTransitRouter(request: $_model.UpdateTransitRouterRequest): Promise<$_model.UpdateTransitRouterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTransitRouterWithOptions(request, runtime);
  }

  /**
   * Modifies the name and description of an Express Connect Router (ECR) connection on a Enterprise Edition transit router.
   * 
   * @remarks
   * UpdateTransitRouterEcrAttachmentAttribute is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the ListTransitRouterEcrAttachments operation to query the status of an ECR connection.
   * If an ECR connection is in the Modifying state, the ECR connection is being modified. In this case, you can query the ECR connection but cannot perform other operations on the ECR connection. If an ECR connection is in the Attached state, the ECR connection is modified.
   * 
   * @param request - UpdateTransitRouterEcrAttachmentAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTransitRouterEcrAttachmentAttributeResponse
   */
  async updateTransitRouterEcrAttachmentAttributeWithOptions(request: $_model.UpdateTransitRouterEcrAttachmentAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTransitRouterEcrAttachmentAttributeResponse> {
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.transitRouterAttachmentDescription)) {
      query["TransitRouterAttachmentDescription"] = request.transitRouterAttachmentDescription;
    }

    if (!$dara.isNull(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    if (!$dara.isNull(request.transitRouterAttachmentName)) {
      query["TransitRouterAttachmentName"] = request.transitRouterAttachmentName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTransitRouterEcrAttachmentAttribute",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTransitRouterEcrAttachmentAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTransitRouterEcrAttachmentAttributeResponse({}));
  }

  /**
   * Modifies the name and description of an Express Connect Router (ECR) connection on a Enterprise Edition transit router.
   * 
   * @remarks
   * UpdateTransitRouterEcrAttachmentAttribute is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the ListTransitRouterEcrAttachments operation to query the status of an ECR connection.
   * If an ECR connection is in the Modifying state, the ECR connection is being modified. In this case, you can query the ECR connection but cannot perform other operations on the ECR connection. If an ECR connection is in the Attached state, the ECR connection is modified.
   * 
   * @param request - UpdateTransitRouterEcrAttachmentAttributeRequest
   * @returns UpdateTransitRouterEcrAttachmentAttributeResponse
   */
  async updateTransitRouterEcrAttachmentAttribute(request: $_model.UpdateTransitRouterEcrAttachmentAttributeRequest): Promise<$_model.UpdateTransitRouterEcrAttachmentAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTransitRouterEcrAttachmentAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies an inter-region connection on an Enterprise Edition transit router.
   * 
   * @remarks
   * *UpdateTransitRouterPeerAttachmentAttribute** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **ListTransitRouterPeerAttachments** operation to query the status of an inter-region connection.
   * *   If an inter-region connection is in the **Modifying** state, the inter-region connection is being modified. You can query the inter-region connection but cannot perform other operations.
   * *   If an inter-region connection is in the **Attached** state, the inter-region connection is modified.
   * 
   * @param request - UpdateTransitRouterPeerAttachmentAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTransitRouterPeerAttachmentAttributeResponse
   */
  async updateTransitRouterPeerAttachmentAttributeWithOptions(request: $_model.UpdateTransitRouterPeerAttachmentAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTransitRouterPeerAttachmentAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPublishRouteEnabled)) {
      query["AutoPublishRouteEnabled"] = request.autoPublishRouteEnabled;
    }

    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.bandwidthType)) {
      query["BandwidthType"] = request.bandwidthType;
    }

    if (!$dara.isNull(request.cenBandwidthPackageId)) {
      query["CenBandwidthPackageId"] = request.cenBandwidthPackageId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.defaultLinkType)) {
      query["DefaultLinkType"] = request.defaultLinkType;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.transitRouterAttachmentDescription)) {
      query["TransitRouterAttachmentDescription"] = request.transitRouterAttachmentDescription;
    }

    if (!$dara.isNull(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    if (!$dara.isNull(request.transitRouterAttachmentName)) {
      query["TransitRouterAttachmentName"] = request.transitRouterAttachmentName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTransitRouterPeerAttachmentAttribute",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTransitRouterPeerAttachmentAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTransitRouterPeerAttachmentAttributeResponse({}));
  }

  /**
   * Modifies an inter-region connection on an Enterprise Edition transit router.
   * 
   * @remarks
   * *UpdateTransitRouterPeerAttachmentAttribute** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **ListTransitRouterPeerAttachments** operation to query the status of an inter-region connection.
   * *   If an inter-region connection is in the **Modifying** state, the inter-region connection is being modified. You can query the inter-region connection but cannot perform other operations.
   * *   If an inter-region connection is in the **Attached** state, the inter-region connection is modified.
   * 
   * @param request - UpdateTransitRouterPeerAttachmentAttributeRequest
   * @returns UpdateTransitRouterPeerAttachmentAttributeResponse
   */
  async updateTransitRouterPeerAttachmentAttribute(request: $_model.UpdateTransitRouterPeerAttachmentAttributeRequest): Promise<$_model.UpdateTransitRouterPeerAttachmentAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTransitRouterPeerAttachmentAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the name and description of a route in a route table of an Enterprise Edition transit router.
   * 
   * @param request - UpdateTransitRouterRouteEntryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTransitRouterRouteEntryResponse
   */
  async updateTransitRouterRouteEntryWithOptions(request: $_model.UpdateTransitRouterRouteEntryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTransitRouterRouteEntryResponse> {
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.transitRouterRouteEntryDescription)) {
      query["TransitRouterRouteEntryDescription"] = request.transitRouterRouteEntryDescription;
    }

    if (!$dara.isNull(request.transitRouterRouteEntryId)) {
      query["TransitRouterRouteEntryId"] = request.transitRouterRouteEntryId;
    }

    if (!$dara.isNull(request.transitRouterRouteEntryName)) {
      query["TransitRouterRouteEntryName"] = request.transitRouterRouteEntryName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTransitRouterRouteEntry",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTransitRouterRouteEntryResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTransitRouterRouteEntryResponse({}));
  }

  /**
   * Modifies the name and description of a route in a route table of an Enterprise Edition transit router.
   * 
   * @param request - UpdateTransitRouterRouteEntryRequest
   * @returns UpdateTransitRouterRouteEntryResponse
   */
  async updateTransitRouterRouteEntry(request: $_model.UpdateTransitRouterRouteEntryRequest): Promise<$_model.UpdateTransitRouterRouteEntryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTransitRouterRouteEntryWithOptions(request, runtime);
  }

  /**
   * Modifies the name and description of a route table of an Enterprise Edition transit router and enables or disables multi-region equal-cost multi-path (ECMP) routing.
   * 
   * @param request - UpdateTransitRouterRouteTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTransitRouterRouteTableResponse
   */
  async updateTransitRouterRouteTableWithOptions(request: $_model.UpdateTransitRouterRouteTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTransitRouterRouteTableResponse> {
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.routeTableOptions)) {
      query["RouteTableOptions"] = request.routeTableOptions;
    }

    if (!$dara.isNull(request.transitRouterRouteTableDescription)) {
      query["TransitRouterRouteTableDescription"] = request.transitRouterRouteTableDescription;
    }

    if (!$dara.isNull(request.transitRouterRouteTableId)) {
      query["TransitRouterRouteTableId"] = request.transitRouterRouteTableId;
    }

    if (!$dara.isNull(request.transitRouterRouteTableName)) {
      query["TransitRouterRouteTableName"] = request.transitRouterRouteTableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTransitRouterRouteTable",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTransitRouterRouteTableResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTransitRouterRouteTableResponse({}));
  }

  /**
   * Modifies the name and description of a route table of an Enterprise Edition transit router and enables or disables multi-region equal-cost multi-path (ECMP) routing.
   * 
   * @param request - UpdateTransitRouterRouteTableRequest
   * @returns UpdateTransitRouterRouteTableResponse
   */
  async updateTransitRouterRouteTable(request: $_model.UpdateTransitRouterRouteTableRequest): Promise<$_model.UpdateTransitRouterRouteTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTransitRouterRouteTableWithOptions(request, runtime);
  }

  /**
   * Modifies the name, description, and enables or disables automatic route advertisement for a virtual border router (VBR) connection on an Enterprise Edition transit router.
   * 
   * @remarks
   * *UpdateTransitRouterVbrAttachmentAttribute** is an asynchronous operation. After a request is sent, the system returns a **request ID** and runs the task in the background. You can call the **ListTransitRouterVbrAttachments** operation to query the status of a VBR connection.
   * *   If a VBR connection is in the **Modifying** state, the VBR connection is being modified. You can query the VBR connection but cannot perform other operations.
   * *   If the VBR connection is in the **Attached** state, the VBR connection is modified.
   * 
   * @param request - UpdateTransitRouterVbrAttachmentAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTransitRouterVbrAttachmentAttributeResponse
   */
  async updateTransitRouterVbrAttachmentAttributeWithOptions(request: $_model.UpdateTransitRouterVbrAttachmentAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTransitRouterVbrAttachmentAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPublishRouteEnabled)) {
      query["AutoPublishRouteEnabled"] = request.autoPublishRouteEnabled;
    }

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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.transitRouterAttachmentDescription)) {
      query["TransitRouterAttachmentDescription"] = request.transitRouterAttachmentDescription;
    }

    if (!$dara.isNull(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    if (!$dara.isNull(request.transitRouterAttachmentName)) {
      query["TransitRouterAttachmentName"] = request.transitRouterAttachmentName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTransitRouterVbrAttachmentAttribute",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTransitRouterVbrAttachmentAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTransitRouterVbrAttachmentAttributeResponse({}));
  }

  /**
   * Modifies the name, description, and enables or disables automatic route advertisement for a virtual border router (VBR) connection on an Enterprise Edition transit router.
   * 
   * @remarks
   * *UpdateTransitRouterVbrAttachmentAttribute** is an asynchronous operation. After a request is sent, the system returns a **request ID** and runs the task in the background. You can call the **ListTransitRouterVbrAttachments** operation to query the status of a VBR connection.
   * *   If a VBR connection is in the **Modifying** state, the VBR connection is being modified. You can query the VBR connection but cannot perform other operations.
   * *   If the VBR connection is in the **Attached** state, the VBR connection is modified.
   * 
   * @param request - UpdateTransitRouterVbrAttachmentAttributeRequest
   * @returns UpdateTransitRouterVbrAttachmentAttributeResponse
   */
  async updateTransitRouterVbrAttachmentAttribute(request: $_model.UpdateTransitRouterVbrAttachmentAttributeRequest): Promise<$_model.UpdateTransitRouterVbrAttachmentAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTransitRouterVbrAttachmentAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the name and description of a virtual private cloud (VPC) connection on an Enterprise Edition transit router.
   * 
   * @remarks
   * *UpdateTransitRouterVpcAttachmentAttribute** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **ListTransitRouterVpcAttachments** operation to query the status of a VPC connection.
   * *   If a VPC connection is in the **Modifying** state, the VPC connection is being modified. You can query the VPC connection but cannot perform other operations.
   * *   If a VPC connection is in the **Attached** state, the VPC connection is modified.
   * 
   * @param tmpReq - UpdateTransitRouterVpcAttachmentAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTransitRouterVpcAttachmentAttributeResponse
   */
  async updateTransitRouterVpcAttachmentAttributeWithOptions(tmpReq: $_model.UpdateTransitRouterVpcAttachmentAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTransitRouterVpcAttachmentAttributeResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateTransitRouterVpcAttachmentAttributeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.transitRouterVPCAttachmentOptions)) {
      request.transitRouterVPCAttachmentOptionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.transitRouterVPCAttachmentOptions, "TransitRouterVPCAttachmentOptions", "json");
    }

    let query = { };
    if (!$dara.isNull(request.autoPublishRouteEnabled)) {
      query["AutoPublishRouteEnabled"] = request.autoPublishRouteEnabled;
    }

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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.transitRouterAttachmentDescription)) {
      query["TransitRouterAttachmentDescription"] = request.transitRouterAttachmentDescription;
    }

    if (!$dara.isNull(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    if (!$dara.isNull(request.transitRouterAttachmentName)) {
      query["TransitRouterAttachmentName"] = request.transitRouterAttachmentName;
    }

    if (!$dara.isNull(request.transitRouterVPCAttachmentOptionsShrink)) {
      query["TransitRouterVPCAttachmentOptions"] = request.transitRouterVPCAttachmentOptionsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTransitRouterVpcAttachmentAttribute",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTransitRouterVpcAttachmentAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTransitRouterVpcAttachmentAttributeResponse({}));
  }

  /**
   * Modifies the name and description of a virtual private cloud (VPC) connection on an Enterprise Edition transit router.
   * 
   * @remarks
   * *UpdateTransitRouterVpcAttachmentAttribute** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **ListTransitRouterVpcAttachments** operation to query the status of a VPC connection.
   * *   If a VPC connection is in the **Modifying** state, the VPC connection is being modified. You can query the VPC connection but cannot perform other operations.
   * *   If a VPC connection is in the **Attached** state, the VPC connection is modified.
   * 
   * @param request - UpdateTransitRouterVpcAttachmentAttributeRequest
   * @returns UpdateTransitRouterVpcAttachmentAttributeResponse
   */
  async updateTransitRouterVpcAttachmentAttribute(request: $_model.UpdateTransitRouterVpcAttachmentAttributeRequest): Promise<$_model.UpdateTransitRouterVpcAttachmentAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTransitRouterVpcAttachmentAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the zones and vSwitches that are associated with a virtual private cloud (VPC) connection.
   * 
   * @remarks
   *   When you add a zone and a vSwitch for a VPC connection, make sure that the vSwitch has at least one idle IP address. When you modify the zones and vSwitches of a VPC connection, the Enterprise Edition transit router creates an elastic network interface (ENI) in the vSwitch. The ENI occupies one IP address in the vSwitch. The ENI forwards traffic between the VPC and the Enterprise Edition transit router.
   * *   **UpdateTransitRouterVpcAttachmentZones** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **ListTransitRouterVpcAttachments** operation to query the status of a VPC connection.
   *     *   If a VPC connection is in the **Modifying** state, the VPC connection is being modified. You can query the VPC connection but cannot perform other operations.
   *     *   If a VPC connection is in the **Attached** state, the VPC connection is modified.
   * 
   * @param request - UpdateTransitRouterVpcAttachmentZonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTransitRouterVpcAttachmentZonesResponse
   */
  async updateTransitRouterVpcAttachmentZonesWithOptions(request: $_model.UpdateTransitRouterVpcAttachmentZonesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTransitRouterVpcAttachmentZonesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addZoneMappings)) {
      query["AddZoneMappings"] = request.addZoneMappings;
    }

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

    if (!$dara.isNull(request.removeZoneMappings)) {
      query["RemoveZoneMappings"] = request.removeZoneMappings;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTransitRouterVpcAttachmentZones",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTransitRouterVpcAttachmentZonesResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTransitRouterVpcAttachmentZonesResponse({}));
  }

  /**
   * Modifies the zones and vSwitches that are associated with a virtual private cloud (VPC) connection.
   * 
   * @remarks
   *   When you add a zone and a vSwitch for a VPC connection, make sure that the vSwitch has at least one idle IP address. When you modify the zones and vSwitches of a VPC connection, the Enterprise Edition transit router creates an elastic network interface (ENI) in the vSwitch. The ENI occupies one IP address in the vSwitch. The ENI forwards traffic between the VPC and the Enterprise Edition transit router.
   * *   **UpdateTransitRouterVpcAttachmentZones** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **ListTransitRouterVpcAttachments** operation to query the status of a VPC connection.
   *     *   If a VPC connection is in the **Modifying** state, the VPC connection is being modified. You can query the VPC connection but cannot perform other operations.
   *     *   If a VPC connection is in the **Attached** state, the VPC connection is modified.
   * 
   * @param request - UpdateTransitRouterVpcAttachmentZonesRequest
   * @returns UpdateTransitRouterVpcAttachmentZonesResponse
   */
  async updateTransitRouterVpcAttachmentZones(request: $_model.UpdateTransitRouterVpcAttachmentZonesRequest): Promise<$_model.UpdateTransitRouterVpcAttachmentZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTransitRouterVpcAttachmentZonesWithOptions(request, runtime);
  }

  /**
   * Modifies the configuration of a VPN attachment.
   * 
   * @param request - UpdateTransitRouterVpnAttachmentAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTransitRouterVpnAttachmentAttributeResponse
   */
  async updateTransitRouterVpnAttachmentAttributeWithOptions(request: $_model.UpdateTransitRouterVpnAttachmentAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTransitRouterVpnAttachmentAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPublishRouteEnabled)) {
      query["AutoPublishRouteEnabled"] = request.autoPublishRouteEnabled;
    }

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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.transitRouterAttachmentDescription)) {
      query["TransitRouterAttachmentDescription"] = request.transitRouterAttachmentDescription;
    }

    if (!$dara.isNull(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    if (!$dara.isNull(request.transitRouterAttachmentName)) {
      query["TransitRouterAttachmentName"] = request.transitRouterAttachmentName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTransitRouterVpnAttachmentAttribute",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTransitRouterVpnAttachmentAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTransitRouterVpnAttachmentAttributeResponse({}));
  }

  /**
   * Modifies the configuration of a VPN attachment.
   * 
   * @param request - UpdateTransitRouterVpnAttachmentAttributeRequest
   * @returns UpdateTransitRouterVpnAttachmentAttributeResponse
   */
  async updateTransitRouterVpnAttachmentAttribute(request: $_model.UpdateTransitRouterVpnAttachmentAttributeRequest): Promise<$_model.UpdateTransitRouterVpnAttachmentAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTransitRouterVpnAttachmentAttributeWithOptions(request, runtime);
  }

  /**
   * Withdraws the routes of a virtual private cloud (VPC) or a virtual border router (VBR) from a Cloud Enterprise Network (CEN) instance.
   * 
   * @param request - WithdrawPublishedRouteEntriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns WithdrawPublishedRouteEntriesResponse
   */
  async withdrawPublishedRouteEntriesWithOptions(request: $_model.WithdrawPublishedRouteEntriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.WithdrawPublishedRouteEntriesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.childInstanceId)) {
      query["ChildInstanceId"] = request.childInstanceId;
    }

    if (!$dara.isNull(request.childInstanceRegionId)) {
      query["ChildInstanceRegionId"] = request.childInstanceRegionId;
    }

    if (!$dara.isNull(request.childInstanceRouteTableId)) {
      query["ChildInstanceRouteTableId"] = request.childInstanceRouteTableId;
    }

    if (!$dara.isNull(request.childInstanceType)) {
      query["ChildInstanceType"] = request.childInstanceType;
    }

    if (!$dara.isNull(request.destinationCidrBlock)) {
      query["DestinationCidrBlock"] = request.destinationCidrBlock;
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
      action: "WithdrawPublishedRouteEntries",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.WithdrawPublishedRouteEntriesResponse>(await this.callApi(params, req, runtime), new $_model.WithdrawPublishedRouteEntriesResponse({}));
  }

  /**
   * Withdraws the routes of a virtual private cloud (VPC) or a virtual border router (VBR) from a Cloud Enterprise Network (CEN) instance.
   * 
   * @param request - WithdrawPublishedRouteEntriesRequest
   * @returns WithdrawPublishedRouteEntriesResponse
   */
  async withdrawPublishedRouteEntries(request: $_model.WithdrawPublishedRouteEntriesRequest): Promise<$_model.WithdrawPublishedRouteEntriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.withdrawPublishedRouteEntriesWithOptions(request, runtime);
  }

}
