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
   * Activates a flow log to start capturing traffic of specified resources.
   * 
   * @remarks
   * - After a flow log is created, it is in the Active state by default. If you stopped a flow log, you can call this operation to reactivate it.
   * - `ActiveFlowLog` is an asynchronous operation. After you send a request, the system returns a **RequestId**, but activate flow log is not fully activated. The activation task is still running in the background. You can call the `DescribeFlowlogs` operation to query the status of activate flow log.
   *     
   *     - If activate flow log is in the **Modifying** state, activate flow log is being activated. In this state, you can only perform query operations.
   *     - If activate flow log is in the **Active** state, activate flow log is activated.
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
   * Activates a flow log to start capturing traffic of specified resources.
   * 
   * @remarks
   * - After a flow log is created, it is in the Active state by default. If you stopped a flow log, you can call this operation to reactivate it.
   * - `ActiveFlowLog` is an asynchronous operation. After you send a request, the system returns a **RequestId**, but activate flow log is not fully activated. The activation task is still running in the background. You can call the `DescribeFlowlogs` operation to query the status of activate flow log.
   *     
   *     - If activate flow log is in the **Modifying** state, activate flow log is being activated. In this state, you can only perform query operations.
   *     - If activate flow log is in the **Active** state, activate flow log is activated.
   * 
   * @param request - ActiveFlowLogRequest
   * @returns ActiveFlowLogResponse
   */
  async activeFlowLog(request: $_model.ActiveFlowLogRequest): Promise<$_model.ActiveFlowLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.activeFlowLogWithOptions(request, runtime);
  }

  /**
   * Adds traffic classification rules to a traffic marking policy by calling the AddTrafficMatchRuleToTrafficMarkingPolicy operation.
   * 
   * @remarks
   * *AddTrafficMatchRuleToTrafficMarkingPolicy** is an asynchronous operation. After you send a request, the system returns a **RequestId** but the traffic classification rule is not yet created. The creation task continues to run in the background. You can call the **ListTrafficMarkingPolicies** operation to query the status of the traffic classification rule. 
   * - If the traffic classification rule is in the **Creating** state, the rule is being created. In this state, you can only query the rule and cannot perform other operations on it.
   * - If the traffic classification rule is in the **Active** state, the rule is created.
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
   * Adds traffic classification rules to a traffic marking policy by calling the AddTrafficMatchRuleToTrafficMarkingPolicy operation.
   * 
   * @remarks
   * *AddTrafficMatchRuleToTrafficMarkingPolicy** is an asynchronous operation. After you send a request, the system returns a **RequestId** but the traffic classification rule is not yet created. The creation task continues to run in the background. You can call the **ListTrafficMarkingPolicies** operation to query the status of the traffic classification rule. 
   * - If the traffic classification rule is in the **Creating** state, the rule is being created. In this state, you can only query the rule and cannot perform other operations on it.
   * - If the traffic classification rule is in the **Active** state, the rule is created.
   * 
   * @param request - AddTrafficMatchRuleToTrafficMarkingPolicyRequest
   * @returns AddTrafficMatchRuleToTrafficMarkingPolicyResponse
   */
  async addTrafficMatchRuleToTrafficMarkingPolicy(request: $_model.AddTrafficMatchRuleToTrafficMarkingPolicyRequest): Promise<$_model.AddTrafficMatchRuleToTrafficMarkingPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addTrafficMatchRuleToTrafficMarkingPolicyWithOptions(request, runtime);
  }

  /**
   * Adds traffic classification rules to a traffic marking policy.
   * 
   * @remarks
   * ### Precautions
   * The **AddTraficMatchRuleToTrafficMarkingPolicy** operation is deprecated and will be discontinued. To add traffic classification rules to a traffic marking policy, use the [AddTrafficMatchRuleToTrafficMarkingPolicy](https://help.aliyun.com/document_detail/427602.html) operation. This documentation is no longer maintained.
   * 
   * @deprecated OpenAPI AddTraficMatchRuleToTrafficMarkingPolicy is deprecated, please use Cbn::2017-09-12::AddTrafficMatchRuleToTrafficMarkingPolicy instead.
   * 
   * @param request - AddTraficMatchRuleToTrafficMarkingPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddTraficMatchRuleToTrafficMarkingPolicyResponse
   */
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
   * Adds traffic classification rules to a traffic marking policy.
   * 
   * @remarks
   * ### Precautions
   * The **AddTraficMatchRuleToTrafficMarkingPolicy** operation is deprecated and will be discontinued. To add traffic classification rules to a traffic marking policy, use the [AddTrafficMatchRuleToTrafficMarkingPolicy](https://help.aliyun.com/document_detail/427602.html) operation. This documentation is no longer maintained.
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
   * Associates a bandwidth package instance with a Cloud Enterprise Network (CEN) instance.
   * 
   * @remarks
   * A CEN instance supports binding multiple bandwidth packages, but does not support binding multiple bandwidth packages with the same connected areas.
   * For example, if a CEN instance already has a bandwidth package bound for the Chinese mainland-to-Chinese mainland connected areas, you cannot bind another bandwidth package for the Chinese mainland-to-Chinese mainland connected areas. However, you can bind a bandwidth package for the Chinese mainland-to-North America connected areas.
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
   * Associates a bandwidth package instance with a Cloud Enterprise Network (CEN) instance.
   * 
   * @remarks
   * A CEN instance supports binding multiple bandwidth packages, but does not support binding multiple bandwidth packages with the same connected areas.
   * For example, if a CEN instance already has a bandwidth package bound for the Chinese mainland-to-Chinese mainland connected areas, you cannot bind another bandwidth package for the Chinese mainland-to-Chinese mainland connected areas. However, you can bind a bandwidth package for the Chinese mainland-to-North America connected areas.
   * 
   * @param request - AssociateCenBandwidthPackageRequest
   * @returns AssociateCenBandwidthPackageResponse
   */
  async associateCenBandwidthPackage(request: $_model.AssociateCenBandwidthPackageRequest): Promise<$_model.AssociateCenBandwidthPackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.associateCenBandwidthPackageWithOptions(request, runtime);
  }

  /**
   * Creates a route table association.
   * 
   * @remarks
   * After you create a network instance connection, you must set the association and forwarding relationship for it by associating the network instance connection with an Enterprise Edition transit router route table. After the association is created, the Enterprise Edition transit router forwards traffic of the network instance based on the route entries in the route table. Before you invoke this operation, take note of the following information:
   * - Only Enterprise Edition transit router route tables support route table associations. For information about the regions and zones that support Enterprise Edition transit routers, see [What is Cloud Enterprise Network (CEN)?](https://help.aliyun.com/document_detail/181681.html).
   * - Each network instance connection can be associated with only one Enterprise Edition transit router route table.
   * - **AssociateTransitRouterAttachmentWithRouteTable** is an asynchronous operation. After you send a request, the system returns a **RequestId** but the association between the network instance connection and the route table is not complete. The association task is still running in the background. You can call **ListTransitRouterRouteTableAssociations** to query the association status between the network instance connection and the route table.
   *     - If the association status is **Associating**, the network instance connection is being associated with the route table. In this state, you can only query the association but cannot perform other operations.
   *     - If the association status is **Active**, the network instance connection is associated with the route table.
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
   * Creates a route table association.
   * 
   * @remarks
   * After you create a network instance connection, you must set the association and forwarding relationship for it by associating the network instance connection with an Enterprise Edition transit router route table. After the association is created, the Enterprise Edition transit router forwards traffic of the network instance based on the route entries in the route table. Before you invoke this operation, take note of the following information:
   * - Only Enterprise Edition transit router route tables support route table associations. For information about the regions and zones that support Enterprise Edition transit routers, see [What is Cloud Enterprise Network (CEN)?](https://help.aliyun.com/document_detail/181681.html).
   * - Each network instance connection can be associated with only one Enterprise Edition transit router route table.
   * - **AssociateTransitRouterAttachmentWithRouteTable** is an asynchronous operation. After you send a request, the system returns a **RequestId** but the association between the network instance connection and the route table is not complete. The association task is still running in the background. You can call **ListTransitRouterRouteTableAssociations** to query the association status between the network instance connection and the route table.
   *     - If the association status is **Associating**, the network instance connection is being associated with the route table. In this state, you can only query the association but cannot perform other operations.
   *     - If the association status is **Active**, the network instance connection is associated with the route table.
   * 
   * @param request - AssociateTransitRouterAttachmentWithRouteTableRequest
   * @returns AssociateTransitRouterAttachmentWithRouteTableResponse
   */
  async associateTransitRouterAttachmentWithRouteTable(request: $_model.AssociateTransitRouterAttachmentWithRouteTableRequest): Promise<$_model.AssociateTransitRouterAttachmentWithRouteTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.associateTransitRouterAttachmentWithRouteTableWithOptions(request, runtime);
  }

  /**
   * Associates a vSwitch in a virtual private cloud (VPC) with a multicast domain by calling the AssociateTransitRouterMulticastDomain operation so that resources in the VPC can communicate through multicast.
   * 
   * @remarks
   * - A vSwitch can be associated with only one multicast domain. Make sure that the vSwitch to be associated is not already associated with another multicast domain. To disassociate a vSwitch from a multicast domain, see [DisassociateTransitRouterMulticastDomain](https://help.aliyun.com/document_detail/429774.html).
   * - **AssociateTransitRouterMulticastDomain** is an asynchronous operation. After you send a request, the system returns a **RequestId** but the association between the vSwitch and the multicast domain is not yet complete. The association task continues to run in the background. You can call **ListTransitRouterMulticastDomainAssociations** to query the association status between the vSwitch and the multicast domain.
   *     - If the association status is **Associating**, the association between the vSwitch and the multicast domain is being established. In this state, you can only query the vSwitch but cannot perform other operations.
   *     - If the association status is **Associated**, the association between the vSwitch and the multicast domain is established.
   * - The VPC to which the vSwitch belongs must be connected to an Enterprise Edition transit router. To create a VPC connection, see [CreateTransitRouterVpcAttachment](https://help.aliyun.com/document_detail/468237.html).
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
   * Associates a vSwitch in a virtual private cloud (VPC) with a multicast domain by calling the AssociateTransitRouterMulticastDomain operation so that resources in the VPC can communicate through multicast.
   * 
   * @remarks
   * - A vSwitch can be associated with only one multicast domain. Make sure that the vSwitch to be associated is not already associated with another multicast domain. To disassociate a vSwitch from a multicast domain, see [DisassociateTransitRouterMulticastDomain](https://help.aliyun.com/document_detail/429774.html).
   * - **AssociateTransitRouterMulticastDomain** is an asynchronous operation. After you send a request, the system returns a **RequestId** but the association between the vSwitch and the multicast domain is not yet complete. The association task continues to run in the background. You can call **ListTransitRouterMulticastDomainAssociations** to query the association status between the vSwitch and the multicast domain.
   *     - If the association status is **Associating**, the association between the vSwitch and the multicast domain is being established. In this state, you can only query the vSwitch but cannot perform other operations.
   *     - If the association status is **Associated**, the association between the vSwitch and the multicast domain is established.
   * - The VPC to which the vSwitch belongs must be connected to an Enterprise Edition transit router. To create a VPC connection, see [CreateTransitRouterVpcAttachment](https://help.aliyun.com/document_detail/468237.html).
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
   * CEN supports attaching cross-account network instances. Before attaching a cross-account network instance, the CEN instance must be authorized by the cross-account network instance:
   * - For cross-account VPC instance authorization, refer to [GrantInstanceToCen](https://help.aliyun.com/document_detail/126224.html).
   * - For cross-account Cloud Connect Network instance authorization, refer to [GrantInstanceToCbn](https://help.aliyun.com/document_detail/126141.html).
   * - Cross-account border router instance authorization is not available by default. To use this feature, contact your account manager.
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
   * CEN supports attaching cross-account network instances. Before attaching a cross-account network instance, the CEN instance must be authorized by the cross-account network instance:
   * - For cross-account VPC instance authorization, refer to [GrantInstanceToCen](https://help.aliyun.com/document_detail/126224.html).
   * - For cross-account Cloud Connect Network instance authorization, refer to [GrantInstanceToCbn](https://help.aliyun.com/document_detail/126141.html).
   * - Cross-account border router instance authorization is not available by default. To use this feature, contact your account manager.
   * 
   * @param request - AttachCenChildInstanceRequest
   * @returns AttachCenChildInstanceResponse
   */
  async attachCenChildInstance(request: $_model.AttachCenChildInstanceRequest): Promise<$_model.AttachCenChildInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachCenChildInstanceWithOptions(request, runtime);
  }

  /**
   * Queries whether the transit router service is activated for the current Alibaba Cloud account.
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
   * Queries whether the transit router service is activated for the current Alibaba Cloud account.
   * 
   * @param request - CheckTransitRouterServiceRequest
   * @returns CheckTransitRouterServiceResponse
   */
  async checkTransitRouterService(request: $_model.CheckTransitRouterServiceRequest): Promise<$_model.CheckTransitRouterServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkTransitRouterServiceWithOptions(request, runtime);
  }

  /**
   * A Cloud Enterprise Network (CEN) instance is the fundamental resource for managing an integrated network. A CEN instance manages one network and can span one or more regions. Before enabling connectivity between network instances, call the CreateCen operation to create a CEN instance.
   * 
   * @remarks
   * The **CreateCen** operation is asynchronous. The system returns a CEN instance ID before the CEN instance is fully created, while the creation task continues in the background. You can call the **DescribeCens** operation to query the status of the CEN instance. 
   * - If the CEN instance is in the **Creating** state, the CEN instance is being created. In this state, you can only query the CEN instance but cannot perform other operations on it.
   * - If the CEN instance is in the **Active** state, the CEN instance is created.
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
   * A Cloud Enterprise Network (CEN) instance is the fundamental resource for managing an integrated network. A CEN instance manages one network and can span one or more regions. Before enabling connectivity between network instances, call the CreateCen operation to create a CEN instance.
   * 
   * @remarks
   * The **CreateCen** operation is asynchronous. The system returns a CEN instance ID before the CEN instance is fully created, while the creation task continues in the background. You can call the **DescribeCens** operation to query the status of the CEN instance. 
   * - If the CEN instance is in the **Creating** state, the CEN instance is being created. In this state, you can only query the CEN instance but cannot perform other operations on it.
   * - If the CEN instance is in the **Active** state, the CEN instance is created.
   * 
   * @param request - CreateCenRequest
   * @returns CreateCenResponse
   */
  async createCen(request: $_model.CreateCenRequest): Promise<$_model.CreateCenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCenWithOptions(request, runtime);
  }

  /**
   * Creates a bandwidth plan for Cloud Enterprise Network (CEN) to enable cross-region connectivity between network instances.
   * 
   * @remarks
   * - When you create a bandwidth plan instance, you must specify the connected areas. An area of a bandwidth plan is a collection of regions. Each area contains one or more Alibaba Cloud regions. Select the connected areas based on the regions that you want to connect. For more information about the relationship between areas and regions, see [Purchase a bandwidth plan](https://help.aliyun.com/document_detail/181560.html).
   * - For more information about the billing details of bandwidth plans, see [Billing](https://help.aliyun.com/document_detail/189836.html).
   * - **CreateCenBandwidthPackage** is an asynchronous operation. After you invoke the operation, the system returns a bandwidth plan instance ID but the bandwidth plan is not yet created. The creation node is still running in the background. You can invoke the **DescribeCenBandwidthPackages** operation to query the status of the bandwidth plan. When the bandwidth plan is in the **Idle** or **InUse** state, the bandwidth plan is created.
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
   * Creates a bandwidth plan for Cloud Enterprise Network (CEN) to enable cross-region connectivity between network instances.
   * 
   * @remarks
   * - When you create a bandwidth plan instance, you must specify the connected areas. An area of a bandwidth plan is a collection of regions. Each area contains one or more Alibaba Cloud regions. Select the connected areas based on the regions that you want to connect. For more information about the relationship between areas and regions, see [Purchase a bandwidth plan](https://help.aliyun.com/document_detail/181560.html).
   * - For more information about the billing details of bandwidth plans, see [Billing](https://help.aliyun.com/document_detail/189836.html).
   * - **CreateCenBandwidthPackage** is an asynchronous operation. After you invoke the operation, the system returns a bandwidth plan instance ID but the bandwidth plan is not yet created. The creation node is still running in the background. You can invoke the **DescribeCenBandwidthPackages** operation to query the status of the bandwidth plan. When the bandwidth plan is in the **Idle** or **InUse** state, the bandwidth plan is created.
   * 
   * @param request - CreateCenBandwidthPackageRequest
   * @returns CreateCenBandwidthPackageResponse
   */
  async createCenBandwidthPackage(request: $_model.CreateCenBandwidthPackageRequest): Promise<$_model.CreateCenBandwidthPackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCenBandwidthPackageWithOptions(request, runtime);
  }

  /**
   * Adds a route entry to a network instance connected to an Enterprise Edition transit router. The destination CIDR block points to the transit router in the current region as the next hop.
   * 
   * @remarks
   * - You can add route entries only to Virtual Private Cloud (VPC) instances and Virtual Border Router (VBR) instances that are connected to an Enterprise Edition transit router.
   * - The next hop of the route entry defaults to the **transit router connection** (network instance connection) and cannot be modified.
   * - **CreateCenChildInstanceRouteEntryToAttachment** is an asynchronous operation. After you send a request, the system returns a **RequestId** but the route entry is not yet created. The creation task continues to run in the background. You can call the **DescribeRouteEntryList** operation of VPC to query the status of the route entry. 
   *     - If the route entry is in the **Pending** state, the route entry is being created. In this state, you can only query the route entry but cannot perform other operations.
   *     - If the route entry is in the **Available** state, the route entry is created.
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
   * Adds a route entry to a network instance connected to an Enterprise Edition transit router. The destination CIDR block points to the transit router in the current region as the next hop.
   * 
   * @remarks
   * - You can add route entries only to Virtual Private Cloud (VPC) instances and Virtual Border Router (VBR) instances that are connected to an Enterprise Edition transit router.
   * - The next hop of the route entry defaults to the **transit router connection** (network instance connection) and cannot be modified.
   * - **CreateCenChildInstanceRouteEntryToAttachment** is an asynchronous operation. After you send a request, the system returns a **RequestId** but the route entry is not yet created. The creation task continues to run in the background. You can call the **DescribeRouteEntryList** operation of VPC to query the status of the route entry. 
   *     - If the route entry is in the **Pending** state, the route entry is being created. In this state, you can only query the route entry but cannot perform other operations.
   *     - If the route entry is in the **Available** state, the route entry is created.
   * 
   * @param request - CreateCenChildInstanceRouteEntryToAttachmentRequest
   * @returns CreateCenChildInstanceRouteEntryToAttachmentResponse
   */
  async createCenChildInstanceRouteEntryToAttachment(request: $_model.CreateCenChildInstanceRouteEntryToAttachmentRequest): Promise<$_model.CreateCenChildInstanceRouteEntryToAttachmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCenChildInstanceRouteEntryToAttachmentWithOptions(request, runtime);
  }

  /**
   * Adds a route entry to a network instance by calling the CreateCenChildInstanceRouteEntryToCen operation.
   * 
   * @remarks
   * - The CreateCenChildInstanceRouteEntryToCen operation is not available by default. To use this operation, <props="china">[submit a ticket](https://selfservice.console.aliyun.com/ticket/category/cbn/today)<props="intl">[submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
   * - The CreateCenChildInstanceRouteEntryToCen operation does not support adding route entries to network instances in an Enterprise Edition transit router.
   * - The next hop of the route entry defaults to the regional gateway of Cloud Enterprise Network (CEN) and cannot be modified.
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
   * Adds a route entry to a network instance by calling the CreateCenChildInstanceRouteEntryToCen operation.
   * 
   * @remarks
   * - The CreateCenChildInstanceRouteEntryToCen operation is not available by default. To use this operation, <props="china">[submit a ticket](https://selfservice.console.aliyun.com/ticket/category/cbn/today)<props="intl">[submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
   * - The CreateCenChildInstanceRouteEntryToCen operation does not support adding route entries to network instances in an Enterprise Edition transit router.
   * - The next hop of the route entry defaults to the regional gateway of Cloud Enterprise Network (CEN) and cannot be modified.
   * 
   * @param request - CreateCenChildInstanceRouteEntryToCenRequest
   * @returns CreateCenChildInstanceRouteEntryToCenResponse
   */
  async createCenChildInstanceRouteEntryToCen(request: $_model.CreateCenChildInstanceRouteEntryToCenRequest): Promise<$_model.CreateCenChildInstanceRouteEntryToCenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCenChildInstanceRouteEntryToCenWithOptions(request, runtime);
  }

  /**
   * Creates a cross-region traffic scheduling policy for an Enterprise Edition transit router to optimize and control network traffic across regions.
   * 
   * @remarks
   * - Only inter-region connections of Enterprise Edition transit routers support the creation of cross-region traffic scheduling policies.
   * - The traffic scheduling feature takes effect only in the outbound direction of an Enterprise Edition transit router.
   *      For example, if you create an inter-region connection between the China (Hangzhou) and China (Qingdao) regions and configure the traffic scheduling feature on the transit router in the China (Hangzhou) region, the traffic scheduling feature can guarantee bandwidth for various services when traffic flows from the China (Hangzhou) region to the China (Qingdao) region. However, the traffic scheduling feature does not guarantee service bandwidth when traffic flows from the China (Qingdao) region to the China (Hangzhou) region.
   * - **CreateCenInterRegionTrafficQosPolicy** is an asynchronous operation. After you send a request, the system returns a traffic scheduling policy ID but the policy is not yet created. The creation task continues to run in the background. You can call **ListCenInterRegionTrafficQosPolicies** to query the status of the traffic scheduling policy. 
   *     - If the traffic scheduling policy is in the **Creating** state, the policy is being created. In this state, you can only query the policy but cannot perform other operations on it.
   *     - If the traffic scheduling policy is in the **Active** state, the policy is created.
   * ### Before you begin
   * Before you call **CreateCenInterRegionTrafficQosPolicy**, make sure that the following conditions are met:
   * - An inter-region connection is created. For more information, see [CreateTransitRouterPeerAttachment](https://help.aliyun.com/document_detail/261363.html).
   * - A traffic marking policy is created. For more information, see [CreateTrafficMarkingPolicy](https://help.aliyun.com/document_detail/419025.html).
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

    if (!$dara.isNull(request.consoleDryRun)) {
      query["ConsoleDryRun"] = request.consoleDryRun;
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
   * Creates a cross-region traffic scheduling policy for an Enterprise Edition transit router to optimize and control network traffic across regions.
   * 
   * @remarks
   * - Only inter-region connections of Enterprise Edition transit routers support the creation of cross-region traffic scheduling policies.
   * - The traffic scheduling feature takes effect only in the outbound direction of an Enterprise Edition transit router.
   *      For example, if you create an inter-region connection between the China (Hangzhou) and China (Qingdao) regions and configure the traffic scheduling feature on the transit router in the China (Hangzhou) region, the traffic scheduling feature can guarantee bandwidth for various services when traffic flows from the China (Hangzhou) region to the China (Qingdao) region. However, the traffic scheduling feature does not guarantee service bandwidth when traffic flows from the China (Qingdao) region to the China (Hangzhou) region.
   * - **CreateCenInterRegionTrafficQosPolicy** is an asynchronous operation. After you send a request, the system returns a traffic scheduling policy ID but the policy is not yet created. The creation task continues to run in the background. You can call **ListCenInterRegionTrafficQosPolicies** to query the status of the traffic scheduling policy. 
   *     - If the traffic scheduling policy is in the **Creating** state, the policy is being created. In this state, you can only query the policy but cannot perform other operations on it.
   *     - If the traffic scheduling policy is in the **Active** state, the policy is created.
   * ### Before you begin
   * Before you call **CreateCenInterRegionTrafficQosPolicy**, make sure that the following conditions are met:
   * - An inter-region connection is created. For more information, see [CreateTransitRouterPeerAttachment](https://help.aliyun.com/document_detail/261363.html).
   * - A traffic marking policy is created. For more information, see [CreateTrafficMarkingPolicy](https://help.aliyun.com/document_detail/419025.html).
   * 
   * @param request - CreateCenInterRegionTrafficQosPolicyRequest
   * @returns CreateCenInterRegionTrafficQosPolicyResponse
   */
  async createCenInterRegionTrafficQosPolicy(request: $_model.CreateCenInterRegionTrafficQosPolicyRequest): Promise<$_model.CreateCenInterRegionTrafficQosPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCenInterRegionTrafficQosPolicyWithOptions(request, runtime);
  }

  /**
   * Creates a queue configuration under a traffic scheduling policy. If you need to manage different types and priorities of network traffic to ensure the performance of critical service traffic and comply with Service-Level Agreements (SLAs), you can call the CreateCenInterRegionTrafficQosQueue operation.
   * 
   * @remarks
   * *CreateCenInterRegionTrafficQosQueue** is an asynchronous operation. After you send a request, the system returns a queue ID but the queue is not yet created. The creation task continues to run in the background. You can call the **ListCenInterRegionTrafficQosPolicies** operation to query the status of the traffic scheduling policy to determine the creation status of the queue. When you call this operation, you must specify the **TrafficQosPolicyId** parameter.
   *     
   * - If the traffic scheduling policy is in the **Modifying** state, the queue is being created. In this state, you can only query the traffic scheduling policy and queue. You cannot perform other operations.
   * - If the traffic scheduling policy is in the **Active** state, the queue is created.
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
   * Creates a queue configuration under a traffic scheduling policy. If you need to manage different types and priorities of network traffic to ensure the performance of critical service traffic and comply with Service-Level Agreements (SLAs), you can call the CreateCenInterRegionTrafficQosQueue operation.
   * 
   * @remarks
   * *CreateCenInterRegionTrafficQosQueue** is an asynchronous operation. After you send a request, the system returns a queue ID but the queue is not yet created. The creation task continues to run in the background. You can call the **ListCenInterRegionTrafficQosPolicies** operation to query the status of the traffic scheduling policy to determine the creation status of the queue. When you call this operation, you must specify the **TrafficQosPolicyId** parameter.
   *     
   * - If the traffic scheduling policy is in the **Modifying** state, the queue is being created. In this state, you can only query the traffic scheduling policy and queue. You cannot perform other operations.
   * - If the traffic scheduling policy is in the **Active** state, the queue is created.
   * 
   * @param request - CreateCenInterRegionTrafficQosQueueRequest
   * @returns CreateCenInterRegionTrafficQosQueueResponse
   */
  async createCenInterRegionTrafficQosQueue(request: $_model.CreateCenInterRegionTrafficQosQueueRequest): Promise<$_model.CreateCenInterRegionTrafficQosQueueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCenInterRegionTrafficQosQueueWithOptions(request, runtime);
  }

  /**
   * Creates a routing policy. The routing policy feature allows you to filter route information and customize the management of cloud network connectivity.
   * 
   * @remarks
   * Routing policies are sorted by priority. A smaller priority value indicates a higher priority. Each routing policy is a collection of conditional statements and execution statements. When a routing policy is executed, routes are matched against conditional statements starting from the routing policy with the highest priority. For routes that match all conditions, the routing policy either permits or denies the routes based on the policy action. Routes that are permitted can have their attributes modified. For routes that do not match all conditions, the system permits the routes by default. For more information, see [Routing policy overview](https://help.aliyun.com/document_detail/124157.html).
   * `CreateCenRouteMap` is an asynchronous operation. After you call this operation, a routing policy ID is returned, but the routing policy has not been created. The system continues to create the routing policy in the background. You can call `DescribeCenRouteMaps` to query the status of the routing policy.
   * - If the routing policy is in the **Creating** state, the routing policy is being created. In this state, you can only perform query operations.
   * - If the routing policy is in the **Active** state, the routing policy is created.
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
   * Creates a routing policy. The routing policy feature allows you to filter route information and customize the management of cloud network connectivity.
   * 
   * @remarks
   * Routing policies are sorted by priority. A smaller priority value indicates a higher priority. Each routing policy is a collection of conditional statements and execution statements. When a routing policy is executed, routes are matched against conditional statements starting from the routing policy with the highest priority. For routes that match all conditions, the routing policy either permits or denies the routes based on the policy action. Routes that are permitted can have their attributes modified. For routes that do not match all conditions, the system permits the routes by default. For more information, see [Routing policy overview](https://help.aliyun.com/document_detail/124157.html).
   * `CreateCenRouteMap` is an asynchronous operation. After you call this operation, a routing policy ID is returned, but the routing policy has not been created. The system continues to create the routing policy in the background. You can call `DescribeCenRouteMaps` to query the status of the routing policy.
   * - If the routing policy is in the **Creating** state, the routing policy is being created. In this state, you can only perform query operations.
   * - If the routing policy is in the **Active** state, the routing policy is created.
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
   * Flow logs help you catch traffic information transmitted by transit router instances and network instance connections (inter-region connections, VPC connections, VPN connections, ECR connections, and VBR connections). Before creating a flow log, note the following:
   * - Only Enterprise Edition transit routers support flow log creation.
   * - For traffic information of inter-region connections, flow logs catch only outbound traffic of the transit router. Inbound traffic of the transit router is not caught.
   *     
   *     For example, an Elastic Computing Service (ECS) instance in the US (Silicon Valley) region accesses an ECS instance in the US (Virginia) region through Cloud Enterprise Network (CEN). After you configure a flow log for the transit router in the US (Virginia) region, you can view the packet information sent from the US (Virginia) ECS instance to the US (Silicon Valley) ECS instance in the Simple Log Service console. However, you cannot view the packet information sent from the US (Silicon Valley) ECS instance to the US (Virginia) ECS instance. To view the packet information sent from the US (Silicon Valley) ECS instance to the US (Virginia) ECS instance, configure a flow log on the transit router in the US (Silicon Valley) region.
   * - When a flow log catches traffic information of a VPC connection, it catches only the traffic transmitted by the transit router elastic network interface (ENI). To view traffic information of other ENIs in the VPC, see [VPC flow log overview](https://help.aliyun.com/document_detail/127150.html).
   * - The `CreateFlowlog` operation is asynchronous. After you send a request, the system returns a flow log ID while the flow log is still being created in the background. You can call the `DescribeFlowlogs` operation to query the status of the flow log.
   *     - If the flow log is in the **Creating** state, the flow log is being created. In this state, you can only perform query operations.
   *     - If the flow log is in the **Active** state, the flow log is created.
   * ### Before you begin
   * Before creating a flow log for a resource, make sure that you have created the required resources. For information about how to create each resource, see:
   * - [CreateTransitRouterVpcAttachment](https://help.aliyun.com/document_detail/468237.html)
   * - [CreateTransitRouterEcrAttachment](https://help.aliyun.com/document_detail/2715446.html)
   * - [CreateTransitRouterVpnAttachment](https://help.aliyun.com/document_detail/468249.html)
   * - [CreateTransitRouterVbrAttachment](https://help.aliyun.com/document_detail/468243.html)
   * - [CreateTransitRouterPeerAttachment](https://help.aliyun.com/document_detail/468270.html)
   * - [CreateTransitRouter](https://help.aliyun.com/document_detail/468222.html)
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
   * Flow logs help you catch traffic information transmitted by transit router instances and network instance connections (inter-region connections, VPC connections, VPN connections, ECR connections, and VBR connections). Before creating a flow log, note the following:
   * - Only Enterprise Edition transit routers support flow log creation.
   * - For traffic information of inter-region connections, flow logs catch only outbound traffic of the transit router. Inbound traffic of the transit router is not caught.
   *     
   *     For example, an Elastic Computing Service (ECS) instance in the US (Silicon Valley) region accesses an ECS instance in the US (Virginia) region through Cloud Enterprise Network (CEN). After you configure a flow log for the transit router in the US (Virginia) region, you can view the packet information sent from the US (Virginia) ECS instance to the US (Silicon Valley) ECS instance in the Simple Log Service console. However, you cannot view the packet information sent from the US (Silicon Valley) ECS instance to the US (Virginia) ECS instance. To view the packet information sent from the US (Silicon Valley) ECS instance to the US (Virginia) ECS instance, configure a flow log on the transit router in the US (Silicon Valley) region.
   * - When a flow log catches traffic information of a VPC connection, it catches only the traffic transmitted by the transit router elastic network interface (ENI). To view traffic information of other ENIs in the VPC, see [VPC flow log overview](https://help.aliyun.com/document_detail/127150.html).
   * - The `CreateFlowlog` operation is asynchronous. After you send a request, the system returns a flow log ID while the flow log is still being created in the background. You can call the `DescribeFlowlogs` operation to query the status of the flow log.
   *     - If the flow log is in the **Creating** state, the flow log is being created. In this state, you can only perform query operations.
   *     - If the flow log is in the **Active** state, the flow log is created.
   * ### Before you begin
   * Before creating a flow log for a resource, make sure that you have created the required resources. For information about how to create each resource, see:
   * - [CreateTransitRouterVpcAttachment](https://help.aliyun.com/document_detail/468237.html)
   * - [CreateTransitRouterEcrAttachment](https://help.aliyun.com/document_detail/2715446.html)
   * - [CreateTransitRouterVpnAttachment](https://help.aliyun.com/document_detail/468249.html)
   * - [CreateTransitRouterVbrAttachment](https://help.aliyun.com/document_detail/468243.html)
   * - [CreateTransitRouterPeerAttachment](https://help.aliyun.com/document_detail/468270.html)
   * - [CreateTransitRouter](https://help.aliyun.com/document_detail/468222.html)
   * 
   * @param request - CreateFlowlogRequest
   * @returns CreateFlowlogResponse
   */
  async createFlowlog(request: $_model.CreateFlowlogRequest): Promise<$_model.CreateFlowlogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFlowlogWithOptions(request, runtime);
  }

  /**
   * A traffic marking policy captures traffic that matches traffic classification rules and adds a Differentiated Services Code Point (DSCP) value to the traffic as a mark. Creates a traffic marking policy by calling CreateTrafficMarkingPolicy.
   * 
   * @remarks
   * - Only Enterprise Edition transit routers support creating traffic marking policies.
   * - **CreateTrafficMarkingPolicy** is an asynchronous operation. After you send a request, the system returns a traffic marking policy ID but the traffic marking policy is not yet created. The system continues to create the traffic marking policy in the background. You can call **ListTrafficMarkingPolicies** to query the status of the traffic marking policy. 
   *     - If the traffic marking policy is in the **Creating** state, the traffic marking policy is being created. In this state, you can only query the traffic marking policy but cannot perform other operations.
   *     - If the traffic marking policy is in the **Active** state, the traffic marking policy is created.
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
   * A traffic marking policy captures traffic that matches traffic classification rules and adds a Differentiated Services Code Point (DSCP) value to the traffic as a mark. Creates a traffic marking policy by calling CreateTrafficMarkingPolicy.
   * 
   * @remarks
   * - Only Enterprise Edition transit routers support creating traffic marking policies.
   * - **CreateTrafficMarkingPolicy** is an asynchronous operation. After you send a request, the system returns a traffic marking policy ID but the traffic marking policy is not yet created. The system continues to create the traffic marking policy in the background. You can call **ListTrafficMarkingPolicies** to query the status of the traffic marking policy. 
   *     - If the traffic marking policy is in the **Creating** state, the traffic marking policy is being created. In this state, you can only query the traffic marking policy but cannot perform other operations.
   *     - If the traffic marking policy is in the **Active** state, the traffic marking policy is created.
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
   * After you add an aggregate route to an Enterprise Edition transit router route table, the Enterprise Edition transit router propagates the aggregate route only to the route tables of VPC-connected instances that are associated with the current Enterprise Edition transit router route table and have route synchronization enabled.
   * Before creating an aggregate route, make sure that the following operations are completed. Otherwise, the Enterprise Edition transit router does not propagate the aggregate route to VPC instance route tables:
   * - The VPC instance is associated with the Enterprise Edition transit router route table. For more information, see [AssociateTransitRouterAttachmentWithRouteTable](https://help.aliyun.com/document_detail/261242.html).
   * - Route synchronization is enabled for the VPC instance. For more information, see [CreateTransitRouterVpcAttachment](https://help.aliyun.com/document_detail/261358.html).
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
   * After you add an aggregate route to an Enterprise Edition transit router route table, the Enterprise Edition transit router propagates the aggregate route only to the route tables of VPC-connected instances that are associated with the current Enterprise Edition transit router route table and have route synchronization enabled.
   * Before creating an aggregate route, make sure that the following operations are completed. Otherwise, the Enterprise Edition transit router does not propagate the aggregate route to VPC instance route tables:
   * - The VPC instance is associated with the Enterprise Edition transit router route table. For more information, see [AssociateTransitRouterAttachmentWithRouteTable](https://help.aliyun.com/document_detail/261242.html).
   * - Route synchronization is enabled for the VPC instance. For more information, see [CreateTransitRouterVpcAttachment](https://help.aliyun.com/document_detail/261358.html).
   * 
   * @param request - CreateTransitRouteTableAggregationRequest
   * @returns CreateTransitRouteTableAggregationResponse
   */
  async createTransitRouteTableAggregation(request: $_model.CreateTransitRouteTableAggregationRequest): Promise<$_model.CreateTransitRouteTableAggregationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTransitRouteTableAggregationWithOptions(request, runtime);
  }

  /**
   * Calls the CreateTransitRouter operation to create an Enterprise Edition transit router instance.
   * 
   * @remarks
   * - You can call the **CreateTransitRouter** operation to create an Enterprise Edition transit router instance. Enterprise Edition transit routers are available only in some regions. For more information about regions, see [What is Cloud Enterprise Network?](https://help.aliyun.com/document_detail/181681.html).
   * - **CreateTransitRouter** is an asynchronous operation. After you send a request, the system returns an Enterprise Edition transit router instance ID but the instance is not yet created. The creation task is still running in the background. You can call the [ListTransitRouters](https://help.aliyun.com/document_detail/261219.html) operation to query the status of the Enterprise Edition transit router instance.
   *     - If the Enterprise Edition transit router instance is in the **Creating** state, the instance is being created. In this state, you can only query the instance but cannot perform other operations on it.
   *     - If the Enterprise Edition transit router instance is in the **Active** state, the instance is created.
   * - Only one transit router instance can be created in each region within a Cloud Enterprise Network (CEN) instance.
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
   * Calls the CreateTransitRouter operation to create an Enterprise Edition transit router instance.
   * 
   * @remarks
   * - You can call the **CreateTransitRouter** operation to create an Enterprise Edition transit router instance. Enterprise Edition transit routers are available only in some regions. For more information about regions, see [What is Cloud Enterprise Network?](https://help.aliyun.com/document_detail/181681.html).
   * - **CreateTransitRouter** is an asynchronous operation. After you send a request, the system returns an Enterprise Edition transit router instance ID but the instance is not yet created. The creation task is still running in the background. You can call the [ListTransitRouters](https://help.aliyun.com/document_detail/261219.html) operation to query the status of the Enterprise Edition transit router instance.
   *     - If the Enterprise Edition transit router instance is in the **Creating** state, the instance is being created. In this state, you can only query the instance but cannot perform other operations on it.
   *     - If the Enterprise Edition transit router instance is in the **Active** state, the instance is created.
   * - Only one transit router instance can be created in each region within a Cloud Enterprise Network (CEN) instance.
   * 
   * @param request - CreateTransitRouterRequest
   * @returns CreateTransitRouterResponse
   */
  async createTransitRouter(request: $_model.CreateTransitRouterRequest): Promise<$_model.CreateTransitRouterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTransitRouterWithOptions(request, runtime);
  }

  /**
   * A transit router CIDR block is a custom CIDR block that you define for a transit router, similar to a CIDR block used to assign IP addresses to a router loopback interface. Calls the CreateTransitRouterCidr operation to create a CIDR block for a transit router.
   * 
   * @remarks
   * A transit router CIDR block is a custom CIDR block that you define for a transit router, similar to a CIDR block used to assign IP addresses to a router loopback interface. Transit router CIDR blocks are used to assign addresses to network instance connections. For more information, see [Transit router CIDR blocks](https://help.aliyun.com/document_detail/462635.html).
   * The **CreateTransitRouterCidr** operation is used only to add a CIDR block to a transit router after the transit router is created.
   * Before you create a transit router CIDR block, take note of the following information:
   * - Only Enterprise Edition transit routers support transit router CIDR blocks.
   * - For limits on transit router CIDR blocks, see [Limits on transit router CIDR blocks](https://help.aliyun.com/document_detail/462635.html).
   * - A maximum of five CIDR blocks can be configured for a transit router. The subnet mask of each CIDR block must be 16 to 24 bits in length.
   * - CIDR blocks that fall within 100.64.0.0/10, 224.0.0.0/4, 127.0.0.0/8, or 169.254.0.0/16 and their subnets are not supported.
   * - Each CIDR block cannot conflict with any CIDR block that needs to communicate within the Cloud Enterprise Network (CEN) instance.
   * - Each CIDR block must be unique within the same CEN instance.
   * - After you add a CIDR block to a transit router, the system automatically reserves three CIDR blocks from the CIDR block when you create the first VPN connection on the transit router. The reserved CIDR blocks are used by the system to create VPN connections in the background. The system assigns IP addresses to IPsec connections from the remaining CIDR blocks.
   *     You can call the [ListTransitRouterCidrAllocation](https://help.aliyun.com/document_detail/464173.html) operation to query the CIDR blocks that are reserved by the system or from which IP addresses are allocated.
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
   * A transit router CIDR block is a custom CIDR block that you define for a transit router, similar to a CIDR block used to assign IP addresses to a router loopback interface. Calls the CreateTransitRouterCidr operation to create a CIDR block for a transit router.
   * 
   * @remarks
   * A transit router CIDR block is a custom CIDR block that you define for a transit router, similar to a CIDR block used to assign IP addresses to a router loopback interface. Transit router CIDR blocks are used to assign addresses to network instance connections. For more information, see [Transit router CIDR blocks](https://help.aliyun.com/document_detail/462635.html).
   * The **CreateTransitRouterCidr** operation is used only to add a CIDR block to a transit router after the transit router is created.
   * Before you create a transit router CIDR block, take note of the following information:
   * - Only Enterprise Edition transit routers support transit router CIDR blocks.
   * - For limits on transit router CIDR blocks, see [Limits on transit router CIDR blocks](https://help.aliyun.com/document_detail/462635.html).
   * - A maximum of five CIDR blocks can be configured for a transit router. The subnet mask of each CIDR block must be 16 to 24 bits in length.
   * - CIDR blocks that fall within 100.64.0.0/10, 224.0.0.0/4, 127.0.0.0/8, or 169.254.0.0/16 and their subnets are not supported.
   * - Each CIDR block cannot conflict with any CIDR block that needs to communicate within the Cloud Enterprise Network (CEN) instance.
   * - Each CIDR block must be unique within the same CEN instance.
   * - After you add a CIDR block to a transit router, the system automatically reserves three CIDR blocks from the CIDR block when you create the first VPN connection on the transit router. The reserved CIDR blocks are used by the system to create VPN connections in the background. The system assigns IP addresses to IPsec connections from the remaining CIDR blocks.
   *     You can call the [ListTransitRouterCidrAllocation](https://help.aliyun.com/document_detail/464173.html) operation to query the CIDR blocks that are reserved by the system or from which IP addresses are allocated.
   * 
   * @param request - CreateTransitRouterCidrRequest
   * @returns CreateTransitRouterCidrResponse
   */
  async createTransitRouterCidr(request: $_model.CreateTransitRouterCidrRequest): Promise<$_model.CreateTransitRouterCidrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTransitRouterCidrWithOptions(request, runtime);
  }

  /**
   * Creates a connection between an Express Connect Router (ECR) instance and a transit router instance in the same region.
   * 
   * @remarks
   * - Only Enterprise Edition transit routers support ECR connections.
   * - You can create an ECR connection on an Enterprise Edition transit router in the following ways: 
   *   - If you have already created an Enterprise Edition transit router instance in the target region, you can create an ECR connection by specifying **EcrId**, **RegionId**, and **TransitRouterId**. 
   *   - If you do not have an Enterprise Edition transit router instance in the target region, you can create an ECR connection by specifying **EcrId**, **CenId**, and **RegionId**. The system performs automatic creation of an Enterprise Edition transit router instance when the ECR connection is created. 
   * - The CreateTransitRouterEcrAttachment operation is asynchronous. After you send a request, the system returns an ECR connection ID but the ECR connection is not yet created. The creation node runs in the background. You can invoke the ListTransitRouterEcrAttachments operation to query the status of the ECR connection. 
   *   - If the ECR connection is in the **Attaching** state, the ECR connection is being created. In this state, you can only execute query operations on the ECR connection but cannot execute other operations on it. 
   *   - If the ECR connection is in the **Attached** state, the ECR connection is created. 
   * - After an ECR connection is created, the ECR connection does not have a routing learning relationship or an associated forwarding relationship with any Enterprise Edition transit router route table by default. 
   *   After the ECR connection establishes a [routing learning relationship](https://help.aliyun.com/document_detail/468300.html) with an Enterprise Edition transit router route table, the system automatically propagates the routes of the ECR instance to the Enterprise Edition transit router route table.
   * - After an ECR connection is created, the system automatically propagates the routes in the Enterprise Edition transit router route table associated with the ECR connection to the route table of the ECR instance.
   * ### Before you begin 
   * - The Alibaba Cloud account that owns the Enterprise Edition transit router and the Alibaba Cloud account that owns the ECR instance must belong to the same enterprise. 
   * - Enterprise Edition transit routers support connections to ECR instances that belong to the same account or a different account. Before creating a cross-account ECR connection, obtain authorization from the cross-account ECR instance. For more information, see [Cross-account authorization for network instances](https://help.aliyun.com/document_detail/181553.html).
   * - **Before invoking this operation to create an ECR connection, invoke the [CreateExpressConnectRouterAssociation](https://help.aliyun.com/document_detail/2712082.html) operation to associate the ECR instance with the Enterprise Edition transit router instance.**
   *   **When you invoke the DeleteTransitRouterEcrAttachment operation to force delete an ECR connection, the system also deletes the association between the ECR instance and the Enterprise Edition transit router instance. You do not need to delete the association separately.**
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
   * Creates a connection between an Express Connect Router (ECR) instance and a transit router instance in the same region.
   * 
   * @remarks
   * - Only Enterprise Edition transit routers support ECR connections.
   * - You can create an ECR connection on an Enterprise Edition transit router in the following ways: 
   *   - If you have already created an Enterprise Edition transit router instance in the target region, you can create an ECR connection by specifying **EcrId**, **RegionId**, and **TransitRouterId**. 
   *   - If you do not have an Enterprise Edition transit router instance in the target region, you can create an ECR connection by specifying **EcrId**, **CenId**, and **RegionId**. The system performs automatic creation of an Enterprise Edition transit router instance when the ECR connection is created. 
   * - The CreateTransitRouterEcrAttachment operation is asynchronous. After you send a request, the system returns an ECR connection ID but the ECR connection is not yet created. The creation node runs in the background. You can invoke the ListTransitRouterEcrAttachments operation to query the status of the ECR connection. 
   *   - If the ECR connection is in the **Attaching** state, the ECR connection is being created. In this state, you can only execute query operations on the ECR connection but cannot execute other operations on it. 
   *   - If the ECR connection is in the **Attached** state, the ECR connection is created. 
   * - After an ECR connection is created, the ECR connection does not have a routing learning relationship or an associated forwarding relationship with any Enterprise Edition transit router route table by default. 
   *   After the ECR connection establishes a [routing learning relationship](https://help.aliyun.com/document_detail/468300.html) with an Enterprise Edition transit router route table, the system automatically propagates the routes of the ECR instance to the Enterprise Edition transit router route table.
   * - After an ECR connection is created, the system automatically propagates the routes in the Enterprise Edition transit router route table associated with the ECR connection to the route table of the ECR instance.
   * ### Before you begin 
   * - The Alibaba Cloud account that owns the Enterprise Edition transit router and the Alibaba Cloud account that owns the ECR instance must belong to the same enterprise. 
   * - Enterprise Edition transit routers support connections to ECR instances that belong to the same account or a different account. Before creating a cross-account ECR connection, obtain authorization from the cross-account ECR instance. For more information, see [Cross-account authorization for network instances](https://help.aliyun.com/document_detail/181553.html).
   * - **Before invoking this operation to create an ECR connection, invoke the [CreateExpressConnectRouterAssociation](https://help.aliyun.com/document_detail/2712082.html) operation to associate the ECR instance with the Enterprise Edition transit router instance.**
   *   **When you invoke the DeleteTransitRouterEcrAttachment operation to force delete an ECR connection, the system also deletes the association between the ECR instance and the Enterprise Edition transit router instance. You do not need to delete the association separately.**
   * 
   * @param request - CreateTransitRouterEcrAttachmentRequest
   * @returns CreateTransitRouterEcrAttachmentResponse
   */
  async createTransitRouterEcrAttachment(request: $_model.CreateTransitRouterEcrAttachmentRequest): Promise<$_model.CreateTransitRouterEcrAttachmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTransitRouterEcrAttachmentWithOptions(request, runtime);
  }

  /**
   * Creates a multicast domain. A multicast domain defines the scope of a multicast network within a region. Only resources within the multicast domain can send and receive multicast traffic. Resources outside the multicast domain cannot send or receive multicast traffic.
   * 
   * @remarks
   * Before you begin:
   * - Make sure that you have created an Enterprise Edition transit router in the region where you want to establish a multicast network and that you have enabled the multicast feature for the Enterprise Edition transit router. For more information, see [CreateTransitRouter](https://help.aliyun.com/document_detail/261169.html).
   *     If you created an Enterprise Edition transit router instance before applying for multicast resources, the Enterprise Edition transit router instance does not support the multicast feature. You can delete the current Enterprise Edition transit router instance and create a new one. For information about how to delete an Enterprise Edition transit router instance, see [DeleteTransitRouter](https://help.aliyun.com/document_detail/261218.html).
   * - When you call the **CreateTransitRouterMulticastDomain** operation, if you specify the **CenId** and **RegionId** parameters, you do not need to specify the **TransitRouterId** parameter. If you specify the **TransitRouterId** parameter, you do not need to specify the **CenId** or **RegionId** parameter.
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
   * Creates a multicast domain. A multicast domain defines the scope of a multicast network within a region. Only resources within the multicast domain can send and receive multicast traffic. Resources outside the multicast domain cannot send or receive multicast traffic.
   * 
   * @remarks
   * Before you begin:
   * - Make sure that you have created an Enterprise Edition transit router in the region where you want to establish a multicast network and that you have enabled the multicast feature for the Enterprise Edition transit router. For more information, see [CreateTransitRouter](https://help.aliyun.com/document_detail/261169.html).
   *     If you created an Enterprise Edition transit router instance before applying for multicast resources, the Enterprise Edition transit router instance does not support the multicast feature. You can delete the current Enterprise Edition transit router instance and create a new one. For information about how to delete an Enterprise Edition transit router instance, see [DeleteTransitRouter](https://help.aliyun.com/document_detail/261218.html).
   * - When you call the **CreateTransitRouterMulticastDomain** operation, if you specify the **CenId** and **RegionId** parameters, you do not need to specify the **TransitRouterId** parameter. If you specify the **TransitRouterId** parameter, you do not need to specify the **CenId** or **RegionId** parameter.
   * 
   * @param request - CreateTransitRouterMulticastDomainRequest
   * @returns CreateTransitRouterMulticastDomainResponse
   */
  async createTransitRouterMulticastDomain(request: $_model.CreateTransitRouterMulticastDomainRequest): Promise<$_model.CreateTransitRouterMulticastDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTransitRouterMulticastDomainWithOptions(request, runtime);
  }

  /**
   * After network instances (VPCs, VBRs, and IPsec connections) are connected to a transit router, you must create an inter-region connection between transit routers to enable communication between network instances in different regions. You can call the CreateTransitRouterPeerAttachment operation to create an inter-region connection for an Enterprise Edition transit router instance.
   * 
   * @remarks
   * - Enterprise Edition transit routers support the following two bandwidth allocation methods:
   *   - **Allocate from bandwidth package**:
   *     To use this method, you must first purchase a bandwidth package and allocate bandwidth from the bandwidth package to the inter-region connection. For more information about how to purchase a bandwidth package, see [CreateCenBandwidthPackage](https://help.aliyun.com/document_detail/65919.html).
   *   - **Pay-by-data-transfer**:
   *     To use this method, you must set a bandwidth limit for the inter-region connection. The system charges you based on the actual traffic of the inter-region connection. For more information about billing, see [Inter-region data transfer](https://help.aliyun.com/document_detail/337827.html).
   * - **CreateTransitRouterPeerAttachment** is an asynchronous operation. After you send a request, the system returns an inter-region connection ID, but the inter-region connection is not yet created. The creation task still runs in the background. You can call the **ListTransitRouterPeerAttachments** operation to query the status of the inter-region connection.
   *   - If the inter-region connection is in the **Attaching** state, the inter-region connection is being created. In this state, you can only query the inter-region connection but cannot perform other operations on it.
   *   - If the inter-region connection is in the **Attached** state, the inter-region connection is created.
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
   * After network instances (VPCs, VBRs, and IPsec connections) are connected to a transit router, you must create an inter-region connection between transit routers to enable communication between network instances in different regions. You can call the CreateTransitRouterPeerAttachment operation to create an inter-region connection for an Enterprise Edition transit router instance.
   * 
   * @remarks
   * - Enterprise Edition transit routers support the following two bandwidth allocation methods:
   *   - **Allocate from bandwidth package**:
   *     To use this method, you must first purchase a bandwidth package and allocate bandwidth from the bandwidth package to the inter-region connection. For more information about how to purchase a bandwidth package, see [CreateCenBandwidthPackage](https://help.aliyun.com/document_detail/65919.html).
   *   - **Pay-by-data-transfer**:
   *     To use this method, you must set a bandwidth limit for the inter-region connection. The system charges you based on the actual traffic of the inter-region connection. For more information about billing, see [Inter-region data transfer](https://help.aliyun.com/document_detail/337827.html).
   * - **CreateTransitRouterPeerAttachment** is an asynchronous operation. After you send a request, the system returns an inter-region connection ID, but the inter-region connection is not yet created. The creation task still runs in the background. You can call the **ListTransitRouterPeerAttachments** operation to query the status of the inter-region connection.
   *   - If the inter-region connection is in the **Attaching** state, the inter-region connection is being created. In this state, you can only query the inter-region connection but cannot perform other operations on it.
   *   - If the inter-region connection is in the **Attached** state, the inter-region connection is created.
   * 
   * @param request - CreateTransitRouterPeerAttachmentRequest
   * @returns CreateTransitRouterPeerAttachmentResponse
   */
  async createTransitRouterPeerAttachment(request: $_model.CreateTransitRouterPeerAttachmentRequest): Promise<$_model.CreateTransitRouterPeerAttachmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTransitRouterPeerAttachmentWithOptions(request, runtime);
  }

  /**
   * Associates a prefix list with an Enterprise Edition transit router route table.
   * 
   * @remarks
   * Before you associate a prefix list with an Enterprise Edition transit router route table, make sure that the following conditions are met:
   * - You have learned about the limits and routing compatibility information of prefix lists. For more information, see [Prefix lists](https://help.aliyun.com/document_detail/445605.html).
   * - You have created a prefix list. For more information, see [CreateVpcPrefixList](https://help.aliyun.com/document_detail/437367.html).
   * - If you want to associate a cross-account prefix list with an Enterprise Edition transit router route table, make sure that the prefix list has been shared with the Alibaba Cloud account that owns the Enterprise Edition transit router route table. For more information about how to share a prefix list, see [Overview of resource sharing](https://help.aliyun.com/document_detail/160622.html) and [API reference (Resource Sharing)](https://help.aliyun.com/document_detail/193445.html).
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
   * Associates a prefix list with an Enterprise Edition transit router route table.
   * 
   * @remarks
   * Before you associate a prefix list with an Enterprise Edition transit router route table, make sure that the following conditions are met:
   * - You have learned about the limits and routing compatibility information of prefix lists. For more information, see [Prefix lists](https://help.aliyun.com/document_detail/445605.html).
   * - You have created a prefix list. For more information, see [CreateVpcPrefixList](https://help.aliyun.com/document_detail/437367.html).
   * - If you want to associate a cross-account prefix list with an Enterprise Edition transit router route table, make sure that the prefix list has been shared with the Alibaba Cloud account that owns the Enterprise Edition transit router route table. For more information about how to share a prefix list, see [Overview of resource sharing](https://help.aliyun.com/document_detail/160622.html) and [API reference (Resource Sharing)](https://help.aliyun.com/document_detail/193445.html).
   * 
   * @param request - CreateTransitRouterPrefixListAssociationRequest
   * @returns CreateTransitRouterPrefixListAssociationResponse
   */
  async createTransitRouterPrefixListAssociation(request: $_model.CreateTransitRouterPrefixListAssociationRequest): Promise<$_model.CreateTransitRouterPrefixListAssociationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTransitRouterPrefixListAssociationWithOptions(request, runtime);
  }

  /**
   * Adds a route entry to a route table of an Enterprise Edition transit router.
   * 
   * @remarks
   * *CreateTransitRouterRouteEntry** is an asynchronous operation. After you send a request, the system returns a route entry ID but the route entry is not yet created. The creation task continues to run in the background. You can call **ListTransitRouterRouteEntries** to query the status of the route entry. 
   * - If the route entry is in the **Creating** state, the route entry is being created. In this state, you can only query the route entry. You cannot perform other operations on the route entry.
   * - If the route entry is in the **Active** state, the route entry is created.
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
   * Adds a route entry to a route table of an Enterprise Edition transit router.
   * 
   * @remarks
   * *CreateTransitRouterRouteEntry** is an asynchronous operation. After you send a request, the system returns a route entry ID but the route entry is not yet created. The creation task continues to run in the background. You can call **ListTransitRouterRouteEntries** to query the status of the route entry. 
   * - If the route entry is in the **Creating** state, the route entry is being created. In this state, you can only query the route entry. You cannot perform other operations on the route entry.
   * - If the route entry is in the **Active** state, the route entry is created.
   * 
   * @param request - CreateTransitRouterRouteEntryRequest
   * @returns CreateTransitRouterRouteEntryResponse
   */
  async createTransitRouterRouteEntry(request: $_model.CreateTransitRouterRouteEntryRequest): Promise<$_model.CreateTransitRouterRouteEntryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTransitRouterRouteEntryWithOptions(request, runtime);
  }

  /**
   * Creates a custom route table for an Enterprise Edition transit router by calling the CreateTransitRouterRouteTable operation.
   * 
   * @remarks
   * - Only Enterprise Edition transit routers support custom route tables. For information about the regions and zones that support Enterprise Edition transit routers, see [What is CEN?](https://help.aliyun.com/document_detail/181681.html).
   * - **CreateTransitRouterRouteTable** is an asynchronous operation. After you send a request, the system returns a route table ID but the route table is not yet created. The system continues to create the route table in the background. You can call **ListTransitRouterRouteTables** to query the status of the route table.
   *     - If the route table is in the **Creating** state, the route table is being created. In this state, you can only perform query operations.
   *     - If the route table is in the **Active** state, the route table is created.
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
   * Creates a custom route table for an Enterprise Edition transit router by calling the CreateTransitRouterRouteTable operation.
   * 
   * @remarks
   * - Only Enterprise Edition transit routers support custom route tables. For information about the regions and zones that support Enterprise Edition transit routers, see [What is CEN?](https://help.aliyun.com/document_detail/181681.html).
   * - **CreateTransitRouterRouteTable** is an asynchronous operation. After you send a request, the system returns a route table ID but the route table is not yet created. The system continues to create the route table in the background. You can call **ListTransitRouterRouteTables** to query the status of the route table.
   *     - If the route table is in the **Creating** state, the route table is being created. In this state, you can only perform query operations.
   *     - If the route table is in the **Active** state, the route table is created.
   * 
   * @param request - CreateTransitRouterRouteTableRequest
   * @returns CreateTransitRouterRouteTableResponse
   */
  async createTransitRouterRouteTable(request: $_model.CreateTransitRouterRouteTableRequest): Promise<$_model.CreateTransitRouterRouteTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTransitRouterRouteTableWithOptions(request, runtime);
  }

  /**
   * Invokes the CreateTransitRouterVbrAttachment operation to connect a Virtual Border Router (VBR) network instance to a transit router instance in the same region. After the connection is established, the transit router can help you achieve private network peering.
   * 
   * @remarks
   * - For information about the regions and zones supported by Enterprise Edition transit routers, see [What is Cloud Enterprise Network?](https://help.aliyun.com/document_detail/181681.html).
   * - You can create a VBR connection on an Enterprise Edition transit router in the following ways:
   *     - If you have already created an Enterprise Edition transit router instance in the target region, you can create a VBR connection by specifying **VbrId**, **RegionId**, and **TransitRouterId**.
   *     - If you do not have an Enterprise Edition transit router instance in the target region, you can create a VBR connection by specifying **VbrId**, **CenId**, and **RegionId**. The system automatically creates an Enterprise Edition transit router instance when the VBR connection is created.
   * - **CreateTransitRouterVbrAttachment** is an asynchronous operation. After you send a request, the system returns a VBR connection ID but the VBR connection is not yet created. The creation task runs in the background. You can call **ListTransitRouterVbrAttachments** to query the status of the VBR connection.
   *     - If the VBR connection is in the **Attaching** state, the VBR connection is being created. In this state, you can only query the VBR connection and cannot perform other operations.
   *     - If the VBR connection is in the **Attached** state, the VBR connection is created.
   * - The Alibaba Cloud account that owns the transit router and the Alibaba Cloud account that owns the VBR instance must belong to the same enterprise.
   * - Transit routers support connecting to VBR instances that belong to the same account or a different account. Before creating a cross-account VBR connection, obtain authorization from the VBR instance owner. For more information, see [Grant permissions for cross-account network instances](https://help.aliyun.com/document_detail/181553.html).
   * - After a VBR connection is created, the VBR connection does not establish route learning or association forwarding relationships with any transit router route table by default.
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
   * Invokes the CreateTransitRouterVbrAttachment operation to connect a Virtual Border Router (VBR) network instance to a transit router instance in the same region. After the connection is established, the transit router can help you achieve private network peering.
   * 
   * @remarks
   * - For information about the regions and zones supported by Enterprise Edition transit routers, see [What is Cloud Enterprise Network?](https://help.aliyun.com/document_detail/181681.html).
   * - You can create a VBR connection on an Enterprise Edition transit router in the following ways:
   *     - If you have already created an Enterprise Edition transit router instance in the target region, you can create a VBR connection by specifying **VbrId**, **RegionId**, and **TransitRouterId**.
   *     - If you do not have an Enterprise Edition transit router instance in the target region, you can create a VBR connection by specifying **VbrId**, **CenId**, and **RegionId**. The system automatically creates an Enterprise Edition transit router instance when the VBR connection is created.
   * - **CreateTransitRouterVbrAttachment** is an asynchronous operation. After you send a request, the system returns a VBR connection ID but the VBR connection is not yet created. The creation task runs in the background. You can call **ListTransitRouterVbrAttachments** to query the status of the VBR connection.
   *     - If the VBR connection is in the **Attaching** state, the VBR connection is being created. In this state, you can only query the VBR connection and cannot perform other operations.
   *     - If the VBR connection is in the **Attached** state, the VBR connection is created.
   * - The Alibaba Cloud account that owns the transit router and the Alibaba Cloud account that owns the VBR instance must belong to the same enterprise.
   * - Transit routers support connecting to VBR instances that belong to the same account or a different account. Before creating a cross-account VBR connection, obtain authorization from the VBR instance owner. For more information, see [Grant permissions for cross-account network instances](https://help.aliyun.com/document_detail/181553.html).
   * - After a VBR connection is created, the VBR connection does not establish route learning or association forwarding relationships with any transit router route table by default.
   * 
   * @param request - CreateTransitRouterVbrAttachmentRequest
   * @returns CreateTransitRouterVbrAttachmentResponse
   */
  async createTransitRouterVbrAttachment(request: $_model.CreateTransitRouterVbrAttachmentRequest): Promise<$_model.CreateTransitRouterVbrAttachmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTransitRouterVbrAttachmentWithOptions(request, runtime);
  }

  /**
   * Calls the CreateTransitRouterVpcAttachment operation to connect a Virtual Private Cloud (VPC) instance to a transit router instance for private network peering. After the connection is established, the transit router instance can help you achieve private network peering.
   * 
   * @remarks
   * - You can create a VPC connection on an Enterprise Edition transit router in the following two ways:
   *     - If you have already created an Enterprise Edition transit router instance in the target region, you can create a VPC connection by specifying **VpcId**, **ZoneMappings.N.VSwitchId**, **ZoneMappings.N.ZoneId**, **TransitRouterId**, and **RegionId**.
   *     - If you do not have an Enterprise Edition transit router instance in the target region, you can create a VPC connection by specifying **VpcId**, **ZoneMappings.N.VSwitchId**, **ZoneMappings.N.ZoneId**, **CenId**, and **RegionId**. The system performs automatic creation of an Enterprise Edition transit router instance when the VPC connection is created.
   * - The **CreateTransitRouterVpcAttachment** operation is asynchronous. After you send a request, the system returns a VPC connection ID, but the VPC connection is not yet created. The creation node is still running in the background. You can invoke the [ListTransitRouterVpcAttachments](https://help.aliyun.com/document_detail/261222.html) operation to query the status of the VPC connection.
   *     - If the VPC connection is in the **Attaching** state, the VPC connection is being created. In this state, you can only execute query operations on the VPC connection but cannot execute other operations.
   *     - If the VPC connection is in the **Attached** state, the VPC connection is created.
   * - After a VPC connection is created, the VPC connection does not establish routing learning or associate forwarding relationships with any transit router routing table by default.
   * ### Before you begin
   * Before you call this operation to create a VPC connection, make sure that the following conditions are met:
   * - The VPC instance has at least one vSwitch instance in a zone supported by the Enterprise Edition transit router, and the vSwitch instance has at least one idle IP address. For information about the regions and zones supported by Enterprise Edition transit routers, see [Regions and zones supported by Enterprise Edition transit routers](https://help.aliyun.com/document_detail/181681.html).
   * - If you want to connect a cross-account VPC-connected instance, obtain the cross-account VPC-connected instance authorization first. For more information, see [Cross-account VPC-connected instance authorization](https://help.aliyun.com/document_detail/181553.html).
   * - Fees are incurred after a VPC connection is created. Make sure that you understand the billing rules. For more information, see [Billing](https://help.aliyun.com/document_detail/189836.html).
   * 
   * @param tmpReq - CreateTransitRouterVpcAttachmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTransitRouterVpcAttachmentResponse
   */
  async createTransitRouterVpcAttachmentWithOptions(tmpReq: $_model.CreateTransitRouterVpcAttachmentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTransitRouterVpcAttachmentResponse> {
    tmpReq.validate();
    let request = new $_model.CreateTransitRouterVpcAttachmentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.options)) {
      request.optionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.options, "Options", "json");
    }

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

    if (!$dara.isNull(request.optionsShrink)) {
      query["Options"] = request.optionsShrink;
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
   * Calls the CreateTransitRouterVpcAttachment operation to connect a Virtual Private Cloud (VPC) instance to a transit router instance for private network peering. After the connection is established, the transit router instance can help you achieve private network peering.
   * 
   * @remarks
   * - You can create a VPC connection on an Enterprise Edition transit router in the following two ways:
   *     - If you have already created an Enterprise Edition transit router instance in the target region, you can create a VPC connection by specifying **VpcId**, **ZoneMappings.N.VSwitchId**, **ZoneMappings.N.ZoneId**, **TransitRouterId**, and **RegionId**.
   *     - If you do not have an Enterprise Edition transit router instance in the target region, you can create a VPC connection by specifying **VpcId**, **ZoneMappings.N.VSwitchId**, **ZoneMappings.N.ZoneId**, **CenId**, and **RegionId**. The system performs automatic creation of an Enterprise Edition transit router instance when the VPC connection is created.
   * - The **CreateTransitRouterVpcAttachment** operation is asynchronous. After you send a request, the system returns a VPC connection ID, but the VPC connection is not yet created. The creation node is still running in the background. You can invoke the [ListTransitRouterVpcAttachments](https://help.aliyun.com/document_detail/261222.html) operation to query the status of the VPC connection.
   *     - If the VPC connection is in the **Attaching** state, the VPC connection is being created. In this state, you can only execute query operations on the VPC connection but cannot execute other operations.
   *     - If the VPC connection is in the **Attached** state, the VPC connection is created.
   * - After a VPC connection is created, the VPC connection does not establish routing learning or associate forwarding relationships with any transit router routing table by default.
   * ### Before you begin
   * Before you call this operation to create a VPC connection, make sure that the following conditions are met:
   * - The VPC instance has at least one vSwitch instance in a zone supported by the Enterprise Edition transit router, and the vSwitch instance has at least one idle IP address. For information about the regions and zones supported by Enterprise Edition transit routers, see [Regions and zones supported by Enterprise Edition transit routers](https://help.aliyun.com/document_detail/181681.html).
   * - If you want to connect a cross-account VPC-connected instance, obtain the cross-account VPC-connected instance authorization first. For more information, see [Cross-account VPC-connected instance authorization](https://help.aliyun.com/document_detail/181553.html).
   * - Fees are incurred after a VPC connection is created. Make sure that you understand the billing rules. For more information, see [Billing](https://help.aliyun.com/document_detail/189836.html).
   * 
   * @param request - CreateTransitRouterVpcAttachmentRequest
   * @returns CreateTransitRouterVpcAttachmentResponse
   */
  async createTransitRouterVpcAttachment(request: $_model.CreateTransitRouterVpcAttachmentRequest): Promise<$_model.CreateTransitRouterVpcAttachmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTransitRouterVpcAttachmentWithOptions(request, runtime);
  }

  /**
   * Transit routers support connections to IPsec connections of VPN gateways. An on-premises data center can directly connect to a transit router through an IPsec connection, and then communicate with other networks through the transit router. Calls the CreateTransitRouterVpnAttachment operation to create a VPN connection.
   * 
   * @remarks
   * - After a VPN connection is created, the VPN connection does not establish route learning or association forwarding relationships with any transit router route table by default.
   * - When you call the `CreateTransitRouterVpnAttachment` operation, if you specify values for the **CenId** and **RegionId** parameters, you do not need to specify the **TransitRouterId** parameter. If you specify values for the **TransitRouterId** and **RegionId** parameters, you do not need to specify the **CenId** parameter.
   * ### Before you begin
   * - Before you create a VPN connection, make sure that you have created an IPsec connection in the region where the transit router instance resides and that the IPsec connection is not bindeded to any resource. For more information, see [CreateVpnAttachment](https://help.aliyun.com/document_detail/442455.html).
   * - If the transit router instance needs to connect to an IPsec connection that belongs to a different Alibaba Cloud account, make sure that the IPsec connection has been authorized to the transit router instance. For more information, see [GrantInstanceToTransitRouter](https://help.aliyun.com/document_detail/417520.html).
   * - Before you create a VPN connection, make sure that you have configured the TR CIDR block for the transit router. For more information, see [CreateTransitRouterCidr](https://help.aliyun.com/document_detail/468230.html).
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
   * Transit routers support connections to IPsec connections of VPN gateways. An on-premises data center can directly connect to a transit router through an IPsec connection, and then communicate with other networks through the transit router. Calls the CreateTransitRouterVpnAttachment operation to create a VPN connection.
   * 
   * @remarks
   * - After a VPN connection is created, the VPN connection does not establish route learning or association forwarding relationships with any transit router route table by default.
   * - When you call the `CreateTransitRouterVpnAttachment` operation, if you specify values for the **CenId** and **RegionId** parameters, you do not need to specify the **TransitRouterId** parameter. If you specify values for the **TransitRouterId** and **RegionId** parameters, you do not need to specify the **CenId** parameter.
   * ### Before you begin
   * - Before you create a VPN connection, make sure that you have created an IPsec connection in the region where the transit router instance resides and that the IPsec connection is not bindeded to any resource. For more information, see [CreateVpnAttachment](https://help.aliyun.com/document_detail/442455.html).
   * - If the transit router instance needs to connect to an IPsec connection that belongs to a different Alibaba Cloud account, make sure that the IPsec connection has been authorized to the transit router instance. For more information, see [GrantInstanceToTransitRouter](https://help.aliyun.com/document_detail/417520.html).
   * - Before you create a VPN connection, make sure that you have configured the TR CIDR block for the transit router. For more information, see [CreateTransitRouterCidr](https://help.aliyun.com/document_detail/468230.html).
   * 
   * @param request - CreateTransitRouterVpnAttachmentRequest
   * @returns CreateTransitRouterVpnAttachmentResponse
   */
  async createTransitRouterVpnAttachment(request: $_model.CreateTransitRouterVpnAttachmentRequest): Promise<$_model.CreateTransitRouterVpnAttachmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTransitRouterVpnAttachmentWithOptions(request, runtime);
  }

  /**
   * Deactivates a flow log. After the flow log is deactivated, traffic of the specified resource is no longer captured.
   * 
   * @remarks
   * The `DeactiveFlowLog` operation is asynchronous. After you send a request, the system returns a **RequestId** but the flow log is not completely deactivated. The deactivation task continues to run in the background. You can call the `DescribeFlowlogs` operation to query the status of the flow log.
   * - If the flow log is in the **Modifying** state, the flow log is being deactivated. In this state, you can only perform query operations.
   * - If the flow log is in the **Inactive** state, the flow log is deactivated.
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
   * Deactivates a flow log. After the flow log is deactivated, traffic of the specified resource is no longer captured.
   * 
   * @remarks
   * The `DeactiveFlowLog` operation is asynchronous. After you send a request, the system returns a **RequestId** but the flow log is not completely deactivated. The deactivation task continues to run in the background. You can call the `DescribeFlowlogs` operation to query the status of the flow log.
   * - If the flow log is in the **Modifying** state, the flow log is being deactivated. In this state, you can only perform query operations.
   * - If the flow log is in the **Inactive** state, the flow log is deactivated.
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
   * *DeleteCen** is an asynchronous operation. After you send a request, the system returns a **RequestId**, but the CEN instance is not yet deleted. The deletion task continues to run in the background. You can call the **DescribeCens** operation to query the status of the CEN instance. 
   * - If the CEN instance is in the **Deleting** state, the CEN instance is being deleted. In this state, you can only query the CEN instance. You cannot perform other operations on it.
   * - If the CEN instance cannot be found, the CEN instance is deleted.
   * ### Before you begin
   * Before you delete a CEN instance, make sure that no bandwidth plans exist under the CEN instance, and that no network instance connections or custom route tables exist under the transit routers of the CEN instance:
   * - To delete network instance connections, see:
   *     - [DeleteTransitRouterVpcAttachment](https://help.aliyun.com/document_detail/261220.html)
   *     - [DeleteTransitRouterVbrAttachment](https://help.aliyun.com/document_detail/261223.html)
   *     - [DeleteTransitRouterVpnAttachment](https://help.aliyun.com/document_detail/443992.html)
   *     - [DeleteTransitRouterPeerAttachment](https://help.aliyun.com/document_detail/261227.html)
   *     > To delete network instance connections under a Basic Edition transit router, see [DetachCenChildInstance](https://help.aliyun.com/document_detail/65915.html).
   * - To delete custom route tables of an Enterprise Edition transit router, see [DeleteTransitRouterRouteTable](https://help.aliyun.com/document_detail/261235.html).
   * - To disassociate a bandwidth plan from a CEN instance, see [UnassociateCenBandwidthPackage](https://help.aliyun.com/document_detail/65935.html).
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
   * *DeleteCen** is an asynchronous operation. After you send a request, the system returns a **RequestId**, but the CEN instance is not yet deleted. The deletion task continues to run in the background. You can call the **DescribeCens** operation to query the status of the CEN instance. 
   * - If the CEN instance is in the **Deleting** state, the CEN instance is being deleted. In this state, you can only query the CEN instance. You cannot perform other operations on it.
   * - If the CEN instance cannot be found, the CEN instance is deleted.
   * ### Before you begin
   * Before you delete a CEN instance, make sure that no bandwidth plans exist under the CEN instance, and that no network instance connections or custom route tables exist under the transit routers of the CEN instance:
   * - To delete network instance connections, see:
   *     - [DeleteTransitRouterVpcAttachment](https://help.aliyun.com/document_detail/261220.html)
   *     - [DeleteTransitRouterVbrAttachment](https://help.aliyun.com/document_detail/261223.html)
   *     - [DeleteTransitRouterVpnAttachment](https://help.aliyun.com/document_detail/443992.html)
   *     - [DeleteTransitRouterPeerAttachment](https://help.aliyun.com/document_detail/261227.html)
   *     > To delete network instance connections under a Basic Edition transit router, see [DetachCenChildInstance](https://help.aliyun.com/document_detail/65915.html).
   * - To delete custom route tables of an Enterprise Edition transit router, see [DeleteTransitRouterRouteTable](https://help.aliyun.com/document_detail/261235.html).
   * - To disassociate a bandwidth plan from a CEN instance, see [UnassociateCenBandwidthPackage](https://help.aliyun.com/document_detail/65935.html).
   * 
   * @param request - DeleteCenRequest
   * @returns DeleteCenResponse
   */
  async deleteCen(request: $_model.DeleteCenRequest): Promise<$_model.DeleteCenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCenWithOptions(request, runtime);
  }

  /**
   * Deletes a bandwidth plan instance by calling the DeleteCenBandwidthPackage operation.
   * 
   * @remarks
   * <props="china">
   * - Before you delete a bandwidth plan instance, make sure that the bandwidth plan instance is disassociated from the Cloud Enterprise Network (CEN) instance. For more information, see [UnassociateCenBandwidthPackage](https://help.aliyun.com/document_detail/65935.html).
   * - To delete a bandwidth plan instance whose billing method is PREPAY (subscription), go to the [Order Center](https://usercenter2.aliyun.com/refund/refund) to unsubscribe. If you have questions about unsubscription, see [Unsubscription rules](https://www.alibabacloud.com/help/en/user-center/user-guide/unsubscription-rules#p-1qo-3ce-m7z). This operation does not support deleting subscription bandwidth plan instances.
   * <props="intl">
   * Before you delete a bandwidth plan instance, make sure that the bandwidth plan instance is disassociated from the Cloud Enterprise Network (CEN) instance. For more information, see [UnassociateCenBandwidthPackage](https://help.aliyun.com/document_detail/65935.html).
   * 
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
   * Deletes a bandwidth plan instance by calling the DeleteCenBandwidthPackage operation.
   * 
   * @remarks
   * <props="china">
   * - Before you delete a bandwidth plan instance, make sure that the bandwidth plan instance is disassociated from the Cloud Enterprise Network (CEN) instance. For more information, see [UnassociateCenBandwidthPackage](https://help.aliyun.com/document_detail/65935.html).
   * - To delete a bandwidth plan instance whose billing method is PREPAY (subscription), go to the [Order Center](https://usercenter2.aliyun.com/refund/refund) to unsubscribe. If you have questions about unsubscription, see [Unsubscription rules](https://www.alibabacloud.com/help/en/user-center/user-guide/unsubscription-rules#p-1qo-3ce-m7z). This operation does not support deleting subscription bandwidth plan instances.
   * <props="intl">
   * Before you delete a bandwidth plan instance, make sure that the bandwidth plan instance is disassociated from the Cloud Enterprise Network (CEN) instance. For more information, see [UnassociateCenBandwidthPackage](https://help.aliyun.com/document_detail/65935.html).
   * 
   * @param request - DeleteCenBandwidthPackageRequest
   * @returns DeleteCenBandwidthPackageResponse
   */
  async deleteCenBandwidthPackage(request: $_model.DeleteCenBandwidthPackageRequest): Promise<$_model.DeleteCenBandwidthPackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCenBandwidthPackageWithOptions(request, runtime);
  }

  /**
   * Deletes a route entry from a network instance connected to an Enterprise Edition transit router.
   * 
   * @remarks
   * - Only route entries whose next hop is a **transit router connection** (network instance connection) in Virtual Private Cloud (VPC) instances and Virtual Border Router (VBR) instances can be deleted.
   * - **DeleteCenChildInstanceRouteEntryToAttachment** is an asynchronous operation. After you send a request, the system returns a **RequestId** but the route entry is not yet deleted. The deletion task runs in the background. You can call the **DescribeRouteEntryList** operation of VPC to query the status of the route entry. 
   *     - If the route entry is in the **Deleting** state, the route entry is being deleted. In this state, you can only query the route entry but cannot perform other operations on it.
   *     - If the specified route entry cannot be found, the route entry is deleted.
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
   * Deletes a route entry from a network instance connected to an Enterprise Edition transit router.
   * 
   * @remarks
   * - Only route entries whose next hop is a **transit router connection** (network instance connection) in Virtual Private Cloud (VPC) instances and Virtual Border Router (VBR) instances can be deleted.
   * - **DeleteCenChildInstanceRouteEntryToAttachment** is an asynchronous operation. After you send a request, the system returns a **RequestId** but the route entry is not yet deleted. The deletion task runs in the background. You can call the **DescribeRouteEntryList** operation of VPC to query the status of the route entry. 
   *     - If the route entry is in the **Deleting** state, the route entry is being deleted. In this state, you can only query the route entry but cannot perform other operations on it.
   *     - If the specified route entry cannot be found, the route entry is deleted.
   * 
   * @param request - DeleteCenChildInstanceRouteEntryToAttachmentRequest
   * @returns DeleteCenChildInstanceRouteEntryToAttachmentResponse
   */
  async deleteCenChildInstanceRouteEntryToAttachment(request: $_model.DeleteCenChildInstanceRouteEntryToAttachmentRequest): Promise<$_model.DeleteCenChildInstanceRouteEntryToAttachmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCenChildInstanceRouteEntryToAttachmentWithOptions(request, runtime);
  }

  /**
   * Deletes a route entry from a network instance by calling the DeleteCenChildInstanceRouteEntryToCen operation.
   * 
   * @remarks
   * - The DeleteCenChildInstanceRouteEntryToCen operation is not available by default. To use this operation, <props="china">[submit a ticket](https://selfservice.console.aliyun.com/ticket/category/cbn/today)<props="intl">[submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
   * - The DeleteCenChildInstanceRouteEntryToCen operation does not support deleting route entries from network instances attached to an Enterprise Edition transit router.
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
   * Deletes a route entry from a network instance by calling the DeleteCenChildInstanceRouteEntryToCen operation.
   * 
   * @remarks
   * - The DeleteCenChildInstanceRouteEntryToCen operation is not available by default. To use this operation, <props="china">[submit a ticket](https://selfservice.console.aliyun.com/ticket/category/cbn/today)<props="intl">[submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
   * - The DeleteCenChildInstanceRouteEntryToCen operation does not support deleting route entries from network instances attached to an Enterprise Edition transit router.
   * 
   * @param request - DeleteCenChildInstanceRouteEntryToCenRequest
   * @returns DeleteCenChildInstanceRouteEntryToCenResponse
   */
  async deleteCenChildInstanceRouteEntryToCen(request: $_model.DeleteCenChildInstanceRouteEntryToCenRequest): Promise<$_model.DeleteCenChildInstanceRouteEntryToCenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCenChildInstanceRouteEntryToCenWithOptions(request, runtime);
  }

  /**
   * Deletes a traffic scheduling policy by calling the DeleteCenInterRegionTrafficQosPolicy operation.
   * 
   * @remarks
   * - Before you delete a traffic scheduling policy, you must delete all queues except the default queue from the traffic scheduling policy. For more information, see [DeleteCenInterRegionTrafficQosQueue](https://help.aliyun.com/document_detail/419062.html).
   * - **DeleteCenInterRegionTrafficQosPolicy** is an asynchronous operation. After you send a request, the system returns a **RequestId** but the traffic scheduling policy is not yet deleted. The deletion task runs in the background. You can call the **ListCenInterRegionTrafficQosPolicies** operation to query the status of the traffic scheduling policy. 
   *     - If the traffic scheduling policy is in the **Deleting** state, the traffic scheduling policy is being deleted. In this state, you can only query the traffic scheduling policy but cannot perform other operations on it.
   *     - If the traffic scheduling policy cannot be found, the traffic scheduling policy is deleted.
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
   * Deletes a traffic scheduling policy by calling the DeleteCenInterRegionTrafficQosPolicy operation.
   * 
   * @remarks
   * - Before you delete a traffic scheduling policy, you must delete all queues except the default queue from the traffic scheduling policy. For more information, see [DeleteCenInterRegionTrafficQosQueue](https://help.aliyun.com/document_detail/419062.html).
   * - **DeleteCenInterRegionTrafficQosPolicy** is an asynchronous operation. After you send a request, the system returns a **RequestId** but the traffic scheduling policy is not yet deleted. The deletion task runs in the background. You can call the **ListCenInterRegionTrafficQosPolicies** operation to query the status of the traffic scheduling policy. 
   *     - If the traffic scheduling policy is in the **Deleting** state, the traffic scheduling policy is being deleted. In this state, you can only query the traffic scheduling policy but cannot perform other operations on it.
   *     - If the traffic scheduling policy cannot be found, the traffic scheduling policy is deleted.
   * 
   * @param request - DeleteCenInterRegionTrafficQosPolicyRequest
   * @returns DeleteCenInterRegionTrafficQosPolicyResponse
   */
  async deleteCenInterRegionTrafficQosPolicy(request: $_model.DeleteCenInterRegionTrafficQosPolicyRequest): Promise<$_model.DeleteCenInterRegionTrafficQosPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCenInterRegionTrafficQosPolicyWithOptions(request, runtime);
  }

  /**
   * Deletes a queue from a traffic scheduling policy by calling the DeleteCenInterRegionTrafficQosQueue operation.
   * 
   * @remarks
   * - The default queue cannot be deleted.
   * - **DeleteCenInterRegionTrafficQosQueue** is an asynchronous operation. After you send a request, the system returns a **RequestId** but the queue is not yet deleted because the deletion task is still running in the background. You can call the **ListCenInterRegionTrafficQosPolicies** operation to query the queue information. If the specified queue cannot be found, the queue is deleted.
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
   * Deletes a queue from a traffic scheduling policy by calling the DeleteCenInterRegionTrafficQosQueue operation.
   * 
   * @remarks
   * - The default queue cannot be deleted.
   * - **DeleteCenInterRegionTrafficQosQueue** is an asynchronous operation. After you send a request, the system returns a **RequestId** but the queue is not yet deleted because the deletion task is still running in the background. You can call the **ListCenInterRegionTrafficQosPolicies** operation to query the queue information. If the specified queue cannot be found, the queue is deleted.
   * 
   * @param request - DeleteCenInterRegionTrafficQosQueueRequest
   * @returns DeleteCenInterRegionTrafficQosQueueResponse
   */
  async deleteCenInterRegionTrafficQosQueue(request: $_model.DeleteCenInterRegionTrafficQosQueueRequest): Promise<$_model.DeleteCenInterRegionTrafficQosQueueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCenInterRegionTrafficQosQueueWithOptions(request, runtime);
  }

  /**
   * Deletes a specified routing policy.
   * 
   * @remarks
   * DeleteCenRouteMap is an asynchronous operation. After you send a request, the system returns a **RequestId** but the routing policy is not yet fully deleted because the deletion task is still running in the background. You can call the `DescribeCenRouteMaps` operation to query the status of the routing policy.
   * - If the routing policy is in the **Deleting** state, the routing policy is being deleted. In this state, you can only perform query operations.
   * - If the routing policy cannot be found by calling the `DescribeCenRouteMaps` operation, the routing policy is fully deleted.
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
   * Deletes a specified routing policy.
   * 
   * @remarks
   * DeleteCenRouteMap is an asynchronous operation. After you send a request, the system returns a **RequestId** but the routing policy is not yet fully deleted because the deletion task is still running in the background. You can call the `DescribeCenRouteMaps` operation to query the status of the routing policy.
   * - If the routing policy is in the **Deleting** state, the routing policy is being deleted. In this state, you can only perform query operations.
   * - If the routing policy cannot be found by calling the `DescribeCenRouteMaps` operation, the routing policy is fully deleted.
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
   * The `DeleteFlowlog` operation is asynchronous. After you send a request, the system returns a **RequestId** but the flow log is not completely deleted. The deletion task continues to run in the background. You can call the `DescribeFlowlogs` operation to query the status of the flow log.
   * - If the flow log is in the **Deleting** state, the flow log is being deleted. In this state, you can only perform query operations but cannot perform other operations.
   * - If the `DescribeFlowlogs` operation cannot find the flow log, the flow log is completely deleted.
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
   * The `DeleteFlowlog` operation is asynchronous. After you send a request, the system returns a **RequestId** but the flow log is not completely deleted. The deletion task continues to run in the background. You can call the `DescribeFlowlogs` operation to query the status of the flow log.
   * - If the flow log is in the **Deleting** state, the flow log is being deleted. In this state, you can only perform query operations but cannot perform other operations.
   * - If the `DescribeFlowlogs` operation cannot find the flow log, the flow log is completely deleted.
   * 
   * @param request - DeleteFlowlogRequest
   * @returns DeleteFlowlogResponse
   */
  async deleteFlowlog(request: $_model.DeleteFlowlogRequest): Promise<$_model.DeleteFlowlogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFlowlogWithOptions(request, runtime);
  }

  /**
   * Call the DeleteRouteServiceInCen operation to delete the configuration of an Alibaba Cloud service from a Basic Edition transit router.
   * 
   * @remarks
   * *DeleteRouteServiceInCen** is an asynchronous operation. After you send a request, the system returns a **RequestId**, but the operation continues in the background. The system returns a request ID even if you specify an invalid parameter. In this case, the Alibaba Cloud service configuration is not deleted. You can call the **DescribeRouteServicesInCen** operation to query the status of the Alibaba Cloud service.
   * - If the Alibaba Cloud service is in the **Deleting** state, you can only query its configuration. You cannot perform other operations.
   * - If the specified Alibaba Cloud service configuration is not found, the configuration has been deleted.
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
   * Call the DeleteRouteServiceInCen operation to delete the configuration of an Alibaba Cloud service from a Basic Edition transit router.
   * 
   * @remarks
   * *DeleteRouteServiceInCen** is an asynchronous operation. After you send a request, the system returns a **RequestId**, but the operation continues in the background. The system returns a request ID even if you specify an invalid parameter. In this case, the Alibaba Cloud service configuration is not deleted. You can call the **DescribeRouteServicesInCen** operation to query the status of the Alibaba Cloud service.
   * - If the Alibaba Cloud service is in the **Deleting** state, you can only query its configuration. You cannot perform other operations.
   * - If the specified Alibaba Cloud service configuration is not found, the configuration has been deleted.
   * 
   * @param request - DeleteRouteServiceInCenRequest
   * @returns DeleteRouteServiceInCenResponse
   */
  async deleteRouteServiceInCen(request: $_model.DeleteRouteServiceInCenRequest): Promise<$_model.DeleteRouteServiceInCenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRouteServiceInCenWithOptions(request, runtime);
  }

  /**
   * Deletes a traffic marking policy.
   * 
   * @remarks
   * - **DeleteTrafficMarkingPolicy** is an asynchronous operation. After you send a request, the system returns a **RequestId** but the traffic marking policy is not yet deleted. The deletion task continues to run in the background. You can call **ListTrafficMarkingPolicies** to query the status of the traffic marking policy. 
   *     - If the traffic marking policy is in the **Deleting** state, the traffic marking policy is being deleted. In this state, you can only query the traffic marking policy but cannot perform other operations on it.
   *     - If the specified traffic marking policy cannot be found, the traffic marking policy is deleted.
   * - Before you delete a traffic marking policy, delete all traffic classification rules from the traffic marking policy. For more information, see [RemoveTrafficMatchRuleFromTrafficMarkingPolicy](https://help.aliyun.com/document_detail/468330.html).
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
   * Deletes a traffic marking policy.
   * 
   * @remarks
   * - **DeleteTrafficMarkingPolicy** is an asynchronous operation. After you send a request, the system returns a **RequestId** but the traffic marking policy is not yet deleted. The deletion task continues to run in the background. You can call **ListTrafficMarkingPolicies** to query the status of the traffic marking policy. 
   *     - If the traffic marking policy is in the **Deleting** state, the traffic marking policy is being deleted. In this state, you can only query the traffic marking policy but cannot perform other operations on it.
   *     - If the specified traffic marking policy cannot be found, the traffic marking policy is deleted.
   * - Before you delete a traffic marking policy, delete all traffic classification rules from the traffic marking policy. For more information, see [RemoveTrafficMatchRuleFromTrafficMarkingPolicy](https://help.aliyun.com/document_detail/468330.html).
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
   * - Before you delete an aggregate route, make sure that redundant routes exist in the current network. Otherwise, service breaks may occur.
   * - After you delete an aggregate route, the system automatically withdraws the aggregate routing that has been propagated to Virtual Private Cloud (VPC)-connected instances and re-propagates the specific routes within the destination CIDR block of the aggregation route to the VPC-connected instances.
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
   * - Before you delete an aggregate route, make sure that redundant routes exist in the current network. Otherwise, service breaks may occur.
   * - After you delete an aggregate route, the system automatically withdraws the aggregate routing that has been propagated to Virtual Private Cloud (VPC)-connected instances and re-propagates the specific routes within the destination CIDR block of the aggregation route to the VPC-connected instances.
   * 
   * @param request - DeleteTransitRouteTableAggregationRequest
   * @returns DeleteTransitRouteTableAggregationResponse
   */
  async deleteTransitRouteTableAggregation(request: $_model.DeleteTransitRouteTableAggregationRequest): Promise<$_model.DeleteTransitRouteTableAggregationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTransitRouteTableAggregationWithOptions(request, runtime);
  }

  /**
   * Calls the DeleteTransitRouter operation to delete an Enterprise Edition transit router instance.
   * 
   * @remarks
   * *DeleteTransitRouter** is an asynchronous operation. After you send a request, the system returns a **RequestId** but the transit router instance is not yet deleted. The deletion task continues to run in the background. You can call the **ListTransitRouters** operation to query the status of the transit router instance. 
   * - If the transit router instance is in the **Deleting** state, the transit router instance is being deleted. In this state, you can only query the transit router instance. You cannot perform other operations on the transit router instance.
   * - If the transit router instance cannot be found, the transit router instance is deleted.
   * ### Before you begin
   * Before you delete a transit router instance, make sure that the following conditions are met:
   * - No connections exist on the transit router instance.
   *     - To delete a Virtual Private Cloud (VPC) connection, see [DeleteTransitRouterVpcAttachment](https://help.aliyun.com/document_detail/261220.html).
   *     - To delete an Express Connect Router (ECR) connection, see [DeleteTransitRouterEcrAttachment](https://help.aliyun.com/document_detail/2715447.html).
   *     - To delete a Cloud Connect Network (CCN) connection, see [DetachCenChildInstance](https://help.aliyun.com/document_detail/65915.html).
   *     - To delete a VPN connection, see [DeleteTransitRouterVpnAttachment](https://help.aliyun.com/document_detail/443992.html).
   *     - To delete an inter-region connection, see [DeleteTransitRouterPeerAttachment](https://help.aliyun.com/document_detail/261227.html).
   *     - To delete a Virtual Border Router (VBR) connection, see [DeleteTransitRouterVbrAttachment](https://help.aliyun.com/document_detail/261223.html).
   * - No custom route tables exist on the transit router instance. For more information, see [DeleteTransitRouterRouteTable](https://help.aliyun.com/document_detail/261235.html).
   * - No custom route entries, route prefixes, or aggregate routes exist in the default route table of the transit router instance. For more information, see
   *     - To delete custom route entries of an Enterprise Edition transit router, see [DeleteTransitRouterRouteEntry](https://help.aliyun.com/document_detail/468291.html).
   *     - To disassociate a prefix list, see [DeleteTransitRouterPrefixListAssociation](https://help.aliyun.com/document_detail/468312.html).
   *     - To delete an aggregate route, see [DeleteTransitRouteTableAggregation](https://help.aliyun.com/document_detail/476070.html).
   * - No multicast domains exist on the transit router instance. To delete a multicast domain, see [DeleteTransitRouterMulticastDomain](https://help.aliyun.com/document_detail/468386.html).
   * - No traffic marking policies exist on the transit router instance. To delete a traffic marking policy, see [DeleteTrafficMarkingPolicy](https://help.aliyun.com/document_detail/468324.html).
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
   * Calls the DeleteTransitRouter operation to delete an Enterprise Edition transit router instance.
   * 
   * @remarks
   * *DeleteTransitRouter** is an asynchronous operation. After you send a request, the system returns a **RequestId** but the transit router instance is not yet deleted. The deletion task continues to run in the background. You can call the **ListTransitRouters** operation to query the status of the transit router instance. 
   * - If the transit router instance is in the **Deleting** state, the transit router instance is being deleted. In this state, you can only query the transit router instance. You cannot perform other operations on the transit router instance.
   * - If the transit router instance cannot be found, the transit router instance is deleted.
   * ### Before you begin
   * Before you delete a transit router instance, make sure that the following conditions are met:
   * - No connections exist on the transit router instance.
   *     - To delete a Virtual Private Cloud (VPC) connection, see [DeleteTransitRouterVpcAttachment](https://help.aliyun.com/document_detail/261220.html).
   *     - To delete an Express Connect Router (ECR) connection, see [DeleteTransitRouterEcrAttachment](https://help.aliyun.com/document_detail/2715447.html).
   *     - To delete a Cloud Connect Network (CCN) connection, see [DetachCenChildInstance](https://help.aliyun.com/document_detail/65915.html).
   *     - To delete a VPN connection, see [DeleteTransitRouterVpnAttachment](https://help.aliyun.com/document_detail/443992.html).
   *     - To delete an inter-region connection, see [DeleteTransitRouterPeerAttachment](https://help.aliyun.com/document_detail/261227.html).
   *     - To delete a Virtual Border Router (VBR) connection, see [DeleteTransitRouterVbrAttachment](https://help.aliyun.com/document_detail/261223.html).
   * - No custom route tables exist on the transit router instance. For more information, see [DeleteTransitRouterRouteTable](https://help.aliyun.com/document_detail/261235.html).
   * - No custom route entries, route prefixes, or aggregate routes exist in the default route table of the transit router instance. For more information, see
   *     - To delete custom route entries of an Enterprise Edition transit router, see [DeleteTransitRouterRouteEntry](https://help.aliyun.com/document_detail/468291.html).
   *     - To disassociate a prefix list, see [DeleteTransitRouterPrefixListAssociation](https://help.aliyun.com/document_detail/468312.html).
   *     - To delete an aggregate route, see [DeleteTransitRouteTableAggregation](https://help.aliyun.com/document_detail/476070.html).
   * - No multicast domains exist on the transit router instance. To delete a multicast domain, see [DeleteTransitRouterMulticastDomain](https://help.aliyun.com/document_detail/468386.html).
   * - No traffic marking policies exist on the transit router instance. To delete a traffic marking policy, see [DeleteTrafficMarkingPolicy](https://help.aliyun.com/document_detail/468324.html).
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
   * A transit router CIDR block that has allocated IP addresses cannot be deleted.
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
   * A transit router CIDR block that has allocated IP addresses cannot be deleted.
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
   * DeleteTransitRouterEcrAttachment is an asynchronous operation. After you call this operation, the system returns a RequestId, but the ECR connection is not immediately deleted. The deletion task runs in the background. You can call the [ListTransitRouterEcrAttachments](~~2361China~~) operation to query the status of the ECR connection.
   * If the ECR connection is in the **Detaching** state, the ECR connection is being deleted. In this state, you can only query the ECR connection but cannot perform other operations on it.
   * If the specified ECR connection cannot be found, the ECR connection is deleted.
   * When you call the DeleteTransitRouterEcrAttachment operation, make sure that the parameter values you specify are correct. If you specify incorrect parameter values, the system still returns a RequestId but does not delete the ECR connection from the Enterprise Edition transit router.
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
   * DeleteTransitRouterEcrAttachment is an asynchronous operation. After you call this operation, the system returns a RequestId, but the ECR connection is not immediately deleted. The deletion task runs in the background. You can call the [ListTransitRouterEcrAttachments](~~2361China~~) operation to query the status of the ECR connection.
   * If the ECR connection is in the **Detaching** state, the ECR connection is being deleted. In this state, you can only query the ECR connection but cannot perform other operations on it.
   * If the specified ECR connection cannot be found, the ECR connection is deleted.
   * When you call the DeleteTransitRouterEcrAttachment operation, make sure that the parameter values you specify are correct. If you specify incorrect parameter values, the system still returns a RequestId but does not delete the ECR connection from the Enterprise Edition transit router.
   * 
   * @param request - DeleteTransitRouterEcrAttachmentRequest
   * @returns DeleteTransitRouterEcrAttachmentResponse
   */
  async deleteTransitRouterEcrAttachment(request: $_model.DeleteTransitRouterEcrAttachmentRequest): Promise<$_model.DeleteTransitRouterEcrAttachmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTransitRouterEcrAttachmentWithOptions(request, runtime);
  }

  /**
   * Deletes a multicast domain by calling the DeleteTransitRouterMulticastDomain operation.
   * 
   * @remarks
   * Before you delete a multicast domain, make sure that the following conditions are met:
   * - The multicast domain is not associated with any vSwitches. For more information, see [DisassociateTransitRouterMulticastDomain](https://help.aliyun.com/document_detail/429774.html).
   * - No multicast sources or multicast members exist in the multicast domain. For more information, see [DeregisterTransitRouterMulticastGroupSources](https://help.aliyun.com/document_detail/429776.html) and [DeregisterTransitRouterMulticastGroupMembers](https://help.aliyun.com/document_detail/429779.html).
   * - The multicast domain is not associated with other multicast domains as a multicast member. You can delete the multicast member from other multicast domains to dissociate the other multicast domains from the current multicast domain. For more information, see [DeregisterTransitRouterMulticastGroupMembers](https://help.aliyun.com/document_detail/429779.html).
   * - Make sure that the parameter values you specify are valid when you call this operation. If you specify invalid parameter values, the system still returns a RequestId but does not delete the multicast domain.
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
   * Deletes a multicast domain by calling the DeleteTransitRouterMulticastDomain operation.
   * 
   * @remarks
   * Before you delete a multicast domain, make sure that the following conditions are met:
   * - The multicast domain is not associated with any vSwitches. For more information, see [DisassociateTransitRouterMulticastDomain](https://help.aliyun.com/document_detail/429774.html).
   * - No multicast sources or multicast members exist in the multicast domain. For more information, see [DeregisterTransitRouterMulticastGroupSources](https://help.aliyun.com/document_detail/429776.html) and [DeregisterTransitRouterMulticastGroupMembers](https://help.aliyun.com/document_detail/429779.html).
   * - The multicast domain is not associated with other multicast domains as a multicast member. You can delete the multicast member from other multicast domains to dissociate the other multicast domains from the current multicast domain. For more information, see [DeregisterTransitRouterMulticastGroupMembers](https://help.aliyun.com/document_detail/429779.html).
   * - Make sure that the parameter values you specify are valid when you call this operation. If you specify invalid parameter values, the system still returns a RequestId but does not delete the multicast domain.
   * 
   * @param request - DeleteTransitRouterMulticastDomainRequest
   * @returns DeleteTransitRouterMulticastDomainResponse
   */
  async deleteTransitRouterMulticastDomain(request: $_model.DeleteTransitRouterMulticastDomainRequest): Promise<$_model.DeleteTransitRouterMulticastDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTransitRouterMulticastDomainWithOptions(request, runtime);
  }

  /**
   * Calls the DeleteTransitRouterPeerAttachment operation to delete an inter-region connection from an Enterprise Edition transit router.
   * 
   * @remarks
   * The **DeleteTransitRouterPeerAttachment** operation is asynchronous. After you send a request, the system returns a **RequestId** but the inter-region connection is not immediately deleted. The deletion task continues to run in the background. You can call the **ListTransitRouterPeerAttachments** operation to query the status of the inter-region connection.
   * - If the inter-region connection is in the **Detaching** state, the inter-region connection is being deleted. In this state, you can only query the inter-region connection but cannot perform other operations on it.
   * - If the specified inter-region connection cannot be found, the inter-region connection is deleted.
   * When calling the **DeleteTransitRouterPeerAttachment** operation, make sure that the parameter values you specify are correct. If you specify incorrect parameter values, the system still returns a **RequestId** but does not delete the inter-region connection from the Enterprise Edition transit router.
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
   * Calls the DeleteTransitRouterPeerAttachment operation to delete an inter-region connection from an Enterprise Edition transit router.
   * 
   * @remarks
   * The **DeleteTransitRouterPeerAttachment** operation is asynchronous. After you send a request, the system returns a **RequestId** but the inter-region connection is not immediately deleted. The deletion task continues to run in the background. You can call the **ListTransitRouterPeerAttachments** operation to query the status of the inter-region connection.
   * - If the inter-region connection is in the **Detaching** state, the inter-region connection is being deleted. In this state, you can only query the inter-region connection but cannot perform other operations on it.
   * - If the specified inter-region connection cannot be found, the inter-region connection is deleted.
   * When calling the **DeleteTransitRouterPeerAttachment** operation, make sure that the parameter values you specify are correct. If you specify incorrect parameter values, the system still returns a **RequestId** but does not delete the inter-region connection from the Enterprise Edition transit router.
   * 
   * @param request - DeleteTransitRouterPeerAttachmentRequest
   * @returns DeleteTransitRouterPeerAttachmentResponse
   */
  async deleteTransitRouterPeerAttachment(request: $_model.DeleteTransitRouterPeerAttachmentRequest): Promise<$_model.DeleteTransitRouterPeerAttachmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTransitRouterPeerAttachmentWithOptions(request, runtime);
  }

  /**
   * Dissociates a prefix list from an Enterprise Edition transit router route table.
   * 
   * @remarks
   * >Warning: After a prefix list is dissociated from an Enterprise Edition transit router route table, the system automatically withdraws all route entries related to the prefix list from the Enterprise Edition transit router route table. Before dissociating the prefix list, make sure that redundant routes exist in the Enterprise Edition transit router route table. Otherwise, network interruptions may occur.
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
   * Dissociates a prefix list from an Enterprise Edition transit router route table.
   * 
   * @remarks
   * >Warning: After a prefix list is dissociated from an Enterprise Edition transit router route table, the system automatically withdraws all route entries related to the prefix list from the Enterprise Edition transit router route table. Before dissociating the prefix list, make sure that redundant routes exist in the Enterprise Edition transit router route table. Otherwise, network interruptions may occur.
   * 
   * @param request - DeleteTransitRouterPrefixListAssociationRequest
   * @returns DeleteTransitRouterPrefixListAssociationResponse
   */
  async deleteTransitRouterPrefixListAssociation(request: $_model.DeleteTransitRouterPrefixListAssociationRequest): Promise<$_model.DeleteTransitRouterPrefixListAssociationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTransitRouterPrefixListAssociationWithOptions(request, runtime);
  }

  /**
   * Calls the DeleteTransitRouterRouteEntry operation to delete static route entries of the blackhole or connection instance type from an Enterprise Edition transit router forward route table.
   * 
   * @remarks
   * Before you call this operation to delete a route entry, take note of the following information:
   * - If you specify **TransitRouterRouteEntryId** to delete a route entry, you do not need to specify **TransitRouterRouteTableId** or **TransitRouterRouteEntryDestinationCidrBlock**. Otherwise, a parameter conflict error occurs.
   * - If you do not specify **TransitRouterRouteEntryId** to delete a route entry, specify the corresponding parameters based on the next hop type of the route entry:
   *     - To delete a blackhole route, specify **TransitRouterRouteTableId**, **TransitRouterRouteEntryDestinationCidrBlock**, and **TransitRouterRouteEntryNextHopType**.
   *     - To delete a non-blackhole route, specify **TransitRouterRouteTableId**, **TransitRouterRouteEntryDestinationCidrBlock**, **TransitRouterRouteEntryNextHopType**, and **TransitRouterRouteEntryNextHopId**.
   * - **DeleteTransitRouterRouteEntry** is an asynchronous operation. After you send a request, the system returns a **RequestId** but the route entry is not yet deleted. The deletion task runs in the background. You can call **ListTransitRouterRouteEntries** to query the status of the route entry. 
   *     - If the route entry is in the **Deleting** state, the route entry is being deleted. In this state, you can only query the route entry but cannot perform other operations on it.
   *     - If the route entry cannot be found, the route entry is deleted.
   * ### Limits
   * This operation can delete only static route entries. Automatically learned route entries cannot be deleted. You can call [ListTransitRouterRouteEntries](https://help.aliyun.com/document_detail/260941.html) to query the type of a route entry.
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
   * Calls the DeleteTransitRouterRouteEntry operation to delete static route entries of the blackhole or connection instance type from an Enterprise Edition transit router forward route table.
   * 
   * @remarks
   * Before you call this operation to delete a route entry, take note of the following information:
   * - If you specify **TransitRouterRouteEntryId** to delete a route entry, you do not need to specify **TransitRouterRouteTableId** or **TransitRouterRouteEntryDestinationCidrBlock**. Otherwise, a parameter conflict error occurs.
   * - If you do not specify **TransitRouterRouteEntryId** to delete a route entry, specify the corresponding parameters based on the next hop type of the route entry:
   *     - To delete a blackhole route, specify **TransitRouterRouteTableId**, **TransitRouterRouteEntryDestinationCidrBlock**, and **TransitRouterRouteEntryNextHopType**.
   *     - To delete a non-blackhole route, specify **TransitRouterRouteTableId**, **TransitRouterRouteEntryDestinationCidrBlock**, **TransitRouterRouteEntryNextHopType**, and **TransitRouterRouteEntryNextHopId**.
   * - **DeleteTransitRouterRouteEntry** is an asynchronous operation. After you send a request, the system returns a **RequestId** but the route entry is not yet deleted. The deletion task runs in the background. You can call **ListTransitRouterRouteEntries** to query the status of the route entry. 
   *     - If the route entry is in the **Deleting** state, the route entry is being deleted. In this state, you can only query the route entry but cannot perform other operations on it.
   *     - If the route entry cannot be found, the route entry is deleted.
   * ### Limits
   * This operation can delete only static route entries. Automatically learned route entries cannot be deleted. You can call [ListTransitRouterRouteEntries](https://help.aliyun.com/document_detail/260941.html) to query the type of a route entry.
   * 
   * @param request - DeleteTransitRouterRouteEntryRequest
   * @returns DeleteTransitRouterRouteEntryResponse
   */
  async deleteTransitRouterRouteEntry(request: $_model.DeleteTransitRouterRouteEntryRequest): Promise<$_model.DeleteTransitRouterRouteEntryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTransitRouterRouteEntryWithOptions(request, runtime);
  }

  /**
   * Deletes a custom route table from an Enterprise Edition transit router by calling the DeleteTransitRouterRouteTable operation.
   * 
   * @remarks
   * - The default route table of an Enterprise Edition transit router cannot be deleted.
   * - **DeleteTransitRouterRouteTable** is an asynchronous operation. After you send a request, the system returns a **RequestId**, but the custom route table is not yet deleted. The deletion task continues to run in the background. You can call **ListTransitRouterRouteTables** to query the status of the custom route table. 
   *     - If the custom route table is in the Deleting state, the custom route table is being deleted. In this state, you can only query the custom route table but cannot perform other operations on it.
   *     - If the custom route table cannot be found, the custom route table is deleted.
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
   * Deletes a custom route table from an Enterprise Edition transit router by calling the DeleteTransitRouterRouteTable operation.
   * 
   * @remarks
   * - The default route table of an Enterprise Edition transit router cannot be deleted.
   * - **DeleteTransitRouterRouteTable** is an asynchronous operation. After you send a request, the system returns a **RequestId**, but the custom route table is not yet deleted. The deletion task continues to run in the background. You can call **ListTransitRouterRouteTables** to query the status of the custom route table. 
   *     - If the custom route table is in the Deleting state, the custom route table is being deleted. In this state, you can only query the custom route table but cannot perform other operations on it.
   *     - If the custom route table cannot be found, the custom route table is deleted.
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
   * *DeleteTransitRouterVbrAttachment** is an asynchronous operation. After you send a request, the system returns a **RequestId** but the VBR connection is not yet deleted. The deletion task continues to run in the background. You can call **ListTransitRouterVbrAttachments** to query the status of the VBR connection. 
   * - If the VBR connection is in the **Detaching** state, the VBR connection is being deleted. In this state, you can only query the VBR connection but cannot perform other operations on it.
   * - If the specified VBR connection cannot be found, the VBR connection is deleted.
   * When calling the DeleteTransitRouterVbrAttachment operation, make sure that the parameter values you specify are correct. If you specify incorrect parameter values, the system still returns a RequestId but does not delete the VBR connection from the Enterprise Edition transit router.
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
   * *DeleteTransitRouterVbrAttachment** is an asynchronous operation. After you send a request, the system returns a **RequestId** but the VBR connection is not yet deleted. The deletion task continues to run in the background. You can call **ListTransitRouterVbrAttachments** to query the status of the VBR connection. 
   * - If the VBR connection is in the **Detaching** state, the VBR connection is being deleted. In this state, you can only query the VBR connection but cannot perform other operations on it.
   * - If the specified VBR connection cannot be found, the VBR connection is deleted.
   * When calling the DeleteTransitRouterVbrAttachment operation, make sure that the parameter values you specify are correct. If you specify incorrect parameter values, the system still returns a RequestId but does not delete the VBR connection from the Enterprise Edition transit router.
   * 
   * @param request - DeleteTransitRouterVbrAttachmentRequest
   * @returns DeleteTransitRouterVbrAttachmentResponse
   */
  async deleteTransitRouterVbrAttachment(request: $_model.DeleteTransitRouterVbrAttachmentRequest): Promise<$_model.DeleteTransitRouterVbrAttachmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTransitRouterVbrAttachmentWithOptions(request, runtime);
  }

  /**
   * Calls the DeleteTransitRouterVpcAttachment operation to delete a virtual private cloud (VPC) connection from an Enterprise Edition transit router.
   * 
   * @remarks
   * *DeleteTransitRouterVpcAttachment** is an asynchronous operation. After you send a request, the system returns a **RequestId** but the VPC connection is not yet deleted. The deletion task continues to run in the background. You can call **ListTransitRouterVpcAttachments** to query the status of the VPC connection. 
   * - If the VPC connection is in the **Detaching** state, the VPC connection is being deleted. In this state, you can only query the VPC connection. You cannot perform other operations on the VPC connection.
   * - If the VPC connection cannot be found, the VPC connection is deleted.
   * When you call **DeleteTransitRouterVpcAttachment**, make sure that the parameter values you specify are valid. If you specify invalid parameter values, the system still returns a **RequestId** but does not delete the VPC connection from the Enterprise Edition transit router.
   * ### Before you begin
   * Before you delete a VPC connection, make sure that you have not configured a routing rule to access PrivateZone by using the VPC-connected instance. To delete the routing rule to PrivateZone, see [UnroutePrivateZoneInCenToVpc](https://help.aliyun.com/document_detail/468375.html).
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
   * Calls the DeleteTransitRouterVpcAttachment operation to delete a virtual private cloud (VPC) connection from an Enterprise Edition transit router.
   * 
   * @remarks
   * *DeleteTransitRouterVpcAttachment** is an asynchronous operation. After you send a request, the system returns a **RequestId** but the VPC connection is not yet deleted. The deletion task continues to run in the background. You can call **ListTransitRouterVpcAttachments** to query the status of the VPC connection. 
   * - If the VPC connection is in the **Detaching** state, the VPC connection is being deleted. In this state, you can only query the VPC connection. You cannot perform other operations on the VPC connection.
   * - If the VPC connection cannot be found, the VPC connection is deleted.
   * When you call **DeleteTransitRouterVpcAttachment**, make sure that the parameter values you specify are valid. If you specify invalid parameter values, the system still returns a **RequestId** but does not delete the VPC connection from the Enterprise Edition transit router.
   * ### Before you begin
   * Before you delete a VPC connection, make sure that you have not configured a routing rule to access PrivateZone by using the VPC-connected instance. To delete the routing rule to PrivateZone, see [UnroutePrivateZoneInCenToVpc](https://help.aliyun.com/document_detail/468375.html).
   * 
   * @param request - DeleteTransitRouterVpcAttachmentRequest
   * @returns DeleteTransitRouterVpcAttachmentResponse
   */
  async deleteTransitRouterVpcAttachment(request: $_model.DeleteTransitRouterVpcAttachmentRequest): Promise<$_model.DeleteTransitRouterVpcAttachmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTransitRouterVpcAttachmentWithOptions(request, runtime);
  }

  /**
   * Deletes a VPN connection by calling the DeleteTransitRouterVpnAttachment operation.
   * 
   * @remarks
   * When you call the **DeleteTransitRouterVpnAttachment** operation, make sure that the parameter values you specify are correct. If you specify incorrect parameter values, the system still returns a **RequestId** but does not delete the VPN connection.
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
   * Deletes a VPN connection by calling the DeleteTransitRouterVpnAttachment operation.
   * 
   * @remarks
   * When you call the **DeleteTransitRouterVpnAttachment** operation, make sure that the parameter values you specify are correct. If you specify incorrect parameter values, the system still returns a **RequestId** but does not delete the VPN connection.
   * 
   * @param request - DeleteTransitRouterVpnAttachmentRequest
   * @returns DeleteTransitRouterVpnAttachmentResponse
   */
  async deleteTransitRouterVpnAttachment(request: $_model.DeleteTransitRouterVpnAttachmentRequest): Promise<$_model.DeleteTransitRouterVpnAttachmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTransitRouterVpnAttachmentWithOptions(request, runtime);
  }

  /**
   * Removes a multicast member from a multicast group if the member no longer needs to receive multicast traffic by calling the DeregisterTransitRouterMulticastGroupMembers operation.
   * 
   * @remarks
   * `DeregisterTransitRouterMulticastGroupMembers` is an asynchronous operation. After you call this operation, the system returns a **RequestId** but the multicast member is not immediately removed. The removal task continues to run in the background. You can call `ListTransitRouterMulticastGroups` to query the status of the multicast member.
   * - If the multicast member is in the **Deregistering** state, the multicast member is being removed. In this state, you can only query the multicast member but cannot perform other operations on it.
   * - If the multicast member cannot be found in the multicast domain when you call the `ListTransitRouterMulticastGroups` operation, the multicast member has been removed.
   * When you call the DeregisterTransitRouterMulticastGroupMembers operation, make sure that the parameter values you specify are correct. If you specify incorrect parameter values, the system still returns a RequestId but does not remove the multicast member.
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
   * Removes a multicast member from a multicast group if the member no longer needs to receive multicast traffic by calling the DeregisterTransitRouterMulticastGroupMembers operation.
   * 
   * @remarks
   * `DeregisterTransitRouterMulticastGroupMembers` is an asynchronous operation. After you call this operation, the system returns a **RequestId** but the multicast member is not immediately removed. The removal task continues to run in the background. You can call `ListTransitRouterMulticastGroups` to query the status of the multicast member.
   * - If the multicast member is in the **Deregistering** state, the multicast member is being removed. In this state, you can only query the multicast member but cannot perform other operations on it.
   * - If the multicast member cannot be found in the multicast domain when you call the `ListTransitRouterMulticastGroups` operation, the multicast member has been removed.
   * When you call the DeregisterTransitRouterMulticastGroupMembers operation, make sure that the parameter values you specify are correct. If you specify incorrect parameter values, the system still returns a RequestId but does not remove the multicast member.
   * 
   * @param request - DeregisterTransitRouterMulticastGroupMembersRequest
   * @returns DeregisterTransitRouterMulticastGroupMembersResponse
   */
  async deregisterTransitRouterMulticastGroupMembers(request: $_model.DeregisterTransitRouterMulticastGroupMembersRequest): Promise<$_model.DeregisterTransitRouterMulticastGroupMembersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deregisterTransitRouterMulticastGroupMembersWithOptions(request, runtime);
  }

  /**
   * Removes a multicast source from a multicast group if you no longer need the multicast source to send multicast traffic.
   * 
   * @remarks
   * `DeregisterTransitRouterMulticastGroupSources` is an asynchronous operation. After you call this operation, the system returns a **RequestId** but the multicast source is not immediately deleted. The deletion task continues to run in the background. You can call the `ListTransitRouterMulticastGroups` operation to query the status of the multicast source.
   * - If the multicast source is in the **Deregistering** state, the multicast source is being deleted. In this state, you can only query the multicast source but cannot perform other operations on it.
   * - If the `ListTransitRouterMulticastGroups` operation cannot find the multicast source in the multicast domain, the multicast source has been deleted.
   * When you call the DeregisterTransitRouterMulticastGroupSources operation, make sure that the parameter values you specify are correct. If you specify incorrect parameter values, the system still returns a RequestId but does not delete the multicast source.
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
   * Removes a multicast source from a multicast group if you no longer need the multicast source to send multicast traffic.
   * 
   * @remarks
   * `DeregisterTransitRouterMulticastGroupSources` is an asynchronous operation. After you call this operation, the system returns a **RequestId** but the multicast source is not immediately deleted. The deletion task continues to run in the background. You can call the `ListTransitRouterMulticastGroups` operation to query the status of the multicast source.
   * - If the multicast source is in the **Deregistering** state, the multicast source is being deleted. In this state, you can only query the multicast source but cannot perform other operations on it.
   * - If the `ListTransitRouterMulticastGroups` operation cannot find the multicast source in the multicast domain, the multicast source has been deleted.
   * When you call the DeregisterTransitRouterMulticastGroupSources operation, make sure that the parameter values you specify are correct. If you specify incorrect parameter values, the system still returns a RequestId but does not delete the multicast source.
   * 
   * @param request - DeregisterTransitRouterMulticastGroupSourcesRequest
   * @returns DeregisterTransitRouterMulticastGroupSourcesResponse
   */
  async deregisterTransitRouterMulticastGroupSources(request: $_model.DeregisterTransitRouterMulticastGroupSourcesRequest): Promise<$_model.DeregisterTransitRouterMulticastGroupSourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deregisterTransitRouterMulticastGroupSourcesWithOptions(request, runtime);
  }

  /**
   * Queries the details of a network instance (VPC, VBR, or CCN) attached to a Cloud Enterprise Network (CEN) instance, including the attachment status and network instance type.
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
   * Queries the details of a network instance (VPC, VBR, or CCN) attached to a Cloud Enterprise Network (CEN) instance, including the attachment status and network instance type.
   * 
   * @param request - DescribeCenAttachedChildInstanceAttributeRequest
   * @returns DescribeCenAttachedChildInstanceAttributeResponse
   */
  async describeCenAttachedChildInstanceAttribute(request: $_model.DescribeCenAttachedChildInstanceAttributeRequest): Promise<$_model.DescribeCenAttachedChildInstanceAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCenAttachedChildInstanceAttributeWithOptions(request, runtime);
  }

  /**
   * Queries information about network instances attached to a Cloud Enterprise Network (CEN) instance.
   * 
   * @remarks
   * You can use this operation to query network instances attached to a CEN instance in the following ways:
   * - Specify `CenId` to query all network instances attached to the CEN instance.
   * - Specify `CenId` and `ChildInstanceRegionId` to query network instances attached to the CEN instance in a specific region.
   * - Specify `CenId` and `ChildInstanceType` to query network instances of a specific type attached to the CEN instance.
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
   * Queries information about network instances attached to a Cloud Enterprise Network (CEN) instance.
   * 
   * @remarks
   * You can use this operation to query network instances attached to a CEN instance in the following ways:
   * - Specify `CenId` to query all network instances attached to the CEN instance.
   * - Specify `CenId` and `ChildInstanceRegionId` to query network instances attached to the CEN instance in a specific region.
   * - Specify `CenId` and `ChildInstanceType` to query network instances of a specific type attached to the CEN instance.
   * 
   * @param request - DescribeCenAttachedChildInstancesRequest
   * @returns DescribeCenAttachedChildInstancesResponse
   */
  async describeCenAttachedChildInstances(request: $_model.DescribeCenAttachedChildInstancesRequest): Promise<$_model.DescribeCenAttachedChildInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCenAttachedChildInstancesWithOptions(request, runtime);
  }

  /**
   * Queries information about bandwidth package instances by calling the DescribeCenBandwidthPackages operation.
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
   * Queries information about bandwidth package instances by calling the DescribeCenBandwidthPackages operation.
   * 
   * @param request - DescribeCenBandwidthPackagesRequest
   * @returns DescribeCenBandwidthPackagesResponse
   */
  async describeCenBandwidthPackages(request: $_model.DescribeCenBandwidthPackagesRequest): Promise<$_model.DescribeCenBandwidthPackagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCenBandwidthPackagesWithOptions(request, runtime);
  }

  /**
   * Invokes the DescribeCenChildInstanceRouteEntries operation to query the route entries of a network instance in a Cloud Enterprise Network (CEN) instance.
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
   * Invokes the DescribeCenChildInstanceRouteEntries operation to query the route entries of a network instance in a Cloud Enterprise Network (CEN) instance.
   * 
   * @param request - DescribeCenChildInstanceRouteEntriesRequest
   * @returns DescribeCenChildInstanceRouteEntriesResponse
   */
  async describeCenChildInstanceRouteEntries(request: $_model.DescribeCenChildInstanceRouteEntriesRequest): Promise<$_model.DescribeCenChildInstanceRouteEntriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCenChildInstanceRouteEntriesWithOptions(request, runtime);
  }

  /**
   * Queries the remaining bandwidth of a specified bandwidth plan instance.
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
   * Queries the remaining bandwidth of a specified bandwidth plan instance.
   * 
   * @param request - DescribeCenGeographicSpanRemainingBandwidthRequest
   * @returns DescribeCenGeographicSpanRemainingBandwidthResponse
   */
  async describeCenGeographicSpanRemainingBandwidth(request: $_model.DescribeCenGeographicSpanRemainingBandwidthRequest): Promise<$_model.DescribeCenGeographicSpanRemainingBandwidthResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCenGeographicSpanRemainingBandwidthWithOptions(request, runtime);
  }

  /**
   * Queries information about connected areas supported by Cloud Enterprise Network (CEN) by calling the DescribeCenGeographicSpans operation.
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
   * Queries information about connected areas supported by Cloud Enterprise Network (CEN) by calling the DescribeCenGeographicSpans operation.
   * 
   * @param request - DescribeCenGeographicSpansRequest
   * @returns DescribeCenGeographicSpansResponse
   */
  async describeCenGeographicSpans(request: $_model.DescribeCenGeographicSpansRequest): Promise<$_model.DescribeCenGeographicSpansResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCenGeographicSpansWithOptions(request, runtime);
  }

  /**
   * Queries the inter-region bandwidth information between regions by calling the DescribeCenInterRegionBandwidthLimits operation.
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
   * Queries the inter-region bandwidth information between regions by calling the DescribeCenInterRegionBandwidthLimits operation.
   * 
   * @param request - DescribeCenInterRegionBandwidthLimitsRequest
   * @returns DescribeCenInterRegionBandwidthLimitsResponse
   */
  async describeCenInterRegionBandwidthLimits(request: $_model.DescribeCenInterRegionBandwidthLimitsRequest): Promise<$_model.DescribeCenInterRegionBandwidthLimitsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCenInterRegionBandwidthLimitsWithOptions(request, runtime);
  }

  /**
   * Queries the PrivateZone service configuration of a Cloud Enterprise Network (CEN) instance.
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
   * Queries the PrivateZone service configuration of a Cloud Enterprise Network (CEN) instance.
   * 
   * @param request - DescribeCenPrivateZoneRoutesRequest
   * @returns DescribeCenPrivateZoneRoutesResponse
   */
  async describeCenPrivateZoneRoutes(request: $_model.DescribeCenPrivateZoneRoutesRequest): Promise<$_model.DescribeCenPrivateZoneRoutesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCenPrivateZoneRoutesWithOptions(request, runtime);
  }

  /**
   * Queries the details of route entries in a specific region of a Cloud Enterprise Network (CEN) instance.
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
   * Queries the details of route entries in a specific region of a Cloud Enterprise Network (CEN) instance.
   * 
   * @param request - DescribeCenRegionDomainRouteEntriesRequest
   * @returns DescribeCenRegionDomainRouteEntriesResponse
   */
  async describeCenRegionDomainRouteEntries(request: $_model.DescribeCenRegionDomainRouteEntriesRequest): Promise<$_model.DescribeCenRegionDomainRouteEntriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCenRegionDomainRouteEntriesWithOptions(request, runtime);
  }

  /**
   * Queries the configured information in route maps by calling the DescribeCenRouteMaps operation.
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
   * Queries the configured information in route maps by calling the DescribeCenRouteMaps operation.
   * 
   * @param request - DescribeCenRouteMapsRequest
   * @returns DescribeCenRouteMapsResponse
   */
  async describeCenRouteMaps(request: $_model.DescribeCenRouteMapsRequest): Promise<$_model.DescribeCenRouteMapsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCenRouteMapsWithOptions(request, runtime);
  }

  /**
   * Queries health check information about virtual border routers (VBRs) in a specified region.
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
   * Queries health check information about virtual border routers (VBRs) in a specified region.
   * 
   * @param request - DescribeCenVbrHealthCheckRequest
   * @returns DescribeCenVbrHealthCheckResponse
   */
  async describeCenVbrHealthCheck(request: $_model.DescribeCenVbrHealthCheckRequest): Promise<$_model.DescribeCenVbrHealthCheckResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCenVbrHealthCheckWithOptions(request, runtime);
  }

  /**
   * Queries information about Cloud Enterprise Network (CEN) instances under the current Alibaba Cloud account, including the instance status, whether IPv6 is enabled, and the list of bandwidth packages associated with the instances.
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
   * Queries information about Cloud Enterprise Network (CEN) instances under the current Alibaba Cloud account, including the instance status, whether IPv6 is enabled, and the list of bandwidth packages associated with the instances.
   * 
   * @param request - DescribeCensRequest
   * @returns DescribeCensResponse
   */
  async describeCens(request: $_model.DescribeCensRequest): Promise<$_model.DescribeCensResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCensWithOptions(request, runtime);
  }

  /**
   * Queries the regions that support network instances loaded to Cloud Enterprise Network (CEN).
   * 
   * @remarks
   * CEN supports different regions for different network instance types. You can specify the ProductType parameter to query the regions supported by CEN for a specific network instance type. If you do not specify the ProductType parameter, the system queries the regions supported by CEN for all network instance types by default.
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
   * Queries the regions that support network instances loaded to Cloud Enterprise Network (CEN).
   * 
   * @remarks
   * CEN supports different regions for different network instance types. You can specify the ProductType parameter to query the regions supported by CEN for a specific network instance type. If you do not specify the ProductType parameter, the system queries the regions supported by CEN for all network instance types by default.
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
   * Queries region information within a specified area.
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
   * Queries region information within a specified area.
   * 
   * @param request - DescribeGeographicRegionMembershipRequest
   * @returns DescribeGeographicRegionMembershipResponse
   */
  async describeGeographicRegionMembership(request: $_model.DescribeGeographicRegionMembershipRequest): Promise<$_model.DescribeGeographicRegionMembershipResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGeographicRegionMembershipWithOptions(request, runtime);
  }

  /**
   * Queries information about cross-account network instances that are authorized to be associated with a Cloud Enterprise Network (CEN) instance.
   * 
   * @remarks
   * When you call the **DescribeGrantRulesToCen** operation, make sure that the parameter values you specify are valid. If you specify invalid parameter values, a **RequestId** is still returned, but information about the cross-account network instances authorized to the CEN instance is not returned.
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
   * Queries information about cross-account network instances that are authorized to be associated with a Cloud Enterprise Network (CEN) instance.
   * 
   * @remarks
   * When you call the **DescribeGrantRulesToCen** operation, make sure that the parameter values you specify are valid. If you specify invalid parameter values, a **RequestId** is still returned, but information about the cross-account network instances authorized to the CEN instance is not returned.
   * 
   * @param request - DescribeGrantRulesToCenRequest
   * @returns DescribeGrantRulesToCenResponse
   */
  async describeGrantRulesToCen(request: $_model.DescribeGrantRulesToCenRequest): Promise<$_model.DescribeGrantRulesToCenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGrantRulesToCenWithOptions(request, runtime);
  }

  /**
   * Queries the authorization information of a network instance for a cross-account Cloud Enterprise Network (CEN) instance, including the Alibaba Cloud account ID of the CEN instance owner and the payer of the network instance.
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
   * Queries the authorization information of a network instance for a cross-account Cloud Enterprise Network (CEN) instance, including the Alibaba Cloud account ID of the CEN instance owner and the payer of the network instance.
   * 
   * @param request - DescribeGrantRulesToResourceRequest
   * @returns DescribeGrantRulesToResourceResponse
   */
  async describeGrantRulesToResource(request: $_model.DescribeGrantRulesToResourceRequest): Promise<$_model.DescribeGrantRulesToResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGrantRulesToResourceWithOptions(request, runtime);
  }

  /**
   * Queries the publish status, next hop associated instance type, and whether publishing or withdrawing is allowed for route entries of network instances (VPCs and VBRs) that are loaded into a Cloud Enterprise Network (CEN) instance.
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
   * Queries the publish status, next hop associated instance type, and whether publishing or withdrawing is allowed for route entries of network instances (VPCs and VBRs) that are loaded into a Cloud Enterprise Network (CEN) instance.
   * 
   * @param request - DescribePublishedRouteEntriesRequest
   * @returns DescribePublishedRouteEntriesResponse
   */
  async describePublishedRouteEntries(request: $_model.DescribePublishedRouteEntriesRequest): Promise<$_model.DescribePublishedRouteEntriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePublishedRouteEntriesWithOptions(request, runtime);
  }

  /**
   * Queries information about conflicting route entries in a network instance.
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
   * Queries information about conflicting route entries in a network instance.
   * 
   * @param request - DescribeRouteConflictRequest
   * @returns DescribeRouteConflictResponse
   */
  async describeRouteConflict(request: $_model.DescribeRouteConflictRequest): Promise<$_model.DescribeRouteConflictResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRouteConflictWithOptions(request, runtime);
  }

  /**
   * Queries the cloud service configurations under a Basic Edition transit router by calling the DescribeRouteServicesInCen operation.
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
   * Queries the cloud service configurations under a Basic Edition transit router by calling the DescribeRouteServicesInCen operation.
   * 
   * @param request - DescribeRouteServicesInCenRequest
   * @returns DescribeRouteServicesInCenResponse
   */
  async describeRouteServicesInCen(request: $_model.DescribeRouteServicesInCenRequest): Promise<$_model.DescribeRouteServicesInCenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRouteServicesInCenWithOptions(request, runtime);
  }

  /**
   * Queries aggregate routes in an Enterprise Edition transit router route table.
   * 
   * @remarks
   * You can specify the **TransitRouteTableId** and **TransitRouteTableAggregationCidr** parameters to query information about a specific aggregate route. If you specify only the **TransitRouteTableId** parameter, the system queries information about all aggregate routes in the specified Enterprise Edition transit router route table.
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
   * Queries aggregate routes in an Enterprise Edition transit router route table.
   * 
   * @remarks
   * You can specify the **TransitRouteTableId** and **TransitRouteTableAggregationCidr** parameters to query information about a specific aggregate route. If you specify only the **TransitRouteTableId** parameter, the system queries information about all aggregate routes in the specified Enterprise Edition transit router route table.
   * 
   * @param request - DescribeTransitRouteTableAggregationRequest
   * @returns DescribeTransitRouteTableAggregationResponse
   */
  async describeTransitRouteTableAggregation(request: $_model.DescribeTransitRouteTableAggregationRequest): Promise<$_model.DescribeTransitRouteTableAggregationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTransitRouteTableAggregationWithOptions(request, runtime);
  }

  /**
   * Queries the configuration details of a specified aggregate route.
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
   * Queries the configuration details of a specified aggregate route.
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
   * @remarks
   * The **DetachCenChildInstance** operation supports detaching only network instances from a Basic Edition transit router.
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
   * @remarks
   * The **DetachCenChildInstance** operation supports detaching only network instances from a Basic Edition transit router.
   * 
   * @param request - DetachCenChildInstanceRequest
   * @returns DetachCenChildInstanceResponse
   */
  async detachCenChildInstance(request: $_model.DetachCenChildInstanceRequest): Promise<$_model.DetachCenChildInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachCenChildInstanceWithOptions(request, runtime);
  }

  /**
   * Disables health checks for a specified virtual border router (VBR).
   * 
   * @remarks
   * *DisableCenVbrHealthCheck** is an asynchronous operation. After you call this operation, the system returns a **RequestId**, but the health check configuration has not been deleted. The deletion task continues to run in the background. You can call **DescribeCenVbrHealthCheck** to query the health check configuration. If the specified health check configuration is not found, the deletion is complete.
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
   * Disables health checks for a specified virtual border router (VBR).
   * 
   * @remarks
   * *DisableCenVbrHealthCheck** is an asynchronous operation. After you call this operation, the system returns a **RequestId**, but the health check configuration has not been deleted. The deletion task continues to run in the background. You can call **DescribeCenVbrHealthCheck** to query the health check configuration. If the specified health check configuration is not found, the deletion is complete.
   * 
   * @param request - DisableCenVbrHealthCheckRequest
   * @returns DisableCenVbrHealthCheckResponse
   */
  async disableCenVbrHealthCheck(request: $_model.DisableCenVbrHealthCheckRequest): Promise<$_model.DisableCenVbrHealthCheckResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableCenVbrHealthCheckWithOptions(request, runtime);
  }

  /**
   * Disables route learning between a network instance connection and a transit router route table.
   * 
   * @remarks
   * *DisableTransitRouterRouteTablePropagation** is an asynchronous operation. After you send a request, the system returns a **RequestId** before the route learning relationship between the network instance connection and the route table is fully removed. The removal task continues to run in the background. You can call **ListTransitRouterRouteTablePropagations** to query the route learning relationship between the network instance connection and the route table. 
   * - If the route learning relationship is in the **Disabling** state, the network instance connection and the route table are being disassociated. In this state, you can only query the route learning relationship. You cannot perform other operations.
   * - If the **ListTransitRouterRouteTableAssociations** operation does not return the route learning relationship between the network instance connection and the route table, the route learning relationship is successfully removed.
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
   * Disables route learning between a network instance connection and a transit router route table.
   * 
   * @remarks
   * *DisableTransitRouterRouteTablePropagation** is an asynchronous operation. After you send a request, the system returns a **RequestId** before the route learning relationship between the network instance connection and the route table is fully removed. The removal task continues to run in the background. You can call **ListTransitRouterRouteTablePropagations** to query the route learning relationship between the network instance connection and the route table. 
   * - If the route learning relationship is in the **Disabling** state, the network instance connection and the route table are being disassociated. In this state, you can only query the route learning relationship. You cannot perform other operations.
   * - If the **ListTransitRouterRouteTableAssociations** operation does not return the route learning relationship between the network instance connection and the route table, the route learning relationship is successfully removed.
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
   * - Before dissociating a vSwitch from a multicast domain, make sure that no multicast sources or multicast members exist under the vSwitch. To delete multicast sources and multicast members, see [DeregisterTransitRouterMulticastGroupSources](https://help.aliyun.com/document_detail/468416.html) and [DeregisterTransitRouterMulticastGroupMembers](https://help.aliyun.com/document_detail/468409.html).
   * - If you specify invalid parameters, the system still returns a RequestId but does not dissociate the vSwitch from the multicast domain.
   * - **DisassociateTransitRouterMulticastDomain** is an asynchronous operation. After you invoke this operation, the system returns a **RequestId** but the dissociation has not yet completed. The dissociation node continues to run in the background. You can invoke **ListTransitRouterMulticastDomainAssociations** to query the associate status between the vSwitch and the multicast domain.
   *     - If the associate status is **Dissociating**, the vSwitch is being dissociated from the multicast domain. In this state, you can only execute query operations on the vSwitch but cannot execute other operations.
   *     - If the vSwitch information cannot be found under the multicast domain, the vSwitch has been successfully dissociated from the multicast domain.
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
   * - Before dissociating a vSwitch from a multicast domain, make sure that no multicast sources or multicast members exist under the vSwitch. To delete multicast sources and multicast members, see [DeregisterTransitRouterMulticastGroupSources](https://help.aliyun.com/document_detail/468416.html) and [DeregisterTransitRouterMulticastGroupMembers](https://help.aliyun.com/document_detail/468409.html).
   * - If you specify invalid parameters, the system still returns a RequestId but does not dissociate the vSwitch from the multicast domain.
   * - **DisassociateTransitRouterMulticastDomain** is an asynchronous operation. After you invoke this operation, the system returns a **RequestId** but the dissociation has not yet completed. The dissociation node continues to run in the background. You can invoke **ListTransitRouterMulticastDomainAssociations** to query the associate status between the vSwitch and the multicast domain.
   *     - If the associate status is **Dissociating**, the vSwitch is being dissociated from the multicast domain. In this state, you can only execute query operations on the vSwitch but cannot execute other operations.
   *     - If the vSwitch information cannot be found under the multicast domain, the vSwitch has been successfully dissociated from the multicast domain.
   * 
   * @param request - DisassociateTransitRouterMulticastDomainRequest
   * @returns DisassociateTransitRouterMulticastDomainResponse
   */
  async disassociateTransitRouterMulticastDomain(request: $_model.DisassociateTransitRouterMulticastDomainRequest): Promise<$_model.DisassociateTransitRouterMulticastDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disassociateTransitRouterMulticastDomainWithOptions(request, runtime);
  }

  /**
   * Dissociates a network instance connection from a route table.
   * 
   * @remarks
   * *DissociateTransitRouterAttachmentFromRouteTable** is an asynchronous operation. After you send a request, the system returns a **RequestId** but the dissociation between the network instance connection and the route table is not complete. The dissociation task continues to run in the background. You can call **ListTransitRouterRouteTableAssociations** to query the association status between the network instance connection and the route table. 
   * - If the association status is **Dissociating**, the network instance connection is being dissociated from the route table. In this state, you can only query the forwarding association between the network instance connection and the route table. You cannot perform other operations.
   * - If the **ListTransitRouterRouteTableAssociations** operation does not return the forwarding association between the network instance connection and the route table, the dissociation is successful.
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
   * Dissociates a network instance connection from a route table.
   * 
   * @remarks
   * *DissociateTransitRouterAttachmentFromRouteTable** is an asynchronous operation. After you send a request, the system returns a **RequestId** but the dissociation between the network instance connection and the route table is not complete. The dissociation task continues to run in the background. You can call **ListTransitRouterRouteTableAssociations** to query the association status between the network instance connection and the route table. 
   * - If the association status is **Dissociating**, the network instance connection is being dissociated from the route table. In this state, you can only query the forwarding association between the network instance connection and the route table. You cannot perform other operations.
   * - If the **ListTransitRouterRouteTableAssociations** operation does not return the forwarding association between the network instance connection and the route table, the dissociation is successful.
   * 
   * @param request - DissociateTransitRouterAttachmentFromRouteTableRequest
   * @returns DissociateTransitRouterAttachmentFromRouteTableResponse
   */
  async dissociateTransitRouterAttachmentFromRouteTable(request: $_model.DissociateTransitRouterAttachmentFromRouteTableRequest): Promise<$_model.DissociateTransitRouterAttachmentFromRouteTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dissociateTransitRouterAttachmentFromRouteTableWithOptions(request, runtime);
  }

  /**
   * Enables the health check feature for a virtual border router (VBR) to detect faults on physical Express Connect circuits in a timely manner. You can also use this operation to modify the health check configuration of a VBR.
   * 
   * @remarks
   * You can configure health checks for a VBR instance to monitor the connectivity of the physical Express Connect circuit between your on-premises data center and Alibaba Cloud, so that issues can be detected promptly.
   * Before using the health check feature, note the following information:
   * - If your VBR instance uses static routing, after you configure the health check, you must add a static route entry in the on-premises data center connected to the VBR instance.
   *     The destination CIDR block of the static route is the source IP address of the health check with a 32-bit subnet mask, and the next hop is the Alibaba Cloud-side IP address of the VBR instance.
   * - If your border router instance uses the BGP dynamic routing protocol, you do not need to add a route entry in the on-premises data center.
   * - The **EnableCenVbrHealthCheck** operation is asynchronous. After you send a request, the system returns a **RequestId**, but the health check instance is not yet created or modified. The creation or modification task continues to run in the background. You can call the **DescribeCenVbrHealthCheck** operation to query the health check configuration. If the health check configuration is returned, the health check has been created or modified.
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
   * Enables the health check feature for a virtual border router (VBR) to detect faults on physical Express Connect circuits in a timely manner. You can also use this operation to modify the health check configuration of a VBR.
   * 
   * @remarks
   * You can configure health checks for a VBR instance to monitor the connectivity of the physical Express Connect circuit between your on-premises data center and Alibaba Cloud, so that issues can be detected promptly.
   * Before using the health check feature, note the following information:
   * - If your VBR instance uses static routing, after you configure the health check, you must add a static route entry in the on-premises data center connected to the VBR instance.
   *     The destination CIDR block of the static route is the source IP address of the health check with a 32-bit subnet mask, and the next hop is the Alibaba Cloud-side IP address of the VBR instance.
   * - If your border router instance uses the BGP dynamic routing protocol, you do not need to add a route entry in the on-premises data center.
   * - The **EnableCenVbrHealthCheck** operation is asynchronous. After you send a request, the system returns a **RequestId**, but the health check instance is not yet created or modified. The creation or modification task continues to run in the background. You can call the **DescribeCenVbrHealthCheck** operation to query the health check configuration. If the health check configuration is returned, the health check has been created or modified.
   * 
   * @param request - EnableCenVbrHealthCheckRequest
   * @returns EnableCenVbrHealthCheckResponse
   */
  async enableCenVbrHealthCheck(request: $_model.EnableCenVbrHealthCheckRequest): Promise<$_model.EnableCenVbrHealthCheckResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableCenVbrHealthCheckWithOptions(request, runtime);
  }

  /**
   * Creates a route learning relationship.
   * 
   * @remarks
   * After you create a network instance connection, you can set up a route learning relationship for it. Once configured, the network instance connection automatically propagates routes from the network instance to its associated route table. Before calling this operation to create a route learning relationship, note the following information:
   * - Only Enterprise Edition transit routers support creating route learning relationships. For information about the regions and zones supported by Enterprise Edition transit routers, see [What is Cloud Enterprise Network (CEN)?](https://help.aliyun.com/document_detail/181681.html).
   * - The **EnableTransitRouterRouteTablePropagation** operation is asynchronous. After you send a request, the system returns a **RequestId**, but the route learning relationship between the network instance connection and the route table is not fully established. The creation task is still running in the background. You can call the **ListTransitRouterRouteTablePropagations** operation to query the route learning relationship between the network instance connection and the route table.
   *     - If the route learning relationship is in the **Enabling** state, the route learning relationship between the network instance connection and the route table is being established. In this state, you can only query the route learning relationship. You cannot perform other operations.
   *     - If the route learning relationship is in the **Active** state, the route learning relationship between the network instance connection and the route table is established.
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
   * Creates a route learning relationship.
   * 
   * @remarks
   * After you create a network instance connection, you can set up a route learning relationship for it. Once configured, the network instance connection automatically propagates routes from the network instance to its associated route table. Before calling this operation to create a route learning relationship, note the following information:
   * - Only Enterprise Edition transit routers support creating route learning relationships. For information about the regions and zones supported by Enterprise Edition transit routers, see [What is Cloud Enterprise Network (CEN)?](https://help.aliyun.com/document_detail/181681.html).
   * - The **EnableTransitRouterRouteTablePropagation** operation is asynchronous. After you send a request, the system returns a **RequestId**, but the route learning relationship between the network instance connection and the route table is not fully established. The creation task is still running in the background. You can call the **ListTransitRouterRouteTablePropagations** operation to query the route learning relationship between the network instance connection and the route table.
   *     - If the route learning relationship is in the **Enabling** state, the route learning relationship between the network instance connection and the route table is being established. In this state, you can only query the route learning relationship. You cannot perform other operations.
   *     - If the route learning relationship is in the **Active** state, the route learning relationship between the network instance connection and the route table is established.
   * 
   * @param request - EnableTransitRouterRouteTablePropagationRequest
   * @returns EnableTransitRouterRouteTablePropagationResponse
   */
  async enableTransitRouterRouteTablePropagation(request: $_model.EnableTransitRouterRouteTablePropagationRequest): Promise<$_model.EnableTransitRouterRouteTablePropagationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableTransitRouterRouteTablePropagationWithOptions(request, runtime);
  }

  /**
   * Grants permissions to a transit router instance to connect to a network instance that belongs to a different Alibaba Cloud account. Before a transit router instance can connect to a network instance that belongs to a different account, the network instance owner must authorize the transit router instance by calling the GrantInstanceToTransitRouter operation.
   * 
   * @remarks
   * - The GrantInstanceToTransitRouter operation only supports granting a transit router instance permissions to connect to cross-account Virtual Private Cloud (VPC) instances, Virtual Border Router (VBR) instances, IPsec connections, and Express Connect Router (ECR) instances.
   *         
   *     To grant a transit router instance permissions to connect to a Cloud Connect Network (CCN) instance, call the [GrantInstanceToCbn](https://help.aliyun.com/document_detail/126141.html) operation.
   * - Before you call the GrantInstanceToTransitRouter operation, make sure that you understand the billing rules of transit routers, the limits on authorization operations, and the prerequisites for authorization operations. For more information, see [Cross-account network instance authorization](https://help.aliyun.com/document_detail/181553.html).
   * - Before you authorize a network instance, make sure that the following operations are completed:
   *   Confirm that the account to which the network instance belongs and the account to which the transit router instance belongs are of the same type.
   *   Obtain the Alibaba Cloud account ID of the account to which the transit router instance belongs.
   *   Obtain the Cloud Enterprise Network (CEN) instance ID to which the transit router instance belongs.
   *   Before you authorize a VBR instance, contact your account manager to activate the VBR instance authorization feature.
   *   Before you authorize an IPsec connection, make sure that the IPsec connection is not associated with any resource:
   *   If the IPsec connection is already associated with a VPN gateway instance, it cannot be associated with a transit router instance in the same account or a different account.
   *   If the IPsec connection is already associated with a transit router instance, you must disassociate it first. For more information, see [Delete a network instance connection](https://help.aliyun.com/document_detail/181554.html).
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
   * Grants permissions to a transit router instance to connect to a network instance that belongs to a different Alibaba Cloud account. Before a transit router instance can connect to a network instance that belongs to a different account, the network instance owner must authorize the transit router instance by calling the GrantInstanceToTransitRouter operation.
   * 
   * @remarks
   * - The GrantInstanceToTransitRouter operation only supports granting a transit router instance permissions to connect to cross-account Virtual Private Cloud (VPC) instances, Virtual Border Router (VBR) instances, IPsec connections, and Express Connect Router (ECR) instances.
   *         
   *     To grant a transit router instance permissions to connect to a Cloud Connect Network (CCN) instance, call the [GrantInstanceToCbn](https://help.aliyun.com/document_detail/126141.html) operation.
   * - Before you call the GrantInstanceToTransitRouter operation, make sure that you understand the billing rules of transit routers, the limits on authorization operations, and the prerequisites for authorization operations. For more information, see [Cross-account network instance authorization](https://help.aliyun.com/document_detail/181553.html).
   * - Before you authorize a network instance, make sure that the following operations are completed:
   *   Confirm that the account to which the network instance belongs and the account to which the transit router instance belongs are of the same type.
   *   Obtain the Alibaba Cloud account ID of the account to which the transit router instance belongs.
   *   Obtain the Cloud Enterprise Network (CEN) instance ID to which the transit router instance belongs.
   *   Before you authorize a VBR instance, contact your account manager to activate the VBR instance authorization feature.
   *   Before you authorize an IPsec connection, make sure that the IPsec connection is not associated with any resource:
   *   If the IPsec connection is already associated with a VPN gateway instance, it cannot be associated with a transit router instance in the same account or a different account.
   *   If the IPsec connection is already associated with a transit router instance, you must disassociate it first. For more information, see [Delete a network instance connection](https://help.aliyun.com/document_detail/181554.html).
   * 
   * @param request - GrantInstanceToTransitRouterRequest
   * @returns GrantInstanceToTransitRouterResponse
   */
  async grantInstanceToTransitRouter(request: $_model.GrantInstanceToTransitRouterRequest): Promise<$_model.GrantInstanceToTransitRouterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.grantInstanceToTransitRouterWithOptions(request, runtime);
  }

  /**
   * Queries route entries that forward traffic to a network instance connection in the route table of a network instance associated with an Enterprise Edition transit router.
   * 
   * @remarks
   * When you call the ListCenChildInstanceRouteEntriesToAttachment operation, make sure that the parameter values you specify are valid. If you specify invalid parameter values, the operation returns a RequestId but does not display the route entries of network instances connected to the Enterprise Edition transit router.
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
   * Queries route entries that forward traffic to a network instance connection in the route table of a network instance associated with an Enterprise Edition transit router.
   * 
   * @remarks
   * When you call the ListCenChildInstanceRouteEntriesToAttachment operation, make sure that the parameter values you specify are valid. If you specify invalid parameter values, the operation returns a RequestId but does not display the route entries of network instances connected to the Enterprise Edition transit router.
   * 
   * @param request - ListCenChildInstanceRouteEntriesToAttachmentRequest
   * @returns ListCenChildInstanceRouteEntriesToAttachmentResponse
   */
  async listCenChildInstanceRouteEntriesToAttachment(request: $_model.ListCenChildInstanceRouteEntriesToAttachmentRequest): Promise<$_model.ListCenChildInstanceRouteEntriesToAttachmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCenChildInstanceRouteEntriesToAttachmentWithOptions(request, runtime);
  }

  /**
   * Queries information about traffic scheduling policies by calling the ListCenInterRegionTrafficQosPolicies operation.
   * 
   * @remarks
   * When you call the **ListCenInterRegionTrafficQosPolicies** operation:
   * - Specify at least one of the **TransitRouterId** and **TrafficQosPolicyId** parameters.
   * - If you do not specify a traffic scheduling policy ID (that is, you do not specify the **TrafficQosPolicyId** parameter), the operation returns only the traffic scheduling policy information based on the values of the **TransitRouterId**, **TransitRouterAttachmentId**, **TrafficQosPolicyName**, and **TrafficQosPolicyDescription** parameters. The queue information under the traffic scheduling policy is not returned (that is, the response does not include the **TrafficQosQueues** field).
   * - If you specify a traffic scheduling policy ID (that is, you specify the **TrafficQosPolicyId** parameter), the operation returns the traffic scheduling policy information and the queue information under the traffic scheduling policy (that is, the response includes the **TrafficQosQueues** field). If the **TrafficQosQueues** field is an empty array, only the default queue exists under the traffic scheduling policy.
   * - Make sure that the parameter values you specify are correct. If you specify incorrect parameter values, the operation still returns a RequestId but does not return traffic scheduling policy information.
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
   * Queries information about traffic scheduling policies by calling the ListCenInterRegionTrafficQosPolicies operation.
   * 
   * @remarks
   * When you call the **ListCenInterRegionTrafficQosPolicies** operation:
   * - Specify at least one of the **TransitRouterId** and **TrafficQosPolicyId** parameters.
   * - If you do not specify a traffic scheduling policy ID (that is, you do not specify the **TrafficQosPolicyId** parameter), the operation returns only the traffic scheduling policy information based on the values of the **TransitRouterId**, **TransitRouterAttachmentId**, **TrafficQosPolicyName**, and **TrafficQosPolicyDescription** parameters. The queue information under the traffic scheduling policy is not returned (that is, the response does not include the **TrafficQosQueues** field).
   * - If you specify a traffic scheduling policy ID (that is, you specify the **TrafficQosPolicyId** parameter), the operation returns the traffic scheduling policy information and the queue information under the traffic scheduling policy (that is, the response includes the **TrafficQosQueues** field). If the **TrafficQosQueues** field is an empty array, only the default queue exists under the traffic scheduling policy.
   * - Make sure that the parameter values you specify are correct. If you specify incorrect parameter values, the operation still returns a RequestId but does not return traffic scheduling policy information.
   * 
   * @param request - ListCenInterRegionTrafficQosPoliciesRequest
   * @returns ListCenInterRegionTrafficQosPoliciesResponse
   */
  async listCenInterRegionTrafficQosPolicies(request: $_model.ListCenInterRegionTrafficQosPoliciesRequest): Promise<$_model.ListCenInterRegionTrafficQosPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCenInterRegionTrafficQosPoliciesWithOptions(request, runtime);
  }

  /**
   * Queries information about traffic scheduling policy queues by calling the ListCenInterRegionTrafficQosQueues operation.
   * 
   * @remarks
   * When you call this operation, specify at least one of the following parameters: **TransitRouterId**, **TrafficQosPolicyId**, or **TrafficQosQueueId**.
   * Make sure that the parameter values you specify are correct. If you specify incorrect parameter values, the system returns a **RequestId** but does not return information about traffic scheduling policies.
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
   * Queries information about traffic scheduling policy queues by calling the ListCenInterRegionTrafficQosQueues operation.
   * 
   * @remarks
   * When you call this operation, specify at least one of the following parameters: **TransitRouterId**, **TrafficQosPolicyId**, or **TrafficQosQueueId**.
   * Make sure that the parameter values you specify are correct. If you specify incorrect parameter values, the system returns a **RequestId** but does not return information about traffic scheduling policies.
   * 
   * @param request - ListCenInterRegionTrafficQosQueuesRequest
   * @returns ListCenInterRegionTrafficQosQueuesResponse
   */
  async listCenInterRegionTrafficQosQueues(request: $_model.ListCenInterRegionTrafficQosQueuesRequest): Promise<$_model.ListCenInterRegionTrafficQosQueuesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCenInterRegionTrafficQosQueuesWithOptions(request, runtime);
  }

  /**
   * Queries the elastic network interfaces (ENIs) within a virtual private cloud (VPC) that can serve as multicast sources or multicast members for multicast communication.
   * 
   * @remarks
   * Before you invoke the `ListGrantVSwitchEnis` operation, make sure that the VPC-connected instance is connected to Cloud Enterprise Network (CEN). For more information, see [CreateTransitRouterVpcAttachment](https://help.aliyun.com/document_detail/261358.html).
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
   * Queries the elastic network interfaces (ENIs) within a virtual private cloud (VPC) that can serve as multicast sources or multicast members for multicast communication.
   * 
   * @remarks
   * Before you invoke the `ListGrantVSwitchEnis` operation, make sure that the VPC-connected instance is connected to Cloud Enterprise Network (CEN). For more information, see [CreateTransitRouterVpcAttachment](https://help.aliyun.com/document_detail/261358.html).
   * 
   * @param request - ListGrantVSwitchEnisRequest
   * @returns ListGrantVSwitchEnisResponse
   */
  async listGrantVSwitchEnis(request: $_model.ListGrantVSwitchEnisRequest): Promise<$_model.ListGrantVSwitchEnisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listGrantVSwitchEnisWithOptions(request, runtime);
  }

  /**
   * Queries information about vSwitches in a cross-account virtual private cloud (VPC) that is connected to a Cloud Enterprise Network (CEN) instance.
   * 
   * @remarks
   * Before you invoke the `ListGrantVSwitchesToCen` operation, make sure that the CEN instance has been granted authorization to access the cross-account VPC-connected instance. For more information, see [GrantInstanceToCen](https://help.aliyun.com/document_detail/126224.html).
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
   * Queries information about vSwitches in a cross-account virtual private cloud (VPC) that is connected to a Cloud Enterprise Network (CEN) instance.
   * 
   * @remarks
   * Before you invoke the `ListGrantVSwitchesToCen` operation, make sure that the CEN instance has been granted authorization to access the cross-account VPC-connected instance. For more information, see [GrantInstanceToCen](https://help.aliyun.com/document_detail/126224.html).
   * 
   * @param request - ListGrantVSwitchesToCenRequest
   * @returns ListGrantVSwitchesToCenResponse
   */
  async listGrantVSwitchesToCen(request: $_model.ListGrantVSwitchesToCenRequest): Promise<$_model.ListGrantVSwitchesToCenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listGrantVSwitchesToCenWithOptions(request, runtime);
  }

  /**
   * Queries the tags bound to a Cloud Enterprise Network (CEN) instance.
   * 
   * @remarks
   * When you call the ListTagResources operation, you must specify at least one of the request parameters **ResourceId.N** and **Tag.N.Key**:
   * - If you specify only **ResourceId.N**, the tags bound to the specified CEN instance are queried.
   * - If you specify only **Tag.N.Key**, all CEN instances that have the specified tag key bound are queried.
   * - If you specify both **ResourceId.N** and **Tag.N.Key**, the specified tags bound to the specified CEN instance are queried.
   *     - Make sure that the values of **ResourceId.N** and **Tag.N.Key** correspond to each other. Otherwise, an empty result is returned.
   *     - If you specify multiple tag keys, the tag keys are evaluated by using the logical AND operator.
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
   * Queries the tags bound to a Cloud Enterprise Network (CEN) instance.
   * 
   * @remarks
   * When you call the ListTagResources operation, you must specify at least one of the request parameters **ResourceId.N** and **Tag.N.Key**:
   * - If you specify only **ResourceId.N**, the tags bound to the specified CEN instance are queried.
   * - If you specify only **Tag.N.Key**, all CEN instances that have the specified tag key bound are queried.
   * - If you specify both **ResourceId.N** and **Tag.N.Key**, the specified tags bound to the specified CEN instance are queried.
   *     - Make sure that the values of **ResourceId.N** and **Tag.N.Key** correspond to each other. Otherwise, an empty result is returned.
   *     - If you specify multiple tag keys, the tag keys are evaluated by using the logical AND operator.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Queries details about traffic marking policies, such as the status and priority of the traffic marking policies.
   * 
   * @remarks
   * When you call the **ListTrafficMarkingPolicies** operation:
   * - You must specify at least one of the **TransitRouterId** and **TrafficMarkingPolicyId** parameters.
   * - If you do not specify a traffic marking policy ID (that is, you do not specify a value for the **TrafficMarkingPolicyId** parameter), the operation returns only the traffic marking policy information based on the values of the **TransitRouterId**, **TrafficMarkingPolicyName**, and **TrafficMarkingPolicyDescription** parameters. The traffic classification rule information under the traffic marking policy is not returned (that is, the response does not contain the **TrafficMatchRules** field).
   * - If you specify a traffic marking policy ID (that is, you specify a value for the **TrafficMarkingPolicyId** parameter), the operation returns the traffic marking policy information and the traffic classification rule information under the traffic marking policy (that is, the response contains the **TrafficMatchRules** field).
   * If the **TrafficMatchRules** field is an empty array, no traffic classification rules exist under the current traffic marking policy.
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
   * Queries details about traffic marking policies, such as the status and priority of the traffic marking policies.
   * 
   * @remarks
   * When you call the **ListTrafficMarkingPolicies** operation:
   * - You must specify at least one of the **TransitRouterId** and **TrafficMarkingPolicyId** parameters.
   * - If you do not specify a traffic marking policy ID (that is, you do not specify a value for the **TrafficMarkingPolicyId** parameter), the operation returns only the traffic marking policy information based on the values of the **TransitRouterId**, **TrafficMarkingPolicyName**, and **TrafficMarkingPolicyDescription** parameters. The traffic classification rule information under the traffic marking policy is not returned (that is, the response does not contain the **TrafficMatchRules** field).
   * - If you specify a traffic marking policy ID (that is, you specify a value for the **TrafficMarkingPolicyId** parameter), the operation returns the traffic marking policy information and the traffic classification rule information under the traffic marking policy (that is, the response contains the **TrafficMatchRules** field).
   * If the **TrafficMatchRules** field is an empty array, no traffic classification rules exist under the current traffic marking policy.
   * 
   * @param request - ListTrafficMarkingPoliciesRequest
   * @returns ListTrafficMarkingPoliciesResponse
   */
  async listTrafficMarkingPolicies(request: $_model.ListTrafficMarkingPoliciesRequest): Promise<$_model.ListTrafficMarkingPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTrafficMarkingPoliciesWithOptions(request, runtime);
  }

  /**
   * Queries the zones supported by Enterprise Edition transit routers in a specified region.
   * 
   * @remarks
   * - You can invoke **ListTransitRouterAvailableResource** to query information about regular zones or zones that support the multicast feature for Enterprise Edition transit routers in a specified region.
   *     - If you do not set **SupportMulticast** to **true**, the system queries only the regular zones supported by Enterprise Edition transit routers by default.
   *     - If you set **SupportMulticast** to **true**, the system queries only the zones that support the multicast feature for Enterprise Edition transit routers.
   * - On May 31, 2022, Cloud Enterprise Network (CEN) performed an optimization upgrade on the mode in which Enterprise Edition transit routers connect to virtual private clouds (VPCs). After the upgrade, you no longer need to specify primary and secondary zones when connecting an Enterprise Edition transit router to a VPC-connected instance. You can specify one or more zones.
   *     - If your Enterprise Edition transit router has not been upgraded, you must specify primary and secondary zones when connecting the Enterprise Edition transit router to a VPC-connected instance. After you invoke **ListTransitRouterAvailableResource**, you can obtain the primary and secondary zone information from the **MasterZones** and **SlaveZones** parameters.
   *     - If your Enterprise Edition transit router has been upgraded, you can specify any zones when connecting the Enterprise Edition transit router to a VPC-connected instance. After you invoke **ListTransitRouterAvailableResource**, you can obtain the zone information supported by the Enterprise Edition transit router from the **AvailableZones** parameter.
   * For more information about the Enterprise Edition transit router upgrade, see [Upgrade the mode in which an Enterprise Edition transit router connects to a VPC](https://help.aliyun.com/document_detail/434191.html).
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
   * Queries the zones supported by Enterprise Edition transit routers in a specified region.
   * 
   * @remarks
   * - You can invoke **ListTransitRouterAvailableResource** to query information about regular zones or zones that support the multicast feature for Enterprise Edition transit routers in a specified region.
   *     - If you do not set **SupportMulticast** to **true**, the system queries only the regular zones supported by Enterprise Edition transit routers by default.
   *     - If you set **SupportMulticast** to **true**, the system queries only the zones that support the multicast feature for Enterprise Edition transit routers.
   * - On May 31, 2022, Cloud Enterprise Network (CEN) performed an optimization upgrade on the mode in which Enterprise Edition transit routers connect to virtual private clouds (VPCs). After the upgrade, you no longer need to specify primary and secondary zones when connecting an Enterprise Edition transit router to a VPC-connected instance. You can specify one or more zones.
   *     - If your Enterprise Edition transit router has not been upgraded, you must specify primary and secondary zones when connecting the Enterprise Edition transit router to a VPC-connected instance. After you invoke **ListTransitRouterAvailableResource**, you can obtain the primary and secondary zone information from the **MasterZones** and **SlaveZones** parameters.
   *     - If your Enterprise Edition transit router has been upgraded, you can specify any zones when connecting the Enterprise Edition transit router to a VPC-connected instance. After you invoke **ListTransitRouterAvailableResource**, you can obtain the zone information supported by the Enterprise Edition transit router from the **AvailableZones** parameter.
   * For more information about the Enterprise Edition transit router upgrade, see [Upgrade the mode in which an Enterprise Edition transit router connects to a VPC](https://help.aliyun.com/document_detail/434191.html).
   * 
   * @param request - ListTransitRouterAvailableResourceRequest
   * @returns ListTransitRouterAvailableResourceResponse
   */
  async listTransitRouterAvailableResource(request: $_model.ListTransitRouterAvailableResourceRequest): Promise<$_model.ListTransitRouterAvailableResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTransitRouterAvailableResourceWithOptions(request, runtime);
  }

  /**
   * Queries information about CIDR blocks of a transit router by calling the ListTransitRouterCidr operation.
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
   * Queries information about CIDR blocks of a transit router by calling the ListTransitRouterCidr operation.
   * 
   * @param request - ListTransitRouterCidrRequest
   * @returns ListTransitRouterCidrResponse
   */
  async listTransitRouterCidr(request: $_model.ListTransitRouterCidrRequest): Promise<$_model.ListTransitRouterCidrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTransitRouterCidrWithOptions(request, runtime);
  }

  /**
   * Queries the allocation information of a CIDR block by calling the ListTransitRouterCidrAllocation operation.
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
   * Queries the allocation information of a CIDR block by calling the ListTransitRouterCidrAllocation operation.
   * 
   * @param request - ListTransitRouterCidrAllocationRequest
   * @returns ListTransitRouterCidrAllocationResponse
   */
  async listTransitRouterCidrAllocation(request: $_model.ListTransitRouterCidrAllocationRequest): Promise<$_model.ListTransitRouterCidrAllocationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTransitRouterCidrAllocationWithOptions(request, runtime);
  }

  /**
   * Queries the connection information about Express Connect Router (ECR) instances under an Enterprise Edition transit router, including the total number of entries, connection status, connection IDs, and the payer of network instances.
   * 
   * @remarks
   * You can query the information about ECR connections under an Enterprise Edition transit router in the following three ways: 
   * - Query the information about all ECR connections under an Enterprise Edition transit router instance by specifying the transit router instance ID. 
   * - Query the information about all ECR connections under an Enterprise Edition transit router instance by specifying the Cloud Enterprise Network (CEN) instance ID and the region ID of the transit router instance. 
   * - Query the information about a specific ECR connection by specifying only the **TransitRouterAttachmentId** parameter.
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
   * Queries the connection information about Express Connect Router (ECR) instances under an Enterprise Edition transit router, including the total number of entries, connection status, connection IDs, and the payer of network instances.
   * 
   * @remarks
   * You can query the information about ECR connections under an Enterprise Edition transit router in the following three ways: 
   * - Query the information about all ECR connections under an Enterprise Edition transit router instance by specifying the transit router instance ID. 
   * - Query the information about all ECR connections under an Enterprise Edition transit router instance by specifying the Cloud Enterprise Network (CEN) instance ID and the region ID of the transit router instance. 
   * - Query the information about a specific ECR connection by specifying only the **TransitRouterAttachmentId** parameter.
   * 
   * @param request - ListTransitRouterEcrAttachmentsRequest
   * @returns ListTransitRouterEcrAttachmentsResponse
   */
  async listTransitRouterEcrAttachments(request: $_model.ListTransitRouterEcrAttachmentsRequest): Promise<$_model.ListTransitRouterEcrAttachmentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTransitRouterEcrAttachmentsWithOptions(request, runtime);
  }

  /**
   * Queries the associations between a multicast domain and vSwitches.
   * 
   * @remarks
   * - When calling this operation, you must specify at least one of the request parameters **TransitRouterMulticastDomainId** and **TransitRouterAttachmentId**. Specifying **TransitRouterAttachmentId** queries the information about vSwitches that are associated with a multicast domain under a VPC-connected instance. Specifying **TransitRouterMulticastDomainId** queries the information about vSwitches that are associated with the multicast domain.
   * - When calling the **ListTransitRouterMulticastDomainAssociations** operation, make sure that the parameter values you specify are correct. If you specify incorrect parameter values, the operation still returns a **RequestId** but does not return the associations between the multicast domain and vSwitches.
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
   * Queries the associations between a multicast domain and vSwitches.
   * 
   * @remarks
   * - When calling this operation, you must specify at least one of the request parameters **TransitRouterMulticastDomainId** and **TransitRouterAttachmentId**. Specifying **TransitRouterAttachmentId** queries the information about vSwitches that are associated with a multicast domain under a VPC-connected instance. Specifying **TransitRouterMulticastDomainId** queries the information about vSwitches that are associated with the multicast domain.
   * - When calling the **ListTransitRouterMulticastDomainAssociations** operation, make sure that the parameter values you specify are correct. If you specify incorrect parameter values, the operation still returns a **RequestId** but does not return the associations between the multicast domain and vSwitches.
   * 
   * @param request - ListTransitRouterMulticastDomainAssociationsRequest
   * @returns ListTransitRouterMulticastDomainAssociationsResponse
   */
  async listTransitRouterMulticastDomainAssociations(request: $_model.ListTransitRouterMulticastDomainAssociationsRequest): Promise<$_model.ListTransitRouterMulticastDomainAssociationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTransitRouterMulticastDomainAssociationsWithOptions(request, runtime);
  }

  /**
   * Queries information about vSwitches that are associated with multicast domains in a VPC-connected instance after the VPC-connected instance is connected to an Enterprise Edition transit router.
   * 
   * @remarks
   * When you call the ListTransitRouterMulticastDomainVSwitches operation, make sure that the parameter values you specify are correct. If you specify incorrect parameter values, the system still returns a RequestId but does not return information about vSwitches that are associated with multicast domains in the VPC-connected instance.
   * 
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
   * Queries information about vSwitches that are associated with multicast domains in a VPC-connected instance after the VPC-connected instance is connected to an Enterprise Edition transit router.
   * 
   * @remarks
   * When you call the ListTransitRouterMulticastDomainVSwitches operation, make sure that the parameter values you specify are correct. If you specify incorrect parameter values, the system still returns a RequestId but does not return information about vSwitches that are associated with multicast domains in the VPC-connected instance.
   * 
   * @param request - ListTransitRouterMulticastDomainVSwitchesRequest
   * @returns ListTransitRouterMulticastDomainVSwitchesResponse
   */
  async listTransitRouterMulticastDomainVSwitches(request: $_model.ListTransitRouterMulticastDomainVSwitchesRequest): Promise<$_model.ListTransitRouterMulticastDomainVSwitchesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTransitRouterMulticastDomainVSwitchesWithOptions(request, runtime);
  }

  /**
   * Queries information about multicast domains, such as the status, multicast domain ID, and description of multicast domains.
   * 
   * @remarks
   * - RegionId must be used together with CenId and cannot be used alone. Otherwise, multicast domain information is not displayed. However, TransitRouterId and TransitRouterMulticastDomainId can be used independently.
   * - Ensure that the parameter values you specify are correct when you call this operation. If you specify invalid parameter values, the system still returns a **RequestId** but does not display detailed multicast domain information.
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
   * Queries information about multicast domains, such as the status, multicast domain ID, and description of multicast domains.
   * 
   * @remarks
   * - RegionId must be used together with CenId and cannot be used alone. Otherwise, multicast domain information is not displayed. However, TransitRouterId and TransitRouterMulticastDomainId can be used independently.
   * - Ensure that the parameter values you specify are correct when you call this operation. If you specify invalid parameter values, the system still returns a **RequestId** but does not display detailed multicast domain information.
   * 
   * @param request - ListTransitRouterMulticastDomainsRequest
   * @returns ListTransitRouterMulticastDomainsResponse
   */
  async listTransitRouterMulticastDomains(request: $_model.ListTransitRouterMulticastDomainsRequest): Promise<$_model.ListTransitRouterMulticastDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTransitRouterMulticastDomainsWithOptions(request, runtime);
  }

  /**
   * Queries the details of multicast members and multicast sources in a multicast domain.
   * 
   * @remarks
   * You can call the `ListTransitRouterMulticastGroups` operation to query information about multicast members and multicast sources (hereinafter referred to as multicast resources) in a multicast domain.
   * - If you specify the **GroupIpAddress** parameter, you can query multicast resources in a specified multicast group within the multicast domain.
   * - If you specify the **VSwitchIds** parameter, you can query multicast resources under a specified vSwitch within the multicast domain.
   * - If you specify the **PeerTransitRouterMulticastDomains** parameter, you can query cross-region multicast resources within the multicast domain.
   * - If you specify the **ResourceType** parameter, you can query multicast resources of a specified resource type within the multicast domain.
   * - If you specify the **ResourceId** parameter, you can query multicast resources associated with a specified resource.
   * - If you specify only the **TransitRouterMulticastDomainId** parameter, you can query all multicast resources within the multicast domain.
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
   * Queries the details of multicast members and multicast sources in a multicast domain.
   * 
   * @remarks
   * You can call the `ListTransitRouterMulticastGroups` operation to query information about multicast members and multicast sources (hereinafter referred to as multicast resources) in a multicast domain.
   * - If you specify the **GroupIpAddress** parameter, you can query multicast resources in a specified multicast group within the multicast domain.
   * - If you specify the **VSwitchIds** parameter, you can query multicast resources under a specified vSwitch within the multicast domain.
   * - If you specify the **PeerTransitRouterMulticastDomains** parameter, you can query cross-region multicast resources within the multicast domain.
   * - If you specify the **ResourceType** parameter, you can query multicast resources of a specified resource type within the multicast domain.
   * - If you specify the **ResourceId** parameter, you can query multicast resources associated with a specified resource.
   * - If you specify only the **TransitRouterMulticastDomainId** parameter, you can query all multicast resources within the multicast domain.
   * 
   * @param request - ListTransitRouterMulticastGroupsRequest
   * @returns ListTransitRouterMulticastGroupsResponse
   */
  async listTransitRouterMulticastGroups(request: $_model.ListTransitRouterMulticastGroupsRequest): Promise<$_model.ListTransitRouterMulticastGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTransitRouterMulticastGroupsWithOptions(request, runtime);
  }

  /**
   * Queries the details of inter-region connections under an Enterprise Edition transit router by calling the ListTransitRouterPeerAttachments operation.
   * 
   * @remarks
   * You can query inter-region connections under an Enterprise Edition transit router in the following ways:
   * - Query all inter-region connections under an Enterprise Edition transit router by specifying the transit router instance ID.
   * - Query all inter-region connections under an Enterprise Edition transit router by specifying the Cloud Enterprise Network (CEN) instance ID and the region ID of the Enterprise Edition transit router instance.
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
   * Queries the details of inter-region connections under an Enterprise Edition transit router by calling the ListTransitRouterPeerAttachments operation.
   * 
   * @remarks
   * You can query inter-region connections under an Enterprise Edition transit router in the following ways:
   * - Query all inter-region connections under an Enterprise Edition transit router by specifying the transit router instance ID.
   * - Query all inter-region connections under an Enterprise Edition transit router by specifying the Cloud Enterprise Network (CEN) instance ID and the region ID of the Enterprise Edition transit router instance.
   * 
   * @param request - ListTransitRouterPeerAttachmentsRequest
   * @returns ListTransitRouterPeerAttachmentsResponse
   */
  async listTransitRouterPeerAttachments(request: $_model.ListTransitRouterPeerAttachmentsRequest): Promise<$_model.ListTransitRouterPeerAttachmentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTransitRouterPeerAttachmentsWithOptions(request, runtime);
  }

  /**
   * Queries information about prefix lists associated with an Enterprise Edition transit router route table.
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
   * Queries information about prefix lists associated with an Enterprise Edition transit router route table.
   * 
   * @param request - ListTransitRouterPrefixListAssociationRequest
   * @returns ListTransitRouterPrefixListAssociationResponse
   */
  async listTransitRouterPrefixListAssociation(request: $_model.ListTransitRouterPrefixListAssociationRequest): Promise<$_model.ListTransitRouterPrefixListAssociationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTransitRouterPrefixListAssociationWithOptions(request, runtime);
  }

  /**
   * Calls the ListTransitRouterRouteEntries operation to query the details of route entries in an Enterprise Edition transit router route table.
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
   * Calls the ListTransitRouterRouteEntries operation to query the details of route entries in an Enterprise Edition transit router route table.
   * 
   * @param request - ListTransitRouterRouteEntriesRequest
   * @returns ListTransitRouterRouteEntriesResponse
   */
  async listTransitRouterRouteEntries(request: $_model.ListTransitRouterRouteEntriesRequest): Promise<$_model.ListTransitRouterRouteEntriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTransitRouterRouteEntriesWithOptions(request, runtime);
  }

  /**
   * Queries the route association relationships created for an Enterprise Edition transit router route table or a network instance connection.
   * 
   * @remarks
   * When you call the **ListTransitRouterRouteTableAssociations** operation, specify at least one of the request parameters **TransitRouterRouteTableId** and **TransitRouterAttachmentId**:
   * - If you specify only the **TransitRouterRouteTableId** parameter, the system queries the network instance connections that have route association relationships with the specified Enterprise Edition transit router route table.
   * - If you specify only the **TransitRouterAttachmentId** parameter, the system queries the Enterprise Edition transit router route tables that have route association relationships with the specified network instance connection.
   * - If you specify both the **TransitRouterRouteTableId** and **TransitRouterAttachmentId** parameters, the system queries the route association relationship between the specified network instance connection and the specified Enterprise Edition transit router route table.
   *     - If a route association relationship exists between the network instance connection and the Enterprise Edition transit router route table, the system returns the information about the route association relationship.
   *     - If no route association relationship exists between the network instance connection and the Enterprise Edition transit router route table, the **TransitRouterAssociations** array is empty.
   * When you call the **ListTransitRouterRouteTableAssociations** operation, make sure that the parameter values you specify are correct.
   * If you specify incorrect parameter values, the system still returns a **RequestId** but does not return the route association relationships created for the Enterprise Edition transit router route table or network instance connection.
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
   * Queries the route association relationships created for an Enterprise Edition transit router route table or a network instance connection.
   * 
   * @remarks
   * When you call the **ListTransitRouterRouteTableAssociations** operation, specify at least one of the request parameters **TransitRouterRouteTableId** and **TransitRouterAttachmentId**:
   * - If you specify only the **TransitRouterRouteTableId** parameter, the system queries the network instance connections that have route association relationships with the specified Enterprise Edition transit router route table.
   * - If you specify only the **TransitRouterAttachmentId** parameter, the system queries the Enterprise Edition transit router route tables that have route association relationships with the specified network instance connection.
   * - If you specify both the **TransitRouterRouteTableId** and **TransitRouterAttachmentId** parameters, the system queries the route association relationship between the specified network instance connection and the specified Enterprise Edition transit router route table.
   *     - If a route association relationship exists between the network instance connection and the Enterprise Edition transit router route table, the system returns the information about the route association relationship.
   *     - If no route association relationship exists between the network instance connection and the Enterprise Edition transit router route table, the **TransitRouterAssociations** array is empty.
   * When you call the **ListTransitRouterRouteTableAssociations** operation, make sure that the parameter values you specify are correct.
   * If you specify incorrect parameter values, the system still returns a **RequestId** but does not return the route association relationships created for the Enterprise Edition transit router route table or network instance connection.
   * 
   * @param request - ListTransitRouterRouteTableAssociationsRequest
   * @returns ListTransitRouterRouteTableAssociationsResponse
   */
  async listTransitRouterRouteTableAssociations(request: $_model.ListTransitRouterRouteTableAssociationsRequest): Promise<$_model.ListTransitRouterRouteTableAssociationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTransitRouterRouteTableAssociationsWithOptions(request, runtime);
  }

  /**
   * Queries the route learning relationships of an Enterprise Edition transit router route table.
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
   * Queries the route learning relationships of an Enterprise Edition transit router route table.
   * 
   * @param request - ListTransitRouterRouteTablePropagationsRequest
   * @returns ListTransitRouterRouteTablePropagationsResponse
   */
  async listTransitRouterRouteTablePropagations(request: $_model.ListTransitRouterRouteTablePropagationsRequest): Promise<$_model.ListTransitRouterRouteTablePropagationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTransitRouterRouteTablePropagationsWithOptions(request, runtime);
  }

  /**
   * Queries the details of route tables of an Enterprise Edition transit router by calling the ListTransitRouterRouteTables operation.
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
   * Queries the details of route tables of an Enterprise Edition transit router by calling the ListTransitRouterRouteTables operation.
   * 
   * @param request - ListTransitRouterRouteTablesRequest
   * @returns ListTransitRouterRouteTablesResponse
   */
  async listTransitRouterRouteTables(request: $_model.ListTransitRouterRouteTablesRequest): Promise<$_model.ListTransitRouterRouteTablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTransitRouterRouteTablesWithOptions(request, runtime);
  }

  /**
   * Queries the connection information of virtual border routers (VBRs) under an Enterprise Edition transit router, including the total number of entries, connection status, connection IDs, and payers of network instances.
   * 
   * @remarks
   * You can query information about virtual border router (VBR) connections on an Enterprise Edition transit router in the following ways:
   * - Query information about all VBR connections on an Enterprise Edition transit router by specifying the transit router instance ID.
   * - Query information about all VBR connections on an Enterprise Edition transit router by specifying the Cloud Enterprise Network (CEN) instance ID and the region ID of the transit router instance.
   * - Query information about a VBR connection by specifying only the TransitRouterAttachmentId parameter.
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
   * Queries the connection information of virtual border routers (VBRs) under an Enterprise Edition transit router, including the total number of entries, connection status, connection IDs, and payers of network instances.
   * 
   * @remarks
   * You can query information about virtual border router (VBR) connections on an Enterprise Edition transit router in the following ways:
   * - Query information about all VBR connections on an Enterprise Edition transit router by specifying the transit router instance ID.
   * - Query information about all VBR connections on an Enterprise Edition transit router by specifying the Cloud Enterprise Network (CEN) instance ID and the region ID of the transit router instance.
   * - Query information about a VBR connection by specifying only the TransitRouterAttachmentId parameter.
   * 
   * @param request - ListTransitRouterVbrAttachmentsRequest
   * @returns ListTransitRouterVbrAttachmentsResponse
   */
  async listTransitRouterVbrAttachments(request: $_model.ListTransitRouterVbrAttachmentsRequest): Promise<$_model.ListTransitRouterVbrAttachmentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTransitRouterVbrAttachmentsWithOptions(request, runtime);
  }

  /**
   * Queries information about Virtual Private Cloud (VPC) connections under an Enterprise Edition transit router, including the status, billing type, zone information, and associated vSwitch and network interface controller (NIC) details of VPC connections that are active for forwarding and routing traffic.
   * 
   * @remarks
   * You can query information about VPC connections under an Enterprise Edition transit router in the following three ways:
   * - Query information about all VPC connections under an Enterprise Edition transit router instance by specifying the transit router instance ID.
   * - Query information about all VPC connections under an Enterprise Edition transit router instance by specifying the Cloud Enterprise Network (CEN) instance ID and the region ID of the Enterprise Edition transit router instance.
   * - Query information about all VPC connections in a region by specifying the region ID of the Enterprise Edition transit router instance.
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
   * Queries information about Virtual Private Cloud (VPC) connections under an Enterprise Edition transit router, including the status, billing type, zone information, and associated vSwitch and network interface controller (NIC) details of VPC connections that are active for forwarding and routing traffic.
   * 
   * @remarks
   * You can query information about VPC connections under an Enterprise Edition transit router in the following three ways:
   * - Query information about all VPC connections under an Enterprise Edition transit router instance by specifying the transit router instance ID.
   * - Query information about all VPC connections under an Enterprise Edition transit router instance by specifying the Cloud Enterprise Network (CEN) instance ID and the region ID of the Enterprise Edition transit router instance.
   * - Query information about all VPC connections in a region by specifying the region ID of the Enterprise Edition transit router instance.
   * 
   * @param request - ListTransitRouterVpcAttachmentsRequest
   * @returns ListTransitRouterVpcAttachmentsResponse
   */
  async listTransitRouterVpcAttachments(request: $_model.ListTransitRouterVpcAttachmentsRequest): Promise<$_model.ListTransitRouterVpcAttachmentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTransitRouterVpcAttachmentsWithOptions(request, runtime);
  }

  /**
   * Queries information about VPN connections, such as the status, IPsec connection ID, and billing method of VPN connections.
   * 
   * @remarks
   * The ListTransitRouterVpnAttachments operation supports the following three query methods:
   * - Specify only **TransitRouterAttachmentId** to query information about a specific VPN connection.
   * - Specify only **TransitRouterId** to query information about all VPN connections associated with the specified transit router.
   * - Specify **CenId** and **RegionId** to query information about VPN connections in a specific region of the Cloud Enterprise Network (CEN) instance.
   * When calling the **ListTransitRouterVpnAttachments** operation, make sure that the parameter values are correct. If you specify incorrect parameter values, the response still returns a **RequestId**, but does not include the information about the target VPN connections.
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
   * Queries information about VPN connections, such as the status, IPsec connection ID, and billing method of VPN connections.
   * 
   * @remarks
   * The ListTransitRouterVpnAttachments operation supports the following three query methods:
   * - Specify only **TransitRouterAttachmentId** to query information about a specific VPN connection.
   * - Specify only **TransitRouterId** to query information about all VPN connections associated with the specified transit router.
   * - Specify **CenId** and **RegionId** to query information about VPN connections in a specific region of the Cloud Enterprise Network (CEN) instance.
   * When calling the **ListTransitRouterVpnAttachments** operation, make sure that the parameter values are correct. If you specify incorrect parameter values, the response still returns a **RequestId**, but does not include the information about the target VPN connections.
   * 
   * @param request - ListTransitRouterVpnAttachmentsRequest
   * @returns ListTransitRouterVpnAttachmentsResponse
   */
  async listTransitRouterVpnAttachments(request: $_model.ListTransitRouterVpnAttachmentsRequest): Promise<$_model.ListTransitRouterVpnAttachmentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTransitRouterVpnAttachmentsWithOptions(request, runtime);
  }

  /**
   * Queries information about transit router instances under a Cloud Enterprise Network (CEN) instance, including the instance type, instance status, transit router instance ID, and whether the multicast feature is enabled.
   * 
   * @remarks
   * When you call this operation to query information about transit router instances under a CEN instance, you can specify the **RegionId** and **TransitRouterId** parameters as needed. The following describes the relationship between these two parameters:
   * - If you do not specify **RegionId** or **TransitRouterId**, all transit router instances under the CEN instance are queried.
   * - If you specify only **RegionId**, transit router instances in the specified region under the CEN instance are queried.
   * - If you specify only **TransitRouterId**, the specified transit router instance under the CEN instance is queried.
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
   * Queries information about transit router instances under a Cloud Enterprise Network (CEN) instance, including the instance type, instance status, transit router instance ID, and whether the multicast feature is enabled.
   * 
   * @remarks
   * When you call this operation to query information about transit router instances under a CEN instance, you can specify the **RegionId** and **TransitRouterId** parameters as needed. The following describes the relationship between these two parameters:
   * - If you do not specify **RegionId** or **TransitRouterId**, all transit router instances under the CEN instance are queried.
   * - If you specify only **RegionId**, transit router instances in the specified region under the CEN instance are queried.
   * - If you specify only **TransitRouterId**, the specified transit router instance under the CEN instance is queried.
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
   * *ModifyCenAttribute** is an asynchronous operation. After you send a request, the system returns a **RequestId**, but the CEN instance has not been modified yet. The modification task is still running in the background. You can call the **DescribeCens** operation to query the status of the CEN instance. 
   * - If the CEN instance is in the **Modifying** state, the CEN instance is being modified. In this state, you can only query the CEN instance but cannot perform other operations on it.
   * - If the CEN instance is in the **Active** state, the CEN instance has been modified.
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
   * *ModifyCenAttribute** is an asynchronous operation. After you send a request, the system returns a **RequestId**, but the CEN instance has not been modified yet. The modification task is still running in the background. You can call the **DescribeCens** operation to query the status of the CEN instance. 
   * - If the CEN instance is in the **Modifying** state, the CEN instance is being modified. In this state, you can only query the CEN instance but cannot perform other operations on it.
   * - If the CEN instance is in the **Active** state, the CEN instance has been modified.
   * 
   * @param request - ModifyCenAttributeRequest
   * @returns ModifyCenAttributeResponse
   */
  async modifyCenAttribute(request: $_model.ModifyCenAttributeRequest): Promise<$_model.ModifyCenAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyCenAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the name and description of a bandwidth plan instance by calling the ModifyCenBandwidthPackageAttribute operation.
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
   * Modifies the name and description of a bandwidth plan instance by calling the ModifyCenBandwidthPackageAttribute operation.
   * 
   * @param request - ModifyCenBandwidthPackageAttributeRequest
   * @returns ModifyCenBandwidthPackageAttributeResponse
   */
  async modifyCenBandwidthPackageAttribute(request: $_model.ModifyCenBandwidthPackageAttributeRequest): Promise<$_model.ModifyCenBandwidthPackageAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyCenBandwidthPackageAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the peak bandwidth of a bandwidth plan instance by calling the ModifyCenBandwidthPackageSpec operation.
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
   * Modifies the peak bandwidth of a bandwidth plan instance by calling the ModifyCenBandwidthPackageSpec operation.
   * 
   * @param request - ModifyCenBandwidthPackageSpecRequest
   * @returns ModifyCenBandwidthPackageSpecResponse
   */
  async modifyCenBandwidthPackageSpec(request: $_model.ModifyCenBandwidthPackageSpecRequest): Promise<$_model.ModifyCenBandwidthPackageSpecResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyCenBandwidthPackageSpecWithOptions(request, runtime);
  }

  /**
   * Modifies a routing policy by calling the ModifyCenRouteMap operation.
   * 
   * @remarks
   * The `ModifyCenRouteMap` operation is asynchronous. After you send a request, the system returns a **RequestId** but the routing policy has not been modified yet. The modification task runs in the background. You can call the `DescribeCenRouteMaps` operation to query the status of the routing policy.
   * - If the routing policy is in the **Modifying** state, the routing policy is being modified. In this state, you can only perform query operations.
   * - If the routing policy is in the **Active** state, the routing policy has been modified.
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
   * Modifies a routing policy by calling the ModifyCenRouteMap operation.
   * 
   * @remarks
   * The `ModifyCenRouteMap` operation is asynchronous. After you send a request, the system returns a **RequestId** but the routing policy has not been modified yet. The modification task runs in the background. You can call the `DescribeCenRouteMaps` operation to query the status of the routing policy.
   * - If the routing policy is in the **Modifying** state, the routing policy is being modified. In this state, you can only perform query operations.
   * - If the routing policy is in the **Active** state, the routing policy has been modified.
   * 
   * @param request - ModifyCenRouteMapRequest
   * @returns ModifyCenRouteMapResponse
   */
  async modifyCenRouteMap(request: $_model.ModifyCenRouteMapRequest): Promise<$_model.ModifyCenRouteMapResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyCenRouteMapWithOptions(request, runtime);
  }

  /**
   * Modifies the name, description, and capture window duration of a flow log.
   * 
   * @remarks
   * The `ModifyFlowLogAttribute` operation is asynchronous. After you call this operation, the system returns a **RequestId**, but the modification has not been completed. The modification continues in the background. You can call the `DescribeFlowlogs` operation to query the status of the flow log.
   * - If the flow log is in the **Modifying** state, the flow log is being modified. In this state, you can only perform query operations.
   * - If the flow log is in the **Active** state, the flow log has been modified.
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
   * Modifies the name, description, and capture window duration of a flow log.
   * 
   * @remarks
   * The `ModifyFlowLogAttribute` operation is asynchronous. After you call this operation, the system returns a **RequestId**, but the modification has not been completed. The modification continues in the background. You can call the `DescribeFlowlogs` operation to query the status of the flow log.
   * - If the flow log is in the **Modifying** state, the flow log is being modified. In this state, you can only perform query operations.
   * - If the flow log is in the **Active** state, the flow log has been modified.
   * 
   * @param request - ModifyFlowLogAttributeRequest
   * @returns ModifyFlowLogAttributeResponse
   */
  async modifyFlowLogAttribute(request: $_model.ModifyFlowLogAttributeRequest): Promise<$_model.ModifyFlowLogAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyFlowLogAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the payer for a cross-account network instance connection of a transit router instance.
   * 
   * @remarks
   * The ModifyGrantInstanceToTransitRouter operation supports modifying only the payer for cross-account virtual private cloud (VPC), virtual border router (VBR), and IPsec connection instances connected to a transit router instance.
   * 
   * @param request - ModifyGrantInstanceToTransitRouterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyGrantInstanceToTransitRouterResponse
   */
  async modifyGrantInstanceToTransitRouterWithOptions(request: $_model.ModifyGrantInstanceToTransitRouterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyGrantInstanceToTransitRouterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyGrantInstanceToTransitRouter",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyGrantInstanceToTransitRouterResponse>(await this.callApi(params, req, runtime), new $_model.ModifyGrantInstanceToTransitRouterResponse({}));
  }

  /**
   * Modifies the payer for a cross-account network instance connection of a transit router instance.
   * 
   * @remarks
   * The ModifyGrantInstanceToTransitRouter operation supports modifying only the payer for cross-account virtual private cloud (VPC), virtual border router (VBR), and IPsec connection instances connected to a transit router instance.
   * 
   * @param request - ModifyGrantInstanceToTransitRouterRequest
   * @returns ModifyGrantInstanceToTransitRouterResponse
   */
  async modifyGrantInstanceToTransitRouter(request: $_model.ModifyGrantInstanceToTransitRouterRequest): Promise<$_model.ModifyGrantInstanceToTransitRouterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyGrantInstanceToTransitRouterWithOptions(request, runtime);
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
   * Modifies an aggregate route.
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
   * Modifies an aggregate route.
   * 
   * @param request - ModifyTransitRouteTableAggregationRequest
   * @returns ModifyTransitRouteTableAggregationResponse
   */
  async modifyTransitRouteTableAggregation(request: $_model.ModifyTransitRouteTableAggregationRequest): Promise<$_model.ModifyTransitRouteTableAggregationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyTransitRouteTableAggregationWithOptions(request, runtime);
  }

  /**
   * Calls the ModifyTransitRouterCidr operation to modify a CIDR block of a transit router.
   * 
   * @remarks
   * - Before you modify a transit router CIDR block, we recommend that you familiarize yourself with the [usage limits of transit router CIDR blocks](https://help.aliyun.com/document_detail/462635.html).
   * - A transit router CIDR block that has allocated IP addresses cannot be modified.
   * - If you call the **ModifyTransitRouterCidr** operation without modifying the **PublishCidrRoute** parameter, this operation is synchronous and the modification takes effect immediately.
   * - If you call the **ModifyTransitRouterCidr** operation and modify the **PublishCidrRoute** parameter, this operation is asynchronous. After you send a request, the system returns a **RequestId** but the transit router CIDR block is not yet modified. The modification task runs in the background. You can call the **ListTransitRouterCidr** operation to query the modification status of the transit router CIDR block.
   *     - If the transit router CIDR block still shows the information before the modification, the transit router CIDR block is being modified.
   *     - If the transit router CIDR block shows the updated information, the transit router CIDR block has been modified.
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
   * Calls the ModifyTransitRouterCidr operation to modify a CIDR block of a transit router.
   * 
   * @remarks
   * - Before you modify a transit router CIDR block, we recommend that you familiarize yourself with the [usage limits of transit router CIDR blocks](https://help.aliyun.com/document_detail/462635.html).
   * - A transit router CIDR block that has allocated IP addresses cannot be modified.
   * - If you call the **ModifyTransitRouterCidr** operation without modifying the **PublishCidrRoute** parameter, this operation is synchronous and the modification takes effect immediately.
   * - If you call the **ModifyTransitRouterCidr** operation and modify the **PublishCidrRoute** parameter, this operation is asynchronous. After you send a request, the system returns a **RequestId** but the transit router CIDR block is not yet modified. The modification task runs in the background. You can call the **ListTransitRouterCidr** operation to query the modification status of the transit router CIDR block.
   *     - If the transit router CIDR block still shows the information before the modification, the transit router CIDR block is being modified.
   *     - If the transit router CIDR block shows the updated information, the transit router CIDR block has been modified.
   * 
   * @param request - ModifyTransitRouterCidrRequest
   * @returns ModifyTransitRouterCidrResponse
   */
  async modifyTransitRouterCidr(request: $_model.ModifyTransitRouterCidrRequest): Promise<$_model.ModifyTransitRouterCidrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyTransitRouterCidrWithOptions(request, runtime);
  }

  /**
   * Modifies the name, description, and feature options of a multicast domain.
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
   * Modifies the name, description, and feature options of a multicast domain.
   * 
   * @param request - ModifyTransitRouterMulticastDomainRequest
   * @returns ModifyTransitRouterMulticastDomainResponse
   */
  async modifyTransitRouterMulticastDomain(request: $_model.ModifyTransitRouterMulticastDomainRequest): Promise<$_model.ModifyTransitRouterMulticastDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyTransitRouterMulticastDomainWithOptions(request, runtime);
  }

  /**
   * Modifies the resource group to which a Cloud Enterprise Network (CEN) instance or a bandwidth plan instance belongs.
   * 
   * @remarks
   * CEN instances and bandwidth plan instances belong to the default resource group by default. You can call the `MoveResourceGroup` operation to modify the resource group to which a CEN instance or a bandwidth plan instance belongs.
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
   * Modifies the resource group to which a Cloud Enterprise Network (CEN) instance or a bandwidth plan instance belongs.
   * 
   * @remarks
   * CEN instances and bandwidth plan instances belong to the default resource group by default. You can call the `MoveResourceGroup` operation to modify the resource group to which a CEN instance or a bandwidth plan instance belongs.
   * 
   * @param request - MoveResourceGroupRequest
   * @returns MoveResourceGroupResponse
   */
  async moveResourceGroup(request: $_model.MoveResourceGroupRequest): Promise<$_model.MoveResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.moveResourceGroupWithOptions(request, runtime);
  }

  /**
   * Activates the transit router service.
   * 
   * @remarks
   * You can call the `OpenTransitRouterService` operation to activate the transit router service free of charge. After the transit router service is activated, the system automatically generates an order. You can use the order ID returned by the `OpenTransitRouterService` operation to query order information in the <props="china">[Alibaba Cloud Management Console Order Center](https://usercenter2.aliyun.com/order/list?pageIndex=1&pageSize=20)<props="intl">[Alibaba Cloud Management Console Order Center](https://usercenter2-intl.aliyun.com/order/list).
   * > Before calling this operation, call [CheckTransitRouterService](~~CheckTransitRouterService~~) to check whether the transit router service is already activated for the current account. If it is already activated, you do not need to call this operation again.
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
   * Activates the transit router service.
   * 
   * @remarks
   * You can call the `OpenTransitRouterService` operation to activate the transit router service free of charge. After the transit router service is activated, the system automatically generates an order. You can use the order ID returned by the `OpenTransitRouterService` operation to query order information in the <props="china">[Alibaba Cloud Management Console Order Center](https://usercenter2.aliyun.com/order/list?pageIndex=1&pageSize=20)<props="intl">[Alibaba Cloud Management Console Order Center](https://usercenter2-intl.aliyun.com/order/list).
   * > Before calling this operation, call [CheckTransitRouterService](~~CheckTransitRouterService~~) to check whether the transit router service is already activated for the current account. If it is already activated, you do not need to call this operation again.
   * 
   * @param request - OpenTransitRouterServiceRequest
   * @returns OpenTransitRouterServiceResponse
   */
  async openTransitRouterService(request: $_model.OpenTransitRouterServiceRequest): Promise<$_model.OpenTransitRouterServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.openTransitRouterServiceWithOptions(request, runtime);
  }

  /**
   * Cloud Enterprise Network (CEN) supports the publish route entry feature. You can publish routing entries from a VPC or VBR loaded into CEN to CEN by invoking the PublishRouteEntries operation. If no route conflict exists, other network instances in CEN can learn the published routes.
   * 
   * @remarks
   * The following table lists the default publish status of each type of route entry in CEN. You can call the PublishRouteEntries operation to publish route entries that are not published to CEN.
   * | Route entry        | Instance to which the route entry belongs         |Published to CEN by default
   * |------------- |-----------------------|--------------------|
   * |Route entry that points to an ECS instance      |VPC       |No |
   * |Route entry that points to a VPN gateway      |VPC       |No |
   * |Route entry that points to a high availability (HA) virtual IP address    |VPC    |No |
   * |Route entry that points to a router interface    |VPC    |No |
   * |Route entry that points to an elastic network interfaces (ENIs)    |VPC    |No |
   * |Route entry that points to an IPv6 gateway    |VPC    |No |
   * |Route entry that points to a NAT gateway    |VPC    |No |
   * |VPC system route entry      | VPC       | Yes |
   * |Route entry that points to an on-premises data center      |VBR      |Yes |
   * |BGP route    |VBR    |Yes |
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
   * Cloud Enterprise Network (CEN) supports the publish route entry feature. You can publish routing entries from a VPC or VBR loaded into CEN to CEN by invoking the PublishRouteEntries operation. If no route conflict exists, other network instances in CEN can learn the published routes.
   * 
   * @remarks
   * The following table lists the default publish status of each type of route entry in CEN. You can call the PublishRouteEntries operation to publish route entries that are not published to CEN.
   * | Route entry        | Instance to which the route entry belongs         |Published to CEN by default
   * |------------- |-----------------------|--------------------|
   * |Route entry that points to an ECS instance      |VPC       |No |
   * |Route entry that points to a VPN gateway      |VPC       |No |
   * |Route entry that points to a high availability (HA) virtual IP address    |VPC    |No |
   * |Route entry that points to a router interface    |VPC    |No |
   * |Route entry that points to an elastic network interfaces (ENIs)    |VPC    |No |
   * |Route entry that points to an IPv6 gateway    |VPC    |No |
   * |Route entry that points to a NAT gateway    |VPC    |No |
   * |VPC system route entry      | VPC       | Yes |
   * |Route entry that points to an on-premises data center      |VBR      |Yes |
   * |BGP route    |VBR    |Yes |
   * 
   * @param request - PublishRouteEntriesRequest
   * @returns PublishRouteEntriesResponse
   */
  async publishRouteEntries(request: $_model.PublishRouteEntriesRequest): Promise<$_model.PublishRouteEntriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.publishRouteEntriesWithOptions(request, runtime);
  }

  /**
   * Republishes an aggregate route.
   * 
   * @remarks
   * For aggregate routes that failed to be published or were partially published, you can call the **RefreshTransitRouteTableAggregation** operation to republish the aggregate route to Virtual Private Cloud (VPC) instances after you resolve the route issue.
   * If you resolve the problematic route by using one of the following methods, the system automatically republishes the aggregate route and you do not need to manually republish it:
   * - Delete the association forwarding relationship.
   * - Disable the route synchronization feature.
   * - Delete the VPC route table.
   * - Delete the aggregate route.
   * You can call the **DescribeTransitRouteTableAggregationDetail** operation to query the propagation status of an aggregate route.
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
   * Republishes an aggregate route.
   * 
   * @remarks
   * For aggregate routes that failed to be published or were partially published, you can call the **RefreshTransitRouteTableAggregation** operation to republish the aggregate route to Virtual Private Cloud (VPC) instances after you resolve the route issue.
   * If you resolve the problematic route by using one of the following methods, the system automatically republishes the aggregate route and you do not need to manually republish it:
   * - Delete the association forwarding relationship.
   * - Disable the route synchronization feature.
   * - Delete the VPC route table.
   * - Delete the aggregate route.
   * You can call the **DescribeTransitRouteTableAggregationDetail** operation to query the propagation status of an aggregate route.
   * 
   * @param request - RefreshTransitRouteTableAggregationRequest
   * @returns RefreshTransitRouteTableAggregationResponse
   */
  async refreshTransitRouteTableAggregation(request: $_model.RefreshTransitRouteTableAggregationRequest): Promise<$_model.RefreshTransitRouteTableAggregationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.refreshTransitRouteTableAggregationWithOptions(request, runtime);
  }

  /**
   * Calls the RegisterTransitRouterMulticastGroupMembers operation to create or add multicast members.
   * 
   * @remarks
   * Currently, Enterprise Edition transit routers support only elastic network interfaces (ENIs) as multicast members. You can call the `RegisterTransitRouterMulticastGroupMembers` operation to specify ENIs in the same region or cross-region ENIs as multicast members.
   * - If you specify the **NetworkInterfaceIds** parameter, you want to specify ENIs in the current region as multicast members. Make sure that the vSwitch to which the ENI belongs is associated with the multicast domain. For more information, see [AssociateTransitRouterMulticastDomain](https://help.aliyun.com/document_detail/429778.html).
   * - If you specify the **PeerTransitRouterMulticastDomains** parameter, you want to specify multicast members in a multicast group with the same multicast IP address in a different region as multicast members of your current multicast group. Make sure that you have created an inter-region connection. For more information, see [CreateTransitRouterPeerAttachment](https://help.aliyun.com/document_detail/261363.html).
   *   For example, you have Multicast Domain 1 in the China (Hangzhou) region with Multicast Group 1, and Multicast Domain 2 in the China (Shanghai) region with Multicast Group 2. Multicast Group 1 and Multicast Group 2 have the same multicast IP address, and Multicast Group 2 in the China (Shanghai) region has Multicast Member 2. When you call the `RegisterTransitRouterMulticastGroupMembers` operation to create multicast members for Multicast Group 1 in the China (Hangzhou) region, if you set **PeerTransitRouterMulticastDomains** to the ID of Multicast Domain 2 in the China (Shanghai) region, Multicast Member 2 in Multicast Group 2 in the China (Shanghai) region also becomes a multicast member of Multicast Group 1 in the China (Hangzhou) region.
   * - The `RegisterTransitRouterMulticastGroupMembers` operation is asynchronous. After you send a request, the system returns a **RequestId** but the multicast member is not completely created. The creation task continues to run in the background. You can call the `ListTransitRouterMulticastGroups` operation to query the status of the multicast member.
   * 	- If the multicast member is in the **Registering** state, the multicast member is being created. In this state, you can only query the multicast member but cannot perform other operations.
   * 	- If the multicast member is in the **Registered** state, the multicast member is created.
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
   * Calls the RegisterTransitRouterMulticastGroupMembers operation to create or add multicast members.
   * 
   * @remarks
   * Currently, Enterprise Edition transit routers support only elastic network interfaces (ENIs) as multicast members. You can call the `RegisterTransitRouterMulticastGroupMembers` operation to specify ENIs in the same region or cross-region ENIs as multicast members.
   * - If you specify the **NetworkInterfaceIds** parameter, you want to specify ENIs in the current region as multicast members. Make sure that the vSwitch to which the ENI belongs is associated with the multicast domain. For more information, see [AssociateTransitRouterMulticastDomain](https://help.aliyun.com/document_detail/429778.html).
   * - If you specify the **PeerTransitRouterMulticastDomains** parameter, you want to specify multicast members in a multicast group with the same multicast IP address in a different region as multicast members of your current multicast group. Make sure that you have created an inter-region connection. For more information, see [CreateTransitRouterPeerAttachment](https://help.aliyun.com/document_detail/261363.html).
   *   For example, you have Multicast Domain 1 in the China (Hangzhou) region with Multicast Group 1, and Multicast Domain 2 in the China (Shanghai) region with Multicast Group 2. Multicast Group 1 and Multicast Group 2 have the same multicast IP address, and Multicast Group 2 in the China (Shanghai) region has Multicast Member 2. When you call the `RegisterTransitRouterMulticastGroupMembers` operation to create multicast members for Multicast Group 1 in the China (Hangzhou) region, if you set **PeerTransitRouterMulticastDomains** to the ID of Multicast Domain 2 in the China (Shanghai) region, Multicast Member 2 in Multicast Group 2 in the China (Shanghai) region also becomes a multicast member of Multicast Group 1 in the China (Hangzhou) region.
   * - The `RegisterTransitRouterMulticastGroupMembers` operation is asynchronous. After you send a request, the system returns a **RequestId** but the multicast member is not completely created. The creation task continues to run in the background. You can call the `ListTransitRouterMulticastGroups` operation to query the status of the multicast member.
   * 	- If the multicast member is in the **Registering** state, the multicast member is being created. In this state, you can only query the multicast member but cannot perform other operations.
   * 	- If the multicast member is in the **Registered** state, the multicast member is created.
   * 
   * @param request - RegisterTransitRouterMulticastGroupMembersRequest
   * @returns RegisterTransitRouterMulticastGroupMembersResponse
   */
  async registerTransitRouterMulticastGroupMembers(request: $_model.RegisterTransitRouterMulticastGroupMembersRequest): Promise<$_model.RegisterTransitRouterMulticastGroupMembersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.registerTransitRouterMulticastGroupMembersWithOptions(request, runtime);
  }

  /**
   * Creates multicast sources to implement one-to-many multicast communication.
   * 
   * @remarks
   * - Only elastic network interfaces (ENIs) can be specified as multicast sources.
   * - RegisterTransitRouterMulticastGroupSources is an asynchronous operation. After a request is sent, the system returns a **RequestId** but the multicast source is not completely created. The creation task still runs in the background. You can call the `ListTransitRouterMulticastGroups` operation to query the status of the multicast source. 
   *    
   *     - If the multicast source is in the **Registering** state, the multicast source is being created. In this state, you can only query the multicast source but cannot perform other operations.
   *     - If the multicast source is in the **Registered** state, the multicast source is created.
   * ### Before you begin
   * Before you invoke the `RegisterTransitRouterMulticastGroupSources` operation to create a multicast source, make sure that the vSwitch to which the network interface controller (NIC) of the elastic network interfaces (ENIs) belongs is associated with the multicast domain. For more information, see [AssociateTransitRouterMulticastDomain](https://help.aliyun.com/document_detail/429778.html).
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
   * Creates multicast sources to implement one-to-many multicast communication.
   * 
   * @remarks
   * - Only elastic network interfaces (ENIs) can be specified as multicast sources.
   * - RegisterTransitRouterMulticastGroupSources is an asynchronous operation. After a request is sent, the system returns a **RequestId** but the multicast source is not completely created. The creation task still runs in the background. You can call the `ListTransitRouterMulticastGroups` operation to query the status of the multicast source. 
   *    
   *     - If the multicast source is in the **Registering** state, the multicast source is being created. In this state, you can only query the multicast source but cannot perform other operations.
   *     - If the multicast source is in the **Registered** state, the multicast source is created.
   * ### Before you begin
   * Before you invoke the `RegisterTransitRouterMulticastGroupSources` operation to create a multicast source, make sure that the vSwitch to which the network interface controller (NIC) of the elastic network interfaces (ENIs) belongs is associated with the multicast domain. For more information, see [AssociateTransitRouterMulticastDomain](https://help.aliyun.com/document_detail/429778.html).
   * 
   * @param request - RegisterTransitRouterMulticastGroupSourcesRequest
   * @returns RegisterTransitRouterMulticastGroupSourcesResponse
   */
  async registerTransitRouterMulticastGroupSources(request: $_model.RegisterTransitRouterMulticastGroupSourcesRequest): Promise<$_model.RegisterTransitRouterMulticastGroupSourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.registerTransitRouterMulticastGroupSourcesWithOptions(request, runtime);
  }

  /**
   * Removes traffic classification rules from a traffic marking policy by calling the RemoveTrafficMatchRuleFromTrafficMarkingPolicy operation.
   * 
   * @remarks
   * - When you call the **RemoveTrafficMatchRuleFromTrafficMarkingPolicy** operation:
   *     - If you specify traffic classification rule IDs (the **TrafficMarkRuleIds** parameter), the operation deletes the specified traffic classification rules.
   *     - If you do not specify traffic classification rule IDs (the **TrafficMarkRuleIds** parameter), the operation does not perform any action.
   *     If you want to delete specific traffic classification rules, make sure that you have specified the IDs of the traffic classification rules before you call this operation.
   * - **RemoveTrafficMatchRuleFromTrafficMarkingPolicy** is an asynchronous operation. After you send a request, the system returns a **RequestId**, but the traffic classification rules are not immediately deleted. The deletion task runs in the background. You can call the **ListTrafficMarkingPolicies** operation to query the status of traffic classification rules. 
   *     - If a traffic classification rule is in the **Deleting** state, the rule is being deleted. In this state, you can only query the traffic classification rule. You cannot perform other operations on it.
   *     - If the specified traffic classification rule cannot be found, the rule has been deleted.
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
   * Removes traffic classification rules from a traffic marking policy by calling the RemoveTrafficMatchRuleFromTrafficMarkingPolicy operation.
   * 
   * @remarks
   * - When you call the **RemoveTrafficMatchRuleFromTrafficMarkingPolicy** operation:
   *     - If you specify traffic classification rule IDs (the **TrafficMarkRuleIds** parameter), the operation deletes the specified traffic classification rules.
   *     - If you do not specify traffic classification rule IDs (the **TrafficMarkRuleIds** parameter), the operation does not perform any action.
   *     If you want to delete specific traffic classification rules, make sure that you have specified the IDs of the traffic classification rules before you call this operation.
   * - **RemoveTrafficMatchRuleFromTrafficMarkingPolicy** is an asynchronous operation. After you send a request, the system returns a **RequestId**, but the traffic classification rules are not immediately deleted. The deletion task runs in the background. You can call the **ListTrafficMarkingPolicies** operation to query the status of traffic classification rules. 
   *     - If a traffic classification rule is in the **Deleting** state, the rule is being deleted. In this state, you can only query the traffic classification rule. You cannot perform other operations on it.
   *     - If the specified traffic classification rule cannot be found, the rule has been deleted.
   * 
   * @param request - RemoveTrafficMatchRuleFromTrafficMarkingPolicyRequest
   * @returns RemoveTrafficMatchRuleFromTrafficMarkingPolicyResponse
   */
  async removeTrafficMatchRuleFromTrafficMarkingPolicy(request: $_model.RemoveTrafficMatchRuleFromTrafficMarkingPolicyRequest): Promise<$_model.RemoveTrafficMatchRuleFromTrafficMarkingPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeTrafficMatchRuleFromTrafficMarkingPolicyWithOptions(request, runtime);
  }

  /**
   * Deletes traffic classification rules from a traffic marking policy.
   * 
   * @remarks
   * ### Precautions
   * The **RemoveTraficMatchRuleFromTrafficMarkingPolicy** operation is deprecated and will be discontinued. To delete traffic classification rules from a traffic marking policy, use the [RemoveTrafficMatchRuleFromTrafficMarkingPolicy](https://help.aliyun.com/document_detail/452726.html) operation. This API documentation is no longer maintained.
   * 
   * @deprecated OpenAPI RemoveTraficMatchRuleFromTrafficMarkingPolicy is deprecated, please use Cbn::2017-09-12::RemoveTrafficMatchRuleFromTrafficMarkingPolicy instead.
   * 
   * @param request - RemoveTraficMatchRuleFromTrafficMarkingPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveTraficMatchRuleFromTrafficMarkingPolicyResponse
   */
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
   * Deletes traffic classification rules from a traffic marking policy.
   * 
   * @remarks
   * ### Precautions
   * The **RemoveTraficMatchRuleFromTrafficMarkingPolicy** operation is deprecated and will be discontinued. To delete traffic classification rules from a traffic marking policy, use the [RemoveTrafficMatchRuleFromTrafficMarkingPolicy](https://help.aliyun.com/document_detail/452726.html) operation. This API documentation is no longer maintained.
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
   * Replaces the transit router route table associated with a network instance connection.
   * 
   * @remarks
   * - Only network instance connections under an Enterprise Edition transit router support changing the associated transit router route table.
   * - **ReplaceTransitRouterRouteTableAssociation** is an asynchronous operation. After you send a request, the system returns a **RequestId**, but the transit router route table associated with the network instance connection has not been replaced yet. The replacement task is still running in the background. You can call **ListTransitRouterRouteTableAssociations** to query the association forwarding status between the network instance connection and the new transit router route table.
   *     - If the association forwarding status is **Replacing**, the network instance connection is changing the associated transit router route table. In this state, you can only query the association forwarding relationship between the network instance connection and the transit router route table. You cannot perform other operations.
   *     - If the association forwarding status is **Active**, the network instance connection has successfully changed the associated transit router route table.
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
   * Replaces the transit router route table associated with a network instance connection.
   * 
   * @remarks
   * - Only network instance connections under an Enterprise Edition transit router support changing the associated transit router route table.
   * - **ReplaceTransitRouterRouteTableAssociation** is an asynchronous operation. After you send a request, the system returns a **RequestId**, but the transit router route table associated with the network instance connection has not been replaced yet. The replacement task is still running in the background. You can call **ListTransitRouterRouteTableAssociations** to query the association forwarding status between the network instance connection and the new transit router route table.
   *     - If the association forwarding status is **Replacing**, the network instance connection is changing the associated transit router route table. In this state, you can only query the association forwarding relationship between the network instance connection and the transit router route table. You cannot perform other operations.
   *     - If the association forwarding status is **Active**, the network instance connection has successfully changed the associated transit router route table.
   * 
   * @param request - ReplaceTransitRouterRouteTableAssociationRequest
   * @returns ReplaceTransitRouterRouteTableAssociationResponse
   */
  async replaceTransitRouterRouteTableAssociation(request: $_model.ReplaceTransitRouterRouteTableAssociationRequest): Promise<$_model.ReplaceTransitRouterRouteTableAssociationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.replaceTransitRouterRouteTableAssociationWithOptions(request, runtime);
  }

  /**
   * Configures a cloud service to add access configurations for on-premises networks by calling the ResolveAndRouteServiceInCen operation.
   * 
   * @remarks
   * Cloud services refer to Alibaba Cloud services that use the 100.64.0.0/10 CIDR block, such as Object Storage Service (OSS), Simple Log Service (SLS), and Data Transmission Service (DTS). If your on-premises network needs to access cloud services, you must load the Virtual Border Router (VBR) instance or Cloud Connect Network (CCN) instance associated with your on-premises network to a Cloud Enterprise Network (CEN) instance. You must also load a VPC-connected instance in the region where the cloud service resides to the same CEN instance. After loading, your on-premises network can access the VPC-connected instance in the region of the cloud service through CEN, and then access the cloud service through the VPC by forwarding traffic. The CEN handles the routing accordingly.
   * - Limits: This operation applies only to Basic Edition transit routers. On-premises networks associated with VBR instances can access only cloud services in the same region through CEN.
   *     For example, if the cloud service resides in the China (Beijing) region, only on-premises networks associated with VBR instances in the China (Beijing) region can access the cloud service.
   * - The **ResolveAndRouteServiceInCen** operation is asynchronous. After you send a request, the system returns a **RequestId** but the cloud service configuration is not yet complete. The background node for adding the configuration continues to run. You can invoke the **DescribeRouteServicesInCen** operation to query the status of the cloud service. 
   *     - If the cloud service is in the **Creating** state, the cloud service configuration is being added. In this state, you can only execute a query on the cloud service configuration and cannot execute other operations.
   *     - If the cloud service is in the **Active** state, the cloud service configuration is added.
   *     - If the cloud service is in the **Failed** state, the cloud service configuration failed to be added.
   * ### Before you begin
   * Before you invoke the ResolveAndRouteServiceInCen operation, make sure that the following conditions are met:
   * - The VBR or CCN instance with network connectivity to your on-premises network is loaded to the CEN instance.
   * - A VPC-connected instance in the region where the cloud service resides is loaded to the CEN instance. For more information, see [AttachCenChildInstance](https://help.aliyun.com/document_detail/65902.html).
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
   * Configures a cloud service to add access configurations for on-premises networks by calling the ResolveAndRouteServiceInCen operation.
   * 
   * @remarks
   * Cloud services refer to Alibaba Cloud services that use the 100.64.0.0/10 CIDR block, such as Object Storage Service (OSS), Simple Log Service (SLS), and Data Transmission Service (DTS). If your on-premises network needs to access cloud services, you must load the Virtual Border Router (VBR) instance or Cloud Connect Network (CCN) instance associated with your on-premises network to a Cloud Enterprise Network (CEN) instance. You must also load a VPC-connected instance in the region where the cloud service resides to the same CEN instance. After loading, your on-premises network can access the VPC-connected instance in the region of the cloud service through CEN, and then access the cloud service through the VPC by forwarding traffic. The CEN handles the routing accordingly.
   * - Limits: This operation applies only to Basic Edition transit routers. On-premises networks associated with VBR instances can access only cloud services in the same region through CEN.
   *     For example, if the cloud service resides in the China (Beijing) region, only on-premises networks associated with VBR instances in the China (Beijing) region can access the cloud service.
   * - The **ResolveAndRouteServiceInCen** operation is asynchronous. After you send a request, the system returns a **RequestId** but the cloud service configuration is not yet complete. The background node for adding the configuration continues to run. You can invoke the **DescribeRouteServicesInCen** operation to query the status of the cloud service. 
   *     - If the cloud service is in the **Creating** state, the cloud service configuration is being added. In this state, you can only execute a query on the cloud service configuration and cannot execute other operations.
   *     - If the cloud service is in the **Active** state, the cloud service configuration is added.
   *     - If the cloud service is in the **Failed** state, the cloud service configuration failed to be added.
   * ### Before you begin
   * Before you invoke the ResolveAndRouteServiceInCen operation, make sure that the following conditions are met:
   * - The VBR or CCN instance with network connectivity to your on-premises network is loaded to the CEN instance.
   * - A VPC-connected instance in the region where the cloud service resides is loaded to the CEN instance. For more information, see [AttachCenChildInstance](https://help.aliyun.com/document_detail/65902.html).
   * 
   * @param request - ResolveAndRouteServiceInCenRequest
   * @returns ResolveAndRouteServiceInCenResponse
   */
  async resolveAndRouteServiceInCen(request: $_model.ResolveAndRouteServiceInCenRequest): Promise<$_model.ResolveAndRouteServiceInCenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resolveAndRouteServiceInCenWithOptions(request, runtime);
  }

  /**
   * Revokes the permissions that allow a transit router to connect to a cross-account network instance.
   * 
   * @remarks
   * The `RevokeInstanceFromTransitRouter` operation only supports revoking the permissions that allow a transit router to connect to cross-account Virtual Private Cloud (VPC) instances, Virtual Border Router (VBR) instances, IPsec connections, and Express Connect Router (ECR) instances.
   * To revoke the permissions that allow a transit router to connect to a cross-account Cloud Connect Network (CCN) instance, call the [RevokeInstanceFromCbn](https://help.aliyun.com/document_detail/126142.html) operation.
   * ### Before you begin
   * Before you call the `RevokeInstanceFromTransitRouter` operation, make sure that the connection between the transit router and the VPC-connected instance is deleted.
   * - To delete the connection between an Enterprise Edition transit router and a VPC instance, see [DeleteTransitRouterVpcAttachment](https://help.aliyun.com/document_detail/261220.html).
   * - To delete the connection between an Enterprise Edition transit router and a VBR instance, see [DeleteTransitRouterVbrAttachment](https://help.aliyun.com/document_detail/261223.html).
   * - To delete the connection between an Enterprise Edition transit router and an IPsec connection, see [DeleteTransitRouterVpnAttachment](https://help.aliyun.com/document_detail/443992.html).
   * - To delete the connection between an Enterprise Edition transit router and an ECR instance, see [DeleteTransitRouterEcrAttachment](https://help.aliyun.com/document_detail/443992.html).
   * - To delete the connection between a Basic Edition transit router and a VPC-connected instance, see [DetachCenChildInstance](https://help.aliyun.com/document_detail/65915.html).
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
   * Revokes the permissions that allow a transit router to connect to a cross-account network instance.
   * 
   * @remarks
   * The `RevokeInstanceFromTransitRouter` operation only supports revoking the permissions that allow a transit router to connect to cross-account Virtual Private Cloud (VPC) instances, Virtual Border Router (VBR) instances, IPsec connections, and Express Connect Router (ECR) instances.
   * To revoke the permissions that allow a transit router to connect to a cross-account Cloud Connect Network (CCN) instance, call the [RevokeInstanceFromCbn](https://help.aliyun.com/document_detail/126142.html) operation.
   * ### Before you begin
   * Before you call the `RevokeInstanceFromTransitRouter` operation, make sure that the connection between the transit router and the VPC-connected instance is deleted.
   * - To delete the connection between an Enterprise Edition transit router and a VPC instance, see [DeleteTransitRouterVpcAttachment](https://help.aliyun.com/document_detail/261220.html).
   * - To delete the connection between an Enterprise Edition transit router and a VBR instance, see [DeleteTransitRouterVbrAttachment](https://help.aliyun.com/document_detail/261223.html).
   * - To delete the connection between an Enterprise Edition transit router and an IPsec connection, see [DeleteTransitRouterVpnAttachment](https://help.aliyun.com/document_detail/443992.html).
   * - To delete the connection between an Enterprise Edition transit router and an ECR instance, see [DeleteTransitRouterEcrAttachment](https://help.aliyun.com/document_detail/443992.html).
   * - To delete the connection between a Basic Edition transit router and a VPC-connected instance, see [DetachCenChildInstance](https://help.aliyun.com/document_detail/65915.html).
   * 
   * @param request - RevokeInstanceFromTransitRouterRequest
   * @returns RevokeInstanceFromTransitRouterResponse
   */
  async revokeInstanceFromTransitRouter(request: $_model.RevokeInstanceFromTransitRouterRequest): Promise<$_model.RevokeInstanceFromTransitRouterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revokeInstanceFromTransitRouterWithOptions(request, runtime);
  }

  /**
   * Configures the PrivateZone service by calling the RoutePrivateZoneInCenToVpc operation.
   * 
   * @remarks
   * PrivateZone is a private DNS resolution and management service based on the Alibaba Cloud Virtual Private Cloud (VPC) environment. After a Virtual Border Router (VBR) instance or a Cloud Connect Network (CCN) instance is attached to a Cloud Enterprise Network (CEN) instance, the associated on-premises network can access the PrivateZone service through CEN.
   * - On-premises networks associated with VBR instances and CCN instances can access only the PrivateZone service in the same region.
   *     For example, if the PrivateZone service is deployed in the China (Beijing) region, only on-premises networks associated with VBR instances in the China (Beijing) region and CCN instances in the Chinese mainland can access the PrivateZone service.
   * - The **RoutePrivateZoneInCenToVpc** operation is asynchronous. After you send a request, the system returns a **RequestId** but the PrivateZone service configuration is not complete. The configuration task continues to run in the background. You can call the **DescribeCenPrivateZoneRoutes** operation to query the status of the PrivateZone service. 
   *     - If the PrivateZone service is in the **Creating** state, the configuration is being added. In this state, you can only query the PrivateZone service configuration. You cannot perform other operations.
   *     - If the PrivateZone service is in the **Active** state, the configuration is complete.
   *     - If the PrivateZone service is in the **Failed** state, the configuration failed to be added.
   * #### Before you begin
   * Before you invoke the **RoutePrivateZoneInCenToVpc** operation, make sure that the following conditions are met:
   * - The PrivateZone service is deployed. For more information, see [Alibaba Cloud DNS PrivateZone Getting Started](https://help.aliyun.com/document_detail/64627.html).
   * - The VPC-connected instance associated with the PrivateZone service, and the VBR instance or CCN instance in the access region are attached to the same CEN instance. For more information, see [AttachCenChildInstance](https://help.aliyun.com/document_detail/65902.html).
   * - If your on-premises network uses a CCN instance to connect to Alibaba Cloud, and the CCN instance belongs to a different account from the VPC-connected instance or the CEN instance, complete the authorization for the CCN instance first. For more information, see [Cloud Connect Network authorization](https://help.aliyun.com/document_detail/106674.html).
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
   * Configures the PrivateZone service by calling the RoutePrivateZoneInCenToVpc operation.
   * 
   * @remarks
   * PrivateZone is a private DNS resolution and management service based on the Alibaba Cloud Virtual Private Cloud (VPC) environment. After a Virtual Border Router (VBR) instance or a Cloud Connect Network (CCN) instance is attached to a Cloud Enterprise Network (CEN) instance, the associated on-premises network can access the PrivateZone service through CEN.
   * - On-premises networks associated with VBR instances and CCN instances can access only the PrivateZone service in the same region.
   *     For example, if the PrivateZone service is deployed in the China (Beijing) region, only on-premises networks associated with VBR instances in the China (Beijing) region and CCN instances in the Chinese mainland can access the PrivateZone service.
   * - The **RoutePrivateZoneInCenToVpc** operation is asynchronous. After you send a request, the system returns a **RequestId** but the PrivateZone service configuration is not complete. The configuration task continues to run in the background. You can call the **DescribeCenPrivateZoneRoutes** operation to query the status of the PrivateZone service. 
   *     - If the PrivateZone service is in the **Creating** state, the configuration is being added. In this state, you can only query the PrivateZone service configuration. You cannot perform other operations.
   *     - If the PrivateZone service is in the **Active** state, the configuration is complete.
   *     - If the PrivateZone service is in the **Failed** state, the configuration failed to be added.
   * #### Before you begin
   * Before you invoke the **RoutePrivateZoneInCenToVpc** operation, make sure that the following conditions are met:
   * - The PrivateZone service is deployed. For more information, see [Alibaba Cloud DNS PrivateZone Getting Started](https://help.aliyun.com/document_detail/64627.html).
   * - The VPC-connected instance associated with the PrivateZone service, and the VBR instance or CCN instance in the access region are attached to the same CEN instance. For more information, see [AttachCenChildInstance](https://help.aliyun.com/document_detail/65902.html).
   * - If your on-premises network uses a CCN instance to connect to Alibaba Cloud, and the CCN instance belongs to a different account from the VPC-connected instance or the CEN instance, complete the authorization for the CCN instance first. For more information, see [Cloud Connect Network authorization](https://help.aliyun.com/document_detail/106674.html).
   * 
   * @param request - RoutePrivateZoneInCenToVpcRequest
   * @returns RoutePrivateZoneInCenToVpcResponse
   */
  async routePrivateZoneInCenToVpc(request: $_model.RoutePrivateZoneInCenToVpcRequest): Promise<$_model.RoutePrivateZoneInCenToVpcResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.routePrivateZoneInCenToVpcWithOptions(request, runtime);
  }

  /**
   * Sets, modifies, or deletes the inter-region bandwidth between two regions in a bandwidth package of a Basic Edition transit router.
   * 
   * @remarks
   * This operation supports setting the inter-region bandwidth between two regions only in bandwidth packages of Basic Edition transit routers.
   * ### Before you begin
   * A bandwidth package instance is already associated with the target Cloud Enterprise Network (CEN) instance. For more information, see [CreateCenBandwidthPackage](https://help.aliyun.com/document_detail/65919.html) and [AssociateCenBandwidthPackage](https://help.aliyun.com/document_detail/65934.html).
   * You can call **SetCenInterRegionBandwidthLimit** to set, modify, or delete the inter-region bandwidth:
   * - If **BandwidthLimit** is not 0, the inter-region bandwidth is set or modified.
   * - If **BandwidthLimit** is 0, the inter-region bandwidth is deleted.
   * ### Settings
   * - The maximum inter-region bandwidth cannot exceed the peak bandwidth of the bandwidth package instance to which it belongs.
   * - The total inter-region bandwidth under a bandwidth package instance cannot exceed the peak bandwidth of that bandwidth package instance.
   * - If the bandwidth multiplexing feature is enabled for the inter-region connection, modifying the inter-region bandwidth is not supported.
   * - The **SetCenInterRegionBandwidthLimit** operation supports setting, modifying, or deleting inter-region bandwidth only for Basic Edition transit routers.
   *     To set, modify, or delete inter-region bandwidth for Enterprise Edition transit routers, see [CreateTransitRouterPeerAttachment](https://help.aliyun.com/document_detail/261363.html), [UpdateTransitRouterPeerAttachmentAttribute](https://help.aliyun.com/document_detail/261229.html), and [DeleteTransitRouterPeerAttachment](https://help.aliyun.com/document_detail/261227.html).
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
   * Sets, modifies, or deletes the inter-region bandwidth between two regions in a bandwidth package of a Basic Edition transit router.
   * 
   * @remarks
   * This operation supports setting the inter-region bandwidth between two regions only in bandwidth packages of Basic Edition transit routers.
   * ### Before you begin
   * A bandwidth package instance is already associated with the target Cloud Enterprise Network (CEN) instance. For more information, see [CreateCenBandwidthPackage](https://help.aliyun.com/document_detail/65919.html) and [AssociateCenBandwidthPackage](https://help.aliyun.com/document_detail/65934.html).
   * You can call **SetCenInterRegionBandwidthLimit** to set, modify, or delete the inter-region bandwidth:
   * - If **BandwidthLimit** is not 0, the inter-region bandwidth is set or modified.
   * - If **BandwidthLimit** is 0, the inter-region bandwidth is deleted.
   * ### Settings
   * - The maximum inter-region bandwidth cannot exceed the peak bandwidth of the bandwidth package instance to which it belongs.
   * - The total inter-region bandwidth under a bandwidth package instance cannot exceed the peak bandwidth of that bandwidth package instance.
   * - If the bandwidth multiplexing feature is enabled for the inter-region connection, modifying the inter-region bandwidth is not supported.
   * - The **SetCenInterRegionBandwidthLimit** operation supports setting, modifying, or deleting inter-region bandwidth only for Basic Edition transit routers.
   *     To set, modify, or delete inter-region bandwidth for Enterprise Edition transit routers, see [CreateTransitRouterPeerAttachment](https://help.aliyun.com/document_detail/261363.html), [UpdateTransitRouterPeerAttachmentAttribute](https://help.aliyun.com/document_detail/261229.html), and [DeleteTransitRouterPeerAttachment](https://help.aliyun.com/document_detail/261227.html).
   * 
   * @param request - SetCenInterRegionBandwidthLimitRequest
   * @returns SetCenInterRegionBandwidthLimitResponse
   */
  async setCenInterRegionBandwidthLimit(request: $_model.SetCenInterRegionBandwidthLimitRequest): Promise<$_model.SetCenInterRegionBandwidthLimitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setCenInterRegionBandwidthLimitWithOptions(request, runtime);
  }

  /**
   * Creates and attaches tags to resources.
   * 
   * @remarks
   * - A tag consists of a tag key and a tag value. Both the tag key and tag value are required when you add a tag.
   * - If you want to add multiple tags to a Cloud Enterprise Network (CEN) instance, the tag keys of the tags must be unique within the instance.
   * - You can attach up to 20 tags to a CEN instance.
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
   * Creates and attaches tags to resources.
   * 
   * @remarks
   * - A tag consists of a tag key and a tag value. Both the tag key and tag value are required when you add a tag.
   * - If you want to add multiple tags to a Cloud Enterprise Network (CEN) instance, the tag keys of the tags must be unique within the instance.
   * - You can attach up to 20 tags to a CEN instance.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Calls the TempUpgradeCenBandwidthPackageSpec operation to temporarily upgrade the specifications of a subscription bandwidth plan for Cloud Enterprise Network (CEN).
   * 
   * @remarks
   * Subscription bandwidth plans support the temporary upgrade feature. You can use this feature to increase the bandwidth value of a bandwidth plan within a specified period to flexibly handle business bandwidth fluctuations.
   * The minimum interval for a temporary upgrade is 3 hours. After the payment is completed, the bandwidth is upgraded immediately without service interruptions.
   * > After a temporary upgrade expires, the subscription bandwidth plan reverts to the original peak bandwidth. If the service traffic on the instance exceeds the original peak bandwidth limit, the traffic may be dropped due to throttling. Plan the expiration time of the temporary upgrade properly and make sure that the peak bandwidth matches your business requirements.
   * - The temporary upgrade feature is not available by default. To use this feature, contact your account manager.
   * - Pay-as-you-go bandwidth plans and expired subscription bandwidth plans do not support the temporary upgrade feature.
   * - The **TempUpgradeCenBandwidthPackageSpec** operation is asynchronous. After you call this operation, the system returns a **RequestId** but the bandwidth plan is not yet upgraded. The upgrade task continues to run in the background. You can call the **DescribeCenBandwidthPackages** operation to query the specifications of the bandwidth plan. If the specifications meet your expectations, the upgrade is complete.
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
   * Calls the TempUpgradeCenBandwidthPackageSpec operation to temporarily upgrade the specifications of a subscription bandwidth plan for Cloud Enterprise Network (CEN).
   * 
   * @remarks
   * Subscription bandwidth plans support the temporary upgrade feature. You can use this feature to increase the bandwidth value of a bandwidth plan within a specified period to flexibly handle business bandwidth fluctuations.
   * The minimum interval for a temporary upgrade is 3 hours. After the payment is completed, the bandwidth is upgraded immediately without service interruptions.
   * > After a temporary upgrade expires, the subscription bandwidth plan reverts to the original peak bandwidth. If the service traffic on the instance exceeds the original peak bandwidth limit, the traffic may be dropped due to throttling. Plan the expiration time of the temporary upgrade properly and make sure that the peak bandwidth matches your business requirements.
   * - The temporary upgrade feature is not available by default. To use this feature, contact your account manager.
   * - Pay-as-you-go bandwidth plans and expired subscription bandwidth plans do not support the temporary upgrade feature.
   * - The **TempUpgradeCenBandwidthPackageSpec** operation is asynchronous. After you call this operation, the system returns a **RequestId** but the bandwidth plan is not yet upgraded. The upgrade task continues to run in the background. You can call the **DescribeCenBandwidthPackages** operation to query the specifications of the bandwidth plan. If the specifications meet your expectations, the upgrade is complete.
   * 
   * @param request - TempUpgradeCenBandwidthPackageSpecRequest
   * @returns TempUpgradeCenBandwidthPackageSpecResponse
   */
  async tempUpgradeCenBandwidthPackageSpec(request: $_model.TempUpgradeCenBandwidthPackageSpecRequest): Promise<$_model.TempUpgradeCenBandwidthPackageSpecResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tempUpgradeCenBandwidthPackageSpecWithOptions(request, runtime);
  }

  /**
   * Disassociates a bandwidth package from a Cloud Enterprise Network (CEN) instance. After the disassociation, the bandwidth package can be associated with another CEN instance.
   * 
   * @remarks
   * Disassociates a bandwidth package from a Cloud Enterprise Network (CEN) instance. Before you call this operation, make sure that no inter-region bandwidth is configured for the bandwidth package. You can call [DescribeCenInterRegionBandwidthLimits](https://help.aliyun.com/document_detail/468275.html) to query inter-region bandwidth, and then call [SetCenInterRegionBandwidthLimit](https://help.aliyun.com/document_detail/65942.html) to set BandwidthLimit to 0 to delete the configured inter-region bandwidth.
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
   * Disassociates a bandwidth package from a Cloud Enterprise Network (CEN) instance. After the disassociation, the bandwidth package can be associated with another CEN instance.
   * 
   * @remarks
   * Disassociates a bandwidth package from a Cloud Enterprise Network (CEN) instance. Before you call this operation, make sure that no inter-region bandwidth is configured for the bandwidth package. You can call [DescribeCenInterRegionBandwidthLimits](https://help.aliyun.com/document_detail/468275.html) to query inter-region bandwidth, and then call [SetCenInterRegionBandwidthLimit](https://help.aliyun.com/document_detail/65942.html) to set BandwidthLimit to 0 to delete the configured inter-region bandwidth.
   * 
   * @param request - UnassociateCenBandwidthPackageRequest
   * @returns UnassociateCenBandwidthPackageResponse
   */
  async unassociateCenBandwidthPackage(request: $_model.UnassociateCenBandwidthPackageRequest): Promise<$_model.UnassociateCenBandwidthPackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unassociateCenBandwidthPackageWithOptions(request, runtime);
  }

  /**
   * Deletes a PrivateZone service configuration by calling the UnroutePrivateZoneInCenToVpc operation.
   * 
   * @remarks
   * *UnroutePrivateZoneInCenToVpc** is an asynchronous operation. After you call this operation, the system returns a **RequestId** but the PrivateZone service configuration is not immediately deleted. The deletion task continues to run in the background. You can call the **DescribeCenPrivateZoneRoutes** operation to query the status of the PrivateZone service. 
   * - If the PrivateZone service is in the **Deleting** state, the PrivateZone service configuration is being deleted. In this state, you can only query the PrivateZone service configuration. You cannot perform other operations.
   * - If the specified PrivateZone service configuration cannot be found, the deletion is complete.
   * If a PrivateZone configuration exists with the access region set to a Cloud Connect Network region, delete the PrivateZone configuration for the Cloud Connect Network region first, and then delete the PrivateZone configurations for other access regions.
   * 
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
   * Deletes a PrivateZone service configuration by calling the UnroutePrivateZoneInCenToVpc operation.
   * 
   * @remarks
   * *UnroutePrivateZoneInCenToVpc** is an asynchronous operation. After you call this operation, the system returns a **RequestId** but the PrivateZone service configuration is not immediately deleted. The deletion task continues to run in the background. You can call the **DescribeCenPrivateZoneRoutes** operation to query the status of the PrivateZone service. 
   * - If the PrivateZone service is in the **Deleting** state, the PrivateZone service configuration is being deleted. In this state, you can only query the PrivateZone service configuration. You cannot perform other operations.
   * - If the specified PrivateZone service configuration cannot be found, the deletion is complete.
   * If a PrivateZone configuration exists with the access region set to a Cloud Connect Network region, delete the PrivateZone configuration for the Cloud Connect Network region first, and then delete the PrivateZone configurations for other access regions.
   * 
   * @param request - UnroutePrivateZoneInCenToVpcRequest
   * @returns UnroutePrivateZoneInCenToVpcResponse
   */
  async unroutePrivateZoneInCenToVpc(request: $_model.UnroutePrivateZoneInCenToVpcRequest): Promise<$_model.UnroutePrivateZoneInCenToVpcResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unroutePrivateZoneInCenToVpcWithOptions(request, runtime);
  }

  /**
   * Remove tags from resources.
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
   * Remove tags from resources.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Modifies the name and description of a traffic scheduling policy.
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
   * Modifies the name and description of a traffic scheduling policy.
   * 
   * @param request - UpdateCenInterRegionTrafficQosPolicyAttributeRequest
   * @returns UpdateCenInterRegionTrafficQosPolicyAttributeResponse
   */
  async updateCenInterRegionTrafficQosPolicyAttribute(request: $_model.UpdateCenInterRegionTrafficQosPolicyAttributeRequest): Promise<$_model.UpdateCenInterRegionTrafficQosPolicyAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCenInterRegionTrafficQosPolicyAttributeWithOptions(request, runtime);
  }

  /**
   * Calls the UpdateCenInterRegionTrafficQosQueueAttribute operation to modify the name, description, cross-region bandwidth, and DSCP value configurations of a queue in a traffic scheduling policy.
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
   * Calls the UpdateCenInterRegionTrafficQosQueueAttribute operation to modify the name, description, cross-region bandwidth, and DSCP value configurations of a queue in a traffic scheduling policy.
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
   * Modifies the name and description of a transit router instance.
   * 
   * @remarks
   * *UpdateTransitRouter** is an asynchronous operation. After you send a request, the system returns a **RequestId**, but the modification of the transit router instance is not yet complete. The modification task continues to run in the background. You can call the **ListTransitRouters** operation to query the status of the transit router instance. 
   * - If the transit router instance is in the **Modifying** state, the transit router instance is being modified. In this state, you can only query the transit router instance but cannot perform other operations on it.
   * - If the transit router instance is in the **Active** state, the transit router instance has been modified.
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
   * Modifies the name and description of a transit router instance.
   * 
   * @remarks
   * *UpdateTransitRouter** is an asynchronous operation. After you send a request, the system returns a **RequestId**, but the modification of the transit router instance is not yet complete. The modification task continues to run in the background. You can call the **ListTransitRouters** operation to query the status of the transit router instance. 
   * - If the transit router instance is in the **Modifying** state, the transit router instance is being modified. In this state, you can only query the transit router instance but cannot perform other operations on it.
   * - If the transit router instance is in the **Active** state, the transit router instance has been modified.
   * 
   * @param request - UpdateTransitRouterRequest
   * @returns UpdateTransitRouterResponse
   */
  async updateTransitRouter(request: $_model.UpdateTransitRouterRequest): Promise<$_model.UpdateTransitRouterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTransitRouterWithOptions(request, runtime);
  }

  /**
   * Calls the UpdateTransitRouterEcrAttachmentAttribute operation to modify the name and description of an Express Connect Router (ECR) connection under an Enterprise Edition transit router.
   * 
   * @remarks
   * UpdateTransitRouterEcrAttachmentAttribute is an asynchronous operation. The system returns a RequestId immediately, but the ECR connection has not been modified yet because the modification task is still running in the background. You can call the ListTransitRouterEcrAttachments operation to query the status of the ECR connection.
   * If the ECR connection is in the Modifying state, the ECR connection is being modified. In this state, you can only query the ECR connection but cannot perform other operations on it.
   * If the ECR connection is in the Attached state, the ECR connection has been modified.
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

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
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
   * Calls the UpdateTransitRouterEcrAttachmentAttribute operation to modify the name and description of an Express Connect Router (ECR) connection under an Enterprise Edition transit router.
   * 
   * @remarks
   * UpdateTransitRouterEcrAttachmentAttribute is an asynchronous operation. The system returns a RequestId immediately, but the ECR connection has not been modified yet because the modification task is still running in the background. You can call the ListTransitRouterEcrAttachments operation to query the status of the ECR connection.
   * If the ECR connection is in the Modifying state, the ECR connection is being modified. In this state, you can only query the ECR connection but cannot perform other operations on it.
   * If the ECR connection is in the Attached state, the ECR connection has been modified.
   * 
   * @param request - UpdateTransitRouterEcrAttachmentAttributeRequest
   * @returns UpdateTransitRouterEcrAttachmentAttributeResponse
   */
  async updateTransitRouterEcrAttachmentAttribute(request: $_model.UpdateTransitRouterEcrAttachmentAttributeRequest): Promise<$_model.UpdateTransitRouterEcrAttachmentAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTransitRouterEcrAttachmentAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the configuration of an inter-region connection on an Enterprise Edition transit router by calling the UpdateTransitRouterPeerAttachmentAttribute operation.
   * 
   * @remarks
   * *UpdateTransitRouterPeerAttachmentAttribute** is an asynchronous operation. After you send a request, the system returns a **RequestId** but the inter-region connection is not yet modified. The modification task continues to run in the background. You can call **ListTransitRouterPeerAttachments** to query the status of the inter-region connection.
   * - If the inter-region connection is in the **Modifying** state, the inter-region connection is being modified. In this state, you can only query the inter-region connection but cannot perform other operations on it.
   * - If the inter-region connection is in the **Attached** state, the inter-region connection is modified.
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
   * Modifies the configuration of an inter-region connection on an Enterprise Edition transit router by calling the UpdateTransitRouterPeerAttachmentAttribute operation.
   * 
   * @remarks
   * *UpdateTransitRouterPeerAttachmentAttribute** is an asynchronous operation. After you send a request, the system returns a **RequestId** but the inter-region connection is not yet modified. The modification task continues to run in the background. You can call **ListTransitRouterPeerAttachments** to query the status of the inter-region connection.
   * - If the inter-region connection is in the **Modifying** state, the inter-region connection is being modified. In this state, you can only query the inter-region connection but cannot perform other operations on it.
   * - If the inter-region connection is in the **Attached** state, the inter-region connection is modified.
   * 
   * @param request - UpdateTransitRouterPeerAttachmentAttributeRequest
   * @returns UpdateTransitRouterPeerAttachmentAttributeResponse
   */
  async updateTransitRouterPeerAttachmentAttribute(request: $_model.UpdateTransitRouterPeerAttachmentAttributeRequest): Promise<$_model.UpdateTransitRouterPeerAttachmentAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTransitRouterPeerAttachmentAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the name and description of a route entry in an Enterprise Edition transit router route table.
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
   * Modifies the name and description of a route entry in an Enterprise Edition transit router route table.
   * 
   * @param request - UpdateTransitRouterRouteEntryRequest
   * @returns UpdateTransitRouterRouteEntryResponse
   */
  async updateTransitRouterRouteEntry(request: $_model.UpdateTransitRouterRouteEntryRequest): Promise<$_model.UpdateTransitRouterRouteEntryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTransitRouterRouteEntryWithOptions(request, runtime);
  }

  /**
   * Calls the UpdateTransitRouterRouteTable operation to modify the name and description of an Enterprise Edition transit router route table and to enable or disable multi-region equal-cost multi-path (ECMP) routing.
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
   * Calls the UpdateTransitRouterRouteTable operation to modify the name and description of an Enterprise Edition transit router route table and to enable or disable multi-region equal-cost multi-path (ECMP) routing.
   * 
   * @param request - UpdateTransitRouterRouteTableRequest
   * @returns UpdateTransitRouterRouteTableResponse
   */
  async updateTransitRouterRouteTable(request: $_model.UpdateTransitRouterRouteTableRequest): Promise<$_model.UpdateTransitRouterRouteTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTransitRouterRouteTableWithOptions(request, runtime);
  }

  /**
   * Modifies the name, description, and automatic route forwarding settings of a virtual border router (VBR) connection on an Enterprise Edition transit router.
   * 
   * @remarks
   * *UpdateTransitRouterVbrAttachmentAttribute** is an asynchronous operation. After you send a request, the system returns a **RequestId** but the VBR connection is not yet modified. The modification task continues to run in the background. You can call **ListTransitRouterVbrAttachments** to query the status of the VBR connection. 
   * - If the VBR connection is in the **Modifying** state, the VBR connection is being modified. In this state, you can only query the VBR connection but cannot perform other operations.
   * - If the VBR connection is in the **Attached** state, the VBR connection is modified.
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

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
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
   * Modifies the name, description, and automatic route forwarding settings of a virtual border router (VBR) connection on an Enterprise Edition transit router.
   * 
   * @remarks
   * *UpdateTransitRouterVbrAttachmentAttribute** is an asynchronous operation. After you send a request, the system returns a **RequestId** but the VBR connection is not yet modified. The modification task continues to run in the background. You can call **ListTransitRouterVbrAttachments** to query the status of the VBR connection. 
   * - If the VBR connection is in the **Modifying** state, the VBR connection is being modified. In this state, you can only query the VBR connection but cannot perform other operations.
   * - If the VBR connection is in the **Attached** state, the VBR connection is modified.
   * 
   * @param request - UpdateTransitRouterVbrAttachmentAttributeRequest
   * @returns UpdateTransitRouterVbrAttachmentAttributeResponse
   */
  async updateTransitRouterVbrAttachmentAttribute(request: $_model.UpdateTransitRouterVbrAttachmentAttributeRequest): Promise<$_model.UpdateTransitRouterVbrAttachmentAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTransitRouterVbrAttachmentAttributeWithOptions(request, runtime);
  }

  /**
   * Invokes the UpdateTransitRouterVpcAttachmentAttribute operation to modify the name and description of a VPC connection under an Enterprise Edition transit router and specifies whether the Enterprise Edition transit router automatically publishes routing to the VPC-connected instance.
   * 
   * @remarks
   * *UpdateTransitRouterVpcAttachmentAttribute** is an asynchronous operation. After you send a request, the system returns a **RequestId** but the VPC connection has not been modified. The modification task continues to run in the background. You can call **ListTransitRouterVpcAttachments** to query the status of the VPC connection. 
   * - If the VPC connection is in the **Modifying** state, the VPC connection is being modified. In this state, you can only query the VPC connection but cannot perform other operations.
   * - If the VPC connection is in the **Attached** state, the VPC connection is modified.
   * 
   * @param tmpReq - UpdateTransitRouterVpcAttachmentAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTransitRouterVpcAttachmentAttributeResponse
   */
  async updateTransitRouterVpcAttachmentAttributeWithOptions(tmpReq: $_model.UpdateTransitRouterVpcAttachmentAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTransitRouterVpcAttachmentAttributeResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateTransitRouterVpcAttachmentAttributeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.options)) {
      request.optionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.options, "Options", "json");
    }

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

    if (!$dara.isNull(request.optionsShrink)) {
      query["Options"] = request.optionsShrink;
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
   * Invokes the UpdateTransitRouterVpcAttachmentAttribute operation to modify the name and description of a VPC connection under an Enterprise Edition transit router and specifies whether the Enterprise Edition transit router automatically publishes routing to the VPC-connected instance.
   * 
   * @remarks
   * *UpdateTransitRouterVpcAttachmentAttribute** is an asynchronous operation. After you send a request, the system returns a **RequestId** but the VPC connection has not been modified. The modification task continues to run in the background. You can call **ListTransitRouterVpcAttachments** to query the status of the VPC connection. 
   * - If the VPC connection is in the **Modifying** state, the VPC connection is being modified. In this state, you can only query the VPC connection but cannot perform other operations.
   * - If the VPC connection is in the **Attached** state, the VPC connection is modified.
   * 
   * @param request - UpdateTransitRouterVpcAttachmentAttributeRequest
   * @returns UpdateTransitRouterVpcAttachmentAttributeResponse
   */
  async updateTransitRouterVpcAttachmentAttribute(request: $_model.UpdateTransitRouterVpcAttachmentAttributeRequest): Promise<$_model.UpdateTransitRouterVpcAttachmentAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTransitRouterVpcAttachmentAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the zones and vSwitches associated with a virtual private cloud (VPC) connection by calling the UpdateTransitRouterVpcAttachmentZones operation.
   * 
   * @remarks
   * - When you add zones and vSwitches to a VPC connection, make sure that the vSwitch has an idle IP address. During the modification procedure, the Enterprise Edition transit router creates an elastic network interfaces (ENIs) in the vSwitch (which occupies one IP address of the vSwitch) as the interface for routing traffic between the VPC-connected instance and the Enterprise Edition transit router.
   * - The **UpdateTransitRouterVpcAttachmentZones** operation is asynchronous. After you send a request, the system returns a **RequestId** but the VPC connection is not yet modified. The modification task continues to run in the background. You can invoke the **ListTransitRouterVpcAttachments** operation to query the status of the VPC connection.
   *     - If the VPC connection is in the **Modifying** state, the VPC connection is being modified. In this state, you can only query the VPC connection but cannot perform other operations.
   *     - If the VPC connection is in the **Attached** state, the VPC connection is modified.
   * - At least one zone and vSwitch mapping must be retained under a **VPC connection ID**. You cannot delete all zone and vSwitch mappings.
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
   * Modifies the zones and vSwitches associated with a virtual private cloud (VPC) connection by calling the UpdateTransitRouterVpcAttachmentZones operation.
   * 
   * @remarks
   * - When you add zones and vSwitches to a VPC connection, make sure that the vSwitch has an idle IP address. During the modification procedure, the Enterprise Edition transit router creates an elastic network interfaces (ENIs) in the vSwitch (which occupies one IP address of the vSwitch) as the interface for routing traffic between the VPC-connected instance and the Enterprise Edition transit router.
   * - The **UpdateTransitRouterVpcAttachmentZones** operation is asynchronous. After you send a request, the system returns a **RequestId** but the VPC connection is not yet modified. The modification task continues to run in the background. You can invoke the **ListTransitRouterVpcAttachments** operation to query the status of the VPC connection.
   *     - If the VPC connection is in the **Modifying** state, the VPC connection is being modified. In this state, you can only query the VPC connection but cannot perform other operations.
   *     - If the VPC connection is in the **Attached** state, the VPC connection is modified.
   * - At least one zone and vSwitch mapping must be retained under a **VPC connection ID**. You cannot delete all zone and vSwitch mappings.
   * 
   * @param request - UpdateTransitRouterVpcAttachmentZonesRequest
   * @returns UpdateTransitRouterVpcAttachmentZonesResponse
   */
  async updateTransitRouterVpcAttachmentZones(request: $_model.UpdateTransitRouterVpcAttachmentZonesRequest): Promise<$_model.UpdateTransitRouterVpcAttachmentZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTransitRouterVpcAttachmentZonesWithOptions(request, runtime);
  }

  /**
   * Calls the UpdateTransitRouterVpnAttachmentAttribute operation to modify the name, description, and whether to automatically publish route entries for a VPN connection under an Enterprise Edition transit router.
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

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
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
   * Calls the UpdateTransitRouterVpnAttachmentAttribute operation to modify the name, description, and whether to automatically publish route entries for a VPN connection under an Enterprise Edition transit router.
   * 
   * @param request - UpdateTransitRouterVpnAttachmentAttributeRequest
   * @returns UpdateTransitRouterVpnAttachmentAttributeResponse
   */
  async updateTransitRouterVpnAttachmentAttribute(request: $_model.UpdateTransitRouterVpnAttachmentAttributeRequest): Promise<$_model.UpdateTransitRouterVpnAttachmentAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTransitRouterVpnAttachmentAttributeWithOptions(request, runtime);
  }

  /**
   * Calls the WithdrawPublishedRouteEntries operation to withdraw routing entries that have been published from a virtual private cloud (VPC) or virtual border router (VBR) instance to Cloud Enterprise Network (CEN).
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
   * Calls the WithdrawPublishedRouteEntries operation to withdraw routing entries that have been published from a virtual private cloud (VPC) or virtual border router (VBR) instance to Cloud Enterprise Network (CEN).
   * 
   * @param request - WithdrawPublishedRouteEntriesRequest
   * @returns WithdrawPublishedRouteEntriesResponse
   */
  async withdrawPublishedRouteEntries(request: $_model.WithdrawPublishedRouteEntriesRequest): Promise<$_model.WithdrawPublishedRouteEntriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.withdrawPublishedRouteEntriesWithOptions(request, runtime);
  }

}
