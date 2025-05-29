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
      'ap-northeast-1': "agency.aliyuncs.com",
      'ap-northeast-2-pop': "agency.aliyuncs.com",
      'ap-south-1': "agency.aliyuncs.com",
      'ap-southeast-2': "agency.aliyuncs.com",
      'ap-southeast-3': "agency.aliyuncs.com",
      'ap-southeast-5': "agency.aliyuncs.com",
      'cn-beijing': "agency.aliyuncs.com",
      'cn-beijing-finance-1': "agency.aliyuncs.com",
      'cn-beijing-finance-pop': "agency.aliyuncs.com",
      'cn-beijing-gov-1': "agency.aliyuncs.com",
      'cn-beijing-nu16-b01': "agency.aliyuncs.com",
      'cn-chengdu': "agency.aliyuncs.com",
      'cn-edge-1': "agency.aliyuncs.com",
      'cn-fujian': "agency.aliyuncs.com",
      'cn-haidian-cm12-c01': "agency.aliyuncs.com",
      'cn-hangzhou': "agency.aliyuncs.com",
      'cn-hangzhou-bj-b01': "agency.aliyuncs.com",
      'cn-hangzhou-finance': "agency.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "agency.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "agency.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "agency.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "agency.aliyuncs.com",
      'cn-hangzhou-test-306': "agency.aliyuncs.com",
      'cn-hongkong': "agency.aliyuncs.com",
      'cn-hongkong-finance-pop': "agency.aliyuncs.com",
      'cn-huhehaote': "agency.aliyuncs.com",
      'cn-huhehaote-nebula-1': "agency.aliyuncs.com",
      'cn-north-2-gov-1': "agency.aliyuncs.com",
      'cn-qingdao': "agency.aliyuncs.com",
      'cn-qingdao-nebula': "agency.aliyuncs.com",
      'cn-shanghai': "agency.aliyuncs.com",
      'cn-shanghai-et15-b01': "agency.aliyuncs.com",
      'cn-shanghai-et2-b01': "agency.aliyuncs.com",
      'cn-shanghai-finance-1': "agency.aliyuncs.com",
      'cn-shanghai-inner': "agency.aliyuncs.com",
      'cn-shanghai-internal-test-1': "agency.aliyuncs.com",
      'cn-shenzhen': "agency.aliyuncs.com",
      'cn-shenzhen-finance-1': "agency.aliyuncs.com",
      'cn-shenzhen-inner': "agency.aliyuncs.com",
      'cn-shenzhen-st4-d01': "agency.aliyuncs.com",
      'cn-shenzhen-su18-b01': "agency.aliyuncs.com",
      'cn-wuhan': "agency.aliyuncs.com",
      'cn-wulanchabu': "agency.aliyuncs.com",
      'cn-yushanfang': "agency.aliyuncs.com",
      'cn-zhangbei': "agency.aliyuncs.com",
      'cn-zhangbei-na61-b01': "agency.aliyuncs.com",
      'cn-zhangjiakou': "agency.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "agency.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "agency.aliyuncs.com",
      'eu-central-1': "agency.aliyuncs.com",
      'eu-west-1': "agency.aliyuncs.com",
      'eu-west-1-oxs': "agency.aliyuncs.com",
      'me-east-1': "agency.aliyuncs.com",
      'rus-west-1-pop': "agency.aliyuncs.com",
      'us-east-1': "agency.aliyuncs.com",
      'us-west-1': "agency.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("agency", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 查询账单导出文件
   * 
   * @param request - GetBillDetailFileListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBillDetailFileListResponse
   */
  async getBillDetailFileListWithOptions(request: $_model.GetBillDetailFileListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetBillDetailFileListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.billMonth)) {
      query["BillMonth"] = request.billMonth;
    }

    if (!$dara.isNull(request.ossAccessKeyId)) {
      query["OssAccessKeyId"] = request.ossAccessKeyId;
    }

    if (!$dara.isNull(request.ossAccessKeySecret)) {
      query["OssAccessKeySecret"] = request.ossAccessKeySecret;
    }

    if (!$dara.isNull(request.ossBucketName)) {
      query["OssBucketName"] = request.ossBucketName;
    }

    if (!$dara.isNull(request.ossEndpoint)) {
      query["OssEndpoint"] = request.ossEndpoint;
    }

    if (!$dara.isNull(request.ossRegion)) {
      query["OssRegion"] = request.ossRegion;
    }

    if (!$dara.isNull(request.ossSecurityToken)) {
      query["OssSecurityToken"] = request.ossSecurityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBillDetailFileList",
      version: "2025-02-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBillDetailFileListResponse>(await this.callApi(params, req, runtime), new $_model.GetBillDetailFileListResponse({}));
  }

  /**
   * 查询账单导出文件
   * 
   * @param request - GetBillDetailFileListRequest
   * @returns GetBillDetailFileListResponse
   */
  async getBillDetailFileList(request: $_model.GetBillDetailFileListRequest): Promise<$_model.GetBillDetailFileListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBillDetailFileListWithOptions(request, runtime);
  }

  /**
   * 查询伙伴佣金明细
   * 
   * @param request - GetCommissionDetailFileListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCommissionDetailFileListResponse
   */
  async getCommissionDetailFileListWithOptions(request: $_model.GetCommissionDetailFileListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCommissionDetailFileListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.billMonth)) {
      query["BillMonth"] = request.billMonth;
    }

    if (!$dara.isNull(request.ossAccessKeyId)) {
      query["OssAccessKeyId"] = request.ossAccessKeyId;
    }

    if (!$dara.isNull(request.ossAccessKeySecret)) {
      query["OssAccessKeySecret"] = request.ossAccessKeySecret;
    }

    if (!$dara.isNull(request.ossBucketName)) {
      query["OssBucketName"] = request.ossBucketName;
    }

    if (!$dara.isNull(request.ossEndpoint)) {
      query["OssEndpoint"] = request.ossEndpoint;
    }

    if (!$dara.isNull(request.ossRegion)) {
      query["OssRegion"] = request.ossRegion;
    }

    if (!$dara.isNull(request.ossSecurityToken)) {
      query["OssSecurityToken"] = request.ossSecurityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCommissionDetailFileList",
      version: "2025-02-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCommissionDetailFileListResponse>(await this.callApi(params, req, runtime), new $_model.GetCommissionDetailFileListResponse({}));
  }

  /**
   * 查询伙伴佣金明细
   * 
   * @param request - GetCommissionDetailFileListRequest
   * @returns GetCommissionDetailFileListResponse
   */
  async getCommissionDetailFileList(request: $_model.GetCommissionDetailFileListRequest): Promise<$_model.GetCommissionDetailFileListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCommissionDetailFileListWithOptions(request, runtime);
  }

  /**
   * 查询伙伴拓客订单
   * 
   * @param tmpReq - GetCustomerOrderListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCustomerOrderListResponse
   */
  async getCustomerOrderListWithOptions(tmpReq: $_model.GetCustomerOrderListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCustomerOrderListResponse> {
    tmpReq.validate();
    let request = new $_model.GetCustomerOrderListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.orderTypeList)) {
      request.orderTypeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.orderTypeList, "OrderTypeList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.customerAccount)) {
      query["CustomerAccount"] = request.customerAccount;
    }

    if (!$dara.isNull(request.customerUid)) {
      query["CustomerUid"] = request.customerUid;
    }

    if (!$dara.isNull(request.orderCreateAfter)) {
      query["OrderCreateAfter"] = request.orderCreateAfter;
    }

    if (!$dara.isNull(request.orderCreateBefore)) {
      query["OrderCreateBefore"] = request.orderCreateBefore;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.orderPayAfter)) {
      query["OrderPayAfter"] = request.orderPayAfter;
    }

    if (!$dara.isNull(request.orderPayBefore)) {
      query["OrderPayBefore"] = request.orderPayBefore;
    }

    if (!$dara.isNull(request.orderStatus)) {
      query["OrderStatus"] = request.orderStatus;
    }

    if (!$dara.isNull(request.orderTypeListShrink)) {
      query["OrderTypeList"] = request.orderTypeListShrink;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.payAmountAfter)) {
      query["PayAmountAfter"] = request.payAmountAfter;
    }

    if (!$dara.isNull(request.payAmountBefore)) {
      query["PayAmountBefore"] = request.payAmountBefore;
    }

    if (!$dara.isNull(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.productName)) {
      query["ProductName"] = request.productName;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.ramAccountForCustomerManager)) {
      query["RamAccountForCustomerManager"] = request.ramAccountForCustomerManager;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCustomerOrderList",
      version: "2025-02-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCustomerOrderListResponse>(await this.callApi(params, req, runtime), new $_model.GetCustomerOrderListResponse({}));
  }

  /**
   * 查询伙伴拓客订单
   * 
   * @param request - GetCustomerOrderListRequest
   * @returns GetCustomerOrderListResponse
   */
  async getCustomerOrderList(request: $_model.GetCustomerOrderListRequest): Promise<$_model.GetCustomerOrderListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCustomerOrderListWithOptions(request, runtime);
  }

  /**
   * 查询伙伴续费率
   * 
   * @param request - GetRenewalRateListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRenewalRateListResponse
   */
  async getRenewalRateListWithOptions(request: $_model.GetRenewalRateListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRenewalRateListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fiscalYearAndQuarter)) {
      query["FiscalYearAndQuarter"] = request.fiscalYearAndQuarter;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRenewalRateList",
      version: "2025-02-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRenewalRateListResponse>(await this.callApi(params, req, runtime), new $_model.GetRenewalRateListResponse({}));
  }

  /**
   * 查询伙伴续费率
   * 
   * @param request - GetRenewalRateListRequest
   * @returns GetRenewalRateListResponse
   */
  async getRenewalRateList(request: $_model.GetRenewalRateListRequest): Promise<$_model.GetRenewalRateListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRenewalRateListWithOptions(request, runtime);
  }

  /**
   * 查询二级分销商列表
   * 
   * @param request - GetSubPartnerListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSubPartnerListResponse
   */
  async getSubPartnerListWithOptions(request: $_model.GetSubPartnerListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSubPartnerListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.subPartnerCompanyName)) {
      query["SubPartnerCompanyName"] = request.subPartnerCompanyName;
    }

    if (!$dara.isNull(request.subPartnerPid)) {
      query["SubPartnerPid"] = request.subPartnerPid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSubPartnerList",
      version: "2025-02-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSubPartnerListResponse>(await this.callApi(params, req, runtime), new $_model.GetSubPartnerListResponse({}));
  }

  /**
   * 查询二级分销商列表
   * 
   * @param request - GetSubPartnerListRequest
   * @returns GetSubPartnerListResponse
   */
  async getSubPartnerList(request: $_model.GetSubPartnerListRequest): Promise<$_model.GetSubPartnerListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSubPartnerListWithOptions(request, runtime);
  }

  /**
   * 查询拓渠订单
   * 
   * @param tmpReq - GetSubPartnerOrderListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSubPartnerOrderListResponse
   */
  async getSubPartnerOrderListWithOptions(tmpReq: $_model.GetSubPartnerOrderListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSubPartnerOrderListResponse> {
    tmpReq.validate();
    let request = new $_model.GetSubPartnerOrderListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.orderTypeList)) {
      request.orderTypeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.orderTypeList, "OrderTypeList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.orderCreateAfter)) {
      query["OrderCreateAfter"] = request.orderCreateAfter;
    }

    if (!$dara.isNull(request.orderCreateBefore)) {
      query["OrderCreateBefore"] = request.orderCreateBefore;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.orderPayAfter)) {
      query["OrderPayAfter"] = request.orderPayAfter;
    }

    if (!$dara.isNull(request.orderPayBefore)) {
      query["OrderPayBefore"] = request.orderPayBefore;
    }

    if (!$dara.isNull(request.orderStatus)) {
      query["OrderStatus"] = request.orderStatus;
    }

    if (!$dara.isNull(request.orderTypeListShrink)) {
      query["OrderTypeList"] = request.orderTypeListShrink;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.payAmountAfter)) {
      query["PayAmountAfter"] = request.payAmountAfter;
    }

    if (!$dara.isNull(request.payAmountBefore)) {
      query["PayAmountBefore"] = request.payAmountBefore;
    }

    if (!$dara.isNull(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.productName)) {
      query["ProductName"] = request.productName;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.subPartnerName)) {
      query["SubPartnerName"] = request.subPartnerName;
    }

    if (!$dara.isNull(request.subPartnerUid)) {
      query["SubPartnerUid"] = request.subPartnerUid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSubPartnerOrderList",
      version: "2025-02-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSubPartnerOrderListResponse>(await this.callApi(params, req, runtime), new $_model.GetSubPartnerOrderListResponse({}));
  }

  /**
   * 查询拓渠订单
   * 
   * @param request - GetSubPartnerOrderListRequest
   * @returns GetSubPartnerOrderListResponse
   */
  async getSubPartnerOrderList(request: $_model.GetSubPartnerOrderListRequest): Promise<$_model.GetSubPartnerOrderListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSubPartnerOrderListWithOptions(request, runtime);
  }

}
