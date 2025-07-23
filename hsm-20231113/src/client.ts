// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("hsm", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Enables or disables the audit log feature and delivers audit logs to buckets.
   * 
   * @remarks
   *   The region of the bucket must be the same as the region where the security audit feature is enabled.
   * *   If the security audit feature is enabled, do not delete Object Storage Service (OSS) buckets. If you delete OSS buckets, audit logs fail to be delivered.
   * *   Only electronic virtual security modules (EVSMs) and general virtual security modules (GVSMs) within the Chinese mainland support the security audit feature.
   * 
   * @param request - ConfigAuditLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigAuditLogResponse
   */
  async configAuditLogWithOptions(request: $_model.ConfigAuditLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigAuditLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.auditAction)) {
      query["AuditAction"] = request.auditAction;
    }

    if (!$dara.isNull(request.auditOssBucket)) {
      query["AuditOssBucket"] = request.auditOssBucket;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigAuditLog",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigAuditLogResponse>(await this.callApi(params, req, runtime), new $_model.ConfigAuditLogResponse({}));
  }

  /**
   * Enables or disables the audit log feature and delivers audit logs to buckets.
   * 
   * @remarks
   *   The region of the bucket must be the same as the region where the security audit feature is enabled.
   * *   If the security audit feature is enabled, do not delete Object Storage Service (OSS) buckets. If you delete OSS buckets, audit logs fail to be delivered.
   * *   Only electronic virtual security modules (EVSMs) and general virtual security modules (GVSMs) within the Chinese mainland support the security audit feature.
   * 
   * @param request - ConfigAuditLogRequest
   * @returns ConfigAuditLogResponse
   */
  async configAuditLog(request: $_model.ConfigAuditLogRequest): Promise<$_model.ConfigAuditLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configAuditLogWithOptions(request, runtime);
  }

  /**
   * Configures the name and description of a backup.
   * 
   * @param request - ConfigBackupRemarkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigBackupRemarkResponse
   */
  async configBackupRemarkWithOptions(request: $_model.ConfigBackupRemarkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigBackupRemarkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigBackupRemark",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigBackupRemarkResponse>(await this.callApi(params, req, runtime), new $_model.ConfigBackupRemarkResponse({}));
  }

  /**
   * Configures the name and description of a backup.
   * 
   * @param request - ConfigBackupRemarkRequest
   * @returns ConfigBackupRemarkResponse
   */
  async configBackupRemark(request: $_model.ConfigBackupRemarkRequest): Promise<$_model.ConfigBackupRemarkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configBackupRemarkWithOptions(request, runtime);
  }

  /**
   * Modifies the execution mode of a backup task.
   * 
   * @remarks
   * Only hardware security modules (HSMs) in the Chinese mainland support the operation.
   * 
   * @param request - ConfigBackupTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigBackupTaskResponse
   */
  async configBackupTaskWithOptions(request: $_model.ConfigBackupTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigBackupTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupHourInDay)) {
      query["BackupHourInDay"] = request.backupHourInDay;
    }

    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!$dara.isNull(request.backupPeriod)) {
      query["BackupPeriod"] = request.backupPeriod;
    }

    if (!$dara.isNull(request.manual2PeriodicList)) {
      query["Manual2PeriodicList"] = request.manual2PeriodicList;
    }

    if (!$dara.isNull(request.periodic2ManualList)) {
      query["Periodic2ManualList"] = request.periodic2ManualList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigBackupTask",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigBackupTaskResponse>(await this.callApi(params, req, runtime), new $_model.ConfigBackupTaskResponse({}));
  }

  /**
   * Modifies the execution mode of a backup task.
   * 
   * @remarks
   * Only hardware security modules (HSMs) in the Chinese mainland support the operation.
   * 
   * @param request - ConfigBackupTaskRequest
   * @returns ConfigBackupTaskResponse
   */
  async configBackupTask(request: $_model.ConfigBackupTaskRequest): Promise<$_model.ConfigBackupTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configBackupTaskWithOptions(request, runtime);
  }

  /**
   * Configures a certificate for a cluster of hardware security modules (HSMs) outside the Chinese mainland.
   * 
   * @remarks
   * For more information about how to create a self-signed certificate and a cluster certificate on an Elastic Compute Service (ECS) instance, see [Create a NIST FIPS-validated GVSM cluster](https://help.aliyun.com/document_detail/293585.html).
   * 
   * @param request - ConfigClusterCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigClusterCertificateResponse
   */
  async configClusterCertificateWithOptions(request: $_model.ConfigClusterCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigClusterCertificateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterCertificate)) {
      body["ClusterCertificate"] = request.clusterCertificate;
    }

    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.issuerCertificate)) {
      body["IssuerCertificate"] = request.issuerCertificate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigClusterCertificate",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigClusterCertificateResponse>(await this.callApi(params, req, runtime), new $_model.ConfigClusterCertificateResponse({}));
  }

  /**
   * Configures a certificate for a cluster of hardware security modules (HSMs) outside the Chinese mainland.
   * 
   * @remarks
   * For more information about how to create a self-signed certificate and a cluster certificate on an Elastic Compute Service (ECS) instance, see [Create a NIST FIPS-validated GVSM cluster](https://help.aliyun.com/document_detail/293585.html).
   * 
   * @param request - ConfigClusterCertificateRequest
   * @returns ConfigClusterCertificateResponse
   */
  async configClusterCertificate(request: $_model.ConfigClusterCertificateRequest): Promise<$_model.ConfigClusterCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configClusterCertificateWithOptions(request, runtime);
  }

  /**
   * Changes the name of a cluster.
   * 
   * @param request - ConfigClusterNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigClusterNameResponse
   */
  async configClusterNameWithOptions(request: $_model.ConfigClusterNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigClusterNameResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.clusterName)) {
      body["ClusterName"] = request.clusterName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigClusterName",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigClusterNameResponse>(await this.callApi(params, req, runtime), new $_model.ConfigClusterNameResponse({}));
  }

  /**
   * Changes the name of a cluster.
   * 
   * @param request - ConfigClusterNameRequest
   * @returns ConfigClusterNameResponse
   */
  async configClusterName(request: $_model.ConfigClusterNameRequest): Promise<$_model.ConfigClusterNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configClusterNameWithOptions(request, runtime);
  }

  /**
   * Modifies a list of vSwitches that are associated with a hardware security module (HSM) cluster.
   * 
   * @remarks
   * You can call the operation to configure all vSwitches that are associated with a HSM cluster. You can only add new vSwitches. You cannot delete vSwitches.
   * 
   * @param tmpReq - ConfigClusterSubnetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigClusterSubnetResponse
   */
  async configClusterSubnetWithOptions(tmpReq: $_model.ConfigClusterSubnetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigClusterSubnetResponse> {
    tmpReq.validate();
    let request = new $_model.ConfigClusterSubnetShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.vSwitchIds)) {
      request.vSwitchIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.vSwitchIds, "VSwitchIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.vSwitchIdsShrink)) {
      body["VSwitchIds"] = request.vSwitchIdsShrink;
    }

    if (!$dara.isNull(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigClusterSubnet",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigClusterSubnetResponse>(await this.callApi(params, req, runtime), new $_model.ConfigClusterSubnetResponse({}));
  }

  /**
   * Modifies a list of vSwitches that are associated with a hardware security module (HSM) cluster.
   * 
   * @remarks
   * You can call the operation to configure all vSwitches that are associated with a HSM cluster. You can only add new vSwitches. You cannot delete vSwitches.
   * 
   * @param request - ConfigClusterSubnetRequest
   * @returns ConfigClusterSubnetResponse
   */
  async configClusterSubnet(request: $_model.ConfigClusterSubnetRequest): Promise<$_model.ConfigClusterSubnetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configClusterSubnetWithOptions(request, runtime);
  }

  /**
   * Modifies the IP address whitelist of a cluster.
   * 
   * @remarks
   * The IP address whitelist of a cluster has a higher priority than the IP address whitelist of a hardware security module (HSM) in the cluster. In cluster mode, we recommend that you create an IP address whitelist for your cluster. You do not need to create an IP address for the HSM in the cluster.
   * 
   * @param request - ConfigClusterWhitelistRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigClusterWhitelistResponse
   */
  async configClusterWhitelistWithOptions(request: $_model.ConfigClusterWhitelistRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigClusterWhitelistResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.whitelist)) {
      body["Whitelist"] = request.whitelist;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigClusterWhitelist",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigClusterWhitelistResponse>(await this.callApi(params, req, runtime), new $_model.ConfigClusterWhitelistResponse({}));
  }

  /**
   * Modifies the IP address whitelist of a cluster.
   * 
   * @remarks
   * The IP address whitelist of a cluster has a higher priority than the IP address whitelist of a hardware security module (HSM) in the cluster. In cluster mode, we recommend that you create an IP address whitelist for your cluster. You do not need to create an IP address for the HSM in the cluster.
   * 
   * @param request - ConfigClusterWhitelistRequest
   * @returns ConfigClusterWhitelistResponse
   */
  async configClusterWhitelist(request: $_model.ConfigClusterWhitelistRequest): Promise<$_model.ConfigClusterWhitelistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configClusterWhitelistWithOptions(request, runtime);
  }

  /**
   * Modifies the description of an image.
   * 
   * @param request - ConfigImageRemarkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigImageRemarkResponse
   */
  async configImageRemarkWithOptions(request: $_model.ConfigImageRemarkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigImageRemarkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigImageRemark",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigImageRemarkResponse>(await this.callApi(params, req, runtime), new $_model.ConfigImageRemarkResponse({}));
  }

  /**
   * Modifies the description of an image.
   * 
   * @param request - ConfigImageRemarkRequest
   * @returns ConfigImageRemarkResponse
   */
  async configImageRemark(request: $_model.ConfigImageRemarkRequest): Promise<$_model.ConfigImageRemarkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configImageRemarkWithOptions(request, runtime);
  }

  /**
   * Modifies the virtual private cloud (VPC) endpoint of a hardware security module (HSM).
   * 
   * @remarks
   * After you add an HSM to a cluster, you cannot modify the VPC endpoint of the HSM.
   * 
   * @param request - ConfigInstanceIpAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigInstanceIpAddressResponse
   */
  async configInstanceIpAddressWithOptions(request: $_model.ConfigInstanceIpAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigInstanceIpAddressResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ip)) {
      body["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      body["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigInstanceIpAddress",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigInstanceIpAddressResponse>(await this.callApi(params, req, runtime), new $_model.ConfigInstanceIpAddressResponse({}));
  }

  /**
   * Modifies the virtual private cloud (VPC) endpoint of a hardware security module (HSM).
   * 
   * @remarks
   * After you add an HSM to a cluster, you cannot modify the VPC endpoint of the HSM.
   * 
   * @param request - ConfigInstanceIpAddressRequest
   * @returns ConfigInstanceIpAddressResponse
   */
  async configInstanceIpAddress(request: $_model.ConfigInstanceIpAddressRequest): Promise<$_model.ConfigInstanceIpAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configInstanceIpAddressWithOptions(request, runtime);
  }

  /**
   * Modifies the description of a hardware security module (HSM).
   * 
   * @param request - ConfigInstanceRemarkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigInstanceRemarkResponse
   */
  async configInstanceRemarkWithOptions(request: $_model.ConfigInstanceRemarkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigInstanceRemarkResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.remark)) {
      body["Remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigInstanceRemark",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigInstanceRemarkResponse>(await this.callApi(params, req, runtime), new $_model.ConfigInstanceRemarkResponse({}));
  }

  /**
   * Modifies the description of a hardware security module (HSM).
   * 
   * @param request - ConfigInstanceRemarkRequest
   * @returns ConfigInstanceRemarkResponse
   */
  async configInstanceRemark(request: $_model.ConfigInstanceRemarkRequest): Promise<$_model.ConfigInstanceRemarkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configInstanceRemarkWithOptions(request, runtime);
  }

  /**
   * Modifies the IP address whitelist of a hardware security module (HSM).
   * 
   * @remarks
   * You can configure the IP address whitelist for HSMs that are not added to a cluster and are in the ACTIVE state.
   * 
   * @param request - ConfigInstanceWhitelistRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigInstanceWhitelistResponse
   */
  async configInstanceWhitelistWithOptions(request: $_model.ConfigInstanceWhitelistRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigInstanceWhitelistResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.whitelist)) {
      body["Whitelist"] = request.whitelist;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigInstanceWhitelist",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigInstanceWhitelistResponse>(await this.callApi(params, req, runtime), new $_model.ConfigInstanceWhitelistResponse({}));
  }

  /**
   * Modifies the IP address whitelist of a hardware security module (HSM).
   * 
   * @remarks
   * You can configure the IP address whitelist for HSMs that are not added to a cluster and are in the ACTIVE state.
   * 
   * @param request - ConfigInstanceWhitelistRequest
   * @returns ConfigInstanceWhitelistResponse
   */
  async configInstanceWhitelist(request: $_model.ConfigInstanceWhitelistRequest): Promise<$_model.ConfigInstanceWhitelistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configInstanceWhitelistWithOptions(request, runtime);
  }

  /**
   * Copies an image to another region.
   * 
   * @remarks
   * This operation requires that the destination region does not have the same image. This operation is available only for hardware security modules (HSMs) outside the Chinese mainland.
   * 
   * @param request - CopyImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CopyImageResponse
   */
  async copyImageWithOptions(request: $_model.CopyImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CopyImageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageUid)) {
      body["ImageUid"] = request.imageUid;
    }

    if (!$dara.isNull(request.targetRegionId)) {
      body["TargetRegionId"] = request.targetRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CopyImage",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CopyImageResponse>(await this.callApi(params, req, runtime), new $_model.CopyImageResponse({}));
  }

  /**
   * Copies an image to another region.
   * 
   * @remarks
   * This operation requires that the destination region does not have the same image. This operation is available only for hardware security modules (HSMs) outside the Chinese mainland.
   * 
   * @param request - CopyImageRequest
   * @returns CopyImageResponse
   */
  async copyImage(request: $_model.CopyImageRequest): Promise<$_model.CopyImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.copyImageWithOptions(request, runtime);
  }

  /**
   * Creates a cluster by specifying a hardware security module (HSM) as the master HSM.
   * 
   * @remarks
   * The master HSM that you specify to create a cluster must be in the ACTIVE state.
   * 
   * @param request - CreateClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateClusterResponse
   */
  async createClusterWithOptions(request: $_model.CreateClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateClusterResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterName)) {
      body["ClusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.masterInstanceId)) {
      body["MasterInstanceId"] = request.masterInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCluster",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateClusterResponse>(await this.callApi(params, req, runtime), new $_model.CreateClusterResponse({}));
  }

  /**
   * Creates a cluster by specifying a hardware security module (HSM) as the master HSM.
   * 
   * @remarks
   * The master HSM that you specify to create a cluster must be in the ACTIVE state.
   * 
   * @param request - CreateClusterRequest
   * @returns CreateClusterResponse
   */
  async createCluster(request: $_model.CreateClusterRequest): Promise<$_model.CreateClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createClusterWithOptions(request, runtime);
  }

  /**
   * Deletes a hardware security module (HSM) cluster.
   * 
   * @remarks
   * You can delete an HSM only if the cluster does not contain HSMs.
   * 
   * @param request - DeleteClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteClusterResponse
   */
  async deleteClusterWithOptions(request: $_model.DeleteClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteClusterResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCluster",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteClusterResponse>(await this.callApi(params, req, runtime), new $_model.DeleteClusterResponse({}));
  }

  /**
   * Deletes a hardware security module (HSM) cluster.
   * 
   * @remarks
   * You can delete an HSM only if the cluster does not contain HSMs.
   * 
   * @param request - DeleteClusterRequest
   * @returns DeleteClusterResponse
   */
  async deleteCluster(request: $_model.DeleteClusterRequest): Promise<$_model.DeleteClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteClusterWithOptions(request, runtime);
  }

  /**
   * Queries the regions that are supported by Cloud Hardware Security Module.
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2023-11-13",
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
   * Queries the regions that are supported by Cloud Hardware Security Module.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: $_model.DescribeRegionsRequest): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Binds a backup to a specified hardware security module (HSM).
   * 
   * @remarks
   * This operation is available only for backups in the Chinese mainland.
   * 
   * @param request - EnableBackupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableBackupResponse
   */
  async enableBackupWithOptions(request: $_model.EnableBackupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableBackupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableBackup",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableBackupResponse>(await this.callApi(params, req, runtime), new $_model.EnableBackupResponse({}));
  }

  /**
   * Binds a backup to a specified hardware security module (HSM).
   * 
   * @remarks
   * This operation is available only for backups in the Chinese mainland.
   * 
   * @param request - EnableBackupRequest
   * @returns EnableBackupResponse
   */
  async enableBackup(request: $_model.EnableBackupRequest): Promise<$_model.EnableBackupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableBackupWithOptions(request, runtime);
  }

  /**
   * Exports the image for a specified hardware security module (HSM).
   * 
   * @param request - ExportImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportImageResponse
   */
  async exportImageWithOptions(request: $_model.ExportImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExportImageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportImage",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportImageResponse>(await this.callApi(params, req, runtime), new $_model.ExportImageResponse({}));
  }

  /**
   * Exports the image for a specified hardware security module (HSM).
   * 
   * @param request - ExportImageRequest
   * @returns ExportImageResponse
   */
  async exportImage(request: $_model.ExportImageRequest): Promise<$_model.ExportImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportImageWithOptions(request, runtime);
  }

  /**
   * Queries the status of the audit log feature in the current region.
   * 
   * @param request - GetAuditLogStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAuditLogStatusResponse
   */
  async getAuditLogStatusWithOptions(request: $_model.GetAuditLogStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAuditLogStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.getOssBucket)) {
      query["GetOssBucket"] = request.getOssBucket;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAuditLogStatus",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAuditLogStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetAuditLogStatusResponse({}));
  }

  /**
   * Queries the status of the audit log feature in the current region.
   * 
   * @param request - GetAuditLogStatusRequest
   * @returns GetAuditLogStatusResponse
   */
  async getAuditLogStatus(request: $_model.GetAuditLogStatusRequest): Promise<$_model.GetAuditLogStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAuditLogStatusWithOptions(request, runtime);
  }

  /**
   * Queries the information about a specified backup.
   * 
   * @param request - GetBackupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBackupResponse
   */
  async getBackupWithOptions(request: $_model.GetBackupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetBackupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBackup",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBackupResponse>(await this.callApi(params, req, runtime), new $_model.GetBackupResponse({}));
  }

  /**
   * Queries the information about a specified backup.
   * 
   * @param request - GetBackupRequest
   * @returns GetBackupResponse
   */
  async getBackup(request: $_model.GetBackupRequest): Promise<$_model.GetBackupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBackupWithOptions(request, runtime);
  }

  /**
   * Queries information about a specified cluster.
   * 
   * @param request - GetClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetClusterResponse
   */
  async getClusterWithOptions(request: $_model.GetClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetClusterResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCluster",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetClusterResponse>(await this.callApi(params, req, runtime), new $_model.GetClusterResponse({}));
  }

  /**
   * Queries information about a specified cluster.
   * 
   * @param request - GetClusterRequest
   * @returns GetClusterResponse
   */
  async getCluster(request: $_model.GetClusterRequest): Promise<$_model.GetClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getClusterWithOptions(request, runtime);
  }

  /**
   * Queries information about an image.
   * 
   * @param request - GetImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetImageResponse
   */
  async getImageWithOptions(request: $_model.GetImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetImageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetImage",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetImageResponse>(await this.callApi(params, req, runtime), new $_model.GetImageResponse({}));
  }

  /**
   * Queries information about an image.
   * 
   * @param request - GetImageRequest
   * @returns GetImageResponse
   */
  async getImage(request: $_model.GetImageRequest): Promise<$_model.GetImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getImageWithOptions(request, runtime);
  }

  /**
   * Queries information about a specified hardware security module (HSM).
   * 
   * @param request - GetInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceResponse
   */
  async getInstanceWithOptions(request: $_model.GetInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstance",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceResponse({}));
  }

  /**
   * Queries information about a specified hardware security module (HSM).
   * 
   * @param request - GetInstanceRequest
   * @returns GetInstanceResponse
   */
  async getInstance(request: $_model.GetInstanceRequest): Promise<$_model.GetInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the details of an asynchronous task.
   * 
   * @param request - GetJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJobResponse
   */
  async getJobWithOptions(request: $_model.GetJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetJob",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetJobResponse>(await this.callApi(params, req, runtime), new $_model.GetJobResponse({}));
  }

  /**
   * Queries the details of an asynchronous task.
   * 
   * @param request - GetJobRequest
   * @returns GetJobResponse
   */
  async getJob(request: $_model.GetJobRequest): Promise<$_model.GetJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getJobWithOptions(request, runtime);
  }

  /**
   * Authorizes Cloud Hardware Security Module to deliver logs.
   * 
   * @param request - InitializeAuditLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InitializeAuditLogResponse
   */
  async initializeAuditLogWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.InitializeAuditLogResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "InitializeAuditLog",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InitializeAuditLogResponse>(await this.callApi(params, req, runtime), new $_model.InitializeAuditLogResponse({}));
  }

  /**
   * Authorizes Cloud Hardware Security Module to deliver logs.
   * @returns InitializeAuditLogResponse
   */
  async initializeAuditLog(): Promise<$_model.InitializeAuditLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.initializeAuditLogWithOptions(runtime);
  }

  /**
   * Initializes a cluster.
   * 
   * @remarks
   *   The cluster is not initialized, but the master hardware security module (HSM) of the cluster is initialized.
   * *   Two or more vSwitches are configured for the cluster.
   * 
   * @param request - InitializeClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InitializeClusterResponse
   */
  async initializeClusterWithOptions(request: $_model.InitializeClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InitializeClusterResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "InitializeCluster",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InitializeClusterResponse>(await this.callApi(params, req, runtime), new $_model.InitializeClusterResponse({}));
  }

  /**
   * Initializes a cluster.
   * 
   * @remarks
   *   The cluster is not initialized, but the master hardware security module (HSM) of the cluster is initialized.
   * *   Two or more vSwitches are configured for the cluster.
   * 
   * @param request - InitializeClusterRequest
   * @returns InitializeClusterResponse
   */
  async initializeCluster(request: $_model.InitializeClusterRequest): Promise<$_model.InitializeClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.initializeClusterWithOptions(request, runtime);
  }

  /**
   * Adds a hardware security module (HSM) to the current cluster.
   * 
   * @remarks
   *   You can add the HSM to only the cluster that is in the INITIALIZED state.
   * *   The HSM that you want to add to the cluster is enabled or disabled and is not initialized.
   * 
   * @param request - JoinClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns JoinClusterResponse
   */
  async joinClusterWithOptions(request: $_model.JoinClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.JoinClusterResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "JoinCluster",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.JoinClusterResponse>(await this.callApi(params, req, runtime), new $_model.JoinClusterResponse({}));
  }

  /**
   * Adds a hardware security module (HSM) to the current cluster.
   * 
   * @remarks
   *   You can add the HSM to only the cluster that is in the INITIALIZED state.
   * *   The HSM that you want to add to the cluster is enabled or disabled and is not initialized.
   * 
   * @param request - JoinClusterRequest
   * @returns JoinClusterResponse
   */
  async joinCluster(request: $_model.JoinClusterRequest): Promise<$_model.JoinClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.joinClusterWithOptions(request, runtime);
  }

  /**
   * Removes a hardware security module (HSM) from the current cluster.
   * 
   * @remarks
   *   If non-master HSMs exist in a cluster, the master HSM cannot be removed from the cluster.
   * *   After the master HSM is removed from a cluster, the cluster enters the TO_DELETE state and cannot be restored to the available state. Proceed with caution.
   * 
   * @param request - LeaveClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LeaveClusterResponse
   */
  async leaveClusterWithOptions(request: $_model.LeaveClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.LeaveClusterResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "LeaveCluster",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.LeaveClusterResponse>(await this.callApi(params, req, runtime), new $_model.LeaveClusterResponse({}));
  }

  /**
   * Removes a hardware security module (HSM) from the current cluster.
   * 
   * @remarks
   *   If non-master HSMs exist in a cluster, the master HSM cannot be removed from the cluster.
   * *   After the master HSM is removed from a cluster, the cluster enters the TO_DELETE state and cannot be restored to the available state. Proceed with caution.
   * 
   * @param request - LeaveClusterRequest
   * @returns LeaveClusterResponse
   */
  async leaveCluster(request: $_model.LeaveClusterRequest): Promise<$_model.LeaveClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.leaveClusterWithOptions(request, runtime);
  }

  /**
   * Queries the backups that meet the query conditions.
   * 
   * @param request - ListBackupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBackupsResponse
   */
  async listBackupsWithOptions(request: $_model.ListBackupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListBackupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
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
      action: "ListBackups",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListBackupsResponse>(await this.callApi(params, req, runtime), new $_model.ListBackupsResponse({}));
  }

  /**
   * Queries the backups that meet the query conditions.
   * 
   * @param request - ListBackupsRequest
   * @returns ListBackupsResponse
   */
  async listBackups(request: $_model.ListBackupsRequest): Promise<$_model.ListBackupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listBackupsWithOptions(request, runtime);
  }

  /**
   * Queries the clusters that meet the query conditions.
   * 
   * @param request - ListClustersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClustersResponse
   */
  async listClustersWithOptions(request: $_model.ListClustersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListClustersResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListClusters",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListClustersResponse>(await this.callApi(params, req, runtime), new $_model.ListClustersResponse({}));
  }

  /**
   * Queries the clusters that meet the query conditions.
   * 
   * @param request - ListClustersRequest
   * @returns ListClustersResponse
   */
  async listClusters(request: $_model.ListClustersRequest): Promise<$_model.ListClustersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listClustersWithOptions(request, runtime);
  }

  /**
   * Queries the images that meet the specified conditions.
   * 
   * @param request - ListImagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListImagesResponse
   */
  async listImagesWithOptions(request: $_model.ListImagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListImagesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.mode)) {
      query["Mode"] = request.mode;
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
      action: "ListImages",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListImagesResponse>(await this.callApi(params, req, runtime), new $_model.ListImagesResponse({}));
  }

  /**
   * Queries the images that meet the specified conditions.
   * 
   * @param request - ListImagesRequest
   * @returns ListImagesResponse
   */
  async listImages(request: $_model.ListImagesRequest): Promise<$_model.ListImagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listImagesWithOptions(request, runtime);
  }

  /**
   * Queries the hardware security modules (HSMs) that meet the query conditions.
   * 
   * @param request - ListInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancesResponse
   */
  async listInstancesWithOptions(request: $_model.ListInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstancesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.tenantIsolationType)) {
      body["TenantIsolationType"] = request.tenantIsolationType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstances",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListInstancesResponse({}));
  }

  /**
   * Queries the hardware security modules (HSMs) that meet the query conditions.
   * 
   * @param request - ListInstancesRequest
   * @returns ListInstancesResponse
   */
  async listInstances(request: $_model.ListInstancesRequest): Promise<$_model.ListInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstancesWithOptions(request, runtime);
  }

  /**
   * Moves a resource to a new resource group.
   * 
   * @param request - MoveResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveResourceGroupResponse
   */
  async moveResourceGroupWithOptions(request: $_model.MoveResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MoveResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
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
      action: "MoveResourceGroup",
      version: "2023-11-13",
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
   * Moves a resource to a new resource group.
   * 
   * @param request - MoveResourceGroupRequest
   * @returns MoveResourceGroupResponse
   */
  async moveResourceGroup(request: $_model.MoveResourceGroupRequest): Promise<$_model.MoveResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.moveResourceGroupWithOptions(request, runtime);
  }

  /**
   * Disables a hardware security module (HSM).
   * 
   * @remarks
   * After you disable an HSM, the relevant service operations fail. Proceed with caution.
   * 
   * @param request - PauseInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PauseInstanceResponse
   */
  async pauseInstanceWithOptions(request: $_model.PauseInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PauseInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PauseInstance",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PauseInstanceResponse>(await this.callApi(params, req, runtime), new $_model.PauseInstanceResponse({}));
  }

  /**
   * Disables a hardware security module (HSM).
   * 
   * @remarks
   * After you disable an HSM, the relevant service operations fail. Proceed with caution.
   * 
   * @param request - PauseInstanceRequest
   * @returns PauseInstanceResponse
   */
  async pauseInstance(request: $_model.PauseInstanceRequest): Promise<$_model.PauseInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pauseInstanceWithOptions(request, runtime);
  }

  /**
   * Initializes a hardware security module (HSM).
   * 
   * @remarks
   * This operation is supported only for general virtual security modules (GVSMs) in the Chinese mainland.
   * 
   * @param request - QuickInitInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuickInitInstanceResponse
   */
  async quickInitInstanceWithOptions(request: $_model.QuickInitInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuickInitInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuickInitInstance",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuickInitInstanceResponse>(await this.callApi(params, req, runtime), new $_model.QuickInitInstanceResponse({}));
  }

  /**
   * Initializes a hardware security module (HSM).
   * 
   * @remarks
   * This operation is supported only for general virtual security modules (GVSMs) in the Chinese mainland.
   * 
   * @param request - QuickInitInstanceRequest
   * @returns QuickInitInstanceResponse
   */
  async quickInitInstance(request: $_model.QuickInitInstanceRequest): Promise<$_model.QuickInitInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.quickInitInstanceWithOptions(request, runtime);
  }

  /**
   * Disassociates a backup from a hardware security module (HSM).
   * 
   * @remarks
   * This operation is available only for HSMs in the Chinese mainland.
   * 
   * @param request - ResetBackupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetBackupResponse
   */
  async resetBackupWithOptions(request: $_model.ResetBackupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetBackupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetBackup",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetBackupResponse>(await this.callApi(params, req, runtime), new $_model.ResetBackupResponse({}));
  }

  /**
   * Disassociates a backup from a hardware security module (HSM).
   * 
   * @remarks
   * This operation is available only for HSMs in the Chinese mainland.
   * 
   * @param request - ResetBackupRequest
   * @returns ResetBackupResponse
   */
  async resetBackup(request: $_model.ResetBackupRequest): Promise<$_model.ResetBackupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetBackupWithOptions(request, runtime);
  }

  /**
   * Resets a hardware security module (HSM).
   * 
   * @remarks
   * After an HSM is reset, all related data is deleted and cannot be recovered. Proceed with caution.
   * 
   * @param request - ResetInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetInstanceResponse
   */
  async resetInstanceWithOptions(request: $_model.ResetInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetInstance",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ResetInstanceResponse({}));
  }

  /**
   * Resets a hardware security module (HSM).
   * 
   * @remarks
   * After an HSM is reset, all related data is deleted and cannot be recovered. Proceed with caution.
   * 
   * @param request - ResetInstanceRequest
   * @returns ResetInstanceResponse
   */
  async resetInstance(request: $_model.ResetInstanceRequest): Promise<$_model.ResetInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetInstanceWithOptions(request, runtime);
  }

  /**
   * Restores a hardware security module (HSM) by using an image.
   * 
   * @remarks
   * You can use images to restore only HSMs that are paused or disabled.
   * 
   * @param request - RestoreInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestoreInstanceResponse
   */
  async restoreInstanceWithOptions(request: $_model.RestoreInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestoreInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageId)) {
      body["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestoreInstance",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RestoreInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RestoreInstanceResponse({}));
  }

  /**
   * Restores a hardware security module (HSM) by using an image.
   * 
   * @remarks
   * You can use images to restore only HSMs that are paused or disabled.
   * 
   * @param request - RestoreInstanceRequest
   * @returns RestoreInstanceResponse
   */
  async restoreInstance(request: $_model.RestoreInstanceRequest): Promise<$_model.RestoreInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.restoreInstanceWithOptions(request, runtime);
  }

  /**
   * Resumes a disabled hardware security module (HSM).
   * 
   * @param request - ResumeInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResumeInstanceResponse
   */
  async resumeInstanceWithOptions(request: $_model.ResumeInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResumeInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResumeInstance",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResumeInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ResumeInstanceResponse({}));
  }

  /**
   * Resumes a disabled hardware security module (HSM).
   * 
   * @param request - ResumeInstanceRequest
   * @returns ResumeInstanceResponse
   */
  async resumeInstance(request: $_model.ResumeInstanceRequest): Promise<$_model.ResumeInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resumeInstanceWithOptions(request, runtime);
  }

  /**
   * Promotes a slave hardware security module (HSM) to the master HSM within the cluster. Clusters that are manually synchronized in the Chinese Mainland do not support this operation.
   * 
   * @param request - SwitchClusterMasterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SwitchClusterMasterResponse
   */
  async switchClusterMasterWithOptions(request: $_model.SwitchClusterMasterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SwitchClusterMasterResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SwitchClusterMaster",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SwitchClusterMasterResponse>(await this.callApi(params, req, runtime), new $_model.SwitchClusterMasterResponse({}));
  }

  /**
   * Promotes a slave hardware security module (HSM) to the master HSM within the cluster. Clusters that are manually synchronized in the Chinese Mainland do not support this operation.
   * 
   * @param request - SwitchClusterMasterRequest
   * @returns SwitchClusterMasterResponse
   */
  async switchClusterMaster(request: $_model.SwitchClusterMasterRequest): Promise<$_model.SwitchClusterMasterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.switchClusterMasterWithOptions(request, runtime);
  }

  /**
   * Synchronizes the data of hardware security modules (HSMs) in a cluster.
   * 
   * @remarks
   *   This operation is used for manually synchronizing data within clusters located in the Chinese Mainland. For clusters outside the Chinese Mainland, automatic data synchronization is supported, and this operation is unnecessary. If you attempt to use this operation, a 400 error code will be returned.
   * *   The data synchronization takes approximately 5 minutes. To avoid service interruptions, we recommend performing this operation during off-peak hours.
   * 
   * @param request - SyncClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SyncClusterResponse
   */
  async syncClusterWithOptions(request: $_model.SyncClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SyncClusterResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SyncCluster",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SyncClusterResponse>(await this.callApi(params, req, runtime), new $_model.SyncClusterResponse({}));
  }

  /**
   * Synchronizes the data of hardware security modules (HSMs) in a cluster.
   * 
   * @remarks
   *   This operation is used for manually synchronizing data within clusters located in the Chinese Mainland. For clusters outside the Chinese Mainland, automatic data synchronization is supported, and this operation is unnecessary. If you attempt to use this operation, a 400 error code will be returned.
   * *   The data synchronization takes approximately 5 minutes. To avoid service interruptions, we recommend performing this operation during off-peak hours.
   * 
   * @param request - SyncClusterRequest
   * @returns SyncClusterResponse
   */
  async syncCluster(request: $_model.SyncClusterRequest): Promise<$_model.SyncClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.syncClusterWithOptions(request, runtime);
  }

}
