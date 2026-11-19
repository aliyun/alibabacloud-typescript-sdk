// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import GatewayClient from '@alicloud/gateway-pop';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._productId = "AgenticBAS";
    let gatewayClient = new GatewayClient();
    this._spi = gatewayClient;
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("agenticbas", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Submits asynchronous retests in bulk for specified vulnerabilities under the current account and returns the acceptance result for each item.
   * 
   * @remarks
   * Submits retests for existing vulnerabilities that the current account has access to. OperationInput only accepts VulnIds. The original array must contain 1 to 100 elements, and duplicate elements are counted. The original length is verified before deduplication. If the limit is exceeded, the entire request is rejected and no verification records are created. Valid vulnerability IDs are processed item by item. A single item failure does not block the remaining items or roll back accepted items. SuccessCount and Results.Success only indicate that the verification records are created and accepted, and do not mean that the vulnerability retest is completed or the verification is passed. Retests are executed asynchronously and may consume credits.
   * 
   * @param tmpReq - BatchVerifyPentestVulnRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchVerifyPentestVulnResponse
   */
  async batchVerifyPentestVulnWithOptions(tmpReq: $_model.BatchVerifyPentestVulnRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchVerifyPentestVulnResponse> {
    tmpReq.validate();
    let request = new $_model.BatchVerifyPentestVulnShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.operationInput)) {
      request.operationInputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.operationInput, "OperationInput", "json");
    }

    let query = { };
    if (!$dara.isNull(request.operationInputShrink)) {
      query["OperationInput"] = request.operationInputShrink;
    }

    if (!$dara.isNull(request.operationType)) {
      query["OperationType"] = request.operationType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchVerifyPentestVuln",
      version: "2026-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchVerifyPentestVulnResponse>(await this.callApi(params, req, runtime), new $_model.BatchVerifyPentestVulnResponse({}));
  }

  /**
   * Submits asynchronous retests in bulk for specified vulnerabilities under the current account and returns the acceptance result for each item.
   * 
   * @remarks
   * Submits retests for existing vulnerabilities that the current account has access to. OperationInput only accepts VulnIds. The original array must contain 1 to 100 elements, and duplicate elements are counted. The original length is verified before deduplication. If the limit is exceeded, the entire request is rejected and no verification records are created. Valid vulnerability IDs are processed item by item. A single item failure does not block the remaining items or roll back accepted items. SuccessCount and Results.Success only indicate that the verification records are created and accepted, and do not mean that the vulnerability retest is completed or the verification is passed. Retests are executed asynchronously and may consume credits.
   * 
   * @param request - BatchVerifyPentestVulnRequest
   * @returns BatchVerifyPentestVulnResponse
   */
  async batchVerifyPentestVuln(request: $_model.BatchVerifyPentestVulnRequest): Promise<$_model.BatchVerifyPentestVulnResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchVerifyPentestVulnWithOptions(request, runtime);
  }

  /**
   * Creates penetration testing tasks for authorized assets of the current account and returns the task IDs. You can specify up to five targets at a time, and one task is created for each target.
   * 
   * @remarks
   * Creates penetration testing tasks for authorized assets of the current account and returns the task IDs. You can specify up to five targets at a time, and one task is created for each target.
   * Before you call this operation, you must activate the AgenticBAS service or meet the validity period and quota conditions of the trial service. The target assets must meet the ownership verification requirements of the selected asset source. Business parameters are passed in OperationInput. VulnCheckItems and PentestRequirement cannot be empty at the same time. Currently, only IMMEDIATE execution is supported, and scheduled execution is not supported.
   * A successful creation response only indicates that the tasks are created and does not wait for the scan to complete. Save the TaskId in TaskList, query the status and usage by calling DescribePentestTaskList, and then use the same TaskId to query vulnerabilities or reports. Tasks may enter a queue. If a report is not generated, the query response may not contain a download link.
   * Credentials use an object structure of "identity name -> credential configuration". The following are synthetic examples. Replace them with authorized test identities in actual calls.
   * ```json
   * {
   *   "Credentials": {
   *     "accountUser": {
   *       "account": {
   *         "username": "example-user",
   *         "password": "example-password"
   *       }
   *     },
   *     "cookieUser": {
   *       "cookies": [
   *         {
   *           "name": "session",
   *           "value": "example-session",
   *           "domain": "example.com",
   *           "path": "/",
   *           "secure": true,
   *           "httpOnly": true,
   *           "sameSite": "Lax"
   *         }
   *       ]
   *     },
   *     "localUser": {
   *       "localStorage": {
   *         "access_token": "example-local-token"
   *       }
   *     },
   *     "sessionUser": {
   *       "sessionStorage": {
   *         "session_token": "example-session-token"
   *       }
   *     },
   *     "headerUser": {
   *       "extraHeaders": {
   *         "Authorization": "Bearer example-token"
   *       }
   *     }
   *   }
   * }
   * ```
   * 
   * @param tmpReq - CreatePentestTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePentestTaskResponse
   */
  async createPentestTaskWithOptions(tmpReq: $_model.CreatePentestTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePentestTaskResponse> {
    tmpReq.validate();
    let request = new $_model.CreatePentestTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.operationInput)) {
      request.operationInputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.operationInput, "OperationInput", "json");
    }

    let query = { };
    if (!$dara.isNull(request.operationInputShrink)) {
      query["OperationInput"] = request.operationInputShrink;
    }

    if (!$dara.isNull(request.operationType)) {
      query["OperationType"] = request.operationType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePentestTask",
      version: "2026-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePentestTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreatePentestTaskResponse({}));
  }

  /**
   * Creates penetration testing tasks for authorized assets of the current account and returns the task IDs. You can specify up to five targets at a time, and one task is created for each target.
   * 
   * @remarks
   * Creates penetration testing tasks for authorized assets of the current account and returns the task IDs. You can specify up to five targets at a time, and one task is created for each target.
   * Before you call this operation, you must activate the AgenticBAS service or meet the validity period and quota conditions of the trial service. The target assets must meet the ownership verification requirements of the selected asset source. Business parameters are passed in OperationInput. VulnCheckItems and PentestRequirement cannot be empty at the same time. Currently, only IMMEDIATE execution is supported, and scheduled execution is not supported.
   * A successful creation response only indicates that the tasks are created and does not wait for the scan to complete. Save the TaskId in TaskList, query the status and usage by calling DescribePentestTaskList, and then use the same TaskId to query vulnerabilities or reports. Tasks may enter a queue. If a report is not generated, the query response may not contain a download link.
   * Credentials use an object structure of "identity name -> credential configuration". The following are synthetic examples. Replace them with authorized test identities in actual calls.
   * ```json
   * {
   *   "Credentials": {
   *     "accountUser": {
   *       "account": {
   *         "username": "example-user",
   *         "password": "example-password"
   *       }
   *     },
   *     "cookieUser": {
   *       "cookies": [
   *         {
   *           "name": "session",
   *           "value": "example-session",
   *           "domain": "example.com",
   *           "path": "/",
   *           "secure": true,
   *           "httpOnly": true,
   *           "sameSite": "Lax"
   *         }
   *       ]
   *     },
   *     "localUser": {
   *       "localStorage": {
   *         "access_token": "example-local-token"
   *       }
   *     },
   *     "sessionUser": {
   *       "sessionStorage": {
   *         "session_token": "example-session-token"
   *       }
   *     },
   *     "headerUser": {
   *       "extraHeaders": {
   *         "Authorization": "Bearer example-token"
   *       }
   *     }
   *   }
   * }
   * ```
   * 
   * @param request - CreatePentestTaskRequest
   * @returns CreatePentestTaskResponse
   */
  async createPentestTask(request: $_model.CreatePentestTaskRequest): Promise<$_model.CreatePentestTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPentestTaskWithOptions(request, runtime);
  }

  /**
   * Queries the PDF report of a specified penetration test task for the current account, and returns a temporary Object Storage Service (OSS) download URL and the expiration time without returning the report content.
   * 
   * @param tmpReq - DescribePentestReportContentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePentestReportContentResponse
   */
  async describePentestReportContentWithOptions(tmpReq: $_model.DescribePentestReportContentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePentestReportContentResponse> {
    tmpReq.validate();
    let request = new $_model.DescribePentestReportContentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.operationInput)) {
      request.operationInputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.operationInput, "OperationInput", "json");
    }

    let query = { };
    if (!$dara.isNull(request.operationInputShrink)) {
      query["OperationInput"] = request.operationInputShrink;
    }

    if (!$dara.isNull(request.operationType)) {
      query["OperationType"] = request.operationType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePentestReportContent",
      version: "2026-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePentestReportContentResponse>(await this.callApi(params, req, runtime), new $_model.DescribePentestReportContentResponse({}));
  }

  /**
   * Queries the PDF report of a specified penetration test task for the current account, and returns a temporary Object Storage Service (OSS) download URL and the expiration time without returning the report content.
   * 
   * @param request - DescribePentestReportContentRequest
   * @returns DescribePentestReportContentResponse
   */
  async describePentestReportContent(request: $_model.DescribePentestReportContentRequest): Promise<$_model.DescribePentestReportContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePentestReportContentWithOptions(request, runtime);
  }

  /**
   * Queries the penetration testing nodes of the current account by paging and returns the node status, execution duration, Credits usage, time, and vulnerability statistics.
   * 
   * @remarks
   * Queries the penetration testing nodes of the current account by paging and returns the node status, execution duration, Credits usage, time, and vulnerability statistics.
   * Use OperationInput to specify query conditions. Paging is implemented by using CurrentPage and PageSize. By default, the first page is returned with 10 entries per page. You can filter nodes by node name keyword and node status.
   * The response includes TaskList and PageInfo. Duration indicates the execution duration in seconds. CreditsUsed indicates the number of Credits used. Nodes that have not started may not have a start time or duration, and nodes that have not finished may not have a completion time. All UNIX timestamps are in UNIX seconds. You can transform them to the time zone of the invoker for display.
   * 
   * @param tmpReq - DescribePentestTaskListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePentestTaskListResponse
   */
  async describePentestTaskListWithOptions(tmpReq: $_model.DescribePentestTaskListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePentestTaskListResponse> {
    tmpReq.validate();
    let request = new $_model.DescribePentestTaskListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.operationInput)) {
      request.operationInputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.operationInput, "OperationInput", "json");
    }

    let query = { };
    if (!$dara.isNull(request.operationInputShrink)) {
      query["OperationInput"] = request.operationInputShrink;
    }

    if (!$dara.isNull(request.operationType)) {
      query["OperationType"] = request.operationType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePentestTaskList",
      version: "2026-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePentestTaskListResponse>(await this.callApi(params, req, runtime), new $_model.DescribePentestTaskListResponse({}));
  }

  /**
   * Queries the penetration testing nodes of the current account by paging and returns the node status, execution duration, Credits usage, time, and vulnerability statistics.
   * 
   * @remarks
   * Queries the penetration testing nodes of the current account by paging and returns the node status, execution duration, Credits usage, time, and vulnerability statistics.
   * Use OperationInput to specify query conditions. Paging is implemented by using CurrentPage and PageSize. By default, the first page is returned with 10 entries per page. You can filter nodes by node name keyword and node status.
   * The response includes TaskList and PageInfo. Duration indicates the execution duration in seconds. CreditsUsed indicates the number of Credits used. Nodes that have not started may not have a start time or duration, and nodes that have not finished may not have a completion time. All UNIX timestamps are in UNIX seconds. You can transform them to the time zone of the invoker for display.
   * 
   * @param request - DescribePentestTaskListRequest
   * @returns DescribePentestTaskListResponse
   */
  async describePentestTaskList(request: $_model.DescribePentestTaskListRequest): Promise<$_model.DescribePentestTaskListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePentestTaskListWithOptions(request, runtime);
  }

  /**
   * Queries the details of a single vulnerability under the current account without triggering a scan or vulnerability verification.
   * 
   * @remarks
   * Queries a specified single vulnerability under the current account by using OperationInput.VulnId and returns a VulnDetail object. This operation only reads existing vulnerability data. It does not create scan or verification tasks and does not support batch queries by using TaskId or VulnIds. You can call DescribePentestVulnList to obtain vulnerability IDs and then query the details of each vulnerability. The caller identity is determined by the gateway and cannot be specified as another account through request parameters.
   * 
   * @param tmpReq - DescribePentestVulnDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePentestVulnDetailResponse
   */
  async describePentestVulnDetailWithOptions(tmpReq: $_model.DescribePentestVulnDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePentestVulnDetailResponse> {
    tmpReq.validate();
    let request = new $_model.DescribePentestVulnDetailShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.operationInput)) {
      request.operationInputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.operationInput, "OperationInput", "json");
    }

    let query = { };
    if (!$dara.isNull(request.operationInputShrink)) {
      query["OperationInput"] = request.operationInputShrink;
    }

    if (!$dara.isNull(request.operationType)) {
      query["OperationType"] = request.operationType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePentestVulnDetail",
      version: "2026-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePentestVulnDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribePentestVulnDetailResponse({}));
  }

  /**
   * Queries the details of a single vulnerability under the current account without triggering a scan or vulnerability verification.
   * 
   * @remarks
   * Queries a specified single vulnerability under the current account by using OperationInput.VulnId and returns a VulnDetail object. This operation only reads existing vulnerability data. It does not create scan or verification tasks and does not support batch queries by using TaskId or VulnIds. You can call DescribePentestVulnList to obtain vulnerability IDs and then query the details of each vulnerability. The caller identity is determined by the gateway and cannot be specified as another account through request parameters.
   * 
   * @param request - DescribePentestVulnDetailRequest
   * @returns DescribePentestVulnDetailResponse
   */
  async describePentestVulnDetail(request: $_model.DescribePentestVulnDetailRequest): Promise<$_model.DescribePentestVulnDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePentestVulnDetailWithOptions(request, runtime);
  }

  /**
   * Queries the penetration testing vulnerabilities of the current account by task ID with pagination. Returns information such as the vulnerability title, severity, authentication status, affected URLs, and discovery time, and supports filtering by severity.
   * 
   * @param tmpReq - DescribePentestVulnListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePentestVulnListResponse
   */
  async describePentestVulnListWithOptions(tmpReq: $_model.DescribePentestVulnListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePentestVulnListResponse> {
    tmpReq.validate();
    let request = new $_model.DescribePentestVulnListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.operationInput)) {
      request.operationInputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.operationInput, "OperationInput", "json");
    }

    let query = { };
    if (!$dara.isNull(request.operationInputShrink)) {
      query["OperationInput"] = request.operationInputShrink;
    }

    if (!$dara.isNull(request.operationType)) {
      query["OperationType"] = request.operationType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePentestVulnList",
      version: "2026-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePentestVulnListResponse>(await this.callApi(params, req, runtime), new $_model.DescribePentestVulnListResponse({}));
  }

  /**
   * Queries the penetration testing vulnerabilities of the current account by task ID with pagination. Returns information such as the vulnerability title, severity, authentication status, affected URLs, and discovery time, and supports filtering by severity.
   * 
   * @param request - DescribePentestVulnListRequest
   * @returns DescribePentestVulnListResponse
   */
  async describePentestVulnList(request: $_model.DescribePentestVulnListRequest): Promise<$_model.DescribePentestVulnListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePentestVulnListWithOptions(request, runtime);
  }

}
