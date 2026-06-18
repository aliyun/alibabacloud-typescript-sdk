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
      'cn-beijing': "bailian.cn-beijing.aliyuncs.com",
      'ap-southeast-1': "bailian.ap-southeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("bailian", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Creates a category in a specified workspace to classify and manage files. Each workspace supports a maximum of 500 categories.
   * 
   * @remarks
   * - You cannot use an API to add data tables. To add data tables, go to the [Application Data](https://modelstudio.console.alibabacloud.com/?tab=app#/data-center) page in the console.
   * - A RAM user must obtain the required [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Alibaba Cloud Model Studio and [join a workspace](https://help.aliyun.com/document_detail/2851098.html) before calling this operation. The `AliyunBailianDataFullAccess` permission, which includes the `sfm:AddCategory` permission, is required. An Alibaba Cloud account can call this operation directly without requiring authorization. To call this operation, use the latest version of the [Alibaba Cloud Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29).
   * - This operation is not idempotent.
   * **Rate limiting:** Frequent calls to this operation are subject to rate limiting. Do not exceed a frequency of 5 calls per second. If rate limiting is triggered, try again later.
   * 
   * @param request - AddCategoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddCategoryResponse
   */
  async addCategoryWithOptions(WorkspaceId: string, request: $_model.AddCategoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AddCategoryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryName)) {
      body["CategoryName"] = request.categoryName;
    }

    if (!$dara.isNull(request.categoryType)) {
      body["CategoryType"] = request.categoryType;
    }

    if (!$dara.isNull(request.connectorId)) {
      body["ConnectorId"] = request.connectorId;
    }

    if (!$dara.isNull(request.parentCategoryId)) {
      body["ParentCategoryId"] = request.parentCategoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddCategory",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/datacenter/category/`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddCategoryResponse>(await this.callApi(params, req, runtime), new $_model.AddCategoryResponse({}));
  }

  /**
   * Creates a category in a specified workspace to classify and manage files. Each workspace supports a maximum of 500 categories.
   * 
   * @remarks
   * - You cannot use an API to add data tables. To add data tables, go to the [Application Data](https://modelstudio.console.alibabacloud.com/?tab=app#/data-center) page in the console.
   * - A RAM user must obtain the required [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Alibaba Cloud Model Studio and [join a workspace](https://help.aliyun.com/document_detail/2851098.html) before calling this operation. The `AliyunBailianDataFullAccess` permission, which includes the `sfm:AddCategory` permission, is required. An Alibaba Cloud account can call this operation directly without requiring authorization. To call this operation, use the latest version of the [Alibaba Cloud Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29).
   * - This operation is not idempotent.
   * **Rate limiting:** Frequent calls to this operation are subject to rate limiting. Do not exceed a frequency of 5 calls per second. If rate limiting is triggered, try again later.
   * 
   * @param request - AddCategoryRequest
   * @returns AddCategoryResponse
   */
  async addCategory(WorkspaceId: string, request: $_model.AddCategoryRequest): Promise<$_model.AddCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addCategoryWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * Creates a connector. This API currently supports only file connectors.
   * 
   * @remarks
   * - To call this operation, a RAM user (sub-account) must first have the required [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Model Studio and be a member of a [business space](https://help.aliyun.com/document_detail/2851098.html). This requires the `AliyunBailianDataFullAccess` policy, which includes the sfm:AddCategory permission. A primary account can call this operation directly without authorization. We recommend using the latest <props="china">[Model Studio SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)<props="intl">[Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29) to call this operation.
   * - This operation is not idempotent.
   * **Throttling:**
   * Do not call this operation more than 5 times per second. If a request is throttled, try again later.
   * 
   * @param tmpReq - AddConnectorRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddConnectorResponse
   */
  async addConnectorWithOptions(WorkspaceId: string, tmpReq: $_model.AddConnectorRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AddConnectorResponse> {
    tmpReq.validate();
    let request = new $_model.AddConnectorShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.fileConnectorConfig)) {
      request.fileConnectorConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.fileConnectorConfig, "FileConnectorConfig", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.connectorName)) {
      body["ConnectorName"] = request.connectorName;
    }

    if (!$dara.isNull(request.connectorType)) {
      body["ConnectorType"] = request.connectorType;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.fileConnectorConfigShrink)) {
      body["FileConnectorConfig"] = request.fileConnectorConfigShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddConnector",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/datacenter/connector`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddConnectorResponse>(await this.callApi(params, req, runtime), new $_model.AddConnectorResponse({}));
  }

  /**
   * Creates a connector. This API currently supports only file connectors.
   * 
   * @remarks
   * - To call this operation, a RAM user (sub-account) must first have the required [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Model Studio and be a member of a [business space](https://help.aliyun.com/document_detail/2851098.html). This requires the `AliyunBailianDataFullAccess` policy, which includes the sfm:AddCategory permission. A primary account can call this operation directly without authorization. We recommend using the latest <props="china">[Model Studio SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)<props="intl">[Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29) to call this operation.
   * - This operation is not idempotent.
   * **Throttling:**
   * Do not call this operation more than 5 times per second. If a request is throttled, try again later.
   * 
   * @param request - AddConnectorRequest
   * @returns AddConnectorResponse
   */
  async addConnector(WorkspaceId: string, request: $_model.AddConnectorRequest): Promise<$_model.AddConnectorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addConnectorWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * Imports a file from the temporary storage space of Alibaba Cloud Model Studio into a data connection (formerly known as application data).
   * 
   * @remarks
   * - To call this API, a RAM user (sub-account) must have the required [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Alibaba Cloud Model Studio and be [added to a workspace](https://help.aliyun.com/document_detail/2851098.html). The required policy is `AliyunBailianDataFullAccess`, which includes the `sfm:AddFile` permission. An Alibaba Cloud account (primary account) can call this API directly without authorization. We recommend using the latest <props="china">[Alibaba Cloud Model Studio SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)<props="intl">[Alibaba Cloud Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29) to call this API.
   * - This API is not idempotent.
   * **Throttling:** Frequent calls to this API are subject to throttling. Do not exceed a rate of 10 calls per second. If your request is throttled, try again later.
   * 
   * @param tmpReq - AddFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddFileResponse
   */
  async addFileWithOptions(WorkspaceId: string, tmpReq: $_model.AddFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AddFileResponse> {
    tmpReq.validate();
    let request = new $_model.AddFileShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.parserConfig)) {
      request.parserConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parserConfig, "ParserConfig", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryId)) {
      body["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.categoryType)) {
      body["CategoryType"] = request.categoryType;
    }

    if (!$dara.isNull(request.leaseId)) {
      body["LeaseId"] = request.leaseId;
    }

    if (!$dara.isNull(request.originalFileUrl)) {
      body["OriginalFileUrl"] = request.originalFileUrl;
    }

    if (!$dara.isNull(request.parser)) {
      body["Parser"] = request.parser;
    }

    if (!$dara.isNull(request.parserConfigShrink)) {
      body["ParserConfig"] = request.parserConfigShrink;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      body["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddFile",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/datacenter/file`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddFileResponse>(await this.callApi(params, req, runtime), new $_model.AddFileResponse({}));
  }

  /**
   * Imports a file from the temporary storage space of Alibaba Cloud Model Studio into a data connection (formerly known as application data).
   * 
   * @remarks
   * - To call this API, a RAM user (sub-account) must have the required [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Alibaba Cloud Model Studio and be [added to a workspace](https://help.aliyun.com/document_detail/2851098.html). The required policy is `AliyunBailianDataFullAccess`, which includes the `sfm:AddFile` permission. An Alibaba Cloud account (primary account) can call this API directly without authorization. We recommend using the latest <props="china">[Alibaba Cloud Model Studio SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)<props="intl">[Alibaba Cloud Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29) to call this API.
   * - This API is not idempotent.
   * **Throttling:** Frequent calls to this API are subject to throttling. Do not exceed a rate of 10 calls per second. If your request is throttled, try again later.
   * 
   * @param request - AddFileRequest
   * @returns AddFileResponse
   */
  async addFile(WorkspaceId: string, request: $_model.AddFileRequest): Promise<$_model.AddFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addFileWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * Imports files from an authorized OSS Bucket into Alibaba Cloud Model Studio (Bailian) application data.
   * 
   * @remarks
   * - Please ensure that the OSS Bucket and Alibaba Cloud Model Studio belong to the same Alibaba Cloud account (main account) and that authorization has been completed according to the [Configuration instructions for importing data from OSS](https://help.aliyun.com/document_detail/2782155.html).
   *  
   *      - Supported Bucket storage types do not include Archive, Cold Archive, or Deep Cold Archive. Buckets with content encryption are supported. Public read/write, public read, and private Buckets are supported.
   *      -  If you want to use a Bucket with [Referer hotlink protection](https://help.aliyun.com/document_detail/2636937.html) enabled, refer to [Allow access only from trusted websites](https://help.aliyun.com/document_detail/2636937.html) to add the domain `*.console.aliyun.com` to the Referer allowlist.
   * - A RAM user (sub-account) must first obtain the [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Alibaba Cloud Model Studio (requires `AliyunBailianDataFullAccess`, which includes the sfm:AddFilesFromAuthorizedOss permission point) and [join a workspace](https://help.aliyun.com/document_detail/2851098.html) before calling this operation. The Alibaba Cloud account (main account) can call this directly without authorization. We recommend that you call this operation through the latest version of the <props="china">[Alibaba Cloud Model Studio SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)<props="intl">[Alibaba Cloud Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29).
   * - This operation is not idempotent.
   * **Throttling description:**
   * Frequent calls to this operation will be throttled. The frequency should not exceed 5 calls per second. If throttled, please try again later.
   * 
   * @param tmpReq - AddFilesFromAuthorizedOssRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddFilesFromAuthorizedOssResponse
   */
  async addFilesFromAuthorizedOssWithOptions(WorkspaceId: string, tmpReq: $_model.AddFilesFromAuthorizedOssRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AddFilesFromAuthorizedOssResponse> {
    tmpReq.validate();
    let request = new $_model.AddFilesFromAuthorizedOssShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.fileDetails)) {
      request.fileDetailsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.fileDetails, "FileDetails", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryId)) {
      body["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.categoryType)) {
      body["CategoryType"] = request.categoryType;
    }

    if (!$dara.isNull(request.fileDetailsShrink)) {
      body["FileDetails"] = request.fileDetailsShrink;
    }

    if (!$dara.isNull(request.ossBucketName)) {
      body["OssBucketName"] = request.ossBucketName;
    }

    if (!$dara.isNull(request.ossRegionId)) {
      body["OssRegionId"] = request.ossRegionId;
    }

    if (!$dara.isNull(request.overWriteFileByOssKey)) {
      body["OverWriteFileByOssKey"] = request.overWriteFileByOssKey;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      body["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddFilesFromAuthorizedOss",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/datacenter/file/fromoss`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddFilesFromAuthorizedOssResponse>(await this.callApi(params, req, runtime), new $_model.AddFilesFromAuthorizedOssResponse({}));
  }

  /**
   * Imports files from an authorized OSS Bucket into Alibaba Cloud Model Studio (Bailian) application data.
   * 
   * @remarks
   * - Please ensure that the OSS Bucket and Alibaba Cloud Model Studio belong to the same Alibaba Cloud account (main account) and that authorization has been completed according to the [Configuration instructions for importing data from OSS](https://help.aliyun.com/document_detail/2782155.html).
   *  
   *      - Supported Bucket storage types do not include Archive, Cold Archive, or Deep Cold Archive. Buckets with content encryption are supported. Public read/write, public read, and private Buckets are supported.
   *      -  If you want to use a Bucket with [Referer hotlink protection](https://help.aliyun.com/document_detail/2636937.html) enabled, refer to [Allow access only from trusted websites](https://help.aliyun.com/document_detail/2636937.html) to add the domain `*.console.aliyun.com` to the Referer allowlist.
   * - A RAM user (sub-account) must first obtain the [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Alibaba Cloud Model Studio (requires `AliyunBailianDataFullAccess`, which includes the sfm:AddFilesFromAuthorizedOss permission point) and [join a workspace](https://help.aliyun.com/document_detail/2851098.html) before calling this operation. The Alibaba Cloud account (main account) can call this directly without authorization. We recommend that you call this operation through the latest version of the <props="china">[Alibaba Cloud Model Studio SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)<props="intl">[Alibaba Cloud Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29).
   * - This operation is not idempotent.
   * **Throttling description:**
   * Frequent calls to this operation will be throttled. The frequency should not exceed 5 calls per second. If throttled, please try again later.
   * 
   * @param request - AddFilesFromAuthorizedOssRequest
   * @returns AddFilesFromAuthorizedOssResponse
   */
  async addFilesFromAuthorizedOss(WorkspaceId: string, request: $_model.AddFilesFromAuthorizedOssRequest): Promise<$_model.AddFilesFromAuthorizedOssResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addFilesFromAuthorizedOssWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * Adds a table to a tabular data connector.
   * 
   * @remarks
   * - Resource Access Management (RAM) users must first obtain [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Alibaba Cloud Model Studio (requires `AliyunBailianDataFullAccess`, which includes the sfm:AddTable permission), and [join a workspace](https://help.aliyun.com/document_detail/2851098.html) before invoking this operation. Alibaba Cloud accounts can invoke this operation directly without authorization. Use the latest <props="china">[Alibaba Cloud Model Studio SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)<props="intl">[Alibaba Cloud Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29) to invoke this operation.
   * - This operation is not idempotent.
   * **Rate limit:**
   * This operation is throttled if called too frequently. Do not exceed 10 calls per second. If throttled, retry later.
   * 
   * @param tmpReq - AddTableRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddTableResponse
   */
  async addTableWithOptions(WorkspaceId: string, tmpReq: $_model.AddTableRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AddTableResponse> {
    tmpReq.validate();
    let request = new $_model.AddTableShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tableColumns)) {
      request.tableColumnsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tableColumns, "TableColumns", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.connectorId)) {
      body["ConnectorId"] = request.connectorId;
    }

    if (!$dara.isNull(request.tableColumnsShrink)) {
      body["TableColumns"] = request.tableColumnsShrink;
    }

    if (!$dara.isNull(request.tableDesc)) {
      body["TableDesc"] = request.tableDesc;
    }

    if (!$dara.isNull(request.tableName)) {
      body["TableName"] = request.tableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddTable",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/datacenter/table`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddTableResponse>(await this.callApi(params, req, runtime), new $_model.AddTableResponse({}));
  }

  /**
   * Adds a table to a tabular data connector.
   * 
   * @remarks
   * - Resource Access Management (RAM) users must first obtain [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Alibaba Cloud Model Studio (requires `AliyunBailianDataFullAccess`, which includes the sfm:AddTable permission), and [join a workspace](https://help.aliyun.com/document_detail/2851098.html) before invoking this operation. Alibaba Cloud accounts can invoke this operation directly without authorization. Use the latest <props="china">[Alibaba Cloud Model Studio SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)<props="intl">[Alibaba Cloud Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29) to invoke this operation.
   * - This operation is not idempotent.
   * **Rate limit:**
   * This operation is throttled if called too frequently. Do not exceed 10 calls per second. If throttled, retry later.
   * 
   * @param request - AddTableRequest
   * @returns AddTableResponse
   */
  async addTable(WorkspaceId: string, request: $_model.AddTableRequest): Promise<$_model.AddTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addTableWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * Request an upload lease for uploading knowledge base files or files for agent application conversational interactions.
   * 
   * @remarks
   * - RAM users (sub-accounts) must first obtain [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Alibaba Cloud Model Studio (requires `AliyunBailianDataFullAccess`, which includes the sfm:ApplyFileUploadLease permission), and [join a workspace](https://help.aliyun.com/document_detail/2851098.html) before calling this API. Alibaba Cloud accounts (primary accounts) can directly call this API without authorization. We recommend that you call this API by using the latest <props="china">[Alibaba Cloud Model Studio SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)<props="intl">[Alibaba Cloud Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29).
   * - This API is not idempotent.
   * **Throttling:**
   * This API is subject to throttling if called too frequently. The frequency must not exceed 10 calls per second. If throttled, please retry later.
   * 
   * @param request - ApplyFileUploadLeaseRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyFileUploadLeaseResponse
   */
  async applyFileUploadLeaseWithOptions(CategoryId: string, WorkspaceId: string, request: $_model.ApplyFileUploadLeaseRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ApplyFileUploadLeaseResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryType)) {
      body["CategoryType"] = request.categoryType;
    }

    if (!$dara.isNull(request.fileName)) {
      body["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.md5)) {
      body["Md5"] = request.md5;
    }

    if (!$dara.isNull(request.sizeInBytes)) {
      body["SizeInBytes"] = request.sizeInBytes;
    }

    if (!$dara.isNull(request.useInternalEndpoint)) {
      body["UseInternalEndpoint"] = request.useInternalEndpoint;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyFileUploadLease",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/datacenter/category/${$dara.URL.percentEncode(CategoryId)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApplyFileUploadLeaseResponse>(await this.callApi(params, req, runtime), new $_model.ApplyFileUploadLeaseResponse({}));
  }

  /**
   * Request an upload lease for uploading knowledge base files or files for agent application conversational interactions.
   * 
   * @remarks
   * - RAM users (sub-accounts) must first obtain [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Alibaba Cloud Model Studio (requires `AliyunBailianDataFullAccess`, which includes the sfm:ApplyFileUploadLease permission), and [join a workspace](https://help.aliyun.com/document_detail/2851098.html) before calling this API. Alibaba Cloud accounts (primary accounts) can directly call this API without authorization. We recommend that you call this API by using the latest <props="china">[Alibaba Cloud Model Studio SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)<props="intl">[Alibaba Cloud Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29).
   * - This API is not idempotent.
   * **Throttling:**
   * This API is subject to throttling if called too frequently. The frequency must not exceed 10 calls per second. If throttled, please retry later.
   * 
   * @param request - ApplyFileUploadLeaseRequest
   * @returns ApplyFileUploadLeaseResponse
   */
  async applyFileUploadLease(CategoryId: string, WorkspaceId: string, request: $_model.ApplyFileUploadLeaseRequest): Promise<$_model.ApplyFileUploadLeaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.applyFileUploadLeaseWithOptions(CategoryId, WorkspaceId, request, headers, runtime);
  }

  /**
   * This interface is intended for pro-code deployment only; other scenarios are currently not supported. It is used to apply for a temporary file upload lease. After obtaining the lease, you must upload the file manually.
   * 
   * @remarks
   * 1\\. This interface is intended for pro-code deployment only; other scenarios are currently not supported. 2. After obtaining the temporary file upload lease via this interface, upload the file manually.
   * 
   * @param request - ApplyTempStorageLeaseRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyTempStorageLeaseResponse
   */
  async applyTempStorageLeaseWithOptions(WorkspaceId: string, request: $_model.ApplyTempStorageLeaseRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ApplyTempStorageLeaseResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileName)) {
      body["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.sizeInBytes)) {
      body["SizeInBytes"] = request.sizeInBytes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyTempStorageLease",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/datacenter`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApplyTempStorageLeaseResponse>(await this.callApi(params, req, runtime), new $_model.ApplyTempStorageLeaseResponse({}));
  }

  /**
   * This interface is intended for pro-code deployment only; other scenarios are currently not supported. It is used to apply for a temporary file upload lease. After obtaining the lease, you must upload the file manually.
   * 
   * @remarks
   * 1\\. This interface is intended for pro-code deployment only; other scenarios are currently not supported. 2. After obtaining the temporary file upload lease via this interface, upload the file manually.
   * 
   * @param request - ApplyTempStorageLeaseRequest
   * @returns ApplyTempStorageLeaseResponse
   */
  async applyTempStorageLease(WorkspaceId: string, request: $_model.ApplyTempStorageLeaseRequest): Promise<$_model.ApplyTempStorageLeaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.applyTempStorageLeaseWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * This operation updates document tags in a data connection in batches.
   * 
   * @param tmpReq - BatchUpdateFileTagRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchUpdateFileTagResponse
   */
  async batchUpdateFileTagWithOptions(WorkspaceId: string, tmpReq: $_model.BatchUpdateFileTagRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.BatchUpdateFileTagResponse> {
    tmpReq.validate();
    let request = new $_model.BatchUpdateFileTagShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.fileInfos)) {
      request.fileInfosShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.fileInfos, "FileInfos", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileInfosShrink)) {
      body["FileInfos"] = request.fileInfosShrink;
    }

    if (!$dara.isNull(request.updateMode)) {
      body["UpdateMode"] = request.updateMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchUpdateFileTag",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/datacenter/batchupdatetag`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchUpdateFileTagResponse>(await this.callApi(params, req, runtime), new $_model.BatchUpdateFileTagResponse({}));
  }

  /**
   * This operation updates document tags in a data connection in batches.
   * 
   * @param request - BatchUpdateFileTagRequest
   * @returns BatchUpdateFileTagResponse
   */
  async batchUpdateFileTag(WorkspaceId: string, request: $_model.BatchUpdateFileTagRequest): Promise<$_model.BatchUpdateFileTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchUpdateFileTagWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * Configures the parsing method for a specific file type. For example, you can specify LLM-based document parsing for .pdf files and the Qwen VL Parser for .jpg files.
   * 
   * @remarks
   * - A RAM user (sub-account) must first obtain the required [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Alibaba Cloud Model Studio (the `AliyunBailianDataFullAccess` policy, which includes the `sfm:ChangeParseSetting` permission) and [join a workspace](https://help.aliyun.com/document_detail/2851098.html) before calling this operation. An Alibaba Cloud account (primary account) can call this operation directly without authorization. We recommend using the latest version of the <props="china">[Alibaba Cloud Model Studio SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)<props="intl">[Alibaba Cloud Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29) to call this operation.
   * - This operation is not idempotent.
   * **Throttling**
   * The system throttles frequent calls to this operation. Do not exceed a frequency of 10 requests per second. If your request is throttled, try again later.
   * 
   * @param tmpReq - ChangeParseSettingRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeParseSettingResponse
   */
  async changeParseSettingWithOptions(WorkspaceId: string, tmpReq: $_model.ChangeParseSettingRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeParseSettingResponse> {
    tmpReq.validate();
    let request = new $_model.ChangeParseSettingShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.parserConfig)) {
      request.parserConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parserConfig, "ParserConfig", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryId)) {
      body["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.fileType)) {
      body["FileType"] = request.fileType;
    }

    if (!$dara.isNull(request.parser)) {
      body["Parser"] = request.parser;
    }

    if (!$dara.isNull(request.parserConfigShrink)) {
      body["ParserConfig"] = request.parserConfigShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeParseSetting",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/datacenter/parser/settings`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeParseSettingResponse>(await this.callApi(params, req, runtime), new $_model.ChangeParseSettingResponse({}));
  }

  /**
   * Configures the parsing method for a specific file type. For example, you can specify LLM-based document parsing for .pdf files and the Qwen VL Parser for .jpg files.
   * 
   * @remarks
   * - A RAM user (sub-account) must first obtain the required [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Alibaba Cloud Model Studio (the `AliyunBailianDataFullAccess` policy, which includes the `sfm:ChangeParseSetting` permission) and [join a workspace](https://help.aliyun.com/document_detail/2851098.html) before calling this operation. An Alibaba Cloud account (primary account) can call this operation directly without authorization. We recommend using the latest version of the <props="china">[Alibaba Cloud Model Studio SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)<props="intl">[Alibaba Cloud Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29) to call this operation.
   * - This operation is not idempotent.
   * **Throttling**
   * The system throttles frequent calls to this operation. Do not exceed a frequency of 10 requests per second. If your request is throttled, try again later.
   * 
   * @param request - ChangeParseSettingRequest
   * @returns ChangeParseSettingResponse
   */
  async changeParseSetting(WorkspaceId: string, request: $_model.ChangeParseSettingRequest): Promise<$_model.ChangeParseSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.changeParseSettingWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * 创建并发布智能体应用
   * 
   * @param tmpReq - CreateAndPulishAgentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAndPulishAgentResponse
   */
  async createAndPulishAgentWithOptions(workspaceId: string, tmpReq: $_model.CreateAndPulishAgentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAndPulishAgentResponse> {
    tmpReq.validate();
    let request = new $_model.CreateAndPulishAgentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.applicationConfig)) {
      request.applicationConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.applicationConfig, "applicationConfig", "json");
    }

    if (!$dara.isNull(tmpReq.sampleLibrary)) {
      request.sampleLibraryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sampleLibrary, "sampleLibrary", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicationConfigShrink)) {
      body["applicationConfig"] = request.applicationConfigShrink;
    }

    if (!$dara.isNull(request.instructions)) {
      body["instructions"] = request.instructions;
    }

    if (!$dara.isNull(request.modelId)) {
      body["modelId"] = request.modelId;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.sampleLibraryShrink)) {
      body["sampleLibrary"] = request.sampleLibraryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAndPulishAgent",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/application/agents`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAndPulishAgentResponse>(await this.callApi(params, req, runtime), new $_model.CreateAndPulishAgentResponse({}));
  }

  /**
   * 创建并发布智能体应用
   * 
   * @param request - CreateAndPulishAgentRequest
   * @returns CreateAndPulishAgentResponse
   */
  async createAndPulishAgent(workspaceId: string, request: $_model.CreateAndPulishAgentRequest): Promise<$_model.CreateAndPulishAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAndPulishAgentWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Use this API to create two types of knowledge bases: unstructured knowledge bases for documents, audio, or video, and structured knowledge bases for data queries or image Q&A.
   * 
   * @remarks
   * - **Permissions**:
   *   - **RAM user**: A RAM user must obtain the required [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Alibaba Cloud Model Studio and [join a workspace](https://help.aliyun.com/document_detail/2851098.html) before calling this operation. You can use the `AliyunBailianDataFullAccess` policy, which includes the \\`sfm:CreateIndex\\` permission required for this operation.
   *   - **Alibaba Cloud account**: By default, Alibaba Cloud accounts have the required permissions and can call this operation directly.
   * - **How to call**: Use the latest version of the <props="intl">[Alibaba Cloud Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29) to call this operation. The SDK handles the complex signature calculation logic to simplify the process.
   * - **What to do next**: This operation only initializes a knowledge base creation job. After calling this operation, you must call the **SubmitIndexJob** operation to complete the creation. Otherwise, an empty knowledge base is created. For related code examples, see [Knowledge base API guide](https://help.aliyun.com/document_detail/2852772.html).
   * - **Idempotence**: This operation is not idempotent. Repeated calls may create multiple knowledge bases with the same name. To ensure idempotence, query for the knowledge base before you create it.
   * **Rate limiting:**
   * Frequent calls to this operation are subject to rate limiting. Do not exceed a frequency of 10 calls per second. If you encounter rate limiting, retry the call later.
   * 
   * @param tmpReq - CreateIndexRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIndexResponse
   */
  async createIndexWithOptions(WorkspaceId: string, tmpReq: $_model.CreateIndexRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateIndexResponse> {
    tmpReq.validate();
    let request = new $_model.CreateIndexShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.categoryIds)) {
      request.categoryIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.categoryIds, "CategoryIds", "json");
    }

    if (!$dara.isNull(tmpReq.columns)) {
      request.columnsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.columns, "Columns", "json");
    }

    if (!$dara.isNull(tmpReq.documentIds)) {
      request.documentIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.documentIds, "DocumentIds", "json");
    }

    if (!$dara.isNull(tmpReq.tableIds)) {
      request.tableIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tableIds, "TableIds", "json");
    }

    if (!$dara.isNull(tmpReq.metaExtractColumns)) {
      request.metaExtractColumnsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.metaExtractColumns, "metaExtractColumns", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryIdsShrink)) {
      query["CategoryIds"] = request.categoryIdsShrink;
    }

    if (!$dara.isNull(request.chunkSize)) {
      query["ChunkSize"] = request.chunkSize;
    }

    if (!$dara.isNull(request.columnsShrink)) {
      query["Columns"] = request.columnsShrink;
    }

    if (!$dara.isNull(request.createIndexType)) {
      query["CreateIndexType"] = request.createIndexType;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.documentIdsShrink)) {
      query["DocumentIds"] = request.documentIdsShrink;
    }

    if (!$dara.isNull(request.embeddingModelName)) {
      query["EmbeddingModelName"] = request.embeddingModelName;
    }

    if (!$dara.isNull(request.enableRewrite)) {
      query["EnableRewrite"] = request.enableRewrite;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.overlapSize)) {
      query["OverlapSize"] = request.overlapSize;
    }

    if (!$dara.isNull(request.rerankInstruct)) {
      query["RerankInstruct"] = request.rerankInstruct;
    }

    if (!$dara.isNull(request.rerankMinScore)) {
      query["RerankMinScore"] = request.rerankMinScore;
    }

    if (!$dara.isNull(request.rerankMode)) {
      query["RerankMode"] = request.rerankMode;
    }

    if (!$dara.isNull(request.rerankModelName)) {
      query["RerankModelName"] = request.rerankModelName;
    }

    if (!$dara.isNull(request.separator)) {
      query["Separator"] = request.separator;
    }

    if (!$dara.isNull(request.sinkInstanceId)) {
      query["SinkInstanceId"] = request.sinkInstanceId;
    }

    if (!$dara.isNull(request.sinkRegion)) {
      query["SinkRegion"] = request.sinkRegion;
    }

    if (!$dara.isNull(request.sinkType)) {
      query["SinkType"] = request.sinkType;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.structureType)) {
      query["StructureType"] = request.structureType;
    }

    if (!$dara.isNull(request.tableIdsShrink)) {
      query["TableIds"] = request.tableIdsShrink;
    }

    if (!$dara.isNull(request.channelType)) {
      query["channelType"] = request.channelType;
    }

    if (!$dara.isNull(request.chunkMode)) {
      query["chunkMode"] = request.chunkMode;
    }

    if (!$dara.isNull(request.connectId)) {
      query["connectId"] = request.connectId;
    }

    if (!$dara.isNull(request.database)) {
      query["database"] = request.database;
    }

    if (!$dara.isNull(request.datasourceCode)) {
      query["datasourceCode"] = request.datasourceCode;
    }

    if (!$dara.isNull(request.enableHeaders)) {
      query["enableHeaders"] = request.enableHeaders;
    }

    if (!$dara.isNull(request.knowledgeScene)) {
      query["knowledgeScene"] = request.knowledgeScene;
    }

    if (!$dara.isNull(request.knowledgeType)) {
      query["knowledgeType"] = request.knowledgeType;
    }

    if (!$dara.isNull(request.metaExtractColumnsShrink)) {
      query["metaExtractColumns"] = request.metaExtractColumnsShrink;
    }

    if (!$dara.isNull(request.pipelineCommercialCu)) {
      query["pipelineCommercialCu"] = request.pipelineCommercialCu;
    }

    if (!$dara.isNull(request.pipelineCommercialType)) {
      query["pipelineCommercialType"] = request.pipelineCommercialType;
    }

    if (!$dara.isNull(request.pipelineRetrieveRateLimitStrategy)) {
      query["pipelineRetrieveRateLimitStrategy"] = request.pipelineRetrieveRateLimitStrategy;
    }

    if (!$dara.isNull(request.table)) {
      query["table"] = request.table;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateIndex",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/index/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateIndexResponse>(await this.callApi(params, req, runtime), new $_model.CreateIndexResponse({}));
  }

  /**
   * Use this API to create two types of knowledge bases: unstructured knowledge bases for documents, audio, or video, and structured knowledge bases for data queries or image Q&A.
   * 
   * @remarks
   * - **Permissions**:
   *   - **RAM user**: A RAM user must obtain the required [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Alibaba Cloud Model Studio and [join a workspace](https://help.aliyun.com/document_detail/2851098.html) before calling this operation. You can use the `AliyunBailianDataFullAccess` policy, which includes the \\`sfm:CreateIndex\\` permission required for this operation.
   *   - **Alibaba Cloud account**: By default, Alibaba Cloud accounts have the required permissions and can call this operation directly.
   * - **How to call**: Use the latest version of the <props="intl">[Alibaba Cloud Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29) to call this operation. The SDK handles the complex signature calculation logic to simplify the process.
   * - **What to do next**: This operation only initializes a knowledge base creation job. After calling this operation, you must call the **SubmitIndexJob** operation to complete the creation. Otherwise, an empty knowledge base is created. For related code examples, see [Knowledge base API guide](https://help.aliyun.com/document_detail/2852772.html).
   * - **Idempotence**: This operation is not idempotent. Repeated calls may create multiple knowledge bases with the same name. To ensure idempotence, query for the knowledge base before you create it.
   * **Rate limiting:**
   * Frequent calls to this operation are subject to rate limiting. Do not exceed a frequency of 10 calls per second. If you encounter rate limiting, retry the call later.
   * 
   * @param request - CreateIndexRequest
   * @returns CreateIndexResponse
   */
  async createIndex(WorkspaceId: string, request: $_model.CreateIndexRequest): Promise<$_model.CreateIndexResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createIndexWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * Creates a long-term memory.
   * 
   * @remarks
   * - You can store specific information from conversations (memory nodes. For more information, see [Long-term memory](https://www.alibabacloud.com/help/en/model-studio/user-guide/long-term-memory)) in a long-term memory. Agent applications can then reference this information in subsequent conversations. This is not an automatic creation procedure. You must first invoke the [CreateMemory](https://www.alibabacloud.com/help/en/model-studio/developer-reference/api-bailian-2023-12-29-creatememory) operation to create a long-term memory and obtain the `memoryId`. Then pass the `memoryId` when you [invoke the agent application through the API](https://www.alibabacloud.com/help/en/model-studio/user-guide/application-calling).
   *     > Long-term memory does not support storing and managing user profiles through the API. Perform related operations in the console. For more information, see [Long-term memory](https://www.alibabacloud.com/help/en/model-studio/user-guide/long-term-memory#578ebae524m6l).
   * - If you pass a `memoryId`, the system uses automatic creation to generate memory nodes (MemoryNode) under the specified long-term memory based on conversation records. You can also invoke the [CreateMemoryNode](https://www.alibabacloud.com/help/en/model-studio/developer-reference/api-bailian-2023-12-29-creatememorynode) operation to manually create memory nodes.
   * - This operation does not support idempotence.
   * **Throttling:** Ensure that the interval between two consecutive requests is at least 1 second. Otherwise, throttling may be triggered. If throttling occurs, retry later.
   * 
   * @param request - CreateMemoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMemoryResponse
   */
  async createMemoryWithOptions(workspaceId: string, request: $_model.CreateMemoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMemoryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      query["description"] = request.description;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMemory",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/memories`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMemoryResponse>(await this.callApi(params, req, runtime), new $_model.CreateMemoryResponse({}));
  }

  /**
   * Creates a long-term memory.
   * 
   * @remarks
   * - You can store specific information from conversations (memory nodes. For more information, see [Long-term memory](https://www.alibabacloud.com/help/en/model-studio/user-guide/long-term-memory)) in a long-term memory. Agent applications can then reference this information in subsequent conversations. This is not an automatic creation procedure. You must first invoke the [CreateMemory](https://www.alibabacloud.com/help/en/model-studio/developer-reference/api-bailian-2023-12-29-creatememory) operation to create a long-term memory and obtain the `memoryId`. Then pass the `memoryId` when you [invoke the agent application through the API](https://www.alibabacloud.com/help/en/model-studio/user-guide/application-calling).
   *     > Long-term memory does not support storing and managing user profiles through the API. Perform related operations in the console. For more information, see [Long-term memory](https://www.alibabacloud.com/help/en/model-studio/user-guide/long-term-memory#578ebae524m6l).
   * - If you pass a `memoryId`, the system uses automatic creation to generate memory nodes (MemoryNode) under the specified long-term memory based on conversation records. You can also invoke the [CreateMemoryNode](https://www.alibabacloud.com/help/en/model-studio/developer-reference/api-bailian-2023-12-29-creatememorynode) operation to manually create memory nodes.
   * - This operation does not support idempotence.
   * **Throttling:** Ensure that the interval between two consecutive requests is at least 1 second. Otherwise, throttling may be triggered. If throttling occurs, retry later.
   * 
   * @param request - CreateMemoryRequest
   * @returns CreateMemoryResponse
   */
  async createMemory(workspaceId: string, request: $_model.CreateMemoryRequest): Promise<$_model.CreateMemoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createMemoryWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Creates a memory node.
   * 
   * @param request - CreateMemoryNodeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMemoryNodeResponse
   */
  async createMemoryNodeWithOptions(workspaceId: string, memoryId: string, request: $_model.CreateMemoryNodeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMemoryNodeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      query["content"] = request.content;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMemoryNode",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/memories/${$dara.URL.percentEncode(memoryId)}/memoryNodes`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMemoryNodeResponse>(await this.callApi(params, req, runtime), new $_model.CreateMemoryNodeResponse({}));
  }

  /**
   * Creates a memory node.
   * 
   * @param request - CreateMemoryNodeRequest
   * @returns CreateMemoryNodeResponse
   */
  async createMemoryNode(workspaceId: string, memoryId: string, request: $_model.CreateMemoryNodeRequest): Promise<$_model.CreateMemoryNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createMemoryNodeWithOptions(workspaceId, memoryId, request, headers, runtime);
  }

  /**
   * Create a prompt template.
   * 
   * @remarks
   * This API does not currently support the creation of text-to-image prompt templates.
   * 
   * @param request - CreatePromptTemplateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePromptTemplateResponse
   */
  async createPromptTemplateWithOptions(workspaceId: string, request: $_model.CreatePromptTemplateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePromptTemplateResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      query["content"] = request.content;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePromptTemplate",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/promptTemplates`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePromptTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CreatePromptTemplateResponse({}));
  }

  /**
   * Create a prompt template.
   * 
   * @remarks
   * This API does not currently support the creation of text-to-image prompt templates.
   * 
   * @param request - CreatePromptTemplateRequest
   * @returns CreatePromptTemplateResponse
   */
  async createPromptTemplate(workspaceId: string, request: $_model.CreatePromptTemplateRequest): Promise<$_model.CreatePromptTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPromptTemplateWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 删除智能体
   * 
   * @param request - DeleteAgentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAgentResponse
   */
  async deleteAgentWithOptions(workspaceId: string, appCode: string, request: $_model.DeleteAgentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAgentResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAgent",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/application/agents/${$dara.URL.percentEncode(appCode)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAgentResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAgentResponse({}));
  }

  /**
   * 删除智能体
   * 
   * @param request - DeleteAgentRequest
   * @returns DeleteAgentResponse
   */
  async deleteAgent(workspaceId: string, appCode: string, request: $_model.DeleteAgentRequest): Promise<$_model.DeleteAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAgentWithOptions(workspaceId, appCode, request, headers, runtime);
  }

  /**
   * Permanently deletes a specified category.
   * 
   * @remarks
   * - Resource Access Management (RAM) users must first obtain [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Alibaba Cloud Model Studio (requiring `AliyunBailianDataFullAccess`, which includes the sfm:DeleteCategory permission), and [join a workspace](https://help.aliyun.com/document_detail/2851098.html) before calling this operation. Alibaba Cloud accounts can call this operation directly without authorization. Use the latest <props="china">[Alibaba Cloud Model Studio SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)<props="intl">[Alibaba Cloud Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29) to call this operation.
   * - This operation is idempotent.
   * **Rate limiting:**
   * This operation is subject to rate limiting. Do not exceed 5 calls per second. If you are throttled, retry later.
   * 
   * @param request - DeleteCategoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCategoryResponse
   */
  async deleteCategoryWithOptions(CategoryId: string, WorkspaceId: string, request: $_model.DeleteCategoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCategoryResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCategory",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/datacenter/category/${$dara.URL.percentEncode(CategoryId)}/`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCategoryResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCategoryResponse({}));
  }

  /**
   * Permanently deletes a specified category.
   * 
   * @remarks
   * - Resource Access Management (RAM) users must first obtain [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Alibaba Cloud Model Studio (requiring `AliyunBailianDataFullAccess`, which includes the sfm:DeleteCategory permission), and [join a workspace](https://help.aliyun.com/document_detail/2851098.html) before calling this operation. Alibaba Cloud accounts can call this operation directly without authorization. Use the latest <props="china">[Alibaba Cloud Model Studio SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)<props="intl">[Alibaba Cloud Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29) to call this operation.
   * - This operation is idempotent.
   * **Rate limiting:**
   * This operation is subject to rate limiting. Do not exceed 5 calls per second. If you are throttled, retry later.
   * 
   * @param request - DeleteCategoryRequest
   * @returns DeleteCategoryResponse
   */
  async deleteCategory(CategoryId: string, WorkspaceId: string, request: $_model.DeleteCategoryRequest): Promise<$_model.DeleteCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteCategoryWithOptions(CategoryId, WorkspaceId, request, headers, runtime);
  }

  /**
   * Deletes specified text chunks from a knowledge base. Deleted text chunks cannot be retrieved or recalled.
   * 
   * @remarks
   * <warning>  Deleted text chunks cannot be recovered (hard delete). Proceed with caution.
   * - **Permission requirements**:
   *   - **Resource Access Management (RAM) user**: Obtain [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Model Studio first (you can use the `AliyunBailianDataFullAccess` policy, which includes the sfm:DeleteChunk permission required by this operation), and [join a workspace](https://help.aliyun.com/document_detail/2851098.html) before invoking this operation.
   *   - **Alibaba Cloud account**: Has permissions by default and can invoke this operation directly.
   * - **Invocation method**: Use the latest <props="china">[Model Studio SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)<props="intl">[Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29). The SDK provides encapsulation of complex signature calculation logic and simplifies the invocation procedure.
   * - **Effective latency**: Changes typically take effect immediately. During peak hours, there may be a slight delay (seconds).
   * - **Idempotence**: This operation is idempotent. Repeated calls to delete an already deleted text chunk return a success response.
   * **Rate limit:**
   * This operation is throttled if called too frequently. Do not exceed 10 calls per second. If throttled, retry later.
   * 
   * @param tmpReq - DeleteChunkRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteChunkResponse
   */
  async deleteChunkWithOptions(WorkspaceId: string, tmpReq: $_model.DeleteChunkRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteChunkResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteChunkShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.chunkIds)) {
      request.chunkIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.chunkIds, "ChunkIds", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.chunkIdsShrink)) {
      query["ChunkIds"] = request.chunkIdsShrink;
    }

    if (!$dara.isNull(request.pipelineId)) {
      query["PipelineId"] = request.pipelineId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteChunk",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/chunk/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteChunkResponse>(await this.callApi(params, req, runtime), new $_model.DeleteChunkResponse({}));
  }

  /**
   * Deletes specified text chunks from a knowledge base. Deleted text chunks cannot be retrieved or recalled.
   * 
   * @remarks
   * <warning>  Deleted text chunks cannot be recovered (hard delete). Proceed with caution.
   * - **Permission requirements**:
   *   - **Resource Access Management (RAM) user**: Obtain [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Model Studio first (you can use the `AliyunBailianDataFullAccess` policy, which includes the sfm:DeleteChunk permission required by this operation), and [join a workspace](https://help.aliyun.com/document_detail/2851098.html) before invoking this operation.
   *   - **Alibaba Cloud account**: Has permissions by default and can invoke this operation directly.
   * - **Invocation method**: Use the latest <props="china">[Model Studio SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)<props="intl">[Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29). The SDK provides encapsulation of complex signature calculation logic and simplifies the invocation procedure.
   * - **Effective latency**: Changes typically take effect immediately. During peak hours, there may be a slight delay (seconds).
   * - **Idempotence**: This operation is idempotent. Repeated calls to delete an already deleted text chunk return a success response.
   * **Rate limit:**
   * This operation is throttled if called too frequently. Do not exceed 10 calls per second. If throttled, retry later.
   * 
   * @param request - DeleteChunkRequest
   * @returns DeleteChunkResponse
   */
  async deleteChunk(WorkspaceId: string, request: $_model.DeleteChunkRequest): Promise<$_model.DeleteChunkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteChunkWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * 删除连接器
   * 
   * @remarks
   * - RAM用户（子账号）需要首先获取阿里云百炼的[API权限](https://help.aliyun.com/document_detail/2848578.html)（需要`AliyunBailianDataFullAccess`，已包括sfm:DeleteConnector权限点），并[加入一个业务空间](https://help.aliyun.com/document_detail/2851098.html)后，方可调用本接口。阿里云账号（主账号）可直接调用无须授权。建议您通过最新版[阿里云百炼SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)[阿里云百炼SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29)来调用本接口。
   * - 本接口不具备幂等性。
   * **限流说明：**
   * 本接口频繁调用会被限流，频率请勿超过5次/秒。如遇限流，请稍后重试。
   * 
   * @param request - DeleteConnectorRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteConnectorResponse
   */
  async deleteConnectorWithOptions(ConnectorId: string, WorkspaceId: string, request: $_model.DeleteConnectorRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteConnectorResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteConnector",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/datacenter/connector/${$dara.URL.percentEncode(ConnectorId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteConnectorResponse>(await this.callApi(params, req, runtime), new $_model.DeleteConnectorResponse({}));
  }

  /**
   * 删除连接器
   * 
   * @remarks
   * - RAM用户（子账号）需要首先获取阿里云百炼的[API权限](https://help.aliyun.com/document_detail/2848578.html)（需要`AliyunBailianDataFullAccess`，已包括sfm:DeleteConnector权限点），并[加入一个业务空间](https://help.aliyun.com/document_detail/2851098.html)后，方可调用本接口。阿里云账号（主账号）可直接调用无须授权。建议您通过最新版[阿里云百炼SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)[阿里云百炼SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29)来调用本接口。
   * - 本接口不具备幂等性。
   * **限流说明：**
   * 本接口频繁调用会被限流，频率请勿超过5次/秒。如遇限流，请稍后重试。
   * 
   * @param request - DeleteConnectorRequest
   * @returns DeleteConnectorResponse
   */
  async deleteConnector(ConnectorId: string, WorkspaceId: string, request: $_model.DeleteConnectorRequest): Promise<$_model.DeleteConnectorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteConnectorWithOptions(ConnectorId, WorkspaceId, request, headers, runtime);
  }

  /**
   * Permanently delete a specified file from application data. Deleting data tables via API is not supported. For details, see the API Guide below.
   * 
   * @remarks
   * - Deleting data tables via API is not supported. To delete a data table or specific data within a table, go to <props="china">[Application Data](https://bailian.console.aliyun.com/?tab=app#/data-center)<props="intl">[Application Data](https://modelstudio.console.alibabacloud.com/?tab=app#/data-center) to perform the operation.
   * - This API is used to delete files in <props="china">[Application Data](https://bailian.console.aliyun.com/?tab=app#/data-center)<props="intl">[Application Data](https://modelstudio.console.alibabacloud.com/?tab=app#/data-center) and does not affect any knowledge bases that have already been built. To delete a file from a knowledge base, invoke the **DeleteIndexDocument** API.
   * - A RAM user must first obtain the [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Alibaba Cloud Model Studio (requiring `AliyunBailianDataFullAccess`, which includes the `sfm:DeleteFile` permission point) and [join a workspace](https://help.aliyun.com/document_detail/2851098.html) before invoking this API. An Alibaba Cloud account can invoke this API directly without authorization. We recommend that you use the latest version of the <props="china">[Alibaba Cloud Model Studio SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)<props="intl">[Alibaba Cloud Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29) to invoke this API.
   * - This API can only delete files whose status is either Failed to Parse (`PARSE_FAILED`) or Parse Succeeded (`PARSE_SUCCESS`).
   * - This API is idempotent.
   * **Rate Limiting Notice:**
   * Frequent invocation of this API will trigger rate limiting. Do not exceed 10 requests per second. If rate limited, retry after a short wait.
   * 
   * @param request - DeleteFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFileResponse
   */
  async deleteFileWithOptions(FileId: string, WorkspaceId: string, request: $_model.DeleteFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFileResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFile",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/datacenter/file/${$dara.URL.percentEncode(FileId)}/`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFileResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFileResponse({}));
  }

  /**
   * Permanently delete a specified file from application data. Deleting data tables via API is not supported. For details, see the API Guide below.
   * 
   * @remarks
   * - Deleting data tables via API is not supported. To delete a data table or specific data within a table, go to <props="china">[Application Data](https://bailian.console.aliyun.com/?tab=app#/data-center)<props="intl">[Application Data](https://modelstudio.console.alibabacloud.com/?tab=app#/data-center) to perform the operation.
   * - This API is used to delete files in <props="china">[Application Data](https://bailian.console.aliyun.com/?tab=app#/data-center)<props="intl">[Application Data](https://modelstudio.console.alibabacloud.com/?tab=app#/data-center) and does not affect any knowledge bases that have already been built. To delete a file from a knowledge base, invoke the **DeleteIndexDocument** API.
   * - A RAM user must first obtain the [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Alibaba Cloud Model Studio (requiring `AliyunBailianDataFullAccess`, which includes the `sfm:DeleteFile` permission point) and [join a workspace](https://help.aliyun.com/document_detail/2851098.html) before invoking this API. An Alibaba Cloud account can invoke this API directly without authorization. We recommend that you use the latest version of the <props="china">[Alibaba Cloud Model Studio SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)<props="intl">[Alibaba Cloud Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29) to invoke this API.
   * - This API can only delete files whose status is either Failed to Parse (`PARSE_FAILED`) or Parse Succeeded (`PARSE_SUCCESS`).
   * - This API is idempotent.
   * **Rate Limiting Notice:**
   * Frequent invocation of this API will trigger rate limiting. Do not exceed 10 requests per second. If rate limited, retry after a short wait.
   * 
   * @param request - DeleteFileRequest
   * @returns DeleteFileResponse
   */
  async deleteFile(FileId: string, WorkspaceId: string, request: $_model.DeleteFileRequest): Promise<$_model.DeleteFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteFileWithOptions(FileId, WorkspaceId, request, headers, runtime);
  }

  /**
   * Delete files in batch
   * 
   * @remarks
   * - Deleting data tables through the API is not supported. To delete a data table or specific data in a table, go to <props="china">[Application Data](https://bailian.console.aliyun.com/?tab=app#/data-center)<props="intl">[Application Data](https://modelstudio.console.alibabacloud.com/?tab=app#/data-center).
   * - This API is used to delete files in <props="china">[Application Data](https://bailian.console.aliyun.com/?tab=app#/data-center)<props="intl">[Application Data](https://modelstudio.console.alibabacloud.com/?tab=app#/data-center). It does not affect knowledge bases that have already been built. To delete files in a knowledge base, call the **DeleteIndexDocument** operation.
   * - A RAM user (sub-account) must first obtain the [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Alibaba Cloud Model Studio (requires `AliyunBailianDataFullAccess`, which already includes the sfm:DeleteFiles permission) and [join a workspace](https://help.aliyun.com/document_detail/2851098.html) before calling this operation. The Alibaba Cloud account (main account) can call this operation directly without authorization. We recommend that you use the latest version of the <props="china">[Alibaba Cloud Model Studio SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)<props="intl">[Alibaba Cloud Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29) to call this operation.
   * - This operation can only delete files whose status is parsing failed (PARSE_FAILED) or parsing succeeded (PARSE_SUCCESS).
   * - This operation is idempotent.
   * **Throttling:**
   * Frequent calls to this operation are throttled. Do not exceed 10 queries per second (QPS). If you are throttled, try again later.
   * 
   * @param tmpReq - DeleteFilesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFilesResponse
   */
  async deleteFilesWithOptions(WorkspaceId: string, tmpReq: $_model.DeleteFilesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFilesResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteFilesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.fileIds)) {
      request.fileIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.fileIds, "FileIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileIdsShrink)) {
      body["FileIds"] = request.fileIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFiles",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/datacenter/file/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFilesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFilesResponse({}));
  }

  /**
   * Delete files in batch
   * 
   * @remarks
   * - Deleting data tables through the API is not supported. To delete a data table or specific data in a table, go to <props="china">[Application Data](https://bailian.console.aliyun.com/?tab=app#/data-center)<props="intl">[Application Data](https://modelstudio.console.alibabacloud.com/?tab=app#/data-center).
   * - This API is used to delete files in <props="china">[Application Data](https://bailian.console.aliyun.com/?tab=app#/data-center)<props="intl">[Application Data](https://modelstudio.console.alibabacloud.com/?tab=app#/data-center). It does not affect knowledge bases that have already been built. To delete files in a knowledge base, call the **DeleteIndexDocument** operation.
   * - A RAM user (sub-account) must first obtain the [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Alibaba Cloud Model Studio (requires `AliyunBailianDataFullAccess`, which already includes the sfm:DeleteFiles permission) and [join a workspace](https://help.aliyun.com/document_detail/2851098.html) before calling this operation. The Alibaba Cloud account (main account) can call this operation directly without authorization. We recommend that you use the latest version of the <props="china">[Alibaba Cloud Model Studio SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)<props="intl">[Alibaba Cloud Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29) to call this operation.
   * - This operation can only delete files whose status is parsing failed (PARSE_FAILED) or parsing succeeded (PARSE_SUCCESS).
   * - This operation is idempotent.
   * **Throttling:**
   * Frequent calls to this operation are throttled. Do not exceed 10 queries per second (QPS). If you are throttled, try again later.
   * 
   * @param request - DeleteFilesRequest
   * @returns DeleteFilesResponse
   */
  async deleteFiles(WorkspaceId: string, request: $_model.DeleteFilesRequest): Promise<$_model.DeleteFilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteFilesWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * Permanently deletes a specified knowledge base.
   * 
   * @remarks
   * - Resource Access Management (RAM) users must first obtain [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Model Studio (requiring `AliyunBailianDataFullAccess`, which includes the sfm:DeleteIndex permission) and [join a workspace](https://help.aliyun.com/document_detail/2851098.html) before invoking this operation. Alibaba Cloud accounts can invoke this operation directly without authorization. Use the latest <props="china">[Model Studio SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)<props="intl">[Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29) to invoke this operation.
   * - Before invoking this operation, make sure that your knowledge base has been created and has not been deleted (that is, the knowledge base ID `IndexId` is valid).
   * - If the knowledge base is associated with an application, you must first dissociate it from the application before deleting it. This can currently only be done through the console. For more information, see [Knowledge base](https://help.aliyun.com/document_detail/2807740.html).
   * - Deletion is irreversible. A deleted knowledge base cannot be recovered. Proceed with caution.
   * - Invoking this operation does not delete files that have been imported into <props="china">[Application Data](https://bailian.console.aliyun.com/?tab=app#/data-center)<props="intl">[Application Data](https://modelstudio.console.alibabacloud.com/?tab=app#/data-center).
   * - This operation has idempotence.
   * **Rate limit:**
   * This operation is throttled if called too frequently. Do not exceed 10 calls per second. If you are throttled, retry later.
   * 
   * @param request - DeleteIndexRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIndexResponse
   */
  async deleteIndexWithOptions(WorkspaceId: string, request: $_model.DeleteIndexRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteIndexResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.indexId)) {
      query["IndexId"] = request.indexId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteIndex",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/index/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteIndexResponse>(await this.callApi(params, req, runtime), new $_model.DeleteIndexResponse({}));
  }

  /**
   * Permanently deletes a specified knowledge base.
   * 
   * @remarks
   * - Resource Access Management (RAM) users must first obtain [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Model Studio (requiring `AliyunBailianDataFullAccess`, which includes the sfm:DeleteIndex permission) and [join a workspace](https://help.aliyun.com/document_detail/2851098.html) before invoking this operation. Alibaba Cloud accounts can invoke this operation directly without authorization. Use the latest <props="china">[Model Studio SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)<props="intl">[Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29) to invoke this operation.
   * - Before invoking this operation, make sure that your knowledge base has been created and has not been deleted (that is, the knowledge base ID `IndexId` is valid).
   * - If the knowledge base is associated with an application, you must first dissociate it from the application before deleting it. This can currently only be done through the console. For more information, see [Knowledge base](https://help.aliyun.com/document_detail/2807740.html).
   * - Deletion is irreversible. A deleted knowledge base cannot be recovered. Proceed with caution.
   * - Invoking this operation does not delete files that have been imported into <props="china">[Application Data](https://bailian.console.aliyun.com/?tab=app#/data-center)<props="intl">[Application Data](https://modelstudio.console.alibabacloud.com/?tab=app#/data-center).
   * - This operation has idempotence.
   * **Rate limit:**
   * This operation is throttled if called too frequently. Do not exceed 10 calls per second. If you are throttled, retry later.
   * 
   * @param request - DeleteIndexRequest
   * @returns DeleteIndexResponse
   */
  async deleteIndex(WorkspaceId: string, request: $_model.DeleteIndexRequest): Promise<$_model.DeleteIndexResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteIndexWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * Permanently deletes files from a specified knowledge base.
   * 
   * @remarks
   * - This operation does not support deleting data from data query or image Q&A knowledge bases. Use the Model Studio console instead.
   * - Resource Access Management (RAM) users must first obtain [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Model Studio (requiring `AliyunBailianDataFullAccess`, which includes the sfm:DeleteIndexDocument permission), before calling this operation. Alibaba Cloud accounts can call this operation directly without authorization. Use the latest <props="china">[Model Studio SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)<props="intl">[Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29) to call this operation.
   * - Before calling this operation, make sure that your knowledge base has been created and has not been deleted (that is, the knowledge base ID `IndexId` is valid).
   * - You can only delete files whose status is import failed (INSERT_ERROR) or import succeeded (FINISH) in the knowledge base. To query the file status in a specified knowledge base, call the **ListIndexDocuments** operation.
   * - Deletion is irreversible. The content of deleted files cannot be recovered, and the **Retrieve** operation can no longer retrieve related information. Proceed with caution.
   * - Calling this operation does not delete documents that have been imported into <props="china">[Application Data](https://bailian.console.aliyun.com/?tab=app#/data-center)<props="intl">[Application Data](https://modelstudio.console.alibabacloud.com/?tab=app#/data-center).
   * - This operation is idempotent.
   * **Throttling:**
   * This operation is throttled if called too frequently. Do not exceed 10 calls per second. If you are throttled, retry later.
   * 
   * @param tmpReq - DeleteIndexDocumentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIndexDocumentResponse
   */
  async deleteIndexDocumentWithOptions(WorkspaceId: string, tmpReq: $_model.DeleteIndexDocumentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteIndexDocumentResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteIndexDocumentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.documentIds)) {
      request.documentIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.documentIds, "DocumentIds", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.documentIdsShrink)) {
      query["DocumentIds"] = request.documentIdsShrink;
    }

    if (!$dara.isNull(request.indexId)) {
      query["IndexId"] = request.indexId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteIndexDocument",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/index/delete_index_document`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteIndexDocumentResponse>(await this.callApi(params, req, runtime), new $_model.DeleteIndexDocumentResponse({}));
  }

  /**
   * Permanently deletes files from a specified knowledge base.
   * 
   * @remarks
   * - This operation does not support deleting data from data query or image Q&A knowledge bases. Use the Model Studio console instead.
   * - Resource Access Management (RAM) users must first obtain [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Model Studio (requiring `AliyunBailianDataFullAccess`, which includes the sfm:DeleteIndexDocument permission), before calling this operation. Alibaba Cloud accounts can call this operation directly without authorization. Use the latest <props="china">[Model Studio SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)<props="intl">[Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29) to call this operation.
   * - Before calling this operation, make sure that your knowledge base has been created and has not been deleted (that is, the knowledge base ID `IndexId` is valid).
   * - You can only delete files whose status is import failed (INSERT_ERROR) or import succeeded (FINISH) in the knowledge base. To query the file status in a specified knowledge base, call the **ListIndexDocuments** operation.
   * - Deletion is irreversible. The content of deleted files cannot be recovered, and the **Retrieve** operation can no longer retrieve related information. Proceed with caution.
   * - Calling this operation does not delete documents that have been imported into <props="china">[Application Data](https://bailian.console.aliyun.com/?tab=app#/data-center)<props="intl">[Application Data](https://modelstudio.console.alibabacloud.com/?tab=app#/data-center).
   * - This operation is idempotent.
   * **Throttling:**
   * This operation is throttled if called too frequently. Do not exceed 10 calls per second. If you are throttled, retry later.
   * 
   * @param request - DeleteIndexDocumentRequest
   * @returns DeleteIndexDocumentResponse
   */
  async deleteIndexDocument(WorkspaceId: string, request: $_model.DeleteIndexDocumentRequest): Promise<$_model.DeleteIndexDocumentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteIndexDocumentWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * Permanently deletes a specified long-term memory.
   * 
   * @remarks
   * - Before calling this operation, make sure that your long-term memory has been created and has not been deleted (that is, the memoryId is valid).
   * - The delete operation is irreversible. The deleted long-term memory, including all of its long-term memory nodes, cannot be recovered. The [GetMemory](https://www.alibabacloud.com/help/en/model-studio/developer-reference/api-bailian-2023-12-29-getmemory) operation will no longer be able to retrieve its information. Proceed with caution.
   * - This operation is idempotent.
   * **Rate limit:** Make sure that the interval between two requests is at least 1 second. Otherwise, throttling may be triggered. If throttling occurs, retry later.
   * 
   * @param request - DeleteMemoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMemoryResponse
   */
  async deleteMemoryWithOptions(workspaceId: string, memoryId: string, request: $_model.DeleteMemoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMemoryResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMemory",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/memories/${$dara.URL.percentEncode(memoryId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMemoryResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMemoryResponse({}));
  }

  /**
   * Permanently deletes a specified long-term memory.
   * 
   * @remarks
   * - Before calling this operation, make sure that your long-term memory has been created and has not been deleted (that is, the memoryId is valid).
   * - The delete operation is irreversible. The deleted long-term memory, including all of its long-term memory nodes, cannot be recovered. The [GetMemory](https://www.alibabacloud.com/help/en/model-studio/developer-reference/api-bailian-2023-12-29-getmemory) operation will no longer be able to retrieve its information. Proceed with caution.
   * - This operation is idempotent.
   * **Rate limit:** Make sure that the interval between two requests is at least 1 second. Otherwise, throttling may be triggered. If throttling occurs, retry later.
   * 
   * @param request - DeleteMemoryRequest
   * @returns DeleteMemoryResponse
   */
  async deleteMemory(workspaceId: string, memoryId: string, request: $_model.DeleteMemoryRequest): Promise<$_model.DeleteMemoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteMemoryWithOptions(workspaceId, memoryId, request, headers, runtime);
  }

  /**
   * Deletes a memory fragment.
   * 
   * @param request - DeleteMemoryNodeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMemoryNodeResponse
   */
  async deleteMemoryNodeWithOptions(workspaceId: string, memoryId: string, memoryNodeId: string, request: $_model.DeleteMemoryNodeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMemoryNodeResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMemoryNode",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/memories/${$dara.URL.percentEncode(memoryId)}/memoryNodes/${$dara.URL.percentEncode(memoryNodeId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMemoryNodeResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMemoryNodeResponse({}));
  }

  /**
   * Deletes a memory fragment.
   * 
   * @param request - DeleteMemoryNodeRequest
   * @returns DeleteMemoryNodeResponse
   */
  async deleteMemoryNode(workspaceId: string, memoryId: string, memoryNodeId: string, request: $_model.DeleteMemoryNodeRequest): Promise<$_model.DeleteMemoryNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteMemoryNodeWithOptions(workspaceId, memoryId, memoryNodeId, request, headers, runtime);
  }

  /**
   * Deletes a prompt template based on the template ID.
   * 
   * @param request - DeletePromptTemplateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePromptTemplateResponse
   */
  async deletePromptTemplateWithOptions(workspaceId: string, promptTemplateId: string, request: $_model.DeletePromptTemplateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePromptTemplateResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePromptTemplate",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/promptTemplates/${$dara.URL.percentEncode(promptTemplateId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePromptTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DeletePromptTemplateResponse({}));
  }

  /**
   * Deletes a prompt template based on the template ID.
   * 
   * @param request - DeletePromptTemplateRequest
   * @returns DeletePromptTemplateResponse
   */
  async deletePromptTemplate(workspaceId: string, promptTemplateId: string, request: $_model.DeletePromptTemplateRequest): Promise<$_model.DeletePromptTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deletePromptTemplateWithOptions(workspaceId, promptTemplateId, request, headers, runtime);
  }

  /**
   * Queries the basic information about a file in application data, including the file name, type, and status.
   * 
   * @remarks
   * - A Resource Access Management (RAM) user must first obtain [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Model Studio (`AliyunBailianDataFullAccess` or `AliyunBailianDataReadOnlyAccess`, both of which include the sfm:DescribeFile permission) and [join a workspace](https://help.aliyun.com/document_detail/2851098.html) before invoking this operation. An Alibaba Cloud account can invoke this operation directly without authorization. Invoke this operation by using the latest <props="china">[Model Studio SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)<props="intl">[Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29).
   * - This operation is idempotent.
   * **Rate limit:**
   * This operation is throttled if called too frequently. Do not exceed 10 calls per second. If you are throttled, retry later.
   * 
   * @param request - DescribeFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFileResponse
   */
  async describeFileWithOptions(WorkspaceId: string, FileId: string, request: $_model.DescribeFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFileResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFile",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/datacenter/file/${$dara.URL.percentEncode(FileId)}/`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeFileResponse>(await this.callApi(params, req, runtime), new $_model.DescribeFileResponse({}));
  }

  /**
   * Queries the basic information about a file in application data, including the file name, type, and status.
   * 
   * @remarks
   * - A Resource Access Management (RAM) user must first obtain [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Model Studio (`AliyunBailianDataFullAccess` or `AliyunBailianDataReadOnlyAccess`, both of which include the sfm:DescribeFile permission) and [join a workspace](https://help.aliyun.com/document_detail/2851098.html) before invoking this operation. An Alibaba Cloud account can invoke this operation directly without authorization. Invoke this operation by using the latest <props="china">[Model Studio SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)<props="intl">[Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29).
   * - This operation is idempotent.
   * **Rate limit:**
   * This operation is throttled if called too frequently. Do not exceed 10 calls per second. If you are throttled, retry later.
   * 
   * @param request - DescribeFileRequest
   * @returns DescribeFileResponse
   */
  async describeFile(WorkspaceId: string, FileId: string, request: $_model.DescribeFileRequest): Promise<$_model.DescribeFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeFileWithOptions(WorkspaceId, FileId, request, headers, runtime);
  }

  /**
   * Queries the tipping status of the Alipay wallet bound to an application.
   * 
   * @param request - GetAlipayTransferStatusRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAlipayTransferStatusResponse
   */
  async getAlipayTransferStatusWithOptions(request: $_model.GetAlipayTransferStatusRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAlipayTransferStatusResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.code)) {
      query["code"] = request.code;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["workspace_id"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAlipayTransferStatus",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/openapi/alipay/transfer/status`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAlipayTransferStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetAlipayTransferStatusResponse({}));
  }

  /**
   * Queries the tipping status of the Alipay wallet bound to an application.
   * 
   * @param request - GetAlipayTransferStatusRequest
   * @returns GetAlipayTransferStatusResponse
   */
  async getAlipayTransferStatus(request: $_model.GetAlipayTransferStatusRequest): Promise<$_model.GetAlipayTransferStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAlipayTransferStatusWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves the Alipay tipping URL for an application.
   * 
   * @param request - GetAlipayUrlRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAlipayUrlResponse
   */
  async getAlipayUrlWithOptions(request: $_model.GetAlipayUrlRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAlipayUrlResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["app_id"] = request.appId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["workspace_id"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAlipayUrl",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/openapi/alipay/transfer/url`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAlipayUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetAlipayUrlResponse({}));
  }

  /**
   * Retrieves the Alipay tipping URL for an application.
   * 
   * @param request - GetAlipayUrlRequest
   * @returns GetAlipayUrlResponse
   */
  async getAlipayUrl(request: $_model.GetAlipayUrlRequest): Promise<$_model.GetAlipayUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAlipayUrlWithOptions(request, headers, runtime);
  }

  /**
   * Lists all supported parser types based on the input file type (file extension).
   * 
   * @remarks
   * - RAM用户（子账号）需要首先获取阿里云百炼的[API权限](https://help.aliyun.com/document_detail/2848578.html)（`AliyunBailianDataFullAccess`或`AliyunBailianDataReadOnlyAccess`均可，已包括sfm:GetAvailableParserTypes权限点），并[加入一个业务空间](https://help.aliyun.com/document_detail/2851098.html)后，方可调用本接口。阿里云账号（主账号）可直接调用无须授权。建议您通过最新版<props="china">[阿里云百炼SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)<props="intl">[阿里云百炼SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29)来调用本接口。
   * - 本接口具有幂等性。
   * **限流说明：**
   * 本接口频繁调用会被限流，频率请勿超过10次/秒。如遇限流，请稍后重试。
   * 
   * @param request - GetAvailableParserTypesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAvailableParserTypesResponse
   */
  async getAvailableParserTypesWithOptions(WorkspaceId: string, request: $_model.GetAvailableParserTypesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAvailableParserTypesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileType)) {
      query["FileType"] = request.fileType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAvailableParserTypes",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/datacenter/parser/parsertype`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAvailableParserTypesResponse>(await this.callApi(params, req, runtime), new $_model.GetAvailableParserTypesResponse({}));
  }

  /**
   * Lists all supported parser types based on the input file type (file extension).
   * 
   * @remarks
   * - RAM用户（子账号）需要首先获取阿里云百炼的[API权限](https://help.aliyun.com/document_detail/2848578.html)（`AliyunBailianDataFullAccess`或`AliyunBailianDataReadOnlyAccess`均可，已包括sfm:GetAvailableParserTypes权限点），并[加入一个业务空间](https://help.aliyun.com/document_detail/2851098.html)后，方可调用本接口。阿里云账号（主账号）可直接调用无须授权。建议您通过最新版<props="china">[阿里云百炼SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)<props="intl">[阿里云百炼SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29)来调用本接口。
   * - 本接口具有幂等性。
   * **限流说明：**
   * 本接口频繁调用会被限流，频率请勿超过10次/秒。如遇限流，请稍后重试。
   * 
   * @param request - GetAvailableParserTypesRequest
   * @returns GetAvailableParserTypesResponse
   */
  async getAvailableParserTypes(WorkspaceId: string, request: $_model.GetAvailableParserTypesRequest): Promise<$_model.GetAvailableParserTypesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAvailableParserTypesWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * Retrieves details about a connector. This operation currently supports only file connectors.
   * 
   * @remarks
   * - To call this operation, a RAM user (sub-account) must have the required [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Alibaba Cloud Model Studio and must [join a business space](https://help.aliyun.com/document_detail/2851098.html). This requires the `AliyunBailianDataFullAccess` policy, which includes the sfm:GetConnector permission. An Alibaba Cloud account (primary account) can call this operation directly. We recommend using the latest [Alibaba Cloud Model Studio SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)[Alibaba Cloud Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29) to call this operation.
   * - This operation is idempotent.
   * **Throttling:**
   * This operation is subject to throttling. Do not exceed a frequency of 5 calls per second. If a request is throttled, try again later.
   * 
   * @param request - GetConnectorRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConnectorResponse
   */
  async getConnectorWithOptions(WorkspaceId: string, request: $_model.GetConnectorRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetConnectorResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.connectorId)) {
      query["ConnectorId"] = request.connectorId;
    }

    if (!$dara.isNull(request.connectorName)) {
      query["ConnectorName"] = request.connectorName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetConnector",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/datacenter/connector`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetConnectorResponse>(await this.callApi(params, req, runtime), new $_model.GetConnectorResponse({}));
  }

  /**
   * Retrieves details about a connector. This operation currently supports only file connectors.
   * 
   * @remarks
   * - To call this operation, a RAM user (sub-account) must have the required [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Alibaba Cloud Model Studio and must [join a business space](https://help.aliyun.com/document_detail/2851098.html). This requires the `AliyunBailianDataFullAccess` policy, which includes the sfm:GetConnector permission. An Alibaba Cloud account (primary account) can call this operation directly. We recommend using the latest [Alibaba Cloud Model Studio SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)[Alibaba Cloud Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29) to call this operation.
   * - This operation is idempotent.
   * **Throttling:**
   * This operation is subject to throttling. Do not exceed a frequency of 5 calls per second. If a request is throttled, try again later.
   * 
   * @param request - GetConnectorRequest
   * @returns GetConnectorResponse
   */
  async getConnector(WorkspaceId: string, request: $_model.GetConnectorRequest): Promise<$_model.GetConnectorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getConnectorWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * Queries the current status of a specified knowledge base creation job or knowledge base document append job.
   * 
   * @remarks
   * - Resource Access Management (RAM) users must first obtain [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Alibaba Cloud Model Studio (`AliyunBailianDataFullAccess` or `AliyunBailianDataReadOnlyAccess`, both of which include the sfm:GetIndexJobStatus permission), and [join a workspace](https://help.aliyun.com/document_detail/2851098.html) before invoking this operation. Alibaba Cloud accounts can invoke this operation directly without authorization. Use the latest <props="china">[Alibaba Cloud Model Studio SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)<props="intl">[Alibaba Cloud Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29) to invoke this operation.
   * - You must have a knowledge base job task in progress. To create a knowledge base creation task, invoke the **SubmitIndexJob** operation. To create a knowledge base document append task, invoke the **SubmitIndexAddDocumentsJob** operation. Obtain the corresponding `JobId` from the response.
   * - Invoke this operation at intervals of 5 seconds or more.
   * - This operation is idempotent.
   * 
   * @param request - GetIndexJobStatusRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIndexJobStatusResponse
   */
  async getIndexJobStatusWithOptions(WorkspaceId: string, request: $_model.GetIndexJobStatusRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetIndexJobStatusResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.indexId)) {
      query["IndexId"] = request.indexId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIndexJobStatus",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/index/job/status`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetIndexJobStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetIndexJobStatusResponse({}));
  }

  /**
   * Queries the current status of a specified knowledge base creation job or knowledge base document append job.
   * 
   * @remarks
   * - Resource Access Management (RAM) users must first obtain [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Alibaba Cloud Model Studio (`AliyunBailianDataFullAccess` or `AliyunBailianDataReadOnlyAccess`, both of which include the sfm:GetIndexJobStatus permission), and [join a workspace](https://help.aliyun.com/document_detail/2851098.html) before invoking this operation. Alibaba Cloud accounts can invoke this operation directly without authorization. Use the latest <props="china">[Alibaba Cloud Model Studio SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)<props="intl">[Alibaba Cloud Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29) to invoke this operation.
   * - You must have a knowledge base job task in progress. To create a knowledge base creation task, invoke the **SubmitIndexJob** operation. To create a knowledge base document append task, invoke the **SubmitIndexAddDocumentsJob** operation. Obtain the corresponding `JobId` from the response.
   * - Invoke this operation at intervals of 5 seconds or more.
   * - This operation is idempotent.
   * 
   * @param request - GetIndexJobStatusRequest
   * @returns GetIndexJobStatusResponse
   */
  async getIndexJobStatus(WorkspaceId: string, request: $_model.GetIndexJobStatusRequest): Promise<$_model.GetIndexJobStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIndexJobStatusWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * You can call the GetIndexMonitor operation to query monitoring data for a specified knowledge base within a specific time range. This data is crucial for App Performance Analytics, capacity planning, and cost management. The monitoring data includes two main dimensions: storage and retrieval. Storage monitoring retrieves the index storage limit and current usage of the knowledge base. Retrieval monitoring retrieves performance metrics for the query period, such as peak queries per second (QPS), total requests, and average QPS. The metrics are provided as totals and are also broken down by time window. The requests are categorized as successful, failed, and rate-limited.
   * 
   * @remarks
   * <props="intl">
   * This operation is not available on the Alibaba Cloud International Website (www\\.alibabacloud.com).
   * <props="china">
   * - Before you call this operation, a RAM user must obtain the required [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Alibaba Cloud Model Studio (which requires the `AliyunBailianDataFullAccess` permission) and [join a workspace](https://help.aliyun.com/document_detail/2851098.html). Alibaba Cloud accounts can call this operation directly without authorization. You can call this operation using the latest version of the [Alibaba Cloud Model Studio software development kit (SDK)](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29). Before you call this operation, make sure that the specified knowledge base has been created and has not been deleted. This means that the knowledge base ID (`IndexId`) must be valid. This operation is idempotent. The maximum query time range (EndTimestamp - StartTimestamp) is 30 days. The granularity of the time window in the returned data is dynamically adjusted based on the query time range.
   * 
   * @param request - GetIndexMonitorRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIndexMonitorResponse
   */
  async getIndexMonitorWithOptions(WorkspaceId: string, request: $_model.GetIndexMonitorRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetIndexMonitorResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!$dara.isNull(request.indexId)) {
      query["IndexId"] = request.indexId;
    }

    if (!$dara.isNull(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIndexMonitor",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/rag/index/monitor`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetIndexMonitorResponse>(await this.callApi(params, req, runtime), new $_model.GetIndexMonitorResponse({}));
  }

  /**
   * You can call the GetIndexMonitor operation to query monitoring data for a specified knowledge base within a specific time range. This data is crucial for App Performance Analytics, capacity planning, and cost management. The monitoring data includes two main dimensions: storage and retrieval. Storage monitoring retrieves the index storage limit and current usage of the knowledge base. Retrieval monitoring retrieves performance metrics for the query period, such as peak queries per second (QPS), total requests, and average QPS. The metrics are provided as totals and are also broken down by time window. The requests are categorized as successful, failed, and rate-limited.
   * 
   * @remarks
   * <props="intl">
   * This operation is not available on the Alibaba Cloud International Website (www\\.alibabacloud.com).
   * <props="china">
   * - Before you call this operation, a RAM user must obtain the required [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Alibaba Cloud Model Studio (which requires the `AliyunBailianDataFullAccess` permission) and [join a workspace](https://help.aliyun.com/document_detail/2851098.html). Alibaba Cloud accounts can call this operation directly without authorization. You can call this operation using the latest version of the [Alibaba Cloud Model Studio software development kit (SDK)](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29). Before you call this operation, make sure that the specified knowledge base has been created and has not been deleted. This means that the knowledge base ID (`IndexId`) must be valid. This operation is idempotent. The maximum query time range (EndTimestamp - StartTimestamp) is 30 days. The granularity of the time window in the returned data is dynamically adjusted based on the query time range.
   * 
   * @param request - GetIndexMonitorRequest
   * @returns GetIndexMonitorResponse
   */
  async getIndexMonitor(WorkspaceId: string, request: $_model.GetIndexMonitorRequest): Promise<$_model.GetIndexMonitorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIndexMonitorWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * Retrieves the description of a specified long-term memory.
   * 
   * @remarks
   * - This operation is idempotent.
   * **Rate limit:** Ensure that the interval between two consecutive requests is at least 1 second. Otherwise, throttling may be triggered. If throttling occurs, retry later.
   * 
   * @param request - GetMemoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMemoryResponse
   */
  async getMemoryWithOptions(workspaceId: string, memoryId: string, request: $_model.GetMemoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetMemoryResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMemory",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/memories/${$dara.URL.percentEncode(memoryId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMemoryResponse>(await this.callApi(params, req, runtime), new $_model.GetMemoryResponse({}));
  }

  /**
   * Retrieves the description of a specified long-term memory.
   * 
   * @remarks
   * - This operation is idempotent.
   * **Rate limit:** Ensure that the interval between two consecutive requests is at least 1 second. Otherwise, throttling may be triggered. If throttling occurs, retry later.
   * 
   * @param request - GetMemoryRequest
   * @returns GetMemoryResponse
   */
  async getMemory(workspaceId: string, memoryId: string, request: $_model.GetMemoryRequest): Promise<$_model.GetMemoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMemoryWithOptions(workspaceId, memoryId, request, headers, runtime);
  }

  /**
   * Retrieves a memory fragment.
   * 
   * @param request - GetMemoryNodeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMemoryNodeResponse
   */
  async getMemoryNodeWithOptions(workspaceId: string, memoryId: string, memoryNodeId: string, request: $_model.GetMemoryNodeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetMemoryNodeResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMemoryNode",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/memories/${$dara.URL.percentEncode(memoryId)}/memoryNodes/${$dara.URL.percentEncode(memoryNodeId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMemoryNodeResponse>(await this.callApi(params, req, runtime), new $_model.GetMemoryNodeResponse({}));
  }

  /**
   * Retrieves a memory fragment.
   * 
   * @param request - GetMemoryNodeRequest
   * @returns GetMemoryNodeResponse
   */
  async getMemoryNode(workspaceId: string, memoryId: string, memoryNodeId: string, request: $_model.GetMemoryNodeRequest): Promise<$_model.GetMemoryNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMemoryNodeWithOptions(workspaceId, memoryId, memoryNodeId, request, headers, runtime);
  }

  /**
   * Queries the data parsing settings in a specified category.
   * 
   * @remarks
   * - RAM用户（子账号）需要首先获取阿里云百炼的[API权限](https://help.aliyun.com/document_detail/2848578.html)（`AliyunBailianDataFullAccess`或`AliyunBailianDataReadOnlyAccess`均可，已包括sfm:GetParseSettings权限点），并[加入一个业务空间](https://help.aliyun.com/document_detail/2851098.html)后，方可调用本接口。阿里云账号（主账号）可直接调用无须授权。建议您通过最新版<props="china">[阿里云百炼SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)<props="intl">[阿里云百炼SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29)来调用本接口。
   * - 本接口具有幂等性。
   * **限流说明：**
   * 本接口频繁调用会被限流，频率请勿超过10次/秒。如遇限流，请稍后重试。
   * 
   * @param request - GetParseSettingsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetParseSettingsResponse
   */
  async getParseSettingsWithOptions(WorkspaceId: string, request: $_model.GetParseSettingsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetParseSettingsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetParseSettings",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/datacenter/parser/settings`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetParseSettingsResponse>(await this.callApi(params, req, runtime), new $_model.GetParseSettingsResponse({}));
  }

  /**
   * Queries the data parsing settings in a specified category.
   * 
   * @remarks
   * - RAM用户（子账号）需要首先获取阿里云百炼的[API权限](https://help.aliyun.com/document_detail/2848578.html)（`AliyunBailianDataFullAccess`或`AliyunBailianDataReadOnlyAccess`均可，已包括sfm:GetParseSettings权限点），并[加入一个业务空间](https://help.aliyun.com/document_detail/2851098.html)后，方可调用本接口。阿里云账号（主账号）可直接调用无须授权。建议您通过最新版<props="china">[阿里云百炼SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)<props="intl">[阿里云百炼SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29)来调用本接口。
   * - 本接口具有幂等性。
   * **限流说明：**
   * 本接口频繁调用会被限流，频率请勿超过10次/秒。如遇限流，请稍后重试。
   * 
   * @param request - GetParseSettingsRequest
   * @returns GetParseSettingsResponse
   */
  async getParseSettings(WorkspaceId: string, request: $_model.GetParseSettingsRequest): Promise<$_model.GetParseSettingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getParseSettingsWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * Obtains a prompt template based on the template ID.
   * 
   * @param request - GetPromptTemplateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPromptTemplateResponse
   */
  async getPromptTemplateWithOptions(workspaceId: string, promptTemplateId: string, request: $_model.GetPromptTemplateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetPromptTemplateResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPromptTemplate",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/promptTemplates/${$dara.URL.percentEncode(promptTemplateId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPromptTemplateResponse>(await this.callApi(params, req, runtime), new $_model.GetPromptTemplateResponse({}));
  }

  /**
   * Obtains a prompt template based on the template ID.
   * 
   * @param request - GetPromptTemplateRequest
   * @returns GetPromptTemplateResponse
   */
  async getPromptTemplate(workspaceId: string, promptTemplateId: string, request: $_model.GetPromptTemplateRequest): Promise<$_model.GetPromptTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPromptTemplateWithOptions(workspaceId, promptTemplateId, request, headers, runtime);
  }

  /**
   * 获取发布态智能体应用
   * 
   * @param request - GetPublishedAgentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPublishedAgentResponse
   */
  async getPublishedAgentWithOptions(workspaceId: string, appCode: string, request: $_model.GetPublishedAgentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetPublishedAgentResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPublishedAgent",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/application/agents/${$dara.URL.percentEncode(appCode)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPublishedAgentResponse>(await this.callApi(params, req, runtime), new $_model.GetPublishedAgentResponse({}));
  }

  /**
   * 获取发布态智能体应用
   * 
   * @param request - GetPublishedAgentRequest
   * @returns GetPublishedAgentResponse
   */
  async getPublishedAgent(workspaceId: string, appCode: string, request: $_model.GetPublishedAgentRequest): Promise<$_model.GetPublishedAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPublishedAgentWithOptions(workspaceId, appCode, request, headers, runtime);
  }

  /**
   * 高代码部署服务
   * 
   * @param request - HighCodeDeployRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HighCodeDeployResponse
   */
  async highCodeDeployWithOptions(workspaceId: string, request: $_model.HighCodeDeployRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.HighCodeDeployResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentDesc)) {
      body["agentDesc"] = request.agentDesc;
    }

    if (!$dara.isNull(request.agentId)) {
      body["agentId"] = request.agentId;
    }

    if (!$dara.isNull(request.agentName)) {
      body["agentName"] = request.agentName;
    }

    if (!$dara.isNull(request.sourceCodeName)) {
      body["sourceCodeName"] = request.sourceCodeName;
    }

    if (!$dara.isNull(request.sourceCodeOssUrl)) {
      body["sourceCodeOssUrl"] = request.sourceCodeOssUrl;
    }

    if (!$dara.isNull(request.telemetryEnabled)) {
      body["telemetryEnabled"] = request.telemetryEnabled;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "HighCodeDeploy",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/openapi/${$dara.URL.percentEncode(workspaceId)}/highCode/publish`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.HighCodeDeployResponse>(await this.callApi(params, req, runtime), new $_model.HighCodeDeployResponse({}));
  }

  /**
   * 高代码部署服务
   * 
   * @param request - HighCodeDeployRequest
   * @returns HighCodeDeployResponse
   */
  async highCodeDeploy(workspaceId: string, request: $_model.HighCodeDeployRequest): Promise<$_model.HighCodeDeployResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.highCodeDeployWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Retrieves the details of one or more categories in a specified workspace.
   * 
   * @remarks
   * - This API does not support querying data tables.
   * - To call this API, a RAM user must first obtain the required [API permission](https://help.aliyun.com/document_detail/2848578.html) for Model Studio and [join a workspace](https://help.aliyun.com/document_detail/2851098.html). This requires the `AliyunBailianDataFullAccess` permission, which includes the `sfm:ListCategory` permission. Alibaba Cloud accounts can call this API directly. Use the latest version of the <props="china">[Model Studio SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)<props="intl">[Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29).
   * - This operation supports pagination. When making your first request, set the `MaxResults` parameter to specify the maximum number of items to return. If more items are available, the response includes a `NextToken`. To retrieve the next page of results, set the `NextToken` parameter to the value from the previous response and specify `MaxResults` again. An empty `NextToken` indicates that no more results are available.
   * - This operation is idempotent.
   * **Rate limiting:** This API is subject to rate limiting. Do not exceed 5 requests per second. If the system throttles a request, retry it after a short interval.
   * 
   * @param request - ListCategoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCategoryResponse
   */
  async listCategoryWithOptions(WorkspaceId: string, request: $_model.ListCategoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListCategoryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryName)) {
      body["CategoryName"] = request.categoryName;
    }

    if (!$dara.isNull(request.categoryType)) {
      body["CategoryType"] = request.categoryType;
    }

    if (!$dara.isNull(request.connectorId)) {
      body["ConnectorId"] = request.connectorId;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.parentCategoryId)) {
      body["ParentCategoryId"] = request.parentCategoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCategory",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/datacenter/categories`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCategoryResponse>(await this.callApi(params, req, runtime), new $_model.ListCategoryResponse({}));
  }

  /**
   * Retrieves the details of one or more categories in a specified workspace.
   * 
   * @remarks
   * - This API does not support querying data tables.
   * - To call this API, a RAM user must first obtain the required [API permission](https://help.aliyun.com/document_detail/2848578.html) for Model Studio and [join a workspace](https://help.aliyun.com/document_detail/2851098.html). This requires the `AliyunBailianDataFullAccess` permission, which includes the `sfm:ListCategory` permission. Alibaba Cloud accounts can call this API directly. Use the latest version of the <props="china">[Model Studio SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)<props="intl">[Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29).
   * - This operation supports pagination. When making your first request, set the `MaxResults` parameter to specify the maximum number of items to return. If more items are available, the response includes a `NextToken`. To retrieve the next page of results, set the `NextToken` parameter to the value from the previous response and specify `MaxResults` again. An empty `NextToken` indicates that no more results are available.
   * - This operation is idempotent.
   * **Rate limiting:** This API is subject to rate limiting. Do not exceed 5 requests per second. If the system throttles a request, retry it after a short interval.
   * 
   * @param request - ListCategoryRequest
   * @returns ListCategoryResponse
   */
  async listCategory(WorkspaceId: string, request: $_model.ListCategoryRequest): Promise<$_model.ListCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listCategoryWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * Queries the list and information of text chunks.
   * 
   * @remarks
   * - For document search<props="china"> or audio/video search knowledge bases, this operation queries all chunks of a specified file. For data query or image Q&A knowledge bases, this operation retrieves information about all text chunks.
   * - Resource Access Management (RAM) users must first obtain [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Model Studio (requires `AliyunBailianDataFullAccess`, which includes the sfm:ChunkList permission), and [join a workspace](https://help.aliyun.com/document_detail/2851098.html) before invoking this operation. Alibaba Cloud accounts can invoke this operation directly without authorization. Use the latest <props="china">[Model Studio SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)<props="intl">[Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29) to invoke this operation.
   * - Before invoking this operation, make sure that your knowledge base has been created and has not been deleted (that is, the knowledge base ID `IndexId` is valid).
   * - This operation has idempotence.
   * **Rate limit:**
   * This operation is throttled if called too frequently. Do not exceed 10 calls per second. If you are throttled, retry later.
   * 
   * @param request - ListChunksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListChunksResponse
   */
  async listChunksWithOptions(WorkspaceId: string, request: $_model.ListChunksRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListChunksResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fields)) {
      body["Fields"] = request.fields;
    }

    if (!$dara.isNull(request.fileId)) {
      body["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.filed)) {
      body["Filed"] = request.filed;
    }

    if (!$dara.isNull(request.indexId)) {
      body["IndexId"] = request.indexId;
    }

    if (!$dara.isNull(request.pageNum)) {
      body["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListChunks",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/index/list_chunks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListChunksResponse>(await this.callApi(params, req, runtime), new $_model.ListChunksResponse({}));
  }

  /**
   * Queries the list and information of text chunks.
   * 
   * @remarks
   * - For document search<props="china"> or audio/video search knowledge bases, this operation queries all chunks of a specified file. For data query or image Q&A knowledge bases, this operation retrieves information about all text chunks.
   * - Resource Access Management (RAM) users must first obtain [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Model Studio (requires `AliyunBailianDataFullAccess`, which includes the sfm:ChunkList permission), and [join a workspace](https://help.aliyun.com/document_detail/2851098.html) before invoking this operation. Alibaba Cloud accounts can invoke this operation directly without authorization. Use the latest <props="china">[Model Studio SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)<props="intl">[Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29) to invoke this operation.
   * - Before invoking this operation, make sure that your knowledge base has been created and has not been deleted (that is, the knowledge base ID `IndexId` is valid).
   * - This operation has idempotence.
   * **Rate limit:**
   * This operation is throttled if called too frequently. Do not exceed 10 calls per second. If you are throttled, retry later.
   * 
   * @param request - ListChunksRequest
   * @returns ListChunksResponse
   */
  async listChunks(WorkspaceId: string, request: $_model.ListChunksRequest): Promise<$_model.ListChunksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listChunksWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * Retrieves the details of one or more documents in a specified category.
   * 
   * @remarks
   * - Resource Access Management (RAM) users must first obtain [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Alibaba Cloud Model Studio (requires `AliyunBailianDataFullAccess`, which includes the sfm:ListFile permission), and [join a workspace](https://help.aliyun.com/document_detail/2851098.html) before invoking this operation. Alibaba Cloud accounts can invoke this operation directly without authorization. Invoke this operation by using the latest <props="china">[Alibaba Cloud Model Studio SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)<props="intl">[Alibaba Cloud Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29).
   * - When performing paging for the first page, only set `MaxResults` to limit the number of entries returned. The `NextToken` in the response serves as the credential for querying subsequent pages. When querying subsequent pages, set the `NextToken` parameter to the `NextToken` value obtained from the previous response as the query credential (if `NextToken` is empty, all results have been returned and no further requests are needed), and set `MaxResults` to limit the number of entries returned.
   * - This operation is idempotent.
   * **Rate limit:**
   * This operation is throttled if called too frequently. Do not exceed 5 calls per second. If throttled, retry later.
   * 
   * @param tmpReq - ListFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFileResponse
   */
  async listFileWithOptions(WorkspaceId: string, tmpReq: $_model.ListFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListFileResponse> {
    tmpReq.validate();
    let request = new $_model.ListFileShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.fileIds)) {
      request.fileIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.fileIds, "FileIds", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.fileIdsShrink)) {
      query["FileIds"] = request.fileIdsShrink;
    }

    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFile",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/datacenter/files`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFileResponse>(await this.callApi(params, req, runtime), new $_model.ListFileResponse({}));
  }

  /**
   * Retrieves the details of one or more documents in a specified category.
   * 
   * @remarks
   * - Resource Access Management (RAM) users must first obtain [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Alibaba Cloud Model Studio (requires `AliyunBailianDataFullAccess`, which includes the sfm:ListFile permission), and [join a workspace](https://help.aliyun.com/document_detail/2851098.html) before invoking this operation. Alibaba Cloud accounts can invoke this operation directly without authorization. Invoke this operation by using the latest <props="china">[Alibaba Cloud Model Studio SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)<props="intl">[Alibaba Cloud Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29).
   * - When performing paging for the first page, only set `MaxResults` to limit the number of entries returned. The `NextToken` in the response serves as the credential for querying subsequent pages. When querying subsequent pages, set the `NextToken` parameter to the `NextToken` value obtained from the previous response as the query credential (if `NextToken` is empty, all results have been returned and no further requests are needed), and set `MaxResults` to limit the number of entries returned.
   * - This operation is idempotent.
   * **Rate limit:**
   * This operation is throttled if called too frequently. Do not exceed 5 calls per second. If throttled, retry later.
   * 
   * @param request - ListFileRequest
   * @returns ListFileResponse
   */
  async listFile(WorkspaceId: string, request: $_model.ListFileRequest): Promise<$_model.ListFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFileWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * Retrieves the files in a specified knowledge base along with their summary information.
   * 
   * @remarks
   * - Resource Access Management (RAM) users must first obtain [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Model Studio (requiring `AliyunBailianDataFullAccess`, which includes the sfm:ListIndexFiles permission) and [join a workspace](https://help.aliyun.com/document_detail/2851098.html) before invoking this operation. Alibaba Cloud accounts can invoke this operation directly without authorization. Use the latest <props="china">[Model Studio SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)<props="intl">[Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29) to invoke this operation.
   * - Before invoking this operation, make sure that your knowledge base has been created and has not been deleted (that is, the knowledge base ID `IndexId` is valid).
   * - This operation has idempotence.
   * **Throttling:**
   * This operation is throttled if called too frequently. Do not exceed 15 calls per second. If you are throttled, retry later.
   * 
   * @param request - ListIndexDocumentsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIndexDocumentsResponse
   */
  async listIndexDocumentsWithOptions(WorkspaceId: string, request: $_model.ListIndexDocumentsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListIndexDocumentsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.documentName)) {
      query["DocumentName"] = request.documentName;
    }

    if (!$dara.isNull(request.documentStatus)) {
      query["DocumentStatus"] = request.documentStatus;
    }

    if (!$dara.isNull(request.enableNameLike)) {
      query["EnableNameLike"] = request.enableNameLike;
    }

    if (!$dara.isNull(request.indexId)) {
      query["IndexId"] = request.indexId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIndexDocuments",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/index/list_index_documents`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIndexDocumentsResponse>(await this.callApi(params, req, runtime), new $_model.ListIndexDocumentsResponse({}));
  }

  /**
   * Retrieves the files in a specified knowledge base along with their summary information.
   * 
   * @remarks
   * - Resource Access Management (RAM) users must first obtain [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Model Studio (requiring `AliyunBailianDataFullAccess`, which includes the sfm:ListIndexFiles permission) and [join a workspace](https://help.aliyun.com/document_detail/2851098.html) before invoking this operation. Alibaba Cloud accounts can invoke this operation directly without authorization. Use the latest <props="china">[Model Studio SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)<props="intl">[Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29) to invoke this operation.
   * - Before invoking this operation, make sure that your knowledge base has been created and has not been deleted (that is, the knowledge base ID `IndexId` is valid).
   * - This operation has idempotence.
   * **Throttling:**
   * This operation is throttled if called too frequently. Do not exceed 15 calls per second. If you are throttled, retry later.
   * 
   * @param request - ListIndexDocumentsRequest
   * @returns ListIndexDocumentsResponse
   */
  async listIndexDocuments(WorkspaceId: string, request: $_model.ListIndexDocumentsRequest): Promise<$_model.ListIndexDocumentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIndexDocumentsWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * Retrieves the details of one or more documents in a specified knowledge base.
   * 
   * @remarks
   * - A RAM user must have the [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Alibaba Cloud Model Studio to call this operation. The `AliyunBailianDataFullAccess` permission, which includes the \\`sfm:ListIndexFiles\\` permission, is required. An Alibaba Cloud account can call this operation without authorization. You can call this operation using the latest version of the <props="china">[Alibaba Cloud Model Studio SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)<props="intl">[Alibaba Cloud Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29).
   * - Before you call this operation, ensure that your knowledge base exists and its ID, `IndexId`, is valid.
   * - This operation is idempotent.
   * 
   * @param request - ListIndexFileDetailsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIndexFileDetailsResponse
   */
  async listIndexFileDetailsWithOptions(WorkspaceId: string, request: $_model.ListIndexFileDetailsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListIndexFileDetailsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.documentName)) {
      query["DocumentName"] = request.documentName;
    }

    if (!$dara.isNull(request.documentStatus)) {
      query["DocumentStatus"] = request.documentStatus;
    }

    if (!$dara.isNull(request.enableNameLike)) {
      query["EnableNameLike"] = request.enableNameLike;
    }

    if (!$dara.isNull(request.indexId)) {
      query["IndexId"] = request.indexId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIndexFileDetails",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/index/list_index_file_detail`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIndexFileDetailsResponse>(await this.callApi(params, req, runtime), new $_model.ListIndexFileDetailsResponse({}));
  }

  /**
   * Retrieves the details of one or more documents in a specified knowledge base.
   * 
   * @remarks
   * - A RAM user must have the [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Alibaba Cloud Model Studio to call this operation. The `AliyunBailianDataFullAccess` permission, which includes the \\`sfm:ListIndexFiles\\` permission, is required. An Alibaba Cloud account can call this operation without authorization. You can call this operation using the latest version of the <props="china">[Alibaba Cloud Model Studio SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)<props="intl">[Alibaba Cloud Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29).
   * - Before you call this operation, ensure that your knowledge base exists and its ID, `IndexId`, is valid.
   * - This operation is idempotent.
   * 
   * @param request - ListIndexFileDetailsRequest
   * @returns ListIndexFileDetailsResponse
   */
  async listIndexFileDetails(WorkspaceId: string, request: $_model.ListIndexFileDetailsRequest): Promise<$_model.ListIndexFileDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIndexFileDetailsWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * Retrieves the list of knowledge bases in a specified workspace.
   * 
   * @remarks
   * - Resource Access Management (RAM) users must first obtain [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Alibaba Cloud Model Studio (requires `AliyunBailianDataFullAccess`, which includes the sfm:ListIndex permission) before calling this operation. Alibaba Cloud accounts can call this operation directly without authorization. Use the latest <props="china">[Alibaba Cloud Model Studio SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)<props="intl">[Alibaba Cloud Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29) to call this operation.
   * - This operation is idempotent.
   * **Rate limit:**
   * This operation is throttled if called too frequently. Do not exceed 10 calls per second. If throttled, retry later.
   * 
   * @param request - ListIndicesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIndicesResponse
   */
  async listIndicesWithOptions(WorkspaceId: string, request: $_model.ListIndicesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListIndicesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.indexName)) {
      query["IndexName"] = request.indexName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIndices",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/index/list_indices`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIndicesResponse>(await this.callApi(params, req, runtime), new $_model.ListIndicesResponse({}));
  }

  /**
   * Retrieves the list of knowledge bases in a specified workspace.
   * 
   * @remarks
   * - Resource Access Management (RAM) users must first obtain [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Alibaba Cloud Model Studio (requires `AliyunBailianDataFullAccess`, which includes the sfm:ListIndex permission) before calling this operation. Alibaba Cloud accounts can call this operation directly without authorization. Use the latest <props="china">[Alibaba Cloud Model Studio SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)<props="intl">[Alibaba Cloud Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29) to call this operation.
   * - This operation is idempotent.
   * **Rate limit:**
   * This operation is throttled if called too frequently. Do not exceed 10 calls per second. If throttled, retry later.
   * 
   * @param request - ListIndicesRequest
   * @returns ListIndicesResponse
   */
  async listIndices(WorkspaceId: string, request: $_model.ListIndicesRequest): Promise<$_model.ListIndicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIndicesWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * Retrieves the details of one or more long-term memory entities in a specified workspace.
   * 
   * @remarks
   * - When querying the first page of a paging query, set only `MaxResults` to limit the number of entries returned. The `NextToken` value in the response serves as the credential for querying subsequent pages. When querying subsequent pages, set the `NextToken` parameter to the `NextToken` value obtained from the previous response as the query credential (if `NextToken` is empty, all results have been returned and no further requests are needed), and settings `MaxResults` to limit the number of entries returned.
   * - This operation supports idempotence.
   * **Rate limit:** Ensure that the interval between two consecutive requests is at least 1 second. Otherwise, throttling may be triggered. If throttling occurs, retry later.
   * 
   * @param request - ListMemoriesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMemoriesResponse
   */
  async listMemoriesWithOptions(workspaceId: string, request: $_model.ListMemoriesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMemoriesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMemories",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/memories`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMemoriesResponse>(await this.callApi(params, req, runtime), new $_model.ListMemoriesResponse({}));
  }

  /**
   * Retrieves the details of one or more long-term memory entities in a specified workspace.
   * 
   * @remarks
   * - When querying the first page of a paging query, set only `MaxResults` to limit the number of entries returned. The `NextToken` value in the response serves as the credential for querying subsequent pages. When querying subsequent pages, set the `NextToken` parameter to the `NextToken` value obtained from the previous response as the query credential (if `NextToken` is empty, all results have been returned and no further requests are needed), and settings `MaxResults` to limit the number of entries returned.
   * - This operation supports idempotence.
   * **Rate limit:** Ensure that the interval between two consecutive requests is at least 1 second. Otherwise, throttling may be triggered. If throttling occurs, retry later.
   * 
   * @param request - ListMemoriesRequest
   * @returns ListMemoriesResponse
   */
  async listMemories(workspaceId: string, request: $_model.ListMemoriesRequest): Promise<$_model.ListMemoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMemoriesWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Retrieves a list of memory nodes.
   * 
   * @param request - ListMemoryNodesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMemoryNodesResponse
   */
  async listMemoryNodesWithOptions(workspaceId: string, memoryId: string, request: $_model.ListMemoryNodesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMemoryNodesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMemoryNodes",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/memories/${$dara.URL.percentEncode(memoryId)}/memoryNodes`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMemoryNodesResponse>(await this.callApi(params, req, runtime), new $_model.ListMemoryNodesResponse({}));
  }

  /**
   * Retrieves a list of memory nodes.
   * 
   * @param request - ListMemoryNodesRequest
   * @returns ListMemoryNodesResponse
   */
  async listMemoryNodes(workspaceId: string, memoryId: string, request: $_model.ListMemoryNodesRequest): Promise<$_model.ListMemoryNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMemoryNodesWithOptions(workspaceId, memoryId, request, headers, runtime);
  }

  /**
   * Obtains a list of prompt templates.
   * 
   * @param request - ListPromptTemplatesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPromptTemplatesResponse
   */
  async listPromptTemplatesWithOptions(workspaceId: string, request: $_model.ListPromptTemplatesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPromptTemplatesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPromptTemplates",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/promptTemplates`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPromptTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.ListPromptTemplatesResponse({}));
  }

  /**
   * Obtains a list of prompt templates.
   * 
   * @param request - ListPromptTemplatesRequest
   * @returns ListPromptTemplatesResponse
   */
  async listPromptTemplates(workspaceId: string, request: $_model.ListPromptTemplatesRequest): Promise<$_model.ListPromptTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPromptTemplatesWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 查询已发布的智能体应用列表
   * 
   * @param request - ListPublishedAgentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPublishedAgentResponse
   */
  async listPublishedAgentWithOptions(workspaceId: string, request: $_model.ListPublishedAgentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPublishedAgentResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNo)) {
      query["pageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPublishedAgent",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/application/agents`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPublishedAgentResponse>(await this.callApi(params, req, runtime), new $_model.ListPublishedAgentResponse({}));
  }

  /**
   * 查询已发布的智能体应用列表
   * 
   * @param request - ListPublishedAgentRequest
   * @returns ListPublishedAgentResponse
   */
  async listPublishedAgent(workspaceId: string, request: $_model.ListPublishedAgentRequest): Promise<$_model.ListPublishedAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPublishedAgentWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Retrieves information from a specified knowledge base.
   * 
   * @remarks
   * <props="china">
   * - **How to call**: To retrieve information from a knowledge base, use the latest [Alibaba Cloud Model Studio SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29) with an [AccessKey](https://help.aliyun.com/document_detail/116401.html) or [Spring AI Alibaba](https://help.aliyun.com/document_detail/2990886.html) with an Alibaba Cloud Model Studio [API key](https://help.aliyun.com/document_detail/2712195.html). Both tools simplify your API calls by handling the complex signature calculation.
   * - **Required permissions**:
   *   - **RAM user (sub-account)**: To call this API, a RAM user must be granted [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Alibaba Cloud Model Studio and [join a workspace](https://help.aliyun.com/document_detail/2851098.html). You can use the `AliyunBailianDataFullAccess` policy, which includes the required `sfm:Retrieve` permission.
   *   - **Alibaba Cloud account (main account)**: This account has the required permissions by default and can call the API directly.
   * - **Response latency**: This API call involves complex retrieval and matching operations, which can cause longer response times. We recommend configuring appropriate request timeouts and retry strategies.
   * - **Idempotency**: This API is idempotent.
   * <props="intl">
   * - **How to call**: We recommend using the latest [Alibaba Cloud Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29) to call this API. The SDK simplifies API calls by handling the complex signature calculation.
   * - **Required permissions**:
   *   - **RAM user (sub-account)**: To call this API, a RAM user must be granted [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Alibaba Cloud Model Studio and [join a workspace](https://help.aliyun.com/document_detail/2851098.html). You can use the `AliyunBailianDataFullAccess` policy, which includes the required `sfm:Retrieve` permission.
   *   - **Alibaba Cloud account (main account)**: This account has the required permissions by default and can call the API directly.
   * - **Response latency**: This API call involves complex retrieval and matching operations, which can cause longer response times. We recommend configuring appropriate request timeouts and retry strategies.
   * - **Idempotency**: This API is idempotent.
   * 
   * @param tmpReq - RetrieveRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RetrieveResponse
   */
  async retrieveWithOptions(WorkspaceId: string, tmpReq: $_model.RetrieveRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RetrieveResponse> {
    tmpReq.validate();
    let request = new $_model.RetrieveShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.extra)) {
      request.extraShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extra, "Extra", "json");
    }

    if (!$dara.isNull(tmpReq.images)) {
      request.imagesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.images, "Images", "simple");
    }

    if (!$dara.isNull(tmpReq.queryHistory)) {
      request.queryHistoryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.queryHistory, "QueryHistory", "json");
    }

    if (!$dara.isNull(tmpReq.rerank)) {
      request.rerankShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.rerank, "Rerank", "json");
    }

    if (!$dara.isNull(tmpReq.rewrite)) {
      request.rewriteShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.rewrite, "Rewrite", "json");
    }

    if (!$dara.isNull(tmpReq.searchFilters)) {
      request.searchFiltersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.searchFilters, "SearchFilters", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.denseSimilarityTopK)) {
      query["DenseSimilarityTopK"] = request.denseSimilarityTopK;
    }

    if (!$dara.isNull(request.enableReranking)) {
      query["EnableReranking"] = request.enableReranking;
    }

    if (!$dara.isNull(request.enableRewrite)) {
      query["EnableRewrite"] = request.enableRewrite;
    }

    if (!$dara.isNull(request.extraShrink)) {
      query["Extra"] = request.extraShrink;
    }

    if (!$dara.isNull(request.imagesShrink)) {
      query["Images"] = request.imagesShrink;
    }

    if (!$dara.isNull(request.indexId)) {
      query["IndexId"] = request.indexId;
    }

    if (!$dara.isNull(request.query)) {
      query["Query"] = request.query;
    }

    if (!$dara.isNull(request.queryHistoryShrink)) {
      query["QueryHistory"] = request.queryHistoryShrink;
    }

    if (!$dara.isNull(request.rerankShrink)) {
      query["Rerank"] = request.rerankShrink;
    }

    if (!$dara.isNull(request.rerankMinScore)) {
      query["RerankMinScore"] = request.rerankMinScore;
    }

    if (!$dara.isNull(request.rerankTopN)) {
      query["RerankTopN"] = request.rerankTopN;
    }

    if (!$dara.isNull(request.rewriteShrink)) {
      query["Rewrite"] = request.rewriteShrink;
    }

    if (!$dara.isNull(request.saveRetrieverHistory)) {
      query["SaveRetrieverHistory"] = request.saveRetrieverHistory;
    }

    if (!$dara.isNull(request.searchFiltersShrink)) {
      query["SearchFilters"] = request.searchFiltersShrink;
    }

    if (!$dara.isNull(request.sparseSimilarityTopK)) {
      query["SparseSimilarityTopK"] = request.sparseSimilarityTopK;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "Retrieve",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/index/retrieve`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RetrieveResponse>(await this.callApi(params, req, runtime), new $_model.RetrieveResponse({}));
  }

  /**
   * Retrieves information from a specified knowledge base.
   * 
   * @remarks
   * <props="china">
   * - **How to call**: To retrieve information from a knowledge base, use the latest [Alibaba Cloud Model Studio SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29) with an [AccessKey](https://help.aliyun.com/document_detail/116401.html) or [Spring AI Alibaba](https://help.aliyun.com/document_detail/2990886.html) with an Alibaba Cloud Model Studio [API key](https://help.aliyun.com/document_detail/2712195.html). Both tools simplify your API calls by handling the complex signature calculation.
   * - **Required permissions**:
   *   - **RAM user (sub-account)**: To call this API, a RAM user must be granted [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Alibaba Cloud Model Studio and [join a workspace](https://help.aliyun.com/document_detail/2851098.html). You can use the `AliyunBailianDataFullAccess` policy, which includes the required `sfm:Retrieve` permission.
   *   - **Alibaba Cloud account (main account)**: This account has the required permissions by default and can call the API directly.
   * - **Response latency**: This API call involves complex retrieval and matching operations, which can cause longer response times. We recommend configuring appropriate request timeouts and retry strategies.
   * - **Idempotency**: This API is idempotent.
   * <props="intl">
   * - **How to call**: We recommend using the latest [Alibaba Cloud Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29) to call this API. The SDK simplifies API calls by handling the complex signature calculation.
   * - **Required permissions**:
   *   - **RAM user (sub-account)**: To call this API, a RAM user must be granted [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Alibaba Cloud Model Studio and [join a workspace](https://help.aliyun.com/document_detail/2851098.html). You can use the `AliyunBailianDataFullAccess` policy, which includes the required `sfm:Retrieve` permission.
   *   - **Alibaba Cloud account (main account)**: This account has the required permissions by default and can call the API directly.
   * - **Response latency**: This API call involves complex retrieval and matching operations, which can cause longer response times. We recommend configuring appropriate request timeouts and retry strategies.
   * - **Idempotency**: This API is idempotent.
   * 
   * @param request - RetrieveRequest
   * @returns RetrieveResponse
   */
  async retrieve(WorkspaceId: string, request: $_model.RetrieveRequest): Promise<$_model.RetrieveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.retrieveWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * Adds parsed files to the specified knowledge base.
   * 
   * @remarks
   * <props="china">
   * - This API does not support knowledge bases for data queries or image Q\\&A. To update these knowledge bases, see the [knowledge base](https://help.aliyun.com/document_detail/2807740.html) documentation.
   * <props="intl">
   * - This API does not support knowledge bases for data queries or image Q\\&A. To update these knowledge bases, see the [knowledge base](https://help.aliyun.com/document_detail/2807740.html) documentation.
   * - A RAM user (sub-account) can call this API only after being granted the required [api permission](https://help.aliyun.com/document_detail/2848578.html) for Alibaba Cloud Model Studio (specifically, the `AliyunBailianDataFullAccess` policy, which includes the `sfm:SubmitIndexAddDocumentsJob` permission) and joining a [workspace](https://help.aliyun.com/document_detail/2851098.html). An Alibaba Cloud account can call this API directly without authorization. We recommend using the latest version of the <props="china">[Alibaba Cloud Model Studio SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)<props="intl">[Alibaba Cloud Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29) to call this API.
   * - Before calling this API, ensure your knowledge base exists and has a valid knowledge base ID (`IndexId`).
   * - Before calling this API, you must first upload files to Alibaba Cloud Model Studio using the **AddFile** API.
   * - After calling this API, the job runs in the background and may take several hours to complete, especially during peak times. Do not submit duplicate requests until the job is complete. To check the job status, call the **GetIndexJobStatus** API. The `Documents` file list returned by the GetIndexJobStatus API contains all files for the job, which is uniquely identified by the `job_id` you provided. You can check this list to verify whether each file was imported (parsed) successfully. Note that frequent calls to the GetIndexJobStatus API are subject to rate limiting. Do not exceed 20 calls per minute.
   * - A successful API call indicates the job has been submitted for processing, which takes time. This API is not idempotent, so do not send duplicate requests; doing so will create multiple jobs.
   * **Rate limiting:** This API is limited to 10 calls per second. If you exceed this limit, wait before retrying.
   * 
   * @param tmpReq - SubmitIndexAddDocumentsJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitIndexAddDocumentsJobResponse
   */
  async submitIndexAddDocumentsJobWithOptions(WorkspaceId: string, tmpReq: $_model.SubmitIndexAddDocumentsJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitIndexAddDocumentsJobResponse> {
    tmpReq.validate();
    let request = new $_model.SubmitIndexAddDocumentsJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.categoryIds)) {
      request.categoryIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.categoryIds, "CategoryIds", "json");
    }

    if (!$dara.isNull(tmpReq.documentIds)) {
      request.documentIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.documentIds, "DocumentIds", "json");
    }

    if (!$dara.isNull(tmpReq.extra)) {
      request.extraShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extra, "Extra", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryIdsShrink)) {
      query["CategoryIds"] = request.categoryIdsShrink;
    }

    if (!$dara.isNull(request.chunkMode)) {
      query["ChunkMode"] = request.chunkMode;
    }

    if (!$dara.isNull(request.chunkSize)) {
      query["ChunkSize"] = request.chunkSize;
    }

    if (!$dara.isNull(request.documentIdsShrink)) {
      query["DocumentIds"] = request.documentIdsShrink;
    }

    if (!$dara.isNull(request.enableHeaders)) {
      query["EnableHeaders"] = request.enableHeaders;
    }

    if (!$dara.isNull(request.extraShrink)) {
      query["Extra"] = request.extraShrink;
    }

    if (!$dara.isNull(request.indexId)) {
      query["IndexId"] = request.indexId;
    }

    if (!$dara.isNull(request.overlapSize)) {
      query["OverlapSize"] = request.overlapSize;
    }

    if (!$dara.isNull(request.separator)) {
      query["Separator"] = request.separator;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitIndexAddDocumentsJob",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/index/add_documents_to_index`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitIndexAddDocumentsJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitIndexAddDocumentsJobResponse({}));
  }

  /**
   * Adds parsed files to the specified knowledge base.
   * 
   * @remarks
   * <props="china">
   * - This API does not support knowledge bases for data queries or image Q\\&A. To update these knowledge bases, see the [knowledge base](https://help.aliyun.com/document_detail/2807740.html) documentation.
   * <props="intl">
   * - This API does not support knowledge bases for data queries or image Q\\&A. To update these knowledge bases, see the [knowledge base](https://help.aliyun.com/document_detail/2807740.html) documentation.
   * - A RAM user (sub-account) can call this API only after being granted the required [api permission](https://help.aliyun.com/document_detail/2848578.html) for Alibaba Cloud Model Studio (specifically, the `AliyunBailianDataFullAccess` policy, which includes the `sfm:SubmitIndexAddDocumentsJob` permission) and joining a [workspace](https://help.aliyun.com/document_detail/2851098.html). An Alibaba Cloud account can call this API directly without authorization. We recommend using the latest version of the <props="china">[Alibaba Cloud Model Studio SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)<props="intl">[Alibaba Cloud Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29) to call this API.
   * - Before calling this API, ensure your knowledge base exists and has a valid knowledge base ID (`IndexId`).
   * - Before calling this API, you must first upload files to Alibaba Cloud Model Studio using the **AddFile** API.
   * - After calling this API, the job runs in the background and may take several hours to complete, especially during peak times. Do not submit duplicate requests until the job is complete. To check the job status, call the **GetIndexJobStatus** API. The `Documents` file list returned by the GetIndexJobStatus API contains all files for the job, which is uniquely identified by the `job_id` you provided. You can check this list to verify whether each file was imported (parsed) successfully. Note that frequent calls to the GetIndexJobStatus API are subject to rate limiting. Do not exceed 20 calls per minute.
   * - A successful API call indicates the job has been submitted for processing, which takes time. This API is not idempotent, so do not send duplicate requests; doing so will create multiple jobs.
   * **Rate limiting:** This API is limited to 10 calls per second. If you exceed this limit, wait before retrying.
   * 
   * @param request - SubmitIndexAddDocumentsJobRequest
   * @returns SubmitIndexAddDocumentsJobResponse
   */
  async submitIndexAddDocumentsJob(WorkspaceId: string, request: $_model.SubmitIndexAddDocumentsJobRequest): Promise<$_model.SubmitIndexAddDocumentsJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.submitIndexAddDocumentsJobWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * Submits a specified CreateIndex task to complete knowledge base creation.
   * 
   * @remarks
   * - Resource Access Management (RAM) users must first obtain [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Model Studio (requires `AliyunBailianDataFullAccess`, which includes the sfm:SubmitIndexJob permission), and [join a workspace](https://help.aliyun.com/document_detail/2851098.html) before invoking this operation. Alibaba Cloud accounts can invoke this operation directly without authorization. Use the latest <props="china">[Model Studio SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)<props="intl">[Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29) to invoke this operation.
   * - Before invoking this operation, you must invoke the **CreateIndex** operation and obtain the corresponding `IndexId`.
   * - After invoking this operation, the node requires time to execute and may take several hours during peak periods. Do not submit duplicate requests before the node completes. To query the node execution status, invoke the **GetIndexJobStatus** operation.
   * - After the knowledge base is created, you can associate it with an agent application<props="china"> or workflow application in the same workspace through <props="china">[Application Management](https://bailian.console.aliyun.com/?tab=app#/app-center)<props="intl">[Application Management](https://modelstudio.console.alibabacloud.com/?tab=app#/app-center) (or pass the `IndexID` through `rag_options` in [Application Calls](https://help.aliyun.com/document_detail/2846132.html)) to supplement your Model Studio application with private knowledge and up-to-date information. You can also choose not to use a Model Studio application and directly query the knowledge base by invoking the **Retrieve** operation.
   * - This operation does not support idempotence.
   * **Rate limit:**
   * This operation is throttled if called too frequently. Do not exceed 10 calls per second. If throttled, retry later.
   * 
   * @param request - SubmitIndexJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitIndexJobResponse
   */
  async submitIndexJobWithOptions(WorkspaceId: string, request: $_model.SubmitIndexJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitIndexJobResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.indexId)) {
      query["IndexId"] = request.indexId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitIndexJob",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/index/submit_index_job`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitIndexJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitIndexJobResponse({}));
  }

  /**
   * Submits a specified CreateIndex task to complete knowledge base creation.
   * 
   * @remarks
   * - Resource Access Management (RAM) users must first obtain [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Model Studio (requires `AliyunBailianDataFullAccess`, which includes the sfm:SubmitIndexJob permission), and [join a workspace](https://help.aliyun.com/document_detail/2851098.html) before invoking this operation. Alibaba Cloud accounts can invoke this operation directly without authorization. Use the latest <props="china">[Model Studio SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)<props="intl">[Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29) to invoke this operation.
   * - Before invoking this operation, you must invoke the **CreateIndex** operation and obtain the corresponding `IndexId`.
   * - After invoking this operation, the node requires time to execute and may take several hours during peak periods. Do not submit duplicate requests before the node completes. To query the node execution status, invoke the **GetIndexJobStatus** operation.
   * - After the knowledge base is created, you can associate it with an agent application<props="china"> or workflow application in the same workspace through <props="china">[Application Management](https://bailian.console.aliyun.com/?tab=app#/app-center)<props="intl">[Application Management](https://modelstudio.console.alibabacloud.com/?tab=app#/app-center) (or pass the `IndexID` through `rag_options` in [Application Calls](https://help.aliyun.com/document_detail/2846132.html)) to supplement your Model Studio application with private knowledge and up-to-date information. You can also choose not to use a Model Studio application and directly query the knowledge base by invoking the **Retrieve** operation.
   * - This operation does not support idempotence.
   * **Rate limit:**
   * This operation is throttled if called too frequently. Do not exceed 10 calls per second. If throttled, retry later.
   * 
   * @param request - SubmitIndexJobRequest
   * @returns SubmitIndexJobResponse
   */
  async submitIndexJob(WorkspaceId: string, request: $_model.SubmitIndexJobRequest): Promise<$_model.SubmitIndexJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.submitIndexJobWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * 更新并发布智能体应用
   * 
   * @param tmpReq - UpdateAndPublishAgentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAndPublishAgentResponse
   */
  async updateAndPublishAgentWithOptions(workspaceId: string, appCode: string, tmpReq: $_model.UpdateAndPublishAgentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAndPublishAgentResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateAndPublishAgentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.applicationConfig)) {
      request.applicationConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.applicationConfig, "applicationConfig", "json");
    }

    if (!$dara.isNull(tmpReq.sampleLibrary)) {
      request.sampleLibraryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sampleLibrary, "sampleLibrary", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicationConfigShrink)) {
      body["applicationConfig"] = request.applicationConfigShrink;
    }

    if (!$dara.isNull(request.instructions)) {
      body["instructions"] = request.instructions;
    }

    if (!$dara.isNull(request.modelId)) {
      body["modelId"] = request.modelId;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.sampleLibraryShrink)) {
      body["sampleLibrary"] = request.sampleLibraryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAndPublishAgent",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/application/agents/${$dara.URL.percentEncode(appCode)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAndPublishAgentResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAndPublishAgentResponse({}));
  }

  /**
   * 更新并发布智能体应用
   * 
   * @param request - UpdateAndPublishAgentRequest
   * @returns UpdateAndPublishAgentResponse
   */
  async updateAndPublishAgent(workspaceId: string, appCode: string, request: $_model.UpdateAndPublishAgentRequest): Promise<$_model.UpdateAndPublishAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAndPublishAgentWithOptions(workspaceId, appCode, request, headers, runtime);
  }

  /**
   * 选择更新并发布智能体应用
   * 
   * @param tmpReq - UpdateAndPublishAgentSelectiveRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAndPublishAgentSelectiveResponse
   */
  async updateAndPublishAgentSelectiveWithOptions(workspaceId: string, appCode: string, tmpReq: $_model.UpdateAndPublishAgentSelectiveRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAndPublishAgentSelectiveResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateAndPublishAgentSelectiveShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.applicationConfig)) {
      request.applicationConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.applicationConfig, "applicationConfig", "json");
    }

    if (!$dara.isNull(tmpReq.sampleLibrary)) {
      request.sampleLibraryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sampleLibrary, "sampleLibrary", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicationConfigShrink)) {
      body["applicationConfig"] = request.applicationConfigShrink;
    }

    if (!$dara.isNull(request.instructions)) {
      body["instructions"] = request.instructions;
    }

    if (!$dara.isNull(request.modelId)) {
      body["modelId"] = request.modelId;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.sampleLibraryShrink)) {
      body["sampleLibrary"] = request.sampleLibraryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAndPublishAgentSelective",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/application/agents/${$dara.URL.percentEncode(appCode)}/updateAndPublishAgentSelective`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAndPublishAgentSelectiveResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAndPublishAgentSelectiveResponse({}));
  }

  /**
   * 选择更新并发布智能体应用
   * 
   * @param request - UpdateAndPublishAgentSelectiveRequest
   * @returns UpdateAndPublishAgentSelectiveResponse
   */
  async updateAndPublishAgentSelective(workspaceId: string, appCode: string, request: $_model.UpdateAndPublishAgentSelectiveRequest): Promise<$_model.UpdateAndPublishAgentSelectiveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAndPublishAgentSelectiveWithOptions(workspaceId, appCode, request, headers, runtime);
  }

  /**
   * Modifies the content and title of a specified text chunk in a knowledge base, and specifies whether the chunk participates in knowledge base retrieval.
   * 
   * @remarks
   * - **Key limits**: This operation supports only document search knowledge bases. Data query and image Q&A knowledge bases are not supported.
   * - **Permission requirements**:
   *   - **Resource Access Management (RAM) user**: Before invoking this operation, obtain [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Model Studio (you can use the `AliyunBailianDataFullAccess` policy, which includes the sfm:UpdateChunk permission required by this operation), and [join a workspace](https://help.aliyun.com/document_detail/2851098.html).
   *   - **Alibaba Cloud account**: Has permissions by default and can invoke this operation directly.
   * - **Calling method**: Use the latest <props="china">[Model Studio SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)<props="intl">[Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29). The SDK provides encapsulation of complex signature calculation logic and simplifies the invocation procedure.
   * - **Effective latency**: Updates typically take effect immediately. During peak hours, a slight delay (seconds) may occur.
   * - **Idempotence**: This operation is idempotent. If you repeat the operation on a text chunk that has already been updated, the operation returns a success response.
   * **Rate limit:**
   * This operation is throttled if called too frequently. Do not exceed 10 calls per second. If you are throttled, retry later.
   * 
   * @param request - UpdateChunkRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateChunkResponse
   */
  async updateChunkWithOptions(WorkspaceId: string, request: $_model.UpdateChunkRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateChunkResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.chunkId)) {
      query["ChunkId"] = request.chunkId;
    }

    if (!$dara.isNull(request.dataId)) {
      query["DataId"] = request.dataId;
    }

    if (!$dara.isNull(request.isDisplayedChunkContent)) {
      query["IsDisplayedChunkContent"] = request.isDisplayedChunkContent;
    }

    if (!$dara.isNull(request.pipelineId)) {
      query["PipelineId"] = request.pipelineId;
    }

    if (!$dara.isNull(request.content)) {
      query["content"] = request.content;
    }

    if (!$dara.isNull(request.title)) {
      query["title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateChunk",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/chunk/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateChunkResponse>(await this.callApi(params, req, runtime), new $_model.UpdateChunkResponse({}));
  }

  /**
   * Modifies the content and title of a specified text chunk in a knowledge base, and specifies whether the chunk participates in knowledge base retrieval.
   * 
   * @remarks
   * - **Key limits**: This operation supports only document search knowledge bases. Data query and image Q&A knowledge bases are not supported.
   * - **Permission requirements**:
   *   - **Resource Access Management (RAM) user**: Before invoking this operation, obtain [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Model Studio (you can use the `AliyunBailianDataFullAccess` policy, which includes the sfm:UpdateChunk permission required by this operation), and [join a workspace](https://help.aliyun.com/document_detail/2851098.html).
   *   - **Alibaba Cloud account**: Has permissions by default and can invoke this operation directly.
   * - **Calling method**: Use the latest <props="china">[Model Studio SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)<props="intl">[Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29). The SDK provides encapsulation of complex signature calculation logic and simplifies the invocation procedure.
   * - **Effective latency**: Updates typically take effect immediately. During peak hours, a slight delay (seconds) may occur.
   * - **Idempotence**: This operation is idempotent. If you repeat the operation on a text chunk that has already been updated, the operation returns a success response.
   * **Rate limit:**
   * This operation is throttled if called too frequently. Do not exceed 10 calls per second. If you are throttled, retry later.
   * 
   * @param request - UpdateChunkRequest
   * @returns UpdateChunkResponse
   */
  async updateChunk(WorkspaceId: string, request: $_model.UpdateChunkRequest): Promise<$_model.UpdateChunkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateChunkWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * Updates a connector.
   * 
   * @remarks
   * - A RAM user can call this operation only after they join a workspace and are granted the required [API permission](https://help.aliyun.com/document_detail/2848578.html) for Alibaba Cloud Model Studio (Bailian). The `AliyunBailianDataFullAccess` policy, which includes the `sfm:UpdateConnector` permission, is required. An Alibaba Cloud account can call this operation directly. Use the latest version of the <props="china">[Alibaba Cloud Model Studio (Bailian) SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)<props="intl">[Alibaba Cloud Model Studio (Bailian) SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29) to call this operation.
   * - This operation is not idempotent.
   * **Throttling:** If you call this operation too frequently, the system may throttle your requests. Do not exceed a frequency of 5 calls per second. If a request is throttled, try again later.
   * 
   * @param request - UpdateConnectorRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateConnectorResponse
   */
  async updateConnectorWithOptions(WorkspaceId: string, ConnectorId: string, request: $_model.UpdateConnectorRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateConnectorResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.connectorName)) {
      body["ConnectorName"] = request.connectorName;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateConnector",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/datacenter/connector/${$dara.URL.percentEncode(ConnectorId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateConnectorResponse>(await this.callApi(params, req, runtime), new $_model.UpdateConnectorResponse({}));
  }

  /**
   * Updates a connector.
   * 
   * @remarks
   * - A RAM user can call this operation only after they join a workspace and are granted the required [API permission](https://help.aliyun.com/document_detail/2848578.html) for Alibaba Cloud Model Studio (Bailian). The `AliyunBailianDataFullAccess` policy, which includes the `sfm:UpdateConnector` permission, is required. An Alibaba Cloud account can call this operation directly. Use the latest version of the <props="china">[Alibaba Cloud Model Studio (Bailian) SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)<props="intl">[Alibaba Cloud Model Studio (Bailian) SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29) to call this operation.
   * - This operation is not idempotent.
   * **Throttling:** If you call this operation too frequently, the system may throttle your requests. Do not exceed a frequency of 5 calls per second. If a request is throttled, try again later.
   * 
   * @param request - UpdateConnectorRequest
   * @returns UpdateConnectorResponse
   */
  async updateConnector(WorkspaceId: string, ConnectorId: string, request: $_model.UpdateConnectorRequest): Promise<$_model.UpdateConnectorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateConnectorWithOptions(WorkspaceId, ConnectorId, request, headers, runtime);
  }

  /**
   * Updates the tags for a specified file.
   * 
   * @remarks
   * - A RAM User (sub-account) must be granted the required [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Alibaba Cloud Model Studio (the `AliyunBailianDataFullAccess` policy, which includes the `sfm:UpdateFileTag` permission) and [join a workspace](https://help.aliyun.com/document_detail/2851098.html) before calling this operation. An Alibaba Cloud account (main account) can call this operation directly without authorization. We recommend using the latest version of the <props="china">[Alibaba Cloud Model Studio SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)<props="intl">[Alibaba Cloud Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29) to call this operation.
   * **Throttling:** Do not call this operation more than 5 times per second. If a request is throttled, try again later.
   * 
   * @param tmpReq - UpdateFileTagRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFileTagResponse
   */
  async updateFileTagWithOptions(WorkspaceId: string, FileId: string, tmpReq: $_model.UpdateFileTagRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateFileTagResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateFileTagShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tagsShrink)) {
      body["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateFileTag",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/datacenter/file/${$dara.URL.percentEncode(FileId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateFileTagResponse>(await this.callApi(params, req, runtime), new $_model.UpdateFileTagResponse({}));
  }

  /**
   * Updates the tags for a specified file.
   * 
   * @remarks
   * - A RAM User (sub-account) must be granted the required [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Alibaba Cloud Model Studio (the `AliyunBailianDataFullAccess` policy, which includes the `sfm:UpdateFileTag` permission) and [join a workspace](https://help.aliyun.com/document_detail/2851098.html) before calling this operation. An Alibaba Cloud account (main account) can call this operation directly without authorization. We recommend using the latest version of the <props="china">[Alibaba Cloud Model Studio SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)<props="intl">[Alibaba Cloud Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29) to call this operation.
   * **Throttling:** Do not call this operation more than 5 times per second. If a request is throttled, try again later.
   * 
   * @param request - UpdateFileTagRequest
   * @returns UpdateFileTagResponse
   */
  async updateFileTag(WorkspaceId: string, FileId: string, request: $_model.UpdateFileTagRequest): Promise<$_model.UpdateFileTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateFileTagWithOptions(WorkspaceId, FileId, request, headers, runtime);
  }

  /**
   * Updates the configuration of a specified knowledge base.
   * 
   * @remarks
   * <props="intl">This operation is not available on the Alibaba Cloud International Website (www\\.alibabacloud.com).<props="china">
   * Before a RAM user can call this operation, the RAM user must have the `AliyunBailianDataFullAccess` permission for Alibaba Cloud Model Studio. For more information, see [Grant permissions](https://help.aliyun.com/document_detail/2848578.html). The RAM user must also be added to a workspace. For more information, see [Add a member to a workspace](https://help.aliyun.com/document_detail/2851098.html). An Alibaba Cloud account can call this operation without authorization. Use the latest version of the Alibaba Cloud Model Studio SDK to call this operation. For more information, see [Alibaba Cloud Model Studio SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29).
   * Before you call this operation, ensure that the knowledge base is created and has not been deleted. The knowledge base ID (`Id`) must be valid.
   * This operation is idempotent.
   * 
   * @param request - UpdateIndexRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateIndexResponse
   */
  async updateIndexWithOptions(WorkspaceId: string, request: $_model.UpdateIndexRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateIndexResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.denseSimilarityTopK)) {
      query["DenseSimilarityTopK"] = request.denseSimilarityTopK;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pipelineCommercialCu)) {
      query["PipelineCommercialCu"] = request.pipelineCommercialCu;
    }

    if (!$dara.isNull(request.pipelineCommercialType)) {
      query["PipelineCommercialType"] = request.pipelineCommercialType;
    }

    if (!$dara.isNull(request.rerankMinScore)) {
      query["RerankMinScore"] = request.rerankMinScore;
    }

    if (!$dara.isNull(request.sparseSimilarityTopK)) {
      query["SparseSimilarityTopK"] = request.sparseSimilarityTopK;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateIndex",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/index/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateIndexResponse>(await this.callApi(params, req, runtime), new $_model.UpdateIndexResponse({}));
  }

  /**
   * Updates the configuration of a specified knowledge base.
   * 
   * @remarks
   * <props="intl">This operation is not available on the Alibaba Cloud International Website (www\\.alibabacloud.com).<props="china">
   * Before a RAM user can call this operation, the RAM user must have the `AliyunBailianDataFullAccess` permission for Alibaba Cloud Model Studio. For more information, see [Grant permissions](https://help.aliyun.com/document_detail/2848578.html). The RAM user must also be added to a workspace. For more information, see [Add a member to a workspace](https://help.aliyun.com/document_detail/2851098.html). An Alibaba Cloud account can call this operation without authorization. Use the latest version of the Alibaba Cloud Model Studio SDK to call this operation. For more information, see [Alibaba Cloud Model Studio SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29).
   * Before you call this operation, ensure that the knowledge base is created and has not been deleted. The knowledge base ID (`Id`) must be valid.
   * This operation is idempotent.
   * 
   * @param request - UpdateIndexRequest
   * @returns UpdateIndexResponse
   */
  async updateIndex(WorkspaceId: string, request: $_model.UpdateIndexRequest): Promise<$_model.UpdateIndexResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateIndexWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * Updates the description of a specified long-term memory.
   * 
   * @remarks
   * - This operation is idempotent.
   * **Rate limit:** Ensure that the interval between two requests is at least 1 second. Otherwise, throttling may be triggered. If throttling occurs, retry later.
   * 
   * @param request - UpdateMemoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMemoryResponse
   */
  async updateMemoryWithOptions(workspaceId: string, memoryId: string, request: $_model.UpdateMemoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMemoryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      query["description"] = request.description;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMemory",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/memories/${$dara.URL.percentEncode(memoryId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMemoryResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMemoryResponse({}));
  }

  /**
   * Updates the description of a specified long-term memory.
   * 
   * @remarks
   * - This operation is idempotent.
   * **Rate limit:** Ensure that the interval between two requests is at least 1 second. Otherwise, throttling may be triggered. If throttling occurs, retry later.
   * 
   * @param request - UpdateMemoryRequest
   * @returns UpdateMemoryResponse
   */
  async updateMemory(workspaceId: string, memoryId: string, request: $_model.UpdateMemoryRequest): Promise<$_model.UpdateMemoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateMemoryWithOptions(workspaceId, memoryId, request, headers, runtime);
  }

  /**
   * Updates a memory fragment.
   * 
   * @param request - UpdateMemoryNodeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMemoryNodeResponse
   */
  async updateMemoryNodeWithOptions(workspaceId: string, memoryId: string, memoryNodeId: string, request: $_model.UpdateMemoryNodeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMemoryNodeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      query["content"] = request.content;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMemoryNode",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/memories/${$dara.URL.percentEncode(memoryId)}/memoryNodes/${$dara.URL.percentEncode(memoryNodeId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMemoryNodeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMemoryNodeResponse({}));
  }

  /**
   * Updates a memory fragment.
   * 
   * @param request - UpdateMemoryNodeRequest
   * @returns UpdateMemoryNodeResponse
   */
  async updateMemoryNode(workspaceId: string, memoryId: string, memoryNodeId: string, request: $_model.UpdateMemoryNodeRequest): Promise<$_model.UpdateMemoryNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateMemoryNodeWithOptions(workspaceId, memoryId, memoryNodeId, request, headers, runtime);
  }

  /**
   * Updates a prompt template based on the template ID.
   * 
   * @param request - UpdatePromptTemplateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePromptTemplateResponse
   */
  async updatePromptTemplateWithOptions(workspaceId: string, promptTemplateId: string, request: $_model.UpdatePromptTemplateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePromptTemplateResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      query["content"] = request.content;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePromptTemplate",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/promptTemplates/${$dara.URL.percentEncode(promptTemplateId)}`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePromptTemplateResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePromptTemplateResponse({}));
  }

  /**
   * Updates a prompt template based on the template ID.
   * 
   * @param request - UpdatePromptTemplateRequest
   * @returns UpdatePromptTemplateResponse
   */
  async updatePromptTemplate(workspaceId: string, promptTemplateId: string, request: $_model.UpdatePromptTemplateRequest): Promise<$_model.UpdatePromptTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updatePromptTemplateWithOptions(workspaceId, promptTemplateId, request, headers, runtime);
  }

  /**
   * Update a table in an Alibaba Cloud Model Studio data connector using a file from an authorized OSS bucket.
   * 
   * @remarks
   * - Ensure that the OSS bucket belongs to the same Alibaba Cloud account as your Alibaba Cloud Model Studio instance. You must also complete the authorization steps described in [Configure data import from OSS](https://help.aliyun.com/document_detail/2782155.html).
   *   - The bucket storage class must not be Archive, Cold Archive, or Deep Cold Archive. Buckets with server-side encryption are supported. public-read-write, public-read, and private buckets are also supported.
   *   - If you use a bucket with [Referer-based hotlink protection](https://help.aliyun.com/document_detail/2636937.html), you must add `*.console.aliyun.com` to the Referer whitelist. For more information, see [Allow access only from trusted websites](https://help.aliyun.com/document_detail/2636937.html).
   * - Before a RAM user (sub-account) can call this operation, they must obtain [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Alibaba Cloud Model Studio and [join a workspace](https://help.aliyun.com/document_detail/2851098.html). The AliyunBailianDataFullAccess policy includes the required `sfm:UpdateTableFromAuthorizedOss` permission. An Alibaba Cloud account (root account) can call this operation directly without additional permissions. We recommend that you use the latest version of the <props="china">[Alibaba Cloud Model Studio SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29) or <props="intl">[Alibaba Cloud Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29).
   * - This operation is not idempotent.
   * **Rate limiting:** This operation is subject to rate limiting. Do not call it more than five times per second. If you reach the limit, wait before you try again.
   * 
   * @param request - UpdateTableFromAuthorizedOssRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTableFromAuthorizedOssResponse
   */
  async updateTableFromAuthorizedOssWithOptions(WorkspaceId: string, TableId: string, request: $_model.UpdateTableFromAuthorizedOssRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTableFromAuthorizedOssResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ossBucket)) {
      body["OssBucket"] = request.ossBucket;
    }

    if (!$dara.isNull(request.ossKey)) {
      body["OssKey"] = request.ossKey;
    }

    if (!$dara.isNull(request.ossRegionId)) {
      body["OssRegionId"] = request.ossRegionId;
    }

    if (!$dara.isNull(request.updateMode)) {
      body["UpdateMode"] = request.updateMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTableFromAuthorizedOss",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/datacenter/table/fromoss/${$dara.URL.percentEncode(TableId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTableFromAuthorizedOssResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTableFromAuthorizedOssResponse({}));
  }

  /**
   * Update a table in an Alibaba Cloud Model Studio data connector using a file from an authorized OSS bucket.
   * 
   * @remarks
   * - Ensure that the OSS bucket belongs to the same Alibaba Cloud account as your Alibaba Cloud Model Studio instance. You must also complete the authorization steps described in [Configure data import from OSS](https://help.aliyun.com/document_detail/2782155.html).
   *   - The bucket storage class must not be Archive, Cold Archive, or Deep Cold Archive. Buckets with server-side encryption are supported. public-read-write, public-read, and private buckets are also supported.
   *   - If you use a bucket with [Referer-based hotlink protection](https://help.aliyun.com/document_detail/2636937.html), you must add `*.console.aliyun.com` to the Referer whitelist. For more information, see [Allow access only from trusted websites](https://help.aliyun.com/document_detail/2636937.html).
   * - Before a RAM user (sub-account) can call this operation, they must obtain [API permissions](https://help.aliyun.com/document_detail/2848578.html) for Alibaba Cloud Model Studio and [join a workspace](https://help.aliyun.com/document_detail/2851098.html). The AliyunBailianDataFullAccess policy includes the required `sfm:UpdateTableFromAuthorizedOss` permission. An Alibaba Cloud account (root account) can call this operation directly without additional permissions. We recommend that you use the latest version of the <props="china">[Alibaba Cloud Model Studio SDK](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29) or <props="intl">[Alibaba Cloud Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29).
   * - This operation is not idempotent.
   * **Rate limiting:** This operation is subject to rate limiting. Do not call it more than five times per second. If you reach the limit, wait before you try again.
   * 
   * @param request - UpdateTableFromAuthorizedOssRequest
   * @returns UpdateTableFromAuthorizedOssResponse
   */
  async updateTableFromAuthorizedOss(WorkspaceId: string, TableId: string, request: $_model.UpdateTableFromAuthorizedOssRequest): Promise<$_model.UpdateTableFromAuthorizedOssResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTableFromAuthorizedOssWithOptions(WorkspaceId, TableId, request, headers, runtime);
  }

}
