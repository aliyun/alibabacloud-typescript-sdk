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
    this._endpoint = this.getEndpoint("eduembed", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 创建实验预约
   * 
   * @param request - CreateLabReservationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLabReservationResponse
   */
  async createLabReservationWithOptions(request: $_model.CreateLabReservationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLabReservationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountId)) {
      body["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.labId)) {
      body["LabId"] = request.labId;
    }

    if (!$dara.isNull(request.memberCount)) {
      body["MemberCount"] = request.memberCount;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLabReservation",
      version: "2024-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLabReservationResponse>(await this.callApi(params, req, runtime), new $_model.CreateLabReservationResponse({}));
  }

  /**
   * 创建实验预约
   * 
   * @param request - CreateLabReservationRequest
   * @returns CreateLabReservationResponse
   */
  async createLabReservation(request: $_model.CreateLabReservationRequest): Promise<$_model.CreateLabReservationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLabReservationWithOptions(request, runtime);
  }

  /**
   * 创建实验会话
   * 
   * @param request - CreateLabSessionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLabSessionResponse
   */
  async createLabSessionWithOptions(request: $_model.CreateLabSessionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLabSessionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountId)) {
      body["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.labId)) {
      body["LabId"] = request.labId;
    }

    if (!$dara.isNull(request.ramAccountId)) {
      body["RamAccountId"] = request.ramAccountId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLabSession",
      version: "2024-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLabSessionResponse>(await this.callApi(params, req, runtime), new $_model.CreateLabSessionResponse({}));
  }

  /**
   * 创建实验会话
   * 
   * @param request - CreateLabSessionRequest
   * @returns CreateLabSessionResponse
   */
  async createLabSession(request: $_model.CreateLabSessionRequest): Promise<$_model.CreateLabSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLabSessionWithOptions(request, runtime);
  }

  /**
   * 查看课程详情
   * 
   * @param request - DescribeCourseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCourseResponse
   */
  async describeCourseWithOptions(request: $_model.DescribeCourseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCourseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.courseId)) {
      query["CourseId"] = request.courseId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCourse",
      version: "2024-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCourseResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCourseResponse({}));
  }

  /**
   * 查看课程详情
   * 
   * @param request - DescribeCourseRequest
   * @returns DescribeCourseResponse
   */
  async describeCourse(request: $_model.DescribeCourseRequest): Promise<$_model.DescribeCourseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCourseWithOptions(request, runtime);
  }

  /**
   * 查看课程课时详情
   * 
   * @param request - DescribeCourseLessonRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCourseLessonResponse
   */
  async describeCourseLessonWithOptions(request: $_model.DescribeCourseLessonRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCourseLessonResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lessonId)) {
      query["LessonId"] = request.lessonId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCourseLesson",
      version: "2024-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCourseLessonResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCourseLessonResponse({}));
  }

  /**
   * 查看课程课时详情
   * 
   * @param request - DescribeCourseLessonRequest
   * @returns DescribeCourseLessonResponse
   */
  async describeCourseLesson(request: $_model.DescribeCourseLessonRequest): Promise<$_model.DescribeCourseLessonResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCourseLessonWithOptions(request, runtime);
  }

  /**
   * 查看实验详情
   * 
   * @param request - DescribeLabRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLabResponse
   */
  async describeLabWithOptions(request: $_model.DescribeLabRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLabResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLab",
      version: "2024-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLabResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLabResponse({}));
  }

  /**
   * 查看实验详情
   * 
   * @param request - DescribeLabRequest
   * @returns DescribeLabResponse
   */
  async describeLab(request: $_model.DescribeLabRequest): Promise<$_model.DescribeLabResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLabWithOptions(request, runtime);
  }

  /**
   * 查询实验预约
   * 
   * @param request - DescribeLabReservationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLabReservationResponse
   */
  async describeLabReservationWithOptions(request: $_model.DescribeLabReservationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLabReservationResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLabReservation",
      version: "2024-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLabReservationResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLabReservationResponse({}));
  }

  /**
   * 查询实验预约
   * 
   * @param request - DescribeLabReservationRequest
   * @returns DescribeLabReservationResponse
   */
  async describeLabReservation(request: $_model.DescribeLabReservationRequest): Promise<$_model.DescribeLabReservationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLabReservationWithOptions(request, runtime);
  }

  /**
   * 查看实验会话信息
   * 
   * @param request - DescribeLabSessionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLabSessionResponse
   */
  async describeLabSessionWithOptions(request: $_model.DescribeLabSessionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLabSessionResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLabSession",
      version: "2024-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLabSessionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLabSessionResponse({}));
  }

  /**
   * 查看实验会话信息
   * 
   * @param request - DescribeLabSessionRequest
   * @returns DescribeLabSessionResponse
   */
  async describeLabSession(request: $_model.DescribeLabSessionRequest): Promise<$_model.DescribeLabSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLabSessionWithOptions(request, runtime);
  }

  /**
   * 查看课程列表
   * 
   * @param request - ListCoursesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCoursesResponse
   */
  async listCoursesWithOptions(request: $_model.ListCoursesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCoursesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.page)) {
      query["Page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCourses",
      version: "2024-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCoursesResponse>(await this.callApi(params, req, runtime), new $_model.ListCoursesResponse({}));
  }

  /**
   * 查看课程列表
   * 
   * @param request - ListCoursesRequest
   * @returns ListCoursesResponse
   */
  async listCourses(request: $_model.ListCoursesRequest): Promise<$_model.ListCoursesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCoursesWithOptions(request, runtime);
  }

  /**
   * 分页查询实验预约
   * 
   * @param request - PageListLabReservationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PageListLabReservationsResponse
   */
  async pageListLabReservationsWithOptions(request: $_model.PageListLabReservationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PageListLabReservationsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PageListLabReservations",
      version: "2024-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PageListLabReservationsResponse>(await this.callApi(params, req, runtime), new $_model.PageListLabReservationsResponse({}));
  }

  /**
   * 分页查询实验预约
   * 
   * @param request - PageListLabReservationsRequest
   * @returns PageListLabReservationsResponse
   */
  async pageListLabReservations(request: $_model.PageListLabReservationsRequest): Promise<$_model.PageListLabReservationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pageListLabReservationsWithOptions(request, runtime);
  }

  /**
   * 分页查询实验会话
   * 
   * @param request - PageListLabSessionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PageListLabSessionsResponse
   */
  async pageListLabSessionsWithOptions(request: $_model.PageListLabSessionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PageListLabSessionsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PageListLabSessions",
      version: "2024-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PageListLabSessionsResponse>(await this.callApi(params, req, runtime), new $_model.PageListLabSessionsResponse({}));
  }

  /**
   * 分页查询实验会话
   * 
   * @param request - PageListLabSessionsRequest
   * @returns PageListLabSessionsResponse
   */
  async pageListLabSessions(request: $_model.PageListLabSessionsRequest): Promise<$_model.PageListLabSessionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pageListLabSessionsWithOptions(request, runtime);
  }

  /**
   * 分页查询实验
   * 
   * @param request - PageListLabsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PageListLabsResponse
   */
  async pageListLabsWithOptions(request: $_model.PageListLabsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PageListLabsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PageListLabs",
      version: "2024-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PageListLabsResponse>(await this.callApi(params, req, runtime), new $_model.PageListLabsResponse({}));
  }

  /**
   * 分页查询实验
   * 
   * @param request - PageListLabsRequest
   * @returns PageListLabsResponse
   */
  async pageListLabs(request: $_model.PageListLabsRequest): Promise<$_model.PageListLabsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pageListLabsWithOptions(request, runtime);
  }

  /**
   * 移除实验预约
   * 
   * @param request - RemoveLabReservationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveLabReservationResponse
   */
  async removeLabReservationWithOptions(request: $_model.RemoveLabReservationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveLabReservationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountId)) {
      body["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.labReservationId)) {
      body["LabReservationId"] = request.labReservationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveLabReservation",
      version: "2024-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveLabReservationResponse>(await this.callApi(params, req, runtime), new $_model.RemoveLabReservationResponse({}));
  }

  /**
   * 移除实验预约
   * 
   * @param request - RemoveLabReservationRequest
   * @returns RemoveLabReservationResponse
   */
  async removeLabReservation(request: $_model.RemoveLabReservationRequest): Promise<$_model.RemoveLabReservationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeLabReservationWithOptions(request, runtime);
  }

}
