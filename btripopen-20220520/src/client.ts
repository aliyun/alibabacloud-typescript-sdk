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
    this._endpoint = this.getEndpoint("btripopen", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 换取accessToken接口
   * 
   * @param request - AccessTokenRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AccessTokenResponse
   */
  async accessTokenWithOptions(request: $_model.AccessTokenRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AccessTokenResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appSecret)) {
      query["app_secret"] = request.appSecret;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AccessToken",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/btrip-open-auth/v1/access-token/action/take`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AccessTokenResponse>(await this.callApi(params, req, runtime), new $_model.AccessTokenResponse({}));
  }

  /**
   * 换取accessToken接口
   * 
   * @param request - AccessTokenRequest
   * @returns AccessTokenResponse
   */
  async accessToken(request: $_model.AccessTokenRequest): Promise<$_model.AccessTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.accessTokenWithOptions(request, headers, runtime);
  }

  /**
   * 创建企业部门
   * 
   * @param tmpReq - AddDepartmentRequest
   * @param headers - AddDepartmentHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddDepartmentResponse
   */
  async addDepartmentWithOptions(tmpReq: $_model.AddDepartmentRequest, headers: $_model.AddDepartmentHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.AddDepartmentResponse> {
    tmpReq.validate();
    let request = new $_model.AddDepartmentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.managerEmployeeIdList)) {
      request.managerEmployeeIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.managerEmployeeIdList, "manager_employee_id_list", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deptName)) {
      body["dept_name"] = request.deptName;
    }

    if (!$dara.isNull(request.managerEmployeeIdListShrink)) {
      body["manager_employee_id_list"] = request.managerEmployeeIdListShrink;
    }

    if (!$dara.isNull(request.outDeptId)) {
      body["out_dept_id"] = request.outDeptId;
    }

    if (!$dara.isNull(request.outDeptPid)) {
      body["out_dept_pid"] = request.outDeptPid;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddDepartment",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/department/v2/add`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddDepartmentResponse>(await this.callApi(params, req, runtime), new $_model.AddDepartmentResponse({}));
  }

  /**
   * 创建企业部门
   * 
   * @param request - AddDepartmentRequest
   * @returns AddDepartmentResponse
   */
  async addDepartment(request: $_model.AddDepartmentRequest): Promise<$_model.AddDepartmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.AddDepartmentHeaders({ });
    return await this.addDepartmentWithOptions(request, headers, runtime);
  }

  /**
   * 添加员工
   * 
   * @param tmpReq - AddEmployeeRequest
   * @param headers - AddEmployeeHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddEmployeeResponse
   */
  async addEmployeeWithOptions(tmpReq: $_model.AddEmployeeRequest, headers: $_model.AddEmployeeHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.AddEmployeeResponse> {
    tmpReq.validate();
    let request = new $_model.AddEmployeeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.baseCityCodeList)) {
      request.baseCityCodeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.baseCityCodeList, "base_city_code_list", "json");
    }

    if (!$dara.isNull(tmpReq.baseLocationList)) {
      request.baseLocationListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.baseLocationList, "base_location_list", "json");
    }

    if (!$dara.isNull(tmpReq.certList)) {
      request.certListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.certList, "cert_list", "json");
    }

    if (!$dara.isNull(tmpReq.customRoleCodeList)) {
      request.customRoleCodeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.customRoleCodeList, "custom_role_code_list", "json");
    }

    if (!$dara.isNull(tmpReq.outDeptIdList)) {
      request.outDeptIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.outDeptIdList, "out_dept_id_list", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountEmail)) {
      body["account_email"] = request.accountEmail;
    }

    if (!$dara.isNull(request.accountPhone)) {
      body["account_phone"] = request.accountPhone;
    }

    if (!$dara.isNull(request.attribute)) {
      body["attribute"] = request.attribute;
    }

    if (!$dara.isNull(request.avatar)) {
      body["avatar"] = request.avatar;
    }

    if (!$dara.isNull(request.baseCityCodeListShrink)) {
      body["base_city_code_list"] = request.baseCityCodeListShrink;
    }

    if (!$dara.isNull(request.baseLocationListShrink)) {
      body["base_location_list"] = request.baseLocationListShrink;
    }

    if (!$dara.isNull(request.birthday)) {
      body["birthday"] = request.birthday;
    }

    if (!$dara.isNull(request.certListShrink)) {
      body["cert_list"] = request.certListShrink;
    }

    if (!$dara.isNull(request.customRoleCodeListShrink)) {
      body["custom_role_code_list"] = request.customRoleCodeListShrink;
    }

    if (!$dara.isNull(request.email)) {
      body["email"] = request.email;
    }

    if (!$dara.isNull(request.gender)) {
      body["gender"] = request.gender;
    }

    if (!$dara.isNull(request.isAdmin)) {
      body["is_admin"] = request.isAdmin;
    }

    if (!$dara.isNull(request.isBoss)) {
      body["is_boss"] = request.isBoss;
    }

    if (!$dara.isNull(request.isDeptLeader)) {
      body["is_dept_leader"] = request.isDeptLeader;
    }

    if (!$dara.isNull(request.jobNo)) {
      body["job_no"] = request.jobNo;
    }

    if (!$dara.isNull(request.managerUserId)) {
      body["manager_user_id"] = request.managerUserId;
    }

    if (!$dara.isNull(request.outDeptIdListShrink)) {
      body["out_dept_id_list"] = request.outDeptIdListShrink;
    }

    if (!$dara.isNull(request.phone)) {
      body["phone"] = request.phone;
    }

    if (!$dara.isNull(request.positionLevel)) {
      body["position_level"] = request.positionLevel;
    }

    if (!$dara.isNull(request.realName)) {
      body["real_name"] = request.realName;
    }

    if (!$dara.isNull(request.realNameEn)) {
      body["real_name_en"] = request.realNameEn;
    }

    if (!$dara.isNull(request.unionId)) {
      body["union_id"] = request.unionId;
    }

    if (!$dara.isNull(request.userId)) {
      body["user_id"] = request.userId;
    }

    if (!$dara.isNull(request.userNick)) {
      body["user_nick"] = request.userNick;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddEmployee",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/employee/v2/add`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddEmployeeResponse>(await this.callApi(params, req, runtime), new $_model.AddEmployeeResponse({}));
  }

  /**
   * 添加员工
   * 
   * @param request - AddEmployeeRequest
   * @returns AddEmployeeResponse
   */
  async addEmployee(request: $_model.AddEmployeeRequest): Promise<$_model.AddEmployeeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.AddEmployeeHeaders({ });
    return await this.addEmployeeWithOptions(request, headers, runtime);
  }

  /**
   * 批量新增企业自定义角色下人员
   * 
   * @param tmpReq - AddEmployeesToCustomRoleRequest
   * @param headers - AddEmployeesToCustomRoleHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddEmployeesToCustomRoleResponse
   */
  async addEmployeesToCustomRoleWithOptions(tmpReq: $_model.AddEmployeesToCustomRoleRequest, headers: $_model.AddEmployeesToCustomRoleHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.AddEmployeesToCustomRoleResponse> {
    tmpReq.validate();
    let request = new $_model.AddEmployeesToCustomRoleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.userIdList)) {
      request.userIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userIdList, "user_id_list", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.roleId)) {
      body["role_id"] = request.roleId;
    }

    if (!$dara.isNull(request.userIdListShrink)) {
      body["user_id_list"] = request.userIdListShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddEmployeesToCustomRole",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/role/v1/customRoleEmployees/add`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddEmployeesToCustomRoleResponse>(await this.callApi(params, req, runtime), new $_model.AddEmployeesToCustomRoleResponse({}));
  }

  /**
   * 批量新增企业自定义角色下人员
   * 
   * @param request - AddEmployeesToCustomRoleRequest
   * @returns AddEmployeesToCustomRoleResponse
   */
  async addEmployeesToCustomRole(request: $_model.AddEmployeesToCustomRoleRequest): Promise<$_model.AddEmployeesToCustomRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.AddEmployeesToCustomRoleHeaders({ });
    return await this.addEmployeesToCustomRoleWithOptions(request, headers, runtime);
  }

  /**
   * 新增发票抬头适用人员
   * 
   * @param tmpReq - AddInvoiceEntityRequest
   * @param headers - AddInvoiceEntityHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddInvoiceEntityResponse
   */
  async addInvoiceEntityWithOptions(tmpReq: $_model.AddInvoiceEntityRequest, headers: $_model.AddInvoiceEntityHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.AddInvoiceEntityResponse> {
    tmpReq.validate();
    let request = new $_model.AddInvoiceEntityShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.entities)) {
      request.entitiesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.entities, "entities", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.entitiesShrink)) {
      body["entities"] = request.entitiesShrink;
    }

    if (!$dara.isNull(request.thirdPartId)) {
      body["third_part_id"] = request.thirdPartId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddInvoiceEntity",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/invoice/v1/entities`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddInvoiceEntityResponse>(await this.callApi(params, req, runtime), new $_model.AddInvoiceEntityResponse({}));
  }

  /**
   * 新增发票抬头适用人员
   * 
   * @param request - AddInvoiceEntityRequest
   * @returns AddInvoiceEntityResponse
   */
  async addInvoiceEntity(request: $_model.AddInvoiceEntityRequest): Promise<$_model.AddInvoiceEntityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.AddInvoiceEntityHeaders({ });
    return await this.addInvoiceEntityWithOptions(request, headers, runtime);
  }

  /**
   * 商旅功能页跳转
   * 
   * @param request - AddressGetRequest
   * @param headers - AddressGetHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddressGetResponse
   */
  async addressGetWithOptions(request: $_model.AddressGetRequest, headers: $_model.AddressGetHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.AddressGetResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.actionType)) {
      query["action_type"] = request.actionType;
    }

    if (!$dara.isNull(request.arrCityCode)) {
      query["arr_city_code"] = request.arrCityCode;
    }

    if (!$dara.isNull(request.arrCityName)) {
      query["arr_city_name"] = request.arrCityName;
    }

    if (!$dara.isNull(request.carScenesCode)) {
      query["car_scenes_code"] = request.carScenesCode;
    }

    if (!$dara.isNull(request.depCityCode)) {
      query["dep_city_code"] = request.depCityCode;
    }

    if (!$dara.isNull(request.depCityName)) {
      query["dep_city_name"] = request.depCityName;
    }

    if (!$dara.isNull(request.depDate)) {
      query["dep_date"] = request.depDate;
    }

    if (!$dara.isNull(request.itineraryId)) {
      query["itinerary_id"] = request.itineraryId;
    }

    if (!$dara.isNull(request.middlePage)) {
      query["middle_page"] = request.middlePage;
    }

    if (!$dara.isNull(request.orderId)) {
      query["order_Id"] = request.orderId;
    }

    if (!$dara.isNull(request.phone)) {
      query["phone"] = request.phone;
    }

    if (!$dara.isNull(request.sessionParameters)) {
      query["session_parameters"] = request.sessionParameters;
    }

    if (!$dara.isNull(request.subCorpId)) {
      query["sub_corp_id"] = request.subCorpId;
    }

    if (!$dara.isNull(request.taobaoCallbackUrl)) {
      query["taobao_callback_url"] = request.taobaoCallbackUrl;
    }

    if (!$dara.isNull(request.thirdpartApplyId)) {
      query["thirdpart_apply_id"] = request.thirdpartApplyId;
    }

    if (!$dara.isNull(request.travelerId)) {
      query["traveler_id"] = request.travelerId;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    if (!$dara.isNull(request.useBookingProxy)) {
      query["use_booking_proxy"] = request.useBookingProxy;
    }

    if (!$dara.isNull(request.userId)) {
      query["user_id"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddressGet",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/open/v1/address`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddressGetResponse>(await this.callApi(params, req, runtime), new $_model.AddressGetResponse({}));
  }

  /**
   * 商旅功能页跳转
   * 
   * @param request - AddressGetRequest
   * @returns AddressGetResponse
   */
  async addressGet(request: $_model.AddressGetRequest): Promise<$_model.AddressGetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.AddressGetHeaders({ });
    return await this.addressGetWithOptions(request, headers, runtime);
  }

  /**
   * 查询机场数据
   * 
   * @param request - AirportSearchRequest
   * @param headers - AirportSearchHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AirportSearchResponse
   */
  async airportSearchWithOptions(request: $_model.AirportSearchRequest, headers: $_model.AirportSearchHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.AirportSearchResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AirportSearch",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/city/v1/airport`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AirportSearchResponse>(await this.callApi(params, req, runtime), new $_model.AirportSearchResponse({}));
  }

  /**
   * 查询机场数据
   * 
   * @param request - AirportSearchRequest
   * @returns AirportSearchResponse
   */
  async airportSearch(request: $_model.AirportSearchRequest): Promise<$_model.AirportSearchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.AirportSearchHeaders({ });
    return await this.airportSearchWithOptions(request, headers, runtime);
  }

  /**
   * 全量查询商旅城市行政区划编码信息
   * 
   * @param headers - AllBaseCityInfoQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AllBaseCityInfoQueryResponse
   */
  async allBaseCityInfoQueryWithOptions(headers: $_model.AllBaseCityInfoQueryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.AllBaseCityInfoQueryResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripAccessToken)) {
      realHeaders["x-acs-btrip-access-token"] = String(headers.xAcsBtripAccessToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "AllBaseCityInfoQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/city/v1/code`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AllBaseCityInfoQueryResponse>(await this.callApi(params, req, runtime), new $_model.AllBaseCityInfoQueryResponse({}));
  }

  /**
   * 全量查询商旅城市行政区划编码信息
   * @returns AllBaseCityInfoQueryResponse
   */
  async allBaseCityInfoQuery(): Promise<$_model.AllBaseCityInfoQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.AllBaseCityInfoQueryHeaders({ });
    return await this.allBaseCityInfoQueryWithOptions(headers, runtime);
  }

  /**
   * 新建出差审批单
   * 
   * @param tmpReq - ApplyAddRequest
   * @param headers - ApplyAddHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyAddResponse
   */
  async applyAddWithOptions(tmpReq: $_model.ApplyAddRequest, headers: $_model.ApplyAddHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ApplyAddResponse> {
    tmpReq.validate();
    let request = new $_model.ApplyAddShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.carRule)) {
      request.carRuleShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.carRule, "car_rule", "json");
    }

    if (!$dara.isNull(tmpReq.defaultStandard)) {
      request.defaultStandardShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.defaultStandard, "default_standard", "json");
    }

    if (!$dara.isNull(tmpReq.externalTravelerList)) {
      request.externalTravelerListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.externalTravelerList, "external_traveler_list", "json");
    }

    if (!$dara.isNull(tmpReq.externalTravelerStandard)) {
      request.externalTravelerStandardShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.externalTravelerStandard, "external_traveler_standard", "json");
    }

    if (!$dara.isNull(tmpReq.hotelShare)) {
      request.hotelShareShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.hotelShare, "hotel_share", "json");
    }

    if (!$dara.isNull(tmpReq.itineraryList)) {
      request.itineraryListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.itineraryList, "itinerary_list", "json");
    }

    if (!$dara.isNull(tmpReq.itinerarySetList)) {
      request.itinerarySetListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.itinerarySetList, "itinerary_set_list", "json");
    }

    if (!$dara.isNull(tmpReq.travelerList)) {
      request.travelerListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.travelerList, "traveler_list", "json");
    }

    if (!$dara.isNull(tmpReq.travelerStandard)) {
      request.travelerStandardShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.travelerStandard, "traveler_standard", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.budget)) {
      body["budget"] = request.budget;
    }

    if (!$dara.isNull(request.budgetMerge)) {
      body["budget_merge"] = request.budgetMerge;
    }

    if (!$dara.isNull(request.carRuleShrink)) {
      body["car_rule"] = request.carRuleShrink;
    }

    if (!$dara.isNull(request.corpName)) {
      body["corp_name"] = request.corpName;
    }

    if (!$dara.isNull(request.defaultStandardShrink)) {
      body["default_standard"] = request.defaultStandardShrink;
    }

    if (!$dara.isNull(request.departId)) {
      body["depart_id"] = request.departId;
    }

    if (!$dara.isNull(request.departName)) {
      body["depart_name"] = request.departName;
    }

    if (!$dara.isNull(request.extendField)) {
      body["extend_field"] = request.extendField;
    }

    if (!$dara.isNull(request.externalTravelerListShrink)) {
      body["external_traveler_list"] = request.externalTravelerListShrink;
    }

    if (!$dara.isNull(request.externalTravelerStandardShrink)) {
      body["external_traveler_standard"] = request.externalTravelerStandardShrink;
    }

    if (!$dara.isNull(request.flightBudget)) {
      body["flight_budget"] = request.flightBudget;
    }

    if (!$dara.isNull(request.hotelBudget)) {
      body["hotel_budget"] = request.hotelBudget;
    }

    if (!$dara.isNull(request.hotelShareShrink)) {
      body["hotel_share"] = request.hotelShareShrink;
    }

    if (!$dara.isNull(request.internationalFlightCabins)) {
      body["international_flight_cabins"] = request.internationalFlightCabins;
    }

    if (!$dara.isNull(request.intlFlightBudget)) {
      body["intl_flight_budget"] = request.intlFlightBudget;
    }

    if (!$dara.isNull(request.intlHotelBudget)) {
      body["intl_hotel_budget"] = request.intlHotelBudget;
    }

    if (!$dara.isNull(request.itineraryListShrink)) {
      body["itinerary_list"] = request.itineraryListShrink;
    }

    if (!$dara.isNull(request.itineraryRule)) {
      body["itinerary_rule"] = request.itineraryRule;
    }

    if (!$dara.isNull(request.itinerarySetListShrink)) {
      body["itinerary_set_list"] = request.itinerarySetListShrink;
    }

    if (!$dara.isNull(request.limitTraveler)) {
      body["limit_traveler"] = request.limitTraveler;
    }

    if (!$dara.isNull(request.mealBudget)) {
      body["meal_budget"] = request.mealBudget;
    }

    if (!$dara.isNull(request.paymentDepartmentId)) {
      body["payment_department_id"] = request.paymentDepartmentId;
    }

    if (!$dara.isNull(request.paymentDepartmentName)) {
      body["payment_department_name"] = request.paymentDepartmentName;
    }

    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    if (!$dara.isNull(request.subCorpId)) {
      body["sub_corp_id"] = request.subCorpId;
    }

    if (!$dara.isNull(request.thirdpartApplyId)) {
      body["thirdpart_apply_id"] = request.thirdpartApplyId;
    }

    if (!$dara.isNull(request.thirdpartBusinessId)) {
      body["thirdpart_business_id"] = request.thirdpartBusinessId;
    }

    if (!$dara.isNull(request.thirdpartDepartId)) {
      body["thirdpart_depart_id"] = request.thirdpartDepartId;
    }

    if (!$dara.isNull(request.togetherBookRule)) {
      body["together_book_rule"] = request.togetherBookRule;
    }

    if (!$dara.isNull(request.trainBudget)) {
      body["train_budget"] = request.trainBudget;
    }

    if (!$dara.isNull(request.travelerListShrink)) {
      body["traveler_list"] = request.travelerListShrink;
    }

    if (!$dara.isNull(request.travelerStandardShrink)) {
      body["traveler_standard"] = request.travelerStandardShrink;
    }

    if (!$dara.isNull(request.tripCause)) {
      body["trip_cause"] = request.tripCause;
    }

    if (!$dara.isNull(request.tripDay)) {
      body["trip_day"] = request.tripDay;
    }

    if (!$dara.isNull(request.tripTitle)) {
      body["trip_title"] = request.tripTitle;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    if (!$dara.isNull(request.unionNo)) {
      body["union_no"] = request.unionNo;
    }

    if (!$dara.isNull(request.userId)) {
      body["user_id"] = request.userId;
    }

    if (!$dara.isNull(request.userName)) {
      body["user_name"] = request.userName;
    }

    if (!$dara.isNull(request.vehicleBudget)) {
      body["vehicle_budget"] = request.vehicleBudget;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyAdd",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/apply/v1/biz-trip`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApplyAddResponse>(await this.callApi(params, req, runtime), new $_model.ApplyAddResponse({}));
  }

  /**
   * 新建出差审批单
   * 
   * @param request - ApplyAddRequest
   * @returns ApplyAddResponse
   */
  async applyAdd(request: $_model.ApplyAddRequest): Promise<$_model.ApplyAddResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ApplyAddHeaders({ });
    return await this.applyAddWithOptions(request, headers, runtime);
  }

  /**
   * 更新出差审批单（状态）
   * 
   * @param request - ApplyApproveRequest
   * @param headers - ApplyApproveHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyApproveResponse
   */
  async applyApproveWithOptions(request: $_model.ApplyApproveRequest, headers: $_model.ApplyApproveHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ApplyApproveResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applyId)) {
      body["apply_id"] = request.applyId;
    }

    if (!$dara.isNull(request.note)) {
      body["note"] = request.note;
    }

    if (!$dara.isNull(request.operateTime)) {
      body["operate_time"] = request.operateTime;
    }

    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    if (!$dara.isNull(request.subCorpId)) {
      body["sub_corp_id"] = request.subCorpId;
    }

    if (!$dara.isNull(request.userId)) {
      body["user_id"] = request.userId;
    }

    if (!$dara.isNull(request.userName)) {
      body["user_name"] = request.userName;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyApprove",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/apply/v1/biz-trip/action/approve`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApplyApproveResponse>(await this.callApi(params, req, runtime), new $_model.ApplyApproveResponse({}));
  }

  /**
   * 更新出差审批单（状态）
   * 
   * @param request - ApplyApproveRequest
   * @returns ApplyApproveResponse
   */
  async applyApprove(request: $_model.ApplyApproveRequest): Promise<$_model.ApplyApproveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ApplyApproveHeaders({ });
    return await this.applyApproveWithOptions(request, headers, runtime);
  }

  /**
   * 外部审批节点状态同步
   * 
   * @param tmpReq - ApplyExternalNodeStatusUpdateRequest
   * @param headers - ApplyExternalNodeStatusUpdateHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyExternalNodeStatusUpdateResponse
   */
  async applyExternalNodeStatusUpdateWithOptions(tmpReq: $_model.ApplyExternalNodeStatusUpdateRequest, headers: $_model.ApplyExternalNodeStatusUpdateHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ApplyExternalNodeStatusUpdateResponse> {
    tmpReq.validate();
    let request = new $_model.ApplyExternalNodeStatusUpdateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.operationRecords)) {
      request.operationRecordsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.operationRecords, "operation_records", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.nodeId)) {
      body["node_id"] = request.nodeId;
    }

    if (!$dara.isNull(request.operationRecordsShrink)) {
      body["operation_records"] = request.operationRecordsShrink;
    }

    if (!$dara.isNull(request.processActionResult)) {
      body["process_action_result"] = request.processActionResult;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyExternalNodeStatusUpdate",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/apply/v1/external-nodes/action/status-update`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApplyExternalNodeStatusUpdateResponse>(await this.callApi(params, req, runtime), new $_model.ApplyExternalNodeStatusUpdateResponse({}));
  }

  /**
   * 外部审批节点状态同步
   * 
   * @param request - ApplyExternalNodeStatusUpdateRequest
   * @returns ApplyExternalNodeStatusUpdateResponse
   */
  async applyExternalNodeStatusUpdate(request: $_model.ApplyExternalNodeStatusUpdateRequest): Promise<$_model.ApplyExternalNodeStatusUpdateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ApplyExternalNodeStatusUpdateHeaders({ });
    return await this.applyExternalNodeStatusUpdateWithOptions(request, headers, runtime);
  }

  /**
   * 申请发票
   * 
   * @param tmpReq - ApplyInvoiceTaskRequest
   * @param headers - ApplyInvoiceTaskHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyInvoiceTaskResponse
   */
  async applyInvoiceTaskWithOptions(tmpReq: $_model.ApplyInvoiceTaskRequest, headers: $_model.ApplyInvoiceTaskHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ApplyInvoiceTaskResponse> {
    tmpReq.validate();
    let request = new $_model.ApplyInvoiceTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.invoiceTaskList)) {
      request.invoiceTaskListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.invoiceTaskList, "invoice_task_list", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.billDate)) {
      body["bill_date"] = request.billDate;
    }

    if (!$dara.isNull(request.invoiceTaskListShrink)) {
      body["invoice_task_list"] = request.invoiceTaskListShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyInvoiceTask",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/invoice/v1/apply-invoice-task`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApplyInvoiceTaskResponse>(await this.callApi(params, req, runtime), new $_model.ApplyInvoiceTaskResponse({}));
  }

  /**
   * 申请发票
   * 
   * @param request - ApplyInvoiceTaskRequest
   * @returns ApplyInvoiceTaskResponse
   */
  async applyInvoiceTask(request: $_model.ApplyInvoiceTaskRequest): Promise<$_model.ApplyInvoiceTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ApplyInvoiceTaskHeaders({ });
    return await this.applyInvoiceTaskWithOptions(request, headers, runtime);
  }

  /**
   * 查询出差审批单列表
   * 
   * @param request - ApplyListQueryRequest
   * @param headers - ApplyListQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyListQueryResponse
   */
  async applyListQueryWithOptions(request: $_model.ApplyListQueryRequest, headers: $_model.ApplyListQueryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ApplyListQueryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.allApply)) {
      query["all_apply"] = request.allApply;
    }

    if (!$dara.isNull(request.departId)) {
      query["depart_id"] = request.departId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["end_time"] = request.endTime;
    }

    if (!$dara.isNull(request.gmtModified)) {
      query["gmt_modified"] = request.gmtModified;
    }

    if (!$dara.isNull(request.onlyShangLvApply)) {
      query["only_shang_lv_apply"] = request.onlyShangLvApply;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["start_time"] = request.startTime;
    }

    if (!$dara.isNull(request.subCorpId)) {
      query["sub_corp_id"] = request.subCorpId;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    if (!$dara.isNull(request.unionNo)) {
      query["union_no"] = request.unionNo;
    }

    if (!$dara.isNull(request.userId)) {
      query["user_id"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyListQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/apply/v1/biz-trips`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApplyListQueryResponse>(await this.callApi(params, req, runtime), new $_model.ApplyListQueryResponse({}));
  }

  /**
   * 查询出差审批单列表
   * 
   * @param request - ApplyListQueryRequest
   * @returns ApplyListQueryResponse
   */
  async applyListQuery(request: $_model.ApplyListQueryRequest): Promise<$_model.ApplyListQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ApplyListQueryHeaders({ });
    return await this.applyListQueryWithOptions(request, headers, runtime);
  }

  /**
   * 更新出差审批单
   * 
   * @param tmpReq - ApplyModifyRequest
   * @param headers - ApplyModifyHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyModifyResponse
   */
  async applyModifyWithOptions(tmpReq: $_model.ApplyModifyRequest, headers: $_model.ApplyModifyHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ApplyModifyResponse> {
    tmpReq.validate();
    let request = new $_model.ApplyModifyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.carRule)) {
      request.carRuleShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.carRule, "car_rule", "json");
    }

    if (!$dara.isNull(tmpReq.defaultStandard)) {
      request.defaultStandardShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.defaultStandard, "default_standard", "json");
    }

    if (!$dara.isNull(tmpReq.externalTravelerList)) {
      request.externalTravelerListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.externalTravelerList, "external_traveler_list", "json");
    }

    if (!$dara.isNull(tmpReq.externalTravelerStandard)) {
      request.externalTravelerStandardShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.externalTravelerStandard, "external_traveler_standard", "json");
    }

    if (!$dara.isNull(tmpReq.hotelShare)) {
      request.hotelShareShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.hotelShare, "hotel_share", "json");
    }

    if (!$dara.isNull(tmpReq.itineraryList)) {
      request.itineraryListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.itineraryList, "itinerary_list", "json");
    }

    if (!$dara.isNull(tmpReq.itinerarySetList)) {
      request.itinerarySetListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.itinerarySetList, "itinerary_set_list", "json");
    }

    if (!$dara.isNull(tmpReq.travelerList)) {
      request.travelerListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.travelerList, "traveler_list", "json");
    }

    if (!$dara.isNull(tmpReq.travelerStandard)) {
      request.travelerStandardShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.travelerStandard, "traveler_standard", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.budget)) {
      body["budget"] = request.budget;
    }

    if (!$dara.isNull(request.budgetMerge)) {
      body["budget_merge"] = request.budgetMerge;
    }

    if (!$dara.isNull(request.carRuleShrink)) {
      body["car_rule"] = request.carRuleShrink;
    }

    if (!$dara.isNull(request.corpName)) {
      body["corp_name"] = request.corpName;
    }

    if (!$dara.isNull(request.defaultStandardShrink)) {
      body["default_standard"] = request.defaultStandardShrink;
    }

    if (!$dara.isNull(request.departId)) {
      body["depart_id"] = request.departId;
    }

    if (!$dara.isNull(request.departName)) {
      body["depart_name"] = request.departName;
    }

    if (!$dara.isNull(request.extendField)) {
      body["extend_field"] = request.extendField;
    }

    if (!$dara.isNull(request.externalTravelerListShrink)) {
      body["external_traveler_list"] = request.externalTravelerListShrink;
    }

    if (!$dara.isNull(request.externalTravelerStandardShrink)) {
      body["external_traveler_standard"] = request.externalTravelerStandardShrink;
    }

    if (!$dara.isNull(request.flightBudget)) {
      body["flight_budget"] = request.flightBudget;
    }

    if (!$dara.isNull(request.hotelBudget)) {
      body["hotel_budget"] = request.hotelBudget;
    }

    if (!$dara.isNull(request.hotelShareShrink)) {
      body["hotel_share"] = request.hotelShareShrink;
    }

    if (!$dara.isNull(request.intlFlightBudget)) {
      body["intl_flight_budget"] = request.intlFlightBudget;
    }

    if (!$dara.isNull(request.intlHotelBudget)) {
      body["intl_hotel_budget"] = request.intlHotelBudget;
    }

    if (!$dara.isNull(request.itineraryListShrink)) {
      body["itinerary_list"] = request.itineraryListShrink;
    }

    if (!$dara.isNull(request.itineraryRule)) {
      body["itinerary_rule"] = request.itineraryRule;
    }

    if (!$dara.isNull(request.itinerarySetListShrink)) {
      body["itinerary_set_list"] = request.itinerarySetListShrink;
    }

    if (!$dara.isNull(request.limitTraveler)) {
      body["limit_traveler"] = request.limitTraveler;
    }

    if (!$dara.isNull(request.mealBudget)) {
      body["meal_budget"] = request.mealBudget;
    }

    if (!$dara.isNull(request.paymentDepartmentId)) {
      body["payment_department_id"] = request.paymentDepartmentId;
    }

    if (!$dara.isNull(request.paymentDepartmentName)) {
      body["payment_department_name"] = request.paymentDepartmentName;
    }

    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    if (!$dara.isNull(request.subCorpId)) {
      body["sub_corp_id"] = request.subCorpId;
    }

    if (!$dara.isNull(request.thirdpartApplyId)) {
      body["thirdpart_apply_id"] = request.thirdpartApplyId;
    }

    if (!$dara.isNull(request.thirdpartBusinessId)) {
      body["thirdpart_business_id"] = request.thirdpartBusinessId;
    }

    if (!$dara.isNull(request.thirdpartDepartId)) {
      body["thirdpart_depart_id"] = request.thirdpartDepartId;
    }

    if (!$dara.isNull(request.togetherBookRule)) {
      body["together_book_rule"] = request.togetherBookRule;
    }

    if (!$dara.isNull(request.trainBudget)) {
      body["train_budget"] = request.trainBudget;
    }

    if (!$dara.isNull(request.travelerListShrink)) {
      body["traveler_list"] = request.travelerListShrink;
    }

    if (!$dara.isNull(request.travelerStandardShrink)) {
      body["traveler_standard"] = request.travelerStandardShrink;
    }

    if (!$dara.isNull(request.tripCause)) {
      body["trip_cause"] = request.tripCause;
    }

    if (!$dara.isNull(request.tripDay)) {
      body["trip_day"] = request.tripDay;
    }

    if (!$dara.isNull(request.tripTitle)) {
      body["trip_title"] = request.tripTitle;
    }

    if (!$dara.isNull(request.unionNo)) {
      body["union_no"] = request.unionNo;
    }

    if (!$dara.isNull(request.userId)) {
      body["user_id"] = request.userId;
    }

    if (!$dara.isNull(request.userName)) {
      body["user_name"] = request.userName;
    }

    if (!$dara.isNull(request.vehicleBudget)) {
      body["vehicle_budget"] = request.vehicleBudget;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyModify",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/apply/v1/biz-trip`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApplyModifyResponse>(await this.callApi(params, req, runtime), new $_model.ApplyModifyResponse({}));
  }

  /**
   * 更新出差审批单
   * 
   * @param request - ApplyModifyRequest
   * @returns ApplyModifyResponse
   */
  async applyModify(request: $_model.ApplyModifyRequest): Promise<$_model.ApplyModifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ApplyModifyHeaders({ });
    return await this.applyModifyWithOptions(request, headers, runtime);
  }

  /**
   * 查询出差审批单详情
   * 
   * @param request - ApplyQueryRequest
   * @param headers - ApplyQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyQueryResponse
   */
  async applyQueryWithOptions(request: $_model.ApplyQueryRequest, headers: $_model.ApplyQueryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ApplyQueryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applyId)) {
      query["apply_id"] = request.applyId;
    }

    if (!$dara.isNull(request.applyShowId)) {
      query["apply_show_id"] = request.applyShowId;
    }

    if (!$dara.isNull(request.subCorpId)) {
      query["sub_corp_id"] = request.subCorpId;
    }

    if (!$dara.isNull(request.thirdpartApplyId)) {
      query["thirdpart_apply_id"] = request.thirdpartApplyId;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/apply/v1/biz-trip`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApplyQueryResponse>(await this.callApi(params, req, runtime), new $_model.ApplyQueryResponse({}));
  }

  /**
   * 查询出差审批单详情
   * 
   * @param request - ApplyQueryRequest
   * @returns ApplyQueryResponse
   */
  async applyQuery(request: $_model.ApplyQueryRequest): Promise<$_model.ApplyQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ApplyQueryHeaders({ });
    return await this.applyQueryWithOptions(request, headers, runtime);
  }

  /**
   * 执行审批任务
   * 
   * @param request - ApplyTripTaskExecuteRequest
   * @param headers - ApplyTripTaskExecuteHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyTripTaskExecuteResponse
   */
  async applyTripTaskExecuteWithOptions(request: $_model.ApplyTripTaskExecuteRequest, headers: $_model.ApplyTripTaskExecuteHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ApplyTripTaskExecuteResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.actionFrom)) {
      body["action_from"] = request.actionFrom;
    }

    if (!$dara.isNull(request.comment)) {
      body["comment"] = request.comment;
    }

    if (!$dara.isNull(request.taskAction)) {
      body["task_action"] = request.taskAction;
    }

    if (!$dara.isNull(request.taskId)) {
      body["task_id"] = request.taskId;
    }

    if (!$dara.isNull(request.userId)) {
      body["user_id"] = request.userId;
    }

    if (!$dara.isNull(request.userName)) {
      body["user_name"] = request.userName;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyTripTaskExecute",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/apply/v1/trip-task/action/execute`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApplyTripTaskExecuteResponse>(await this.callApi(params, req, runtime), new $_model.ApplyTripTaskExecuteResponse({}));
  }

  /**
   * 执行审批任务
   * 
   * @param request - ApplyTripTaskExecuteRequest
   * @returns ApplyTripTaskExecuteResponse
   */
  async applyTripTaskExecute(request: $_model.ApplyTripTaskExecuteRequest): Promise<$_model.ApplyTripTaskExecuteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ApplyTripTaskExecuteHeaders({ });
    return await this.applyTripTaskExecuteWithOptions(request, headers, runtime);
  }

  /**
   * 搜索国内/国际（港澳台）城市基础行政区划数据
   * 
   * @param request - BaseCityInfoSearchRequest
   * @param headers - BaseCityInfoSearchHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BaseCityInfoSearchResponse
   */
  async baseCityInfoSearchWithOptions(request: $_model.BaseCityInfoSearchRequest, headers: $_model.BaseCityInfoSearchHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.BaseCityInfoSearchResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripAccessToken)) {
      realHeaders["x-acs-btrip-access-token"] = String(headers.xAcsBtripAccessToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BaseCityInfoSearch",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/city/v1/cities/action/search`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.BaseCityInfoSearchResponse>(await this.callApi(params, req, runtime), new $_model.BaseCityInfoSearchResponse({}));
  }

  /**
   * 搜索国内/国际（港澳台）城市基础行政区划数据
   * 
   * @param request - BaseCityInfoSearchRequest
   * @returns BaseCityInfoSearchResponse
   */
  async baseCityInfoSearch(request: $_model.BaseCityInfoSearchRequest): Promise<$_model.BaseCityInfoSearchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.BaseCityInfoSearchHeaders({ });
    return await this.baseCityInfoSearchWithOptions(request, headers, runtime);
  }

  /**
   * 商旅账单内容修改
   * 
   * @param request - BtripBillInfoAdjustRequest
   * @param headers - BtripBillInfoAdjustHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BtripBillInfoAdjustResponse
   */
  async btripBillInfoAdjustWithOptions(request: $_model.BtripBillInfoAdjustRequest, headers: $_model.BtripBillInfoAdjustHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.BtripBillInfoAdjustResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.primaryId)) {
      body["primary_id"] = request.primaryId;
    }

    if (!$dara.isNull(request.thirdPartCostCenterId)) {
      body["third_part_cost_center_id"] = request.thirdPartCostCenterId;
    }

    if (!$dara.isNull(request.thirdPartDepartmentId)) {
      body["third_part_department_id"] = request.thirdPartDepartmentId;
    }

    if (!$dara.isNull(request.thirdPartInvoiceId)) {
      body["third_part_invoice_id"] = request.thirdPartInvoiceId;
    }

    if (!$dara.isNull(request.thirdPartProjectId)) {
      body["third_part_project_id"] = request.thirdPartProjectId;
    }

    if (!$dara.isNull(request.userId)) {
      body["user_id"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BtripBillInfoAdjust",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/bill/v1/info/action/adjust`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BtripBillInfoAdjustResponse>(await this.callApi(params, req, runtime), new $_model.BtripBillInfoAdjustResponse({}));
  }

  /**
   * 商旅账单内容修改
   * 
   * @param request - BtripBillInfoAdjustRequest
   * @returns BtripBillInfoAdjustResponse
   */
  async btripBillInfoAdjust(request: $_model.BtripBillInfoAdjustRequest): Promise<$_model.BtripBillInfoAdjustResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.BtripBillInfoAdjustHeaders({ });
    return await this.btripBillInfoAdjustWithOptions(request, headers, runtime);
  }

  /**
   * 同步市内用车审批单
   * 
   * @param tmpReq - CarApplyAddRequest
   * @param headers - CarApplyAddHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CarApplyAddResponse
   */
  async carApplyAddWithOptions(tmpReq: $_model.CarApplyAddRequest, headers: $_model.CarApplyAddHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CarApplyAddResponse> {
    tmpReq.validate();
    let request = new $_model.CarApplyAddShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.travelerStandard)) {
      request.travelerStandardShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.travelerStandard, "traveler_standard", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cause)) {
      body["cause"] = request.cause;
    }

    if (!$dara.isNull(request.city)) {
      body["city"] = request.city;
    }

    if (!$dara.isNull(request.cityCodeSet)) {
      body["city_code_set"] = request.cityCodeSet;
    }

    if (!$dara.isNull(request.date)) {
      body["date"] = request.date;
    }

    if (!$dara.isNull(request.finishedDate)) {
      body["finished_date"] = request.finishedDate;
    }

    if (!$dara.isNull(request.projectCode)) {
      body["project_code"] = request.projectCode;
    }

    if (!$dara.isNull(request.projectName)) {
      body["project_name"] = request.projectName;
    }

    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    if (!$dara.isNull(request.thirdPartApplyId)) {
      body["third_part_apply_id"] = request.thirdPartApplyId;
    }

    if (!$dara.isNull(request.thirdPartCostCenterId)) {
      body["third_part_cost_center_id"] = request.thirdPartCostCenterId;
    }

    if (!$dara.isNull(request.thirdPartInvoiceId)) {
      body["third_part_invoice_id"] = request.thirdPartInvoiceId;
    }

    if (!$dara.isNull(request.timesTotal)) {
      body["times_total"] = request.timesTotal;
    }

    if (!$dara.isNull(request.timesType)) {
      body["times_type"] = request.timesType;
    }

    if (!$dara.isNull(request.timesUsed)) {
      body["times_used"] = request.timesUsed;
    }

    if (!$dara.isNull(request.title)) {
      body["title"] = request.title;
    }

    if (!$dara.isNull(request.travelerStandardShrink)) {
      body["traveler_standard"] = request.travelerStandardShrink;
    }

    if (!$dara.isNull(request.userId)) {
      body["user_id"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CarApplyAdd",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/apply/v1/car`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CarApplyAddResponse>(await this.callApi(params, req, runtime), new $_model.CarApplyAddResponse({}));
  }

  /**
   * 同步市内用车审批单
   * 
   * @param request - CarApplyAddRequest
   * @returns CarApplyAddResponse
   */
  async carApplyAdd(request: $_model.CarApplyAddRequest): Promise<$_model.CarApplyAddResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CarApplyAddHeaders({ });
    return await this.carApplyAddWithOptions(request, headers, runtime);
  }

  /**
   * 更新市内用车审批单
   * 
   * @param request - CarApplyModifyRequest
   * @param headers - CarApplyModifyHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CarApplyModifyResponse
   */
  async carApplyModifyWithOptions(request: $_model.CarApplyModifyRequest, headers: $_model.CarApplyModifyHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CarApplyModifyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.operateTime)) {
      body["operate_time"] = request.operateTime;
    }

    if (!$dara.isNull(request.remark)) {
      body["remark"] = request.remark;
    }

    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    if (!$dara.isNull(request.thirdPartApplyId)) {
      body["third_part_apply_id"] = request.thirdPartApplyId;
    }

    if (!$dara.isNull(request.userId)) {
      body["user_id"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CarApplyModify",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/apply/v1/car`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CarApplyModifyResponse>(await this.callApi(params, req, runtime), new $_model.CarApplyModifyResponse({}));
  }

  /**
   * 更新市内用车审批单
   * 
   * @param request - CarApplyModifyRequest
   * @returns CarApplyModifyResponse
   */
  async carApplyModify(request: $_model.CarApplyModifyRequest): Promise<$_model.CarApplyModifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CarApplyModifyHeaders({ });
    return await this.carApplyModifyWithOptions(request, headers, runtime);
  }

  /**
   * 查询市内用车审批单
   * 
   * @param request - CarApplyQueryRequest
   * @param headers - CarApplyQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CarApplyQueryResponse
   */
  async carApplyQueryWithOptions(request: $_model.CarApplyQueryRequest, headers: $_model.CarApplyQueryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CarApplyQueryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.createdEndAt)) {
      query["created_end_at"] = request.createdEndAt;
    }

    if (!$dara.isNull(request.createdStartAt)) {
      query["created_start_at"] = request.createdStartAt;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["page_number"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!$dara.isNull(request.thirdPartApplyId)) {
      query["third_part_apply_id"] = request.thirdPartApplyId;
    }

    if (!$dara.isNull(request.userId)) {
      query["user_id"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CarApplyQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/apply/v1/car`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CarApplyQueryResponse>(await this.callApi(params, req, runtime), new $_model.CarApplyQueryResponse({}));
  }

  /**
   * 查询市内用车审批单
   * 
   * @param request - CarApplyQueryRequest
   * @returns CarApplyQueryResponse
   */
  async carApplyQuery(request: $_model.CarApplyQueryRequest): Promise<$_model.CarApplyQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CarApplyQueryHeaders({ });
    return await this.carApplyQueryWithOptions(request, headers, runtime);
  }

  /**
   * 查询用车记账数据
   * 
   * @param request - CarBillSettlementQueryRequest
   * @param headers - CarBillSettlementQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CarBillSettlementQueryResponse
   */
  async carBillSettlementQueryWithOptions(request: $_model.CarBillSettlementQueryRequest, headers: $_model.CarBillSettlementQueryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CarBillSettlementQueryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.billBatch)) {
      query["bill_batch"] = request.billBatch;
    }

    if (!$dara.isNull(request.orderId)) {
      query["order_id"] = request.orderId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["page_no"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!$dara.isNull(request.periodEnd)) {
      query["period_end"] = request.periodEnd;
    }

    if (!$dara.isNull(request.periodStart)) {
      query["period_start"] = request.periodStart;
    }

    if (!$dara.isNull(request.scrollId)) {
      query["scroll_id"] = request.scrollId;
    }

    if (!$dara.isNull(request.scrollMod)) {
      query["scroll_mod"] = request.scrollMod;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CarBillSettlementQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/car/v1/bill-settlement`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CarBillSettlementQueryResponse>(await this.callApi(params, req, runtime), new $_model.CarBillSettlementQueryResponse({}));
  }

  /**
   * 查询用车记账数据
   * 
   * @param request - CarBillSettlementQueryRequest
   * @returns CarBillSettlementQueryResponse
   */
  async carBillSettlementQuery(request: $_model.CarBillSettlementQueryRequest): Promise<$_model.CarBillSettlementQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CarBillSettlementQueryHeaders({ });
    return await this.carBillSettlementQueryWithOptions(request, headers, runtime);
  }

  /**
   * 查询用车订单列表
   * 
   * @param request - CarOrderListQueryRequest
   * @param headers - CarOrderListQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CarOrderListQueryResponse
   */
  async carOrderListQueryWithOptions(request: $_model.CarOrderListQueryRequest, headers: $_model.CarOrderListQueryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CarOrderListQueryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.allApply)) {
      query["all_apply"] = request.allApply;
    }

    if (!$dara.isNull(request.applyId)) {
      query["apply_id"] = request.applyId;
    }

    if (!$dara.isNull(request.departId)) {
      query["depart_id"] = request.departId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["end_time"] = request.endTime;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["start_time"] = request.startTime;
    }

    if (!$dara.isNull(request.thirdpartApplyId)) {
      query["thirdpart_apply_id"] = request.thirdpartApplyId;
    }

    if (!$dara.isNull(request.updateEndTime)) {
      query["update_end_time"] = request.updateEndTime;
    }

    if (!$dara.isNull(request.updateStartTime)) {
      query["update_start_time"] = request.updateStartTime;
    }

    if (!$dara.isNull(request.userId)) {
      query["user_id"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CarOrderListQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/car/v1/order-list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CarOrderListQueryResponse>(await this.callApi(params, req, runtime), new $_model.CarOrderListQueryResponse({}));
  }

  /**
   * 查询用车订单列表
   * 
   * @param request - CarOrderListQueryRequest
   * @returns CarOrderListQueryResponse
   */
  async carOrderListQuery(request: $_model.CarOrderListQueryRequest): Promise<$_model.CarOrderListQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CarOrderListQueryHeaders({ });
    return await this.carOrderListQueryWithOptions(request, headers, runtime);
  }

  /**
   * 用车订单查询
   * 
   * @param request - CarOrderQueryRequest
   * @param headers - CarOrderQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CarOrderQueryResponse
   */
  async carOrderQueryWithOptions(request: $_model.CarOrderQueryRequest, headers: $_model.CarOrderQueryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CarOrderQueryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.orderId)) {
      query["order_id"] = request.orderId;
    }

    if (!$dara.isNull(request.subOrderId)) {
      query["sub_order_id"] = request.subOrderId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CarOrderQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/car/v1/order`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CarOrderQueryResponse>(await this.callApi(params, req, runtime), new $_model.CarOrderQueryResponse({}));
  }

  /**
   * 用车订单查询
   * 
   * @param request - CarOrderQueryRequest
   * @returns CarOrderQueryResponse
   */
  async carOrderQuery(request: $_model.CarOrderQueryRequest): Promise<$_model.CarOrderQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CarOrderQueryHeaders({ });
    return await this.carOrderQueryWithOptions(request, headers, runtime);
  }

  /**
   * 查询企业用车场景
   * 
   * @param headers - CarSceneQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CarSceneQueryResponse
   */
  async carSceneQueryWithOptions(headers: $_model.CarSceneQueryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CarSceneQueryResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "CarSceneQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/car/v1/scenes`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CarSceneQueryResponse>(await this.callApi(params, req, runtime), new $_model.CarSceneQueryResponse({}));
  }

  /**
   * 查询企业用车场景
   * @returns CarSceneQueryResponse
   */
  async carSceneQuery(): Promise<$_model.CarSceneQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CarSceneQueryHeaders({ });
    return await this.carSceneQueryWithOptions(headers, runtime);
  }

  /**
   * 渠道商创建企业
   * 
   * @param request - ChannelCorpCreateRequest
   * @param headers - ChannelCorpCreateHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChannelCorpCreateResponse
   */
  async channelCorpCreateWithOptions(request: $_model.ChannelCorpCreateRequest, headers: $_model.ChannelCorpCreateHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ChannelCorpCreateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.administratorName)) {
      body["administrator_name"] = request.administratorName;
    }

    if (!$dara.isNull(request.administratorPhone)) {
      body["administrator_phone"] = request.administratorPhone;
    }

    if (!$dara.isNull(request.city)) {
      body["city"] = request.city;
    }

    if (!$dara.isNull(request.corpName)) {
      body["corp_name"] = request.corpName;
    }

    if (!$dara.isNull(request.province)) {
      body["province"] = request.province;
    }

    if (!$dara.isNull(request.scope)) {
      body["scope"] = request.scope;
    }

    if (!$dara.isNull(request.thirdCorpId)) {
      body["third_corp_id"] = request.thirdCorpId;
    }

    if (!$dara.isNull(request.userId)) {
      body["user_id"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChannelCorpCreate",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/corp/v1/channelCorps`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChannelCorpCreateResponse>(await this.callApi(params, req, runtime), new $_model.ChannelCorpCreateResponse({}));
  }

  /**
   * 渠道商创建企业
   * 
   * @param request - ChannelCorpCreateRequest
   * @returns ChannelCorpCreateResponse
   */
  async channelCorpCreate(request: $_model.ChannelCorpCreateRequest): Promise<$_model.ChannelCorpCreateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ChannelCorpCreateHeaders({ });
    return await this.channelCorpCreateWithOptions(request, headers, runtime);
  }

  /**
   * 查询行政区划（市，区）基础数据
   * 
   * @param request - CitySearchRequest
   * @param headers - CitySearchHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CitySearchResponse
   */
  async citySearchWithOptions(request: $_model.CitySearchRequest, headers: $_model.CitySearchHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CitySearchResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CitySearch",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/city/v1/city`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CitySearchResponse>(await this.callApi(params, req, runtime), new $_model.CitySearchResponse({}));
  }

  /**
   * 查询行政区划（市，区）基础数据
   * 
   * @param request - CitySearchRequest
   * @returns CitySearchResponse
   */
  async citySearch(request: $_model.CitySearchRequest): Promise<$_model.CitySearchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CitySearchHeaders({ });
    return await this.citySearchWithOptions(request, headers, runtime);
  }

  /**
   * 查询退改审批信息
   * 
   * @param request - CommonApplyQueryRequest
   * @param headers - CommonApplyQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CommonApplyQueryResponse
   */
  async commonApplyQueryWithOptions(request: $_model.CommonApplyQueryRequest, headers: $_model.CommonApplyQueryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CommonApplyQueryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applyId)) {
      query["apply_id"] = request.applyId;
    }

    if (!$dara.isNull(request.bizCategory)) {
      query["biz_category"] = request.bizCategory;
    }

    if (!$dara.isNull(request.businessInstanceId)) {
      query["business_instance_id"] = request.businessInstanceId;
    }

    if (!$dara.isNull(request.userId)) {
      query["user_id"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CommonApplyQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/apply/v1/common`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CommonApplyQueryResponse>(await this.callApi(params, req, runtime), new $_model.CommonApplyQueryResponse({}));
  }

  /**
   * 查询退改审批信息
   * 
   * @param request - CommonApplyQueryRequest
   * @returns CommonApplyQueryResponse
   */
  async commonApplyQuery(request: $_model.CommonApplyQueryRequest): Promise<$_model.CommonApplyQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CommonApplyQueryHeaders({ });
    return await this.commonApplyQueryWithOptions(request, headers, runtime);
  }

  /**
   * 退改审批结果同步
   * 
   * @param request - CommonApplySyncRequest
   * @param headers - CommonApplySyncHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CommonApplySyncResponse
   */
  async commonApplySyncWithOptions(request: $_model.CommonApplySyncRequest, headers: $_model.CommonApplySyncHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CommonApplySyncResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applyId)) {
      query["apply_id"] = request.applyId;
    }

    if (!$dara.isNull(request.bizCategory)) {
      query["biz_category"] = request.bizCategory;
    }

    if (!$dara.isNull(request.remark)) {
      query["remark"] = request.remark;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    if (!$dara.isNull(request.thirdpartyFlowId)) {
      query["thirdparty_flow_id"] = request.thirdpartyFlowId;
    }

    if (!$dara.isNull(request.userId)) {
      query["user_id"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CommonApplySync",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/apply/v1/syn-common`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CommonApplySyncResponse>(await this.callApi(params, req, runtime), new $_model.CommonApplySyncResponse({}));
  }

  /**
   * 退改审批结果同步
   * 
   * @param request - CommonApplySyncRequest
   * @returns CommonApplySyncResponse
   */
  async commonApplySync(request: $_model.CommonApplySyncRequest): Promise<$_model.CommonApplySyncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CommonApplySyncHeaders({ });
    return await this.commonApplySyncWithOptions(request, headers, runtime);
  }

  /**
   * 查询服务商机票记账数据
   * 
   * @param request - CooperatorFlightBillSettlementQueryRequest
   * @param headers - CooperatorFlightBillSettlementQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CooperatorFlightBillSettlementQueryResponse
   */
  async cooperatorFlightBillSettlementQueryWithOptions(request: $_model.CooperatorFlightBillSettlementQueryRequest, headers: $_model.CooperatorFlightBillSettlementQueryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CooperatorFlightBillSettlementQueryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.billBatch)) {
      query["bill_batch"] = request.billBatch;
    }

    if (!$dara.isNull(request.cooperatorId)) {
      query["cooperator_id"] = request.cooperatorId;
    }

    if (!$dara.isNull(request.orderId)) {
      query["order_id"] = request.orderId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["page_no"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!$dara.isNull(request.periodEnd)) {
      query["period_end"] = request.periodEnd;
    }

    if (!$dara.isNull(request.periodStart)) {
      query["period_start"] = request.periodStart;
    }

    if (!$dara.isNull(request.scrollId)) {
      query["scroll_id"] = request.scrollId;
    }

    if (!$dara.isNull(request.scrollMod)) {
      query["scroll_mod"] = request.scrollMod;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CooperatorFlightBillSettlementQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/cooperator-flight/v1/bill-settlement`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CooperatorFlightBillSettlementQueryResponse>(await this.callApi(params, req, runtime), new $_model.CooperatorFlightBillSettlementQueryResponse({}));
  }

  /**
   * 查询服务商机票记账数据
   * 
   * @param request - CooperatorFlightBillSettlementQueryRequest
   * @returns CooperatorFlightBillSettlementQueryResponse
   */
  async cooperatorFlightBillSettlementQuery(request: $_model.CooperatorFlightBillSettlementQueryRequest): Promise<$_model.CooperatorFlightBillSettlementQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CooperatorFlightBillSettlementQueryHeaders({ });
    return await this.cooperatorFlightBillSettlementQueryWithOptions(request, headers, runtime);
  }

  /**
   * 查询服务商酒店记账数据
   * 
   * @param request - CooperatorHotelBillSettlementQueryRequest
   * @param headers - CooperatorHotelBillSettlementQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CooperatorHotelBillSettlementQueryResponse
   */
  async cooperatorHotelBillSettlementQueryWithOptions(request: $_model.CooperatorHotelBillSettlementQueryRequest, headers: $_model.CooperatorHotelBillSettlementQueryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CooperatorHotelBillSettlementQueryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.billBatch)) {
      query["bill_batch"] = request.billBatch;
    }

    if (!$dara.isNull(request.cooperatorId)) {
      query["cooperator_id"] = request.cooperatorId;
    }

    if (!$dara.isNull(request.orderId)) {
      query["order_id"] = request.orderId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["page_no"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!$dara.isNull(request.periodEnd)) {
      query["period_end"] = request.periodEnd;
    }

    if (!$dara.isNull(request.periodStart)) {
      query["period_start"] = request.periodStart;
    }

    if (!$dara.isNull(request.scrollId)) {
      query["scroll_id"] = request.scrollId;
    }

    if (!$dara.isNull(request.scrollMod)) {
      query["scroll_mod"] = request.scrollMod;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CooperatorHotelBillSettlementQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/cooperator-hotel/v1/bill-settlement`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CooperatorHotelBillSettlementQueryResponse>(await this.callApi(params, req, runtime), new $_model.CooperatorHotelBillSettlementQueryResponse({}));
  }

  /**
   * 查询服务商酒店记账数据
   * 
   * @param request - CooperatorHotelBillSettlementQueryRequest
   * @returns CooperatorHotelBillSettlementQueryResponse
   */
  async cooperatorHotelBillSettlementQuery(request: $_model.CooperatorHotelBillSettlementQueryRequest): Promise<$_model.CooperatorHotelBillSettlementQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CooperatorHotelBillSettlementQueryHeaders({ });
    return await this.cooperatorHotelBillSettlementQueryWithOptions(request, headers, runtime);
  }

  /**
   * 酒店订单事件推送
   * 
   * @param request - CooperatorHotelEventPushRequest
   * @param headers - CooperatorHotelEventPushHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CooperatorHotelEventPushResponse
   */
  async cooperatorHotelEventPushWithOptions(request: $_model.CooperatorHotelEventPushRequest, headers: $_model.CooperatorHotelEventPushHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CooperatorHotelEventPushResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.changeOrderStatus)) {
      body["change_order_status"] = request.changeOrderStatus;
    }

    if (!$dara.isNull(request.changeOrderStatusDesc)) {
      body["change_order_status_desc"] = request.changeOrderStatusDesc;
    }

    if (!$dara.isNull(request.cooperatorOrderId)) {
      body["cooperator_order_id"] = request.cooperatorOrderId;
    }

    if (!$dara.isNull(request.event)) {
      body["event"] = request.event;
    }

    if (!$dara.isNull(request.eventDesc)) {
      body["event_desc"] = request.eventDesc;
    }

    if (!$dara.isNull(request.eventTime)) {
      body["event_time"] = request.eventTime;
    }

    if (!$dara.isNull(request.orderId)) {
      body["order_id"] = request.orderId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CooperatorHotelEventPush",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/coop-hotel/v1/orders/events`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CooperatorHotelEventPushResponse>(await this.callApi(params, req, runtime), new $_model.CooperatorHotelEventPushResponse({}));
  }

  /**
   * 酒店订单事件推送
   * 
   * @param request - CooperatorHotelEventPushRequest
   * @returns CooperatorHotelEventPushResponse
   */
  async cooperatorHotelEventPush(request: $_model.CooperatorHotelEventPushRequest): Promise<$_model.CooperatorHotelEventPushResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CooperatorHotelEventPushHeaders({ });
    return await this.cooperatorHotelEventPushWithOptions(request, headers, runtime);
  }

  /**
   * 个人支付结果推送
   * 
   * @param request - CooperatorSyncPayStatusRequest
   * @param headers - CooperatorSyncPayStatusHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CooperatorSyncPayStatusResponse
   */
  async cooperatorSyncPayStatusWithOptions(request: $_model.CooperatorSyncPayStatusRequest, headers: $_model.CooperatorSyncPayStatusHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CooperatorSyncPayStatusResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cooperatorOrderId)) {
      body["cooperator_order_id"] = request.cooperatorOrderId;
    }

    if (!$dara.isNull(request.cooperatorPayNo)) {
      body["cooperator_pay_no"] = request.cooperatorPayNo;
    }

    if (!$dara.isNull(request.orderId)) {
      body["order_id"] = request.orderId;
    }

    if (!$dara.isNull(request.payStatus)) {
      body["pay_status"] = request.payStatus;
    }

    if (!$dara.isNull(request.payTime)) {
      body["pay_time"] = request.payTime;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CooperatorSyncPayStatus",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/coop-pay/v1/cashiers/status`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CooperatorSyncPayStatusResponse>(await this.callApi(params, req, runtime), new $_model.CooperatorSyncPayStatusResponse({}));
  }

  /**
   * 个人支付结果推送
   * 
   * @param request - CooperatorSyncPayStatusRequest
   * @returns CooperatorSyncPayStatusResponse
   */
  async cooperatorSyncPayStatus(request: $_model.CooperatorSyncPayStatusRequest): Promise<$_model.CooperatorSyncPayStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CooperatorSyncPayStatusHeaders({ });
    return await this.cooperatorSyncPayStatusWithOptions(request, headers, runtime);
  }

  /**
   * 获取关联可调用企业接口
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CorpAuthLinkInfoQueryResponse
   */
  async corpAuthLinkInfoQueryWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CorpAuthLinkInfoQueryResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "CorpAuthLinkInfoQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/corp-authority-link/v1/info`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CorpAuthLinkInfoQueryResponse>(await this.callApi(params, req, runtime), new $_model.CorpAuthLinkInfoQueryResponse({}));
  }

  /**
   * 获取关联可调用企业接口
   * @returns CorpAuthLinkInfoQueryResponse
   */
  async corpAuthLinkInfoQuery(): Promise<$_model.CorpAuthLinkInfoQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.corpAuthLinkInfoQueryWithOptions(headers, runtime);
  }

  /**
   * 换取CorpToken接口
   * 
   * @param request - CorpTokenRequest
   * @param headers - CorpTokenHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CorpTokenResponse
   */
  async corpTokenWithOptions(request: $_model.CorpTokenRequest, headers: $_model.CorpTokenHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CorpTokenResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appSecret)) {
      query["app_secret"] = request.appSecret;
    }

    if (!$dara.isNull(request.corpId)) {
      query["corp_id"] = request.corpId;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripAccessToken)) {
      realHeaders["x-acs-btrip-access-token"] = String(headers.xAcsBtripAccessToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CorpToken",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/btrip-open-auth/v1/corp-token/action/take`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CorpTokenResponse>(await this.callApi(params, req, runtime), new $_model.CorpTokenResponse({}));
  }

  /**
   * 换取CorpToken接口
   * 
   * @param request - CorpTokenRequest
   * @returns CorpTokenResponse
   */
  async corpToken(request: $_model.CorpTokenRequest): Promise<$_model.CorpTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CorpTokenHeaders({ });
    return await this.corpTokenWithOptions(request, headers, runtime);
  }

  /**
   * 删除成本中心
   * 
   * @param request - CostCenterDeleteRequest
   * @param headers - CostCenterDeleteHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CostCenterDeleteResponse
   */
  async costCenterDeleteWithOptions(request: $_model.CostCenterDeleteRequest, headers: $_model.CostCenterDeleteHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CostCenterDeleteResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.thirdpartId)) {
      query["thirdpart_id"] = request.thirdpartId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CostCenterDelete",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/costcenter/v1/delete-costcenter`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CostCenterDeleteResponse>(await this.callApi(params, req, runtime), new $_model.CostCenterDeleteResponse({}));
  }

  /**
   * 删除成本中心
   * 
   * @param request - CostCenterDeleteRequest
   * @returns CostCenterDeleteResponse
   */
  async costCenterDelete(request: $_model.CostCenterDeleteRequest): Promise<$_model.CostCenterDeleteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CostCenterDeleteHeaders({ });
    return await this.costCenterDeleteWithOptions(request, headers, runtime);
  }

  /**
   * 修改成本中心
   * 
   * @param request - CostCenterModifyRequest
   * @param headers - CostCenterModifyHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CostCenterModifyResponse
   */
  async costCenterModifyWithOptions(request: $_model.CostCenterModifyRequest, headers: $_model.CostCenterModifyHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CostCenterModifyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alipayNo)) {
      body["alipay_no"] = request.alipayNo;
    }

    if (!$dara.isNull(request.disable)) {
      body["disable"] = request.disable;
    }

    if (!$dara.isNull(request.number)) {
      body["number"] = request.number;
    }

    if (!$dara.isNull(request.scope)) {
      body["scope"] = request.scope;
    }

    if (!$dara.isNull(request.thirdpartId)) {
      body["thirdpart_id"] = request.thirdpartId;
    }

    if (!$dara.isNull(request.title)) {
      body["title"] = request.title;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CostCenterModify",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/costcenter/v1/modify-costcenter`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CostCenterModifyResponse>(await this.callApi(params, req, runtime), new $_model.CostCenterModifyResponse({}));
  }

  /**
   * 修改成本中心
   * 
   * @param request - CostCenterModifyRequest
   * @returns CostCenterModifyResponse
   */
  async costCenterModify(request: $_model.CostCenterModifyRequest): Promise<$_model.CostCenterModifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CostCenterModifyHeaders({ });
    return await this.costCenterModifyWithOptions(request, headers, runtime);
  }

  /**
   * 查看成本中心
   * 
   * @param request - CostCenterQueryRequest
   * @param headers - CostCenterQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CostCenterQueryResponse
   */
  async costCenterQueryWithOptions(request: $_model.CostCenterQueryRequest, headers: $_model.CostCenterQueryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CostCenterQueryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.disable)) {
      query["disable"] = request.disable;
    }

    if (!$dara.isNull(request.needOrgEntity)) {
      query["need_org_entity"] = request.needOrgEntity;
    }

    if (!$dara.isNull(request.thirdpartId)) {
      query["thirdpart_id"] = request.thirdpartId;
    }

    if (!$dara.isNull(request.title)) {
      query["title"] = request.title;
    }

    if (!$dara.isNull(request.userId)) {
      query["user_id"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CostCenterQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/costcenter/v1/costcenter`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CostCenterQueryResponse>(await this.callApi(params, req, runtime), new $_model.CostCenterQueryResponse({}));
  }

  /**
   * 查看成本中心
   * 
   * @param request - CostCenterQueryRequest
   * @returns CostCenterQueryResponse
   */
  async costCenterQuery(request: $_model.CostCenterQueryRequest): Promise<$_model.CostCenterQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CostCenterQueryHeaders({ });
    return await this.costCenterQueryWithOptions(request, headers, runtime);
  }

  /**
   * 保存成本中心
   * 
   * @param request - CostCenterSaveRequest
   * @param headers - CostCenterSaveHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CostCenterSaveResponse
   */
  async costCenterSaveWithOptions(request: $_model.CostCenterSaveRequest, headers: $_model.CostCenterSaveHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CostCenterSaveResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alipayNo)) {
      body["alipay_no"] = request.alipayNo;
    }

    if (!$dara.isNull(request.disable)) {
      body["disable"] = request.disable;
    }

    if (!$dara.isNull(request.number)) {
      body["number"] = request.number;
    }

    if (!$dara.isNull(request.scope)) {
      body["scope"] = request.scope;
    }

    if (!$dara.isNull(request.thirdpartId)) {
      body["thirdpart_id"] = request.thirdpartId;
    }

    if (!$dara.isNull(request.title)) {
      body["title"] = request.title;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CostCenterSave",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/costcenter/v1/save-costcenter`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CostCenterSaveResponse>(await this.callApi(params, req, runtime), new $_model.CostCenterSaveResponse({}));
  }

  /**
   * 保存成本中心
   * 
   * @param request - CostCenterSaveRequest
   * @returns CostCenterSaveResponse
   */
  async costCenterSave(request: $_model.CostCenterSaveRequest): Promise<$_model.CostCenterSaveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CostCenterSaveHeaders({ });
    return await this.costCenterSaveWithOptions(request, headers, runtime);
  }

  /**
   * 创建企业自定义角色
   * 
   * @param request - CreateCustomRoleRequest
   * @param headers - CreateCustomRoleHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCustomRoleResponse
   */
  async createCustomRoleWithOptions(request: $_model.CreateCustomRoleRequest, headers: $_model.CreateCustomRoleHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCustomRoleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.roleId)) {
      body["role_id"] = request.roleId;
    }

    if (!$dara.isNull(request.roleName)) {
      body["role_name"] = request.roleName;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCustomRole",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/role/v1/customRoles/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCustomRoleResponse>(await this.callApi(params, req, runtime), new $_model.CreateCustomRoleResponse({}));
  }

  /**
   * 创建企业自定义角色
   * 
   * @param request - CreateCustomRoleRequest
   * @returns CreateCustomRoleResponse
   */
  async createCustomRole(request: $_model.CreateCustomRoleRequest): Promise<$_model.CreateCustomRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CreateCustomRoleHeaders({ });
    return await this.createCustomRoleWithOptions(request, headers, runtime);
  }

  /**
   * 创建子企业
   * 
   * @param request - CreateSubCorpRequest
   * @param headers - CreateSubCorpHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSubCorpResponse
   */
  async createSubCorpWithOptions(request: $_model.CreateSubCorpRequest, headers: $_model.CreateSubCorpHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSubCorpResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.outerCorpId)) {
      body["outer_corp_id"] = request.outerCorpId;
    }

    if (!$dara.isNull(request.outerCorpName)) {
      body["outer_corp_name"] = request.outerCorpName;
    }

    if (!$dara.isNull(request.userId)) {
      body["user_id"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSubCorp",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/sub_corps/v1/corps`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSubCorpResponse>(await this.callApi(params, req, runtime), new $_model.CreateSubCorpResponse({}));
  }

  /**
   * 创建子企业
   * 
   * @param request - CreateSubCorpRequest
   * @returns CreateSubCorpResponse
   */
  async createSubCorp(request: $_model.CreateSubCorpRequest): Promise<$_model.CreateSubCorpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CreateSubCorpHeaders({ });
    return await this.createSubCorpWithOptions(request, headers, runtime);
  }

  /**
   * 删除企业自定义角色
   * 
   * @param request - DeleteCustomRoleRequest
   * @param headers - DeleteCustomRoleHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomRoleResponse
   */
  async deleteCustomRoleWithOptions(request: $_model.DeleteCustomRoleRequest, headers: $_model.DeleteCustomRoleHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCustomRoleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.roleId)) {
      body["role_id"] = request.roleId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCustomRole",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/role/v1/customRoles/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCustomRoleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCustomRoleResponse({}));
  }

  /**
   * 删除企业自定义角色
   * 
   * @param request - DeleteCustomRoleRequest
   * @returns DeleteCustomRoleResponse
   */
  async deleteCustomRole(request: $_model.DeleteCustomRoleRequest): Promise<$_model.DeleteCustomRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeleteCustomRoleHeaders({ });
    return await this.deleteCustomRoleWithOptions(request, headers, runtime);
  }

  /**
   * 删除企业部门
   * 
   * @param request - DeleteDepartmentRequest
   * @param headers - DeleteDepartmentHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDepartmentResponse
   */
  async deleteDepartmentWithOptions(request: $_model.DeleteDepartmentRequest, headers: $_model.DeleteDepartmentHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDepartmentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.outDeptId)) {
      body["out_dept_id"] = request.outDeptId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDepartment",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/department/v2/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDepartmentResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDepartmentResponse({}));
  }

  /**
   * 删除企业部门
   * 
   * @param request - DeleteDepartmentRequest
   * @returns DeleteDepartmentResponse
   */
  async deleteDepartment(request: $_model.DeleteDepartmentRequest): Promise<$_model.DeleteDepartmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeleteDepartmentHeaders({ });
    return await this.deleteDepartmentWithOptions(request, headers, runtime);
  }

  /**
   * 批量删除企业自定义角色下人员
   * 
   * @param tmpReq - DeleteEmployeesFromCustomRoleRequest
   * @param headers - DeleteEmployeesFromCustomRoleHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEmployeesFromCustomRoleResponse
   */
  async deleteEmployeesFromCustomRoleWithOptions(tmpReq: $_model.DeleteEmployeesFromCustomRoleRequest, headers: $_model.DeleteEmployeesFromCustomRoleHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEmployeesFromCustomRoleResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteEmployeesFromCustomRoleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.userIdList)) {
      request.userIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userIdList, "user_id_list", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.roleId)) {
      body["role_id"] = request.roleId;
    }

    if (!$dara.isNull(request.userIdListShrink)) {
      body["user_id_list"] = request.userIdListShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEmployeesFromCustomRole",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/role/v1/customRoleEmployees/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEmployeesFromCustomRoleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEmployeesFromCustomRoleResponse({}));
  }

  /**
   * 批量删除企业自定义角色下人员
   * 
   * @param request - DeleteEmployeesFromCustomRoleRequest
   * @returns DeleteEmployeesFromCustomRoleResponse
   */
  async deleteEmployeesFromCustomRole(request: $_model.DeleteEmployeesFromCustomRoleRequest): Promise<$_model.DeleteEmployeesFromCustomRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeleteEmployeesFromCustomRoleHeaders({ });
    return await this.deleteEmployeesFromCustomRoleWithOptions(request, headers, runtime);
  }

  /**
   * 删除发票抬头适用人员
   * 
   * @param tmpReq - DeleteInvoiceEntityRequest
   * @param headers - DeleteInvoiceEntityHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInvoiceEntityResponse
   */
  async deleteInvoiceEntityWithOptions(tmpReq: $_model.DeleteInvoiceEntityRequest, headers: $_model.DeleteInvoiceEntityHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteInvoiceEntityResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteInvoiceEntityShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.entities)) {
      request.entitiesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.entities, "entities", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.delAll)) {
      query["del_all"] = request.delAll;
    }

    if (!$dara.isNull(request.entitiesShrink)) {
      query["entities"] = request.entitiesShrink;
    }

    if (!$dara.isNull(request.thirdPartId)) {
      query["third_part_id"] = request.thirdPartId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInvoiceEntity",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/invoice/v1/entities`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteInvoiceEntityResponse>(await this.callApi(params, req, runtime), new $_model.DeleteInvoiceEntityResponse({}));
  }

  /**
   * 删除发票抬头适用人员
   * 
   * @param request - DeleteInvoiceEntityRequest
   * @returns DeleteInvoiceEntityResponse
   */
  async deleteInvoiceEntity(request: $_model.DeleteInvoiceEntityRequest): Promise<$_model.DeleteInvoiceEntityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeleteInvoiceEntityHeaders({ });
    return await this.deleteInvoiceEntityWithOptions(request, headers, runtime);
  }

  /**
   * 同步外部平台部门信息至商旅内部
   * 
   * @param tmpReq - DepartmentSaveRequest
   * @param headers - DepartmentSaveHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DepartmentSaveResponse
   */
  async departmentSaveWithOptions(tmpReq: $_model.DepartmentSaveRequest, headers: $_model.DepartmentSaveHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DepartmentSaveResponse> {
    tmpReq.validate();
    let request = new $_model.DepartmentSaveShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.departList)) {
      request.departListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.departList, "depart_list", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.departListShrink)) {
      body["depart_list"] = request.departListShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DepartmentSave",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/department/v1/department`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DepartmentSaveResponse>(await this.callApi(params, req, runtime), new $_model.DepartmentSaveResponse({}));
  }

  /**
   * 同步外部平台部门信息至商旅内部
   * 
   * @param request - DepartmentSaveRequest
   * @returns DepartmentSaveResponse
   */
  async departmentSave(request: $_model.DepartmentSaveRequest): Promise<$_model.DepartmentSaveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DepartmentSaveHeaders({ });
    return await this.departmentSaveWithOptions(request, headers, runtime);
  }

  /**
   * 批量申请电子行程单
   * 
   * @param tmpReq - ElectronicItineraryBatchApplyRequest
   * @param headers - ElectronicItineraryBatchApplyHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ElectronicItineraryBatchApplyResponse
   */
  async electronicItineraryBatchApplyWithOptions(tmpReq: $_model.ElectronicItineraryBatchApplyRequest, headers: $_model.ElectronicItineraryBatchApplyHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ElectronicItineraryBatchApplyResponse> {
    tmpReq.validate();
    let request = new $_model.ElectronicItineraryBatchApplyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.applyItineraryList)) {
      request.applyItineraryListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.applyItineraryList, "apply_itinerary_list", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applyItineraryListShrink)) {
      body["apply_itinerary_list"] = request.applyItineraryListShrink;
    }

    if (!$dara.isNull(request.canReprint)) {
      body["can_reprint"] = request.canReprint;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ElectronicItineraryBatchApply",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/invoice/v1/apply-itinerary-batch-task`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ElectronicItineraryBatchApplyResponse>(await this.callApi(params, req, runtime), new $_model.ElectronicItineraryBatchApplyResponse({}));
  }

  /**
   * 批量申请电子行程单
   * 
   * @param request - ElectronicItineraryBatchApplyRequest
   * @returns ElectronicItineraryBatchApplyResponse
   */
  async electronicItineraryBatchApply(request: $_model.ElectronicItineraryBatchApplyRequest): Promise<$_model.ElectronicItineraryBatchApplyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ElectronicItineraryBatchApplyHeaders({ });
    return await this.electronicItineraryBatchApplyWithOptions(request, headers, runtime);
  }

  /**
   * 获取电子行程单申请结果
   * 
   * @param request - ElectronicItineraryGetApplyResultRequest
   * @param headers - ElectronicItineraryGetApplyResultHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ElectronicItineraryGetApplyResultResponse
   */
  async electronicItineraryGetApplyResultWithOptions(request: $_model.ElectronicItineraryGetApplyResultRequest, headers: $_model.ElectronicItineraryGetApplyResultHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ElectronicItineraryGetApplyResultResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.batchApplyNo)) {
      query["batch_apply_no"] = request.batchApplyNo;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ElectronicItineraryGetApplyResult",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/invoice/v1/get-itinerary-batch-task`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ElectronicItineraryGetApplyResultResponse>(await this.callApi(params, req, runtime), new $_model.ElectronicItineraryGetApplyResultResponse({}));
  }

  /**
   * 获取电子行程单申请结果
   * 
   * @param request - ElectronicItineraryGetApplyResultRequest
   * @returns ElectronicItineraryGetApplyResultResponse
   */
  async electronicItineraryGetApplyResult(request: $_model.ElectronicItineraryGetApplyResultRequest): Promise<$_model.ElectronicItineraryGetApplyResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ElectronicItineraryGetApplyResultHeaders({ });
    return await this.electronicItineraryGetApplyResultWithOptions(request, headers, runtime);
  }

  /**
   * 增加成本中心人员信息
   * 
   * @param tmpReq - EntityAddRequest
   * @param headers - EntityAddHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EntityAddResponse
   */
  async entityAddWithOptions(tmpReq: $_model.EntityAddRequest, headers: $_model.EntityAddHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.EntityAddResponse> {
    tmpReq.validate();
    let request = new $_model.EntityAddShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.entityDOList)) {
      request.entityDOListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.entityDOList, "entity_d_o_list", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.entityDOListShrink)) {
      body["entity_d_o_list"] = request.entityDOListShrink;
    }

    if (!$dara.isNull(request.thirdpartId)) {
      body["thirdpart_id"] = request.thirdpartId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EntityAdd",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/costcenter/v1/add-entity`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EntityAddResponse>(await this.callApi(params, req, runtime), new $_model.EntityAddResponse({}));
  }

  /**
   * 增加成本中心人员信息
   * 
   * @param request - EntityAddRequest
   * @returns EntityAddResponse
   */
  async entityAdd(request: $_model.EntityAddRequest): Promise<$_model.EntityAddResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.EntityAddHeaders({ });
    return await this.entityAddWithOptions(request, headers, runtime);
  }

  /**
   * 删除成本中心人员信息
   * 
   * @param tmpReq - EntityDeleteRequest
   * @param headers - EntityDeleteHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EntityDeleteResponse
   */
  async entityDeleteWithOptions(tmpReq: $_model.EntityDeleteRequest, headers: $_model.EntityDeleteHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.EntityDeleteResponse> {
    tmpReq.validate();
    let request = new $_model.EntityDeleteShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.entityDOList)) {
      request.entityDOListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.entityDOList, "entity_d_o_list", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.delAll)) {
      query["del_all"] = request.delAll;
    }

    if (!$dara.isNull(request.thirdpartId)) {
      query["thirdpart_id"] = request.thirdpartId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.entityDOListShrink)) {
      body["entity_d_o_list"] = request.entityDOListShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EntityDelete",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/costcenter/v1/entity/action/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EntityDeleteResponse>(await this.callApi(params, req, runtime), new $_model.EntityDeleteResponse({}));
  }

  /**
   * 删除成本中心人员信息
   * 
   * @param request - EntityDeleteRequest
   * @returns EntityDeleteResponse
   */
  async entityDelete(request: $_model.EntityDeleteRequest): Promise<$_model.EntityDeleteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.EntityDeleteHeaders({ });
    return await this.entityDeleteWithOptions(request, headers, runtime);
  }

  /**
   * 设置成本中心人员信息
   * 
   * @param tmpReq - EntitySetRequest
   * @param headers - EntitySetHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EntitySetResponse
   */
  async entitySetWithOptions(tmpReq: $_model.EntitySetRequest, headers: $_model.EntitySetHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.EntitySetResponse> {
    tmpReq.validate();
    let request = new $_model.EntitySetShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.entityDOList)) {
      request.entityDOListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.entityDOList, "entity_d_o_list", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.entityDOListShrink)) {
      body["entity_d_o_list"] = request.entityDOListShrink;
    }

    if (!$dara.isNull(request.thirdpartId)) {
      body["thirdpart_id"] = request.thirdpartId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EntitySet",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/costcenter/v1/set-entity`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EntitySetResponse>(await this.callApi(params, req, runtime), new $_model.EntitySetResponse({}));
  }

  /**
   * 设置成本中心人员信息
   * 
   * @param request - EntitySetRequest
   * @returns EntitySetResponse
   */
  async entitySet(request: $_model.EntitySetRequest): Promise<$_model.EntitySetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.EntitySetHeaders({ });
    return await this.entitySetWithOptions(request, headers, runtime);
  }

  /**
   * 预估价格查询
   * 
   * @param request - EstimatedPriceQueryRequest
   * @param headers - EstimatedPriceQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EstimatedPriceQueryResponse
   */
  async estimatedPriceQueryWithOptions(request: $_model.EstimatedPriceQueryRequest, headers: $_model.EstimatedPriceQueryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.EstimatedPriceQueryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.arrCity)) {
      query["arr_city"] = request.arrCity;
    }

    if (!$dara.isNull(request.category)) {
      query["category"] = request.category;
    }

    if (!$dara.isNull(request.depCity)) {
      query["dep_city"] = request.depCity;
    }

    if (!$dara.isNull(request.endTime)) {
      query["end_time"] = request.endTime;
    }

    if (!$dara.isNull(request.itineraryId)) {
      query["itinerary_id"] = request.itineraryId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["start_time"] = request.startTime;
    }

    if (!$dara.isNull(request.subCorpId)) {
      query["sub_corp_id"] = request.subCorpId;
    }

    if (!$dara.isNull(request.userId)) {
      query["user_id"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EstimatedPriceQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/costcenter/v1/estimated-price`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.EstimatedPriceQueryResponse>(await this.callApi(params, req, runtime), new $_model.EstimatedPriceQueryResponse({}));
  }

  /**
   * 预估价格查询
   * 
   * @param request - EstimatedPriceQueryRequest
   * @returns EstimatedPriceQueryResponse
   */
  async estimatedPriceQuery(request: $_model.EstimatedPriceQueryRequest): Promise<$_model.EstimatedPriceQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.EstimatedPriceQueryHeaders({ });
    return await this.estimatedPriceQueryWithOptions(request, headers, runtime);
  }

  /**
   * 超标审批结果同步
   * 
   * @param request - ExceedApplySyncRequest
   * @param headers - ExceedApplySyncHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExceedApplySyncResponse
   */
  async exceedApplySyncWithOptions(request: $_model.ExceedApplySyncRequest, headers: $_model.ExceedApplySyncHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ExceedApplySyncResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applyId)) {
      query["apply_id"] = request.applyId;
    }

    if (!$dara.isNull(request.bizCategory)) {
      query["biz_category"] = request.bizCategory;
    }

    if (!$dara.isNull(request.remark)) {
      query["remark"] = request.remark;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    if (!$dara.isNull(request.thirdpartyFlowId)) {
      query["thirdparty_flow_id"] = request.thirdpartyFlowId;
    }

    if (!$dara.isNull(request.userId)) {
      query["user_id"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExceedApplySync",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/apply/v1/syn-exceed`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExceedApplySyncResponse>(await this.callApi(params, req, runtime), new $_model.ExceedApplySyncResponse({}));
  }

  /**
   * 超标审批结果同步
   * 
   * @param request - ExceedApplySyncRequest
   * @returns ExceedApplySyncResponse
   */
  async exceedApplySync(request: $_model.ExceedApplySyncRequest): Promise<$_model.ExceedApplySyncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ExceedApplySyncHeaders({ });
    return await this.exceedApplySyncWithOptions(request, headers, runtime);
  }

  /**
   * 添加外部出行人与证件信息
   * 
   * @param tmpReq - ExternalUserAddRequest
   * @param headers - ExternalUserAddHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExternalUserAddResponse
   */
  async externalUserAddWithOptions(tmpReq: $_model.ExternalUserAddRequest, headers: $_model.ExternalUserAddHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ExternalUserAddResponse> {
    tmpReq.validate();
    let request = new $_model.ExternalUserAddShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.certRequestList)) {
      request.certRequestListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.certRequestList, "cert_request_list", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.birthday)) {
      body["birthday"] = request.birthday;
    }

    if (!$dara.isNull(request.certRequestListShrink)) {
      body["cert_request_list"] = request.certRequestListShrink;
    }

    if (!$dara.isNull(request.email)) {
      body["email"] = request.email;
    }

    if (!$dara.isNull(request.externalUserId)) {
      body["external_user_id"] = request.externalUserId;
    }

    if (!$dara.isNull(request.phone)) {
      body["phone"] = request.phone;
    }

    if (!$dara.isNull(request.realName)) {
      body["real_name"] = request.realName;
    }

    if (!$dara.isNull(request.realNameEn)) {
      body["real_name_en"] = request.realNameEn;
    }

    if (!$dara.isNull(request.userType)) {
      body["user_type"] = request.userType;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExternalUserAdd",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/user/v1/externalUsers`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExternalUserAddResponse>(await this.callApi(params, req, runtime), new $_model.ExternalUserAddResponse({}));
  }

  /**
   * 添加外部出行人与证件信息
   * 
   * @param request - ExternalUserAddRequest
   * @returns ExternalUserAddResponse
   */
  async externalUserAdd(request: $_model.ExternalUserAddRequest): Promise<$_model.ExternalUserAddResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ExternalUserAddHeaders({ });
    return await this.externalUserAddWithOptions(request, headers, runtime);
  }

  /**
   * 删除外部出行人
   * 
   * @param headers - ExternalUserDeleteHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExternalUserDeleteResponse
   */
  async externalUserDeleteWithOptions(externalUserId: string, headers: $_model.ExternalUserDeleteHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ExternalUserDeleteResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "ExternalUserDelete",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/user/v1/externalUsers/${$dara.URL.percentEncode(externalUserId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExternalUserDeleteResponse>(await this.callApi(params, req, runtime), new $_model.ExternalUserDeleteResponse({}));
  }

  /**
   * 删除外部出行人
   * @returns ExternalUserDeleteResponse
   */
  async externalUserDelete(externalUserId: string): Promise<$_model.ExternalUserDeleteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ExternalUserDeleteHeaders({ });
    return await this.externalUserDeleteWithOptions(externalUserId, headers, runtime);
  }

  /**
   * 查询外部出行人
   * 
   * @param headers - ExternalUserQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExternalUserQueryResponse
   */
  async externalUserQueryWithOptions(externalUserId: string, headers: $_model.ExternalUserQueryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ExternalUserQueryResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "ExternalUserQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/user/v1/externalUsers/${$dara.URL.percentEncode(externalUserId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExternalUserQueryResponse>(await this.callApi(params, req, runtime), new $_model.ExternalUserQueryResponse({}));
  }

  /**
   * 查询外部出行人
   * @returns ExternalUserQueryResponse
   */
  async externalUserQuery(externalUserId: string): Promise<$_model.ExternalUserQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ExternalUserQueryHeaders({ });
    return await this.externalUserQueryWithOptions(externalUserId, headers, runtime);
  }

  /**
   * 修改外部出行人与证件信息
   * 
   * @param tmpReq - ExternalUserUpdateRequest
   * @param headers - ExternalUserUpdateHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExternalUserUpdateResponse
   */
  async externalUserUpdateWithOptions(externalUserId: string, tmpReq: $_model.ExternalUserUpdateRequest, headers: $_model.ExternalUserUpdateHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ExternalUserUpdateResponse> {
    tmpReq.validate();
    let request = new $_model.ExternalUserUpdateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.certRequestList)) {
      request.certRequestListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.certRequestList, "cert_request_list", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.birthday)) {
      body["birthday"] = request.birthday;
    }

    if (!$dara.isNull(request.certRequestListShrink)) {
      body["cert_request_list"] = request.certRequestListShrink;
    }

    if (!$dara.isNull(request.email)) {
      body["email"] = request.email;
    }

    if (!$dara.isNull(request.phone)) {
      body["phone"] = request.phone;
    }

    if (!$dara.isNull(request.realName)) {
      body["real_name"] = request.realName;
    }

    if (!$dara.isNull(request.realNameEn)) {
      body["real_name_en"] = request.realNameEn;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExternalUserUpdate",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/user/v1/externalUsers/${$dara.URL.percentEncode(externalUserId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExternalUserUpdateResponse>(await this.callApi(params, req, runtime), new $_model.ExternalUserUpdateResponse({}));
  }

  /**
   * 修改外部出行人与证件信息
   * 
   * @param request - ExternalUserUpdateRequest
   * @returns ExternalUserUpdateResponse
   */
  async externalUserUpdate(externalUserId: string, request: $_model.ExternalUserUpdateRequest): Promise<$_model.ExternalUserUpdateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ExternalUserUpdateHeaders({ });
    return await this.externalUserUpdateWithOptions(externalUserId, request, headers, runtime);
  }

  /**
   * 查询机票记账数据
   * 
   * @param request - FlightBillSettlementQueryRequest
   * @param headers - FlightBillSettlementQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FlightBillSettlementQueryResponse
   */
  async flightBillSettlementQueryWithOptions(request: $_model.FlightBillSettlementQueryRequest, headers: $_model.FlightBillSettlementQueryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.FlightBillSettlementQueryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.billBatch)) {
      query["bill_batch"] = request.billBatch;
    }

    if (!$dara.isNull(request.orderId)) {
      query["order_id"] = request.orderId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["page_no"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!$dara.isNull(request.periodEnd)) {
      query["period_end"] = request.periodEnd;
    }

    if (!$dara.isNull(request.periodStart)) {
      query["period_start"] = request.periodStart;
    }

    if (!$dara.isNull(request.scrollId)) {
      query["scroll_id"] = request.scrollId;
    }

    if (!$dara.isNull(request.scrollMod)) {
      query["scroll_mod"] = request.scrollMod;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FlightBillSettlementQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/flight/v1/bill-settlement`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.FlightBillSettlementQueryResponse>(await this.callApi(params, req, runtime), new $_model.FlightBillSettlementQueryResponse({}));
  }

  /**
   * 查询机票记账数据
   * 
   * @param request - FlightBillSettlementQueryRequest
   * @returns FlightBillSettlementQueryResponse
   */
  async flightBillSettlementQuery(request: $_model.FlightBillSettlementQueryRequest): Promise<$_model.FlightBillSettlementQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.FlightBillSettlementQueryHeaders({ });
    return await this.flightBillSettlementQueryWithOptions(request, headers, runtime);
  }

  /**
   * 航班订单取消
   * 
   * @param request - FlightCancelOrderRequest
   * @param headers - FlightCancelOrderHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FlightCancelOrderResponse
   */
  async flightCancelOrderWithOptions(request: $_model.FlightCancelOrderRequest, headers: $_model.FlightCancelOrderHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.FlightCancelOrderResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.disOrderId)) {
      query["dis_order_id"] = request.disOrderId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FlightCancelOrder",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-flight/v1/order/action/cancel`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.FlightCancelOrderResponse>(await this.callApi(params, req, runtime), new $_model.FlightCancelOrderResponse({}));
  }

  /**
   * 航班订单取消
   * 
   * @param request - FlightCancelOrderRequest
   * @returns FlightCancelOrderResponse
   */
  async flightCancelOrder(request: $_model.FlightCancelOrderRequest): Promise<$_model.FlightCancelOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.FlightCancelOrderHeaders({ });
    return await this.flightCancelOrderWithOptions(request, headers, runtime);
  }

  /**
   * 机票订单取消
   * 
   * @param request - FlightCancelOrderV2Request
   * @param headers - FlightCancelOrderV2Headers
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FlightCancelOrderV2Response
   */
  async flightCancelOrderV2WithOptions(request: $_model.FlightCancelOrderV2Request, headers: $_model.FlightCancelOrderV2Headers, runtime: $dara.RuntimeOptions): Promise<$_model.FlightCancelOrderV2Response> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.isvName)) {
      query["isv_name"] = request.isvName;
    }

    if (!$dara.isNull(request.orderId)) {
      query["order_id"] = request.orderId;
    }

    if (!$dara.isNull(request.outOrderId)) {
      query["out_order_id"] = request.outOrderId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FlightCancelOrderV2",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-flight/v2/order/action/cancel`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.FlightCancelOrderV2Response>(await this.callApi(params, req, runtime), new $_model.FlightCancelOrderV2Response({}));
  }

  /**
   * 机票订单取消
   * 
   * @param request - FlightCancelOrderV2Request
   * @returns FlightCancelOrderV2Response
   */
  async flightCancelOrderV2(request: $_model.FlightCancelOrderV2Request): Promise<$_model.FlightCancelOrderV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.FlightCancelOrderV2Headers({ });
    return await this.flightCancelOrderV2WithOptions(request, headers, runtime);
  }

  /**
   * 航班订单创建
   * 
   * @param tmpReq - FlightCreateOrderRequest
   * @param headers - FlightCreateOrderHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FlightCreateOrderResponse
   */
  async flightCreateOrderWithOptions(tmpReq: $_model.FlightCreateOrderRequest, headers: $_model.FlightCreateOrderHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.FlightCreateOrderResponse> {
    tmpReq.validate();
    let request = new $_model.FlightCreateOrderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.contactInfo)) {
      request.contactInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.contactInfo, "contact_info", "json");
    }

    if (!$dara.isNull(tmpReq.orderAttr)) {
      request.orderAttrShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.orderAttr, "order_attr", "json");
    }

    if (!$dara.isNull(tmpReq.travelerInfoList)) {
      request.travelerInfoListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.travelerInfoList, "traveler_info_list", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.arrAirportCode)) {
      body["arr_airport_code"] = request.arrAirportCode;
    }

    if (!$dara.isNull(request.arrCityCode)) {
      body["arr_city_code"] = request.arrCityCode;
    }

    if (!$dara.isNull(request.autoPay)) {
      body["auto_pay"] = request.autoPay;
    }

    if (!$dara.isNull(request.buyerName)) {
      body["buyer_name"] = request.buyerName;
    }

    if (!$dara.isNull(request.buyerUniqueKey)) {
      body["buyer_unique_key"] = request.buyerUniqueKey;
    }

    if (!$dara.isNull(request.contactInfoShrink)) {
      body["contact_info"] = request.contactInfoShrink;
    }

    if (!$dara.isNull(request.depAirportCode)) {
      body["dep_airport_code"] = request.depAirportCode;
    }

    if (!$dara.isNull(request.depCityCode)) {
      body["dep_city_code"] = request.depCityCode;
    }

    if (!$dara.isNull(request.depDate)) {
      body["dep_date"] = request.depDate;
    }

    if (!$dara.isNull(request.disOrderId)) {
      body["dis_order_id"] = request.disOrderId;
    }

    if (!$dara.isNull(request.orderAttrShrink)) {
      body["order_attr"] = request.orderAttrShrink;
    }

    if (!$dara.isNull(request.orderParams)) {
      body["order_params"] = request.orderParams;
    }

    if (!$dara.isNull(request.otaItemId)) {
      body["ota_item_id"] = request.otaItemId;
    }

    if (!$dara.isNull(request.price)) {
      body["price"] = request.price;
    }

    if (!$dara.isNull(request.receiptAddress)) {
      body["receipt_address"] = request.receiptAddress;
    }

    if (!$dara.isNull(request.receiptTarget)) {
      body["receipt_target"] = request.receiptTarget;
    }

    if (!$dara.isNull(request.receiptTitle)) {
      body["receipt_title"] = request.receiptTitle;
    }

    if (!$dara.isNull(request.travelerInfoListShrink)) {
      body["traveler_info_list"] = request.travelerInfoListShrink;
    }

    if (!$dara.isNull(request.tripType)) {
      body["trip_type"] = request.tripType;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "FlightCreateOrder",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-flight/v1/order/action/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FlightCreateOrderResponse>(await this.callApi(params, req, runtime), new $_model.FlightCreateOrderResponse({}));
  }

  /**
   * 航班订单创建
   * 
   * @param request - FlightCreateOrderRequest
   * @returns FlightCreateOrderResponse
   */
  async flightCreateOrder(request: $_model.FlightCreateOrderRequest): Promise<$_model.FlightCreateOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.FlightCreateOrderHeaders({ });
    return await this.flightCreateOrderWithOptions(request, headers, runtime);
  }

  /**
   * 机票订单创建
   * 
   * @param tmpReq - FlightCreateOrderV2Request
   * @param headers - FlightCreateOrderV2Headers
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FlightCreateOrderV2Response
   */
  async flightCreateOrderV2WithOptions(tmpReq: $_model.FlightCreateOrderV2Request, headers: $_model.FlightCreateOrderV2Headers, runtime: $dara.RuntimeOptions): Promise<$_model.FlightCreateOrderV2Response> {
    tmpReq.validate();
    let request = new $_model.FlightCreateOrderV2ShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.contactInfo)) {
      request.contactInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.contactInfo, "contact_info", "json");
    }

    if (!$dara.isNull(tmpReq.travelers)) {
      request.travelersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.travelers, "travelers", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.asyncCreateOrderKey)) {
      body["async_create_order_key"] = request.asyncCreateOrderKey;
    }

    if (!$dara.isNull(request.asyncCreateOrderMode)) {
      body["async_create_order_mode"] = request.asyncCreateOrderMode;
    }

    if (!$dara.isNull(request.btripUserId)) {
      body["btrip_user_id"] = request.btripUserId;
    }

    if (!$dara.isNull(request.buyerName)) {
      body["buyer_name"] = request.buyerName;
    }

    if (!$dara.isNull(request.contactInfoShrink)) {
      body["contact_info"] = request.contactInfoShrink;
    }

    if (!$dara.isNull(request.isvName)) {
      body["isv_name"] = request.isvName;
    }

    if (!$dara.isNull(request.otaItemId)) {
      body["ota_item_id"] = request.otaItemId;
    }

    if (!$dara.isNull(request.outOrderId)) {
      body["out_order_id"] = request.outOrderId;
    }

    if (!$dara.isNull(request.totalPriceCent)) {
      body["total_price_cent"] = request.totalPriceCent;
    }

    if (!$dara.isNull(request.travelersShrink)) {
      body["travelers"] = request.travelersShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "FlightCreateOrderV2",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-flight/v2/order/action/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FlightCreateOrderV2Response>(await this.callApi(params, req, runtime), new $_model.FlightCreateOrderV2Response({}));
  }

  /**
   * 机票订单创建
   * 
   * @param request - FlightCreateOrderV2Request
   * @returns FlightCreateOrderV2Response
   */
  async flightCreateOrderV2(request: $_model.FlightCreateOrderV2Request): Promise<$_model.FlightCreateOrderV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.FlightCreateOrderV2Headers({ });
    return await this.flightCreateOrderV2WithOptions(request, headers, runtime);
  }

  /**
   * 查询飞机超标审批详情
   * 
   * @param request - FlightExceedApplyQueryRequest
   * @param headers - FlightExceedApplyQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FlightExceedApplyQueryResponse
   */
  async flightExceedApplyQueryWithOptions(request: $_model.FlightExceedApplyQueryRequest, headers: $_model.FlightExceedApplyQueryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.FlightExceedApplyQueryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applyId)) {
      query["apply_id"] = request.applyId;
    }

    if (!$dara.isNull(request.businessInstanceId)) {
      query["business_instance_id"] = request.businessInstanceId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FlightExceedApplyQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/apply/v1/flight-exceed`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.FlightExceedApplyQueryResponse>(await this.callApi(params, req, runtime), new $_model.FlightExceedApplyQueryResponse({}));
  }

  /**
   * 查询飞机超标审批详情
   * 
   * @param request - FlightExceedApplyQueryRequest
   * @returns FlightExceedApplyQueryResponse
   */
  async flightExceedApplyQuery(request: $_model.FlightExceedApplyQueryRequest): Promise<$_model.FlightExceedApplyQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.FlightExceedApplyQueryHeaders({ });
    return await this.flightExceedApplyQueryWithOptions(request, headers, runtime);
  }

  /**
   * 查询机票行程单扫描件
   * 
   * @param request - FlightItineraryScanQueryRequest
   * @param headers - FlightItineraryScanQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FlightItineraryScanQueryResponse
   */
  async flightItineraryScanQueryWithOptions(request: $_model.FlightItineraryScanQueryRequest, headers: $_model.FlightItineraryScanQueryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.FlightItineraryScanQueryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.billDate)) {
      query["bill_date"] = request.billDate;
    }

    if (!$dara.isNull(request.billId)) {
      query["bill_id"] = request.billId;
    }

    if (!$dara.isNull(request.invoiceSubTaskId)) {
      query["invoice_sub_task_id"] = request.invoiceSubTaskId;
    }

    if (!$dara.isNull(request.itineraryNum)) {
      query["itinerary_num"] = request.itineraryNum;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["page_no"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!$dara.isNull(request.ticketNo)) {
      query["ticket_no"] = request.ticketNo;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FlightItineraryScanQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/scan/v1/flight-itinerary`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.FlightItineraryScanQueryResponse>(await this.callApi(params, req, runtime), new $_model.FlightItineraryScanQueryResponse({}));
  }

  /**
   * 查询机票行程单扫描件
   * 
   * @param request - FlightItineraryScanQueryRequest
   * @returns FlightItineraryScanQueryResponse
   */
  async flightItineraryScanQuery(request: $_model.FlightItineraryScanQueryRequest): Promise<$_model.FlightItineraryScanQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.FlightItineraryScanQueryHeaders({ });
    return await this.flightItineraryScanQueryWithOptions(request, headers, runtime);
  }

  /**
   * 航班列表搜索
   * 
   * @param request - FlightListingSearchRequest
   * @param headers - FlightListingSearchHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FlightListingSearchResponse
   */
  async flightListingSearchWithOptions(request: $_model.FlightListingSearchRequest, headers: $_model.FlightListingSearchHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.FlightListingSearchResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.airlineCode)) {
      query["airline_code"] = request.airlineCode;
    }

    if (!$dara.isNull(request.arrCityCode)) {
      query["arr_city_code"] = request.arrCityCode;
    }

    if (!$dara.isNull(request.cabinClass)) {
      query["cabin_class"] = request.cabinClass;
    }

    if (!$dara.isNull(request.depCityCode)) {
      query["dep_city_code"] = request.depCityCode;
    }

    if (!$dara.isNull(request.depDate)) {
      query["dep_date"] = request.depDate;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FlightListingSearch",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-flight/v1/flight/action/listing-search`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.FlightListingSearchResponse>(await this.callApi(params, req, runtime), new $_model.FlightListingSearchResponse({}));
  }

  /**
   * 航班列表搜索
   * 
   * @param request - FlightListingSearchRequest
   * @returns FlightListingSearchResponse
   */
  async flightListingSearch(request: $_model.FlightListingSearchRequest): Promise<$_model.FlightListingSearchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.FlightListingSearchHeaders({ });
    return await this.flightListingSearchWithOptions(request, headers, runtime);
  }

  /**
   * 航班列表搜索
   * 
   * @param tmpReq - FlightListingSearchV2Request
   * @param headers - FlightListingSearchV2Headers
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FlightListingSearchV2Response
   */
  async flightListingSearchV2WithOptions(tmpReq: $_model.FlightListingSearchV2Request, headers: $_model.FlightListingSearchV2Headers, runtime: $dara.RuntimeOptions): Promise<$_model.FlightListingSearchV2Response> {
    tmpReq.validate();
    let request = new $_model.FlightListingSearchV2ShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.cabinTypeList)) {
      request.cabinTypeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.cabinTypeList, "cabin_type_list", "json");
    }

    if (!$dara.isNull(tmpReq.searchJourneys)) {
      request.searchJourneysShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.searchJourneys, "search_journeys", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.airlineCode)) {
      query["airline_code"] = request.airlineCode;
    }

    if (!$dara.isNull(request.cabinTypeListShrink)) {
      query["cabin_type_list"] = request.cabinTypeListShrink;
    }

    if (!$dara.isNull(request.directOnly)) {
      query["direct_only"] = request.directOnly;
    }

    if (!$dara.isNull(request.isvName)) {
      query["isv_name"] = request.isvName;
    }

    if (!$dara.isNull(request.needMultiClassPrice)) {
      query["need_multi_class_price"] = request.needMultiClassPrice;
    }

    if (!$dara.isNull(request.needQueryServiceFee)) {
      query["need_query_service_fee"] = request.needQueryServiceFee;
    }

    if (!$dara.isNull(request.needShareFlight)) {
      query["need_share_flight"] = request.needShareFlight;
    }

    if (!$dara.isNull(request.needYCBestPrice)) {
      query["need_y_c_best_price"] = request.needYCBestPrice;
    }

    if (!$dara.isNull(request.searchJourneysShrink)) {
      query["search_journeys"] = request.searchJourneysShrink;
    }

    if (!$dara.isNull(request.searchMode)) {
      query["search_mode"] = request.searchMode;
    }

    if (!$dara.isNull(request.tripType)) {
      query["trip_type"] = request.tripType;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FlightListingSearchV2",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-flight/v2/flight/action/listing-search`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.FlightListingSearchV2Response>(await this.callApi(params, req, runtime), new $_model.FlightListingSearchV2Response({}));
  }

  /**
   * 航班列表搜索
   * 
   * @param request - FlightListingSearchV2Request
   * @returns FlightListingSearchV2Response
   */
  async flightListingSearchV2(request: $_model.FlightListingSearchV2Request): Promise<$_model.FlightListingSearchV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.FlightListingSearchV2Headers({ });
    return await this.flightListingSearchV2WithOptions(request, headers, runtime);
  }

  /**
   * 机票改签申请
   * 
   * @param tmpReq - FlightModifyApplyV2Request
   * @param headers - FlightModifyApplyV2Headers
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FlightModifyApplyV2Response
   */
  async flightModifyApplyV2WithOptions(tmpReq: $_model.FlightModifyApplyV2Request, headers: $_model.FlightModifyApplyV2Headers, runtime: $dara.RuntimeOptions): Promise<$_model.FlightModifyApplyV2Response> {
    tmpReq.validate();
    let request = new $_model.FlightModifyApplyV2ShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.passengerSegmentRelations)) {
      request.passengerSegmentRelationsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.passengerSegmentRelations, "passenger_segment_relations", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cacheKey)) {
      body["cache_key"] = request.cacheKey;
    }

    if (!$dara.isNull(request.contactPhone)) {
      body["contact_phone"] = request.contactPhone;
    }

    if (!$dara.isNull(request.isvName)) {
      body["isv_name"] = request.isvName;
    }

    if (!$dara.isNull(request.itemId)) {
      body["item_id"] = request.itemId;
    }

    if (!$dara.isNull(request.orderId)) {
      body["order_id"] = request.orderId;
    }

    if (!$dara.isNull(request.outOrderId)) {
      body["out_order_id"] = request.outOrderId;
    }

    if (!$dara.isNull(request.outSubOrderId)) {
      body["out_sub_order_id"] = request.outSubOrderId;
    }

    if (!$dara.isNull(request.passengerSegmentRelationsShrink)) {
      body["passenger_segment_relations"] = request.passengerSegmentRelationsShrink;
    }

    if (!$dara.isNull(request.reason)) {
      body["reason"] = request.reason;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["session_id"] = request.sessionId;
    }

    if (!$dara.isNull(request.voluntary)) {
      body["voluntary"] = request.voluntary;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "FlightModifyApplyV2",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-flight/v2/modify/action/apply`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FlightModifyApplyV2Response>(await this.callApi(params, req, runtime), new $_model.FlightModifyApplyV2Response({}));
  }

  /**
   * 机票改签申请
   * 
   * @param request - FlightModifyApplyV2Request
   * @returns FlightModifyApplyV2Response
   */
  async flightModifyApplyV2(request: $_model.FlightModifyApplyV2Request): Promise<$_model.FlightModifyApplyV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.FlightModifyApplyV2Headers({ });
    return await this.flightModifyApplyV2WithOptions(request, headers, runtime);
  }

  /**
   * 机票改签取消
   * 
   * @param request - FlightModifyCancelV2Request
   * @param headers - FlightModifyCancelV2Headers
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FlightModifyCancelV2Response
   */
  async flightModifyCancelV2WithOptions(request: $_model.FlightModifyCancelV2Request, headers: $_model.FlightModifyCancelV2Headers, runtime: $dara.RuntimeOptions): Promise<$_model.FlightModifyCancelV2Response> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.isvName)) {
      query["isv_name"] = request.isvName;
    }

    if (!$dara.isNull(request.orderId)) {
      query["order_id"] = request.orderId;
    }

    if (!$dara.isNull(request.outOrderId)) {
      query["out_order_id"] = request.outOrderId;
    }

    if (!$dara.isNull(request.outSubOrderId)) {
      query["out_sub_order_id"] = request.outSubOrderId;
    }

    if (!$dara.isNull(request.subOrderId)) {
      query["sub_order_id"] = request.subOrderId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FlightModifyCancelV2",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-flight/v2/modify/action/cancel`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.FlightModifyCancelV2Response>(await this.callApi(params, req, runtime), new $_model.FlightModifyCancelV2Response({}));
  }

  /**
   * 机票改签取消
   * 
   * @param request - FlightModifyCancelV2Request
   * @returns FlightModifyCancelV2Response
   */
  async flightModifyCancelV2(request: $_model.FlightModifyCancelV2Request): Promise<$_model.FlightModifyCancelV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.FlightModifyCancelV2Headers({ });
    return await this.flightModifyCancelV2WithOptions(request, headers, runtime);
  }

  /**
   * 机票改签列表搜索
   * 
   * @param tmpReq - FlightModifyListingSearchV2Request
   * @param headers - FlightModifyListingSearchV2Headers
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FlightModifyListingSearchV2Response
   */
  async flightModifyListingSearchV2WithOptions(tmpReq: $_model.FlightModifyListingSearchV2Request, headers: $_model.FlightModifyListingSearchV2Headers, runtime: $dara.RuntimeOptions): Promise<$_model.FlightModifyListingSearchV2Response> {
    tmpReq.validate();
    let request = new $_model.FlightModifyListingSearchV2ShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.cabinClass)) {
      request.cabinClassShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.cabinClass, "cabin_class", "json");
    }

    if (!$dara.isNull(tmpReq.depDate)) {
      request.depDateShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depDate, "dep_date", "json");
    }

    if (!$dara.isNull(tmpReq.passengerSegmentRelations)) {
      request.passengerSegmentRelationsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.passengerSegmentRelations, "passenger_segment_relations", "json");
    }

    if (!$dara.isNull(tmpReq.selectedSegments)) {
      request.selectedSegmentsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.selectedSegments, "selected_segments", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cabinClassShrink)) {
      query["cabin_class"] = request.cabinClassShrink;
    }

    if (!$dara.isNull(request.depDateShrink)) {
      query["dep_date"] = request.depDateShrink;
    }

    if (!$dara.isNull(request.interfaceCallerIsSupportRetry)) {
      query["interface_caller_is_support_retry"] = request.interfaceCallerIsSupportRetry;
    }

    if (!$dara.isNull(request.isvName)) {
      query["isv_name"] = request.isvName;
    }

    if (!$dara.isNull(request.orderId)) {
      query["order_id"] = request.orderId;
    }

    if (!$dara.isNull(request.outOrderId)) {
      query["out_order_id"] = request.outOrderId;
    }

    if (!$dara.isNull(request.passengerSegmentRelationsShrink)) {
      query["passenger_segment_relations"] = request.passengerSegmentRelationsShrink;
    }

    if (!$dara.isNull(request.searchMode)) {
      query["search_mode"] = request.searchMode;
    }

    if (!$dara.isNull(request.searchRetryToken)) {
      query["search_retry_token"] = request.searchRetryToken;
    }

    if (!$dara.isNull(request.selectedSegmentsShrink)) {
      query["selected_segments"] = request.selectedSegmentsShrink;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["session_id"] = request.sessionId;
    }

    if (!$dara.isNull(request.voluntary)) {
      query["voluntary"] = request.voluntary;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FlightModifyListingSearchV2",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-flight/v2/modify/action/listing-search`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.FlightModifyListingSearchV2Response>(await this.callApi(params, req, runtime), new $_model.FlightModifyListingSearchV2Response({}));
  }

  /**
   * 机票改签列表搜索
   * 
   * @param request - FlightModifyListingSearchV2Request
   * @returns FlightModifyListingSearchV2Response
   */
  async flightModifyListingSearchV2(request: $_model.FlightModifyListingSearchV2Request): Promise<$_model.FlightModifyListingSearchV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.FlightModifyListingSearchV2Headers({ });
    return await this.flightModifyListingSearchV2WithOptions(request, headers, runtime);
  }

  /**
   * 机票改签详情
   * 
   * @param request - FlightModifyOrderDetailV2Request
   * @param headers - FlightModifyOrderDetailV2Headers
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FlightModifyOrderDetailV2Response
   */
  async flightModifyOrderDetailV2WithOptions(request: $_model.FlightModifyOrderDetailV2Request, headers: $_model.FlightModifyOrderDetailV2Headers, runtime: $dara.RuntimeOptions): Promise<$_model.FlightModifyOrderDetailV2Response> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.isvName)) {
      query["isv_name"] = request.isvName;
    }

    if (!$dara.isNull(request.modifyApplyId)) {
      query["modify_apply_id"] = request.modifyApplyId;
    }

    if (!$dara.isNull(request.needQueryServiceFee)) {
      query["need_query_service_fee"] = request.needQueryServiceFee;
    }

    if (!$dara.isNull(request.orderId)) {
      query["order_id"] = request.orderId;
    }

    if (!$dara.isNull(request.outModifyApplyId)) {
      query["out_modify_apply_id"] = request.outModifyApplyId;
    }

    if (!$dara.isNull(request.outOrderId)) {
      query["out_order_id"] = request.outOrderId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FlightModifyOrderDetailV2",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-flight/v2/modify/action/detail`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.FlightModifyOrderDetailV2Response>(await this.callApi(params, req, runtime), new $_model.FlightModifyOrderDetailV2Response({}));
  }

  /**
   * 机票改签详情
   * 
   * @param request - FlightModifyOrderDetailV2Request
   * @returns FlightModifyOrderDetailV2Response
   */
  async flightModifyOrderDetailV2(request: $_model.FlightModifyOrderDetailV2Request): Promise<$_model.FlightModifyOrderDetailV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.FlightModifyOrderDetailV2Headers({ });
    return await this.flightModifyOrderDetailV2WithOptions(request, headers, runtime);
  }

  /**
   * 机票改签报价搜索
   * 
   * @param tmpReq - FlightModifyOtaSearchV2Request
   * @param headers - FlightModifyOtaSearchV2Headers
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FlightModifyOtaSearchV2Response
   */
  async flightModifyOtaSearchV2WithOptions(tmpReq: $_model.FlightModifyOtaSearchV2Request, headers: $_model.FlightModifyOtaSearchV2Headers, runtime: $dara.RuntimeOptions): Promise<$_model.FlightModifyOtaSearchV2Response> {
    tmpReq.validate();
    let request = new $_model.FlightModifyOtaSearchV2ShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.cabinClass)) {
      request.cabinClassShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.cabinClass, "cabin_class", "json");
    }

    if (!$dara.isNull(tmpReq.depDate)) {
      request.depDateShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depDate, "dep_date", "json");
    }

    if (!$dara.isNull(tmpReq.passengerSegmentRelations)) {
      request.passengerSegmentRelationsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.passengerSegmentRelations, "passenger_segment_relations", "json");
    }

    if (!$dara.isNull(tmpReq.selectedSegments)) {
      request.selectedSegmentsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.selectedSegments, "selected_segments", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cabinClassShrink)) {
      query["cabin_class"] = request.cabinClassShrink;
    }

    if (!$dara.isNull(request.depDateShrink)) {
      query["dep_date"] = request.depDateShrink;
    }

    if (!$dara.isNull(request.isvName)) {
      query["isv_name"] = request.isvName;
    }

    if (!$dara.isNull(request.orderId)) {
      query["order_id"] = request.orderId;
    }

    if (!$dara.isNull(request.outOrderId)) {
      query["out_order_id"] = request.outOrderId;
    }

    if (!$dara.isNull(request.passengerSegmentRelationsShrink)) {
      query["passenger_segment_relations"] = request.passengerSegmentRelationsShrink;
    }

    if (!$dara.isNull(request.selectedSegmentsShrink)) {
      query["selected_segments"] = request.selectedSegmentsShrink;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["session_id"] = request.sessionId;
    }

    if (!$dara.isNull(request.voluntary)) {
      query["voluntary"] = request.voluntary;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FlightModifyOtaSearchV2",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-flight/v2/modify/action/ota-search`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.FlightModifyOtaSearchV2Response>(await this.callApi(params, req, runtime), new $_model.FlightModifyOtaSearchV2Response({}));
  }

  /**
   * 机票改签报价搜索
   * 
   * @param request - FlightModifyOtaSearchV2Request
   * @returns FlightModifyOtaSearchV2Response
   */
  async flightModifyOtaSearchV2(request: $_model.FlightModifyOtaSearchV2Request): Promise<$_model.FlightModifyOtaSearchV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.FlightModifyOtaSearchV2Headers({ });
    return await this.flightModifyOtaSearchV2WithOptions(request, headers, runtime);
  }

  /**
   * 机票改签支付
   * 
   * @param tmpReq - FlightModifyPayV2Request
   * @param headers - FlightModifyPayV2Headers
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FlightModifyPayV2Response
   */
  async flightModifyPayV2WithOptions(tmpReq: $_model.FlightModifyPayV2Request, headers: $_model.FlightModifyPayV2Headers, runtime: $dara.RuntimeOptions): Promise<$_model.FlightModifyPayV2Response> {
    tmpReq.validate();
    let request = new $_model.FlightModifyPayV2ShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.extParams)) {
      request.extParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extParams, "ext_params", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.extParamsShrink)) {
      body["ext_params"] = request.extParamsShrink;
    }

    if (!$dara.isNull(request.isvName)) {
      body["isv_name"] = request.isvName;
    }

    if (!$dara.isNull(request.modifyPayAmount)) {
      body["modify_pay_amount"] = request.modifyPayAmount;
    }

    if (!$dara.isNull(request.orderId)) {
      body["order_id"] = request.orderId;
    }

    if (!$dara.isNull(request.outOrderId)) {
      body["out_order_id"] = request.outOrderId;
    }

    if (!$dara.isNull(request.outSubOrderId)) {
      body["out_sub_order_id"] = request.outSubOrderId;
    }

    if (!$dara.isNull(request.subOrderId)) {
      body["sub_order_id"] = request.subOrderId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "FlightModifyPayV2",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-flight/v2/modify/action/pay`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FlightModifyPayV2Response>(await this.callApi(params, req, runtime), new $_model.FlightModifyPayV2Response({}));
  }

  /**
   * 机票改签支付
   * 
   * @param request - FlightModifyPayV2Request
   * @returns FlightModifyPayV2Response
   */
  async flightModifyPayV2(request: $_model.FlightModifyPayV2Request): Promise<$_model.FlightModifyPayV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.FlightModifyPayV2Headers({ });
    return await this.flightModifyPayV2WithOptions(request, headers, runtime);
  }

  /**
   * 航班订单明细信息
   * 
   * @param request - FlightOrderDetailInfoRequest
   * @param headers - FlightOrderDetailInfoHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FlightOrderDetailInfoResponse
   */
  async flightOrderDetailInfoWithOptions(request: $_model.FlightOrderDetailInfoRequest, headers: $_model.FlightOrderDetailInfoHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.FlightOrderDetailInfoResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.disOrderId)) {
      query["dis_order_id"] = request.disOrderId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FlightOrderDetailInfo",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-flight/v1/order/action/detail`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.FlightOrderDetailInfoResponse>(await this.callApi(params, req, runtime), new $_model.FlightOrderDetailInfoResponse({}));
  }

  /**
   * 航班订单明细信息
   * 
   * @param request - FlightOrderDetailInfoRequest
   * @returns FlightOrderDetailInfoResponse
   */
  async flightOrderDetailInfo(request: $_model.FlightOrderDetailInfoRequest): Promise<$_model.FlightOrderDetailInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.FlightOrderDetailInfoHeaders({ });
    return await this.flightOrderDetailInfoWithOptions(request, headers, runtime);
  }

  /**
   * 机票订单详情
   * 
   * @param request - FlightOrderDetailV2Request
   * @param headers - FlightOrderDetailV2Headers
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FlightOrderDetailV2Response
   */
  async flightOrderDetailV2WithOptions(request: $_model.FlightOrderDetailV2Request, headers: $_model.FlightOrderDetailV2Headers, runtime: $dara.RuntimeOptions): Promise<$_model.FlightOrderDetailV2Response> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.isvName)) {
      query["isv_name"] = request.isvName;
    }

    if (!$dara.isNull(request.orderId)) {
      query["order_id"] = request.orderId;
    }

    if (!$dara.isNull(request.outOrderId)) {
      query["out_order_id"] = request.outOrderId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FlightOrderDetailV2",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-flight/v2/order/action/detail`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.FlightOrderDetailV2Response>(await this.callApi(params, req, runtime), new $_model.FlightOrderDetailV2Response({}));
  }

  /**
   * 机票订单详情
   * 
   * @param request - FlightOrderDetailV2Request
   * @returns FlightOrderDetailV2Response
   */
  async flightOrderDetailV2(request: $_model.FlightOrderDetailV2Request): Promise<$_model.FlightOrderDetailV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.FlightOrderDetailV2Headers({ });
    return await this.flightOrderDetailV2WithOptions(request, headers, runtime);
  }

  /**
   * 查询机票订单列表
   * 
   * @param request - FlightOrderListQueryRequest
   * @param headers - FlightOrderListQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FlightOrderListQueryResponse
   */
  async flightOrderListQueryWithOptions(request: $_model.FlightOrderListQueryRequest, headers: $_model.FlightOrderListQueryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.FlightOrderListQueryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.allApply)) {
      query["all_apply"] = request.allApply;
    }

    if (!$dara.isNull(request.applyId)) {
      query["apply_id"] = request.applyId;
    }

    if (!$dara.isNull(request.departId)) {
      query["depart_id"] = request.departId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["end_time"] = request.endTime;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["start_time"] = request.startTime;
    }

    if (!$dara.isNull(request.thirdpartApplyId)) {
      query["thirdpart_apply_id"] = request.thirdpartApplyId;
    }

    if (!$dara.isNull(request.updateEndTime)) {
      query["update_end_time"] = request.updateEndTime;
    }

    if (!$dara.isNull(request.updateStartTime)) {
      query["update_start_time"] = request.updateStartTime;
    }

    if (!$dara.isNull(request.userId)) {
      query["user_id"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FlightOrderListQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/flight/v1/order-list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.FlightOrderListQueryResponse>(await this.callApi(params, req, runtime), new $_model.FlightOrderListQueryResponse({}));
  }

  /**
   * 查询机票订单列表
   * 
   * @param request - FlightOrderListQueryRequest
   * @returns FlightOrderListQueryResponse
   */
  async flightOrderListQuery(request: $_model.FlightOrderListQueryRequest): Promise<$_model.FlightOrderListQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.FlightOrderListQueryHeaders({ });
    return await this.flightOrderListQueryWithOptions(request, headers, runtime);
  }

  /**
   * 机票订单列表查询
   * 
   * @param tmpReq - FlightOrderListQueryV2Request
   * @param headers - FlightOrderListQueryV2Headers
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FlightOrderListQueryV2Response
   */
  async flightOrderListQueryV2WithOptions(tmpReq: $_model.FlightOrderListQueryV2Request, headers: $_model.FlightOrderListQueryV2Headers, runtime: $dara.RuntimeOptions): Promise<$_model.FlightOrderListQueryV2Response> {
    tmpReq.validate();
    let request = new $_model.FlightOrderListQueryV2ShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.approveId)) {
      request.approveIdShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.approveId, "approve_id", "json");
    }

    if (!$dara.isNull(tmpReq.bookerId)) {
      request.bookerIdShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bookerId, "booker_id", "json");
    }

    if (!$dara.isNull(tmpReq.departId)) {
      request.departIdShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.departId, "depart_id", "json");
    }

    if (!$dara.isNull(tmpReq.supplier)) {
      request.supplierShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.supplier, "supplier", "json");
    }

    if (!$dara.isNull(tmpReq.thirdpartApproveId)) {
      request.thirdpartApproveIdShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.thirdpartApproveId, "thirdpart_approve_id", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.approveIdShrink)) {
      query["approve_id"] = request.approveIdShrink;
    }

    if (!$dara.isNull(request.bookerIdShrink)) {
      query["booker_id"] = request.bookerIdShrink;
    }

    if (!$dara.isNull(request.departIdShrink)) {
      query["depart_id"] = request.departIdShrink;
    }

    if (!$dara.isNull(request.endDate)) {
      query["end_date"] = request.endDate;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["page_Size"] = request.pageSize;
    }

    if (!$dara.isNull(request.scrollId)) {
      query["scroll_id"] = request.scrollId;
    }

    if (!$dara.isNull(request.startDate)) {
      query["start_date"] = request.startDate;
    }

    if (!$dara.isNull(request.supplierShrink)) {
      query["supplier"] = request.supplierShrink;
    }

    if (!$dara.isNull(request.thirdpartApproveIdShrink)) {
      query["thirdpart_approve_id"] = request.thirdpartApproveIdShrink;
    }

    if (!$dara.isNull(request.updateEndDate)) {
      query["update_end_date"] = request.updateEndDate;
    }

    if (!$dara.isNull(request.updateStartDate)) {
      query["update_start_date"] = request.updateStartDate;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FlightOrderListQueryV2",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/open/v2/Flight-order-list-query`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.FlightOrderListQueryV2Response>(await this.callApi(params, req, runtime), new $_model.FlightOrderListQueryV2Response({}));
  }

  /**
   * 机票订单列表查询
   * 
   * @param request - FlightOrderListQueryV2Request
   * @returns FlightOrderListQueryV2Response
   */
  async flightOrderListQueryV2(request: $_model.FlightOrderListQueryV2Request): Promise<$_model.FlightOrderListQueryV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.FlightOrderListQueryV2Headers({ });
    return await this.flightOrderListQueryV2WithOptions(request, headers, runtime);
  }

  /**
   * 查询机票订单详情（含票信息）
   * 
   * @param request - FlightOrderQueryRequest
   * @param headers - FlightOrderQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FlightOrderQueryResponse
   */
  async flightOrderQueryWithOptions(request: $_model.FlightOrderQueryRequest, headers: $_model.FlightOrderQueryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.FlightOrderQueryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.orderId)) {
      query["order_id"] = request.orderId;
    }

    if (!$dara.isNull(request.userId)) {
      query["user_id"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FlightOrderQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/flight/v1/order`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.FlightOrderQueryResponse>(await this.callApi(params, req, runtime), new $_model.FlightOrderQueryResponse({}));
  }

  /**
   * 查询机票订单详情（含票信息）
   * 
   * @param request - FlightOrderQueryRequest
   * @returns FlightOrderQueryResponse
   */
  async flightOrderQuery(request: $_model.FlightOrderQueryRequest): Promise<$_model.FlightOrderQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.FlightOrderQueryHeaders({ });
    return await this.flightOrderQueryWithOptions(request, headers, runtime);
  }

  /**
   * 查询退改规则行李额
   * 
   * @param request - FlightOtaItemDetailRequest
   * @param headers - FlightOtaItemDetailHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FlightOtaItemDetailResponse
   */
  async flightOtaItemDetailWithOptions(request: $_model.FlightOtaItemDetailRequest, headers: $_model.FlightOtaItemDetailHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.FlightOtaItemDetailResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.isvName)) {
      query["isv_name"] = request.isvName;
    }

    if (!$dara.isNull(request.otaItemId)) {
      query["ota_item_id"] = request.otaItemId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FlightOtaItemDetail",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-flight/v1/flight/action/ota-item-detail`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.FlightOtaItemDetailResponse>(await this.callApi(params, req, runtime), new $_model.FlightOtaItemDetailResponse({}));
  }

  /**
   * 查询退改规则行李额
   * 
   * @param request - FlightOtaItemDetailRequest
   * @returns FlightOtaItemDetailResponse
   */
  async flightOtaItemDetail(request: $_model.FlightOtaItemDetailRequest): Promise<$_model.FlightOtaItemDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.FlightOtaItemDetailHeaders({ });
    return await this.flightOtaItemDetailWithOptions(request, headers, runtime);
  }

  /**
   * 航班最低价搜索
   * 
   * @param request - FlightOtaSearchRequest
   * @param headers - FlightOtaSearchHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FlightOtaSearchResponse
   */
  async flightOtaSearchWithOptions(request: $_model.FlightOtaSearchRequest, headers: $_model.FlightOtaSearchHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.FlightOtaSearchResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.airlineCode)) {
      query["airline_code"] = request.airlineCode;
    }

    if (!$dara.isNull(request.arrCityCode)) {
      query["arr_city_code"] = request.arrCityCode;
    }

    if (!$dara.isNull(request.cabinClass)) {
      query["cabin_class"] = request.cabinClass;
    }

    if (!$dara.isNull(request.carrierFlightNo)) {
      query["carrier_flight_no"] = request.carrierFlightNo;
    }

    if (!$dara.isNull(request.depCityCode)) {
      query["dep_city_code"] = request.depCityCode;
    }

    if (!$dara.isNull(request.depDate)) {
      query["dep_date"] = request.depDate;
    }

    if (!$dara.isNull(request.flightNo)) {
      query["flight_no"] = request.flightNo;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FlightOtaSearch",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-flight/v1/flight/action/ota-search`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.FlightOtaSearchResponse>(await this.callApi(params, req, runtime), new $_model.FlightOtaSearchResponse({}));
  }

  /**
   * 航班最低价搜索
   * 
   * @param request - FlightOtaSearchRequest
   * @returns FlightOtaSearchResponse
   */
  async flightOtaSearch(request: $_model.FlightOtaSearchRequest): Promise<$_model.FlightOtaSearchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.FlightOtaSearchHeaders({ });
    return await this.flightOtaSearchWithOptions(request, headers, runtime);
  }

  /**
   * 单航班报价搜索
   * 
   * @param tmpReq - FlightOtaSearchV2Request
   * @param headers - FlightOtaSearchV2Headers
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FlightOtaSearchV2Response
   */
  async flightOtaSearchV2WithOptions(tmpReq: $_model.FlightOtaSearchV2Request, headers: $_model.FlightOtaSearchV2Headers, runtime: $dara.RuntimeOptions): Promise<$_model.FlightOtaSearchV2Response> {
    tmpReq.validate();
    let request = new $_model.FlightOtaSearchV2ShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.cabinTypeList)) {
      request.cabinTypeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.cabinTypeList, "cabin_type_list", "json");
    }

    if (!$dara.isNull(tmpReq.searchJourneys)) {
      request.searchJourneysShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.searchJourneys, "search_journeys", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cabinTypeListShrink)) {
      query["cabin_type_list"] = request.cabinTypeListShrink;
    }

    if (!$dara.isNull(request.directOnly)) {
      query["direct_only"] = request.directOnly;
    }

    if (!$dara.isNull(request.isvName)) {
      query["isv_name"] = request.isvName;
    }

    if (!$dara.isNull(request.needShareFlight)) {
      query["need_share_flight"] = request.needShareFlight;
    }

    if (!$dara.isNull(request.searchJourneysShrink)) {
      query["search_journeys"] = request.searchJourneysShrink;
    }

    if (!$dara.isNull(request.searchMode)) {
      query["search_mode"] = request.searchMode;
    }

    if (!$dara.isNull(request.tripType)) {
      query["trip_type"] = request.tripType;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FlightOtaSearchV2",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-flight/v2/flight/action/ota-search`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.FlightOtaSearchV2Response>(await this.callApi(params, req, runtime), new $_model.FlightOtaSearchV2Response({}));
  }

  /**
   * 单航班报价搜索
   * 
   * @param request - FlightOtaSearchV2Request
   * @returns FlightOtaSearchV2Response
   */
  async flightOtaSearchV2(request: $_model.FlightOtaSearchV2Request): Promise<$_model.FlightOtaSearchV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.FlightOtaSearchV2Headers({ });
    return await this.flightOtaSearchV2WithOptions(request, headers, runtime);
  }

  /**
   * 航班订单支付
   * 
   * @param tmpReq - FlightPayOrderRequest
   * @param headers - FlightPayOrderHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FlightPayOrderResponse
   */
  async flightPayOrderWithOptions(tmpReq: $_model.FlightPayOrderRequest, headers: $_model.FlightPayOrderHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.FlightPayOrderResponse> {
    tmpReq.validate();
    let request = new $_model.FlightPayOrderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.extra)) {
      request.extraShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extra, "extra", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.corpPayPrice)) {
      body["corp_pay_price"] = request.corpPayPrice;
    }

    if (!$dara.isNull(request.disOrderId)) {
      body["dis_order_id"] = request.disOrderId;
    }

    if (!$dara.isNull(request.extraShrink)) {
      body["extra"] = request.extraShrink;
    }

    if (!$dara.isNull(request.personalPayPrice)) {
      body["personal_pay_price"] = request.personalPayPrice;
    }

    if (!$dara.isNull(request.totalPayPrice)) {
      body["total_pay_price"] = request.totalPayPrice;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "FlightPayOrder",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-flight/v1/order/action/pay`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FlightPayOrderResponse>(await this.callApi(params, req, runtime), new $_model.FlightPayOrderResponse({}));
  }

  /**
   * 航班订单支付
   * 
   * @param request - FlightPayOrderRequest
   * @returns FlightPayOrderResponse
   */
  async flightPayOrder(request: $_model.FlightPayOrderRequest): Promise<$_model.FlightPayOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.FlightPayOrderHeaders({ });
    return await this.flightPayOrderWithOptions(request, headers, runtime);
  }

  /**
   * 机票订单支付
   * 
   * @param request - FlightPayOrderV2Request
   * @param headers - FlightPayOrderV2Headers
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FlightPayOrderV2Response
   */
  async flightPayOrderV2WithOptions(request: $_model.FlightPayOrderV2Request, headers: $_model.FlightPayOrderV2Headers, runtime: $dara.RuntimeOptions): Promise<$_model.FlightPayOrderV2Response> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.isvName)) {
      body["isv_name"] = request.isvName;
    }

    if (!$dara.isNull(request.orderId)) {
      body["order_id"] = request.orderId;
    }

    if (!$dara.isNull(request.outOrderId)) {
      body["out_order_id"] = request.outOrderId;
    }

    if (!$dara.isNull(request.totalPrice)) {
      body["total_price"] = request.totalPrice;
    }

    if (!$dara.isNull(request.totalServiceFeePrice)) {
      body["total_service_fee_price"] = request.totalServiceFeePrice;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "FlightPayOrderV2",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-flight/v2/order/action/pay`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FlightPayOrderV2Response>(await this.callApi(params, req, runtime), new $_model.FlightPayOrderV2Response({}));
  }

  /**
   * 机票订单支付
   * 
   * @param request - FlightPayOrderV2Request
   * @returns FlightPayOrderV2Response
   */
  async flightPayOrderV2(request: $_model.FlightPayOrderV2Request): Promise<$_model.FlightPayOrderV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.FlightPayOrderV2Headers({ });
    return await this.flightPayOrderV2WithOptions(request, headers, runtime);
  }

  /**
   * 航班退票申请
   * 
   * @param tmpReq - FlightRefundApplyRequest
   * @param headers - FlightRefundApplyHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FlightRefundApplyResponse
   */
  async flightRefundApplyWithOptions(tmpReq: $_model.FlightRefundApplyRequest, headers: $_model.FlightRefundApplyHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.FlightRefundApplyResponse> {
    tmpReq.validate();
    let request = new $_model.FlightRefundApplyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.extra)) {
      request.extraShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extra, "extra", "json");
    }

    if (!$dara.isNull(tmpReq.passengerSegmentInfoList)) {
      request.passengerSegmentInfoListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.passengerSegmentInfoList, "passenger_segment_info_list", "json");
    }

    if (!$dara.isNull(tmpReq.refundVoucherInfo)) {
      request.refundVoucherInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.refundVoucherInfo, "refund_voucher_info", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.corpRefundPrice)) {
      body["corp_refund_price"] = request.corpRefundPrice;
    }

    if (!$dara.isNull(request.disOrderId)) {
      body["dis_order_id"] = request.disOrderId;
    }

    if (!$dara.isNull(request.disSubOrderId)) {
      body["dis_sub_order_id"] = request.disSubOrderId;
    }

    if (!$dara.isNull(request.displayRefundMoney)) {
      body["display_refund_money"] = request.displayRefundMoney;
    }

    if (!$dara.isNull(request.extraShrink)) {
      body["extra"] = request.extraShrink;
    }

    if (!$dara.isNull(request.isVoluntary)) {
      body["is_voluntary"] = request.isVoluntary;
    }

    if (!$dara.isNull(request.itemUnitIds)) {
      body["item_unit_ids"] = request.itemUnitIds;
    }

    if (!$dara.isNull(request.passengerSegmentInfoListShrink)) {
      body["passenger_segment_info_list"] = request.passengerSegmentInfoListShrink;
    }

    if (!$dara.isNull(request.personalRefundPrice)) {
      body["personal_refund_price"] = request.personalRefundPrice;
    }

    if (!$dara.isNull(request.reasonDetail)) {
      body["reason_detail"] = request.reasonDetail;
    }

    if (!$dara.isNull(request.reasonType)) {
      body["reason_type"] = request.reasonType;
    }

    if (!$dara.isNull(request.refundVoucherInfoShrink)) {
      body["refund_voucher_info"] = request.refundVoucherInfoShrink;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["session_id"] = request.sessionId;
    }

    if (!$dara.isNull(request.totalRefundPrice)) {
      body["total_refund_price"] = request.totalRefundPrice;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "FlightRefundApply",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-flight/v1/refund/action/apply`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FlightRefundApplyResponse>(await this.callApi(params, req, runtime), new $_model.FlightRefundApplyResponse({}));
  }

  /**
   * 航班退票申请
   * 
   * @param request - FlightRefundApplyRequest
   * @returns FlightRefundApplyResponse
   */
  async flightRefundApply(request: $_model.FlightRefundApplyRequest): Promise<$_model.FlightRefundApplyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.FlightRefundApplyHeaders({ });
    return await this.flightRefundApplyWithOptions(request, headers, runtime);
  }

  /**
   * 机票退票申请
   * 
   * @param tmpReq - FlightRefundApplyV2Request
   * @param headers - FlightRefundApplyV2Headers
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FlightRefundApplyV2Response
   */
  async flightRefundApplyV2WithOptions(tmpReq: $_model.FlightRefundApplyV2Request, headers: $_model.FlightRefundApplyV2Headers, runtime: $dara.RuntimeOptions): Promise<$_model.FlightRefundApplyV2Response> {
    tmpReq.validate();
    let request = new $_model.FlightRefundApplyV2ShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.passengerSegmentRelations)) {
      request.passengerSegmentRelationsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.passengerSegmentRelations, "passenger_segment_relations", "json");
    }

    if (!$dara.isNull(tmpReq.ticketNos)) {
      request.ticketNosShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ticketNos, "ticket_nos", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.isvName)) {
      body["isv_name"] = request.isvName;
    }

    if (!$dara.isNull(request.orderId)) {
      body["order_id"] = request.orderId;
    }

    if (!$dara.isNull(request.outOrderId)) {
      body["out_order_id"] = request.outOrderId;
    }

    if (!$dara.isNull(request.outSubOrderId)) {
      body["out_sub_order_id"] = request.outSubOrderId;
    }

    if (!$dara.isNull(request.passengerSegmentRelationsShrink)) {
      body["passenger_segment_relations"] = request.passengerSegmentRelationsShrink;
    }

    if (!$dara.isNull(request.preCalType)) {
      body["pre_cal_type"] = request.preCalType;
    }

    if (!$dara.isNull(request.refundReason)) {
      body["refund_reason"] = request.refundReason;
    }

    if (!$dara.isNull(request.refundReasonType)) {
      body["refund_reason_type"] = request.refundReasonType;
    }

    if (!$dara.isNull(request.ticketNosShrink)) {
      body["ticket_nos"] = request.ticketNosShrink;
    }

    if (!$dara.isNull(request.totalRefundPrice)) {
      body["total_refund_price"] = request.totalRefundPrice;
    }

    if (!$dara.isNull(request.uploadPictUrls)) {
      body["upload_pict_urls"] = request.uploadPictUrls;
    }

    if (!$dara.isNull(request.voluntary)) {
      body["voluntary"] = request.voluntary;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "FlightRefundApplyV2",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-flight/v2/refund/action/apply`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FlightRefundApplyV2Response>(await this.callApi(params, req, runtime), new $_model.FlightRefundApplyV2Response({}));
  }

  /**
   * 机票退票申请
   * 
   * @param request - FlightRefundApplyV2Request
   * @returns FlightRefundApplyV2Response
   */
  async flightRefundApplyV2(request: $_model.FlightRefundApplyV2Request): Promise<$_model.FlightRefundApplyV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.FlightRefundApplyV2Headers({ });
    return await this.flightRefundApplyV2WithOptions(request, headers, runtime);
  }

  /**
   * 航班退票详情
   * 
   * @param request - FlightRefundDetailRequest
   * @param headers - FlightRefundDetailHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FlightRefundDetailResponse
   */
  async flightRefundDetailWithOptions(request: $_model.FlightRefundDetailRequest, headers: $_model.FlightRefundDetailHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.FlightRefundDetailResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.disOrderId)) {
      query["dis_order_id"] = request.disOrderId;
    }

    if (!$dara.isNull(request.disSubOrderId)) {
      query["dis_sub_order_id"] = request.disSubOrderId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FlightRefundDetail",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-flight/v1/refund/action/detail`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.FlightRefundDetailResponse>(await this.callApi(params, req, runtime), new $_model.FlightRefundDetailResponse({}));
  }

  /**
   * 航班退票详情
   * 
   * @param request - FlightRefundDetailRequest
   * @returns FlightRefundDetailResponse
   */
  async flightRefundDetail(request: $_model.FlightRefundDetailRequest): Promise<$_model.FlightRefundDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.FlightRefundDetailHeaders({ });
    return await this.flightRefundDetailWithOptions(request, headers, runtime);
  }

  /**
   * 机票退票详情
   * 
   * @param request - FlightRefundDetailV2Request
   * @param headers - FlightRefundDetailV2Headers
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FlightRefundDetailV2Response
   */
  async flightRefundDetailV2WithOptions(request: $_model.FlightRefundDetailV2Request, headers: $_model.FlightRefundDetailV2Headers, runtime: $dara.RuntimeOptions): Promise<$_model.FlightRefundDetailV2Response> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.isvName)) {
      query["isv_name"] = request.isvName;
    }

    if (!$dara.isNull(request.orderId)) {
      query["order_id"] = request.orderId;
    }

    if (!$dara.isNull(request.outOrderId)) {
      query["out_order_id"] = request.outOrderId;
    }

    if (!$dara.isNull(request.outRefundApplyId)) {
      query["out_refund_apply_id"] = request.outRefundApplyId;
    }

    if (!$dara.isNull(request.refundApplyId)) {
      query["refund_apply_id"] = request.refundApplyId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FlightRefundDetailV2",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-flight/v2/refund/action/detail`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.FlightRefundDetailV2Response>(await this.callApi(params, req, runtime), new $_model.FlightRefundDetailV2Response({}));
  }

  /**
   * 机票退票详情
   * 
   * @param request - FlightRefundDetailV2Request
   * @returns FlightRefundDetailV2Response
   */
  async flightRefundDetailV2(request: $_model.FlightRefundDetailV2Request): Promise<$_model.FlightRefundDetailV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.FlightRefundDetailV2Headers({ });
    return await this.flightRefundDetailV2WithOptions(request, headers, runtime);
  }

  /**
   * 机票退票预计算
   * 
   * @param tmpReq - FlightRefundPreCalRequest
   * @param headers - FlightRefundPreCalHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FlightRefundPreCalResponse
   */
  async flightRefundPreCalWithOptions(tmpReq: $_model.FlightRefundPreCalRequest, headers: $_model.FlightRefundPreCalHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.FlightRefundPreCalResponse> {
    tmpReq.validate();
    let request = new $_model.FlightRefundPreCalShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.passengerSegmentInfoList)) {
      request.passengerSegmentInfoListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.passengerSegmentInfoList, "passenger_segment_info_list", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.disOrderId)) {
      query["dis_order_id"] = request.disOrderId;
    }

    if (!$dara.isNull(request.isVoluntary)) {
      query["is_voluntary"] = request.isVoluntary;
    }

    if (!$dara.isNull(request.passengerSegmentInfoListShrink)) {
      query["passenger_segment_info_list"] = request.passengerSegmentInfoListShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FlightRefundPreCal",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-flight/v1/refund/action/pre-cal`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.FlightRefundPreCalResponse>(await this.callApi(params, req, runtime), new $_model.FlightRefundPreCalResponse({}));
  }

  /**
   * 机票退票预计算
   * 
   * @param request - FlightRefundPreCalRequest
   * @returns FlightRefundPreCalResponse
   */
  async flightRefundPreCal(request: $_model.FlightRefundPreCalRequest): Promise<$_model.FlightRefundPreCalResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.FlightRefundPreCalHeaders({ });
    return await this.flightRefundPreCalWithOptions(request, headers, runtime);
  }

  /**
   * 机票退票费用预计算
   * 
   * @param tmpReq - FlightRefundPreCalV2Request
   * @param headers - FlightRefundPreCalV2Headers
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FlightRefundPreCalV2Response
   */
  async flightRefundPreCalV2WithOptions(tmpReq: $_model.FlightRefundPreCalV2Request, headers: $_model.FlightRefundPreCalV2Headers, runtime: $dara.RuntimeOptions): Promise<$_model.FlightRefundPreCalV2Response> {
    tmpReq.validate();
    let request = new $_model.FlightRefundPreCalV2ShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.passengerSegmentRelations)) {
      request.passengerSegmentRelationsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.passengerSegmentRelations, "passenger_segment_relations", "json");
    }

    if (!$dara.isNull(tmpReq.ticketNos)) {
      request.ticketNosShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ticketNos, "ticket_nos", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.isvName)) {
      query["isv_name"] = request.isvName;
    }

    if (!$dara.isNull(request.orderId)) {
      query["order_id"] = request.orderId;
    }

    if (!$dara.isNull(request.outOrderId)) {
      query["out_order_id"] = request.outOrderId;
    }

    if (!$dara.isNull(request.passengerSegmentRelationsShrink)) {
      query["passenger_segment_relations"] = request.passengerSegmentRelationsShrink;
    }

    if (!$dara.isNull(request.preCalType)) {
      query["pre_cal_type"] = request.preCalType;
    }

    if (!$dara.isNull(request.ticketNosShrink)) {
      query["ticket_nos"] = request.ticketNosShrink;
    }

    if (!$dara.isNull(request.voluntary)) {
      query["voluntary"] = request.voluntary;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FlightRefundPreCalV2",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-flight/v2/refund/action/pre-cal`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.FlightRefundPreCalV2Response>(await this.callApi(params, req, runtime), new $_model.FlightRefundPreCalV2Response({}));
  }

  /**
   * 机票退票费用预计算
   * 
   * @param request - FlightRefundPreCalV2Request
   * @returns FlightRefundPreCalV2Response
   */
  async flightRefundPreCalV2(request: $_model.FlightRefundPreCalV2Request): Promise<$_model.FlightRefundPreCalV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.FlightRefundPreCalV2Headers({ });
    return await this.flightRefundPreCalV2WithOptions(request, headers, runtime);
  }

  /**
   * 航班列表搜索
   * 
   * @param request - FlightSearchListRequest
   * @param headers - FlightSearchListHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FlightSearchListResponse
   */
  async flightSearchListWithOptions(request: $_model.FlightSearchListRequest, headers: $_model.FlightSearchListHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.FlightSearchListResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.airlineCode)) {
      query["airline_code"] = request.airlineCode;
    }

    if (!$dara.isNull(request.arrCityCode)) {
      query["arr_city_code"] = request.arrCityCode;
    }

    if (!$dara.isNull(request.arrCityName)) {
      query["arr_city_name"] = request.arrCityName;
    }

    if (!$dara.isNull(request.arrDate)) {
      query["arr_date"] = request.arrDate;
    }

    if (!$dara.isNull(request.cabinClass)) {
      query["cabin_class"] = request.cabinClass;
    }

    if (!$dara.isNull(request.depCityCode)) {
      query["dep_city_code"] = request.depCityCode;
    }

    if (!$dara.isNull(request.depCityName)) {
      query["dep_city_name"] = request.depCityName;
    }

    if (!$dara.isNull(request.depDate)) {
      query["dep_date"] = request.depDate;
    }

    if (!$dara.isNull(request.flightNo)) {
      query["flight_no"] = request.flightNo;
    }

    if (!$dara.isNull(request.needMultiClassPrice)) {
      query["need_multi_class_price"] = request.needMultiClassPrice;
    }

    if (!$dara.isNull(request.transferCityCode)) {
      query["transfer_city_code"] = request.transferCityCode;
    }

    if (!$dara.isNull(request.transferFlightNo)) {
      query["transfer_flight_no"] = request.transferFlightNo;
    }

    if (!$dara.isNull(request.transferLeaveDate)) {
      query["transfer_leave_date"] = request.transferLeaveDate;
    }

    if (!$dara.isNull(request.tripType)) {
      query["trip_type"] = request.tripType;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FlightSearchList",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/huge/dtb-flight/v1/flight/action/search-list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.FlightSearchListResponse>(await this.callApi(params, req, runtime), new $_model.FlightSearchListResponse({}));
  }

  /**
   * 航班列表搜索
   * 
   * @param request - FlightSearchListRequest
   * @returns FlightSearchListResponse
   */
  async flightSearchList(request: $_model.FlightSearchListRequest): Promise<$_model.FlightSearchListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.FlightSearchListHeaders({ });
    return await this.flightSearchListWithOptions(request, headers, runtime);
  }

  /**
   * 查询福豆记账数据
   * 
   * @param request - FuPointBillSettlementQueryRequest
   * @param headers - FuPointBillSettlementQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FuPointBillSettlementQueryResponse
   */
  async fuPointBillSettlementQueryWithOptions(request: $_model.FuPointBillSettlementQueryRequest, headers: $_model.FuPointBillSettlementQueryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.FuPointBillSettlementQueryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.billBatch)) {
      query["bill_batch"] = request.billBatch;
    }

    if (!$dara.isNull(request.cooperatorId)) {
      query["cooperator_id"] = request.cooperatorId;
    }

    if (!$dara.isNull(request.orderId)) {
      query["order_id"] = request.orderId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["page_no"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!$dara.isNull(request.periodEnd)) {
      query["period_end"] = request.periodEnd;
    }

    if (!$dara.isNull(request.periodStart)) {
      query["period_start"] = request.periodStart;
    }

    if (!$dara.isNull(request.scrollId)) {
      query["scroll_id"] = request.scrollId;
    }

    if (!$dara.isNull(request.scrollMod)) {
      query["scroll_mod"] = request.scrollMod;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FuPointBillSettlementQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/fupoint/v1/bill-settlement`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.FuPointBillSettlementQueryResponse>(await this.callApi(params, req, runtime), new $_model.FuPointBillSettlementQueryResponse({}));
  }

  /**
   * 查询福豆记账数据
   * 
   * @param request - FuPointBillSettlementQueryRequest
   * @returns FuPointBillSettlementQueryResponse
   */
  async fuPointBillSettlementQuery(request: $_model.FuPointBillSettlementQueryRequest): Promise<$_model.FuPointBillSettlementQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.FuPointBillSettlementQueryHeaders({ });
    return await this.fuPointBillSettlementQueryWithOptions(request, headers, runtime);
  }

  /**
   * 换取GroupCorpToken接口
   * 
   * @param request - GroupCorpTokenRequest
   * @param headers - GroupCorpTokenHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GroupCorpTokenResponse
   */
  async groupCorpTokenWithOptions(request: $_model.GroupCorpTokenRequest, headers: $_model.GroupCorpTokenHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GroupCorpTokenResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appSecret)) {
      query["app_secret"] = request.appSecret;
    }

    if (!$dara.isNull(request.corpId)) {
      query["corp_id"] = request.corpId;
    }

    if (!$dara.isNull(request.subCorpId)) {
      query["sub_corp_id"] = request.subCorpId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripAccessToken)) {
      realHeaders["x-acs-btrip-access-token"] = String(headers.xAcsBtripAccessToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GroupCorpToken",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/btrip-open-auth/v1/group-corp-token/action/take`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GroupCorpTokenResponse>(await this.callApi(params, req, runtime), new $_model.GroupCorpTokenResponse({}));
  }

  /**
   * 换取GroupCorpToken接口
   * 
   * @param request - GroupCorpTokenRequest
   * @returns GroupCorpTokenResponse
   */
  async groupCorpToken(request: $_model.GroupCorpTokenRequest): Promise<$_model.GroupCorpTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GroupCorpTokenHeaders({ });
    return await this.groupCorpTokenWithOptions(request, headers, runtime);
  }

  /**
   * 集团部门同步
   * 
   * @param tmpReq - GroupDepartSaveRequest
   * @param headers - GroupDepartSaveHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GroupDepartSaveResponse
   */
  async groupDepartSaveWithOptions(tmpReq: $_model.GroupDepartSaveRequest, headers: $_model.GroupDepartSaveHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GroupDepartSaveResponse> {
    tmpReq.validate();
    let request = new $_model.GroupDepartSaveShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.subCorpIdList)) {
      request.subCorpIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.subCorpIdList, "sub_corp_id_list", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deptName)) {
      body["dept_name"] = request.deptName;
    }

    if (!$dara.isNull(request.managerIds)) {
      body["manager_ids"] = request.managerIds;
    }

    if (!$dara.isNull(request.outerDeptId)) {
      body["outer_dept_id"] = request.outerDeptId;
    }

    if (!$dara.isNull(request.outerDeptPid)) {
      body["outer_dept_pid"] = request.outerDeptPid;
    }

    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    if (!$dara.isNull(request.subCorpIdListShrink)) {
      body["sub_corp_id_list"] = request.subCorpIdListShrink;
    }

    if (!$dara.isNull(request.syncGroup)) {
      body["sync_group"] = request.syncGroup;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GroupDepartSave",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/sub_corps/v1/departs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GroupDepartSaveResponse>(await this.callApi(params, req, runtime), new $_model.GroupDepartSaveResponse({}));
  }

  /**
   * 集团部门同步
   * 
   * @param request - GroupDepartSaveRequest
   * @returns GroupDepartSaveResponse
   */
  async groupDepartSave(request: $_model.GroupDepartSaveRequest): Promise<$_model.GroupDepartSaveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GroupDepartSaveHeaders({ });
    return await this.groupDepartSaveWithOptions(request, headers, runtime);
  }

  /**
   * 集团人员同步
   * 
   * @param tmpReq - GroupUserSaveRequest
   * @param headers - GroupUserSaveHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GroupUserSaveResponse
   */
  async groupUserSaveWithOptions(tmpReq: $_model.GroupUserSaveRequest, headers: $_model.GroupUserSaveHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GroupUserSaveResponse> {
    tmpReq.validate();
    let request = new $_model.GroupUserSaveShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.certList)) {
      request.certListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.certList, "cert_list", "json");
    }

    if (!$dara.isNull(tmpReq.subCorpIdList)) {
      request.subCorpIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.subCorpIdList, "sub_corp_id_list", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.baseCityCode)) {
      body["base_city_code"] = request.baseCityCode;
    }

    if (!$dara.isNull(request.birthday)) {
      body["birthday"] = request.birthday;
    }

    if (!$dara.isNull(request.certListShrink)) {
      body["cert_list"] = request.certListShrink;
    }

    if (!$dara.isNull(request.gender)) {
      body["gender"] = request.gender;
    }

    if (!$dara.isNull(request.jobNo)) {
      body["job_no"] = request.jobNo;
    }

    if (!$dara.isNull(request.phone)) {
      body["phone"] = request.phone;
    }

    if (!$dara.isNull(request.realNameEn)) {
      body["real_name_en"] = request.realNameEn;
    }

    if (!$dara.isNull(request.subCorpIdListShrink)) {
      body["sub_corp_id_list"] = request.subCorpIdListShrink;
    }

    if (!$dara.isNull(request.userId)) {
      body["user_id"] = request.userId;
    }

    if (!$dara.isNull(request.userName)) {
      body["user_name"] = request.userName;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GroupUserSave",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/sub_corps/v1/users`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GroupUserSaveResponse>(await this.callApi(params, req, runtime), new $_model.GroupUserSaveResponse({}));
  }

  /**
   * 集团人员同步
   * 
   * @param request - GroupUserSaveRequest
   * @returns GroupUserSaveResponse
   */
  async groupUserSave(request: $_model.GroupUserSaveRequest): Promise<$_model.GroupUserSaveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GroupUserSaveHeaders({ });
    return await this.groupUserSaveWithOptions(request, headers, runtime);
  }

  /**
   * 酒店起价
   * 
   * @param tmpReq - HotelAskingPriceRequest
   * @param headers - HotelAskingPriceHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HotelAskingPriceResponse
   */
  async hotelAskingPriceWithOptions(tmpReq: $_model.HotelAskingPriceRequest, headers: $_model.HotelAskingPriceHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.HotelAskingPriceResponse> {
    tmpReq.validate();
    let request = new $_model.HotelAskingPriceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.shids)) {
      request.shidsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.shids, "shids", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.adultNum)) {
      query["adult_num"] = request.adultNum;
    }

    if (!$dara.isNull(request.btripUserId)) {
      query["btrip_user_id"] = request.btripUserId;
    }

    if (!$dara.isNull(request.checkInDate)) {
      query["check_in_date"] = request.checkInDate;
    }

    if (!$dara.isNull(request.checkOutDate)) {
      query["check_out_date"] = request.checkOutDate;
    }

    if (!$dara.isNull(request.cityCode)) {
      query["city_code"] = request.cityCode;
    }

    if (!$dara.isNull(request.cityName)) {
      query["city_name"] = request.cityName;
    }

    if (!$dara.isNull(request.dir)) {
      query["dir"] = request.dir;
    }

    if (!$dara.isNull(request.hotelStar)) {
      query["hotel_star"] = request.hotelStar;
    }

    if (!$dara.isNull(request.isProtocol)) {
      query["is_protocol"] = request.isProtocol;
    }

    if (!$dara.isNull(request.paymentType)) {
      query["payment_type"] = request.paymentType;
    }

    if (!$dara.isNull(request.shidsShrink)) {
      query["shids"] = request.shidsShrink;
    }

    if (!$dara.isNull(request.sortCode)) {
      query["sort_code"] = request.sortCode;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "HotelAskingPrice",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-hotel/v1/hotels/action/asking-price`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.HotelAskingPriceResponse>(await this.callApi(params, req, runtime), new $_model.HotelAskingPriceResponse({}));
  }

  /**
   * 酒店起价
   * 
   * @param request - HotelAskingPriceRequest
   * @returns HotelAskingPriceResponse
   */
  async hotelAskingPrice(request: $_model.HotelAskingPriceRequest): Promise<$_model.HotelAskingPriceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.HotelAskingPriceHeaders({ });
    return await this.hotelAskingPriceWithOptions(request, headers, runtime);
  }

  /**
   * 查询酒店记账数据
   * 
   * @param request - HotelBillSettlementQueryRequest
   * @param headers - HotelBillSettlementQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HotelBillSettlementQueryResponse
   */
  async hotelBillSettlementQueryWithOptions(request: $_model.HotelBillSettlementQueryRequest, headers: $_model.HotelBillSettlementQueryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.HotelBillSettlementQueryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.billBatch)) {
      query["bill_batch"] = request.billBatch;
    }

    if (!$dara.isNull(request.orderId)) {
      query["order_id"] = request.orderId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["page_no"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!$dara.isNull(request.periodEnd)) {
      query["period_end"] = request.periodEnd;
    }

    if (!$dara.isNull(request.periodStart)) {
      query["period_start"] = request.periodStart;
    }

    if (!$dara.isNull(request.scrollId)) {
      query["scroll_id"] = request.scrollId;
    }

    if (!$dara.isNull(request.scrollMod)) {
      query["scroll_mod"] = request.scrollMod;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "HotelBillSettlementQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/hotel/v1/bill-settlement`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.HotelBillSettlementQueryResponse>(await this.callApi(params, req, runtime), new $_model.HotelBillSettlementQueryResponse({}));
  }

  /**
   * 查询酒店记账数据
   * 
   * @param request - HotelBillSettlementQueryRequest
   * @returns HotelBillSettlementQueryResponse
   */
  async hotelBillSettlementQuery(request: $_model.HotelBillSettlementQueryRequest): Promise<$_model.HotelBillSettlementQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.HotelBillSettlementQueryHeaders({ });
    return await this.hotelBillSettlementQueryWithOptions(request, headers, runtime);
  }

  /**
   * 酒店城市列表
   * 
   * @param request - HotelCityCodeListRequest
   * @param headers - HotelCityCodeListHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HotelCityCodeListResponse
   */
  async hotelCityCodeListWithOptions(request: $_model.HotelCityCodeListRequest, headers: $_model.HotelCityCodeListHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.HotelCityCodeListResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.countryCode)) {
      query["country_code"] = request.countryCode;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "HotelCityCodeList",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-hotel/v1/city-codes/action/search`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.HotelCityCodeListResponse>(await this.callApi(params, req, runtime), new $_model.HotelCityCodeListResponse({}));
  }

  /**
   * 酒店城市列表
   * 
   * @param request - HotelCityCodeListRequest
   * @returns HotelCityCodeListResponse
   */
  async hotelCityCodeList(request: $_model.HotelCityCodeListRequest): Promise<$_model.HotelCityCodeListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.HotelCityCodeListHeaders({ });
    return await this.hotelCityCodeListWithOptions(request, headers, runtime);
  }

  /**
   * 查询酒店超标审批详情
   * 
   * @param request - HotelExceedApplyQueryRequest
   * @param headers - HotelExceedApplyQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HotelExceedApplyQueryResponse
   */
  async hotelExceedApplyQueryWithOptions(request: $_model.HotelExceedApplyQueryRequest, headers: $_model.HotelExceedApplyQueryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.HotelExceedApplyQueryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applyId)) {
      query["apply_id"] = request.applyId;
    }

    if (!$dara.isNull(request.businessInstanceId)) {
      query["business_instance_id"] = request.businessInstanceId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "HotelExceedApplyQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/apply/v1/hotel-exceed`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.HotelExceedApplyQueryResponse>(await this.callApi(params, req, runtime), new $_model.HotelExceedApplyQueryResponse({}));
  }

  /**
   * 查询酒店超标审批详情
   * 
   * @param request - HotelExceedApplyQueryRequest
   * @returns HotelExceedApplyQueryResponse
   */
  async hotelExceedApplyQuery(request: $_model.HotelExceedApplyQueryRequest): Promise<$_model.HotelExceedApplyQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.HotelExceedApplyQueryHeaders({ });
    return await this.hotelExceedApplyQueryWithOptions(request, headers, runtime);
  }

  /**
   * 酒店详情页报价接口(直连)
   * 
   * @param request - HotelGoodsQueryRequest
   * @param headers - HotelGoodsQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HotelGoodsQueryResponse
   */
  async hotelGoodsQueryWithOptions(request: $_model.HotelGoodsQueryRequest, headers: $_model.HotelGoodsQueryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.HotelGoodsQueryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.adultNum)) {
      query["adult_num"] = request.adultNum;
    }

    if (!$dara.isNull(request.agreementPrice)) {
      query["agreement_price"] = request.agreementPrice;
    }

    if (!$dara.isNull(request.beginDate)) {
      query["begin_date"] = request.beginDate;
    }

    if (!$dara.isNull(request.breakfastIncluded)) {
      query["breakfast_included"] = request.breakfastIncluded;
    }

    if (!$dara.isNull(request.btripUserId)) {
      query["btrip_user_id"] = request.btripUserId;
    }

    if (!$dara.isNull(request.cityCode)) {
      query["city_code"] = request.cityCode;
    }

    if (!$dara.isNull(request.endDate)) {
      query["end_date"] = request.endDate;
    }

    if (!$dara.isNull(request.hotelId)) {
      query["hotel_id"] = request.hotelId;
    }

    if (!$dara.isNull(request.payOverType)) {
      query["pay_over_type"] = request.payOverType;
    }

    if (!$dara.isNull(request.paymentType)) {
      query["payment_type"] = request.paymentType;
    }

    if (!$dara.isNull(request.specialInvoice)) {
      query["special_invoice"] = request.specialInvoice;
    }

    if (!$dara.isNull(request.superMan)) {
      query["super_man"] = request.superMan;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "HotelGoodsQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-hotel/v1/hotel-goods`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.HotelGoodsQueryResponse>(await this.callApi(params, req, runtime), new $_model.HotelGoodsQueryResponse({}));
  }

  /**
   * 酒店详情页报价接口(直连)
   * 
   * @param request - HotelGoodsQueryRequest
   * @returns HotelGoodsQueryResponse
   */
  async hotelGoodsQuery(request: $_model.HotelGoodsQueryRequest): Promise<$_model.HotelGoodsQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.HotelGoodsQueryHeaders({ });
    return await this.hotelGoodsQueryWithOptions(request, headers, runtime);
  }

  /**
   * 获取酒店清单
   * 
   * @param request - HotelIndexInfoRequest
   * @param headers - HotelIndexInfoHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HotelIndexInfoResponse
   */
  async hotelIndexInfoWithOptions(request: $_model.HotelIndexInfoRequest, headers: $_model.HotelIndexInfoHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.HotelIndexInfoResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cityCode)) {
      query["city_code"] = request.cityCode;
    }

    if (!$dara.isNull(request.hotelStatus)) {
      query["hotel_status"] = request.hotelStatus;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!$dara.isNull(request.pageToken)) {
      query["page_token"] = request.pageToken;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "HotelIndexInfo",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-hotel/v1/index-infos`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.HotelIndexInfoResponse>(await this.callApi(params, req, runtime), new $_model.HotelIndexInfoResponse({}));
  }

  /**
   * 获取酒店清单
   * 
   * @param request - HotelIndexInfoRequest
   * @returns HotelIndexInfoResponse
   */
  async hotelIndexInfo(request: $_model.HotelIndexInfoRequest): Promise<$_model.HotelIndexInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.HotelIndexInfoHeaders({ });
    return await this.hotelIndexInfoWithOptions(request, headers, runtime);
  }

  /**
   * 酒店订单取消
   * 
   * @param request - HotelOrderCancelRequest
   * @param headers - HotelOrderCancelHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HotelOrderCancelResponse
   */
  async hotelOrderCancelWithOptions(request: $_model.HotelOrderCancelRequest, headers: $_model.HotelOrderCancelHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.HotelOrderCancelResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.btripOrderId)) {
      query["btrip_order_id"] = request.btripOrderId;
    }

    if (!$dara.isNull(request.disOrderId)) {
      query["dis_order_id"] = request.disOrderId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "HotelOrderCancel",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-hotel/v1/orders/action/cancel`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.HotelOrderCancelResponse>(await this.callApi(params, req, runtime), new $_model.HotelOrderCancelResponse({}));
  }

  /**
   * 酒店订单取消
   * 
   * @param request - HotelOrderCancelRequest
   * @returns HotelOrderCancelResponse
   */
  async hotelOrderCancel(request: $_model.HotelOrderCancelRequest): Promise<$_model.HotelOrderCancelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.HotelOrderCancelHeaders({ });
    return await this.hotelOrderCancelWithOptions(request, headers, runtime);
  }

  /**
   * 酒店订单修改申请
   * 
   * @param tmpReq - HotelOrderChangeApplyRequest
   * @param headers - HotelOrderChangeApplyHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HotelOrderChangeApplyResponse
   */
  async hotelOrderChangeApplyWithOptions(tmpReq: $_model.HotelOrderChangeApplyRequest, headers: $_model.HotelOrderChangeApplyHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.HotelOrderChangeApplyResponse> {
    tmpReq.validate();
    let request = new $_model.HotelOrderChangeApplyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.roomInfoList)) {
      request.roomInfoListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.roomInfoList, "room_info_list", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.btripUserId)) {
      body["btrip_user_id"] = request.btripUserId;
    }

    if (!$dara.isNull(request.disOrderId)) {
      body["dis_order_id"] = request.disOrderId;
    }

    if (!$dara.isNull(request.reason)) {
      body["reason"] = request.reason;
    }

    if (!$dara.isNull(request.roomInfoListShrink)) {
      body["room_info_list"] = request.roomInfoListShrink;
    }

    if (!$dara.isNull(request.saleOrderId)) {
      body["sale_order_id"] = request.saleOrderId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "HotelOrderChangeApply",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-hotel/v1/orders/action/change/apply`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.HotelOrderChangeApplyResponse>(await this.callApi(params, req, runtime), new $_model.HotelOrderChangeApplyResponse({}));
  }

  /**
   * 酒店订单修改申请
   * 
   * @param request - HotelOrderChangeApplyRequest
   * @returns HotelOrderChangeApplyResponse
   */
  async hotelOrderChangeApply(request: $_model.HotelOrderChangeApplyRequest): Promise<$_model.HotelOrderChangeApplyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.HotelOrderChangeApplyHeaders({ });
    return await this.hotelOrderChangeApplyWithOptions(request, headers, runtime);
  }

  /**
   * 酒店订单修改详情
   * 
   * @param request - HotelOrderChangeDetailRequest
   * @param headers - HotelOrderChangeDetailHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HotelOrderChangeDetailResponse
   */
  async hotelOrderChangeDetailWithOptions(request: $_model.HotelOrderChangeDetailRequest, headers: $_model.HotelOrderChangeDetailHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.HotelOrderChangeDetailResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.btripUserId)) {
      body["btrip_user_id"] = request.btripUserId;
    }

    if (!$dara.isNull(request.changeOrderId)) {
      body["change_order_id"] = request.changeOrderId;
    }

    if (!$dara.isNull(request.disOrderId)) {
      body["dis_order_id"] = request.disOrderId;
    }

    if (!$dara.isNull(request.saleOrderId)) {
      body["sale_order_id"] = request.saleOrderId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "HotelOrderChangeDetail",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-hotel/v1/orders/action/change/detail`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.HotelOrderChangeDetailResponse>(await this.callApi(params, req, runtime), new $_model.HotelOrderChangeDetailResponse({}));
  }

  /**
   * 酒店订单修改详情
   * 
   * @param request - HotelOrderChangeDetailRequest
   * @returns HotelOrderChangeDetailResponse
   */
  async hotelOrderChangeDetail(request: $_model.HotelOrderChangeDetailRequest): Promise<$_model.HotelOrderChangeDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.HotelOrderChangeDetailHeaders({ });
    return await this.hotelOrderChangeDetailWithOptions(request, headers, runtime);
  }

  /**
   * 酒店订单创建
   * 
   * @param tmpReq - HotelOrderCreateRequest
   * @param headers - HotelOrderCreateHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HotelOrderCreateResponse
   */
  async hotelOrderCreateWithOptions(tmpReq: $_model.HotelOrderCreateRequest, headers: $_model.HotelOrderCreateHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.HotelOrderCreateResponse> {
    tmpReq.validate();
    let request = new $_model.HotelOrderCreateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.invoiceInfo)) {
      request.invoiceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.invoiceInfo, "invoice_info", "json");
    }

    if (!$dara.isNull(tmpReq.occupantInfoList)) {
      request.occupantInfoListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.occupantInfoList, "occupant_info_list", "json");
    }

    if (!$dara.isNull(tmpReq.promotionInfo)) {
      request.promotionInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.promotionInfo, "promotion_info", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.btripUserId)) {
      body["btrip_user_id"] = request.btripUserId;
    }

    if (!$dara.isNull(request.checkIn)) {
      body["check_in"] = request.checkIn;
    }

    if (!$dara.isNull(request.checkOut)) {
      body["check_out"] = request.checkOut;
    }

    if (!$dara.isNull(request.contractEmail)) {
      body["contract_email"] = request.contractEmail;
    }

    if (!$dara.isNull(request.contractName)) {
      body["contract_name"] = request.contractName;
    }

    if (!$dara.isNull(request.contractPhone)) {
      body["contract_phone"] = request.contractPhone;
    }

    if (!$dara.isNull(request.corpPayPrice)) {
      body["corp_pay_price"] = request.corpPayPrice;
    }

    if (!$dara.isNull(request.disOrderId)) {
      body["dis_order_id"] = request.disOrderId;
    }

    if (!$dara.isNull(request.extra)) {
      body["extra"] = request.extra;
    }

    if (!$dara.isNull(request.invoiceInfoShrink)) {
      body["invoice_info"] = request.invoiceInfoShrink;
    }

    if (!$dara.isNull(request.itemId)) {
      body["item_id"] = request.itemId;
    }

    if (!$dara.isNull(request.itineraryNo)) {
      body["itinerary_no"] = request.itineraryNo;
    }

    if (!$dara.isNull(request.occupantInfoListShrink)) {
      body["occupant_info_list"] = request.occupantInfoListShrink;
    }

    if (!$dara.isNull(request.personPayPrice)) {
      body["person_pay_price"] = request.personPayPrice;
    }

    if (!$dara.isNull(request.promotionInfoShrink)) {
      body["promotion_info"] = request.promotionInfoShrink;
    }

    if (!$dara.isNull(request.ratePlanId)) {
      body["rate_plan_id"] = request.ratePlanId;
    }

    if (!$dara.isNull(request.roomId)) {
      body["room_id"] = request.roomId;
    }

    if (!$dara.isNull(request.roomNum)) {
      body["room_num"] = request.roomNum;
    }

    if (!$dara.isNull(request.sellerId)) {
      body["seller_id"] = request.sellerId;
    }

    if (!$dara.isNull(request.shid)) {
      body["shid"] = request.shid;
    }

    if (!$dara.isNull(request.totalOrderPrice)) {
      body["total_order_price"] = request.totalOrderPrice;
    }

    if (!$dara.isNull(request.validateResKey)) {
      body["validate_res_key"] = request.validateResKey;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "HotelOrderCreate",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-hotel/v1/orders/action/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.HotelOrderCreateResponse>(await this.callApi(params, req, runtime), new $_model.HotelOrderCreateResponse({}));
  }

  /**
   * 酒店订单创建
   * 
   * @param request - HotelOrderCreateRequest
   * @returns HotelOrderCreateResponse
   */
  async hotelOrderCreate(request: $_model.HotelOrderCreateRequest): Promise<$_model.HotelOrderCreateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.HotelOrderCreateHeaders({ });
    return await this.hotelOrderCreateWithOptions(request, headers, runtime);
  }

  /**
   * 酒店订单明细信息
   * 
   * @param request - HotelOrderDetailInfoRequest
   * @param headers - HotelOrderDetailInfoHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HotelOrderDetailInfoResponse
   */
  async hotelOrderDetailInfoWithOptions(request: $_model.HotelOrderDetailInfoRequest, headers: $_model.HotelOrderDetailInfoHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.HotelOrderDetailInfoResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.btripOrderId)) {
      query["btrip_order_id"] = request.btripOrderId;
    }

    if (!$dara.isNull(request.disOrderId)) {
      query["dis_order_id"] = request.disOrderId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "HotelOrderDetailInfo",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-hotel/v1/orders/action/detail`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.HotelOrderDetailInfoResponse>(await this.callApi(params, req, runtime), new $_model.HotelOrderDetailInfoResponse({}));
  }

  /**
   * 酒店订单明细信息
   * 
   * @param request - HotelOrderDetailInfoRequest
   * @returns HotelOrderDetailInfoResponse
   */
  async hotelOrderDetailInfo(request: $_model.HotelOrderDetailInfoRequest): Promise<$_model.HotelOrderDetailInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.HotelOrderDetailInfoHeaders({ });
    return await this.hotelOrderDetailInfoWithOptions(request, headers, runtime);
  }

  /**
   * 自营酒店订单查询
   * 
   * @param headers - HotelOrderInfoQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HotelOrderInfoQueryResponse
   */
  async hotelOrderInfoQueryWithOptions(orderId: string, headers: $_model.HotelOrderInfoQueryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.HotelOrderInfoQueryResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "HotelOrderInfoQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/order/v1/hotelOrders/${$dara.URL.percentEncode(orderId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.HotelOrderInfoQueryResponse>(await this.callApi(params, req, runtime), new $_model.HotelOrderInfoQueryResponse({}));
  }

  /**
   * 自营酒店订单查询
   * @returns HotelOrderInfoQueryResponse
   */
  async hotelOrderInfoQuery(orderId: string): Promise<$_model.HotelOrderInfoQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.HotelOrderInfoQueryHeaders({ });
    return await this.hotelOrderInfoQueryWithOptions(orderId, headers, runtime);
  }

  /**
   * 查询酒店订单列表
   * 
   * @param request - HotelOrderListQueryRequest
   * @param headers - HotelOrderListQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HotelOrderListQueryResponse
   */
  async hotelOrderListQueryWithOptions(request: $_model.HotelOrderListQueryRequest, headers: $_model.HotelOrderListQueryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.HotelOrderListQueryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.allApply)) {
      query["all_apply"] = request.allApply;
    }

    if (!$dara.isNull(request.applyId)) {
      query["apply_id"] = request.applyId;
    }

    if (!$dara.isNull(request.category)) {
      query["category"] = request.category;
    }

    if (!$dara.isNull(request.departId)) {
      query["depart_id"] = request.departId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["end_time"] = request.endTime;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["start_time"] = request.startTime;
    }

    if (!$dara.isNull(request.thirdpartApplyId)) {
      query["thirdpart_apply_id"] = request.thirdpartApplyId;
    }

    if (!$dara.isNull(request.updateEndTime)) {
      query["update_end_time"] = request.updateEndTime;
    }

    if (!$dara.isNull(request.updateStartTime)) {
      query["update_start_time"] = request.updateStartTime;
    }

    if (!$dara.isNull(request.userId)) {
      query["user_id"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "HotelOrderListQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/hotel/v1/order-list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.HotelOrderListQueryResponse>(await this.callApi(params, req, runtime), new $_model.HotelOrderListQueryResponse({}));
  }

  /**
   * 查询酒店订单列表
   * 
   * @param request - HotelOrderListQueryRequest
   * @returns HotelOrderListQueryResponse
   */
  async hotelOrderListQuery(request: $_model.HotelOrderListQueryRequest): Promise<$_model.HotelOrderListQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.HotelOrderListQueryHeaders({ });
    return await this.hotelOrderListQueryWithOptions(request, headers, runtime);
  }

  /**
   * 酒店订单支付
   * 
   * @param request - HotelOrderPayRequest
   * @param headers - HotelOrderPayHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HotelOrderPayResponse
   */
  async hotelOrderPayWithOptions(request: $_model.HotelOrderPayRequest, headers: $_model.HotelOrderPayHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.HotelOrderPayResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.btripOrderId)) {
      body["btrip_order_id"] = request.btripOrderId;
    }

    if (!$dara.isNull(request.btripUserId)) {
      body["btrip_user_id"] = request.btripUserId;
    }

    if (!$dara.isNull(request.companyPayFee)) {
      body["company_pay_fee"] = request.companyPayFee;
    }

    if (!$dara.isNull(request.personPayFee)) {
      body["person_pay_fee"] = request.personPayFee;
    }

    if (!$dara.isNull(request.thirdPayAccount)) {
      body["third_pay_account"] = request.thirdPayAccount;
    }

    if (!$dara.isNull(request.thirdTradeNo)) {
      body["third_trade_no"] = request.thirdTradeNo;
    }

    if (!$dara.isNull(request.totalPrice)) {
      body["total_price"] = request.totalPrice;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "HotelOrderPay",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-hotel/v1/orders/action/pay`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.HotelOrderPayResponse>(await this.callApi(params, req, runtime), new $_model.HotelOrderPayResponse({}));
  }

  /**
   * 酒店订单支付
   * 
   * @param request - HotelOrderPayRequest
   * @returns HotelOrderPayResponse
   */
  async hotelOrderPay(request: $_model.HotelOrderPayRequest): Promise<$_model.HotelOrderPayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.HotelOrderPayHeaders({ });
    return await this.hotelOrderPayWithOptions(request, headers, runtime);
  }

  /**
   * 酒店下单前校验
   * 
   * @param tmpReq - HotelOrderPreValidateRequest
   * @param headers - HotelOrderPreValidateHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HotelOrderPreValidateResponse
   */
  async hotelOrderPreValidateWithOptions(tmpReq: $_model.HotelOrderPreValidateRequest, headers: $_model.HotelOrderPreValidateHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.HotelOrderPreValidateResponse> {
    tmpReq.validate();
    let request = new $_model.HotelOrderPreValidateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.dailyList)) {
      request.dailyListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dailyList, "daily_list", "json");
    }

    if (!$dara.isNull(tmpReq.occupantInfoList)) {
      request.occupantInfoListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.occupantInfoList, "occupant_info_list", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.btripUserId)) {
      query["btrip_user_id"] = request.btripUserId;
    }

    if (!$dara.isNull(request.checkIn)) {
      query["check_in"] = request.checkIn;
    }

    if (!$dara.isNull(request.checkOut)) {
      query["check_out"] = request.checkOut;
    }

    if (!$dara.isNull(request.dailyListShrink)) {
      query["daily_list"] = request.dailyListShrink;
    }

    if (!$dara.isNull(request.itemId)) {
      query["item_id"] = request.itemId;
    }

    if (!$dara.isNull(request.numberOfAdultsPerRoom)) {
      query["number_of_adults_per_room"] = request.numberOfAdultsPerRoom;
    }

    if (!$dara.isNull(request.occupantInfoListShrink)) {
      query["occupant_info_list"] = request.occupantInfoListShrink;
    }

    if (!$dara.isNull(request.ratePlanId)) {
      query["rate_plan_id"] = request.ratePlanId;
    }

    if (!$dara.isNull(request.roomId)) {
      query["room_id"] = request.roomId;
    }

    if (!$dara.isNull(request.roomNum)) {
      query["room_num"] = request.roomNum;
    }

    if (!$dara.isNull(request.searchRoomPrice)) {
      query["search_room_price"] = request.searchRoomPrice;
    }

    if (!$dara.isNull(request.sellerId)) {
      query["seller_id"] = request.sellerId;
    }

    if (!$dara.isNull(request.shid)) {
      query["shid"] = request.shid;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "HotelOrderPreValidate",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-hotel/v1/orders/action/pre-validate`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.HotelOrderPreValidateResponse>(await this.callApi(params, req, runtime), new $_model.HotelOrderPreValidateResponse({}));
  }

  /**
   * 酒店下单前校验
   * 
   * @param request - HotelOrderPreValidateRequest
   * @returns HotelOrderPreValidateResponse
   */
  async hotelOrderPreValidate(request: $_model.HotelOrderPreValidateRequest): Promise<$_model.HotelOrderPreValidateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.HotelOrderPreValidateHeaders({ });
    return await this.hotelOrderPreValidateWithOptions(request, headers, runtime);
  }

  /**
   * 酒店订单查询
   * 
   * @param request - HotelOrderQueryRequest
   * @param headers - HotelOrderQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HotelOrderQueryResponse
   */
  async hotelOrderQueryWithOptions(request: $_model.HotelOrderQueryRequest, headers: $_model.HotelOrderQueryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.HotelOrderQueryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.orderId)) {
      query["order_id"] = request.orderId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "HotelOrderQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/hotel/v1/order`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.HotelOrderQueryResponse>(await this.callApi(params, req, runtime), new $_model.HotelOrderQueryResponse({}));
  }

  /**
   * 酒店订单查询
   * 
   * @param request - HotelOrderQueryRequest
   * @returns HotelOrderQueryResponse
   */
  async hotelOrderQuery(request: $_model.HotelOrderQueryRequest): Promise<$_model.HotelOrderQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.HotelOrderQueryHeaders({ });
    return await this.hotelOrderQueryWithOptions(request, headers, runtime);
  }

  /**
   * 酒店拉动态拉取价格接口(落地)
   * 
   * @param tmpReq - HotelPricePullRequest
   * @param headers - HotelPricePullHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HotelPricePullResponse
   */
  async hotelPricePullWithOptions(tmpReq: $_model.HotelPricePullRequest, headers: $_model.HotelPricePullHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.HotelPricePullResponse> {
    tmpReq.validate();
    let request = new $_model.HotelPricePullShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.hotelIds)) {
      request.hotelIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.hotelIds, "hotel_ids", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.btripUserId)) {
      query["btrip_user_id"] = request.btripUserId;
    }

    if (!$dara.isNull(request.checkIn)) {
      query["check_in"] = request.checkIn;
    }

    if (!$dara.isNull(request.checkOut)) {
      query["check_out"] = request.checkOut;
    }

    if (!$dara.isNull(request.cityCode)) {
      query["city_code"] = request.cityCode;
    }

    if (!$dara.isNull(request.hotelIdsShrink)) {
      query["hotel_ids"] = request.hotelIdsShrink;
    }

    if (!$dara.isNull(request.paymentType)) {
      query["payment_type"] = request.paymentType;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "HotelPricePull",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-hotel/v1/prices/action/pull`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.HotelPricePullResponse>(await this.callApi(params, req, runtime), new $_model.HotelPricePullResponse({}));
  }

  /**
   * 酒店拉动态拉取价格接口(落地)
   * 
   * @param request - HotelPricePullRequest
   * @returns HotelPricePullResponse
   */
  async hotelPricePull(request: $_model.HotelPricePullRequest): Promise<$_model.HotelPricePullResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.HotelPricePullHeaders({ });
    return await this.hotelPricePullWithOptions(request, headers, runtime);
  }

  /**
   * 获取酒店静态房型详情
   * 
   * @param tmpReq - HotelRoomInfoRequest
   * @param headers - HotelRoomInfoHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HotelRoomInfoResponse
   */
  async hotelRoomInfoWithOptions(tmpReq: $_model.HotelRoomInfoRequest, headers: $_model.HotelRoomInfoHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.HotelRoomInfoResponse> {
    tmpReq.validate();
    let request = new $_model.HotelRoomInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.roomIds)) {
      request.roomIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.roomIds, "room_ids", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.roomIdsShrink)) {
      query["room_ids"] = request.roomIdsShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "HotelRoomInfo",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-hotel/v1/room-infos`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.HotelRoomInfoResponse>(await this.callApi(params, req, runtime), new $_model.HotelRoomInfoResponse({}));
  }

  /**
   * 获取酒店静态房型详情
   * 
   * @param request - HotelRoomInfoRequest
   * @returns HotelRoomInfoResponse
   */
  async hotelRoomInfo(request: $_model.HotelRoomInfoRequest): Promise<$_model.HotelRoomInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.HotelRoomInfoHeaders({ });
    return await this.hotelRoomInfoWithOptions(request, headers, runtime);
  }

  /**
   * 酒店列表搜索接口(直连)
   * 
   * @param tmpReq - HotelSearchRequest
   * @param headers - HotelSearchHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HotelSearchResponse
   */
  async hotelSearchWithOptions(tmpReq: $_model.HotelSearchRequest, headers: $_model.HotelSearchHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.HotelSearchResponse> {
    tmpReq.validate();
    let request = new $_model.HotelSearchShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.brandCode)) {
      request.brandCodeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.brandCode, "brand_code", "json");
    }

    if (!$dara.isNull(tmpReq.shids)) {
      request.shidsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.shids, "shids", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.adultNum)) {
      query["adult_num"] = request.adultNum;
    }

    if (!$dara.isNull(request.brandCodeShrink)) {
      query["brand_code"] = request.brandCodeShrink;
    }

    if (!$dara.isNull(request.btripUserId)) {
      query["btrip_user_id"] = request.btripUserId;
    }

    if (!$dara.isNull(request.checkInDate)) {
      query["check_in_date"] = request.checkInDate;
    }

    if (!$dara.isNull(request.checkOutDate)) {
      query["check_out_date"] = request.checkOutDate;
    }

    if (!$dara.isNull(request.cityCode)) {
      query["city_code"] = request.cityCode;
    }

    if (!$dara.isNull(request.dir)) {
      query["dir"] = request.dir;
    }

    if (!$dara.isNull(request.distance)) {
      query["distance"] = request.distance;
    }

    if (!$dara.isNull(request.districtCode)) {
      query["district_code"] = request.districtCode;
    }

    if (!$dara.isNull(request.hotelStar)) {
      query["hotel_star"] = request.hotelStar;
    }

    if (!$dara.isNull(request.isProtocol)) {
      query["is_protocol"] = request.isProtocol;
    }

    if (!$dara.isNull(request.keyWords)) {
      query["key_words"] = request.keyWords;
    }

    if (!$dara.isNull(request.location)) {
      query["location"] = request.location;
    }

    if (!$dara.isNull(request.maxPrice)) {
      query["max_price"] = request.maxPrice;
    }

    if (!$dara.isNull(request.minPrice)) {
      query["min_price"] = request.minPrice;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["page_no"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!$dara.isNull(request.payOverType)) {
      query["pay_over_type"] = request.payOverType;
    }

    if (!$dara.isNull(request.paymentType)) {
      query["payment_type"] = request.paymentType;
    }

    if (!$dara.isNull(request.shidsShrink)) {
      query["shids"] = request.shidsShrink;
    }

    if (!$dara.isNull(request.sortCode)) {
      query["sort_code"] = request.sortCode;
    }

    if (!$dara.isNull(request.superMan)) {
      query["super_man"] = request.superMan;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "HotelSearch",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-hotel/v1/hotels/action/search`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.HotelSearchResponse>(await this.callApi(params, req, runtime), new $_model.HotelSearchResponse({}));
  }

  /**
   * 酒店列表搜索接口(直连)
   * 
   * @param request - HotelSearchRequest
   * @returns HotelSearchResponse
   */
  async hotelSearch(request: $_model.HotelSearchRequest): Promise<$_model.HotelSearchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.HotelSearchHeaders({ });
    return await this.hotelSearchWithOptions(request, headers, runtime);
  }

  /**
   * 查询酒店静态详情
   * 
   * @param tmpReq - HotelStaticInfoRequest
   * @param headers - HotelStaticInfoHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HotelStaticInfoResponse
   */
  async hotelStaticInfoWithOptions(tmpReq: $_model.HotelStaticInfoRequest, headers: $_model.HotelStaticInfoHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.HotelStaticInfoResponse> {
    tmpReq.validate();
    let request = new $_model.HotelStaticInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.hotelIds)) {
      request.hotelIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.hotelIds, "hotel_ids", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelIdsShrink)) {
      query["hotel_ids"] = request.hotelIdsShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "HotelStaticInfo",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-hotel/v1/static-infos`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.HotelStaticInfoResponse>(await this.callApi(params, req, runtime), new $_model.HotelStaticInfoResponse({}));
  }

  /**
   * 查询酒店静态详情
   * 
   * @param request - HotelStaticInfoRequest
   * @returns HotelStaticInfoResponse
   */
  async hotelStaticInfo(request: $_model.HotelStaticInfoRequest): Promise<$_model.HotelStaticInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.HotelStaticInfoHeaders({ });
    return await this.hotelStaticInfoWithOptions(request, headers, runtime);
  }

  /**
   * 酒店关键词搜索
   * 
   * @param request - HotelSuggestV2Request
   * @param headers - HotelSuggestV2Headers
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HotelSuggestV2Response
   */
  async hotelSuggestV2WithOptions(request: $_model.HotelSuggestV2Request, headers: $_model.HotelSuggestV2Headers, runtime: $dara.RuntimeOptions): Promise<$_model.HotelSuggestV2Response> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.btripUserId)) {
      query["btrip_user_id"] = request.btripUserId;
    }

    if (!$dara.isNull(request.checkIn)) {
      query["check_in"] = request.checkIn;
    }

    if (!$dara.isNull(request.checkOut)) {
      query["check_out"] = request.checkOut;
    }

    if (!$dara.isNull(request.cityCode)) {
      query["city_code"] = request.cityCode;
    }

    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.searchType)) {
      query["search_type"] = request.searchType;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "HotelSuggestV2",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-hotel/v2/suggest-infos`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.HotelSuggestV2Response>(await this.callApi(params, req, runtime), new $_model.HotelSuggestV2Response({}));
  }

  /**
   * 酒店关键词搜索
   * 
   * @param request - HotelSuggestV2Request
   * @returns HotelSuggestV2Response
   */
  async hotelSuggestV2(request: $_model.HotelSuggestV2Request): Promise<$_model.HotelSuggestV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.HotelSuggestV2Headers({ });
    return await this.hotelSuggestV2WithOptions(request, headers, runtime);
  }

  /**
   * 国际机票订单详情
   * 
   * @param request - IFlightOrderDetailQueryRequest
   * @param headers - IFlightOrderDetailQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns IFlightOrderDetailQueryResponse
   */
  async iFlightOrderDetailQueryWithOptions(request: $_model.IFlightOrderDetailQueryRequest, headers: $_model.IFlightOrderDetailQueryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.IFlightOrderDetailQueryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.orderId)) {
      query["order_id"] = request.orderId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "IFlightOrderDetailQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/open/v1/intlFlight-order-detail-query`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.IFlightOrderDetailQueryResponse>(await this.callApi(params, req, runtime), new $_model.IFlightOrderDetailQueryResponse({}));
  }

  /**
   * 国际机票订单详情
   * 
   * @param request - IFlightOrderDetailQueryRequest
   * @returns IFlightOrderDetailQueryResponse
   */
  async iFlightOrderDetailQuery(request: $_model.IFlightOrderDetailQueryRequest): Promise<$_model.IFlightOrderDetailQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.IFlightOrderDetailQueryHeaders({ });
    return await this.iFlightOrderDetailQueryWithOptions(request, headers, runtime);
  }

  /**
   * 国际机票订单列表
   * 
   * @param tmpReq - IFlightOrderListQueryRequest
   * @param headers - IFlightOrderListQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns IFlightOrderListQueryResponse
   */
  async iFlightOrderListQueryWithOptions(tmpReq: $_model.IFlightOrderListQueryRequest, headers: $_model.IFlightOrderListQueryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.IFlightOrderListQueryResponse> {
    tmpReq.validate();
    let request = new $_model.IFlightOrderListQueryShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.applyIdList)) {
      request.applyIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.applyIdList, "apply_id_list", "json");
    }

    if (!$dara.isNull(tmpReq.bookTypeList)) {
      request.bookTypeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bookTypeList, "book_type_list", "json");
    }

    if (!$dara.isNull(tmpReq.bookerId)) {
      request.bookerIdShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bookerId, "booker_id", "json");
    }

    if (!$dara.isNull(tmpReq.thirdPartApplyIdList)) {
      request.thirdPartApplyIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.thirdPartApplyIdList, "third_part_apply_id_list", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applyIdListShrink)) {
      query["apply_id_list"] = request.applyIdListShrink;
    }

    if (!$dara.isNull(request.bookTypeListShrink)) {
      query["book_type_list"] = request.bookTypeListShrink;
    }

    if (!$dara.isNull(request.bookerIdShrink)) {
      query["booker_id"] = request.bookerIdShrink;
    }

    if (!$dara.isNull(request.endDate)) {
      query["end_date"] = request.endDate;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!$dara.isNull(request.scrollId)) {
      query["scroll_id"] = request.scrollId;
    }

    if (!$dara.isNull(request.startDate)) {
      query["start_date"] = request.startDate;
    }

    if (!$dara.isNull(request.thirdPartApplyIdListShrink)) {
      query["third_part_apply_id_list"] = request.thirdPartApplyIdListShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "IFlightOrderListQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/open/v1/intlFlight-order-list-query`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.IFlightOrderListQueryResponse>(await this.callApi(params, req, runtime), new $_model.IFlightOrderListQueryResponse({}));
  }

  /**
   * 国际机票订单列表
   * 
   * @param request - IFlightOrderListQueryRequest
   * @returns IFlightOrderListQueryResponse
   */
  async iFlightOrderListQuery(request: $_model.IFlightOrderListQueryRequest): Promise<$_model.IFlightOrderListQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.IFlightOrderListQueryHeaders({ });
    return await this.iFlightOrderListQueryWithOptions(request, headers, runtime);
  }

  /**
   * 查询国际机票记账数据
   * 
   * @param request - IeFlightBillSettlementQueryRequest
   * @param headers - IeFlightBillSettlementQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns IeFlightBillSettlementQueryResponse
   */
  async ieFlightBillSettlementQueryWithOptions(request: $_model.IeFlightBillSettlementQueryRequest, headers: $_model.IeFlightBillSettlementQueryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.IeFlightBillSettlementQueryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.billBatch)) {
      query["bill_batch"] = request.billBatch;
    }

    if (!$dara.isNull(request.orderId)) {
      query["order_id"] = request.orderId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["page_no"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!$dara.isNull(request.periodEnd)) {
      query["period_end"] = request.periodEnd;
    }

    if (!$dara.isNull(request.periodStart)) {
      query["period_start"] = request.periodStart;
    }

    if (!$dara.isNull(request.scrollId)) {
      query["scroll_id"] = request.scrollId;
    }

    if (!$dara.isNull(request.scrollMod)) {
      query["scroll_mod"] = request.scrollMod;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "IeFlightBillSettlementQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/ie-flight/v1/bill-settlement`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.IeFlightBillSettlementQueryResponse>(await this.callApi(params, req, runtime), new $_model.IeFlightBillSettlementQueryResponse({}));
  }

  /**
   * 查询国际机票记账数据
   * 
   * @param request - IeFlightBillSettlementQueryRequest
   * @returns IeFlightBillSettlementQueryResponse
   */
  async ieFlightBillSettlementQuery(request: $_model.IeFlightBillSettlementQueryRequest): Promise<$_model.IeFlightBillSettlementQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.IeFlightBillSettlementQueryHeaders({ });
    return await this.ieFlightBillSettlementQueryWithOptions(request, headers, runtime);
  }

  /**
   * 查询国际/中国港澳台酒店记账数据
   * 
   * @param request - IeHotelBillSettlementQueryRequest
   * @param headers - IeHotelBillSettlementQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns IeHotelBillSettlementQueryResponse
   */
  async ieHotelBillSettlementQueryWithOptions(request: $_model.IeHotelBillSettlementQueryRequest, headers: $_model.IeHotelBillSettlementQueryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.IeHotelBillSettlementQueryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.billBatch)) {
      query["bill_batch"] = request.billBatch;
    }

    if (!$dara.isNull(request.category)) {
      query["category"] = request.category;
    }

    if (!$dara.isNull(request.orderId)) {
      query["order_id"] = request.orderId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["page_no"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!$dara.isNull(request.periodEnd)) {
      query["period_end"] = request.periodEnd;
    }

    if (!$dara.isNull(request.periodStart)) {
      query["period_start"] = request.periodStart;
    }

    if (!$dara.isNull(request.scrollId)) {
      query["scroll_id"] = request.scrollId;
    }

    if (!$dara.isNull(request.scrollMod)) {
      query["scroll_mod"] = request.scrollMod;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "IeHotelBillSettlementQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/ie-hotel/v1/bill-settlement`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.IeHotelBillSettlementQueryResponse>(await this.callApi(params, req, runtime), new $_model.IeHotelBillSettlementQueryResponse({}));
  }

  /**
   * 查询国际/中国港澳台酒店记账数据
   * 
   * @param request - IeHotelBillSettlementQueryRequest
   * @returns IeHotelBillSettlementQueryResponse
   */
  async ieHotelBillSettlementQuery(request: $_model.IeHotelBillSettlementQueryRequest): Promise<$_model.IeHotelBillSettlementQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.IeHotelBillSettlementQueryHeaders({ });
    return await this.ieHotelBillSettlementQueryWithOptions(request, headers, runtime);
  }

  /**
   * 查询保险电子发票
   * 
   * @param request - InsInvoiceScanQueryRequest
   * @param headers - InsInvoiceScanQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InsInvoiceScanQueryResponse
   */
  async insInvoiceScanQueryWithOptions(request: $_model.InsInvoiceScanQueryRequest, headers: $_model.InsInvoiceScanQueryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.InsInvoiceScanQueryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.billDate)) {
      query["bill_date"] = request.billDate;
    }

    if (!$dara.isNull(request.billId)) {
      query["bill_id"] = request.billId;
    }

    if (!$dara.isNull(request.invoiceSubTaskId)) {
      query["invoice_sub_task_id"] = request.invoiceSubTaskId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["page_no"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InsInvoiceScanQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/scan/v1/ins-invoice`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.InsInvoiceScanQueryResponse>(await this.callApi(params, req, runtime), new $_model.InsInvoiceScanQueryResponse({}));
  }

  /**
   * 查询保险电子发票
   * 
   * @param request - InsInvoiceScanQueryRequest
   * @returns InsInvoiceScanQueryResponse
   */
  async insInvoiceScanQuery(request: $_model.InsInvoiceScanQueryRequest): Promise<$_model.InsInvoiceScanQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.InsInvoiceScanQueryHeaders({ });
    return await this.insInvoiceScanQueryWithOptions(request, headers, runtime);
  }

  /**
   * 保险订单申请
   * 
   * @param request - InsureOrderApplyRequest
   * @param headers - InsureOrderApplyHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InsureOrderApplyResponse
   */
  async insureOrderApplyWithOptions(request: $_model.InsureOrderApplyRequest, headers: $_model.InsureOrderApplyHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.InsureOrderApplyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.btripUserId)) {
      body["btrip_user_id"] = request.btripUserId;
    }

    if (!$dara.isNull(request.buyerName)) {
      body["buyer_name"] = request.buyerName;
    }

    if (!$dara.isNull(request.insOrderId)) {
      body["ins_order_id"] = request.insOrderId;
    }

    if (!$dara.isNull(request.isvName)) {
      body["isv_name"] = request.isvName;
    }

    if (!$dara.isNull(request.outOrderId)) {
      body["out_order_id"] = request.outOrderId;
    }

    if (!$dara.isNull(request.outSubOrderId)) {
      body["out_sub_order_id"] = request.outSubOrderId;
    }

    if (!$dara.isNull(request.supplierCode)) {
      body["supplier_code"] = request.supplierCode;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "InsureOrderApply",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-flight/v1/insurances/action/apply`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InsureOrderApplyResponse>(await this.callApi(params, req, runtime), new $_model.InsureOrderApplyResponse({}));
  }

  /**
   * 保险订单申请
   * 
   * @param request - InsureOrderApplyRequest
   * @returns InsureOrderApplyResponse
   */
  async insureOrderApply(request: $_model.InsureOrderApplyRequest): Promise<$_model.InsureOrderApplyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.InsureOrderApplyHeaders({ });
    return await this.insureOrderApplyWithOptions(request, headers, runtime);
  }

  /**
   * 保险订单取消
   * 
   * @param request - InsureOrderCancelRequest
   * @param headers - InsureOrderCancelHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InsureOrderCancelResponse
   */
  async insureOrderCancelWithOptions(insOrderId: string, request: $_model.InsureOrderCancelRequest, headers: $_model.InsureOrderCancelHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.InsureOrderCancelResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.btripUserId)) {
      query["btrip_user_id"] = request.btripUserId;
    }

    if (!$dara.isNull(request.buyerName)) {
      query["buyer_name"] = request.buyerName;
    }

    if (!$dara.isNull(request.isvName)) {
      query["isv_name"] = request.isvName;
    }

    if (!$dara.isNull(request.supplierCode)) {
      query["supplier_code"] = request.supplierCode;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InsureOrderCancel",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-flight/v1/insurances/${$dara.URL.percentEncode(insOrderId)}/action/cancel`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.InsureOrderCancelResponse>(await this.callApi(params, req, runtime), new $_model.InsureOrderCancelResponse({}));
  }

  /**
   * 保险订单取消
   * 
   * @param request - InsureOrderCancelRequest
   * @returns InsureOrderCancelResponse
   */
  async insureOrderCancel(insOrderId: string, request: $_model.InsureOrderCancelRequest): Promise<$_model.InsureOrderCancelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.InsureOrderCancelHeaders({ });
    return await this.insureOrderCancelWithOptions(insOrderId, request, headers, runtime);
  }

  /**
   * 保险订单创建
   * 
   * @param tmpReq - InsureOrderCreateRequest
   * @param headers - InsureOrderCreateHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InsureOrderCreateResponse
   */
  async insureOrderCreateWithOptions(tmpReq: $_model.InsureOrderCreateRequest, headers: $_model.InsureOrderCreateHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.InsureOrderCreateResponse> {
    tmpReq.validate();
    let request = new $_model.InsureOrderCreateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.applicant)) {
      request.applicantShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.applicant, "applicant", "json");
    }

    if (!$dara.isNull(tmpReq.insPersonAndSegmentList)) {
      request.insPersonAndSegmentListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.insPersonAndSegmentList, "ins_person_and_segment_list", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicantShrink)) {
      body["applicant"] = request.applicantShrink;
    }

    if (!$dara.isNull(request.btripUserId)) {
      body["btrip_user_id"] = request.btripUserId;
    }

    if (!$dara.isNull(request.buyerName)) {
      body["buyer_name"] = request.buyerName;
    }

    if (!$dara.isNull(request.insPersonAndSegmentListShrink)) {
      body["ins_person_and_segment_list"] = request.insPersonAndSegmentListShrink;
    }

    if (!$dara.isNull(request.isvName)) {
      body["isv_name"] = request.isvName;
    }

    if (!$dara.isNull(request.outInsOrderId)) {
      body["out_ins_order_id"] = request.outInsOrderId;
    }

    if (!$dara.isNull(request.outOrderId)) {
      body["out_order_id"] = request.outOrderId;
    }

    if (!$dara.isNull(request.outSubOrderId)) {
      body["out_sub_order_id"] = request.outSubOrderId;
    }

    if (!$dara.isNull(request.supplierCode)) {
      body["supplier_code"] = request.supplierCode;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "InsureOrderCreate",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-flight/v1/insurances/action/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InsureOrderCreateResponse>(await this.callApi(params, req, runtime), new $_model.InsureOrderCreateResponse({}));
  }

  /**
   * 保险订单创建
   * 
   * @param request - InsureOrderCreateRequest
   * @returns InsureOrderCreateResponse
   */
  async insureOrderCreate(request: $_model.InsureOrderCreateRequest): Promise<$_model.InsureOrderCreateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.InsureOrderCreateHeaders({ });
    return await this.insureOrderCreateWithOptions(request, headers, runtime);
  }

  /**
   * 保险订单查询
   * 
   * @param request - InsureOrderDetailRequest
   * @param headers - InsureOrderDetailHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InsureOrderDetailResponse
   */
  async insureOrderDetailWithOptions(request: $_model.InsureOrderDetailRequest, headers: $_model.InsureOrderDetailHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.InsureOrderDetailResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.btripUserId)) {
      query["btrip_user_id"] = request.btripUserId;
    }

    if (!$dara.isNull(request.buyerName)) {
      query["buyer_name"] = request.buyerName;
    }

    if (!$dara.isNull(request.insOrderId)) {
      query["ins_order_id"] = request.insOrderId;
    }

    if (!$dara.isNull(request.isvName)) {
      query["isv_name"] = request.isvName;
    }

    if (!$dara.isNull(request.supplierCode)) {
      query["supplier_code"] = request.supplierCode;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InsureOrderDetail",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-flight/v1/insurances/action/detail`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.InsureOrderDetailResponse>(await this.callApi(params, req, runtime), new $_model.InsureOrderDetailResponse({}));
  }

  /**
   * 保险订单查询
   * 
   * @param request - InsureOrderDetailRequest
   * @returns InsureOrderDetailResponse
   */
  async insureOrderDetail(request: $_model.InsureOrderDetailRequest): Promise<$_model.InsureOrderDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.InsureOrderDetailHeaders({ });
    return await this.insureOrderDetailWithOptions(request, headers, runtime);
  }

  /**
   * 保险订单支付
   * 
   * @param request - InsureOrderPayRequest
   * @param headers - InsureOrderPayHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InsureOrderPayResponse
   */
  async insureOrderPayWithOptions(insOrderId: string, request: $_model.InsureOrderPayRequest, headers: $_model.InsureOrderPayHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.InsureOrderPayResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.btripUserId)) {
      body["btrip_user_id"] = request.btripUserId;
    }

    if (!$dara.isNull(request.buyerName)) {
      body["buyer_name"] = request.buyerName;
    }

    if (!$dara.isNull(request.isvName)) {
      body["isv_name"] = request.isvName;
    }

    if (!$dara.isNull(request.outOrderId)) {
      body["out_order_id"] = request.outOrderId;
    }

    if (!$dara.isNull(request.outSubOrderId)) {
      body["out_sub_order_id"] = request.outSubOrderId;
    }

    if (!$dara.isNull(request.paymentAmount)) {
      body["payment_amount"] = request.paymentAmount;
    }

    if (!$dara.isNull(request.supplierCode)) {
      body["supplier_code"] = request.supplierCode;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "InsureOrderPay",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-flight/v1/insurances/${$dara.URL.percentEncode(insOrderId)}/action/pay`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InsureOrderPayResponse>(await this.callApi(params, req, runtime), new $_model.InsureOrderPayResponse({}));
  }

  /**
   * 保险订单支付
   * 
   * @param request - InsureOrderPayRequest
   * @returns InsureOrderPayResponse
   */
  async insureOrderPay(insOrderId: string, request: $_model.InsureOrderPayRequest): Promise<$_model.InsureOrderPayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.InsureOrderPayHeaders({ });
    return await this.insureOrderPayWithOptions(insOrderId, request, headers, runtime);
  }

  /**
   * 保险订单退保
   * 
   * @param tmpReq - InsureOrderRefundRequest
   * @param headers - InsureOrderRefundHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InsureOrderRefundResponse
   */
  async insureOrderRefundWithOptions(insOrderId: string, tmpReq: $_model.InsureOrderRefundRequest, headers: $_model.InsureOrderRefundHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.InsureOrderRefundResponse> {
    tmpReq.validate();
    let request = new $_model.InsureOrderRefundShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.policyNoList)) {
      request.policyNoListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.policyNoList, "policy_no_list", "json");
    }

    if (!$dara.isNull(tmpReq.subInsOrderIds)) {
      request.subInsOrderIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.subInsOrderIds, "sub_ins_order_ids", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.btripUserId)) {
      body["btrip_user_id"] = request.btripUserId;
    }

    if (!$dara.isNull(request.buyerName)) {
      body["buyer_name"] = request.buyerName;
    }

    if (!$dara.isNull(request.isvName)) {
      body["isv_name"] = request.isvName;
    }

    if (!$dara.isNull(request.outApplyId)) {
      body["out_apply_id"] = request.outApplyId;
    }

    if (!$dara.isNull(request.policyNoListShrink)) {
      body["policy_no_list"] = request.policyNoListShrink;
    }

    if (!$dara.isNull(request.subInsOrderIdsShrink)) {
      body["sub_ins_order_ids"] = request.subInsOrderIdsShrink;
    }

    if (!$dara.isNull(request.supplierCode)) {
      body["supplier_code"] = request.supplierCode;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "InsureOrderRefund",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-flight/v1/insurances/${$dara.URL.percentEncode(insOrderId)}/action/refund`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InsureOrderRefundResponse>(await this.callApi(params, req, runtime), new $_model.InsureOrderRefundResponse({}));
  }

  /**
   * 保险订单退保
   * 
   * @param request - InsureOrderRefundRequest
   * @returns InsureOrderRefundResponse
   */
  async insureOrderRefund(insOrderId: string, request: $_model.InsureOrderRefundRequest): Promise<$_model.InsureOrderRefundResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.InsureOrderRefundHeaders({ });
    return await this.insureOrderRefundWithOptions(insOrderId, request, headers, runtime);
  }

  /**
   * 查询保单详情链接
   * 
   * @param headers - InsureOrderUrlDetailHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InsureOrderUrlDetailResponse
   */
  async insureOrderUrlDetailWithOptions(insOrderId: string, headers: $_model.InsureOrderUrlDetailHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.InsureOrderUrlDetailResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "InsureOrderUrlDetail",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-flight/v1/insurances/${$dara.URL.percentEncode(insOrderId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.InsureOrderUrlDetailResponse>(await this.callApi(params, req, runtime), new $_model.InsureOrderUrlDetailResponse({}));
  }

  /**
   * 查询保单详情链接
   * @returns InsureOrderUrlDetailResponse
   */
  async insureOrderUrlDetail(insOrderId: string): Promise<$_model.InsureOrderUrlDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.InsureOrderUrlDetailHeaders({ });
    return await this.insureOrderUrlDetailWithOptions(insOrderId, headers, runtime);
  }

  /**
   * 退保详情查询
   * 
   * @param request - InsureRefundDetailRequest
   * @param headers - InsureRefundDetailHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InsureRefundDetailResponse
   */
  async insureRefundDetailWithOptions(request: $_model.InsureRefundDetailRequest, headers: $_model.InsureRefundDetailHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.InsureRefundDetailResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applyId)) {
      query["apply_id"] = request.applyId;
    }

    if (!$dara.isNull(request.btripUserId)) {
      query["btrip_user_id"] = request.btripUserId;
    }

    if (!$dara.isNull(request.buyerName)) {
      query["buyer_name"] = request.buyerName;
    }

    if (!$dara.isNull(request.insOrderId)) {
      query["ins_order_id"] = request.insOrderId;
    }

    if (!$dara.isNull(request.isvName)) {
      query["isv_name"] = request.isvName;
    }

    if (!$dara.isNull(request.outApplyId)) {
      query["out_apply_id"] = request.outApplyId;
    }

    if (!$dara.isNull(request.supplierCode)) {
      query["supplier_code"] = request.supplierCode;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InsureRefundDetail",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-flight/v1/insurances/action/refund-detail`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.InsureRefundDetailResponse>(await this.callApi(params, req, runtime), new $_model.InsureRefundDetailResponse({}));
  }

  /**
   * 退保详情查询
   * 
   * @param request - InsureRefundDetailRequest
   * @returns InsureRefundDetailResponse
   */
  async insureRefundDetail(request: $_model.InsureRefundDetailRequest): Promise<$_model.InsureRefundDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.InsureRefundDetailHeaders({ });
    return await this.insureRefundDetailWithOptions(request, headers, runtime);
  }

  /**
   * 国际机票创建订单
   * 
   * @param tmpReq - IntlFlightCreateOrderRequest
   * @param headers - IntlFlightCreateOrderHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns IntlFlightCreateOrderResponse
   */
  async intlFlightCreateOrderWithOptions(tmpReq: $_model.IntlFlightCreateOrderRequest, headers: $_model.IntlFlightCreateOrderHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.IntlFlightCreateOrderResponse> {
    tmpReq.validate();
    let request = new $_model.IntlFlightCreateOrderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.contactInfo)) {
      request.contactInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.contactInfo, "contact_info", "json");
    }

    if (!$dara.isNull(tmpReq.extraInfo)) {
      request.extraInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extraInfo, "extra_info", "json");
    }

    if (!$dara.isNull(tmpReq.passengerList)) {
      request.passengerListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.passengerList, "passenger_list", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.asyncCreateOrderKey)) {
      body["async_create_order_key"] = request.asyncCreateOrderKey;
    }

    if (!$dara.isNull(request.asyncCreateOrderMode)) {
      body["async_create_order_mode"] = request.asyncCreateOrderMode;
    }

    if (!$dara.isNull(request.btripUserId)) {
      body["btrip_user_id"] = request.btripUserId;
    }

    if (!$dara.isNull(request.buyerName)) {
      body["buyer_name"] = request.buyerName;
    }

    if (!$dara.isNull(request.contactInfoShrink)) {
      body["contact_info"] = request.contactInfoShrink;
    }

    if (!$dara.isNull(request.extraInfoShrink)) {
      body["extra_info"] = request.extraInfoShrink;
    }

    if (!$dara.isNull(request.isvName)) {
      body["isv_name"] = request.isvName;
    }

    if (!$dara.isNull(request.orderPrice)) {
      body["order_price"] = request.orderPrice;
    }

    if (!$dara.isNull(request.otaItemId)) {
      body["ota_item_id"] = request.otaItemId;
    }

    if (!$dara.isNull(request.outOrderId)) {
      body["out_order_id"] = request.outOrderId;
    }

    if (!$dara.isNull(request.passengerListShrink)) {
      body["passenger_list"] = request.passengerListShrink;
    }

    if (!$dara.isNull(request.renderKey)) {
      body["render_key"] = request.renderKey;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "IntlFlightCreateOrder",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/intl-flight/v1/order/action/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.IntlFlightCreateOrderResponse>(await this.callApi(params, req, runtime), new $_model.IntlFlightCreateOrderResponse({}));
  }

  /**
   * 国际机票创建订单
   * 
   * @param request - IntlFlightCreateOrderRequest
   * @returns IntlFlightCreateOrderResponse
   */
  async intlFlightCreateOrder(request: $_model.IntlFlightCreateOrderRequest): Promise<$_model.IntlFlightCreateOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.IntlFlightCreateOrderHeaders({ });
    return await this.intlFlightCreateOrderWithOptions(request, headers, runtime);
  }

  /**
   * 国际机票验舱验价
   * 
   * @param tmpReq - IntlFlightInventoryPriceCheckRequest
   * @param headers - IntlFlightInventoryPriceCheckHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns IntlFlightInventoryPriceCheckResponse
   */
  async intlFlightInventoryPriceCheckWithOptions(tmpReq: $_model.IntlFlightInventoryPriceCheckRequest, headers: $_model.IntlFlightInventoryPriceCheckHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.IntlFlightInventoryPriceCheckResponse> {
    tmpReq.validate();
    let request = new $_model.IntlFlightInventoryPriceCheckShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.passengerList)) {
      request.passengerListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.passengerList, "passenger_list", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.btripUserId)) {
      query["btrip_user_id"] = request.btripUserId;
    }

    if (!$dara.isNull(request.buyerName)) {
      query["buyer_name"] = request.buyerName;
    }

    if (!$dara.isNull(request.isvName)) {
      query["isv_name"] = request.isvName;
    }

    if (!$dara.isNull(request.orderPrice)) {
      query["order_price"] = request.orderPrice;
    }

    if (!$dara.isNull(request.otaItemId)) {
      query["ota_item_id"] = request.otaItemId;
    }

    if (!$dara.isNull(request.passengerListShrink)) {
      query["passenger_list"] = request.passengerListShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "IntlFlightInventoryPriceCheck",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/intl-flight/v1/flights/action/inventory-price-check`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.IntlFlightInventoryPriceCheckResponse>(await this.callApi(params, req, runtime), new $_model.IntlFlightInventoryPriceCheckResponse({}));
  }

  /**
   * 国际机票验舱验价
   * 
   * @param request - IntlFlightInventoryPriceCheckRequest
   * @returns IntlFlightInventoryPriceCheckResponse
   */
  async intlFlightInventoryPriceCheck(request: $_model.IntlFlightInventoryPriceCheckRequest): Promise<$_model.IntlFlightInventoryPriceCheckResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.IntlFlightInventoryPriceCheckHeaders({ });
    return await this.intlFlightInventoryPriceCheckWithOptions(request, headers, runtime);
  }

  /**
   * 国际机票航班搜索
   * 
   * @param tmpReq - IntlFlightListingSearchRequest
   * @param headers - IntlFlightListingSearchHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns IntlFlightListingSearchResponse
   */
  async intlFlightListingSearchWithOptions(tmpReq: $_model.IntlFlightListingSearchRequest, headers: $_model.IntlFlightListingSearchHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.IntlFlightListingSearchResponse> {
    tmpReq.validate();
    let request = new $_model.IntlFlightListingSearchShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.searchJourneys)) {
      request.searchJourneysShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.searchJourneys, "search_journeys", "json");
    }

    if (!$dara.isNull(tmpReq.searchPassengerList)) {
      request.searchPassengerListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.searchPassengerList, "search_passenger_list", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.btripUserId)) {
      query["btrip_user_id"] = request.btripUserId;
    }

    if (!$dara.isNull(request.buyerName)) {
      query["buyer_name"] = request.buyerName;
    }

    if (!$dara.isNull(request.cabinType)) {
      query["cabin_type"] = request.cabinType;
    }

    if (!$dara.isNull(request.isvName)) {
      query["isv_name"] = request.isvName;
    }

    if (!$dara.isNull(request.outWheelSearch)) {
      query["out_wheel_search"] = request.outWheelSearch;
    }

    if (!$dara.isNull(request.queryRecordId)) {
      query["query_record_id"] = request.queryRecordId;
    }

    if (!$dara.isNull(request.searchJourneysShrink)) {
      query["search_journeys"] = request.searchJourneysShrink;
    }

    if (!$dara.isNull(request.searchMode)) {
      query["search_mode"] = request.searchMode;
    }

    if (!$dara.isNull(request.searchPassengerListShrink)) {
      query["search_passenger_list"] = request.searchPassengerListShrink;
    }

    if (!$dara.isNull(request.token)) {
      query["token"] = request.token;
    }

    if (!$dara.isNull(request.tripType)) {
      query["trip_type"] = request.tripType;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "IntlFlightListingSearch",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/intl-flight/v1/flights/action/listing-search`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.IntlFlightListingSearchResponse>(await this.callApi(params, req, runtime), new $_model.IntlFlightListingSearchResponse({}));
  }

  /**
   * 国际机票航班搜索
   * 
   * @param request - IntlFlightListingSearchRequest
   * @returns IntlFlightListingSearchResponse
   */
  async intlFlightListingSearch(request: $_model.IntlFlightListingSearchRequest): Promise<$_model.IntlFlightListingSearchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.IntlFlightListingSearchHeaders({ });
    return await this.intlFlightListingSearchWithOptions(request, headers, runtime);
  }

  /**
   * 国际机票订单取消
   * 
   * @param request - IntlFlightOrderCancelRequest
   * @param headers - IntlFlightOrderCancelHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns IntlFlightOrderCancelResponse
   */
  async intlFlightOrderCancelWithOptions(request: $_model.IntlFlightOrderCancelRequest, headers: $_model.IntlFlightOrderCancelHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.IntlFlightOrderCancelResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.btripUserId)) {
      body["btrip_user_id"] = request.btripUserId;
    }

    if (!$dara.isNull(request.buyerName)) {
      body["buyer_name"] = request.buyerName;
    }

    if (!$dara.isNull(request.isvName)) {
      body["isv_name"] = request.isvName;
    }

    if (!$dara.isNull(request.orderId)) {
      body["order_id"] = request.orderId;
    }

    if (!$dara.isNull(request.outOrderId)) {
      body["out_order_id"] = request.outOrderId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "IntlFlightOrderCancel",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/intl-flight/v1/order/action/cancel`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.IntlFlightOrderCancelResponse>(await this.callApi(params, req, runtime), new $_model.IntlFlightOrderCancelResponse({}));
  }

  /**
   * 国际机票订单取消
   * 
   * @param request - IntlFlightOrderCancelRequest
   * @returns IntlFlightOrderCancelResponse
   */
  async intlFlightOrderCancel(request: $_model.IntlFlightOrderCancelRequest): Promise<$_model.IntlFlightOrderCancelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.IntlFlightOrderCancelHeaders({ });
    return await this.intlFlightOrderCancelWithOptions(request, headers, runtime);
  }

  /**
   * 国际机票订单详情
   * 
   * @param request - IntlFlightOrderDetailRequest
   * @param headers - IntlFlightOrderDetailHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns IntlFlightOrderDetailResponse
   */
  async intlFlightOrderDetailWithOptions(request: $_model.IntlFlightOrderDetailRequest, headers: $_model.IntlFlightOrderDetailHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.IntlFlightOrderDetailResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.btripUserId)) {
      query["btrip_user_id"] = request.btripUserId;
    }

    if (!$dara.isNull(request.buyerName)) {
      query["buyer_name"] = request.buyerName;
    }

    if (!$dara.isNull(request.isvName)) {
      query["isv_name"] = request.isvName;
    }

    if (!$dara.isNull(request.orderId)) {
      query["order_id"] = request.orderId;
    }

    if (!$dara.isNull(request.outOrderId)) {
      query["out_order_id"] = request.outOrderId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "IntlFlightOrderDetail",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/intl-flight/v1/order/action/detail`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.IntlFlightOrderDetailResponse>(await this.callApi(params, req, runtime), new $_model.IntlFlightOrderDetailResponse({}));
  }

  /**
   * 国际机票订单详情
   * 
   * @param request - IntlFlightOrderDetailRequest
   * @returns IntlFlightOrderDetailResponse
   */
  async intlFlightOrderDetail(request: $_model.IntlFlightOrderDetailRequest): Promise<$_model.IntlFlightOrderDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.IntlFlightOrderDetailHeaders({ });
    return await this.intlFlightOrderDetailWithOptions(request, headers, runtime);
  }

  /**
   * 国际机票订单支付
   * 
   * @param request - IntlFlightOrderPayRequest
   * @param headers - IntlFlightOrderPayHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns IntlFlightOrderPayResponse
   */
  async intlFlightOrderPayWithOptions(request: $_model.IntlFlightOrderPayRequest, headers: $_model.IntlFlightOrderPayHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.IntlFlightOrderPayResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.btripUserId)) {
      body["btrip_user_id"] = request.btripUserId;
    }

    if (!$dara.isNull(request.buyerName)) {
      body["buyer_name"] = request.buyerName;
    }

    if (!$dara.isNull(request.isvName)) {
      body["isv_name"] = request.isvName;
    }

    if (!$dara.isNull(request.orderId)) {
      body["order_id"] = request.orderId;
    }

    if (!$dara.isNull(request.orderPrice)) {
      body["order_price"] = request.orderPrice;
    }

    if (!$dara.isNull(request.outOrderId)) {
      body["out_order_id"] = request.outOrderId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "IntlFlightOrderPay",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/intl-flight/v1/order/action/pay`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.IntlFlightOrderPayResponse>(await this.callApi(params, req, runtime), new $_model.IntlFlightOrderPayResponse({}));
  }

  /**
   * 国际机票订单支付
   * 
   * @param request - IntlFlightOrderPayRequest
   * @returns IntlFlightOrderPayResponse
   */
  async intlFlightOrderPay(request: $_model.IntlFlightOrderPayRequest): Promise<$_model.IntlFlightOrderPayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.IntlFlightOrderPayHeaders({ });
    return await this.intlFlightOrderPayWithOptions(request, headers, runtime);
  }

  /**
   * 国际机票订单支付前校验
   * 
   * @param request - IntlFlightOrderPayCheckRequest
   * @param headers - IntlFlightOrderPayCheckHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns IntlFlightOrderPayCheckResponse
   */
  async intlFlightOrderPayCheckWithOptions(request: $_model.IntlFlightOrderPayCheckRequest, headers: $_model.IntlFlightOrderPayCheckHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.IntlFlightOrderPayCheckResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.btripUserId)) {
      query["btrip_user_id"] = request.btripUserId;
    }

    if (!$dara.isNull(request.buyerName)) {
      query["buyer_name"] = request.buyerName;
    }

    if (!$dara.isNull(request.isvName)) {
      query["isv_name"] = request.isvName;
    }

    if (!$dara.isNull(request.orderId)) {
      query["order_id"] = request.orderId;
    }

    if (!$dara.isNull(request.outOrderId)) {
      query["out_order_id"] = request.outOrderId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "IntlFlightOrderPayCheck",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/intl-flight/v1/order/action/pay-check`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.IntlFlightOrderPayCheckResponse>(await this.callApi(params, req, runtime), new $_model.IntlFlightOrderPayCheckResponse({}));
  }

  /**
   * 国际机票订单支付前校验
   * 
   * @param request - IntlFlightOrderPayCheckRequest
   * @returns IntlFlightOrderPayCheckResponse
   */
  async intlFlightOrderPayCheck(request: $_model.IntlFlightOrderPayCheckRequest): Promise<$_model.IntlFlightOrderPayCheckResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.IntlFlightOrderPayCheckHeaders({ });
    return await this.intlFlightOrderPayCheckWithOptions(request, headers, runtime);
  }

  /**
   * 国际机票报价商品详情
   * 
   * @param request - IntlFlightOtaItemDetailRequest
   * @param headers - IntlFlightOtaItemDetailHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns IntlFlightOtaItemDetailResponse
   */
  async intlFlightOtaItemDetailWithOptions(otaItemId: string, request: $_model.IntlFlightOtaItemDetailRequest, headers: $_model.IntlFlightOtaItemDetailHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.IntlFlightOtaItemDetailResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.btripUserId)) {
      query["btrip_user_id"] = request.btripUserId;
    }

    if (!$dara.isNull(request.buyerName)) {
      query["buyer_name"] = request.buyerName;
    }

    if (!$dara.isNull(request.isvName)) {
      query["isv_name"] = request.isvName;
    }

    if (!$dara.isNull(request.language)) {
      query["language"] = request.language;
    }

    if (!$dara.isNull(request.supplierCode)) {
      query["supplier_code"] = request.supplierCode;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "IntlFlightOtaItemDetail",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/intl-flight/v1/items/${$dara.URL.percentEncode(otaItemId)}/action/ota-get`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.IntlFlightOtaItemDetailResponse>(await this.callApi(params, req, runtime), new $_model.IntlFlightOtaItemDetailResponse({}));
  }

  /**
   * 国际机票报价商品详情
   * 
   * @param request - IntlFlightOtaItemDetailRequest
   * @returns IntlFlightOtaItemDetailResponse
   */
  async intlFlightOtaItemDetail(otaItemId: string, request: $_model.IntlFlightOtaItemDetailRequest): Promise<$_model.IntlFlightOtaItemDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.IntlFlightOtaItemDetailHeaders({ });
    return await this.intlFlightOtaItemDetailWithOptions(otaItemId, request, headers, runtime);
  }

  /**
   * 国际机票航班报价查询
   * 
   * @param tmpReq - IntlFlightOtaSearchRequest
   * @param headers - IntlFlightOtaSearchHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns IntlFlightOtaSearchResponse
   */
  async intlFlightOtaSearchWithOptions(tmpReq: $_model.IntlFlightOtaSearchRequest, headers: $_model.IntlFlightOtaSearchHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.IntlFlightOtaSearchResponse> {
    tmpReq.validate();
    let request = new $_model.IntlFlightOtaSearchShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.searchJourneys)) {
      request.searchJourneysShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.searchJourneys, "search_journeys", "json");
    }

    if (!$dara.isNull(tmpReq.searchPassengerList)) {
      request.searchPassengerListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.searchPassengerList, "search_passenger_list", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.btripUserId)) {
      query["btrip_user_id"] = request.btripUserId;
    }

    if (!$dara.isNull(request.buyerName)) {
      query["buyer_name"] = request.buyerName;
    }

    if (!$dara.isNull(request.cabinType)) {
      query["cabin_type"] = request.cabinType;
    }

    if (!$dara.isNull(request.isvName)) {
      query["isv_name"] = request.isvName;
    }

    if (!$dara.isNull(request.searchJourneysShrink)) {
      query["search_journeys"] = request.searchJourneysShrink;
    }

    if (!$dara.isNull(request.searchPassengerListShrink)) {
      query["search_passenger_list"] = request.searchPassengerListShrink;
    }

    if (!$dara.isNull(request.tripType)) {
      query["trip_type"] = request.tripType;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "IntlFlightOtaSearch",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/intl-flight/v1/flights/action/ota-search`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.IntlFlightOtaSearchResponse>(await this.callApi(params, req, runtime), new $_model.IntlFlightOtaSearchResponse({}));
  }

  /**
   * 国际机票航班报价查询
   * 
   * @param request - IntlFlightOtaSearchRequest
   * @returns IntlFlightOtaSearchResponse
   */
  async intlFlightOtaSearch(request: $_model.IntlFlightOtaSearchRequest): Promise<$_model.IntlFlightOtaSearchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.IntlFlightOtaSearchHeaders({ });
    return await this.intlFlightOtaSearchWithOptions(request, headers, runtime);
  }

  /**
   * 国际机票改签申请
   * 
   * @param tmpReq - IntlFlightReShopApplyRequest
   * @param headers - IntlFlightReShopApplyHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns IntlFlightReShopApplyResponse
   */
  async intlFlightReShopApplyWithOptions(tmpReq: $_model.IntlFlightReShopApplyRequest, headers: $_model.IntlFlightReShopApplyHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.IntlFlightReShopApplyResponse> {
    tmpReq.validate();
    let request = new $_model.IntlFlightReShopApplyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.selectedJourneys)) {
      request.selectedJourneysShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.selectedJourneys, "selected_journeys", "json");
    }

    if (!$dara.isNull(tmpReq.selectedPassengers)) {
      request.selectedPassengersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.selectedPassengers, "selected_passengers", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.asyncApplyKey)) {
      body["async_apply_key"] = request.asyncApplyKey;
    }

    if (!$dara.isNull(request.asyncApplyMode)) {
      body["async_apply_mode"] = request.asyncApplyMode;
    }

    if (!$dara.isNull(request.orderId)) {
      body["order_id"] = request.orderId;
    }

    if (!$dara.isNull(request.outOrderId)) {
      body["out_order_id"] = request.outOrderId;
    }

    if (!$dara.isNull(request.outReShopApplyId)) {
      body["out_re_shop_apply_id"] = request.outReShopApplyId;
    }

    if (!$dara.isNull(request.passengerJourneyGroupKey)) {
      body["passenger_journey_group_key"] = request.passengerJourneyGroupKey;
    }

    if (!$dara.isNull(request.reShopReasonCode)) {
      body["re_shop_reason_code"] = request.reShopReasonCode;
    }

    if (!$dara.isNull(request.selectedJourneysShrink)) {
      body["selected_journeys"] = request.selectedJourneysShrink;
    }

    if (!$dara.isNull(request.selectedPassengersShrink)) {
      body["selected_passengers"] = request.selectedPassengersShrink;
    }

    if (!$dara.isNull(request.userIntentionMemo)) {
      body["user_intention_memo"] = request.userIntentionMemo;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "IntlFlightReShopApply",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/intl-flight/v1/flights/action/reshop/apply`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.IntlFlightReShopApplyResponse>(await this.callApi(params, req, runtime), new $_model.IntlFlightReShopApplyResponse({}));
  }

  /**
   * 国际机票改签申请
   * 
   * @param request - IntlFlightReShopApplyRequest
   * @returns IntlFlightReShopApplyResponse
   */
  async intlFlightReShopApply(request: $_model.IntlFlightReShopApplyRequest): Promise<$_model.IntlFlightReShopApplyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.IntlFlightReShopApplyHeaders({ });
    return await this.intlFlightReShopApplyWithOptions(request, headers, runtime);
  }

  /**
   * 国际机票改签取消
   * 
   * @param request - IntlFlightReShopCancelRequest
   * @param headers - IntlFlightReShopCancelHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns IntlFlightReShopCancelResponse
   */
  async intlFlightReShopCancelWithOptions(request: $_model.IntlFlightReShopCancelRequest, headers: $_model.IntlFlightReShopCancelHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.IntlFlightReShopCancelResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.orderId)) {
      body["order_id"] = request.orderId;
    }

    if (!$dara.isNull(request.outOrderId)) {
      body["out_order_id"] = request.outOrderId;
    }

    if (!$dara.isNull(request.outReShopApplyId)) {
      body["out_re_shop_apply_id"] = request.outReShopApplyId;
    }

    if (!$dara.isNull(request.reShopApplyId)) {
      body["re_shop_apply_id"] = request.reShopApplyId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "IntlFlightReShopCancel",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/intl-flight/v1/flights/action/reshop/cancel`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.IntlFlightReShopCancelResponse>(await this.callApi(params, req, runtime), new $_model.IntlFlightReShopCancelResponse({}));
  }

  /**
   * 国际机票改签取消
   * 
   * @param request - IntlFlightReShopCancelRequest
   * @returns IntlFlightReShopCancelResponse
   */
  async intlFlightReShopCancel(request: $_model.IntlFlightReShopCancelRequest): Promise<$_model.IntlFlightReShopCancelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.IntlFlightReShopCancelHeaders({ });
    return await this.intlFlightReShopCancelWithOptions(request, headers, runtime);
  }

  /**
   * 国际机票改签咨询
   * 
   * @param request - IntlFlightReShopConsultRequest
   * @param headers - IntlFlightReShopConsultHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns IntlFlightReShopConsultResponse
   */
  async intlFlightReShopConsultWithOptions(request: $_model.IntlFlightReShopConsultRequest, headers: $_model.IntlFlightReShopConsultHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.IntlFlightReShopConsultResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.orderId)) {
      query["order_id"] = request.orderId;
    }

    if (!$dara.isNull(request.outOrderId)) {
      query["out_order_id"] = request.outOrderId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "IntlFlightReShopConsult",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/intl-flight/v1/flights/action/reshop/consult`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.IntlFlightReShopConsultResponse>(await this.callApi(params, req, runtime), new $_model.IntlFlightReShopConsultResponse({}));
  }

  /**
   * 国际机票改签咨询
   * 
   * @param request - IntlFlightReShopConsultRequest
   * @returns IntlFlightReShopConsultResponse
   */
  async intlFlightReShopConsult(request: $_model.IntlFlightReShopConsultRequest): Promise<$_model.IntlFlightReShopConsultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.IntlFlightReShopConsultHeaders({ });
    return await this.intlFlightReShopConsultWithOptions(request, headers, runtime);
  }

  /**
   * 国际机票改签详情
   * 
   * @param request - IntlFlightReShopDetailRequest
   * @param headers - IntlFlightReShopDetailHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns IntlFlightReShopDetailResponse
   */
  async intlFlightReShopDetailWithOptions(request: $_model.IntlFlightReShopDetailRequest, headers: $_model.IntlFlightReShopDetailHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.IntlFlightReShopDetailResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.orderId)) {
      query["order_id"] = request.orderId;
    }

    if (!$dara.isNull(request.outOrderId)) {
      query["out_order_id"] = request.outOrderId;
    }

    if (!$dara.isNull(request.outReShopApplyId)) {
      query["out_re_shop_apply_id"] = request.outReShopApplyId;
    }

    if (!$dara.isNull(request.reShopApplyId)) {
      query["re_shop_apply_id"] = request.reShopApplyId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "IntlFlightReShopDetail",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/intl-flight/v1/flights/action/reshop/detail`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.IntlFlightReShopDetailResponse>(await this.callApi(params, req, runtime), new $_model.IntlFlightReShopDetailResponse({}));
  }

  /**
   * 国际机票改签详情
   * 
   * @param request - IntlFlightReShopDetailRequest
   * @returns IntlFlightReShopDetailResponse
   */
  async intlFlightReShopDetail(request: $_model.IntlFlightReShopDetailRequest): Promise<$_model.IntlFlightReShopDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.IntlFlightReShopDetailHeaders({ });
    return await this.intlFlightReShopDetailWithOptions(request, headers, runtime);
  }

  /**
   * 国际机票改签支付
   * 
   * @param request - IntlFlightReShopPayRequest
   * @param headers - IntlFlightReShopPayHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns IntlFlightReShopPayResponse
   */
  async intlFlightReShopPayWithOptions(request: $_model.IntlFlightReShopPayRequest, headers: $_model.IntlFlightReShopPayHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.IntlFlightReShopPayResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.orderId)) {
      body["order_id"] = request.orderId;
    }

    if (!$dara.isNull(request.outOrderId)) {
      body["out_order_id"] = request.outOrderId;
    }

    if (!$dara.isNull(request.outReShopApplyId)) {
      body["out_re_shop_apply_id"] = request.outReShopApplyId;
    }

    if (!$dara.isNull(request.reShopApplyId)) {
      body["re_shop_apply_id"] = request.reShopApplyId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "IntlFlightReShopPay",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/intl-flight/v1/flights/action/reshop/pay`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.IntlFlightReShopPayResponse>(await this.callApi(params, req, runtime), new $_model.IntlFlightReShopPayResponse({}));
  }

  /**
   * 国际机票改签支付
   * 
   * @param request - IntlFlightReShopPayRequest
   * @returns IntlFlightReShopPayResponse
   */
  async intlFlightReShopPay(request: $_model.IntlFlightReShopPayRequest): Promise<$_model.IntlFlightReShopPayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.IntlFlightReShopPayHeaders({ });
    return await this.intlFlightReShopPayWithOptions(request, headers, runtime);
  }

  /**
   * 国际机票退票申请
   * 
   * @param tmpReq - IntlFlightRefundApplyRequest
   * @param headers - IntlFlightRefundApplyHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns IntlFlightRefundApplyResponse
   */
  async intlFlightRefundApplyWithOptions(tmpReq: $_model.IntlFlightRefundApplyRequest, headers: $_model.IntlFlightRefundApplyHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.IntlFlightRefundApplyResponse> {
    tmpReq.validate();
    let request = new $_model.IntlFlightRefundApplyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.refundSegmentList)) {
      request.refundSegmentListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.refundSegmentList, "refund_segment_list", "json");
    }

    if (!$dara.isNull(tmpReq.selectedPassengers)) {
      request.selectedPassengersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.selectedPassengers, "selected_passengers", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.orderId)) {
      body["order_id"] = request.orderId;
    }

    if (!$dara.isNull(request.outOrderId)) {
      body["out_order_id"] = request.outOrderId;
    }

    if (!$dara.isNull(request.outRefundApplyId)) {
      body["out_refund_apply_id"] = request.outRefundApplyId;
    }

    if (!$dara.isNull(request.passengerJourneyGroupKey)) {
      body["passenger_journey_group_key"] = request.passengerJourneyGroupKey;
    }

    if (!$dara.isNull(request.refundReasonCode)) {
      body["refund_reason_code"] = request.refundReasonCode;
    }

    if (!$dara.isNull(request.refundSegmentListShrink)) {
      body["refund_segment_list"] = request.refundSegmentListShrink;
    }

    if (!$dara.isNull(request.selectedPassengersShrink)) {
      body["selected_passengers"] = request.selectedPassengersShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "IntlFlightRefundApply",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/intl-flight/v1/flights/action/refund/apply`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.IntlFlightRefundApplyResponse>(await this.callApi(params, req, runtime), new $_model.IntlFlightRefundApplyResponse({}));
  }

  /**
   * 国际机票退票申请
   * 
   * @param request - IntlFlightRefundApplyRequest
   * @returns IntlFlightRefundApplyResponse
   */
  async intlFlightRefundApply(request: $_model.IntlFlightRefundApplyRequest): Promise<$_model.IntlFlightRefundApplyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.IntlFlightRefundApplyHeaders({ });
    return await this.intlFlightRefundApplyWithOptions(request, headers, runtime);
  }

  /**
   * 国际机票退票咨询
   * 
   * @param request - IntlFlightRefundConsultRequest
   * @param headers - IntlFlightRefundConsultHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns IntlFlightRefundConsultResponse
   */
  async intlFlightRefundConsultWithOptions(request: $_model.IntlFlightRefundConsultRequest, headers: $_model.IntlFlightRefundConsultHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.IntlFlightRefundConsultResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.orderId)) {
      query["order_id"] = request.orderId;
    }

    if (!$dara.isNull(request.outOrderId)) {
      query["out_order_id"] = request.outOrderId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "IntlFlightRefundConsult",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/intl-flight/v1/flights/action/refund/consult`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.IntlFlightRefundConsultResponse>(await this.callApi(params, req, runtime), new $_model.IntlFlightRefundConsultResponse({}));
  }

  /**
   * 国际机票退票咨询
   * 
   * @param request - IntlFlightRefundConsultRequest
   * @returns IntlFlightRefundConsultResponse
   */
  async intlFlightRefundConsult(request: $_model.IntlFlightRefundConsultRequest): Promise<$_model.IntlFlightRefundConsultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.IntlFlightRefundConsultHeaders({ });
    return await this.intlFlightRefundConsultWithOptions(request, headers, runtime);
  }

  /**
   * 国际机票退票详情
   * 
   * @param request - IntlFlightRefundDetailRequest
   * @param headers - IntlFlightRefundDetailHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns IntlFlightRefundDetailResponse
   */
  async intlFlightRefundDetailWithOptions(request: $_model.IntlFlightRefundDetailRequest, headers: $_model.IntlFlightRefundDetailHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.IntlFlightRefundDetailResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.orderId)) {
      query["order_id"] = request.orderId;
    }

    if (!$dara.isNull(request.outOrderId)) {
      query["out_order_id"] = request.outOrderId;
    }

    if (!$dara.isNull(request.outRefundApplyId)) {
      query["out_refund_apply_id"] = request.outRefundApplyId;
    }

    if (!$dara.isNull(request.refundApplyId)) {
      query["refund_apply_id"] = request.refundApplyId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "IntlFlightRefundDetail",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/intl-flight/v1/flights/action/refund/detail`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.IntlFlightRefundDetailResponse>(await this.callApi(params, req, runtime), new $_model.IntlFlightRefundDetailResponse({}));
  }

  /**
   * 国际机票退票详情
   * 
   * @param request - IntlFlightRefundDetailRequest
   * @returns IntlFlightRefundDetailResponse
   */
  async intlFlightRefundDetail(request: $_model.IntlFlightRefundDetailRequest): Promise<$_model.IntlFlightRefundDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.IntlFlightRefundDetailHeaders({ });
    return await this.intlFlightRefundDetailWithOptions(request, headers, runtime);
  }

  /**
   * 国际机票航班可用证件查询
   * 
   * @param request - IntlFlightSegmentAvailableCertRequest
   * @param headers - IntlFlightSegmentAvailableCertHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns IntlFlightSegmentAvailableCertResponse
   */
  async intlFlightSegmentAvailableCertWithOptions(otaItemId: string, request: $_model.IntlFlightSegmentAvailableCertRequest, headers: $_model.IntlFlightSegmentAvailableCertHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.IntlFlightSegmentAvailableCertResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.isvName)) {
      query["isv_name"] = request.isvName;
    }

    if (!$dara.isNull(request.language)) {
      query["language"] = request.language;
    }

    if (!$dara.isNull(request.userId)) {
      query["user_id"] = request.userId;
    }

    if (!$dara.isNull(request.userName)) {
      query["user_name"] = request.userName;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "IntlFlightSegmentAvailableCert",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/intl-flight/v1/items/${$dara.URL.percentEncode(otaItemId)}/action/segment-available-cert`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.IntlFlightSegmentAvailableCertResponse>(await this.callApi(params, req, runtime), new $_model.IntlFlightSegmentAvailableCertResponse({}));
  }

  /**
   * 国际机票航班可用证件查询
   * 
   * @param request - IntlFlightSegmentAvailableCertRequest
   * @returns IntlFlightSegmentAvailableCertResponse
   */
  async intlFlightSegmentAvailableCert(otaItemId: string, request: $_model.IntlFlightSegmentAvailableCertRequest): Promise<$_model.IntlFlightSegmentAvailableCertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.IntlFlightSegmentAvailableCertHeaders({ });
    return await this.intlFlightSegmentAvailableCertWithOptions(otaItemId, request, headers, runtime);
  }

  /**
   * 新增发票配置
   * 
   * @param request - InvoiceAddRequest
   * @param headers - InvoiceAddHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InvoiceAddResponse
   */
  async invoiceAddWithOptions(request: $_model.InvoiceAddRequest, headers: $_model.InvoiceAddHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.InvoiceAddResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.address)) {
      body["address"] = request.address;
    }

    if (!$dara.isNull(request.bankName)) {
      body["bank_name"] = request.bankName;
    }

    if (!$dara.isNull(request.bankNo)) {
      body["bank_no"] = request.bankNo;
    }

    if (!$dara.isNull(request.taxNo)) {
      body["tax_no"] = request.taxNo;
    }

    if (!$dara.isNull(request.tel)) {
      body["tel"] = request.tel;
    }

    if (!$dara.isNull(request.thirdPartId)) {
      body["third_part_id"] = request.thirdPartId;
    }

    if (!$dara.isNull(request.title)) {
      body["title"] = request.title;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    if (!$dara.isNull(request.unitType)) {
      body["unit_type"] = request.unitType;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "InvoiceAdd",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/invoice/v1/add-invoice`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InvoiceAddResponse>(await this.callApi(params, req, runtime), new $_model.InvoiceAddResponse({}));
  }

  /**
   * 新增发票配置
   * 
   * @param request - InvoiceAddRequest
   * @returns InvoiceAddResponse
   */
  async invoiceAdd(request: $_model.InvoiceAddRequest): Promise<$_model.InvoiceAddResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.InvoiceAddHeaders({ });
    return await this.invoiceAddWithOptions(request, headers, runtime);
  }

  /**
   * 删除发票抬头
   * 
   * @param request - InvoiceDeleteRequest
   * @param headers - InvoiceDeleteHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InvoiceDeleteResponse
   */
  async invoiceDeleteWithOptions(request: $_model.InvoiceDeleteRequest, headers: $_model.InvoiceDeleteHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.InvoiceDeleteResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.thirdPartId)) {
      query["third_part_id"] = request.thirdPartId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InvoiceDelete",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/invoice/v1/invoice`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.InvoiceDeleteResponse>(await this.callApi(params, req, runtime), new $_model.InvoiceDeleteResponse({}));
  }

  /**
   * 删除发票抬头
   * 
   * @param request - InvoiceDeleteRequest
   * @returns InvoiceDeleteResponse
   */
  async invoiceDelete(request: $_model.InvoiceDeleteRequest): Promise<$_model.InvoiceDeleteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.InvoiceDeleteHeaders({ });
    return await this.invoiceDeleteWithOptions(request, headers, runtime);
  }

  /**
   * 修改发票配置
   * 
   * @param request - InvoiceModifyRequest
   * @param headers - InvoiceModifyHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InvoiceModifyResponse
   */
  async invoiceModifyWithOptions(request: $_model.InvoiceModifyRequest, headers: $_model.InvoiceModifyHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.InvoiceModifyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.address)) {
      body["address"] = request.address;
    }

    if (!$dara.isNull(request.bankName)) {
      body["bank_name"] = request.bankName;
    }

    if (!$dara.isNull(request.bankNo)) {
      body["bank_no"] = request.bankNo;
    }

    if (!$dara.isNull(request.taxNo)) {
      body["tax_no"] = request.taxNo;
    }

    if (!$dara.isNull(request.tel)) {
      body["tel"] = request.tel;
    }

    if (!$dara.isNull(request.thirdPartId)) {
      body["third_part_id"] = request.thirdPartId;
    }

    if (!$dara.isNull(request.title)) {
      body["title"] = request.title;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    if (!$dara.isNull(request.unitType)) {
      body["unit_type"] = request.unitType;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "InvoiceModify",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/invoice/v1/invoice`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InvoiceModifyResponse>(await this.callApi(params, req, runtime), new $_model.InvoiceModifyResponse({}));
  }

  /**
   * 修改发票配置
   * 
   * @param request - InvoiceModifyRequest
   * @returns InvoiceModifyResponse
   */
  async invoiceModify(request: $_model.InvoiceModifyRequest): Promise<$_model.InvoiceModifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.InvoiceModifyHeaders({ });
    return await this.invoiceModifyWithOptions(request, headers, runtime);
  }

  /**
   * 新增发票抬头可用员工
   * 
   * @param tmpReq - InvoiceRuleAddRequest
   * @param headers - InvoiceRuleAddHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InvoiceRuleAddResponse
   */
  async invoiceRuleAddWithOptions(tmpReq: $_model.InvoiceRuleAddRequest, headers: $_model.InvoiceRuleAddHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.InvoiceRuleAddResponse> {
    tmpReq.validate();
    let request = new $_model.InvoiceRuleAddShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.entities)) {
      request.entitiesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.entities, "entities", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.entitiesShrink)) {
      body["entities"] = request.entitiesShrink;
    }

    if (!$dara.isNull(request.thirdPartId)) {
      body["third_part_id"] = request.thirdPartId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "InvoiceRuleAdd",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/invoice/v1/invoice-rule`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InvoiceRuleAddResponse>(await this.callApi(params, req, runtime), new $_model.InvoiceRuleAddResponse({}));
  }

  /**
   * 新增发票抬头可用员工
   * 
   * @param request - InvoiceRuleAddRequest
   * @returns InvoiceRuleAddResponse
   */
  async invoiceRuleAdd(request: $_model.InvoiceRuleAddRequest): Promise<$_model.InvoiceRuleAddResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.InvoiceRuleAddHeaders({ });
    return await this.invoiceRuleAddWithOptions(request, headers, runtime);
  }

  /**
   * 删除发票抬头可用员工
   * 
   * @param tmpReq - InvoiceRuleDeleteRequest
   * @param headers - InvoiceRuleDeleteHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InvoiceRuleDeleteResponse
   */
  async invoiceRuleDeleteWithOptions(tmpReq: $_model.InvoiceRuleDeleteRequest, headers: $_model.InvoiceRuleDeleteHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.InvoiceRuleDeleteResponse> {
    tmpReq.validate();
    let request = new $_model.InvoiceRuleDeleteShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.entities)) {
      request.entitiesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.entities, "entities", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.delAll)) {
      query["del_all"] = request.delAll;
    }

    if (!$dara.isNull(request.entitiesShrink)) {
      query["entities"] = request.entitiesShrink;
    }

    if (!$dara.isNull(request.thirdPartId)) {
      query["third_part_id"] = request.thirdPartId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InvoiceRuleDelete",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/invoice/v1/invoice-rule`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.InvoiceRuleDeleteResponse>(await this.callApi(params, req, runtime), new $_model.InvoiceRuleDeleteResponse({}));
  }

  /**
   * 删除发票抬头可用员工
   * 
   * @param request - InvoiceRuleDeleteRequest
   * @returns InvoiceRuleDeleteResponse
   */
  async invoiceRuleDelete(request: $_model.InvoiceRuleDeleteRequest): Promise<$_model.InvoiceRuleDeleteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.InvoiceRuleDeleteHeaders({ });
    return await this.invoiceRuleDeleteWithOptions(request, headers, runtime);
  }

  /**
   * 保存发票规则
   * 
   * @param tmpReq - InvoiceRuleSaveRequest
   * @param headers - InvoiceRuleSaveHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InvoiceRuleSaveResponse
   */
  async invoiceRuleSaveWithOptions(tmpReq: $_model.InvoiceRuleSaveRequest, headers: $_model.InvoiceRuleSaveHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.InvoiceRuleSaveResponse> {
    tmpReq.validate();
    let request = new $_model.InvoiceRuleSaveShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.entities)) {
      request.entitiesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.entities, "entities", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.allEmploye)) {
      body["all_employe"] = request.allEmploye;
    }

    if (!$dara.isNull(request.entitiesShrink)) {
      body["entities"] = request.entitiesShrink;
    }

    if (!$dara.isNull(request.scope)) {
      body["scope"] = request.scope;
    }

    if (!$dara.isNull(request.thirdPartId)) {
      body["third_part_id"] = request.thirdPartId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "InvoiceRuleSave",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/invoice/v1/invoice-rule`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InvoiceRuleSaveResponse>(await this.callApi(params, req, runtime), new $_model.InvoiceRuleSaveResponse({}));
  }

  /**
   * 保存发票规则
   * 
   * @param request - InvoiceRuleSaveRequest
   * @returns InvoiceRuleSaveResponse
   */
  async invoiceRuleSave(request: $_model.InvoiceRuleSaveRequest): Promise<$_model.InvoiceRuleSaveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.InvoiceRuleSaveHeaders({ });
    return await this.invoiceRuleSaveWithOptions(request, headers, runtime);
  }

  /**
   * 搜索用户可用发票抬头
   * 
   * @param request - InvoiceSearchRequest
   * @param headers - InvoiceSearchHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InvoiceSearchResponse
   */
  async invoiceSearchWithOptions(request: $_model.InvoiceSearchRequest, headers: $_model.InvoiceSearchHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.InvoiceSearchResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.thirdPartId)) {
      query["third_part_id"] = request.thirdPartId;
    }

    if (!$dara.isNull(request.title)) {
      query["title"] = request.title;
    }

    if (!$dara.isNull(request.userId)) {
      query["user_id"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InvoiceSearch",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/invoice/v1/invoice`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.InvoiceSearchResponse>(await this.callApi(params, req, runtime), new $_model.InvoiceSearchResponse({}));
  }

  /**
   * 搜索用户可用发票抬头
   * 
   * @param request - InvoiceSearchRequest
   * @returns InvoiceSearchResponse
   */
  async invoiceSearch(request: $_model.InvoiceSearchRequest): Promise<$_model.InvoiceSearchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.InvoiceSearchHeaders({ });
    return await this.invoiceSearchWithOptions(request, headers, runtime);
  }

  /**
   * 员工特殊角色修改
   * 
   * @param tmpReq - IsvRuleSaveRequest
   * @param headers - IsvRuleSaveHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns IsvRuleSaveResponse
   */
  async isvRuleSaveWithOptions(tmpReq: $_model.IsvRuleSaveRequest, headers: $_model.IsvRuleSaveHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.IsvRuleSaveResponse> {
    tmpReq.validate();
    let request = new $_model.IsvRuleSaveShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.bookuserList)) {
      request.bookuserListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bookuserList, "bookuser_list", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applyNeed)) {
      body["apply_need"] = request.applyNeed;
    }

    if (!$dara.isNull(request.bookType)) {
      body["book_type"] = request.bookType;
    }

    if (!$dara.isNull(request.bookuserListShrink)) {
      body["bookuser_list"] = request.bookuserListShrink;
    }

    if (!$dara.isNull(request.ruleNeed)) {
      body["rule_need"] = request.ruleNeed;
    }

    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    if (!$dara.isNull(request.userId)) {
      body["user_id"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "IsvRuleSave",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/user/v1/rule`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.IsvRuleSaveResponse>(await this.callApi(params, req, runtime), new $_model.IsvRuleSaveResponse({}));
  }

  /**
   * 员工特殊角色修改
   * 
   * @param request - IsvRuleSaveRequest
   * @returns IsvRuleSaveResponse
   */
  async isvRuleSave(request: $_model.IsvRuleSaveRequest): Promise<$_model.IsvRuleSaveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.IsvRuleSaveHeaders({ });
    return await this.isvRuleSaveWithOptions(request, headers, runtime);
  }

  /**
   * 用户同步
   * 
   * @param tmpReq - IsvUserSaveRequest
   * @param headers - IsvUserSaveHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns IsvUserSaveResponse
   */
  async isvUserSaveWithOptions(tmpReq: $_model.IsvUserSaveRequest, headers: $_model.IsvUserSaveHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.IsvUserSaveResponse> {
    tmpReq.validate();
    let request = new $_model.IsvUserSaveShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.userList)) {
      request.userListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userList, "user_list", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userListShrink)) {
      body["user_list"] = request.userListShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "IsvUserSave",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/isvuser/v1/isvuser`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.IsvUserSaveResponse>(await this.callApi(params, req, runtime), new $_model.IsvUserSaveResponse({}));
  }

  /**
   * 用户同步
   * 
   * @param request - IsvUserSaveRequest
   * @returns IsvUserSaveResponse
   */
  async isvUserSave(request: $_model.IsvUserSaveRequest): Promise<$_model.IsvUserSaveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.IsvUserSaveHeaders({ });
    return await this.isvUserSaveWithOptions(request, headers, runtime);
  }

  /**
   * 新增用餐申请单
   * 
   * @param tmpReq - MealApplyAddRequest
   * @param headers - MealApplyAddHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MealApplyAddResponse
   */
  async mealApplyAddWithOptions(tmpReq: $_model.MealApplyAddRequest, headers: $_model.MealApplyAddHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.MealApplyAddResponse> {
    tmpReq.validate();
    let request = new $_model.MealApplyAddShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.applyUser)) {
      request.applyUserShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.applyUser, "apply_user", "json");
    }

    if (!$dara.isNull(tmpReq.itineraryList)) {
      request.itineraryListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.itineraryList, "itinerary_list", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applyUserShrink)) {
      body["apply_user"] = request.applyUserShrink;
    }

    if (!$dara.isNull(request.costCenterId)) {
      body["cost_center_id"] = request.costCenterId;
    }

    if (!$dara.isNull(request.invoiceId)) {
      body["invoice_id"] = request.invoiceId;
    }

    if (!$dara.isNull(request.itineraryListShrink)) {
      body["itinerary_list"] = request.itineraryListShrink;
    }

    if (!$dara.isNull(request.mealAmount)) {
      body["meal_amount"] = request.mealAmount;
    }

    if (!$dara.isNull(request.mealCause)) {
      body["meal_cause"] = request.mealCause;
    }

    if (!$dara.isNull(request.projectCode)) {
      body["project_code"] = request.projectCode;
    }

    if (!$dara.isNull(request.projectTitle)) {
      body["project_title"] = request.projectTitle;
    }

    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    if (!$dara.isNull(request.thirdPartApplyId)) {
      body["third_part_apply_id"] = request.thirdPartApplyId;
    }

    if (!$dara.isNull(request.thirdPartCostCenterId)) {
      body["third_part_cost_center_id"] = request.thirdPartCostCenterId;
    }

    if (!$dara.isNull(request.thirdPartInvoiceId)) {
      body["third_part_invoice_id"] = request.thirdPartInvoiceId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "MealApplyAdd",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/apply/v1/meal`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MealApplyAddResponse>(await this.callApi(params, req, runtime), new $_model.MealApplyAddResponse({}));
  }

  /**
   * 新增用餐申请单
   * 
   * @param request - MealApplyAddRequest
   * @returns MealApplyAddResponse
   */
  async mealApplyAdd(request: $_model.MealApplyAddRequest): Promise<$_model.MealApplyAddResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.MealApplyAddHeaders({ });
    return await this.mealApplyAddWithOptions(request, headers, runtime);
  }

  /**
   * 更新用餐申请单状态
   * 
   * @param request - MealApplyApproveRequest
   * @param headers - MealApplyApproveHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MealApplyApproveResponse
   */
  async mealApplyApproveWithOptions(request: $_model.MealApplyApproveRequest, headers: $_model.MealApplyApproveHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.MealApplyApproveResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.operateTime)) {
      body["operate_time"] = request.operateTime;
    }

    if (!$dara.isNull(request.remark)) {
      body["remark"] = request.remark;
    }

    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    if (!$dara.isNull(request.thirdPartApplyId)) {
      body["third_part_apply_id"] = request.thirdPartApplyId;
    }

    if (!$dara.isNull(request.userId)) {
      body["user_id"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "MealApplyApprove",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/apply/v1/meal`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MealApplyApproveResponse>(await this.callApi(params, req, runtime), new $_model.MealApplyApproveResponse({}));
  }

  /**
   * 更新用餐申请单状态
   * 
   * @param request - MealApplyApproveRequest
   * @returns MealApplyApproveResponse
   */
  async mealApplyApprove(request: $_model.MealApplyApproveRequest): Promise<$_model.MealApplyApproveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.MealApplyApproveHeaders({ });
    return await this.mealApplyApproveWithOptions(request, headers, runtime);
  }

  /**
   * 查询用餐申请单
   * 
   * @param request - MealApplyQueryRequest
   * @param headers - MealApplyQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MealApplyQueryResponse
   */
  async mealApplyQueryWithOptions(request: $_model.MealApplyQueryRequest, headers: $_model.MealApplyQueryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.MealApplyQueryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.thirdPartApplyId)) {
      query["third_part_apply_id"] = request.thirdPartApplyId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MealApplyQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/apply/v1/meal`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.MealApplyQueryResponse>(await this.callApi(params, req, runtime), new $_model.MealApplyQueryResponse({}));
  }

  /**
   * 查询用餐申请单
   * 
   * @param request - MealApplyQueryRequest
   * @returns MealApplyQueryResponse
   */
  async mealApplyQuery(request: $_model.MealApplyQueryRequest): Promise<$_model.MealApplyQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.MealApplyQueryHeaders({ });
    return await this.mealApplyQueryWithOptions(request, headers, runtime);
  }

  /**
   * 查询因公用餐记账数据
   * 
   * @param request - MealBillSettlementQueryRequest
   * @param headers - MealBillSettlementQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MealBillSettlementQueryResponse
   */
  async mealBillSettlementQueryWithOptions(request: $_model.MealBillSettlementQueryRequest, headers: $_model.MealBillSettlementQueryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.MealBillSettlementQueryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.billBatch)) {
      query["bill_batch"] = request.billBatch;
    }

    if (!$dara.isNull(request.orderId)) {
      query["order_id"] = request.orderId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["page_no"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!$dara.isNull(request.periodEnd)) {
      query["period_end"] = request.periodEnd;
    }

    if (!$dara.isNull(request.periodStart)) {
      query["period_start"] = request.periodStart;
    }

    if (!$dara.isNull(request.scrollId)) {
      query["scroll_id"] = request.scrollId;
    }

    if (!$dara.isNull(request.scrollMod)) {
      query["scroll_mod"] = request.scrollMod;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MealBillSettlementQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/meal/v1/bill-settlement`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.MealBillSettlementQueryResponse>(await this.callApi(params, req, runtime), new $_model.MealBillSettlementQueryResponse({}));
  }

  /**
   * 查询因公用餐记账数据
   * 
   * @param request - MealBillSettlementQueryRequest
   * @returns MealBillSettlementQueryResponse
   */
  async mealBillSettlementQuery(request: $_model.MealBillSettlementQueryRequest): Promise<$_model.MealBillSettlementQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.MealBillSettlementQueryHeaders({ });
    return await this.mealBillSettlementQueryWithOptions(request, headers, runtime);
  }

  /**
   * 获取用餐订单详情
   * 
   * @param request - MealOrderDetailQueryRequest
   * @param headers - MealOrderDetailQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MealOrderDetailQueryResponse
   */
  async mealOrderDetailQueryWithOptions(orderId: string, request: $_model.MealOrderDetailQueryRequest, headers: $_model.MealOrderDetailQueryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.MealOrderDetailQueryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userId)) {
      query["user_id"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MealOrderDetailQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/meal/v1/orders/${$dara.URL.percentEncode(orderId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.MealOrderDetailQueryResponse>(await this.callApi(params, req, runtime), new $_model.MealOrderDetailQueryResponse({}));
  }

  /**
   * 获取用餐订单详情
   * 
   * @param request - MealOrderDetailQueryRequest
   * @returns MealOrderDetailQueryResponse
   */
  async mealOrderDetailQuery(orderId: string, request: $_model.MealOrderDetailQueryRequest): Promise<$_model.MealOrderDetailQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.MealOrderDetailQueryHeaders({ });
    return await this.mealOrderDetailQueryWithOptions(orderId, request, headers, runtime);
  }

  /**
   * 获取用餐订单列表
   * 
   * @param request - MealOrderListQueryRequest
   * @param headers - MealOrderListQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MealOrderListQueryResponse
   */
  async mealOrderListQueryWithOptions(request: $_model.MealOrderListQueryRequest, headers: $_model.MealOrderListQueryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.MealOrderListQueryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userId)) {
      query["user_id"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MealOrderListQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/meal/v1/orders`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.MealOrderListQueryResponse>(await this.callApi(params, req, runtime), new $_model.MealOrderListQueryResponse({}));
  }

  /**
   * 获取用餐订单列表
   * 
   * @param request - MealOrderListQueryRequest
   * @returns MealOrderListQueryResponse
   */
  async mealOrderListQuery(request: $_model.MealOrderListQueryRequest): Promise<$_model.MealOrderListQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.MealOrderListQueryHeaders({ });
    return await this.mealOrderListQueryWithOptions(request, headers, runtime);
  }

  /**
   * 月账单确认
   * 
   * @param request - MonthBillConfirmRequest
   * @param headers - MonthBillConfirmHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MonthBillConfirmResponse
   */
  async monthBillConfirmWithOptions(request: $_model.MonthBillConfirmRequest, headers: $_model.MonthBillConfirmHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.MonthBillConfirmResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.mailBillDate)) {
      body["mail_bill_date"] = request.mailBillDate;
    }

    if (!$dara.isNull(request.userId)) {
      body["user_id"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "MonthBillConfirm",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/bill/v1/status/action/confirm`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MonthBillConfirmResponse>(await this.callApi(params, req, runtime), new $_model.MonthBillConfirmResponse({}));
  }

  /**
   * 月账单确认
   * 
   * @param request - MonthBillConfirmRequest
   * @returns MonthBillConfirmResponse
   */
  async monthBillConfirm(request: $_model.MonthBillConfirmRequest): Promise<$_model.MonthBillConfirmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.MonthBillConfirmHeaders({ });
    return await this.monthBillConfirmWithOptions(request, headers, runtime);
  }

  /**
   * 查询企业月账单
   * 
   * @param request - MonthBillGetRequest
   * @param headers - MonthBillGetHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MonthBillGetResponse
   */
  async monthBillGetWithOptions(request: $_model.MonthBillGetRequest, headers: $_model.MonthBillGetHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.MonthBillGetResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.billBatch)) {
      query["bill_batch"] = request.billBatch;
    }

    if (!$dara.isNull(request.billMonth)) {
      query["bill_month"] = request.billMonth;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MonthBillGet",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/open/v1/month-bill`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.MonthBillGetResponse>(await this.callApi(params, req, runtime), new $_model.MonthBillGetResponse({}));
  }

  /**
   * 查询企业月账单
   * 
   * @param request - MonthBillGetRequest
   * @returns MonthBillGetResponse
   */
  async monthBillGet(request: $_model.MonthBillGetRequest): Promise<$_model.MonthBillGetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.MonthBillGetHeaders({ });
    return await this.monthBillGetWithOptions(request, headers, runtime);
  }

  /**
   * 查询拆分版企业月账单
   * 
   * @param tmpReq - MonthBillSplitGetRequest
   * @param headers - MonthBillSplitGetHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MonthBillSplitGetResponse
   */
  async monthBillSplitGetWithOptions(tmpReq: $_model.MonthBillSplitGetRequest, headers: $_model.MonthBillSplitGetHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.MonthBillSplitGetResponse> {
    tmpReq.validate();
    let request = new $_model.MonthBillSplitGetShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.billSplitKeyList)) {
      request.billSplitKeyListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.billSplitKeyList, "bill_split_key_list", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.billBatch)) {
      query["bill_batch"] = request.billBatch;
    }

    if (!$dara.isNull(request.billMonth)) {
      query["bill_month"] = request.billMonth;
    }

    if (!$dara.isNull(request.billSplitKeyListShrink)) {
      query["bill_split_key_list"] = request.billSplitKeyListShrink;
    }

    if (!$dara.isNull(request.billSplitMode)) {
      query["bill_split_mode"] = request.billSplitMode;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MonthBillSplitGet",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/open/v1/month-bill-split`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.MonthBillSplitGetResponse>(await this.callApi(params, req, runtime), new $_model.MonthBillSplitGetResponse({}));
  }

  /**
   * 查询拆分版企业月账单
   * 
   * @param request - MonthBillSplitGetRequest
   * @returns MonthBillSplitGetResponse
   */
  async monthBillSplitGet(request: $_model.MonthBillSplitGetRequest): Promise<$_model.MonthBillSplitGetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.MonthBillSplitGetHeaders({ });
    return await this.monthBillSplitGetWithOptions(request, headers, runtime);
  }

  /**
   * 查询订单退款明细
   * 
   * @param request - OrderRefundDetailQueryRequest
   * @param headers - OrderRefundDetailQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OrderRefundDetailQueryResponse
   */
  async orderRefundDetailQueryWithOptions(request: $_model.OrderRefundDetailQueryRequest, headers: $_model.OrderRefundDetailQueryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.OrderRefundDetailQueryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cooperatorOrderId)) {
      body["cooperator_order_id"] = request.cooperatorOrderId;
    }

    if (!$dara.isNull(request.orderId)) {
      body["order_id"] = request.orderId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "OrderRefundDetailQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/coop-hotel/v1/refund/action/detail`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OrderRefundDetailQueryResponse>(await this.callApi(params, req, runtime), new $_model.OrderRefundDetailQueryResponse({}));
  }

  /**
   * 查询订单退款明细
   * 
   * @param request - OrderRefundDetailQueryRequest
   * @returns OrderRefundDetailQueryResponse
   */
  async orderRefundDetailQuery(request: $_model.OrderRefundDetailQueryRequest): Promise<$_model.OrderRefundDetailQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.OrderRefundDetailQueryHeaders({ });
    return await this.orderRefundDetailQueryWithOptions(request, headers, runtime);
  }

  /**
   * 添加项目
   * 
   * @param request - ProjectAddRequest
   * @param headers - ProjectAddHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ProjectAddResponse
   */
  async projectAddWithOptions(request: $_model.ProjectAddRequest, headers: $_model.ProjectAddHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ProjectAddResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.code)) {
      body["code"] = request.code;
    }

    if (!$dara.isNull(request.projectName)) {
      body["project_name"] = request.projectName;
    }

    if (!$dara.isNull(request.thirdPartCostCenterId)) {
      body["third_part_cost_center_id"] = request.thirdPartCostCenterId;
    }

    if (!$dara.isNull(request.thirdPartId)) {
      body["third_part_id"] = request.thirdPartId;
    }

    if (!$dara.isNull(request.thirdPartInvoiceId)) {
      body["third_part_invoice_id"] = request.thirdPartInvoiceId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ProjectAdd",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/cost/v1/project`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ProjectAddResponse>(await this.callApi(params, req, runtime), new $_model.ProjectAddResponse({}));
  }

  /**
   * 添加项目
   * 
   * @param request - ProjectAddRequest
   * @returns ProjectAddResponse
   */
  async projectAdd(request: $_model.ProjectAddRequest): Promise<$_model.ProjectAddResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ProjectAddHeaders({ });
    return await this.projectAddWithOptions(request, headers, runtime);
  }

  /**
   * 删除项目
   * 
   * @param request - ProjectDeleteRequest
   * @param headers - ProjectDeleteHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ProjectDeleteResponse
   */
  async projectDeleteWithOptions(request: $_model.ProjectDeleteRequest, headers: $_model.ProjectDeleteHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ProjectDeleteResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.thirdPartId)) {
      query["third_part_id"] = request.thirdPartId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ProjectDelete",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/cost/v1/project`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ProjectDeleteResponse>(await this.callApi(params, req, runtime), new $_model.ProjectDeleteResponse({}));
  }

  /**
   * 删除项目
   * 
   * @param request - ProjectDeleteRequest
   * @returns ProjectDeleteResponse
   */
  async projectDelete(request: $_model.ProjectDeleteRequest): Promise<$_model.ProjectDeleteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ProjectDeleteHeaders({ });
    return await this.projectDeleteWithOptions(request, headers, runtime);
  }

  /**
   * 变更项目
   * 
   * @param request - ProjectModifyRequest
   * @param headers - ProjectModifyHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ProjectModifyResponse
   */
  async projectModifyWithOptions(request: $_model.ProjectModifyRequest, headers: $_model.ProjectModifyHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ProjectModifyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.code)) {
      body["code"] = request.code;
    }

    if (!$dara.isNull(request.projectName)) {
      body["project_name"] = request.projectName;
    }

    if (!$dara.isNull(request.thirdPartCostCenterId)) {
      body["third_part_cost_center_id"] = request.thirdPartCostCenterId;
    }

    if (!$dara.isNull(request.thirdPartId)) {
      body["third_part_id"] = request.thirdPartId;
    }

    if (!$dara.isNull(request.thirdPartInvoiceId)) {
      body["third_part_invoice_id"] = request.thirdPartInvoiceId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ProjectModify",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/cost/v1/project`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ProjectModifyResponse>(await this.callApi(params, req, runtime), new $_model.ProjectModifyResponse({}));
  }

  /**
   * 变更项目
   * 
   * @param request - ProjectModifyRequest
   * @returns ProjectModifyResponse
   */
  async projectModify(request: $_model.ProjectModifyRequest): Promise<$_model.ProjectModifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ProjectModifyHeaders({ });
    return await this.projectModifyWithOptions(request, headers, runtime);
  }

  /**
   * 查询企业信息详情
   * 
   * @param request - QueryCorpDetailInfoRequest
   * @param headers - QueryCorpDetailInfoHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCorpDetailInfoResponse
   */
  async queryCorpDetailInfoWithOptions(request: $_model.QueryCorpDetailInfoRequest, headers: $_model.QueryCorpDetailInfoHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCorpDetailInfoResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountId)) {
      query["account_id"] = request.accountId;
    }

    if (!$dara.isNull(request.targetCorpId)) {
      query["target_corp_id"] = request.targetCorpId;
    }

    if (!$dara.isNull(request.targetThirdCorpId)) {
      query["target_third_corp_id"] = request.targetThirdCorpId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCorpDetailInfo",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/corps/v1/corps/detail`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCorpDetailInfoResponse>(await this.callApi(params, req, runtime), new $_model.QueryCorpDetailInfoResponse({}));
  }

  /**
   * 查询企业信息详情
   * 
   * @param request - QueryCorpDetailInfoRequest
   * @returns QueryCorpDetailInfoResponse
   */
  async queryCorpDetailInfo(request: $_model.QueryCorpDetailInfoRequest): Promise<$_model.QueryCorpDetailInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.QueryCorpDetailInfoHeaders({ });
    return await this.queryCorpDetailInfoWithOptions(request, headers, runtime);
  }

  /**
   * 获取单个员工信息
   * 
   * @param request - QueryEmployeeDetailRequest
   * @param headers - QueryEmployeeDetailHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryEmployeeDetailResponse
   */
  async queryEmployeeDetailWithOptions(request: $_model.QueryEmployeeDetailRequest, headers: $_model.QueryEmployeeDetailHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.QueryEmployeeDetailResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.outEmployeeId)) {
      query["out_employee_id"] = request.outEmployeeId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryEmployeeDetail",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/user/v1/employeeDetail`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryEmployeeDetailResponse>(await this.callApi(params, req, runtime), new $_model.QueryEmployeeDetailResponse({}));
  }

  /**
   * 获取单个员工信息
   * 
   * @param request - QueryEmployeeDetailRequest
   * @returns QueryEmployeeDetailResponse
   */
  async queryEmployeeDetail(request: $_model.QueryEmployeeDetailRequest): Promise<$_model.QueryEmployeeDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.QueryEmployeeDetailHeaders({ });
    return await this.queryEmployeeDetailWithOptions(request, headers, runtime);
  }

  /**
   * 查询子企业列表
   * 
   * @param request - QueryGroupCorpListRequest
   * @param headers - QueryGroupCorpListHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryGroupCorpListResponse
   */
  async queryGroupCorpListWithOptions(request: $_model.QueryGroupCorpListRequest, headers: $_model.QueryGroupCorpListHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.QueryGroupCorpListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userId)) {
      body["user_id"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryGroupCorpList",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/sub_corps/v1/corps/action/corpList`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryGroupCorpListResponse>(await this.callApi(params, req, runtime), new $_model.QueryGroupCorpListResponse({}));
  }

  /**
   * 查询子企业列表
   * 
   * @param request - QueryGroupCorpListRequest
   * @returns QueryGroupCorpListResponse
   */
  async queryGroupCorpList(request: $_model.QueryGroupCorpListRequest): Promise<$_model.QueryGroupCorpListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.QueryGroupCorpListHeaders({ });
    return await this.queryGroupCorpListWithOptions(request, headers, runtime);
  }

  /**
   * 报销单查询
   * 
   * @param request - QueryReimbursementOrderRequest
   * @param headers - QueryReimbursementOrderHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryReimbursementOrderResponse
   */
  async queryReimbursementOrderWithOptions(request: $_model.QueryReimbursementOrderRequest, headers: $_model.QueryReimbursementOrderHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.QueryReimbursementOrderResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.reimbOrderNo)) {
      query["reimb_order_no"] = request.reimbOrderNo;
    }

    if (!$dara.isNull(request.subCorpId)) {
      query["sub_corp_id"] = request.subCorpId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryReimbursementOrder",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/reimbursement/v1/order`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryReimbursementOrderResponse>(await this.callApi(params, req, runtime), new $_model.QueryReimbursementOrderResponse({}));
  }

  /**
   * 报销单查询
   * 
   * @param request - QueryReimbursementOrderRequest
   * @returns QueryReimbursementOrderResponse
   */
  async queryReimbursementOrder(request: $_model.QueryReimbursementOrderRequest): Promise<$_model.QueryReimbursementOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.QueryReimbursementOrderHeaders({ });
    return await this.queryReimbursementOrderWithOptions(request, headers, runtime);
  }

  /**
   * 单个人员同步
   * 
   * @param tmpReq - SyncSingleUserRequest
   * @param headers - SyncSingleUserHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SyncSingleUserResponse
   */
  async syncSingleUserWithOptions(tmpReq: $_model.SyncSingleUserRequest, headers: $_model.SyncSingleUserHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.SyncSingleUserResponse> {
    tmpReq.validate();
    let request = new $_model.SyncSingleUserShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.thirdDepartIdList)) {
      request.thirdDepartIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.thirdDepartIdList, "third_depart_id_list", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.email)) {
      body["email"] = request.email;
    }

    if (!$dara.isNull(request.jobNo)) {
      body["job_no"] = request.jobNo;
    }

    if (!$dara.isNull(request.leaveStatus)) {
      body["leave_status"] = request.leaveStatus;
    }

    if (!$dara.isNull(request.managerUserId)) {
      body["manager_user_id"] = request.managerUserId;
    }

    if (!$dara.isNull(request.phone)) {
      body["phone"] = request.phone;
    }

    if (!$dara.isNull(request.position)) {
      body["position"] = request.position;
    }

    if (!$dara.isNull(request.positionLevel)) {
      body["position_level"] = request.positionLevel;
    }

    if (!$dara.isNull(request.realNameEn)) {
      body["real_name_en"] = request.realNameEn;
    }

    if (!$dara.isNull(request.thirdDepartIdListShrink)) {
      body["third_depart_id_list"] = request.thirdDepartIdListShrink;
    }

    if (!$dara.isNull(request.userId)) {
      body["user_id"] = request.userId;
    }

    if (!$dara.isNull(request.userName)) {
      body["user_name"] = request.userName;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SyncSingleUser",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/user/v1/single-user/action/sync`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SyncSingleUserResponse>(await this.callApi(params, req, runtime), new $_model.SyncSingleUserResponse({}));
  }

  /**
   * 单个人员同步
   * 
   * @param request - SyncSingleUserRequest
   * @returns SyncSingleUserResponse
   */
  async syncSingleUser(request: $_model.SyncSingleUserRequest): Promise<$_model.SyncSingleUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.SyncSingleUserHeaders({ });
    return await this.syncSingleUserWithOptions(request, headers, runtime);
  }

  /**
   * 同步三方用户映射关系
   * 
   * @param request - SyncThirdUserMappingRequest
   * @param headers - SyncThirdUserMappingHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SyncThirdUserMappingResponse
   */
  async syncThirdUserMappingWithOptions(request: $_model.SyncThirdUserMappingRequest, headers: $_model.SyncThirdUserMappingHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.SyncThirdUserMappingResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    if (!$dara.isNull(request.thirdChannelType)) {
      body["third_channel_type"] = request.thirdChannelType;
    }

    if (!$dara.isNull(request.thirdUserId)) {
      body["third_user_id"] = request.thirdUserId;
    }

    if (!$dara.isNull(request.userId)) {
      body["user_id"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SyncThirdUserMapping",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/user/v1/third-users/action/mapping`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SyncThirdUserMappingResponse>(await this.callApi(params, req, runtime), new $_model.SyncThirdUserMappingResponse({}));
  }

  /**
   * 同步三方用户映射关系
   * 
   * @param request - SyncThirdUserMappingRequest
   * @returns SyncThirdUserMappingResponse
   */
  async syncThirdUserMapping(request: $_model.SyncThirdUserMappingRequest): Promise<$_model.SyncThirdUserMappingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.SyncThirdUserMappingHeaders({ });
    return await this.syncThirdUserMappingWithOptions(request, headers, runtime);
  }

  /**
   * 查询淘宝账号信息
   * 
   * @param headers - TBAccountInfoQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TBAccountInfoQueryResponse
   */
  async tBAccountInfoQueryWithOptions(userId: string, headers: $_model.TBAccountInfoQueryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.TBAccountInfoQueryResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "TBAccountInfoQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/account/v1/tb-accounts/${$dara.URL.percentEncode(userId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.TBAccountInfoQueryResponse>(await this.callApi(params, req, runtime), new $_model.TBAccountInfoQueryResponse({}));
  }

  /**
   * 查询淘宝账号信息
   * @returns TBAccountInfoQueryResponse
   */
  async tBAccountInfoQuery(userId: string): Promise<$_model.TBAccountInfoQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.TBAccountInfoQueryHeaders({ });
    return await this.tBAccountInfoQueryWithOptions(userId, headers, runtime);
  }

  /**
   * 解绑淘宝账号
   * 
   * @param headers - TBAccountUnbindHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TBAccountUnbindResponse
   */
  async tBAccountUnbindWithOptions(userId: string, headers: $_model.TBAccountUnbindHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.TBAccountUnbindResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "TBAccountUnbind",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/account/v1/tb-accounts/${$dara.URL.percentEncode(userId)}/action/unbind`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.TBAccountUnbindResponse>(await this.callApi(params, req, runtime), new $_model.TBAccountUnbindResponse({}));
  }

  /**
   * 解绑淘宝账号
   * @returns TBAccountUnbindResponse
   */
  async tBAccountUnbind(userId: string): Promise<$_model.TBAccountUnbindResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.TBAccountUnbindHeaders({ });
    return await this.tBAccountUnbindWithOptions(userId, headers, runtime);
  }

  /**
   * 机票改签申请
   * 
   * @param tmpReq - TicketChangingApplyRequest
   * @param headers - TicketChangingApplyHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TicketChangingApplyResponse
   */
  async ticketChangingApplyWithOptions(tmpReq: $_model.TicketChangingApplyRequest, headers: $_model.TicketChangingApplyHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.TicketChangingApplyResponse> {
    tmpReq.validate();
    let request = new $_model.TicketChangingApplyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.modifyFlightInfoList)) {
      request.modifyFlightInfoListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.modifyFlightInfoList, "modify_flight_info_list", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.disOrderId)) {
      body["dis_order_id"] = request.disOrderId;
    }

    if (!$dara.isNull(request.disSubOrderId)) {
      body["dis_sub_order_id"] = request.disSubOrderId;
    }

    if (!$dara.isNull(request.isVoluntary)) {
      body["is_voluntary"] = request.isVoluntary;
    }

    if (!$dara.isNull(request.modifyFlightInfoListShrink)) {
      body["modify_flight_info_list"] = request.modifyFlightInfoListShrink;
    }

    if (!$dara.isNull(request.otaItemId)) {
      body["ota_item_id"] = request.otaItemId;
    }

    if (!$dara.isNull(request.reason)) {
      body["reason"] = request.reason;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["session_id"] = request.sessionId;
    }

    if (!$dara.isNull(request.whetherRetry)) {
      body["whether_retry"] = request.whetherRetry;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TicketChangingApply",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-flight/v1/ticket-changing/action/apply`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TicketChangingApplyResponse>(await this.callApi(params, req, runtime), new $_model.TicketChangingApplyResponse({}));
  }

  /**
   * 机票改签申请
   * 
   * @param request - TicketChangingApplyRequest
   * @returns TicketChangingApplyResponse
   */
  async ticketChangingApply(request: $_model.TicketChangingApplyRequest): Promise<$_model.TicketChangingApplyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.TicketChangingApplyHeaders({ });
    return await this.ticketChangingApplyWithOptions(request, headers, runtime);
  }

  /**
   * 机票改签取消
   * 
   * @param request - TicketChangingCancelRequest
   * @param headers - TicketChangingCancelHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TicketChangingCancelResponse
   */
  async ticketChangingCancelWithOptions(request: $_model.TicketChangingCancelRequest, headers: $_model.TicketChangingCancelHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.TicketChangingCancelResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.disOrderId)) {
      query["dis_order_id"] = request.disOrderId;
    }

    if (!$dara.isNull(request.disSubOrderId)) {
      query["dis_sub_order_id"] = request.disSubOrderId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TicketChangingCancel",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-flight/v1/ticket-changing/action/cancel`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.TicketChangingCancelResponse>(await this.callApi(params, req, runtime), new $_model.TicketChangingCancelResponse({}));
  }

  /**
   * 机票改签取消
   * 
   * @param request - TicketChangingCancelRequest
   * @returns TicketChangingCancelResponse
   */
  async ticketChangingCancel(request: $_model.TicketChangingCancelRequest): Promise<$_model.TicketChangingCancelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.TicketChangingCancelHeaders({ });
    return await this.ticketChangingCancelWithOptions(request, headers, runtime);
  }

  /**
   * 机票改签详情
   * 
   * @param request - TicketChangingDetailRequest
   * @param headers - TicketChangingDetailHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TicketChangingDetailResponse
   */
  async ticketChangingDetailWithOptions(request: $_model.TicketChangingDetailRequest, headers: $_model.TicketChangingDetailHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.TicketChangingDetailResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.disOrderId)) {
      query["dis_order_id"] = request.disOrderId;
    }

    if (!$dara.isNull(request.disSubOrderId)) {
      query["dis_sub_order_id"] = request.disSubOrderId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TicketChangingDetail",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-flight/v1/ticket-changing/action/detail`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.TicketChangingDetailResponse>(await this.callApi(params, req, runtime), new $_model.TicketChangingDetailResponse({}));
  }

  /**
   * 机票改签详情
   * 
   * @param request - TicketChangingDetailRequest
   * @returns TicketChangingDetailResponse
   */
  async ticketChangingDetail(request: $_model.TicketChangingDetailRequest): Promise<$_model.TicketChangingDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.TicketChangingDetailHeaders({ });
    return await this.ticketChangingDetailWithOptions(request, headers, runtime);
  }

  /**
   * 机票改签询价
   * 
   * @param request - TicketChangingEnquiryRequest
   * @param headers - TicketChangingEnquiryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TicketChangingEnquiryResponse
   */
  async ticketChangingEnquiryWithOptions(request: $_model.TicketChangingEnquiryRequest, headers: $_model.TicketChangingEnquiryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.TicketChangingEnquiryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.arrCity)) {
      query["arr_city"] = request.arrCity;
    }

    if (!$dara.isNull(request.depCity)) {
      query["dep_city"] = request.depCity;
    }

    if (!$dara.isNull(request.disOrderId)) {
      query["dis_order_id"] = request.disOrderId;
    }

    if (!$dara.isNull(request.isVoluntary)) {
      query["is_voluntary"] = request.isVoluntary;
    }

    if (!$dara.isNull(request.modifyDepartDate)) {
      query["modify_depart_date"] = request.modifyDepartDate;
    }

    if (!$dara.isNull(request.modifyFlightNo)) {
      query["modify_flight_no"] = request.modifyFlightNo;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["session_id"] = request.sessionId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TicketChangingEnquiry",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-flight/v1/ticket-changing/action/enquiry`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.TicketChangingEnquiryResponse>(await this.callApi(params, req, runtime), new $_model.TicketChangingEnquiryResponse({}));
  }

  /**
   * 机票改签询价
   * 
   * @param request - TicketChangingEnquiryRequest
   * @returns TicketChangingEnquiryResponse
   */
  async ticketChangingEnquiry(request: $_model.TicketChangingEnquiryRequest): Promise<$_model.TicketChangingEnquiryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.TicketChangingEnquiryHeaders({ });
    return await this.ticketChangingEnquiryWithOptions(request, headers, runtime);
  }

  /**
   * 机票改签可改签航班列表
   * 
   * @param tmpReq - TicketChangingFlightListRequest
   * @param headers - TicketChangingFlightListHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TicketChangingFlightListResponse
   */
  async ticketChangingFlightListWithOptions(tmpReq: $_model.TicketChangingFlightListRequest, headers: $_model.TicketChangingFlightListHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.TicketChangingFlightListResponse> {
    tmpReq.validate();
    let request = new $_model.TicketChangingFlightListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.travelerInfoList)) {
      request.travelerInfoListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.travelerInfoList, "traveler_info_list", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.arrCity)) {
      query["arr_city"] = request.arrCity;
    }

    if (!$dara.isNull(request.depCity)) {
      query["dep_city"] = request.depCity;
    }

    if (!$dara.isNull(request.depDate)) {
      query["dep_date"] = request.depDate;
    }

    if (!$dara.isNull(request.disOrderId)) {
      query["dis_order_id"] = request.disOrderId;
    }

    if (!$dara.isNull(request.isVoluntary)) {
      query["is_voluntary"] = request.isVoluntary;
    }

    if (!$dara.isNull(request.travelerInfoListShrink)) {
      query["traveler_info_list"] = request.travelerInfoListShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TicketChangingFlightList",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/huge/dtb-flight/v1/ticket-changing-flight/action/list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.TicketChangingFlightListResponse>(await this.callApi(params, req, runtime), new $_model.TicketChangingFlightListResponse({}));
  }

  /**
   * 机票改签可改签航班列表
   * 
   * @param request - TicketChangingFlightListRequest
   * @returns TicketChangingFlightListResponse
   */
  async ticketChangingFlightList(request: $_model.TicketChangingFlightListRequest): Promise<$_model.TicketChangingFlightListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.TicketChangingFlightListHeaders({ });
    return await this.ticketChangingFlightListWithOptions(request, headers, runtime);
  }

  /**
   * 机票改签航班支付
   * 
   * @param tmpReq - TicketChangingPayRequest
   * @param headers - TicketChangingPayHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TicketChangingPayResponse
   */
  async ticketChangingPayWithOptions(tmpReq: $_model.TicketChangingPayRequest, headers: $_model.TicketChangingPayHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.TicketChangingPayResponse> {
    tmpReq.validate();
    let request = new $_model.TicketChangingPayShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.extra)) {
      request.extraShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extra, "extra", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.corpPayPrice)) {
      body["corp_pay_price"] = request.corpPayPrice;
    }

    if (!$dara.isNull(request.disOrderId)) {
      body["dis_order_id"] = request.disOrderId;
    }

    if (!$dara.isNull(request.disSubOrderId)) {
      body["dis_sub_order_id"] = request.disSubOrderId;
    }

    if (!$dara.isNull(request.extraShrink)) {
      body["extra"] = request.extraShrink;
    }

    if (!$dara.isNull(request.personalPayPrice)) {
      body["personal_pay_price"] = request.personalPayPrice;
    }

    if (!$dara.isNull(request.totalPayPrice)) {
      body["total_pay_price"] = request.totalPayPrice;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TicketChangingPay",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-flight/v1/ticket-changing/action/pay`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TicketChangingPayResponse>(await this.callApi(params, req, runtime), new $_model.TicketChangingPayResponse({}));
  }

  /**
   * 机票改签航班支付
   * 
   * @param request - TicketChangingPayRequest
   * @returns TicketChangingPayResponse
   */
  async ticketChangingPay(request: $_model.TicketChangingPayRequest): Promise<$_model.TicketChangingPayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.TicketChangingPayHeaders({ });
    return await this.ticketChangingPayWithOptions(request, headers, runtime);
  }

  /**
   * 火车票改签申请
   * 
   * @param tmpReq - TrainApplyChangeRequest
   * @param headers - TrainApplyChangeHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TrainApplyChangeResponse
   */
  async trainApplyChangeWithOptions(tmpReq: $_model.TrainApplyChangeRequest, headers: $_model.TrainApplyChangeHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.TrainApplyChangeResponse> {
    tmpReq.validate();
    let request = new $_model.TrainApplyChangeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.changeTrainInfoS)) {
      request.changeTrainInfoSShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.changeTrainInfoS, "change_train_info_s", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.changeTrainInfoSShrink)) {
      query["change_train_info_s"] = request.changeTrainInfoSShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acceptNoSeat)) {
      body["accept_no_seat"] = request.acceptNoSeat;
    }

    if (!$dara.isNull(request.forceMatch)) {
      body["force_match"] = request.forceMatch;
    }

    if (!$dara.isNull(request.isPayNow)) {
      body["is_pay_now"] = request.isPayNow;
    }

    if (!$dara.isNull(request.orderId)) {
      body["order_id"] = request.orderId;
    }

    if (!$dara.isNull(request.outChangeApplyId)) {
      body["out_change_apply_id"] = request.outChangeApplyId;
    }

    if (!$dara.isNull(request.outOrderId)) {
      body["out_order_id"] = request.outOrderId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TrainApplyChange",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/train/v1/change/apply`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TrainApplyChangeResponse>(await this.callApi(params, req, runtime), new $_model.TrainApplyChangeResponse({}));
  }

  /**
   * 火车票改签申请
   * 
   * @param request - TrainApplyChangeRequest
   * @returns TrainApplyChangeResponse
   */
  async trainApplyChange(request: $_model.TrainApplyChangeRequest): Promise<$_model.TrainApplyChangeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.TrainApplyChangeHeaders({ });
    return await this.trainApplyChangeWithOptions(request, headers, runtime);
  }

  /**
   * 火车票退票申请
   * 
   * @param tmpReq - TrainApplyRefundRequest
   * @param headers - TrainApplyRefundHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TrainApplyRefundResponse
   */
  async trainApplyRefundWithOptions(tmpReq: $_model.TrainApplyRefundRequest, headers: $_model.TrainApplyRefundHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.TrainApplyRefundResponse> {
    tmpReq.validate();
    let request = new $_model.TrainApplyRefundShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.refundTrainInfos)) {
      request.refundTrainInfosShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.refundTrainInfos, "refund_train_infos", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.orderId)) {
      body["order_id"] = request.orderId;
    }

    if (!$dara.isNull(request.outOrderId)) {
      body["out_order_id"] = request.outOrderId;
    }

    if (!$dara.isNull(request.outRefundId)) {
      body["out_refund_id"] = request.outRefundId;
    }

    if (!$dara.isNull(request.refundTrainInfosShrink)) {
      body["refund_train_infos"] = request.refundTrainInfosShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TrainApplyRefund",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/train/v1/refund/apply`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TrainApplyRefundResponse>(await this.callApi(params, req, runtime), new $_model.TrainApplyRefundResponse({}));
  }

  /**
   * 火车票退票申请
   * 
   * @param request - TrainApplyRefundRequest
   * @returns TrainApplyRefundResponse
   */
  async trainApplyRefund(request: $_model.TrainApplyRefundRequest): Promise<$_model.TrainApplyRefundResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.TrainApplyRefundHeaders({ });
    return await this.trainApplyRefundWithOptions(request, headers, runtime);
  }

  /**
   * 查询火车票记账数据
   * 
   * @param request - TrainBillSettlementQueryRequest
   * @param headers - TrainBillSettlementQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TrainBillSettlementQueryResponse
   */
  async trainBillSettlementQueryWithOptions(request: $_model.TrainBillSettlementQueryRequest, headers: $_model.TrainBillSettlementQueryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.TrainBillSettlementQueryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.billBatch)) {
      query["bill_batch"] = request.billBatch;
    }

    if (!$dara.isNull(request.orderId)) {
      query["order_id"] = request.orderId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["page_no"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!$dara.isNull(request.periodEnd)) {
      query["period_end"] = request.periodEnd;
    }

    if (!$dara.isNull(request.periodStart)) {
      query["period_start"] = request.periodStart;
    }

    if (!$dara.isNull(request.scrollId)) {
      query["scroll_id"] = request.scrollId;
    }

    if (!$dara.isNull(request.scrollMod)) {
      query["scroll_mod"] = request.scrollMod;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TrainBillSettlementQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/train/v1/bill-settlement`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.TrainBillSettlementQueryResponse>(await this.callApi(params, req, runtime), new $_model.TrainBillSettlementQueryResponse({}));
  }

  /**
   * 查询火车票记账数据
   * 
   * @param request - TrainBillSettlementQueryRequest
   * @returns TrainBillSettlementQueryResponse
   */
  async trainBillSettlementQuery(request: $_model.TrainBillSettlementQueryRequest): Promise<$_model.TrainBillSettlementQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.TrainBillSettlementQueryHeaders({ });
    return await this.trainBillSettlementQueryWithOptions(request, headers, runtime);
  }

  /**
   * 查询火车超标审批详情
   * 
   * @param request - TrainExceedApplyQueryRequest
   * @param headers - TrainExceedApplyQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TrainExceedApplyQueryResponse
   */
  async trainExceedApplyQueryWithOptions(request: $_model.TrainExceedApplyQueryRequest, headers: $_model.TrainExceedApplyQueryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.TrainExceedApplyQueryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applyId)) {
      query["apply_id"] = request.applyId;
    }

    if (!$dara.isNull(request.businessInstanceId)) {
      query["business_instance_id"] = request.businessInstanceId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TrainExceedApplyQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/apply/v1/train-exceed`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.TrainExceedApplyQueryResponse>(await this.callApi(params, req, runtime), new $_model.TrainExceedApplyQueryResponse({}));
  }

  /**
   * 查询火车超标审批详情
   * 
   * @param request - TrainExceedApplyQueryRequest
   * @returns TrainExceedApplyQueryResponse
   */
  async trainExceedApplyQuery(request: $_model.TrainExceedApplyQueryRequest): Promise<$_model.TrainExceedApplyQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.TrainExceedApplyQueryHeaders({ });
    return await this.trainExceedApplyQueryWithOptions(request, headers, runtime);
  }

  /**
   * 火车票改签费用预估
   * 
   * @param tmpReq - TrainFeeCalculateChangeRequest
   * @param headers - TrainFeeCalculateChangeHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TrainFeeCalculateChangeResponse
   */
  async trainFeeCalculateChangeWithOptions(tmpReq: $_model.TrainFeeCalculateChangeRequest, headers: $_model.TrainFeeCalculateChangeHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.TrainFeeCalculateChangeResponse> {
    tmpReq.validate();
    let request = new $_model.TrainFeeCalculateChangeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.changeTrainDetails)) {
      request.changeTrainDetailsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.changeTrainDetails, "change_train_details", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.changeTrainDetailsShrink)) {
      body["change_train_details"] = request.changeTrainDetailsShrink;
    }

    if (!$dara.isNull(request.distributeOrderId)) {
      body["distribute_order_id"] = request.distributeOrderId;
    }

    if (!$dara.isNull(request.orderId)) {
      body["order_id"] = request.orderId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TrainFeeCalculateChange",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/train/v1/change/fee`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TrainFeeCalculateChangeResponse>(await this.callApi(params, req, runtime), new $_model.TrainFeeCalculateChangeResponse({}));
  }

  /**
   * 火车票改签费用预估
   * 
   * @param request - TrainFeeCalculateChangeRequest
   * @returns TrainFeeCalculateChangeResponse
   */
  async trainFeeCalculateChange(request: $_model.TrainFeeCalculateChangeRequest): Promise<$_model.TrainFeeCalculateChangeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.TrainFeeCalculateChangeHeaders({ });
    return await this.trainFeeCalculateChangeWithOptions(request, headers, runtime);
  }

  /**
   * 火车票退票费用预估
   * 
   * @param tmpReq - TrainFeeCalculateRefundRequest
   * @param headers - TrainFeeCalculateRefundHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TrainFeeCalculateRefundResponse
   */
  async trainFeeCalculateRefundWithOptions(tmpReq: $_model.TrainFeeCalculateRefundRequest, headers: $_model.TrainFeeCalculateRefundHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.TrainFeeCalculateRefundResponse> {
    tmpReq.validate();
    let request = new $_model.TrainFeeCalculateRefundShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.refundTrainInfos)) {
      request.refundTrainInfosShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.refundTrainInfos, "refund_train_infos", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.distributeOrderId)) {
      body["distribute_order_id"] = request.distributeOrderId;
    }

    if (!$dara.isNull(request.orderId)) {
      body["order_id"] = request.orderId;
    }

    if (!$dara.isNull(request.refundTrainInfosShrink)) {
      body["refund_train_infos"] = request.refundTrainInfosShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TrainFeeCalculateRefund",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/train/v1/refund/fee`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TrainFeeCalculateRefundResponse>(await this.callApi(params, req, runtime), new $_model.TrainFeeCalculateRefundResponse({}));
  }

  /**
   * 火车票退票费用预估
   * 
   * @param request - TrainFeeCalculateRefundRequest
   * @returns TrainFeeCalculateRefundResponse
   */
  async trainFeeCalculateRefund(request: $_model.TrainFeeCalculateRefundRequest): Promise<$_model.TrainFeeCalculateRefundResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.TrainFeeCalculateRefundHeaders({ });
    return await this.trainFeeCalculateRefundWithOptions(request, headers, runtime);
  }

  /**
   * 火车票车次详情查询
   * 
   * @param request - TrainNoInfoSearchRequest
   * @param headers - TrainNoInfoSearchHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TrainNoInfoSearchResponse
   */
  async trainNoInfoSearchWithOptions(request: $_model.TrainNoInfoSearchRequest, headers: $_model.TrainNoInfoSearchHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.TrainNoInfoSearchResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.arrLocation)) {
      body["arr_location"] = request.arrLocation;
    }

    if (!$dara.isNull(request.depDate)) {
      body["dep_date"] = request.depDate;
    }

    if (!$dara.isNull(request.depLocation)) {
      body["dep_location"] = request.depLocation;
    }

    if (!$dara.isNull(request.lineKey)) {
      body["line_key"] = request.lineKey;
    }

    if (!$dara.isNull(request.middleDate)) {
      body["middle_date"] = request.middleDate;
    }

    if (!$dara.isNull(request.middleStation)) {
      body["middle_station"] = request.middleStation;
    }

    if (!$dara.isNull(request.orderId)) {
      body["order_id"] = request.orderId;
    }

    if (!$dara.isNull(request.trainNo)) {
      body["train_no"] = request.trainNo;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TrainNoInfoSearch",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/train/v1/search/info`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TrainNoInfoSearchResponse>(await this.callApi(params, req, runtime), new $_model.TrainNoInfoSearchResponse({}));
  }

  /**
   * 火车票车次详情查询
   * 
   * @param request - TrainNoInfoSearchRequest
   * @returns TrainNoInfoSearchResponse
   */
  async trainNoInfoSearch(request: $_model.TrainNoInfoSearchRequest): Promise<$_model.TrainNoInfoSearchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.TrainNoInfoSearchHeaders({ });
    return await this.trainNoInfoSearchWithOptions(request, headers, runtime);
  }

  /**
   * 火车票车次列表查询
   * 
   * @param tmpReq - TrainNoListSearchRequest
   * @param headers - TrainNoListSearchHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TrainNoListSearchResponse
   */
  async trainNoListSearchWithOptions(tmpReq: $_model.TrainNoListSearchRequest, headers: $_model.TrainNoListSearchHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.TrainNoListSearchResponse> {
    tmpReq.validate();
    let request = new $_model.TrainNoListSearchShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.option)) {
      request.optionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.option, "option", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.arrLocation)) {
      body["arr_location"] = request.arrLocation;
    }

    if (!$dara.isNull(request.depDate)) {
      body["dep_date"] = request.depDate;
    }

    if (!$dara.isNull(request.depLocation)) {
      body["dep_location"] = request.depLocation;
    }

    if (!$dara.isNull(request.optionShrink)) {
      body["option"] = request.optionShrink;
    }

    if (!$dara.isNull(request.orderId)) {
      body["order_id"] = request.orderId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TrainNoListSearch",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/train/v1/search/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TrainNoListSearchResponse>(await this.callApi(params, req, runtime), new $_model.TrainNoListSearchResponse({}));
  }

  /**
   * 火车票车次列表查询
   * 
   * @param request - TrainNoListSearchRequest
   * @returns TrainNoListSearchResponse
   */
  async trainNoListSearch(request: $_model.TrainNoListSearchRequest): Promise<$_model.TrainNoListSearchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.TrainNoListSearchHeaders({ });
    return await this.trainNoListSearchWithOptions(request, headers, runtime);
  }

  /**
   * 火车票订单取消
   * 
   * @param request - TrainOrderCancelRequest
   * @param headers - TrainOrderCancelHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TrainOrderCancelResponse
   */
  async trainOrderCancelWithOptions(request: $_model.TrainOrderCancelRequest, headers: $_model.TrainOrderCancelHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.TrainOrderCancelResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.changeOrderId)) {
      body["change_order_id"] = request.changeOrderId;
    }

    if (!$dara.isNull(request.orderId)) {
      body["order_id"] = request.orderId;
    }

    if (!$dara.isNull(request.outChangeOrderId)) {
      body["out_change_order_id"] = request.outChangeOrderId;
    }

    if (!$dara.isNull(request.outOrderId)) {
      body["out_order_id"] = request.outOrderId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TrainOrderCancel",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/train/v1/order/cancel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TrainOrderCancelResponse>(await this.callApi(params, req, runtime), new $_model.TrainOrderCancelResponse({}));
  }

  /**
   * 火车票订单取消
   * 
   * @param request - TrainOrderCancelRequest
   * @returns TrainOrderCancelResponse
   */
  async trainOrderCancel(request: $_model.TrainOrderCancelRequest): Promise<$_model.TrainOrderCancelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.TrainOrderCancelHeaders({ });
    return await this.trainOrderCancelWithOptions(request, headers, runtime);
  }

  /**
   * 火车票改签确认
   * 
   * @param request - TrainOrderChangeConfirmRequest
   * @param headers - TrainOrderChangeConfirmHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TrainOrderChangeConfirmResponse
   */
  async trainOrderChangeConfirmWithOptions(request: $_model.TrainOrderChangeConfirmRequest, headers: $_model.TrainOrderChangeConfirmHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.TrainOrderChangeConfirmResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.changeApplyId)) {
      body["change_apply_id"] = request.changeApplyId;
    }

    if (!$dara.isNull(request.changeSettleAmount)) {
      body["change_settle_amount"] = request.changeSettleAmount;
    }

    if (!$dara.isNull(request.orderId)) {
      body["order_id"] = request.orderId;
    }

    if (!$dara.isNull(request.outChangeApplyId)) {
      body["out_change_apply_id"] = request.outChangeApplyId;
    }

    if (!$dara.isNull(request.outOrderId)) {
      body["out_order_id"] = request.outOrderId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TrainOrderChangeConfirm",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/train/v1/change/confirm`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TrainOrderChangeConfirmResponse>(await this.callApi(params, req, runtime), new $_model.TrainOrderChangeConfirmResponse({}));
  }

  /**
   * 火车票改签确认
   * 
   * @param request - TrainOrderChangeConfirmRequest
   * @returns TrainOrderChangeConfirmResponse
   */
  async trainOrderChangeConfirm(request: $_model.TrainOrderChangeConfirmRequest): Promise<$_model.TrainOrderChangeConfirmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.TrainOrderChangeConfirmHeaders({ });
    return await this.trainOrderChangeConfirmWithOptions(request, headers, runtime);
  }

  /**
   * 火车票正向预订
   * 
   * @param tmpReq - TrainOrderCreateRequest
   * @param headers - TrainOrderCreateHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TrainOrderCreateResponse
   */
  async trainOrderCreateWithOptions(tmpReq: $_model.TrainOrderCreateRequest, headers: $_model.TrainOrderCreateHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.TrainOrderCreateResponse> {
    tmpReq.validate();
    let request = new $_model.TrainOrderCreateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.bookTrainInfos)) {
      request.bookTrainInfosShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bookTrainInfos, "book_train_infos", "json");
    }

    if (!$dara.isNull(tmpReq.businessInfo)) {
      request.businessInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.businessInfo, "business_info", "json");
    }

    if (!$dara.isNull(tmpReq.contactInfo)) {
      request.contactInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.contactInfo, "contact_info", "json");
    }

    if (!$dara.isNull(tmpReq.passengerOpenInfoS)) {
      request.passengerOpenInfoSShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.passengerOpenInfoS, "passenger_open_info_s", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acceptNoSeat)) {
      body["accept_no_seat"] = request.acceptNoSeat;
    }

    if (!$dara.isNull(request.bookTrainInfosShrink)) {
      body["book_train_infos"] = request.bookTrainInfosShrink;
    }

    if (!$dara.isNull(request.btripUserId)) {
      body["btrip_user_id"] = request.btripUserId;
    }

    if (!$dara.isNull(request.btripUserName)) {
      body["btrip_user_name"] = request.btripUserName;
    }

    if (!$dara.isNull(request.businessInfoShrink)) {
      body["business_info"] = request.businessInfoShrink;
    }

    if (!$dara.isNull(request.contactInfoShrink)) {
      body["contact_info"] = request.contactInfoShrink;
    }

    if (!$dara.isNull(request.forceMatch)) {
      body["force_match"] = request.forceMatch;
    }

    if (!$dara.isNull(request.isPayNow)) {
      body["is_pay_now"] = request.isPayNow;
    }

    if (!$dara.isNull(request.outOrderId)) {
      body["out_order_id"] = request.outOrderId;
    }

    if (!$dara.isNull(request.passengerOpenInfoSShrink)) {
      body["passenger_open_info_s"] = request.passengerOpenInfoSShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TrainOrderCreate",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/train/v1/order/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TrainOrderCreateResponse>(await this.callApi(params, req, runtime), new $_model.TrainOrderCreateResponse({}));
  }

  /**
   * 火车票正向预订
   * 
   * @param request - TrainOrderCreateRequest
   * @returns TrainOrderCreateResponse
   */
  async trainOrderCreate(request: $_model.TrainOrderCreateRequest): Promise<$_model.TrainOrderCreateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.TrainOrderCreateHeaders({ });
    return await this.trainOrderCreateWithOptions(request, headers, runtime);
  }

  /**
   * 火车票订单详情
   * 
   * @param request - TrainOrderDetailQueryRequest
   * @param headers - TrainOrderDetailQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TrainOrderDetailQueryResponse
   */
  async trainOrderDetailQueryWithOptions(request: $_model.TrainOrderDetailQueryRequest, headers: $_model.TrainOrderDetailQueryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.TrainOrderDetailQueryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.orderId)) {
      body["order_id"] = request.orderId;
    }

    if (!$dara.isNull(request.outOrderId)) {
      body["out_order_id"] = request.outOrderId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TrainOrderDetailQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/train/v1/order/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TrainOrderDetailQueryResponse>(await this.callApi(params, req, runtime), new $_model.TrainOrderDetailQueryResponse({}));
  }

  /**
   * 火车票订单详情
   * 
   * @param request - TrainOrderDetailQueryRequest
   * @returns TrainOrderDetailQueryResponse
   */
  async trainOrderDetailQuery(request: $_model.TrainOrderDetailQueryRequest): Promise<$_model.TrainOrderDetailQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.TrainOrderDetailQueryHeaders({ });
    return await this.trainOrderDetailQueryWithOptions(request, headers, runtime);
  }

  /**
   * 查询火车票订单列表
   * 
   * @param request - TrainOrderListQueryRequest
   * @param headers - TrainOrderListQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TrainOrderListQueryResponse
   */
  async trainOrderListQueryWithOptions(request: $_model.TrainOrderListQueryRequest, headers: $_model.TrainOrderListQueryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.TrainOrderListQueryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.allApply)) {
      query["all_apply"] = request.allApply;
    }

    if (!$dara.isNull(request.applyId)) {
      query["apply_id"] = request.applyId;
    }

    if (!$dara.isNull(request.departId)) {
      query["depart_id"] = request.departId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["end_time"] = request.endTime;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["start_time"] = request.startTime;
    }

    if (!$dara.isNull(request.thirdpartApplyId)) {
      query["thirdpart_apply_id"] = request.thirdpartApplyId;
    }

    if (!$dara.isNull(request.updateEndTime)) {
      query["update_end_time"] = request.updateEndTime;
    }

    if (!$dara.isNull(request.updateStartTime)) {
      query["update_start_time"] = request.updateStartTime;
    }

    if (!$dara.isNull(request.userId)) {
      query["user_id"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TrainOrderListQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/train/v1/order-list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.TrainOrderListQueryResponse>(await this.callApi(params, req, runtime), new $_model.TrainOrderListQueryResponse({}));
  }

  /**
   * 查询火车票订单列表
   * 
   * @param request - TrainOrderListQueryRequest
   * @returns TrainOrderListQueryResponse
   */
  async trainOrderListQuery(request: $_model.TrainOrderListQueryRequest): Promise<$_model.TrainOrderListQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.TrainOrderListQueryHeaders({ });
    return await this.trainOrderListQueryWithOptions(request, headers, runtime);
  }

  /**
   * 火车票订单支付
   * 
   * @param request - TrainOrderPayRequest
   * @param headers - TrainOrderPayHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TrainOrderPayResponse
   */
  async trainOrderPayWithOptions(request: $_model.TrainOrderPayRequest, headers: $_model.TrainOrderPayHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.TrainOrderPayResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.orderId)) {
      body["order_id"] = request.orderId;
    }

    if (!$dara.isNull(request.outOrderId)) {
      body["out_order_id"] = request.outOrderId;
    }

    if (!$dara.isNull(request.payAmount)) {
      body["pay_amount"] = request.payAmount;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TrainOrderPay",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/train/v1/order/pay`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TrainOrderPayResponse>(await this.callApi(params, req, runtime), new $_model.TrainOrderPayResponse({}));
  }

  /**
   * 火车票订单支付
   * 
   * @param request - TrainOrderPayRequest
   * @returns TrainOrderPayResponse
   */
  async trainOrderPay(request: $_model.TrainOrderPayRequest): Promise<$_model.TrainOrderPayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.TrainOrderPayHeaders({ });
    return await this.trainOrderPayWithOptions(request, headers, runtime);
  }

  /**
   * 查询火车票订单详情（含票信息）
   * 
   * @param request - TrainOrderQueryRequest
   * @param headers - TrainOrderQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TrainOrderQueryResponse
   */
  async trainOrderQueryWithOptions(request: $_model.TrainOrderQueryRequest, headers: $_model.TrainOrderQueryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.TrainOrderQueryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.orderId)) {
      query["order_id"] = request.orderId;
    }

    if (!$dara.isNull(request.userId)) {
      query["user_id"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TrainOrderQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/train/v1/order`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.TrainOrderQueryResponse>(await this.callApi(params, req, runtime), new $_model.TrainOrderQueryResponse({}));
  }

  /**
   * 查询火车票订单详情（含票信息）
   * 
   * @param request - TrainOrderQueryRequest
   * @returns TrainOrderQueryResponse
   */
  async trainOrderQuery(request: $_model.TrainOrderQueryRequest): Promise<$_model.TrainOrderQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.TrainOrderQueryHeaders({ });
    return await this.trainOrderQueryWithOptions(request, headers, runtime);
  }

  /**
   * 火车票订单查询V2
   * 
   * @param request - TrainOrderQueryV2Request
   * @param headers - TrainOrderQueryV2Headers
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TrainOrderQueryV2Response
   */
  async trainOrderQueryV2WithOptions(request: $_model.TrainOrderQueryV2Request, headers: $_model.TrainOrderQueryV2Headers, runtime: $dara.RuntimeOptions): Promise<$_model.TrainOrderQueryV2Response> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.orderId)) {
      query["order_id"] = request.orderId;
    }

    if (!$dara.isNull(request.userId)) {
      query["user_id"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TrainOrderQueryV2",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/train/v2/order`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.TrainOrderQueryV2Response>(await this.callApi(params, req, runtime), new $_model.TrainOrderQueryV2Response({}));
  }

  /**
   * 火车票订单查询V2
   * 
   * @param request - TrainOrderQueryV2Request
   * @returns TrainOrderQueryV2Response
   */
  async trainOrderQueryV2(request: $_model.TrainOrderQueryV2Request): Promise<$_model.TrainOrderQueryV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.TrainOrderQueryV2Headers({ });
    return await this.trainOrderQueryV2WithOptions(request, headers, runtime);
  }

  /**
   * 查询火车站数据
   * 
   * @param request - TrainStationSearchRequest
   * @param headers - TrainStationSearchHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TrainStationSearchResponse
   */
  async trainStationSearchWithOptions(request: $_model.TrainStationSearchRequest, headers: $_model.TrainStationSearchHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.TrainStationSearchResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TrainStationSearch",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/city/v1/train`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.TrainStationSearchResponse>(await this.callApi(params, req, runtime), new $_model.TrainStationSearchResponse({}));
  }

  /**
   * 查询火车站数据
   * 
   * @param request - TrainStationSearchRequest
   * @returns TrainStationSearchResponse
   */
  async trainStationSearch(request: $_model.TrainStationSearchRequest): Promise<$_model.TrainStationSearchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.TrainStationSearchHeaders({ });
    return await this.trainStationSearchWithOptions(request, headers, runtime);
  }

  /**
   * 火车票经停站查询
   * 
   * @param request - TrainStopoverSearchRequest
   * @param headers - TrainStopoverSearchHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TrainStopoverSearchResponse
   */
  async trainStopoverSearchWithOptions(request: $_model.TrainStopoverSearchRequest, headers: $_model.TrainStopoverSearchHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.TrainStopoverSearchResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.arrStation)) {
      body["arr_station"] = request.arrStation;
    }

    if (!$dara.isNull(request.depStation)) {
      body["dep_station"] = request.depStation;
    }

    if (!$dara.isNull(request.trainDate)) {
      body["train_date"] = request.trainDate;
    }

    if (!$dara.isNull(request.trainNo)) {
      body["train_no"] = request.trainNo;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TrainStopoverSearch",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/train/v1/search/stopover`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TrainStopoverSearchResponse>(await this.callApi(params, req, runtime), new $_model.TrainStopoverSearchResponse({}));
  }

  /**
   * 火车票经停站查询
   * 
   * @param request - TrainStopoverSearchRequest
   * @returns TrainStopoverSearchResponse
   */
  async trainStopoverSearch(request: $_model.TrainStopoverSearchRequest): Promise<$_model.TrainStopoverSearchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.TrainStopoverSearchHeaders({ });
    return await this.trainStopoverSearchWithOptions(request, headers, runtime);
  }

  /**
   * 查询火车票凭证扫描件
   * 
   * @param request - TrainTicketScanQueryRequest
   * @param headers - TrainTicketScanQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TrainTicketScanQueryResponse
   */
  async trainTicketScanQueryWithOptions(request: $_model.TrainTicketScanQueryRequest, headers: $_model.TrainTicketScanQueryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.TrainTicketScanQueryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.billDate)) {
      query["bill_date"] = request.billDate;
    }

    if (!$dara.isNull(request.billId)) {
      query["bill_id"] = request.billId;
    }

    if (!$dara.isNull(request.invoiceSubTaskId)) {
      query["invoice_sub_task_id"] = request.invoiceSubTaskId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["page_no"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!$dara.isNull(request.serialNumber)) {
      query["serial_number"] = request.serialNumber;
    }

    if (!$dara.isNull(request.ticketNo)) {
      query["ticket_no"] = request.ticketNo;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TrainTicketScanQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/scan/v1/train-ticket`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.TrainTicketScanQueryResponse>(await this.callApi(params, req, runtime), new $_model.TrainTicketScanQueryResponse({}));
  }

  /**
   * 查询火车票凭证扫描件
   * 
   * @param request - TrainTicketScanQueryRequest
   * @returns TrainTicketScanQueryResponse
   */
  async trainTicketScanQuery(request: $_model.TrainTicketScanQueryRequest): Promise<$_model.TrainTicketScanQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.TrainTicketScanQueryHeaders({ });
    return await this.trainTicketScanQueryWithOptions(request, headers, runtime);
  }

  /**
   * 查询差标列表
   * 
   * @param request - TravelStandardListQueryRequest
   * @param headers - TravelStandardListQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TravelStandardListQueryResponse
   */
  async travelStandardListQueryWithOptions(request: $_model.TravelStandardListQueryRequest, headers: $_model.TravelStandardListQueryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.TravelStandardListQueryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fromGroup)) {
      query["from_group"] = request.fromGroup;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["page_no"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["rule_name"] = request.ruleName;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TravelStandardListQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/travel-manage/v1/standards/list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.TravelStandardListQueryResponse>(await this.callApi(params, req, runtime), new $_model.TravelStandardListQueryResponse({}));
  }

  /**
   * 查询差标列表
   * 
   * @param request - TravelStandardListQueryRequest
   * @returns TravelStandardListQueryResponse
   */
  async travelStandardListQuery(request: $_model.TravelStandardListQueryRequest): Promise<$_model.TravelStandardListQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.TravelStandardListQueryHeaders({ });
    return await this.travelStandardListQueryWithOptions(request, headers, runtime);
  }

  /**
   * 查询差标详情
   * 
   * @param tmpReq - TravelStandardQueryRequest
   * @param headers - TravelStandardQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TravelStandardQueryResponse
   */
  async travelStandardQueryWithOptions(tmpReq: $_model.TravelStandardQueryRequest, headers: $_model.TravelStandardQueryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.TravelStandardQueryResponse> {
    tmpReq.validate();
    let request = new $_model.TravelStandardQueryShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.serviceTypeList)) {
      request.serviceTypeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.serviceTypeList, "service_type_list", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fromGroup)) {
      query["from_group"] = request.fromGroup;
    }

    if (!$dara.isNull(request.ruleCode)) {
      query["rule_code"] = request.ruleCode;
    }

    if (!$dara.isNull(request.serviceTypeListShrink)) {
      query["service_type_list"] = request.serviceTypeListShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TravelStandardQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/travel-manage/v1/standards/detail`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.TravelStandardQueryResponse>(await this.callApi(params, req, runtime), new $_model.TravelStandardQueryResponse({}));
  }

  /**
   * 查询差标详情
   * 
   * @param request - TravelStandardQueryRequest
   * @returns TravelStandardQueryResponse
   */
  async travelStandardQuery(request: $_model.TravelStandardQueryRequest): Promise<$_model.TravelStandardQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.TravelStandardQueryHeaders({ });
    return await this.travelStandardQueryWithOptions(request, headers, runtime);
  }

  /**
   * 新增差旅标准关联人员实体
   * 
   * @param tmpReq - TravelStandardRelateAddRequest
   * @param headers - TravelStandardRelateAddHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TravelStandardRelateAddResponse
   */
  async travelStandardRelateAddWithOptions(tmpReq: $_model.TravelStandardRelateAddRequest, headers: $_model.TravelStandardRelateAddHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.TravelStandardRelateAddResponse> {
    tmpReq.validate();
    let request = new $_model.TravelStandardRelateAddShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.addList)) {
      request.addListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.addList, "add_list", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addListShrink)) {
      body["add_list"] = request.addListShrink;
    }

    if (!$dara.isNull(request.fromGroup)) {
      body["from_group"] = request.fromGroup;
    }

    if (!$dara.isNull(request.ruleId)) {
      body["rule_id"] = request.ruleId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TravelStandardRelateAdd",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/travel-manage/v1/standards/add-relate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TravelStandardRelateAddResponse>(await this.callApi(params, req, runtime), new $_model.TravelStandardRelateAddResponse({}));
  }

  /**
   * 新增差旅标准关联人员实体
   * 
   * @param request - TravelStandardRelateAddRequest
   * @returns TravelStandardRelateAddResponse
   */
  async travelStandardRelateAdd(request: $_model.TravelStandardRelateAddRequest): Promise<$_model.TravelStandardRelateAddResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.TravelStandardRelateAddHeaders({ });
    return await this.travelStandardRelateAddWithOptions(request, headers, runtime);
  }

  /**
   * 删除差旅标准关联人员实体
   * 
   * @param tmpReq - TravelStandardRelateDeleteRequest
   * @param headers - TravelStandardRelateDeleteHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TravelStandardRelateDeleteResponse
   */
  async travelStandardRelateDeleteWithOptions(tmpReq: $_model.TravelStandardRelateDeleteRequest, headers: $_model.TravelStandardRelateDeleteHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.TravelStandardRelateDeleteResponse> {
    tmpReq.validate();
    let request = new $_model.TravelStandardRelateDeleteShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.removeList)) {
      request.removeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.removeList, "remove_list", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fromGroup)) {
      body["from_group"] = request.fromGroup;
    }

    if (!$dara.isNull(request.removeListShrink)) {
      body["remove_list"] = request.removeListShrink;
    }

    if (!$dara.isNull(request.ruleId)) {
      body["rule_id"] = request.ruleId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TravelStandardRelateDelete",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/travel-manage/v1/standards/delete-relate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TravelStandardRelateDeleteResponse>(await this.callApi(params, req, runtime), new $_model.TravelStandardRelateDeleteResponse({}));
  }

  /**
   * 删除差旅标准关联人员实体
   * 
   * @param request - TravelStandardRelateDeleteRequest
   * @returns TravelStandardRelateDeleteResponse
   */
  async travelStandardRelateDelete(request: $_model.TravelStandardRelateDeleteRequest): Promise<$_model.TravelStandardRelateDeleteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.TravelStandardRelateDeleteHeaders({ });
    return await this.travelStandardRelateDeleteWithOptions(request, headers, runtime);
  }

  /**
   * 查询差旅标准关联人员实体
   * 
   * @param request - TravelStandardRelateQueryRequest
   * @param headers - TravelStandardRelateQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TravelStandardRelateQueryResponse
   */
  async travelStandardRelateQueryWithOptions(request: $_model.TravelStandardRelateQueryRequest, headers: $_model.TravelStandardRelateQueryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.TravelStandardRelateQueryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fromGroup)) {
      query["from_group"] = request.fromGroup;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["rule_id"] = request.ruleId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TravelStandardRelateQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/travel-manage/v1/standards/query-relate`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.TravelStandardRelateQueryResponse>(await this.callApi(params, req, runtime), new $_model.TravelStandardRelateQueryResponse({}));
  }

  /**
   * 查询差旅标准关联人员实体
   * 
   * @param request - TravelStandardRelateQueryRequest
   * @returns TravelStandardRelateQueryResponse
   */
  async travelStandardRelateQuery(request: $_model.TravelStandardRelateQueryRequest): Promise<$_model.TravelStandardRelateQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.TravelStandardRelateQueryHeaders({ });
    return await this.travelStandardRelateQueryWithOptions(request, headers, runtime);
  }

  /**
   * 更新差旅标准绑定员工类型
   * 
   * @param request - TravelStandardScopeSaveRequest
   * @param headers - TravelStandardScopeSaveHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TravelStandardScopeSaveResponse
   */
  async travelStandardScopeSaveWithOptions(request: $_model.TravelStandardScopeSaveRequest, headers: $_model.TravelStandardScopeSaveHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.TravelStandardScopeSaveResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fromGroup)) {
      query["from_group"] = request.fromGroup;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["rule_id"] = request.ruleId;
    }

    if (!$dara.isNull(request.scope)) {
      query["scope"] = request.scope;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TravelStandardScopeSave",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/travel-manage/v1/standards/save-scope`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.TravelStandardScopeSaveResponse>(await this.callApi(params, req, runtime), new $_model.TravelStandardScopeSaveResponse({}));
  }

  /**
   * 更新差旅标准绑定员工类型
   * 
   * @param request - TravelStandardScopeSaveRequest
   * @returns TravelStandardScopeSaveResponse
   */
  async travelStandardScopeSave(request: $_model.TravelStandardScopeSaveRequest): Promise<$_model.TravelStandardScopeSaveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.TravelStandardScopeSaveHeaders({ });
    return await this.travelStandardScopeSaveWithOptions(request, headers, runtime);
  }

  /**
   * 查询业务流程
   * 
   * @param request - TripBusinessInstanceQueryRequest
   * @param headers - TripBusinessInstanceQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TripBusinessInstanceQueryResponse
   */
  async tripBusinessInstanceQueryWithOptions(request: $_model.TripBusinessInstanceQueryRequest, headers: $_model.TripBusinessInstanceQueryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.TripBusinessInstanceQueryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessInstanceId)) {
      query["business_instance_id"] = request.businessInstanceId;
    }

    if (!$dara.isNull(request.thirdBusinessId)) {
      query["third_business_id"] = request.thirdBusinessId;
    }

    if (!$dara.isNull(request.userId)) {
      query["user_id"] = request.userId;
    }

    if (!$dara.isNull(request.userName)) {
      query["user_name"] = request.userName;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TripBusinessInstanceQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/apply/v1/business`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.TripBusinessInstanceQueryResponse>(await this.callApi(params, req, runtime), new $_model.TripBusinessInstanceQueryResponse({}));
  }

  /**
   * 查询业务流程
   * 
   * @param request - TripBusinessInstanceQueryRequest
   * @returns TripBusinessInstanceQueryResponse
   */
  async tripBusinessInstanceQuery(request: $_model.TripBusinessInstanceQueryRequest): Promise<$_model.TripBusinessInstanceQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.TripBusinessInstanceQueryHeaders({ });
    return await this.tripBusinessInstanceQueryWithOptions(request, headers, runtime);
  }

  /**
   * 查询抄送信息
   * 
   * @param request - TripCCInfoQueryRequest
   * @param headers - TripCCInfoQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TripCCInfoQueryResponse
   */
  async tripCCInfoQueryWithOptions(request: $_model.TripCCInfoQueryRequest, headers: $_model.TripCCInfoQueryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.TripCCInfoQueryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessInstanceId)) {
      query["business_instance_id"] = request.businessInstanceId;
    }

    if (!$dara.isNull(request.nodeId)) {
      query["node_id"] = request.nodeId;
    }

    if (!$dara.isNull(request.thirdBusinessId)) {
      query["third_business_id"] = request.thirdBusinessId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TripCCInfoQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/apply/v1/cc`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.TripCCInfoQueryResponse>(await this.callApi(params, req, runtime), new $_model.TripCCInfoQueryResponse({}));
  }

  /**
   * 查询抄送信息
   * 
   * @param request - TripCCInfoQueryRequest
   * @returns TripCCInfoQueryResponse
   */
  async tripCCInfoQuery(request: $_model.TripCCInfoQueryRequest): Promise<$_model.TripCCInfoQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.TripCCInfoQueryHeaders({ });
    return await this.tripCCInfoQueryWithOptions(request, headers, runtime);
  }

  /**
   * 查询审批任务列表
   * 
   * @param request - TripTaskQueryRequest
   * @param headers - TripTaskQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TripTaskQueryResponse
   */
  async tripTaskQueryWithOptions(request: $_model.TripTaskQueryRequest, headers: $_model.TripTaskQueryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.TripTaskQueryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessInstanceId)) {
      query["business_instance_id"] = request.businessInstanceId;
    }

    if (!$dara.isNull(request.thirdBusinessId)) {
      query["third_business_id"] = request.thirdBusinessId;
    }

    if (!$dara.isNull(request.userId)) {
      query["user_id"] = request.userId;
    }

    if (!$dara.isNull(request.userName)) {
      query["user_name"] = request.userName;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TripTaskQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/apply/v1/tasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.TripTaskQueryResponse>(await this.callApi(params, req, runtime), new $_model.TripTaskQueryResponse({}));
  }

  /**
   * 查询审批任务列表
   * 
   * @param request - TripTaskQueryRequest
   * @returns TripTaskQueryResponse
   */
  async tripTaskQuery(request: $_model.TripTaskQueryRequest): Promise<$_model.TripTaskQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.TripTaskQueryHeaders({ });
    return await this.tripTaskQueryWithOptions(request, headers, runtime);
  }

  /**
   * 更新企业自定义角色
   * 
   * @param request - UpdateCustomRoleRequest
   * @param headers - UpdateCustomRoleHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCustomRoleResponse
   */
  async updateCustomRoleWithOptions(request: $_model.UpdateCustomRoleRequest, headers: $_model.UpdateCustomRoleHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCustomRoleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.roleId)) {
      body["role_id"] = request.roleId;
    }

    if (!$dara.isNull(request.roleName)) {
      body["role_name"] = request.roleName;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCustomRole",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/role/v1/customRoles/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCustomRoleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCustomRoleResponse({}));
  }

  /**
   * 更新企业自定义角色
   * 
   * @param request - UpdateCustomRoleRequest
   * @returns UpdateCustomRoleResponse
   */
  async updateCustomRole(request: $_model.UpdateCustomRoleRequest): Promise<$_model.UpdateCustomRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UpdateCustomRoleHeaders({ });
    return await this.updateCustomRoleWithOptions(request, headers, runtime);
  }

  /**
   * 修改企业部门
   * 
   * @param tmpReq - UpdateDepartmentRequest
   * @param headers - UpdateDepartmentHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDepartmentResponse
   */
  async updateDepartmentWithOptions(tmpReq: $_model.UpdateDepartmentRequest, headers: $_model.UpdateDepartmentHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDepartmentResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateDepartmentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.managerEmployeeIdList)) {
      request.managerEmployeeIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.managerEmployeeIdList, "manager_employee_id_list", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deptName)) {
      body["dept_name"] = request.deptName;
    }

    if (!$dara.isNull(request.managerEmployeeIdListShrink)) {
      body["manager_employee_id_list"] = request.managerEmployeeIdListShrink;
    }

    if (!$dara.isNull(request.outDeptId)) {
      body["out_dept_id"] = request.outDeptId;
    }

    if (!$dara.isNull(request.outDeptPid)) {
      body["out_dept_pid"] = request.outDeptPid;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDepartment",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/department/v2/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDepartmentResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDepartmentResponse({}));
  }

  /**
   * 修改企业部门
   * 
   * @param request - UpdateDepartmentRequest
   * @returns UpdateDepartmentResponse
   */
  async updateDepartment(request: $_model.UpdateDepartmentRequest): Promise<$_model.UpdateDepartmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UpdateDepartmentHeaders({ });
    return await this.updateDepartmentWithOptions(request, headers, runtime);
  }

  /**
   * 更新员工信息
   * 
   * @param tmpReq - UpdateEmployeeRequest
   * @param headers - UpdateEmployeeHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEmployeeResponse
   */
  async updateEmployeeWithOptions(tmpReq: $_model.UpdateEmployeeRequest, headers: $_model.UpdateEmployeeHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateEmployeeResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateEmployeeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.baseCityCodeList)) {
      request.baseCityCodeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.baseCityCodeList, "base_city_code_list", "json");
    }

    if (!$dara.isNull(tmpReq.baseLocationList)) {
      request.baseLocationListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.baseLocationList, "base_location_list", "json");
    }

    if (!$dara.isNull(tmpReq.certList)) {
      request.certListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.certList, "cert_list", "json");
    }

    if (!$dara.isNull(tmpReq.customRoleCodeList)) {
      request.customRoleCodeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.customRoleCodeList, "custom_role_code_list", "json");
    }

    if (!$dara.isNull(tmpReq.outDeptIdList)) {
      request.outDeptIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.outDeptIdList, "out_dept_id_list", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountEmail)) {
      body["account_email"] = request.accountEmail;
    }

    if (!$dara.isNull(request.accountPhone)) {
      body["account_phone"] = request.accountPhone;
    }

    if (!$dara.isNull(request.attribute)) {
      body["attribute"] = request.attribute;
    }

    if (!$dara.isNull(request.avatar)) {
      body["avatar"] = request.avatar;
    }

    if (!$dara.isNull(request.baseCityCodeListShrink)) {
      body["base_city_code_list"] = request.baseCityCodeListShrink;
    }

    if (!$dara.isNull(request.baseLocationListShrink)) {
      body["base_location_list"] = request.baseLocationListShrink;
    }

    if (!$dara.isNull(request.birthday)) {
      body["birthday"] = request.birthday;
    }

    if (!$dara.isNull(request.certListShrink)) {
      body["cert_list"] = request.certListShrink;
    }

    if (!$dara.isNull(request.customRoleCodeListShrink)) {
      body["custom_role_code_list"] = request.customRoleCodeListShrink;
    }

    if (!$dara.isNull(request.email)) {
      body["email"] = request.email;
    }

    if (!$dara.isNull(request.gender)) {
      body["gender"] = request.gender;
    }

    if (!$dara.isNull(request.isAdmin)) {
      body["is_admin"] = request.isAdmin;
    }

    if (!$dara.isNull(request.isBoss)) {
      body["is_boss"] = request.isBoss;
    }

    if (!$dara.isNull(request.isDeptLeader)) {
      body["is_dept_leader"] = request.isDeptLeader;
    }

    if (!$dara.isNull(request.jobNo)) {
      body["job_no"] = request.jobNo;
    }

    if (!$dara.isNull(request.managerUserId)) {
      body["manager_user_id"] = request.managerUserId;
    }

    if (!$dara.isNull(request.outDeptIdListShrink)) {
      body["out_dept_id_list"] = request.outDeptIdListShrink;
    }

    if (!$dara.isNull(request.phone)) {
      body["phone"] = request.phone;
    }

    if (!$dara.isNull(request.positionLevel)) {
      body["position_level"] = request.positionLevel;
    }

    if (!$dara.isNull(request.realName)) {
      body["real_name"] = request.realName;
    }

    if (!$dara.isNull(request.realNameEn)) {
      body["real_name_en"] = request.realNameEn;
    }

    if (!$dara.isNull(request.userId)) {
      body["user_id"] = request.userId;
    }

    if (!$dara.isNull(request.userNick)) {
      body["user_nick"] = request.userNick;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateEmployee",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/employee/v2/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateEmployeeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateEmployeeResponse({}));
  }

  /**
   * 更新员工信息
   * 
   * @param request - UpdateEmployeeRequest
   * @returns UpdateEmployeeResponse
   */
  async updateEmployee(request: $_model.UpdateEmployeeRequest): Promise<$_model.UpdateEmployeeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UpdateEmployeeHeaders({ });
    return await this.updateEmployeeWithOptions(request, headers, runtime);
  }

  /**
   * 更新员工在职状态
   * 
   * @param request - UpdateEmployeeLeaveStatusRequest
   * @param headers - UpdateEmployeeLeaveStatusHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEmployeeLeaveStatusResponse
   */
  async updateEmployeeLeaveStatusWithOptions(request: $_model.UpdateEmployeeLeaveStatusRequest, headers: $_model.UpdateEmployeeLeaveStatusHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateEmployeeLeaveStatusResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.isLeave)) {
      body["is_leave"] = request.isLeave;
    }

    if (!$dara.isNull(request.userId)) {
      body["user_id"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateEmployeeLeaveStatus",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/employee/v2/updateLeaveStatus`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateEmployeeLeaveStatusResponse>(await this.callApi(params, req, runtime), new $_model.UpdateEmployeeLeaveStatusResponse({}));
  }

  /**
   * 更新员工在职状态
   * 
   * @param request - UpdateEmployeeLeaveStatusRequest
   * @returns UpdateEmployeeLeaveStatusResponse
   */
  async updateEmployeeLeaveStatus(request: $_model.UpdateEmployeeLeaveStatusRequest): Promise<$_model.UpdateEmployeeLeaveStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UpdateEmployeeLeaveStatusHeaders({ });
    return await this.updateEmployeeLeaveStatusWithOptions(request, headers, runtime);
  }

  /**
   * 人员查询
   * 
   * @param request - UserQueryRequest
   * @param headers - UserQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UserQueryResponse
   */
  async userQueryWithOptions(request: $_model.UserQueryRequest, headers: $_model.UserQueryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.UserQueryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.modifiedTimeGreaterOrEqualThan)) {
      query["modified_time_greater_or_equal_than"] = request.modifiedTimeGreaterOrEqualThan;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!$dara.isNull(request.pageToken)) {
      query["page_token"] = request.pageToken;
    }

    if (!$dara.isNull(request.thirdPartJobNo)) {
      query["third_part_job_no"] = request.thirdPartJobNo;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UserQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/user/v1/user`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UserQueryResponse>(await this.callApi(params, req, runtime), new $_model.UserQueryResponse({}));
  }

  /**
   * 人员查询
   * 
   * @param request - UserQueryRequest
   * @returns UserQueryResponse
   */
  async userQuery(request: $_model.UserQueryRequest): Promise<$_model.UserQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UserQueryHeaders({ });
    return await this.userQueryWithOptions(request, headers, runtime);
  }

  /**
   * 查询增值服务记账数据
   * 
   * @param request - VasBillSettlementQueryRequest
   * @param headers - VasBillSettlementQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VasBillSettlementQueryResponse
   */
  async vasBillSettlementQueryWithOptions(request: $_model.VasBillSettlementQueryRequest, headers: $_model.VasBillSettlementQueryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.VasBillSettlementQueryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.billBatch)) {
      query["bill_batch"] = request.billBatch;
    }

    if (!$dara.isNull(request.cooperatorId)) {
      query["cooperator_id"] = request.cooperatorId;
    }

    if (!$dara.isNull(request.orderId)) {
      query["order_id"] = request.orderId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["page_no"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!$dara.isNull(request.periodEnd)) {
      query["period_end"] = request.periodEnd;
    }

    if (!$dara.isNull(request.periodStart)) {
      query["period_start"] = request.periodStart;
    }

    if (!$dara.isNull(request.scrollId)) {
      query["scroll_id"] = request.scrollId;
    }

    if (!$dara.isNull(request.scrollMod)) {
      query["scroll_mod"] = request.scrollMod;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = String(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "VasBillSettlementQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/vas/v1/bill-settlement`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.VasBillSettlementQueryResponse>(await this.callApi(params, req, runtime), new $_model.VasBillSettlementQueryResponse({}));
  }

  /**
   * 查询增值服务记账数据
   * 
   * @param request - VasBillSettlementQueryRequest
   * @returns VasBillSettlementQueryResponse
   */
  async vasBillSettlementQuery(request: $_model.VasBillSettlementQueryRequest): Promise<$_model.VasBillSettlementQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.VasBillSettlementQueryHeaders({ });
    return await this.vasBillSettlementQueryWithOptions(request, headers, runtime);
  }

  /**
   * 查询增值税发票扫描件
   * 
   * @param request - VatInvoiceScanQueryRequest
   * @param headers - VatInvoiceScanQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VatInvoiceScanQueryResponse
   */
  async vatInvoiceScanQueryWithOptions(request: $_model.VatInvoiceScanQueryRequest, headers: $_model.VatInvoiceScanQueryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.VatInvoiceScanQueryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.billDate)) {
      query["bill_date"] = request.billDate;
    }

    if (!$dara.isNull(request.billId)) {
      query["bill_id"] = request.billId;
    }

    if (!$dara.isNull(request.invoiceSubTaskId)) {
      query["invoice_sub_task_id"] = request.invoiceSubTaskId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["page_no"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "VatInvoiceScanQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/scan/v1/vat-invoice`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.VatInvoiceScanQueryResponse>(await this.callApi(params, req, runtime), new $_model.VatInvoiceScanQueryResponse({}));
  }

  /**
   * 查询增值税发票扫描件
   * 
   * @param request - VatInvoiceScanQueryRequest
   * @returns VatInvoiceScanQueryResponse
   */
  async vatInvoiceScanQuery(request: $_model.VatInvoiceScanQueryRequest): Promise<$_model.VatInvoiceScanQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.VatInvoiceScanQueryHeaders({ });
    return await this.vatInvoiceScanQueryWithOptions(request, headers, runtime);
  }

  /**
   * 查询账期待申请的发票数据
   * 
   * @param request - WaitApplyInvoiceTaskDetailQueryRequest
   * @param headers - WaitApplyInvoiceTaskDetailQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns WaitApplyInvoiceTaskDetailQueryResponse
   */
  async waitApplyInvoiceTaskDetailQueryWithOptions(request: $_model.WaitApplyInvoiceTaskDetailQueryRequest, headers: $_model.WaitApplyInvoiceTaskDetailQueryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.WaitApplyInvoiceTaskDetailQueryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.billDate)) {
      query["bill_date"] = request.billDate;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = String(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "WaitApplyInvoiceTaskDetailQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/invoice/v1/wait-apply-task`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.WaitApplyInvoiceTaskDetailQueryResponse>(await this.callApi(params, req, runtime), new $_model.WaitApplyInvoiceTaskDetailQueryResponse({}));
  }

  /**
   * 查询账期待申请的发票数据
   * 
   * @param request - WaitApplyInvoiceTaskDetailQueryRequest
   * @returns WaitApplyInvoiceTaskDetailQueryResponse
   */
  async waitApplyInvoiceTaskDetailQuery(request: $_model.WaitApplyInvoiceTaskDetailQueryRequest): Promise<$_model.WaitApplyInvoiceTaskDetailQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.WaitApplyInvoiceTaskDetailQueryHeaders({ });
    return await this.waitApplyInvoiceTaskDetailQueryWithOptions(request, headers, runtime);
  }

}
