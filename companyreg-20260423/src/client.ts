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
      'ap-northeast-1': "companyreg.aliyuncs.com",
      'ap-northeast-2-pop': "companyreg.aliyuncs.com",
      'ap-south-1': "companyreg.aliyuncs.com",
      'ap-southeast-1': "companyreg.aliyuncs.com",
      'ap-southeast-2': "companyreg.aliyuncs.com",
      'ap-southeast-3': "companyreg.aliyuncs.com",
      'ap-southeast-5': "companyreg.aliyuncs.com",
      'cn-beijing': "companyreg.aliyuncs.com",
      'cn-beijing-finance-1': "companyreg.aliyuncs.com",
      'cn-beijing-finance-pop': "companyreg.aliyuncs.com",
      'cn-beijing-gov-1': "companyreg.aliyuncs.com",
      'cn-beijing-nu16-b01': "companyreg.aliyuncs.com",
      'cn-chengdu': "companyreg.aliyuncs.com",
      'cn-edge-1': "companyreg.aliyuncs.com",
      'cn-fujian': "companyreg.aliyuncs.com",
      'cn-haidian-cm12-c01': "companyreg.aliyuncs.com",
      'cn-hangzhou-bj-b01': "companyreg.aliyuncs.com",
      'cn-hangzhou-finance': "companyreg.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "companyreg.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "companyreg.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "companyreg.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "companyreg.aliyuncs.com",
      'cn-hangzhou-test-306': "companyreg.aliyuncs.com",
      'cn-hongkong': "companyreg.aliyuncs.com",
      'cn-hongkong-finance-pop': "companyreg.aliyuncs.com",
      'cn-huhehaote': "companyreg.aliyuncs.com",
      'cn-huhehaote-nebula-1': "companyreg.aliyuncs.com",
      'cn-north-2-gov-1': "companyreg.aliyuncs.com",
      'cn-qingdao': "companyreg.aliyuncs.com",
      'cn-qingdao-nebula': "companyreg.aliyuncs.com",
      'cn-shanghai': "companyreg.aliyuncs.com",
      'cn-shanghai-et15-b01': "companyreg.aliyuncs.com",
      'cn-shanghai-et2-b01': "companyreg.aliyuncs.com",
      'cn-shanghai-finance-1': "companyreg.aliyuncs.com",
      'cn-shanghai-inner': "companyreg.aliyuncs.com",
      'cn-shanghai-internal-test-1': "companyreg.aliyuncs.com",
      'cn-shenzhen': "companyreg.aliyuncs.com",
      'cn-shenzhen-finance-1': "companyreg.aliyuncs.com",
      'cn-shenzhen-inner': "companyreg.aliyuncs.com",
      'cn-shenzhen-st4-d01': "companyreg.aliyuncs.com",
      'cn-shenzhen-su18-b01': "companyreg.aliyuncs.com",
      'cn-wuhan': "companyreg.aliyuncs.com",
      'cn-wulanchabu': "companyreg.aliyuncs.com",
      'cn-yushanfang': "companyreg.aliyuncs.com",
      'cn-zhangbei': "companyreg.aliyuncs.com",
      'cn-zhangbei-na61-b01': "companyreg.aliyuncs.com",
      'cn-zhangjiakou': "companyreg.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "companyreg.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "companyreg.aliyuncs.com",
      'eu-central-1': "companyreg.aliyuncs.com",
      'eu-west-1': "companyreg.aliyuncs.com",
      'eu-west-1-oxs': "companyreg.aliyuncs.com",
      'me-east-1': "companyreg.aliyuncs.com",
      'rus-west-1-pop': "companyreg.aliyuncs.com",
      'us-east-1': "companyreg.aliyuncs.com",
      'us-west-1': "companyreg.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("companyreg", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 查询已备案信息
   * 
   * @param request - QuerySuccessIcpDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySuccessIcpDataResponse
   */
  async querySuccessIcpDataWithOptions(request: $_model.QuerySuccessIcpDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySuccessIcpDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.caller)) {
      query["Caller"] = request.caller;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySuccessIcpData",
      version: "2026-04-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySuccessIcpDataResponse>(await this.callApi(params, req, runtime), new $_model.QuerySuccessIcpDataResponse({}));
  }

  /**
   * 查询已备案信息
   * 
   * @param request - QuerySuccessIcpDataRequest
   * @returns QuerySuccessIcpDataResponse
   */
  async querySuccessIcpData(request: $_model.QuerySuccessIcpDataRequest): Promise<$_model.QuerySuccessIcpDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySuccessIcpDataWithOptions(request, runtime);
  }

}
