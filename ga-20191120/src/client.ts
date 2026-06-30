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
    this._endpointMap = {
      'cn-hangzhou': "ga.cn-hangzhou.aliyuncs.com",
    };
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
   * Adds IP entries to an access control policy group and allows or restricts the forwarding of access requests to listeners for these IP entries by using Settings such as whitelists or blacklists, enabling precise control over client requests. You can call the AddEntriesToAcl operation to add IP entries to an access control policy group.
   * 
   * @remarks
   * - **AddEntriesToAcl** is an asynchronous operation. After a request is sent, the system returns a request ID, but the IP entries are not yet added. The addition node continues in the background. You can call [GetAcl](https://help.aliyun.com/document_detail/258292.html) or [ListAcls](https://help.aliyun.com/document_detail/258291.html) to query the status of the access control policy group:
   *     - If the access control policy group is in the **configuring** state, the IP entries are being added. In this state, you can only perform query operations and cannot perform other operations.
   *     - If the access control policy group is in the **active** state, the IP entries are added.
   * - You cannot concurrently call **AddEntriesToAcl** to add IP entries to an access control policy group within the same Global Accelerator (GA) instance.
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
   * Adds IP entries to an access control policy group and allows or restricts the forwarding of access requests to listeners for these IP entries by using Settings such as whitelists or blacklists, enabling precise control over client requests. You can call the AddEntriesToAcl operation to add IP entries to an access control policy group.
   * 
   * @remarks
   * - **AddEntriesToAcl** is an asynchronous operation. After a request is sent, the system returns a request ID, but the IP entries are not yet added. The addition node continues in the background. You can call [GetAcl](https://help.aliyun.com/document_detail/258292.html) or [ListAcls](https://help.aliyun.com/document_detail/258291.html) to query the status of the access control policy group:
   *     - If the access control policy group is in the **configuring** state, the IP entries are being added. In this state, you can only perform query operations and cannot perform other operations.
   *     - If the access control policy group is in the **active** state, the IP entries are added.
   * - You cannot concurrently call **AddEntriesToAcl** to add IP entries to an access control policy group within the same Global Accelerator (GA) instance.
   * 
   * @param request - AddEntriesToAclRequest
   * @returns AddEntriesToAclResponse
   */
  async addEntriesToAcl(request: $_model.AddEntriesToAclRequest): Promise<$_model.AddEntriesToAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addEntriesToAclWithOptions(request, runtime);
  }

  /**
   * Invokes the AssociateAclsWithListener operation to associate access control policy groups with a listener.
   * 
   * @remarks
   * - **AssociateAclsWithListener** is an asynchronous operation. After you send a request, the system returns a request ID, but the access control policy group is not yet associated with the listener. The association node continues to run in the background. You can invoke [DescribeListener](https://help.aliyun.com/document_detail/153254.html) to query the listener status:
   *     - If the listener is in the **updating** state, the access control policy group is being associated with the listener. In this state, you can only execute query operations and cannot execute other operations.
   *     - If the listener is in the **active** state, the access control policy group is associated with the listener.
   * - You cannot concurrently associate access control policy groups with listeners within the same Alibaba Cloud Global Accelerator (GA) instance.
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
   * Invokes the AssociateAclsWithListener operation to associate access control policy groups with a listener.
   * 
   * @remarks
   * - **AssociateAclsWithListener** is an asynchronous operation. After you send a request, the system returns a request ID, but the access control policy group is not yet associated with the listener. The association node continues to run in the background. You can invoke [DescribeListener](https://help.aliyun.com/document_detail/153254.html) to query the listener status:
   *     - If the listener is in the **updating** state, the access control policy group is being associated with the listener. In this state, you can only execute query operations and cannot execute other operations.
   *     - If the listener is in the **active** state, the access control policy group is associated with the listener.
   * - You cannot concurrently associate access control policy groups with listeners within the same Alibaba Cloud Global Accelerator (GA) instance.
   * 
   * @param request - AssociateAclsWithListenerRequest
   * @returns AssociateAclsWithListenerResponse
   */
  async associateAclsWithListener(request: $_model.AssociateAclsWithListenerRequest): Promise<$_model.AssociateAclsWithListenerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.associateAclsWithListenerWithOptions(request, runtime);
  }

  /**
   * Binds multiple certificates to an HTTPS listener of a Global Accelerator instance. Combined with virtual endpoint groups and forwarding rules, this enables accelerated access to multiple HTTPS domain names. You can call the AssociateAdditionalCertificatesWithListener operation to bind additional certificates to an HTTPS listener.
   * 
   * @remarks
   * - Only HTTPS protocol listeners support attaching extension certificates.
   * - The **AssociateAdditionalCertificatesWithListener** operation is asynchronous. After you send a request, the system returns a request ID, but the attachment between the HTTPS listener and the extension certificates is not yet complete because the association node is still running in the background. You can invoke [DescribeListener](https://help.aliyun.com/document_detail/153254.html) to query the listener status:
   *     - If the listener is in the **updating** state, the HTTPS listener and extension certificates are being attached. In this state, you can only execute query operations.
   *     - If the listener is in the **active** state, the HTTPS listener and extension certificates are attached.
   * - The **AssociateAdditionalCertificatesWithListener** operation does not support concurrent requests to attach extension certificates to HTTPS listeners within the same Alibaba Cloud Global Accelerator (GA) instance.
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
   * Binds multiple certificates to an HTTPS listener of a Global Accelerator instance. Combined with virtual endpoint groups and forwarding rules, this enables accelerated access to multiple HTTPS domain names. You can call the AssociateAdditionalCertificatesWithListener operation to bind additional certificates to an HTTPS listener.
   * 
   * @remarks
   * - Only HTTPS protocol listeners support attaching extension certificates.
   * - The **AssociateAdditionalCertificatesWithListener** operation is asynchronous. After you send a request, the system returns a request ID, but the attachment between the HTTPS listener and the extension certificates is not yet complete because the association node is still running in the background. You can invoke [DescribeListener](https://help.aliyun.com/document_detail/153254.html) to query the listener status:
   *     - If the listener is in the **updating** state, the HTTPS listener and extension certificates are being attached. In this state, you can only execute query operations.
   *     - If the listener is in the **active** state, the HTTPS listener and extension certificates are attached.
   * - The **AssociateAdditionalCertificatesWithListener** operation does not support concurrent requests to attach extension certificates to HTTPS listeners within the same Alibaba Cloud Global Accelerator (GA) instance.
   * 
   * @param request - AssociateAdditionalCertificatesWithListenerRequest
   * @returns AssociateAdditionalCertificatesWithListenerResponse
   */
  async associateAdditionalCertificatesWithListener(request: $_model.AssociateAdditionalCertificatesWithListenerRequest): Promise<$_model.AssociateAdditionalCertificatesWithListenerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.associateAdditionalCertificatesWithListenerWithOptions(request, runtime);
  }

  /**
   * Alibaba Cloud Global Accelerator (GA) Integration with Cloud Products
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
   * Alibaba Cloud Global Accelerator (GA) Integration with Cloud Products
   * 
   * @param request - AssociateResourcesRequest
   * @returns AssociateResourcesResponse
   */
  async associateResources(request: $_model.AssociateResourcesRequest): Promise<$_model.AssociateResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.associateResourcesWithOptions(request, runtime);
  }

  /**
   * If you want to protect your Global Accelerator (GA) applications from large-scale DDoS attacks and ensure service stability and availability, you can call the AttachDdosToAccelerator operation to associate an Anti-DDoS Pro or Anti-DDoS Premium instance with a GA instance.
   * 
   * @remarks
   * Note the following when you call this operation:
   * - AttachDdosToAccelerator is an asynchronous operation. After you send a request, the system returns a request ID, but the Anti-DDoS Pro or Anti-DDoS Premium instance is not yet associated with the Global Accelerator (GA) instance. The associate task continues to run in the background. You can call [DescribeAccelerator](https://help.aliyun.com/document_detail/153235.html) or [ListAccelerators](https://help.aliyun.com/document_detail/153236.html) to query the status of the GA instance:
   *     - If the GA instance is in the **configuring** state, the Anti-DDoS Pro or Anti-DDoS Premium instance is being associated with the GA instance. In this state, you can only perform query operations.
   *     - If the GA instance is in the **active** state, the Anti-DDoS Pro or Anti-DDoS Premium instance is associated with the GA instance.
   * - The AttachDdosToAccelerator operation does not support concurrent requests to associate Anti-DDoS Pro or Anti-DDoS Premium instances with the same GA instance.
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
   * If you want to protect your Global Accelerator (GA) applications from large-scale DDoS attacks and ensure service stability and availability, you can call the AttachDdosToAccelerator operation to associate an Anti-DDoS Pro or Anti-DDoS Premium instance with a GA instance.
   * 
   * @remarks
   * Note the following when you call this operation:
   * - AttachDdosToAccelerator is an asynchronous operation. After you send a request, the system returns a request ID, but the Anti-DDoS Pro or Anti-DDoS Premium instance is not yet associated with the Global Accelerator (GA) instance. The associate task continues to run in the background. You can call [DescribeAccelerator](https://help.aliyun.com/document_detail/153235.html) or [ListAccelerators](https://help.aliyun.com/document_detail/153236.html) to query the status of the GA instance:
   *     - If the GA instance is in the **configuring** state, the Anti-DDoS Pro or Anti-DDoS Premium instance is being associated with the GA instance. In this state, you can only perform query operations.
   *     - If the GA instance is in the **active** state, the Anti-DDoS Pro or Anti-DDoS Premium instance is associated with the GA instance.
   * - The AttachDdosToAccelerator operation does not support concurrent requests to associate Anti-DDoS Pro or Anti-DDoS Premium instances with the same GA instance.
   * 
   * @param request - AttachDdosToAcceleratorRequest
   * @returns AttachDdosToAcceleratorResponse
   */
  async attachDdosToAccelerator(request: $_model.AttachDdosToAcceleratorRequest): Promise<$_model.AttachDdosToAcceleratorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachDdosToAcceleratorWithOptions(request, runtime);
  }

  /**
   * Associates a Simple Log Service (SLS) Logstore with an endpoint group.
   * 
   * @remarks
   * - **AttachLogStoreToEndpointGroup** is an asynchronous operation. After you send a request, the system returns a request ID, but the association between the SLS Logstore and the endpoint group is not yet complete. The association node continues to run in the background. You can invoke [DescribeEndpointGroup](https://help.aliyun.com/document_detail/153260.html) to query the status of the endpoint group:
   *     - If the endpoint group is in the **updating** state, the SLS Logstore is being associated with the endpoint group. In this state, you can only execute query operations.
   *     - If the endpoint group is in the **active** state, the SLS Logstore is associated with the endpoint group.
   * - **AttachLogStoreToEndpointGroup** does not support concurrent association of SLS Logstores with endpoint groups within the same Alibaba Cloud Global Accelerator (GA) instance.
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
   * Associates a Simple Log Service (SLS) Logstore with an endpoint group.
   * 
   * @remarks
   * - **AttachLogStoreToEndpointGroup** is an asynchronous operation. After you send a request, the system returns a request ID, but the association between the SLS Logstore and the endpoint group is not yet complete. The association node continues to run in the background. You can invoke [DescribeEndpointGroup](https://help.aliyun.com/document_detail/153260.html) to query the status of the endpoint group:
   *     - If the endpoint group is in the **updating** state, the SLS Logstore is being associated with the endpoint group. In this state, you can only execute query operations.
   *     - If the endpoint group is in the **active** state, the SLS Logstore is associated with the endpoint group.
   * - **AttachLogStoreToEndpointGroup** does not support concurrent association of SLS Logstores with endpoint groups within the same Alibaba Cloud Global Accelerator (GA) instance.
   * 
   * @param request - AttachLogStoreToEndpointGroupRequest
   * @returns AttachLogStoreToEndpointGroupResponse
   */
  async attachLogStoreToEndpointGroup(request: $_model.AttachLogStoreToEndpointGroupRequest): Promise<$_model.AttachLogStoreToEndpointGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachLogStoreToEndpointGroupWithOptions(request, runtime);
  }

  /**
   * Invokes the BandwidthPackageAddAccelerator operation to attach a bandwidth plan to an Alibaba Cloud Global Accelerator (GA) instance.
   * 
   * @remarks
   * - **BandwidthPackageAddAccelerator** is an asynchronous operation. After you send a request, the system returns a request ID, but the bandwidth plan is not yet attached to the Alibaba Cloud Global Accelerator (GA) instance. The attachment node continues to run in the background. You can invoke [DescribeBandwidthPackage](https://help.aliyun.com/document_detail/153241.html) to query the status of the bandwidth plan:
   *     - If the bandwidth plan is in the **binding** state, the bandwidth plan is being attached to the Alibaba Cloud Global Accelerator (GA) instance. In this state, you can only execute query operations.
   *     - If the bandwidth plan is in the **active** state, the bandwidth plan is attached to the Alibaba Cloud Global Accelerator (GA) instance.
   * - The **BandwidthPackageAddAccelerator** operation does not support concurrent requests to attach bandwidth plans to the same Alibaba Cloud Global Accelerator (GA) instance.
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
   * Invokes the BandwidthPackageAddAccelerator operation to attach a bandwidth plan to an Alibaba Cloud Global Accelerator (GA) instance.
   * 
   * @remarks
   * - **BandwidthPackageAddAccelerator** is an asynchronous operation. After you send a request, the system returns a request ID, but the bandwidth plan is not yet attached to the Alibaba Cloud Global Accelerator (GA) instance. The attachment node continues to run in the background. You can invoke [DescribeBandwidthPackage](https://help.aliyun.com/document_detail/153241.html) to query the status of the bandwidth plan:
   *     - If the bandwidth plan is in the **binding** state, the bandwidth plan is being attached to the Alibaba Cloud Global Accelerator (GA) instance. In this state, you can only execute query operations.
   *     - If the bandwidth plan is in the **active** state, the bandwidth plan is attached to the Alibaba Cloud Global Accelerator (GA) instance.
   * - The **BandwidthPackageAddAccelerator** operation does not support concurrent requests to attach bandwidth plans to the same Alibaba Cloud Global Accelerator (GA) instance.
   * 
   * @param request - BandwidthPackageAddAcceleratorRequest
   * @returns BandwidthPackageAddAcceleratorResponse
   */
  async bandwidthPackageAddAccelerator(request: $_model.BandwidthPackageAddAcceleratorRequest): Promise<$_model.BandwidthPackageAddAcceleratorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bandwidthPackageAddAcceleratorWithOptions(request, runtime);
  }

  /**
   * Invokes the BandwidthPackageRemoveAccelerator operation to disassociate a bandwidth plan from an Alibaba Cloud Global Accelerator (GA) instance.
   * 
   * @remarks
   * - Before you invoke the **BandwidthPackageRemoveAccelerator** operation, make sure that no acceleration regions or endpoint groups exist under the Alibaba Cloud Global Accelerator (GA) instance.
   *     - To delete an acceleration region, see [DeleteIpSet](https://help.aliyun.com/document_detail/2253276.html) or [DeleteIpSets](https://help.aliyun.com/document_detail/2253278.html).
   *     - To delete an endpoint group, see [DeleteEndpointGroup](https://help.aliyun.com/document_detail/2253305.html), [DeleteEndpointGroups](https://help.aliyun.com/document_detail/2253311.html), or [DeleteCustomRoutingEndpointGroups](https://help.aliyun.com/document_detail/2303183.html).
   * - The **BandwidthPackageRemoveAccelerator** operation is asynchronous. After you send a request, the system returns a request ID, but the disassociation has not yet completed. The disassociation node continues to run in the background. You can invoke [DescribeBandwidthPackage](https://help.aliyun.com/document_detail/153241.html) to query the status of the bandwidth plan:
   *     - If the bandwidth plan is in the **unbinding** state, the bandwidth plan is being disassociated from the GA instance. In this state, you can only execute query operations.
   *     - If the bandwidth plan is in the **active** state, the bandwidth plan is disassociated from the GA instance.
   * - The **BandwidthPackageRemoveAccelerator** operation does not support concurrent disassociation of bandwidth plans from the same GA instance.
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
   * Invokes the BandwidthPackageRemoveAccelerator operation to disassociate a bandwidth plan from an Alibaba Cloud Global Accelerator (GA) instance.
   * 
   * @remarks
   * - Before you invoke the **BandwidthPackageRemoveAccelerator** operation, make sure that no acceleration regions or endpoint groups exist under the Alibaba Cloud Global Accelerator (GA) instance.
   *     - To delete an acceleration region, see [DeleteIpSet](https://help.aliyun.com/document_detail/2253276.html) or [DeleteIpSets](https://help.aliyun.com/document_detail/2253278.html).
   *     - To delete an endpoint group, see [DeleteEndpointGroup](https://help.aliyun.com/document_detail/2253305.html), [DeleteEndpointGroups](https://help.aliyun.com/document_detail/2253311.html), or [DeleteCustomRoutingEndpointGroups](https://help.aliyun.com/document_detail/2303183.html).
   * - The **BandwidthPackageRemoveAccelerator** operation is asynchronous. After you send a request, the system returns a request ID, but the disassociation has not yet completed. The disassociation node continues to run in the background. You can invoke [DescribeBandwidthPackage](https://help.aliyun.com/document_detail/153241.html) to query the status of the bandwidth plan:
   *     - If the bandwidth plan is in the **unbinding** state, the bandwidth plan is being disassociated from the GA instance. In this state, you can only execute query operations.
   *     - If the bandwidth plan is in the **active** state, the bandwidth plan is disassociated from the GA instance.
   * - The **BandwidthPackageRemoveAccelerator** operation does not support concurrent disassociation of bandwidth plans from the same GA instance.
   * 
   * @param request - BandwidthPackageRemoveAcceleratorRequest
   * @returns BandwidthPackageRemoveAcceleratorResponse
   */
  async bandwidthPackageRemoveAccelerator(request: $_model.BandwidthPackageRemoveAcceleratorRequest): Promise<$_model.BandwidthPackageRemoveAcceleratorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bandwidthPackageRemoveAcceleratorWithOptions(request, runtime);
  }

  /**
   * Modifies the resource group to which a Global Accelerator resource belongs by calling the ChangeResourceGroup operation.
   * 
   * @remarks
   * The **ChangeResourceGroup** operation does not support concurrent modifications to the resource group of Global Accelerator resources within the same Alibaba Cloud Global Accelerator (GA) instance.
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
   * Modifies the resource group to which a Global Accelerator resource belongs by calling the ChangeResourceGroup operation.
   * 
   * @remarks
   * The **ChangeResourceGroup** operation does not support concurrent modifications to the resource group of Global Accelerator resources within the same Alibaba Cloud Global Accelerator (GA) instance.
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
   * Global Accelerator (GA) is a network acceleration service that provides coverage across the globe. It uses Alibaba Cloud\\"s high-quality Border Gateway Protocol (BGP) bandwidth and global transmission network to provide low-latency access from nearby locations. This reduces the impact of network issues, such as latency, jitter, and packet loss, on your service quality. GA provides a high-availability and high-performance network acceleration service for users worldwide. You can call the CreateAccelerator operation to create a Global Accelerator instance.
   * 
   * @remarks
   * The **CreateAccelerator** operation is asynchronous. After you send a request, the system returns a Global Accelerator instance ID, but the instance is still being created in the background. You can call the [DescribeAccelerator](https://help.aliyun.com/document_detail/153235.html) operation to query the status of the Global Accelerator instance:
   * - If a Global Accelerator instance is in the **init** state, the instance is being created. You can only perform query operations on the instance.
   * - If a Global Accelerator instance is in the **active** state, the instance is created.
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
   * Global Accelerator (GA) is a network acceleration service that provides coverage across the globe. It uses Alibaba Cloud\\"s high-quality Border Gateway Protocol (BGP) bandwidth and global transmission network to provide low-latency access from nearby locations. This reduces the impact of network issues, such as latency, jitter, and packet loss, on your service quality. GA provides a high-availability and high-performance network acceleration service for users worldwide. You can call the CreateAccelerator operation to create a Global Accelerator instance.
   * 
   * @remarks
   * The **CreateAccelerator** operation is asynchronous. After you send a request, the system returns a Global Accelerator instance ID, but the instance is still being created in the background. You can call the [DescribeAccelerator](https://help.aliyun.com/document_detail/153235.html) operation to query the status of the Global Accelerator instance:
   * - If a Global Accelerator instance is in the **init** state, the instance is being created. You can only perform query operations on the instance.
   * - If a Global Accelerator instance is in the **active** state, the instance is created.
   * 
   * @param request - CreateAcceleratorRequest
   * @returns CreateAcceleratorResponse
   */
  async createAccelerator(request: $_model.CreateAcceleratorRequest): Promise<$_model.CreateAcceleratorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAcceleratorWithOptions(request, runtime);
  }

  /**
   * Invokes the CreateAcl operation to create an access control policy group.
   * 
   * @remarks
   * *CreateAcl** is an asynchronous operation. After you invoke the operation, the system returns an access control policy group ID but the access control policy group is not yet created. The creation node continues to run in the background. You can invoke [GetAcl](https://help.aliyun.com/document_detail/258292.html) or [ListAcls](https://help.aliyun.com/document_detail/258291.html) to query the status of the access control policy group:
   * - If the access control policy group is in the **init** state, the access control policy group is being created. In this state, you can only execute query operations and cannot execute other operations.
   * - If the access control policy group is in the **active** state, the access control policy group is created.
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
   * Invokes the CreateAcl operation to create an access control policy group.
   * 
   * @remarks
   * *CreateAcl** is an asynchronous operation. After you invoke the operation, the system returns an access control policy group ID but the access control policy group is not yet created. The creation node continues to run in the background. You can invoke [GetAcl](https://help.aliyun.com/document_detail/258292.html) or [ListAcls](https://help.aliyun.com/document_detail/258291.html) to query the status of the access control policy group:
   * - If the access control policy group is in the **init** state, the access control policy group is being created. In this state, you can only execute query operations and cannot execute other operations.
   * - If the access control policy group is in the **active** state, the access control policy group is created.
   * 
   * @param request - CreateAclRequest
   * @returns CreateAclResponse
   */
  async createAcl(request: $_model.CreateAclRequest): Promise<$_model.CreateAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAclWithOptions(request, runtime);
  }

  /**
   * Creates an origin probing task by calling the CreateApplicationMonitor operation.
   * 
   * @remarks
   * You can call the **CreateApplicationMonitor** operation to create an origin probing task. This task monitors the end-to-end network quality from the probing point through Global Accelerator (GA) to the origin server in real time, helping you quickly locate network faults and perform targeted network optimization.
   * Before you begin:
   * - Only subscription Alibaba Cloud Global Accelerator (GA) instances of Medium Ⅰ or higher specifications support origin probing tasks.
   * - Origin probing tasks cannot be created for UDP protocol listeners.
   * - The service port of the monitoring address must be within the listener port range.
   * - The **CreateApplicationMonitor** operation is asynchronous. After you invoke this operation, the system returns a node ID for the origin probing task, but the node is not yet created. The node creation continues in the background. You can invoke [DescribeApplicationMonitor](https://help.aliyun.com/document_detail/408463.html) or [ListApplicationMonitor](https://help.aliyun.com/document_detail/408462.html) to query the status of the origin probing task:
   *     - If the origin probing task is in the **init** state, the task is being created. In this state, you can only perform query operations.
   *     - If the origin probing task is in the **active** state, the task is created.
   * - The **CreateApplicationMonitor** operation does not support concurrent creation of origin probing nodes within the same Alibaba Cloud Global Accelerator (GA) instance.
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
   * Creates an origin probing task by calling the CreateApplicationMonitor operation.
   * 
   * @remarks
   * You can call the **CreateApplicationMonitor** operation to create an origin probing task. This task monitors the end-to-end network quality from the probing point through Global Accelerator (GA) to the origin server in real time, helping you quickly locate network faults and perform targeted network optimization.
   * Before you begin:
   * - Only subscription Alibaba Cloud Global Accelerator (GA) instances of Medium Ⅰ or higher specifications support origin probing tasks.
   * - Origin probing tasks cannot be created for UDP protocol listeners.
   * - The service port of the monitoring address must be within the listener port range.
   * - The **CreateApplicationMonitor** operation is asynchronous. After you invoke this operation, the system returns a node ID for the origin probing task, but the node is not yet created. The node creation continues in the background. You can invoke [DescribeApplicationMonitor](https://help.aliyun.com/document_detail/408463.html) or [ListApplicationMonitor](https://help.aliyun.com/document_detail/408462.html) to query the status of the origin probing task:
   *     - If the origin probing task is in the **init** state, the task is being created. In this state, you can only perform query operations.
   *     - If the origin probing task is in the **active** state, the task is created.
   * - The **CreateApplicationMonitor** operation does not support concurrent creation of origin probing nodes within the same Alibaba Cloud Global Accelerator (GA) instance.
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
   * You must create a basic bandwidth plan to use Global Accelerator (GA) for network acceleration. A basic bandwidth plan supports the following bandwidth types:
   * - **Basic bandwidth**: The acceleration area and the area where the endpoint is deployed are in the Chinese mainland. The accelerated service is deployed on Alibaba Cloud.
   * - **Enhanced bandwidth**: The acceleration area and the area where the endpoint is deployed are in the Chinese mainland. This bandwidth type can accelerate services on both Alibaba Cloud and public networks outside Alibaba Cloud.
   * - **Advanced bandwidth**: The acceleration area and the area where the endpoint is deployed are outside the Chinese mainland. This bandwidth type can accelerate services on both Alibaba Cloud and public networks outside Alibaba Cloud. To accelerate access for users in the Chinese mainland, you can select China (Hong Kong) as the acceleration area.
   * Note the following when you call this operation:
   * - The **CreateBandwidthPackage** operation is asynchronous. After you send a request, the system returns a bandwidth plan ID, but the bandwidth plan is not created immediately. The system creates the bandwidth plan in the background. You can call the [DescribeBandwidthPackage](https://help.aliyun.com/document_detail/153241.html) operation to query the status of the bandwidth plan:
   *   - If a bandwidth plan is in the **init** state, the bandwidth plan is being created. In this state, you can only query the bandwidth plan and cannot perform other operations.
   *   - If a bandwidth plan is in the **active** state, the bandwidth plan is created.
   * - The **CreateBandwidthPackage** operation does not support concurrent requests to create bandwidth plans for the same Global Accelerator instance.
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
   * You must create a basic bandwidth plan to use Global Accelerator (GA) for network acceleration. A basic bandwidth plan supports the following bandwidth types:
   * - **Basic bandwidth**: The acceleration area and the area where the endpoint is deployed are in the Chinese mainland. The accelerated service is deployed on Alibaba Cloud.
   * - **Enhanced bandwidth**: The acceleration area and the area where the endpoint is deployed are in the Chinese mainland. This bandwidth type can accelerate services on both Alibaba Cloud and public networks outside Alibaba Cloud.
   * - **Advanced bandwidth**: The acceleration area and the area where the endpoint is deployed are outside the Chinese mainland. This bandwidth type can accelerate services on both Alibaba Cloud and public networks outside Alibaba Cloud. To accelerate access for users in the Chinese mainland, you can select China (Hong Kong) as the acceleration area.
   * Note the following when you call this operation:
   * - The **CreateBandwidthPackage** operation is asynchronous. After you send a request, the system returns a bandwidth plan ID, but the bandwidth plan is not created immediately. The system creates the bandwidth plan in the background. You can call the [DescribeBandwidthPackage](https://help.aliyun.com/document_detail/153241.html) operation to query the status of the bandwidth plan:
   *   - If a bandwidth plan is in the **init** state, the bandwidth plan is being created. In this state, you can only query the bandwidth plan and cannot perform other operations.
   *   - If a bandwidth plan is in the **active** state, the bandwidth plan is created.
   * - The **CreateBandwidthPackage** operation does not support concurrent requests to create bandwidth plans for the same Global Accelerator instance.
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
   * Calls the CreateBasicAccelerateIpEndpointRelations operation to batch attach accelerated IP addresses to endpoints for a basic Global Accelerator instance.
   * 
   * @remarks
   * - **CreateBasicAccelerateIpEndpointRelations** is an asynchronous operation. After you send a request, the system returns a request ID, but the task of batch attaching accelerated IP addresses to endpoints is still in progress. You can call [GetBasicAccelerateIp](https://help.aliyun.com/document_detail/466794.html) or [ListBasicEndpoints](https://help.aliyun.com/document_detail/466831.html) to query the status of accelerated IP addresses and endpoints respectively to confirm whether the attachments are created:  
   *     - If an accelerated IP address or endpoint is in the **binding** state, the attachment is being created. In this state, you can only perform query operations.
   *     - If all accelerated IP addresses and endpoints are in the **bound** state, and the attachment status returned by [ListBasicAccelerateIpEndpointRelations](https://help.aliyun.com/document_detail/466803.html) is **active**, the batch task of attaching accelerated IP addresses to endpoints is complete.
   * - **CreateBasicAccelerateIpEndpointRelations** does not support concurrent batch attaching of accelerated IP addresses to endpoints within the same basic Global Accelerator instance.
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
   * Calls the CreateBasicAccelerateIpEndpointRelations operation to batch attach accelerated IP addresses to endpoints for a basic Global Accelerator instance.
   * 
   * @remarks
   * - **CreateBasicAccelerateIpEndpointRelations** is an asynchronous operation. After you send a request, the system returns a request ID, but the task of batch attaching accelerated IP addresses to endpoints is still in progress. You can call [GetBasicAccelerateIp](https://help.aliyun.com/document_detail/466794.html) or [ListBasicEndpoints](https://help.aliyun.com/document_detail/466831.html) to query the status of accelerated IP addresses and endpoints respectively to confirm whether the attachments are created:  
   *     - If an accelerated IP address or endpoint is in the **binding** state, the attachment is being created. In this state, you can only perform query operations.
   *     - If all accelerated IP addresses and endpoints are in the **bound** state, and the attachment status returned by [ListBasicAccelerateIpEndpointRelations](https://help.aliyun.com/document_detail/466803.html) is **active**, the batch task of attaching accelerated IP addresses to endpoints is complete.
   * - **CreateBasicAccelerateIpEndpointRelations** does not support concurrent batch attaching of accelerated IP addresses to endpoints within the same basic Global Accelerator instance.
   * 
   * @param request - CreateBasicAccelerateIpEndpointRelationsRequest
   * @returns CreateBasicAccelerateIpEndpointRelationsResponse
   */
  async createBasicAccelerateIpEndpointRelations(request: $_model.CreateBasicAccelerateIpEndpointRelationsRequest): Promise<$_model.CreateBasicAccelerateIpEndpointRelationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBasicAccelerateIpEndpointRelationsWithOptions(request, runtime);
  }

  /**
   * Basic Alibaba Cloud Global Accelerator (GA) instances leverage Alibaba Cloud\\"s premium global the Internet bandwidth and high-quality transmission network to provide users with point-to-point acceleration. Basic Alibaba Cloud Global Accelerator (GA) instances are primarily used for Layer 3 (IP protocol) network acceleration. You can invoke the CreateBasicAccelerator operation to create a basic Alibaba Cloud Global Accelerator (GA) instance.
   * 
   * @remarks
   * *CreateBasicAccelerator** is an asynchronous operation. After you invoke this operation, the system returns a basic Alibaba Cloud Global Accelerator (GA) instance ID, but the instance is not yet created. The creation node continues to execute in the background. You can invoke [GetBasicAccelerator](https://help.aliyun.com/document_detail/353188.html) or [ListBasicAccelerators](https://help.aliyun.com/document_detail/353189.html) to query the status of the basic GA instance:
   * - If the basic GA instance is in the **init** state, the instance is being created. In this state, you can only perform query operations.
   * - If the basic GA instance is in the **active** state, the instance is created.
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
   * Basic Alibaba Cloud Global Accelerator (GA) instances leverage Alibaba Cloud\\"s premium global the Internet bandwidth and high-quality transmission network to provide users with point-to-point acceleration. Basic Alibaba Cloud Global Accelerator (GA) instances are primarily used for Layer 3 (IP protocol) network acceleration. You can invoke the CreateBasicAccelerator operation to create a basic Alibaba Cloud Global Accelerator (GA) instance.
   * 
   * @remarks
   * *CreateBasicAccelerator** is an asynchronous operation. After you invoke this operation, the system returns a basic Alibaba Cloud Global Accelerator (GA) instance ID, but the instance is not yet created. The creation node continues to execute in the background. You can invoke [GetBasicAccelerator](https://help.aliyun.com/document_detail/353188.html) or [ListBasicAccelerators](https://help.aliyun.com/document_detail/353189.html) to query the status of the basic GA instance:
   * - If the basic GA instance is in the **init** state, the instance is being created. In this state, you can only perform query operations.
   * - If the basic GA instance is in the **active** state, the instance is created.
   * 
   * @param request - CreateBasicAcceleratorRequest
   * @returns CreateBasicAcceleratorResponse
   */
  async createBasicAccelerator(request: $_model.CreateBasicAcceleratorRequest): Promise<$_model.CreateBasicAcceleratorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBasicAcceleratorWithOptions(request, runtime);
  }

  /**
   * Invokes the CreateBasicEndpoint operation to create an endpoint for a basic Alibaba Cloud Global Accelerator (GA) instance.
   * 
   * @remarks
   * - **CreateBasicEndpoint** is an asynchronous operation. After you invoke this operation, the system returns an endpoint ID for the basic Alibaba Cloud Global Accelerator (GA) instance, but the endpoint is not yet created. The creation task continues to execute in the background. You can invoke [ListBasicEndpoints](https://help.aliyun.com/document_detail/466831.html) to query the endpoint status: 
   *     - When the endpoint is in the **init** state, the endpoint is being created. In this state, you can only execute query operations.
   *     - When the endpoint is in the **active** state, the endpoint is created.
   * - **CreateBasicEndpoint** does not support concurrent endpoint creation within the same basic Alibaba Cloud Global Accelerator (GA) instance.
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
   * Invokes the CreateBasicEndpoint operation to create an endpoint for a basic Alibaba Cloud Global Accelerator (GA) instance.
   * 
   * @remarks
   * - **CreateBasicEndpoint** is an asynchronous operation. After you invoke this operation, the system returns an endpoint ID for the basic Alibaba Cloud Global Accelerator (GA) instance, but the endpoint is not yet created. The creation task continues to execute in the background. You can invoke [ListBasicEndpoints](https://help.aliyun.com/document_detail/466831.html) to query the endpoint status: 
   *     - When the endpoint is in the **init** state, the endpoint is being created. In this state, you can only execute query operations.
   *     - When the endpoint is in the **active** state, the endpoint is created.
   * - **CreateBasicEndpoint** does not support concurrent endpoint creation within the same basic Alibaba Cloud Global Accelerator (GA) instance.
   * 
   * @param request - CreateBasicEndpointRequest
   * @returns CreateBasicEndpointResponse
   */
  async createBasicEndpoint(request: $_model.CreateBasicEndpointRequest): Promise<$_model.CreateBasicEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBasicEndpointWithOptions(request, runtime);
  }

  /**
   * Invokes the CreateBasicEndpointGroup operation to create an endpoint group for a basic Alibaba Cloud Global Accelerator (GA) instance.
   * 
   * @remarks
   * - **CreateBasicEndpointGroup** is an asynchronous operation. After you invoke this operation, the system returns an endpoint group ID before the endpoint group is created. The endpoint group is being created in the background. You can invoke [GetBasicEndpointGroup](https://help.aliyun.com/document_detail/362984.html) to query the status of the endpoint group:
   *     - If the endpoint group is in the **init** state, the endpoint group is being created. In this state, you can only perform query operations.
   *     - If the endpoint group is in the **active** state, the endpoint group is created.
   * - **CreateBasicEndpointGroup** does not support concurrent requests to create an endpoint group for the same basic Alibaba Cloud Global Accelerator (GA) instance.
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
   * Invokes the CreateBasicEndpointGroup operation to create an endpoint group for a basic Alibaba Cloud Global Accelerator (GA) instance.
   * 
   * @remarks
   * - **CreateBasicEndpointGroup** is an asynchronous operation. After you invoke this operation, the system returns an endpoint group ID before the endpoint group is created. The endpoint group is being created in the background. You can invoke [GetBasicEndpointGroup](https://help.aliyun.com/document_detail/362984.html) to query the status of the endpoint group:
   *     - If the endpoint group is in the **init** state, the endpoint group is being created. In this state, you can only perform query operations.
   *     - If the endpoint group is in the **active** state, the endpoint group is created.
   * - **CreateBasicEndpointGroup** does not support concurrent requests to create an endpoint group for the same basic Alibaba Cloud Global Accelerator (GA) instance.
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
   * Invokes the CreateBasicIpSet operation to create an acceleration region for a basic Alibaba Cloud Global Accelerator (GA) instance.
   * 
   * @remarks
   * When you invoke this operation, take note of the following items:
   * - A basic Alibaba Cloud Global Accelerator (GA) instance supports only one acceleration region and supports only the IPv4 protocol.
   * - **CreateBasicIpSet** is an asynchronous operation. After a request is sent, the system returns an acceleration region instance ID but the acceleration region is not yet created. The creation node continues to run in the background. You can invoke [GetBasicIpSet](https://help.aliyun.com/document_detail/362987.html) to query the status of the acceleration region:
   *     - If the acceleration region is in the **init** state, the acceleration region is being created. In this state, you can only execute query operations.
   *     - If the acceleration region is in the **active** state, the acceleration region is created.
   * - The **CreateBasicIpSet** operation does not support concurrent creation of acceleration regions within the same basic Alibaba Cloud Global Accelerator (GA) instance.
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
   * Invokes the CreateBasicIpSet operation to create an acceleration region for a basic Alibaba Cloud Global Accelerator (GA) instance.
   * 
   * @remarks
   * When you invoke this operation, take note of the following items:
   * - A basic Alibaba Cloud Global Accelerator (GA) instance supports only one acceleration region and supports only the IPv4 protocol.
   * - **CreateBasicIpSet** is an asynchronous operation. After a request is sent, the system returns an acceleration region instance ID but the acceleration region is not yet created. The creation node continues to run in the background. You can invoke [GetBasicIpSet](https://help.aliyun.com/document_detail/362987.html) to query the status of the acceleration region:
   *     - If the acceleration region is in the **init** state, the acceleration region is being created. In this state, you can only execute query operations.
   *     - If the acceleration region is in the **active** state, the acceleration region is created.
   * - The **CreateBasicIpSet** operation does not support concurrent creation of acceleration regions within the same basic Alibaba Cloud Global Accelerator (GA) instance.
   * 
   * @param request - CreateBasicIpSetRequest
   * @returns CreateBasicIpSetResponse
   */
  async createBasicIpSet(request: $_model.CreateBasicIpSetRequest): Promise<$_model.CreateBasicIpSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBasicIpSetWithOptions(request, runtime);
  }

  /**
   * Invokes the CreateCustomRoutingEndpointGroupDestinations operation to create mapping configurations for an endpoint group that is associated with a custom route listener.
   * 
   * @remarks
   * An Alibaba Cloud Global Accelerator (GA) instance can generate a port mapping table based on the configured listener port range, the mapping configurations (protocols and port ranges) of the destination endpoint group, and the IP address information of the endpoints (vSwitches). This enables deterministic routing of traffic to specific IP addresses and ports within the vSwitches.
   * This operation creates mapping configurations for an endpoint group that is associated with a custom route listener. When you invoke this operation, take note of the following items:
   * - **CreateCustomRoutingEndpointGroupDestinations** is an asynchronous operation. After you send a request, the system returns a request ID, but the mapping configurations for the endpoint group are not yet created. The creation node continues to run in the background. You can invoke the [DescribeCustomRoutingEndpointGroup](https://help.aliyun.com/document_detail/449373.html) operation to query the status of the endpoint group and confirm whether the mapping configurations are created: 
   *     - If the endpoint group is in the **updating** state, the mapping configurations are being created. In this state, you can only execute query operations.
   *     - If the endpoint group is in the **active** state, the mapping configurations are created.
   * - **CreateCustomRoutingEndpointGroupDestinations** does not support concurrent creation of mapping configurations for endpoint groups associated with custom route listeners within the same Alibaba Cloud Global Accelerator (GA) instance.
   * ### Before you begin
   * Before you create mapping configurations for an endpoint group associated with a custom route listener, make sure that you have completed the following operations:
   * - A standard Alibaba Cloud Global Accelerator (GA) instance is created. For more information, see [CreateAccelerator](https://help.aliyun.com/document_detail/206786.html).
   * - A bandwidth plan is attached to the standard Global Accelerator instance. For more information, see [BandwidthPackageAddAccelerator](https://help.aliyun.com/document_detail/153239.html).
   * - You have completed the deployment of the required applications as backend services to accept forwarded requests from Global Accelerator. Custom route listeners support only vSwitches as backend service types.
   * - You have obtained the permissions to use custom route listeners and created a custom route listener. The custom route listener type is in invitational preview. To use this feature, contact your account manager. To create a custom route listener, see [CreateListener](https://help.aliyun.com/document_detail/153253.html).
   * - You have created an endpoint group for the custom route listener. For more information, see [CreateCustomRoutingEndpointGroups](https://help.aliyun.com/document_detail/449363.html).
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
   * Invokes the CreateCustomRoutingEndpointGroupDestinations operation to create mapping configurations for an endpoint group that is associated with a custom route listener.
   * 
   * @remarks
   * An Alibaba Cloud Global Accelerator (GA) instance can generate a port mapping table based on the configured listener port range, the mapping configurations (protocols and port ranges) of the destination endpoint group, and the IP address information of the endpoints (vSwitches). This enables deterministic routing of traffic to specific IP addresses and ports within the vSwitches.
   * This operation creates mapping configurations for an endpoint group that is associated with a custom route listener. When you invoke this operation, take note of the following items:
   * - **CreateCustomRoutingEndpointGroupDestinations** is an asynchronous operation. After you send a request, the system returns a request ID, but the mapping configurations for the endpoint group are not yet created. The creation node continues to run in the background. You can invoke the [DescribeCustomRoutingEndpointGroup](https://help.aliyun.com/document_detail/449373.html) operation to query the status of the endpoint group and confirm whether the mapping configurations are created: 
   *     - If the endpoint group is in the **updating** state, the mapping configurations are being created. In this state, you can only execute query operations.
   *     - If the endpoint group is in the **active** state, the mapping configurations are created.
   * - **CreateCustomRoutingEndpointGroupDestinations** does not support concurrent creation of mapping configurations for endpoint groups associated with custom route listeners within the same Alibaba Cloud Global Accelerator (GA) instance.
   * ### Before you begin
   * Before you create mapping configurations for an endpoint group associated with a custom route listener, make sure that you have completed the following operations:
   * - A standard Alibaba Cloud Global Accelerator (GA) instance is created. For more information, see [CreateAccelerator](https://help.aliyun.com/document_detail/206786.html).
   * - A bandwidth plan is attached to the standard Global Accelerator instance. For more information, see [BandwidthPackageAddAccelerator](https://help.aliyun.com/document_detail/153239.html).
   * - You have completed the deployment of the required applications as backend services to accept forwarded requests from Global Accelerator. Custom route listeners support only vSwitches as backend service types.
   * - You have obtained the permissions to use custom route listeners and created a custom route listener. The custom route listener type is in invitational preview. To use this feature, contact your account manager. To create a custom route listener, see [CreateListener](https://help.aliyun.com/document_detail/153253.html).
   * - You have created an endpoint group for the custom route listener. For more information, see [CreateCustomRoutingEndpointGroups](https://help.aliyun.com/document_detail/449363.html).
   * 
   * @param request - CreateCustomRoutingEndpointGroupDestinationsRequest
   * @returns CreateCustomRoutingEndpointGroupDestinationsResponse
   */
  async createCustomRoutingEndpointGroupDestinations(request: $_model.CreateCustomRoutingEndpointGroupDestinationsRequest): Promise<$_model.CreateCustomRoutingEndpointGroupDestinationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCustomRoutingEndpointGroupDestinationsWithOptions(request, runtime);
  }

  /**
   * Invokes the CreateCustomRoutingEndpointGroups operation to create endpoint groups for a custom routing type listener in batches.
   * 
   * @remarks
   * Global Accelerator allocates traffic to endpoints within endpoint groups based on the forwarding method defined by the listener routing type.
   * - After you configure an intelligent routing listener, the Alibaba Cloud Global Accelerator (GA) instance automatically selects the nearest healthy endpoint group for traffic forwarding based on latency factors (primarily depending on geographic location and network link conditions), and ultimately delivers client network access requests to healthy endpoints.
   * - After you configure a custom routing type listener, the Alibaba Cloud Global Accelerator (GA) instance generates a port mapping table based on the configured listener port range, destination endpoint group protocol and port range, and IP address information of the endpoints (vSwitches), to deterministically route traffic to specific IP addresses and ports within vSwitches.
   * This operation creates endpoint groups for a custom routing type listener. To create endpoint groups for an intelligent routing listener, invoke [CreateEndpointGroup](https://help.aliyun.com/document_detail/153259.html).
   * When you invoke this operation, take note of the following items:
   * - **CreateCustomRoutingEndpointGroups** is an asynchronous operation. After you send a request, the system returns a request ID, but the endpoint groups for the custom routing type listener are not yet created. The creation task continues to execute in the background. You can invoke [DescribeCustomRoutingEndpointGroup](https://help.aliyun.com/document_detail/449373.html) or [ListCustomRoutingEndpointGroups](https://help.aliyun.com/document_detail/449374.html) to query the status of the endpoint groups: 
   *     - If an endpoint group is in the **init** state, the endpoint groups are being created in batches. In this state, you can only execute query operations.
   *     - When all endpoint groups are in the **active** state, the batch creation is complete.
   * - **CreateCustomRoutingEndpointGroups** does not support concurrent creation of endpoint groups for custom routing type listeners within the same Alibaba Cloud Global Accelerator (GA) instance.
   * ### Before you begin
   * Before you create endpoint groups for a custom routing type listener, make sure that you have completed the following operations:
   * - A standard Global Accelerator instance is created. For more information, see [CreateAccelerator](https://help.aliyun.com/document_detail/206786.html).
   * - A bandwidth plan is attached to the standard Alibaba Cloud Global Accelerator (GA) instance. For more information, see [BandwidthPackageAddAccelerator](https://help.aliyun.com/document_detail/153239.html).
   * - You have deployed the relevant applications as backend services for Global Accelerator to accept forwarded requests. Custom routing type listeners support only vSwitches as the backend service type.
   * - You have applied for permissions to use custom routing type listeners and created a custom routing type listener. The custom routing type for listeners is in invitational preview. To use this feature, contact your account manager. To create a custom routing type listener, see [CreateListener](https://help.aliyun.com/document_detail/153253.html).
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
   * Invokes the CreateCustomRoutingEndpointGroups operation to create endpoint groups for a custom routing type listener in batches.
   * 
   * @remarks
   * Global Accelerator allocates traffic to endpoints within endpoint groups based on the forwarding method defined by the listener routing type.
   * - After you configure an intelligent routing listener, the Alibaba Cloud Global Accelerator (GA) instance automatically selects the nearest healthy endpoint group for traffic forwarding based on latency factors (primarily depending on geographic location and network link conditions), and ultimately delivers client network access requests to healthy endpoints.
   * - After you configure a custom routing type listener, the Alibaba Cloud Global Accelerator (GA) instance generates a port mapping table based on the configured listener port range, destination endpoint group protocol and port range, and IP address information of the endpoints (vSwitches), to deterministically route traffic to specific IP addresses and ports within vSwitches.
   * This operation creates endpoint groups for a custom routing type listener. To create endpoint groups for an intelligent routing listener, invoke [CreateEndpointGroup](https://help.aliyun.com/document_detail/153259.html).
   * When you invoke this operation, take note of the following items:
   * - **CreateCustomRoutingEndpointGroups** is an asynchronous operation. After you send a request, the system returns a request ID, but the endpoint groups for the custom routing type listener are not yet created. The creation task continues to execute in the background. You can invoke [DescribeCustomRoutingEndpointGroup](https://help.aliyun.com/document_detail/449373.html) or [ListCustomRoutingEndpointGroups](https://help.aliyun.com/document_detail/449374.html) to query the status of the endpoint groups: 
   *     - If an endpoint group is in the **init** state, the endpoint groups are being created in batches. In this state, you can only execute query operations.
   *     - When all endpoint groups are in the **active** state, the batch creation is complete.
   * - **CreateCustomRoutingEndpointGroups** does not support concurrent creation of endpoint groups for custom routing type listeners within the same Alibaba Cloud Global Accelerator (GA) instance.
   * ### Before you begin
   * Before you create endpoint groups for a custom routing type listener, make sure that you have completed the following operations:
   * - A standard Global Accelerator instance is created. For more information, see [CreateAccelerator](https://help.aliyun.com/document_detail/206786.html).
   * - A bandwidth plan is attached to the standard Alibaba Cloud Global Accelerator (GA) instance. For more information, see [BandwidthPackageAddAccelerator](https://help.aliyun.com/document_detail/153239.html).
   * - You have deployed the relevant applications as backend services for Global Accelerator to accept forwarded requests. Custom routing type listeners support only vSwitches as the backend service type.
   * - You have applied for permissions to use custom routing type listeners and created a custom routing type listener. The custom routing type for listeners is in invitational preview. To use this feature, contact your account manager. To create a custom routing type listener, see [CreateListener](https://help.aliyun.com/document_detail/153253.html).
   * 
   * @param request - CreateCustomRoutingEndpointGroupsRequest
   * @returns CreateCustomRoutingEndpointGroupsResponse
   */
  async createCustomRoutingEndpointGroups(request: $_model.CreateCustomRoutingEndpointGroupsRequest): Promise<$_model.CreateCustomRoutingEndpointGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCustomRoutingEndpointGroupsWithOptions(request, runtime);
  }

  /**
   * Invokes the CreateCustomRoutingEndpointTrafficPolicies operation to create an endpoint traffic policy (custom route type listener).
   * 
   * @remarks
   * This operation takes effect only when the traffic policy of the backend service for the endpoint is set to allow traffic to specified destinations that can accept access traffic. You can invoke [DescribeCustomRoutingEndpoint](https://help.aliyun.com/document_detail/449386.html) to query the traffic policy of the backend service for a specified endpoint. This operation takes effect only when **TrafficToEndpointPolicy** is set to **AllowCustom** (specifying destinations that can accept access traffic).
   * Before you invoke this operation, take note of the following items:
   * - **CreateCustomRoutingEndpointTrafficPolicies** is an asynchronous operation. After you send a request, the system returns a request ID, but the endpoint traffic policies for the custom route type listener are not yet created. The creation task continues to run in the background. You can invoke [DescribeCustomRoutingEndpointGroup](https://help.aliyun.com/document_detail/449373.html) to query the status of the endpoint group to confirm whether the traffic policies are created. 
   *     - If the endpoint group is in the **updating** state, the traffic policies are being created. In this state, you can only execute query operations.
   *     - If the endpoint group is in the **active** state, the traffic policies are created.
   * - The **CreateCustomRoutingEndpointTrafficPolicies** operation does not support concurrent creation of endpoint traffic policies within the same Global Accelerator instance.
   * ### Before you begin
   * Before you create an endpoint traffic policy, make sure that you have completed the following operations:
   * - A standard Global Accelerator instance is created. For more information, see [CreateAccelerator](https://help.aliyun.com/document_detail/206786.html).
   * - If the billing method of the standard Global Accelerator instance is **pay-by-bandwidth**, a basic bandwidth plan is attached to the standard Global Accelerator instance. For more information, see [BandwidthPackageAddAccelerator](https://help.aliyun.com/document_detail/153239.html).
   * - You have deployed the required applications as backend services to accept forwarded requests from Global Accelerator. The backend service type for custom route type listeners supports only vSwitches.
   * - You have obtained the permissions to use custom route type listeners and created a custom route type listener. The custom route type for listeners is in invitational preview. To use this feature, contact your account manager. To create a custom route type listener, see [CreateListener](https://help.aliyun.com/document_detail/153253.html).
   * - An endpoint group is created for the custom route type listener. For more information, see [CreateCustomRoutingEndpointGroups](https://help.aliyun.com/document_detail/449363.html).
   * - An endpoint is created for the custom route type listener. For more information, see [CreateCustomRoutingEndpoints](https://help.aliyun.com/document_detail/449382.html).
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
   * Invokes the CreateCustomRoutingEndpointTrafficPolicies operation to create an endpoint traffic policy (custom route type listener).
   * 
   * @remarks
   * This operation takes effect only when the traffic policy of the backend service for the endpoint is set to allow traffic to specified destinations that can accept access traffic. You can invoke [DescribeCustomRoutingEndpoint](https://help.aliyun.com/document_detail/449386.html) to query the traffic policy of the backend service for a specified endpoint. This operation takes effect only when **TrafficToEndpointPolicy** is set to **AllowCustom** (specifying destinations that can accept access traffic).
   * Before you invoke this operation, take note of the following items:
   * - **CreateCustomRoutingEndpointTrafficPolicies** is an asynchronous operation. After you send a request, the system returns a request ID, but the endpoint traffic policies for the custom route type listener are not yet created. The creation task continues to run in the background. You can invoke [DescribeCustomRoutingEndpointGroup](https://help.aliyun.com/document_detail/449373.html) to query the status of the endpoint group to confirm whether the traffic policies are created. 
   *     - If the endpoint group is in the **updating** state, the traffic policies are being created. In this state, you can only execute query operations.
   *     - If the endpoint group is in the **active** state, the traffic policies are created.
   * - The **CreateCustomRoutingEndpointTrafficPolicies** operation does not support concurrent creation of endpoint traffic policies within the same Global Accelerator instance.
   * ### Before you begin
   * Before you create an endpoint traffic policy, make sure that you have completed the following operations:
   * - A standard Global Accelerator instance is created. For more information, see [CreateAccelerator](https://help.aliyun.com/document_detail/206786.html).
   * - If the billing method of the standard Global Accelerator instance is **pay-by-bandwidth**, a basic bandwidth plan is attached to the standard Global Accelerator instance. For more information, see [BandwidthPackageAddAccelerator](https://help.aliyun.com/document_detail/153239.html).
   * - You have deployed the required applications as backend services to accept forwarded requests from Global Accelerator. The backend service type for custom route type listeners supports only vSwitches.
   * - You have obtained the permissions to use custom route type listeners and created a custom route type listener. The custom route type for listeners is in invitational preview. To use this feature, contact your account manager. To create a custom route type listener, see [CreateListener](https://help.aliyun.com/document_detail/153253.html).
   * - An endpoint group is created for the custom route type listener. For more information, see [CreateCustomRoutingEndpointGroups](https://help.aliyun.com/document_detail/449363.html).
   * - An endpoint is created for the custom route type listener. For more information, see [CreateCustomRoutingEndpoints](https://help.aliyun.com/document_detail/449382.html).
   * 
   * @param request - CreateCustomRoutingEndpointTrafficPoliciesRequest
   * @returns CreateCustomRoutingEndpointTrafficPoliciesResponse
   */
  async createCustomRoutingEndpointTrafficPolicies(request: $_model.CreateCustomRoutingEndpointTrafficPoliciesRequest): Promise<$_model.CreateCustomRoutingEndpointTrafficPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCustomRoutingEndpointTrafficPoliciesWithOptions(request, runtime);
  }

  /**
   * Invokes the CreateCustomRoutingEndpoints operation to create endpoints for a custom route type listener.
   * 
   * @remarks
   * After you configure a custom route type listener, the Alibaba Cloud Global Accelerator (GA) instance generates a port mapping table based on the configured listener port range, the protocol and port range of the destination endpoint group, and the IP address information of the endpoints (vSwitches). This way, traffic is deterministically routed to specific IP addresses and ports in the vSwitches.
   * This operation creates endpoints for a custom route type listener. When you invoke this operation, take note of the following items:
   * - **CreateCustomRoutingEndpoints** is an asynchronous operation. After a request is sent, the system returns a request ID, but the endpoints are not yet created. The creation node continues to run in the background. You can invoke the [DescribeCustomRoutingEndpointGroup](https://help.aliyun.com/document_detail/449373.html) operation to query the status of the endpoint group to confirm whether the endpoints are created: 
   *     - If the endpoint group is in the **updating** state, the endpoints are being created. In this state, you can only execute query operations.
   *     - If the endpoint group is in the **active** state, the endpoints are created.
   * - The **CreateCustomRoutingEndpoints** operation does not support concurrent requests to create endpoints for custom route listeners within the same Alibaba Cloud Global Accelerator (GA) instance.
   * ### Before you begin
   * Before you create endpoints for a custom route type listener, make sure that the following operations are complete:
   * - A standard Global Accelerator instance is created. For more information, see [CreateAccelerator](https://help.aliyun.com/document_detail/206786.html).
   * - A bandwidth plan is attached to the standard Alibaba Cloud Global Accelerator (GA) instance. For more information, see [BandwidthPackageAddAccelerator](https://help.aliyun.com/document_detail/153239.html).
   * - Applications are deployed as backend services of Global Accelerator to accept forwarded requests. Custom route type listeners support only vSwitches as the backend service type.
   * - You have obtained the permissions to use custom route type listeners and created a custom route type listener. The custom route type for listeners is in invitational preview. To use this feature, contact your account manager. To create a custom route type listener, see [CreateListener](https://help.aliyun.com/document_detail/153253.html).
   * - An endpoint group for the custom route type listener is created. For more information, see [CreateCustomRoutingEndpointGroups](https://help.aliyun.com/document_detail/449363.html).
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
   * Invokes the CreateCustomRoutingEndpoints operation to create endpoints for a custom route type listener.
   * 
   * @remarks
   * After you configure a custom route type listener, the Alibaba Cloud Global Accelerator (GA) instance generates a port mapping table based on the configured listener port range, the protocol and port range of the destination endpoint group, and the IP address information of the endpoints (vSwitches). This way, traffic is deterministically routed to specific IP addresses and ports in the vSwitches.
   * This operation creates endpoints for a custom route type listener. When you invoke this operation, take note of the following items:
   * - **CreateCustomRoutingEndpoints** is an asynchronous operation. After a request is sent, the system returns a request ID, but the endpoints are not yet created. The creation node continues to run in the background. You can invoke the [DescribeCustomRoutingEndpointGroup](https://help.aliyun.com/document_detail/449373.html) operation to query the status of the endpoint group to confirm whether the endpoints are created: 
   *     - If the endpoint group is in the **updating** state, the endpoints are being created. In this state, you can only execute query operations.
   *     - If the endpoint group is in the **active** state, the endpoints are created.
   * - The **CreateCustomRoutingEndpoints** operation does not support concurrent requests to create endpoints for custom route listeners within the same Alibaba Cloud Global Accelerator (GA) instance.
   * ### Before you begin
   * Before you create endpoints for a custom route type listener, make sure that the following operations are complete:
   * - A standard Global Accelerator instance is created. For more information, see [CreateAccelerator](https://help.aliyun.com/document_detail/206786.html).
   * - A bandwidth plan is attached to the standard Alibaba Cloud Global Accelerator (GA) instance. For more information, see [BandwidthPackageAddAccelerator](https://help.aliyun.com/document_detail/153239.html).
   * - Applications are deployed as backend services of Global Accelerator to accept forwarded requests. Custom route type listeners support only vSwitches as the backend service type.
   * - You have obtained the permissions to use custom route type listeners and created a custom route type listener. The custom route type for listeners is in invitational preview. To use this feature, contact your account manager. To create a custom route type listener, see [CreateListener](https://help.aliyun.com/document_detail/153253.html).
   * - An endpoint group for the custom route type listener is created. For more information, see [CreateCustomRoutingEndpointGroups](https://help.aliyun.com/document_detail/449363.html).
   * 
   * @param request - CreateCustomRoutingEndpointsRequest
   * @returns CreateCustomRoutingEndpointsResponse
   */
  async createCustomRoutingEndpoints(request: $_model.CreateCustomRoutingEndpointsRequest): Promise<$_model.CreateCustomRoutingEndpointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCustomRoutingEndpointsWithOptions(request, runtime);
  }

  /**
   * Creates an accelerated domain name and associates it with one or more GA instances.
   * 
   * @remarks
   * After you associate an accelerated domain name that has obtained an ICP number with a Global Accelerator (GA) instance, you do not need to complete filing for the accelerated domain name or its subdomains on Alibaba Cloud.
   * This operation adds an accelerated domain name and associates it with GA instances. Take note of the following items when calling this operation:
   * - If your accelerated domain name is hosted in the Chinese mainland, you must obtain an ICP number for the domain name.
   * - The same accelerated domain name cannot be repeatedly associated with the same GA instance.
   * - You cannot repeatedly call the **CreateDomain** operation by using the same Alibaba Cloud account within a specific period of time.
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
   * Creates an accelerated domain name and associates it with one or more GA instances.
   * 
   * @remarks
   * After you associate an accelerated domain name that has obtained an ICP number with a Global Accelerator (GA) instance, you do not need to complete filing for the accelerated domain name or its subdomains on Alibaba Cloud.
   * This operation adds an accelerated domain name and associates it with GA instances. Take note of the following items when calling this operation:
   * - If your accelerated domain name is hosted in the Chinese mainland, you must obtain an ICP number for the domain name.
   * - The same accelerated domain name cannot be repeatedly associated with the same GA instance.
   * - You cannot repeatedly call the **CreateDomain** operation by using the same Alibaba Cloud account within a specific period of time.
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
   * - Before you create a virtual endpoint group for a Layer 4 listener, you must first create a default endpoint group.
   * - **CreateEndpointGroup** is an asynchronous operation. After you send a request, the system returns an endpoint group ID and begins creating the endpoint group in the background. You can call [DescribeEndpointGroup](https://help.aliyun.com/document_detail/153260.html) to query the status of the endpoint group:
   *   - If the endpoint group is in the **init** state, it is being created. In this state, you can only perform query operations.
   *   - If the endpoint group is in the **active** state, it has been created.
   * - You cannot make concurrent calls to the **CreateEndpointGroup** operation for the same Global Accelerator instance.
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
   * - Before you create a virtual endpoint group for a Layer 4 listener, you must first create a default endpoint group.
   * - **CreateEndpointGroup** is an asynchronous operation. After you send a request, the system returns an endpoint group ID and begins creating the endpoint group in the background. You can call [DescribeEndpointGroup](https://help.aliyun.com/document_detail/153260.html) to query the status of the endpoint group:
   *   - If the endpoint group is in the **init** state, it is being created. In this state, you can only perform query operations.
   *   - If the endpoint group is in the **active** state, it has been created.
   * - You cannot make concurrent calls to the **CreateEndpointGroup** operation for the same Global Accelerator instance.
   * 
   * @param request - CreateEndpointGroupRequest
   * @returns CreateEndpointGroupResponse
   */
  async createEndpointGroup(request: $_model.CreateEndpointGroupRequest): Promise<$_model.CreateEndpointGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createEndpointGroupWithOptions(request, runtime);
  }

  /**
   * Creates endpoint groups in batches.
   * 
   * @remarks
   * - Creates endpoint groups in batches. Default and virtual endpoint groups cannot be created in a single call.
   * - This API does not support creating virtual endpoint groups for Layer-4 listeners. To create a virtual endpoint group for a Layer-4 listener, call [CreateEndpointGroup](https://help.aliyun.com/document_detail/2302394.html).
   * - **CreateEndpointGroups** is an asynchronous API. It returns a request ID and creates the endpoint groups in the background. You can call [DescribeEndpointGroup](https://help.aliyun.com/document_detail/153260.html) or [ListEndpointGroups](https://help.aliyun.com/document_detail/153261.html) to query the status of an endpoint group:
   *   - If an endpoint group is in the **init** state, it is initializing. You can only query the endpoint group in this state.
   *   - The batch creation is complete when all endpoint groups are in the **active** state.
   * - You cannot make concurrent calls to **CreateEndpointGroups** for the same Global Accelerator instance.
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
   * Creates endpoint groups in batches.
   * 
   * @remarks
   * - Creates endpoint groups in batches. Default and virtual endpoint groups cannot be created in a single call.
   * - This API does not support creating virtual endpoint groups for Layer-4 listeners. To create a virtual endpoint group for a Layer-4 listener, call [CreateEndpointGroup](https://help.aliyun.com/document_detail/2302394.html).
   * - **CreateEndpointGroups** is an asynchronous API. It returns a request ID and creates the endpoint groups in the background. You can call [DescribeEndpointGroup](https://help.aliyun.com/document_detail/153260.html) or [ListEndpointGroups](https://help.aliyun.com/document_detail/153261.html) to query the status of an endpoint group:
   *   - If an endpoint group is in the **init** state, it is initializing. You can only query the endpoint group in this state.
   *   - The batch creation is complete when all endpoint groups are in the **active** state.
   * - You cannot make concurrent calls to **CreateEndpointGroups** for the same Global Accelerator instance.
   * 
   * @param request - CreateEndpointGroupsRequest
   * @returns CreateEndpointGroupsResponse
   */
  async createEndpointGroups(request: $_model.CreateEndpointGroupsRequest): Promise<$_model.CreateEndpointGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createEndpointGroupsWithOptions(request, runtime);
  }

  /**
   * If you need to distribute traffic based on request attributes such as the domain name, path, HTTP headers, and cookies, you can create custom forwarding rules for a listener. The listener evaluates incoming requests against these rules and performs different forwarding actions. To create forwarding rules, call the `CreateForwardingRules` API.
   * 
   * @remarks
   * Before you call this API, you should understand how forwarding rules work and their matching conditions. For more information, see [Forwarding rules](https://help.aliyun.com/document_detail/204224.html).
   * When you call this API, note the following:
   * - The **CreateForwardingRules** API is asynchronous. After the call is made, the system returns a forwarding rule ID, but the rule is still being created. You can call [ListForwardingRules](https://help.aliyun.com/document_detail/205817.html) to query the status of the forwarding rule:
   *   - If a forwarding rule is in the **configuring** status, it is still being created, and you can only perform query operations.
   *   - If a forwarding rule is in the **active** status, the rule has been created.
   * - You cannot use the **CreateForwardingRules** API to create forwarding rules concurrently for the same Global Accelerator instance.
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
   * If you need to distribute traffic based on request attributes such as the domain name, path, HTTP headers, and cookies, you can create custom forwarding rules for a listener. The listener evaluates incoming requests against these rules and performs different forwarding actions. To create forwarding rules, call the `CreateForwardingRules` API.
   * 
   * @remarks
   * Before you call this API, you should understand how forwarding rules work and their matching conditions. For more information, see [Forwarding rules](https://help.aliyun.com/document_detail/204224.html).
   * When you call this API, note the following:
   * - The **CreateForwardingRules** API is asynchronous. After the call is made, the system returns a forwarding rule ID, but the rule is still being created. You can call [ListForwardingRules](https://help.aliyun.com/document_detail/205817.html) to query the status of the forwarding rule:
   *   - If a forwarding rule is in the **configuring** status, it is still being created, and you can only perform query operations.
   *   - If a forwarding rule is in the **active** status, the rule has been created.
   * - You cannot use the **CreateForwardingRules** API to create forwarding rules concurrently for the same Global Accelerator instance.
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
   * Create a listener for your GA instance.
   * 
   * @remarks
   * Note the following when you call this operation:
   * - **CreateListener** is an asynchronous operation. After you send a request, the system returns a listener ID but the listener is still being created in the background. You can call [DescribeListener](https://help.aliyun.com/document_detail/153254.html) to check the listener\\"s status:
   *   - An **init** status indicates that the listener is being created. In this state, you can only perform query operations.
   *   - An **active** status indicates that the listener is ready.
   * - You cannot concurrently create multiple listeners for the same Global Accelerator instance by using the **CreateListener** operation.
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
   * Create a listener for your GA instance.
   * 
   * @remarks
   * Note the following when you call this operation:
   * - **CreateListener** is an asynchronous operation. After you send a request, the system returns a listener ID but the listener is still being created in the background. You can call [DescribeListener](https://help.aliyun.com/document_detail/153254.html) to check the listener\\"s status:
   *   - An **init** status indicates that the listener is being created. In this state, you can only perform query operations.
   *   - An **active** status indicates that the listener is ready.
   * - You cannot concurrently create multiple listeners for the same Global Accelerator instance by using the **CreateListener** operation.
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
   * - You cannot delete subscription GA instances.
   * - **DeleteAccelerator** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeAccelerator](https://help.aliyun.com/document_detail/153235.html) operation to query the status of the task.
   *   - If the GA instance is in the **deleting** state, the GA instance is being deleted. In this case, you can perform only query operations.
   *   - If the GA instance cannot be queried, the GA instance is deleted.
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
   * - You cannot delete subscription GA instances.
   * - **DeleteAccelerator** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeAccelerator](https://help.aliyun.com/document_detail/153235.html) operation to query the status of the task.
   *   - If the GA instance is in the **deleting** state, the GA instance is being deleted. In this case, you can perform only query operations.
   *   - If the GA instance cannot be queried, the GA instance is deleted.
   * 
   * @param request - DeleteAcceleratorRequest
   * @returns DeleteAcceleratorResponse
   */
  async deleteAccelerator(request: $_model.DeleteAcceleratorRequest): Promise<$_model.DeleteAcceleratorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAcceleratorWithOptions(request, runtime);
  }

  /**
   * Invokes the DeleteAcl operation to delete an access control policy group.
   * 
   * @remarks
   * *DeleteAcl** is an asynchronous operation. After a request is sent, the system returns a request ID, but the access control policy group is not immediately deleted. The deletion node continues to run in the background. You can invoke [GetAcl](https://help.aliyun.com/document_detail/258292.html) to query the status of the access control policy group:
   * - If the access control policy group is in the **deleting** state, the access control policy group is being deleted. In this state, you can only execute query operations and cannot execute other operations.
   * - If the access control policy group cannot be found, the access control policy group is deleted.
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
   * Invokes the DeleteAcl operation to delete an access control policy group.
   * 
   * @remarks
   * *DeleteAcl** is an asynchronous operation. After a request is sent, the system returns a request ID, but the access control policy group is not immediately deleted. The deletion node continues to run in the background. You can invoke [GetAcl](https://help.aliyun.com/document_detail/258292.html) to query the status of the access control policy group:
   * - If the access control policy group is in the **deleting** state, the access control policy group is being deleted. In this state, you can only execute query operations and cannot execute other operations.
   * - If the access control policy group cannot be found, the access control policy group is deleted.
   * 
   * @param request - DeleteAclRequest
   * @returns DeleteAclResponse
   */
  async deleteAcl(request: $_model.DeleteAclRequest): Promise<$_model.DeleteAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAclWithOptions(request, runtime);
  }

  /**
   * Calls the DeleteApplicationMonitor operation to delete an origin probing task.
   * 
   * @remarks
   * - The **DeleteApplicationMonitor** operation is asynchronous. After you send a request, the system returns a request ID, but the origin probing node is not yet deleted. The deletion node continues to run in the background. You can invoke [ListApplicationMonitor](https://help.aliyun.com/document_detail/408462.html) to query the status of the origin probing node:
   *      - If the origin probing node is in the **deleting** state, the node is being deleted. In this state, you can only execute query operations.
   *     - If the origin probing node cannot be found, the node is deleted.
   * - The **DeleteApplicationMonitor** operation does not support concurrent deletion of origin probing nodes within the same Alibaba Cloud Global Accelerator (GA) instance.
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
   * Calls the DeleteApplicationMonitor operation to delete an origin probing task.
   * 
   * @remarks
   * - The **DeleteApplicationMonitor** operation is asynchronous. After you send a request, the system returns a request ID, but the origin probing node is not yet deleted. The deletion node continues to run in the background. You can invoke [ListApplicationMonitor](https://help.aliyun.com/document_detail/408462.html) to query the status of the origin probing node:
   *      - If the origin probing node is in the **deleting** state, the node is being deleted. In this state, you can only execute query operations.
   *     - If the origin probing node cannot be found, the node is deleted.
   * - The **DeleteApplicationMonitor** operation does not support concurrent deletion of origin probing nodes within the same Alibaba Cloud Global Accelerator (GA) instance.
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
   * Deletes the attach relationship between an accelerated IP address and an endpoint of a basic Global Accelerator (GA) instance.
   * 
   * @remarks
   * - **DeleteBasicAccelerateIpEndpointRelation** is an asynchronous operation. After a request is sent, the system returns a request ID, but the attach relationship between the accelerated IP address and the endpoint of the basic Global Accelerator (GA) instance is not immediately removed. The deletion task continues to run in the background. You can call the following operations to check whether the attach relationship between the accelerated IP address and the endpoint is deleted:  
   *     - Call [GetBasicAccelerateIp](https://help.aliyun.com/document_detail/466794.html) or [ListBasicEndpoints](https://help.aliyun.com/document_detail/466831.html) to query the status of the accelerated IP address and the endpoint respectively. If the status of the accelerated IP address and the endpoint is **unbinding**, the attach relationship is being deleted. In this state, you can only perform query operations and cannot perform other operations.
   *     - Call [ListBasicAccelerateIpEndpointRelations](https://help.aliyun.com/document_detail/466803.html) to query the attach status between the accelerated IP address and the endpoint. If no attach information is returned, the attach relationship between the accelerated IP address and the endpoint is deleted.
   * - **DeleteBasicAccelerateIpEndpointRelation** does not support concurrent deletion of attach relationships between accelerated IP addresses and endpoints within the same basic GA instance.
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
   * Deletes the attach relationship between an accelerated IP address and an endpoint of a basic Global Accelerator (GA) instance.
   * 
   * @remarks
   * - **DeleteBasicAccelerateIpEndpointRelation** is an asynchronous operation. After a request is sent, the system returns a request ID, but the attach relationship between the accelerated IP address and the endpoint of the basic Global Accelerator (GA) instance is not immediately removed. The deletion task continues to run in the background. You can call the following operations to check whether the attach relationship between the accelerated IP address and the endpoint is deleted:  
   *     - Call [GetBasicAccelerateIp](https://help.aliyun.com/document_detail/466794.html) or [ListBasicEndpoints](https://help.aliyun.com/document_detail/466831.html) to query the status of the accelerated IP address and the endpoint respectively. If the status of the accelerated IP address and the endpoint is **unbinding**, the attach relationship is being deleted. In this state, you can only perform query operations and cannot perform other operations.
   *     - Call [ListBasicAccelerateIpEndpointRelations](https://help.aliyun.com/document_detail/466803.html) to query the attach status between the accelerated IP address and the endpoint. If no attach information is returned, the attach relationship between the accelerated IP address and the endpoint is deleted.
   * - **DeleteBasicAccelerateIpEndpointRelation** does not support concurrent deletion of attach relationships between accelerated IP addresses and endpoints within the same basic GA instance.
   * 
   * @param request - DeleteBasicAccelerateIpEndpointRelationRequest
   * @returns DeleteBasicAccelerateIpEndpointRelationResponse
   */
  async deleteBasicAccelerateIpEndpointRelation(request: $_model.DeleteBasicAccelerateIpEndpointRelationRequest): Promise<$_model.DeleteBasicAccelerateIpEndpointRelationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteBasicAccelerateIpEndpointRelationWithOptions(request, runtime);
  }

  /**
   * Invokes the DeleteBasicAccelerator operation to delete a specified basic Alibaba Cloud Global Accelerator (GA) instance.
   * 
   * @remarks
   * - Upfront (subscription) basic Alibaba Cloud Global Accelerator (GA) instances cannot be deleted. You can unsubscribe on the <props="china">[Unsubscribe](https://usercenter2.aliyun.com/refund/refund)<props="intl">[Unsubscribe](https://usercenter2-intl.aliyun.com/refund/refund) page. Before you unsubscribe, make sure that the basic Alibaba Cloud Global Accelerator (GA) instance has no acceleration area or endpoint group configurations and is not attached to a bandwidth plan.
   *     - To delete an acceleration area, refer to [DeleteBasicIpSet](https://help.aliyun.com/document_detail/2253388.html).
   *     - To delete an endpoint group, refer to [DeleteBasicEndpointGroup](https://help.aliyun.com/document_detail/2253399.html).
   *     - To disassociate a bandwidth plan from a basic Alibaba Cloud Global Accelerator (GA) instance, refer to [BandwidthPackageRemoveAccelerator](https://help.aliyun.com/document_detail/153240.html).
   * - Before you invoke this operation to delete a pay-as-you-go basic Alibaba Cloud Global Accelerator (GA) instance, make sure that data migration is complete and that the acceleration area and endpoint group configurations under the instance are deleted.
   *     - To delete an acceleration area, refer to [DeleteBasicIpSet](https://help.aliyun.com/document_detail/2253388.html).
   *     - To delete an endpoint group, refer to [DeleteBasicEndpointGroup](https://help.aliyun.com/document_detail/2253399.html).
   * - **DeleteBasicAccelerator** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the node in the background. You can invoke [GetBasicAccelerator](https://help.aliyun.com/document_detail/353188.html) to query the status of the basic Alibaba Cloud Global Accelerator (GA) instance:
   *     - If the instance is in the **deleting** state, the instance is being deleted. In this state, you can only execute query operations.
   *     - If the instance cannot be found, the instance is deleted.
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
   * Invokes the DeleteBasicAccelerator operation to delete a specified basic Alibaba Cloud Global Accelerator (GA) instance.
   * 
   * @remarks
   * - Upfront (subscription) basic Alibaba Cloud Global Accelerator (GA) instances cannot be deleted. You can unsubscribe on the <props="china">[Unsubscribe](https://usercenter2.aliyun.com/refund/refund)<props="intl">[Unsubscribe](https://usercenter2-intl.aliyun.com/refund/refund) page. Before you unsubscribe, make sure that the basic Alibaba Cloud Global Accelerator (GA) instance has no acceleration area or endpoint group configurations and is not attached to a bandwidth plan.
   *     - To delete an acceleration area, refer to [DeleteBasicIpSet](https://help.aliyun.com/document_detail/2253388.html).
   *     - To delete an endpoint group, refer to [DeleteBasicEndpointGroup](https://help.aliyun.com/document_detail/2253399.html).
   *     - To disassociate a bandwidth plan from a basic Alibaba Cloud Global Accelerator (GA) instance, refer to [BandwidthPackageRemoveAccelerator](https://help.aliyun.com/document_detail/153240.html).
   * - Before you invoke this operation to delete a pay-as-you-go basic Alibaba Cloud Global Accelerator (GA) instance, make sure that data migration is complete and that the acceleration area and endpoint group configurations under the instance are deleted.
   *     - To delete an acceleration area, refer to [DeleteBasicIpSet](https://help.aliyun.com/document_detail/2253388.html).
   *     - To delete an endpoint group, refer to [DeleteBasicEndpointGroup](https://help.aliyun.com/document_detail/2253399.html).
   * - **DeleteBasicAccelerator** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the node in the background. You can invoke [GetBasicAccelerator](https://help.aliyun.com/document_detail/353188.html) to query the status of the basic Alibaba Cloud Global Accelerator (GA) instance:
   *     - If the instance is in the **deleting** state, the instance is being deleted. In this state, you can only execute query operations.
   *     - If the instance cannot be found, the instance is deleted.
   * 
   * @param request - DeleteBasicAcceleratorRequest
   * @returns DeleteBasicAcceleratorResponse
   */
  async deleteBasicAccelerator(request: $_model.DeleteBasicAcceleratorRequest): Promise<$_model.DeleteBasicAcceleratorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteBasicAcceleratorWithOptions(request, runtime);
  }

  /**
   * Invokes the DeleteBasicEndpoint operation to delete an endpoint of a basic Alibaba Cloud Global Accelerator (GA) instance.
   * 
   * @remarks
   * - **DeleteBasicEndpoint** is an asynchronous operation. After a request is sent, the system returns a request ID, but the endpoint is not yet deleted and the deletion node continues in the background. You can invoke [ListBasicEndpoints](https://help.aliyun.com/document_detail/466831.html) to query the status of the endpoint:
   *     - If the endpoint is in the **deleting** state, the endpoint is being deleted. In this state, you can only execute query operations.
   *     - If the endpoint cannot be found, the endpoint is deleted.
   * - **DeleteBasicEndpoint** does not support concurrent deletion of endpoints within the same basic Alibaba Cloud Global Accelerator (GA) instance.
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
   * Invokes the DeleteBasicEndpoint operation to delete an endpoint of a basic Alibaba Cloud Global Accelerator (GA) instance.
   * 
   * @remarks
   * - **DeleteBasicEndpoint** is an asynchronous operation. After a request is sent, the system returns a request ID, but the endpoint is not yet deleted and the deletion node continues in the background. You can invoke [ListBasicEndpoints](https://help.aliyun.com/document_detail/466831.html) to query the status of the endpoint:
   *     - If the endpoint is in the **deleting** state, the endpoint is being deleted. In this state, you can only execute query operations.
   *     - If the endpoint cannot be found, the endpoint is deleted.
   * - **DeleteBasicEndpoint** does not support concurrent deletion of endpoints within the same basic Alibaba Cloud Global Accelerator (GA) instance.
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
   * You can call the DescribeAccelerator operation to query information about a specified Global Accelerator instance.
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
   * You can call the DescribeAccelerator operation to query information about a specified Global Accelerator instance.
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
   * Queries the details of a bandwidth plan by calling the DescribeBandwidthPackage operation.
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
   * Queries the details of a bandwidth plan by calling the DescribeBandwidthPackage operation.
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
   * Queries the pricing and specification details of Global Accelerator commodity options available for purchase.
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
   * Queries the pricing and specification details of Global Accelerator commodity options available for purchase.
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
   * Queries a specified endpoint group.
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
   * Queries a specified endpoint group.
   * 
   * @param request - DescribeEndpointGroupRequest
   * @returns DescribeEndpointGroupResponse
   */
  async describeEndpointGroup(request: $_model.DescribeEndpointGroupRequest): Promise<$_model.DescribeEndpointGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEndpointGroupWithOptions(request, runtime);
  }

  /**
   * Returns the configuration of a specified acceleration region, including its accelerated IP addresses.
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
   * Returns the configuration of a specified acceleration region, including its accelerated IP addresses.
   * 
   * @param request - DescribeIpSetRequest
   * @returns DescribeIpSetResponse
   */
  async describeIpSet(request: $_model.DescribeIpSetRequest): Promise<$_model.DescribeIpSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeIpSetWithOptions(request, runtime);
  }

  /**
   * Describes the configurations of a specific listener.
   * 
   * @remarks
   * This operation queries the configuration of a specified listener, such as its routing type, status, creation timestamp, and port information.
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
   * Describes the configurations of a specific listener.
   * 
   * @remarks
   * This operation queries the configuration of a specified listener, such as its routing type, status, creation timestamp, and port information.
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
   * Call the DetachDdosFromAccelerator operation to detach an Anti-DDoS Pro or Anti-DDoS Premium instance from a Global Accelerator instance.
   * 
   * @remarks
   * - **DetachDdosFromAccelerator** is an asynchronous operation. After you send a request, the system returns a request ID and performs the operation in the background. The Anti-DDoS Pro or Anti-DDoS Premium instance is not immediately detached. You can call [DescribeAccelerator](https://help.aliyun.com/document_detail/153235.html) or [ListAccelerators](https://help.aliyun.com/document_detail/153236.html) to query the state of the Global Accelerator instance:
   *   - If the Global Accelerator instance is in the **configuring** state, the Anti-DDoS Pro or Anti-DDoS Premium instance is being detached. In this state, you can only perform query operations.
   *   - If the Global Accelerator instance is in the **active** state, the Anti-DDoS Pro or Anti-DDoS Premium instance is detached.
   * - The **DetachDdosFromAccelerator** operation does not support concurrent requests to detach Anti-DDoS instances from the same Global Accelerator instance.
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
   * Call the DetachDdosFromAccelerator operation to detach an Anti-DDoS Pro or Anti-DDoS Premium instance from a Global Accelerator instance.
   * 
   * @remarks
   * - **DetachDdosFromAccelerator** is an asynchronous operation. After you send a request, the system returns a request ID and performs the operation in the background. The Anti-DDoS Pro or Anti-DDoS Premium instance is not immediately detached. You can call [DescribeAccelerator](https://help.aliyun.com/document_detail/153235.html) or [ListAccelerators](https://help.aliyun.com/document_detail/153236.html) to query the state of the Global Accelerator instance:
   *   - If the Global Accelerator instance is in the **configuring** state, the Anti-DDoS Pro or Anti-DDoS Premium instance is being detached. In this state, you can only perform query operations.
   *   - If the Global Accelerator instance is in the **active** state, the Anti-DDoS Pro or Anti-DDoS Premium instance is detached.
   * - The **DetachDdosFromAccelerator** operation does not support concurrent requests to detach Anti-DDoS instances from the same Global Accelerator instance.
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
   * Detach integrated cloud product from GA
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
   * Detach integrated cloud product from GA
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
   * Queries the attachment information of an accelerated IP address or endpoint of a basic Global Accelerator (GA) instance.
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
   * Queries the attachment information of an accelerated IP address or endpoint of a basic Global Accelerator (GA) instance.
   * 
   * @param request - GetBasicAccelerateIpEndpointRelationRequest
   * @returns GetBasicAccelerateIpEndpointRelationResponse
   */
  async getBasicAccelerateIpEndpointRelation(request: $_model.GetBasicAccelerateIpEndpointRelationRequest): Promise<$_model.GetBasicAccelerateIpEndpointRelationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBasicAccelerateIpEndpointRelationWithOptions(request, runtime);
  }

  /**
   * Invokes the GetBasicAccelerateIpIdleCount operation to query the number of idle accelerated IP addresses of a basic Alibaba Cloud Global Accelerator (GA) instance.
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
   * Invokes the GetBasicAccelerateIpIdleCount operation to query the number of idle accelerated IP addresses of a basic Alibaba Cloud Global Accelerator (GA) instance.
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
   * Obtain the cloud products associated with a Global Accelerator (GA) instance
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
   * Obtain the cloud products associated with a Global Accelerator (GA) instance
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
   * Calls the GetInvalidDomainCount operation to retrieve the total number of invalid domain names.
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
   * Calls the GetInvalidDomainCount operation to retrieve the total number of invalid domain names.
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
   * @remarks
   * 本接口用于查询带宽计费方式为**按带宽**的标准型全球加速实例各加速地域的带宽峰值限额，即全球加速实例所绑定基础带宽包的带宽值。
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
   * @remarks
   * 本接口用于查询带宽计费方式为**按带宽**的标准型全球加速实例各加速地域的带宽峰值限额，即全球加速实例所绑定基础带宽包的带宽值。
   * 
   * @param request - GetIpsetsBandwidthLimitRequest
   * @returns GetIpsetsBandwidthLimitResponse
   */
  async getIpsetsBandwidthLimit(request: $_model.GetIpsetsBandwidthLimitRequest): Promise<$_model.GetIpsetsBandwidthLimitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getIpsetsBandwidthLimitWithOptions(request, runtime);
  }

  /**
   * Queries the status of a CNAME spare IP address.
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
   * Queries the status of a CNAME spare IP address.
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
   * Queries a list of Global Accelerator instances.
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
   * Queries a list of Global Accelerator instances.
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
   * You can call the ListAvailableAccelerateAreas operation to query available acceleration areas.
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
   * You can call the ListAvailableAccelerateAreas operation to query available acceleration areas.
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
   * Queries a list of bandwidth plans.
   * 
   * @remarks
   * This operation is deprecated. Use [ListBandwidthPackages](https://help.aliyun.com/document_detail/2253239.html) instead.
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
   * Queries a list of bandwidth plans.
   * 
   * @remarks
   * This operation is deprecated. Use [ListBandwidthPackages](https://help.aliyun.com/document_detail/2253239.html) instead.
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
   * Queries the available acceleration areas and regions by calling the ListCommonAreas operation.
   * 
   * @remarks
   * This operation is used to query the available acceleration areas and regions for the intelligent recommendation and free trial on the Global Accelerator wizard page. You can filter results based on specified conditions.
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
   * Queries the available acceleration areas and regions by calling the ListCommonAreas operation.
   * 
   * @remarks
   * This operation is used to query the available acceleration areas and regions for the intelligent recommendation and free trial on the Global Accelerator wizard page. You can filter results based on specified conditions.
   * 
   * @param request - ListCommonAreasRequest
   * @returns ListCommonAreasResponse
   */
  async listCommonAreas(request: $_model.ListCommonAreasRequest): Promise<$_model.ListCommonAreasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCommonAreasWithOptions(request, runtime);
  }

  /**
   * Invokes the ListCustomRoutingEndpointGroupDestinations operation to query the destination configurations of an endpoint group for a custom route listener.
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
   * Invokes the ListCustomRoutingEndpointGroupDestinations operation to query the destination configurations of an endpoint group for a custom route listener.
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
   * Invokes the ListCustomRoutingEndpointTrafficPolicies operation to query the list of endpoint traffic policies for a custom routing type listener.
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
   * Invokes the ListCustomRoutingEndpointTrafficPolicies operation to query the list of endpoint traffic policies for a custom routing type listener.
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
   * After you configure a custom routing listener and an endpoint group, the Global Accelerator (GA) instance generates a port mapping table. This table is based on the listener port range, the protocols and port ranges of the destination endpoint group, and the IP addresses of the endpoints (vSwitches). A custom routing listener uses this port mapping table to deterministically route traffic to specific IP addresses and ports in a vSwitch. This operation queries the generated port mapping table.
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
   * After you configure a custom routing listener and an endpoint group, the Global Accelerator (GA) instance generates a port mapping table. This table is based on the listener port range, the protocols and port ranges of the destination endpoint group, and the IP addresses of the endpoints (vSwitches). A custom routing listener uses this port mapping table to deterministically route traffic to specific IP addresses and ports in a vSwitch. This operation queries the generated port mapping table.
   * 
   * @param request - ListCustomRoutingPortMappingsRequest
   * @returns ListCustomRoutingPortMappingsResponse
   */
  async listCustomRoutingPortMappings(request: $_model.ListCustomRoutingPortMappingsRequest): Promise<$_model.ListCustomRoutingPortMappingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCustomRoutingPortMappingsWithOptions(request, runtime);
  }

  /**
   * Call the ListCustomRoutingPortMappingsByDestination operation to query the port mappings of a specified backend instance for a custom route listener.
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
   * Call the ListCustomRoutingPortMappingsByDestination operation to query the port mappings of a specified backend instance for a custom route listener.
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
   * Lists endpoint groups.
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

    if (!$dara.isNull(request.endpointGroupRegion)) {
      query["EndpointGroupRegion"] = request.endpointGroupRegion;
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
   * Lists endpoint groups.
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
   * > Queries only custom forwarding rules. The default forwarding rule is not included in the results.
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
   * > Queries only custom forwarding rules. The default forwarding rule is not included in the results.
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
   * Retrieves a list of listeners.
   * 
   * @remarks
   * This operation retrieves the listeners of a Global Accelerator instance. The response includes the routing type, status, creation timestamp, and port details for each listener.
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
   * Retrieves a list of listeners.
   * 
   * @remarks
   * This operation retrieves the listeners of a Global Accelerator instance. The response includes the routing type, status, creation timestamp, and port details for each listener.
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
   * Queries the approval status of cross-border permissions for an Alibaba Cloud account (main account).
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
   * Queries the approval status of cross-border permissions for an Alibaba Cloud account (main account).
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
   * Use the UpdateAccelerator operation to modify a Global Accelerator instance.
   * 
   * @remarks
   * - **UpdateAccelerator** is an asynchronous operation. After you send a request, the system returns a request ID and performs the modification in the background. You can call the [DescribeAccelerator](https://help.aliyun.com/document_detail/153235.html) operation to query the state of a Global Accelerator (GA) instance:
   *   - If the GA instance is in the **configuring** state, the instance is being modified. In this state, you can only perform query operations.
   *   - If the GA instance is in the **active** state, the modification is complete.
   * - You cannot call the **UpdateAccelerator** operation concurrently on the same GA instance.
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
   * Use the UpdateAccelerator operation to modify a Global Accelerator instance.
   * 
   * @remarks
   * - **UpdateAccelerator** is an asynchronous operation. After you send a request, the system returns a request ID and performs the modification in the background. You can call the [DescribeAccelerator](https://help.aliyun.com/document_detail/153235.html) operation to query the state of a Global Accelerator (GA) instance:
   *   - If the GA instance is in the **configuring** state, the instance is being modified. In this state, you can only perform query operations.
   *   - If the GA instance is in the **active** state, the modification is complete.
   * - You cannot call the **UpdateAccelerator** operation concurrently on the same GA instance.
   * 
   * @param request - UpdateAcceleratorRequest
   * @returns UpdateAcceleratorResponse
   */
  async updateAccelerator(request: $_model.UpdateAcceleratorRequest): Promise<$_model.UpdateAcceleratorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAcceleratorWithOptions(request, runtime);
  }

  /**
   * You can call the UpdateAcceleratorAutoRenewAttribute operation to modify the auto-renewal property of a Global Accelerator instance.
   * 
   * @remarks
   * The **UpdateAcceleratorAutoRenewAttribute** operation does not support concurrent modifications to the auto-renewal property of the same Global Accelerator instance.
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
   * You can call the UpdateAcceleratorAutoRenewAttribute operation to modify the auto-renewal property of a Global Accelerator instance.
   * 
   * @remarks
   * The **UpdateAcceleratorAutoRenewAttribute** operation does not support concurrent modifications to the auto-renewal property of the same Global Accelerator instance.
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
   * Changes the type of transmission network for a **standard** GA instance whose bandwidth metering method is **pay-by-data-transfer**. Before you call this operation, make sure that the following requirements are met:
   * - Cloud Data Transfer (CDT) is activated. When you call the [CreateAccelerator](https://help.aliyun.com/document_detail/206786.html) operation and set **BandwidthBillingType** to **CDT** to create a **standard** GA instance whose bandwidth metering method is **pay-by-data-transfer**, CDT is automatically activated. The data transfer fees are managed by CDT.
   * - If you want to set **CrossBorderMode** to **private**, which specifies cross-border Express Connect circuit as the type of transmission network, make sure that real-name verification is complete for your enterprise account. For more information, see [Real-name verification](https://help.aliyun.com/document_detail/52595.html).
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
   * Changes the type of transmission network for a **standard** GA instance whose bandwidth metering method is **pay-by-data-transfer**. Before you call this operation, make sure that the following requirements are met:
   * - Cloud Data Transfer (CDT) is activated. When you call the [CreateAccelerator](https://help.aliyun.com/document_detail/206786.html) operation and set **BandwidthBillingType** to **CDT** to create a **standard** GA instance whose bandwidth metering method is **pay-by-data-transfer**, CDT is automatically activated. The data transfer fees are managed by CDT.
   * - If you want to set **CrossBorderMode** to **private**, which specifies cross-border Express Connect circuit as the type of transmission network, make sure that real-name verification is complete for your enterprise account. For more information, see [Real-name verification](https://help.aliyun.com/document_detail/52595.html).
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
   * Enables or disables cross-border data transmission for basic or standard GA instances that use Cloud Data Transfer (CDT) to bill data transfers.
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
   * Enables or disables cross-border data transmission for basic or standard GA instances that use Cloud Data Transfer (CDT) to bill data transfers.
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
   * Modifies the configuration of an origin probing task by calling the UpdateApplicationMonitor operation.
   * 
   * @remarks
   * *UpdateApplicationMonitor** is an asynchronous operation. After you call this operation, the system returns a request ID, but the origin probing task is not yet modified. The modification task continues to run in the background. You can call [DescribeApplicationMonitor](https://help.aliyun.com/document_detail/408463.html) or [ListApplicationMonitor](https://help.aliyun.com/document_detail/408462.html) to check whether the origin probing task configuration has been modified:
   * - If the modified parameter values have not changed, the origin probing task is still being modified. In this case, you can only perform query operations and cannot perform other operations.
   * - If the modified parameter values have changed, the origin probing task has been modified.
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
   * Modifies the configuration of an origin probing task by calling the UpdateApplicationMonitor operation.
   * 
   * @remarks
   * *UpdateApplicationMonitor** is an asynchronous operation. After you call this operation, the system returns a request ID, but the origin probing task is not yet modified. The modification task continues to run in the background. You can call [DescribeApplicationMonitor](https://help.aliyun.com/document_detail/408463.html) or [ListApplicationMonitor](https://help.aliyun.com/document_detail/408462.html) to check whether the origin probing task configuration has been modified:
   * - If the modified parameter values have not changed, the origin probing task is still being modified. In this case, you can only perform query operations and cannot perform other operations.
   * - If the modified parameter values have changed, the origin probing task has been modified.
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
   * You can call the UpdateBandwidthPackage operation to modify the configuration of a bandwidth plan.
   * 
   * @remarks
   * Before you call this operation, note the following:
   * - If you do not change the bandwidth value, **UpdateBandwidthPackage** is a synchronous operation. The modification takes effect immediately.
   * - If you change the bandwidth value of a bandwidth plan that is not associated with a Global Accelerator (GA) instance, **UpdateBandwidthPackage** is an asynchronous operation. The system returns a request ID, but the modification is not complete. The system performs the task in the background. You can call the [DescribeBandwidthPackage](https://help.aliyun.com/document_detail/153241.html) operation to query whether the configuration of the bandwidth plan is modified:
   *   - If the values of the parameters that you want to modify remain unchanged, the bandwidth plan is being modified. In this case, you can only perform query operations.
   *   - If the values of the parameters that you want to modify have changed, the modification is complete.
   * - If you change the bandwidth value of a bandwidth plan that is associated with a GA instance, **UpdateBandwidthPackage** is an asynchronous operation. The system returns a request ID, but the modification is not complete. The system performs the task in the background. You can call the [DescribeAccelerator](https://help.aliyun.com/document_detail/153235.html) operation and query the status of the GA instance to check whether the bandwidth plan is modified:
   *   - If the GA instance is in the **configuring** state, the bandwidth plan that is associated with the GA instance is being modified. In this case, you can only perform query operations.
   *   - If the GA instance is in the **active** state, the bandwidth plan that is associated with the GA instance has been modified.
   * - You cannot repeatedly call the **UpdateBandwidthPackage** operation to modify the configuration of the same bandwidth plan.
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
   * You can call the UpdateBandwidthPackage operation to modify the configuration of a bandwidth plan.
   * 
   * @remarks
   * Before you call this operation, note the following:
   * - If you do not change the bandwidth value, **UpdateBandwidthPackage** is a synchronous operation. The modification takes effect immediately.
   * - If you change the bandwidth value of a bandwidth plan that is not associated with a Global Accelerator (GA) instance, **UpdateBandwidthPackage** is an asynchronous operation. The system returns a request ID, but the modification is not complete. The system performs the task in the background. You can call the [DescribeBandwidthPackage](https://help.aliyun.com/document_detail/153241.html) operation to query whether the configuration of the bandwidth plan is modified:
   *   - If the values of the parameters that you want to modify remain unchanged, the bandwidth plan is being modified. In this case, you can only perform query operations.
   *   - If the values of the parameters that you want to modify have changed, the modification is complete.
   * - If you change the bandwidth value of a bandwidth plan that is associated with a GA instance, **UpdateBandwidthPackage** is an asynchronous operation. The system returns a request ID, but the modification is not complete. The system performs the task in the background. You can call the [DescribeAccelerator](https://help.aliyun.com/document_detail/153235.html) operation and query the status of the GA instance to check whether the bandwidth plan is modified:
   *   - If the GA instance is in the **configuring** state, the bandwidth plan that is associated with the GA instance is being modified. In this case, you can only perform query operations.
   *   - If the GA instance is in the **active** state, the bandwidth plan that is associated with the GA instance has been modified.
   * - You cannot repeatedly call the **UpdateBandwidthPackage** operation to modify the configuration of the same bandwidth plan.
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
   * Updates the configurations of an endpoint group that is associated with a basic Global Accelerator (GA) instance.
   * 
   * @remarks
   * - **UpdateBasicEndpointGroup** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. The system modifies the configurations of an endpoint group that is associated with a basic GA instance by deleting the endpoint group and creating a new endpoint group. You can call the [GetBasicAccelerator](https://help.aliyun.com/document_detail/353188.html) operation to query the status of the task.
   *   - If the basic GA instance is in the **configuring** state, the configurations of the endpoint group are being modified. In this case, you can perform only query operations.
   *   - If the basic GA instance is in the **active** state, the configurations of the endpoint group are modified.
   * - The **UpdateBasicEndpointGroup** operation cannot be repeatedly called for the same basic GA instance within a specific period of time.
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
   * Updates the configurations of an endpoint group that is associated with a basic Global Accelerator (GA) instance.
   * 
   * @remarks
   * - **UpdateBasicEndpointGroup** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. The system modifies the configurations of an endpoint group that is associated with a basic GA instance by deleting the endpoint group and creating a new endpoint group. You can call the [GetBasicAccelerator](https://help.aliyun.com/document_detail/353188.html) operation to query the status of the task.
   *   - If the basic GA instance is in the **configuring** state, the configurations of the endpoint group are being modified. In this case, you can perform only query operations.
   *   - If the basic GA instance is in the **active** state, the configurations of the endpoint group are modified.
   * - The **UpdateBasicEndpointGroup** operation cannot be repeatedly called for the same basic GA instance within a specific period of time.
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
   * You can call the UpdateCustomRoutingEndpointGroupAttribute operation to modify the name and description of an endpoint group associated with a custom routing listener.
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
   * You can call the UpdateCustomRoutingEndpointGroupAttribute operation to modify the name and description of an endpoint group associated with a custom routing listener.
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
   * Calls the UpdateDomain operation to update a domain name.
   * 
   * @remarks
   * This operation is used to update an accelerated domain name. If the new accelerated domain name is deployed in the Chinese mainland, the domain name must have obtained an ICP filing.
   * The **UpdateDomain** operation does not support concurrent updates of accelerated domain names within the same account.
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
   * Calls the UpdateDomain operation to update a domain name.
   * 
   * @remarks
   * This operation is used to update an accelerated domain name. If the new accelerated domain name is deployed in the Chinese mainland, the domain name must have obtained an ICP filing.
   * The **UpdateDomain** operation does not support concurrent updates of accelerated domain names within the same account.
   * 
   * @param request - UpdateDomainRequest
   * @returns UpdateDomainResponse
   */
  async updateDomain(request: $_model.UpdateDomainRequest): Promise<$_model.UpdateDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDomainWithOptions(request, runtime);
  }

  /**
   * Queries and updates the ICP filing status of an accelerated domain name.
   * 
   * @remarks
   * This operation queries the latest ICP filing status of an accelerated domain name and updates the status accordingly.
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
   * Queries and updates the ICP filing status of an accelerated domain name.
   * 
   * @remarks
   * This operation queries the latest ICP filing status of an accelerated domain name and updates the status accordingly.
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
   * Updates the configuration of an endpoint group.
   * 
   * @remarks
   * - The **UpdateEndpointGroup** API is an asynchronous API. After you call this API, the system returns a request ID and starts the update in the background; the configuration is not modified immediately. Call [DescribeEndpointGroup](https://help.aliyun.com/document_detail/153260.html) to check the status of the endpoint group:
   *   - If an endpoint group is in the **updating** status, its configuration is being modified, and you can only perform queries.
   *   - If an endpoint group is in the **active** status, the update is complete.
   * - The **UpdateEndpointGroup** API does not support concurrent updates to endpoint groups in the same Global Accelerator (GA) instance.
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
   * Updates the configuration of an endpoint group.
   * 
   * @remarks
   * - The **UpdateEndpointGroup** API is an asynchronous API. After you call this API, the system returns a request ID and starts the update in the background; the configuration is not modified immediately. Call [DescribeEndpointGroup](https://help.aliyun.com/document_detail/153260.html) to check the status of the endpoint group:
   *   - If an endpoint group is in the **updating** status, its configuration is being modified, and you can only perform queries.
   *   - If an endpoint group is in the **active** status, the update is complete.
   * - The **UpdateEndpointGroup** API does not support concurrent updates to endpoint groups in the same Global Accelerator (GA) instance.
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
   * Modifies endpoint groups for a listener in a batch.
   * 
   * @remarks
   * ### Usage notes
   * - **UpdateEndpointGroups** is an asynchronous operation. After you send a request, the system returns a request ID, but the operation continues to run in the background. You can call the or [](t2323644.xdita#)operation to query the state of an endpoint group.
   *   - If an endpoint group is in the **updating** state, its configuration is being modified. In this state, you can only perform query operations.
   *   - If an endpoint group is in the **active** state, its configuration has been modified.
   * - You cannot concurrently call the **UpdateEndpointGroups** operation to modify the configurations of endpoint groups that belong to the same Global Accelerator (GA) instance.
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
   * Modifies endpoint groups for a listener in a batch.
   * 
   * @remarks
   * ### Usage notes
   * - **UpdateEndpointGroups** is an asynchronous operation. After you send a request, the system returns a request ID, but the operation continues to run in the background. You can call the or [](t2323644.xdita#)operation to query the state of an endpoint group.
   *   - If an endpoint group is in the **updating** state, its configuration is being modified. In this state, you can only perform query operations.
   *   - If an endpoint group is in the **active** state, its configuration has been modified.
   * - You cannot concurrently call the **UpdateEndpointGroups** operation to modify the configurations of endpoint groups that belong to the same Global Accelerator (GA) instance.
   * 
   * @param request - UpdateEndpointGroupsRequest
   * @returns UpdateEndpointGroupsResponse
   */
  async updateEndpointGroups(request: $_model.UpdateEndpointGroupsRequest): Promise<$_model.UpdateEndpointGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateEndpointGroupsWithOptions(request, runtime);
  }

  /**
   * To update forwarding rules, call the UpdateForwardingRules API.
   * 
   * @remarks
   * - **UpdateForwardingRules** is an asynchronous API. A call to this API returns a request ID and runs the update in the background. You can call [ListForwardingRules](https://help.aliyun.com/document_detail/205817.html) to query the status of the forwarding rule:
   *   - A status of **configuring** indicates that the forwarding rule is being updated. During this process, you can only perform query operations.
   *   - A status of **active** indicates that the update is complete.
   * - You cannot use **UpdateForwardingRules** to concurrently update forwarding rules within the same Global Accelerator instance.
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
   * To update forwarding rules, call the UpdateForwardingRules API.
   * 
   * @remarks
   * - **UpdateForwardingRules** is an asynchronous API. A call to this API returns a request ID and runs the update in the background. You can call [ListForwardingRules](https://help.aliyun.com/document_detail/205817.html) to query the status of the forwarding rule:
   *   - A status of **configuring** indicates that the forwarding rule is being updated. During this process, you can only perform query operations.
   *   - A status of **active** indicates that the update is complete.
   * - You cannot use **UpdateForwardingRules** to concurrently update forwarding rules within the same Global Accelerator instance.
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
   * Updates the configurations of a listener for a Global Accelerator (GA) instance.
   * 
   * @remarks
   * Modifies the protocol, ports, and other configurations of a listener to meet your business requirements.
   * When you call this operation, take note of the following items:
   * - **UpdateListener** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [DescribeListener](https://help.aliyun.com/document_detail/153254.html) operation to query the status of a listener.
   *   - If the listener is in the **updating** state, it indicates that its configurations are being modified. In this case, you can perform only query operations.
   *   - If the listener is in the **active** state, it indicates that its configurations are modified.
   * - The **UpdateListener** operation cannot be repeatedly called to modify listener configurations for the same GA instance within a specific period of time.
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
   * Updates the configurations of a listener for a Global Accelerator (GA) instance.
   * 
   * @remarks
   * Modifies the protocol, ports, and other configurations of a listener to meet your business requirements.
   * When you call this operation, take note of the following items:
   * - **UpdateListener** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [DescribeListener](https://help.aliyun.com/document_detail/153254.html) operation to query the status of a listener.
   *   - If the listener is in the **updating** state, it indicates that its configurations are being modified. In this case, you can perform only query operations.
   *   - If the listener is in the **active** state, it indicates that its configurations are modified.
   * - The **UpdateListener** operation cannot be repeatedly called to modify listener configurations for the same GA instance within a specific period of time.
   * 
   * @param request - UpdateListenerRequest
   * @returns UpdateListenerResponse
   */
  async updateListener(request: $_model.UpdateListenerRequest): Promise<$_model.UpdateListenerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateListenerWithOptions(request, runtime);
  }

  /**
   * Modify Simple Log Service log configuration
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
   * Modify Simple Log Service log configuration
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
