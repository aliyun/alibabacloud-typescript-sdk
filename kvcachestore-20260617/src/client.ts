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
      'cn-beijing': "kvcachestore.cn-beijing.aliyuncs.com",
      'cn-shanghai': "kvcachestore.cn-shanghai.aliyuncs.com",
      'ap-southeast-1': "kvcachestore.ap-southeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("kvcachestore", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Mounts KVCacheInstance resources to the virtualization side in batches.
   * 
   * @remarks
   * This is an asynchronous operation. A return status of Attaching indicates that the request has been accepted. Call ListKVCacheStoreAttachInfo to query mount records. A record status of Attached indicates that the mount is complete.
   * * The KVCacheStore must be in the Available or InUse state before it can be mounted.
   * 
   * @param request - AttachKVCacheStoreRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachKVCacheStoreResponse
   */
  async attachKVCacheStoreWithOptions(request: $_model.AttachKVCacheStoreRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachKVCacheStoreResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.arns)) {
      query["Arns"] = request.arns;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachKVCacheStore",
      version: "2026-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachKVCacheStoreResponse>(await this.callApi(params, req, runtime), new $_model.AttachKVCacheStoreResponse({}));
  }

  /**
   * Mounts KVCacheInstance resources to the virtualization side in batches.
   * 
   * @remarks
   * This is an asynchronous operation. A return status of Attaching indicates that the request has been accepted. Call ListKVCacheStoreAttachInfo to query mount records. A record status of Attached indicates that the mount is complete.
   * * The KVCacheStore must be in the Available or InUse state before it can be mounted.
   * 
   * @param request - AttachKVCacheStoreRequest
   * @returns AttachKVCacheStoreResponse
   */
  async attachKVCacheStore(request: $_model.AttachKVCacheStoreRequest): Promise<$_model.AttachKVCacheStoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachKVCacheStoreWithOptions(request, runtime);
  }

  /**
   * Creates a KVCacheInstance instance.
   * 
   * @remarks
   * This is an asynchronous operation. After the request is successful, the KVCacheStore enters the Creating state. You can call GetKVCacheStore or ListKVCacheStores to query the KVCacheStore status. The KVCacheStore becomes available when its status changes to Available.
   * * To ensure idempotence in case of network exceptions, use ClientToken. If you call the operation with the same ClientToken and the same request parameters, the same KVCacheStore ID and order ID are returned. If the request parameters change, an IdempotentParameterMismatch error is returned.
   * * Creating a KVCacheStore generates an order. The response includes OrderId, which you can view in the Expenses and Costs console. For more information, refer to View and manage orders.
   * 
   * @param request - CreateKVCacheStoreRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateKVCacheStoreResponse
   */
  async createKVCacheStoreWithOptions(request: $_model.CreateKVCacheStoreRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateKVCacheStoreResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.capacity)) {
      query["Capacity"] = request.capacity;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.hpnZone)) {
      query["HpnZone"] = request.hpnZone;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.paymentType)) {
      query["PaymentType"] = request.paymentType;
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

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateKVCacheStore",
      version: "2026-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateKVCacheStoreResponse>(await this.callApi(params, req, runtime), new $_model.CreateKVCacheStoreResponse({}));
  }

  /**
   * Creates a KVCacheInstance instance.
   * 
   * @remarks
   * This is an asynchronous operation. After the request is successful, the KVCacheStore enters the Creating state. You can call GetKVCacheStore or ListKVCacheStores to query the KVCacheStore status. The KVCacheStore becomes available when its status changes to Available.
   * * To ensure idempotence in case of network exceptions, use ClientToken. If you call the operation with the same ClientToken and the same request parameters, the same KVCacheStore ID and order ID are returned. If the request parameters change, an IdempotentParameterMismatch error is returned.
   * * Creating a KVCacheStore generates an order. The response includes OrderId, which you can view in the Expenses and Costs console. For more information, refer to View and manage orders.
   * 
   * @param request - CreateKVCacheStoreRequest
   * @returns CreateKVCacheStoreResponse
   */
  async createKVCacheStore(request: $_model.CreateKVCacheStoreRequest): Promise<$_model.CreateKVCacheStoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createKVCacheStoreWithOptions(request, runtime);
  }

  /**
   * Deletes a KVCacheInstance instance.
   * 
   * @remarks
   * The delete operation is irreversible. Data in the KVCacheStore will be erased and cannot be recovered. Proceed with caution.
   * * Billing stops after the deletion begins.
   * * The KVCacheStore to be deleted cannot be in the Creating state.
   * * The KVCacheStore to be deleted cannot have mount records in the Attaching or Attached state.
   * 
   * @param request - DeleteKVCacheStoreRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteKVCacheStoreResponse
   */
  async deleteKVCacheStoreWithOptions(request: $_model.DeleteKVCacheStoreRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteKVCacheStoreResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.kvcsId)) {
      query["KvcsId"] = request.kvcsId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteKVCacheStore",
      version: "2026-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteKVCacheStoreResponse>(await this.callApi(params, req, runtime), new $_model.DeleteKVCacheStoreResponse({}));
  }

  /**
   * Deletes a KVCacheInstance instance.
   * 
   * @remarks
   * The delete operation is irreversible. Data in the KVCacheStore will be erased and cannot be recovered. Proceed with caution.
   * * Billing stops after the deletion begins.
   * * The KVCacheStore to be deleted cannot be in the Creating state.
   * * The KVCacheStore to be deleted cannot have mount records in the Attaching or Attached state.
   * 
   * @param request - DeleteKVCacheStoreRequest
   * @returns DeleteKVCacheStoreResponse
   */
  async deleteKVCacheStore(request: $_model.DeleteKVCacheStoreRequest): Promise<$_model.DeleteKVCacheStoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteKVCacheStoreWithOptions(request, runtime);
  }

  /**
   * Queries the list of regions where KVCacheStore is activated.
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
      version: "2026-06-17",
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
   * Queries the list of regions where KVCacheStore is activated.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: $_model.DescribeRegionsRequest): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Queries the list of available zones for KVCacheStore in a specified region.
   * 
   * @param request - DescribeZonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeZonesResponse
   */
  async describeZonesWithOptions(request: $_model.DescribeZonesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeZonesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeZones",
      version: "2026-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeZonesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeZonesResponse({}));
  }

  /**
   * Queries the list of available zones for KVCacheStore in a specified region.
   * 
   * @param request - DescribeZonesRequest
   * @returns DescribeZonesResponse
   */
  async describeZones(request: $_model.DescribeZonesRequest): Promise<$_model.DescribeZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeZonesWithOptions(request, runtime);
  }

  /**
   * Unmounts KVCacheInstance resources from the virtualization side in batches.
   * 
   * @remarks
   * This is an asynchronous operation. A return status of Detaching indicates that the request has been accepted. Call ListKVCacheStoreAttachInfo to query mount records. When no record corresponding to the specified KvcsId and VscId is found, the unmount operation is complete.
   * 
   * @param request - DetachKVCacheStoreRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachKVCacheStoreResponse
   */
  async detachKVCacheStoreWithOptions(request: $_model.DetachKVCacheStoreRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachKVCacheStoreResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachKVCacheStore",
      version: "2026-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachKVCacheStoreResponse>(await this.callApi(params, req, runtime), new $_model.DetachKVCacheStoreResponse({}));
  }

  /**
   * Unmounts KVCacheInstance resources from the virtualization side in batches.
   * 
   * @remarks
   * This is an asynchronous operation. A return status of Detaching indicates that the request has been accepted. Call ListKVCacheStoreAttachInfo to query mount records. When no record corresponding to the specified KvcsId and VscId is found, the unmount operation is complete.
   * 
   * @param request - DetachKVCacheStoreRequest
   * @returns DetachKVCacheStoreResponse
   */
  async detachKVCacheStore(request: $_model.DetachKVCacheStoreRequest): Promise<$_model.DetachKVCacheStoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachKVCacheStoreWithOptions(request, runtime);
  }

  /**
   * 查询 KvCacheStore 实例详情
   * 
   * @param request - GetKVCacheStoreRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetKVCacheStoreResponse
   */
  async getKVCacheStoreWithOptions(request: $_model.GetKVCacheStoreRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetKVCacheStoreResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.kvcsId)) {
      query["KvcsId"] = request.kvcsId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetKVCacheStore",
      version: "2026-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetKVCacheStoreResponse>(await this.callApi(params, req, runtime), new $_model.GetKVCacheStoreResponse({}));
  }

  /**
   * 查询 KvCacheStore 实例详情
   * 
   * @param request - GetKVCacheStoreRequest
   * @returns GetKVCacheStoreResponse
   */
  async getKVCacheStore(request: $_model.GetKVCacheStoreRequest): Promise<$_model.GetKVCacheStoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getKVCacheStoreWithOptions(request, runtime);
  }

  /**
   * Queries the mount information of KVCacheInstance resources in batches.
   * 
   * @param request - ListKVCacheStoreAttachInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListKVCacheStoreAttachInfoResponse
   */
  async listKVCacheStoreAttachInfoWithOptions(request: $_model.ListKVCacheStoreAttachInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListKVCacheStoreAttachInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.kvcsIds)) {
      query["KvcsIds"] = request.kvcsIds;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
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
      action: "ListKVCacheStoreAttachInfo",
      version: "2026-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListKVCacheStoreAttachInfoResponse>(await this.callApi(params, req, runtime), new $_model.ListKVCacheStoreAttachInfoResponse({}));
  }

  /**
   * Queries the mount information of KVCacheInstance resources in batches.
   * 
   * @param request - ListKVCacheStoreAttachInfoRequest
   * @returns ListKVCacheStoreAttachInfoResponse
   */
  async listKVCacheStoreAttachInfo(request: $_model.ListKVCacheStoreAttachInfoRequest): Promise<$_model.ListKVCacheStoreAttachInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listKVCacheStoreAttachInfoWithOptions(request, runtime);
  }

  /**
   * 查询指定 KVCacheStore 实例可用的 HpnZone 列表
   * 
   * @param request - ListKVCacheStoreAvailableHpnZonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListKVCacheStoreAvailableHpnZonesResponse
   */
  async listKVCacheStoreAvailableHpnZonesWithOptions(request: $_model.ListKVCacheStoreAvailableHpnZonesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListKVCacheStoreAvailableHpnZonesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.kvcsIds)) {
      query["KvcsIds"] = request.kvcsIds;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListKVCacheStoreAvailableHpnZones",
      version: "2026-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListKVCacheStoreAvailableHpnZonesResponse>(await this.callApi(params, req, runtime), new $_model.ListKVCacheStoreAvailableHpnZonesResponse({}));
  }

  /**
   * 查询指定 KVCacheStore 实例可用的 HpnZone 列表
   * 
   * @param request - ListKVCacheStoreAvailableHpnZonesRequest
   * @returns ListKVCacheStoreAvailableHpnZonesResponse
   */
  async listKVCacheStoreAvailableHpnZones(request: $_model.ListKVCacheStoreAvailableHpnZonesRequest): Promise<$_model.ListKVCacheStoreAvailableHpnZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listKVCacheStoreAvailableHpnZonesWithOptions(request, runtime);
  }

  /**
   * Queries the list of KVCacheInstance instances.
   * 
   * @remarks
   * Two pagination methods are supported: page number-based pagination (PageNumber + PageSize) and cursor-based pagination (NextToken + MaxResults). If both are specified, page number-based pagination takes precedence.
   * 
   * @param request - ListKVCacheStoresRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListKVCacheStoresResponse
   */
  async listKVCacheStoresWithOptions(request: $_model.ListKVCacheStoresRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListKVCacheStoresResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.kvcsIds)) {
      query["KvcsIds"] = request.kvcsIds;
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

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListKVCacheStores",
      version: "2026-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListKVCacheStoresResponse>(await this.callApi(params, req, runtime), new $_model.ListKVCacheStoresResponse({}));
  }

  /**
   * Queries the list of KVCacheInstance instances.
   * 
   * @remarks
   * Two pagination methods are supported: page number-based pagination (PageNumber + PageSize) and cursor-based pagination (NextToken + MaxResults). If both are specified, page number-based pagination takes precedence.
   * 
   * @param request - ListKVCacheStoresRequest
   * @returns ListKVCacheStoresResponse
   */
  async listKVCacheStores(request: $_model.ListKVCacheStoresRequest): Promise<$_model.ListKVCacheStoresResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listKVCacheStoresWithOptions(request, runtime);
  }

  /**
   * Modifies the attributes of a KVCacheStore.
   * 
   * @remarks
   * Supports modifying Name, Description, and Capacity. The cluster number (HpnZone) cannot be modified after creation.
   * * Modifying Capacity triggers a specification change order, and the operation returns an OrderId. Modifying only Name or Description does not generate an order.
   * 
   * @param request - UpdateKVCacheStoreRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateKVCacheStoreResponse
   */
  async updateKVCacheStoreWithOptions(request: $_model.UpdateKVCacheStoreRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateKVCacheStoreResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.capacity)) {
      query["Capacity"] = request.capacity;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.kvcsId)) {
      query["KvcsId"] = request.kvcsId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
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
      action: "UpdateKVCacheStore",
      version: "2026-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateKVCacheStoreResponse>(await this.callApi(params, req, runtime), new $_model.UpdateKVCacheStoreResponse({}));
  }

  /**
   * Modifies the attributes of a KVCacheStore.
   * 
   * @remarks
   * Supports modifying Name, Description, and Capacity. The cluster number (HpnZone) cannot be modified after creation.
   * * Modifying Capacity triggers a specification change order, and the operation returns an OrderId. Modifying only Name or Description does not generate an order.
   * 
   * @param request - UpdateKVCacheStoreRequest
   * @returns UpdateKVCacheStoreResponse
   */
  async updateKVCacheStore(request: $_model.UpdateKVCacheStoreRequest): Promise<$_model.UpdateKVCacheStoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateKVCacheStoreWithOptions(request, runtime);
  }

}
