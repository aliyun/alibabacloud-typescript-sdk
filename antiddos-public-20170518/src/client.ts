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
      'cn-qingdao': "antiddos.aliyuncs.com",
      'cn-beijing': "antiddos.aliyuncs.com",
      'cn-zhangjiakou': "antiddos-openapi.cn-zhangjiakou.aliyuncs.com",
      'cn-huhehaote': "antiddos-openapi.cn-huhehaote.aliyuncs.com",
      'cn-wulanchabu': "antiddos-openapi.cn-wulanchabu.aliyuncs.com",
      'cn-hangzhou': "antiddos.aliyuncs.com",
      'cn-shanghai': "antiddos.aliyuncs.com",
      'cn-nanjing': "antiddos-openapi.cn-hangzhou-cloudstone.aliyuncs.com",
      'cn-shenzhen': "antiddos.aliyuncs.com",
      'cn-heyuan': "antiddos-openapi.cn-heyuan.aliyuncs.com",
      'cn-guangzhou': "antiddos-openapi.cn-guangzhou.aliyuncs.com",
      'cn-chengdu': "antiddos-openapi.cn-chengdu.aliyuncs.com",
      'cn-hongkong': "antiddos.aliyuncs.com",
      'ap-northeast-1': "antiddos-openapi.ap-northeast-1.aliyuncs.com",
      'ap-northeast-2': "antiddos-openapi.ap-northeast-2.aliyuncs.com",
      'ap-southeast-1': "antiddos.aliyuncs.com",
      'ap-southeast-2': "antiddos-openapi.ap-southeast-2.aliyuncs.com",
      'ap-southeast-3': "antiddos-openapi.ap-southeast-3.aliyuncs.com",
      'ap-southeast-5': "antiddos-openapi.ap-southeast-5.aliyuncs.com",
      'ap-southeast-6': "antiddos-openapi.ap-southeast-6.aliyuncs.com",
      'us-east-1': "antiddos.aliyuncs.com",
      'us-west-1': "antiddos.aliyuncs.com",
      'eu-west-1': "antiddos-openapi.eu-west-1.aliyuncs.com",
      'eu-central-1': "antiddos-openapi.eu-central-1.aliyuncs.com",
      'ap-south-1': "antiddos-openapi.ap-south-1.aliyuncs.com",
      'me-east-1': "antiddos-openapi.me-east-1.aliyuncs.com",
      'cn-shanghai-finance-1': "antiddos.aliyuncs.com",
      'cn-shenzhen-finance-1': "antiddos.aliyuncs.com",
      'cn-north-2-gov-1': "antiddos.aliyuncs.com",
      'ap-northeast-2-pop': "antiddos.aliyuncs.com",
      'cn-beijing-finance-1': "antiddos.aliyuncs.com",
      'cn-beijing-finance-pop': "antiddos.aliyuncs.com",
      'cn-beijing-gov-1': "antiddos.aliyuncs.com",
      'cn-beijing-nu16-b01': "antiddos.aliyuncs.com",
      'cn-edge-1': "antiddos.aliyuncs.com",
      'cn-fujian': "antiddos.aliyuncs.com",
      'cn-haidian-cm12-c01': "antiddos.aliyuncs.com",
      'cn-hangzhou-bj-b01': "antiddos.aliyuncs.com",
      'cn-hangzhou-finance': "antiddos.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "antiddos.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "antiddos.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "antiddos.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "antiddos.aliyuncs.com",
      'cn-hangzhou-test-306': "antiddos.aliyuncs.com",
      'cn-hongkong-finance-pop': "antiddos.aliyuncs.com",
      'cn-huhehaote-nebula-1': "antiddos.aliyuncs.com",
      'cn-qingdao-nebula': "antiddos.aliyuncs.com",
      'cn-shanghai-et15-b01': "antiddos.aliyuncs.com",
      'cn-shanghai-et2-b01': "antiddos.aliyuncs.com",
      'cn-shanghai-inner': "antiddos.aliyuncs.com",
      'cn-shanghai-internal-test-1': "antiddos.aliyuncs.com",
      'cn-shenzhen-inner': "antiddos.aliyuncs.com",
      'cn-shenzhen-st4-d01': "antiddos.aliyuncs.com",
      'cn-shenzhen-su18-b01': "antiddos.aliyuncs.com",
      'cn-wuhan': "antiddos.aliyuncs.com",
      'cn-yushanfang': "antiddos.aliyuncs.com",
      'cn-zhangbei': "antiddos.aliyuncs.com",
      'cn-zhangbei-na61-b01': "antiddos.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "antiddos-openapi.cn-zhangjiakou.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "antiddos.aliyuncs.com",
      'eu-west-1-oxs': "antiddos.aliyuncs.com",
      'rus-west-1-pop': "antiddos.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("antiddos-public", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Queries the configurations of the Anti-DDoS Origin instance that is associated with an asset. The asset is assigned a public IP address.
   * 
   * @remarks
   * You can call the DescribeBgpPackByIp operation to query the configurations of the Anti-DDoS Origin instance that is associated with an asset. The configurations include the basic protection threshold, burstable protection threshold, and expiration time.
   * ## [](#qps-)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeBgpPackByIpRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBgpPackByIpResponse
   */
  async describeBgpPackByIpWithOptions(request: $_model.DescribeBgpPackByIpRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBgpPackByIpResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ddosRegionId)) {
      query["DdosRegionId"] = request.ddosRegionId;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBgpPackByIp",
      version: "2017-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBgpPackByIpResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBgpPackByIpResponse({}));
  }

  /**
   * Queries the configurations of the Anti-DDoS Origin instance that is associated with an asset. The asset is assigned a public IP address.
   * 
   * @remarks
   * You can call the DescribeBgpPackByIp operation to query the configurations of the Anti-DDoS Origin instance that is associated with an asset. The configurations include the basic protection threshold, burstable protection threshold, and expiration time.
   * ## [](#qps-)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeBgpPackByIpRequest
   * @returns DescribeBgpPackByIpResponse
   */
  async describeBgpPackByIp(request: $_model.DescribeBgpPackByIpRequest): Promise<$_model.DescribeBgpPackByIpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBgpPackByIpWithOptions(request, runtime);
  }

  /**
   * Queries the download link to the traffic data that is captured when a DDoS attack event occurs.
   * 
   * @remarks
   * You can call the DescribeCap operation to query the download link to the traffic data that is captured when a DDoS attack event occurs. You can download the traffic data from the download link and use the data as evidence.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeCapRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCapResponse
   */
  async describeCapWithOptions(request: $_model.DescribeCapRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCapResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.begTime)) {
      query["BegTime"] = request.begTime;
    }

    if (!$dara.isNull(request.ddosRegionId)) {
      query["DdosRegionId"] = request.ddosRegionId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.internetIp)) {
      query["InternetIp"] = request.internetIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCap",
      version: "2017-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCapResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCapResponse({}));
  }

  /**
   * Queries the download link to the traffic data that is captured when a DDoS attack event occurs.
   * 
   * @remarks
   * You can call the DescribeCap operation to query the download link to the traffic data that is captured when a DDoS attack event occurs. You can download the traffic data from the download link and use the data as evidence.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeCapRequest
   * @returns DescribeCapResponse
   */
  async describeCap(request: $_model.DescribeCapRequest): Promise<$_model.DescribeCapResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCapWithOptions(request, runtime);
  }

  /**
   * Queries the number of assets that are under DDoS attacks in a specific region. The assets are assigned public IP addresses.
   * 
   * @remarks
   * ## [](#qps-)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDdosCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDdosCountResponse
   */
  async describeDdosCountWithOptions(request: $_model.DescribeDdosCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDdosCountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ddosRegionId)) {
      query["DdosRegionId"] = request.ddosRegionId;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDdosCount",
      version: "2017-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDdosCountResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDdosCountResponse({}));
  }

  /**
   * Queries the number of assets that are under DDoS attacks in a specific region. The assets are assigned public IP addresses.
   * 
   * @remarks
   * ## [](#qps-)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDdosCountRequest
   * @returns DescribeDdosCountResponse
   */
  async describeDdosCount(request: $_model.DescribeDdosCountRequest): Promise<$_model.DescribeDdosCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDdosCountWithOptions(request, runtime);
  }

  /**
   * Queries the details of the security credit score of the current Alibaba Cloud account in a specific region.
   * 
   * @remarks
   * You can call the DescribeDdosCredit operation to query the details of the security credit score of the current Alibaba Cloud account in a specific region. The details include the security credit score, security credit level, and the time period after which blackhole filtering is automatically deactivated.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDdosCreditRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDdosCreditResponse
   */
  async describeDdosCreditWithOptions(request: $_model.DescribeDdosCreditRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDdosCreditResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ddosRegionId)) {
      query["DdosRegionId"] = request.ddosRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDdosCredit",
      version: "2017-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDdosCreditResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDdosCreditResponse({}));
  }

  /**
   * Queries the details of the security credit score of the current Alibaba Cloud account in a specific region.
   * 
   * @remarks
   * You can call the DescribeDdosCredit operation to query the details of the security credit score of the current Alibaba Cloud account in a specific region. The details include the security credit score, security credit level, and the time period after which blackhole filtering is automatically deactivated.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDdosCreditRequest
   * @returns DescribeDdosCreditResponse
   */
  async describeDdosCredit(request: $_model.DescribeDdosCreditRequest): Promise<$_model.DescribeDdosCreditResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDdosCreditWithOptions(request, runtime);
  }

  /**
   * Queries the details of the DDoS attack events that occur on an asset. The asset is assigned a public IP address.
   * 
   * @remarks
   * You can call the DescribeDdosEventList operation to query the details of the DDoS attack events that occur on an asset by page. The details include the start time, end time, and status of each DDoS attack event.
   * ## [](#qps-)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDdosEventListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDdosEventListResponse
   */
  async describeDdosEventListWithOptions(request: $_model.DescribeDdosEventListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDdosEventListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.ddosRegionId)) {
      query["DdosRegionId"] = request.ddosRegionId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.internetIp)) {
      query["InternetIp"] = request.internetIp;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryDays)) {
      query["QueryDays"] = request.queryDays;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDdosEventList",
      version: "2017-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDdosEventListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDdosEventListResponse({}));
  }

  /**
   * Queries the details of the DDoS attack events that occur on an asset. The asset is assigned a public IP address.
   * 
   * @remarks
   * You can call the DescribeDdosEventList operation to query the details of the DDoS attack events that occur on an asset by page. The details include the start time, end time, and status of each DDoS attack event.
   * ## [](#qps-)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDdosEventListRequest
   * @returns DescribeDdosEventListResponse
   */
  async describeDdosEventList(request: $_model.DescribeDdosEventListRequest): Promise<$_model.DescribeDdosEventListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDdosEventListWithOptions(request, runtime);
  }

  /**
   * Queries the details of the DDoS mitigation thresholds or traffic scrubbing thresholds for specified assets. The assets can be elastic IP addresses (EIPs). The assets can also be Elastic Compute Service (ECS) instances or Server Load Balancer (SLB) instances that are assigned public IP addresses.
   * 
   * @remarks
   * You can call the DescribeDdosThreshold operation to query the details of the DDoS mitigation thresholds or traffic scrubbing thresholds for specified assets. The details include the current traffic scrubbing threshold, maximum traffic scrubbing threshold, current DDoS mitigation threshold, and maximum DDoS mitigation threshold.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDdosThresholdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDdosThresholdResponse
   */
  async describeDdosThresholdWithOptions(request: $_model.DescribeDdosThresholdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDdosThresholdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ddosRegionId)) {
      query["DdosRegionId"] = request.ddosRegionId;
    }

    if (!$dara.isNull(request.ddosType)) {
      query["DdosType"] = request.ddosType;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDdosThreshold",
      version: "2017-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDdosThresholdResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDdosThresholdResponse({}));
  }

  /**
   * Queries the details of the DDoS mitigation thresholds or traffic scrubbing thresholds for specified assets. The assets can be elastic IP addresses (EIPs). The assets can also be Elastic Compute Service (ECS) instances or Server Load Balancer (SLB) instances that are assigned public IP addresses.
   * 
   * @remarks
   * You can call the DescribeDdosThreshold operation to query the details of the DDoS mitigation thresholds or traffic scrubbing thresholds for specified assets. The details include the current traffic scrubbing threshold, maximum traffic scrubbing threshold, current DDoS mitigation threshold, and maximum DDoS mitigation threshold.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDdosThresholdRequest
   * @returns DescribeDdosThresholdResponse
   */
  async describeDdosThreshold(request: $_model.DescribeDdosThresholdRequest): Promise<$_model.DescribeDdosThresholdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDdosThresholdWithOptions(request, runtime);
  }

  /**
   * Queries the details of the assets within the current Alibaba Cloud account. The assets can be elastic IP addresses (EIPs). The assets can also be Elastic Compute Service (ECS) instances or Server Load Balancer (SLB) instances that are assigned public IP addresses. This operation is phased out. We recommend that you use the DescribeInstanceIpAddress operation.
   * 
   * @remarks
   * You can call the DescribeInstance operation to query the details of the assets that are within the current Alibaba Cloud account by page. The details include the IDs and IP addresses of the assets, the basic protection thresholds and traffic scrubbing thresholds that are configured for the assets in Anti-DDoS Origin, and whether the assets are associated with Anti-DDoS Origin instances.
   * ### [](#qps-)Limits
   * You can call this operation up to 200 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceResponse
   */
  async describeInstanceWithOptions(request: $_model.DescribeInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.ddosRegionId)) {
      query["DdosRegionId"] = request.ddosRegionId;
    }

    if (!$dara.isNull(request.ddosStatus)) {
      query["DdosStatus"] = request.ddosStatus;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceIp)) {
      query["InstanceIp"] = request.instanceIp;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstance",
      version: "2017-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceResponse({}));
  }

  /**
   * Queries the details of the assets within the current Alibaba Cloud account. The assets can be elastic IP addresses (EIPs). The assets can also be Elastic Compute Service (ECS) instances or Server Load Balancer (SLB) instances that are assigned public IP addresses. This operation is phased out. We recommend that you use the DescribeInstanceIpAddress operation.
   * 
   * @remarks
   * You can call the DescribeInstance operation to query the details of the assets that are within the current Alibaba Cloud account by page. The details include the IDs and IP addresses of the assets, the basic protection thresholds and traffic scrubbing thresholds that are configured for the assets in Anti-DDoS Origin, and whether the assets are associated with Anti-DDoS Origin instances.
   * ### [](#qps-)Limits
   * You can call this operation up to 200 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeInstanceRequest
   * @returns DescribeInstanceResponse
   */
  async describeInstance(request: $_model.DescribeInstanceRequest): Promise<$_model.DescribeInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the details of the assets within the current Alibaba Cloud account and the details of the Anti-DDoS Origin instance to which the assets belong. The assets can be elastic IP addresses (EIPs). The assets can also be Elastic Compute Service (ECS) instances or Server Load Balancer (SLB) instances that are assigned public IP addresses.
   * 
   * @remarks
   * If one or more assets of the current Alibaba Cloud account are added to an Anti-DDoS Origin instance, you can call the DescribeInstanceIpAddress operation to query the DDoS mitigation information and the details of the Anti-DDoS Origin instance. The information and the details include the basic protection threshold and traffic scrubbing threshold for the assets, DDoS mitigation status of the assets, ID of the instance, and the mitigation status of the instance.
   * ## Limits
   * You can call this operation up to 200 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeInstanceIpAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceIpAddressResponse
   */
  async describeInstanceIpAddressWithOptions(request: $_model.DescribeInstanceIpAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceIpAddressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.ddosRegionId)) {
      query["DdosRegionId"] = request.ddosRegionId;
    }

    if (!$dara.isNull(request.ddosStatus)) {
      query["DdosStatus"] = request.ddosStatus;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceIp)) {
      query["InstanceIp"] = request.instanceIp;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceIpAddress",
      version: "2017-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceIpAddressResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceIpAddressResponse({}));
  }

  /**
   * Queries the details of the assets within the current Alibaba Cloud account and the details of the Anti-DDoS Origin instance to which the assets belong. The assets can be elastic IP addresses (EIPs). The assets can also be Elastic Compute Service (ECS) instances or Server Load Balancer (SLB) instances that are assigned public IP addresses.
   * 
   * @remarks
   * If one or more assets of the current Alibaba Cloud account are added to an Anti-DDoS Origin instance, you can call the DescribeInstanceIpAddress operation to query the DDoS mitigation information and the details of the Anti-DDoS Origin instance. The information and the details include the basic protection threshold and traffic scrubbing threshold for the assets, DDoS mitigation status of the assets, ID of the instance, and the mitigation status of the instance.
   * ## Limits
   * You can call this operation up to 200 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeInstanceIpAddressRequest
   * @returns DescribeInstanceIpAddressResponse
   */
  async describeInstanceIpAddress(request: $_model.DescribeInstanceIpAddressRequest): Promise<$_model.DescribeInstanceIpAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceIpAddressWithOptions(request, runtime);
  }

  /**
   * Queries the details of the DDoS mitigation thresholds or traffic scrubbing thresholds for specified assets. The assets can be elastic IP addresses (EIPs). The assets can also be Elastic Compute Service (ECS) instances or Server Load Balancer (SLB) instances that are assigned public IP addresses.
   * 
   * @remarks
   * If one or more assets of the current Alibaba Cloud account are added to an Anti-DDoS Origin instance, you can call the DescribeIpDdosThreshold operation to query the details of the DDoS mitigation threshold or traffic scrubbing threshold for a specific asset. The details include the current traffic scrubbing threshold, maximum scrubbing threshold, current DDoS mitigation threshold, and maximum DDoS mitigation threshold.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeIpDdosThresholdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeIpDdosThresholdResponse
   */
  async describeIpDdosThresholdWithOptions(request: $_model.DescribeIpDdosThresholdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeIpDdosThresholdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ddosRegionId)) {
      query["DdosRegionId"] = request.ddosRegionId;
    }

    if (!$dara.isNull(request.ddosType)) {
      query["DdosType"] = request.ddosType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.internetIp)) {
      query["InternetIp"] = request.internetIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeIpDdosThreshold",
      version: "2017-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeIpDdosThresholdResponse>(await this.callApi(params, req, runtime), new $_model.DescribeIpDdosThresholdResponse({}));
  }

  /**
   * Queries the details of the DDoS mitigation thresholds or traffic scrubbing thresholds for specified assets. The assets can be elastic IP addresses (EIPs). The assets can also be Elastic Compute Service (ECS) instances or Server Load Balancer (SLB) instances that are assigned public IP addresses.
   * 
   * @remarks
   * If one or more assets of the current Alibaba Cloud account are added to an Anti-DDoS Origin instance, you can call the DescribeIpDdosThreshold operation to query the details of the DDoS mitigation threshold or traffic scrubbing threshold for a specific asset. The details include the current traffic scrubbing threshold, maximum scrubbing threshold, current DDoS mitigation threshold, and maximum DDoS mitigation threshold.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeIpDdosThresholdRequest
   * @returns DescribeIpDdosThresholdResponse
   */
  async describeIpDdosThreshold(request: $_model.DescribeIpDdosThresholdRequest): Promise<$_model.DescribeIpDdosThresholdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeIpDdosThresholdWithOptions(request, runtime);
  }

  /**
   * Queries the region to which the public IP address of the asset within the current Alibaba Cloud account belongs. The asset can be an elastic IP address (EIP). The asset can also be an Elastic Compute Service (ECS) instance or Server Load Balancer (SLB) instance that is assigned a public IP address.
   * 
   * @remarks
   * You can call the DescribeIpLocationService operation to query the region of the public IP address for a specified asset that is within the current Alibaba Cloud account. You can also query the details of the Anti-DDoS Origin instance to which the asset is added. The details include the ID and name.
   * ## [](#qps-)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeIpLocationServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeIpLocationServiceResponse
   */
  async describeIpLocationServiceWithOptions(request: $_model.DescribeIpLocationServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeIpLocationServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.internetIp)) {
      query["InternetIp"] = request.internetIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeIpLocationService",
      version: "2017-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeIpLocationServiceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeIpLocationServiceResponse({}));
  }

  /**
   * Queries the region to which the public IP address of the asset within the current Alibaba Cloud account belongs. The asset can be an elastic IP address (EIP). The asset can also be an Elastic Compute Service (ECS) instance or Server Load Balancer (SLB) instance that is assigned a public IP address.
   * 
   * @remarks
   * You can call the DescribeIpLocationService operation to query the region of the public IP address for a specified asset that is within the current Alibaba Cloud account. You can also query the details of the Anti-DDoS Origin instance to which the asset is added. The details include the ID and name.
   * ## [](#qps-)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeIpLocationServiceRequest
   * @returns DescribeIpLocationServiceResponse
   */
  async describeIpLocationService(request: $_model.DescribeIpLocationServiceRequest): Promise<$_model.DescribeIpLocationServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeIpLocationServiceWithOptions(request, runtime);
  }

  /**
   * Queries the regions in which Anti-DDoS Origin Basic is available.
   * 
   * @remarks
   * You can call this operation to query information about the regions in which Anti-DDoS Origin Basic is available. The information includes the region ID, region name, and code.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRegionsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2017-05-18",
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
   * Queries the regions in which Anti-DDoS Origin Basic is available.
   * 
   * @remarks
   * You can call this operation to query information about the regions in which Anti-DDoS Origin Basic is available. The information includes the region ID, region name, and code.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * @returns DescribeRegionsResponse
   */
  async describeRegions(): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(runtime);
  }

  /**
   * Changes the scrubbing thresholds for an asset that is assigned a public IP address.
   * 
   * @remarks
   * ## [](#qps-)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyDefenseThresholdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDefenseThresholdResponse
   */
  async modifyDefenseThresholdWithOptions(request: $_model.ModifyDefenseThresholdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDefenseThresholdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bps)) {
      query["Bps"] = request.bps;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ddosRegionId)) {
      query["DdosRegionId"] = request.ddosRegionId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.internetIp)) {
      query["InternetIp"] = request.internetIp;
    }

    if (!$dara.isNull(request.isAuto)) {
      query["IsAuto"] = request.isAuto;
    }

    if (!$dara.isNull(request.pps)) {
      query["Pps"] = request.pps;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDefenseThreshold",
      version: "2017-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDefenseThresholdResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDefenseThresholdResponse({}));
  }

  /**
   * Changes the scrubbing thresholds for an asset that is assigned a public IP address.
   * 
   * @remarks
   * ## [](#qps-)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyDefenseThresholdRequest
   * @returns ModifyDefenseThresholdResponse
   */
  async modifyDefenseThreshold(request: $_model.ModifyDefenseThresholdRequest): Promise<$_model.ModifyDefenseThresholdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDefenseThresholdWithOptions(request, runtime);
  }

  /**
   * Modifies the scrubbing thresholds for an asset that is assigned a public IP address. This operation is a synchronous operation that supports Terraform.
   * 
   * @remarks
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyIpDefenseThresholdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyIpDefenseThresholdResponse
   */
  async modifyIpDefenseThresholdWithOptions(request: $_model.ModifyIpDefenseThresholdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyIpDefenseThresholdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bps)) {
      query["Bps"] = request.bps;
    }

    if (!$dara.isNull(request.ddosRegionId)) {
      query["DdosRegionId"] = request.ddosRegionId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.internetIp)) {
      query["InternetIp"] = request.internetIp;
    }

    if (!$dara.isNull(request.isAuto)) {
      query["IsAuto"] = request.isAuto;
    }

    if (!$dara.isNull(request.pps)) {
      query["Pps"] = request.pps;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyIpDefenseThreshold",
      version: "2017-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyIpDefenseThresholdResponse>(await this.callApi(params, req, runtime), new $_model.ModifyIpDefenseThresholdResponse({}));
  }

  /**
   * Modifies the scrubbing thresholds for an asset that is assigned a public IP address. This operation is a synchronous operation that supports Terraform.
   * 
   * @remarks
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyIpDefenseThresholdRequest
   * @returns ModifyIpDefenseThresholdResponse
   */
  async modifyIpDefenseThreshold(request: $_model.ModifyIpDefenseThresholdRequest): Promise<$_model.ModifyIpDefenseThresholdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyIpDefenseThresholdWithOptions(request, runtime);
  }

}
