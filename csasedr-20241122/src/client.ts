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
    this._endpoint = this.getEndpoint("csasedr", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Queries security alert types.
   * 
   * @param request - DescribeNsasSuspEventTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNsasSuspEventTypeResponse
   */
  async describeNsasSuspEventTypeWithOptions(request: $_model.DescribeNsasSuspEventTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNsasSuspEventTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.containerFieldName)) {
      query["ContainerFieldName"] = request.containerFieldName;
    }

    if (!$dara.isNull(request.containerFieldValue)) {
      query["ContainerFieldValue"] = request.containerFieldValue;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!$dara.isNull(request.uuids)) {
      query["Uuids"] = request.uuids;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNsasSuspEventType",
      version: "2024-11-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNsasSuspEventTypeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNsasSuspEventTypeResponse({}));
  }

  /**
   * Queries security alert types.
   * 
   * @param request - DescribeNsasSuspEventTypeRequest
   * @returns DescribeNsasSuspEventTypeResponse
   */
  async describeNsasSuspEventType(request: $_model.DescribeNsasSuspEventTypeRequest): Promise<$_model.DescribeNsasSuspEventTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNsasSuspEventTypeWithOptions(request, runtime);
  }

  /**
   * Queries the handling operations, operability, and whitelist rule configurations for a specified endpoint alert in its current state.
   * 
   * @remarks
   * This operation queries the handling operations that can be displayed for a specified endpoint alert. When initiating a subsequent response, you must select the operation items returned in this response where UserCanOperate is true, and submit parameters as required by the response operation. The query result does not guarantee that the subsequent response will succeed.
   * The actual returned results are affected by feature switches, canary releases, dynamic allowlists, alert templates, alert statuses, and filter conditions. The list may be empty. The examples are used to illustrate field formats or rule combinations and do not represent that a specific alert will definitely return these values. MappingMarkFields and its subfields are generic compatibility structures. The current query pipeline does not populate their elements, and you should not infer that this operation supports the corresponding capabilities based on them.
   * 
   * @param request - DescribeSecurityEventOperationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSecurityEventOperationsResponse
   */
  async describeSecurityEventOperationsWithOptions(request: $_model.DescribeSecurityEventOperationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSecurityEventOperationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.securityEventId)) {
      query["SecurityEventId"] = request.securityEventId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSecurityEventOperations",
      version: "2024-11-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSecurityEventOperationsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSecurityEventOperationsResponse({}));
  }

  /**
   * Queries the handling operations, operability, and whitelist rule configurations for a specified endpoint alert in its current state.
   * 
   * @remarks
   * This operation queries the handling operations that can be displayed for a specified endpoint alert. When initiating a subsequent response, you must select the operation items returned in this response where UserCanOperate is true, and submit parameters as required by the response operation. The query result does not guarantee that the subsequent response will succeed.
   * The actual returned results are affected by feature switches, canary releases, dynamic allowlists, alert templates, alert statuses, and filter conditions. The list may be empty. The examples are used to illustrate field formats or rule combinations and do not represent that a specific alert will definitely return these values. MappingMarkFields and its subfields are generic compatibility structures. The current query pipeline does not populate their elements, and you should not infer that this operation supports the corresponding capabilities based on them.
   * 
   * @param request - DescribeSecurityEventOperationsRequest
   * @returns DescribeSecurityEventOperationsResponse
   */
  async describeSecurityEventOperations(request: $_model.DescribeSecurityEventOperationsRequest): Promise<$_model.DescribeSecurityEventOperationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSecurityEventOperationsWithOptions(request, runtime);
  }

  /**
   * Queries endpoint security alerts and supports filtering by alert, endpoint, and processing status.
   * 
   * @param request - DescribeSuspEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSuspEventsResponse
   */
  async describeSuspEventsWithOptions(request: $_model.DescribeSuspEventsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSuspEventsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alarmEventName)) {
      query["AlarmEventName"] = request.alarmEventName;
    }

    if (!$dara.isNull(request.alarmUniqueInfo)) {
      query["AlarmUniqueInfo"] = request.alarmUniqueInfo;
    }

    if (!$dara.isNull(request.assetsTypeList)) {
      query["AssetsTypeList"] = request.assetsTypeList;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.containerFieldName)) {
      query["ContainerFieldName"] = request.containerFieldName;
    }

    if (!$dara.isNull(request.containerFieldValue)) {
      query["ContainerFieldValue"] = request.containerFieldValue;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.dealed)) {
      query["Dealed"] = request.dealed;
    }

    if (!$dara.isNull(request.department)) {
      query["Department"] = request.department;
    }

    if (!$dara.isNull(request.eventNames)) {
      query["EventNames"] = request.eventNames;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.hostName)) {
      query["HostName"] = request.hostName;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.innerIp)) {
      query["InnerIp"] = request.innerIp;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.levels)) {
      query["Levels"] = request.levels;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.operateErrorCodeList)) {
      query["OperateErrorCodeList"] = request.operateErrorCodeList;
    }

    if (!$dara.isNull(request.operateTimeEnd)) {
      query["OperateTimeEnd"] = request.operateTimeEnd;
    }

    if (!$dara.isNull(request.operateTimeStart)) {
      query["OperateTimeStart"] = request.operateTimeStart;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.parentEventTypes)) {
      query["ParentEventTypes"] = request.parentEventTypes;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.sortColumn)) {
      query["SortColumn"] = request.sortColumn;
    }

    if (!$dara.isNull(request.sortType)) {
      query["SortType"] = request.sortType;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!$dara.isNull(request.srcIp)) {
      query["SrcIp"] = request.srcIp;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.strictMode)) {
      query["StrictMode"] = request.strictMode;
    }

    if (!$dara.isNull(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    if (!$dara.isNull(request.timeEnd)) {
      query["TimeEnd"] = request.timeEnd;
    }

    if (!$dara.isNull(request.timeStart)) {
      query["TimeStart"] = request.timeStart;
    }

    if (!$dara.isNull(request.uniqueInfo)) {
      query["UniqueInfo"] = request.uniqueInfo;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    if (!$dara.isNull(request.uuids)) {
      query["Uuids"] = request.uuids;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tacticId)) {
      body["TacticId"] = request.tacticId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSuspEvents",
      version: "2024-11-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSuspEventsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSuspEventsResponse({}));
  }

  /**
   * Queries endpoint security alerts and supports filtering by alert, endpoint, and processing status.
   * 
   * @param request - DescribeSuspEventsRequest
   * @returns DescribeSuspEventsResponse
   */
  async describeSuspEvents(request: $_model.DescribeSuspEventsRequest): Promise<$_model.DescribeSuspEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSuspEventsWithOptions(request, runtime);
  }

  /**
   * Handles security alert events.
   * 
   * @param request - HandleSecurityEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HandleSecurityEventsResponse
   */
  async handleSecurityEventsWithOptions(request: $_model.HandleSecurityEventsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.HandleSecurityEventsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.markBatch)) {
      query["MarkBatch"] = request.markBatch;
    }

    if (!$dara.isNull(request.markMissParam)) {
      query["MarkMissParam"] = request.markMissParam;
    }

    if (!$dara.isNull(request.operationCode)) {
      query["OperationCode"] = request.operationCode;
    }

    if (!$dara.isNull(request.operationParams)) {
      query["OperationParams"] = request.operationParams;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.securityEventIds)) {
      query["SecurityEventIds"] = request.securityEventIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "HandleSecurityEvents",
      version: "2024-11-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.HandleSecurityEventsResponse>(await this.callApi(params, req, runtime), new $_model.HandleSecurityEventsResponse({}));
  }

  /**
   * Handles security alert events.
   * 
   * @param request - HandleSecurityEventsRequest
   * @returns HandleSecurityEventsResponse
   */
  async handleSecurityEvents(request: $_model.HandleSecurityEventsRequest): Promise<$_model.HandleSecurityEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.handleSecurityEventsWithOptions(request, runtime);
  }

}
