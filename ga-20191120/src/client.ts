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
    this._endpoint = this.getEndpoint("ga", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Adds IP addresses or CIDR blocks to an access control list (ACL). You can add IP addresses or CIDR blocks to an ACL and configure a whitelist or blacklist to allow or deny requests from clients.
   * 
   * @remarks
   *   **AddEntriesToAcl** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetAcl](https://help.aliyun.com/document_detail/258292.html) or [ListAcls](https://help.aliyun.com/document_detail/258291.html) operation to query the status of the ACL to which you want to add IP entries.
   *     *   If the ACL is in the **configuring** state, it indicates that IP entries are added to the ACL. In this case, you can perform only query operations.
   *     *   If the ACL is in the **active** state, it indicates that IP entries are added to the ACL.
   * *   The **AddEntriesToAcl** operation holds an exclusive lock on the Global Accelerator (GA) instance. While the operation is in progress, you cannot call the same operation in the same Alibaba Cloud account.
   * 
   * @param request - AddEntriesToAclRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddEntriesToAclResponse
   */
  async addEntriesToAclWithOptions(request: $_model.AddEntriesToAclRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddEntriesToAclResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclEntries)) {
      query["AclEntries"] = request.aclEntries;
    }

    if (!$dara.isNull(request.aclId)) {
      query["AclId"] = request.aclId;
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
      action: "AddEntriesToAcl",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddEntriesToAclResponse>(await this.callApi(params, req, runtime), new $_model.AddEntriesToAclResponse({}));
  }

  /**
   * Adds IP addresses or CIDR blocks to an access control list (ACL). You can add IP addresses or CIDR blocks to an ACL and configure a whitelist or blacklist to allow or deny requests from clients.
   * 
   * @remarks
   *   **AddEntriesToAcl** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetAcl](https://help.aliyun.com/document_detail/258292.html) or [ListAcls](https://help.aliyun.com/document_detail/258291.html) operation to query the status of the ACL to which you want to add IP entries.
   *     *   If the ACL is in the **configuring** state, it indicates that IP entries are added to the ACL. In this case, you can perform only query operations.
   *     *   If the ACL is in the **active** state, it indicates that IP entries are added to the ACL.
   * *   The **AddEntriesToAcl** operation holds an exclusive lock on the Global Accelerator (GA) instance. While the operation is in progress, you cannot call the same operation in the same Alibaba Cloud account.
   * 
   * @param request - AddEntriesToAclRequest
   * @returns AddEntriesToAclResponse
   */
  async addEntriesToAcl(request: $_model.AddEntriesToAclRequest): Promise<$_model.AddEntriesToAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addEntriesToAclWithOptions(request, runtime);
  }

  /**
   * Associates access control lists (ACLs) with a listener.
   * 
   * @remarks
   * ## Description
   * *   **AssociateAclsWithListener** is an asynchronous operation. After you send a request, the system returns a request ID, but the operation is still being performed in the system background. You can call the [DescribeListener](https://help.aliyun.com/document_detail/153254.html) operation to query the state of the listener with which you attempt to associate an ACL.
   *     *   If the listener is in the **updating** state, it indicates that the ACL is being associated. In this case, you can perform only query operations.
   *     *   If the listener is in the **active** state, it indicates that the ACL is associated.
   * *   The **AssociateAclsWithListener** operation cannot be called repeatedly for the same Global Accelerator (GA) instance within a specific period of time.
   * 
   * @param request - AssociateAclsWithListenerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssociateAclsWithListenerResponse
   */
  async associateAclsWithListenerWithOptions(request: $_model.AssociateAclsWithListenerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssociateAclsWithListenerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclIds)) {
      query["AclIds"] = request.aclIds;
    }

    if (!$dara.isNull(request.aclType)) {
      query["AclType"] = request.aclType;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssociateAclsWithListener",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssociateAclsWithListenerResponse>(await this.callApi(params, req, runtime), new $_model.AssociateAclsWithListenerResponse({}));
  }

  /**
   * Associates access control lists (ACLs) with a listener.
   * 
   * @remarks
   * ## Description
   * *   **AssociateAclsWithListener** is an asynchronous operation. After you send a request, the system returns a request ID, but the operation is still being performed in the system background. You can call the [DescribeListener](https://help.aliyun.com/document_detail/153254.html) operation to query the state of the listener with which you attempt to associate an ACL.
   *     *   If the listener is in the **updating** state, it indicates that the ACL is being associated. In this case, you can perform only query operations.
   *     *   If the listener is in the **active** state, it indicates that the ACL is associated.
   * *   The **AssociateAclsWithListener** operation cannot be called repeatedly for the same Global Accelerator (GA) instance within a specific period of time.
   * 
   * @param request - AssociateAclsWithListenerRequest
   * @returns AssociateAclsWithListenerResponse
   */
  async associateAclsWithListener(request: $_model.AssociateAclsWithListenerRequest): Promise<$_model.AssociateAclsWithListenerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.associateAclsWithListenerWithOptions(request, runtime);
  }

  /**
   * Associates additional certificates with an HTTPS listener. You can associate multiple certificates with an HTTPS listener and configure virtual endpoint groups and forwarding rules to accelerate access to multiple HTTPS-capable domain names.
   * 
   * @remarks
   *   Only HTTPS listeners can be associated with additional certificates.
   * *   **AssociateAdditionalCertificatesWithListener** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeListener](https://help.aliyun.com/document_detail/153254.html) operation to query the status of the listener with which you want to associate an additional certificate.
   *     *   If the listener is in the **updating** state, it indicates that the additional certificate is being associated. In this case, you can perform only query operations.
   *     *   If the listener is in the **active** state, it indicates that the additional certificate is associated.
   * *   The **AssociateAdditionalCertificatesWithListener** operation holds an exclusive lock on the Global Accelerator (GA) instance. While the operation is in progress, you cannot call the same operation in the same Alibaba Cloud account.
   * 
   * @param request - AssociateAdditionalCertificatesWithListenerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssociateAdditionalCertificatesWithListenerResponse
   */
  async associateAdditionalCertificatesWithListenerWithOptions(request: $_model.AssociateAdditionalCertificatesWithListenerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssociateAdditionalCertificatesWithListenerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.certificates)) {
      query["Certificates"] = request.certificates;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssociateAdditionalCertificatesWithListener",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssociateAdditionalCertificatesWithListenerResponse>(await this.callApi(params, req, runtime), new $_model.AssociateAdditionalCertificatesWithListenerResponse({}));
  }

  /**
   * Associates additional certificates with an HTTPS listener. You can associate multiple certificates with an HTTPS listener and configure virtual endpoint groups and forwarding rules to accelerate access to multiple HTTPS-capable domain names.
   * 
   * @remarks
   *   Only HTTPS listeners can be associated with additional certificates.
   * *   **AssociateAdditionalCertificatesWithListener** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeListener](https://help.aliyun.com/document_detail/153254.html) operation to query the status of the listener with which you want to associate an additional certificate.
   *     *   If the listener is in the **updating** state, it indicates that the additional certificate is being associated. In this case, you can perform only query operations.
   *     *   If the listener is in the **active** state, it indicates that the additional certificate is associated.
   * *   The **AssociateAdditionalCertificatesWithListener** operation holds an exclusive lock on the Global Accelerator (GA) instance. While the operation is in progress, you cannot call the same operation in the same Alibaba Cloud account.
   * 
   * @param request - AssociateAdditionalCertificatesWithListenerRequest
   * @returns AssociateAdditionalCertificatesWithListenerResponse
   */
  async associateAdditionalCertificatesWithListener(request: $_model.AssociateAdditionalCertificatesWithListenerRequest): Promise<$_model.AssociateAdditionalCertificatesWithListenerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.associateAdditionalCertificatesWithListenerWithOptions(request, runtime);
  }

  /**
   * GA集成云产品
   * 
   * @param request - AssociateResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssociateResourcesResponse
   */
  async associateResourcesWithOptions(request: $_model.AssociateResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssociateResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.associatedMode)) {
      query["AssociatedMode"] = request.associatedMode;
    }

    if (!$dara.isNull(request.associatedResourceId)) {
      query["AssociatedResourceId"] = request.associatedResourceId;
    }

    if (!$dara.isNull(request.associatedResourceRegionId)) {
      query["AssociatedResourceRegionId"] = request.associatedResourceRegionId;
    }

    if (!$dara.isNull(request.associatedResourceType)) {
      query["AssociatedResourceType"] = request.associatedResourceType;
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
      action: "AssociateResources",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssociateResourcesResponse>(await this.callApi(params, req, runtime), new $_model.AssociateResourcesResponse({}));
  }

  /**
   * GA集成云产品
   * 
   * @param request - AssociateResourcesRequest
   * @returns AssociateResourcesResponse
   */
  async associateResources(request: $_model.AssociateResourcesRequest): Promise<$_model.AssociateResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.associateResourcesWithOptions(request, runtime);
  }

  /**
   * Associates an Anti-DDoS Pro or Anti-DDoS Premium instance with a Global Accelerator (GA) instance.
   * 
   * @remarks
   * When you call this operation, take note of the following items:
   * *   **AttachDdosToAccelerator** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [DescribeAccelerator](https://help.aliyun.com/document_detail/153235.html) or [ListAccelerators](https://help.aliyun.com/document_detail/153236.html) operation to query the status of the GA instance.
   *     *   If the GA instance is in the **configuring** state, the Anti-DDoS Pro or Anti-DDoS Premium instance is being associated with the GA instance. In this case, you can perform only query operations.
   *     *   If the GA instance is in the **active** state, the Anti-DDoS Pro or Anti-DDoS Premium instance is associated with the GA instance.
   * *   You cannot repeatedly call the **AttachDdosToAccelerator** operation for the same GA instance within a specific period of time.
   * 
   * @param request - AttachDdosToAcceleratorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachDdosToAcceleratorResponse
   */
  async attachDdosToAcceleratorWithOptions(request: $_model.AttachDdosToAcceleratorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachDdosToAcceleratorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.ddosConfigList)) {
      query["DdosConfigList"] = request.ddosConfigList;
    }

    if (!$dara.isNull(request.ddosId)) {
      query["DdosId"] = request.ddosId;
    }

    if (!$dara.isNull(request.ddosRegionId)) {
      query["DdosRegionId"] = request.ddosRegionId;
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
      action: "AttachDdosToAccelerator",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachDdosToAcceleratorResponse>(await this.callApi(params, req, runtime), new $_model.AttachDdosToAcceleratorResponse({}));
  }

  /**
   * Associates an Anti-DDoS Pro or Anti-DDoS Premium instance with a Global Accelerator (GA) instance.
   * 
   * @remarks
   * When you call this operation, take note of the following items:
   * *   **AttachDdosToAccelerator** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [DescribeAccelerator](https://help.aliyun.com/document_detail/153235.html) or [ListAccelerators](https://help.aliyun.com/document_detail/153236.html) operation to query the status of the GA instance.
   *     *   If the GA instance is in the **configuring** state, the Anti-DDoS Pro or Anti-DDoS Premium instance is being associated with the GA instance. In this case, you can perform only query operations.
   *     *   If the GA instance is in the **active** state, the Anti-DDoS Pro or Anti-DDoS Premium instance is associated with the GA instance.
   * *   You cannot repeatedly call the **AttachDdosToAccelerator** operation for the same GA instance within a specific period of time.
   * 
   * @param request - AttachDdosToAcceleratorRequest
   * @returns AttachDdosToAcceleratorResponse
   */
  async attachDdosToAccelerator(request: $_model.AttachDdosToAcceleratorRequest): Promise<$_model.AttachDdosToAcceleratorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachDdosToAcceleratorWithOptions(request, runtime);
  }

  /**
   * Associates a Log Service Logstore with an endpoint group.
   * 
   * @remarks
   *   **AttachLogStoreToEndpointGroup** is an asynchronous operation. After you send a request, the system returns a request ID, but this operation is still being performed in the system background. You can call the [DescribeEndpointGroup](https://help.aliyun.com/document_detail/153260.html) operation to query the state of an endpoint group.
   *     *   If the endpoint group is in the **updating** state, it indicates that a Logstore is being associated with the group. In this case, you can perform only query operations.
   *     *   If the endpoint group is in the **active** state, it indicates that a Logstore is associated with the group.
   * *   The **AttachLogStoreToEndpointGroup** operation cannot be repeatedly called for the same Global Accelerator (GA) instance within a specific period of time.
   * 
   * @param request - AttachLogStoreToEndpointGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachLogStoreToEndpointGroupResponse
   */
  async attachLogStoreToEndpointGroupWithOptions(request: $_model.AttachLogStoreToEndpointGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachLogStoreToEndpointGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.accessLogRecordCustomizedHeaderList)) {
      query["AccessLogRecordCustomizedHeaderList"] = request.accessLogRecordCustomizedHeaderList;
    }

    if (!$dara.isNull(request.accessLogRecordCustomizedHeadersEnabled)) {
      query["AccessLogRecordCustomizedHeadersEnabled"] = request.accessLogRecordCustomizedHeadersEnabled;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.endpointGroupIds)) {
      query["EndpointGroupIds"] = request.endpointGroupIds;
    }

    if (!$dara.isNull(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.slsLogStoreName)) {
      query["SlsLogStoreName"] = request.slsLogStoreName;
    }

    if (!$dara.isNull(request.slsProjectName)) {
      query["SlsProjectName"] = request.slsProjectName;
    }

    if (!$dara.isNull(request.slsRegionId)) {
      query["SlsRegionId"] = request.slsRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachLogStoreToEndpointGroup",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachLogStoreToEndpointGroupResponse>(await this.callApi(params, req, runtime), new $_model.AttachLogStoreToEndpointGroupResponse({}));
  }

  /**
   * Associates a Log Service Logstore with an endpoint group.
   * 
   * @remarks
   *   **AttachLogStoreToEndpointGroup** is an asynchronous operation. After you send a request, the system returns a request ID, but this operation is still being performed in the system background. You can call the [DescribeEndpointGroup](https://help.aliyun.com/document_detail/153260.html) operation to query the state of an endpoint group.
   *     *   If the endpoint group is in the **updating** state, it indicates that a Logstore is being associated with the group. In this case, you can perform only query operations.
   *     *   If the endpoint group is in the **active** state, it indicates that a Logstore is associated with the group.
   * *   The **AttachLogStoreToEndpointGroup** operation cannot be repeatedly called for the same Global Accelerator (GA) instance within a specific period of time.
   * 
   * @param request - AttachLogStoreToEndpointGroupRequest
   * @returns AttachLogStoreToEndpointGroupResponse
   */
  async attachLogStoreToEndpointGroup(request: $_model.AttachLogStoreToEndpointGroupRequest): Promise<$_model.AttachLogStoreToEndpointGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachLogStoreToEndpointGroupWithOptions(request, runtime);
  }

  /**
   * Associates a bandwidth plan with a Global Accelerator (GA) instance.
   * 
   * @remarks
   *   **BandwidthPackageAddAccelerator** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeBandwidthPackage](https://help.aliyun.com/document_detail/153241.html) operation to query the status of the bandwidth plan that you want to associate.
   *     *   If the bandwidth plan is in the **binding** state, it indicates that the bandwidth plan is being associated. In this case, you can perform only query operations.
   *     *   If the bandwidth plan is in the **active** state, it indicates that the bandwidth plan is associated.
   * *   The **BandwidthPackageAddAccelerator** operation holds an exclusive lock on the GA instance. While the operation is in progress, you cannot call the same operation in the same Alibaba Cloud account.
   * 
   * @param request - BandwidthPackageAddAcceleratorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BandwidthPackageAddAcceleratorResponse
   */
  async bandwidthPackageAddAcceleratorWithOptions(request: $_model.BandwidthPackageAddAcceleratorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BandwidthPackageAddAcceleratorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.bandwidthPackageId)) {
      query["BandwidthPackageId"] = request.bandwidthPackageId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BandwidthPackageAddAccelerator",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BandwidthPackageAddAcceleratorResponse>(await this.callApi(params, req, runtime), new $_model.BandwidthPackageAddAcceleratorResponse({}));
  }

  /**
   * Associates a bandwidth plan with a Global Accelerator (GA) instance.
   * 
   * @remarks
   *   **BandwidthPackageAddAccelerator** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeBandwidthPackage](https://help.aliyun.com/document_detail/153241.html) operation to query the status of the bandwidth plan that you want to associate.
   *     *   If the bandwidth plan is in the **binding** state, it indicates that the bandwidth plan is being associated. In this case, you can perform only query operations.
   *     *   If the bandwidth plan is in the **active** state, it indicates that the bandwidth plan is associated.
   * *   The **BandwidthPackageAddAccelerator** operation holds an exclusive lock on the GA instance. While the operation is in progress, you cannot call the same operation in the same Alibaba Cloud account.
   * 
   * @param request - BandwidthPackageAddAcceleratorRequest
   * @returns BandwidthPackageAddAcceleratorResponse
   */
  async bandwidthPackageAddAccelerator(request: $_model.BandwidthPackageAddAcceleratorRequest): Promise<$_model.BandwidthPackageAddAcceleratorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bandwidthPackageAddAcceleratorWithOptions(request, runtime);
  }

  /**
   * Disassociates a bandwidth plan from a Global Accelerator (GA) instance.
   * 
   * @remarks
   *   **BandwidthPackageRemoveAccelerator** is an asynchronous operation. After you send a request, the system returns a request ID, but the operation is still being performed in the system background. You can call the [DescribeBandwidthPackage](https://help.aliyun.com/document_detail/153241.html) operation to query the status of the bandwidth plan that you attempt to disassociate.
   *     *   If the bandwidth plan is in the **unbinding** state, it indicates that the bandwidth plan is being disassociated. In this case, you can perform only query operations.
   *     *   If the bandwidth plan is in the **active** state, it indicates that the bandwidth plan is disassociated.
   * *   The **BandwidthPackageRemoveAccelerator** cannot be called repeatedly for the same GA instance.
   * 
   * @param request - BandwidthPackageRemoveAcceleratorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BandwidthPackageRemoveAcceleratorResponse
   */
  async bandwidthPackageRemoveAcceleratorWithOptions(request: $_model.BandwidthPackageRemoveAcceleratorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BandwidthPackageRemoveAcceleratorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.bandwidthPackageId)) {
      query["BandwidthPackageId"] = request.bandwidthPackageId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BandwidthPackageRemoveAccelerator",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BandwidthPackageRemoveAcceleratorResponse>(await this.callApi(params, req, runtime), new $_model.BandwidthPackageRemoveAcceleratorResponse({}));
  }

  /**
   * Disassociates a bandwidth plan from a Global Accelerator (GA) instance.
   * 
   * @remarks
   *   **BandwidthPackageRemoveAccelerator** is an asynchronous operation. After you send a request, the system returns a request ID, but the operation is still being performed in the system background. You can call the [DescribeBandwidthPackage](https://help.aliyun.com/document_detail/153241.html) operation to query the status of the bandwidth plan that you attempt to disassociate.
   *     *   If the bandwidth plan is in the **unbinding** state, it indicates that the bandwidth plan is being disassociated. In this case, you can perform only query operations.
   *     *   If the bandwidth plan is in the **active** state, it indicates that the bandwidth plan is disassociated.
   * *   The **BandwidthPackageRemoveAccelerator** cannot be called repeatedly for the same GA instance.
   * 
   * @param request - BandwidthPackageRemoveAcceleratorRequest
   * @returns BandwidthPackageRemoveAcceleratorResponse
   */
  async bandwidthPackageRemoveAccelerator(request: $_model.BandwidthPackageRemoveAcceleratorRequest): Promise<$_model.BandwidthPackageRemoveAcceleratorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bandwidthPackageRemoveAcceleratorWithOptions(request, runtime);
  }

  /**
   * Changes the resource group to which a Global Accelerator (GA) resource belongs.
   * 
   * @remarks
   * The **ChangeResourceGroup** operation cannot be repeatedly called for the same GA instance within a specific period of time.
   * 
   * @param request - ChangeResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: $_model.ChangeResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.newResourceGroupId)) {
      query["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
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
      action: "ChangeResourceGroup",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.ChangeResourceGroupResponse({}));
  }

  /**
   * Changes the resource group to which a Global Accelerator (GA) resource belongs.
   * 
   * @remarks
   * The **ChangeResourceGroup** operation cannot be repeatedly called for the same GA instance within a specific period of time.
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: $_model.ChangeResourceGroupRequest): Promise<$_model.ChangeResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
   * Configures latency monitoring for an endpoint.
   * 
   * @remarks
   *   **ConfigEndpointProbe** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeEndpointGroup](https://help.aliyun.com/document_detail/153260.html) operation to query the status of the endpoint group to which an endpoint belongs and determine whether latency monitoring is configured for the endpoint.
   *     *   If the endpoint group is in the **updating** state, it indicates that latency monitoring is being configured for the endpoint. In this case, you can perform only query operations.
   *     *   If the endpoint group is in the **active** state, it indicates that latency monitoring is configured for the endpoint.
   * *   The **ConfigEndpointProbe** operation holds an exclusive lock on the Global Accelerator (GA) instance. While the operation is in progress, you cannot call the same operation in the same Alibaba Cloud account.
   * 
   * @param request - ConfigEndpointProbeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigEndpointProbeResponse
   */
  async configEndpointProbeWithOptions(request: $_model.ConfigEndpointProbeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigEndpointProbeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.endpoint)) {
      query["Endpoint"] = request.endpoint;
    }

    if (!$dara.isNull(request.endpointGroupId)) {
      query["EndpointGroupId"] = request.endpointGroupId;
    }

    if (!$dara.isNull(request.endpointType)) {
      query["EndpointType"] = request.endpointType;
    }

    if (!$dara.isNull(request.probePort)) {
      query["ProbePort"] = request.probePort;
    }

    if (!$dara.isNull(request.probeProtocol)) {
      query["ProbeProtocol"] = request.probeProtocol;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigEndpointProbe",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigEndpointProbeResponse>(await this.callApi(params, req, runtime), new $_model.ConfigEndpointProbeResponse({}));
  }

  /**
   * Configures latency monitoring for an endpoint.
   * 
   * @remarks
   *   **ConfigEndpointProbe** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeEndpointGroup](https://help.aliyun.com/document_detail/153260.html) operation to query the status of the endpoint group to which an endpoint belongs and determine whether latency monitoring is configured for the endpoint.
   *     *   If the endpoint group is in the **updating** state, it indicates that latency monitoring is being configured for the endpoint. In this case, you can perform only query operations.
   *     *   If the endpoint group is in the **active** state, it indicates that latency monitoring is configured for the endpoint.
   * *   The **ConfigEndpointProbe** operation holds an exclusive lock on the Global Accelerator (GA) instance. While the operation is in progress, you cannot call the same operation in the same Alibaba Cloud account.
   * 
   * @param request - ConfigEndpointProbeRequest
   * @returns ConfigEndpointProbeResponse
   */
  async configEndpointProbe(request: $_model.ConfigEndpointProbeRequest): Promise<$_model.ConfigEndpointProbeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configEndpointProbeWithOptions(request, runtime);
  }

  /**
   * Creates a Global Accelerator (GA) instance. GA is a high-availability and high-performance network acceleration service for global users. By leveraging the high-quality BGP bandwidth and global network of Alibaba Cloud, GA allows service providers to deploy applications across regions and users to connect to the nearest access points for content delivery acceleration. This reduces network issues, such as network latency, network jitters, and packet loss.
   * 
   * @remarks
   * ## Description
   * **CreateAccelerator** is an asynchronous operation. After you send a request, the system returns the ID of a GA instance, but the operation is still being performed in the system background. You can call the [DescribeAccelerator](https://help.aliyun.com/document_detail/153235.html) operation to query the state of a GA instance.
   * *   If the GA instance is in the **init** state, it indicates that the GA instance is being created. In this case, you can perform only query operations.
   * *   If the GA instance is in the **active** state, it indicates that the GA instance is created.
   * 
   * @param request - CreateAcceleratorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAcceleratorResponse
   */
  async createAcceleratorWithOptions(request: $_model.CreateAcceleratorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAcceleratorResponse> {
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

    if (!$dara.isNull(request.autoUseCoupon)) {
      query["AutoUseCoupon"] = request.autoUseCoupon;
    }

    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.bandwidthBillingType)) {
      query["BandwidthBillingType"] = request.bandwidthBillingType;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.instanceChargeType)) {
      query["InstanceChargeType"] = request.instanceChargeType;
    }

    if (!$dara.isNull(request.ipSetConfig)) {
      query["IpSetConfig"] = request.ipSetConfig;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    if (!$dara.isNull(request.promotionOptionNo)) {
      query["PromotionOptionNo"] = request.promotionOptionNo;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.spec)) {
      query["Spec"] = request.spec;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAccelerator",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAcceleratorResponse>(await this.callApi(params, req, runtime), new $_model.CreateAcceleratorResponse({}));
  }

  /**
   * Creates a Global Accelerator (GA) instance. GA is a high-availability and high-performance network acceleration service for global users. By leveraging the high-quality BGP bandwidth and global network of Alibaba Cloud, GA allows service providers to deploy applications across regions and users to connect to the nearest access points for content delivery acceleration. This reduces network issues, such as network latency, network jitters, and packet loss.
   * 
   * @remarks
   * ## Description
   * **CreateAccelerator** is an asynchronous operation. After you send a request, the system returns the ID of a GA instance, but the operation is still being performed in the system background. You can call the [DescribeAccelerator](https://help.aliyun.com/document_detail/153235.html) operation to query the state of a GA instance.
   * *   If the GA instance is in the **init** state, it indicates that the GA instance is being created. In this case, you can perform only query operations.
   * *   If the GA instance is in the **active** state, it indicates that the GA instance is created.
   * 
   * @param request - CreateAcceleratorRequest
   * @returns CreateAcceleratorResponse
   */
  async createAccelerator(request: $_model.CreateAcceleratorRequest): Promise<$_model.CreateAcceleratorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAcceleratorWithOptions(request, runtime);
  }

  /**
   * Creates an access control list (ACL).
   * 
   * @remarks
   * *CreateAcl** is an asynchronous operation. After you send a request, the system returns a request ID, but the operation is still being performed in the system background. You can call the [GetAcl](https://help.aliyun.com/document_detail/258292.html) or [ListAcls](https://help.aliyun.com/document_detail/258291.html) operation to query the state of an ACL.
   * *   If the ACL is in the **init** state, the ACL is being created. In this case, you can only perform only query operations.
   * *   If the ACL is in the **active** state, the ACL is created.
   * 
   * @param request - CreateAclRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAclResponse
   */
  async createAclWithOptions(request: $_model.CreateAclRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAclResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclEntries)) {
      query["AclEntries"] = request.aclEntries;
    }

    if (!$dara.isNull(request.aclName)) {
      query["AclName"] = request.aclName;
    }

    if (!$dara.isNull(request.addressIPVersion)) {
      query["AddressIPVersion"] = request.addressIPVersion;
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

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAcl",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAclResponse>(await this.callApi(params, req, runtime), new $_model.CreateAclResponse({}));
  }

  /**
   * Creates an access control list (ACL).
   * 
   * @remarks
   * *CreateAcl** is an asynchronous operation. After you send a request, the system returns a request ID, but the operation is still being performed in the system background. You can call the [GetAcl](https://help.aliyun.com/document_detail/258292.html) or [ListAcls](https://help.aliyun.com/document_detail/258291.html) operation to query the state of an ACL.
   * *   If the ACL is in the **init** state, the ACL is being created. In this case, you can only perform only query operations.
   * *   If the ACL is in the **active** state, the ACL is created.
   * 
   * @param request - CreateAclRequest
   * @returns CreateAclResponse
   */
  async createAcl(request: $_model.CreateAclRequest): Promise<$_model.CreateAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAclWithOptions(request, runtime);
  }

  /**
   * Creates an origin probing task.
   * 
   * @remarks
   * You can call the **CreateApplicationMonitor** operation to create an origin probing task. An origin probing task monitors the network quality between a client and an origin server and checks the availability of the origin server.
   * Before you call this operation, take note of the following items:
   * *   You can create origin detection tasks only for subscription Standard Global Accelerator (GA) instances whose specification is Medium Ⅰ.
   * *   You cannot create an origin probe task for a UDP listener.
   * *   The service port of the URL or IP address that is probed must be within the listening port range.
   * *   **CreateApplicationMonitor** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeApplicationMonitor](https://help.aliyun.com/document_detail/408463.html) or [ListApplicationMonitor](https://help.aliyun.com/document_detail/408462.html) operation to query the status of the origin probing task.
   *     *   If the origin probing task is in the **init** state, it indicates that the task is being created. You can perform only query operations.
   *     *   If the origin probing task is in the **active** state, it indicates that the task is created.
   * *   The **CreateApplicationMonitor** operation cannot be called repeatedly for the same GA instance within a specific period of time.
   * 
   * @param request - CreateApplicationMonitorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateApplicationMonitorResponse
   */
  async createApplicationMonitorWithOptions(request: $_model.CreateApplicationMonitorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateApplicationMonitorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.address)) {
      query["Address"] = request.address;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.detectEnable)) {
      query["DetectEnable"] = request.detectEnable;
    }

    if (!$dara.isNull(request.detectThreshold)) {
      query["DetectThreshold"] = request.detectThreshold;
    }

    if (!$dara.isNull(request.detectTimes)) {
      query["DetectTimes"] = request.detectTimes;
    }

    if (!$dara.isNull(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    if (!$dara.isNull(request.optionsJson)) {
      query["OptionsJson"] = request.optionsJson;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.silenceTime)) {
      query["SilenceTime"] = request.silenceTime;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateApplicationMonitor",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateApplicationMonitorResponse>(await this.callApi(params, req, runtime), new $_model.CreateApplicationMonitorResponse({}));
  }

  /**
   * Creates an origin probing task.
   * 
   * @remarks
   * You can call the **CreateApplicationMonitor** operation to create an origin probing task. An origin probing task monitors the network quality between a client and an origin server and checks the availability of the origin server.
   * Before you call this operation, take note of the following items:
   * *   You can create origin detection tasks only for subscription Standard Global Accelerator (GA) instances whose specification is Medium Ⅰ.
   * *   You cannot create an origin probe task for a UDP listener.
   * *   The service port of the URL or IP address that is probed must be within the listening port range.
   * *   **CreateApplicationMonitor** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeApplicationMonitor](https://help.aliyun.com/document_detail/408463.html) or [ListApplicationMonitor](https://help.aliyun.com/document_detail/408462.html) operation to query the status of the origin probing task.
   *     *   If the origin probing task is in the **init** state, it indicates that the task is being created. You can perform only query operations.
   *     *   If the origin probing task is in the **active** state, it indicates that the task is created.
   * *   The **CreateApplicationMonitor** operation cannot be called repeatedly for the same GA instance within a specific period of time.
   * 
   * @param request - CreateApplicationMonitorRequest
   * @returns CreateApplicationMonitorResponse
   */
  async createApplicationMonitor(request: $_model.CreateApplicationMonitorRequest): Promise<$_model.CreateApplicationMonitorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createApplicationMonitorWithOptions(request, runtime);
  }

  /**
   * Creates a bandwidth plan.
   * 
   * @remarks
   * To use Global Accelerator (GA) for acceleration, you must purchase a basic bandwidth plan. A basic bandwidth plan supports the following bandwidth types:
   * *   **Basic**: Both the default acceleration region and the default service region are in the Chinese mainland. The accelerated service is deployed on Alibaba Cloud.
   * *   **Enhanced**: Both the default acceleration region and the default service region are in the Chinese mainland. The accelerated service can be deployed on and off Alibaba Cloud.
   * *   **Premium**: Both the default acceleration region and the default service region are outside the Chinese mainland. The accelerated service can be deployed on and off Alibaba Cloud. If you want to accelerate data transfer for clients in the Chinese mainland, you must select China (Hong Kong) as the acceleration region.
   * When you call this operation, take note of the following items:
   * *   **CreateBandwidthPackage** is an asynchronous operation. After you send a request, the system returns the ID of a bandwidth plan, but the bandwidth plan is still being created in the system background. You can call the [DescribeBandwidthPackage](https://help.aliyun.com/document_detail/153241.html) operation to query the status of the bandwidth plan.
   *     *   If the bandwidth plan is in the **init** state, it indicates that the bandwidth plan is being created. In this case, you can perform only query operations.
   *     *   If the bandwidth plan is in the **active** state, it indicates that the bandwidth plan is created.
   * *   The **CreateBandwidthPackage** operation cannot be repeatedly called for the same GA instance within a specific period of time.
   * 
   * @param request - CreateBandwidthPackageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBandwidthPackageResponse
   */
  async createBandwidthPackageWithOptions(request: $_model.CreateBandwidthPackageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBandwidthPackageResponse> {
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

    if (!$dara.isNull(request.autoUseCoupon)) {
      query["AutoUseCoupon"] = request.autoUseCoupon;
    }

    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.bandwidthType)) {
      query["BandwidthType"] = request.bandwidthType;
    }

    if (!$dara.isNull(request.billingType)) {
      query["BillingType"] = request.billingType;
    }

    if (!$dara.isNull(request.cbnGeographicRegionIdA)) {
      query["CbnGeographicRegionIdA"] = request.cbnGeographicRegionIdA;
    }

    if (!$dara.isNull(request.cbnGeographicRegionIdB)) {
      query["CbnGeographicRegionIdB"] = request.cbnGeographicRegionIdB;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    if (!$dara.isNull(request.promotionOptionNo)) {
      query["PromotionOptionNo"] = request.promotionOptionNo;
    }

    if (!$dara.isNull(request.ratio)) {
      query["Ratio"] = request.ratio;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBandwidthPackage",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateBandwidthPackageResponse>(await this.callApi(params, req, runtime), new $_model.CreateBandwidthPackageResponse({}));
  }

  /**
   * Creates a bandwidth plan.
   * 
   * @remarks
   * To use Global Accelerator (GA) for acceleration, you must purchase a basic bandwidth plan. A basic bandwidth plan supports the following bandwidth types:
   * *   **Basic**: Both the default acceleration region and the default service region are in the Chinese mainland. The accelerated service is deployed on Alibaba Cloud.
   * *   **Enhanced**: Both the default acceleration region and the default service region are in the Chinese mainland. The accelerated service can be deployed on and off Alibaba Cloud.
   * *   **Premium**: Both the default acceleration region and the default service region are outside the Chinese mainland. The accelerated service can be deployed on and off Alibaba Cloud. If you want to accelerate data transfer for clients in the Chinese mainland, you must select China (Hong Kong) as the acceleration region.
   * When you call this operation, take note of the following items:
   * *   **CreateBandwidthPackage** is an asynchronous operation. After you send a request, the system returns the ID of a bandwidth plan, but the bandwidth plan is still being created in the system background. You can call the [DescribeBandwidthPackage](https://help.aliyun.com/document_detail/153241.html) operation to query the status of the bandwidth plan.
   *     *   If the bandwidth plan is in the **init** state, it indicates that the bandwidth plan is being created. In this case, you can perform only query operations.
   *     *   If the bandwidth plan is in the **active** state, it indicates that the bandwidth plan is created.
   * *   The **CreateBandwidthPackage** operation cannot be repeatedly called for the same GA instance within a specific period of time.
   * 
   * @param request - CreateBandwidthPackageRequest
   * @returns CreateBandwidthPackageResponse
   */
  async createBandwidthPackage(request: $_model.CreateBandwidthPackageRequest): Promise<$_model.CreateBandwidthPackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBandwidthPackageWithOptions(request, runtime);
  }

  /**
   * Creates an accelerated IP address for a basic Global Accelerator (GA) instance.
   * 
   * @remarks
   *   **CreateBasicAccelerateIp** is an asynchronous operation. After you send a request, the system returns a request ID, but the operation is still being performed in the system background. You can call the [GetBasicAccelerateIp](https://help.aliyun.com/document_detail/466794.html) operation to query the status of an accelerated IP address:
   *     *   If no status information is returned, the accelerated IP address is being created. In this case, you can perform only query operations.
   *     *   If the accelerated IP address is in the **active** state, the accelerated IP address is created.
   * *   The **CreateBasicAccelerateIp** operation cannot be repeatedly called for the same GA instance within a specific period of time.
   * 
   * @param request - CreateBasicAccelerateIpRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBasicAccelerateIpResponse
   */
  async createBasicAccelerateIpWithOptions(request: $_model.CreateBasicAccelerateIpRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBasicAccelerateIpResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ipSetId)) {
      query["IpSetId"] = request.ipSetId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBasicAccelerateIp",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateBasicAccelerateIpResponse>(await this.callApi(params, req, runtime), new $_model.CreateBasicAccelerateIpResponse({}));
  }

  /**
   * Creates an accelerated IP address for a basic Global Accelerator (GA) instance.
   * 
   * @remarks
   *   **CreateBasicAccelerateIp** is an asynchronous operation. After you send a request, the system returns a request ID, but the operation is still being performed in the system background. You can call the [GetBasicAccelerateIp](https://help.aliyun.com/document_detail/466794.html) operation to query the status of an accelerated IP address:
   *     *   If no status information is returned, the accelerated IP address is being created. In this case, you can perform only query operations.
   *     *   If the accelerated IP address is in the **active** state, the accelerated IP address is created.
   * *   The **CreateBasicAccelerateIp** operation cannot be repeatedly called for the same GA instance within a specific period of time.
   * 
   * @param request - CreateBasicAccelerateIpRequest
   * @returns CreateBasicAccelerateIpResponse
   */
  async createBasicAccelerateIp(request: $_model.CreateBasicAccelerateIpRequest): Promise<$_model.CreateBasicAccelerateIpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBasicAccelerateIpWithOptions(request, runtime);
  }

  /**
   * Creates a mapping between an accelerated IP address and an endpoint for a basic Global Accelerator (GA) instance.
   * 
   * @remarks
   *   **CreateBasicAccelerateIpEndpointRelation** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [GetBasicAccelerateIp](https://help.aliyun.com/document_detail/466794.html) or [ListBasicEndpoints](https://help.aliyun.com/document_detail/466831.html) API operation to query the status of an accelerated IP address or an endpoint to determine the association status between the accelerated IP address and endpoint.
   *     *   If the status of the accelerated IP address and endpoint is **binding**, the accelerated IP address is being associated with the endpoint. In this case, you can query the accelerated IP address and endpoint but cannot perform other operations.
   *     *   If the status of the accelerated IP address and endpoint is **bound** and the status returned by the [ListBasicAccelerateIpEndpointRelations](https://help.aliyun.com/document_detail/466803.html) API operation is **active**, the accelerated IP address is associated with the endpoint.
   * *   The **CreateBasicAccelerateIpEndpointRelation** API operation cannot be repeatedly called for the same basic GA instance within a period of time.
   * 
   * @param request - CreateBasicAccelerateIpEndpointRelationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBasicAccelerateIpEndpointRelationResponse
   */
  async createBasicAccelerateIpEndpointRelationWithOptions(request: $_model.CreateBasicAccelerateIpEndpointRelationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBasicAccelerateIpEndpointRelationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accelerateIpId)) {
      query["AccelerateIpId"] = request.accelerateIpId;
    }

    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBasicAccelerateIpEndpointRelation",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateBasicAccelerateIpEndpointRelationResponse>(await this.callApi(params, req, runtime), new $_model.CreateBasicAccelerateIpEndpointRelationResponse({}));
  }

  /**
   * Creates a mapping between an accelerated IP address and an endpoint for a basic Global Accelerator (GA) instance.
   * 
   * @remarks
   *   **CreateBasicAccelerateIpEndpointRelation** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [GetBasicAccelerateIp](https://help.aliyun.com/document_detail/466794.html) or [ListBasicEndpoints](https://help.aliyun.com/document_detail/466831.html) API operation to query the status of an accelerated IP address or an endpoint to determine the association status between the accelerated IP address and endpoint.
   *     *   If the status of the accelerated IP address and endpoint is **binding**, the accelerated IP address is being associated with the endpoint. In this case, you can query the accelerated IP address and endpoint but cannot perform other operations.
   *     *   If the status of the accelerated IP address and endpoint is **bound** and the status returned by the [ListBasicAccelerateIpEndpointRelations](https://help.aliyun.com/document_detail/466803.html) API operation is **active**, the accelerated IP address is associated with the endpoint.
   * *   The **CreateBasicAccelerateIpEndpointRelation** API operation cannot be repeatedly called for the same basic GA instance within a period of time.
   * 
   * @param request - CreateBasicAccelerateIpEndpointRelationRequest
   * @returns CreateBasicAccelerateIpEndpointRelationResponse
   */
  async createBasicAccelerateIpEndpointRelation(request: $_model.CreateBasicAccelerateIpEndpointRelationRequest): Promise<$_model.CreateBasicAccelerateIpEndpointRelationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBasicAccelerateIpEndpointRelationWithOptions(request, runtime);
  }

  /**
   * Creates mappings between accelerated IP addresses and endpoints for a basic Global Accelerator (GA) instance.
   * 
   * @remarks
   *   The **CreateBasicAccelerateIpEndpointRelations** is asynchronous. After you send a request, the system returns a request ID and runs the task in the system background. You can call the [GetBasicAccelerateIp](https://help.aliyun.com/document_detail/466794.html) or [ListBasicEndpoints](https://help.aliyun.com/document_detail/466831.html) API operation to query the status of an accelerated IP address or an endpoint to determine the association status.
   *     *   If an accelerated IP address and the endpoint are in the **binding** state, the accelerated IP address is being associated with the endpoint. In this case, you can only query the accelerated IP address and endpoint, but cannot perform other operations.
   *     *   If all the accelerated IP addresses and the endpoint are in the **bound** state, and the association status returned by the [ListBasicAccelerateIpEndpointRelations](https://help.aliyun.com/document_detail/466803.html) API operation is **active**, the accelerated IP addresses are associated with the endpoints.
   * *   The **CreateBasicAccelerateIpEndpointRelations** API operation cannot be repeatedly called for the same basic GA instance within a period of time.
   * 
   * @param request - CreateBasicAccelerateIpEndpointRelationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBasicAccelerateIpEndpointRelationsResponse
   */
  async createBasicAccelerateIpEndpointRelationsWithOptions(request: $_model.CreateBasicAccelerateIpEndpointRelationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBasicAccelerateIpEndpointRelationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accelerateIpEndpointRelations)) {
      query["AccelerateIpEndpointRelations"] = request.accelerateIpEndpointRelations;
    }

    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBasicAccelerateIpEndpointRelations",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateBasicAccelerateIpEndpointRelationsResponse>(await this.callApi(params, req, runtime), new $_model.CreateBasicAccelerateIpEndpointRelationsResponse({}));
  }

  /**
   * Creates mappings between accelerated IP addresses and endpoints for a basic Global Accelerator (GA) instance.
   * 
   * @remarks
   *   The **CreateBasicAccelerateIpEndpointRelations** is asynchronous. After you send a request, the system returns a request ID and runs the task in the system background. You can call the [GetBasicAccelerateIp](https://help.aliyun.com/document_detail/466794.html) or [ListBasicEndpoints](https://help.aliyun.com/document_detail/466831.html) API operation to query the status of an accelerated IP address or an endpoint to determine the association status.
   *     *   If an accelerated IP address and the endpoint are in the **binding** state, the accelerated IP address is being associated with the endpoint. In this case, you can only query the accelerated IP address and endpoint, but cannot perform other operations.
   *     *   If all the accelerated IP addresses and the endpoint are in the **bound** state, and the association status returned by the [ListBasicAccelerateIpEndpointRelations](https://help.aliyun.com/document_detail/466803.html) API operation is **active**, the accelerated IP addresses are associated with the endpoints.
   * *   The **CreateBasicAccelerateIpEndpointRelations** API operation cannot be repeatedly called for the same basic GA instance within a period of time.
   * 
   * @param request - CreateBasicAccelerateIpEndpointRelationsRequest
   * @returns CreateBasicAccelerateIpEndpointRelationsResponse
   */
  async createBasicAccelerateIpEndpointRelations(request: $_model.CreateBasicAccelerateIpEndpointRelationsRequest): Promise<$_model.CreateBasicAccelerateIpEndpointRelationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBasicAccelerateIpEndpointRelationsWithOptions(request, runtime);
  }

  /**
   * Basic Global Accelerator (GA) instances leverage the immense bandwidth of the high-quality global network of Alibaba Cloud to provide end-to-end acceleration services. You can use basic GA instances to accelerate content delivery at Layer 3 (IP). You can call the CreateBasicAccelerator operation to create a basic GA instance.
   * 
   * @remarks
   * *CreateBasicAccelerator** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetBasicAccelerator](https://help.aliyun.com/document_detail/353188.html) or [ListBasicAccelerators](https://help.aliyun.com/document_detail/353189.html) operation to query the status of the task.
   * *   If the basic GA instance is in the **init** state, it indicates that the basic GA instance is being created. In this case, you can perform only query operations.
   * *   If the basic GA instance is in the **active** state, it indicates that the basic GA instance is created.
   * 
   * @param request - CreateBasicAcceleratorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBasicAcceleratorResponse
   */
  async createBasicAcceleratorWithOptions(request: $_model.CreateBasicAcceleratorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBasicAcceleratorResponse> {
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

    if (!$dara.isNull(request.autoUseCoupon)) {
      query["AutoUseCoupon"] = request.autoUseCoupon;
    }

    if (!$dara.isNull(request.bandwidthBillingType)) {
      query["BandwidthBillingType"] = request.bandwidthBillingType;
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

    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    if (!$dara.isNull(request.promotionOptionNo)) {
      query["PromotionOptionNo"] = request.promotionOptionNo;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBasicAccelerator",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateBasicAcceleratorResponse>(await this.callApi(params, req, runtime), new $_model.CreateBasicAcceleratorResponse({}));
  }

  /**
   * Basic Global Accelerator (GA) instances leverage the immense bandwidth of the high-quality global network of Alibaba Cloud to provide end-to-end acceleration services. You can use basic GA instances to accelerate content delivery at Layer 3 (IP). You can call the CreateBasicAccelerator operation to create a basic GA instance.
   * 
   * @remarks
   * *CreateBasicAccelerator** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetBasicAccelerator](https://help.aliyun.com/document_detail/353188.html) or [ListBasicAccelerators](https://help.aliyun.com/document_detail/353189.html) operation to query the status of the task.
   * *   If the basic GA instance is in the **init** state, it indicates that the basic GA instance is being created. In this case, you can perform only query operations.
   * *   If the basic GA instance is in the **active** state, it indicates that the basic GA instance is created.
   * 
   * @param request - CreateBasicAcceleratorRequest
   * @returns CreateBasicAcceleratorResponse
   */
  async createBasicAccelerator(request: $_model.CreateBasicAcceleratorRequest): Promise<$_model.CreateBasicAcceleratorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBasicAcceleratorWithOptions(request, runtime);
  }

  /**
   * Creates an endpoint for a basic Global Accelerator (GA) instance.
   * 
   * @remarks
   *   **CreateBasicEndpoint** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [ListBasicEndpoints](https://help.aliyun.com/document_detail/466831.html) API operation to query the status of an endpoint.
   *     *   If the endpoint is in the **init** state, the endpoint is being created. In this case, you can perform only query operations.
   *     *   If the endpoint is in the **active** state, the endpoint is created.
   * *   The **CreateBasicEndpoint** API operation cannot be repeatedly called for the same basic GA instance within a specific period of time.
   * 
   * @param request - CreateBasicEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBasicEndpointResponse
   */
  async createBasicEndpointWithOptions(request: $_model.CreateBasicEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBasicEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.endpointAddress)) {
      query["EndpointAddress"] = request.endpointAddress;
    }

    if (!$dara.isNull(request.endpointGroupId)) {
      query["EndpointGroupId"] = request.endpointGroupId;
    }

    if (!$dara.isNull(request.endpointSubAddress)) {
      query["EndpointSubAddress"] = request.endpointSubAddress;
    }

    if (!$dara.isNull(request.endpointSubAddressType)) {
      query["EndpointSubAddressType"] = request.endpointSubAddressType;
    }

    if (!$dara.isNull(request.endpointType)) {
      query["EndpointType"] = request.endpointType;
    }

    if (!$dara.isNull(request.endpointZoneId)) {
      query["EndpointZoneId"] = request.endpointZoneId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBasicEndpoint",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateBasicEndpointResponse>(await this.callApi(params, req, runtime), new $_model.CreateBasicEndpointResponse({}));
  }

  /**
   * Creates an endpoint for a basic Global Accelerator (GA) instance.
   * 
   * @remarks
   *   **CreateBasicEndpoint** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [ListBasicEndpoints](https://help.aliyun.com/document_detail/466831.html) API operation to query the status of an endpoint.
   *     *   If the endpoint is in the **init** state, the endpoint is being created. In this case, you can perform only query operations.
   *     *   If the endpoint is in the **active** state, the endpoint is created.
   * *   The **CreateBasicEndpoint** API operation cannot be repeatedly called for the same basic GA instance within a specific period of time.
   * 
   * @param request - CreateBasicEndpointRequest
   * @returns CreateBasicEndpointResponse
   */
  async createBasicEndpoint(request: $_model.CreateBasicEndpointRequest): Promise<$_model.CreateBasicEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBasicEndpointWithOptions(request, runtime);
  }

  /**
   * Creates an endpoint group for a basic Global Accelerator (GA) instance.
   * 
   * @remarks
   *   **CreateBasicEndpointGroup** is an asynchronous operation. After a request is sent, the system returns an endpoint group ID and runs the task in the background. You can call the [GetBasicEndpointGroup](https://help.aliyun.com/document_detail/362984.html) operation to query the status of the task.
   *     *   If the endpoint group is in the **init** state, the endpoint is being created. In this case, you can perform only query operations.
   *     *   If the endpoint group is in the **active** state, the endpoint group is created.
   * *   You cannot call the **CreateBasicEndpointGroup** operation again on the same GA instance before the previous request is completed.
   * 
   * @param request - CreateBasicEndpointGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBasicEndpointGroupResponse
   */
  async createBasicEndpointGroupWithOptions(request: $_model.CreateBasicEndpointGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBasicEndpointGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.endpointAddress)) {
      query["EndpointAddress"] = request.endpointAddress;
    }

    if (!$dara.isNull(request.endpointGroupRegion)) {
      query["EndpointGroupRegion"] = request.endpointGroupRegion;
    }

    if (!$dara.isNull(request.endpointSubAddress)) {
      query["EndpointSubAddress"] = request.endpointSubAddress;
    }

    if (!$dara.isNull(request.endpointType)) {
      query["EndpointType"] = request.endpointType;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBasicEndpointGroup",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateBasicEndpointGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateBasicEndpointGroupResponse({}));
  }

  /**
   * Creates an endpoint group for a basic Global Accelerator (GA) instance.
   * 
   * @remarks
   *   **CreateBasicEndpointGroup** is an asynchronous operation. After a request is sent, the system returns an endpoint group ID and runs the task in the background. You can call the [GetBasicEndpointGroup](https://help.aliyun.com/document_detail/362984.html) operation to query the status of the task.
   *     *   If the endpoint group is in the **init** state, the endpoint is being created. In this case, you can perform only query operations.
   *     *   If the endpoint group is in the **active** state, the endpoint group is created.
   * *   You cannot call the **CreateBasicEndpointGroup** operation again on the same GA instance before the previous request is completed.
   * 
   * @param request - CreateBasicEndpointGroupRequest
   * @returns CreateBasicEndpointGroupResponse
   */
  async createBasicEndpointGroup(request: $_model.CreateBasicEndpointGroupRequest): Promise<$_model.CreateBasicEndpointGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBasicEndpointGroupWithOptions(request, runtime);
  }

  /**
   * Creates multiple endpoints for a basic Global Accelerator (GA) instance.
   * 
   * @remarks
   *   **CreateBasicEndpoints** is an asynchronous operation. After you call this operation, the system returns a request ID and runs the task in the background. You can call the [ListBasicEndpoints](https://help.aliyun.com/document_detail/466831.html) operation to query the status of endpoints. - If one or more endpoints are in the **init** state, it indicates that the endpoints are being created. In this case, you can continue to perform query operations on the endpoints. If all endpoints are in the **active** state, it indicates that the endpoints are created.
   * *   You cannot call the **CreateBasicEndpoints** operation again on the same GA instance before the previous operation is complete.
   * 
   * @param request - CreateBasicEndpointsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBasicEndpointsResponse
   */
  async createBasicEndpointsWithOptions(request: $_model.CreateBasicEndpointsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBasicEndpointsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.endpointGroupId)) {
      query["EndpointGroupId"] = request.endpointGroupId;
    }

    if (!$dara.isNull(request.endpoints)) {
      query["Endpoints"] = request.endpoints;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBasicEndpoints",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateBasicEndpointsResponse>(await this.callApi(params, req, runtime), new $_model.CreateBasicEndpointsResponse({}));
  }

  /**
   * Creates multiple endpoints for a basic Global Accelerator (GA) instance.
   * 
   * @remarks
   *   **CreateBasicEndpoints** is an asynchronous operation. After you call this operation, the system returns a request ID and runs the task in the background. You can call the [ListBasicEndpoints](https://help.aliyun.com/document_detail/466831.html) operation to query the status of endpoints. - If one or more endpoints are in the **init** state, it indicates that the endpoints are being created. In this case, you can continue to perform query operations on the endpoints. If all endpoints are in the **active** state, it indicates that the endpoints are created.
   * *   You cannot call the **CreateBasicEndpoints** operation again on the same GA instance before the previous operation is complete.
   * 
   * @param request - CreateBasicEndpointsRequest
   * @returns CreateBasicEndpointsResponse
   */
  async createBasicEndpoints(request: $_model.CreateBasicEndpointsRequest): Promise<$_model.CreateBasicEndpointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBasicEndpointsWithOptions(request, runtime);
  }

  /**
   * Creates an acceleration region for a basic Global Accelerator (GA) instance.
   * 
   * @remarks
   * Take note of the following limits:
   * *   You can specify only one acceleration region for each basic GA instance, and only IPv4 clients can connect to basic GA instances.
   * *   **CreateBasicIpSet** is an asynchronous operation. After you send a request, the system returns an acceleration region ID and runs the task in the background. You can call the [GetBasicIpSet](https://help.aliyun.com/document_detail/362987.html) operation to query the status of the task.
   *     *   If the acceleration region is in the **init** state, the acceleration region is being created. In this case, you can perform only query operations.
   *     *   If the acceleration region is in the **active** state, the acceleration region is created.
   * *   You cannot call the **CreateBasicIpSet** operation again on the same GA instance before the previous task is completed.
   * 
   * @param request - CreateBasicIpSetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBasicIpSetResponse
   */
  async createBasicIpSetWithOptions(request: $_model.CreateBasicIpSetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBasicIpSetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accelerateRegionId)) {
      query["AccelerateRegionId"] = request.accelerateRegionId;
    }

    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ispType)) {
      query["IspType"] = request.ispType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBasicIpSet",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateBasicIpSetResponse>(await this.callApi(params, req, runtime), new $_model.CreateBasicIpSetResponse({}));
  }

  /**
   * Creates an acceleration region for a basic Global Accelerator (GA) instance.
   * 
   * @remarks
   * Take note of the following limits:
   * *   You can specify only one acceleration region for each basic GA instance, and only IPv4 clients can connect to basic GA instances.
   * *   **CreateBasicIpSet** is an asynchronous operation. After you send a request, the system returns an acceleration region ID and runs the task in the background. You can call the [GetBasicIpSet](https://help.aliyun.com/document_detail/362987.html) operation to query the status of the task.
   *     *   If the acceleration region is in the **init** state, the acceleration region is being created. In this case, you can perform only query operations.
   *     *   If the acceleration region is in the **active** state, the acceleration region is created.
   * *   You cannot call the **CreateBasicIpSet** operation again on the same GA instance before the previous task is completed.
   * 
   * @param request - CreateBasicIpSetRequest
   * @returns CreateBasicIpSetResponse
   */
  async createBasicIpSet(request: $_model.CreateBasicIpSetRequest): Promise<$_model.CreateBasicIpSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBasicIpSetWithOptions(request, runtime);
  }

  /**
   * After you configure a custom routing listener for a Global Accelerator (GA) instance, the GA instance generates a port mapping table based on the listener port range, mapping information (protocols and port ranges) of the associated endpoint groups, and IP addresses of endpoints (vSwitches), and forwards client requests to the specified IP addresses and ports in the vSwitches.
   * You can call this operation to create mappings for an endpoint group of a custom routing listener. Take note of the following items:
   * *   **CreateCustomRoutingEndpointGroupDestinations** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [DescribeCustomRoutingEndpointGroup](https://help.aliyun.com/document_detail/449373.html) operation to query the status of the task.
   *     *   If the endpoint group is in the **updating** state, it indicates that the mappings are being created for the endpoint group. In this case, you can perform only query operations.
   *     *   If the endpoint group is in the **active** state, it indicates that the mappings are created for the endpoint group.
   * *   You cannot call the **CreateCustomRoutingEndpointGroupDestinations** operation again on the same GA instance before the previous task is completed.
   * ### Prerequisites
   * Make sure that the following prerequisites are met before you call this operation:
   * *   A standard GA instance is created. For more information, see [CreateAccelerator](https://help.aliyun.com/document_detail/206786.html).
   * *   A bandwidth plan is associated with the standard GA instance. For more information, see [BandwidthPackageAddAccelerator](https://help.aliyun.com/document_detail/153239.html).
   * *   An application is deployed as an endpoint to receive requests that are forwarded from GA. You can specify only vSwitches as endpoints for custom routing listeners.
   * *   The permissions to use custom routing listeners are acquired and a custom routing listener is created for the GA instance. The custom routing listener feature is in invitational preview. To use the feature, [submit a ticket](https://workorder-intl.console.aliyun.com/?spm=5176.11182188.console-base-top.dworkorder.18ae4882n3v6ZW#/ticket/createIndex). For information about how to create a custom routing listener, see [CreateListener](https://help.aliyun.com/document_detail/153253.html).
   * *   An endpoint group is created for the custom routing listener. For more information, see [CreateCustomRoutingEndpointGroups](https://help.aliyun.com/document_detail/449363.html).
   * 
   * @remarks
   * readAndWrite
   * 
   * @param request - CreateCustomRoutingEndpointGroupDestinationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCustomRoutingEndpointGroupDestinationsResponse
   */
  async createCustomRoutingEndpointGroupDestinationsWithOptions(request: $_model.CreateCustomRoutingEndpointGroupDestinationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCustomRoutingEndpointGroupDestinationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.destinationConfigurations)) {
      query["DestinationConfigurations"] = request.destinationConfigurations;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.endpointGroupId)) {
      query["EndpointGroupId"] = request.endpointGroupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCustomRoutingEndpointGroupDestinations",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCustomRoutingEndpointGroupDestinationsResponse>(await this.callApi(params, req, runtime), new $_model.CreateCustomRoutingEndpointGroupDestinationsResponse({}));
  }

  /**
   * After you configure a custom routing listener for a Global Accelerator (GA) instance, the GA instance generates a port mapping table based on the listener port range, mapping information (protocols and port ranges) of the associated endpoint groups, and IP addresses of endpoints (vSwitches), and forwards client requests to the specified IP addresses and ports in the vSwitches.
   * You can call this operation to create mappings for an endpoint group of a custom routing listener. Take note of the following items:
   * *   **CreateCustomRoutingEndpointGroupDestinations** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [DescribeCustomRoutingEndpointGroup](https://help.aliyun.com/document_detail/449373.html) operation to query the status of the task.
   *     *   If the endpoint group is in the **updating** state, it indicates that the mappings are being created for the endpoint group. In this case, you can perform only query operations.
   *     *   If the endpoint group is in the **active** state, it indicates that the mappings are created for the endpoint group.
   * *   You cannot call the **CreateCustomRoutingEndpointGroupDestinations** operation again on the same GA instance before the previous task is completed.
   * ### Prerequisites
   * Make sure that the following prerequisites are met before you call this operation:
   * *   A standard GA instance is created. For more information, see [CreateAccelerator](https://help.aliyun.com/document_detail/206786.html).
   * *   A bandwidth plan is associated with the standard GA instance. For more information, see [BandwidthPackageAddAccelerator](https://help.aliyun.com/document_detail/153239.html).
   * *   An application is deployed as an endpoint to receive requests that are forwarded from GA. You can specify only vSwitches as endpoints for custom routing listeners.
   * *   The permissions to use custom routing listeners are acquired and a custom routing listener is created for the GA instance. The custom routing listener feature is in invitational preview. To use the feature, [submit a ticket](https://workorder-intl.console.aliyun.com/?spm=5176.11182188.console-base-top.dworkorder.18ae4882n3v6ZW#/ticket/createIndex). For information about how to create a custom routing listener, see [CreateListener](https://help.aliyun.com/document_detail/153253.html).
   * *   An endpoint group is created for the custom routing listener. For more information, see [CreateCustomRoutingEndpointGroups](https://help.aliyun.com/document_detail/449363.html).
   * 
   * @remarks
   * readAndWrite
   * 
   * @param request - CreateCustomRoutingEndpointGroupDestinationsRequest
   * @returns CreateCustomRoutingEndpointGroupDestinationsResponse
   */
  async createCustomRoutingEndpointGroupDestinations(request: $_model.CreateCustomRoutingEndpointGroupDestinationsRequest): Promise<$_model.CreateCustomRoutingEndpointGroupDestinationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCustomRoutingEndpointGroupDestinationsWithOptions(request, runtime);
  }

  /**
   * Creates endpoint groups for a custom routing listener.
   * 
   * @remarks
   * Global Accelerator (GA) forwards client requests to endpoints in an endpoint group based on the routing type of the listener that is associated with the endpoint group.
   * *   After you configure an intelligent routing listener for a GA instance, the GA instance selects a nearby and healthy endpoint group and forwards client requests to a healthy endpoint in the endpoint group.
   * *   After you configure a custom routing listener for a GA instance, the instance generates a port mapping table based on the listener port range, protocols and port ranges of the associated endpoint groups, and IP addresses of endpoints (vSwitches), and forwards client requests to specified IP addresses and ports in the vSwitches.
   * You can call this operation to create endpoint groups for custom routing listeners. For information about how to create endpoint groups for intelligent routing listeners, see [CreateEndpointGroup](https://help.aliyun.com/document_detail/153259.html).
   * When you call this operation, take note of the following items:
   * *   **CreateCustomRoutingEndpointGroups** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [DescribeCustomRoutingEndpointGroup](https://help.aliyun.com/document_detail/449373.html) or [ListCustomRoutingEndpointGroups](https://help.aliyun.com/document_detail/449374.html) operation to query the status of the endpoint groups that are associated with custom routing listeners.
   *     *   If one or more endpoint groups are in the **init** state, it indicates that the endpoint groups are being created. In this case, you can perform only query operations.
   *     *   If all endpoint groups are in the **active** state, it indicates that the endpoint groups are created.
   * *   The **CreateCustomRoutingEndpointGroups** operation cannot be called repeatedly for the same GA instance within a specific period of time.
   * ### Prerequisites
   * Make sure that the following requirements are met before you call this operation:
   * *   A standard GA instance is created. For more information, see [CreateAccelerator](https://help.aliyun.com/document_detail/206786.html).
   * *   A bandwidth plan is associated with the standard GA instance. For more information, see [BandwidthPackageAddAccelerator](https://help.aliyun.com/document_detail/153239.html).
   * *   An application is deployed to receive requests that are forwarded from GA. You can specify only vSwitches as endpoints for custom routing listeners.
   * *   The permissions to use custom routing listeners are acquired and a custom routing listener is created for the GA instance. Custom routing listeners are in invitational preview. To use custom routing listeners, contact your account manager. For more information about how to create a custom routing listener, see [CreateListener](https://help.aliyun.com/document_detail/153253.html).
   * 
   * @param request - CreateCustomRoutingEndpointGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCustomRoutingEndpointGroupsResponse
   */
  async createCustomRoutingEndpointGroupsWithOptions(request: $_model.CreateCustomRoutingEndpointGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCustomRoutingEndpointGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.endpointGroupConfigurations)) {
      query["EndpointGroupConfigurations"] = request.endpointGroupConfigurations;
    }

    if (!$dara.isNull(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCustomRoutingEndpointGroups",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCustomRoutingEndpointGroupsResponse>(await this.callApi(params, req, runtime), new $_model.CreateCustomRoutingEndpointGroupsResponse({}));
  }

  /**
   * Creates endpoint groups for a custom routing listener.
   * 
   * @remarks
   * Global Accelerator (GA) forwards client requests to endpoints in an endpoint group based on the routing type of the listener that is associated with the endpoint group.
   * *   After you configure an intelligent routing listener for a GA instance, the GA instance selects a nearby and healthy endpoint group and forwards client requests to a healthy endpoint in the endpoint group.
   * *   After you configure a custom routing listener for a GA instance, the instance generates a port mapping table based on the listener port range, protocols and port ranges of the associated endpoint groups, and IP addresses of endpoints (vSwitches), and forwards client requests to specified IP addresses and ports in the vSwitches.
   * You can call this operation to create endpoint groups for custom routing listeners. For information about how to create endpoint groups for intelligent routing listeners, see [CreateEndpointGroup](https://help.aliyun.com/document_detail/153259.html).
   * When you call this operation, take note of the following items:
   * *   **CreateCustomRoutingEndpointGroups** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [DescribeCustomRoutingEndpointGroup](https://help.aliyun.com/document_detail/449373.html) or [ListCustomRoutingEndpointGroups](https://help.aliyun.com/document_detail/449374.html) operation to query the status of the endpoint groups that are associated with custom routing listeners.
   *     *   If one or more endpoint groups are in the **init** state, it indicates that the endpoint groups are being created. In this case, you can perform only query operations.
   *     *   If all endpoint groups are in the **active** state, it indicates that the endpoint groups are created.
   * *   The **CreateCustomRoutingEndpointGroups** operation cannot be called repeatedly for the same GA instance within a specific period of time.
   * ### Prerequisites
   * Make sure that the following requirements are met before you call this operation:
   * *   A standard GA instance is created. For more information, see [CreateAccelerator](https://help.aliyun.com/document_detail/206786.html).
   * *   A bandwidth plan is associated with the standard GA instance. For more information, see [BandwidthPackageAddAccelerator](https://help.aliyun.com/document_detail/153239.html).
   * *   An application is deployed to receive requests that are forwarded from GA. You can specify only vSwitches as endpoints for custom routing listeners.
   * *   The permissions to use custom routing listeners are acquired and a custom routing listener is created for the GA instance. Custom routing listeners are in invitational preview. To use custom routing listeners, contact your account manager. For more information about how to create a custom routing listener, see [CreateListener](https://help.aliyun.com/document_detail/153253.html).
   * 
   * @param request - CreateCustomRoutingEndpointGroupsRequest
   * @returns CreateCustomRoutingEndpointGroupsResponse
   */
  async createCustomRoutingEndpointGroups(request: $_model.CreateCustomRoutingEndpointGroupsRequest): Promise<$_model.CreateCustomRoutingEndpointGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCustomRoutingEndpointGroupsWithOptions(request, runtime);
  }

  /**
   * Creates traffic destinations for an endpoint that is associated with a custom routing listener.
   * 
   * @remarks
   * This operation takes effect only when the traffic access policy of an endpoint allows traffic to specified destinations. You can call the [DescribeCustomRoutingEndpoint](https://help.aliyun.com/document_detail/449386.html) operation to query the traffic access policy of an endpoint. This operation takes effect only if the value of **TrafficToEndpointPolicy** is set to **AllowCustom**, which allows traffic to specific destinations.
   * When you call this operation, take note of the following items:
   * *   **CreateCustomRoutingEndpointTrafficPolicies** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeCustomRoutingEndpointGroup](https://help.aliyun.com/document_detail/449373.html) operation to query the status of the task.
   *     *   If the endpoint group is in the **updating** state, the traffic destinations are being created. In this state, you can only query the traffic destinations.
   *     *   If the endpoint group is in the **active** state, the traffic destinations are created.
   * *   You cannot call the **CreateCustomRoutingEndpointTrafficPolicies** operation repeatedly for the same GA instance in a specific period of time.
   * ### [](#)Prerequisites
   * Before you call this operation, make sure that the following requirements are met:
   * *   A standard GA instance is created. For more information, see [CreateAccelerator](https://help.aliyun.com/document_detail/206786.html).
   * *   If the bandwidth metering method of the standard GA instance is **pay-by-bandwidth**, a bandwidth plan must be associated with the standard GA instance. For more information, see [BandwidthPackageAddAccelerator](https://help.aliyun.com/document_detail/153239.html).
   * *   An application that serves as the endpoint of the standard GA instance is deployed to receive requests that are forwarded from GA. You can specify only vSwitches as endpoints for custom routing listeners.
   * *   The permissions to use custom routing listeners are acquired, and a custom routing listener is created. Custom routing listeners are in invitational preview. To use custom routing listeners, contact your account manager. For more information about how to create a custom routing listener, see [CreateListener](https://help.aliyun.com/document_detail/153253.html).
   * *   Endpoint groups are created for the custom routing listener. For more information, see [CreateCustomRoutingEndpointGroups](https://help.aliyun.com/document_detail/449363.html).
   * *   Endpoints are created for the custom routing listener. For more information, see [CreateCustomRoutingEndpoints](https://help.aliyun.com/document_detail/449382.html).
   * 
   * @param request - CreateCustomRoutingEndpointTrafficPoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCustomRoutingEndpointTrafficPoliciesResponse
   */
  async createCustomRoutingEndpointTrafficPoliciesWithOptions(request: $_model.CreateCustomRoutingEndpointTrafficPoliciesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCustomRoutingEndpointTrafficPoliciesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!$dara.isNull(request.policyConfigurations)) {
      query["PolicyConfigurations"] = request.policyConfigurations;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCustomRoutingEndpointTrafficPolicies",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCustomRoutingEndpointTrafficPoliciesResponse>(await this.callApi(params, req, runtime), new $_model.CreateCustomRoutingEndpointTrafficPoliciesResponse({}));
  }

  /**
   * Creates traffic destinations for an endpoint that is associated with a custom routing listener.
   * 
   * @remarks
   * This operation takes effect only when the traffic access policy of an endpoint allows traffic to specified destinations. You can call the [DescribeCustomRoutingEndpoint](https://help.aliyun.com/document_detail/449386.html) operation to query the traffic access policy of an endpoint. This operation takes effect only if the value of **TrafficToEndpointPolicy** is set to **AllowCustom**, which allows traffic to specific destinations.
   * When you call this operation, take note of the following items:
   * *   **CreateCustomRoutingEndpointTrafficPolicies** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeCustomRoutingEndpointGroup](https://help.aliyun.com/document_detail/449373.html) operation to query the status of the task.
   *     *   If the endpoint group is in the **updating** state, the traffic destinations are being created. In this state, you can only query the traffic destinations.
   *     *   If the endpoint group is in the **active** state, the traffic destinations are created.
   * *   You cannot call the **CreateCustomRoutingEndpointTrafficPolicies** operation repeatedly for the same GA instance in a specific period of time.
   * ### [](#)Prerequisites
   * Before you call this operation, make sure that the following requirements are met:
   * *   A standard GA instance is created. For more information, see [CreateAccelerator](https://help.aliyun.com/document_detail/206786.html).
   * *   If the bandwidth metering method of the standard GA instance is **pay-by-bandwidth**, a bandwidth plan must be associated with the standard GA instance. For more information, see [BandwidthPackageAddAccelerator](https://help.aliyun.com/document_detail/153239.html).
   * *   An application that serves as the endpoint of the standard GA instance is deployed to receive requests that are forwarded from GA. You can specify only vSwitches as endpoints for custom routing listeners.
   * *   The permissions to use custom routing listeners are acquired, and a custom routing listener is created. Custom routing listeners are in invitational preview. To use custom routing listeners, contact your account manager. For more information about how to create a custom routing listener, see [CreateListener](https://help.aliyun.com/document_detail/153253.html).
   * *   Endpoint groups are created for the custom routing listener. For more information, see [CreateCustomRoutingEndpointGroups](https://help.aliyun.com/document_detail/449363.html).
   * *   Endpoints are created for the custom routing listener. For more information, see [CreateCustomRoutingEndpoints](https://help.aliyun.com/document_detail/449382.html).
   * 
   * @param request - CreateCustomRoutingEndpointTrafficPoliciesRequest
   * @returns CreateCustomRoutingEndpointTrafficPoliciesResponse
   */
  async createCustomRoutingEndpointTrafficPolicies(request: $_model.CreateCustomRoutingEndpointTrafficPoliciesRequest): Promise<$_model.CreateCustomRoutingEndpointTrafficPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCustomRoutingEndpointTrafficPoliciesWithOptions(request, runtime);
  }

  /**
   * Creates endpoints for a custom routing listener.
   * 
   * @remarks
   * After you configure a custom routing listener for a Global Accelerator (GA) instance, the instance generates a port mapping table based on the listener port range, the protocols and port ranges of the associated endpoint groups, and the IP addresses of endpoints (vSwitches), and forwards client requests to specified IP addresses and ports in the vSwitches.
   * This operation is used to create endpoints for custom routing listeners. When you call this operation, take note of the following items:
   * *   **CreateCustomRoutingEndpoints** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [DescribeCustomRoutingEndpointGroup](https://help.aliyun.com/document_detail/449373.html) operation to query the status of an endpoint group and determine whether endpoints are created in the endpoint group.
   *     *   If the endpoint group is in the **updating** state, it indicates that endpoints are being created. In this case, you can perform only query operations.
   *     *   If the endpoint group is in the **active** state, it indicates that endpoints are created.
   * *   The **CreateCustomRoutingEndpoints** operation cannot be called repeatedly for the same GA instance within a specific period of time.
   * ### Prerequisites
   * The following operations are complete before you call this operation:
   * *   Create a standard GA instance. For more information, see [CreateAccelerator](https://help.aliyun.com/document_detail/206786.html).
   * *   Associate a bandwidth plan with the standard GA instance. For more information, see [BandwidthPackageAddAccelerator](https://help.aliyun.com/document_detail/153239.html).
   * *   Deploy an application that serves as the endpoint of the GA instance. The application is used to receive requests that are forwarded from GA. You can specify only vSwitches as endpoints for custom routing listeners.
   * *   Apply for permissions to use custom routing listeners and create a custom routing listener for the standard GA instance. Custom routing listeners are in invitational preview. To use custom routing listeners, contact your account manager. For more information about how to create a custom routing listener, see [CreateListener](https://help.aliyun.com/document_detail/153253.html).
   * *   Create an endpoint group for the custom routing listener. For more information, see [CreateCustomRoutingEndpointGroups](https://help.aliyun.com/document_detail/449363.html).
   * 
   * @param request - CreateCustomRoutingEndpointsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCustomRoutingEndpointsResponse
   */
  async createCustomRoutingEndpointsWithOptions(request: $_model.CreateCustomRoutingEndpointsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCustomRoutingEndpointsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.endpointConfigurations)) {
      query["EndpointConfigurations"] = request.endpointConfigurations;
    }

    if (!$dara.isNull(request.endpointGroupId)) {
      query["EndpointGroupId"] = request.endpointGroupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCustomRoutingEndpoints",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCustomRoutingEndpointsResponse>(await this.callApi(params, req, runtime), new $_model.CreateCustomRoutingEndpointsResponse({}));
  }

  /**
   * Creates endpoints for a custom routing listener.
   * 
   * @remarks
   * After you configure a custom routing listener for a Global Accelerator (GA) instance, the instance generates a port mapping table based on the listener port range, the protocols and port ranges of the associated endpoint groups, and the IP addresses of endpoints (vSwitches), and forwards client requests to specified IP addresses and ports in the vSwitches.
   * This operation is used to create endpoints for custom routing listeners. When you call this operation, take note of the following items:
   * *   **CreateCustomRoutingEndpoints** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [DescribeCustomRoutingEndpointGroup](https://help.aliyun.com/document_detail/449373.html) operation to query the status of an endpoint group and determine whether endpoints are created in the endpoint group.
   *     *   If the endpoint group is in the **updating** state, it indicates that endpoints are being created. In this case, you can perform only query operations.
   *     *   If the endpoint group is in the **active** state, it indicates that endpoints are created.
   * *   The **CreateCustomRoutingEndpoints** operation cannot be called repeatedly for the same GA instance within a specific period of time.
   * ### Prerequisites
   * The following operations are complete before you call this operation:
   * *   Create a standard GA instance. For more information, see [CreateAccelerator](https://help.aliyun.com/document_detail/206786.html).
   * *   Associate a bandwidth plan with the standard GA instance. For more information, see [BandwidthPackageAddAccelerator](https://help.aliyun.com/document_detail/153239.html).
   * *   Deploy an application that serves as the endpoint of the GA instance. The application is used to receive requests that are forwarded from GA. You can specify only vSwitches as endpoints for custom routing listeners.
   * *   Apply for permissions to use custom routing listeners and create a custom routing listener for the standard GA instance. Custom routing listeners are in invitational preview. To use custom routing listeners, contact your account manager. For more information about how to create a custom routing listener, see [CreateListener](https://help.aliyun.com/document_detail/153253.html).
   * *   Create an endpoint group for the custom routing listener. For more information, see [CreateCustomRoutingEndpointGroups](https://help.aliyun.com/document_detail/449363.html).
   * 
   * @param request - CreateCustomRoutingEndpointsRequest
   * @returns CreateCustomRoutingEndpointsResponse
   */
  async createCustomRoutingEndpoints(request: $_model.CreateCustomRoutingEndpointsRequest): Promise<$_model.CreateCustomRoutingEndpointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCustomRoutingEndpointsWithOptions(request, runtime);
  }

  /**
   * Creates a domain name and associates the domain name with Global Accelerator (GA) instances.
   * 
   * @remarks
   * After you associate an accelerated domain name that has obtained an ICP number with a Global Accelerator (GA) instance, you do not need to complete filing for the accelerated domain name or its subdomains on Alibaba Cloud.
   * You can call this operation to add an accelerated domain name and associate the accelerated domain name with GA instances. When you call this operation, take note of the following items:
   * *   If your accelerated domain name is hosted in the Chinese mainland, you must obtain an ICP number for the domain name.
   * *   The same accelerated domain name cannot be repeatedly associated with the same GA instance.
   * *   You cannot repeatedly call the **CreateDomain** operation by using the same Alibaba Cloud account within a specific period of time.
   * 
   * @param request - CreateDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDomainResponse
   */
  async createDomainWithOptions(request: $_model.CreateDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorIds)) {
      query["AcceleratorIds"] = request.acceleratorIds;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
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
      action: "CreateDomain",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDomainResponse>(await this.callApi(params, req, runtime), new $_model.CreateDomainResponse({}));
  }

  /**
   * Creates a domain name and associates the domain name with Global Accelerator (GA) instances.
   * 
   * @remarks
   * After you associate an accelerated domain name that has obtained an ICP number with a Global Accelerator (GA) instance, you do not need to complete filing for the accelerated domain name or its subdomains on Alibaba Cloud.
   * You can call this operation to add an accelerated domain name and associate the accelerated domain name with GA instances. When you call this operation, take note of the following items:
   * *   If your accelerated domain name is hosted in the Chinese mainland, you must obtain an ICP number for the domain name.
   * *   The same accelerated domain name cannot be repeatedly associated with the same GA instance.
   * *   You cannot repeatedly call the **CreateDomain** operation by using the same Alibaba Cloud account within a specific period of time.
   * 
   * @param request - CreateDomainRequest
   * @returns CreateDomainResponse
   */
  async createDomain(request: $_model.CreateDomainRequest): Promise<$_model.CreateDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDomainWithOptions(request, runtime);
  }

  /**
   * Creates an endpoint group.
   * 
   * @remarks
   *   When you call this operation to create a virtual endpoint group for a Layer 4 listener, make sure that a default endpoint group is created.
   * *   **CreateEndpointGroup** is an asynchronous operation. After you send a request, the system returns the ID of an endpoint group, but the endpoint group is still being created in the system background. You can call the [DescribeEndpointGroup](https://help.aliyun.com/document_detail/153260.html) operation to query the state of the endpoint group.
   *     *   If the endpoint group is in the **init** state, it indicates that the endpoint group is being created. In this case, you can perform only query operations.
   *     *   If the endpoint group is in the **active** state, it indicates that the endpoint group is created.
   * *   The **CreateEndpointGroup** operation cannot be repeatedly called for the same Global Accelerator (GA) instance within a specific period of time.
   * 
   * @param request - CreateEndpointGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEndpointGroupResponse
   */
  async createEndpointGroupWithOptions(request: $_model.CreateEndpointGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEndpointGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
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

    if (!$dara.isNull(request.endpointConfigurations)) {
      query["EndpointConfigurations"] = request.endpointConfigurations;
    }

    if (!$dara.isNull(request.endpointGroupRegion)) {
      query["EndpointGroupRegion"] = request.endpointGroupRegion;
    }

    if (!$dara.isNull(request.endpointGroupType)) {
      query["EndpointGroupType"] = request.endpointGroupType;
    }

    if (!$dara.isNull(request.endpointIpVersion)) {
      query["EndpointIpVersion"] = request.endpointIpVersion;
    }

    if (!$dara.isNull(request.endpointProtocolVersion)) {
      query["EndpointProtocolVersion"] = request.endpointProtocolVersion;
    }

    if (!$dara.isNull(request.endpointRequestProtocol)) {
      query["EndpointRequestProtocol"] = request.endpointRequestProtocol;
    }

    if (!$dara.isNull(request.healthCheckEnabled)) {
      query["HealthCheckEnabled"] = request.healthCheckEnabled;
    }

    if (!$dara.isNull(request.healthCheckHost)) {
      query["HealthCheckHost"] = request.healthCheckHost;
    }

    if (!$dara.isNull(request.healthCheckIntervalSeconds)) {
      query["HealthCheckIntervalSeconds"] = request.healthCheckIntervalSeconds;
    }

    if (!$dara.isNull(request.healthCheckPath)) {
      query["HealthCheckPath"] = request.healthCheckPath;
    }

    if (!$dara.isNull(request.healthCheckPort)) {
      query["HealthCheckPort"] = request.healthCheckPort;
    }

    if (!$dara.isNull(request.healthCheckProtocol)) {
      query["HealthCheckProtocol"] = request.healthCheckProtocol;
    }

    if (!$dara.isNull(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.portOverrides)) {
      query["PortOverrides"] = request.portOverrides;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.thresholdCount)) {
      query["ThresholdCount"] = request.thresholdCount;
    }

    if (!$dara.isNull(request.trafficPercentage)) {
      query["TrafficPercentage"] = request.trafficPercentage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEndpointGroup",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEndpointGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateEndpointGroupResponse({}));
  }

  /**
   * Creates an endpoint group.
   * 
   * @remarks
   *   When you call this operation to create a virtual endpoint group for a Layer 4 listener, make sure that a default endpoint group is created.
   * *   **CreateEndpointGroup** is an asynchronous operation. After you send a request, the system returns the ID of an endpoint group, but the endpoint group is still being created in the system background. You can call the [DescribeEndpointGroup](https://help.aliyun.com/document_detail/153260.html) operation to query the state of the endpoint group.
   *     *   If the endpoint group is in the **init** state, it indicates that the endpoint group is being created. In this case, you can perform only query operations.
   *     *   If the endpoint group is in the **active** state, it indicates that the endpoint group is created.
   * *   The **CreateEndpointGroup** operation cannot be repeatedly called for the same Global Accelerator (GA) instance within a specific period of time.
   * 
   * @param request - CreateEndpointGroupRequest
   * @returns CreateEndpointGroupResponse
   */
  async createEndpointGroup(request: $_model.CreateEndpointGroupRequest): Promise<$_model.CreateEndpointGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createEndpointGroupWithOptions(request, runtime);
  }

  /**
   * Creates multiple endpoint groups at a time.
   * 
   * @remarks
   *   You can call this operation to create multiple endpoint groups at a time. However, you cannot create a default endpoint group and a virtual endpoint group at the same time.
   * *   You cannot create a virtual endpoint group for a Layer 4 listener. To create a virtual endpoint group for a Layer 4 listener, call the [CreateEndpointGroup](https://help.aliyun.com/document_detail/2302394.html) operation.
   * *   **CreateEndpointGroups** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeEndpointGroup](https://help.aliyun.com/document_detail/153260.html) or [ListEndpointGroups](https://help.aliyun.com/document_detail/153261.html) operation to query the status of endpoint groups.
   *     *   If the endpoint groups are in the **init** state, the endpoint groups are being created. In this case, you can perform only query operations.
   *     *   If all endpoint groups are in the **active** state, the endpoint groups are created.
   * *   The **CreateEndpointGroups** operation cannot be repeatedly called for the same Global Accelerator (GA) instance within a specific period of time.
   * 
   * @param request - CreateEndpointGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEndpointGroupsResponse
   */
  async createEndpointGroupsWithOptions(request: $_model.CreateEndpointGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEndpointGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endpointGroupConfigurations)) {
      bodyFlat["EndpointGroupConfigurations"] = request.endpointGroupConfigurations;
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
      action: "CreateEndpointGroups",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEndpointGroupsResponse>(await this.callApi(params, req, runtime), new $_model.CreateEndpointGroupsResponse({}));
  }

  /**
   * Creates multiple endpoint groups at a time.
   * 
   * @remarks
   *   You can call this operation to create multiple endpoint groups at a time. However, you cannot create a default endpoint group and a virtual endpoint group at the same time.
   * *   You cannot create a virtual endpoint group for a Layer 4 listener. To create a virtual endpoint group for a Layer 4 listener, call the [CreateEndpointGroup](https://help.aliyun.com/document_detail/2302394.html) operation.
   * *   **CreateEndpointGroups** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeEndpointGroup](https://help.aliyun.com/document_detail/153260.html) or [ListEndpointGroups](https://help.aliyun.com/document_detail/153261.html) operation to query the status of endpoint groups.
   *     *   If the endpoint groups are in the **init** state, the endpoint groups are being created. In this case, you can perform only query operations.
   *     *   If all endpoint groups are in the **active** state, the endpoint groups are created.
   * *   The **CreateEndpointGroups** operation cannot be repeatedly called for the same Global Accelerator (GA) instance within a specific period of time.
   * 
   * @param request - CreateEndpointGroupsRequest
   * @returns CreateEndpointGroupsResponse
   */
  async createEndpointGroups(request: $_model.CreateEndpointGroupsRequest): Promise<$_model.CreateEndpointGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createEndpointGroupsWithOptions(request, runtime);
  }

  /**
   * If you want to distribute and process traffic based on request attributes, such as domain names and paths, or information in requests, such as HTTP headers and cookies, you can create custom forwarding rules for a listener. The listener forwards requests based on the forwarding rules. You can call the CreateForwardingRules operation to create forwarding rules.
   * 
   * @remarks
   * Before you call this operation to create forwarding rules, we recommend that you learn how forwarding rules work and how requests are matched against forwarding rules. For more information, see [Configure forwarding rules](https://help.aliyun.com/document_detail/204224.html).
   * When you call this operation, take note of the following items:
   * *   **CreateForwardingRules** is an asynchronous operation. After you send a request, the system returns a forwarding rule ID and runs the task in the background. You can call the [ListForwardingRules](https://help.aliyun.com/document_detail/205817.html) operation to query the status of a forwarding rule.
   *     *   If the forwarding rule is in the **configuring** state, the rule is being created. In this case, you can only perform query operations.
   *     *   If the forwarding rule is in the **active** state, the rule is created.
   * *   The **CreateForwardingRules** operation cannot be repeatedly called for the same Global Accelerator (GA) instance within a specific period of time.
   * 
   * @param request - CreateForwardingRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateForwardingRulesResponse
   */
  async createForwardingRulesWithOptions(request: $_model.CreateForwardingRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateForwardingRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.forwardingRules)) {
      bodyFlat["ForwardingRules"] = request.forwardingRules;
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
      action: "CreateForwardingRules",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateForwardingRulesResponse>(await this.callApi(params, req, runtime), new $_model.CreateForwardingRulesResponse({}));
  }

  /**
   * If you want to distribute and process traffic based on request attributes, such as domain names and paths, or information in requests, such as HTTP headers and cookies, you can create custom forwarding rules for a listener. The listener forwards requests based on the forwarding rules. You can call the CreateForwardingRules operation to create forwarding rules.
   * 
   * @remarks
   * Before you call this operation to create forwarding rules, we recommend that you learn how forwarding rules work and how requests are matched against forwarding rules. For more information, see [Configure forwarding rules](https://help.aliyun.com/document_detail/204224.html).
   * When you call this operation, take note of the following items:
   * *   **CreateForwardingRules** is an asynchronous operation. After you send a request, the system returns a forwarding rule ID and runs the task in the background. You can call the [ListForwardingRules](https://help.aliyun.com/document_detail/205817.html) operation to query the status of a forwarding rule.
   *     *   If the forwarding rule is in the **configuring** state, the rule is being created. In this case, you can only perform query operations.
   *     *   If the forwarding rule is in the **active** state, the rule is created.
   * *   The **CreateForwardingRules** operation cannot be repeatedly called for the same Global Accelerator (GA) instance within a specific period of time.
   * 
   * @param request - CreateForwardingRulesRequest
   * @returns CreateForwardingRulesResponse
   */
  async createForwardingRules(request: $_model.CreateForwardingRulesRequest): Promise<$_model.CreateForwardingRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createForwardingRulesWithOptions(request, runtime);
  }

  /**
   * Creates acceleration regions.
   * 
   * @remarks
   *   **CreateIpSets** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [DescribeIpSet](https://help.aliyun.com/document_detail/153246.html) operation to query the status of the task.
   *     *   If acceleration regions are in the **init** state, it indicates that the acceleration regions are being created. In this case, you can perform only query operations.
   *     *   If acceleration regions are in the **active** state, it indicates that the acceleration regions are created.
   * *   You cannot call the **CreateIpSets** operation again on the same GA instance before the previous operation is completed.
   * 
   * @param request - CreateIpSetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIpSetsResponse
   */
  async createIpSetsWithOptions(request: $_model.CreateIpSetsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateIpSetsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accelerateRegion)) {
      query["AccelerateRegion"] = request.accelerateRegion;
    }

    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateIpSets",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateIpSetsResponse>(await this.callApi(params, req, runtime), new $_model.CreateIpSetsResponse({}));
  }

  /**
   * Creates acceleration regions.
   * 
   * @remarks
   *   **CreateIpSets** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [DescribeIpSet](https://help.aliyun.com/document_detail/153246.html) operation to query the status of the task.
   *     *   If acceleration regions are in the **init** state, it indicates that the acceleration regions are being created. In this case, you can perform only query operations.
   *     *   If acceleration regions are in the **active** state, it indicates that the acceleration regions are created.
   * *   You cannot call the **CreateIpSets** operation again on the same GA instance before the previous operation is completed.
   * 
   * @param request - CreateIpSetsRequest
   * @returns CreateIpSetsResponse
   */
  async createIpSets(request: $_model.CreateIpSetsRequest): Promise<$_model.CreateIpSetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createIpSetsWithOptions(request, runtime);
  }

  /**
   * A listener checks connection requests and distributes the requests to endpoints based on forwarding rules that are defined by the scheduling algorithm. You can call the CreateListener operation to create a listener for a GA instance.
   * 
   * @remarks
   * When you call this operation, take note of the following items:
   * *   **CreateListener** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeListener](https://help.aliyun.com/document_detail/153254.html) operation to query the status of the task.
   *     *   If the listener is in the **init** state, the listener is being created. In this state, you can perform only query operations.
   *     *   If the listener is in the **active** state, the listener is created.
   * *   You cannot repeatedly call the **CreateListener** operation for the same GA instance within the specified period of time.
   * 
   * @param request - CreateListenerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateListenerResponse
   */
  async createListenerWithOptions(request: $_model.CreateListenerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateListenerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.certificates)) {
      query["Certificates"] = request.certificates;
    }

    if (!$dara.isNull(request.clientAffinity)) {
      query["ClientAffinity"] = request.clientAffinity;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.customRoutingEndpointGroupConfigurations)) {
      query["CustomRoutingEndpointGroupConfigurations"] = request.customRoutingEndpointGroupConfigurations;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.endpointGroupConfigurations)) {
      query["EndpointGroupConfigurations"] = request.endpointGroupConfigurations;
    }

    if (!$dara.isNull(request.httpVersion)) {
      query["HttpVersion"] = request.httpVersion;
    }

    if (!$dara.isNull(request.idleTimeout)) {
      query["IdleTimeout"] = request.idleTimeout;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.portRanges)) {
      query["PortRanges"] = request.portRanges;
    }

    if (!$dara.isNull(request.protocol)) {
      query["Protocol"] = request.protocol;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.requestTimeout)) {
      query["RequestTimeout"] = request.requestTimeout;
    }

    if (!$dara.isNull(request.securityPolicyId)) {
      query["SecurityPolicyId"] = request.securityPolicyId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.XForwardedForConfig)) {
      query["XForwardedForConfig"] = request.XForwardedForConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateListener",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateListenerResponse>(await this.callApi(params, req, runtime), new $_model.CreateListenerResponse({}));
  }

  /**
   * A listener checks connection requests and distributes the requests to endpoints based on forwarding rules that are defined by the scheduling algorithm. You can call the CreateListener operation to create a listener for a GA instance.
   * 
   * @remarks
   * When you call this operation, take note of the following items:
   * *   **CreateListener** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeListener](https://help.aliyun.com/document_detail/153254.html) operation to query the status of the task.
   *     *   If the listener is in the **init** state, the listener is being created. In this state, you can perform only query operations.
   *     *   If the listener is in the **active** state, the listener is created.
   * *   You cannot repeatedly call the **CreateListener** operation for the same GA instance within the specified period of time.
   * 
   * @param request - CreateListenerRequest
   * @returns CreateListenerResponse
   */
  async createListener(request: $_model.CreateListenerRequest): Promise<$_model.CreateListenerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createListenerWithOptions(request, runtime);
  }

  /**
   * Creates secondary IP addresses for a CNAME that is assigned to a Global Accelerator (GA) instance. If an acceleration area of the GA instance becomes unavailable, access traffic is redirected to the secondary IP addresses.
   * 
   * @remarks
   *   **CreateSpareIps** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeAccelerator](https://help.aliyun.com/document_detail/153235.html) operation to query the status of a GA instance.
   *     *   If the GA instance is in the **configuring** state, it indicates that secondary IP addresses are being created for the CNAME that is assigned to the GA instance. In this case, you can only perform query operations.
   *     *   If the GA instance is in the **active** state, it indicates that secondary IP addresses are created for the CNAME that is assigned to the GA instance.
   * *   The **CreateSpareIps** operation holds an exclusive lock on the GA instance. While the operation is in progress, you cannot call the same operation in the same Alibaba Cloud account.
   * 
   * @param request - CreateSpareIpsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSpareIpsResponse
   */
  async createSpareIpsWithOptions(request: $_model.CreateSpareIpsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSpareIpsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
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

    if (!$dara.isNull(request.spareIps)) {
      query["SpareIps"] = request.spareIps;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSpareIps",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSpareIpsResponse>(await this.callApi(params, req, runtime), new $_model.CreateSpareIpsResponse({}));
  }

  /**
   * Creates secondary IP addresses for a CNAME that is assigned to a Global Accelerator (GA) instance. If an acceleration area of the GA instance becomes unavailable, access traffic is redirected to the secondary IP addresses.
   * 
   * @remarks
   *   **CreateSpareIps** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeAccelerator](https://help.aliyun.com/document_detail/153235.html) operation to query the status of a GA instance.
   *     *   If the GA instance is in the **configuring** state, it indicates that secondary IP addresses are being created for the CNAME that is assigned to the GA instance. In this case, you can only perform query operations.
   *     *   If the GA instance is in the **active** state, it indicates that secondary IP addresses are created for the CNAME that is assigned to the GA instance.
   * *   The **CreateSpareIps** operation holds an exclusive lock on the GA instance. While the operation is in progress, you cannot call the same operation in the same Alibaba Cloud account.
   * 
   * @param request - CreateSpareIpsRequest
   * @returns CreateSpareIpsResponse
   */
  async createSpareIps(request: $_model.CreateSpareIpsRequest): Promise<$_model.CreateSpareIpsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSpareIpsWithOptions(request, runtime);
  }

  /**
   * Deletes a Global Accelerator (GA) instance.
   * 
   * @remarks
   *   You cannot delete subscription GA instances.
   * *   **DeleteAccelerator** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeAccelerator](https://help.aliyun.com/document_detail/153235.html) operation to query the status of the task.
   *     *   If the GA instance is in the **deleting** state, the GA instance is being deleted. In this case, you can perform only query operations.
   *     *   If the GA instance cannot be queried, the GA instance is deleted.
   * 
   * @param request - DeleteAcceleratorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAcceleratorResponse
   */
  async deleteAcceleratorWithOptions(request: $_model.DeleteAcceleratorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAcceleratorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAccelerator",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAcceleratorResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAcceleratorResponse({}));
  }

  /**
   * Deletes a Global Accelerator (GA) instance.
   * 
   * @remarks
   *   You cannot delete subscription GA instances.
   * *   **DeleteAccelerator** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeAccelerator](https://help.aliyun.com/document_detail/153235.html) operation to query the status of the task.
   *     *   If the GA instance is in the **deleting** state, the GA instance is being deleted. In this case, you can perform only query operations.
   *     *   If the GA instance cannot be queried, the GA instance is deleted.
   * 
   * @param request - DeleteAcceleratorRequest
   * @returns DeleteAcceleratorResponse
   */
  async deleteAccelerator(request: $_model.DeleteAcceleratorRequest): Promise<$_model.DeleteAcceleratorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAcceleratorWithOptions(request, runtime);
  }

  /**
   * Deletes a access control list (ACL) of a Global Accelerator (GA) instance.
   * 
   * @remarks
   * *DeleteAcl** is an asynchronous operation. After you send a request, the system returns a request ID, but the operation is still being performed in the system background. You can call the [GetAcl](https://help.aliyun.com/document_detail/258292.html) operation to query the status of an ACL.
   * *   If the ACL is in the **deleting** state, it indicates that the ACL is being deleted. In this case, you can perform only query operations.
   * *   If the ACL cannot be queried, it indicates that the ACL is deleted.
   * 
   * @param request - DeleteAclRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAclResponse
   */
  async deleteAclWithOptions(request: $_model.DeleteAclRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAclResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclId)) {
      query["AclId"] = request.aclId;
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
      action: "DeleteAcl",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAclResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAclResponse({}));
  }

  /**
   * Deletes a access control list (ACL) of a Global Accelerator (GA) instance.
   * 
   * @remarks
   * *DeleteAcl** is an asynchronous operation. After you send a request, the system returns a request ID, but the operation is still being performed in the system background. You can call the [GetAcl](https://help.aliyun.com/document_detail/258292.html) operation to query the status of an ACL.
   * *   If the ACL is in the **deleting** state, it indicates that the ACL is being deleted. In this case, you can perform only query operations.
   * *   If the ACL cannot be queried, it indicates that the ACL is deleted.
   * 
   * @param request - DeleteAclRequest
   * @returns DeleteAclResponse
   */
  async deleteAcl(request: $_model.DeleteAclRequest): Promise<$_model.DeleteAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAclWithOptions(request, runtime);
  }

  /**
   * Deletes an origin probing task.
   * 
   * @remarks
   *   **DeleteApplicationMonitor** is an asynchronous operation. After you call this operation, the system returns a request ID, but the operation is still being performed in the system background. You can call the [ListApplicationMonitor](https://help.aliyun.com/document_detail/408462.html) operation to query the state of an origin probing task.
   *     *   If the origin probing task is in the **deleting** state, it indicates that the task is being deleted. In this case, you can perform only query operations.
   *     *   If the origin probing task cannot be queried, it indicates that the task is deleted.
   * *   The **DeleteApplicationMonitor** operation cannot be called repeatedly for the same Global Accelerator (GA) instance within a specific period of time.
   * 
   * @param request - DeleteApplicationMonitorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteApplicationMonitorResponse
   */
  async deleteApplicationMonitorWithOptions(request: $_model.DeleteApplicationMonitorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteApplicationMonitorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteApplicationMonitor",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteApplicationMonitorResponse>(await this.callApi(params, req, runtime), new $_model.DeleteApplicationMonitorResponse({}));
  }

  /**
   * Deletes an origin probing task.
   * 
   * @remarks
   *   **DeleteApplicationMonitor** is an asynchronous operation. After you call this operation, the system returns a request ID, but the operation is still being performed in the system background. You can call the [ListApplicationMonitor](https://help.aliyun.com/document_detail/408462.html) operation to query the state of an origin probing task.
   *     *   If the origin probing task is in the **deleting** state, it indicates that the task is being deleted. In this case, you can perform only query operations.
   *     *   If the origin probing task cannot be queried, it indicates that the task is deleted.
   * *   The **DeleteApplicationMonitor** operation cannot be called repeatedly for the same Global Accelerator (GA) instance within a specific period of time.
   * 
   * @param request - DeleteApplicationMonitorRequest
   * @returns DeleteApplicationMonitorResponse
   */
  async deleteApplicationMonitor(request: $_model.DeleteApplicationMonitorRequest): Promise<$_model.DeleteApplicationMonitorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteApplicationMonitorWithOptions(request, runtime);
  }

  /**
   * Deletes a bandwidth plan.
   * 
   * @remarks
   *   By default, subscription bandwidth plans cannot be deleted. If you want to unsubscribe from subscription bandwidth plans, go to the [Unsubscribe](https://usercenter2-intl.aliyun.com/refund/refund) page. Before you can unsubscribe from a subscription bandwidth plan that is associated with a Global Accelerator (GA) instance, you must disassociate the bandwidth plan from the GA instance. For information about how to disassociate a bandwidth plan from a GA instance, see [BandwidthPackageRemoveAccelerator](https://help.aliyun.com/document_detail/153240.html).
   * *   Bandwidth plans that are associated with GA instances cannot be deleted. Before you can delete a bandwidth plan that is associated with a GA instance, you must disassociate the bandwidth plan from the GA instance. For information about how to disassociate a bandwidth plan from a GA instance, see [BandwidthPackageRemoveAccelerator](https://help.aliyun.com/document_detail/153240.html).
   * *   **DeleteBandwidthPackage** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeBandwidthPackage](https://help.aliyun.com/document_detail/153241.html) operation to query the status of the task.
   *     *   If the bandwidth plan is in the **deleting** state, the bandwidth plan is being deleted. In this case, you can perform only query operations.
   *     *   If the bandwidth plan cannot be found, the bandwidth plan is deleted.
   * *   The **DeleteBandwidthPackage** operation cannot be repeatedly called for the same bandwidth plan within a specific period of time.
   * 
   * @param request - DeleteBandwidthPackageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBandwidthPackageResponse
   */
  async deleteBandwidthPackageWithOptions(request: $_model.DeleteBandwidthPackageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteBandwidthPackageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bandwidthPackageId)) {
      query["BandwidthPackageId"] = request.bandwidthPackageId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteBandwidthPackage",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteBandwidthPackageResponse>(await this.callApi(params, req, runtime), new $_model.DeleteBandwidthPackageResponse({}));
  }

  /**
   * Deletes a bandwidth plan.
   * 
   * @remarks
   *   By default, subscription bandwidth plans cannot be deleted. If you want to unsubscribe from subscription bandwidth plans, go to the [Unsubscribe](https://usercenter2-intl.aliyun.com/refund/refund) page. Before you can unsubscribe from a subscription bandwidth plan that is associated with a Global Accelerator (GA) instance, you must disassociate the bandwidth plan from the GA instance. For information about how to disassociate a bandwidth plan from a GA instance, see [BandwidthPackageRemoveAccelerator](https://help.aliyun.com/document_detail/153240.html).
   * *   Bandwidth plans that are associated with GA instances cannot be deleted. Before you can delete a bandwidth plan that is associated with a GA instance, you must disassociate the bandwidth plan from the GA instance. For information about how to disassociate a bandwidth plan from a GA instance, see [BandwidthPackageRemoveAccelerator](https://help.aliyun.com/document_detail/153240.html).
   * *   **DeleteBandwidthPackage** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeBandwidthPackage](https://help.aliyun.com/document_detail/153241.html) operation to query the status of the task.
   *     *   If the bandwidth plan is in the **deleting** state, the bandwidth plan is being deleted. In this case, you can perform only query operations.
   *     *   If the bandwidth plan cannot be found, the bandwidth plan is deleted.
   * *   The **DeleteBandwidthPackage** operation cannot be repeatedly called for the same bandwidth plan within a specific period of time.
   * 
   * @param request - DeleteBandwidthPackageRequest
   * @returns DeleteBandwidthPackageResponse
   */
  async deleteBandwidthPackage(request: $_model.DeleteBandwidthPackageRequest): Promise<$_model.DeleteBandwidthPackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteBandwidthPackageWithOptions(request, runtime);
  }

  /**
   * Deletes an accelerated IP address of a basic Global Accelerator (GA) instance.
   * 
   * @remarks
   *   **DeleteBasicAccelerateIp** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetBasicAccelerateIp](https://help.aliyun.com/document_detail/466794.html) operation to query the status of an accelerated IP address.
   *     *   If an accelerated IP address is in the **deleting** state, the accelerated IP address is being deleted. In this case, you can perform only query operations.
   *     *   If the system fails to return information about an accelerated IP address, the accelerated IP address is deleted.
   * *   You cannot repeatedly call the **DeleteBasicAccelerateIp** operation for the same basic GA instance within a specific period of time.
   * 
   * @param request - DeleteBasicAccelerateIpRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBasicAccelerateIpResponse
   */
  async deleteBasicAccelerateIpWithOptions(request: $_model.DeleteBasicAccelerateIpRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteBasicAccelerateIpResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accelerateIpId)) {
      query["AccelerateIpId"] = request.accelerateIpId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteBasicAccelerateIp",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteBasicAccelerateIpResponse>(await this.callApi(params, req, runtime), new $_model.DeleteBasicAccelerateIpResponse({}));
  }

  /**
   * Deletes an accelerated IP address of a basic Global Accelerator (GA) instance.
   * 
   * @remarks
   *   **DeleteBasicAccelerateIp** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetBasicAccelerateIp](https://help.aliyun.com/document_detail/466794.html) operation to query the status of an accelerated IP address.
   *     *   If an accelerated IP address is in the **deleting** state, the accelerated IP address is being deleted. In this case, you can perform only query operations.
   *     *   If the system fails to return information about an accelerated IP address, the accelerated IP address is deleted.
   * *   You cannot repeatedly call the **DeleteBasicAccelerateIp** operation for the same basic GA instance within a specific period of time.
   * 
   * @param request - DeleteBasicAccelerateIpRequest
   * @returns DeleteBasicAccelerateIpResponse
   */
  async deleteBasicAccelerateIp(request: $_model.DeleteBasicAccelerateIpRequest): Promise<$_model.DeleteBasicAccelerateIpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteBasicAccelerateIpWithOptions(request, runtime);
  }

  /**
   * Deletes a mapping between an accelerated IP address and an endpoint for a basic Global Accelerator (GA) instance.
   * 
   * @remarks
   *   **DeleteBasicAccelerateIpEndpointRelation** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the following operations to check whether an accelerated IP address is disassociated from an endpoint:
   *     *   You can call the [GetBasicAccelerateIp](https://help.aliyun.com/document_detail/466794.html) and [ListBasicEndpoints](https://help.aliyun.com/document_detail/466831.html) operations to query the status of an accelerated IP address and an endpoint. If the accelerated IP address and the endpoint are in the **unbinding** state, the accelerated IP address is being disassociated from the endpoint. In this case, you can query the IP address and endpoint but cannot perform other operations.
   *     *   If the association status between the accelerated IP address and the endpoint cannot be queried by calling the [ListBasicAccelerateIpEndpointRelations](https://help.aliyun.com/document_detail/466803.html) operation, the accelerated IP address is disassociated from the endpoint.
   * *   The **DeleteBasicAccelerateIpEndpointRelation** API operation cannot be repeatedly called for the same basic GA instance within a period of time.
   * 
   * @param request - DeleteBasicAccelerateIpEndpointRelationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBasicAccelerateIpEndpointRelationResponse
   */
  async deleteBasicAccelerateIpEndpointRelationWithOptions(request: $_model.DeleteBasicAccelerateIpEndpointRelationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteBasicAccelerateIpEndpointRelationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accelerateIpId)) {
      query["AccelerateIpId"] = request.accelerateIpId;
    }

    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteBasicAccelerateIpEndpointRelation",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteBasicAccelerateIpEndpointRelationResponse>(await this.callApi(params, req, runtime), new $_model.DeleteBasicAccelerateIpEndpointRelationResponse({}));
  }

  /**
   * Deletes a mapping between an accelerated IP address and an endpoint for a basic Global Accelerator (GA) instance.
   * 
   * @remarks
   *   **DeleteBasicAccelerateIpEndpointRelation** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the following operations to check whether an accelerated IP address is disassociated from an endpoint:
   *     *   You can call the [GetBasicAccelerateIp](https://help.aliyun.com/document_detail/466794.html) and [ListBasicEndpoints](https://help.aliyun.com/document_detail/466831.html) operations to query the status of an accelerated IP address and an endpoint. If the accelerated IP address and the endpoint are in the **unbinding** state, the accelerated IP address is being disassociated from the endpoint. In this case, you can query the IP address and endpoint but cannot perform other operations.
   *     *   If the association status between the accelerated IP address and the endpoint cannot be queried by calling the [ListBasicAccelerateIpEndpointRelations](https://help.aliyun.com/document_detail/466803.html) operation, the accelerated IP address is disassociated from the endpoint.
   * *   The **DeleteBasicAccelerateIpEndpointRelation** API operation cannot be repeatedly called for the same basic GA instance within a period of time.
   * 
   * @param request - DeleteBasicAccelerateIpEndpointRelationRequest
   * @returns DeleteBasicAccelerateIpEndpointRelationResponse
   */
  async deleteBasicAccelerateIpEndpointRelation(request: $_model.DeleteBasicAccelerateIpEndpointRelationRequest): Promise<$_model.DeleteBasicAccelerateIpEndpointRelationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteBasicAccelerateIpEndpointRelationWithOptions(request, runtime);
  }

  /**
   * Deletes a basic Global Accelerator (GA) instance.
   * 
   * @remarks
   *   You cannot delete subscription basic GA instances. You can unsubscribe from a basic GA instance on the [Unsubscribe](https://usercenter2-intl.aliyun.com/refund/refund) page. Before you unsubscribe from a basic GA instance, make sure that the acceleration areas and endpoint groups of the GA instance are deleted and no bandwidth plans are associated with the GA instance.
   *     *   For information about how to delete an acceleration area, see [DeleteBasicIpSet](https://help.aliyun.com/document_detail/2253388.html).
   *     *   For information about how to delete an endpoint group, see [DeleteBasicEndpointGroup](https://help.aliyun.com/document_detail/2253399.html).
   *     *   For information about how to disassociate a bandwidth plan from a basic GA instance, see [BandwidthPackageRemoveAccelerator](https://help.aliyun.com/document_detail/153240.html).
   * *   Before you call this operation to delete a pay-as-you-go basic GA instance, make sure that all data is migrated and the acceleration areas and endpoint groups of the instance are deleted.
   *     *   For information about how to delete an acceleration area, see [DeleteBasicIpSet](https://help.aliyun.com/document_detail/2253388.html).
   *     *   For information about how to delete an endpoint group, see [DeleteBasicEndpointGroup](https://help.aliyun.com/document_detail/2253399.html).
   * *   **DeleteBasicAccelerator** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetBasicAccelerator](https://help.aliyun.com/document_detail/353188.html) operation to query the status of the task.
   *     *   If the basic GA instance is in the **deleting** state, it indicates that the instance is being deleted. In this case, you can perform only query operations.
   *     *   If the information about the basic GA instance is not displayed in the response, it indicates that the instance is deleted.
   * 
   * @param request - DeleteBasicAcceleratorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBasicAcceleratorResponse
   */
  async deleteBasicAcceleratorWithOptions(request: $_model.DeleteBasicAcceleratorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteBasicAcceleratorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteBasicAccelerator",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteBasicAcceleratorResponse>(await this.callApi(params, req, runtime), new $_model.DeleteBasicAcceleratorResponse({}));
  }

  /**
   * Deletes a basic Global Accelerator (GA) instance.
   * 
   * @remarks
   *   You cannot delete subscription basic GA instances. You can unsubscribe from a basic GA instance on the [Unsubscribe](https://usercenter2-intl.aliyun.com/refund/refund) page. Before you unsubscribe from a basic GA instance, make sure that the acceleration areas and endpoint groups of the GA instance are deleted and no bandwidth plans are associated with the GA instance.
   *     *   For information about how to delete an acceleration area, see [DeleteBasicIpSet](https://help.aliyun.com/document_detail/2253388.html).
   *     *   For information about how to delete an endpoint group, see [DeleteBasicEndpointGroup](https://help.aliyun.com/document_detail/2253399.html).
   *     *   For information about how to disassociate a bandwidth plan from a basic GA instance, see [BandwidthPackageRemoveAccelerator](https://help.aliyun.com/document_detail/153240.html).
   * *   Before you call this operation to delete a pay-as-you-go basic GA instance, make sure that all data is migrated and the acceleration areas and endpoint groups of the instance are deleted.
   *     *   For information about how to delete an acceleration area, see [DeleteBasicIpSet](https://help.aliyun.com/document_detail/2253388.html).
   *     *   For information about how to delete an endpoint group, see [DeleteBasicEndpointGroup](https://help.aliyun.com/document_detail/2253399.html).
   * *   **DeleteBasicAccelerator** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetBasicAccelerator](https://help.aliyun.com/document_detail/353188.html) operation to query the status of the task.
   *     *   If the basic GA instance is in the **deleting** state, it indicates that the instance is being deleted. In this case, you can perform only query operations.
   *     *   If the information about the basic GA instance is not displayed in the response, it indicates that the instance is deleted.
   * 
   * @param request - DeleteBasicAcceleratorRequest
   * @returns DeleteBasicAcceleratorResponse
   */
  async deleteBasicAccelerator(request: $_model.DeleteBasicAcceleratorRequest): Promise<$_model.DeleteBasicAcceleratorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteBasicAcceleratorWithOptions(request, runtime);
  }

  /**
   * Deletes an endpoint that is associated with a basic Global Accelerator (GA) instance.
   * 
   * @remarks
   *   **DeleteBasicEndpoint** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [ListBasicEndpoints](https://help.aliyun.com/document_detail/466831.html) operation to query the status of endpoints.
   *     *   If the endpoint is in the **deleting** state, it indicates that the endpoint is being deleted. In this case, you can perform only query operations.
   *     *   If the endpoint cannot be found, it indicates that the endpoint is deleted.
   * *   The **DeleteBasicEndpoint** API operation cannot be repeatedly called for the same basic GA instance within a period of time.
   * 
   * @param request - DeleteBasicEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBasicEndpointResponse
   */
  async deleteBasicEndpointWithOptions(request: $_model.DeleteBasicEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteBasicEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.endpointGroupId)) {
      query["EndpointGroupId"] = request.endpointGroupId;
    }

    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteBasicEndpoint",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteBasicEndpointResponse>(await this.callApi(params, req, runtime), new $_model.DeleteBasicEndpointResponse({}));
  }

  /**
   * Deletes an endpoint that is associated with a basic Global Accelerator (GA) instance.
   * 
   * @remarks
   *   **DeleteBasicEndpoint** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [ListBasicEndpoints](https://help.aliyun.com/document_detail/466831.html) operation to query the status of endpoints.
   *     *   If the endpoint is in the **deleting** state, it indicates that the endpoint is being deleted. In this case, you can perform only query operations.
   *     *   If the endpoint cannot be found, it indicates that the endpoint is deleted.
   * *   The **DeleteBasicEndpoint** API operation cannot be repeatedly called for the same basic GA instance within a period of time.
   * 
   * @param request - DeleteBasicEndpointRequest
   * @returns DeleteBasicEndpointResponse
   */
  async deleteBasicEndpoint(request: $_model.DeleteBasicEndpointRequest): Promise<$_model.DeleteBasicEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteBasicEndpointWithOptions(request, runtime);
  }

  /**
   * Deletes an endpoint group that is associated with a basic Global Accelerator (GA) instance.
   * 
   * @remarks
   * Before you delete an endpoint group, take note of the following items:
   * *   If an endpoint in the endpoint group is associated with an accelerated IP address, you cannot delete the endpoint group. You can call the [DeleteBasicAccelerateIpEndpointRelation](https://help.aliyun.com/document_detail/2253413.html) operation to disassociate the endpoint from the accelerated IP address.
   * *   If no endpoint in the endpoint group is associated with an accelerated IP address, you can delete the endpoint group. When you delete an endpoint group, all endpoints in the endpoint group are deleted.
   * *   **DeleteBasicEndpointGroup** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetBasicEndpointGroup](https://help.aliyun.com/document_detail/362984.html) operation to query the status of the task.
   *     *   If the endpoint group is in the **deleting** state, the endpoint group is being deleted. In this case, you can perform only query operations.
   *     *   If the endpoint group cannot be queried, the endpoint group is deleted.
   * *   The **DeleteBasicEndpointGroup** operation cannot be repeatedly called for the same GA instance within a specific period of time.
   * 
   * @param request - DeleteBasicEndpointGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBasicEndpointGroupResponse
   */
  async deleteBasicEndpointGroupWithOptions(request: $_model.DeleteBasicEndpointGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteBasicEndpointGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.endpointGroupId)) {
      query["EndpointGroupId"] = request.endpointGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteBasicEndpointGroup",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteBasicEndpointGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteBasicEndpointGroupResponse({}));
  }

  /**
   * Deletes an endpoint group that is associated with a basic Global Accelerator (GA) instance.
   * 
   * @remarks
   * Before you delete an endpoint group, take note of the following items:
   * *   If an endpoint in the endpoint group is associated with an accelerated IP address, you cannot delete the endpoint group. You can call the [DeleteBasicAccelerateIpEndpointRelation](https://help.aliyun.com/document_detail/2253413.html) operation to disassociate the endpoint from the accelerated IP address.
   * *   If no endpoint in the endpoint group is associated with an accelerated IP address, you can delete the endpoint group. When you delete an endpoint group, all endpoints in the endpoint group are deleted.
   * *   **DeleteBasicEndpointGroup** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetBasicEndpointGroup](https://help.aliyun.com/document_detail/362984.html) operation to query the status of the task.
   *     *   If the endpoint group is in the **deleting** state, the endpoint group is being deleted. In this case, you can perform only query operations.
   *     *   If the endpoint group cannot be queried, the endpoint group is deleted.
   * *   The **DeleteBasicEndpointGroup** operation cannot be repeatedly called for the same GA instance within a specific period of time.
   * 
   * @param request - DeleteBasicEndpointGroupRequest
   * @returns DeleteBasicEndpointGroupResponse
   */
  async deleteBasicEndpointGroup(request: $_model.DeleteBasicEndpointGroupRequest): Promise<$_model.DeleteBasicEndpointGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteBasicEndpointGroupWithOptions(request, runtime);
  }

  /**
   * Deletes the acceleration region of a basic Global Accelerator (GA) instance.
   * 
   * @remarks
   *   If an accelerated IP address is associated with an endpoint, you cannot delete the acceleration region. You can call the [DeleteBasicAccelerateIpEndpointRelation](https://help.aliyun.com/document_detail/2253413.html) operation to disassociate the accelerated IP address from the endpoint.
   * *   \\*\\*DeleteBasicIpSet\\*\\* is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetBasicIpSet](https://help.aliyun.com/document_detail/362987.html) operation to query the status of the task.
   *     *   If the acceleration region is in the **deleting** state, it indicates that the acceleration region is being deleted. In this case, you can perform only query operations.
   *     *   If the acceleration region cannot be queried, it indicates that the acceleration region is deleted.
   * *   The \\*\\*DeleteBasicIpSet\\*\\* operation cannot be repeatedly called for the same basic GA instance within a specific period of time.
   * 
   * @param request - DeleteBasicIpSetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBasicIpSetResponse
   */
  async deleteBasicIpSetWithOptions(request: $_model.DeleteBasicIpSetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteBasicIpSetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ipSetId)) {
      query["IpSetId"] = request.ipSetId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteBasicIpSet",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteBasicIpSetResponse>(await this.callApi(params, req, runtime), new $_model.DeleteBasicIpSetResponse({}));
  }

  /**
   * Deletes the acceleration region of a basic Global Accelerator (GA) instance.
   * 
   * @remarks
   *   If an accelerated IP address is associated with an endpoint, you cannot delete the acceleration region. You can call the [DeleteBasicAccelerateIpEndpointRelation](https://help.aliyun.com/document_detail/2253413.html) operation to disassociate the accelerated IP address from the endpoint.
   * *   \\*\\*DeleteBasicIpSet\\*\\* is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetBasicIpSet](https://help.aliyun.com/document_detail/362987.html) operation to query the status of the task.
   *     *   If the acceleration region is in the **deleting** state, it indicates that the acceleration region is being deleted. In this case, you can perform only query operations.
   *     *   If the acceleration region cannot be queried, it indicates that the acceleration region is deleted.
   * *   The \\*\\*DeleteBasicIpSet\\*\\* operation cannot be repeatedly called for the same basic GA instance within a specific period of time.
   * 
   * @param request - DeleteBasicIpSetRequest
   * @returns DeleteBasicIpSetResponse
   */
  async deleteBasicIpSet(request: $_model.DeleteBasicIpSetRequest): Promise<$_model.DeleteBasicIpSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteBasicIpSetWithOptions(request, runtime);
  }

  /**
   * Deletes mappings from an endpoint group that is associated with a custom routing listener.
   * 
   * @remarks
   *   **DeleteCustomRoutingEndpointGroupDestinations** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeCustomRoutingEndpointGroup](https://help.aliyun.com/document_detail/449373.html) to query the status of the task.
   *     *   If the endpoint group is in the **updating** state, it indicates that mappings are being deleted from the endpoint group. In this case, you can perform only query operations.
   *     *   If the endpoint group is in the **active** state and no information about the mappings that you want to delete is found in the response when you call the [DescribeCustomRoutingEndpointGroupDestinations](https://help.aliyun.com/document_detail/449378.html) operation, it indicates the mappings are deleted from the endpoint group.
   * *   You cannot call the **DeleteCustomRoutingEndpointGroupDestinations** operation again on the same Global Accelerator (GA) instance before the previous request is completed.
   * 
   * @param request - DeleteCustomRoutingEndpointGroupDestinationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomRoutingEndpointGroupDestinationsResponse
   */
  async deleteCustomRoutingEndpointGroupDestinationsWithOptions(request: $_model.DeleteCustomRoutingEndpointGroupDestinationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCustomRoutingEndpointGroupDestinationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.destinationIds)) {
      query["DestinationIds"] = request.destinationIds;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.endpointGroupId)) {
      query["EndpointGroupId"] = request.endpointGroupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCustomRoutingEndpointGroupDestinations",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCustomRoutingEndpointGroupDestinationsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCustomRoutingEndpointGroupDestinationsResponse({}));
  }

  /**
   * Deletes mappings from an endpoint group that is associated with a custom routing listener.
   * 
   * @remarks
   *   **DeleteCustomRoutingEndpointGroupDestinations** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeCustomRoutingEndpointGroup](https://help.aliyun.com/document_detail/449373.html) to query the status of the task.
   *     *   If the endpoint group is in the **updating** state, it indicates that mappings are being deleted from the endpoint group. In this case, you can perform only query operations.
   *     *   If the endpoint group is in the **active** state and no information about the mappings that you want to delete is found in the response when you call the [DescribeCustomRoutingEndpointGroupDestinations](https://help.aliyun.com/document_detail/449378.html) operation, it indicates the mappings are deleted from the endpoint group.
   * *   You cannot call the **DeleteCustomRoutingEndpointGroupDestinations** operation again on the same Global Accelerator (GA) instance before the previous request is completed.
   * 
   * @param request - DeleteCustomRoutingEndpointGroupDestinationsRequest
   * @returns DeleteCustomRoutingEndpointGroupDestinationsResponse
   */
  async deleteCustomRoutingEndpointGroupDestinations(request: $_model.DeleteCustomRoutingEndpointGroupDestinationsRequest): Promise<$_model.DeleteCustomRoutingEndpointGroupDestinationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCustomRoutingEndpointGroupDestinationsWithOptions(request, runtime);
  }

  /**
   * Deletes multiple endpoint groups that are associated with a custom routing listener.
   * 
   * @remarks
   *   **DeleteCustomRoutingEndpointGroups** is an asynchronous operation. After you send a request, the system returns a request ID, but the operation is still being performed in the system background. You can call the [DescribeCustomRoutingEndpointGroup](https://help.aliyun.com/document_detail/449373.html) operation to query the state of the endpoint groups associated with a custom routing listener that you attempt to delete.
   *     *   If the endpoint groups are in the **deleting** state, the endpoint groups are being deleted. In this case, you can perform only query operations.
   *     *   If the endpoint groups cannot be queried, the endpoint groups are deleted.
   * *   You cannot use the **DeleteCustomRoutingEndpointGroups** operation on the same Global Accelerator (GA) instance before the previous operation is complete.
   * 
   * @param request - DeleteCustomRoutingEndpointGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomRoutingEndpointGroupsResponse
   */
  async deleteCustomRoutingEndpointGroupsWithOptions(request: $_model.DeleteCustomRoutingEndpointGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCustomRoutingEndpointGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.endpointGroupIds)) {
      query["EndpointGroupIds"] = request.endpointGroupIds;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCustomRoutingEndpointGroups",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCustomRoutingEndpointGroupsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCustomRoutingEndpointGroupsResponse({}));
  }

  /**
   * Deletes multiple endpoint groups that are associated with a custom routing listener.
   * 
   * @remarks
   *   **DeleteCustomRoutingEndpointGroups** is an asynchronous operation. After you send a request, the system returns a request ID, but the operation is still being performed in the system background. You can call the [DescribeCustomRoutingEndpointGroup](https://help.aliyun.com/document_detail/449373.html) operation to query the state of the endpoint groups associated with a custom routing listener that you attempt to delete.
   *     *   If the endpoint groups are in the **deleting** state, the endpoint groups are being deleted. In this case, you can perform only query operations.
   *     *   If the endpoint groups cannot be queried, the endpoint groups are deleted.
   * *   You cannot use the **DeleteCustomRoutingEndpointGroups** operation on the same Global Accelerator (GA) instance before the previous operation is complete.
   * 
   * @param request - DeleteCustomRoutingEndpointGroupsRequest
   * @returns DeleteCustomRoutingEndpointGroupsResponse
   */
  async deleteCustomRoutingEndpointGroups(request: $_model.DeleteCustomRoutingEndpointGroupsRequest): Promise<$_model.DeleteCustomRoutingEndpointGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCustomRoutingEndpointGroupsWithOptions(request, runtime);
  }

  /**
   * Deletes traffic destinations from an endpoint.
   * 
   * @remarks
   *   **DeleteCustomRoutingEndpointTrafficPolicies** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [DescribeCustomRoutingEndpointGroup](https://help.aliyun.com/document_detail/449373.html) operation to query the status of an endpoint group to check whether the traffic destinations are deleted.
   *     *   If the endpoint group is in the **updating** state, the traffic destinations are being deleted. In this case, you can perform only query operations.
   *     *   If the endpoint group is in the **active** state and the traffic destinations that you want to delete cannot be queried by calling the [DescribeCustomRoutingEndPointTrafficPolicy](https://help.aliyun.com/document_detail/449392.html) operation, the traffic destinations are deleted.
   * *   The **DeleteCustomRoutingEndpointTrafficPolicies** operation cannot be repeatedly called for the same Global Accelerator (GA) instance within a specific period of time.
   * 
   * @param request - DeleteCustomRoutingEndpointTrafficPoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomRoutingEndpointTrafficPoliciesResponse
   */
  async deleteCustomRoutingEndpointTrafficPoliciesWithOptions(request: $_model.DeleteCustomRoutingEndpointTrafficPoliciesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCustomRoutingEndpointTrafficPoliciesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!$dara.isNull(request.policyIds)) {
      query["PolicyIds"] = request.policyIds;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCustomRoutingEndpointTrafficPolicies",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCustomRoutingEndpointTrafficPoliciesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCustomRoutingEndpointTrafficPoliciesResponse({}));
  }

  /**
   * Deletes traffic destinations from an endpoint.
   * 
   * @remarks
   *   **DeleteCustomRoutingEndpointTrafficPolicies** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [DescribeCustomRoutingEndpointGroup](https://help.aliyun.com/document_detail/449373.html) operation to query the status of an endpoint group to check whether the traffic destinations are deleted.
   *     *   If the endpoint group is in the **updating** state, the traffic destinations are being deleted. In this case, you can perform only query operations.
   *     *   If the endpoint group is in the **active** state and the traffic destinations that you want to delete cannot be queried by calling the [DescribeCustomRoutingEndPointTrafficPolicy](https://help.aliyun.com/document_detail/449392.html) operation, the traffic destinations are deleted.
   * *   The **DeleteCustomRoutingEndpointTrafficPolicies** operation cannot be repeatedly called for the same Global Accelerator (GA) instance within a specific period of time.
   * 
   * @param request - DeleteCustomRoutingEndpointTrafficPoliciesRequest
   * @returns DeleteCustomRoutingEndpointTrafficPoliciesResponse
   */
  async deleteCustomRoutingEndpointTrafficPolicies(request: $_model.DeleteCustomRoutingEndpointTrafficPoliciesRequest): Promise<$_model.DeleteCustomRoutingEndpointTrafficPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCustomRoutingEndpointTrafficPoliciesWithOptions(request, runtime);
  }

  /**
   * Deletes endpoints from a custom routing listener.
   * 
   * @remarks
   *   **DeleteCustomRoutingEndpoints** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeCustomRoutingEndpointGroup](https://help.aliyun.com/document_detail/449373.html) to query the status of the task.
   *     *   If an endpoint group is in the **updating** state, the endpoint is being deleted. In this case, you can perform only query operations.
   *     *   If an endpoint group is in the **active** state and the endpoint cannot be found after you call the [DescribeCustomRoutingEndpoint](https://help.aliyun.com/document_detail/449386.html) operation, the endpoint is deleted.
   * *   You cannot call the **DeleteCustomRoutingEndpoints** operation again on the same Global Accelerator (GA) instance before the previous task is completed.
   * 
   * @param request - DeleteCustomRoutingEndpointsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomRoutingEndpointsResponse
   */
  async deleteCustomRoutingEndpointsWithOptions(request: $_model.DeleteCustomRoutingEndpointsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCustomRoutingEndpointsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.endpointGroupId)) {
      query["EndpointGroupId"] = request.endpointGroupId;
    }

    if (!$dara.isNull(request.endpointIds)) {
      query["EndpointIds"] = request.endpointIds;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCustomRoutingEndpoints",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCustomRoutingEndpointsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCustomRoutingEndpointsResponse({}));
  }

  /**
   * Deletes endpoints from a custom routing listener.
   * 
   * @remarks
   *   **DeleteCustomRoutingEndpoints** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeCustomRoutingEndpointGroup](https://help.aliyun.com/document_detail/449373.html) to query the status of the task.
   *     *   If an endpoint group is in the **updating** state, the endpoint is being deleted. In this case, you can perform only query operations.
   *     *   If an endpoint group is in the **active** state and the endpoint cannot be found after you call the [DescribeCustomRoutingEndpoint](https://help.aliyun.com/document_detail/449386.html) operation, the endpoint is deleted.
   * *   You cannot call the **DeleteCustomRoutingEndpoints** operation again on the same Global Accelerator (GA) instance before the previous task is completed.
   * 
   * @param request - DeleteCustomRoutingEndpointsRequest
   * @returns DeleteCustomRoutingEndpointsResponse
   */
  async deleteCustomRoutingEndpoints(request: $_model.DeleteCustomRoutingEndpointsRequest): Promise<$_model.DeleteCustomRoutingEndpointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCustomRoutingEndpointsWithOptions(request, runtime);
  }

  /**
   * Disassociates a domain name from Global Accelerator (GA) instances.
   * 
   * @remarks
   * You cannot call the **DeleteDomainAcceleratorRelation** operation again by using the same Alibaba Cloud account before the previous operation is complete.
   * 
   * @param request - DeleteDomainAcceleratorRelationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDomainAcceleratorRelationResponse
   */
  async deleteDomainAcceleratorRelationWithOptions(request: $_model.DeleteDomainAcceleratorRelationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDomainAcceleratorRelationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorIds)) {
      query["AcceleratorIds"] = request.acceleratorIds;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDomainAcceleratorRelation",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDomainAcceleratorRelationResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDomainAcceleratorRelationResponse({}));
  }

  /**
   * Disassociates a domain name from Global Accelerator (GA) instances.
   * 
   * @remarks
   * You cannot call the **DeleteDomainAcceleratorRelation** operation again by using the same Alibaba Cloud account before the previous operation is complete.
   * 
   * @param request - DeleteDomainAcceleratorRelationRequest
   * @returns DeleteDomainAcceleratorRelationResponse
   */
  async deleteDomainAcceleratorRelation(request: $_model.DeleteDomainAcceleratorRelationRequest): Promise<$_model.DeleteDomainAcceleratorRelationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDomainAcceleratorRelationWithOptions(request, runtime);
  }

  /**
   * Deletes an endpoint group.
   * 
   * @remarks
   *   **DeleteEndpointGroup** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeEndpointGroup](https://help.aliyun.com/document_detail/153260.html) operation to query the status of the endpoint group.
   *     *   If the endpoint group is in the **deleting** state, it indicates that the endpoint group is being deleted. In this case, you can perform only query operations.
   *     *   If the endpoint group cannot be queried, it indicates that the endpoint group is deleted.
   * *   The **DeleteEndpointGroup** operation holds an exclusive lock on the Global Accelerator (GA) instance. While the operation is in progress, you cannot call the same operation in the same Alibaba Cloud account.
   * 
   * @param request - DeleteEndpointGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEndpointGroupResponse
   */
  async deleteEndpointGroupWithOptions(request: $_model.DeleteEndpointGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEndpointGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.endpointGroupId)) {
      query["EndpointGroupId"] = request.endpointGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEndpointGroup",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEndpointGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEndpointGroupResponse({}));
  }

  /**
   * Deletes an endpoint group.
   * 
   * @remarks
   *   **DeleteEndpointGroup** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeEndpointGroup](https://help.aliyun.com/document_detail/153260.html) operation to query the status of the endpoint group.
   *     *   If the endpoint group is in the **deleting** state, it indicates that the endpoint group is being deleted. In this case, you can perform only query operations.
   *     *   If the endpoint group cannot be queried, it indicates that the endpoint group is deleted.
   * *   The **DeleteEndpointGroup** operation holds an exclusive lock on the Global Accelerator (GA) instance. While the operation is in progress, you cannot call the same operation in the same Alibaba Cloud account.
   * 
   * @param request - DeleteEndpointGroupRequest
   * @returns DeleteEndpointGroupResponse
   */
  async deleteEndpointGroup(request: $_model.DeleteEndpointGroupRequest): Promise<$_model.DeleteEndpointGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEndpointGroupWithOptions(request, runtime);
  }

  /**
   * Deletes endpoint groups.
   * 
   * @remarks
   *   **DeleteEndpointGroups** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeEndpointGroup](https://help.aliyun.com/document_detail/153260.html) operation to query the status of the task.
   *     *   If an endpoint group is in the **deleting** state, the endpoint group is being deleted. In this case, you can perform only query operations.
   *     *   If an endpoint group cannot be queried, the endpoint group is deleted.
   * *   The **DeleteEndpointGroups** operation cannot be repeatedly called for the same Global Accelerator (GA) instance within a specific period of time.
   * 
   * @param request - DeleteEndpointGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEndpointGroupsResponse
   */
  async deleteEndpointGroupsWithOptions(request: $_model.DeleteEndpointGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEndpointGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.endpointGroupIds)) {
      query["EndpointGroupIds"] = request.endpointGroupIds;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEndpointGroups",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEndpointGroupsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEndpointGroupsResponse({}));
  }

  /**
   * Deletes endpoint groups.
   * 
   * @remarks
   *   **DeleteEndpointGroups** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeEndpointGroup](https://help.aliyun.com/document_detail/153260.html) operation to query the status of the task.
   *     *   If an endpoint group is in the **deleting** state, the endpoint group is being deleted. In this case, you can perform only query operations.
   *     *   If an endpoint group cannot be queried, the endpoint group is deleted.
   * *   The **DeleteEndpointGroups** operation cannot be repeatedly called for the same Global Accelerator (GA) instance within a specific period of time.
   * 
   * @param request - DeleteEndpointGroupsRequest
   * @returns DeleteEndpointGroupsResponse
   */
  async deleteEndpointGroups(request: $_model.DeleteEndpointGroupsRequest): Promise<$_model.DeleteEndpointGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEndpointGroupsWithOptions(request, runtime);
  }

  /**
   * Deletes forwarding rules.
   * 
   * @remarks
   *   **DeleteForwardingRules** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListForwardingRules](https://help.aliyun.com/document_detail/205817.html) operation to query the status of the task.
   *     *   If a forwarding rule is in the **deleting** state, the forwarding rule is being deleted. In this case, you can perform only query operations.
   *     *   If a forwarding rule cannot be queried, the forwarding rule is deleted.
   * *   The **DeleteForwardingRules** operation cannot be repeatedly called for the same Global Accelerator (GA) instance within a specific period of time.
   * 
   * @param request - DeleteForwardingRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteForwardingRulesResponse
   */
  async deleteForwardingRulesWithOptions(request: $_model.DeleteForwardingRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteForwardingRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.forwardingRuleIds)) {
      query["ForwardingRuleIds"] = request.forwardingRuleIds;
    }

    if (!$dara.isNull(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteForwardingRules",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteForwardingRulesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteForwardingRulesResponse({}));
  }

  /**
   * Deletes forwarding rules.
   * 
   * @remarks
   *   **DeleteForwardingRules** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListForwardingRules](https://help.aliyun.com/document_detail/205817.html) operation to query the status of the task.
   *     *   If a forwarding rule is in the **deleting** state, the forwarding rule is being deleted. In this case, you can perform only query operations.
   *     *   If a forwarding rule cannot be queried, the forwarding rule is deleted.
   * *   The **DeleteForwardingRules** operation cannot be repeatedly called for the same Global Accelerator (GA) instance within a specific period of time.
   * 
   * @param request - DeleteForwardingRulesRequest
   * @returns DeleteForwardingRulesResponse
   */
  async deleteForwardingRules(request: $_model.DeleteForwardingRulesRequest): Promise<$_model.DeleteForwardingRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteForwardingRulesWithOptions(request, runtime);
  }

  /**
   * Deletes an acceleration region.
   * 
   * @remarks
   *   **DeleteIpSet** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeIpSet](https://help.aliyun.com/document_detail/153246.html) operation to query the status of an acceleration region.
   *     *   If the acceleration region is in the **deleting** state, it indicates that the acceleration region is being deleted. In this case, you can perform only query operations.
   *     *   If the acceleration region cannot be queried, it indicates that the acceleration region is deleted.
   * *   The **DeleteIpSet** operation holds an exclusive lock on the Global Accelerator (GA) instance. While the operation is in progress, you cannot call the same operation in the same Alibaba Cloud account.
   * 
   * @param request - DeleteIpSetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIpSetResponse
   */
  async deleteIpSetWithOptions(request: $_model.DeleteIpSetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteIpSetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ipSetId)) {
      query["IpSetId"] = request.ipSetId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteIpSet",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteIpSetResponse>(await this.callApi(params, req, runtime), new $_model.DeleteIpSetResponse({}));
  }

  /**
   * Deletes an acceleration region.
   * 
   * @remarks
   *   **DeleteIpSet** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeIpSet](https://help.aliyun.com/document_detail/153246.html) operation to query the status of an acceleration region.
   *     *   If the acceleration region is in the **deleting** state, it indicates that the acceleration region is being deleted. In this case, you can perform only query operations.
   *     *   If the acceleration region cannot be queried, it indicates that the acceleration region is deleted.
   * *   The **DeleteIpSet** operation holds an exclusive lock on the Global Accelerator (GA) instance. While the operation is in progress, you cannot call the same operation in the same Alibaba Cloud account.
   * 
   * @param request - DeleteIpSetRequest
   * @returns DeleteIpSetResponse
   */
  async deleteIpSet(request: $_model.DeleteIpSetRequest): Promise<$_model.DeleteIpSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteIpSetWithOptions(request, runtime);
  }

  /**
   * Deletes acceleration regions.
   * 
   * @remarks
   *   **DeleteIpSets** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeIpSet](https://help.aliyun.com/document_detail/153246.html) operation to query the status of the task.
   *     *   If the acceleration region is in the **deleting** state, the acceleration region is being deleted. In this case, you can perform only query operations.
   *     *   If you cannot query the acceleration region, the acceleration region is deleted.
   * *   You cannot repeatedly call the **DeleteIpSets** operation for the same Global Accelerator (GA) instance within a specific period of time.
   * 
   * @param request - DeleteIpSetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIpSetsResponse
   */
  async deleteIpSetsWithOptions(request: $_model.DeleteIpSetsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteIpSetsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ipSetIds)) {
      query["IpSetIds"] = request.ipSetIds;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteIpSets",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteIpSetsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteIpSetsResponse({}));
  }

  /**
   * Deletes acceleration regions.
   * 
   * @remarks
   *   **DeleteIpSets** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeIpSet](https://help.aliyun.com/document_detail/153246.html) operation to query the status of the task.
   *     *   If the acceleration region is in the **deleting** state, the acceleration region is being deleted. In this case, you can perform only query operations.
   *     *   If you cannot query the acceleration region, the acceleration region is deleted.
   * *   You cannot repeatedly call the **DeleteIpSets** operation for the same Global Accelerator (GA) instance within a specific period of time.
   * 
   * @param request - DeleteIpSetsRequest
   * @returns DeleteIpSetsResponse
   */
  async deleteIpSets(request: $_model.DeleteIpSetsRequest): Promise<$_model.DeleteIpSetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteIpSetsWithOptions(request, runtime);
  }

  /**
   * Deletes a listener.
   * 
   * @remarks
   *   Before you call the **DeleteListener** operation, make sure that no endpoint groups are associated with the listener that you want to delete. For information about how to delete an endpoint group, see the following topics:
   *     *   [DeleteEndpointGroup](https://help.aliyun.com/document_detail/2253305.html): deletes an endpoint group that is associated with an intelligent routing listener.
   *     *   [DeleteEndpointGroups](https://help.aliyun.com/document_detail/2253311.html): deletes multiple endpoint groups that are associated with intelligent routing listeners at the same time.
   *     *   [DeleteCustomRoutingEndpointGroups](https://help.aliyun.com/document_detail/2303183.html): deletes multiple endpoint groups that are associated with custom routing listeners at the same time.
   * *   **DeleteListener** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [DescribeListener](https://help.aliyun.com/document_detail/153254.html) operation to query the status of the listener.
   *     *   If the listener is in the **deleting** state, the listener is being deleted. In this case, you can perform only query operations.
   *     *   If the listener cannot be queried, the listener is deleted.
   * *   You cannot repeatedly call the **DeleteListener** operation to delete the listeners of the same Global Accelerator (GA) instance within a specific period of time.
   * 
   * @param request - DeleteListenerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteListenerResponse
   */
  async deleteListenerWithOptions(request: $_model.DeleteListenerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteListenerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteListener",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteListenerResponse>(await this.callApi(params, req, runtime), new $_model.DeleteListenerResponse({}));
  }

  /**
   * Deletes a listener.
   * 
   * @remarks
   *   Before you call the **DeleteListener** operation, make sure that no endpoint groups are associated with the listener that you want to delete. For information about how to delete an endpoint group, see the following topics:
   *     *   [DeleteEndpointGroup](https://help.aliyun.com/document_detail/2253305.html): deletes an endpoint group that is associated with an intelligent routing listener.
   *     *   [DeleteEndpointGroups](https://help.aliyun.com/document_detail/2253311.html): deletes multiple endpoint groups that are associated with intelligent routing listeners at the same time.
   *     *   [DeleteCustomRoutingEndpointGroups](https://help.aliyun.com/document_detail/2303183.html): deletes multiple endpoint groups that are associated with custom routing listeners at the same time.
   * *   **DeleteListener** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [DescribeListener](https://help.aliyun.com/document_detail/153254.html) operation to query the status of the listener.
   *     *   If the listener is in the **deleting** state, the listener is being deleted. In this case, you can perform only query operations.
   *     *   If the listener cannot be queried, the listener is deleted.
   * *   You cannot repeatedly call the **DeleteListener** operation to delete the listeners of the same Global Accelerator (GA) instance within a specific period of time.
   * 
   * @param request - DeleteListenerRequest
   * @returns DeleteListenerResponse
   */
  async deleteListener(request: $_model.DeleteListenerRequest): Promise<$_model.DeleteListenerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteListenerWithOptions(request, runtime);
  }

  /**
   * Deletes the secondary IP addresses that are associated with a CNAME.
   * 
   * @remarks
   *   **DeleteSpareIps** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeAccelerator](https://help.aliyun.com/document_detail/153235.html) operation to query the status of a GA instance.
   *     *   If the GA instance is in the **configuring** state, it indicates that the secondary IP addresses for the CNAME are being deleted. In this case, you can perform only query operations.
   *     *   If the GA instance is in the **active** state and the secondary IP addresses for the CNAME cannot be queried by calling the [ListSpareIps](https://help.aliyun.com/document_detail/262121.html) operation, it indicates that the IP addresses are deleted.
   * *   The **DeleteSpareIps** operation holds an exclusive lock on the GA instance. While the operation is in progress, you cannot call the same operation in the same Alibaba Cloud account.
   * 
   * @param request - DeleteSpareIpsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSpareIpsResponse
   */
  async deleteSpareIpsWithOptions(request: $_model.DeleteSpareIpsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSpareIpsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
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

    if (!$dara.isNull(request.spareIps)) {
      query["SpareIps"] = request.spareIps;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSpareIps",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSpareIpsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSpareIpsResponse({}));
  }

  /**
   * Deletes the secondary IP addresses that are associated with a CNAME.
   * 
   * @remarks
   *   **DeleteSpareIps** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeAccelerator](https://help.aliyun.com/document_detail/153235.html) operation to query the status of a GA instance.
   *     *   If the GA instance is in the **configuring** state, it indicates that the secondary IP addresses for the CNAME are being deleted. In this case, you can perform only query operations.
   *     *   If the GA instance is in the **active** state and the secondary IP addresses for the CNAME cannot be queried by calling the [ListSpareIps](https://help.aliyun.com/document_detail/262121.html) operation, it indicates that the IP addresses are deleted.
   * *   The **DeleteSpareIps** operation holds an exclusive lock on the GA instance. While the operation is in progress, you cannot call the same operation in the same Alibaba Cloud account.
   * 
   * @param request - DeleteSpareIpsRequest
   * @returns DeleteSpareIpsResponse
   */
  async deleteSpareIps(request: $_model.DeleteSpareIpsRequest): Promise<$_model.DeleteSpareIpsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSpareIpsWithOptions(request, runtime);
  }

  /**
   * Queries information about a Global Accelerator (GA) instance.
   * 
   * @param request - DescribeAcceleratorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAcceleratorResponse
   */
  async describeAcceleratorWithOptions(request: $_model.DescribeAcceleratorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAcceleratorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAccelerator",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAcceleratorResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAcceleratorResponse({}));
  }

  /**
   * Queries information about a Global Accelerator (GA) instance.
   * 
   * @param request - DescribeAcceleratorRequest
   * @returns DescribeAcceleratorResponse
   */
  async describeAccelerator(request: $_model.DescribeAcceleratorRequest): Promise<$_model.DescribeAcceleratorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAcceleratorWithOptions(request, runtime);
  }

  /**
   * Queries the auto-renewal status of a Global Accelerator (GA) instance.
   * 
   * @param request - DescribeAcceleratorAutoRenewAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAcceleratorAutoRenewAttributeResponse
   */
  async describeAcceleratorAutoRenewAttributeWithOptions(request: $_model.DescribeAcceleratorAutoRenewAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAcceleratorAutoRenewAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAcceleratorAutoRenewAttribute",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAcceleratorAutoRenewAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAcceleratorAutoRenewAttributeResponse({}));
  }

  /**
   * Queries the auto-renewal status of a Global Accelerator (GA) instance.
   * 
   * @param request - DescribeAcceleratorAutoRenewAttributeRequest
   * @returns DescribeAcceleratorAutoRenewAttributeResponse
   */
  async describeAcceleratorAutoRenewAttribute(request: $_model.DescribeAcceleratorAutoRenewAttributeRequest): Promise<$_model.DescribeAcceleratorAutoRenewAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAcceleratorAutoRenewAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the status of a pay-as-you-go Global Accelerator (GA) instance.
   * 
   * @param request - DescribeAcceleratorServiceStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAcceleratorServiceStatusResponse
   */
  async describeAcceleratorServiceStatusWithOptions(request: $_model.DescribeAcceleratorServiceStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAcceleratorServiceStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAcceleratorServiceStatus",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAcceleratorServiceStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAcceleratorServiceStatusResponse({}));
  }

  /**
   * Queries the status of a pay-as-you-go Global Accelerator (GA) instance.
   * 
   * @param request - DescribeAcceleratorServiceStatusRequest
   * @returns DescribeAcceleratorServiceStatusResponse
   */
  async describeAcceleratorServiceStatus(request: $_model.DescribeAcceleratorServiceStatusRequest): Promise<$_model.DescribeAcceleratorServiceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAcceleratorServiceStatusWithOptions(request, runtime);
  }

  /**
   * Queries the detailed information about an origin probing task.
   * 
   * @param request - DescribeApplicationMonitorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApplicationMonitorResponse
   */
  async describeApplicationMonitorWithOptions(request: $_model.DescribeApplicationMonitorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApplicationMonitorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApplicationMonitor",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApplicationMonitorResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApplicationMonitorResponse({}));
  }

  /**
   * Queries the detailed information about an origin probing task.
   * 
   * @param request - DescribeApplicationMonitorRequest
   * @returns DescribeApplicationMonitorResponse
   */
  async describeApplicationMonitor(request: $_model.DescribeApplicationMonitorRequest): Promise<$_model.DescribeApplicationMonitorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApplicationMonitorWithOptions(request, runtime);
  }

  /**
   * Queries information about a bandwidth plan.
   * 
   * @param request - DescribeBandwidthPackageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBandwidthPackageResponse
   */
  async describeBandwidthPackageWithOptions(request: $_model.DescribeBandwidthPackageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBandwidthPackageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bandwidthPackageId)) {
      query["BandwidthPackageId"] = request.bandwidthPackageId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBandwidthPackage",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBandwidthPackageResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBandwidthPackageResponse({}));
  }

  /**
   * Queries information about a bandwidth plan.
   * 
   * @param request - DescribeBandwidthPackageRequest
   * @returns DescribeBandwidthPackageResponse
   */
  async describeBandwidthPackage(request: $_model.DescribeBandwidthPackageRequest): Promise<$_model.DescribeBandwidthPackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBandwidthPackageWithOptions(request, runtime);
  }

  /**
   * Queries the auto-renewal status of a bandwidth plan.
   * 
   * @param request - DescribeBandwidthPackageAutoRenewAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBandwidthPackageAutoRenewAttributeResponse
   */
  async describeBandwidthPackageAutoRenewAttributeWithOptions(request: $_model.DescribeBandwidthPackageAutoRenewAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBandwidthPackageAutoRenewAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBandwidthPackageAutoRenewAttribute",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBandwidthPackageAutoRenewAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBandwidthPackageAutoRenewAttributeResponse({}));
  }

  /**
   * Queries the auto-renewal status of a bandwidth plan.
   * 
   * @param request - DescribeBandwidthPackageAutoRenewAttributeRequest
   * @returns DescribeBandwidthPackageAutoRenewAttributeResponse
   */
  async describeBandwidthPackageAutoRenewAttribute(request: $_model.DescribeBandwidthPackageAutoRenewAttributeRequest): Promise<$_model.DescribeBandwidthPackageAutoRenewAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBandwidthPackageAutoRenewAttributeWithOptions(request, runtime);
  }

  /**
   * Queries information about commodities.
   * 
   * @param request - DescribeCommodityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCommodityResponse
   */
  async describeCommodityWithOptions(request: $_model.DescribeCommodityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCommodityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.commodityCode)) {
      query["CommodityCode"] = request.commodityCode;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCommodity",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCommodityResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCommodityResponse({}));
  }

  /**
   * Queries information about commodities.
   * 
   * @param request - DescribeCommodityRequest
   * @returns DescribeCommodityResponse
   */
  async describeCommodity(request: $_model.DescribeCommodityRequest): Promise<$_model.DescribeCommodityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCommodityWithOptions(request, runtime);
  }

  /**
   * Queries the prices of commodities.
   * 
   * @remarks
   * You can call the [DescribeCommodity](https://help.aliyun.com/document_detail/2253233.html) operation to query information about the commodity modules.
   * 
   * @param request - DescribeCommodityPriceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCommodityPriceResponse
   */
  async describeCommodityPriceWithOptions(request: $_model.DescribeCommodityPriceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCommodityPriceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orders)) {
      query["Orders"] = request.orders;
    }

    if (!$dara.isNull(request.promotionOptionNo)) {
      query["PromotionOptionNo"] = request.promotionOptionNo;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCommodityPrice",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCommodityPriceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCommodityPriceResponse({}));
  }

  /**
   * Queries the prices of commodities.
   * 
   * @remarks
   * You can call the [DescribeCommodity](https://help.aliyun.com/document_detail/2253233.html) operation to query information about the commodity modules.
   * 
   * @param request - DescribeCommodityPriceRequest
   * @returns DescribeCommodityPriceResponse
   */
  async describeCommodityPrice(request: $_model.DescribeCommodityPriceRequest): Promise<$_model.DescribeCommodityPriceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCommodityPriceWithOptions(request, runtime);
  }

  /**
   * Queries a traffic destination of an endpoint.
   * 
   * @param request - DescribeCustomRoutingEndPointTrafficPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCustomRoutingEndPointTrafficPolicyResponse
   */
  async describeCustomRoutingEndPointTrafficPolicyWithOptions(request: $_model.DescribeCustomRoutingEndPointTrafficPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCustomRoutingEndPointTrafficPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCustomRoutingEndPointTrafficPolicy",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCustomRoutingEndPointTrafficPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCustomRoutingEndPointTrafficPolicyResponse({}));
  }

  /**
   * Queries a traffic destination of an endpoint.
   * 
   * @param request - DescribeCustomRoutingEndPointTrafficPolicyRequest
   * @returns DescribeCustomRoutingEndPointTrafficPolicyResponse
   */
  async describeCustomRoutingEndPointTrafficPolicy(request: $_model.DescribeCustomRoutingEndPointTrafficPolicyRequest): Promise<$_model.DescribeCustomRoutingEndPointTrafficPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCustomRoutingEndPointTrafficPolicyWithOptions(request, runtime);
  }

  /**
   * Queries a specified endpoint that is associated with a custom routing listener.
   * 
   * @param request - DescribeCustomRoutingEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCustomRoutingEndpointResponse
   */
  async describeCustomRoutingEndpointWithOptions(request: $_model.DescribeCustomRoutingEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCustomRoutingEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endpointGroup)) {
      query["EndpointGroup"] = request.endpointGroup;
    }

    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCustomRoutingEndpoint",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCustomRoutingEndpointResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCustomRoutingEndpointResponse({}));
  }

  /**
   * Queries a specified endpoint that is associated with a custom routing listener.
   * 
   * @param request - DescribeCustomRoutingEndpointRequest
   * @returns DescribeCustomRoutingEndpointResponse
   */
  async describeCustomRoutingEndpoint(request: $_model.DescribeCustomRoutingEndpointRequest): Promise<$_model.DescribeCustomRoutingEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCustomRoutingEndpointWithOptions(request, runtime);
  }

  /**
   * Queries the information about a specific endpoint group that is associated with a custom routing listener.
   * 
   * @param request - DescribeCustomRoutingEndpointGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCustomRoutingEndpointGroupResponse
   */
  async describeCustomRoutingEndpointGroupWithOptions(request: $_model.DescribeCustomRoutingEndpointGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCustomRoutingEndpointGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endpointGroupId)) {
      query["EndpointGroupId"] = request.endpointGroupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCustomRoutingEndpointGroup",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCustomRoutingEndpointGroupResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCustomRoutingEndpointGroupResponse({}));
  }

  /**
   * Queries the information about a specific endpoint group that is associated with a custom routing listener.
   * 
   * @param request - DescribeCustomRoutingEndpointGroupRequest
   * @returns DescribeCustomRoutingEndpointGroupResponse
   */
  async describeCustomRoutingEndpointGroup(request: $_model.DescribeCustomRoutingEndpointGroupRequest): Promise<$_model.DescribeCustomRoutingEndpointGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCustomRoutingEndpointGroupWithOptions(request, runtime);
  }

  /**
   * Queries the mapping configuration of a specified endpoint group that is associated with a custom routing listener.
   * 
   * @param request - DescribeCustomRoutingEndpointGroupDestinationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCustomRoutingEndpointGroupDestinationsResponse
   */
  async describeCustomRoutingEndpointGroupDestinationsWithOptions(request: $_model.DescribeCustomRoutingEndpointGroupDestinationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCustomRoutingEndpointGroupDestinationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.destinationId)) {
      query["DestinationId"] = request.destinationId;
    }

    if (!$dara.isNull(request.endpointGroupId)) {
      query["EndpointGroupId"] = request.endpointGroupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCustomRoutingEndpointGroupDestinations",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCustomRoutingEndpointGroupDestinationsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCustomRoutingEndpointGroupDestinationsResponse({}));
  }

  /**
   * Queries the mapping configuration of a specified endpoint group that is associated with a custom routing listener.
   * 
   * @param request - DescribeCustomRoutingEndpointGroupDestinationsRequest
   * @returns DescribeCustomRoutingEndpointGroupDestinationsResponse
   */
  async describeCustomRoutingEndpointGroupDestinations(request: $_model.DescribeCustomRoutingEndpointGroupDestinationsRequest): Promise<$_model.DescribeCustomRoutingEndpointGroupDestinationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCustomRoutingEndpointGroupDestinationsWithOptions(request, runtime);
  }

  /**
   * Queries information about an endpoint group.
   * 
   * @param request - DescribeEndpointGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEndpointGroupResponse
   */
  async describeEndpointGroupWithOptions(request: $_model.DescribeEndpointGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEndpointGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endpointGroupId)) {
      query["EndpointGroupId"] = request.endpointGroupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEndpointGroup",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEndpointGroupResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEndpointGroupResponse({}));
  }

  /**
   * Queries information about an endpoint group.
   * 
   * @param request - DescribeEndpointGroupRequest
   * @returns DescribeEndpointGroupResponse
   */
  async describeEndpointGroup(request: $_model.DescribeEndpointGroupRequest): Promise<$_model.DescribeEndpointGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEndpointGroupWithOptions(request, runtime);
  }

  /**
   * Queries information about an acceleration region.
   * 
   * @param request - DescribeIpSetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeIpSetResponse
   */
  async describeIpSetWithOptions(request: $_model.DescribeIpSetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeIpSetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ipSetId)) {
      query["IpSetId"] = request.ipSetId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeIpSet",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeIpSetResponse>(await this.callApi(params, req, runtime), new $_model.DescribeIpSetResponse({}));
  }

  /**
   * Queries information about an acceleration region.
   * 
   * @param request - DescribeIpSetRequest
   * @returns DescribeIpSetResponse
   */
  async describeIpSet(request: $_model.DescribeIpSetRequest): Promise<$_model.DescribeIpSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeIpSetWithOptions(request, runtime);
  }

  /**
   * Queries configuration information about a listener of a Global Accelerator (GA) instance.
   * 
   * @remarks
   * This operation is used to query configuration information about a listener of a GA instance. The information includes the routing type of the listener, the status of the listener, the timestamp that indicates when the listener was created, and the listener ports.
   * 
   * @param request - DescribeListenerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeListenerResponse
   */
  async describeListenerWithOptions(request: $_model.DescribeListenerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeListenerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeListener",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeListenerResponse>(await this.callApi(params, req, runtime), new $_model.DescribeListenerResponse({}));
  }

  /**
   * Queries configuration information about a listener of a Global Accelerator (GA) instance.
   * 
   * @remarks
   * This operation is used to query configuration information about a listener of a GA instance. The information includes the routing type of the listener, the status of the listener, the timestamp that indicates when the listener was created, and the listener ports.
   * 
   * @param request - DescribeListenerRequest
   * @returns DescribeListenerResponse
   */
  async describeListener(request: $_model.DescribeListenerRequest): Promise<$_model.DescribeListenerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeListenerWithOptions(request, runtime);
  }

  /**
   * Queries the Simple Log Service project and Logstore associated with an endpoint group.
   * 
   * @param request - DescribeLogStoreOfEndpointGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLogStoreOfEndpointGroupResponse
   */
  async describeLogStoreOfEndpointGroupWithOptions(request: $_model.DescribeLogStoreOfEndpointGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLogStoreOfEndpointGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.endpointGroupId)) {
      query["EndpointGroupId"] = request.endpointGroupId;
    }

    if (!$dara.isNull(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLogStoreOfEndpointGroup",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLogStoreOfEndpointGroupResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLogStoreOfEndpointGroupResponse({}));
  }

  /**
   * Queries the Simple Log Service project and Logstore associated with an endpoint group.
   * 
   * @param request - DescribeLogStoreOfEndpointGroupRequest
   * @returns DescribeLogStoreOfEndpointGroupResponse
   */
  async describeLogStoreOfEndpointGroup(request: $_model.DescribeLogStoreOfEndpointGroupRequest): Promise<$_model.DescribeLogStoreOfEndpointGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLogStoreOfEndpointGroupWithOptions(request, runtime);
  }

  /**
   * Queries the regions where Global Accelerator (GA) instances are deployed.
   * 
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: $_model.DescribeRegionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRegionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2019-11-20",
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
   * Queries the regions where Global Accelerator (GA) instances are deployed.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: $_model.DescribeRegionsRequest): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Disassociates a Global Accelerator (GA) instance from an Anti-DDoS Pro or Anti-DDoS Premium instance.
   * 
   * @remarks
   *   The **DetachDdosFromAccelerator** operation is asynchronous. After you send a request, the system returns a request ID and runs the task in the background. You can call the [DescribeAccelerator](https://help.aliyun.com/document_detail/153235.html) or [ListAccelerators](https://help.aliyun.com/document_detail/153236.html) operation to query the status of the GA instance.
   *     *   If the GA instance is in the **configuring** state, the Anti-DDoS Pro/Premium instance is being disassociated from the GA instance. In this case, you can perform only query operations.
   *     *   If the GA instance is in the **active** state, the Anti-DDoS Pro/Premium instance is disassociated from the GA instance.
   * *   **DetachDdosFromAccelerator** cannot be repeatedly called for the same GA instance within a specific period of time.
   * 
   * @param request - DetachDdosFromAcceleratorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachDdosFromAcceleratorResponse
   */
  async detachDdosFromAcceleratorWithOptions(request: $_model.DetachDdosFromAcceleratorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachDdosFromAcceleratorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.ddosConfigList)) {
      query["DdosConfigList"] = request.ddosConfigList;
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
      action: "DetachDdosFromAccelerator",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachDdosFromAcceleratorResponse>(await this.callApi(params, req, runtime), new $_model.DetachDdosFromAcceleratorResponse({}));
  }

  /**
   * Disassociates a Global Accelerator (GA) instance from an Anti-DDoS Pro or Anti-DDoS Premium instance.
   * 
   * @remarks
   *   The **DetachDdosFromAccelerator** operation is asynchronous. After you send a request, the system returns a request ID and runs the task in the background. You can call the [DescribeAccelerator](https://help.aliyun.com/document_detail/153235.html) or [ListAccelerators](https://help.aliyun.com/document_detail/153236.html) operation to query the status of the GA instance.
   *     *   If the GA instance is in the **configuring** state, the Anti-DDoS Pro/Premium instance is being disassociated from the GA instance. In this case, you can perform only query operations.
   *     *   If the GA instance is in the **active** state, the Anti-DDoS Pro/Premium instance is disassociated from the GA instance.
   * *   **DetachDdosFromAccelerator** cannot be repeatedly called for the same GA instance within a specific period of time.
   * 
   * @param request - DetachDdosFromAcceleratorRequest
   * @returns DetachDdosFromAcceleratorResponse
   */
  async detachDdosFromAccelerator(request: $_model.DetachDdosFromAcceleratorRequest): Promise<$_model.DetachDdosFromAcceleratorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachDdosFromAcceleratorWithOptions(request, runtime);
  }

  /**
   * Disassociates a Log Service Logstore from an endpoint group.
   * 
   * @remarks
   * ## Description
   * *   **DetachLogStoreFromEndpointGroup** is an asynchronous operation. After you send a request, the system returns a request ID, but the operation is still being performed in the system background. You can call the [DescribeEndpointGroup](https://help.aliyun.com/document_detail/153260.html) operation to query the state of an endpoint group.
   *     *   If the endpoint group is in the **updating** state, the Log Service Logstore is being disassociated from the endpoint group. In this case, you can perform only query operations.
   *     <!---->
   *     *   If the endpoint group is in the **active** state, the Log Service Logstore is disassociated from the endpoint group.
   * *   The **DetachLogStoreFromEndpointGroup** operation cannot be repeatedly called for the same Global Accelerator (GA) instance within a specific period of time.
   * 
   * @param request - DetachLogStoreFromEndpointGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachLogStoreFromEndpointGroupResponse
   */
  async detachLogStoreFromEndpointGroupWithOptions(request: $_model.DetachLogStoreFromEndpointGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachLogStoreFromEndpointGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.endpointGroupIds)) {
      query["EndpointGroupIds"] = request.endpointGroupIds;
    }

    if (!$dara.isNull(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachLogStoreFromEndpointGroup",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachLogStoreFromEndpointGroupResponse>(await this.callApi(params, req, runtime), new $_model.DetachLogStoreFromEndpointGroupResponse({}));
  }

  /**
   * Disassociates a Log Service Logstore from an endpoint group.
   * 
   * @remarks
   * ## Description
   * *   **DetachLogStoreFromEndpointGroup** is an asynchronous operation. After you send a request, the system returns a request ID, but the operation is still being performed in the system background. You can call the [DescribeEndpointGroup](https://help.aliyun.com/document_detail/153260.html) operation to query the state of an endpoint group.
   *     *   If the endpoint group is in the **updating** state, the Log Service Logstore is being disassociated from the endpoint group. In this case, you can perform only query operations.
   *     <!---->
   *     *   If the endpoint group is in the **active** state, the Log Service Logstore is disassociated from the endpoint group.
   * *   The **DetachLogStoreFromEndpointGroup** operation cannot be repeatedly called for the same Global Accelerator (GA) instance within a specific period of time.
   * 
   * @param request - DetachLogStoreFromEndpointGroupRequest
   * @returns DetachLogStoreFromEndpointGroupResponse
   */
  async detachLogStoreFromEndpointGroup(request: $_model.DetachLogStoreFromEndpointGroupRequest): Promise<$_model.DetachLogStoreFromEndpointGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachLogStoreFromEndpointGroupWithOptions(request, runtime);
  }

  /**
   * Enables the diagnostic feature for an origin probing task.
   * 
   * @param request - DetectApplicationMonitorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetectApplicationMonitorResponse
   */
  async detectApplicationMonitorWithOptions(request: $_model.DetectApplicationMonitorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectApplicationMonitorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetectApplicationMonitor",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetectApplicationMonitorResponse>(await this.callApi(params, req, runtime), new $_model.DetectApplicationMonitorResponse({}));
  }

  /**
   * Enables the diagnostic feature for an origin probing task.
   * 
   * @param request - DetectApplicationMonitorRequest
   * @returns DetectApplicationMonitorResponse
   */
  async detectApplicationMonitor(request: $_model.DetectApplicationMonitorRequest): Promise<$_model.DetectApplicationMonitorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detectApplicationMonitorWithOptions(request, runtime);
  }

  /**
   * Disables an origin probing task.
   * 
   * @param request - DisableApplicationMonitorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableApplicationMonitorResponse
   */
  async disableApplicationMonitorWithOptions(request: $_model.DisableApplicationMonitorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableApplicationMonitorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableApplicationMonitor",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableApplicationMonitorResponse>(await this.callApi(params, req, runtime), new $_model.DisableApplicationMonitorResponse({}));
  }

  /**
   * Disables an origin probing task.
   * 
   * @param request - DisableApplicationMonitorRequest
   * @returns DisableApplicationMonitorResponse
   */
  async disableApplicationMonitor(request: $_model.DisableApplicationMonitorRequest): Promise<$_model.DisableApplicationMonitorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableApplicationMonitorWithOptions(request, runtime);
  }

  /**
   * 解绑GA集成云产品
   * 
   * @param request - DisassociateResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisassociateResourcesResponse
   */
  async disassociateResourcesWithOptions(request: $_model.DisassociateResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisassociateResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.associatedResourceId)) {
      query["AssociatedResourceId"] = request.associatedResourceId;
    }

    if (!$dara.isNull(request.associatedResourceRegionId)) {
      query["AssociatedResourceRegionId"] = request.associatedResourceRegionId;
    }

    if (!$dara.isNull(request.associatedResourceType)) {
      query["AssociatedResourceType"] = request.associatedResourceType;
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
      action: "DisassociateResources",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisassociateResourcesResponse>(await this.callApi(params, req, runtime), new $_model.DisassociateResourcesResponse({}));
  }

  /**
   * 解绑GA集成云产品
   * 
   * @param request - DisassociateResourcesRequest
   * @returns DisassociateResourcesResponse
   */
  async disassociateResources(request: $_model.DisassociateResourcesRequest): Promise<$_model.DisassociateResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disassociateResourcesWithOptions(request, runtime);
  }

  /**
   * Disassociates access control lists (ACLs) from a listener.
   * 
   * @remarks
   * ## Description
   * *   **DissociateAclsFromListener** is an asynchronous operation. After you send a request, the system returns a request ID, but the operation is still being performed in the system background. You can call the [DescribeListener](https://help.aliyun.com/document_detail/153254.html) operation to query the state of a listener:
   *     *   If the listener is in the **updating** state, ACLs are being disassociated from the listener. In this case, you can perform only query operations.
   *     *   If the listener is in the **active** state, ACLs are disassociated from the listener.
   * *   The **DissociateAclsFromListener** operation cannot be repeatedly called for the same Global Accelerator (GA) instance within a specific period of time.
   * 
   * @param request - DissociateAclsFromListenerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DissociateAclsFromListenerResponse
   */
  async dissociateAclsFromListenerWithOptions(request: $_model.DissociateAclsFromListenerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DissociateAclsFromListenerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclIds)) {
      query["AclIds"] = request.aclIds;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DissociateAclsFromListener",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DissociateAclsFromListenerResponse>(await this.callApi(params, req, runtime), new $_model.DissociateAclsFromListenerResponse({}));
  }

  /**
   * Disassociates access control lists (ACLs) from a listener.
   * 
   * @remarks
   * ## Description
   * *   **DissociateAclsFromListener** is an asynchronous operation. After you send a request, the system returns a request ID, but the operation is still being performed in the system background. You can call the [DescribeListener](https://help.aliyun.com/document_detail/153254.html) operation to query the state of a listener:
   *     *   If the listener is in the **updating** state, ACLs are being disassociated from the listener. In this case, you can perform only query operations.
   *     *   If the listener is in the **active** state, ACLs are disassociated from the listener.
   * *   The **DissociateAclsFromListener** operation cannot be repeatedly called for the same Global Accelerator (GA) instance within a specific period of time.
   * 
   * @param request - DissociateAclsFromListenerRequest
   * @returns DissociateAclsFromListenerResponse
   */
  async dissociateAclsFromListener(request: $_model.DissociateAclsFromListenerRequest): Promise<$_model.DissociateAclsFromListenerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dissociateAclsFromListenerWithOptions(request, runtime);
  }

  /**
   * Disassociates an additional certificate from an HTTPS listener.
   * 
   * @remarks
   * ## Description
   * *   **DissociateAdditionalCertificatesFromListener** is an asynchronous operation. After you send a request, the system returns a request ID, but this operation is still being performed in the system background. You can call the [DescribeListener](https://help.aliyun.com/document_detail/153254.html) operation to query the state of an HTTPS listener.
   *     *   If the listener is in the **updating** state, it indicates that the additional certificate is being dissociated from the listener. In this case, you can perform only query operations.
   *     *   If the listener is in the **active** state, it indicates that the additional certificate is dissociated from the listener.
   * *   The **DissociateAdditionalCertificatesFromListener** operation cannot be repeatedly called for the same Global Accelerator (GA) instance with a specific period of time.
   * 
   * @param request - DissociateAdditionalCertificatesFromListenerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DissociateAdditionalCertificatesFromListenerResponse
   */
  async dissociateAdditionalCertificatesFromListenerWithOptions(request: $_model.DissociateAdditionalCertificatesFromListenerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DissociateAdditionalCertificatesFromListenerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.domains)) {
      query["Domains"] = request.domains;
    }

    if (!$dara.isNull(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DissociateAdditionalCertificatesFromListener",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DissociateAdditionalCertificatesFromListenerResponse>(await this.callApi(params, req, runtime), new $_model.DissociateAdditionalCertificatesFromListenerResponse({}));
  }

  /**
   * Disassociates an additional certificate from an HTTPS listener.
   * 
   * @remarks
   * ## Description
   * *   **DissociateAdditionalCertificatesFromListener** is an asynchronous operation. After you send a request, the system returns a request ID, but this operation is still being performed in the system background. You can call the [DescribeListener](https://help.aliyun.com/document_detail/153254.html) operation to query the state of an HTTPS listener.
   *     *   If the listener is in the **updating** state, it indicates that the additional certificate is being dissociated from the listener. In this case, you can perform only query operations.
   *     *   If the listener is in the **active** state, it indicates that the additional certificate is dissociated from the listener.
   * *   The **DissociateAdditionalCertificatesFromListener** operation cannot be repeatedly called for the same Global Accelerator (GA) instance with a specific period of time.
   * 
   * @param request - DissociateAdditionalCertificatesFromListenerRequest
   * @returns DissociateAdditionalCertificatesFromListenerResponse
   */
  async dissociateAdditionalCertificatesFromListener(request: $_model.DissociateAdditionalCertificatesFromListenerRequest): Promise<$_model.DissociateAdditionalCertificatesFromListenerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dissociateAdditionalCertificatesFromListenerWithOptions(request, runtime);
  }

  /**
   * Enables an origin probing task.
   * 
   * @param request - EnableApplicationMonitorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableApplicationMonitorResponse
   */
  async enableApplicationMonitorWithOptions(request: $_model.EnableApplicationMonitorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableApplicationMonitorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableApplicationMonitor",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableApplicationMonitorResponse>(await this.callApi(params, req, runtime), new $_model.EnableApplicationMonitorResponse({}));
  }

  /**
   * Enables an origin probing task.
   * 
   * @param request - EnableApplicationMonitorRequest
   * @returns EnableApplicationMonitorResponse
   */
  async enableApplicationMonitor(request: $_model.EnableApplicationMonitorRequest): Promise<$_model.EnableApplicationMonitorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableApplicationMonitorWithOptions(request, runtime);
  }

  /**
   * Queries an access control list (ACL).
   * 
   * @param request - GetAclRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAclResponse
   */
  async getAclWithOptions(request: $_model.GetAclRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAclResponse> {
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
      action: "GetAcl",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAclResponse>(await this.callApi(params, req, runtime), new $_model.GetAclResponse({}));
  }

  /**
   * Queries an access control list (ACL).
   * 
   * @param request - GetAclRequest
   * @returns GetAclResponse
   */
  async getAcl(request: $_model.GetAclRequest): Promise<$_model.GetAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAclWithOptions(request, runtime);
  }

  /**
   * Queries the status of an accelerated IP address of a basic Global Accelerator (GA) instance.
   * 
   * @param request - GetBasicAccelerateIpRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBasicAccelerateIpResponse
   */
  async getBasicAccelerateIpWithOptions(request: $_model.GetBasicAccelerateIpRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetBasicAccelerateIpResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accelerateIpId)) {
      query["AccelerateIpId"] = request.accelerateIpId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBasicAccelerateIp",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBasicAccelerateIpResponse>(await this.callApi(params, req, runtime), new $_model.GetBasicAccelerateIpResponse({}));
  }

  /**
   * Queries the status of an accelerated IP address of a basic Global Accelerator (GA) instance.
   * 
   * @param request - GetBasicAccelerateIpRequest
   * @returns GetBasicAccelerateIpResponse
   */
  async getBasicAccelerateIp(request: $_model.GetBasicAccelerateIpRequest): Promise<$_model.GetBasicAccelerateIpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBasicAccelerateIpWithOptions(request, runtime);
  }

  /**
   * Queries whether the accelerated IP address of a basic Global Accelerator (GA) instance is associated with an endpoint.
   * 
   * @param request - GetBasicAccelerateIpEndpointRelationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBasicAccelerateIpEndpointRelationResponse
   */
  async getBasicAccelerateIpEndpointRelationWithOptions(request: $_model.GetBasicAccelerateIpEndpointRelationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetBasicAccelerateIpEndpointRelationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accelerateIpId)) {
      query["AccelerateIpId"] = request.accelerateIpId;
    }

    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBasicAccelerateIpEndpointRelation",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBasicAccelerateIpEndpointRelationResponse>(await this.callApi(params, req, runtime), new $_model.GetBasicAccelerateIpEndpointRelationResponse({}));
  }

  /**
   * Queries whether the accelerated IP address of a basic Global Accelerator (GA) instance is associated with an endpoint.
   * 
   * @param request - GetBasicAccelerateIpEndpointRelationRequest
   * @returns GetBasicAccelerateIpEndpointRelationResponse
   */
  async getBasicAccelerateIpEndpointRelation(request: $_model.GetBasicAccelerateIpEndpointRelationRequest): Promise<$_model.GetBasicAccelerateIpEndpointRelationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBasicAccelerateIpEndpointRelationWithOptions(request, runtime);
  }

  /**
   * Queries the number of idle accelerated IP addresses of a Global Accelerator (GA) instance.
   * 
   * @param request - GetBasicAccelerateIpIdleCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBasicAccelerateIpIdleCountResponse
   */
  async getBasicAccelerateIpIdleCountWithOptions(request: $_model.GetBasicAccelerateIpIdleCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetBasicAccelerateIpIdleCountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ipSetId)) {
      query["IpSetId"] = request.ipSetId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBasicAccelerateIpIdleCount",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBasicAccelerateIpIdleCountResponse>(await this.callApi(params, req, runtime), new $_model.GetBasicAccelerateIpIdleCountResponse({}));
  }

  /**
   * Queries the number of idle accelerated IP addresses of a Global Accelerator (GA) instance.
   * 
   * @param request - GetBasicAccelerateIpIdleCountRequest
   * @returns GetBasicAccelerateIpIdleCountResponse
   */
  async getBasicAccelerateIpIdleCount(request: $_model.GetBasicAccelerateIpIdleCountRequest): Promise<$_model.GetBasicAccelerateIpIdleCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBasicAccelerateIpIdleCountWithOptions(request, runtime);
  }

  /**
   * Queries the information about a basic Global Accelerator (GA) instance.
   * 
   * @param request - GetBasicAcceleratorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBasicAcceleratorResponse
   */
  async getBasicAcceleratorWithOptions(request: $_model.GetBasicAcceleratorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetBasicAcceleratorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBasicAccelerator",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBasicAcceleratorResponse>(await this.callApi(params, req, runtime), new $_model.GetBasicAcceleratorResponse({}));
  }

  /**
   * Queries the information about a basic Global Accelerator (GA) instance.
   * 
   * @param request - GetBasicAcceleratorRequest
   * @returns GetBasicAcceleratorResponse
   */
  async getBasicAccelerator(request: $_model.GetBasicAcceleratorRequest): Promise<$_model.GetBasicAcceleratorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBasicAcceleratorWithOptions(request, runtime);
  }

  /**
   * Queries detailed information about an endpoint that is associated with a basic Global Accelerator (GA) instance.
   * 
   * @param request - GetBasicEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBasicEndpointResponse
   */
  async getBasicEndpointWithOptions(request: $_model.GetBasicEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetBasicEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBasicEndpoint",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBasicEndpointResponse>(await this.callApi(params, req, runtime), new $_model.GetBasicEndpointResponse({}));
  }

  /**
   * Queries detailed information about an endpoint that is associated with a basic Global Accelerator (GA) instance.
   * 
   * @param request - GetBasicEndpointRequest
   * @returns GetBasicEndpointResponse
   */
  async getBasicEndpoint(request: $_model.GetBasicEndpointRequest): Promise<$_model.GetBasicEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBasicEndpointWithOptions(request, runtime);
  }

  /**
   * Queries the information about the endpoint group of a basic GA instance.
   * 
   * @param request - GetBasicEndpointGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBasicEndpointGroupResponse
   */
  async getBasicEndpointGroupWithOptions(request: $_model.GetBasicEndpointGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetBasicEndpointGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.endpointGroupId)) {
      query["EndpointGroupId"] = request.endpointGroupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBasicEndpointGroup",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBasicEndpointGroupResponse>(await this.callApi(params, req, runtime), new $_model.GetBasicEndpointGroupResponse({}));
  }

  /**
   * Queries the information about the endpoint group of a basic GA instance.
   * 
   * @param request - GetBasicEndpointGroupRequest
   * @returns GetBasicEndpointGroupResponse
   */
  async getBasicEndpointGroup(request: $_model.GetBasicEndpointGroupRequest): Promise<$_model.GetBasicEndpointGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBasicEndpointGroupWithOptions(request, runtime);
  }

  /**
   * Queries the information about the acceleration region of a basic Global Accelerator (GA) instance.
   * 
   * @param request - GetBasicIpSetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBasicIpSetResponse
   */
  async getBasicIpSetWithOptions(request: $_model.GetBasicIpSetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetBasicIpSetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ipSetId)) {
      query["IpSetId"] = request.ipSetId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBasicIpSet",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBasicIpSetResponse>(await this.callApi(params, req, runtime), new $_model.GetBasicIpSetResponse({}));
  }

  /**
   * Queries the information about the acceleration region of a basic Global Accelerator (GA) instance.
   * 
   * @param request - GetBasicIpSetRequest
   * @returns GetBasicIpSetResponse
   */
  async getBasicIpSet(request: $_model.GetBasicIpSetRequest): Promise<$_model.GetBasicIpSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBasicIpSetWithOptions(request, runtime);
  }

  /**
   * 获取GA实例关联的云产品
   * 
   * @param request - GetGlobalAcceleratorResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGlobalAcceleratorResourcesResponse
   */
  async getGlobalAcceleratorResourcesWithOptions(request: $_model.GetGlobalAcceleratorResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetGlobalAcceleratorResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.associatedResourceId)) {
      query["AssociatedResourceId"] = request.associatedResourceId;
    }

    if (!$dara.isNull(request.associatedResourceRegionId)) {
      query["AssociatedResourceRegionId"] = request.associatedResourceRegionId;
    }

    if (!$dara.isNull(request.associatedResourceType)) {
      query["AssociatedResourceType"] = request.associatedResourceType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetGlobalAcceleratorResources",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetGlobalAcceleratorResourcesResponse>(await this.callApi(params, req, runtime), new $_model.GetGlobalAcceleratorResourcesResponse({}));
  }

  /**
   * 获取GA实例关联的云产品
   * 
   * @param request - GetGlobalAcceleratorResourcesRequest
   * @returns GetGlobalAcceleratorResourcesResponse
   */
  async getGlobalAcceleratorResources(request: $_model.GetGlobalAcceleratorResourcesRequest): Promise<$_model.GetGlobalAcceleratorResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getGlobalAcceleratorResourcesWithOptions(request, runtime);
  }

  /**
   * Queries the health status of the endpoints and endpoint groups of a listener.
   * 
   * @param request - GetHealthStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHealthStatusResponse
   */
  async getHealthStatusWithOptions(request: $_model.GetHealthStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetHealthStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHealthStatus",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHealthStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetHealthStatusResponse({}));
  }

  /**
   * Queries the health status of the endpoints and endpoint groups of a listener.
   * 
   * @param request - GetHealthStatusRequest
   * @returns GetHealthStatusResponse
   */
  async getHealthStatus(request: $_model.GetHealthStatusRequest): Promise<$_model.GetHealthStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getHealthStatusWithOptions(request, runtime);
  }

  /**
   * Queries the number of invalid domain names.
   * 
   * @param request - GetInvalidDomainCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInvalidDomainCountResponse
   */
  async getInvalidDomainCountWithOptions(request: $_model.GetInvalidDomainCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInvalidDomainCountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInvalidDomainCount",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInvalidDomainCountResponse>(await this.callApi(params, req, runtime), new $_model.GetInvalidDomainCountResponse({}));
  }

  /**
   * Queries the number of invalid domain names.
   * 
   * @param request - GetInvalidDomainCountRequest
   * @returns GetInvalidDomainCountResponse
   */
  async getInvalidDomainCount(request: $_model.GetInvalidDomainCountRequest): Promise<$_model.GetInvalidDomainCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInvalidDomainCountWithOptions(request, runtime);
  }

  /**
   * Queries the maximum bandwidth of an acceleration area.
   * 
   * @param request - GetIpsetsBandwidthLimitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIpsetsBandwidthLimitResponse
   */
  async getIpsetsBandwidthLimitWithOptions(request: $_model.GetIpsetsBandwidthLimitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetIpsetsBandwidthLimitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIpsetsBandwidthLimit",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetIpsetsBandwidthLimitResponse>(await this.callApi(params, req, runtime), new $_model.GetIpsetsBandwidthLimitResponse({}));
  }

  /**
   * Queries the maximum bandwidth of an acceleration area.
   * 
   * @param request - GetIpsetsBandwidthLimitRequest
   * @returns GetIpsetsBandwidthLimitResponse
   */
  async getIpsetsBandwidthLimit(request: $_model.GetIpsetsBandwidthLimitRequest): Promise<$_model.GetIpsetsBandwidthLimitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getIpsetsBandwidthLimitWithOptions(request, runtime);
  }

  /**
   * Queries the status of a secondary IP address that is associated with a CNAME.
   * 
   * @param request - GetSpareIpRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSpareIpResponse
   */
  async getSpareIpWithOptions(request: $_model.GetSpareIpRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSpareIpResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
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

    if (!$dara.isNull(request.spareIp)) {
      query["SpareIp"] = request.spareIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSpareIp",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSpareIpResponse>(await this.callApi(params, req, runtime), new $_model.GetSpareIpResponse({}));
  }

  /**
   * Queries the status of a secondary IP address that is associated with a CNAME.
   * 
   * @param request - GetSpareIpRequest
   * @returns GetSpareIpResponse
   */
  async getSpareIp(request: $_model.GetSpareIpRequest): Promise<$_model.GetSpareIpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSpareIpWithOptions(request, runtime);
  }

  /**
   * Queries available acceleration areas and regions.
   * 
   * @param request - ListAccelerateAreasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAccelerateAreasResponse
   */
  async listAccelerateAreasWithOptions(request: $_model.ListAccelerateAreasRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAccelerateAreasResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAccelerateAreas",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAccelerateAreasResponse>(await this.callApi(params, req, runtime), new $_model.ListAccelerateAreasResponse({}));
  }

  /**
   * Queries available acceleration areas and regions.
   * 
   * @param request - ListAccelerateAreasRequest
   * @returns ListAccelerateAreasResponse
   */
  async listAccelerateAreas(request: $_model.ListAccelerateAreasRequest): Promise<$_model.ListAccelerateAreasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAccelerateAreasWithOptions(request, runtime);
  }

  /**
   * Queries Global Accelerator (GA) instances.
   * 
   * @param request - ListAcceleratorsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAcceleratorsResponse
   */
  async listAcceleratorsWithOptions(request: $_model.ListAcceleratorsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAcceleratorsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
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

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAccelerators",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAcceleratorsResponse>(await this.callApi(params, req, runtime), new $_model.ListAcceleratorsResponse({}));
  }

  /**
   * Queries Global Accelerator (GA) instances.
   * 
   * @param request - ListAcceleratorsRequest
   * @returns ListAcceleratorsResponse
   */
  async listAccelerators(request: $_model.ListAcceleratorsRequest): Promise<$_model.ListAcceleratorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAcceleratorsWithOptions(request, runtime);
  }

  /**
   * Queries a list of access control lists (ACLs).
   * 
   * @param request - ListAclsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAclsResponse
   */
  async listAclsWithOptions(request: $_model.ListAclsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAclsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclIds)) {
      query["AclIds"] = request.aclIds;
    }

    if (!$dara.isNull(request.aclName)) {
      query["AclName"] = request.aclName;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAcls",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAclsResponse>(await this.callApi(params, req, runtime), new $_model.ListAclsResponse({}));
  }

  /**
   * Queries a list of access control lists (ACLs).
   * 
   * @param request - ListAclsRequest
   * @returns ListAclsResponse
   */
  async listAcls(request: $_model.ListAclsRequest): Promise<$_model.ListAclsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAclsWithOptions(request, runtime);
  }

  /**
   * Queries origin probing tasks.
   * 
   * @param request - ListApplicationMonitorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationMonitorResponse
   */
  async listApplicationMonitorWithOptions(request: $_model.ListApplicationMonitorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListApplicationMonitorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.searchValue)) {
      query["SearchValue"] = request.searchValue;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApplicationMonitor",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApplicationMonitorResponse>(await this.callApi(params, req, runtime), new $_model.ListApplicationMonitorResponse({}));
  }

  /**
   * Queries origin probing tasks.
   * 
   * @param request - ListApplicationMonitorRequest
   * @returns ListApplicationMonitorResponse
   */
  async listApplicationMonitor(request: $_model.ListApplicationMonitorRequest): Promise<$_model.ListApplicationMonitorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApplicationMonitorWithOptions(request, runtime);
  }

  /**
   * Queries the diagnostic results of origin probing tasks.
   * 
   * @param request - ListApplicationMonitorDetectResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationMonitorDetectResultResponse
   */
  async listApplicationMonitorDetectResultWithOptions(request: $_model.ListApplicationMonitorDetectResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListApplicationMonitorDetectResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
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

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApplicationMonitorDetectResult",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApplicationMonitorDetectResultResponse>(await this.callApi(params, req, runtime), new $_model.ListApplicationMonitorDetectResultResponse({}));
  }

  /**
   * Queries the diagnostic results of origin probing tasks.
   * 
   * @param request - ListApplicationMonitorDetectResultRequest
   * @returns ListApplicationMonitorDetectResultResponse
   */
  async listApplicationMonitorDetectResult(request: $_model.ListApplicationMonitorDetectResultRequest): Promise<$_model.ListApplicationMonitorDetectResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApplicationMonitorDetectResultWithOptions(request, runtime);
  }

  /**
   * Queries available acceleration regions.
   * 
   * @param request - ListAvailableAccelerateAreasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAvailableAccelerateAreasResponse
   */
  async listAvailableAccelerateAreasWithOptions(request: $_model.ListAvailableAccelerateAreasRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAvailableAccelerateAreasResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.accessMode)) {
      query["AccessMode"] = request.accessMode;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAvailableAccelerateAreas",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAvailableAccelerateAreasResponse>(await this.callApi(params, req, runtime), new $_model.ListAvailableAccelerateAreasResponse({}));
  }

  /**
   * Queries available acceleration regions.
   * 
   * @param request - ListAvailableAccelerateAreasRequest
   * @returns ListAvailableAccelerateAreasResponse
   */
  async listAvailableAccelerateAreas(request: $_model.ListAvailableAccelerateAreasRequest): Promise<$_model.ListAvailableAccelerateAreasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAvailableAccelerateAreasWithOptions(request, runtime);
  }

  /**
   * Queries the available acceleration regions of a Global Accelerator (GA) instance.
   * 
   * @param request - ListAvailableBusiRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAvailableBusiRegionsResponse
   */
  async listAvailableBusiRegionsWithOptions(request: $_model.ListAvailableBusiRegionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAvailableBusiRegionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAvailableBusiRegions",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAvailableBusiRegionsResponse>(await this.callApi(params, req, runtime), new $_model.ListAvailableBusiRegionsResponse({}));
  }

  /**
   * Queries the available acceleration regions of a Global Accelerator (GA) instance.
   * 
   * @param request - ListAvailableBusiRegionsRequest
   * @returns ListAvailableBusiRegionsResponse
   */
  async listAvailableBusiRegions(request: $_model.ListAvailableBusiRegionsRequest): Promise<$_model.ListAvailableBusiRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAvailableBusiRegionsWithOptions(request, runtime);
  }

  /**
   * Queries bandwidth plans.
   * 
   * @param request - ListBandwidthPackagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBandwidthPackagesResponse
   */
  async listBandwidthPackagesWithOptions(request: $_model.ListBandwidthPackagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListBandwidthPackagesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bandwidthPackageId)) {
      query["BandwidthPackageId"] = request.bandwidthPackageId;
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

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListBandwidthPackages",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListBandwidthPackagesResponse>(await this.callApi(params, req, runtime), new $_model.ListBandwidthPackagesResponse({}));
  }

  /**
   * Queries bandwidth plans.
   * 
   * @param request - ListBandwidthPackagesRequest
   * @returns ListBandwidthPackagesResponse
   */
  async listBandwidthPackages(request: $_model.ListBandwidthPackagesRequest): Promise<$_model.ListBandwidthPackagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listBandwidthPackagesWithOptions(request, runtime);
  }

  /**
   * Queries bandwidth plans.
   * 
   * @remarks
   * To query the detailed information about a bandwidth plan, call the **ListBandwidthPackages** operation. For more information, see [ListBandwidthPackages](https://help.aliyun.com/document_detail/2253239.html).
   * 
   * @param request - ListBandwidthackagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBandwidthackagesResponse
   */
  async listBandwidthackagesWithOptions(request: $_model.ListBandwidthackagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListBandwidthackagesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListBandwidthackages",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListBandwidthackagesResponse>(await this.callApi(params, req, runtime), new $_model.ListBandwidthackagesResponse({}));
  }

  /**
   * Queries bandwidth plans.
   * 
   * @remarks
   * To query the detailed information about a bandwidth plan, call the **ListBandwidthPackages** operation. For more information, see [ListBandwidthPackages](https://help.aliyun.com/document_detail/2253239.html).
   * 
   * @param request - ListBandwidthackagesRequest
   * @returns ListBandwidthackagesResponse
   */
  async listBandwidthackages(request: $_model.ListBandwidthackagesRequest): Promise<$_model.ListBandwidthackagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listBandwidthackagesWithOptions(request, runtime);
  }

  /**
   * Queries whether the accelerated IP address of a basic Global Accelerator (GA) instance is associated with an endpoint.
   * 
   * @param request - ListBasicAccelerateIpEndpointRelationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBasicAccelerateIpEndpointRelationsResponse
   */
  async listBasicAccelerateIpEndpointRelationsWithOptions(request: $_model.ListBasicAccelerateIpEndpointRelationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListBasicAccelerateIpEndpointRelationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accelerateIpId)) {
      query["AccelerateIpId"] = request.accelerateIpId;
    }

    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
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
      action: "ListBasicAccelerateIpEndpointRelations",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListBasicAccelerateIpEndpointRelationsResponse>(await this.callApi(params, req, runtime), new $_model.ListBasicAccelerateIpEndpointRelationsResponse({}));
  }

  /**
   * Queries whether the accelerated IP address of a basic Global Accelerator (GA) instance is associated with an endpoint.
   * 
   * @param request - ListBasicAccelerateIpEndpointRelationsRequest
   * @returns ListBasicAccelerateIpEndpointRelationsResponse
   */
  async listBasicAccelerateIpEndpointRelations(request: $_model.ListBasicAccelerateIpEndpointRelationsRequest): Promise<$_model.ListBasicAccelerateIpEndpointRelationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listBasicAccelerateIpEndpointRelationsWithOptions(request, runtime);
  }

  /**
   * Queries the accelerated IP addresses in the acceleration region of a basic Global Accelerator (GA) instance.
   * 
   * @param request - ListBasicAccelerateIpsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBasicAccelerateIpsResponse
   */
  async listBasicAccelerateIpsWithOptions(request: $_model.ListBasicAccelerateIpsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListBasicAccelerateIpsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accelerateIpAddress)) {
      query["AccelerateIpAddress"] = request.accelerateIpAddress;
    }

    if (!$dara.isNull(request.accelerateIpId)) {
      query["AccelerateIpId"] = request.accelerateIpId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ipSetId)) {
      query["IpSetId"] = request.ipSetId;
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
      action: "ListBasicAccelerateIps",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListBasicAccelerateIpsResponse>(await this.callApi(params, req, runtime), new $_model.ListBasicAccelerateIpsResponse({}));
  }

  /**
   * Queries the accelerated IP addresses in the acceleration region of a basic Global Accelerator (GA) instance.
   * 
   * @param request - ListBasicAccelerateIpsRequest
   * @returns ListBasicAccelerateIpsResponse
   */
  async listBasicAccelerateIps(request: $_model.ListBasicAccelerateIpsRequest): Promise<$_model.ListBasicAccelerateIpsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listBasicAccelerateIpsWithOptions(request, runtime);
  }

  /**
   * Queries basic Global Accelerator (GA) instances.
   * 
   * @param request - ListBasicAcceleratorsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBasicAcceleratorsResponse
   */
  async listBasicAcceleratorsWithOptions(request: $_model.ListBasicAcceleratorsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListBasicAcceleratorsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
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

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListBasicAccelerators",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListBasicAcceleratorsResponse>(await this.callApi(params, req, runtime), new $_model.ListBasicAcceleratorsResponse({}));
  }

  /**
   * Queries basic Global Accelerator (GA) instances.
   * 
   * @param request - ListBasicAcceleratorsRequest
   * @returns ListBasicAcceleratorsResponse
   */
  async listBasicAccelerators(request: $_model.ListBasicAcceleratorsRequest): Promise<$_model.ListBasicAcceleratorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listBasicAcceleratorsWithOptions(request, runtime);
  }

  /**
   * Queries the endpoints that are associated with a basic Global Accelerator (GA) instance.
   * 
   * @param request - ListBasicEndpointsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBasicEndpointsResponse
   */
  async listBasicEndpointsWithOptions(request: $_model.ListBasicEndpointsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListBasicEndpointsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.endpointGroupId)) {
      query["EndpointGroupId"] = request.endpointGroupId;
    }

    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!$dara.isNull(request.endpointType)) {
      query["EndpointType"] = request.endpointType;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
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
      action: "ListBasicEndpoints",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListBasicEndpointsResponse>(await this.callApi(params, req, runtime), new $_model.ListBasicEndpointsResponse({}));
  }

  /**
   * Queries the endpoints that are associated with a basic Global Accelerator (GA) instance.
   * 
   * @param request - ListBasicEndpointsRequest
   * @returns ListBasicEndpointsResponse
   */
  async listBasicEndpoints(request: $_model.ListBasicEndpointsRequest): Promise<$_model.ListBasicEndpointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listBasicEndpointsWithOptions(request, runtime);
  }

  /**
   * Queries the acceleration regions that are supported by Global Accelerator (GA).
   * 
   * @param request - ListBusiRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBusiRegionsResponse
   */
  async listBusiRegionsWithOptions(request: $_model.ListBusiRegionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListBusiRegionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListBusiRegions",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListBusiRegionsResponse>(await this.callApi(params, req, runtime), new $_model.ListBusiRegionsResponse({}));
  }

  /**
   * Queries the acceleration regions that are supported by Global Accelerator (GA).
   * 
   * @param request - ListBusiRegionsRequest
   * @returns ListBusiRegionsResponse
   */
  async listBusiRegions(request: $_model.ListBusiRegionsRequest): Promise<$_model.ListBusiRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listBusiRegionsWithOptions(request, runtime);
  }

  /**
   * Queries available acceleration areas and regions.
   * 
   * @remarks
   * You can call this operation to query the acceleration areas and regions that you can specify on the wizard page of Global Accelerator (GA) and for free-trial GA instances. You can filter acceleration areas and regions based on specified conditions.
   * 
   * @param request - ListCommonAreasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCommonAreasResponse
   */
  async listCommonAreasWithOptions(request: $_model.ListCommonAreasRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCommonAreasResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ipVersion)) {
      query["IpVersion"] = request.ipVersion;
    }

    if (!$dara.isNull(request.isEpg)) {
      query["IsEpg"] = request.isEpg;
    }

    if (!$dara.isNull(request.isIpSet)) {
      query["IsIpSet"] = request.isIpSet;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCommonAreas",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCommonAreasResponse>(await this.callApi(params, req, runtime), new $_model.ListCommonAreasResponse({}));
  }

  /**
   * Queries available acceleration areas and regions.
   * 
   * @remarks
   * You can call this operation to query the acceleration areas and regions that you can specify on the wizard page of Global Accelerator (GA) and for free-trial GA instances. You can filter acceleration areas and regions based on specified conditions.
   * 
   * @param request - ListCommonAreasRequest
   * @returns ListCommonAreasResponse
   */
  async listCommonAreas(request: $_model.ListCommonAreasRequest): Promise<$_model.ListCommonAreasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCommonAreasWithOptions(request, runtime);
  }

  /**
   * Queries endpoint group mapping configurations of a custom routing listener of a Global Accelerator (GA) instance.
   * 
   * @param request - ListCustomRoutingEndpointGroupDestinationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCustomRoutingEndpointGroupDestinationsResponse
   */
  async listCustomRoutingEndpointGroupDestinationsWithOptions(request: $_model.ListCustomRoutingEndpointGroupDestinationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCustomRoutingEndpointGroupDestinationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.endpointGroupId)) {
      query["EndpointGroupId"] = request.endpointGroupId;
    }

    if (!$dara.isNull(request.fromPort)) {
      query["FromPort"] = request.fromPort;
    }

    if (!$dara.isNull(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.protocols)) {
      query["Protocols"] = request.protocols;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.toPort)) {
      query["ToPort"] = request.toPort;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCustomRoutingEndpointGroupDestinations",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCustomRoutingEndpointGroupDestinationsResponse>(await this.callApi(params, req, runtime), new $_model.ListCustomRoutingEndpointGroupDestinationsResponse({}));
  }

  /**
   * Queries endpoint group mapping configurations of a custom routing listener of a Global Accelerator (GA) instance.
   * 
   * @param request - ListCustomRoutingEndpointGroupDestinationsRequest
   * @returns ListCustomRoutingEndpointGroupDestinationsResponse
   */
  async listCustomRoutingEndpointGroupDestinations(request: $_model.ListCustomRoutingEndpointGroupDestinationsRequest): Promise<$_model.ListCustomRoutingEndpointGroupDestinationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCustomRoutingEndpointGroupDestinationsWithOptions(request, runtime);
  }

  /**
   * Queries the endpoint groups that are associated with a custom routing listener.
   * 
   * @remarks
   * ## Debugging
   * [OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code for different SDKs.](https://api.aliyun.com/#product=Ga\\&api=ListCustomRoutingEndpointGroups\\&type=RPC\\&version=2019-11-20)
   * 
   * @param request - ListCustomRoutingEndpointGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCustomRoutingEndpointGroupsResponse
   */
  async listCustomRoutingEndpointGroupsWithOptions(request: $_model.ListCustomRoutingEndpointGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCustomRoutingEndpointGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.accessLogSwitch)) {
      query["AccessLogSwitch"] = request.accessLogSwitch;
    }

    if (!$dara.isNull(request.endpointGroupId)) {
      query["EndpointGroupId"] = request.endpointGroupId;
    }

    if (!$dara.isNull(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCustomRoutingEndpointGroups",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCustomRoutingEndpointGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListCustomRoutingEndpointGroupsResponse({}));
  }

  /**
   * Queries the endpoint groups that are associated with a custom routing listener.
   * 
   * @remarks
   * ## Debugging
   * [OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code for different SDKs.](https://api.aliyun.com/#product=Ga\\&api=ListCustomRoutingEndpointGroups\\&type=RPC\\&version=2019-11-20)
   * 
   * @param request - ListCustomRoutingEndpointGroupsRequest
   * @returns ListCustomRoutingEndpointGroupsResponse
   */
  async listCustomRoutingEndpointGroups(request: $_model.ListCustomRoutingEndpointGroupsRequest): Promise<$_model.ListCustomRoutingEndpointGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCustomRoutingEndpointGroupsWithOptions(request, runtime);
  }

  /**
   * Queries the traffic policies of an endpoint that belongs to a custom routing listener.
   * 
   * @param request - ListCustomRoutingEndpointTrafficPoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCustomRoutingEndpointTrafficPoliciesResponse
   */
  async listCustomRoutingEndpointTrafficPoliciesWithOptions(request: $_model.ListCustomRoutingEndpointTrafficPoliciesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCustomRoutingEndpointTrafficPoliciesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.address)) {
      query["Address"] = request.address;
    }

    if (!$dara.isNull(request.endpointGroupId)) {
      query["EndpointGroupId"] = request.endpointGroupId;
    }

    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!$dara.isNull(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCustomRoutingEndpointTrafficPolicies",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCustomRoutingEndpointTrafficPoliciesResponse>(await this.callApi(params, req, runtime), new $_model.ListCustomRoutingEndpointTrafficPoliciesResponse({}));
  }

  /**
   * Queries the traffic policies of an endpoint that belongs to a custom routing listener.
   * 
   * @param request - ListCustomRoutingEndpointTrafficPoliciesRequest
   * @returns ListCustomRoutingEndpointTrafficPoliciesResponse
   */
  async listCustomRoutingEndpointTrafficPolicies(request: $_model.ListCustomRoutingEndpointTrafficPoliciesRequest): Promise<$_model.ListCustomRoutingEndpointTrafficPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCustomRoutingEndpointTrafficPoliciesWithOptions(request, runtime);
  }

  /**
   * Queries the configurations of an endpoint.
   * 
   * @param request - ListCustomRoutingEndpointsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCustomRoutingEndpointsResponse
   */
  async listCustomRoutingEndpointsWithOptions(request: $_model.ListCustomRoutingEndpointsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCustomRoutingEndpointsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.endpointGroupId)) {
      query["EndpointGroupId"] = request.endpointGroupId;
    }

    if (!$dara.isNull(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCustomRoutingEndpoints",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCustomRoutingEndpointsResponse>(await this.callApi(params, req, runtime), new $_model.ListCustomRoutingEndpointsResponse({}));
  }

  /**
   * Queries the configurations of an endpoint.
   * 
   * @param request - ListCustomRoutingEndpointsRequest
   * @returns ListCustomRoutingEndpointsResponse
   */
  async listCustomRoutingEndpoints(request: $_model.ListCustomRoutingEndpointsRequest): Promise<$_model.ListCustomRoutingEndpointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCustomRoutingEndpointsWithOptions(request, runtime);
  }

  /**
   * Queries the port mapping table of a custom routing listener.
   * 
   * @remarks
   * After you configure a custom routing listener for a Global Accelerator (GA) instance, the instance generates a port mapping table based on the listener port range, backend service protocols and port ranges of the associated endpoint groups, and IP addresses of endpoints (vSwitches). The custom routing listener forwards client requests to specified IP addresses and ports in the vSwitches based on the port mapping table. This operation is used to query the generated port mapping table.
   * 
   * @param request - ListCustomRoutingPortMappingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCustomRoutingPortMappingsResponse
   */
  async listCustomRoutingPortMappingsWithOptions(request: $_model.ListCustomRoutingPortMappingsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCustomRoutingPortMappingsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.endpointGroupId)) {
      query["EndpointGroupId"] = request.endpointGroupId;
    }

    if (!$dara.isNull(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCustomRoutingPortMappings",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCustomRoutingPortMappingsResponse>(await this.callApi(params, req, runtime), new $_model.ListCustomRoutingPortMappingsResponse({}));
  }

  /**
   * Queries the port mapping table of a custom routing listener.
   * 
   * @remarks
   * After you configure a custom routing listener for a Global Accelerator (GA) instance, the instance generates a port mapping table based on the listener port range, backend service protocols and port ranges of the associated endpoint groups, and IP addresses of endpoints (vSwitches). The custom routing listener forwards client requests to specified IP addresses and ports in the vSwitches based on the port mapping table. This operation is used to query the generated port mapping table.
   * 
   * @param request - ListCustomRoutingPortMappingsRequest
   * @returns ListCustomRoutingPortMappingsResponse
   */
  async listCustomRoutingPortMappings(request: $_model.ListCustomRoutingPortMappingsRequest): Promise<$_model.ListCustomRoutingPortMappingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCustomRoutingPortMappingsWithOptions(request, runtime);
  }

  /**
   * Queries the port mapping table of a specified backend instance that is associated with a custom routing listener.
   * 
   * @param request - ListCustomRoutingPortMappingsByDestinationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCustomRoutingPortMappingsByDestinationResponse
   */
  async listCustomRoutingPortMappingsByDestinationWithOptions(request: $_model.ListCustomRoutingPortMappingsByDestinationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCustomRoutingPortMappingsByDestinationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.destinationAddress)) {
      query["DestinationAddress"] = request.destinationAddress;
    }

    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCustomRoutingPortMappingsByDestination",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCustomRoutingPortMappingsByDestinationResponse>(await this.callApi(params, req, runtime), new $_model.ListCustomRoutingPortMappingsByDestinationResponse({}));
  }

  /**
   * Queries the port mapping table of a specified backend instance that is associated with a custom routing listener.
   * 
   * @param request - ListCustomRoutingPortMappingsByDestinationRequest
   * @returns ListCustomRoutingPortMappingsByDestinationResponse
   */
  async listCustomRoutingPortMappingsByDestination(request: $_model.ListCustomRoutingPortMappingsByDestinationRequest): Promise<$_model.ListCustomRoutingPortMappingsByDestinationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCustomRoutingPortMappingsByDestinationWithOptions(request, runtime);
  }

  /**
   * Queries accelerated domain names.
   * 
   * @param request - ListDomainsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDomainsResponse
   */
  async listDomainsWithOptions(request: $_model.ListDomainsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDomainsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
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

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDomains",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDomainsResponse>(await this.callApi(params, req, runtime), new $_model.ListDomainsResponse({}));
  }

  /**
   * Queries accelerated domain names.
   * 
   * @param request - ListDomainsRequest
   * @returns ListDomainsResponse
   */
  async listDomains(request: $_model.ListDomainsRequest): Promise<$_model.ListDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDomainsWithOptions(request, runtime);
  }

  /**
   * Queries the public CIDR blocks to which the endpoint group IP addresses belong. The CIDR blocks can be used to configure ACLs in terminals.
   * 
   * @param request - ListEndpointGroupIpAddressCidrBlocksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEndpointGroupIpAddressCidrBlocksResponse
   */
  async listEndpointGroupIpAddressCidrBlocksWithOptions(request: $_model.ListEndpointGroupIpAddressCidrBlocksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListEndpointGroupIpAddressCidrBlocksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.endpointGroupRegion)) {
      query["EndpointGroupRegion"] = request.endpointGroupRegion;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEndpointGroupIpAddressCidrBlocks",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEndpointGroupIpAddressCidrBlocksResponse>(await this.callApi(params, req, runtime), new $_model.ListEndpointGroupIpAddressCidrBlocksResponse({}));
  }

  /**
   * Queries the public CIDR blocks to which the endpoint group IP addresses belong. The CIDR blocks can be used to configure ACLs in terminals.
   * 
   * @param request - ListEndpointGroupIpAddressCidrBlocksRequest
   * @returns ListEndpointGroupIpAddressCidrBlocksResponse
   */
  async listEndpointGroupIpAddressCidrBlocks(request: $_model.ListEndpointGroupIpAddressCidrBlocksRequest): Promise<$_model.ListEndpointGroupIpAddressCidrBlocksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEndpointGroupIpAddressCidrBlocksWithOptions(request, runtime);
  }

  /**
   * Queries a list of endpoint groups.
   * 
   * @param request - ListEndpointGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEndpointGroupsResponse
   */
  async listEndpointGroupsWithOptions(request: $_model.ListEndpointGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListEndpointGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.accessLogSwitch)) {
      query["AccessLogSwitch"] = request.accessLogSwitch;
    }

    if (!$dara.isNull(request.endpointGroupId)) {
      query["EndpointGroupId"] = request.endpointGroupId;
    }

    if (!$dara.isNull(request.endpointGroupType)) {
      query["EndpointGroupType"] = request.endpointGroupType;
    }

    if (!$dara.isNull(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
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

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEndpointGroups",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEndpointGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListEndpointGroupsResponse({}));
  }

  /**
   * Queries a list of endpoint groups.
   * 
   * @param request - ListEndpointGroupsRequest
   * @returns ListEndpointGroupsResponse
   */
  async listEndpointGroups(request: $_model.ListEndpointGroupsRequest): Promise<$_model.ListEndpointGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEndpointGroupsWithOptions(request, runtime);
  }

  /**
   * Queries forwarding rules.
   * 
   * @remarks
   * >  This operation is used to query only custom forwarding rules, not the default forwarding rule.
   * 
   * @param request - ListForwardingRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListForwardingRulesResponse
   */
  async listForwardingRulesWithOptions(request: $_model.ListForwardingRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListForwardingRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.forwardingRuleId)) {
      query["ForwardingRuleId"] = request.forwardingRuleId;
    }

    if (!$dara.isNull(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
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
      action: "ListForwardingRules",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListForwardingRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListForwardingRulesResponse({}));
  }

  /**
   * Queries forwarding rules.
   * 
   * @remarks
   * >  This operation is used to query only custom forwarding rules, not the default forwarding rule.
   * 
   * @param request - ListForwardingRulesRequest
   * @returns ListForwardingRulesResponse
   */
  async listForwardingRules(request: $_model.ListForwardingRulesRequest): Promise<$_model.ListForwardingRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listForwardingRulesWithOptions(request, runtime);
  }

  /**
   * Queries acceleration regions.
   * 
   * @param request - ListIpSetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIpSetsResponse
   */
  async listIpSetsWithOptions(request: $_model.ListIpSetsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListIpSetsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIpSets",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIpSetsResponse>(await this.callApi(params, req, runtime), new $_model.ListIpSetsResponse({}));
  }

  /**
   * Queries acceleration regions.
   * 
   * @param request - ListIpSetsRequest
   * @returns ListIpSetsResponse
   */
  async listIpSets(request: $_model.ListIpSetsRequest): Promise<$_model.ListIpSetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listIpSetsWithOptions(request, runtime);
  }

  /**
   * Queries the line types of elastic IP addresses (EIPs) that are supported in an acceleration region.
   * 
   * @param request - ListIspTypesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIspTypesResponse
   */
  async listIspTypesWithOptions(request: $_model.ListIspTypesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListIspTypesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.acceleratorType)) {
      query["AcceleratorType"] = request.acceleratorType;
    }

    if (!$dara.isNull(request.businessRegionId)) {
      query["BusinessRegionId"] = request.businessRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIspTypes",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIspTypesResponse>(await this.callApi(params, req, runtime), new $_model.ListIspTypesResponse({}));
  }

  /**
   * Queries the line types of elastic IP addresses (EIPs) that are supported in an acceleration region.
   * 
   * @param request - ListIspTypesRequest
   * @returns ListIspTypesResponse
   */
  async listIspTypes(request: $_model.ListIspTypesRequest): Promise<$_model.ListIspTypesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listIspTypesWithOptions(request, runtime);
  }

  /**
   * Queries the certificates associated with a listener.
   * 
   * @param request - ListListenerCertificatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListListenerCertificatesResponse
   */
  async listListenerCertificatesWithOptions(request: $_model.ListListenerCertificatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListListenerCertificatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
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

    if (!$dara.isNull(request.role)) {
      query["Role"] = request.role;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListListenerCertificates",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListListenerCertificatesResponse>(await this.callApi(params, req, runtime), new $_model.ListListenerCertificatesResponse({}));
  }

  /**
   * Queries the certificates associated with a listener.
   * 
   * @param request - ListListenerCertificatesRequest
   * @returns ListListenerCertificatesResponse
   */
  async listListenerCertificates(request: $_model.ListListenerCertificatesRequest): Promise<$_model.ListListenerCertificatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listListenerCertificatesWithOptions(request, runtime);
  }

  /**
   * Queries the listeners of a Global Accelerator (GA) instance.
   * 
   * @remarks
   * This operation is used to query information about the listeners of a GA instance, including the status of each listener, the timestamp that indicates when each listener was created, and the listener ports.
   * 
   * @param request - ListListenersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListListenersResponse
   */
  async listListenersWithOptions(request: $_model.ListListenersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListListenersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.protocol)) {
      query["Protocol"] = request.protocol;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListListeners",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListListenersResponse>(await this.callApi(params, req, runtime), new $_model.ListListenersResponse({}));
  }

  /**
   * Queries the listeners of a Global Accelerator (GA) instance.
   * 
   * @remarks
   * This operation is used to query information about the listeners of a GA instance, including the status of each listener, the timestamp that indicates when each listener was created, and the listener ports.
   * 
   * @param request - ListListenersRequest
   * @returns ListListenersResponse
   */
  async listListeners(request: $_model.ListListenersRequest): Promise<$_model.ListListenersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listListenersWithOptions(request, runtime);
  }

  /**
   * Queries the information about the secondary IP addresses that are associated with a CNAME.
   * 
   * @param request - ListSpareIpsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSpareIpsResponse
   */
  async listSpareIpsWithOptions(request: $_model.ListSpareIpsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSpareIpsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
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
      action: "ListSpareIps",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSpareIpsResponse>(await this.callApi(params, req, runtime), new $_model.ListSpareIpsResponse({}));
  }

  /**
   * Queries the information about the secondary IP addresses that are associated with a CNAME.
   * 
   * @param request - ListSpareIpsRequest
   * @returns ListSpareIpsResponse
   */
  async listSpareIps(request: $_model.ListSpareIpsRequest): Promise<$_model.ListSpareIpsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSpareIpsWithOptions(request, runtime);
  }

  /**
   * Queries the TLS security policies that are supported by HTTPS listeners.
   * 
   * @remarks
   * You can select a TLS security policy when you create an HTTPS listener. This API operation is used to query the TLS security policies that are supported by HTTPS listeners.
   * 
   * @param request - ListSystemSecurityPoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSystemSecurityPoliciesResponse
   */
  async listSystemSecurityPoliciesWithOptions(request: $_model.ListSystemSecurityPoliciesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSystemSecurityPoliciesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSystemSecurityPolicies",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSystemSecurityPoliciesResponse>(await this.callApi(params, req, runtime), new $_model.ListSystemSecurityPoliciesResponse({}));
  }

  /**
   * Queries the TLS security policies that are supported by HTTPS listeners.
   * 
   * @remarks
   * You can select a TLS security policy when you create an HTTPS listener. This API operation is used to query the TLS security policies that are supported by HTTPS listeners.
   * 
   * @param request - ListSystemSecurityPoliciesRequest
   * @returns ListSystemSecurityPoliciesResponse
   */
  async listSystemSecurityPolicies(request: $_model.ListSystemSecurityPoliciesRequest): Promise<$_model.ListSystemSecurityPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSystemSecurityPoliciesWithOptions(request, runtime);
  }

  /**
   * Queries the tags that are added to Global Accelerator (GA) resources.
   * 
   * @remarks
   *   You must specify **ResourceId** or **Tag** in the request to specify the object that you want to query.********
   * *   **Tag** is a resource tag that consists of a key-value pair (Key and Value). If you specify only **Key**, all tag values that are associated with the specified tag key are returned. If you specify only **Value**, an error message is returned.
   * *   If you specify **Tag** and **ResourceId** to filter tags, **ResourceId** must match all specified key-value pairs.
   * *   If you specify multiple key-value pairs, resources that contain the key-value pairs are returned.
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: $_model.ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
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
      version: "2019-11-20",
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
   * Queries the tags that are added to Global Accelerator (GA) resources.
   * 
   * @remarks
   *   You must specify **ResourceId** or **Tag** in the request to specify the object that you want to query.********
   * *   **Tag** is a resource tag that consists of a key-value pair (Key and Value). If you specify only **Key**, all tag values that are associated with the specified tag key are returned. If you specify only **Value**, an error message is returned.
   * *   If you specify **Tag** and **ResourceId** to filter tags, **ResourceId** must match all specified key-value pairs.
   * *   If you specify multiple key-value pairs, resources that contain the key-value pairs are returned.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Activates the pay-as-you-go Global Accelerator (GA) service. If you want to use pay-as-you-go GA instances, you must activate the pay-as-you-go GA service first.
   * 
   * @param request - OpenAcceleratorServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenAcceleratorServiceResponse
   */
  async openAcceleratorServiceWithOptions(request: $_model.OpenAcceleratorServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OpenAcceleratorServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OpenAcceleratorService",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OpenAcceleratorServiceResponse>(await this.callApi(params, req, runtime), new $_model.OpenAcceleratorServiceResponse({}));
  }

  /**
   * Activates the pay-as-you-go Global Accelerator (GA) service. If you want to use pay-as-you-go GA instances, you must activate the pay-as-you-go GA service first.
   * 
   * @param request - OpenAcceleratorServiceRequest
   * @returns OpenAcceleratorServiceResponse
   */
  async openAcceleratorService(request: $_model.OpenAcceleratorServiceRequest): Promise<$_model.OpenAcceleratorServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.openAcceleratorServiceWithOptions(request, runtime);
  }

  /**
   * Inquire about the approval status of cross-border permissions for an Alibaba Cloud account (main account).
   * 
   * @param request - QueryCrossBorderApprovalStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCrossBorderApprovalStatusResponse
   */
  async queryCrossBorderApprovalStatusWithOptions(request: $_model.QueryCrossBorderApprovalStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCrossBorderApprovalStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCrossBorderApprovalStatus",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCrossBorderApprovalStatusResponse>(await this.callApi(params, req, runtime), new $_model.QueryCrossBorderApprovalStatusResponse({}));
  }

  /**
   * Inquire about the approval status of cross-border permissions for an Alibaba Cloud account (main account).
   * 
   * @param request - QueryCrossBorderApprovalStatusRequest
   * @returns QueryCrossBorderApprovalStatusResponse
   */
  async queryCrossBorderApprovalStatus(request: $_model.QueryCrossBorderApprovalStatusRequest): Promise<$_model.QueryCrossBorderApprovalStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCrossBorderApprovalStatusWithOptions(request, runtime);
  }

  /**
   * Deletes IP entries from an access control list (ACL).
   * 
   * @remarks
   *   **RemoveEntriesFromAcl** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetAcl](https://help.aliyun.com/document_detail/258292.html) or [ListAcls](https://help.aliyun.com/document_detail/258291.html) operation to query the status of the ACL from which you want to delete IP entries.
   *     *   If the ACL is in the **configuring** state, it indicates that the IP entries are being deleted. In this case, you can perform only query operations.
   *     *   If the ACL is in the **active** state, it indicates that the IP entries are deleted.
   * *   The **RemoveEntriesFromAcl** operation holds an exclusive lock on the Global Accelerator (GA) instance. While the operation is in progress, you cannot call the same operation in the same Alibaba Cloud account.
   * 
   * @param request - RemoveEntriesFromAclRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveEntriesFromAclResponse
   */
  async removeEntriesFromAclWithOptions(request: $_model.RemoveEntriesFromAclRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveEntriesFromAclResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclEntries)) {
      query["AclEntries"] = request.aclEntries;
    }

    if (!$dara.isNull(request.aclId)) {
      query["AclId"] = request.aclId;
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
      action: "RemoveEntriesFromAcl",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveEntriesFromAclResponse>(await this.callApi(params, req, runtime), new $_model.RemoveEntriesFromAclResponse({}));
  }

  /**
   * Deletes IP entries from an access control list (ACL).
   * 
   * @remarks
   *   **RemoveEntriesFromAcl** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetAcl](https://help.aliyun.com/document_detail/258292.html) or [ListAcls](https://help.aliyun.com/document_detail/258291.html) operation to query the status of the ACL from which you want to delete IP entries.
   *     *   If the ACL is in the **configuring** state, it indicates that the IP entries are being deleted. In this case, you can perform only query operations.
   *     *   If the ACL is in the **active** state, it indicates that the IP entries are deleted.
   * *   The **RemoveEntriesFromAcl** operation holds an exclusive lock on the Global Accelerator (GA) instance. While the operation is in progress, you cannot call the same operation in the same Alibaba Cloud account.
   * 
   * @param request - RemoveEntriesFromAclRequest
   * @returns RemoveEntriesFromAclResponse
   */
  async removeEntriesFromAcl(request: $_model.RemoveEntriesFromAclRequest): Promise<$_model.RemoveEntriesFromAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeEntriesFromAclWithOptions(request, runtime);
  }

  /**
   * Replaces the bandwidth plans of Global Accelerator (GA) instances.
   * 
   * @remarks
   * When you call this operation, take note of the following items:
   * *   The GA instance continues to forward network traffic.
   * *   **ReplaceBandwidthPackage** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeAccelerator](https://help.aliyun.com/document_detail/153235.html) or [ListAccelerators](https://help.aliyun.com/document_detail/153236.html) operation to query the status of the GA instance.
   *     *   If the GA instance is in the **configuring** state, it indicates that the associated bandwidth plan is being replaced. In this case, you can perform only query operations.
   *     *   If the GA instance is in the **active** state, it indicates that the associated bandwidth plan is replaced.
   * *   The **ReplaceBandwidthPackage** operation holds an exclusive lock on the GA instance. While the operation is in progress, you cannot call the same operation in the same Alibaba Cloud account.
   * 
   * @param request - ReplaceBandwidthPackageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReplaceBandwidthPackageResponse
   */
  async replaceBandwidthPackageWithOptions(request: $_model.ReplaceBandwidthPackageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReplaceBandwidthPackageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.bandwidthPackageId)) {
      query["BandwidthPackageId"] = request.bandwidthPackageId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.targetBandwidthPackageId)) {
      query["TargetBandwidthPackageId"] = request.targetBandwidthPackageId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReplaceBandwidthPackage",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReplaceBandwidthPackageResponse>(await this.callApi(params, req, runtime), new $_model.ReplaceBandwidthPackageResponse({}));
  }

  /**
   * Replaces the bandwidth plans of Global Accelerator (GA) instances.
   * 
   * @remarks
   * When you call this operation, take note of the following items:
   * *   The GA instance continues to forward network traffic.
   * *   **ReplaceBandwidthPackage** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeAccelerator](https://help.aliyun.com/document_detail/153235.html) or [ListAccelerators](https://help.aliyun.com/document_detail/153236.html) operation to query the status of the GA instance.
   *     *   If the GA instance is in the **configuring** state, it indicates that the associated bandwidth plan is being replaced. In this case, you can perform only query operations.
   *     *   If the GA instance is in the **active** state, it indicates that the associated bandwidth plan is replaced.
   * *   The **ReplaceBandwidthPackage** operation holds an exclusive lock on the GA instance. While the operation is in progress, you cannot call the same operation in the same Alibaba Cloud account.
   * 
   * @param request - ReplaceBandwidthPackageRequest
   * @returns ReplaceBandwidthPackageResponse
   */
  async replaceBandwidthPackage(request: $_model.ReplaceBandwidthPackageRequest): Promise<$_model.ReplaceBandwidthPackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.replaceBandwidthPackageWithOptions(request, runtime);
  }

  /**
   * Adds tags to Global Accelerator (GA) resources.
   * 
   * @remarks
   * You can add up to 20 tags to each GA resource. When you call this operation, Alibaba Cloud first checks the number of existing tags attached to the resource. If the quota is reached, an error message is returned.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
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
      version: "2019-11-20",
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
   * Adds tags to Global Accelerator (GA) resources.
   * 
   * @remarks
   * You can add up to 20 tags to each GA resource. When you call this operation, Alibaba Cloud first checks the number of existing tags attached to the resource. If the quota is reached, an error message is returned.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Removes tags from Global Accelerator (GA) resources.
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

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
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
      version: "2019-11-20",
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
   * Removes tags from Global Accelerator (GA) resources.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Modifies a Global Accelerator (GA) instance.
   * 
   * @remarks
   *   **UpdateAccelerator** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [DescribeAccelerator](https://help.aliyun.com/document_detail/153235.html) operation to query the status of a GA instance.
   *     *   If the GA instance is in the **configuring** state, the GA instance is being modified. In this case, you can perform only query operations.
   *     *   If the GA instance is in the **active** state, the GA instance is modified.
   * *   The **UpdateAccelerator** operation cannot be repeatedly called for the same GA instance within a specific period of time.
   * 
   * @param request - UpdateAcceleratorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAcceleratorResponse
   */
  async updateAcceleratorWithOptions(request: $_model.UpdateAcceleratorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAcceleratorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.autoUseCoupon)) {
      query["AutoUseCoupon"] = request.autoUseCoupon;
    }

    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.spec)) {
      query["Spec"] = request.spec;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAccelerator",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAcceleratorResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAcceleratorResponse({}));
  }

  /**
   * Modifies a Global Accelerator (GA) instance.
   * 
   * @remarks
   *   **UpdateAccelerator** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [DescribeAccelerator](https://help.aliyun.com/document_detail/153235.html) operation to query the status of a GA instance.
   *     *   If the GA instance is in the **configuring** state, the GA instance is being modified. In this case, you can perform only query operations.
   *     *   If the GA instance is in the **active** state, the GA instance is modified.
   * *   The **UpdateAccelerator** operation cannot be repeatedly called for the same GA instance within a specific period of time.
   * 
   * @param request - UpdateAcceleratorRequest
   * @returns UpdateAcceleratorResponse
   */
  async updateAccelerator(request: $_model.UpdateAcceleratorRequest): Promise<$_model.UpdateAcceleratorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAcceleratorWithOptions(request, runtime);
  }

  /**
   * Modifies the auto-renewal settings of a Global Accelerator (GA) instance.
   * 
   * @remarks
   * You cannot repeatedly call the **UpdateAcceleratorAutoRenewAttribute** operation for the same GA instance within a specific period of time.
   * 
   * @param request - UpdateAcceleratorAutoRenewAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAcceleratorAutoRenewAttributeResponse
   */
  async updateAcceleratorAutoRenewAttributeWithOptions(request: $_model.UpdateAcceleratorAutoRenewAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAcceleratorAutoRenewAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.autoRenewDuration)) {
      query["AutoRenewDuration"] = request.autoRenewDuration;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.renewalStatus)) {
      query["RenewalStatus"] = request.renewalStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAcceleratorAutoRenewAttribute",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAcceleratorAutoRenewAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAcceleratorAutoRenewAttributeResponse({}));
  }

  /**
   * Modifies the auto-renewal settings of a Global Accelerator (GA) instance.
   * 
   * @remarks
   * You cannot repeatedly call the **UpdateAcceleratorAutoRenewAttribute** operation for the same GA instance within a specific period of time.
   * 
   * @param request - UpdateAcceleratorAutoRenewAttributeRequest
   * @returns UpdateAcceleratorAutoRenewAttributeResponse
   */
  async updateAcceleratorAutoRenewAttribute(request: $_model.UpdateAcceleratorAutoRenewAttributeRequest): Promise<$_model.UpdateAcceleratorAutoRenewAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAcceleratorAutoRenewAttributeWithOptions(request, runtime);
  }

  /**
   * Confirms the updated specification of a Global Accelerator (GA) instance.
   * 
   * @remarks
   * After you modify the specification of a GA instance, you must confirm the modification. The **UpdateAcceleratorConfirm** operation is used to confirm the specification of a GA instance that is modified. When you call this operation to confirm the specification of a GA instance, take note of the following items:
   * *   **UpdateAcceleratorConfirm** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [DescribeAccelerator](https://help.aliyun.com/document_detail/153235.html) operation to query the status of a GA instance.
   *     *   If the GA instance is in the **configuring** state, it indicates that the specification of the instance is being modified. In this case, you can perform only query operations.
   *     *   If the GA instance is in the **active** state, it indicates that the specification of the instance is modified.
   * *   The **UpdateAcceleratorConfirm** operation cannot be called repeatedly for the same GA instance within a specific period of time.
   * 
   * @param request - UpdateAcceleratorConfirmRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAcceleratorConfirmResponse
   */
  async updateAcceleratorConfirmWithOptions(request: $_model.UpdateAcceleratorConfirmRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAcceleratorConfirmResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAcceleratorConfirm",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAcceleratorConfirmResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAcceleratorConfirmResponse({}));
  }

  /**
   * Confirms the updated specification of a Global Accelerator (GA) instance.
   * 
   * @remarks
   * After you modify the specification of a GA instance, you must confirm the modification. The **UpdateAcceleratorConfirm** operation is used to confirm the specification of a GA instance that is modified. When you call this operation to confirm the specification of a GA instance, take note of the following items:
   * *   **UpdateAcceleratorConfirm** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [DescribeAccelerator](https://help.aliyun.com/document_detail/153235.html) operation to query the status of a GA instance.
   *     *   If the GA instance is in the **configuring** state, it indicates that the specification of the instance is being modified. In this case, you can perform only query operations.
   *     *   If the GA instance is in the **active** state, it indicates that the specification of the instance is modified.
   * *   The **UpdateAcceleratorConfirm** operation cannot be called repeatedly for the same GA instance within a specific period of time.
   * 
   * @param request - UpdateAcceleratorConfirmRequest
   * @returns UpdateAcceleratorConfirmResponse
   */
  async updateAcceleratorConfirm(request: $_model.UpdateAcceleratorConfirmRequest): Promise<$_model.UpdateAcceleratorConfirmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAcceleratorConfirmWithOptions(request, runtime);
  }

  /**
   * Changes the type of transmission network for a Global Accelerator (GA) instance.
   * 
   * @remarks
   * You can call this operation to change the type of transmission network for a **standard** GA instance whose bandwidth metering method is **pay-by-data-transfer**. Before you call this operation, make sure that the following requirements are met:
   * *   Cloud Data Transfer (CDT) is activated. When you call the [CreateAccelerator](https://help.aliyun.com/document_detail/206786.html) operation and set **BandwidthBillingType** to **CDT** to create a **standard** GA instance whose bandwidth metering method is **pay-by-data-transfer**, CDT is automatically activated. The data transfer fees are managed by CDT.
   * *   If you want to set **CrossBorderMode** to **private**, which specifies cross-border Express Connect circuit as the type of transmission network, make sure that real-name verification is complete for your enterprise account. For more information, see [Real-name verification](https://help.aliyun.com/document_detail/52595.html).
   * 
   * @param request - UpdateAcceleratorCrossBorderModeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAcceleratorCrossBorderModeResponse
   */
  async updateAcceleratorCrossBorderModeWithOptions(request: $_model.UpdateAcceleratorCrossBorderModeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAcceleratorCrossBorderModeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.crossBorderMode)) {
      query["CrossBorderMode"] = request.crossBorderMode;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAcceleratorCrossBorderMode",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAcceleratorCrossBorderModeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAcceleratorCrossBorderModeResponse({}));
  }

  /**
   * Changes the type of transmission network for a Global Accelerator (GA) instance.
   * 
   * @remarks
   * You can call this operation to change the type of transmission network for a **standard** GA instance whose bandwidth metering method is **pay-by-data-transfer**. Before you call this operation, make sure that the following requirements are met:
   * *   Cloud Data Transfer (CDT) is activated. When you call the [CreateAccelerator](https://help.aliyun.com/document_detail/206786.html) operation and set **BandwidthBillingType** to **CDT** to create a **standard** GA instance whose bandwidth metering method is **pay-by-data-transfer**, CDT is automatically activated. The data transfer fees are managed by CDT.
   * *   If you want to set **CrossBorderMode** to **private**, which specifies cross-border Express Connect circuit as the type of transmission network, make sure that real-name verification is complete for your enterprise account. For more information, see [Real-name verification](https://help.aliyun.com/document_detail/52595.html).
   * 
   * @param request - UpdateAcceleratorCrossBorderModeRequest
   * @returns UpdateAcceleratorCrossBorderModeResponse
   */
  async updateAcceleratorCrossBorderMode(request: $_model.UpdateAcceleratorCrossBorderModeRequest): Promise<$_model.UpdateAcceleratorCrossBorderModeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAcceleratorCrossBorderModeWithOptions(request, runtime);
  }

  /**
   * Enables cross-border data transmission for a Global Accelerator (GA) instance.
   * 
   * @remarks
   * You can call this operation to enable or disable cross-border data transmission for basic or standard GA instances that use Cloud Data Transfer (CDT) to bill data transfers.
   * 
   * @param request - UpdateAcceleratorCrossBorderStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAcceleratorCrossBorderStatusResponse
   */
  async updateAcceleratorCrossBorderStatusWithOptions(request: $_model.UpdateAcceleratorCrossBorderStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAcceleratorCrossBorderStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.crossBorderStatus)) {
      query["CrossBorderStatus"] = request.crossBorderStatus;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAcceleratorCrossBorderStatus",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAcceleratorCrossBorderStatusResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAcceleratorCrossBorderStatusResponse({}));
  }

  /**
   * Enables cross-border data transmission for a Global Accelerator (GA) instance.
   * 
   * @remarks
   * You can call this operation to enable or disable cross-border data transmission for basic or standard GA instances that use Cloud Data Transfer (CDT) to bill data transfers.
   * 
   * @param request - UpdateAcceleratorCrossBorderStatusRequest
   * @returns UpdateAcceleratorCrossBorderStatusResponse
   */
  async updateAcceleratorCrossBorderStatus(request: $_model.UpdateAcceleratorCrossBorderStatusRequest): Promise<$_model.UpdateAcceleratorCrossBorderStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAcceleratorCrossBorderStatusWithOptions(request, runtime);
  }

  /**
   * Modifies the attributes of an access control list (ACL) of a Global Accelerator (GA) instance.
   * 
   * @param request - UpdateAclAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAclAttributeResponse
   */
  async updateAclAttributeWithOptions(request: $_model.UpdateAclAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAclAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!$dara.isNull(request.aclName)) {
      query["AclName"] = request.aclName;
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
      action: "UpdateAclAttribute",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAclAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAclAttributeResponse({}));
  }

  /**
   * Modifies the attributes of an access control list (ACL) of a Global Accelerator (GA) instance.
   * 
   * @param request - UpdateAclAttributeRequest
   * @returns UpdateAclAttributeResponse
   */
  async updateAclAttribute(request: $_model.UpdateAclAttributeRequest): Promise<$_model.UpdateAclAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAclAttributeWithOptions(request, runtime);
  }

  /**
   * Replaces an expired additional certificate for an HTTPS listener.
   * 
   * @remarks
   * The UpdateAdditionalCertificateWithListener operation is used to replace an additional certificate. This operation is suitable for scenarios in which the original certificate expires and needs to be replaced with a new certificate and the associated domain name remains unchanged.
   * *   **UpdateAdditionalCertificateWithListener** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListListenerCertificates](https://help.aliyun.com/document_detail/307743.html) to query the status of the task:
   *     *   If the certificate to be replaced is in the **updating** state, the certificate is being replaced. In this case, you can only query the certificate.
   *     *   If the new certificate is in the **active** state, the new certificate is in effect.
   * *   You cannot repeatedly call the **UpdateAdditionalCertificateWithListener** operation for the same GA instance within a specific period of time.
   * 
   * @param request - UpdateAdditionalCertificateWithListenerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAdditionalCertificateWithListenerResponse
   */
  async updateAdditionalCertificateWithListenerWithOptions(request: $_model.UpdateAdditionalCertificateWithListenerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAdditionalCertificateWithListenerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.certificateId)) {
      query["CertificateId"] = request.certificateId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAdditionalCertificateWithListener",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAdditionalCertificateWithListenerResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAdditionalCertificateWithListenerResponse({}));
  }

  /**
   * Replaces an expired additional certificate for an HTTPS listener.
   * 
   * @remarks
   * The UpdateAdditionalCertificateWithListener operation is used to replace an additional certificate. This operation is suitable for scenarios in which the original certificate expires and needs to be replaced with a new certificate and the associated domain name remains unchanged.
   * *   **UpdateAdditionalCertificateWithListener** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListListenerCertificates](https://help.aliyun.com/document_detail/307743.html) to query the status of the task:
   *     *   If the certificate to be replaced is in the **updating** state, the certificate is being replaced. In this case, you can only query the certificate.
   *     *   If the new certificate is in the **active** state, the new certificate is in effect.
   * *   You cannot repeatedly call the **UpdateAdditionalCertificateWithListener** operation for the same GA instance within a specific period of time.
   * 
   * @param request - UpdateAdditionalCertificateWithListenerRequest
   * @returns UpdateAdditionalCertificateWithListenerResponse
   */
  async updateAdditionalCertificateWithListener(request: $_model.UpdateAdditionalCertificateWithListenerRequest): Promise<$_model.UpdateAdditionalCertificateWithListenerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAdditionalCertificateWithListenerWithOptions(request, runtime);
  }

  /**
   * Modifies an origin probing task.
   * 
   * @remarks
   * *UpdateApplicationMonitor** is an asynchronous operation. After you send a request, the system returns a request ID, but this operation is still being performed in the system background. You can call the [DescribeApplicationMonitor](https://help.aliyun.com/document_detail/408463.html) or [ListApplicationMonitor](https://help.aliyun.com/document_detail/408462.html) operation to check whether the configurations of an origin probing task are modified.
   * *   If the values of modified parameters remain unchanged, it indicates that the origin probing task is being modified. In this case, you can perform only query operations.
   * *   If the values of modified parameters change, it indicates that the origin probing task is modified.
   * 
   * @param request - UpdateApplicationMonitorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateApplicationMonitorResponse
   */
  async updateApplicationMonitorWithOptions(request: $_model.UpdateApplicationMonitorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateApplicationMonitorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.address)) {
      query["Address"] = request.address;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.detectEnable)) {
      query["DetectEnable"] = request.detectEnable;
    }

    if (!$dara.isNull(request.detectThreshold)) {
      query["DetectThreshold"] = request.detectThreshold;
    }

    if (!$dara.isNull(request.detectTimes)) {
      query["DetectTimes"] = request.detectTimes;
    }

    if (!$dara.isNull(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    if (!$dara.isNull(request.optionsJson)) {
      query["OptionsJson"] = request.optionsJson;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.silenceTime)) {
      query["SilenceTime"] = request.silenceTime;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateApplicationMonitor",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateApplicationMonitorResponse>(await this.callApi(params, req, runtime), new $_model.UpdateApplicationMonitorResponse({}));
  }

  /**
   * Modifies an origin probing task.
   * 
   * @remarks
   * *UpdateApplicationMonitor** is an asynchronous operation. After you send a request, the system returns a request ID, but this operation is still being performed in the system background. You can call the [DescribeApplicationMonitor](https://help.aliyun.com/document_detail/408463.html) or [ListApplicationMonitor](https://help.aliyun.com/document_detail/408462.html) operation to check whether the configurations of an origin probing task are modified.
   * *   If the values of modified parameters remain unchanged, it indicates that the origin probing task is being modified. In this case, you can perform only query operations.
   * *   If the values of modified parameters change, it indicates that the origin probing task is modified.
   * 
   * @param request - UpdateApplicationMonitorRequest
   * @returns UpdateApplicationMonitorResponse
   */
  async updateApplicationMonitor(request: $_model.UpdateApplicationMonitorRequest): Promise<$_model.UpdateApplicationMonitorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateApplicationMonitorWithOptions(request, runtime);
  }

  /**
   * Changes the auto-renewal status of a bandwidth plan.
   * 
   * @remarks
   * You cannot repeatedly call the **UpdateBandwidthPackagaAutoRenewAttribute** operation to modify the auto-renewal settings of a bandwidth plan.
   * 
   * @param request - UpdateBandwidthPackagaAutoRenewAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateBandwidthPackagaAutoRenewAttributeResponse
   */
  async updateBandwidthPackagaAutoRenewAttributeWithOptions(request: $_model.UpdateBandwidthPackagaAutoRenewAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateBandwidthPackagaAutoRenewAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.autoRenewDuration)) {
      query["AutoRenewDuration"] = request.autoRenewDuration;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.renewalStatus)) {
      query["RenewalStatus"] = request.renewalStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateBandwidthPackagaAutoRenewAttribute",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateBandwidthPackagaAutoRenewAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateBandwidthPackagaAutoRenewAttributeResponse({}));
  }

  /**
   * Changes the auto-renewal status of a bandwidth plan.
   * 
   * @remarks
   * You cannot repeatedly call the **UpdateBandwidthPackagaAutoRenewAttribute** operation to modify the auto-renewal settings of a bandwidth plan.
   * 
   * @param request - UpdateBandwidthPackagaAutoRenewAttributeRequest
   * @returns UpdateBandwidthPackagaAutoRenewAttributeResponse
   */
  async updateBandwidthPackagaAutoRenewAttribute(request: $_model.UpdateBandwidthPackagaAutoRenewAttributeRequest): Promise<$_model.UpdateBandwidthPackagaAutoRenewAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateBandwidthPackagaAutoRenewAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of a bandwidth plan.
   * 
   * @remarks
   * Take note of the following items:
   * *   **UpdateBandwidthPackage** is a synchronous operation when you call the operation to modify the configuration excluding the bandwidth value of a bandwidth plan. The new configuration immediately takes effect after the operation is performed.
   * *   **UpdateBandwidthPackage** is an asynchronous operation when you call the operation to modify the configuration including the bandwidth value of a bandwidth plan that is not associated with a Global Accelerator (GA) instance. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeBandwidthPackage](https://help.aliyun.com/document_detail/153241.html) operation to query the status of the task.
   *     *   If the parameter values of the bandwidth plan remain unchanged, the bandwidth plan is being modified. In this case, you can perform only query operations.
   *     *   If the parameter values of the bandwidth plan are changed, the bandwidth plan is modified.
   * *   **UpdateBandwidthPackage** is an asynchronous operation when you call the operation to modify the configuration including the bandwidth value of a bandwidth plan that is associated with a GA instance. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeAccelerator](https://help.aliyun.com/document_detail/153235.html) operation to query the status of the task.
   *     *   If the GA instance is in the **configuring** state, the bandwidth plan is being modified. In this case, you can perform only query operations.
   *     *   If the GA instance is in the **active** state, the bandwidth plan is modified.
   * *   You cannot repeatedly call the **UpdateBandwidthPackage** operation for the same bandwidth plan within a specific period of time.
   * 
   * @param request - UpdateBandwidthPackageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateBandwidthPackageResponse
   */
  async updateBandwidthPackageWithOptions(request: $_model.UpdateBandwidthPackageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateBandwidthPackageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.autoUseCoupon)) {
      query["AutoUseCoupon"] = request.autoUseCoupon;
    }

    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.bandwidthPackageId)) {
      query["BandwidthPackageId"] = request.bandwidthPackageId;
    }

    if (!$dara.isNull(request.bandwidthType)) {
      query["BandwidthType"] = request.bandwidthType;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateBandwidthPackage",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateBandwidthPackageResponse>(await this.callApi(params, req, runtime), new $_model.UpdateBandwidthPackageResponse({}));
  }

  /**
   * Modifies the configurations of a bandwidth plan.
   * 
   * @remarks
   * Take note of the following items:
   * *   **UpdateBandwidthPackage** is a synchronous operation when you call the operation to modify the configuration excluding the bandwidth value of a bandwidth plan. The new configuration immediately takes effect after the operation is performed.
   * *   **UpdateBandwidthPackage** is an asynchronous operation when you call the operation to modify the configuration including the bandwidth value of a bandwidth plan that is not associated with a Global Accelerator (GA) instance. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeBandwidthPackage](https://help.aliyun.com/document_detail/153241.html) operation to query the status of the task.
   *     *   If the parameter values of the bandwidth plan remain unchanged, the bandwidth plan is being modified. In this case, you can perform only query operations.
   *     *   If the parameter values of the bandwidth plan are changed, the bandwidth plan is modified.
   * *   **UpdateBandwidthPackage** is an asynchronous operation when you call the operation to modify the configuration including the bandwidth value of a bandwidth plan that is associated with a GA instance. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeAccelerator](https://help.aliyun.com/document_detail/153235.html) operation to query the status of the task.
   *     *   If the GA instance is in the **configuring** state, the bandwidth plan is being modified. In this case, you can perform only query operations.
   *     *   If the GA instance is in the **active** state, the bandwidth plan is modified.
   * *   You cannot repeatedly call the **UpdateBandwidthPackage** operation for the same bandwidth plan within a specific period of time.
   * 
   * @param request - UpdateBandwidthPackageRequest
   * @returns UpdateBandwidthPackageResponse
   */
  async updateBandwidthPackage(request: $_model.UpdateBandwidthPackageRequest): Promise<$_model.UpdateBandwidthPackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateBandwidthPackageWithOptions(request, runtime);
  }

  /**
   * Modifies the name and description of a basic Global Accelerator (GA) instance.
   * 
   * @param request - UpdateBasicAcceleratorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateBasicAcceleratorResponse
   */
  async updateBasicAcceleratorWithOptions(request: $_model.UpdateBasicAcceleratorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateBasicAcceleratorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateBasicAccelerator",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateBasicAcceleratorResponse>(await this.callApi(params, req, runtime), new $_model.UpdateBasicAcceleratorResponse({}));
  }

  /**
   * Modifies the name and description of a basic Global Accelerator (GA) instance.
   * 
   * @param request - UpdateBasicAcceleratorRequest
   * @returns UpdateBasicAcceleratorResponse
   */
  async updateBasicAccelerator(request: $_model.UpdateBasicAcceleratorRequest): Promise<$_model.UpdateBasicAcceleratorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateBasicAcceleratorWithOptions(request, runtime);
  }

  /**
   * Modifies the name of an endpoint that is associated with a basic Global Accelerator (GA) instance.
   * 
   * @param request - UpdateBasicEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateBasicEndpointResponse
   */
  async updateBasicEndpointWithOptions(request: $_model.UpdateBasicEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateBasicEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.endpointGroupId)) {
      query["EndpointGroupId"] = request.endpointGroupId;
    }

    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateBasicEndpoint",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateBasicEndpointResponse>(await this.callApi(params, req, runtime), new $_model.UpdateBasicEndpointResponse({}));
  }

  /**
   * Modifies the name of an endpoint that is associated with a basic Global Accelerator (GA) instance.
   * 
   * @param request - UpdateBasicEndpointRequest
   * @returns UpdateBasicEndpointResponse
   */
  async updateBasicEndpoint(request: $_model.UpdateBasicEndpointRequest): Promise<$_model.UpdateBasicEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateBasicEndpointWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of an endpoint group that is associated with a basic Global Accelerator (GA) instance.
   * 
   * @remarks
   *   **UpdateBasicEndpointGroup** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. The system modifies the configurations of an endpoint group that is associated with a basic GA instance by deleting the endpoint group and creating a new endpoint group. You can call the [GetBasicAccelerator](https://help.aliyun.com/document_detail/353188.html) operation to query the status of the task.
   *     *   If the basic GA instance is in the **configuring** state, the configurations of the endpoint group are being modified. In this case, you can perform only query operations.
   *     *   If the basic GA instance is in the **active** state, the configurations of the endpoint group are modified.
   * *   The **UpdateBasicEndpointGroup** operation cannot be repeatedly called for the same basic GA instance within a specific period of time.
   * 
   * @param request - UpdateBasicEndpointGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateBasicEndpointGroupResponse
   */
  async updateBasicEndpointGroupWithOptions(request: $_model.UpdateBasicEndpointGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateBasicEndpointGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.endpointAddress)) {
      query["EndpointAddress"] = request.endpointAddress;
    }

    if (!$dara.isNull(request.endpointGroupId)) {
      query["EndpointGroupId"] = request.endpointGroupId;
    }

    if (!$dara.isNull(request.endpointSubAddress)) {
      query["EndpointSubAddress"] = request.endpointSubAddress;
    }

    if (!$dara.isNull(request.endpointType)) {
      query["EndpointType"] = request.endpointType;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateBasicEndpointGroup",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateBasicEndpointGroupResponse>(await this.callApi(params, req, runtime), new $_model.UpdateBasicEndpointGroupResponse({}));
  }

  /**
   * Modifies the configurations of an endpoint group that is associated with a basic Global Accelerator (GA) instance.
   * 
   * @remarks
   *   **UpdateBasicEndpointGroup** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. The system modifies the configurations of an endpoint group that is associated with a basic GA instance by deleting the endpoint group and creating a new endpoint group. You can call the [GetBasicAccelerator](https://help.aliyun.com/document_detail/353188.html) operation to query the status of the task.
   *     *   If the basic GA instance is in the **configuring** state, the configurations of the endpoint group are being modified. In this case, you can perform only query operations.
   *     *   If the basic GA instance is in the **active** state, the configurations of the endpoint group are modified.
   * *   The **UpdateBasicEndpointGroup** operation cannot be repeatedly called for the same basic GA instance within a specific period of time.
   * 
   * @param request - UpdateBasicEndpointGroupRequest
   * @returns UpdateBasicEndpointGroupResponse
   */
  async updateBasicEndpointGroup(request: $_model.UpdateBasicEndpointGroupRequest): Promise<$_model.UpdateBasicEndpointGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateBasicEndpointGroupWithOptions(request, runtime);
  }

  /**
   * Modifies the bandwidth of an acceleration region of a basic Global Accelerator (GA) instance.
   * 
   * @remarks
   * Before you call this operation, take note of the following limits:
   * *   You can modify the bandwidth of an acceleration region of a basic GA instance only if the bandwidth metering method of the basic GA instance is **pay-by-data-transfer**.
   * *   **UpdateBasicIpSet** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetBasicIpSet](https://help.aliyun.com/document_detail/362987.html) operation to query the status of the task.
   *     *   If the acceleration region is in the **updating** state, it indicates that the bandwidth of the acceleration region is being modified. In this case, you can perform only query operations.
   *     *   If the acceleration region is in the **active** state, it indicates that the bandwidth of the acceleration region is modified.
   * *   You cannot repeatedly call the **UpdateBasicIpSet** operation for the same basic GA instance within a specific period of time.
   * 
   * @param request - UpdateBasicIpSetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateBasicIpSetResponse
   */
  async updateBasicIpSetWithOptions(request: $_model.UpdateBasicIpSetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateBasicIpSetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ipSetId)) {
      query["IpSetId"] = request.ipSetId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateBasicIpSet",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateBasicIpSetResponse>(await this.callApi(params, req, runtime), new $_model.UpdateBasicIpSetResponse({}));
  }

  /**
   * Modifies the bandwidth of an acceleration region of a basic Global Accelerator (GA) instance.
   * 
   * @remarks
   * Before you call this operation, take note of the following limits:
   * *   You can modify the bandwidth of an acceleration region of a basic GA instance only if the bandwidth metering method of the basic GA instance is **pay-by-data-transfer**.
   * *   **UpdateBasicIpSet** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetBasicIpSet](https://help.aliyun.com/document_detail/362987.html) operation to query the status of the task.
   *     *   If the acceleration region is in the **updating** state, it indicates that the bandwidth of the acceleration region is being modified. In this case, you can perform only query operations.
   *     *   If the acceleration region is in the **active** state, it indicates that the bandwidth of the acceleration region is modified.
   * *   You cannot repeatedly call the **UpdateBasicIpSet** operation for the same basic GA instance within a specific period of time.
   * 
   * @param request - UpdateBasicIpSetRequest
   * @returns UpdateBasicIpSetResponse
   */
  async updateBasicIpSet(request: $_model.UpdateBasicIpSetRequest): Promise<$_model.UpdateBasicIpSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateBasicIpSetWithOptions(request, runtime);
  }

  /**
   * Modifies the name and description of an endpoint group that is associated with a custom routing listener.
   * 
   * @param request - UpdateCustomRoutingEndpointGroupAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCustomRoutingEndpointGroupAttributeResponse
   */
  async updateCustomRoutingEndpointGroupAttributeWithOptions(request: $_model.UpdateCustomRoutingEndpointGroupAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCustomRoutingEndpointGroupAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.endpointGroupId)) {
      query["EndpointGroupId"] = request.endpointGroupId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCustomRoutingEndpointGroupAttribute",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCustomRoutingEndpointGroupAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCustomRoutingEndpointGroupAttributeResponse({}));
  }

  /**
   * Modifies the name and description of an endpoint group that is associated with a custom routing listener.
   * 
   * @param request - UpdateCustomRoutingEndpointGroupAttributeRequest
   * @returns UpdateCustomRoutingEndpointGroupAttributeResponse
   */
  async updateCustomRoutingEndpointGroupAttribute(request: $_model.UpdateCustomRoutingEndpointGroupAttributeRequest): Promise<$_model.UpdateCustomRoutingEndpointGroupAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCustomRoutingEndpointGroupAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the mapping configurations of an endpoint group that is associated with a custom routing listener.
   * 
   * @remarks
   *   **UpdateCustomRoutingEndpointGroupDestinations** is an asynchronous operation. After you send a request, the system returns a request ID, but the operation is still being performed in the system background. You can call the [DescribeCustomRoutingEndpointGroup](https://help.aliyun.com/document_detail/449373.html) operation to query the status of an endpoint group associated with a custom routing listener to check whether the mapping configurations of the endpoint group are modified.
   *     *   If the endpoint group is in the **updating** state, the mapping configurations of the endpoint group are being modified. In this case, you can perform only query operations.
   *     *   If the endpoint group is in the **active** state, the mapping configurations of the endpoint group are modified.
   * *   The **UpdateCustomRoutingEndpointGroupDestinations** operation cannot be repeatedly called for the same Global Accelerator (GA) instance within a specific period of time.
   * 
   * @param request - UpdateCustomRoutingEndpointGroupDestinationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCustomRoutingEndpointGroupDestinationsResponse
   */
  async updateCustomRoutingEndpointGroupDestinationsWithOptions(request: $_model.UpdateCustomRoutingEndpointGroupDestinationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCustomRoutingEndpointGroupDestinationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.destinationConfigurations)) {
      query["DestinationConfigurations"] = request.destinationConfigurations;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.endpointGroupId)) {
      query["EndpointGroupId"] = request.endpointGroupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCustomRoutingEndpointGroupDestinations",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCustomRoutingEndpointGroupDestinationsResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCustomRoutingEndpointGroupDestinationsResponse({}));
  }

  /**
   * Modifies the mapping configurations of an endpoint group that is associated with a custom routing listener.
   * 
   * @remarks
   *   **UpdateCustomRoutingEndpointGroupDestinations** is an asynchronous operation. After you send a request, the system returns a request ID, but the operation is still being performed in the system background. You can call the [DescribeCustomRoutingEndpointGroup](https://help.aliyun.com/document_detail/449373.html) operation to query the status of an endpoint group associated with a custom routing listener to check whether the mapping configurations of the endpoint group are modified.
   *     *   If the endpoint group is in the **updating** state, the mapping configurations of the endpoint group are being modified. In this case, you can perform only query operations.
   *     *   If the endpoint group is in the **active** state, the mapping configurations of the endpoint group are modified.
   * *   The **UpdateCustomRoutingEndpointGroupDestinations** operation cannot be repeatedly called for the same Global Accelerator (GA) instance within a specific period of time.
   * 
   * @param request - UpdateCustomRoutingEndpointGroupDestinationsRequest
   * @returns UpdateCustomRoutingEndpointGroupDestinationsResponse
   */
  async updateCustomRoutingEndpointGroupDestinations(request: $_model.UpdateCustomRoutingEndpointGroupDestinationsRequest): Promise<$_model.UpdateCustomRoutingEndpointGroupDestinationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCustomRoutingEndpointGroupDestinationsWithOptions(request, runtime);
  }

  /**
   * Modifies the traffic policies for an endpoint that is associated with a custom routing listener.
   * 
   * @remarks
   *   **UpdateCustomRoutingEndpointTrafficPolicies** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [DescribeCustomRoutingEndpointGroup](https://help.aliyun.com/document_detail/449373.html) operation to query the status of the task.
   *     *   If the endpoint group is in the **updating** state, traffic policies are being modified for endpoints in the endpoint group. In this case, you can perform only query operations.
   *     *   If the endpoint group is in the **active** state, traffic policies are modified for endpoints in the endpoint group.
   * *   The **UpdateCustomRoutingEndpointTrafficPolicies** operation cannot be repeatedly called for the same Global Accelerator (GA) instance within a specific period of time.
   * 
   * @param request - UpdateCustomRoutingEndpointTrafficPoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCustomRoutingEndpointTrafficPoliciesResponse
   */
  async updateCustomRoutingEndpointTrafficPoliciesWithOptions(request: $_model.UpdateCustomRoutingEndpointTrafficPoliciesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCustomRoutingEndpointTrafficPoliciesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!$dara.isNull(request.policyConfigurations)) {
      query["PolicyConfigurations"] = request.policyConfigurations;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCustomRoutingEndpointTrafficPolicies",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCustomRoutingEndpointTrafficPoliciesResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCustomRoutingEndpointTrafficPoliciesResponse({}));
  }

  /**
   * Modifies the traffic policies for an endpoint that is associated with a custom routing listener.
   * 
   * @remarks
   *   **UpdateCustomRoutingEndpointTrafficPolicies** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [DescribeCustomRoutingEndpointGroup](https://help.aliyun.com/document_detail/449373.html) operation to query the status of the task.
   *     *   If the endpoint group is in the **updating** state, traffic policies are being modified for endpoints in the endpoint group. In this case, you can perform only query operations.
   *     *   If the endpoint group is in the **active** state, traffic policies are modified for endpoints in the endpoint group.
   * *   The **UpdateCustomRoutingEndpointTrafficPolicies** operation cannot be repeatedly called for the same Global Accelerator (GA) instance within a specific period of time.
   * 
   * @param request - UpdateCustomRoutingEndpointTrafficPoliciesRequest
   * @returns UpdateCustomRoutingEndpointTrafficPoliciesResponse
   */
  async updateCustomRoutingEndpointTrafficPolicies(request: $_model.UpdateCustomRoutingEndpointTrafficPoliciesRequest): Promise<$_model.UpdateCustomRoutingEndpointTrafficPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCustomRoutingEndpointTrafficPoliciesWithOptions(request, runtime);
  }

  /**
   * Modifies the endpoints of a custom routing listener.
   * 
   * @remarks
   * ## Description
   * *   **UpdateCustomRoutingEndpoints** is an asynchronous operation. After you send a request, the system returns a request ID, but the operation is still being performed in the system background. You can call the [DescribeCustomRoutingEndpointGroup](https://help.aliyun.com/document_detail/449373.html) operation to query the state of the endpoint groups associated with a custom routing listener to check whether the endpoints in the endpoint groups are modified.
   *     *   If an endpoint group is in the **updating** state, the endpoints in the endpoint group are being modified. In this case, you can perform only query operations.
   *     *   If an endpoint group is in the **active** state, the endpoints in the endpoint group are modified.
   * *   The **UpdateCustomRoutingEndpoints** operation cannot be repeatedly called for the same Global Accelerator (GA) instance within a specific period of time.
   * 
   * @param request - UpdateCustomRoutingEndpointsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCustomRoutingEndpointsResponse
   */
  async updateCustomRoutingEndpointsWithOptions(request: $_model.UpdateCustomRoutingEndpointsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCustomRoutingEndpointsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.endpointConfigurations)) {
      query["EndpointConfigurations"] = request.endpointConfigurations;
    }

    if (!$dara.isNull(request.endpointGroupId)) {
      query["EndpointGroupId"] = request.endpointGroupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCustomRoutingEndpoints",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCustomRoutingEndpointsResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCustomRoutingEndpointsResponse({}));
  }

  /**
   * Modifies the endpoints of a custom routing listener.
   * 
   * @remarks
   * ## Description
   * *   **UpdateCustomRoutingEndpoints** is an asynchronous operation. After you send a request, the system returns a request ID, but the operation is still being performed in the system background. You can call the [DescribeCustomRoutingEndpointGroup](https://help.aliyun.com/document_detail/449373.html) operation to query the state of the endpoint groups associated with a custom routing listener to check whether the endpoints in the endpoint groups are modified.
   *     *   If an endpoint group is in the **updating** state, the endpoints in the endpoint group are being modified. In this case, you can perform only query operations.
   *     *   If an endpoint group is in the **active** state, the endpoints in the endpoint group are modified.
   * *   The **UpdateCustomRoutingEndpoints** operation cannot be repeatedly called for the same Global Accelerator (GA) instance within a specific period of time.
   * 
   * @param request - UpdateCustomRoutingEndpointsRequest
   * @returns UpdateCustomRoutingEndpointsResponse
   */
  async updateCustomRoutingEndpoints(request: $_model.UpdateCustomRoutingEndpointsRequest): Promise<$_model.UpdateCustomRoutingEndpointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCustomRoutingEndpointsWithOptions(request, runtime);
  }

  /**
   * Modifies an accelerated domain name.
   * 
   * @remarks
   * You can call this operation to modify an accelerated domain name. If the new accelerated domain name is hosted in the Chinese mainland, you must obtain an Internet content provider (ICP) number for the domain name.
   * You cannot call the **UpdateDomain** operation again by using the same Alibaba Cloud account before the previous request is completed.
   * 
   * @param request - UpdateDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDomainResponse
   */
  async updateDomainWithOptions(request: $_model.UpdateDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.targetDomain)) {
      query["TargetDomain"] = request.targetDomain;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDomain",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDomainResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDomainResponse({}));
  }

  /**
   * Modifies an accelerated domain name.
   * 
   * @remarks
   * You can call this operation to modify an accelerated domain name. If the new accelerated domain name is hosted in the Chinese mainland, you must obtain an Internet content provider (ICP) number for the domain name.
   * You cannot call the **UpdateDomain** operation again by using the same Alibaba Cloud account before the previous request is completed.
   * 
   * @param request - UpdateDomainRequest
   * @returns UpdateDomainResponse
   */
  async updateDomain(request: $_model.UpdateDomainRequest): Promise<$_model.UpdateDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDomainWithOptions(request, runtime);
  }

  /**
   * Updates the ICP filing status of an accelerated domain name.
   * 
   * @remarks
   * You can call this operation to query and update the ICP filing status of an accelerated domain name.
   * The **UpdateDomainState** operation holds an exclusive lock on the GA instance. While the operation is in progress, you cannot call the same operation with the same Alibaba Cloud account.
   * 
   * @param request - UpdateDomainStateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDomainStateResponse
   */
  async updateDomainStateWithOptions(request: $_model.UpdateDomainStateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDomainStateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDomainState",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDomainStateResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDomainStateResponse({}));
  }

  /**
   * Updates the ICP filing status of an accelerated domain name.
   * 
   * @remarks
   * You can call this operation to query and update the ICP filing status of an accelerated domain name.
   * The **UpdateDomainState** operation holds an exclusive lock on the GA instance. While the operation is in progress, you cannot call the same operation with the same Alibaba Cloud account.
   * 
   * @param request - UpdateDomainStateRequest
   * @returns UpdateDomainStateResponse
   */
  async updateDomainState(request: $_model.UpdateDomainStateRequest): Promise<$_model.UpdateDomainStateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDomainStateWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of an endpoint group.
   * 
   * @remarks
   *   **UpdateEndpointGroup** is an asynchronous operation. After you send a request, the system returns a request ID, but the operation is still being performed in the system background. You can call the [DescribeEndpointGroup](https://help.aliyun.com/document_detail/153260.html) operation to query the state of an endpoint group.
   *     *   If the endpoint group is in the **updating** state, it indicates that the configurations of the endpoint group are being modified. In this case, you can perform only query operations.
   *     *   If the endpoint group is in the **active** state, it indicates that the configurations of the endpoint group are modified.
   * *   The **UpdateEndpointGroup** operation cannot be repeatedly called for the same Global Accelerator (GA) instance within a specific period of time.
   * 
   * @param request - UpdateEndpointGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEndpointGroupResponse
   */
  async updateEndpointGroupWithOptions(request: $_model.UpdateEndpointGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateEndpointGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.endpointConfigurations)) {
      query["EndpointConfigurations"] = request.endpointConfigurations;
    }

    if (!$dara.isNull(request.endpointGroupId)) {
      query["EndpointGroupId"] = request.endpointGroupId;
    }

    if (!$dara.isNull(request.endpointGroupRegion)) {
      query["EndpointGroupRegion"] = request.endpointGroupRegion;
    }

    if (!$dara.isNull(request.endpointIpVersion)) {
      query["EndpointIpVersion"] = request.endpointIpVersion;
    }

    if (!$dara.isNull(request.endpointProtocolVersion)) {
      query["EndpointProtocolVersion"] = request.endpointProtocolVersion;
    }

    if (!$dara.isNull(request.endpointRequestProtocol)) {
      query["EndpointRequestProtocol"] = request.endpointRequestProtocol;
    }

    if (!$dara.isNull(request.healthCheckEnabled)) {
      query["HealthCheckEnabled"] = request.healthCheckEnabled;
    }

    if (!$dara.isNull(request.healthCheckHost)) {
      query["HealthCheckHost"] = request.healthCheckHost;
    }

    if (!$dara.isNull(request.healthCheckIntervalSeconds)) {
      query["HealthCheckIntervalSeconds"] = request.healthCheckIntervalSeconds;
    }

    if (!$dara.isNull(request.healthCheckPath)) {
      query["HealthCheckPath"] = request.healthCheckPath;
    }

    if (!$dara.isNull(request.healthCheckPort)) {
      query["HealthCheckPort"] = request.healthCheckPort;
    }

    if (!$dara.isNull(request.healthCheckProtocol)) {
      query["HealthCheckProtocol"] = request.healthCheckProtocol;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.portOverrides)) {
      query["PortOverrides"] = request.portOverrides;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.thresholdCount)) {
      query["ThresholdCount"] = request.thresholdCount;
    }

    if (!$dara.isNull(request.trafficPercentage)) {
      query["TrafficPercentage"] = request.trafficPercentage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateEndpointGroup",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateEndpointGroupResponse>(await this.callApi(params, req, runtime), new $_model.UpdateEndpointGroupResponse({}));
  }

  /**
   * Modifies the configurations of an endpoint group.
   * 
   * @remarks
   *   **UpdateEndpointGroup** is an asynchronous operation. After you send a request, the system returns a request ID, but the operation is still being performed in the system background. You can call the [DescribeEndpointGroup](https://help.aliyun.com/document_detail/153260.html) operation to query the state of an endpoint group.
   *     *   If the endpoint group is in the **updating** state, it indicates that the configurations of the endpoint group are being modified. In this case, you can perform only query operations.
   *     *   If the endpoint group is in the **active** state, it indicates that the configurations of the endpoint group are modified.
   * *   The **UpdateEndpointGroup** operation cannot be repeatedly called for the same Global Accelerator (GA) instance within a specific period of time.
   * 
   * @param request - UpdateEndpointGroupRequest
   * @returns UpdateEndpointGroupResponse
   */
  async updateEndpointGroup(request: $_model.UpdateEndpointGroupRequest): Promise<$_model.UpdateEndpointGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateEndpointGroupWithOptions(request, runtime);
  }

  /**
   * Modifies the name and description of an endpoint group.
   * 
   * @param request - UpdateEndpointGroupAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEndpointGroupAttributeResponse
   */
  async updateEndpointGroupAttributeWithOptions(request: $_model.UpdateEndpointGroupAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateEndpointGroupAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.endpointGroupId)) {
      query["EndpointGroupId"] = request.endpointGroupId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateEndpointGroupAttribute",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateEndpointGroupAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateEndpointGroupAttributeResponse({}));
  }

  /**
   * Modifies the name and description of an endpoint group.
   * 
   * @param request - UpdateEndpointGroupAttributeRequest
   * @returns UpdateEndpointGroupAttributeResponse
   */
  async updateEndpointGroupAttribute(request: $_model.UpdateEndpointGroupAttributeRequest): Promise<$_model.UpdateEndpointGroupAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateEndpointGroupAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the endpoint groups that are associated with a listener.
   * 
   * @remarks
   * ### Description
   * *   **UpdateEndpointGroups** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeEndpointGroup](https://help.aliyun.com/document_detail/153260.html) or [ListEndpointGroups](https://help.aliyun.com/document_detail/153261.html) operation to query the status of an endpoint group.
   *     *   If the endpoint group is in the **updating** state, it indicates that the configuration of the endpoint group is being modified. In this case, you can perform only query operations.
   *     *   If the endpoint group is in the **active** state, it indicates that the configuration of the endpoint group is modified.
   * *   The **UpdateEndpointGroups** operation holds an exclusive lock on the Global Accelerator (GA) instance. While the operation is in progress, you cannot call the same operation in the same Alibaba Cloud account.
   * 
   * @param request - UpdateEndpointGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEndpointGroupsResponse
   */
  async updateEndpointGroupsWithOptions(request: $_model.UpdateEndpointGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateEndpointGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.endpointGroupConfigurations)) {
      query["EndpointGroupConfigurations"] = request.endpointGroupConfigurations;
    }

    if (!$dara.isNull(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateEndpointGroups",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateEndpointGroupsResponse>(await this.callApi(params, req, runtime), new $_model.UpdateEndpointGroupsResponse({}));
  }

  /**
   * Modifies the endpoint groups that are associated with a listener.
   * 
   * @remarks
   * ### Description
   * *   **UpdateEndpointGroups** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeEndpointGroup](https://help.aliyun.com/document_detail/153260.html) or [ListEndpointGroups](https://help.aliyun.com/document_detail/153261.html) operation to query the status of an endpoint group.
   *     *   If the endpoint group is in the **updating** state, it indicates that the configuration of the endpoint group is being modified. In this case, you can perform only query operations.
   *     *   If the endpoint group is in the **active** state, it indicates that the configuration of the endpoint group is modified.
   * *   The **UpdateEndpointGroups** operation holds an exclusive lock on the Global Accelerator (GA) instance. While the operation is in progress, you cannot call the same operation in the same Alibaba Cloud account.
   * 
   * @param request - UpdateEndpointGroupsRequest
   * @returns UpdateEndpointGroupsResponse
   */
  async updateEndpointGroups(request: $_model.UpdateEndpointGroupsRequest): Promise<$_model.UpdateEndpointGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateEndpointGroupsWithOptions(request, runtime);
  }

  /**
   * Updates a forwarding rule.
   * 
   * @remarks
   *   **UpdateForwardingRules** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListForwardingRules](https://help.aliyun.com/document_detail/205817.html) operation to query the status of a forwarding rule.
   *     *   If the forwarding rule is in the **configuring** state, it indicates that the forwarding rule is being modified. In this case, you can perform only query operations.
   *     *   If the forwarding rule is in the **active** state, it indicates that the forwarding rule is modified.
   * *   The **UpdateForwardingRules** operation holds an exclusive lock on the Global Accelerator (GA) instance. While the operation is in progress, you cannot call the same operation in the same Alibaba Cloud account.
   * 
   * @param request - UpdateForwardingRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateForwardingRulesResponse
   */
  async updateForwardingRulesWithOptions(request: $_model.UpdateForwardingRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateForwardingRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.forwardingRules)) {
      query["ForwardingRules"] = request.forwardingRules;
    }

    if (!$dara.isNull(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateForwardingRules",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateForwardingRulesResponse>(await this.callApi(params, req, runtime), new $_model.UpdateForwardingRulesResponse({}));
  }

  /**
   * Updates a forwarding rule.
   * 
   * @remarks
   *   **UpdateForwardingRules** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListForwardingRules](https://help.aliyun.com/document_detail/205817.html) operation to query the status of a forwarding rule.
   *     *   If the forwarding rule is in the **configuring** state, it indicates that the forwarding rule is being modified. In this case, you can perform only query operations.
   *     *   If the forwarding rule is in the **active** state, it indicates that the forwarding rule is modified.
   * *   The **UpdateForwardingRules** operation holds an exclusive lock on the Global Accelerator (GA) instance. While the operation is in progress, you cannot call the same operation in the same Alibaba Cloud account.
   * 
   * @param request - UpdateForwardingRulesRequest
   * @returns UpdateForwardingRulesResponse
   */
  async updateForwardingRules(request: $_model.UpdateForwardingRulesRequest): Promise<$_model.UpdateForwardingRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateForwardingRulesWithOptions(request, runtime);
  }

  /**
   * Modifies the attributes of an acceleration region in an acceleration area for a Global Accelerator (GA) instance.
   * 
   * @remarks
   *   **UpdateIpSet** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [DescribeIpSet](https://help.aliyun.com/document_detail/153246.html) operation to query the status of an acceleration region.
   *     *   If the acceleration region is in the **updating** state, it indicates that the acceleration region is being modified. In this case, you can continue to perform query operations on the acceleration regions.
   *     *   If the acceleration region is in the **active** state, it indicates that the acceleration region is modified.
   * *   You cannot call the **UpdateIpSet** operation again on the same GA instance before the previous operation is complete.
   * 
   * @param request - UpdateIpSetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateIpSetResponse
   */
  async updateIpSetWithOptions(request: $_model.UpdateIpSetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateIpSetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ipSetId)) {
      query["IpSetId"] = request.ipSetId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateIpSet",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateIpSetResponse>(await this.callApi(params, req, runtime), new $_model.UpdateIpSetResponse({}));
  }

  /**
   * Modifies the attributes of an acceleration region in an acceleration area for a Global Accelerator (GA) instance.
   * 
   * @remarks
   *   **UpdateIpSet** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [DescribeIpSet](https://help.aliyun.com/document_detail/153246.html) operation to query the status of an acceleration region.
   *     *   If the acceleration region is in the **updating** state, it indicates that the acceleration region is being modified. In this case, you can continue to perform query operations on the acceleration regions.
   *     *   If the acceleration region is in the **active** state, it indicates that the acceleration region is modified.
   * *   You cannot call the **UpdateIpSet** operation again on the same GA instance before the previous operation is complete.
   * 
   * @param request - UpdateIpSetRequest
   * @returns UpdateIpSetResponse
   */
  async updateIpSet(request: $_model.UpdateIpSetRequest): Promise<$_model.UpdateIpSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateIpSetWithOptions(request, runtime);
  }

  /**
   * Modifies the attributes of acceleration regions in an acceleration area for a Global Accelerator (GA) instance.
   * 
   * @remarks
   *   **UpdateIpSets** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeIpSet](https://help.aliyun.com/document_detail/153246.html) operation to query the status of the task.
   *     *   If an acceleration region is in the **updating** state, the acceleration region is being modified. In this case, you can perform only query operations.
   *     *   If an acceleration region is in the **active** state, the acceleration region is modified.
   * *   You cannot repeatedly call the **UpdateIpSets** operation for the same GA instance within a specific period of time.
   * 
   * @param request - UpdateIpSetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateIpSetsResponse
   */
  async updateIpSetsWithOptions(request: $_model.UpdateIpSetsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateIpSetsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ipSets)) {
      query["IpSets"] = request.ipSets;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateIpSets",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateIpSetsResponse>(await this.callApi(params, req, runtime), new $_model.UpdateIpSetsResponse({}));
  }

  /**
   * Modifies the attributes of acceleration regions in an acceleration area for a Global Accelerator (GA) instance.
   * 
   * @remarks
   *   **UpdateIpSets** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeIpSet](https://help.aliyun.com/document_detail/153246.html) operation to query the status of the task.
   *     *   If an acceleration region is in the **updating** state, the acceleration region is being modified. In this case, you can perform only query operations.
   *     *   If an acceleration region is in the **active** state, the acceleration region is modified.
   * *   You cannot repeatedly call the **UpdateIpSets** operation for the same GA instance within a specific period of time.
   * 
   * @param request - UpdateIpSetsRequest
   * @returns UpdateIpSetsResponse
   */
  async updateIpSets(request: $_model.UpdateIpSetsRequest): Promise<$_model.UpdateIpSetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateIpSetsWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of a listener for a Global Accelerator (GA) instance.
   * 
   * @remarks
   * This operation can be called to modify the configurations such as the protocol and ports of a listener to meet your business requirements.
   * When you call this operation, take note of the following items:
   * *   **UpdateListener** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [DescribeListener](https://help.aliyun.com/document_detail/153254.html) operation to query the status of a listener.
   *     *   If the listener is in the **updating** state, it indicates that its configurations are being modified. In this case, you can perform only query operations.
   *     *   If the listener is in the **active** state, it indicates that its configurations are modified.
   * *   The **UpdateListener** operation cannot be repeatedly called to modify listener configurations for the same GA instance within a specific period of time.
   * 
   * @param request - UpdateListenerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateListenerResponse
   */
  async updateListenerWithOptions(request: $_model.UpdateListenerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateListenerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backendPorts)) {
      query["BackendPorts"] = request.backendPorts;
    }

    if (!$dara.isNull(request.certificates)) {
      query["Certificates"] = request.certificates;
    }

    if (!$dara.isNull(request.clientAffinity)) {
      query["ClientAffinity"] = request.clientAffinity;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.httpVersion)) {
      query["HttpVersion"] = request.httpVersion;
    }

    if (!$dara.isNull(request.idleTimeout)) {
      query["IdleTimeout"] = request.idleTimeout;
    }

    if (!$dara.isNull(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.portRanges)) {
      query["PortRanges"] = request.portRanges;
    }

    if (!$dara.isNull(request.protocol)) {
      query["Protocol"] = request.protocol;
    }

    if (!$dara.isNull(request.proxyProtocol)) {
      query["ProxyProtocol"] = request.proxyProtocol;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.requestTimeout)) {
      query["RequestTimeout"] = request.requestTimeout;
    }

    if (!$dara.isNull(request.securityPolicyId)) {
      query["SecurityPolicyId"] = request.securityPolicyId;
    }

    if (!$dara.isNull(request.XForwardedForConfig)) {
      query["XForwardedForConfig"] = request.XForwardedForConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateListener",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateListenerResponse>(await this.callApi(params, req, runtime), new $_model.UpdateListenerResponse({}));
  }

  /**
   * Modifies the configurations of a listener for a Global Accelerator (GA) instance.
   * 
   * @remarks
   * This operation can be called to modify the configurations such as the protocol and ports of a listener to meet your business requirements.
   * When you call this operation, take note of the following items:
   * *   **UpdateListener** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [DescribeListener](https://help.aliyun.com/document_detail/153254.html) operation to query the status of a listener.
   *     *   If the listener is in the **updating** state, it indicates that its configurations are being modified. In this case, you can perform only query operations.
   *     *   If the listener is in the **active** state, it indicates that its configurations are modified.
   * *   The **UpdateListener** operation cannot be repeatedly called to modify listener configurations for the same GA instance within a specific period of time.
   * 
   * @param request - UpdateListenerRequest
   * @returns UpdateListenerResponse
   */
  async updateListener(request: $_model.UpdateListenerRequest): Promise<$_model.UpdateListenerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateListenerWithOptions(request, runtime);
  }

  /**
   * 修改SLS日志配置
   * 
   * @param request - UpdateLogStoreConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLogStoreConfigResponse
   */
  async updateLogStoreConfigWithOptions(request: $_model.UpdateLogStoreConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLogStoreConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!$dara.isNull(request.accessLogRecordCustomizedHeaderList)) {
      query["AccessLogRecordCustomizedHeaderList"] = request.accessLogRecordCustomizedHeaderList;
    }

    if (!$dara.isNull(request.accessLogRecordCustomizedHeadersEnabled)) {
      query["AccessLogRecordCustomizedHeadersEnabled"] = request.accessLogRecordCustomizedHeadersEnabled;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.endpointGroupId)) {
      query["EndpointGroupId"] = request.endpointGroupId;
    }

    if (!$dara.isNull(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.slsLogStoreName)) {
      query["SlsLogStoreName"] = request.slsLogStoreName;
    }

    if (!$dara.isNull(request.slsProjectName)) {
      query["SlsProjectName"] = request.slsProjectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLogStoreConfig",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateLogStoreConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdateLogStoreConfigResponse({}));
  }

  /**
   * 修改SLS日志配置
   * 
   * @param request - UpdateLogStoreConfigRequest
   * @returns UpdateLogStoreConfigResponse
   */
  async updateLogStoreConfig(request: $_model.UpdateLogStoreConfigRequest): Promise<$_model.UpdateLogStoreConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateLogStoreConfigWithOptions(request, runtime);
  }

  /**
   * Changes the control mode of a resource from managed mode to unmanaged mode.
   * 
   * @remarks
   *   This operation is applicable only to **managed** Global Accelerator (GA) instances.
   * *   After you change the control mode of a GA instance from managed mode to unmanaged mode, you cannot change the mode of the instance to managed mode.
   * *   After you change the control mode of a GA instance from managed mode to unmanaged mode, you can obtain all operation permissions on the instance.
   *   <warning>If you change or delete a configuration of a GA instance whose control mode is changed from managed mode to unmanaged mode, the cloud services that depend on the instance may not work as expected. Proceed with caution.
   * 
   * @param request - UpdateServiceManagedControlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServiceManagedControlResponse
   */
  async updateServiceManagedControlWithOptions(request: $_model.UpdateServiceManagedControlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateServiceManagedControlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.serviceManaged)) {
      query["ServiceManaged"] = request.serviceManaged;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateServiceManagedControl",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateServiceManagedControlResponse>(await this.callApi(params, req, runtime), new $_model.UpdateServiceManagedControlResponse({}));
  }

  /**
   * Changes the control mode of a resource from managed mode to unmanaged mode.
   * 
   * @remarks
   *   This operation is applicable only to **managed** Global Accelerator (GA) instances.
   * *   After you change the control mode of a GA instance from managed mode to unmanaged mode, you cannot change the mode of the instance to managed mode.
   * *   After you change the control mode of a GA instance from managed mode to unmanaged mode, you can obtain all operation permissions on the instance.
   *   <warning>If you change or delete a configuration of a GA instance whose control mode is changed from managed mode to unmanaged mode, the cloud services that depend on the instance may not work as expected. Proceed with caution.
   * 
   * @param request - UpdateServiceManagedControlRequest
   * @returns UpdateServiceManagedControlResponse
   */
  async updateServiceManagedControl(request: $_model.UpdateServiceManagedControlRequest): Promise<$_model.UpdateServiceManagedControlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateServiceManagedControlWithOptions(request, runtime);
  }

}
