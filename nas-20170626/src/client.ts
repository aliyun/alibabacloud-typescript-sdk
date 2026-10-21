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
      'cn-hangzhou-finance': "nas.cn-hangzhou-dg-a01.aliyuncs.com",
      'ap-northeast-2-pop': "nas.aliyuncs.com",
      'ap-southeast-2': "nas.aliyuncs.com",
      'cn-beijing-finance-pop': "nas.aliyuncs.com",
      'cn-beijing-gov-1': "nas.aliyuncs.com",
      'cn-beijing-nu16-b01': "nas.aliyuncs.com",
      'cn-edge-1': "nas.aliyuncs.com",
      'cn-fujian': "nas.aliyuncs.com",
      'cn-haidian-cm12-c01': "nas.aliyuncs.com",
      'cn-hangzhou-bj-b01': "nas.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "nas.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "nas.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "nas.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "nas.aliyuncs.com",
      'cn-hangzhou-test-306': "nas.aliyuncs.com",
      'cn-hongkong-finance-pop': "nas.aliyuncs.com",
      'cn-qingdao-nebula': "nas.aliyuncs.com",
      'cn-shanghai-et15-b01': "nas.aliyuncs.com",
      'cn-shanghai-et2-b01': "nas.aliyuncs.com",
      'cn-shanghai-inner': "nas.aliyuncs.com",
      'cn-shanghai-internal-test-1': "nas.aliyuncs.com",
      'cn-shenzhen-inner': "nas.aliyuncs.com",
      'cn-shenzhen-st4-d01': "nas.aliyuncs.com",
      'cn-shenzhen-su18-b01': "nas.aliyuncs.com",
      'cn-wuhan': "nas.aliyuncs.com",
      'cn-yushanfang': "nas.aliyuncs.com",
      'cn-zhangbei': "nas.aliyuncs.com",
      'cn-zhangbei-na61-b01': "nas.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "nas.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "nas.aliyuncs.com",
      'eu-west-1-oxs': "nas.aliyuncs.com",
      'rus-west-1-pop': "nas.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("nas", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Adds a client to the blacklist in Cloud Parallel File Storage (CPFS) to evict its write requests, which serves as an I/O fencing mechanism.
   * 
   * @remarks
   * This operation supports only CPFS parallel file systems.
   * 
   * @deprecated OpenAPI AddClientToBlackList is deprecated
   * 
   * @param request - AddClientToBlackListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddClientToBlackListResponse
   */
  async addClientToBlackListWithOptions(request: $_model.AddClientToBlackListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddClientToBlackListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientIP)) {
      query["ClientIP"] = request.clientIP;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddClientToBlackList",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddClientToBlackListResponse>(await this.callApi(params, req, runtime), new $_model.AddClientToBlackListResponse({}));
  }

  /**
   * Adds a client to the blacklist in Cloud Parallel File Storage (CPFS) to evict its write requests, which serves as an I/O fencing mechanism.
   * 
   * @remarks
   * This operation supports only CPFS parallel file systems.
   * 
   * @deprecated OpenAPI AddClientToBlackList is deprecated
   * 
   * @param request - AddClientToBlackListRequest
   * @returns AddClientToBlackListResponse
   */
  // Deprecated
  async addClientToBlackList(request: $_model.AddClientToBlackListRequest): Promise<$_model.AddClientToBlackListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addClientToBlackListWithOptions(request, runtime);
  }

  /**
   * Applies an automatic snapshot policy to one or more file systems.
   * 
   * @remarks
   * *Before you begin**
   * Only Advanced Extreme NAS file systems support this operation. Before you call this operation, complete the following preparations:
   * - An Advanced Extreme NAS file system is created. When you call the [CreateFileSystem](https://www.alibabacloud.com/help/en/nas/developer-reference/api-nas-2017-06-26-createfilesystem) operation to create a file system, set the following parameters:
   *   - FileSystemType: extreme
   *   - StorageType: advance
   * - An automatic snapshot policy is created. For more information, see [CreateAutoSnapshotPolicy](https://www.alibabacloud.com/help/en/nas/developer-reference/api-nas-2017-06-26-createautosnapshotpolicy).
   * - The AliyunNASManageENIRole authorization is completed in the console. Before creating an Extreme NAS file system, associate the AliyunNASManageENIRole service-linked role with File Storage NAS to allow File Storage NAS to manage network interface controllers (NICs). For more information, see [Manage the service-linked role for File Storage NAS](https://help.aliyun.com/document_detail/208530.html).
   * **Operation description**
   * <props="china">
   * - This feature is in free public preview. During the public preview, the [File Storage NAS Service-Level Agreement (SLA)](https://terms.aliyun.com/legal-agreement/terms/suit_bu1_ali_cloud/suit_bu1_ali_cloud201803061139_99860.html?spm=a2c4g.11186623.0.0.5c895ff2YPLrwe) is not guaranteed.
   * - Each file system can have only one automatic snapshot policy applied.
   * - An automatic snapshot policy can be applied to multiple file systems.
   * - If the target file system already has an automatic snapshot policy applied, calling the ApplyAutoSnapshotPolicy operation replaces the current automatic snapshot policy of the file system.
   * <props="intl">
   * - This feature is in free public preview.
   * - Each file system can have only one automatic snapshot policy applied.
   * - An automatic snapshot policy can be applied to multiple file systems.
   * - If the target file system already has an automatic snapshot policy applied, calling the ApplyAutoSnapshotPolicy operation replaces the current automatic snapshot policy of the file system.
   * 
   * @param request - ApplyAutoSnapshotPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyAutoSnapshotPolicyResponse
   */
  async applyAutoSnapshotPolicyWithOptions(request: $_model.ApplyAutoSnapshotPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ApplyAutoSnapshotPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoSnapshotPolicyId)) {
      query["AutoSnapshotPolicyId"] = request.autoSnapshotPolicyId;
    }

    if (!$dara.isNull(request.fileSystemIds)) {
      query["FileSystemIds"] = request.fileSystemIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyAutoSnapshotPolicy",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApplyAutoSnapshotPolicyResponse>(await this.callApi(params, req, runtime), new $_model.ApplyAutoSnapshotPolicyResponse({}));
  }

  /**
   * Applies an automatic snapshot policy to one or more file systems.
   * 
   * @remarks
   * *Before you begin**
   * Only Advanced Extreme NAS file systems support this operation. Before you call this operation, complete the following preparations:
   * - An Advanced Extreme NAS file system is created. When you call the [CreateFileSystem](https://www.alibabacloud.com/help/en/nas/developer-reference/api-nas-2017-06-26-createfilesystem) operation to create a file system, set the following parameters:
   *   - FileSystemType: extreme
   *   - StorageType: advance
   * - An automatic snapshot policy is created. For more information, see [CreateAutoSnapshotPolicy](https://www.alibabacloud.com/help/en/nas/developer-reference/api-nas-2017-06-26-createautosnapshotpolicy).
   * - The AliyunNASManageENIRole authorization is completed in the console. Before creating an Extreme NAS file system, associate the AliyunNASManageENIRole service-linked role with File Storage NAS to allow File Storage NAS to manage network interface controllers (NICs). For more information, see [Manage the service-linked role for File Storage NAS](https://help.aliyun.com/document_detail/208530.html).
   * **Operation description**
   * <props="china">
   * - This feature is in free public preview. During the public preview, the [File Storage NAS Service-Level Agreement (SLA)](https://terms.aliyun.com/legal-agreement/terms/suit_bu1_ali_cloud/suit_bu1_ali_cloud201803061139_99860.html?spm=a2c4g.11186623.0.0.5c895ff2YPLrwe) is not guaranteed.
   * - Each file system can have only one automatic snapshot policy applied.
   * - An automatic snapshot policy can be applied to multiple file systems.
   * - If the target file system already has an automatic snapshot policy applied, calling the ApplyAutoSnapshotPolicy operation replaces the current automatic snapshot policy of the file system.
   * <props="intl">
   * - This feature is in free public preview.
   * - Each file system can have only one automatic snapshot policy applied.
   * - An automatic snapshot policy can be applied to multiple file systems.
   * - If the target file system already has an automatic snapshot policy applied, calling the ApplyAutoSnapshotPolicy operation replaces the current automatic snapshot policy of the file system.
   * 
   * @param request - ApplyAutoSnapshotPolicyRequest
   * @returns ApplyAutoSnapshotPolicyResponse
   */
  async applyAutoSnapshotPolicy(request: $_model.ApplyAutoSnapshotPolicyRequest): Promise<$_model.ApplyAutoSnapshotPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.applyAutoSnapshotPolicyWithOptions(request, runtime);
  }

  /**
   * Configures automatic updates for a specified data flow.
   * 
   * @remarks
   * - This operation applies only to Cloud Parallel File Storage (CPFS) file systems.
   * - Only CPFS 2.2.0 and later support data flows. You can view the version information on the file system details page in the console.
   * - You can add automatic update configurations only for data flows in the `Running` state.
   * - You can add up to five automatic update configurations for a data flow.
   * - It generally takes 2 to 5 minutes to create an automatic update configuration. You can call [DescribeDataFlows](https://help.aliyun.com/document_detail/336901.html) to query the data flow status.
   * - Automatic updates depend on EventBridge to collect object modification events from the source OSS storage. You must first [activate EventBridge](https://help.aliyun.com/document_detail/182246.html).
   *   > The event buses and event rules that CPFS creates in EventBridge contain the description `Create for cpfs auto refresh`. Do not modify or delete these event buses or event rules. Otherwise, automatic updates cannot work properly.
   * - Automatic updates apply to prefixes specified by the RefreshPath parameter. When CPFS configures automatic synchronization for a prefix in a data flow, an event bus is created on the user side, and an event rule is created for the prefix of the source OSS bucket. When an object modification occurs within the prefix of the source OSS bucket, an OSS event is generated in EventBridge and processed by the CPFS data flow.
   * - After you configure automatic updates (AutoRefresh), when data changes in the source storage, the changed metadata is automatically synchronized to the CPFS file system. The changed data is loaded on demand when a user accesses the file, or you can start a data stream task to load the data.
   * - The automatic update interval (AutoRefreshInterval) specifies the interval at which CPFS checks whether data updates exist within the prefix of the source OSS bucket. If data updates exist, an automatic synchronization task is started. When the frequency of object modification events in the source OSS bucket exceeds the processing capability of the CPFS data flow, automatic update tasks accumulate, metadata updates are delayed, and the data flow status changes to Misconfigured. To resolve this issue, upgrade the data flow specifications or reduce the modification frequency in OSS.
   * 
   * @param request - ApplyDataFlowAutoRefreshRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyDataFlowAutoRefreshResponse
   */
  async applyDataFlowAutoRefreshWithOptions(request: $_model.ApplyDataFlowAutoRefreshRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ApplyDataFlowAutoRefreshResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoRefreshInterval)) {
      query["AutoRefreshInterval"] = request.autoRefreshInterval;
    }

    if (!$dara.isNull(request.autoRefreshPolicy)) {
      query["AutoRefreshPolicy"] = request.autoRefreshPolicy;
    }

    if (!$dara.isNull(request.autoRefreshs)) {
      query["AutoRefreshs"] = request.autoRefreshs;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dataFlowId)) {
      query["DataFlowId"] = request.dataFlowId;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyDataFlowAutoRefresh",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApplyDataFlowAutoRefreshResponse>(await this.callApi(params, req, runtime), new $_model.ApplyDataFlowAutoRefreshResponse({}));
  }

  /**
   * Configures automatic updates for a specified data flow.
   * 
   * @remarks
   * - This operation applies only to Cloud Parallel File Storage (CPFS) file systems.
   * - Only CPFS 2.2.0 and later support data flows. You can view the version information on the file system details page in the console.
   * - You can add automatic update configurations only for data flows in the `Running` state.
   * - You can add up to five automatic update configurations for a data flow.
   * - It generally takes 2 to 5 minutes to create an automatic update configuration. You can call [DescribeDataFlows](https://help.aliyun.com/document_detail/336901.html) to query the data flow status.
   * - Automatic updates depend on EventBridge to collect object modification events from the source OSS storage. You must first [activate EventBridge](https://help.aliyun.com/document_detail/182246.html).
   *   > The event buses and event rules that CPFS creates in EventBridge contain the description `Create for cpfs auto refresh`. Do not modify or delete these event buses or event rules. Otherwise, automatic updates cannot work properly.
   * - Automatic updates apply to prefixes specified by the RefreshPath parameter. When CPFS configures automatic synchronization for a prefix in a data flow, an event bus is created on the user side, and an event rule is created for the prefix of the source OSS bucket. When an object modification occurs within the prefix of the source OSS bucket, an OSS event is generated in EventBridge and processed by the CPFS data flow.
   * - After you configure automatic updates (AutoRefresh), when data changes in the source storage, the changed metadata is automatically synchronized to the CPFS file system. The changed data is loaded on demand when a user accesses the file, or you can start a data stream task to load the data.
   * - The automatic update interval (AutoRefreshInterval) specifies the interval at which CPFS checks whether data updates exist within the prefix of the source OSS bucket. If data updates exist, an automatic synchronization task is started. When the frequency of object modification events in the source OSS bucket exceeds the processing capability of the CPFS data flow, automatic update tasks accumulate, metadata updates are delayed, and the data flow status changes to Misconfigured. To resolve this issue, upgrade the data flow specifications or reduce the modification frequency in OSS.
   * 
   * @param request - ApplyDataFlowAutoRefreshRequest
   * @returns ApplyDataFlowAutoRefreshResponse
   */
  async applyDataFlowAutoRefresh(request: $_model.ApplyDataFlowAutoRefreshRequest): Promise<$_model.ApplyDataFlowAutoRefreshResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.applyDataFlowAutoRefreshWithOptions(request, runtime);
  }

  /**
   * Associates a VSC device with a file system.
   * 
   * @remarks
   * - Only CPFS for Lingjun supports this feature.
   * - Batch execution is supported. In batch execution, only one VscId can be associated with multiple FileSystemIds. This means the ResourceIds.VscId values must be identical.
   * 
   * @param request - AttachVscToFilesystemsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachVscToFilesystemsResponse
   */
  async attachVscToFilesystemsWithOptions(request: $_model.AttachVscToFilesystemsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachVscToFilesystemsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.roleChain)) {
      query["RoleChain"] = request.roleChain;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachVscToFilesystems",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachVscToFilesystemsResponse>(await this.callApi(params, req, runtime), new $_model.AttachVscToFilesystemsResponse({}));
  }

  /**
   * Associates a VSC device with a file system.
   * 
   * @remarks
   * - Only CPFS for Lingjun supports this feature.
   * - Batch execution is supported. In batch execution, only one VscId can be associated with multiple FileSystemIds. This means the ResourceIds.VscId values must be identical.
   * 
   * @param request - AttachVscToFilesystemsRequest
   * @returns AttachVscToFilesystemsResponse
   */
  async attachVscToFilesystems(request: $_model.AttachVscToFilesystemsRequest): Promise<$_model.AttachVscToFilesystemsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachVscToFilesystemsWithOptions(request, runtime);
  }

  /**
   * Cancels the automatic snapshot policy that is created for a file system.
   * 
   * @remarks
   * <props="china">
   * -  This feature is in free public preview. During the public preview, the [File Storage NAS Service-Level Agreement (SLA)](https://terms.aliyun.com/legal-agreement/terms/suit_bu1_ali_cloud/suit_bu1_ali_cloud201803061139_99860.html?spm=a2c4g.11186623.0.0.5c895ff2YPLrwe) is not guaranteed.
   * -  Only Advanced Extreme NAS supports this feature.
   * -  Before you begin: You have applied an automatic snapshot policy to the target Extreme NAS file system by calling [ApplyAutoSnapshotPolicy](https://www.alibabacloud.com/help/en/nas/developer-reference/api-nas-2017-06-26-applyautosnapshotpolicy).
   * <props="intl">
   * -  This feature is in free public preview. During the public preview, the [File Storage NAS Service-Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed.
   * -  Only Advanced Extreme NAS supports this feature.
   * -  Before you begin: You have applied an automatic snapshot policy to the target Extreme NAS file system by calling [ApplyAutoSnapshotPolicy](https://www.alibabacloud.com/help/en/nas/developer-reference/api-nas-2017-06-26-applyautosnapshotpolicy).
   * 
   * @param request - CancelAutoSnapshotPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelAutoSnapshotPolicyResponse
   */
  async cancelAutoSnapshotPolicyWithOptions(request: $_model.CancelAutoSnapshotPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelAutoSnapshotPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemIds)) {
      query["FileSystemIds"] = request.fileSystemIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelAutoSnapshotPolicy",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelAutoSnapshotPolicyResponse>(await this.callApi(params, req, runtime), new $_model.CancelAutoSnapshotPolicyResponse({}));
  }

  /**
   * Cancels the automatic snapshot policy that is created for a file system.
   * 
   * @remarks
   * <props="china">
   * -  This feature is in free public preview. During the public preview, the [File Storage NAS Service-Level Agreement (SLA)](https://terms.aliyun.com/legal-agreement/terms/suit_bu1_ali_cloud/suit_bu1_ali_cloud201803061139_99860.html?spm=a2c4g.11186623.0.0.5c895ff2YPLrwe) is not guaranteed.
   * -  Only Advanced Extreme NAS supports this feature.
   * -  Before you begin: You have applied an automatic snapshot policy to the target Extreme NAS file system by calling [ApplyAutoSnapshotPolicy](https://www.alibabacloud.com/help/en/nas/developer-reference/api-nas-2017-06-26-applyautosnapshotpolicy).
   * <props="intl">
   * -  This feature is in free public preview. During the public preview, the [File Storage NAS Service-Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed.
   * -  Only Advanced Extreme NAS supports this feature.
   * -  Before you begin: You have applied an automatic snapshot policy to the target Extreme NAS file system by calling [ApplyAutoSnapshotPolicy](https://www.alibabacloud.com/help/en/nas/developer-reference/api-nas-2017-06-26-applyautosnapshotpolicy).
   * 
   * @param request - CancelAutoSnapshotPolicyRequest
   * @returns CancelAutoSnapshotPolicyResponse
   */
  async cancelAutoSnapshotPolicy(request: $_model.CancelAutoSnapshotPolicyRequest): Promise<$_model.CancelAutoSnapshotPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelAutoSnapshotPolicyWithOptions(request, runtime);
  }

  /**
   * Cancels the automatic update configuration for a specified data flow.
   * 
   * @remarks
   * - This operation applies only to Cloud Parallel File Storage (CPFS) file systems.
   * - Data flows are supported only by CPFS 2.2.0 and later. You can view the version information on the file system details page in the console.
   * - You can cancel the automatic update configuration only for data flows in the `Running` or `Stopped` state.
   * - Canceling the automatic update configuration typically takes 2 to 5 minutes. You can call [DescribeDataFlows](https://help.aliyun.com/document_detail/2402270.html) to query the status of the cancel automatic update task.
   * 
   * @param request - CancelDataFlowAutoRefreshRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelDataFlowAutoRefreshResponse
   */
  async cancelDataFlowAutoRefreshWithOptions(request: $_model.CancelDataFlowAutoRefreshRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelDataFlowAutoRefreshResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dataFlowId)) {
      query["DataFlowId"] = request.dataFlowId;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.refreshPath)) {
      query["RefreshPath"] = request.refreshPath;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelDataFlowAutoRefresh",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelDataFlowAutoRefreshResponse>(await this.callApi(params, req, runtime), new $_model.CancelDataFlowAutoRefreshResponse({}));
  }

  /**
   * Cancels the automatic update configuration for a specified data flow.
   * 
   * @remarks
   * - This operation applies only to Cloud Parallel File Storage (CPFS) file systems.
   * - Data flows are supported only by CPFS 2.2.0 and later. You can view the version information on the file system details page in the console.
   * - You can cancel the automatic update configuration only for data flows in the `Running` or `Stopped` state.
   * - Canceling the automatic update configuration typically takes 2 to 5 minutes. You can call [DescribeDataFlows](https://help.aliyun.com/document_detail/2402270.html) to query the status of the cancel automatic update task.
   * 
   * @param request - CancelDataFlowAutoRefreshRequest
   * @returns CancelDataFlowAutoRefreshResponse
   */
  async cancelDataFlowAutoRefresh(request: $_model.CancelDataFlowAutoRefreshRequest): Promise<$_model.CancelDataFlowAutoRefreshResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelDataFlowAutoRefreshWithOptions(request, runtime);
  }

  /**
   * Cancels a data flow streaming subtask.
   * 
   * @remarks
   * *Prerequisite resource creation process**
   * Before you cancel a data flow streaming subtask, create the following resources in order:
   * 1. Create a data flow: Call [CreateDataFlow](https://www.alibabacloud.com/help/en/cpfs/bmcpfs/developer-reference/api-nas-2017-06-26-createdataflow-bmcpfs) to create a data flow.
   * 2. Create a data flow task: Call [CreateDataFlowTask](https://www.alibabacloud.com/help/en/cpfs/bmcpfs/developer-reference/api-nas-2017-06-26-createdataflowtask-bmcpfs) to create a streaming import (StreamImport) or streaming export (StreamExport) task.
   * 3. Create a data flow streaming subtask: Call [CreateDataFlowSubTask](https://www.alibabacloud.com/help/en/cpfs/bmcpfs/developer-reference/api-nas-2017-06-26-createdataflowsubtask-bmcpfs) to create a streaming subtask.
   * > CPFS for Lingjun file systems must be created in the console.
   * **Operation description**
   * - Only CPFS for Lingjun 2.6.0 and later are supported. You can view the version information on the file system details page in the console.
   * - Prerequisites: A CPFS for Lingjun file system is created, the DataFlow is in the Running state, the DataFlowTask is in the Executing state, and the DataFlowSubTask is in the CREATED or RUNNING state.
   * - You can cancel a data flow streaming subtask only when it is in the CREATED or RUNNING state.
   * - Data flow streaming tasks are executed asynchronously. You can call [DescribeDataFlowSubTasks](https://www.alibabacloud.com/help/en/cpfs/bmcpfs/developer-reference/api-nas-2017-06-26-describedataflowtasks-bmcpfs) to query the execution status of a streaming task.
   * 
   * @param request - CancelDataFlowSubTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelDataFlowSubTaskResponse
   */
  async cancelDataFlowSubTaskWithOptions(request: $_model.CancelDataFlowSubTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelDataFlowSubTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dataFlowId)) {
      query["DataFlowId"] = request.dataFlowId;
    }

    if (!$dara.isNull(request.dataFlowSubTaskId)) {
      query["DataFlowSubTaskId"] = request.dataFlowSubTaskId;
    }

    if (!$dara.isNull(request.dataFlowTaskId)) {
      query["DataFlowTaskId"] = request.dataFlowTaskId;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelDataFlowSubTask",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelDataFlowSubTaskResponse>(await this.callApi(params, req, runtime), new $_model.CancelDataFlowSubTaskResponse({}));
  }

  /**
   * Cancels a data flow streaming subtask.
   * 
   * @remarks
   * *Prerequisite resource creation process**
   * Before you cancel a data flow streaming subtask, create the following resources in order:
   * 1. Create a data flow: Call [CreateDataFlow](https://www.alibabacloud.com/help/en/cpfs/bmcpfs/developer-reference/api-nas-2017-06-26-createdataflow-bmcpfs) to create a data flow.
   * 2. Create a data flow task: Call [CreateDataFlowTask](https://www.alibabacloud.com/help/en/cpfs/bmcpfs/developer-reference/api-nas-2017-06-26-createdataflowtask-bmcpfs) to create a streaming import (StreamImport) or streaming export (StreamExport) task.
   * 3. Create a data flow streaming subtask: Call [CreateDataFlowSubTask](https://www.alibabacloud.com/help/en/cpfs/bmcpfs/developer-reference/api-nas-2017-06-26-createdataflowsubtask-bmcpfs) to create a streaming subtask.
   * > CPFS for Lingjun file systems must be created in the console.
   * **Operation description**
   * - Only CPFS for Lingjun 2.6.0 and later are supported. You can view the version information on the file system details page in the console.
   * - Prerequisites: A CPFS for Lingjun file system is created, the DataFlow is in the Running state, the DataFlowTask is in the Executing state, and the DataFlowSubTask is in the CREATED or RUNNING state.
   * - You can cancel a data flow streaming subtask only when it is in the CREATED or RUNNING state.
   * - Data flow streaming tasks are executed asynchronously. You can call [DescribeDataFlowSubTasks](https://www.alibabacloud.com/help/en/cpfs/bmcpfs/developer-reference/api-nas-2017-06-26-describedataflowtasks-bmcpfs) to query the execution status of a streaming task.
   * 
   * @param request - CancelDataFlowSubTaskRequest
   * @returns CancelDataFlowSubTaskResponse
   */
  async cancelDataFlowSubTask(request: $_model.CancelDataFlowSubTaskRequest): Promise<$_model.CancelDataFlowSubTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelDataFlowSubTaskWithOptions(request, runtime);
  }

  /**
   * Cancels a data flow batch task or streaming task that is in the Pending or Executing state.
   * 
   * @remarks
   * *Prerequisites**
   * Before you call this operation, create resources in the following order and make sure that the resources at each layer are in the required state:
   * 1. Create a file system: Call [CreateFileSystem](https://www.alibabacloud.com/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-createfilesystem-cpfs) to create a CPFS file system.
   *    - State requirement: The file system is in the Running state.
   * 2. Create a mount target: Call [CreateMountTarget](https://www.alibabacloud.com/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-createmounttarget-cpfs) to create a mount target.
   *    - State requirement: The mount target is in the Active state.
   * 3. Create a fileset: Call [CreateFileset](https://www.alibabacloud.com/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-createfileset-cpfs) to create a fileset.
   *    - State requirement: The fileset is created.
   * 4. Create a data flow: Call [CreateDataFlow](https://www.alibabacloud.com/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-createdataflow-cpfs) to create a data flow.
   *    - State requirement: The data flow is in the Running state.
   * 5. Create a data flow task: Call [CreateDataFlowTask](https://www.alibabacloud.com/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-createdataflowtask-cpfs) to create a data flow task.
   * **Operation description**
   * - Only CPFS 2.2.0 and later and CPFS for Lingjun 2.4.0 and later support data flow tasks. You can view the version information on the file system details page in the console.
   * - Only data flow tasks in the `Pending` state can be canceled.
   * - Canceling a data flow task typically takes 5 to 10 minutes. You can call [DescribeDataFlowTasks](https://help.aliyun.com/document_detail/2402275.html) to query the task execution status.
   * - If a streaming data flow task contains running streaming subtasks, the streaming task cannot be canceled. Otherwise, the InvalidStatus.ResourceMismatch error is returned.
   * 
   * @param request - CancelDataFlowTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelDataFlowTaskResponse
   */
  async cancelDataFlowTaskWithOptions(request: $_model.CancelDataFlowTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelDataFlowTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dataFlowId)) {
      query["DataFlowId"] = request.dataFlowId;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelDataFlowTask",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelDataFlowTaskResponse>(await this.callApi(params, req, runtime), new $_model.CancelDataFlowTaskResponse({}));
  }

  /**
   * Cancels a data flow batch task or streaming task that is in the Pending or Executing state.
   * 
   * @remarks
   * *Prerequisites**
   * Before you call this operation, create resources in the following order and make sure that the resources at each layer are in the required state:
   * 1. Create a file system: Call [CreateFileSystem](https://www.alibabacloud.com/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-createfilesystem-cpfs) to create a CPFS file system.
   *    - State requirement: The file system is in the Running state.
   * 2. Create a mount target: Call [CreateMountTarget](https://www.alibabacloud.com/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-createmounttarget-cpfs) to create a mount target.
   *    - State requirement: The mount target is in the Active state.
   * 3. Create a fileset: Call [CreateFileset](https://www.alibabacloud.com/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-createfileset-cpfs) to create a fileset.
   *    - State requirement: The fileset is created.
   * 4. Create a data flow: Call [CreateDataFlow](https://www.alibabacloud.com/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-createdataflow-cpfs) to create a data flow.
   *    - State requirement: The data flow is in the Running state.
   * 5. Create a data flow task: Call [CreateDataFlowTask](https://www.alibabacloud.com/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-createdataflowtask-cpfs) to create a data flow task.
   * **Operation description**
   * - Only CPFS 2.2.0 and later and CPFS for Lingjun 2.4.0 and later support data flow tasks. You can view the version information on the file system details page in the console.
   * - Only data flow tasks in the `Pending` state can be canceled.
   * - Canceling a data flow task typically takes 5 to 10 minutes. You can call [DescribeDataFlowTasks](https://help.aliyun.com/document_detail/2402275.html) to query the task execution status.
   * - If a streaming data flow task contains running streaming subtasks, the streaming task cannot be canceled. Otherwise, the InvalidStatus.ResourceMismatch error is returned.
   * 
   * @param request - CancelDataFlowTaskRequest
   * @returns CancelDataFlowTaskResponse
   */
  async cancelDataFlowTask(request: $_model.CancelDataFlowTaskRequest): Promise<$_model.CancelDataFlowTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelDataFlowTaskWithOptions(request, runtime);
  }

  /**
   * Cancels the directory quota of a file system.
   * 
   * @remarks
   * Only General-purpose NAS NFS file systems support the directory quota feature.
   * 
   * @param request - CancelDirQuotaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelDirQuotaResponse
   */
  async cancelDirQuotaWithOptions(request: $_model.CancelDirQuotaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelDirQuotaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.userType)) {
      query["UserType"] = request.userType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelDirQuota",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelDirQuotaResponse>(await this.callApi(params, req, runtime), new $_model.CancelDirQuotaResponse({}));
  }

  /**
   * Cancels the directory quota of a file system.
   * 
   * @remarks
   * Only General-purpose NAS NFS file systems support the directory quota feature.
   * 
   * @param request - CancelDirQuotaRequest
   * @returns CancelDirQuotaResponse
   */
  async cancelDirQuota(request: $_model.CancelDirQuotaRequest): Promise<$_model.CancelDirQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelDirQuotaWithOptions(request, runtime);
  }

  /**
   * Cancels the quota set for a fileset.
   * 
   * @remarks
   * Only CPFS for Lingjun 2.7.0 and later support quota cancellation.
   * **Before you begin**
   * - This operation is applicable only to CPFS for Lingjun 2.7.0 and later file systems.
   * - The fileset feature is available only to whitelisted users. To use this feature, submit a ticket to apply for the fileset whitelist.
   * - The file system ID must start with `bmcpfs-`.
   * - Before you call this operation, make sure that a quota is set for the target fileset by calling the [SetFilesetQuota](https://www.alibabacloud.com/help/en/cpfs/bmcpfs/developer-reference/api-nas-2017-06-26-setfilesetquota-bmcpfs) operation.
   * 
   * @param request - CancelFilesetQuotaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelFilesetQuotaResponse
   */
  async cancelFilesetQuotaWithOptions(request: $_model.CancelFilesetQuotaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelFilesetQuotaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.fsetId)) {
      query["FsetId"] = request.fsetId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelFilesetQuota",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelFilesetQuotaResponse>(await this.callApi(params, req, runtime), new $_model.CancelFilesetQuotaResponse({}));
  }

  /**
   * Cancels the quota set for a fileset.
   * 
   * @remarks
   * Only CPFS for Lingjun 2.7.0 and later support quota cancellation.
   * **Before you begin**
   * - This operation is applicable only to CPFS for Lingjun 2.7.0 and later file systems.
   * - The fileset feature is available only to whitelisted users. To use this feature, submit a ticket to apply for the fileset whitelist.
   * - The file system ID must start with `bmcpfs-`.
   * - Before you call this operation, make sure that a quota is set for the target fileset by calling the [SetFilesetQuota](https://www.alibabacloud.com/help/en/cpfs/bmcpfs/developer-reference/api-nas-2017-06-26-setfilesetquota-bmcpfs) operation.
   * 
   * @param request - CancelFilesetQuotaRequest
   * @returns CancelFilesetQuotaResponse
   */
  async cancelFilesetQuota(request: $_model.CancelFilesetQuotaRequest): Promise<$_model.CancelFilesetQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelFilesetQuotaWithOptions(request, runtime);
  }

  /**
   * Cancels a data retrieval task that is in the active state.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this feature.
   * 
   * @param request - CancelLifecycleRetrieveJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelLifecycleRetrieveJobResponse
   */
  async cancelLifecycleRetrieveJobWithOptions(request: $_model.CancelLifecycleRetrieveJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelLifecycleRetrieveJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelLifecycleRetrieveJob",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelLifecycleRetrieveJobResponse>(await this.callApi(params, req, runtime), new $_model.CancelLifecycleRetrieveJobResponse({}));
  }

  /**
   * Cancels a data retrieval task that is in the active state.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this feature.
   * 
   * @param request - CancelLifecycleRetrieveJobRequest
   * @returns CancelLifecycleRetrieveJobResponse
   */
  async cancelLifecycleRetrieveJob(request: $_model.CancelLifecycleRetrieveJobRequest): Promise<$_model.CancelLifecycleRetrieveJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelLifecycleRetrieveJobWithOptions(request, runtime);
  }

  /**
   * Cancels a running task in the recycle bin.
   * 
   * @remarks
   * ### Operation description
   * - Only General-purpose NAS file systems support this feature.
   * - You can cancel only tasks that are in the Running state. The cancel operation does not take effect on tasks that have reached a final state (PartialSuccess, Success, Fail, or Cancelled).
   * - When you cancel a running permanent deletion task, files that have already been permanently deleted cannot be recovered.
   * - When you cancel a running file restoration task, restored files can be queried in the file system, and unrestored files can be queried in the recycle bin.
   * 
   * @param request - CancelRecycleBinJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelRecycleBinJobResponse
   */
  async cancelRecycleBinJobWithOptions(request: $_model.CancelRecycleBinJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelRecycleBinJobResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelRecycleBinJob",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelRecycleBinJobResponse>(await this.callApi(params, req, runtime), new $_model.CancelRecycleBinJobResponse({}));
  }

  /**
   * Cancels a running task in the recycle bin.
   * 
   * @remarks
   * ### Operation description
   * - Only General-purpose NAS file systems support this feature.
   * - You can cancel only tasks that are in the Running state. The cancel operation does not take effect on tasks that have reached a final state (PartialSuccess, Success, Fail, or Cancelled).
   * - When you cancel a running permanent deletion task, files that have already been permanently deleted cannot be recovered.
   * - When you cancel a running file restoration task, restored files can be queried in the file system, and unrestored files can be queried in the recycle bin.
   * 
   * @param request - CancelRecycleBinJobRequest
   * @returns CancelRecycleBinJobResponse
   */
  async cancelRecycleBinJob(request: $_model.CancelRecycleBinJobRequest): Promise<$_model.CancelRecycleBinJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelRecycleBinJobWithOptions(request, runtime);
  }

  /**
   * Modifies the resource group to which a file system instance belongs.
   * 
   * @param request - ChangeResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: $_model.ChangeResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeResourceGroupResponse> {
    request.validate();
    let query = { };
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
      version: "2017-06-26",
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
   * Modifies the resource group to which a file system instance belongs.
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: $_model.ChangeResourceGroupRequest): Promise<$_model.ChangeResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
   * Creates a permission group.
   * 
   * @remarks
   * - A maximum of 20 permission groups can be created per Alibaba Cloud account in a single region.
   * - A maximum of 300 rules can be added to a permission group.
   * - Only permission groups of the VPC network type can be created.
   * 
   * @param request - CreateAccessGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAccessGroupResponse
   */
  async createAccessGroupWithOptions(request: $_model.CreateAccessGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAccessGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessGroupName)) {
      query["AccessGroupName"] = request.accessGroupName;
    }

    if (!$dara.isNull(request.accessGroupType)) {
      query["AccessGroupType"] = request.accessGroupType;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.fileSystemType)) {
      query["FileSystemType"] = request.fileSystemType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAccessGroup",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAccessGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateAccessGroupResponse({}));
  }

  /**
   * Creates a permission group.
   * 
   * @remarks
   * - A maximum of 20 permission groups can be created per Alibaba Cloud account in a single region.
   * - A maximum of 300 rules can be added to a permission group.
   * - Only permission groups of the VPC network type can be created.
   * 
   * @param request - CreateAccessGroupRequest
   * @returns CreateAccessGroupResponse
   */
  async createAccessGroup(request: $_model.CreateAccessGroupRequest): Promise<$_model.CreateAccessGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAccessGroupWithOptions(request, runtime);
  }

  /**
   * Creates an access point.
   * 
   * @remarks
   * - When you use the CreateAccessPoint operation to create an access point, some resources are generated asynchronously. Therefore, after executing the CreateAccessPoint operation successfully, first invoke the [DescribeAccessPoints](https://help.aliyun.com/document_detail/2712239.html) or [DescribeAccessPoint](https://help.aliyun.com/document_detail/2712240.html) operation to query the status of the access point. Execute the file system mount operation only after the access point enters the **Active** state. Otherwise, it may result in a failed mount.
   * - Only General-purpose NAS NFS file systems support this feature.
   * - If you enable the RAM policy (EnabledRam), you must configure the corresponding RAM permissions. For more information, see [Manage access points](https://help.aliyun.com/document_detail/2545998.html).
   * 
   * @param request - CreateAccessPointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAccessPointResponse
   */
  async createAccessPointWithOptions(request: $_model.CreateAccessPointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAccessPointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessGroup)) {
      query["AccessGroup"] = request.accessGroup;
    }

    if (!$dara.isNull(request.accessPointName)) {
      query["AccessPointName"] = request.accessPointName;
    }

    if (!$dara.isNull(request.agenticSpaceId)) {
      query["AgenticSpaceId"] = request.agenticSpaceId;
    }

    if (!$dara.isNull(request.enabledRam)) {
      query["EnabledRam"] = request.enabledRam;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.ownerGroupId)) {
      query["OwnerGroupId"] = request.ownerGroupId;
    }

    if (!$dara.isNull(request.ownerUserId)) {
      query["OwnerUserId"] = request.ownerUserId;
    }

    if (!$dara.isNull(request.permission)) {
      query["Permission"] = request.permission;
    }

    if (!$dara.isNull(request.posixGroupId)) {
      query["PosixGroupId"] = request.posixGroupId;
    }

    if (!$dara.isNull(request.posixSecondaryGroupIds)) {
      query["PosixSecondaryGroupIds"] = request.posixSecondaryGroupIds;
    }

    if (!$dara.isNull(request.posixUserId)) {
      query["PosixUserId"] = request.posixUserId;
    }

    if (!$dara.isNull(request.rootDirectory)) {
      query["RootDirectory"] = request.rootDirectory;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.vswId)) {
      query["VswId"] = request.vswId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAccessPoint",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAccessPointResponse>(await this.callApi(params, req, runtime), new $_model.CreateAccessPointResponse({}));
  }

  /**
   * Creates an access point.
   * 
   * @remarks
   * - When you use the CreateAccessPoint operation to create an access point, some resources are generated asynchronously. Therefore, after executing the CreateAccessPoint operation successfully, first invoke the [DescribeAccessPoints](https://help.aliyun.com/document_detail/2712239.html) or [DescribeAccessPoint](https://help.aliyun.com/document_detail/2712240.html) operation to query the status of the access point. Execute the file system mount operation only after the access point enters the **Active** state. Otherwise, it may result in a failed mount.
   * - Only General-purpose NAS NFS file systems support this feature.
   * - If you enable the RAM policy (EnabledRam), you must configure the corresponding RAM permissions. For more information, see [Manage access points](https://help.aliyun.com/document_detail/2545998.html).
   * 
   * @param request - CreateAccessPointRequest
   * @returns CreateAccessPointResponse
   */
  async createAccessPoint(request: $_model.CreateAccessPointRequest): Promise<$_model.CreateAccessPointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAccessPointWithOptions(request, runtime);
  }

  /**
   * Creates a permission rule for a permission group.
   * 
   * @remarks
   * You can add up to 300 rules to a permission group.
   * 
   * @param request - CreateAccessRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAccessRuleResponse
   */
  async createAccessRuleWithOptions(request: $_model.CreateAccessRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAccessRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessGroupName)) {
      query["AccessGroupName"] = request.accessGroupName;
    }

    if (!$dara.isNull(request.fileSystemType)) {
      query["FileSystemType"] = request.fileSystemType;
    }

    if (!$dara.isNull(request.ipv6SourceCidrIp)) {
      query["Ipv6SourceCidrIp"] = request.ipv6SourceCidrIp;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.RWAccessType)) {
      query["RWAccessType"] = request.RWAccessType;
    }

    if (!$dara.isNull(request.sourceCidrIp)) {
      query["SourceCidrIp"] = request.sourceCidrIp;
    }

    if (!$dara.isNull(request.userAccessType)) {
      query["UserAccessType"] = request.userAccessType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAccessRule",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAccessRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateAccessRuleResponse({}));
  }

  /**
   * Creates a permission rule for a permission group.
   * 
   * @remarks
   * You can add up to 300 rules to a permission group.
   * 
   * @param request - CreateAccessRuleRequest
   * @returns CreateAccessRuleResponse
   */
  async createAccessRule(request: $_model.CreateAccessRuleRequest): Promise<$_model.CreateAccessRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAccessRuleWithOptions(request, runtime);
  }

  /**
   * Creates an Agentic space.
   * 
   * @remarks
   * *Before you begin**
   * Complete the following preparations before calling this operation:
   * 1. **An Agentic file system is created**: When calling [CreateFileSystem](https://www.alibabacloud.com/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-createfilesystem-cpfs) to create a file system, set the following parameters:
   *    - `StorageType`: Set to `Agentic`.
   *    - `ProtocolType`: Set to `NFS`.
   *    - **Supported regions**: The Agentic storage type is available only in specific regions and zones. Check the console for details.
   * **Usage notes**
   * - This operation applies only to Agentic file systems.
   * - Complete call chain example:
   *   1. Call CreateFileSystem to create an Agentic file system (StorageType=Agentic, ProtocolType=NFS).
   *   2. After the file system is created (status is Running), call CreateAgenticSpace to create an Agentic space.
   *   3. To modify the Agentic space configuration, call the [ModifyAgenticSpace](https://www.alibabacloud.com/help/en/nas/developer-reference/api-nas-2017-06-26-modifyagenticspace) operation.
   * 
   * @param request - CreateAgenticSpaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAgenticSpaceResponse
   */
  async createAgenticSpaceWithOptions(request: $_model.CreateAgenticSpaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAgenticSpaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.azone)) {
      query["Azone"] = request.azone;
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

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.fileSystemPath)) {
      query["FileSystemPath"] = request.fileSystemPath;
    }

    if (!$dara.isNull(request.quota)) {
      query["Quota"] = request.quota;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAgenticSpace",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAgenticSpaceResponse>(await this.callApi(params, req, runtime), new $_model.CreateAgenticSpaceResponse({}));
  }

  /**
   * Creates an Agentic space.
   * 
   * @remarks
   * *Before you begin**
   * Complete the following preparations before calling this operation:
   * 1. **An Agentic file system is created**: When calling [CreateFileSystem](https://www.alibabacloud.com/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-createfilesystem-cpfs) to create a file system, set the following parameters:
   *    - `StorageType`: Set to `Agentic`.
   *    - `ProtocolType`: Set to `NFS`.
   *    - **Supported regions**: The Agentic storage type is available only in specific regions and zones. Check the console for details.
   * **Usage notes**
   * - This operation applies only to Agentic file systems.
   * - Complete call chain example:
   *   1. Call CreateFileSystem to create an Agentic file system (StorageType=Agentic, ProtocolType=NFS).
   *   2. After the file system is created (status is Running), call CreateAgenticSpace to create an Agentic space.
   *   3. To modify the Agentic space configuration, call the [ModifyAgenticSpace](https://www.alibabacloud.com/help/en/nas/developer-reference/api-nas-2017-06-26-modifyagenticspace) operation.
   * 
   * @param request - CreateAgenticSpaceRequest
   * @returns CreateAgenticSpaceResponse
   */
  async createAgenticSpace(request: $_model.CreateAgenticSpaceRequest): Promise<$_model.CreateAgenticSpaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAgenticSpaceWithOptions(request, runtime);
  }

  /**
   * Creates an automatic snapshot policy.
   * 
   * @remarks
   * <props="china">
   * - This feature is in free public preview. During the public preview, the [File Storage NAS Service-Level Agreement (SLA)](https://terms.aliyun.com/legal-agreement/terms/suit_bu1_ali_cloud/suit_bu1_ali_cloud201803061139_99860.html?spm=a2c4g.11186623.0.0.5c895ff2YPLrwe) is not guaranteed.
   * - Only Advanced Extreme NAS file systems support this feature.
   * - You can create up to 100 automatic snapshot policies per region for each Alibaba Cloud account.
   * - If a file system contains a large amount of data and the time required to create an automatic snapshot exceeds the interval between two scheduled time points, the next time point is automatically skipped. For example, you set 09:00, 10:00, 11:00, and 12:00 as the automatic snapshot time points. Because the file system contains a large amount of data, the snapshot creation starts at 09:00 and is completed at 10:20, which takes 80 minutes. The system skips the 10:00 time point and continues to create an automatic snapshot at 11:00.
   * - Each file system supports up to 128 automatic snapshots. After the snapshot quota is reached, the system automatically deletes the earliest automatic snapshots. Manual snapshots are not affected.
   * - When you modify the retention period of an automatic snapshot policy, the modification takes effect only on new snapshots. Existing snapshots retain their original retention period.
   * - If an automatic snapshot is being created for a file system, you must wait until the automatic snapshot is completed before you can manually create a snapshot.
   * - Automatic snapshot policies cannot be executed on file systems that are not in the Normal state.
   * - Automatic snapshots follow a unified naming format: `auto_yyyyMMdd_X`. In this format, `auto` indicates an automatic snapshot, which distinguishes it from manual snapshots. `yyyyMMdd` indicates the date when the snapshot is created, where `y` indicates the year, `M` indicates the month, and `d` indicates the day. `X` indicates the sequence number of the automatic snapshot created on that day. For example, `auto_20201018_1` indicates the first automatic snapshot created on October 18, 2020.
   * - A created automatic snapshot policy can be applied to any file system by calling ApplyAutoSnapshotPolicy, and the policy content can be modified by calling ModifyAutoSnapshotPolicy.
   * <props="intl">
   * - This feature is in free public preview.
   * - Only Advanced Extreme NAS file systems support this feature.
   * - You can create up to 100 automatic snapshot policies per region for each Alibaba Cloud account.
   * - If a file system contains a large amount of data and the time required to create an automatic snapshot exceeds the interval between two scheduled time points, the next time point is automatically skipped. For example, you set 09:00, 10:00, 11:00, and 12:00 as the automatic snapshot time points. Because the file system contains a large amount of data, the snapshot creation starts at 09:00 and is completed at 10:20, which takes 80 minutes. The system skips the 10:00 time point and continues to create an automatic snapshot at 11:00.
   * - Each file system supports up to 128 automatic snapshots. After the snapshot quota is reached, the system automatically deletes the earliest automatic snapshots. Manual snapshots are not affected.
   * - When you modify the retention period of an automatic snapshot policy, the modification takes effect only on new snapshots. Existing snapshots retain their original retention period.
   * - If an automatic snapshot is being created for a file system, you must wait until the automatic snapshot is completed before you can manually create a snapshot.
   * - Automatic snapshot policies cannot be executed on file systems that are not in the Normal state.
   * - Automatic snapshots follow a unified naming format: `auto_yyyyMMdd_X`. In this format, `auto` indicates an automatic snapshot, which distinguishes it from manual snapshots. `yyyyMMdd` indicates the date when the snapshot is created, where `y` indicates the year, `M` indicates the month, and `d` indicates the day. `X` indicates the sequence number of the automatic snapshot created on that day. For example, `auto_20201018_1` indicates the first automatic snapshot created on October 18, 2020.
   * - A created automatic snapshot policy can be applied to any file system by calling ApplyAutoSnapshotPolicy, and the policy content can be modified by calling ModifyAutoSnapshotPolicy.
   * 
   * @param request - CreateAutoSnapshotPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAutoSnapshotPolicyResponse
   */
  async createAutoSnapshotPolicyWithOptions(request: $_model.CreateAutoSnapshotPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAutoSnapshotPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoSnapshotPolicyName)) {
      query["AutoSnapshotPolicyName"] = request.autoSnapshotPolicyName;
    }

    if (!$dara.isNull(request.fileSystemType)) {
      query["FileSystemType"] = request.fileSystemType;
    }

    if (!$dara.isNull(request.repeatWeekdays)) {
      query["RepeatWeekdays"] = request.repeatWeekdays;
    }

    if (!$dara.isNull(request.retentionDays)) {
      query["RetentionDays"] = request.retentionDays;
    }

    if (!$dara.isNull(request.timePoints)) {
      query["TimePoints"] = request.timePoints;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAutoSnapshotPolicy",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAutoSnapshotPolicyResponse>(await this.callApi(params, req, runtime), new $_model.CreateAutoSnapshotPolicyResponse({}));
  }

  /**
   * Creates an automatic snapshot policy.
   * 
   * @remarks
   * <props="china">
   * - This feature is in free public preview. During the public preview, the [File Storage NAS Service-Level Agreement (SLA)](https://terms.aliyun.com/legal-agreement/terms/suit_bu1_ali_cloud/suit_bu1_ali_cloud201803061139_99860.html?spm=a2c4g.11186623.0.0.5c895ff2YPLrwe) is not guaranteed.
   * - Only Advanced Extreme NAS file systems support this feature.
   * - You can create up to 100 automatic snapshot policies per region for each Alibaba Cloud account.
   * - If a file system contains a large amount of data and the time required to create an automatic snapshot exceeds the interval between two scheduled time points, the next time point is automatically skipped. For example, you set 09:00, 10:00, 11:00, and 12:00 as the automatic snapshot time points. Because the file system contains a large amount of data, the snapshot creation starts at 09:00 and is completed at 10:20, which takes 80 minutes. The system skips the 10:00 time point and continues to create an automatic snapshot at 11:00.
   * - Each file system supports up to 128 automatic snapshots. After the snapshot quota is reached, the system automatically deletes the earliest automatic snapshots. Manual snapshots are not affected.
   * - When you modify the retention period of an automatic snapshot policy, the modification takes effect only on new snapshots. Existing snapshots retain their original retention period.
   * - If an automatic snapshot is being created for a file system, you must wait until the automatic snapshot is completed before you can manually create a snapshot.
   * - Automatic snapshot policies cannot be executed on file systems that are not in the Normal state.
   * - Automatic snapshots follow a unified naming format: `auto_yyyyMMdd_X`. In this format, `auto` indicates an automatic snapshot, which distinguishes it from manual snapshots. `yyyyMMdd` indicates the date when the snapshot is created, where `y` indicates the year, `M` indicates the month, and `d` indicates the day. `X` indicates the sequence number of the automatic snapshot created on that day. For example, `auto_20201018_1` indicates the first automatic snapshot created on October 18, 2020.
   * - A created automatic snapshot policy can be applied to any file system by calling ApplyAutoSnapshotPolicy, and the policy content can be modified by calling ModifyAutoSnapshotPolicy.
   * <props="intl">
   * - This feature is in free public preview.
   * - Only Advanced Extreme NAS file systems support this feature.
   * - You can create up to 100 automatic snapshot policies per region for each Alibaba Cloud account.
   * - If a file system contains a large amount of data and the time required to create an automatic snapshot exceeds the interval between two scheduled time points, the next time point is automatically skipped. For example, you set 09:00, 10:00, 11:00, and 12:00 as the automatic snapshot time points. Because the file system contains a large amount of data, the snapshot creation starts at 09:00 and is completed at 10:20, which takes 80 minutes. The system skips the 10:00 time point and continues to create an automatic snapshot at 11:00.
   * - Each file system supports up to 128 automatic snapshots. After the snapshot quota is reached, the system automatically deletes the earliest automatic snapshots. Manual snapshots are not affected.
   * - When you modify the retention period of an automatic snapshot policy, the modification takes effect only on new snapshots. Existing snapshots retain their original retention period.
   * - If an automatic snapshot is being created for a file system, you must wait until the automatic snapshot is completed before you can manually create a snapshot.
   * - Automatic snapshot policies cannot be executed on file systems that are not in the Normal state.
   * - Automatic snapshots follow a unified naming format: `auto_yyyyMMdd_X`. In this format, `auto` indicates an automatic snapshot, which distinguishes it from manual snapshots. `yyyyMMdd` indicates the date when the snapshot is created, where `y` indicates the year, `M` indicates the month, and `d` indicates the day. `X` indicates the sequence number of the automatic snapshot created on that day. For example, `auto_20201018_1` indicates the first automatic snapshot created on October 18, 2020.
   * - A created automatic snapshot policy can be applied to any file system by calling ApplyAutoSnapshotPolicy, and the policy content can be modified by calling ModifyAutoSnapshotPolicy.
   * 
   * @param request - CreateAutoSnapshotPolicyRequest
   * @returns CreateAutoSnapshotPolicyResponse
   */
  async createAutoSnapshotPolicy(request: $_model.CreateAutoSnapshotPolicyRequest): Promise<$_model.CreateAutoSnapshotPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAutoSnapshotPolicyWithOptions(request, runtime);
  }

  /**
   * Creates an access point for a CPFS for Lingjun file system.
   * 
   * @remarks
   * Creates an access point for a CPFS for Lingjun file system.
   * 
   * @param request - CreateCpfsAccessPointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCpfsAccessPointResponse
   */
  async createCpfsAccessPointWithOptions(request: $_model.CreateCpfsAccessPointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCpfsAccessPointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.rootDirectory)) {
      query["RootDirectory"] = request.rootDirectory;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCpfsAccessPoint",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCpfsAccessPointResponse>(await this.callApi(params, req, runtime), new $_model.CreateCpfsAccessPointResponse({}));
  }

  /**
   * Creates an access point for a CPFS for Lingjun file system.
   * 
   * @remarks
   * Creates an access point for a CPFS for Lingjun file system.
   * 
   * @param request - CreateCpfsAccessPointRequest
   * @returns CreateCpfsAccessPointResponse
   */
  async createCpfsAccessPoint(request: $_model.CreateCpfsAccessPointRequest): Promise<$_model.CreateCpfsAccessPointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCpfsAccessPointWithOptions(request, runtime);
  }

  /**
   * Creates a data flow between a General-purpose CPFS or CPFS for Lingjun file system and a source storage.
   * 
   * @remarks
   * - This operation is applicable to the following services:
   * | Service | File system ID format | Minimum version that supports data flows |
   * |---------|-----------------------|------------------------------------------|
   * | **General-purpose CPFS** | Starts with `cpfs-`, such as cpfs-125487**** | 2.2.0 and later |
   * | **CPFS for Lingjun** | Starts with `bmcpfs-`, such as bmcpfs-0015**** | 2.4.0 and later |
   * > : General-purpose CPFS and CPFS for Lingjun share the same set of API operations, but differ in parameter values and supported features. Refer to the corresponding section based on the service you use.
   * - Basic operations
   *     - You can create a data flow only when the General-purpose CPFS or CPFS for Lingjun file system is in the Running state.
   *     - You can create a maximum of **10** data flows for a General-purpose CPFS or CPFS for Lingjun file system.
   *     - Creating a data flow typically takes 2 to 5 minutes. You can call the [DescribeDataFlows](https://help.aliyun.com/document_detail/336901.html) operation to check whether the data flow is created.
   * - Permissions.
   *     When you create a data flow, Cloud Parallel File Storage assumes the `AliyunServiceRoleForNasOssDataflow` and `AliyunServiceRoleForNasEventNotification` service-linked roles to associate the service for the data stream. For more information, see [Service-linked roles for Cloud Parallel File Storage](https://help.aliyun.com/document_detail/185138.html).
   * - Usage notes for General-purpose CPFS.
   *      This section applies to General-purpose CPFS file systems whose IDs start with `cpfs-`.
   *   - Billing
   *     - You are billed for a data flow based on the data flow bandwidth. For more information, see [Billing of General-purpose CPFS](https://help.aliyun.com/document_detail/111858.html).
   *     - If you enable auto-refresh, EventBridge is used to collect object modification events from the source OSS bucket. You are billed for these events. For more information, see [Billing of EventBridge](https://help.aliyun.com/document_detail/163752.html).
   *   - Data flow specifications
   *       - The data flow bandwidth (Throughput) supports three specifications: 600 MB/s, 1200 MB/s, and 1500 MB/s. The data flow bandwidth is the maximum transmission bandwidth that the data flow can achieve when importing or exporting data.
   *     - Creating a data flow consumes one vSwitch IP address used by a General-purpose Cloud Parallel File Storage mount target. Make sure that the vSwitch has sufficient IP addresses.
   *     - Resource check: If you set the DryRun Settings parameter to true, the system checks whether the resources required to create a data flow (data stream) of the specified specification are sufficient.
   *   - Fileset
   *     - The destination of a data flow is a fileset in a General-purpose CPFS file system. A fileset is a new directory tree structure in a General-purpose CPFS file system. It is a small file system within the parent file system and has an independent inode space and management capabilities.
   *     - The fileset must already exist when you create a data flow, and it cannot be nested with other filesets. You can create only one data flow on a fileset, which corresponds to one source storage.
   *     - A fileset can contain a maximum of 1 million files. If the number of files imported from the OSS bucket exceeds this limit, a `no space` error is reported when you create new files.
   *    > If the fileset already contains data, the existing data in the fileset is cleared and replaced with the data synchronized from the OSS bucket after the data flow is created.
   *   - Auto-refresh
   *     - After you configure auto-refresh, when the data in the source storage changes, the changed metadata undergoes automatic synchronization to the General-purpose Cloud Parallel File Storage file system. The changed data is loaded on demand when users access the files, or you can start a data flow node to load the data.
   *     - Auto-refresh relies on EventBridge to collect object modification events from the source OSS bucket. You must first [activate EventBridge](https://help.aliyun.com/document_detail/182246.html).
   *     - The scope of auto-refresh is a prefix, which is specified by the RefreshPath parameter. You can configure a maximum of five auto-refresh folders for a data flow (data stream).
   *     - The auto-refresh interval (AutoRefreshInterval) is the time interval configured in the Settings by General-purpose Cloud Parallel File Storage to check whether data updates exist within the prefix in the source OSS bucket. If data updates exist, an auto-refresh node is started. If the frequency of object modification events in the source OSS bucket exceeds the processing capability of the General-purpose Cloud Parallel File Storage data flow, auto-refresh nodes accumulate, metadata updates are delayed, and the status of the data flow becomes `Misconfigured`. To resolve this issue, you can upgrade the data flow specification or reduce the modification frequency in the OSS bucket.
   *     - When you configure auto-refresh for a prefix in a General-purpose Cloud Parallel File Storage data flow, an event bus is created on the user side, and an event rule is created for the prefix of the source OSS bucket. When an object in the prefix of the source OSS bucket is modified, an OSS event is generated in EventBridge and processed by the General-purpose Cloud Parallel File Storage data flow.
   *      > The event bus and event rule created by General-purpose Cloud Parallel File Storage in EventBridge contain the `Create for cpfs auto refresh` description. You cannot modify or delete the event bus or event rule. Otherwise, auto-refresh cannot remain in a Normal state.
   *   - Source storage
   *      - Only OSS is supported Cloud Parallel File Storage. The source storage (SourceStorage) of a data flow must be an OSS bucket.
   *      - General-purpose CPFS data flows support encrypted and unencrypted access to OSS. If you select the encrypted (SSL) access method, make sure that encryption in transit is enabled for the OSS bucket.
   *      - If multiple General-purpose CPFS data flows or multiple data flows of the same General-purpose CPFS file system use the same OSS bucket Cloud Parallel File Storage, you must enable versioning for the OSS bucket to prevent data conflicts when multiple General-purpose CPFS file systems export data to the same source.
   *      - Cross-region OSS data flows are not supported. The OSS bucket must be in the same region as the General-purpose CPFS file system.
   *        > Before you create a data flow, you must add a tag (key: cpfs-dataflow, value: true) to the source OSS bucket so that the General-purpose CPFS data flow can access the data in the bucket. Do not delete or modify this tag while the data flow is in use. Otherwise, the General-purpose CPFS data flow cannot access the data in the bucket.
   * - Usage notes for CPFS for Lingjun.
   *      This section applies to CPFS for Lingjun file systems whose IDs start with `bmcpfs-`.
   *   - Source storage
   *       - Only OSS is supported as the source storage. The source storage (SourceStorage) of a data flow must be an OSS bucket.
   *       - CPFS for Lingjun data flows support encrypted and unencrypted access to OSS. If you select the encrypted (SSL) access method, make sure that encryption in transit is enabled for the OSS bucket.
   *       - If multiple CPFS for Lingjun data flows or multiple data flows of the same CPFS for Lingjun file system use the same OSS bucket as the source storage, you must enable versioning for the OSS bucket to prevent data conflicts when multiple CPFS for Lingjun file systems export data to the same source.
   *       - Cross-region OSS data flows are not supported. The OSS bucket must be in the same region as the CPFS for Lingjun file system.
   *      - CPFS for Lingjun 2.6.0 and later support creating data flows by using cross-account OSS buckets.
   *      - You need to set the account id parameter only when you use a cross-account OSS bucket.
   *      - Before you use a cross-account OSS bucket, you must grant permissions to the account. For more information, see [Authorize cross-account data flows](https://help.aliyun.com/document_detail/2713462.html).
   *        > Before you create a data flow, you must add a tag (key: cpfs-dataflow, value: true) to the source OSS bucket so that the CPFS for Lingjun data flow can access the data in the bucket. Do not delete or modify this tag while the data flow is in use. Otherwise, the CPFS for Lingjun data flow cannot access the data in the bucket.
   *   - Limits of data flows on file systems.
   *     - You cannot rename a non-empty directory in the file system path associated with the data flow. Otherwise, a Permission Denied or Directory Not Empty error is reported.
   *      - Use special characters in directory and file names with caution. Supported characters include uppercase and lowercase letters, digits, exclamation marks (!), hyphens (-), underscores (_), periods (.), asterisks (*), and parentheses (()).
   *     - Ultra-long paths are not supported. The maximum path length supported by a data flow is 1,023 characters.
   *   - Limits on data flow imports.
   *     - When a symbolic link file is imported into CPFS for Lingjun, it is converted into a regular file containing data, and the symbolic link information is lost.
   *     - If an OSS bucket has multiple versions, only the latest version is copied.
   *     - File or subdirectory names longer than 255 bytes are not supported.
   *   - Data flow export limits
   *   - Limits on data flow exports
   *     - After a symlink file is synchronized to OSS, the file pointed to by the symlink is not synchronized. Instead, the symlink file becomes a regular empty object without data.
   *     - Hardlink files are synchronized to OSS only as regular files.
   *     - When socket, device, or pipe files are exported to an OSS bucket, they become regular empty objects without data.
   *     - Directory paths longer than 1,023 characters are not supported.
   * 
   * @param request - CreateDataFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataFlowResponse
   */
  async createDataFlowWithOptions(request: $_model.CreateDataFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDataFlowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoRefreshInterval)) {
      query["AutoRefreshInterval"] = request.autoRefreshInterval;
    }

    if (!$dara.isNull(request.autoRefreshPolicy)) {
      query["AutoRefreshPolicy"] = request.autoRefreshPolicy;
    }

    if (!$dara.isNull(request.autoRefreshs)) {
      query["AutoRefreshs"] = request.autoRefreshs;
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

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.fileSystemPath)) {
      query["FileSystemPath"] = request.fileSystemPath;
    }

    if (!$dara.isNull(request.fsetId)) {
      query["FsetId"] = request.fsetId;
    }

    if (!$dara.isNull(request.sourceSecurityType)) {
      query["SourceSecurityType"] = request.sourceSecurityType;
    }

    if (!$dara.isNull(request.sourceStorage)) {
      query["SourceStorage"] = request.sourceStorage;
    }

    if (!$dara.isNull(request.sourceStoragePath)) {
      query["SourceStoragePath"] = request.sourceStoragePath;
    }

    if (!$dara.isNull(request.throughput)) {
      query["Throughput"] = request.throughput;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataFlow",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDataFlowResponse>(await this.callApi(params, req, runtime), new $_model.CreateDataFlowResponse({}));
  }

  /**
   * Creates a data flow between a General-purpose CPFS or CPFS for Lingjun file system and a source storage.
   * 
   * @remarks
   * - This operation is applicable to the following services:
   * | Service | File system ID format | Minimum version that supports data flows |
   * |---------|-----------------------|------------------------------------------|
   * | **General-purpose CPFS** | Starts with `cpfs-`, such as cpfs-125487**** | 2.2.0 and later |
   * | **CPFS for Lingjun** | Starts with `bmcpfs-`, such as bmcpfs-0015**** | 2.4.0 and later |
   * > : General-purpose CPFS and CPFS for Lingjun share the same set of API operations, but differ in parameter values and supported features. Refer to the corresponding section based on the service you use.
   * - Basic operations
   *     - You can create a data flow only when the General-purpose CPFS or CPFS for Lingjun file system is in the Running state.
   *     - You can create a maximum of **10** data flows for a General-purpose CPFS or CPFS for Lingjun file system.
   *     - Creating a data flow typically takes 2 to 5 minutes. You can call the [DescribeDataFlows](https://help.aliyun.com/document_detail/336901.html) operation to check whether the data flow is created.
   * - Permissions.
   *     When you create a data flow, Cloud Parallel File Storage assumes the `AliyunServiceRoleForNasOssDataflow` and `AliyunServiceRoleForNasEventNotification` service-linked roles to associate the service for the data stream. For more information, see [Service-linked roles for Cloud Parallel File Storage](https://help.aliyun.com/document_detail/185138.html).
   * - Usage notes for General-purpose CPFS.
   *      This section applies to General-purpose CPFS file systems whose IDs start with `cpfs-`.
   *   - Billing
   *     - You are billed for a data flow based on the data flow bandwidth. For more information, see [Billing of General-purpose CPFS](https://help.aliyun.com/document_detail/111858.html).
   *     - If you enable auto-refresh, EventBridge is used to collect object modification events from the source OSS bucket. You are billed for these events. For more information, see [Billing of EventBridge](https://help.aliyun.com/document_detail/163752.html).
   *   - Data flow specifications
   *       - The data flow bandwidth (Throughput) supports three specifications: 600 MB/s, 1200 MB/s, and 1500 MB/s. The data flow bandwidth is the maximum transmission bandwidth that the data flow can achieve when importing or exporting data.
   *     - Creating a data flow consumes one vSwitch IP address used by a General-purpose Cloud Parallel File Storage mount target. Make sure that the vSwitch has sufficient IP addresses.
   *     - Resource check: If you set the DryRun Settings parameter to true, the system checks whether the resources required to create a data flow (data stream) of the specified specification are sufficient.
   *   - Fileset
   *     - The destination of a data flow is a fileset in a General-purpose CPFS file system. A fileset is a new directory tree structure in a General-purpose CPFS file system. It is a small file system within the parent file system and has an independent inode space and management capabilities.
   *     - The fileset must already exist when you create a data flow, and it cannot be nested with other filesets. You can create only one data flow on a fileset, which corresponds to one source storage.
   *     - A fileset can contain a maximum of 1 million files. If the number of files imported from the OSS bucket exceeds this limit, a `no space` error is reported when you create new files.
   *    > If the fileset already contains data, the existing data in the fileset is cleared and replaced with the data synchronized from the OSS bucket after the data flow is created.
   *   - Auto-refresh
   *     - After you configure auto-refresh, when the data in the source storage changes, the changed metadata undergoes automatic synchronization to the General-purpose Cloud Parallel File Storage file system. The changed data is loaded on demand when users access the files, or you can start a data flow node to load the data.
   *     - Auto-refresh relies on EventBridge to collect object modification events from the source OSS bucket. You must first [activate EventBridge](https://help.aliyun.com/document_detail/182246.html).
   *     - The scope of auto-refresh is a prefix, which is specified by the RefreshPath parameter. You can configure a maximum of five auto-refresh folders for a data flow (data stream).
   *     - The auto-refresh interval (AutoRefreshInterval) is the time interval configured in the Settings by General-purpose Cloud Parallel File Storage to check whether data updates exist within the prefix in the source OSS bucket. If data updates exist, an auto-refresh node is started. If the frequency of object modification events in the source OSS bucket exceeds the processing capability of the General-purpose Cloud Parallel File Storage data flow, auto-refresh nodes accumulate, metadata updates are delayed, and the status of the data flow becomes `Misconfigured`. To resolve this issue, you can upgrade the data flow specification or reduce the modification frequency in the OSS bucket.
   *     - When you configure auto-refresh for a prefix in a General-purpose Cloud Parallel File Storage data flow, an event bus is created on the user side, and an event rule is created for the prefix of the source OSS bucket. When an object in the prefix of the source OSS bucket is modified, an OSS event is generated in EventBridge and processed by the General-purpose Cloud Parallel File Storage data flow.
   *      > The event bus and event rule created by General-purpose Cloud Parallel File Storage in EventBridge contain the `Create for cpfs auto refresh` description. You cannot modify or delete the event bus or event rule. Otherwise, auto-refresh cannot remain in a Normal state.
   *   - Source storage
   *      - Only OSS is supported Cloud Parallel File Storage. The source storage (SourceStorage) of a data flow must be an OSS bucket.
   *      - General-purpose CPFS data flows support encrypted and unencrypted access to OSS. If you select the encrypted (SSL) access method, make sure that encryption in transit is enabled for the OSS bucket.
   *      - If multiple General-purpose CPFS data flows or multiple data flows of the same General-purpose CPFS file system use the same OSS bucket Cloud Parallel File Storage, you must enable versioning for the OSS bucket to prevent data conflicts when multiple General-purpose CPFS file systems export data to the same source.
   *      - Cross-region OSS data flows are not supported. The OSS bucket must be in the same region as the General-purpose CPFS file system.
   *        > Before you create a data flow, you must add a tag (key: cpfs-dataflow, value: true) to the source OSS bucket so that the General-purpose CPFS data flow can access the data in the bucket. Do not delete or modify this tag while the data flow is in use. Otherwise, the General-purpose CPFS data flow cannot access the data in the bucket.
   * - Usage notes for CPFS for Lingjun.
   *      This section applies to CPFS for Lingjun file systems whose IDs start with `bmcpfs-`.
   *   - Source storage
   *       - Only OSS is supported as the source storage. The source storage (SourceStorage) of a data flow must be an OSS bucket.
   *       - CPFS for Lingjun data flows support encrypted and unencrypted access to OSS. If you select the encrypted (SSL) access method, make sure that encryption in transit is enabled for the OSS bucket.
   *       - If multiple CPFS for Lingjun data flows or multiple data flows of the same CPFS for Lingjun file system use the same OSS bucket as the source storage, you must enable versioning for the OSS bucket to prevent data conflicts when multiple CPFS for Lingjun file systems export data to the same source.
   *       - Cross-region OSS data flows are not supported. The OSS bucket must be in the same region as the CPFS for Lingjun file system.
   *      - CPFS for Lingjun 2.6.0 and later support creating data flows by using cross-account OSS buckets.
   *      - You need to set the account id parameter only when you use a cross-account OSS bucket.
   *      - Before you use a cross-account OSS bucket, you must grant permissions to the account. For more information, see [Authorize cross-account data flows](https://help.aliyun.com/document_detail/2713462.html).
   *        > Before you create a data flow, you must add a tag (key: cpfs-dataflow, value: true) to the source OSS bucket so that the CPFS for Lingjun data flow can access the data in the bucket. Do not delete or modify this tag while the data flow is in use. Otherwise, the CPFS for Lingjun data flow cannot access the data in the bucket.
   *   - Limits of data flows on file systems.
   *     - You cannot rename a non-empty directory in the file system path associated with the data flow. Otherwise, a Permission Denied or Directory Not Empty error is reported.
   *      - Use special characters in directory and file names with caution. Supported characters include uppercase and lowercase letters, digits, exclamation marks (!), hyphens (-), underscores (_), periods (.), asterisks (*), and parentheses (()).
   *     - Ultra-long paths are not supported. The maximum path length supported by a data flow is 1,023 characters.
   *   - Limits on data flow imports.
   *     - When a symbolic link file is imported into CPFS for Lingjun, it is converted into a regular file containing data, and the symbolic link information is lost.
   *     - If an OSS bucket has multiple versions, only the latest version is copied.
   *     - File or subdirectory names longer than 255 bytes are not supported.
   *   - Data flow export limits
   *   - Limits on data flow exports
   *     - After a symlink file is synchronized to OSS, the file pointed to by the symlink is not synchronized. Instead, the symlink file becomes a regular empty object without data.
   *     - Hardlink files are synchronized to OSS only as regular files.
   *     - When socket, device, or pipe files are exported to an OSS bucket, they become regular empty objects without data.
   *     - Directory paths longer than 1,023 characters are not supported.
   * 
   * @param request - CreateDataFlowRequest
   * @returns CreateDataFlowResponse
   */
  async createDataFlow(request: $_model.CreateDataFlowRequest): Promise<$_model.CreateDataFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataFlowWithOptions(request, runtime);
  }

  /**
   * Creates a subtask for a data flow streaming task.
   * 
   * @remarks
   * *Before you begin**
   * Before you call this operation, create resources in the following order and make sure that the resources at each level are in the required state:
   * 1. Create a file system: Create a CPFS for Lingjun file system in the console.
   *    - State requirement: The file system is in the Running state.
   * 2. Create a data flow: Call [CreateDataFlow](https://www.alibabacloud.com/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-createdataflow-cpfs) to create a data flow.
   *    - State requirement: The data flow is in the Running state.
   * 3. Create a data flow task: Call [CreateDataFlowTask](https://www.alibabacloud.com/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-createdataflowtask-cpfs) to create a streaming import (StreamImport) or streaming export (StreamExport) task.
   *    - State requirement: The data flow task is in the Executing state.
   * **Operation description**
   * - Only CPFS for Lingjun 2.6.0 and later support this operation. You can view the version information on the file system details page in the console.
   * - You can create subtasks only for data flow streaming tasks that are in the Executing state.
   * - Data flow streaming tasks are executed asynchronously. You can call [DescribeDataFlowSubTasks](https://www.alibabacloud.com/help/en/cpfs/bmcpfs/developer-reference/api-nas-2017-06-26-describedataflowsubtasks-bmcpfs) to query the execution status of a streaming task.
   * - When the data flow task type is a streaming task, the Executing state only indicates that you can create streaming import or streaming export tasks. It does not indicate that the import or export task is running.
   * 
   * @param request - CreateDataFlowSubTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataFlowSubTaskResponse
   */
  async createDataFlowSubTaskWithOptions(request: $_model.CreateDataFlowSubTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDataFlowSubTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.condition)) {
      query["Condition"] = request.condition;
    }

    if (!$dara.isNull(request.dataFlowId)) {
      query["DataFlowId"] = request.dataFlowId;
    }

    if (!$dara.isNull(request.dataFlowTaskId)) {
      query["DataFlowTaskId"] = request.dataFlowTaskId;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.dstFilePath)) {
      query["DstFilePath"] = request.dstFilePath;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.srcFilePath)) {
      query["SrcFilePath"] = request.srcFilePath;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataFlowSubTask",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDataFlowSubTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateDataFlowSubTaskResponse({}));
  }

  /**
   * Creates a subtask for a data flow streaming task.
   * 
   * @remarks
   * *Before you begin**
   * Before you call this operation, create resources in the following order and make sure that the resources at each level are in the required state:
   * 1. Create a file system: Create a CPFS for Lingjun file system in the console.
   *    - State requirement: The file system is in the Running state.
   * 2. Create a data flow: Call [CreateDataFlow](https://www.alibabacloud.com/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-createdataflow-cpfs) to create a data flow.
   *    - State requirement: The data flow is in the Running state.
   * 3. Create a data flow task: Call [CreateDataFlowTask](https://www.alibabacloud.com/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-createdataflowtask-cpfs) to create a streaming import (StreamImport) or streaming export (StreamExport) task.
   *    - State requirement: The data flow task is in the Executing state.
   * **Operation description**
   * - Only CPFS for Lingjun 2.6.0 and later support this operation. You can view the version information on the file system details page in the console.
   * - You can create subtasks only for data flow streaming tasks that are in the Executing state.
   * - Data flow streaming tasks are executed asynchronously. You can call [DescribeDataFlowSubTasks](https://www.alibabacloud.com/help/en/cpfs/bmcpfs/developer-reference/api-nas-2017-06-26-describedataflowsubtasks-bmcpfs) to query the execution status of a streaming task.
   * - When the data flow task type is a streaming task, the Executing state only indicates that you can create streaming import or streaming export tasks. It does not indicate that the import or export task is running.
   * 
   * @param request - CreateDataFlowSubTaskRequest
   * @returns CreateDataFlowSubTaskResponse
   */
  async createDataFlowSubTask(request: $_model.CreateDataFlowSubTaskRequest): Promise<$_model.CreateDataFlowSubTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataFlowSubTaskWithOptions(request, runtime);
  }

  /**
   * Creates a data flow task.
   * 
   * @remarks
   * - CPFS usage notes
   *   - Only CPFS 2.2.0 and later support data flows. You can view the version information on the file system details page in the console.
   *   - Data flow tasks are executed asynchronously. You can call the [DescribeDataFlowTasks](https://help.aliyun.com/document_detail/2402275.html) operation to query the task execution status. The time required to complete a task depends on the amount of data to be imported or exported. For a large amount of data, split the data into multiple tasks.
   *   - You can create data flow tasks only for data flows in the Running state.
   *   - When you manually execute a data flow task, the automatic data update task of the data flow is interrupted and queued.
   *   - When you create an export task, ensure that the total length of the absolute paths of the files to be exported from CPFS does not exceed 1,023 characters.
   * - CPFS for Lingjun usage notes
   *   - Only CPFS for Lingjun 2.4.0 and later support data flows. You can view the version information on the file system details page in the console.
   *   - Data flow tasks are executed asynchronously. You can call the [DescribeDataFlowTasks](https://help.aliyun.com/document_detail/2402275.html) operation to query the task execution status. The time required to complete a task depends on the amount of data to be imported or exported. For a large amount of data, split the data into multiple tasks.
   *   - You can create data flow tasks only for data flows in the Running state.
   *   - When you create an export task, ensure that the total length of the absolute paths of the files to be exported from CPFS for Lingjun does not exceed 1,023 characters.
   *   - CPFS for Lingjun supports batch tasks and streaming tasks. For more information, see [Task types](https://help.aliyun.com/document_detail/2845429.html).
   * 
   * @param request - CreateDataFlowTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataFlowTaskResponse
   */
  async createDataFlowTaskWithOptions(request: $_model.CreateDataFlowTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDataFlowTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.conflictPolicy)) {
      query["ConflictPolicy"] = request.conflictPolicy;
    }

    if (!$dara.isNull(request.createDirIfNotExist)) {
      query["CreateDirIfNotExist"] = request.createDirIfNotExist;
    }

    if (!$dara.isNull(request.dataFlowId)) {
      query["DataFlowId"] = request.dataFlowId;
    }

    if (!$dara.isNull(request.dataType)) {
      query["DataType"] = request.dataType;
    }

    if (!$dara.isNull(request.directory)) {
      query["Directory"] = request.directory;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.dstDirectory)) {
      query["DstDirectory"] = request.dstDirectory;
    }

    if (!$dara.isNull(request.entryList)) {
      query["EntryList"] = request.entryList;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.includes)) {
      query["Includes"] = request.includes;
    }

    if (!$dara.isNull(request.srcTaskId)) {
      query["SrcTaskId"] = request.srcTaskId;
    }

    if (!$dara.isNull(request.taskAction)) {
      query["TaskAction"] = request.taskAction;
    }

    if (!$dara.isNull(request.transferFileListPath)) {
      query["TransferFileListPath"] = request.transferFileListPath;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataFlowTask",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDataFlowTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateDataFlowTaskResponse({}));
  }

  /**
   * Creates a data flow task.
   * 
   * @remarks
   * - CPFS usage notes
   *   - Only CPFS 2.2.0 and later support data flows. You can view the version information on the file system details page in the console.
   *   - Data flow tasks are executed asynchronously. You can call the [DescribeDataFlowTasks](https://help.aliyun.com/document_detail/2402275.html) operation to query the task execution status. The time required to complete a task depends on the amount of data to be imported or exported. For a large amount of data, split the data into multiple tasks.
   *   - You can create data flow tasks only for data flows in the Running state.
   *   - When you manually execute a data flow task, the automatic data update task of the data flow is interrupted and queued.
   *   - When you create an export task, ensure that the total length of the absolute paths of the files to be exported from CPFS does not exceed 1,023 characters.
   * - CPFS for Lingjun usage notes
   *   - Only CPFS for Lingjun 2.4.0 and later support data flows. You can view the version information on the file system details page in the console.
   *   - Data flow tasks are executed asynchronously. You can call the [DescribeDataFlowTasks](https://help.aliyun.com/document_detail/2402275.html) operation to query the task execution status. The time required to complete a task depends on the amount of data to be imported or exported. For a large amount of data, split the data into multiple tasks.
   *   - You can create data flow tasks only for data flows in the Running state.
   *   - When you create an export task, ensure that the total length of the absolute paths of the files to be exported from CPFS for Lingjun does not exceed 1,023 characters.
   *   - CPFS for Lingjun supports batch tasks and streaming tasks. For more information, see [Task types](https://help.aliyun.com/document_detail/2845429.html).
   * 
   * @param request - CreateDataFlowTaskRequest
   * @returns CreateDataFlowTaskResponse
   */
  async createDataFlowTask(request: $_model.CreateDataFlowTaskRequest): Promise<$_model.CreateDataFlowTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataFlowTaskWithOptions(request, runtime);
  }

  /**
   * Creates a directory in a file system.
   * 
   * @remarks
   * Only General-purpose NAS NFS protocol file systems support this feature.
   * 
   * @param request - CreateDirRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDirResponse
   */
  async createDirWithOptions(request: $_model.CreateDirRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDirResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.ownerGroupId)) {
      query["OwnerGroupId"] = request.ownerGroupId;
    }

    if (!$dara.isNull(request.ownerUserId)) {
      query["OwnerUserId"] = request.ownerUserId;
    }

    if (!$dara.isNull(request.permission)) {
      query["Permission"] = request.permission;
    }

    if (!$dara.isNull(request.recursion)) {
      query["Recursion"] = request.recursion;
    }

    if (!$dara.isNull(request.rootDirectory)) {
      query["RootDirectory"] = request.rootDirectory;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDir",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDirResponse>(await this.callApi(params, req, runtime), new $_model.CreateDirResponse({}));
  }

  /**
   * Creates a directory in a file system.
   * 
   * @remarks
   * Only General-purpose NAS NFS protocol file systems support this feature.
   * 
   * @param request - CreateDirRequest
   * @returns CreateDirResponse
   */
  async createDir(request: $_model.CreateDirRequest): Promise<$_model.CreateDirResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDirWithOptions(request, runtime);
  }

  /**
   * Creates a directory or file.
   * 
   * @remarks
   * - This operation is available only to specific users.
   * - Only General-purpose NAS file systems that use the SMB Protocol Type and have access control enabled are supported. Alibaba Cloud Key Management Service (KMS) must also be activated.
   * ## Prerequisites
   * Before calling this API to create a file, complete the following four steps:
   * 1. **Create an SMB General-purpose NAS file system**: Call the [CreateFileSystem](https://www.alibabacloud.com/help/en/nas/developer-reference/api-nas-2017-06-26-createfilesystem) operation with ProtocolType set to SMB to create a General-purpose NAS file system that supports the SMB protocol.
   * 2. **Activate KMS**: Activate KMS by using one of the following methods:
   *    - Call the Kms.OpenKmsService API operation.
   *    - Go to the [console activation page](https://common-buy.aliyun.com/?commodityCode=kms#/open).
   * 3. **Enable SMB ACL**: Call the [EnableSmbAcl](https://www.alibabacloud.com/help/en/nas/developer-reference/api-nas-2017-06-26-enablesmbacl) operation to enable the SMB ACL feature. Recommended configuration:
   *    - AuthMethod=NTLM
   *    - AuthCenter=EDS
   *    - This configuration does not require an AD domain Keytab and is easier to use.
   * 4. **Call CreateFile**: After completing the preceding steps, call this operation to create a directory or file.
   * 
   * @param request - CreateFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFileResponse
   */
  async createFileWithOptions(request: $_model.CreateFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.owner)) {
      query["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.ownerAccessInheritable)) {
      query["OwnerAccessInheritable"] = request.ownerAccessInheritable;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFile",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFileResponse>(await this.callApi(params, req, runtime), new $_model.CreateFileResponse({}));
  }

  /**
   * Creates a directory or file.
   * 
   * @remarks
   * - This operation is available only to specific users.
   * - Only General-purpose NAS file systems that use the SMB Protocol Type and have access control enabled are supported. Alibaba Cloud Key Management Service (KMS) must also be activated.
   * ## Prerequisites
   * Before calling this API to create a file, complete the following four steps:
   * 1. **Create an SMB General-purpose NAS file system**: Call the [CreateFileSystem](https://www.alibabacloud.com/help/en/nas/developer-reference/api-nas-2017-06-26-createfilesystem) operation with ProtocolType set to SMB to create a General-purpose NAS file system that supports the SMB protocol.
   * 2. **Activate KMS**: Activate KMS by using one of the following methods:
   *    - Call the Kms.OpenKmsService API operation.
   *    - Go to the [console activation page](https://common-buy.aliyun.com/?commodityCode=kms#/open).
   * 3. **Enable SMB ACL**: Call the [EnableSmbAcl](https://www.alibabacloud.com/help/en/nas/developer-reference/api-nas-2017-06-26-enablesmbacl) operation to enable the SMB ACL feature. Recommended configuration:
   *    - AuthMethod=NTLM
   *    - AuthCenter=EDS
   *    - This configuration does not require an AD domain Keytab and is easier to use.
   * 4. **Call CreateFile**: After completing the preceding steps, call this operation to create a directory or file.
   * 
   * @param request - CreateFileRequest
   * @returns CreateFileResponse
   */
  async createFile(request: $_model.CreateFileRequest): Promise<$_model.CreateFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFileWithOptions(request, runtime);
  }

  /**
   * Creates a file system.
   * 
   * @remarks
   * <props="china">
   * - Before calling this operation, ensure that you fully understand the billing methods and pricing of File Storage NAS. For more information, see [Billing overview](https://help.aliyun.com/document_detail/178365.html) and [Pricing](https://www.aliyun.com/price/product?#/nas/).
   * - To create a file system, you must pass real-name verification. For more information, see [Real-name verification for accounts](https://help.aliyun.com/document_detail/48263.html).
   * - When you invoke this operation, the service-linked role required for NAS is automatically created. For more information, see [Manage the service-linked role for NAS](https://help.aliyun.com/document_detail/208530.html).
   * <props="intl">
   * - Before calling this operation, ensure that you fully understand the billing methods and pricing of File Storage NAS. For more information, see [Billing overview](https://help.aliyun.com/document_detail/178365.html) and [Pricing](https://www.alibabacloud.com/zh/product/nas/pricing?_p_lc=1&spm=a2796.7960336.8215766810.64.414bb91aiZQiRG&spm=a2c4g.11186623.help-menu-27516.d_5_1_4_2_0.572a1880hEiKCk).
   * - To create a file system, you must pass real-name verification. For more information, see [Real-name verification for accounts](https://help.aliyun.com/document_detail/48263.html).
   * - When you invoke this operation, the service-linked role required for NAS is automatically created. For more information, see [Manage the service-linked role for NAS](https://help.aliyun.com/document_detail/208530.html).
   * 
   * @param request - CreateFileSystemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFileSystemResponse
   */
  async createFileSystemWithOptions(request: $_model.CreateFileSystemRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFileSystemResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.capacity)) {
      query["Capacity"] = request.capacity;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
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

    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.encryptType)) {
      query["EncryptType"] = request.encryptType;
    }

    if (!$dara.isNull(request.fileSystemType)) {
      query["FileSystemType"] = request.fileSystemType;
    }

    if (!$dara.isNull(request.hpnZone)) {
      query["HpnZone"] = request.hpnZone;
    }

    if (!$dara.isNull(request.kmsKeyId)) {
      query["KmsKeyId"] = request.kmsKeyId;
    }

    if (!$dara.isNull(request.protocolType)) {
      query["ProtocolType"] = request.protocolType;
    }

    if (!$dara.isNull(request.redundancyType)) {
      query["RedundancyType"] = request.redundancyType;
    }

    if (!$dara.isNull(request.redundancyVSwitchIds)) {
      query["RedundancyVSwitchIds"] = request.redundancyVSwitchIds;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    if (!$dara.isNull(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
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
      action: "CreateFileSystem",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFileSystemResponse>(await this.callApi(params, req, runtime), new $_model.CreateFileSystemResponse({}));
  }

  /**
   * Creates a file system.
   * 
   * @remarks
   * <props="china">
   * - Before calling this operation, ensure that you fully understand the billing methods and pricing of File Storage NAS. For more information, see [Billing overview](https://help.aliyun.com/document_detail/178365.html) and [Pricing](https://www.aliyun.com/price/product?#/nas/).
   * - To create a file system, you must pass real-name verification. For more information, see [Real-name verification for accounts](https://help.aliyun.com/document_detail/48263.html).
   * - When you invoke this operation, the service-linked role required for NAS is automatically created. For more information, see [Manage the service-linked role for NAS](https://help.aliyun.com/document_detail/208530.html).
   * <props="intl">
   * - Before calling this operation, ensure that you fully understand the billing methods and pricing of File Storage NAS. For more information, see [Billing overview](https://help.aliyun.com/document_detail/178365.html) and [Pricing](https://www.alibabacloud.com/zh/product/nas/pricing?_p_lc=1&spm=a2796.7960336.8215766810.64.414bb91aiZQiRG&spm=a2c4g.11186623.help-menu-27516.d_5_1_4_2_0.572a1880hEiKCk).
   * - To create a file system, you must pass real-name verification. For more information, see [Real-name verification for accounts](https://help.aliyun.com/document_detail/48263.html).
   * - When you invoke this operation, the service-linked role required for NAS is automatically created. For more information, see [Manage the service-linked role for NAS](https://help.aliyun.com/document_detail/208530.html).
   * 
   * @param request - CreateFileSystemRequest
   * @returns CreateFileSystemResponse
   */
  async createFileSystem(request: $_model.CreateFileSystemRequest): Promise<$_model.CreateFileSystemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFileSystemWithOptions(request, runtime);
  }

  /**
   * Creates a fileset.
   * 
   * @remarks
   * - Usage notes for CPFS.
   *   - Only CPFS 2.2.0 and later support fileset creation. You can view the version information on the file system details page in the console.
   *   - A maximum of 10 filesets can be created for a single CPFS file system.
   *   - The parent directory must be an existing directory.
   *   - The maximum depth of a fileset path is 8 levels, with the root directory / as level 0. For example, a fileset path of /test/aaa/ccc/ has a depth of 3 levels.
   *   - Nesting filesets within a fileset is not supported. If a parent directory is already specified as a fileset, its subdirectories cannot be specified as filesets.
   *   - A fileset supports a maximum of 1,000,000 files. If the number of files exceeds this limit, adding new files returns a `no space` error message.
   * - Usage notes for CPFS for Lingjun
   *   - Only CPFS for Lingjun 2.7.0 and later support fileset creation. You can view the version information on the file system details page in the console.
   *   - A maximum of 500 filesets can be created for a single CPFS file system.
   *   - The fileset path must be a new path and cannot be an existing path. Renaming a fileset path is not supported, and the path cannot be a symbolic link.
   *   - The maximum depth of a fileset path is 8 levels, with the root directory / as level 0. For example, a fileset path of /test/aaa/ccc/ has a depth of 3 levels.
   *   - If the fileset path contains multiple directory levels, the parent directory must be an existing directory.
   *   - Nesting filesets within a fileset is not supported. If a parent directory is already specified as a fileset, its subdirectories cannot be specified as filesets. Only one quota is supported for each fileset path.
   *   - The minimum capacity quota for a fileset is 10 GiB, and the capacity can be increased in increments of 1 GiB.
   *   - A fileset supports a maximum of 10,000,000,000 files or directories, with a minimum of 10,000 and an increment of 1.
   *   - When you modify a directory quota, the quota capacity or file count must be greater than the used capacity or file count.
   *   - Quota statistics have a 15-minute delay. The current actual usage takes effect after 15 minutes.
   * 
   * @param request - CreateFilesetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFilesetResponse
   */
  async createFilesetWithOptions(request: $_model.CreateFilesetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFilesetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.deletionProtection)) {
      query["DeletionProtection"] = request.deletionProtection;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.fileSystemPath)) {
      query["FileSystemPath"] = request.fileSystemPath;
    }

    if (!$dara.isNull(request.quota)) {
      query["Quota"] = request.quota;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFileset",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFilesetResponse>(await this.callApi(params, req, runtime), new $_model.CreateFilesetResponse({}));
  }

  /**
   * Creates a fileset.
   * 
   * @remarks
   * - Usage notes for CPFS.
   *   - Only CPFS 2.2.0 and later support fileset creation. You can view the version information on the file system details page in the console.
   *   - A maximum of 10 filesets can be created for a single CPFS file system.
   *   - The parent directory must be an existing directory.
   *   - The maximum depth of a fileset path is 8 levels, with the root directory / as level 0. For example, a fileset path of /test/aaa/ccc/ has a depth of 3 levels.
   *   - Nesting filesets within a fileset is not supported. If a parent directory is already specified as a fileset, its subdirectories cannot be specified as filesets.
   *   - A fileset supports a maximum of 1,000,000 files. If the number of files exceeds this limit, adding new files returns a `no space` error message.
   * - Usage notes for CPFS for Lingjun
   *   - Only CPFS for Lingjun 2.7.0 and later support fileset creation. You can view the version information on the file system details page in the console.
   *   - A maximum of 500 filesets can be created for a single CPFS file system.
   *   - The fileset path must be a new path and cannot be an existing path. Renaming a fileset path is not supported, and the path cannot be a symbolic link.
   *   - The maximum depth of a fileset path is 8 levels, with the root directory / as level 0. For example, a fileset path of /test/aaa/ccc/ has a depth of 3 levels.
   *   - If the fileset path contains multiple directory levels, the parent directory must be an existing directory.
   *   - Nesting filesets within a fileset is not supported. If a parent directory is already specified as a fileset, its subdirectories cannot be specified as filesets. Only one quota is supported for each fileset path.
   *   - The minimum capacity quota for a fileset is 10 GiB, and the capacity can be increased in increments of 1 GiB.
   *   - A fileset supports a maximum of 10,000,000,000 files or directories, with a minimum of 10,000 and an increment of 1.
   *   - When you modify a directory quota, the quota capacity or file count must be greater than the used capacity or file count.
   *   - Quota statistics have a 15-minute delay. The current actual usage takes effect after 15 minutes.
   * 
   * @param request - CreateFilesetRequest
   * @returns CreateFilesetResponse
   */
  async createFileset(request: $_model.CreateFilesetRequest): Promise<$_model.CreateFilesetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFilesetWithOptions(request, runtime);
  }

  /**
   * Adds an LDAP configuration.
   * 
   * @deprecated OpenAPI CreateLDAPConfig is deprecated
   * 
   * @param request - CreateLDAPConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLDAPConfigResponse
   */
  async createLDAPConfigWithOptions(request: $_model.CreateLDAPConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLDAPConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bindDN)) {
      query["BindDN"] = request.bindDN;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.searchBase)) {
      query["SearchBase"] = request.searchBase;
    }

    if (!$dara.isNull(request.URI)) {
      query["URI"] = request.URI;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLDAPConfig",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLDAPConfigResponse>(await this.callApi(params, req, runtime), new $_model.CreateLDAPConfigResponse({}));
  }

  /**
   * Adds an LDAP configuration.
   * 
   * @deprecated OpenAPI CreateLDAPConfig is deprecated
   * 
   * @param request - CreateLDAPConfigRequest
   * @returns CreateLDAPConfigResponse
   */
  // Deprecated
  async createLDAPConfig(request: $_model.CreateLDAPConfigRequest): Promise<$_model.CreateLDAPConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLDAPConfigWithOptions(request, runtime);
  }

  /**
   * Creates a lifecycle management policy.
   * 
   * @remarks
   * - Only General-purpose NAS file systems and CPFS for Lingjun support the creation of lifecycle management policies.
   * - You can create up to 10 Auto-type and 100 OnDemand-type lifecycle management policies for each CPFS for Lingjun file system.
   * - You can create up to 20 lifecycle management policies for General-purpose NAS in each region.
   * 
   * @param request - CreateLifecyclePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLifecyclePolicyResponse
   */
  async createLifecyclePolicyWithOptions(request: $_model.CreateLifecyclePolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLifecyclePolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deleteRules)) {
      query["DeleteRules"] = request.deleteRules;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.lifecyclePolicyName)) {
      query["LifecyclePolicyName"] = request.lifecyclePolicyName;
    }

    if (!$dara.isNull(request.lifecyclePolicyType)) {
      query["LifecyclePolicyType"] = request.lifecyclePolicyType;
    }

    if (!$dara.isNull(request.lifecycleRuleName)) {
      query["LifecycleRuleName"] = request.lifecycleRuleName;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    if (!$dara.isNull(request.paths)) {
      query["Paths"] = request.paths;
    }

    if (!$dara.isNull(request.retrieveRules)) {
      query["RetrieveRules"] = request.retrieveRules;
    }

    if (!$dara.isNull(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    if (!$dara.isNull(request.transitRules)) {
      query["TransitRules"] = request.transitRules;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLifecyclePolicy",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLifecyclePolicyResponse>(await this.callApi(params, req, runtime), new $_model.CreateLifecyclePolicyResponse({}));
  }

  /**
   * Creates a lifecycle management policy.
   * 
   * @remarks
   * - Only General-purpose NAS file systems and CPFS for Lingjun support the creation of lifecycle management policies.
   * - You can create up to 10 Auto-type and 100 OnDemand-type lifecycle management policies for each CPFS for Lingjun file system.
   * - You can create up to 20 lifecycle management policies for General-purpose NAS in each region.
   * 
   * @param request - CreateLifecyclePolicyRequest
   * @returns CreateLifecyclePolicyResponse
   */
  async createLifecyclePolicy(request: $_model.CreateLifecyclePolicyRequest): Promise<$_model.CreateLifecyclePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLifecyclePolicyWithOptions(request, runtime);
  }

  /**
   * Creates a data retrieval task.
   * 
   * @remarks
   * - Only General-purpose NAS file systems support this feature.
   * - Each Alibaba Cloud account can have up to 20 running data retrieval tasks in the same region.
   * 
   * @param request - CreateLifecycleRetrieveJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLifecycleRetrieveJobResponse
   */
  async createLifecycleRetrieveJobWithOptions(request: $_model.CreateLifecycleRetrieveJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLifecycleRetrieveJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.paths)) {
      query["Paths"] = request.paths;
    }

    if (!$dara.isNull(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLifecycleRetrieveJob",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLifecycleRetrieveJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateLifecycleRetrieveJobResponse({}));
  }

  /**
   * Creates a data retrieval task.
   * 
   * @remarks
   * - Only General-purpose NAS file systems support this feature.
   * - Each Alibaba Cloud account can have up to 20 running data retrieval tasks in the same region.
   * 
   * @param request - CreateLifecycleRetrieveJobRequest
   * @returns CreateLifecycleRetrieveJobResponse
   */
  async createLifecycleRetrieveJob(request: $_model.CreateLifecycleRetrieveJobRequest): Promise<$_model.CreateLifecycleRetrieveJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLifecycleRetrieveJobWithOptions(request, runtime);
  }

  /**
   * Delivers system logs of a General-purpose NAS file system to log analysis.
   * 
   * @param request - CreateLogAnalysisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLogAnalysisResponse
   */
  async createLogAnalysisWithOptions(request: $_model.CreateLogAnalysisRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLogAnalysisResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLogAnalysis",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLogAnalysisResponse>(await this.callApi(params, req, runtime), new $_model.CreateLogAnalysisResponse({}));
  }

  /**
   * Delivers system logs of a General-purpose NAS file system to log analysis.
   * 
   * @param request - CreateLogAnalysisRequest
   * @returns CreateLogAnalysisResponse
   */
  async createLogAnalysis(request: $_model.CreateLogAnalysisRequest): Promise<$_model.CreateLogAnalysisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLogAnalysisWithOptions(request, runtime);
  }

  /**
   * Creates a mount target.
   * 
   * @remarks
   * - When you call the CreateMountTarget operation to create a mount target, some resources are generated asynchronously. After the CreateMountTarget operation succeeds, call the DescribeMountTargets operation to query the mount target status. Mount the file system only after the mount target status changes to **Active**. Otherwise, the mount operation may fail.
   * - Calling this operation triggers the automatic creation of the service-linked role required for the operation. For more information, see [Manage the service-linked role for NAS](https://help.aliyun.com/document_detail/208530.html).
   * 
   * @param request - CreateMountTargetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMountTargetResponse
   */
  async createMountTargetWithOptions(request: $_model.CreateMountTargetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMountTargetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessGroupName)) {
      query["AccessGroupName"] = request.accessGroupName;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.enableIpv6)) {
      query["EnableIpv6"] = request.enableIpv6;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.networkType)) {
      query["NetworkType"] = request.networkType;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
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
      action: "CreateMountTarget",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMountTargetResponse>(await this.callApi(params, req, runtime), new $_model.CreateMountTargetResponse({}));
  }

  /**
   * Creates a mount target.
   * 
   * @remarks
   * - When you call the CreateMountTarget operation to create a mount target, some resources are generated asynchronously. After the CreateMountTarget operation succeeds, call the DescribeMountTargets operation to query the mount target status. Mount the file system only after the mount target status changes to **Active**. Otherwise, the mount operation may fail.
   * - Calling this operation triggers the automatic creation of the service-linked role required for the operation. For more information, see [Manage the service-linked role for NAS](https://help.aliyun.com/document_detail/208530.html).
   * 
   * @param request - CreateMountTargetRequest
   * @returns CreateMountTargetResponse
   */
  async createMountTarget(request: $_model.CreateMountTargetRequest): Promise<$_model.CreateMountTargetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMountTargetWithOptions(request, runtime);
  }

  /**
   * Creates an export directory for a protocol service.
   * 
   * @remarks
   * -  This operation applies only to Cloud Parallel File Storage (CPFS) file systems.
   * -  Before you begin
   *   
   *    The target CPFS file system must be in the Running state, and a protocol service must have been created.
   * - Other information
   *     - The VPC CIDR block of the protocol service export must not overlap with the VPC CIDR block of the file system.
   *     - The VPC CIDR blocks of multiple exports on the same protocol service must not overlap with each other.
   *     - You can create up to 10 export directories for a single protocol service.
   *     - Creating a protocol service export directory consumes IP addresses from the specified vSwitch (up to 32 IP addresses). Make sure that the target vSwitch has sufficient IP address resources.
   * 
   * @param request - CreateProtocolMountTargetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProtocolMountTargetResponse
   */
  async createProtocolMountTargetWithOptions(request: $_model.CreateProtocolMountTargetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateProtocolMountTargetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessGroupName)) {
      query["AccessGroupName"] = request.accessGroupName;
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

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.fsetId)) {
      query["FsetId"] = request.fsetId;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    if (!$dara.isNull(request.protocolServiceId)) {
      query["ProtocolServiceId"] = request.protocolServiceId;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
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
      action: "CreateProtocolMountTarget",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateProtocolMountTargetResponse>(await this.callApi(params, req, runtime), new $_model.CreateProtocolMountTargetResponse({}));
  }

  /**
   * Creates an export directory for a protocol service.
   * 
   * @remarks
   * -  This operation applies only to Cloud Parallel File Storage (CPFS) file systems.
   * -  Before you begin
   *   
   *    The target CPFS file system must be in the Running state, and a protocol service must have been created.
   * - Other information
   *     - The VPC CIDR block of the protocol service export must not overlap with the VPC CIDR block of the file system.
   *     - The VPC CIDR blocks of multiple exports on the same protocol service must not overlap with each other.
   *     - You can create up to 10 export directories for a single protocol service.
   *     - Creating a protocol service export directory consumes IP addresses from the specified vSwitch (up to 32 IP addresses). Make sure that the target vSwitch has sufficient IP address resources.
   * 
   * @param request - CreateProtocolMountTargetRequest
   * @returns CreateProtocolMountTargetResponse
   */
  async createProtocolMountTarget(request: $_model.CreateProtocolMountTargetRequest): Promise<$_model.CreateProtocolMountTargetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createProtocolMountTargetWithOptions(request, runtime);
  }

  /**
   * Creates a protocol service for a Cloud Parallel File Storage (CPFS) file system. The creation process takes approximately 5 to 10 minutes.
   * 
   * @remarks
   * - This operation applies only to CPFS file systems.
   * -  Only CPFS 2.3.0 and later support protocol services. You can call the [DescribeFileSystems](https://help.aliyun.com/document_detail/163314.html) operation to query the version of a file system.
   * - Protocol service specifications.
   *   Protocol services include two Protocol Types: General and Cache. Compared with the General type, the Cache type provides hot spot data caching. When the cache is hit, the bandwidth of the Cache type protocol service can exceed the bandwidth of the CPFS file system and reach the maximum bandwidth configured for the protocol service.
   *   
   *     -   General: Provides NFS protocol access and [folder-level mount targets](https://help.aliyun.com/document_detail/427175.html) for CPFS. You do not need to configure a POSIX client cluster management. This feature is free of charge.
   *     -  Cache: Provides server-side in-memory caching based on the LRU policy on top of the General type. When data is cached in memory, CPFS can provide higher internal network bandwidth. The Cache type protocol service is available in two specifications: Cache L1 and Cache L2, which differ in internal network bandwidth and memory cache size.
   *      >  The Cache type protocol service is a paid service and is in invitational preview. For information about the billing of the Cache type protocol service, see [Billable items](https://help.aliyun.com/document_detail/111858.html). If you have any feedback or questions, join the DingTalk user group (group ID: 31045006299) to communicate with CPFS engineers.
   * - Protocol type.
   *   Only NFSv3 is supported.
   * - Before you begin.
   *   The CPFS file system must be created and in the Running state.
   * - Other information.
   *     - Only one protocol service can be created for each CPFS file system.
   *     - Creating a protocol service consumes IP addresses on the specified vSwitch (up to 32 IP addresses). Make sure that the vSwitch has sufficient IP address resources.
   * 
   * @param request - CreateProtocolServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProtocolServiceResponse
   */
  async createProtocolServiceWithOptions(request: $_model.CreateProtocolServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateProtocolServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.protocolSpec)) {
      query["ProtocolSpec"] = request.protocolSpec;
    }

    if (!$dara.isNull(request.protocolType)) {
      query["ProtocolType"] = request.protocolType;
    }

    if (!$dara.isNull(request.throughput)) {
      query["Throughput"] = request.throughput;
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
      action: "CreateProtocolService",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateProtocolServiceResponse>(await this.callApi(params, req, runtime), new $_model.CreateProtocolServiceResponse({}));
  }

  /**
   * Creates a protocol service for a Cloud Parallel File Storage (CPFS) file system. The creation process takes approximately 5 to 10 minutes.
   * 
   * @remarks
   * - This operation applies only to CPFS file systems.
   * -  Only CPFS 2.3.0 and later support protocol services. You can call the [DescribeFileSystems](https://help.aliyun.com/document_detail/163314.html) operation to query the version of a file system.
   * - Protocol service specifications.
   *   Protocol services include two Protocol Types: General and Cache. Compared with the General type, the Cache type provides hot spot data caching. When the cache is hit, the bandwidth of the Cache type protocol service can exceed the bandwidth of the CPFS file system and reach the maximum bandwidth configured for the protocol service.
   *   
   *     -   General: Provides NFS protocol access and [folder-level mount targets](https://help.aliyun.com/document_detail/427175.html) for CPFS. You do not need to configure a POSIX client cluster management. This feature is free of charge.
   *     -  Cache: Provides server-side in-memory caching based on the LRU policy on top of the General type. When data is cached in memory, CPFS can provide higher internal network bandwidth. The Cache type protocol service is available in two specifications: Cache L1 and Cache L2, which differ in internal network bandwidth and memory cache size.
   *      >  The Cache type protocol service is a paid service and is in invitational preview. For information about the billing of the Cache type protocol service, see [Billable items](https://help.aliyun.com/document_detail/111858.html). If you have any feedback or questions, join the DingTalk user group (group ID: 31045006299) to communicate with CPFS engineers.
   * - Protocol type.
   *   Only NFSv3 is supported.
   * - Before you begin.
   *   The CPFS file system must be created and in the Running state.
   * - Other information.
   *     - Only one protocol service can be created for each CPFS file system.
   *     - Creating a protocol service consumes IP addresses on the specified vSwitch (up to 32 IP addresses). Make sure that the vSwitch has sufficient IP address resources.
   * 
   * @param request - CreateProtocolServiceRequest
   * @returns CreateProtocolServiceResponse
   */
  async createProtocolService(request: $_model.CreateProtocolServiceRequest): Promise<$_model.CreateProtocolServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createProtocolServiceWithOptions(request, runtime);
  }

  /**
   * Creates a task to permanently delete a file or directory from the recycle bin.
   * 
   * @remarks
   * - Only General-purpose NAS file systems support this feature.
   * - The recycle bin must be enabled.
   * - Mount the file system by using NFS or SMB (you must use an ECS instance in the same VPC to mount the file system), and then delete the target file from the mount directory to move it to the recycle bin.
   * - When you permanently delete a directory, the contents in the directory are recursively deleted.
   * - Only one permanent deletion task can be run at a time for a single file system. While a file or directory is being permanently deleted, you cannot initiate a new restoration or cleanup task.
   * 
   * @param request - CreateRecycleBinDeleteJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRecycleBinDeleteJobResponse
   */
  async createRecycleBinDeleteJobWithOptions(request: $_model.CreateRecycleBinDeleteJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRecycleBinDeleteJobResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRecycleBinDeleteJob",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRecycleBinDeleteJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateRecycleBinDeleteJobResponse({}));
  }

  /**
   * Creates a task to permanently delete a file or directory from the recycle bin.
   * 
   * @remarks
   * - Only General-purpose NAS file systems support this feature.
   * - The recycle bin must be enabled.
   * - Mount the file system by using NFS or SMB (you must use an ECS instance in the same VPC to mount the file system), and then delete the target file from the mount directory to move it to the recycle bin.
   * - When you permanently delete a directory, the contents in the directory are recursively deleted.
   * - Only one permanent deletion task can be run at a time for a single file system. While a file or directory is being permanently deleted, you cannot initiate a new restoration or cleanup task.
   * 
   * @param request - CreateRecycleBinDeleteJobRequest
   * @returns CreateRecycleBinDeleteJobResponse
   */
  async createRecycleBinDeleteJob(request: $_model.CreateRecycleBinDeleteJobRequest): Promise<$_model.CreateRecycleBinDeleteJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRecycleBinDeleteJobWithOptions(request, runtime);
  }

  /**
   * Restores a file from the recycle bin.
   * 
   * @remarks
   * - Only General-purpose NAS file systems support this feature.
   * - A single file system can run only one file restoration or cleanup task at a time. While a file is being restored, you cannot initiate a new file restoration or cleanup task.
   * - A single restoration task can restore only one file or directory. Restoring a specified directory recursively restores all files in the directory.
   * - After a file is restored, data reorganization is performed. Read request performance slightly decreases during data reorganization.
   * 
   * @param request - CreateRecycleBinRestoreJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRecycleBinRestoreJobResponse
   */
  async createRecycleBinRestoreJobWithOptions(request: $_model.CreateRecycleBinRestoreJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRecycleBinRestoreJobResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRecycleBinRestoreJob",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRecycleBinRestoreJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateRecycleBinRestoreJobResponse({}));
  }

  /**
   * Restores a file from the recycle bin.
   * 
   * @remarks
   * - Only General-purpose NAS file systems support this feature.
   * - A single file system can run only one file restoration or cleanup task at a time. While a file is being restored, you cannot initiate a new file restoration or cleanup task.
   * - A single restoration task can restore only one file or directory. Restoring a specified directory recursively restores all files in the directory.
   * - After a file is restored, data reorganization is performed. Read request performance slightly decreases during data reorganization.
   * 
   * @param request - CreateRecycleBinRestoreJobRequest
   * @returns CreateRecycleBinRestoreJobResponse
   */
  async createRecycleBinRestoreJob(request: $_model.CreateRecycleBinRestoreJobRequest): Promise<$_model.CreateRecycleBinRestoreJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRecycleBinRestoreJobWithOptions(request, runtime);
  }

  /**
   * Creates a snapshot.
   * 
   * @remarks
   * <props="china">
   * - This feature is in free public preview. During the public preview, the [File Storage NAS Service-Level Agreement (SLA)](https://terms.aliyun.com/legal-agreement/terms/suit_bu1_ali_cloud/suit_bu1_ali_cloud201803061139_99860.html?spm=a2c4g.11186623.0.0.40a34bbe4vbvKY) is not guaranteed.
   * - Only Advanced Extreme NAS file systems support snapshot creation.
   * - A maximum of 128 snapshots can be created for a single file system.
   * - The instance on which the file system is mounted must be in the Normal state. Otherwise, snapshots cannot be created.
   * - If a snapshot is being created, you cannot create another snapshot for the same file system.
   * - If the file system reaches its expire and release time while a snapshot is being created, the file system is released and the snapshot in the Creating state is also deleted.
   * - Creating a snapshot may slightly degrade the performance of the file system and temporarily slow down I/O performance. Avoid creating snapshots during peak hours.
   * - A snapshot only captures a backup of data at a specific point in time. Incremental data generated by file system operations during snapshot creation is not subject to synchronization to the snapshot.
   * - Manually created snapshots are retained until they are deleted 15 days after your account has an overdue payment and services are suspended. Periodically delete snapshots that are no longer needed to avoid ongoing snapshot size charges.
   * <props="intl">
   * - This feature is in free public preview. During the public preview, the [File Storage NAS Service-Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed.
   * - Only Advanced Extreme NAS file systems support snapshot creation.
   * - A maximum of 128 snapshots can be created for a single file system.
   * - The instance on which the file system is mounted must be in the Normal state. Otherwise, snapshots cannot be created.
   * - If a snapshot is being created, you cannot create another snapshot for the same file system.
   * - If the file system reaches its expire and release time while a snapshot is being created, the file system is released and the snapshot in the Creating state is also deleted.
   * - Creating a snapshot may slightly degrade the performance of the file system and temporarily slow down I/O performance. Avoid creating snapshots during peak hours.
   * - A snapshot only captures a backup of data at a specific point in time. Incremental data generated by file system operations during snapshot creation is not subject to synchronization to the snapshot.
   * - Manually created snapshots are retained until they are deleted 15 days after your account has an overdue payment and services are suspended. Periodically delete snapshots that are no longer needed to avoid ongoing snapshot size charges.
   * 
   * @param request - CreateSnapshotRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSnapshotResponse
   */
  async createSnapshotWithOptions(request: $_model.CreateSnapshotRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSnapshotResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.retentionDays)) {
      query["RetentionDays"] = request.retentionDays;
    }

    if (!$dara.isNull(request.snapshotName)) {
      query["SnapshotName"] = request.snapshotName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSnapshot",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSnapshotResponse>(await this.callApi(params, req, runtime), new $_model.CreateSnapshotResponse({}));
  }

  /**
   * Creates a snapshot.
   * 
   * @remarks
   * <props="china">
   * - This feature is in free public preview. During the public preview, the [File Storage NAS Service-Level Agreement (SLA)](https://terms.aliyun.com/legal-agreement/terms/suit_bu1_ali_cloud/suit_bu1_ali_cloud201803061139_99860.html?spm=a2c4g.11186623.0.0.40a34bbe4vbvKY) is not guaranteed.
   * - Only Advanced Extreme NAS file systems support snapshot creation.
   * - A maximum of 128 snapshots can be created for a single file system.
   * - The instance on which the file system is mounted must be in the Normal state. Otherwise, snapshots cannot be created.
   * - If a snapshot is being created, you cannot create another snapshot for the same file system.
   * - If the file system reaches its expire and release time while a snapshot is being created, the file system is released and the snapshot in the Creating state is also deleted.
   * - Creating a snapshot may slightly degrade the performance of the file system and temporarily slow down I/O performance. Avoid creating snapshots during peak hours.
   * - A snapshot only captures a backup of data at a specific point in time. Incremental data generated by file system operations during snapshot creation is not subject to synchronization to the snapshot.
   * - Manually created snapshots are retained until they are deleted 15 days after your account has an overdue payment and services are suspended. Periodically delete snapshots that are no longer needed to avoid ongoing snapshot size charges.
   * <props="intl">
   * - This feature is in free public preview. During the public preview, the [File Storage NAS Service-Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed.
   * - Only Advanced Extreme NAS file systems support snapshot creation.
   * - A maximum of 128 snapshots can be created for a single file system.
   * - The instance on which the file system is mounted must be in the Normal state. Otherwise, snapshots cannot be created.
   * - If a snapshot is being created, you cannot create another snapshot for the same file system.
   * - If the file system reaches its expire and release time while a snapshot is being created, the file system is released and the snapshot in the Creating state is also deleted.
   * - Creating a snapshot may slightly degrade the performance of the file system and temporarily slow down I/O performance. Avoid creating snapshots during peak hours.
   * - A snapshot only captures a backup of data at a specific point in time. Incremental data generated by file system operations during snapshot creation is not subject to synchronization to the snapshot.
   * - Manually created snapshots are retained until they are deleted 15 days after your account has an overdue payment and services are suspended. Periodically delete snapshots that are no longer needed to avoid ongoing snapshot size charges.
   * 
   * @param request - CreateSnapshotRequest
   * @returns CreateSnapshotResponse
   */
  async createSnapshot(request: $_model.CreateSnapshotRequest): Promise<$_model.CreateSnapshotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSnapshotWithOptions(request, runtime);
  }

  /**
   * Deletes an existing permission group.
   * 
   * @remarks
   * The default permission group (DEFAULT_VPC_GROUP_NAME) cannot be deleted.
   * 
   * @param request - DeleteAccessGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAccessGroupResponse
   */
  async deleteAccessGroupWithOptions(request: $_model.DeleteAccessGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAccessGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessGroupName)) {
      query["AccessGroupName"] = request.accessGroupName;
    }

    if (!$dara.isNull(request.fileSystemType)) {
      query["FileSystemType"] = request.fileSystemType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAccessGroup",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAccessGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAccessGroupResponse({}));
  }

  /**
   * Deletes an existing permission group.
   * 
   * @remarks
   * The default permission group (DEFAULT_VPC_GROUP_NAME) cannot be deleted.
   * 
   * @param request - DeleteAccessGroupRequest
   * @returns DeleteAccessGroupResponse
   */
  async deleteAccessGroup(request: $_model.DeleteAccessGroupRequest): Promise<$_model.DeleteAccessGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAccessGroupWithOptions(request, runtime);
  }

  /**
   * Deletes an access point.
   * 
   * @remarks
   * - Only NFS protocol file systems of General-purpose NAS support this feature.
   * - After you delete an access point, all I/O operations that are accessing the folder through the access point are immediately interrupted. Proceed with caution.
   * 
   * @param request - DeleteAccessPointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAccessPointResponse
   */
  async deleteAccessPointWithOptions(request: $_model.DeleteAccessPointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAccessPointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessPointId)) {
      query["AccessPointId"] = request.accessPointId;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAccessPoint",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAccessPointResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAccessPointResponse({}));
  }

  /**
   * Deletes an access point.
   * 
   * @remarks
   * - Only NFS protocol file systems of General-purpose NAS support this feature.
   * - After you delete an access point, all I/O operations that are accessing the folder through the access point are immediately interrupted. Proceed with caution.
   * 
   * @param request - DeleteAccessPointRequest
   * @returns DeleteAccessPointResponse
   */
  async deleteAccessPoint(request: $_model.DeleteAccessPointRequest): Promise<$_model.DeleteAccessPointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAccessPointWithOptions(request, runtime);
  }

  /**
   * Deletes a permission rule from a permission group.
   * 
   * @remarks
   * Rules in the default permission group (DEFAULT_VPC_GROUP_NAME) cannot be deleted.
   * 
   * @param request - DeleteAccessRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAccessRuleResponse
   */
  async deleteAccessRuleWithOptions(request: $_model.DeleteAccessRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAccessRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessGroupName)) {
      query["AccessGroupName"] = request.accessGroupName;
    }

    if (!$dara.isNull(request.accessRuleId)) {
      query["AccessRuleId"] = request.accessRuleId;
    }

    if (!$dara.isNull(request.fileSystemType)) {
      query["FileSystemType"] = request.fileSystemType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAccessRule",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAccessRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAccessRuleResponse({}));
  }

  /**
   * Deletes a permission rule from a permission group.
   * 
   * @remarks
   * Rules in the default permission group (DEFAULT_VPC_GROUP_NAME) cannot be deleted.
   * 
   * @param request - DeleteAccessRuleRequest
   * @returns DeleteAccessRuleResponse
   */
  async deleteAccessRule(request: $_model.DeleteAccessRuleRequest): Promise<$_model.DeleteAccessRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAccessRuleWithOptions(request, runtime);
  }

  /**
   * Deletes an Agentic space.
   * 
   * @remarks
   * Applicable to agentic file systems.
   * 
   * @param request - DeleteAgenticSpaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAgenticSpaceResponse
   */
  async deleteAgenticSpaceWithOptions(request: $_model.DeleteAgenticSpaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAgenticSpaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agenticSpaceId)) {
      query["AgenticSpaceId"] = request.agenticSpaceId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAgenticSpace",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAgenticSpaceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAgenticSpaceResponse({}));
  }

  /**
   * Deletes an Agentic space.
   * 
   * @remarks
   * Applicable to agentic file systems.
   * 
   * @param request - DeleteAgenticSpaceRequest
   * @returns DeleteAgenticSpaceResponse
   */
  async deleteAgenticSpace(request: $_model.DeleteAgenticSpaceRequest): Promise<$_model.DeleteAgenticSpaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAgenticSpaceWithOptions(request, runtime);
  }

  /**
   * Deletes an automatic snapshot policy.
   * 
   * @remarks
   * <props="china">
   * - This feature is in free public preview. During the public preview, the [File Storage NAS Service-Level Agreement (SLA)](https://terms.aliyun.com/legal-agreement/terms/suit_bu1_ali_cloud/suit_bu1_ali_cloud201803061139_99860.html?spm=a2c4g.11186623.0.0.5c895ff2YPLrwe) is not guaranteed.
   * - Only Advanced Extreme NAS file systems support this feature.
   * - If the automatic snapshot policy has been applied to a file system, the file system no longer executes the policy after the policy is deleted.
   * <props="intl">
   * - This feature is in free public preview. During the public preview, the [File Storage NAS Service-Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed.
   * - Only Advanced Extreme NAS file systems support this feature.
   * - If the automatic snapshot policy has been applied to a file system, the file system no longer executes the policy after the policy is deleted.
   * 
   * @param request - DeleteAutoSnapshotPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAutoSnapshotPolicyResponse
   */
  async deleteAutoSnapshotPolicyWithOptions(request: $_model.DeleteAutoSnapshotPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAutoSnapshotPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoSnapshotPolicyId)) {
      query["AutoSnapshotPolicyId"] = request.autoSnapshotPolicyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAutoSnapshotPolicy",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAutoSnapshotPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAutoSnapshotPolicyResponse({}));
  }

  /**
   * Deletes an automatic snapshot policy.
   * 
   * @remarks
   * <props="china">
   * - This feature is in free public preview. During the public preview, the [File Storage NAS Service-Level Agreement (SLA)](https://terms.aliyun.com/legal-agreement/terms/suit_bu1_ali_cloud/suit_bu1_ali_cloud201803061139_99860.html?spm=a2c4g.11186623.0.0.5c895ff2YPLrwe) is not guaranteed.
   * - Only Advanced Extreme NAS file systems support this feature.
   * - If the automatic snapshot policy has been applied to a file system, the file system no longer executes the policy after the policy is deleted.
   * <props="intl">
   * - This feature is in free public preview. During the public preview, the [File Storage NAS Service-Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed.
   * - Only Advanced Extreme NAS file systems support this feature.
   * - If the automatic snapshot policy has been applied to a file system, the file system no longer executes the policy after the policy is deleted.
   * 
   * @param request - DeleteAutoSnapshotPolicyRequest
   * @returns DeleteAutoSnapshotPolicyResponse
   */
  async deleteAutoSnapshotPolicy(request: $_model.DeleteAutoSnapshotPolicyRequest): Promise<$_model.DeleteAutoSnapshotPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAutoSnapshotPolicyWithOptions(request, runtime);
  }

  /**
   * Deletes a CPFS for Lingjun access point.
   * 
   * @remarks
   * Deletes a CPFS for Lingjun access point.
   * 
   * @param request - DeleteCpfsAccessPointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCpfsAccessPointResponse
   */
  async deleteCpfsAccessPointWithOptions(request: $_model.DeleteCpfsAccessPointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCpfsAccessPointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessPointId)) {
      query["AccessPointId"] = request.accessPointId;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCpfsAccessPoint",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCpfsAccessPointResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCpfsAccessPointResponse({}));
  }

  /**
   * Deletes a CPFS for Lingjun access point.
   * 
   * @remarks
   * Deletes a CPFS for Lingjun access point.
   * 
   * @param request - DeleteCpfsAccessPointRequest
   * @returns DeleteCpfsAccessPointResponse
   */
  async deleteCpfsAccessPoint(request: $_model.DeleteCpfsAccessPointRequest): Promise<$_model.DeleteCpfsAccessPointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCpfsAccessPointWithOptions(request, runtime);
  }

  /**
   * Deletes a dataflow.
   * 
   * @remarks
   * - Only CPFS 2.2.0 and later and CPFS for Lingjun 2.4.0 and later support dataflows. You can view the version information on the file system details page in the console.
   * - You can delete only dataflows in the `Running` or `Stopped` state.
   * - After a dataflow is deleted, the related resources are released and cannot be recovered. To use a dataflow again, create a new one.
   * 
   * @param request - DeleteDataFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataFlowResponse
   */
  async deleteDataFlowWithOptions(request: $_model.DeleteDataFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDataFlowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dataFlowId)) {
      query["DataFlowId"] = request.dataFlowId;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataFlow",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDataFlowResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDataFlowResponse({}));
  }

  /**
   * Deletes a dataflow.
   * 
   * @remarks
   * - Only CPFS 2.2.0 and later and CPFS for Lingjun 2.4.0 and later support dataflows. You can view the version information on the file system details page in the console.
   * - You can delete only dataflows in the `Running` or `Stopped` state.
   * - After a dataflow is deleted, the related resources are released and cannot be recovered. To use a dataflow again, create a new one.
   * 
   * @param request - DeleteDataFlowRequest
   * @returns DeleteDataFlowResponse
   */
  async deleteDataFlow(request: $_model.DeleteDataFlowRequest): Promise<$_model.DeleteDataFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDataFlowWithOptions(request, runtime);
  }

  /**
   * Deletes a file system.
   * 
   * @remarks
   * - You can delete a file system only when the number of mount targets on the file system is 0.
   * - You can delete a file system only when no lifecycle policy is created for the file system.
   * - After a file system is deleted, the data cannot be recovered. Proceed with caution.
   * 
   * @param request - DeleteFileSystemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFileSystemResponse
   */
  async deleteFileSystemWithOptions(request: $_model.DeleteFileSystemRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFileSystemResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFileSystem",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFileSystemResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFileSystemResponse({}));
  }

  /**
   * Deletes a file system.
   * 
   * @remarks
   * - You can delete a file system only when the number of mount targets on the file system is 0.
   * - You can delete a file system only when no lifecycle policy is created for the file system.
   * - After a file system is deleted, the data cannot be recovered. Proceed with caution.
   * 
   * @param request - DeleteFileSystemRequest
   * @returns DeleteFileSystemResponse
   */
  async deleteFileSystem(request: $_model.DeleteFileSystemRequest): Promise<$_model.DeleteFileSystemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFileSystemWithOptions(request, runtime);
  }

  /**
   * Deletes a fileset.
   * 
   * @remarks
   * - Only CPFS 2.2.0 and later and CPFS for Lingjun 2.7.0 and later support fileset deletion. After a fileset is deleted, all data in the directory is permanently deleted and cannot be recovered. Proceed with caution.
   * - If deletion protection is enabled, you must disable deletion protection before you can delete the fileset.
   * - All filesets on the target file system must be in the CREATED desired state before you can perform the delete operation.
   * - Deleting a CPFS general-purpose fileset immediately releases disk space. Deleting a CPFS for Lingjun fileset gradually releases disk space. Deleted data cannot be recovered. Proceed with caution.
   * 
   * @param request - DeleteFilesetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFilesetResponse
   */
  async deleteFilesetWithOptions(request: $_model.DeleteFilesetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFilesetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.fsetId)) {
      query["FsetId"] = request.fsetId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFileset",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFilesetResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFilesetResponse({}));
  }

  /**
   * Deletes a fileset.
   * 
   * @remarks
   * - Only CPFS 2.2.0 and later and CPFS for Lingjun 2.7.0 and later support fileset deletion. After a fileset is deleted, all data in the directory is permanently deleted and cannot be recovered. Proceed with caution.
   * - If deletion protection is enabled, you must disable deletion protection before you can delete the fileset.
   * - All filesets on the target file system must be in the CREATED desired state before you can perform the delete operation.
   * - Deleting a CPFS general-purpose fileset immediately releases disk space. Deleting a CPFS for Lingjun fileset gradually releases disk space. Deleted data cannot be recovered. Proceed with caution.
   * 
   * @param request - DeleteFilesetRequest
   * @returns DeleteFilesetResponse
   */
  async deleteFileset(request: $_model.DeleteFilesetRequest): Promise<$_model.DeleteFilesetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFilesetWithOptions(request, runtime);
  }

  /**
   * Deletes LDAP settings.
   * 
   * @remarks
   * # Description
   * This operation supports only Cloud Parallel File Storage (CPFS) parallel file systems.
   * 
   * @deprecated OpenAPI DeleteLDAPConfig is deprecated
   * 
   * @param request - DeleteLDAPConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLDAPConfigResponse
   */
  async deleteLDAPConfigWithOptions(request: $_model.DeleteLDAPConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLDAPConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLDAPConfig",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteLDAPConfigResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLDAPConfigResponse({}));
  }

  /**
   * Deletes LDAP settings.
   * 
   * @remarks
   * # Description
   * This operation supports only Cloud Parallel File Storage (CPFS) parallel file systems.
   * 
   * @deprecated OpenAPI DeleteLDAPConfig is deprecated
   * 
   * @param request - DeleteLDAPConfigRequest
   * @returns DeleteLDAPConfigResponse
   */
  // Deprecated
  async deleteLDAPConfig(request: $_model.DeleteLDAPConfigRequest): Promise<$_model.DeleteLDAPConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLDAPConfigWithOptions(request, runtime);
  }

  /**
   * Deletes a lifecycle management policy.
   * 
   * @remarks
   * Only General-purpose NAS file systems and CPFS for Lingjun support this feature.
   * 
   * @param request - DeleteLifecyclePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLifecyclePolicyResponse
   */
  async deleteLifecyclePolicyWithOptions(request: $_model.DeleteLifecyclePolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLifecyclePolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.lifecyclePolicyId)) {
      query["LifecyclePolicyId"] = request.lifecyclePolicyId;
    }

    if (!$dara.isNull(request.lifecyclePolicyName)) {
      query["LifecyclePolicyName"] = request.lifecyclePolicyName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLifecyclePolicy",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteLifecyclePolicyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLifecyclePolicyResponse({}));
  }

  /**
   * Deletes a lifecycle management policy.
   * 
   * @remarks
   * Only General-purpose NAS file systems and CPFS for Lingjun support this feature.
   * 
   * @param request - DeleteLifecyclePolicyRequest
   * @returns DeleteLifecyclePolicyResponse
   */
  async deleteLifecyclePolicy(request: $_model.DeleteLifecyclePolicyRequest): Promise<$_model.DeleteLifecyclePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLifecyclePolicyWithOptions(request, runtime);
  }

  /**
   * Stops log analysis for a General-purpose NAS file system.
   * 
   * @param request - DeleteLogAnalysisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLogAnalysisResponse
   */
  async deleteLogAnalysisWithOptions(request: $_model.DeleteLogAnalysisRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLogAnalysisResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLogAnalysis",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteLogAnalysisResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLogAnalysisResponse({}));
  }

  /**
   * Stops log analysis for a General-purpose NAS file system.
   * 
   * @param request - DeleteLogAnalysisRequest
   * @returns DeleteLogAnalysisResponse
   */
  async deleteLogAnalysis(request: $_model.DeleteLogAnalysisRequest): Promise<$_model.DeleteLogAnalysisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLogAnalysisWithOptions(request, runtime);
  }

  /**
   * Deletes an existing mount target.
   * 
   * @remarks
   * After a mount target is deleted, it cannot be recovered. Proceed with caution.
   * 
   * @param request - DeleteMountTargetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMountTargetResponse
   */
  async deleteMountTargetWithOptions(request: $_model.DeleteMountTargetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMountTargetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.mountTargetDomain)) {
      query["MountTargetDomain"] = request.mountTargetDomain;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMountTarget",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMountTargetResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMountTargetResponse({}));
  }

  /**
   * Deletes an existing mount target.
   * 
   * @remarks
   * After a mount target is deleted, it cannot be recovered. Proceed with caution.
   * 
   * @param request - DeleteMountTargetRequest
   * @returns DeleteMountTargetResponse
   */
  async deleteMountTarget(request: $_model.DeleteMountTargetRequest): Promise<$_model.DeleteMountTargetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMountTargetWithOptions(request, runtime);
  }

  /**
   * Deletes an export directory of a protocol service.
   * 
   * @remarks
   * This operation applies only to Cloud Parallel File Storage (CPFS) file systems.
   * 
   * @param request - DeleteProtocolMountTargetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteProtocolMountTargetResponse
   */
  async deleteProtocolMountTargetWithOptions(request: $_model.DeleteProtocolMountTargetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteProtocolMountTargetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.exportId)) {
      query["ExportId"] = request.exportId;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.protocolServiceId)) {
      query["ProtocolServiceId"] = request.protocolServiceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteProtocolMountTarget",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteProtocolMountTargetResponse>(await this.callApi(params, req, runtime), new $_model.DeleteProtocolMountTargetResponse({}));
  }

  /**
   * Deletes an export directory of a protocol service.
   * 
   * @remarks
   * This operation applies only to Cloud Parallel File Storage (CPFS) file systems.
   * 
   * @param request - DeleteProtocolMountTargetRequest
   * @returns DeleteProtocolMountTargetResponse
   */
  async deleteProtocolMountTarget(request: $_model.DeleteProtocolMountTargetRequest): Promise<$_model.DeleteProtocolMountTargetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteProtocolMountTargetWithOptions(request, runtime);
  }

  /**
   * Deletes a protocol service from a Cloud Parallel File Storage (CPFS) file system.
   * 
   * @remarks
   * - This operation applies only to CPFS file systems.
   * - When you delete a protocol service, all export directories in the protocol service are also deleted.
   * 
   * @param request - DeleteProtocolServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteProtocolServiceResponse
   */
  async deleteProtocolServiceWithOptions(request: $_model.DeleteProtocolServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteProtocolServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.protocolServiceId)) {
      query["ProtocolServiceId"] = request.protocolServiceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteProtocolService",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteProtocolServiceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteProtocolServiceResponse({}));
  }

  /**
   * Deletes a protocol service from a Cloud Parallel File Storage (CPFS) file system.
   * 
   * @remarks
   * - This operation applies only to CPFS file systems.
   * - When you delete a protocol service, all export directories in the protocol service are also deleted.
   * 
   * @param request - DeleteProtocolServiceRequest
   * @returns DeleteProtocolServiceResponse
   */
  async deleteProtocolService(request: $_model.DeleteProtocolServiceRequest): Promise<$_model.DeleteProtocolServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteProtocolServiceWithOptions(request, runtime);
  }

  /**
   * Deletes a specified snapshot or cancels an ongoing snapshot creation task.
   * 
   * @remarks
   * <props="china">
   * - This feature is in free public preview. During the public preview, the [File Storage NAS Service-Level Agreement (SLA)](https://terms.aliyun.com/legal-agreement/terms/suit_bu1_ali_cloud/suit_bu1_ali_cloud201803061139_99860.html?spm=a2c4g.11186623.0.0.5c895ff2YPLrwe) is not guaranteed.
   * - Only Advanced Extreme NAS file systems support this feature.
   * <props="intl">
   * - This feature is in free public preview. During the public preview, the [File Storage NAS Service-Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed.
   * - Only Advanced Extreme NAS file systems support this feature.
   * 
   * @param request - DeleteSnapshotRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSnapshotResponse
   */
  async deleteSnapshotWithOptions(request: $_model.DeleteSnapshotRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSnapshotResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSnapshot",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSnapshotResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSnapshotResponse({}));
  }

  /**
   * Deletes a specified snapshot or cancels an ongoing snapshot creation task.
   * 
   * @remarks
   * <props="china">
   * - This feature is in free public preview. During the public preview, the [File Storage NAS Service-Level Agreement (SLA)](https://terms.aliyun.com/legal-agreement/terms/suit_bu1_ali_cloud/suit_bu1_ali_cloud201803061139_99860.html?spm=a2c4g.11186623.0.0.5c895ff2YPLrwe) is not guaranteed.
   * - Only Advanced Extreme NAS file systems support this feature.
   * <props="intl">
   * - This feature is in free public preview. During the public preview, the [File Storage NAS Service-Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed.
   * - Only Advanced Extreme NAS file systems support this feature.
   * 
   * @param request - DeleteSnapshotRequest
   * @returns DeleteSnapshotResponse
   */
  async deleteSnapshot(request: $_model.DeleteSnapshotRequest): Promise<$_model.DeleteSnapshotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSnapshotWithOptions(request, runtime);
  }

  /**
   * Queries permission group information.
   * 
   * @param request - DescribeAccessGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAccessGroupsResponse
   */
  async describeAccessGroupsWithOptions(request: $_model.DescribeAccessGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAccessGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessGroupName)) {
      query["AccessGroupName"] = request.accessGroupName;
    }

    if (!$dara.isNull(request.fileSystemType)) {
      query["FileSystemType"] = request.fileSystemType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.useUTCDateTime)) {
      query["UseUTCDateTime"] = request.useUTCDateTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAccessGroups",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAccessGroupsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAccessGroupsResponse({}));
  }

  /**
   * Queries permission group information.
   * 
   * @param request - DescribeAccessGroupsRequest
   * @returns DescribeAccessGroupsResponse
   */
  async describeAccessGroups(request: $_model.DescribeAccessGroupsRequest): Promise<$_model.DescribeAccessGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAccessGroupsWithOptions(request, runtime);
  }

  /**
   * Queries the details of an access point.
   * 
   * @remarks
   * Only General-purpose NAS NFS file systems support this feature.
   * 
   * @param request - DescribeAccessPointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAccessPointResponse
   */
  async describeAccessPointWithOptions(request: $_model.DescribeAccessPointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAccessPointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessPointId)) {
      query["AccessPointId"] = request.accessPointId;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAccessPoint",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAccessPointResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAccessPointResponse({}));
  }

  /**
   * Queries the details of an access point.
   * 
   * @remarks
   * Only General-purpose NAS NFS file systems support this feature.
   * 
   * @param request - DescribeAccessPointRequest
   * @returns DescribeAccessPointResponse
   */
  async describeAccessPoint(request: $_model.DescribeAccessPointRequest): Promise<$_model.DescribeAccessPointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAccessPointWithOptions(request, runtime);
  }

  /**
   * Queries access point information.
   * 
   * @remarks
   * Only General-purpose NAS NFS file systems support this feature.
   * 
   * @deprecated OpenAPI DescribeAccessPoints is deprecated, please use NAS::2017-06-26::ListAccessPoints instead.
   * 
   * @param request - DescribeAccessPointsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAccessPointsResponse
   */
  async describeAccessPointsWithOptions(request: $_model.DescribeAccessPointsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAccessPointsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessGroup)) {
      query["AccessGroup"] = request.accessGroup;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAccessPoints",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAccessPointsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAccessPointsResponse({}));
  }

  /**
   * Queries access point information.
   * 
   * @remarks
   * Only General-purpose NAS NFS file systems support this feature.
   * 
   * @deprecated OpenAPI DescribeAccessPoints is deprecated, please use NAS::2017-06-26::ListAccessPoints instead.
   * 
   * @param request - DescribeAccessPointsRequest
   * @returns DescribeAccessPointsResponse
   */
  // Deprecated
  async describeAccessPoints(request: $_model.DescribeAccessPointsRequest): Promise<$_model.DescribeAccessPointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAccessPointsWithOptions(request, runtime);
  }

  /**
   * Queries the description of a permission rule.
   * 
   * @param request - DescribeAccessRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAccessRulesResponse
   */
  async describeAccessRulesWithOptions(request: $_model.DescribeAccessRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAccessRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessGroupName)) {
      query["AccessGroupName"] = request.accessGroupName;
    }

    if (!$dara.isNull(request.accessRuleId)) {
      query["AccessRuleId"] = request.accessRuleId;
    }

    if (!$dara.isNull(request.fileSystemType)) {
      query["FileSystemType"] = request.fileSystemType;
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
      action: "DescribeAccessRules",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAccessRulesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAccessRulesResponse({}));
  }

  /**
   * Queries the description of a permission rule.
   * 
   * @param request - DescribeAccessRulesRequest
   * @returns DescribeAccessRulesResponse
   */
  async describeAccessRules(request: $_model.DescribeAccessRulesRequest): Promise<$_model.DescribeAccessRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAccessRulesWithOptions(request, runtime);
  }

  /**
   * Queries Agentic spaces.
   * 
   * @remarks
   * Applies to Agentic file systems.
   * ## Before you begin
   * Before you call this operation, create resources in the following order:
   * 1. **Create an Agentic file system**: When you call [CreateFileSystem](https://www.alibabacloud.com/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-createfilesystem-cpfs) to create a file system, set the following parameters:
   *    - `StorageType`: Set to `Agentic`.
   *    - `ProtocolType`: Set to `NFS`.
   *    - **Supported regions**: The Agentic storage type is available only in specific regions and zones. For more information, see the console.
   * 2. **Query the AgenticSpace list**: After the file system is created and its status changes to Running, call the DescribeAgenticSpaces operation to query the AgenticSpace list under the file system.
   *    - If Agentic spaces are created under the file system, the complete list is returned.
   *    - If no Agentic spaces are created under the file system, an empty list is returned.
   * 
   * @param request - DescribeAgenticSpacesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAgenticSpacesResponse
   */
  async describeAgenticSpacesWithOptions(request: $_model.DescribeAgenticSpacesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAgenticSpacesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.filters)) {
      query["Filters"] = request.filters;
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
      action: "DescribeAgenticSpaces",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAgenticSpacesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAgenticSpacesResponse({}));
  }

  /**
   * Queries Agentic spaces.
   * 
   * @remarks
   * Applies to Agentic file systems.
   * ## Before you begin
   * Before you call this operation, create resources in the following order:
   * 1. **Create an Agentic file system**: When you call [CreateFileSystem](https://www.alibabacloud.com/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-createfilesystem-cpfs) to create a file system, set the following parameters:
   *    - `StorageType`: Set to `Agentic`.
   *    - `ProtocolType`: Set to `NFS`.
   *    - **Supported regions**: The Agentic storage type is available only in specific regions and zones. For more information, see the console.
   * 2. **Query the AgenticSpace list**: After the file system is created and its status changes to Running, call the DescribeAgenticSpaces operation to query the AgenticSpace list under the file system.
   *    - If Agentic spaces are created under the file system, the complete list is returned.
   *    - If no Agentic spaces are created under the file system, an empty list is returned.
   * 
   * @param request - DescribeAgenticSpacesRequest
   * @returns DescribeAgenticSpacesResponse
   */
  async describeAgenticSpaces(request: $_model.DescribeAgenticSpacesRequest): Promise<$_model.DescribeAgenticSpacesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAgenticSpacesWithOptions(request, runtime);
  }

  /**
   * Queries the automatic snapshot policies that have been created.
   * 
   * @remarks
   * <props="china">
   * - This feature is in free public preview. During the public preview, the [File Storage NAS Service-Level Agreement (SLA)](https://terms.aliyun.com/legal-agreement/terms/suit_bu1_ali_cloud/suit_bu1_ali_cloud201803061139_99860.html?spm=a2c4g.11186623.0.0.5c895ff2YPLrwe) is not guaranteed.
   * - Only Advanced Extreme NAS file systems support this feature.
   * <props="intl">
   * - This feature is in free public preview. During the public preview, the [File Storage NAS Service-Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed.
   * - Only Advanced Extreme NAS file systems support this feature.
   * 
   * @param request - DescribeAutoSnapshotPoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAutoSnapshotPoliciesResponse
   */
  async describeAutoSnapshotPoliciesWithOptions(request: $_model.DescribeAutoSnapshotPoliciesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAutoSnapshotPoliciesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoSnapshotPolicyId)) {
      query["AutoSnapshotPolicyId"] = request.autoSnapshotPolicyId;
    }

    if (!$dara.isNull(request.fileSystemType)) {
      query["FileSystemType"] = request.fileSystemType;
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
      action: "DescribeAutoSnapshotPolicies",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAutoSnapshotPoliciesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAutoSnapshotPoliciesResponse({}));
  }

  /**
   * Queries the automatic snapshot policies that have been created.
   * 
   * @remarks
   * <props="china">
   * - This feature is in free public preview. During the public preview, the [File Storage NAS Service-Level Agreement (SLA)](https://terms.aliyun.com/legal-agreement/terms/suit_bu1_ali_cloud/suit_bu1_ali_cloud201803061139_99860.html?spm=a2c4g.11186623.0.0.5c895ff2YPLrwe) is not guaranteed.
   * - Only Advanced Extreme NAS file systems support this feature.
   * <props="intl">
   * - This feature is in free public preview. During the public preview, the [File Storage NAS Service-Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed.
   * - Only Advanced Extreme NAS file systems support this feature.
   * 
   * @param request - DescribeAutoSnapshotPoliciesRequest
   * @returns DescribeAutoSnapshotPoliciesResponse
   */
  async describeAutoSnapshotPolicies(request: $_model.DescribeAutoSnapshotPoliciesRequest): Promise<$_model.DescribeAutoSnapshotPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAutoSnapshotPoliciesWithOptions(request, runtime);
  }

  /**
   * Queries the list of automatic snapshot tasks.
   * 
   * @remarks
   * <props="china">
   * - This feature is in free public preview. During the public preview, the [File Storage NAS Service-Level Agreement (SLA)](https://terms.aliyun.com/legal-agreement/terms/suit_bu1_ali_cloud/suit_bu1_ali_cloud201803061139_99860.html?spm=a2c4g.11186623.0.0.5c895ff2YPLrwe) is not guaranteed.
   * - Only Advanced Extreme NAS file systems support this feature.
   * <props="intl">
   * - This feature is in free public preview. During the public preview, the [File Storage NAS Service-Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed.
   * - Only Advanced Extreme NAS file systems support this feature.
   * 
   * @param request - DescribeAutoSnapshotTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAutoSnapshotTasksResponse
   */
  async describeAutoSnapshotTasksWithOptions(request: $_model.DescribeAutoSnapshotTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAutoSnapshotTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoSnapshotPolicyIds)) {
      query["AutoSnapshotPolicyIds"] = request.autoSnapshotPolicyIds;
    }

    if (!$dara.isNull(request.fileSystemIds)) {
      query["FileSystemIds"] = request.fileSystemIds;
    }

    if (!$dara.isNull(request.fileSystemType)) {
      query["FileSystemType"] = request.fileSystemType;
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
      action: "DescribeAutoSnapshotTasks",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAutoSnapshotTasksResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAutoSnapshotTasksResponse({}));
  }

  /**
   * Queries the list of automatic snapshot tasks.
   * 
   * @remarks
   * <props="china">
   * - This feature is in free public preview. During the public preview, the [File Storage NAS Service-Level Agreement (SLA)](https://terms.aliyun.com/legal-agreement/terms/suit_bu1_ali_cloud/suit_bu1_ali_cloud201803061139_99860.html?spm=a2c4g.11186623.0.0.5c895ff2YPLrwe) is not guaranteed.
   * - Only Advanced Extreme NAS file systems support this feature.
   * <props="intl">
   * - This feature is in free public preview. During the public preview, the [File Storage NAS Service-Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed.
   * - Only Advanced Extreme NAS file systems support this feature.
   * 
   * @param request - DescribeAutoSnapshotTasksRequest
   * @returns DescribeAutoSnapshotTasksResponse
   */
  async describeAutoSnapshotTasks(request: $_model.DescribeAutoSnapshotTasksRequest): Promise<$_model.DescribeAutoSnapshotTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAutoSnapshotTasksWithOptions(request, runtime);
  }

  /**
   * Retrieves the status of blacklisted clients in the Cloud Parallel File Storage (CPFS) service.
   * 
   * @remarks
   * # Description
   * This operation applies only to CPFS parallel file systems.
   * 
   * @deprecated OpenAPI DescribeBlackListClients is deprecated
   * 
   * @param request - DescribeBlackListClientsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBlackListClientsResponse
   */
  async describeBlackListClientsWithOptions(request: $_model.DescribeBlackListClientsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBlackListClientsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientIP)) {
      query["ClientIP"] = request.clientIP;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBlackListClients",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBlackListClientsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBlackListClientsResponse({}));
  }

  /**
   * Retrieves the status of blacklisted clients in the Cloud Parallel File Storage (CPFS) service.
   * 
   * @remarks
   * # Description
   * This operation applies only to CPFS parallel file systems.
   * 
   * @deprecated OpenAPI DescribeBlackListClients is deprecated
   * 
   * @param request - DescribeBlackListClientsRequest
   * @returns DescribeBlackListClientsResponse
   */
  // Deprecated
  async describeBlackListClients(request: $_model.DescribeBlackListClientsRequest): Promise<$_model.DescribeBlackListClientsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBlackListClientsWithOptions(request, runtime);
  }

  /**
   * Queries the list of clients mounted to an access point of a CPFS for Lingjun file system.
   * 
   * @remarks
   * Queries the list of clients mounted to an access point of a CPFS for Lingjun file system.
   * 
   * @param request - DescribeCpfsAccessPointMountedClientsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCpfsAccessPointMountedClientsResponse
   */
  async describeCpfsAccessPointMountedClientsWithOptions(request: $_model.DescribeCpfsAccessPointMountedClientsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCpfsAccessPointMountedClientsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessPointId)) {
      query["AccessPointId"] = request.accessPointId;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
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
      action: "DescribeCpfsAccessPointMountedClients",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCpfsAccessPointMountedClientsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCpfsAccessPointMountedClientsResponse({}));
  }

  /**
   * Queries the list of clients mounted to an access point of a CPFS for Lingjun file system.
   * 
   * @remarks
   * Queries the list of clients mounted to an access point of a CPFS for Lingjun file system.
   * 
   * @param request - DescribeCpfsAccessPointMountedClientsRequest
   * @returns DescribeCpfsAccessPointMountedClientsResponse
   */
  async describeCpfsAccessPointMountedClients(request: $_model.DescribeCpfsAccessPointMountedClientsRequest): Promise<$_model.DescribeCpfsAccessPointMountedClientsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCpfsAccessPointMountedClientsWithOptions(request, runtime);
  }

  /**
   * Queries access points of CPFS for Lingjun.
   * 
   * @remarks
   * Queries access points of CPFS for Lingjun.
   * 
   * @param request - DescribeCpfsAccessPointsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCpfsAccessPointsResponse
   */
  async describeCpfsAccessPointsWithOptions(request: $_model.DescribeCpfsAccessPointsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCpfsAccessPointsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessPointId)) {
      query["AccessPointId"] = request.accessPointId;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
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
      action: "DescribeCpfsAccessPoints",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCpfsAccessPointsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCpfsAccessPointsResponse({}));
  }

  /**
   * Queries access points of CPFS for Lingjun.
   * 
   * @remarks
   * Queries access points of CPFS for Lingjun.
   * 
   * @param request - DescribeCpfsAccessPointsRequest
   * @returns DescribeCpfsAccessPointsResponse
   */
  async describeCpfsAccessPoints(request: $_model.DescribeCpfsAccessPointsRequest): Promise<$_model.DescribeCpfsAccessPointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCpfsAccessPointsWithOptions(request, runtime);
  }

  /**
   * Queries the batch subtasks of a data flow.
   * 
   * @remarks
   * Supported only by CPFS for Lingjun 2.6.0 and later. You can view the version information on the file system details page in the console.
   * **Before you begin**
   * Before you call this operation to query data flow subtasks, you must create resources and start tasks in the following order:
   * 1. **Create a bmcpfs file system**: You must create a CPFS for Lingjun file system in the console and wait until its status changes to Running.
   * 2. **Create a data flow rule**: Call the [CreateDataFlow](https://www.alibabacloud.com/help/en/cpfs/bmcpfs/developer-reference/api-nas-2017-06-26-createdataflow-bmcpfs) operation on the file system to establish a data flow channel.
   * 3. **Start a data flow task**: Call the [CreateDataFlowTask](https://www.alibabacloud.com/help/en/cpfs/bmcpfs/developer-reference/api-nas-2017-06-26-createdataflowtask-bmcpfs) operation to create and start a data flow task. The task status must be Running.
   * 4. **Query the subtask list**: Subtasks are automatically generated during the execution of a data flow task. Call the DescribeDataFlowSubTasks operation to query the list of these subtasks.
   * 
   * @param request - DescribeDataFlowSubTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDataFlowSubTasksResponse
   */
  async describeDataFlowSubTasksWithOptions(request: $_model.DescribeDataFlowSubTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDataFlowSubTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.filters)) {
      query["Filters"] = request.filters;
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
      action: "DescribeDataFlowSubTasks",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDataFlowSubTasksResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDataFlowSubTasksResponse({}));
  }

  /**
   * Queries the batch subtasks of a data flow.
   * 
   * @remarks
   * Supported only by CPFS for Lingjun 2.6.0 and later. You can view the version information on the file system details page in the console.
   * **Before you begin**
   * Before you call this operation to query data flow subtasks, you must create resources and start tasks in the following order:
   * 1. **Create a bmcpfs file system**: You must create a CPFS for Lingjun file system in the console and wait until its status changes to Running.
   * 2. **Create a data flow rule**: Call the [CreateDataFlow](https://www.alibabacloud.com/help/en/cpfs/bmcpfs/developer-reference/api-nas-2017-06-26-createdataflow-bmcpfs) operation on the file system to establish a data flow channel.
   * 3. **Start a data flow task**: Call the [CreateDataFlowTask](https://www.alibabacloud.com/help/en/cpfs/bmcpfs/developer-reference/api-nas-2017-06-26-createdataflowtask-bmcpfs) operation to create and start a data flow task. The task status must be Running.
   * 4. **Query the subtask list**: Subtasks are automatically generated during the execution of a data flow task. Call the DescribeDataFlowSubTasks operation to query the list of these subtasks.
   * 
   * @param request - DescribeDataFlowSubTasksRequest
   * @returns DescribeDataFlowSubTasksResponse
   */
  async describeDataFlowSubTasks(request: $_model.DescribeDataFlowSubTasksRequest): Promise<$_model.DescribeDataFlowSubTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDataFlowSubTasksWithOptions(request, runtime);
  }

  /**
   * Queries the details of data flow tasks.
   * 
   * @remarks
   * Only CPFS 2.2.0 and later and CPFS for Lingjun 2.4.0 and later support querying data flow tasks. You can view the version information on the file system details page in the console.
   * 
   * @param request - DescribeDataFlowTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDataFlowTasksResponse
   */
  async describeDataFlowTasksWithOptions(request: $_model.DescribeDataFlowTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDataFlowTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.filters)) {
      query["Filters"] = request.filters;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.withReports)) {
      query["WithReports"] = request.withReports;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDataFlowTasks",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDataFlowTasksResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDataFlowTasksResponse({}));
  }

  /**
   * Queries the details of data flow tasks.
   * 
   * @remarks
   * Only CPFS 2.2.0 and later and CPFS for Lingjun 2.4.0 and later support querying data flow tasks. You can view the version information on the file system details page in the console.
   * 
   * @param request - DescribeDataFlowTasksRequest
   * @returns DescribeDataFlowTasksResponse
   */
  async describeDataFlowTasks(request: $_model.DescribeDataFlowTasksRequest): Promise<$_model.DescribeDataFlowTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDataFlowTasksWithOptions(request, runtime);
  }

  /**
   * Queries the data flow information of a CPFS file system.
   * 
   * @remarks
   * - Data flows are supported only by CPFS 2.2.0 and later, and CPFS for Lingjun 2.4.0 and later. You can view the version information on the file system details page in the console.
   * - Among the filter keys in Filters, FsetIds, DataFlowIds, SourceStorage, ThroughputList, and Status require exact match, while FileSystemPath, Description, and SourceStoragePath support fuzzy match.
   * - Combined queries are supported.
   * 
   * @param request - DescribeDataFlowsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDataFlowsResponse
   */
  async describeDataFlowsWithOptions(request: $_model.DescribeDataFlowsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDataFlowsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.filters)) {
      query["Filters"] = request.filters;
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
      action: "DescribeDataFlows",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDataFlowsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDataFlowsResponse({}));
  }

  /**
   * Queries the data flow information of a CPFS file system.
   * 
   * @remarks
   * - Data flows are supported only by CPFS 2.2.0 and later, and CPFS for Lingjun 2.4.0 and later. You can view the version information on the file system details page in the console.
   * - Among the filter keys in Filters, FsetIds, DataFlowIds, SourceStorage, ThroughputList, and Status require exact match, while FileSystemPath, Description, and SourceStoragePath support fuzzy match.
   * - Combined queries are supported.
   * 
   * @param request - DescribeDataFlowsRequest
   * @returns DescribeDataFlowsResponse
   */
  async describeDataFlows(request: $_model.DescribeDataFlowsRequest): Promise<$_model.DescribeDataFlowsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDataFlowsWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of each directory quota in a file system.
   * 
   * @remarks
   * Only General-purpose NAS NFS file systems support the directory quota feature.
   * 
   * @param request - DescribeDirQuotasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDirQuotasResponse
   */
  async describeDirQuotasWithOptions(request: $_model.DescribeDirQuotasRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDirQuotasResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDirQuotas",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDirQuotasResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDirQuotasResponse({}));
  }

  /**
   * Retrieves the details of each directory quota in a file system.
   * 
   * @remarks
   * Only General-purpose NAS NFS file systems support the directory quota feature.
   * 
   * @param request - DescribeDirQuotasRequest
   * @returns DescribeDirQuotasResponse
   */
  async describeDirQuotas(request: $_model.DescribeDirQuotasRequest): Promise<$_model.DescribeDirQuotasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDirQuotasWithOptions(request, runtime);
  }

  /**
   * Lists the statistics information of file systems under the current account.
   * 
   * @deprecated OpenAPI DescribeFileSystemStatistics is deprecated, please use NAS::2017-06-26::DescribeResourceStatistics instead.
   * 
   * @param request - DescribeFileSystemStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFileSystemStatisticsResponse
   */
  async describeFileSystemStatisticsWithOptions(request: $_model.DescribeFileSystemStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFileSystemStatisticsResponse> {
    request.validate();
    let query = { };
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
      action: "DescribeFileSystemStatistics",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeFileSystemStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeFileSystemStatisticsResponse({}));
  }

  /**
   * Lists the statistics information of file systems under the current account.
   * 
   * @deprecated OpenAPI DescribeFileSystemStatistics is deprecated, please use NAS::2017-06-26::DescribeResourceStatistics instead.
   * 
   * @param request - DescribeFileSystemStatisticsRequest
   * @returns DescribeFileSystemStatisticsResponse
   */
  // Deprecated
  async describeFileSystemStatistics(request: $_model.DescribeFileSystemStatisticsRequest): Promise<$_model.DescribeFileSystemStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFileSystemStatisticsWithOptions(request, runtime);
  }

  /**
   * Queries file system information.
   * 
   * @param request - DescribeFileSystemsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFileSystemsResponse
   */
  async describeFileSystemsWithOptions(request: $_model.DescribeFileSystemsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFileSystemsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.fileSystemType)) {
      query["FileSystemType"] = request.fileSystemType;
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

    if (!$dara.isNull(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFileSystems",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeFileSystemsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeFileSystemsResponse({}));
  }

  /**
   * Queries file system information.
   * 
   * @param request - DescribeFileSystemsRequest
   * @returns DescribeFileSystemsResponse
   */
  async describeFileSystems(request: $_model.DescribeFileSystemsRequest): Promise<$_model.DescribeFileSystemsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFileSystemsWithOptions(request, runtime);
  }

  /**
   * Queries the list of created filesets.
   * 
   * @remarks
   * - Only CPFS 2.2.0 and later and CPFS for Lingjun 2.7.0 and later support filesets. You can view the version information on the file system details page in the console.
   * - For filter keys (Filters), FsetIds requires an exact match, while FileSystemPath and Description support fuzzy match.
   * - Combination queries are supported.
   * 
   * @param request - DescribeFilesetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFilesetsResponse
   */
  async describeFilesetsWithOptions(request: $_model.DescribeFilesetsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFilesetsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.filters)) {
      query["Filters"] = request.filters;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderByField)) {
      query["OrderByField"] = request.orderByField;
    }

    if (!$dara.isNull(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFilesets",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeFilesetsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeFilesetsResponse({}));
  }

  /**
   * Queries the list of created filesets.
   * 
   * @remarks
   * - Only CPFS 2.2.0 and later and CPFS for Lingjun 2.7.0 and later support filesets. You can view the version information on the file system details page in the console.
   * - For filter keys (Filters), FsetIds requires an exact match, while FileSystemPath and Description support fuzzy match.
   * - Combination queries are supported.
   * 
   * @param request - DescribeFilesetsRequest
   * @returns DescribeFilesetsResponse
   */
  async describeFilesets(request: $_model.DescribeFilesetsRequest): Promise<$_model.DescribeFilesetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFilesetsWithOptions(request, runtime);
  }

  /**
   * Queries the list of HpnZones associated with file systems. When compute nodes are located in an associated HpnZone, access to the file system achieves optimal performance.
   * 
   * @remarks
   * - Only CPFS for Lingjun file systems are supported.
   * - This is a batch operation that allows you to query up to 20 file systems at a time.
   * 
   * @param tmpReq - DescribeFilesystemsAssociatedHpnZonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFilesystemsAssociatedHpnZonesResponse
   */
  async describeFilesystemsAssociatedHpnZonesWithOptions(tmpReq: $_model.DescribeFilesystemsAssociatedHpnZonesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFilesystemsAssociatedHpnZonesResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeFilesystemsAssociatedHpnZonesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filesystems)) {
      request.filesystemsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filesystems, "Filesystems", "json");
    }

    let query = { };
    if (!$dara.isNull(request.filesystemsShrink)) {
      query["Filesystems"] = request.filesystemsShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFilesystemsAssociatedHpnZones",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeFilesystemsAssociatedHpnZonesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeFilesystemsAssociatedHpnZonesResponse({}));
  }

  /**
   * Queries the list of HpnZones associated with file systems. When compute nodes are located in an associated HpnZone, access to the file system achieves optimal performance.
   * 
   * @remarks
   * - Only CPFS for Lingjun file systems are supported.
   * - This is a batch operation that allows you to query up to 20 file systems at a time.
   * 
   * @param request - DescribeFilesystemsAssociatedHpnZonesRequest
   * @returns DescribeFilesystemsAssociatedHpnZonesResponse
   */
  async describeFilesystemsAssociatedHpnZones(request: $_model.DescribeFilesystemsAssociatedHpnZonesRequest): Promise<$_model.DescribeFilesystemsAssociatedHpnZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFilesystemsAssociatedHpnZonesWithOptions(request, runtime);
  }

  /**
   * Queries the virtual storage channel information associated with file systems.
   * 
   * @remarks
   * - Only CPFS for Lingjun supports this feature. To use CPFS for Lingjun, you must first submit a ticket to apply for the service whitelist, and then create a file system in the NAS console.
   * - Batch execution is supported. In batch execution, only one VscId can be associated with multiple FileSystemIds. This means that the ResourceIds.VscId values must be identical.
   * - To query the association results between file systems and virtual storage channels, call AttachVscToFilesystems first to complete the association. You can call the ListVscs operation of Lingjun AI Computing Service eflo-controller/2022-12-15 to query the VscId. If the virtual storage channel is not created, call CreateVsc to create one.
   * 
   * @param request - DescribeFilesystemsVscAttachInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFilesystemsVscAttachInfoResponse
   */
  async describeFilesystemsVscAttachInfoWithOptions(request: $_model.DescribeFilesystemsVscAttachInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFilesystemsVscAttachInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.roleChain)) {
      query["RoleChain"] = request.roleChain;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFilesystemsVscAttachInfo",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeFilesystemsVscAttachInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeFilesystemsVscAttachInfoResponse({}));
  }

  /**
   * Queries the virtual storage channel information associated with file systems.
   * 
   * @remarks
   * - Only CPFS for Lingjun supports this feature. To use CPFS for Lingjun, you must first submit a ticket to apply for the service whitelist, and then create a file system in the NAS console.
   * - Batch execution is supported. In batch execution, only one VscId can be associated with multiple FileSystemIds. This means that the ResourceIds.VscId values must be identical.
   * - To query the association results between file systems and virtual storage channels, call AttachVscToFilesystems first to complete the association. You can call the ListVscs operation of Lingjun AI Computing Service eflo-controller/2022-12-15 to query the VscId. If the virtual storage channel is not created, call CreateVsc to create one.
   * 
   * @param request - DescribeFilesystemsVscAttachInfoRequest
   * @returns DescribeFilesystemsVscAttachInfoResponse
   */
  async describeFilesystemsVscAttachInfo(request: $_model.DescribeFilesystemsVscAttachInfoRequest): Promise<$_model.DescribeFilesystemsVscAttachInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFilesystemsVscAttachInfoWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of lifecycle management policies.
   * 
   * @remarks
   * This feature is supported only by General-purpose NAS file systems and CPFS for Lingjun.
   * 
   * @param request - DescribeLifecyclePoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLifecyclePoliciesResponse
   */
  async describeLifecyclePoliciesWithOptions(request: $_model.DescribeLifecyclePoliciesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLifecyclePoliciesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLifecyclePolicies",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLifecyclePoliciesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLifecyclePoliciesResponse({}));
  }

  /**
   * Retrieves a list of lifecycle management policies.
   * 
   * @remarks
   * This feature is supported only by General-purpose NAS file systems and CPFS for Lingjun.
   * 
   * @param request - DescribeLifecyclePoliciesRequest
   * @returns DescribeLifecyclePoliciesResponse
   */
  async describeLifecyclePolicies(request: $_model.DescribeLifecyclePoliciesRequest): Promise<$_model.DescribeLifecyclePoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLifecyclePoliciesWithOptions(request, runtime);
  }

  /**
   * Queries the execution logs of a lifecycle policy. You can query the logs generated within the last 90 days or up to 1,000 log entries. Only CPFS for Lingjun is supported.
   * 
   * @remarks
   * Queries the execution logs of a lifecycle policy. You can query the logs generated within the last 90 days or up to 1,000 log entries. Only CPFS for Lingjun is supported.
   * ## Before you begin
   * - Make sure that the file system specified by FileSystemId is a CPFS for Lingjun file system.
   * - Before you call this operation, call [DescribeLifecyclePolicies](https://www.alibabacloud.com/help/en/nas/developer-reference/api-nas-2017-06-26-describelifecyclepolicies) to query and obtain a valid LifecyclePolicyId.
   * 
   * @param request - DescribeLifecyclePolicyLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLifecyclePolicyLogsResponse
   */
  async describeLifecyclePolicyLogsWithOptions(request: $_model.DescribeLifecyclePolicyLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLifecyclePolicyLogsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.lifecyclePolicyId)) {
      query["LifecyclePolicyId"] = request.lifecyclePolicyId;
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
      action: "DescribeLifecyclePolicyLogs",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLifecyclePolicyLogsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLifecyclePolicyLogsResponse({}));
  }

  /**
   * Queries the execution logs of a lifecycle policy. You can query the logs generated within the last 90 days or up to 1,000 log entries. Only CPFS for Lingjun is supported.
   * 
   * @remarks
   * Queries the execution logs of a lifecycle policy. You can query the logs generated within the last 90 days or up to 1,000 log entries. Only CPFS for Lingjun is supported.
   * ## Before you begin
   * - Make sure that the file system specified by FileSystemId is a CPFS for Lingjun file system.
   * - Before you call this operation, call [DescribeLifecyclePolicies](https://www.alibabacloud.com/help/en/nas/developer-reference/api-nas-2017-06-26-describelifecyclepolicies) to query and obtain a valid LifecyclePolicyId.
   * 
   * @param request - DescribeLifecyclePolicyLogsRequest
   * @returns DescribeLifecyclePolicyLogsResponse
   */
  async describeLifecyclePolicyLogs(request: $_model.DescribeLifecyclePolicyLogsRequest): Promise<$_model.DescribeLifecyclePolicyLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLifecyclePolicyLogsWithOptions(request, runtime);
  }

  /**
   * Lists the log analysis configurations in log analysis.
   * 
   * @param request - DescribeLogAnalysisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLogAnalysisResponse
   */
  async describeLogAnalysisWithOptions(request: $_model.DescribeLogAnalysisRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLogAnalysisResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemType)) {
      query["FileSystemType"] = request.fileSystemType;
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
      action: "DescribeLogAnalysis",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLogAnalysisResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLogAnalysisResponse({}));
  }

  /**
   * Lists the log analysis configurations in log analysis.
   * 
   * @param request - DescribeLogAnalysisRequest
   * @returns DescribeLogAnalysisResponse
   */
  async describeLogAnalysis(request: $_model.DescribeLogAnalysisRequest): Promise<$_model.DescribeLogAnalysisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLogAnalysisWithOptions(request, runtime);
  }

  /**
   * Queries mount target information.
   * 
   * @param request - DescribeMountTargetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMountTargetsResponse
   */
  async describeMountTargetsWithOptions(request: $_model.DescribeMountTargetsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMountTargetsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dualStackMountTargetDomain)) {
      query["DualStackMountTargetDomain"] = request.dualStackMountTargetDomain;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.mountTargetDomain)) {
      query["MountTargetDomain"] = request.mountTargetDomain;
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
      action: "DescribeMountTargets",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMountTargetsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMountTargetsResponse({}));
  }

  /**
   * Queries mount target information.
   * 
   * @param request - DescribeMountTargetsRequest
   * @returns DescribeMountTargetsResponse
   */
  async describeMountTargets(request: $_model.DescribeMountTargetsRequest): Promise<$_model.DescribeMountTargetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMountTargetsWithOptions(request, runtime);
  }

  /**
   * Queries the list of mounted clients.
   * 
   * @remarks
   * - Only General-purpose NAS file systems support this operation.
   * - The client list displays client IP addresses that have read or write access to the file system within the last minute. Some mounted client IP addresses that have not accessed the file system may not appear in this list.
   * 
   * @param request - DescribeMountedClientsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMountedClientsResponse
   */
  async describeMountedClientsWithOptions(request: $_model.DescribeMountedClientsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMountedClientsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientIP)) {
      query["ClientIP"] = request.clientIP;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.mountTargetDomain)) {
      query["MountTargetDomain"] = request.mountTargetDomain;
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
      action: "DescribeMountedClients",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMountedClientsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMountedClientsResponse({}));
  }

  /**
   * Queries the list of mounted clients.
   * 
   * @remarks
   * - Only General-purpose NAS file systems support this operation.
   * - The client list displays client IP addresses that have read or write access to the file system within the last minute. Some mounted client IP addresses that have not accessed the file system may not appear in this list.
   * 
   * @param request - DescribeMountedClientsRequest
   * @returns DescribeMountedClientsResponse
   */
  async describeMountedClients(request: $_model.DescribeMountedClientsRequest): Promise<$_model.DescribeMountedClientsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMountedClientsWithOptions(request, runtime);
  }

  /**
   * Queries whether the NFS ACL feature is enabled for a specified file system.
   * 
   * @remarks
   * Only General-purpose NAS NFS file systems support this feature.
   * 
   * @param request - DescribeNfsAclRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNfsAclResponse
   */
  async describeNfsAclWithOptions(request: $_model.DescribeNfsAclRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNfsAclResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNfsAcl",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNfsAclResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNfsAclResponse({}));
  }

  /**
   * Queries whether the NFS ACL feature is enabled for a specified file system.
   * 
   * @remarks
   * Only General-purpose NAS NFS file systems support this feature.
   * 
   * @param request - DescribeNfsAclRequest
   * @returns DescribeNfsAclResponse
   */
  async describeNfsAcl(request: $_model.DescribeNfsAclRequest): Promise<$_model.DescribeNfsAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNfsAclWithOptions(request, runtime);
  }

  /**
   * Queries the export directories of a protocol service.
   * 
   * @remarks
   * This operation is applicable only to Cloud Parallel File Storage (CPFS) file systems.
   * 
   * @param request - DescribeProtocolMountTargetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProtocolMountTargetResponse
   */
  async describeProtocolMountTargetWithOptions(request: $_model.DescribeProtocolMountTargetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeProtocolMountTargetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.filters)) {
      query["Filters"] = request.filters;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.protocolServiceIds)) {
      query["ProtocolServiceIds"] = request.protocolServiceIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeProtocolMountTarget",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeProtocolMountTargetResponse>(await this.callApi(params, req, runtime), new $_model.DescribeProtocolMountTargetResponse({}));
  }

  /**
   * Queries the export directories of a protocol service.
   * 
   * @remarks
   * This operation is applicable only to Cloud Parallel File Storage (CPFS) file systems.
   * 
   * @param request - DescribeProtocolMountTargetRequest
   * @returns DescribeProtocolMountTargetResponse
   */
  async describeProtocolMountTarget(request: $_model.DescribeProtocolMountTargetRequest): Promise<$_model.DescribeProtocolMountTargetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeProtocolMountTargetWithOptions(request, runtime);
  }

  /**
   * Queries protocol service information.
   * 
   * @remarks
   * This operation is applicable only to Cloud Parallel File Storage (CPFS) file systems.
   * 
   * @param request - DescribeProtocolServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProtocolServiceResponse
   */
  async describeProtocolServiceWithOptions(request: $_model.DescribeProtocolServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeProtocolServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.protocolServiceIds)) {
      query["ProtocolServiceIds"] = request.protocolServiceIds;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeProtocolService",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeProtocolServiceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeProtocolServiceResponse({}));
  }

  /**
   * Queries protocol service information.
   * 
   * @remarks
   * This operation is applicable only to Cloud Parallel File Storage (CPFS) file systems.
   * 
   * @param request - DescribeProtocolServiceRequest
   * @returns DescribeProtocolServiceResponse
   */
  async describeProtocolService(request: $_model.DescribeProtocolServiceRequest): Promise<$_model.DescribeProtocolServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeProtocolServiceWithOptions(request, runtime);
  }

  /**
   * Queries the available Alibaba Cloud regions.
   * 
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: $_model.DescribeRegionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRegionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemType)) {
      query["FileSystemType"] = request.fileSystemType;
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
      action: "DescribeRegions",
      version: "2017-06-26",
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
   * Queries the available Alibaba Cloud regions.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: $_model.DescribeRegionsRequest): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Queries the SMB AD ACL feature.
   * 
   * @remarks
   * - Before you begin: Before calling this API, ensure that the KMS service is activated in the target region. You can activate it by calling the [Kms.OpenKmsService](https://www.alibabacloud.com/help/en/kms/key-management-service/developer-reference/api-kms-2016-01-20-openkmsservice) API or through the console. This restriction also applies to unencrypted file systems where EncryptType=0.
   * 
   * @param request - DescribeSmbAclRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSmbAclResponse
   */
  async describeSmbAclWithOptions(request: $_model.DescribeSmbAclRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSmbAclResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSmbAcl",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSmbAclResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSmbAclResponse({}));
  }

  /**
   * Queries the SMB AD ACL feature.
   * 
   * @remarks
   * - Before you begin: Before calling this API, ensure that the KMS service is activated in the target region. You can activate it by calling the [Kms.OpenKmsService](https://www.alibabacloud.com/help/en/kms/key-management-service/developer-reference/api-kms-2016-01-20-openkmsservice) API or through the console. This restriction also applies to unencrypted file systems where EncryptType=0.
   * 
   * @param request - DescribeSmbAclRequest
   * @returns DescribeSmbAclResponse
   */
  async describeSmbAcl(request: $_model.DescribeSmbAclRequest): Promise<$_model.DescribeSmbAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSmbAclWithOptions(request, runtime);
  }

  /**
   * Queries information about one or more snapshots of a specified file system.
   * 
   * @remarks
   * <props="china">
   * - This feature is in free public preview. During the public preview, the [File Storage NAS Service-Level Agreement (SLA)](https://terms.aliyun.com/legal-agreement/terms/suit_bu1_ali_cloud/suit_bu1_ali_cloud201803061139_99860.html?spm=a2c4g.11186623.0.0.5c895ff2YPLrwe) is not guaranteed.
   * -   Only Advanced Extreme NAS file systems support this feature.
   * <props="intl">
   * -  This feature is in free public preview. During the public preview, the [File Storage NAS Service-Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed.
   * - Only Advanced Extreme NAS file systems support this feature.
   * 
   * @param request - DescribeSnapshotsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSnapshotsResponse
   */
  async describeSnapshotsWithOptions(request: $_model.DescribeSnapshotsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSnapshotsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.fileSystemType)) {
      query["FileSystemType"] = request.fileSystemType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.snapshotIds)) {
      query["SnapshotIds"] = request.snapshotIds;
    }

    if (!$dara.isNull(request.snapshotName)) {
      query["SnapshotName"] = request.snapshotName;
    }

    if (!$dara.isNull(request.snapshotType)) {
      query["SnapshotType"] = request.snapshotType;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSnapshots",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSnapshotsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSnapshotsResponse({}));
  }

  /**
   * Queries information about one or more snapshots of a specified file system.
   * 
   * @remarks
   * <props="china">
   * - This feature is in free public preview. During the public preview, the [File Storage NAS Service-Level Agreement (SLA)](https://terms.aliyun.com/legal-agreement/terms/suit_bu1_ali_cloud/suit_bu1_ali_cloud201803061139_99860.html?spm=a2c4g.11186623.0.0.5c895ff2YPLrwe) is not guaranteed.
   * -   Only Advanced Extreme NAS file systems support this feature.
   * <props="intl">
   * -  This feature is in free public preview. During the public preview, the [File Storage NAS Service-Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed.
   * - Only Advanced Extreme NAS file systems support this feature.
   * 
   * @param request - DescribeSnapshotsRequest
   * @returns DescribeSnapshotsResponse
   */
  async describeSnapshots(request: $_model.DescribeSnapshotsRequest): Promise<$_model.DescribeSnapshotsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSnapshotsWithOptions(request, runtime);
  }

  /**
   * Queries the list of storage plans.
   * 
   * @param request - DescribeStoragePackagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeStoragePackagesResponse
   */
  async describeStoragePackagesWithOptions(request: $_model.DescribeStoragePackagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeStoragePackagesResponse> {
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

    if (!$dara.isNull(request.useUTCDateTime)) {
      query["UseUTCDateTime"] = request.useUTCDateTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeStoragePackages",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeStoragePackagesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeStoragePackagesResponse({}));
  }

  /**
   * Queries the list of storage plans.
   * 
   * @param request - DescribeStoragePackagesRequest
   * @returns DescribeStoragePackagesResponse
   */
  async describeStoragePackages(request: $_model.DescribeStoragePackagesRequest): Promise<$_model.DescribeStoragePackagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeStoragePackagesWithOptions(request, runtime);
  }

  /**
   * Queries all zones in a region and the file system types supported by each zone.
   * 
   * @param request - DescribeZonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeZonesResponse
   */
  async describeZonesWithOptions(request: $_model.DescribeZonesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeZonesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemType)) {
      query["FileSystemType"] = request.fileSystemType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeZones",
      version: "2017-06-26",
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
   * Queries all zones in a region and the file system types supported by each zone.
   * 
   * @param request - DescribeZonesRequest
   * @returns DescribeZonesResponse
   */
  async describeZones(request: $_model.DescribeZonesRequest): Promise<$_model.DescribeZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeZonesWithOptions(request, runtime);
  }

  /**
   * Dissociates a Virtual Storage Channel (VSC) device from a file system.
   * 
   * @remarks
   * - Only CPFS for Lingjun supports this feature.
   * - Batch operations are supported. In batch mode, only one VscId can be associated with multiple FileSystemId values. This means the ResourceIds.VscId values must be the same.
   * 
   * @param request - DetachVscFromFilesystemsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachVscFromFilesystemsResponse
   */
  async detachVscFromFilesystemsWithOptions(request: $_model.DetachVscFromFilesystemsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachVscFromFilesystemsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.roleChain)) {
      query["RoleChain"] = request.roleChain;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachVscFromFilesystems",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachVscFromFilesystemsResponse>(await this.callApi(params, req, runtime), new $_model.DetachVscFromFilesystemsResponse({}));
  }

  /**
   * Dissociates a Virtual Storage Channel (VSC) device from a file system.
   * 
   * @remarks
   * - Only CPFS for Lingjun supports this feature.
   * - Batch operations are supported. In batch mode, only one VscId can be associated with multiple FileSystemId values. This means the ResourceIds.VscId values must be the same.
   * 
   * @param request - DetachVscFromFilesystemsRequest
   * @returns DetachVscFromFilesystemsResponse
   */
  async detachVscFromFilesystems(request: $_model.DetachVscFromFilesystemsRequest): Promise<$_model.DetachVscFromFilesystemsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachVscFromFilesystemsWithOptions(request, runtime);
  }

  /**
   * Disables the recycle bin feature for a General-purpose NAS file system and deletes all data in the recycle bin.
   * 
   * @remarks
   * - Only General-purpose NAS file systems support this feature.
   * - Disabling the recycle bin permanently deletes all files in the recycle bin.
   * - After a disabled recycle bin is re-enabled, the recycle bin is empty. Files deleted before the recycle bin was re-enabled cannot be recovered.
   * 
   * @param request - DisableAndCleanRecycleBinRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableAndCleanRecycleBinResponse
   */
  async disableAndCleanRecycleBinWithOptions(request: $_model.DisableAndCleanRecycleBinRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableAndCleanRecycleBinResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableAndCleanRecycleBin",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableAndCleanRecycleBinResponse>(await this.callApi(params, req, runtime), new $_model.DisableAndCleanRecycleBinResponse({}));
  }

  /**
   * Disables the recycle bin feature for a General-purpose NAS file system and deletes all data in the recycle bin.
   * 
   * @remarks
   * - Only General-purpose NAS file systems support this feature.
   * - Disabling the recycle bin permanently deletes all files in the recycle bin.
   * - After a disabled recycle bin is re-enabled, the recycle bin is empty. Files deleted before the recycle bin was re-enabled cannot be recovered.
   * 
   * @param request - DisableAndCleanRecycleBinRequest
   * @returns DisableAndCleanRecycleBinResponse
   */
  async disableAndCleanRecycleBin(request: $_model.DisableAndCleanRecycleBinRequest): Promise<$_model.DisableAndCleanRecycleBinResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableAndCleanRecycleBinWithOptions(request, runtime);
  }

  /**
   * Disables EBS Lens.
   * 
   * @remarks
   * - This operation is currently in invitational preview. To use this feature, submit a ticket.
   * 
   * @param request - DisableDataInsightRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableDataInsightResponse
   */
  async disableDataInsightWithOptions(request: $_model.DisableDataInsightRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableDataInsightResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableDataInsight",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableDataInsightResponse>(await this.callApi(params, req, runtime), new $_model.DisableDataInsightResponse({}));
  }

  /**
   * Disables EBS Lens.
   * 
   * @remarks
   * - This operation is currently in invitational preview. To use this feature, submit a ticket.
   * 
   * @param request - DisableDataInsightRequest
   * @returns DisableDataInsightResponse
   */
  async disableDataInsight(request: $_model.DisableDataInsightRequest): Promise<$_model.DisableDataInsightResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableDataInsightWithOptions(request, runtime);
  }

  /**
   * Disables the NFS ACL feature.
   * 
   * @remarks
   * Only General-purpose NAS NFS file systems support this feature.
   * 
   * @param request - DisableNfsAclRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableNfsAclResponse
   */
  async disableNfsAclWithOptions(request: $_model.DisableNfsAclRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableNfsAclResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableNfsAcl",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableNfsAclResponse>(await this.callApi(params, req, runtime), new $_model.DisableNfsAclResponse({}));
  }

  /**
   * Disables the NFS ACL feature.
   * 
   * @remarks
   * Only General-purpose NAS NFS file systems support this feature.
   * 
   * @param request - DisableNfsAclRequest
   * @returns DisableNfsAclResponse
   */
  async disableNfsAcl(request: $_model.DisableNfsAclRequest): Promise<$_model.DisableNfsAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableNfsAclWithOptions(request, runtime);
  }

  /**
   * Disables the SMB AD ACL feature.
   * 
   * @remarks
   * - Before you begin: Before calling this API, make sure that Key Management Service (KMS) is activated in the target region. You can activate KMS by calling the [Kms.OpenKmsService](https://www.alibabacloud.com/help/en/kms/key-management-service/developer-reference/api-kms-2016-01-20-openkmsservice) API or by using the console. The file system protocol type must be SMB. You can call [DescribeFileSystems](https://www.alibabacloud.com/help/en/nas/developer-reference/api-nas-2017-06-26-describefilesystems) to verify the file system protocol type.
   * 
   * @param request - DisableSmbAclRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableSmbAclResponse
   */
  async disableSmbAclWithOptions(request: $_model.DisableSmbAclRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableSmbAclResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableSmbAcl",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableSmbAclResponse>(await this.callApi(params, req, runtime), new $_model.DisableSmbAclResponse({}));
  }

  /**
   * Disables the SMB AD ACL feature.
   * 
   * @remarks
   * - Before you begin: Before calling this API, make sure that Key Management Service (KMS) is activated in the target region. You can activate KMS by calling the [Kms.OpenKmsService](https://www.alibabacloud.com/help/en/kms/key-management-service/developer-reference/api-kms-2016-01-20-openkmsservice) API or by using the console. The file system protocol type must be SMB. You can call [DescribeFileSystems](https://www.alibabacloud.com/help/en/nas/developer-reference/api-nas-2017-06-26-describefilesystems) to verify the file system protocol type.
   * 
   * @param request - DisableSmbAclRequest
   * @returns DisableSmbAclResponse
   */
  async disableSmbAcl(request: $_model.DisableSmbAclRequest): Promise<$_model.DisableSmbAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableSmbAclWithOptions(request, runtime);
  }

  /**
   * Enables EBS Lens.
   * 
   * @remarks
   * - This feature is currently in invitational preview. To use this feature, submit a ticket.
   * 
   * @param request - EnableDataInsightRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableDataInsightResponse
   */
  async enableDataInsightWithOptions(request: $_model.EnableDataInsightRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableDataInsightResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableDataInsight",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableDataInsightResponse>(await this.callApi(params, req, runtime), new $_model.EnableDataInsightResponse({}));
  }

  /**
   * Enables EBS Lens.
   * 
   * @remarks
   * - This feature is currently in invitational preview. To use this feature, submit a ticket.
   * 
   * @param request - EnableDataInsightRequest
   * @returns EnableDataInsightResponse
   */
  async enableDataInsight(request: $_model.EnableDataInsightRequest): Promise<$_model.EnableDataInsightResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableDataInsightWithOptions(request, runtime);
  }

  /**
   * Enables the NFS ACL feature.
   * 
   * @remarks
   * Only General-purpose NAS NFS file systems support this feature.
   * 
   * @param request - EnableNfsAclRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableNfsAclResponse
   */
  async enableNfsAclWithOptions(request: $_model.EnableNfsAclRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableNfsAclResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableNfsAcl",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableNfsAclResponse>(await this.callApi(params, req, runtime), new $_model.EnableNfsAclResponse({}));
  }

  /**
   * Enables the NFS ACL feature.
   * 
   * @remarks
   * Only General-purpose NAS NFS file systems support this feature.
   * 
   * @param request - EnableNfsAclRequest
   * @returns EnableNfsAclResponse
   */
  async enableNfsAcl(request: $_model.EnableNfsAclRequest): Promise<$_model.EnableNfsAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableNfsAclWithOptions(request, runtime);
  }

  /**
   * Enables the recycle bin feature.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this operation.
   * 
   * @param request - EnableRecycleBinRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableRecycleBinResponse
   */
  async enableRecycleBinWithOptions(request: $_model.EnableRecycleBinRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableRecycleBinResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.reservedDays)) {
      query["ReservedDays"] = request.reservedDays;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableRecycleBin",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableRecycleBinResponse>(await this.callApi(params, req, runtime), new $_model.EnableRecycleBinResponse({}));
  }

  /**
   * Enables the recycle bin feature.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this operation.
   * 
   * @param request - EnableRecycleBinRequest
   * @returns EnableRecycleBinResponse
   */
  async enableRecycleBin(request: $_model.EnableRecycleBinRequest): Promise<$_model.EnableRecycleBinResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableRecycleBinWithOptions(request, runtime);
  }

  /**
   * Enables the SMB AD ACL feature.
   * 
   * @remarks
   * - By connecting the mount target of an SMB file system to an AD domain, you can implement user identity authentication management and file-level access permissions control in the AD domain. Before you mount and use an SMB file system as an AD domain user, you must register a service for the SMB file system in the AD domain, generate a keytab file, and upload the file to the NAS console to enable the SMB ACL feature. [Generate a keytab file](https://help.aliyun.com/document_detail/154930.html).
   * - Before you begin: Before invoking this operation, confirm that Key Management Service (KMS) is activated in the target area. You can invoke the [Kms.OpenKmsService](https://www.alibabacloud.com/help/en/kms/key-management-service/developer-reference/api-kms-2016-01-20-openkmsservice) operation or activate KMS in the console.
   * 
   * @param request - EnableSmbAclRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableSmbAclResponse
   */
  async enableSmbAclWithOptions(request: $_model.EnableSmbAclRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableSmbAclResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.keytab)) {
      query["Keytab"] = request.keytab;
    }

    if (!$dara.isNull(request.keytabMd5)) {
      query["KeytabMd5"] = request.keytabMd5;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableSmbAcl",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableSmbAclResponse>(await this.callApi(params, req, runtime), new $_model.EnableSmbAclResponse({}));
  }

  /**
   * Enables the SMB AD ACL feature.
   * 
   * @remarks
   * - By connecting the mount target of an SMB file system to an AD domain, you can implement user identity authentication management and file-level access permissions control in the AD domain. Before you mount and use an SMB file system as an AD domain user, you must register a service for the SMB file system in the AD domain, generate a keytab file, and upload the file to the NAS console to enable the SMB ACL feature. [Generate a keytab file](https://help.aliyun.com/document_detail/154930.html).
   * - Before you begin: Before invoking this operation, confirm that Key Management Service (KMS) is activated in the target area. You can invoke the [Kms.OpenKmsService](https://www.alibabacloud.com/help/en/kms/key-management-service/developer-reference/api-kms-2016-01-20-openkmsservice) operation or activate KMS in the console.
   * 
   * @param request - EnableSmbAclRequest
   * @returns EnableSmbAclResponse
   */
  async enableSmbAcl(request: $_model.EnableSmbAclRequest): Promise<$_model.EnableSmbAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableSmbAclWithOptions(request, runtime);
  }

  /**
   * Queries an Agentic space.
   * 
   * @remarks
   * Applies to agentic-type file systems.
   * 
   * @param request - GetAgenticSpaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAgenticSpaceResponse
   */
  async getAgenticSpaceWithOptions(request: $_model.GetAgenticSpaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAgenticSpaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agenticSpaceId)) {
      query["AgenticSpaceId"] = request.agenticSpaceId;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAgenticSpace",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAgenticSpaceResponse>(await this.callApi(params, req, runtime), new $_model.GetAgenticSpaceResponse({}));
  }

  /**
   * Queries an Agentic space.
   * 
   * @remarks
   * Applies to agentic-type file systems.
   * 
   * @param request - GetAgenticSpaceRequest
   * @returns GetAgenticSpaceResponse
   */
  async getAgenticSpace(request: $_model.GetAgenticSpaceRequest): Promise<$_model.GetAgenticSpaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAgenticSpaceWithOptions(request, runtime);
  }

  /**
   * Queries whether a specified directory contains Infrequent Access (IA) storage class or Archive storage class files, or queries whether a specified file is an IA storage class or Archive storage class file.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this feature.
   * 
   * @param request - GetDirectoryOrFilePropertiesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDirectoryOrFilePropertiesResponse
   */
  async getDirectoryOrFilePropertiesWithOptions(request: $_model.GetDirectoryOrFilePropertiesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDirectoryOrFilePropertiesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDirectoryOrFileProperties",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDirectoryOrFilePropertiesResponse>(await this.callApi(params, req, runtime), new $_model.GetDirectoryOrFilePropertiesResponse({}));
  }

  /**
   * Queries whether a specified directory contains Infrequent Access (IA) storage class or Archive storage class files, or queries whether a specified file is an IA storage class or Archive storage class file.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this feature.
   * 
   * @param request - GetDirectoryOrFilePropertiesRequest
   * @returns GetDirectoryOrFilePropertiesResponse
   */
  async getDirectoryOrFileProperties(request: $_model.GetDirectoryOrFilePropertiesRequest): Promise<$_model.GetDirectoryOrFilePropertiesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDirectoryOrFilePropertiesWithOptions(request, runtime);
  }

  /**
   * Queries information about a created Fileset.
   * 
   * @remarks
   * Only CPFS 2.2.0 and later and CPFS for Lingjun 2.7.0 and later support Filesets. You can view the version information on the file system details page in the console.
   * 
   * @param request - GetFilesetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFilesetResponse
   */
  async getFilesetWithOptions(request: $_model.GetFilesetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetFilesetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.fsetId)) {
      query["FsetId"] = request.fsetId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFileset",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFilesetResponse>(await this.callApi(params, req, runtime), new $_model.GetFilesetResponse({}));
  }

  /**
   * Queries information about a created Fileset.
   * 
   * @remarks
   * Only CPFS 2.2.0 and later and CPFS for Lingjun 2.7.0 and later support Filesets. You can view the version information on the file system details page in the console.
   * 
   * @param request - GetFilesetRequest
   * @returns GetFilesetResponse
   */
  async getFileset(request: $_model.GetFilesetRequest): Promise<$_model.GetFilesetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFilesetWithOptions(request, runtime);
  }

  /**
   * Queries the export directory information of a protocol service.
   * 
   * @remarks
   * Queries the export directory information of a protocol service.
   * **Before you begin**
   * Before you call this operation, make sure that each dependent resource in the following three-layer resource model already exists:
   * 1. **File system (FileSystem)**: Call [DescribeFileSystems](https://www.alibabacloud.com/help/en/nas/developer-reference/api-nas-2017-06-26-describefilesystems) to obtain the FileSystemId.
   * 2. **Protocol service (ProtocolService)**: Call [DescribeProtocolService](https://www.alibabacloud.com/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-describeprotocolservice-cpfs) to obtain the ProtocolServiceId, or call [CreateProtocolService](https://www.alibabacloud.com/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-createprotocolservice-cpfs) to create one.
   * 3. **Export directory (ProtocolMountTarget)**: Call [CreateProtocolMountTarget](https://www.alibabacloud.com/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-createprotocolmounttarget-cpfs) to create an export directory and obtain the ExportId, or call [DescribeProtocolMountTarget](https://www.alibabacloud.com/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-describeprotocolmounttarget-cpfs) to query the ExportId.
   * 
   * @param request - GetProtocolMountTargetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProtocolMountTargetResponse
   */
  async getProtocolMountTargetWithOptions(request: $_model.GetProtocolMountTargetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetProtocolMountTargetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.exportId)) {
      query["ExportId"] = request.exportId;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.protocolServiceId)) {
      query["ProtocolServiceId"] = request.protocolServiceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetProtocolMountTarget",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetProtocolMountTargetResponse>(await this.callApi(params, req, runtime), new $_model.GetProtocolMountTargetResponse({}));
  }

  /**
   * Queries the export directory information of a protocol service.
   * 
   * @remarks
   * Queries the export directory information of a protocol service.
   * **Before you begin**
   * Before you call this operation, make sure that each dependent resource in the following three-layer resource model already exists:
   * 1. **File system (FileSystem)**: Call [DescribeFileSystems](https://www.alibabacloud.com/help/en/nas/developer-reference/api-nas-2017-06-26-describefilesystems) to obtain the FileSystemId.
   * 2. **Protocol service (ProtocolService)**: Call [DescribeProtocolService](https://www.alibabacloud.com/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-describeprotocolservice-cpfs) to obtain the ProtocolServiceId, or call [CreateProtocolService](https://www.alibabacloud.com/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-createprotocolservice-cpfs) to create one.
   * 3. **Export directory (ProtocolMountTarget)**: Call [CreateProtocolMountTarget](https://www.alibabacloud.com/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-createprotocolmounttarget-cpfs) to create an export directory and obtain the ExportId, or call [DescribeProtocolMountTarget](https://www.alibabacloud.com/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-describeprotocolmounttarget-cpfs) to query the ExportId.
   * 
   * @param request - GetProtocolMountTargetRequest
   * @returns GetProtocolMountTargetResponse
   */
  async getProtocolMountTarget(request: $_model.GetProtocolMountTargetRequest): Promise<$_model.GetProtocolMountTargetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getProtocolMountTargetWithOptions(request, runtime);
  }

  /**
   * Queries the recycle bin configuration of a specified General-purpose NAS file system.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this feature.
   * 
   * @param request - GetRecycleBinAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRecycleBinAttributeResponse
   */
  async getRecycleBinAttributeWithOptions(request: $_model.GetRecycleBinAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRecycleBinAttributeResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRecycleBinAttribute",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRecycleBinAttributeResponse>(await this.callApi(params, req, runtime), new $_model.GetRecycleBinAttributeResponse({}));
  }

  /**
   * Queries the recycle bin configuration of a specified General-purpose NAS file system.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this feature.
   * 
   * @param request - GetRecycleBinAttributeRequest
   * @returns GetRecycleBinAttributeResponse
   */
  async getRecycleBinAttribute(request: $_model.GetRecycleBinAttributeRequest): Promise<$_model.GetRecycleBinAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRecycleBinAttributeWithOptions(request, runtime);
  }

  /**
   * Queries access point information.
   * 
   * @remarks
   * Only General-purpose NAS NFS file systems are supported.
   * 
   * @param request - ListAccessPointsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAccessPointsResponse
   */
  async listAccessPointsWithOptions(request: $_model.ListAccessPointsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAccessPointsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.filters)) {
      query["Filters"] = request.filters;
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
      action: "ListAccessPoints",
      version: "2017-06-26",
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
   * Queries access point information.
   * 
   * @remarks
   * Only General-purpose NAS NFS file systems are supported.
   * 
   * @param request - ListAccessPointsRequest
   * @returns ListAccessPointsResponse
   */
  async listAccessPoints(request: $_model.ListAccessPointsRequest): Promise<$_model.ListAccessPointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAccessPointsWithOptions(request, runtime);
  }

  /**
   * Retrieves the directory structure of EBS Lens.
   * 
   * @remarks
   * - This feature is currently in invitational preview. To use this feature, submit a ticket.
   * 
   * @param request - ListDataInsightDirectoriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataInsightDirectoriesResponse
   */
  async listDataInsightDirectoriesWithOptions(request: $_model.ListDataInsightDirectoriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataInsightDirectoriesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.parentDir)) {
      query["ParentDir"] = request.parentDir;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataInsightDirectories",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataInsightDirectoriesResponse>(await this.callApi(params, req, runtime), new $_model.ListDataInsightDirectoriesResponse({}));
  }

  /**
   * Retrieves the directory structure of EBS Lens.
   * 
   * @remarks
   * - This feature is currently in invitational preview. To use this feature, submit a ticket.
   * 
   * @param request - ListDataInsightDirectoriesRequest
   * @returns ListDataInsightDirectoriesResponse
   */
  async listDataInsightDirectories(request: $_model.ListDataInsightDirectoriesRequest): Promise<$_model.ListDataInsightDirectoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataInsightDirectoriesWithOptions(request, runtime);
  }

  /**
   * Retrieves the list of IA storage class files and subdirectories that contain IA storage class files under a specified directory in a General-purpose NAS file system.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this feature.
   * 
   * @param request - ListDirectoriesAndFilesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDirectoriesAndFilesResponse
   */
  async listDirectoriesAndFilesWithOptions(request: $_model.ListDirectoriesAndFilesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDirectoriesAndFilesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryOnly)) {
      query["DirectoryOnly"] = request.directoryOnly;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    if (!$dara.isNull(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDirectoriesAndFiles",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDirectoriesAndFilesResponse>(await this.callApi(params, req, runtime), new $_model.ListDirectoriesAndFilesResponse({}));
  }

  /**
   * Retrieves the list of IA storage class files and subdirectories that contain IA storage class files under a specified directory in a General-purpose NAS file system.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this feature.
   * 
   * @param request - ListDirectoriesAndFilesRequest
   * @returns ListDirectoriesAndFilesResponse
   */
  async listDirectoriesAndFiles(request: $_model.ListDirectoriesAndFilesRequest): Promise<$_model.ListDirectoriesAndFilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDirectoriesAndFilesWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of created data retrieval tasks.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this feature.
   * 
   * @param request - ListLifecycleRetrieveJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLifecycleRetrieveJobsResponse
   */
  async listLifecycleRetrieveJobsWithOptions(request: $_model.ListLifecycleRetrieveJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListLifecycleRetrieveJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLifecycleRetrieveJobs",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLifecycleRetrieveJobsResponse>(await this.callApi(params, req, runtime), new $_model.ListLifecycleRetrieveJobsResponse({}));
  }

  /**
   * Retrieves a list of created data retrieval tasks.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this feature.
   * 
   * @param request - ListLifecycleRetrieveJobsRequest
   * @returns ListLifecycleRetrieveJobsResponse
   */
  async listLifecycleRetrieveJobs(request: $_model.ListLifecycleRetrieveJobsRequest): Promise<$_model.ListLifecycleRetrieveJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLifecycleRetrieveJobsWithOptions(request, runtime);
  }

  /**
   * Queries directories on which delete operations were recently performed.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this feature.
   * **Before you begin**
   * Before calling this operation, make sure that the recycle bin feature is enabled for the file system. If the recycle bin is not enabled, this operation cannot return the list of recently deleted directories.
   * **Enable the recycle bin**
   * To enable the recycle bin feature, call the [EnableRecycleBin](https://www.alibabacloud.com/help/en/nas/developer-reference/api-nas-2017-06-26-enablerecyclebin) operation. After the recycle bin is enabled, deleted directories in the file system are moved to the recycle bin. You can call this operation to query the list of recently deleted directories.
   * 
   * @param request - ListRecentlyRecycledDirectoriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRecentlyRecycledDirectoriesResponse
   */
  async listRecentlyRecycledDirectoriesWithOptions(request: $_model.ListRecentlyRecycledDirectoriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRecentlyRecycledDirectoriesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRecentlyRecycledDirectories",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRecentlyRecycledDirectoriesResponse>(await this.callApi(params, req, runtime), new $_model.ListRecentlyRecycledDirectoriesResponse({}));
  }

  /**
   * Queries directories on which delete operations were recently performed.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this feature.
   * **Before you begin**
   * Before calling this operation, make sure that the recycle bin feature is enabled for the file system. If the recycle bin is not enabled, this operation cannot return the list of recently deleted directories.
   * **Enable the recycle bin**
   * To enable the recycle bin feature, call the [EnableRecycleBin](https://www.alibabacloud.com/help/en/nas/developer-reference/api-nas-2017-06-26-enablerecyclebin) operation. After the recycle bin is enabled, deleted directories in the file system are moved to the recycle bin. You can call this operation to query the list of recently deleted directories.
   * 
   * @param request - ListRecentlyRecycledDirectoriesRequest
   * @returns ListRecentlyRecycledDirectoriesResponse
   */
  async listRecentlyRecycledDirectories(request: $_model.ListRecentlyRecycledDirectoriesRequest): Promise<$_model.ListRecentlyRecycledDirectoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRecentlyRecycledDirectoriesWithOptions(request, runtime);
  }

  /**
   * Queries information about one or more tasks in the recycle bin.
   * 
   * @remarks
   * - Only General-purpose NAS file systems support this feature.
   * - You can query up to 50 most recently executed tasks.
   * 
   * @param request - ListRecycleBinJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRecycleBinJobsResponse
   */
  async listRecycleBinJobsWithOptions(request: $_model.ListRecycleBinJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRecycleBinJobsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRecycleBinJobs",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRecycleBinJobsResponse>(await this.callApi(params, req, runtime), new $_model.ListRecycleBinJobsResponse({}));
  }

  /**
   * Queries information about one or more tasks in the recycle bin.
   * 
   * @remarks
   * - Only General-purpose NAS file systems support this feature.
   * - You can query up to 50 most recently executed tasks.
   * 
   * @param request - ListRecycleBinJobsRequest
   * @returns ListRecycleBinJobsResponse
   */
  async listRecycleBinJobs(request: $_model.ListRecycleBinJobsRequest): Promise<$_model.ListRecycleBinJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRecycleBinJobsWithOptions(request, runtime);
  }

  /**
   * Queries deleted files or directories.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this feature.
   * 
   * @param request - ListRecycledDirectoriesAndFilesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRecycledDirectoriesAndFilesResponse
   */
  async listRecycledDirectoriesAndFilesWithOptions(request: $_model.ListRecycledDirectoriesAndFilesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRecycledDirectoriesAndFilesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRecycledDirectoriesAndFiles",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRecycledDirectoriesAndFilesResponse>(await this.callApi(params, req, runtime), new $_model.ListRecycledDirectoriesAndFilesResponse({}));
  }

  /**
   * Queries deleted files or directories.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this feature.
   * 
   * @param request - ListRecycledDirectoriesAndFilesRequest
   * @returns ListRecycledDirectoriesAndFilesResponse
   */
  async listRecycledDirectoriesAndFiles(request: $_model.ListRecycledDirectoriesAndFilesRequest): Promise<$_model.ListRecycledDirectoriesAndFilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRecycledDirectoriesAndFilesWithOptions(request, runtime);
  }

  /**
   * Queries a list of tags.
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
      version: "2017-06-26",
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
   * Queries a list of tags.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Modifies a permission group.
   * 
   * @remarks
   * The default permission group (DEFAULT_VPC_GROUP_NAME) cannot be modified.
   * 
   * @param request - ModifyAccessGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAccessGroupResponse
   */
  async modifyAccessGroupWithOptions(request: $_model.ModifyAccessGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAccessGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessGroupName)) {
      query["AccessGroupName"] = request.accessGroupName;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.fileSystemType)) {
      query["FileSystemType"] = request.fileSystemType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAccessGroup",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAccessGroupResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAccessGroupResponse({}));
  }

  /**
   * Modifies a permission group.
   * 
   * @remarks
   * The default permission group (DEFAULT_VPC_GROUP_NAME) cannot be modified.
   * 
   * @param request - ModifyAccessGroupRequest
   * @returns ModifyAccessGroupResponse
   */
  async modifyAccessGroup(request: $_model.ModifyAccessGroupRequest): Promise<$_model.ModifyAccessGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAccessGroupWithOptions(request, runtime);
  }

  /**
   * Modifies access point information.
   * 
   * @remarks
   * Only General-purpose NAS NFS file systems support this feature.
   * 
   * @param request - ModifyAccessPointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAccessPointResponse
   */
  async modifyAccessPointWithOptions(request: $_model.ModifyAccessPointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAccessPointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessGroup)) {
      query["AccessGroup"] = request.accessGroup;
    }

    if (!$dara.isNull(request.accessPointId)) {
      query["AccessPointId"] = request.accessPointId;
    }

    if (!$dara.isNull(request.accessPointName)) {
      query["AccessPointName"] = request.accessPointName;
    }

    if (!$dara.isNull(request.enabledRam)) {
      query["EnabledRam"] = request.enabledRam;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAccessPoint",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAccessPointResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAccessPointResponse({}));
  }

  /**
   * Modifies access point information.
   * 
   * @remarks
   * Only General-purpose NAS NFS file systems support this feature.
   * 
   * @param request - ModifyAccessPointRequest
   * @returns ModifyAccessPointResponse
   */
  async modifyAccessPoint(request: $_model.ModifyAccessPointRequest): Promise<$_model.ModifyAccessPointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAccessPointWithOptions(request, runtime);
  }

  /**
   * Modifies a permission rule in a permission group.
   * 
   * @remarks
   * Rules in the default permission group (DEFAULT_VPC_GROUP_NAME) cannot be modified.
   * 
   * @param request - ModifyAccessRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAccessRuleResponse
   */
  async modifyAccessRuleWithOptions(request: $_model.ModifyAccessRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAccessRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessGroupName)) {
      query["AccessGroupName"] = request.accessGroupName;
    }

    if (!$dara.isNull(request.accessRuleId)) {
      query["AccessRuleId"] = request.accessRuleId;
    }

    if (!$dara.isNull(request.fileSystemType)) {
      query["FileSystemType"] = request.fileSystemType;
    }

    if (!$dara.isNull(request.ipv6SourceCidrIp)) {
      query["Ipv6SourceCidrIp"] = request.ipv6SourceCidrIp;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.RWAccessType)) {
      query["RWAccessType"] = request.RWAccessType;
    }

    if (!$dara.isNull(request.sourceCidrIp)) {
      query["SourceCidrIp"] = request.sourceCidrIp;
    }

    if (!$dara.isNull(request.userAccessType)) {
      query["UserAccessType"] = request.userAccessType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAccessRule",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAccessRuleResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAccessRuleResponse({}));
  }

  /**
   * Modifies a permission rule in a permission group.
   * 
   * @remarks
   * Rules in the default permission group (DEFAULT_VPC_GROUP_NAME) cannot be modified.
   * 
   * @param request - ModifyAccessRuleRequest
   * @returns ModifyAccessRuleResponse
   */
  async modifyAccessRule(request: $_model.ModifyAccessRuleRequest): Promise<$_model.ModifyAccessRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAccessRuleWithOptions(request, runtime);
  }

  /**
   * Modifies an Agentic space.
   * 
   * @remarks
   * *Prerequisites**
   * Before you call this operation, complete the following preparations:
   * 1. **Obtain an AgenticSpaceId**: Call the [CreateAgenticSpace](https://www.alibabacloud.com/help/en/nas/developer-reference/api-nas-2017-06-26-createagenticspace) operation to create an Agentic space and obtain the AgenticSpaceId.
   * 2. **Create an Agentic file system**: When you call the [CreateFileSystem](https://www.alibabacloud.com/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-createfilesystem-cpfs) operation to create a file system, set the following parameters:
   *    - `StorageType`: Set to `Agentic`.
   *    - `ProtocolType`: Set to `NFS`.
   *    - **Supported regions**: The Agentic storage type is available only in specific regions and zones. Check the console for details.
   * **Usage notes**
   * - This operation applies only to Agentic file systems.
   * - Complete call chain example:
   *   1. Call CreateFileSystem to create an Agentic file system (StorageType=Agentic, ProtocolType=NFS).
   *   2. After the file system is created (status is Running), call CreateAgenticSpace to create an Agentic space.
   *   3. Call ModifyAgenticSpace to modify the Agentic space configurations.
   * 
   * @param request - ModifyAgenticSpaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAgenticSpaceResponse
   */
  async modifyAgenticSpaceWithOptions(request: $_model.ModifyAgenticSpaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAgenticSpaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agenticSpaceId)) {
      query["AgenticSpaceId"] = request.agenticSpaceId;
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

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAgenticSpace",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAgenticSpaceResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAgenticSpaceResponse({}));
  }

  /**
   * Modifies an Agentic space.
   * 
   * @remarks
   * *Prerequisites**
   * Before you call this operation, complete the following preparations:
   * 1. **Obtain an AgenticSpaceId**: Call the [CreateAgenticSpace](https://www.alibabacloud.com/help/en/nas/developer-reference/api-nas-2017-06-26-createagenticspace) operation to create an Agentic space and obtain the AgenticSpaceId.
   * 2. **Create an Agentic file system**: When you call the [CreateFileSystem](https://www.alibabacloud.com/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-createfilesystem-cpfs) operation to create a file system, set the following parameters:
   *    - `StorageType`: Set to `Agentic`.
   *    - `ProtocolType`: Set to `NFS`.
   *    - **Supported regions**: The Agentic storage type is available only in specific regions and zones. Check the console for details.
   * **Usage notes**
   * - This operation applies only to Agentic file systems.
   * - Complete call chain example:
   *   1. Call CreateFileSystem to create an Agentic file system (StorageType=Agentic, ProtocolType=NFS).
   *   2. After the file system is created (status is Running), call CreateAgenticSpace to create an Agentic space.
   *   3. Call ModifyAgenticSpace to modify the Agentic space configurations.
   * 
   * @param request - ModifyAgenticSpaceRequest
   * @returns ModifyAgenticSpaceResponse
   */
  async modifyAgenticSpace(request: $_model.ModifyAgenticSpaceRequest): Promise<$_model.ModifyAgenticSpaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAgenticSpaceWithOptions(request, runtime);
  }

  /**
   * Modifies an automatic snapshot policy. After you modify an automatic snapshot policy, file systems to which the policy has been applied immediately execute the modified policy.
   * 
   * @remarks
   * <props="china">
   * - This feature is in free public preview. During the public preview, the [File Storage NAS Service-Level Agreement (SLA)](https://terms.aliyun.com/legal-agreement/terms/suit_bu1_ali_cloud/suit_bu1_ali_cloud201803061139_99860.html?spm=a2c4g.11186623.0.0.5c895ff2YPLrwe) is not guaranteed.
   * - Only Advanced Extreme NAS file systems support this feature.
   * <props="intl">
   * - This feature is in free public preview. During the public preview, the [File Storage NAS Service-Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed.
   * - Only Advanced Extreme NAS file systems support this feature.
   * 
   * @param request - ModifyAutoSnapshotPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAutoSnapshotPolicyResponse
   */
  async modifyAutoSnapshotPolicyWithOptions(request: $_model.ModifyAutoSnapshotPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAutoSnapshotPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoSnapshotPolicyId)) {
      query["AutoSnapshotPolicyId"] = request.autoSnapshotPolicyId;
    }

    if (!$dara.isNull(request.autoSnapshotPolicyName)) {
      query["AutoSnapshotPolicyName"] = request.autoSnapshotPolicyName;
    }

    if (!$dara.isNull(request.repeatWeekdays)) {
      query["RepeatWeekdays"] = request.repeatWeekdays;
    }

    if (!$dara.isNull(request.retentionDays)) {
      query["RetentionDays"] = request.retentionDays;
    }

    if (!$dara.isNull(request.timePoints)) {
      query["TimePoints"] = request.timePoints;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAutoSnapshotPolicy",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAutoSnapshotPolicyResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAutoSnapshotPolicyResponse({}));
  }

  /**
   * Modifies an automatic snapshot policy. After you modify an automatic snapshot policy, file systems to which the policy has been applied immediately execute the modified policy.
   * 
   * @remarks
   * <props="china">
   * - This feature is in free public preview. During the public preview, the [File Storage NAS Service-Level Agreement (SLA)](https://terms.aliyun.com/legal-agreement/terms/suit_bu1_ali_cloud/suit_bu1_ali_cloud201803061139_99860.html?spm=a2c4g.11186623.0.0.5c895ff2YPLrwe) is not guaranteed.
   * - Only Advanced Extreme NAS file systems support this feature.
   * <props="intl">
   * - This feature is in free public preview. During the public preview, the [File Storage NAS Service-Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed.
   * - Only Advanced Extreme NAS file systems support this feature.
   * 
   * @param request - ModifyAutoSnapshotPolicyRequest
   * @returns ModifyAutoSnapshotPolicyResponse
   */
  async modifyAutoSnapshotPolicy(request: $_model.ModifyAutoSnapshotPolicyRequest): Promise<$_model.ModifyAutoSnapshotPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAutoSnapshotPolicyWithOptions(request, runtime);
  }

  /**
   * Modifies an access point of a CPFS for Lingjun file system.
   * 
   * @remarks
   * Modifies an access point of a CPFS for Lingjun file system.
   * 
   * @param request - ModifyCpfsAccessPointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyCpfsAccessPointResponse
   */
  async modifyCpfsAccessPointWithOptions(request: $_model.ModifyCpfsAccessPointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyCpfsAccessPointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessPointId)) {
      query["AccessPointId"] = request.accessPointId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyCpfsAccessPoint",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyCpfsAccessPointResponse>(await this.callApi(params, req, runtime), new $_model.ModifyCpfsAccessPointResponse({}));
  }

  /**
   * Modifies an access point of a CPFS for Lingjun file system.
   * 
   * @remarks
   * Modifies an access point of a CPFS for Lingjun file system.
   * 
   * @param request - ModifyCpfsAccessPointRequest
   * @returns ModifyCpfsAccessPointResponse
   */
  async modifyCpfsAccessPoint(request: $_model.ModifyCpfsAccessPointRequest): Promise<$_model.ModifyCpfsAccessPointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyCpfsAccessPointWithOptions(request, runtime);
  }

  /**
   * Modifies the attributes of a data flow.
   * 
   * @remarks
   * - CPFS 2.2.0 and later and CPFS for Lingjun 2.4.0 and later support data streams.
   * - You can modify the properties of a data stream only when the data stream is in the `Running (Normal)` state.
   * - Modifying a data stream typically takes 2 to 5 minutes. You can call [DescribeDataFlows](https://help.aliyun.com/document_detail/2402270.html) to query the status of the data stream modification.
   * - CPFS data stream specifications:
   *     - Data stream bandwidth (Throughput) supports three specifications: 600 MB/s, 1,200 MB/s, and 1,500 MB/s. The data stream bandwidth specifies the maximum transmission bandwidth that the data stream can achieve during data import or export.
   *     - Inventory check: If you set DryRun to true, you can check whether the resources required to modify the data stream to the specified specification are sufficient.
   * - CPFS billing
   *   Modifying the data stream bandwidth (Throughput) incurs data stream bandwidth fees. Familiarize yourself with the billable methods of CPFS in advance. For details, see [CPFS billing](https://help.aliyun.com/document_detail/111858.html).
   * 
   * @param request - ModifyDataFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDataFlowResponse
   */
  async modifyDataFlowWithOptions(request: $_model.ModifyDataFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDataFlowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dataFlowId)) {
      query["DataFlowId"] = request.dataFlowId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.throughput)) {
      query["Throughput"] = request.throughput;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDataFlow",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDataFlowResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDataFlowResponse({}));
  }

  /**
   * Modifies the attributes of a data flow.
   * 
   * @remarks
   * - CPFS 2.2.0 and later and CPFS for Lingjun 2.4.0 and later support data streams.
   * - You can modify the properties of a data stream only when the data stream is in the `Running (Normal)` state.
   * - Modifying a data stream typically takes 2 to 5 minutes. You can call [DescribeDataFlows](https://help.aliyun.com/document_detail/2402270.html) to query the status of the data stream modification.
   * - CPFS data stream specifications:
   *     - Data stream bandwidth (Throughput) supports three specifications: 600 MB/s, 1,200 MB/s, and 1,500 MB/s. The data stream bandwidth specifies the maximum transmission bandwidth that the data stream can achieve during data import or export.
   *     - Inventory check: If you set DryRun to true, you can check whether the resources required to modify the data stream to the specified specification are sufficient.
   * - CPFS billing
   *   Modifying the data stream bandwidth (Throughput) incurs data stream bandwidth fees. Familiarize yourself with the billable methods of CPFS in advance. For details, see [CPFS billing](https://help.aliyun.com/document_detail/111858.html).
   * 
   * @param request - ModifyDataFlowRequest
   * @returns ModifyDataFlowResponse
   */
  async modifyDataFlow(request: $_model.ModifyDataFlowRequest): Promise<$_model.ModifyDataFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDataFlowWithOptions(request, runtime);
  }

  /**
   * Modifies the automatic update configuration of a dataflow.
   * 
   * @remarks
   * - This operation applies only to Cloud Parallel File Storage (CPFS) file systems.
   * - Only CPFS 2.2.0 and later support dataflows. You can view the version information on the file system details page in the console.
   * - You can modify the automatic update configuration of a dataflow only when the dataflow is in the `Running` or `Stopped` state.
   * - Modifying the automatic update configuration typically takes 2 to 5 minutes. You can call [DescribeDataFlows](https://help.aliyun.com/document_detail/2402270.html) to query the status of the automatic update task.
   * 
   * @param request - ModifyDataFlowAutoRefreshRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDataFlowAutoRefreshResponse
   */
  async modifyDataFlowAutoRefreshWithOptions(request: $_model.ModifyDataFlowAutoRefreshRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDataFlowAutoRefreshResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoRefreshInterval)) {
      query["AutoRefreshInterval"] = request.autoRefreshInterval;
    }

    if (!$dara.isNull(request.autoRefreshPolicy)) {
      query["AutoRefreshPolicy"] = request.autoRefreshPolicy;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dataFlowId)) {
      query["DataFlowId"] = request.dataFlowId;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDataFlowAutoRefresh",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDataFlowAutoRefreshResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDataFlowAutoRefreshResponse({}));
  }

  /**
   * Modifies the automatic update configuration of a dataflow.
   * 
   * @remarks
   * - This operation applies only to Cloud Parallel File Storage (CPFS) file systems.
   * - Only CPFS 2.2.0 and later support dataflows. You can view the version information on the file system details page in the console.
   * - You can modify the automatic update configuration of a dataflow only when the dataflow is in the `Running` or `Stopped` state.
   * - Modifying the automatic update configuration typically takes 2 to 5 minutes. You can call [DescribeDataFlows](https://help.aliyun.com/document_detail/2402270.html) to query the status of the automatic update task.
   * 
   * @param request - ModifyDataFlowAutoRefreshRequest
   * @returns ModifyDataFlowAutoRefreshResponse
   */
  async modifyDataFlowAutoRefresh(request: $_model.ModifyDataFlowAutoRefreshRequest): Promise<$_model.ModifyDataFlowAutoRefreshResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDataFlowAutoRefreshWithOptions(request, runtime);
  }

  /**
   * Modifies the description of a file system.
   * 
   * @param tmpReq - ModifyFileSystemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyFileSystemResponse
   */
  async modifyFileSystemWithOptions(tmpReq: $_model.ModifyFileSystemRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyFileSystemResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyFileSystemShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.autoUpgradeConfig)) {
      request.autoUpgradeConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.autoUpgradeConfig, "AutoUpgradeConfig", "json");
    }

    if (!$dara.isNull(tmpReq.options)) {
      request.optionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.options, "Options", "json");
    }

    let query = { };
    if (!$dara.isNull(request.autoUpgradeConfigShrink)) {
      query["AutoUpgradeConfig"] = request.autoUpgradeConfigShrink;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.optionsShrink)) {
      query["Options"] = request.optionsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyFileSystem",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyFileSystemResponse>(await this.callApi(params, req, runtime), new $_model.ModifyFileSystemResponse({}));
  }

  /**
   * Modifies the description of a file system.
   * 
   * @param request - ModifyFileSystemRequest
   * @returns ModifyFileSystemResponse
   */
  async modifyFileSystem(request: $_model.ModifyFileSystemRequest): Promise<$_model.ModifyFileSystemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyFileSystemWithOptions(request, runtime);
  }

  /**
   * Modifies the information of a fileset.
   * 
   * @remarks
   * Only CPFS 2.2.0 and later and CPFS for Lingjun 2.7.0 and later support modifying fileset information.
   * 
   * @param request - ModifyFilesetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyFilesetResponse
   */
  async modifyFilesetWithOptions(request: $_model.ModifyFilesetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyFilesetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.deletionProtection)) {
      query["DeletionProtection"] = request.deletionProtection;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.fsetId)) {
      query["FsetId"] = request.fsetId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyFileset",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyFilesetResponse>(await this.callApi(params, req, runtime), new $_model.ModifyFilesetResponse({}));
  }

  /**
   * Modifies the information of a fileset.
   * 
   * @remarks
   * Only CPFS 2.2.0 and later and CPFS for Lingjun 2.7.0 and later support modifying fileset information.
   * 
   * @param request - ModifyFilesetRequest
   * @returns ModifyFilesetResponse
   */
  async modifyFileset(request: $_model.ModifyFilesetRequest): Promise<$_model.ModifyFilesetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyFilesetWithOptions(request, runtime);
  }

  /**
   * Modifies the LDAP configuration.
   * 
   * @remarks
   * This operation supports only Cloud Parallel File Storage (CPFS) parallel file systems.
   * 
   * @deprecated OpenAPI ModifyLDAPConfig is deprecated
   * 
   * @param request - ModifyLDAPConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyLDAPConfigResponse
   */
  async modifyLDAPConfigWithOptions(request: $_model.ModifyLDAPConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyLDAPConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bindDN)) {
      query["BindDN"] = request.bindDN;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.searchBase)) {
      query["SearchBase"] = request.searchBase;
    }

    if (!$dara.isNull(request.URI)) {
      query["URI"] = request.URI;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyLDAPConfig",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyLDAPConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyLDAPConfigResponse({}));
  }

  /**
   * Modifies the LDAP configuration.
   * 
   * @remarks
   * This operation supports only Cloud Parallel File Storage (CPFS) parallel file systems.
   * 
   * @deprecated OpenAPI ModifyLDAPConfig is deprecated
   * 
   * @param request - ModifyLDAPConfigRequest
   * @returns ModifyLDAPConfigResponse
   */
  // Deprecated
  async modifyLDAPConfig(request: $_model.ModifyLDAPConfigRequest): Promise<$_model.ModifyLDAPConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyLDAPConfigWithOptions(request, runtime);
  }

  /**
   * Modifies a lifecycle management policy.
   * 
   * @remarks
   * This feature is supported only by General-purpose NAS file systems.
   * 
   * @param request - ModifyLifecyclePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyLifecyclePolicyResponse
   */
  async modifyLifecyclePolicyWithOptions(request: $_model.ModifyLifecyclePolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyLifecyclePolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.lifecyclePolicyId)) {
      query["LifecyclePolicyId"] = request.lifecyclePolicyId;
    }

    if (!$dara.isNull(request.lifecyclePolicyName)) {
      query["LifecyclePolicyName"] = request.lifecyclePolicyName;
    }

    if (!$dara.isNull(request.lifecycleRuleName)) {
      query["LifecycleRuleName"] = request.lifecycleRuleName;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    if (!$dara.isNull(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyLifecyclePolicy",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyLifecyclePolicyResponse>(await this.callApi(params, req, runtime), new $_model.ModifyLifecyclePolicyResponse({}));
  }

  /**
   * Modifies a lifecycle management policy.
   * 
   * @remarks
   * This feature is supported only by General-purpose NAS file systems.
   * 
   * @param request - ModifyLifecyclePolicyRequest
   * @returns ModifyLifecyclePolicyResponse
   */
  async modifyLifecyclePolicy(request: $_model.ModifyLifecyclePolicyRequest): Promise<$_model.ModifyLifecyclePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyLifecyclePolicyWithOptions(request, runtime);
  }

  /**
   * Modifies mount target information.
   * 
   * @remarks
   * Only mount target information of General-purpose NAS or Extreme NAS file systems can be modified.
   * 
   * @param request - ModifyMountTargetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyMountTargetResponse
   */
  async modifyMountTargetWithOptions(request: $_model.ModifyMountTargetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyMountTargetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessGroupName)) {
      query["AccessGroupName"] = request.accessGroupName;
    }

    if (!$dara.isNull(request.accessPointAccessOnly)) {
      query["AccessPointAccessOnly"] = request.accessPointAccessOnly;
    }

    if (!$dara.isNull(request.dualStackMountTargetDomain)) {
      query["DualStackMountTargetDomain"] = request.dualStackMountTargetDomain;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.mountTargetDomain)) {
      query["MountTargetDomain"] = request.mountTargetDomain;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyMountTarget",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyMountTargetResponse>(await this.callApi(params, req, runtime), new $_model.ModifyMountTargetResponse({}));
  }

  /**
   * Modifies mount target information.
   * 
   * @remarks
   * Only mount target information of General-purpose NAS or Extreme NAS file systems can be modified.
   * 
   * @param request - ModifyMountTargetRequest
   * @returns ModifyMountTargetResponse
   */
  async modifyMountTarget(request: $_model.ModifyMountTargetRequest): Promise<$_model.ModifyMountTargetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyMountTargetWithOptions(request, runtime);
  }

  /**
   * Modifies the export directory parameters of a protocol service. You can modify only the permission group and description. The VPC ID and vSwitch ID cannot be modified. To change them, delete the export directory and create a new one.
   * 
   * @remarks
   * - Before you begin: This operation applies only to Cloud Parallel File Storage (CPFS) file systems.
   * - Status prerequisite: Before calling this operation, the export directory corresponding to ExportId must be in the AVAILABLE state. Call [DescribeProtocolMountTarget](https://www.alibabacloud.com/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-describeprotocolmounttarget-cpfs) to query the status and wait until the creation is complete before retrying.
   * - Dependency chain:
   *   1. Call [DescribeFileSystems](https://www.alibabacloud.com/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-describefilesystems-cpfs) (with FileSystemType set to cpfs) to obtain the CPFS file system.
   *   2. Call [DescribeProtocolService](https://www.alibabacloud.com/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-describeprotocolservice-cpfs) to verify that the protocol service is in the Running state.
   *   3. Call [DescribeProtocolMountTarget](https://www.alibabacloud.com/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-describeprotocolmounttarget-cpfs) to verify that the export directory is in the AVAILABLE state.
   *   4. If no export directory exists, call [CreateProtocolMountTarget](https://www.alibabacloud.com/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-createprotocolmounttarget-cpfs) to create one first.
   * 
   * @param request - ModifyProtocolMountTargetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyProtocolMountTargetResponse
   */
  async modifyProtocolMountTargetWithOptions(request: $_model.ModifyProtocolMountTargetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyProtocolMountTargetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.exportId)) {
      query["ExportId"] = request.exportId;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.protocolServiceId)) {
      query["ProtocolServiceId"] = request.protocolServiceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyProtocolMountTarget",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyProtocolMountTargetResponse>(await this.callApi(params, req, runtime), new $_model.ModifyProtocolMountTargetResponse({}));
  }

  /**
   * Modifies the export directory parameters of a protocol service. You can modify only the permission group and description. The VPC ID and vSwitch ID cannot be modified. To change them, delete the export directory and create a new one.
   * 
   * @remarks
   * - Before you begin: This operation applies only to Cloud Parallel File Storage (CPFS) file systems.
   * - Status prerequisite: Before calling this operation, the export directory corresponding to ExportId must be in the AVAILABLE state. Call [DescribeProtocolMountTarget](https://www.alibabacloud.com/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-describeprotocolmounttarget-cpfs) to query the status and wait until the creation is complete before retrying.
   * - Dependency chain:
   *   1. Call [DescribeFileSystems](https://www.alibabacloud.com/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-describefilesystems-cpfs) (with FileSystemType set to cpfs) to obtain the CPFS file system.
   *   2. Call [DescribeProtocolService](https://www.alibabacloud.com/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-describeprotocolservice-cpfs) to verify that the protocol service is in the Running state.
   *   3. Call [DescribeProtocolMountTarget](https://www.alibabacloud.com/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-describeprotocolmounttarget-cpfs) to verify that the export directory is in the AVAILABLE state.
   *   4. If no export directory exists, call [CreateProtocolMountTarget](https://www.alibabacloud.com/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-createprotocolmounttarget-cpfs) to create one first.
   * 
   * @param request - ModifyProtocolMountTargetRequest
   * @returns ModifyProtocolMountTargetResponse
   */
  async modifyProtocolMountTarget(request: $_model.ModifyProtocolMountTargetRequest): Promise<$_model.ModifyProtocolMountTargetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyProtocolMountTargetWithOptions(request, runtime);
  }

  /**
   * Modifies a protocol service. You can modify the description of a protocol service.
   * 
   * @remarks
   * This operation applies only to Cloud Parallel File Storage (CPFS) file systems.
   * - This operation allows you to modify the description of a protocol service.
   * - You can obtain the protocol service ID (ProtocolServiceId) in the following ways:
   *   - From the response of the [CreateProtocolService](https://www.alibabacloud.com/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-createprotocolservice-cpfs) operation after you create a protocol service.
   *   - From the response of the [DescribeProtocolService](https://www.alibabacloud.com/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-describeprotocolservice-cpfs) operation that queries existing protocol services.
   * 
   * @param request - ModifyProtocolServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyProtocolServiceResponse
   */
  async modifyProtocolServiceWithOptions(request: $_model.ModifyProtocolServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyProtocolServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.protocolServiceId)) {
      query["ProtocolServiceId"] = request.protocolServiceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyProtocolService",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyProtocolServiceResponse>(await this.callApi(params, req, runtime), new $_model.ModifyProtocolServiceResponse({}));
  }

  /**
   * Modifies a protocol service. You can modify the description of a protocol service.
   * 
   * @remarks
   * This operation applies only to Cloud Parallel File Storage (CPFS) file systems.
   * - This operation allows you to modify the description of a protocol service.
   * - You can obtain the protocol service ID (ProtocolServiceId) in the following ways:
   *   - From the response of the [CreateProtocolService](https://www.alibabacloud.com/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-createprotocolservice-cpfs) operation after you create a protocol service.
   *   - From the response of the [DescribeProtocolService](https://www.alibabacloud.com/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-describeprotocolservice-cpfs) operation that queries existing protocol services.
   * 
   * @param request - ModifyProtocolServiceRequest
   * @returns ModifyProtocolServiceResponse
   */
  async modifyProtocolService(request: $_model.ModifyProtocolServiceRequest): Promise<$_model.ModifyProtocolServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyProtocolServiceWithOptions(request, runtime);
  }

  /**
   * Updates the SMB AD ACL feature.
   * 
   * @remarks
   * Before you begin: Make sure that Key Management Service (KMS) is activated in the target region before you call this operation. Call sequence: Activate KMS → Call EnableSmbAcl to initialize → Call ModifySmbAcl.
   * 
   * @param request - ModifySmbAclRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySmbAclResponse
   */
  async modifySmbAclWithOptions(request: $_model.ModifySmbAclRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySmbAclResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enableAnonymousAccess)) {
      query["EnableAnonymousAccess"] = request.enableAnonymousAccess;
    }

    if (!$dara.isNull(request.encryptData)) {
      query["EncryptData"] = request.encryptData;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.homeDirPath)) {
      query["HomeDirPath"] = request.homeDirPath;
    }

    if (!$dara.isNull(request.keytab)) {
      query["Keytab"] = request.keytab;
    }

    if (!$dara.isNull(request.keytabMd5)) {
      query["KeytabMd5"] = request.keytabMd5;
    }

    if (!$dara.isNull(request.rejectUnencryptedAccess)) {
      query["RejectUnencryptedAccess"] = request.rejectUnencryptedAccess;
    }

    if (!$dara.isNull(request.superAdminSid)) {
      query["SuperAdminSid"] = request.superAdminSid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySmbAcl",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySmbAclResponse>(await this.callApi(params, req, runtime), new $_model.ModifySmbAclResponse({}));
  }

  /**
   * Updates the SMB AD ACL feature.
   * 
   * @remarks
   * Before you begin: Make sure that Key Management Service (KMS) is activated in the target region before you call this operation. Call sequence: Activate KMS → Call EnableSmbAcl to initialize → Call ModifySmbAcl.
   * 
   * @param request - ModifySmbAclRequest
   * @returns ModifySmbAclResponse
   */
  async modifySmbAcl(request: $_model.ModifySmbAclRequest): Promise<$_model.ModifySmbAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySmbAclWithOptions(request, runtime);
  }

  /**
   * Activates the Apsara File Storage NAS (NAS) service.
   * 
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenNASServiceResponse
   */
  async openNASServiceWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.OpenNASServiceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "OpenNASService",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OpenNASServiceResponse>(await this.callApi(params, req, runtime), new $_model.OpenNASServiceResponse({}));
  }

  /**
   * Activates the Apsara File Storage NAS (NAS) service.
   * @returns OpenNASServiceResponse
   */
  async openNASService(): Promise<$_model.OpenNASServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.openNASServiceWithOptions(runtime);
  }

  /**
   * Removes a client from the blacklist in Cloud Parallel File Storage (CPFS) to resume its write requests.
   * 
   * @remarks
   * This operation supports only CPFS parallel file systems.
   * 
   * @deprecated OpenAPI RemoveClientFromBlackList is deprecated
   * 
   * @param request - RemoveClientFromBlackListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveClientFromBlackListResponse
   */
  async removeClientFromBlackListWithOptions(request: $_model.RemoveClientFromBlackListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveClientFromBlackListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientIP)) {
      query["ClientIP"] = request.clientIP;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveClientFromBlackList",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveClientFromBlackListResponse>(await this.callApi(params, req, runtime), new $_model.RemoveClientFromBlackListResponse({}));
  }

  /**
   * Removes a client from the blacklist in Cloud Parallel File Storage (CPFS) to resume its write requests.
   * 
   * @remarks
   * This operation supports only CPFS parallel file systems.
   * 
   * @deprecated OpenAPI RemoveClientFromBlackList is deprecated
   * 
   * @param request - RemoveClientFromBlackListRequest
   * @returns RemoveClientFromBlackListResponse
   */
  // Deprecated
  async removeClientFromBlackList(request: $_model.RemoveClientFromBlackListRequest): Promise<$_model.RemoveClientFromBlackListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeClientFromBlackListWithOptions(request, runtime);
  }

  /**
   * Rolls back a file system to the state of a historical snapshot.
   * 
   * @remarks
   * <props="china">
   * - This feature is in free public preview. During the public preview, the [File Storage NAS Service-Level Agreement (SLA)](https://terms.aliyun.com/legal-agreement/terms/suit_bu1_ali_cloud/suit_bu1_ali_cloud201803061139_99860.html?spm=a2c4g.11186623.0.0.5c895ff2YPLrwe) is not guaranteed.
   * - Only Advanced Extreme NAS file systems support this feature.
   * - The file system must be in the Normal state.
   * - The specified SnapshotId parameter must be a historical snapshot created from the same file system specified by FileSystemId.
   * - Dependency chain:
   * - (1) Grant the AliyunNASManageENIRole role in the Resource Access Management (RAM) console.
   * - (2) Call CreateFileSystem (FileSystemType=extreme, StorageType=advance).
   * - (3) Call DescribeFileSystems and poll until Status=Running.
   * - (4) Call CreateSnapshot (FileSystemId=ID from the previous step).
   * - (5) Call DescribeSnapshots and poll until Status=available.
   * - (6) Call ResetFileSystem (FileSystemId, SnapshotId).
   * <props="intl">
   * - This feature is in free public preview. During the public preview, the [File Storage NAS Service-Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed.
   * - Only Advanced Extreme NAS file systems support this feature.
   * - The file system must be in the Normal state.
   * - The specified SnapshotId parameter must be a historical snapshot created from the same file system specified by FileSystemId.
   * - Dependency chain:
   * - (1) Grant the AliyunNASManageENIRole role in the Resource Access Management (RAM) console.
   * - (2) Call CreateFileSystem (FileSystemType=extreme, StorageType=advance).
   * - (3) Call DescribeFileSystems and poll until Status=Running.
   * - (4) Call CreateSnapshot (FileSystemId=ID from the previous step).
   * - (5) Call DescribeSnapshots and poll until Status=available.
   * - (6) Call ResetFileSystem (FileSystemId, SnapshotId).
   * 
   * @param request - ResetFileSystemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetFileSystemResponse
   */
  async resetFileSystemWithOptions(request: $_model.ResetFileSystemRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetFileSystemResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetFileSystem",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetFileSystemResponse>(await this.callApi(params, req, runtime), new $_model.ResetFileSystemResponse({}));
  }

  /**
   * Rolls back a file system to the state of a historical snapshot.
   * 
   * @remarks
   * <props="china">
   * - This feature is in free public preview. During the public preview, the [File Storage NAS Service-Level Agreement (SLA)](https://terms.aliyun.com/legal-agreement/terms/suit_bu1_ali_cloud/suit_bu1_ali_cloud201803061139_99860.html?spm=a2c4g.11186623.0.0.5c895ff2YPLrwe) is not guaranteed.
   * - Only Advanced Extreme NAS file systems support this feature.
   * - The file system must be in the Normal state.
   * - The specified SnapshotId parameter must be a historical snapshot created from the same file system specified by FileSystemId.
   * - Dependency chain:
   * - (1) Grant the AliyunNASManageENIRole role in the Resource Access Management (RAM) console.
   * - (2) Call CreateFileSystem (FileSystemType=extreme, StorageType=advance).
   * - (3) Call DescribeFileSystems and poll until Status=Running.
   * - (4) Call CreateSnapshot (FileSystemId=ID from the previous step).
   * - (5) Call DescribeSnapshots and poll until Status=available.
   * - (6) Call ResetFileSystem (FileSystemId, SnapshotId).
   * <props="intl">
   * - This feature is in free public preview. During the public preview, the [File Storage NAS Service-Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed.
   * - Only Advanced Extreme NAS file systems support this feature.
   * - The file system must be in the Normal state.
   * - The specified SnapshotId parameter must be a historical snapshot created from the same file system specified by FileSystemId.
   * - Dependency chain:
   * - (1) Grant the AliyunNASManageENIRole role in the Resource Access Management (RAM) console.
   * - (2) Call CreateFileSystem (FileSystemType=extreme, StorageType=advance).
   * - (3) Call DescribeFileSystems and poll until Status=Running.
   * - (4) Call CreateSnapshot (FileSystemId=ID from the previous step).
   * - (5) Call DescribeSnapshots and poll until Status=available.
   * - (6) Call ResetFileSystem (FileSystemId, SnapshotId).
   * 
   * @param request - ResetFileSystemRequest
   * @returns ResetFileSystemResponse
   */
  async resetFileSystem(request: $_model.ResetFileSystemRequest): Promise<$_model.ResetFileSystemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetFileSystemWithOptions(request, runtime);
  }

  /**
   * Retries a data retrieval task that is in the failed state.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this feature.
   * 
   * @param request - RetryLifecycleRetrieveJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RetryLifecycleRetrieveJobResponse
   */
  async retryLifecycleRetrieveJobWithOptions(request: $_model.RetryLifecycleRetrieveJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RetryLifecycleRetrieveJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RetryLifecycleRetrieveJob",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RetryLifecycleRetrieveJobResponse>(await this.callApi(params, req, runtime), new $_model.RetryLifecycleRetrieveJobResponse({}));
  }

  /**
   * Retries a data retrieval task that is in the failed state.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this feature.
   * 
   * @param request - RetryLifecycleRetrieveJobRequest
   * @returns RetryLifecycleRetrieveJobResponse
   */
  async retryLifecycleRetrieveJob(request: $_model.RetryLifecycleRetrieveJobRequest): Promise<$_model.RetryLifecycleRetrieveJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.retryLifecycleRetrieveJobWithOptions(request, runtime);
  }

  /**
   * Sets the quota for an Agentic space.
   * 
   * @remarks
   * *Before you begin**
   * Before you call this operation, complete the following preparations:
   * 1. **Obtain an AgenticSpaceId**: Call the [CreateAgenticSpace](https://www.alibabacloud.com/help/en/nas/developer-reference/api-nas-2017-06-26-createagenticspace) operation to create an Agentic space and obtain the AgenticSpaceId.
   * 2. **Create an Agentic file system**: When you call the [CreateFileSystem](https://www.alibabacloud.com/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-createfilesystem-cpfs) operation to create a file system, set `StorageType=Agentic`.
   *    - **Supported regions**: The Agentic storage type is available only in specific regions and zones. Check the console for details.
   * **Usage notes**
   * - This operation applies only to Agentic file systems.
   * - Quota statistics have a 15-minute delay. The actual usage takes effect 15 minutes later.
   * 
   * @param request - SetAgenticSpaceQuotaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetAgenticSpaceQuotaResponse
   */
  async setAgenticSpaceQuotaWithOptions(request: $_model.SetAgenticSpaceQuotaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetAgenticSpaceQuotaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agenticSpaceId)) {
      query["AgenticSpaceId"] = request.agenticSpaceId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileCountLimit)) {
      query["FileCountLimit"] = request.fileCountLimit;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.sizeLimit)) {
      query["SizeLimit"] = request.sizeLimit;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetAgenticSpaceQuota",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetAgenticSpaceQuotaResponse>(await this.callApi(params, req, runtime), new $_model.SetAgenticSpaceQuotaResponse({}));
  }

  /**
   * Sets the quota for an Agentic space.
   * 
   * @remarks
   * *Before you begin**
   * Before you call this operation, complete the following preparations:
   * 1. **Obtain an AgenticSpaceId**: Call the [CreateAgenticSpace](https://www.alibabacloud.com/help/en/nas/developer-reference/api-nas-2017-06-26-createagenticspace) operation to create an Agentic space and obtain the AgenticSpaceId.
   * 2. **Create an Agentic file system**: When you call the [CreateFileSystem](https://www.alibabacloud.com/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-createfilesystem-cpfs) operation to create a file system, set `StorageType=Agentic`.
   *    - **Supported regions**: The Agentic storage type is available only in specific regions and zones. Check the console for details.
   * **Usage notes**
   * - This operation applies only to Agentic file systems.
   * - Quota statistics have a 15-minute delay. The actual usage takes effect 15 minutes later.
   * 
   * @param request - SetAgenticSpaceQuotaRequest
   * @returns SetAgenticSpaceQuotaResponse
   */
  async setAgenticSpaceQuota(request: $_model.SetAgenticSpaceQuotaRequest): Promise<$_model.SetAgenticSpaceQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setAgenticSpaceQuotaWithOptions(request, runtime);
  }

  /**
   * Sets a directory quota for a file system.
   * 
   * @remarks
   * Only General-purpose NAS file systems support the directory quota feature.
   * 
   * @param request - SetDirQuotaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDirQuotaResponse
   */
  async setDirQuotaWithOptions(request: $_model.SetDirQuotaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetDirQuotaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileCountLimit)) {
      query["FileCountLimit"] = request.fileCountLimit;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    if (!$dara.isNull(request.quotaType)) {
      query["QuotaType"] = request.quotaType;
    }

    if (!$dara.isNull(request.sizeLimit)) {
      query["SizeLimit"] = request.sizeLimit;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.userType)) {
      query["UserType"] = request.userType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDirQuota",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetDirQuotaResponse>(await this.callApi(params, req, runtime), new $_model.SetDirQuotaResponse({}));
  }

  /**
   * Sets a directory quota for a file system.
   * 
   * @remarks
   * Only General-purpose NAS file systems support the directory quota feature.
   * 
   * @param request - SetDirQuotaRequest
   * @returns SetDirQuotaResponse
   */
  async setDirQuota(request: $_model.SetDirQuotaRequest): Promise<$_model.SetDirQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDirQuotaWithOptions(request, runtime);
  }

  /**
   * Sets a quota for a fileset.
   * 
   * @remarks
   * - Only CPFS for Lingjun 2.7.0 and later support setting quotas for filesets.
   * - The minimum fileset capacity quota is 10 GiB, and the capacity can be increased in increments of 1 GiB.
   * - A fileset supports up to 10 billion files or directories. The minimum value is 10,000, and the value can be increased in increments of 1.
   * - When you modify a directory quota, the quota capacity or file count must be greater than the used capacity or file count.
   * - You must specify at least one of the capacity limit and the file count limit.
   * - Quota statistics have a 15-minute delay. The actual usage takes effect 15 minutes later.
   * 
   * @param request - SetFilesetQuotaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetFilesetQuotaResponse
   */
  async setFilesetQuotaWithOptions(request: $_model.SetFilesetQuotaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetFilesetQuotaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileCountLimit)) {
      query["FileCountLimit"] = request.fileCountLimit;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.fsetId)) {
      query["FsetId"] = request.fsetId;
    }

    if (!$dara.isNull(request.sizeLimit)) {
      query["SizeLimit"] = request.sizeLimit;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetFilesetQuota",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetFilesetQuotaResponse>(await this.callApi(params, req, runtime), new $_model.SetFilesetQuotaResponse({}));
  }

  /**
   * Sets a quota for a fileset.
   * 
   * @remarks
   * - Only CPFS for Lingjun 2.7.0 and later support setting quotas for filesets.
   * - The minimum fileset capacity quota is 10 GiB, and the capacity can be increased in increments of 1 GiB.
   * - A fileset supports up to 10 billion files or directories. The minimum value is 10,000, and the value can be increased in increments of 1.
   * - When you modify a directory quota, the quota capacity or file count must be greater than the used capacity or file count.
   * - You must specify at least one of the capacity limit and the file count limit.
   * - Quota statistics have a 15-minute delay. The actual usage takes effect 15 minutes later.
   * 
   * @param request - SetFilesetQuotaRequest
   * @returns SetFilesetQuotaResponse
   */
  async setFilesetQuota(request: $_model.SetFilesetQuotaRequest): Promise<$_model.SetFilesetQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setFilesetQuotaWithOptions(request, runtime);
  }

  /**
   * Enables a data flow.
   * 
   * @remarks
   * - This operation is applicable only to Cloud Parallel File Storage (CPFS) file systems.
   * - Only CPFS 2.2.0 and later support data flows. You can view the version information on the file system details page in the console.
   * - You can enable only a data flow that is in the `Stopped` state.
   * - If DryRun is set to `true`, you can check whether sufficient resources are available to enable a data flow of the specified specifications. If inventory resources are insufficient, the data flow cannot be enabled.
   * - Enabling a data flow typically takes 2 to 5 minutes. You can call [DescribeDataFlows](https://help.aliyun.com/document_detail/2402270.html) to query the data flow status.
   * 
   * @param request - StartDataFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartDataFlowResponse
   */
  async startDataFlowWithOptions(request: $_model.StartDataFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartDataFlowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dataFlowId)) {
      query["DataFlowId"] = request.dataFlowId;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartDataFlow",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartDataFlowResponse>(await this.callApi(params, req, runtime), new $_model.StartDataFlowResponse({}));
  }

  /**
   * Enables a data flow.
   * 
   * @remarks
   * - This operation is applicable only to Cloud Parallel File Storage (CPFS) file systems.
   * - Only CPFS 2.2.0 and later support data flows. You can view the version information on the file system details page in the console.
   * - You can enable only a data flow that is in the `Stopped` state.
   * - If DryRun is set to `true`, you can check whether sufficient resources are available to enable a data flow of the specified specifications. If inventory resources are insufficient, the data flow cannot be enabled.
   * - Enabling a data flow typically takes 2 to 5 minutes. You can call [DescribeDataFlows](https://help.aliyun.com/document_detail/2402270.html) to query the data flow status.
   * 
   * @param request - StartDataFlowRequest
   * @returns StartDataFlowResponse
   */
  async startDataFlow(request: $_model.StartDataFlowRequest): Promise<$_model.StartDataFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startDataFlowWithOptions(request, runtime);
  }

  /**
   * Starts the execution of a lifecycle management policy.
   * 
   * @remarks
   * Starts the execution of a lifecycle management policy.
   * This operation is supported only when LifecyclePolicyType is set to OnDemand in the lifecycle management policy of a CPFS for Lingjun file system.
   * 
   * @param request - StartLifecyclePolicyExecutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartLifecyclePolicyExecutionResponse
   */
  async startLifecyclePolicyExecutionWithOptions(request: $_model.StartLifecyclePolicyExecutionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartLifecyclePolicyExecutionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.lifecyclePolicyId)) {
      query["LifecyclePolicyId"] = request.lifecyclePolicyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartLifecyclePolicyExecution",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartLifecyclePolicyExecutionResponse>(await this.callApi(params, req, runtime), new $_model.StartLifecyclePolicyExecutionResponse({}));
  }

  /**
   * Starts the execution of a lifecycle management policy.
   * 
   * @remarks
   * Starts the execution of a lifecycle management policy.
   * This operation is supported only when LifecyclePolicyType is set to OnDemand in the lifecycle management policy of a CPFS for Lingjun file system.
   * 
   * @param request - StartLifecyclePolicyExecutionRequest
   * @returns StartLifecyclePolicyExecutionResponse
   */
  async startLifecyclePolicyExecution(request: $_model.StartLifecyclePolicyExecutionRequest): Promise<$_model.StartLifecyclePolicyExecutionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startLifecyclePolicyExecutionWithOptions(request, runtime);
  }

  /**
   * Disables a dataflow.
   * 
   * @remarks
   * - This operation applies only to Cloud Parallel File Storage (CPFS) file systems.
   * - Only CPFS 2.2.0 and later support dataflows. You can view the version information on the file system details page in the console.
   * - You can disable only a dataflow in the `Running` state.
   * - After a dataflow is disabled, you cannot create dataflow tasks for it. If automatic update is configured, data updates on the source are not synchronized to CPFS.
   * - After a dataflow is disabled, the dataflow bandwidth is no longer billed because resources are reclaimed. However, re-enabling the dataflow may fail due to insufficient inventory.
   * - Disabling a dataflow typically takes 2 to 5 minutes. You can call [DescribeDataFlows](https://help.aliyun.com/document_detail/2402271.html) to query the dataflow status.
   * 
   * @param request - StopDataFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopDataFlowResponse
   */
  async stopDataFlowWithOptions(request: $_model.StopDataFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopDataFlowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dataFlowId)) {
      query["DataFlowId"] = request.dataFlowId;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopDataFlow",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopDataFlowResponse>(await this.callApi(params, req, runtime), new $_model.StopDataFlowResponse({}));
  }

  /**
   * Disables a dataflow.
   * 
   * @remarks
   * - This operation applies only to Cloud Parallel File Storage (CPFS) file systems.
   * - Only CPFS 2.2.0 and later support dataflows. You can view the version information on the file system details page in the console.
   * - You can disable only a dataflow in the `Running` state.
   * - After a dataflow is disabled, you cannot create dataflow tasks for it. If automatic update is configured, data updates on the source are not synchronized to CPFS.
   * - After a dataflow is disabled, the dataflow bandwidth is no longer billed because resources are reclaimed. However, re-enabling the dataflow may fail due to insufficient inventory.
   * - Disabling a dataflow typically takes 2 to 5 minutes. You can call [DescribeDataFlows](https://help.aliyun.com/document_detail/2402271.html) to query the dataflow status.
   * 
   * @param request - StopDataFlowRequest
   * @returns StopDataFlowResponse
   */
  async stopDataFlow(request: $_model.StopDataFlowRequest): Promise<$_model.StopDataFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopDataFlowWithOptions(request, runtime);
  }

  /**
   * Stops the execution of a lifecycle policy.
   * 
   * @remarks
   * Stops the execution of a lifecycle policy.
   * This operation is supported only when LifecyclePolicyType is set to OnDemand in the lifecycle management policy of a CPFS for Lingjun file system.
   * 
   * @param request - StopLifecyclePolicyExecutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopLifecyclePolicyExecutionResponse
   */
  async stopLifecyclePolicyExecutionWithOptions(request: $_model.StopLifecyclePolicyExecutionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopLifecyclePolicyExecutionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.lifecyclePolicyId)) {
      query["LifecyclePolicyId"] = request.lifecyclePolicyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopLifecyclePolicyExecution",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopLifecyclePolicyExecutionResponse>(await this.callApi(params, req, runtime), new $_model.StopLifecyclePolicyExecutionResponse({}));
  }

  /**
   * Stops the execution of a lifecycle policy.
   * 
   * @remarks
   * Stops the execution of a lifecycle policy.
   * This operation is supported only when LifecyclePolicyType is set to OnDemand in the lifecycle management policy of a CPFS for Lingjun file system.
   * 
   * @param request - StopLifecyclePolicyExecutionRequest
   * @returns StopLifecyclePolicyExecutionResponse
   */
  async stopLifecyclePolicyExecution(request: $_model.StopLifecyclePolicyExecutionRequest): Promise<$_model.StopLifecyclePolicyExecutionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopLifecyclePolicyExecutionWithOptions(request, runtime);
  }

  /**
   * Creates and attaches tags to specified resources. File systems and access points are supported.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let query = { };
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
      version: "2017-06-26",
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
   * Creates and attaches tags to specified resources. File systems and access points are supported.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Deletes the tags of a specified resource.
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
      version: "2017-06-26",
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
   * Deletes the tags of a specified resource.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Updates the rules of a lifecycle management policy. Only CPFS for Lingjun is supported. UpdateLifecyclePolicy uses overwrite semantics. If a non-required parameter is left empty, the corresponding field is deleted. To append lifecycle rules, first call the DescribeLifecyclePolicies operation to obtain the current lifecycle rule configuration, append the new lifecycle rule configuration, and then call the UpdateLifecyclePolicy operation to update the lifecycle rule configuration.
   * 
   * @param request - UpdateLifecyclePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLifecyclePolicyResponse
   */
  async updateLifecyclePolicyWithOptions(request: $_model.UpdateLifecyclePolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLifecyclePolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deleteRules)) {
      query["DeleteRules"] = request.deleteRules;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.lifecyclePolicyId)) {
      query["LifecyclePolicyId"] = request.lifecyclePolicyId;
    }

    if (!$dara.isNull(request.paths)) {
      query["Paths"] = request.paths;
    }

    if (!$dara.isNull(request.retrieveRules)) {
      query["RetrieveRules"] = request.retrieveRules;
    }

    if (!$dara.isNull(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    if (!$dara.isNull(request.transitRules)) {
      query["TransitRules"] = request.transitRules;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLifecyclePolicy",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateLifecyclePolicyResponse>(await this.callApi(params, req, runtime), new $_model.UpdateLifecyclePolicyResponse({}));
  }

  /**
   * Updates the rules of a lifecycle management policy. Only CPFS for Lingjun is supported. UpdateLifecyclePolicy uses overwrite semantics. If a non-required parameter is left empty, the corresponding field is deleted. To append lifecycle rules, first call the DescribeLifecyclePolicies operation to obtain the current lifecycle rule configuration, append the new lifecycle rule configuration, and then call the UpdateLifecyclePolicy operation to update the lifecycle rule configuration.
   * 
   * @param request - UpdateLifecyclePolicyRequest
   * @returns UpdateLifecyclePolicyResponse
   */
  async updateLifecyclePolicy(request: $_model.UpdateLifecyclePolicyRequest): Promise<$_model.UpdateLifecyclePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateLifecyclePolicyWithOptions(request, runtime);
  }

  /**
   * Modifies the retention period of data in a recycle bin.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this feature.
   * 
   * @param request - UpdateRecycleBinAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRecycleBinAttributeResponse
   */
  async updateRecycleBinAttributeWithOptions(request: $_model.UpdateRecycleBinAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRecycleBinAttributeResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRecycleBinAttribute",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRecycleBinAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRecycleBinAttributeResponse({}));
  }

  /**
   * Modifies the retention period of data in a recycle bin.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this feature.
   * 
   * @param request - UpdateRecycleBinAttributeRequest
   * @returns UpdateRecycleBinAttributeResponse
   */
  async updateRecycleBinAttribute(request: $_model.UpdateRecycleBinAttributeRequest): Promise<$_model.UpdateRecycleBinAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRecycleBinAttributeWithOptions(request, runtime);
  }

  /**
   * Scales up the storage capacity of an Extreme NAS file system or a Cloud Parallel File Storage (CPFS) file system.
   * 
   * @remarks
   * - Only Extreme NAS file systems and CPFS file systems can be scaled up.
   * - General-purpose NAS file systems scale up automatically on demand. You do not need to call this operation.
   * 
   * @param request - UpgradeFileSystemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeFileSystemResponse
   */
  async upgradeFileSystemWithOptions(request: $_model.UpgradeFileSystemRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeFileSystemResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.capacity)) {
      query["Capacity"] = request.capacity;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeFileSystem",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradeFileSystemResponse>(await this.callApi(params, req, runtime), new $_model.UpgradeFileSystemResponse({}));
  }

  /**
   * Scales up the storage capacity of an Extreme NAS file system or a Cloud Parallel File Storage (CPFS) file system.
   * 
   * @remarks
   * - Only Extreme NAS file systems and CPFS file systems can be scaled up.
   * - General-purpose NAS file systems scale up automatically on demand. You do not need to call this operation.
   * 
   * @param request - UpgradeFileSystemRequest
   * @returns UpgradeFileSystemResponse
   */
  async upgradeFileSystem(request: $_model.UpgradeFileSystemRequest): Promise<$_model.UpgradeFileSystemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeFileSystemWithOptions(request, runtime);
  }

}
