// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi, * as $OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'ap-northeast-1': "dcdn.aliyuncs.com",
      'ap-northeast-2-pop': "dcdn.aliyuncs.com",
      'ap-south-1': "dcdn.aliyuncs.com",
      'ap-southeast-1': "dcdn.aliyuncs.com",
      'ap-southeast-2': "dcdn.aliyuncs.com",
      'ap-southeast-3': "dcdn.aliyuncs.com",
      'ap-southeast-5': "dcdn.aliyuncs.com",
      'cn-beijing': "dcdn.aliyuncs.com",
      'cn-beijing-finance-1': "dcdn.aliyuncs.com",
      'cn-beijing-finance-pop': "dcdn.aliyuncs.com",
      'cn-beijing-gov-1': "dcdn.aliyuncs.com",
      'cn-beijing-nu16-b01': "dcdn.aliyuncs.com",
      'cn-chengdu': "dcdn.aliyuncs.com",
      'cn-edge-1': "dcdn.aliyuncs.com",
      'cn-fujian': "dcdn.aliyuncs.com",
      'cn-haidian-cm12-c01': "dcdn.aliyuncs.com",
      'cn-hangzhou': "dcdn.aliyuncs.com",
      'cn-hangzhou-bj-b01': "dcdn.aliyuncs.com",
      'cn-hangzhou-finance': "dcdn.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "dcdn.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "dcdn.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "dcdn.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "dcdn.aliyuncs.com",
      'cn-hangzhou-test-306': "dcdn.aliyuncs.com",
      'cn-hongkong': "dcdn.aliyuncs.com",
      'cn-hongkong-finance-pop': "dcdn.aliyuncs.com",
      'cn-huhehaote': "dcdn.aliyuncs.com",
      'cn-north-2-gov-1': "dcdn.aliyuncs.com",
      'cn-qingdao': "dcdn.aliyuncs.com",
      'cn-qingdao-nebula': "dcdn.aliyuncs.com",
      'cn-shanghai': "dcdn.aliyuncs.com",
      'cn-shanghai-et15-b01': "dcdn.aliyuncs.com",
      'cn-shanghai-et2-b01': "dcdn.aliyuncs.com",
      'cn-shanghai-finance-1': "dcdn.aliyuncs.com",
      'cn-shanghai-inner': "dcdn.aliyuncs.com",
      'cn-shanghai-internal-test-1': "dcdn.aliyuncs.com",
      'cn-shenzhen': "dcdn.aliyuncs.com",
      'cn-shenzhen-finance-1': "dcdn.aliyuncs.com",
      'cn-shenzhen-inner': "dcdn.aliyuncs.com",
      'cn-shenzhen-st4-d01': "dcdn.aliyuncs.com",
      'cn-shenzhen-su18-b01': "dcdn.aliyuncs.com",
      'cn-wuhan': "dcdn.aliyuncs.com",
      'cn-yushanfang': "dcdn.aliyuncs.com",
      'cn-zhangbei-na61-b01': "dcdn.aliyuncs.com",
      'cn-zhangjiakou': "dcdn.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "dcdn.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "dcdn.aliyuncs.com",
      'eu-central-1': "dcdn.aliyuncs.com",
      'eu-west-1': "dcdn.aliyuncs.com",
      'eu-west-1-oxs': "dcdn.aliyuncs.com",
      'me-east-1': "dcdn.aliyuncs.com",
      'rus-west-1-pop': "dcdn.aliyuncs.com",
      'us-east-1': "dcdn.aliyuncs.com",
      'us-west-1': "dcdn.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("dcdn", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }

  async _postOSSObject(bucketName: string, form: {[key: string]: any}, runtime: $dara.RuntimeOptions): Promise<{[key: string]: any}> {
    let _runtime: { [key: string]: any } = {
      key: runtime.key || this._key,
      cert: runtime.cert || this._cert,
      ca: runtime.ca || this._ca,
      readTimeout: runtime.readTimeout || this._readTimeout,
      connectTimeout: runtime.connectTimeout || this._connectTimeout,
      httpProxy: runtime.httpProxy || this._httpProxy,
      httpsProxy: runtime.httpsProxy || this._httpsProxy,
      noProxy: runtime.noProxy || this._noProxy,
      socks5Proxy: runtime.socks5Proxy || this._socks5Proxy,
      socks5NetWork: runtime.socks5NetWork || this._socks5NetWork,
      maxIdleConns: runtime.maxIdleConns || this._maxIdleConns,
      retryOptions: this._retryOptions,
      ignoreSSL: runtime.ignoreSSL || false,
      tlsMinVersion: this._tlsMinVersion,
    }

    let _retriesAttempted = 0;
    let _lastRequest = null, _lastResponse = null;
    let _context = new $dara.RetryPolicyContext({
      retriesAttempted: _retriesAttempted,
    });
    while ($dara.shouldRetry(_runtime['retryOptions'], _context)) {
      if (_retriesAttempted > 0) {
        let _backoffTime = $dara.getBackoffDelay(_runtime['retryOptions'], _context);
        if (_backoffTime > 0) {
          await $dara.sleep(_backoffTime);
        }
      }

      _retriesAttempted = _retriesAttempted + 1;
      try {
        let request_ = new $dara.Request();
        let boundary = $dara.Form.getBoundary();
        request_.protocol = "HTTPS";
        request_.method = "POST";
        request_.pathname = `/`;
        request_.headers = {
          host: String(form["host"]),
          date: OpenApiUtil.getDateUTCString(),
          'user-agent': OpenApiUtil.getUserAgent(""),
        };
        request_.headers["content-type"] = `multipart/form-data; boundary=${boundary}`;
        request_.body = $dara.Form.toFileForm(form, boundary);
        _lastRequest = request_;
        let response_ = await $dara.doAction(request_, _runtime);
        _lastResponse = response_;

        let respMap : {[key: string]: any} = null;
        let bodyStr = await $dara.Stream.readAsString(response_.body);
        if ((response_.statusCode >= 400) && (response_.statusCode < 600)) {
          respMap = $dara.XML.parseXml(bodyStr, null);
          let err = respMap["Error"];
          throw new $OpenApi.ClientError({
            code: String(err["Code"]),
            message: String(err["Message"]),
            data: {
              httpCode: response_.statusCode,
              requestId: String(err["RequestId"]),
              hostId: String(err["HostId"]),
            },
          });
        }

        respMap = $dara.XML.parseXml(bodyStr, null);
        return {
          ...respMap,
        };
      } catch (ex) {
        _context = new $dara.RetryPolicyContext({
          retriesAttempted : _retriesAttempted,
          httpRequest : _lastRequest,
          httpResponse : _lastResponse,
          exception : ex,
        });
        continue;
      }
    }

    throw $dara.newUnretryableError(_context);
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
   * Adds a domain name to accelerate. You can specify only one domain name in each request.
   * 
   * @remarks
   * > *   Dynamic Content Delivery Network (DCDN) is activated.
   * > *   Internet content provider (ICP) filing is complete for the accelerated domain name.
   * > *   If the content of the origin server is not stored on Alibaba Cloud, the content must be reviewed. After you submit the request, the review is complete by the end of the following business day.
   * > *   You can call this operation up to 30 times per second per account.
   * 
   * @param request - AddDcdnDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddDcdnDomainResponse
   */
  async addDcdnDomainWithOptions(request: $_model.AddDcdnDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddDcdnDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.checkUrl)) {
      query["CheckUrl"] = request.checkUrl;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.functionType)) {
      query["FunctionType"] = request.functionType;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.scene)) {
      query["Scene"] = request.scene;
    }

    if (!$dara.isNull(request.scope)) {
      query["Scope"] = request.scope;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.sources)) {
      query["Sources"] = request.sources;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.topLevelDomain)) {
      query["TopLevelDomain"] = request.topLevelDomain;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddDcdnDomain",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddDcdnDomainResponse>(await this.callApi(params, req, runtime), new $_model.AddDcdnDomainResponse({}));
  }

  /**
   * Adds a domain name to accelerate. You can specify only one domain name in each request.
   * 
   * @remarks
   * > *   Dynamic Content Delivery Network (DCDN) is activated.
   * > *   Internet content provider (ICP) filing is complete for the accelerated domain name.
   * > *   If the content of the origin server is not stored on Alibaba Cloud, the content must be reviewed. After you submit the request, the review is complete by the end of the following business day.
   * > *   You can call this operation up to 30 times per second per account.
   * 
   * @param request - AddDcdnDomainRequest
   * @returns AddDcdnDomainResponse
   */
  async addDcdnDomain(request: $_model.AddDcdnDomainRequest): Promise<$_model.AddDcdnDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addDcdnDomainWithOptions(request, runtime);
  }

  /**
   * Adds a domain name to IPA. You can specify only one domain name in each request.
   * 
   * @remarks
   * > 
   * *   Make sure that the IPA service is activated before you add a domain name to accelerate.
   * *   Make sure that the Internet content provider (ICP) filling is complete for the domain name to accelerate.
   * *   If the content on the origin server is not stored on Alibaba Cloud, the content must be reviewed. The review is complete by the end of the next business day after you submit the request.
   * *   You can call this operation up to 10 times per second per user.
   * 
   * @param request - AddDcdnIpaDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddDcdnIpaDomainResponse
   */
  async addDcdnIpaDomainWithOptions(request: $_model.AddDcdnIpaDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddDcdnIpaDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.checkUrl)) {
      query["CheckUrl"] = request.checkUrl;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.protocol)) {
      query["Protocol"] = request.protocol;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.scope)) {
      query["Scope"] = request.scope;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.sources)) {
      query["Sources"] = request.sources;
    }

    if (!$dara.isNull(request.topLevelDomain)) {
      query["TopLevelDomain"] = request.topLevelDomain;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddDcdnIpaDomain",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddDcdnIpaDomainResponse>(await this.callApi(params, req, runtime), new $_model.AddDcdnIpaDomainResponse({}));
  }

  /**
   * Adds a domain name to IPA. You can specify only one domain name in each request.
   * 
   * @remarks
   * > 
   * *   Make sure that the IPA service is activated before you add a domain name to accelerate.
   * *   Make sure that the Internet content provider (ICP) filling is complete for the domain name to accelerate.
   * *   If the content on the origin server is not stored on Alibaba Cloud, the content must be reviewed. The review is complete by the end of the next business day after you submit the request.
   * *   You can call this operation up to 10 times per second per user.
   * 
   * @param request - AddDcdnIpaDomainRequest
   * @returns AddDcdnIpaDomainResponse
   */
  async addDcdnIpaDomain(request: $_model.AddDcdnIpaDomainRequest): Promise<$_model.AddDcdnIpaDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addDcdnIpaDomainWithOptions(request, runtime);
  }

  /**
   * Adds one or more domain names to DCDN at a time.
   * 
   * @remarks
   * *Prerequisites**:
   * *   The [DCDN service is activated](https://help.aliyun.com/document_detail/64926.html).
   * *   Internet content provider (ICP) filing is complete for the accelerated domain names.
   * > *   If the content of the origin server is not stored on Alibaba Cloud, the content must be reviewed. After you submit the request, the review is complete by the end of the following business day.
   * >*   You can specify up to 50 domain names in each request.
   * >*   You can call this operation up to 30 times per second per account.
   * 
   * @param request - BatchAddDcdnDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchAddDcdnDomainResponse
   */
  async batchAddDcdnDomainWithOptions(request: $_model.BatchAddDcdnDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchAddDcdnDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.checkUrl)) {
      query["CheckUrl"] = request.checkUrl;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.scope)) {
      query["Scope"] = request.scope;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.sources)) {
      query["Sources"] = request.sources;
    }

    if (!$dara.isNull(request.topLevelDomain)) {
      query["TopLevelDomain"] = request.topLevelDomain;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchAddDcdnDomain",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchAddDcdnDomainResponse>(await this.callApi(params, req, runtime), new $_model.BatchAddDcdnDomainResponse({}));
  }

  /**
   * Adds one or more domain names to DCDN at a time.
   * 
   * @remarks
   * *Prerequisites**:
   * *   The [DCDN service is activated](https://help.aliyun.com/document_detail/64926.html).
   * *   Internet content provider (ICP) filing is complete for the accelerated domain names.
   * > *   If the content of the origin server is not stored on Alibaba Cloud, the content must be reviewed. After you submit the request, the review is complete by the end of the following business day.
   * >*   You can specify up to 50 domain names in each request.
   * >*   You can call this operation up to 30 times per second per account.
   * 
   * @param request - BatchAddDcdnDomainRequest
   * @returns BatchAddDcdnDomainResponse
   */
  async batchAddDcdnDomain(request: $_model.BatchAddDcdnDomainRequest): Promise<$_model.BatchAddDcdnDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchAddDcdnDomainWithOptions(request, runtime);
  }

  /**
   * Creates Web Application Firewall (WAF) protection rules.
   * 
   * @remarks
   * >  You can call this operation up to 20 times per second per account.
   * 
   * @param request - BatchCreateDcdnWafRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchCreateDcdnWafRulesResponse
   */
  async batchCreateDcdnWafRulesWithOptions(request: $_model.BatchCreateDcdnWafRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchCreateDcdnWafRulesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.policyId)) {
      body["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.ruleConfigs)) {
      body["RuleConfigs"] = request.ruleConfigs;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchCreateDcdnWafRules",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchCreateDcdnWafRulesResponse>(await this.callApi(params, req, runtime), new $_model.BatchCreateDcdnWafRulesResponse({}));
  }

  /**
   * Creates Web Application Firewall (WAF) protection rules.
   * 
   * @remarks
   * >  You can call this operation up to 20 times per second per account.
   * 
   * @param request - BatchCreateDcdnWafRulesRequest
   * @returns BatchCreateDcdnWafRulesResponse
   */
  async batchCreateDcdnWafRules(request: $_model.BatchCreateDcdnWafRulesRequest): Promise<$_model.BatchCreateDcdnWafRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchCreateDcdnWafRulesWithOptions(request, runtime);
  }

  /**
   * Deletes configurations of multiple accelerated domain names at a time.
   * 
   * @remarks
   * > - You can specify up to 50 domain names in each request.
   * > - You can call this operation up to 30 times per second per account.
   * 
   * @param request - BatchDeleteDcdnDomainConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchDeleteDcdnDomainConfigsResponse
   */
  async batchDeleteDcdnDomainConfigsWithOptions(request: $_model.BatchDeleteDcdnDomainConfigsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchDeleteDcdnDomainConfigsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainNames)) {
      query["DomainNames"] = request.domainNames;
    }

    if (!$dara.isNull(request.functionNames)) {
      query["FunctionNames"] = request.functionNames;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchDeleteDcdnDomainConfigs",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchDeleteDcdnDomainConfigsResponse>(await this.callApi(params, req, runtime), new $_model.BatchDeleteDcdnDomainConfigsResponse({}));
  }

  /**
   * Deletes configurations of multiple accelerated domain names at a time.
   * 
   * @remarks
   * > - You can specify up to 50 domain names in each request.
   * > - You can call this operation up to 30 times per second per account.
   * 
   * @param request - BatchDeleteDcdnDomainConfigsRequest
   * @returns BatchDeleteDcdnDomainConfigsResponse
   */
  async batchDeleteDcdnDomainConfigs(request: $_model.BatchDeleteDcdnDomainConfigsRequest): Promise<$_model.BatchDeleteDcdnDomainConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchDeleteDcdnDomainConfigsWithOptions(request, runtime);
  }

  /**
   * 批量删除kv数据，支持最大2M的请求体
   * 
   * @param tmpReq - BatchDeleteDcdnKvRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchDeleteDcdnKvResponse
   */
  async batchDeleteDcdnKvWithOptions(tmpReq: $_model.BatchDeleteDcdnKvRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchDeleteDcdnKvResponse> {
    tmpReq.validate();
    let request = new $_model.BatchDeleteDcdnKvShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.keys)) {
      request.keysShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.keys, "Keys", "json");
    }

    let query = { };
    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keysShrink)) {
      body["Keys"] = request.keysShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchDeleteDcdnKv",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchDeleteDcdnKvResponse>(await this.callApi(params, req, runtime), new $_model.BatchDeleteDcdnKvResponse({}));
  }

  /**
   * 批量删除kv数据，支持最大2M的请求体
   * 
   * @param request - BatchDeleteDcdnKvRequest
   * @returns BatchDeleteDcdnKvResponse
   */
  async batchDeleteDcdnKv(request: $_model.BatchDeleteDcdnKvRequest): Promise<$_model.BatchDeleteDcdnKvResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchDeleteDcdnKvWithOptions(request, runtime);
  }

  /**
   * 批量删除kv数据，支持最大100M的请求体
   * 
   * @param request - BatchDeleteDcdnKvWithHighCapacityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchDeleteDcdnKvWithHighCapacityResponse
   */
  async batchDeleteDcdnKvWithHighCapacityWithOptions(request: $_model.BatchDeleteDcdnKvWithHighCapacityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchDeleteDcdnKvWithHighCapacityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchDeleteDcdnKvWithHighCapacity",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchDeleteDcdnKvWithHighCapacityResponse>(await this.callApi(params, req, runtime), new $_model.BatchDeleteDcdnKvWithHighCapacityResponse({}));
  }

  /**
   * 批量删除kv数据，支持最大100M的请求体
   * 
   * @param request - BatchDeleteDcdnKvWithHighCapacityRequest
   * @returns BatchDeleteDcdnKvWithHighCapacityResponse
   */
  async batchDeleteDcdnKvWithHighCapacity(request: $_model.BatchDeleteDcdnKvWithHighCapacityRequest): Promise<$_model.BatchDeleteDcdnKvWithHighCapacityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchDeleteDcdnKvWithHighCapacityWithOptions(request, runtime);
  }

  async batchDeleteDcdnKvWithHighCapacityAdvance(request: $_model.BatchDeleteDcdnKvWithHighCapacityAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchDeleteDcdnKvWithHighCapacityResponse> {
    // Step 0: init client
    if ($dara.isNull(this._credential)) {
      throw new $OpenApi.ClientError({
        code: "InvalidCredentials",
        message: "Please set up the credentials correctly. If you are setting them through environment variables, please ensure that ALIBABA_CLOUD_ACCESS_KEY_ID and ALIBABA_CLOUD_ACCESS_KEY_SECRET are set correctly. See https://help.aliyun.com/zh/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems for more details.",
      });
    }

    let credentialModel = await this._credential.getCredential();
    let accessKeyId = credentialModel.accessKeyId;
    let accessKeySecret = credentialModel.accessKeySecret;
    let securityToken = credentialModel.securityToken;
    let credentialType = credentialModel.type;
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint) || openPlatformEndpoint == "") {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if ($dara.isNull(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApiUtil.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenApi(authConfig);
    let authRequest = {
      Product: "dcdn",
      RegionId: this._regionId,
    };
    let authReq = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(authRequest),
    });
    let authParams = new $OpenApiUtil.Params({
      action: "AuthorizeFileUpload",
      version: "2019-12-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    let authResponse : {[key: string]: any} = { };
    let fileObj = new $dara.FileField({ });
    let ossHeader : {[key: string]: any} = { };
    let tmpBody : {[key: string]: any} = { };
    let useAccelerate : boolean = false;
    let authResponseBody : {[key: string ]: string} = { };
    let batchDeleteDcdnKvWithHighCapacityReq = new $_model.BatchDeleteDcdnKvWithHighCapacityRequest({ });
    OpenApiUtil.convert(request, batchDeleteDcdnKvWithHighCapacityReq);
    if (!$dara.isNull(request.urlObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.urlObject,
        contentType: "",
      });
      ossHeader = {
        host: `${authResponseBody["Bucket"]}.${OpenApiUtil.getEndpoint(authResponseBody["Endpoint"], useAccelerate, this._endpointType)}`,
        OSSAccessKeyId: authResponseBody["AccessKeyId"],
        policy: authResponseBody["EncodedPolicy"],
        Signature: authResponseBody["Signature"],
        key: authResponseBody["ObjectKey"],
        file: fileObj,
        success_action_status: "201",
      };
      await this._postOSSObject(authResponseBody["Bucket"], ossHeader, runtime);
      batchDeleteDcdnKvWithHighCapacityReq.url = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let batchDeleteDcdnKvWithHighCapacityResp = await this.batchDeleteDcdnKvWithHighCapacityWithOptions(batchDeleteDcdnKvWithHighCapacityReq, runtime);
    return batchDeleteDcdnKvWithHighCapacityResp;
  }

  /**
   * Deletes multiple Web Application Firewall (WAF) protection rules at a time.
   * 
   * @remarks
   *   You can call this operation up to 20 times per second per account.
   * *   Alibaba Cloud Dynamic Content Delivery Network (DCDN) supports POST requests.
   * 
   * @param request - BatchDeleteDcdnWafRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchDeleteDcdnWafRulesResponse
   */
  async batchDeleteDcdnWafRulesWithOptions(request: $_model.BatchDeleteDcdnWafRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchDeleteDcdnWafRulesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ruleIds)) {
      body["RuleIds"] = request.ruleIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchDeleteDcdnWafRules",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchDeleteDcdnWafRulesResponse>(await this.callApi(params, req, runtime), new $_model.BatchDeleteDcdnWafRulesResponse({}));
  }

  /**
   * Deletes multiple Web Application Firewall (WAF) protection rules at a time.
   * 
   * @remarks
   *   You can call this operation up to 20 times per second per account.
   * *   Alibaba Cloud Dynamic Content Delivery Network (DCDN) supports POST requests.
   * 
   * @param request - BatchDeleteDcdnWafRulesRequest
   * @returns BatchDeleteDcdnWafRulesResponse
   */
  async batchDeleteDcdnWafRules(request: $_model.BatchDeleteDcdnWafRulesRequest): Promise<$_model.BatchDeleteDcdnWafRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchDeleteDcdnWafRulesWithOptions(request, runtime);
  }

  /**
   * Modifies multiple Web Application Firewall (WAF) protection rules. Only Bot management rules can be modified.
   * 
   * @remarks
   * You can call this operation up to 20 times per second per account.
   * 
   * @param request - BatchModifyDcdnWafRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchModifyDcdnWafRulesResponse
   */
  async batchModifyDcdnWafRulesWithOptions(request: $_model.BatchModifyDcdnWafRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchModifyDcdnWafRulesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.policyId)) {
      body["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.ruleConfigs)) {
      body["RuleConfigs"] = request.ruleConfigs;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchModifyDcdnWafRules",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchModifyDcdnWafRulesResponse>(await this.callApi(params, req, runtime), new $_model.BatchModifyDcdnWafRulesResponse({}));
  }

  /**
   * Modifies multiple Web Application Firewall (WAF) protection rules. Only Bot management rules can be modified.
   * 
   * @remarks
   * You can call this operation up to 20 times per second per account.
   * 
   * @param request - BatchModifyDcdnWafRulesRequest
   * @returns BatchModifyDcdnWafRulesResponse
   */
  async batchModifyDcdnWafRules(request: $_model.BatchModifyDcdnWafRulesRequest): Promise<$_model.BatchModifyDcdnWafRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchModifyDcdnWafRulesWithOptions(request, runtime);
  }

  /**
   * Configures multiple key-value (KV) pairs for a namespace.
   * 
   * @param tmpReq - BatchPutDcdnKvRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchPutDcdnKvResponse
   */
  async batchPutDcdnKvWithOptions(tmpReq: $_model.BatchPutDcdnKvRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchPutDcdnKvResponse> {
    tmpReq.validate();
    let request = new $_model.BatchPutDcdnKvShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.kvList)) {
      request.kvListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.kvList, "KvList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.kvListShrink)) {
      body["KvList"] = request.kvListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchPutDcdnKv",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchPutDcdnKvResponse>(await this.callApi(params, req, runtime), new $_model.BatchPutDcdnKvResponse({}));
  }

  /**
   * Configures multiple key-value (KV) pairs for a namespace.
   * 
   * @param request - BatchPutDcdnKvRequest
   * @returns BatchPutDcdnKvResponse
   */
  async batchPutDcdnKv(request: $_model.BatchPutDcdnKvRequest): Promise<$_model.BatchPutDcdnKvResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchPutDcdnKvWithOptions(request, runtime);
  }

  /**
   * 批量写入kv数据，支持最大100M的请求体
   * 
   * @param request - BatchPutDcdnKvWithHighCapacityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchPutDcdnKvWithHighCapacityResponse
   */
  async batchPutDcdnKvWithHighCapacityWithOptions(request: $_model.BatchPutDcdnKvWithHighCapacityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchPutDcdnKvWithHighCapacityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchPutDcdnKvWithHighCapacity",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchPutDcdnKvWithHighCapacityResponse>(await this.callApi(params, req, runtime), new $_model.BatchPutDcdnKvWithHighCapacityResponse({}));
  }

  /**
   * 批量写入kv数据，支持最大100M的请求体
   * 
   * @param request - BatchPutDcdnKvWithHighCapacityRequest
   * @returns BatchPutDcdnKvWithHighCapacityResponse
   */
  async batchPutDcdnKvWithHighCapacity(request: $_model.BatchPutDcdnKvWithHighCapacityRequest): Promise<$_model.BatchPutDcdnKvWithHighCapacityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchPutDcdnKvWithHighCapacityWithOptions(request, runtime);
  }

  async batchPutDcdnKvWithHighCapacityAdvance(request: $_model.BatchPutDcdnKvWithHighCapacityAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchPutDcdnKvWithHighCapacityResponse> {
    // Step 0: init client
    if ($dara.isNull(this._credential)) {
      throw new $OpenApi.ClientError({
        code: "InvalidCredentials",
        message: "Please set up the credentials correctly. If you are setting them through environment variables, please ensure that ALIBABA_CLOUD_ACCESS_KEY_ID and ALIBABA_CLOUD_ACCESS_KEY_SECRET are set correctly. See https://help.aliyun.com/zh/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems for more details.",
      });
    }

    let credentialModel = await this._credential.getCredential();
    let accessKeyId = credentialModel.accessKeyId;
    let accessKeySecret = credentialModel.accessKeySecret;
    let securityToken = credentialModel.securityToken;
    let credentialType = credentialModel.type;
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint) || openPlatformEndpoint == "") {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if ($dara.isNull(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApiUtil.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenApi(authConfig);
    let authRequest = {
      Product: "dcdn",
      RegionId: this._regionId,
    };
    let authReq = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(authRequest),
    });
    let authParams = new $OpenApiUtil.Params({
      action: "AuthorizeFileUpload",
      version: "2019-12-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    let authResponse : {[key: string]: any} = { };
    let fileObj = new $dara.FileField({ });
    let ossHeader : {[key: string]: any} = { };
    let tmpBody : {[key: string]: any} = { };
    let useAccelerate : boolean = false;
    let authResponseBody : {[key: string ]: string} = { };
    let batchPutDcdnKvWithHighCapacityReq = new $_model.BatchPutDcdnKvWithHighCapacityRequest({ });
    OpenApiUtil.convert(request, batchPutDcdnKvWithHighCapacityReq);
    if (!$dara.isNull(request.urlObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.urlObject,
        contentType: "",
      });
      ossHeader = {
        host: `${authResponseBody["Bucket"]}.${OpenApiUtil.getEndpoint(authResponseBody["Endpoint"], useAccelerate, this._endpointType)}`,
        OSSAccessKeyId: authResponseBody["AccessKeyId"],
        policy: authResponseBody["EncodedPolicy"],
        Signature: authResponseBody["Signature"],
        key: authResponseBody["ObjectKey"],
        file: fileObj,
        success_action_status: "201",
      };
      await this._postOSSObject(authResponseBody["Bucket"], ossHeader, runtime);
      batchPutDcdnKvWithHighCapacityReq.url = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let batchPutDcdnKvWithHighCapacityResp = await this.batchPutDcdnKvWithHighCapacityWithOptions(batchPutDcdnKvWithHighCapacityReq, runtime);
    return batchPutDcdnKvWithHighCapacityResp;
  }

  /**
   * Configures features for one or more domain names.
   * 
   * @remarks
   *   You can specify up to 50 domain names in each request.
   * *   You can call this operation up to 30 times per second per account.
   * 
   * @param request - BatchSetDcdnDomainConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchSetDcdnDomainConfigsResponse
   */
  async batchSetDcdnDomainConfigsWithOptions(request: $_model.BatchSetDcdnDomainConfigsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchSetDcdnDomainConfigsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainNames)) {
      query["DomainNames"] = request.domainNames;
    }

    if (!$dara.isNull(request.functions)) {
      query["Functions"] = request.functions;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchSetDcdnDomainConfigs",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchSetDcdnDomainConfigsResponse>(await this.callApi(params, req, runtime), new $_model.BatchSetDcdnDomainConfigsResponse({}));
  }

  /**
   * Configures features for one or more domain names.
   * 
   * @remarks
   *   You can specify up to 50 domain names in each request.
   * *   You can call this operation up to 30 times per second per account.
   * 
   * @param request - BatchSetDcdnDomainConfigsRequest
   * @returns BatchSetDcdnDomainConfigsResponse
   */
  async batchSetDcdnDomainConfigs(request: $_model.BatchSetDcdnDomainConfigsRequest): Promise<$_model.BatchSetDcdnDomainConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchSetDcdnDomainConfigsWithOptions(request, runtime);
  }

  /**
   * Configures multiple domain names to be accelerated by IP Application Accelerator (IPA).
   * 
   * @remarks
   * > You can call this operation up to 20 times per second per account.
   * 
   * @param request - BatchSetDcdnIpaDomainConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchSetDcdnIpaDomainConfigsResponse
   */
  async batchSetDcdnIpaDomainConfigsWithOptions(request: $_model.BatchSetDcdnIpaDomainConfigsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchSetDcdnIpaDomainConfigsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainNames)) {
      query["DomainNames"] = request.domainNames;
    }

    if (!$dara.isNull(request.functions)) {
      query["Functions"] = request.functions;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchSetDcdnIpaDomainConfigs",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchSetDcdnIpaDomainConfigsResponse>(await this.callApi(params, req, runtime), new $_model.BatchSetDcdnIpaDomainConfigsResponse({}));
  }

  /**
   * Configures multiple domain names to be accelerated by IP Application Accelerator (IPA).
   * 
   * @remarks
   * > You can call this operation up to 20 times per second per account.
   * 
   * @param request - BatchSetDcdnIpaDomainConfigsRequest
   * @returns BatchSetDcdnIpaDomainConfigsResponse
   */
  async batchSetDcdnIpaDomainConfigs(request: $_model.BatchSetDcdnIpaDomainConfigsRequest): Promise<$_model.BatchSetDcdnIpaDomainConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchSetDcdnIpaDomainConfigsWithOptions(request, runtime);
  }

  /**
   * Sets the protection status of multiple domain names at a time.
   * 
   * @remarks
   * #
   * *   You can call this operation up to 20 times per second.
   * *   Alibaba Cloud Dynamic Content Delivery Network (DCDN) supports POST requests.
   * 
   * @param request - BatchSetDcdnWafDomainConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchSetDcdnWafDomainConfigsResponse
   */
  async batchSetDcdnWafDomainConfigsWithOptions(request: $_model.BatchSetDcdnWafDomainConfigsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchSetDcdnWafDomainConfigsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientIpTag)) {
      body["ClientIpTag"] = request.clientIpTag;
    }

    if (!$dara.isNull(request.defenseStatus)) {
      body["DefenseStatus"] = request.defenseStatus;
    }

    if (!$dara.isNull(request.domainNames)) {
      body["DomainNames"] = request.domainNames;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchSetDcdnWafDomainConfigs",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchSetDcdnWafDomainConfigsResponse>(await this.callApi(params, req, runtime), new $_model.BatchSetDcdnWafDomainConfigsResponse({}));
  }

  /**
   * Sets the protection status of multiple domain names at a time.
   * 
   * @remarks
   * #
   * *   You can call this operation up to 20 times per second.
   * *   Alibaba Cloud Dynamic Content Delivery Network (DCDN) supports POST requests.
   * 
   * @param request - BatchSetDcdnWafDomainConfigsRequest
   * @returns BatchSetDcdnWafDomainConfigsResponse
   */
  async batchSetDcdnWafDomainConfigs(request: $_model.BatchSetDcdnWafDomainConfigsRequest): Promise<$_model.BatchSetDcdnWafDomainConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchSetDcdnWafDomainConfigsWithOptions(request, runtime);
  }

  /**
   * Enables one or more accelerated domain names. After the accelerated domain names are enabled, the value of the DomainStatus parameter for the domain names changes to Online.
   * 
   * @remarks
   * > 
   * *   If an accelerated domain name is in an invalid state or your account has an overdue payment, the accelerated domain name cannot be enabled.
   * *   You can specify up to 50 domain names in each request.
   * *   You can call this operation up to 30 times per second per account.
   * 
   * @param request - BatchStartDcdnDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchStartDcdnDomainResponse
   */
  async batchStartDcdnDomainWithOptions(request: $_model.BatchStartDcdnDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchStartDcdnDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainNames)) {
      query["DomainNames"] = request.domainNames;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchStartDcdnDomain",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchStartDcdnDomainResponse>(await this.callApi(params, req, runtime), new $_model.BatchStartDcdnDomainResponse({}));
  }

  /**
   * Enables one or more accelerated domain names. After the accelerated domain names are enabled, the value of the DomainStatus parameter for the domain names changes to Online.
   * 
   * @remarks
   * > 
   * *   If an accelerated domain name is in an invalid state or your account has an overdue payment, the accelerated domain name cannot be enabled.
   * *   You can specify up to 50 domain names in each request.
   * *   You can call this operation up to 30 times per second per account.
   * 
   * @param request - BatchStartDcdnDomainRequest
   * @returns BatchStartDcdnDomainResponse
   */
  async batchStartDcdnDomain(request: $_model.BatchStartDcdnDomainRequest): Promise<$_model.BatchStartDcdnDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchStartDcdnDomainWithOptions(request, runtime);
  }

  /**
   * Disables one or more accelerated domain names. After an accelerated domain name is disabled, the value of the DomainStatus parameter for the domain name changes to Offline.
   * 
   * @remarks
   * > *   After an accelerated domain name is disabled, Dynamic Content Delivery Network (DCDN) retains the domain name information. The system automatically reroutes all requests that are destined for the accelerated domain name to the origin.
   * >*   You can specify up to 50 domain names in each request.
   * >*   You can call this operation up to 30 times per second per account.
   * 
   * @param request - BatchStopDcdnDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchStopDcdnDomainResponse
   */
  async batchStopDcdnDomainWithOptions(request: $_model.BatchStopDcdnDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchStopDcdnDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainNames)) {
      query["DomainNames"] = request.domainNames;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchStopDcdnDomain",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchStopDcdnDomainResponse>(await this.callApi(params, req, runtime), new $_model.BatchStopDcdnDomainResponse({}));
  }

  /**
   * Disables one or more accelerated domain names. After an accelerated domain name is disabled, the value of the DomainStatus parameter for the domain name changes to Offline.
   * 
   * @remarks
   * > *   After an accelerated domain name is disabled, Dynamic Content Delivery Network (DCDN) retains the domain name information. The system automatically reroutes all requests that are destined for the accelerated domain name to the origin.
   * >*   You can specify up to 50 domain names in each request.
   * >*   You can call this operation up to 30 times per second per account.
   * 
   * @param request - BatchStopDcdnDomainRequest
   * @returns BatchStopDcdnDomainResponse
   */
  async batchStopDcdnDomain(request: $_model.BatchStopDcdnDomainRequest): Promise<$_model.BatchStopDcdnDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchStopDcdnDomainWithOptions(request, runtime);
  }

  /**
   * Checks whether a real-time log delivery project exists.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - CheckDcdnProjectExistRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckDcdnProjectExistResponse
   */
  async checkDcdnProjectExistWithOptions(request: $_model.CheckDcdnProjectExistRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckDcdnProjectExistResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckDcdnProjectExist",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckDcdnProjectExistResponse>(await this.callApi(params, req, runtime), new $_model.CheckDcdnProjectExistResponse({}));
  }

  /**
   * Checks whether a real-time log delivery project exists.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - CheckDcdnProjectExistRequest
   * @returns CheckDcdnProjectExistResponse
   */
  async checkDcdnProjectExist(request: $_model.CheckDcdnProjectExistRequest): Promise<$_model.CheckDcdnProjectExistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkDcdnProjectExistWithOptions(request, runtime);
  }

  /**
   * Generates an official code version from unstable JavaScript code that is in the staging
   *                   environment. The version can be used in the canary release or production environment.
   * 
   * @remarks
   * >  The call frequency of the API is no more than 100 queries per second.
   * 
   * @param request - CommitStagingRoutineCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CommitStagingRoutineCodeResponse
   */
  async commitStagingRoutineCodeWithOptions(request: $_model.CommitStagingRoutineCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CommitStagingRoutineCodeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.codeDescription)) {
      body["CodeDescription"] = request.codeDescription;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CommitStagingRoutineCode",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CommitStagingRoutineCodeResponse>(await this.callApi(params, req, runtime), new $_model.CommitStagingRoutineCodeResponse({}));
  }

  /**
   * Generates an official code version from unstable JavaScript code that is in the staging
   *                   environment. The version can be used in the canary release or production environment.
   * 
   * @remarks
   * >  The call frequency of the API is no more than 100 queries per second.
   * 
   * @param request - CommitStagingRoutineCodeRequest
   * @returns CommitStagingRoutineCodeResponse
   */
  async commitStagingRoutineCode(request: $_model.CommitStagingRoutineCodeRequest): Promise<$_model.CommitStagingRoutineCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.commitStagingRoutineCodeWithOptions(request, runtime);
  }

  /**
   * Creates a certificate signing request (CSR) file.
   * 
   * @param request - CreateDcdnCertificateSigningRequestRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDcdnCertificateSigningRequestResponse
   */
  async createDcdnCertificateSigningRequestWithOptions(request: $_model.CreateDcdnCertificateSigningRequestRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDcdnCertificateSigningRequestResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.city)) {
      query["City"] = request.city;
    }

    if (!$dara.isNull(request.commonName)) {
      query["CommonName"] = request.commonName;
    }

    if (!$dara.isNull(request.country)) {
      query["Country"] = request.country;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.organization)) {
      query["Organization"] = request.organization;
    }

    if (!$dara.isNull(request.organizationUnit)) {
      query["OrganizationUnit"] = request.organizationUnit;
    }

    if (!$dara.isNull(request.SANs)) {
      query["SANs"] = request.SANs;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDcdnCertificateSigningRequest",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDcdnCertificateSigningRequestResponse>(await this.callApi(params, req, runtime), new $_model.CreateDcdnCertificateSigningRequestResponse({}));
  }

  /**
   * Creates a certificate signing request (CSR) file.
   * 
   * @param request - CreateDcdnCertificateSigningRequestRequest
   * @returns CreateDcdnCertificateSigningRequestResponse
   */
  async createDcdnCertificateSigningRequest(request: $_model.CreateDcdnCertificateSigningRequestRequest): Promise<$_model.CreateDcdnCertificateSigningRequestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDcdnCertificateSigningRequestWithOptions(request, runtime);
  }

  /**
   * Creates a tracking task. After you create a tracking task, the system periodically sends operations reports to you by email.
   * 
   * @remarks
   * *
   * **You can call this operation up to three times per second.
   * 
   * @param request - CreateDcdnDeliverTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDcdnDeliverTaskResponse
   */
  async createDcdnDeliverTaskWithOptions(request: $_model.CreateDcdnDeliverTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDcdnDeliverTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deliver)) {
      body["Deliver"] = request.deliver;
    }

    if (!$dara.isNull(request.domainName)) {
      body["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.reports)) {
      body["Reports"] = request.reports;
    }

    if (!$dara.isNull(request.schedule)) {
      body["Schedule"] = request.schedule;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDcdnDeliverTask",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDcdnDeliverTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateDcdnDeliverTaskResponse({}));
  }

  /**
   * Creates a tracking task. After you create a tracking task, the system periodically sends operations reports to you by email.
   * 
   * @remarks
   * *
   * **You can call this operation up to three times per second.
   * 
   * @param request - CreateDcdnDeliverTaskRequest
   * @returns CreateDcdnDeliverTaskResponse
   */
  async createDcdnDeliverTask(request: $_model.CreateDcdnDeliverTaskRequest): Promise<$_model.CreateDcdnDeliverTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDcdnDeliverTaskWithOptions(request, runtime);
  }

  /**
   * Creates a real-time log delivery project.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - CreateDcdnSLSRealTimeLogDeliveryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDcdnSLSRealTimeLogDeliveryResponse
   */
  async createDcdnSLSRealTimeLogDeliveryWithOptions(request: $_model.CreateDcdnSLSRealTimeLogDeliveryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDcdnSLSRealTimeLogDeliveryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessType)) {
      body["BusinessType"] = request.businessType;
    }

    if (!$dara.isNull(request.dataCenter)) {
      body["DataCenter"] = request.dataCenter;
    }

    if (!$dara.isNull(request.domainName)) {
      body["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.SLSLogStore)) {
      body["SLSLogStore"] = request.SLSLogStore;
    }

    if (!$dara.isNull(request.SLSProject)) {
      body["SLSProject"] = request.SLSProject;
    }

    if (!$dara.isNull(request.SLSRegion)) {
      body["SLSRegion"] = request.SLSRegion;
    }

    if (!$dara.isNull(request.samplingRate)) {
      body["SamplingRate"] = request.samplingRate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDcdnSLSRealTimeLogDelivery",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDcdnSLSRealTimeLogDeliveryResponse>(await this.callApi(params, req, runtime), new $_model.CreateDcdnSLSRealTimeLogDeliveryResponse({}));
  }

  /**
   * Creates a real-time log delivery project.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - CreateDcdnSLSRealTimeLogDeliveryRequest
   * @returns CreateDcdnSLSRealTimeLogDeliveryResponse
   */
  async createDcdnSLSRealTimeLogDelivery(request: $_model.CreateDcdnSLSRealTimeLogDeliveryRequest): Promise<$_model.CreateDcdnSLSRealTimeLogDeliveryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDcdnSLSRealTimeLogDeliveryWithOptions(request, runtime);
  }

  /**
   * Creates a custom operations report.
   * 
   * @remarks
   * > *   This operation allows you to create a custom operations report for a specific domain name. You can view the statistics about the domain name in the report.
   * > *   You can call this operation up to three times per second per account.
   * 
   * @param request - CreateDcdnSubTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDcdnSubTaskResponse
   */
  async createDcdnSubTaskWithOptions(request: $_model.CreateDcdnSubTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDcdnSubTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.domainName)) {
      body["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.reportIds)) {
      body["ReportIds"] = request.reportIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDcdnSubTask",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDcdnSubTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateDcdnSubTaskResponse({}));
  }

  /**
   * Creates a custom operations report.
   * 
   * @remarks
   * > *   This operation allows you to create a custom operations report for a specific domain name. You can view the statistics about the domain name in the report.
   * > *   You can call this operation up to three times per second per account.
   * 
   * @param request - CreateDcdnSubTaskRequest
   * @returns CreateDcdnSubTaskResponse
   */
  async createDcdnSubTask(request: $_model.CreateDcdnSubTaskRequest): Promise<$_model.CreateDcdnSubTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDcdnSubTaskWithOptions(request, runtime);
  }

  /**
   * Create a custom WAF rule group.
   * 
   * @param request - CreateDcdnWafGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDcdnWafGroupResponse
   */
  async createDcdnWafGroupWithOptions(request: $_model.CreateDcdnWafGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDcdnWafGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.subscribe)) {
      body["Subscribe"] = request.subscribe;
    }

    if (!$dara.isNull(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDcdnWafGroup",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDcdnWafGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateDcdnWafGroupResponse({}));
  }

  /**
   * Create a custom WAF rule group.
   * 
   * @param request - CreateDcdnWafGroupRequest
   * @returns CreateDcdnWafGroupResponse
   */
  async createDcdnWafGroup(request: $_model.CreateDcdnWafGroupRequest): Promise<$_model.CreateDcdnWafGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDcdnWafGroupWithOptions(request, runtime);
  }

  /**
   * Creates a Web Application Firewall (WAF) protection policy.
   * 
   * @remarks
   *   You can call this operation up to 20 times per second per user.
   * *   Alibaba Cloud Dynamic Route for CDN (DCDN) supports POST requests.
   * 
   * @param request - CreateDcdnWafPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDcdnWafPolicyResponse
   */
  async createDcdnWafPolicyWithOptions(request: $_model.CreateDcdnWafPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDcdnWafPolicyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.defenseScene)) {
      body["DefenseScene"] = request.defenseScene;
    }

    if (!$dara.isNull(request.policyName)) {
      body["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.policyStatus)) {
      body["PolicyStatus"] = request.policyStatus;
    }

    if (!$dara.isNull(request.policyType)) {
      body["PolicyType"] = request.policyType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDcdnWafPolicy",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDcdnWafPolicyResponse>(await this.callApi(params, req, runtime), new $_model.CreateDcdnWafPolicyResponse({}));
  }

  /**
   * Creates a Web Application Firewall (WAF) protection policy.
   * 
   * @remarks
   *   You can call this operation up to 20 times per second per user.
   * *   Alibaba Cloud Dynamic Route for CDN (DCDN) supports POST requests.
   * 
   * @param request - CreateDcdnWafPolicyRequest
   * @returns CreateDcdnWafPolicyResponse
   */
  async createDcdnWafPolicy(request: $_model.CreateDcdnWafPolicyRequest): Promise<$_model.CreateDcdnWafPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDcdnWafPolicyWithOptions(request, runtime);
  }

  /**
   * Creates a routine.
   * 
   * @remarks
   * > *   The parameters must comply with the rules of EnvConf. The description of a routine cannot exceed 50 characters in length.
   * >*   You can only specify the production and staging environments when you call this operation.
   * >*   You can call this operation up to 100 times per second per account.
   * 
   * @param tmpReq - CreateRoutineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRoutineResponse
   */
  async createRoutineWithOptions(tmpReq: $_model.CreateRoutineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRoutineResponse> {
    tmpReq.validate();
    let request = new $_model.CreateRoutineShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.envConf)) {
      request.envConfShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.envConf, "EnvConf", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.envConfShrink)) {
      body["EnvConf"] = request.envConfShrink;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRoutine",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRoutineResponse>(await this.callApi(params, req, runtime), new $_model.CreateRoutineResponse({}));
  }

  /**
   * Creates a routine.
   * 
   * @remarks
   * > *   The parameters must comply with the rules of EnvConf. The description of a routine cannot exceed 50 characters in length.
   * >*   You can only specify the production and staging environments when you call this operation.
   * >*   You can call this operation up to 100 times per second per account.
   * 
   * @param request - CreateRoutineRequest
   * @returns CreateRoutineResponse
   */
  async createRoutine(request: $_model.CreateRoutineRequest): Promise<$_model.CreateRoutineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRoutineWithOptions(request, runtime);
  }

  /**
   * Creates a service-linked role (SLR) and a Log Service project.
   * 
   * @remarks
   * >  You can call this operation up to 100 times per second per account.
   * 
   * @param request - CreateSlrAndSlsProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSlrAndSlsProjectResponse
   */
  async createSlrAndSlsProjectWithOptions(request: $_model.CreateSlrAndSlsProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSlrAndSlsProjectResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessType)) {
      body["BusinessType"] = request.businessType;
    }

    if (!$dara.isNull(request.region)) {
      body["Region"] = request.region;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSlrAndSlsProject",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSlrAndSlsProjectResponse>(await this.callApi(params, req, runtime), new $_model.CreateSlrAndSlsProjectResponse({}));
  }

  /**
   * Creates a service-linked role (SLR) and a Log Service project.
   * 
   * @remarks
   * >  You can call this operation up to 100 times per second per account.
   * 
   * @param request - CreateSlrAndSlsProjectRequest
   * @returns CreateSlrAndSlsProjectResponse
   */
  async createSlrAndSlsProject(request: $_model.CreateSlrAndSlsProjectRequest): Promise<$_model.CreateSlrAndSlsProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSlrAndSlsProjectWithOptions(request, runtime);
  }

  /**
   * A客户定制实时日志删除接口
   * 
   * @param request - DeleteCustomDomainSampleRateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomDomainSampleRateResponse
   */
  async deleteCustomDomainSampleRateWithOptions(request: $_model.DeleteCustomDomainSampleRateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCustomDomainSampleRateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.domainNames)) {
      body["DomainNames"] = request.domainNames;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCustomDomainSampleRate",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCustomDomainSampleRateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCustomDomainSampleRateResponse({}));
  }

  /**
   * A客户定制实时日志删除接口
   * 
   * @param request - DeleteCustomDomainSampleRateRequest
   * @returns DeleteCustomDomainSampleRateResponse
   */
  async deleteCustomDomainSampleRate(request: $_model.DeleteCustomDomainSampleRateRequest): Promise<$_model.DeleteCustomDomainSampleRateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCustomDomainSampleRateWithOptions(request, runtime);
  }

  /**
   * Deletes tracking tasks by task ID.
   * 
   * @remarks
   * >  The maximum number of times that each user can call this operation per second is 3.
   * 
   * @param request - DeleteDcdnDeliverTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDcdnDeliverTaskResponse
   */
  async deleteDcdnDeliverTaskWithOptions(request: $_model.DeleteDcdnDeliverTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDcdnDeliverTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deliverId)) {
      query["DeliverId"] = request.deliverId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDcdnDeliverTask",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDcdnDeliverTaskResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDcdnDeliverTaskResponse({}));
  }

  /**
   * Deletes tracking tasks by task ID.
   * 
   * @remarks
   * >  The maximum number of times that each user can call this operation per second is 3.
   * 
   * @param request - DeleteDcdnDeliverTaskRequest
   * @returns DeleteDcdnDeliverTaskResponse
   */
  async deleteDcdnDeliverTask(request: $_model.DeleteDcdnDeliverTaskRequest): Promise<$_model.DeleteDcdnDeliverTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDcdnDeliverTaskWithOptions(request, runtime);
  }

  /**
   * Deletes a specified accelerated domain name.
   * 
   * @remarks
   * > *   Before you delete your domain name, you need to request the Domain Name System (DNS) provider to restore the A record of the domain name. Otherwise, the domain name may become inaccessible after you delete it.
   * > *   If you call the **DeleteDcdnDomain** operation, all the information about the accelerated domain name is deleted. If you want to disable an accelerated domain name, call the [StopDcdnDomain](https://help.aliyun.com/document_detail/130622.html) operation.
   * > *   You can call this operation up to 10 times per second per account.
   * 
   * @param request - DeleteDcdnDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDcdnDomainResponse
   */
  async deleteDcdnDomainWithOptions(request: $_model.DeleteDcdnDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDcdnDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDcdnDomain",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDcdnDomainResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDcdnDomainResponse({}));
  }

  /**
   * Deletes a specified accelerated domain name.
   * 
   * @remarks
   * > *   Before you delete your domain name, you need to request the Domain Name System (DNS) provider to restore the A record of the domain name. Otherwise, the domain name may become inaccessible after you delete it.
   * > *   If you call the **DeleteDcdnDomain** operation, all the information about the accelerated domain name is deleted. If you want to disable an accelerated domain name, call the [StopDcdnDomain](https://help.aliyun.com/document_detail/130622.html) operation.
   * > *   You can call this operation up to 10 times per second per account.
   * 
   * @param request - DeleteDcdnDomainRequest
   * @returns DeleteDcdnDomainResponse
   */
  async deleteDcdnDomain(request: $_model.DeleteDcdnDomainRequest): Promise<$_model.DeleteDcdnDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDcdnDomainWithOptions(request, runtime);
  }

  /**
   * Deletes an accelerated domain name from IP Application Accelerator (IPA).
   * 
   * @remarks
   * > 
   * *   Before you delete your domain name, we recommend that you request the Domain Name System (DNS) provider to restore the A record of the domain name. Otherwise, the domain name may become inaccessible after you delete it.
   * *   This operation deletes all records of the specified accelerated domain name. If you want to temporarily disable an accelerated domain name, call the **StopDcdnIpaDomain** operation.****
   * *   You can call this operation up to 10 times per second per account.
   * 
   * @param request - DeleteDcdnIpaDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDcdnIpaDomainResponse
   */
  async deleteDcdnIpaDomainWithOptions(request: $_model.DeleteDcdnIpaDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDcdnIpaDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDcdnIpaDomain",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDcdnIpaDomainResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDcdnIpaDomainResponse({}));
  }

  /**
   * Deletes an accelerated domain name from IP Application Accelerator (IPA).
   * 
   * @remarks
   * > 
   * *   Before you delete your domain name, we recommend that you request the Domain Name System (DNS) provider to restore the A record of the domain name. Otherwise, the domain name may become inaccessible after you delete it.
   * *   This operation deletes all records of the specified accelerated domain name. If you want to temporarily disable an accelerated domain name, call the **StopDcdnIpaDomain** operation.****
   * *   You can call this operation up to 10 times per second per account.
   * 
   * @param request - DeleteDcdnIpaDomainRequest
   * @returns DeleteDcdnIpaDomainResponse
   */
  async deleteDcdnIpaDomain(request: $_model.DeleteDcdnIpaDomainRequest): Promise<$_model.DeleteDcdnIpaDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDcdnIpaDomainWithOptions(request, runtime);
  }

  /**
   * Deletes specific configurations of an accelerated domain name from IP Application Accelerator (IPA).
   * 
   * @remarks
   * > You can call this operation up to 10 times per second per account.
   * 
   * @param request - DeleteDcdnIpaSpecificConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDcdnIpaSpecificConfigResponse
   */
  async deleteDcdnIpaSpecificConfigWithOptions(request: $_model.DeleteDcdnIpaSpecificConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDcdnIpaSpecificConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configId)) {
      query["ConfigId"] = request.configId;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDcdnIpaSpecificConfig",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDcdnIpaSpecificConfigResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDcdnIpaSpecificConfigResponse({}));
  }

  /**
   * Deletes specific configurations of an accelerated domain name from IP Application Accelerator (IPA).
   * 
   * @remarks
   * > You can call this operation up to 10 times per second per account.
   * 
   * @param request - DeleteDcdnIpaSpecificConfigRequest
   * @returns DeleteDcdnIpaSpecificConfigResponse
   */
  async deleteDcdnIpaSpecificConfig(request: $_model.DeleteDcdnIpaSpecificConfigRequest): Promise<$_model.DeleteDcdnIpaSpecificConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDcdnIpaSpecificConfigWithOptions(request, runtime);
  }

  /**
   * Deletes the key-value pairs in a namespace that you specify when you call the PutDcdnKvNamespace operation. EdgeKV provides a global key-value database for Dynamic Route for CDN (DCDN) points of presence (POPs).
   * 
   * @param request - DeleteDcdnKvRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDcdnKvResponse
   */
  async deleteDcdnKvWithOptions(request: $_model.DeleteDcdnKvRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDcdnKvResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDcdnKv",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDcdnKvResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDcdnKvResponse({}));
  }

  /**
   * Deletes the key-value pairs in a namespace that you specify when you call the PutDcdnKvNamespace operation. EdgeKV provides a global key-value database for Dynamic Route for CDN (DCDN) points of presence (POPs).
   * 
   * @param request - DeleteDcdnKvRequest
   * @returns DeleteDcdnKvResponse
   */
  async deleteDcdnKv(request: $_model.DeleteDcdnKvRequest): Promise<$_model.DeleteDcdnKvResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDcdnKvWithOptions(request, runtime);
  }

  /**
   * Deletes a namespace that belongs to your account.
   * 
   * @param request - DeleteDcdnKvNamespaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDcdnKvNamespaceResponse
   */
  async deleteDcdnKvNamespaceWithOptions(request: $_model.DeleteDcdnKvNamespaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDcdnKvNamespaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDcdnKvNamespace",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDcdnKvNamespaceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDcdnKvNamespaceResponse({}));
  }

  /**
   * Deletes a namespace that belongs to your account.
   * 
   * @param request - DeleteDcdnKvNamespaceRequest
   * @returns DeleteDcdnKvNamespaceResponse
   */
  async deleteDcdnKvNamespace(request: $_model.DeleteDcdnKvNamespaceRequest): Promise<$_model.DeleteDcdnKvNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDcdnKvNamespaceWithOptions(request, runtime);
  }

  /**
   * The ID of the request.
   * 
   * @remarks
   * >  You can call this operation up to 100 times per second per account.
   * 
   * @param request - DeleteDcdnRealTimeLogProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDcdnRealTimeLogProjectResponse
   */
  async deleteDcdnRealTimeLogProjectWithOptions(request: $_model.DeleteDcdnRealTimeLogProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDcdnRealTimeLogProjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDcdnRealTimeLogProject",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDcdnRealTimeLogProjectResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDcdnRealTimeLogProjectResponse({}));
  }

  /**
   * The ID of the request.
   * 
   * @remarks
   * >  You can call this operation up to 100 times per second per account.
   * 
   * @param request - DeleteDcdnRealTimeLogProjectRequest
   * @returns DeleteDcdnRealTimeLogProjectResponse
   */
  async deleteDcdnRealTimeLogProject(request: $_model.DeleteDcdnRealTimeLogProjectRequest): Promise<$_model.DeleteDcdnRealTimeLogProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDcdnRealTimeLogProjectWithOptions(request, runtime);
  }

  /**
   * Deletes configurations of a domain name.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - DeleteDcdnSpecificConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDcdnSpecificConfigResponse
   */
  async deleteDcdnSpecificConfigWithOptions(request: $_model.DeleteDcdnSpecificConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDcdnSpecificConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configId)) {
      query["ConfigId"] = request.configId;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDcdnSpecificConfig",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDcdnSpecificConfigResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDcdnSpecificConfigResponse({}));
  }

  /**
   * Deletes configurations of a domain name.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - DeleteDcdnSpecificConfigRequest
   * @returns DeleteDcdnSpecificConfigResponse
   */
  async deleteDcdnSpecificConfig(request: $_model.DeleteDcdnSpecificConfigRequest): Promise<$_model.DeleteDcdnSpecificConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDcdnSpecificConfigWithOptions(request, runtime);
  }

  /**
   * Deletes the configurations of an accelerated domain name in the canary release environment.
   * 
   * @remarks
   * > You can call this operation up to 20 times per second per account.
   * 
   * @param request - DeleteDcdnSpecificStagingConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDcdnSpecificStagingConfigResponse
   */
  async deleteDcdnSpecificStagingConfigWithOptions(request: $_model.DeleteDcdnSpecificStagingConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDcdnSpecificStagingConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configId)) {
      query["ConfigId"] = request.configId;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDcdnSpecificStagingConfig",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDcdnSpecificStagingConfigResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDcdnSpecificStagingConfigResponse({}));
  }

  /**
   * Deletes the configurations of an accelerated domain name in the canary release environment.
   * 
   * @remarks
   * > You can call this operation up to 20 times per second per account.
   * 
   * @param request - DeleteDcdnSpecificStagingConfigRequest
   * @returns DeleteDcdnSpecificStagingConfigResponse
   */
  async deleteDcdnSpecificStagingConfig(request: $_model.DeleteDcdnSpecificStagingConfigRequest): Promise<$_model.DeleteDcdnSpecificStagingConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDcdnSpecificStagingConfigWithOptions(request, runtime);
  }

  /**
   * Deletes all custom operations reports.
   * 
   * @remarks
   * > You can call this operation up to 3 times per second per account.
   * 
   * @param request - DeleteDcdnSubTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDcdnSubTaskResponse
   */
  async deleteDcdnSubTaskWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDcdnSubTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDcdnSubTask",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDcdnSubTaskResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDcdnSubTaskResponse({}));
  }

  /**
   * Deletes all custom operations reports.
   * 
   * @remarks
   * > You can call this operation up to 3 times per second per account.
   * @returns DeleteDcdnSubTaskResponse
   */
  async deleteDcdnSubTask(): Promise<$_model.DeleteDcdnSubTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDcdnSubTaskWithOptions(runtime);
  }

  /**
   * Deletes feature configurations by user.
   * 
   * @param request - DeleteDcdnUserConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDcdnUserConfigResponse
   */
  async deleteDcdnUserConfigWithOptions(request: $_model.DeleteDcdnUserConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDcdnUserConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.functionName)) {
      query["FunctionName"] = request.functionName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDcdnUserConfig",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDcdnUserConfigResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDcdnUserConfigResponse({}));
  }

  /**
   * Deletes feature configurations by user.
   * 
   * @param request - DeleteDcdnUserConfigRequest
   * @returns DeleteDcdnUserConfigResponse
   */
  async deleteDcdnUserConfig(request: $_model.DeleteDcdnUserConfigRequest): Promise<$_model.DeleteDcdnUserConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDcdnUserConfigWithOptions(request, runtime);
  }

  /**
   * Deletes a custom WAF rule group.
   * 
   * @param request - DeleteDcdnWafGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDcdnWafGroupResponse
   */
  async deleteDcdnWafGroupWithOptions(request: $_model.DeleteDcdnWafGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDcdnWafGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDcdnWafGroup",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDcdnWafGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDcdnWafGroupResponse({}));
  }

  /**
   * Deletes a custom WAF rule group.
   * 
   * @param request - DeleteDcdnWafGroupRequest
   * @returns DeleteDcdnWafGroupResponse
   */
  async deleteDcdnWafGroup(request: $_model.DeleteDcdnWafGroupRequest): Promise<$_model.DeleteDcdnWafGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDcdnWafGroupWithOptions(request, runtime);
  }

  /**
   * Deletes a protection policy.
   * 
   * @remarks
   *   You can call this operation up to 20 times per second per account.
   * *   Alibaba Cloud Dynamic Content Delivery Network (DCDN) supports POST requests.
   * 
   * @param request - DeleteDcdnWafPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDcdnWafPolicyResponse
   */
  async deleteDcdnWafPolicyWithOptions(request: $_model.DeleteDcdnWafPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDcdnWafPolicyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.policyId)) {
      body["PolicyId"] = request.policyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDcdnWafPolicy",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDcdnWafPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDcdnWafPolicyResponse({}));
  }

  /**
   * Deletes a protection policy.
   * 
   * @remarks
   *   You can call this operation up to 20 times per second per account.
   * *   Alibaba Cloud Dynamic Content Delivery Network (DCDN) supports POST requests.
   * 
   * @param request - DeleteDcdnWafPolicyRequest
   * @returns DeleteDcdnWafPolicyResponse
   */
  async deleteDcdnWafPolicy(request: $_model.DeleteDcdnWafPolicyRequest): Promise<$_model.DeleteDcdnWafPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDcdnWafPolicyWithOptions(request, runtime);
  }

  /**
   * Deletes a routine.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - DeleteRoutineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRoutineResponse
   */
  async deleteRoutineWithOptions(request: $_model.DeleteRoutineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRoutineResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRoutine",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRoutineResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRoutineResponse({}));
  }

  /**
   * Deletes a routine.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - DeleteRoutineRequest
   * @returns DeleteRoutineResponse
   */
  async deleteRoutine(request: $_model.DeleteRoutineRequest): Promise<$_model.DeleteRoutineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRoutineWithOptions(request, runtime);
  }

  /**
   * Deletes the code of the specified version from a routine.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - DeleteRoutineCodeRevisionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRoutineCodeRevisionResponse
   */
  async deleteRoutineCodeRevisionWithOptions(request: $_model.DeleteRoutineCodeRevisionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRoutineCodeRevisionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.selectCodeRevision)) {
      body["SelectCodeRevision"] = request.selectCodeRevision;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRoutineCodeRevision",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRoutineCodeRevisionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRoutineCodeRevisionResponse({}));
  }

  /**
   * Deletes the code of the specified version from a routine.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - DeleteRoutineCodeRevisionRequest
   * @returns DeleteRoutineCodeRevisionResponse
   */
  async deleteRoutineCodeRevision(request: $_model.DeleteRoutineCodeRevisionRequest): Promise<$_model.DeleteRoutineCodeRevisionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRoutineCodeRevisionWithOptions(request, runtime);
  }

  /**
   * Deletes canary release environments from a routine.
   * 
   * @remarks
   * > 
   * *   This operation deletes only custom preset canary release environments. You cannot delete production or staging environments.
   * *   You can call this operation up to 100 times per second per account.
   * 
   * @param tmpReq - DeleteRoutineConfEnvsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRoutineConfEnvsResponse
   */
  async deleteRoutineConfEnvsWithOptions(tmpReq: $_model.DeleteRoutineConfEnvsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRoutineConfEnvsResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteRoutineConfEnvsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.envs)) {
      request.envsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.envs, "Envs", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.envsShrink)) {
      body["Envs"] = request.envsShrink;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRoutineConfEnvs",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRoutineConfEnvsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRoutineConfEnvsResponse({}));
  }

  /**
   * Deletes canary release environments from a routine.
   * 
   * @remarks
   * > 
   * *   This operation deletes only custom preset canary release environments. You cannot delete production or staging environments.
   * *   You can call this operation up to 100 times per second per account.
   * 
   * @param request - DeleteRoutineConfEnvsRequest
   * @returns DeleteRoutineConfEnvsResponse
   */
  async deleteRoutineConfEnvs(request: $_model.DeleteRoutineConfEnvsRequest): Promise<$_model.DeleteRoutineConfEnvsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRoutineConfEnvsWithOptions(request, runtime);
  }

  /**
   * A客户定制查询域名采样率
   * 
   * @param request - DescribeCustomDomainSampleRateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCustomDomainSampleRateResponse
   */
  async describeCustomDomainSampleRateWithOptions(request: $_model.DescribeCustomDomainSampleRateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCustomDomainSampleRateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainNames)) {
      query["DomainNames"] = request.domainNames;
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
      action: "DescribeCustomDomainSampleRate",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCustomDomainSampleRateResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCustomDomainSampleRateResponse({}));
  }

  /**
   * A客户定制查询域名采样率
   * 
   * @param request - DescribeCustomDomainSampleRateRequest
   * @returns DescribeCustomDomainSampleRateResponse
   */
  async describeCustomDomainSampleRate(request: $_model.DescribeCustomDomainSampleRateRequest): Promise<$_model.DescribeCustomDomainSampleRateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCustomDomainSampleRateWithOptions(request, runtime);
  }

  /**
   * Queries precise access control rules.
   * 
   * @remarks
   * > You can call this operation up to three times per second per account.
   * 
   * @param request - DescribeDcdnAclFieldsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnAclFieldsResponse
   */
  async describeDcdnAclFieldsWithOptions(request: $_model.DescribeDcdnAclFieldsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnAclFieldsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnAclFields",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnAclFieldsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnAclFieldsResponse({}));
  }

  /**
   * Queries precise access control rules.
   * 
   * @remarks
   * > You can call this operation up to three times per second per account.
   * 
   * @param request - DescribeDcdnAclFieldsRequest
   * @returns DescribeDcdnAclFieldsResponse
   */
  async describeDcdnAclFields(request: $_model.DescribeDcdnAclFieldsRequest): Promise<$_model.DescribeDcdnAclFieldsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnAclFieldsWithOptions(request, runtime);
  }

  /**
   * Queries bandwidth data for Border Gateway Protocol (BGP) accelerated domain names. Data is collected every 5 minutes.
   * 
   * @remarks
   *   If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both the StartTime and EndTime parameters, the request returns the data collected within the specified time range. You must set both parameters or leave both of them empty.
   * *   If you specify multiple Internet service providers (ISPs), the data for the ISPs is aggregated.
   * *   You can query data in the last 90 days.
   * *   The maximum time range from the start time to the end time is 31 days. The start time is specified by the StartTime parameter and the end time is specified by the EndTime parameter.
   * *   If the time range from the start time to the end time is 72 hours or shorter, you can specify the interval as 5 minutes. If the time range is longer than 72 hours, you must specify the interval as 1 hour.
   * *   You can call this operation up to five times per second per account.
   * 
   * @param request - DescribeDcdnBgpBpsDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnBgpBpsDataResponse
   */
  async describeDcdnBgpBpsDataWithOptions(request: $_model.DescribeDcdnBgpBpsDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnBgpBpsDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.devicePort)) {
      query["DevicePort"] = request.devicePort;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.isp)) {
      query["Isp"] = request.isp;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnBgpBpsData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnBgpBpsDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnBgpBpsDataResponse({}));
  }

  /**
   * Queries bandwidth data for Border Gateway Protocol (BGP) accelerated domain names. Data is collected every 5 minutes.
   * 
   * @remarks
   *   If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both the StartTime and EndTime parameters, the request returns the data collected within the specified time range. You must set both parameters or leave both of them empty.
   * *   If you specify multiple Internet service providers (ISPs), the data for the ISPs is aggregated.
   * *   You can query data in the last 90 days.
   * *   The maximum time range from the start time to the end time is 31 days. The start time is specified by the StartTime parameter and the end time is specified by the EndTime parameter.
   * *   If the time range from the start time to the end time is 72 hours or shorter, you can specify the interval as 5 minutes. If the time range is longer than 72 hours, you must specify the interval as 1 hour.
   * *   You can call this operation up to five times per second per account.
   * 
   * @param request - DescribeDcdnBgpBpsDataRequest
   * @returns DescribeDcdnBgpBpsDataResponse
   */
  async describeDcdnBgpBpsData(request: $_model.DescribeDcdnBgpBpsDataRequest): Promise<$_model.DescribeDcdnBgpBpsDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnBgpBpsDataWithOptions(request, runtime);
  }

  /**
   * Queries traffic data for BGP accelerated domain names. Data is collected every 5 minutes.
   * 
   * @remarks
   *   If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range. You must set both parameters or leave both parameters empty.
   * *   If you specify multiple Internet service providers (ISPs), the data for the ISPs is aggregated.
   * *   You can query data in the last 90 days.
   * *   The maximum time range that you can specify is 31 days. StartTime specifies the start time and EndTime specifies the end time of the time range.
   * *   If the time range from the start time to the end time is 72 hours or shorter, you can specify the interval as 5 minutes. If the time range is longer than 72 hours, you must specify the interval as 1 hour.
   * *   You can call this operation up to five times per second per account.
   * 
   * @param request - DescribeDcdnBgpTrafficDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnBgpTrafficDataResponse
   */
  async describeDcdnBgpTrafficDataWithOptions(request: $_model.DescribeDcdnBgpTrafficDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnBgpTrafficDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.isp)) {
      query["Isp"] = request.isp;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnBgpTrafficData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnBgpTrafficDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnBgpTrafficDataResponse({}));
  }

  /**
   * Queries traffic data for BGP accelerated domain names. Data is collected every 5 minutes.
   * 
   * @remarks
   *   If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range. You must set both parameters or leave both parameters empty.
   * *   If you specify multiple Internet service providers (ISPs), the data for the ISPs is aggregated.
   * *   You can query data in the last 90 days.
   * *   The maximum time range that you can specify is 31 days. StartTime specifies the start time and EndTime specifies the end time of the time range.
   * *   If the time range from the start time to the end time is 72 hours or shorter, you can specify the interval as 5 minutes. If the time range is longer than 72 hours, you must specify the interval as 1 hour.
   * *   You can call this operation up to five times per second per account.
   * 
   * @param request - DescribeDcdnBgpTrafficDataRequest
   * @returns DescribeDcdnBgpTrafficDataResponse
   */
  async describeDcdnBgpTrafficData(request: $_model.DescribeDcdnBgpTrafficDataRequest): Promise<$_model.DescribeDcdnBgpTrafficDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnBgpTrafficDataWithOptions(request, runtime);
  }

  /**
   * Queries countries and regions that can be added to the blacklist.
   * 
   * @remarks
   * > You can call this operation up to 50 times per second per account.
   * 
   * @param request - DescribeDcdnBlockedRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnBlockedRegionsResponse
   */
  async describeDcdnBlockedRegionsWithOptions(request: $_model.DescribeDcdnBlockedRegionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnBlockedRegionsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnBlockedRegions",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnBlockedRegionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnBlockedRegionsResponse({}));
  }

  /**
   * Queries countries and regions that can be added to the blacklist.
   * 
   * @remarks
   * > You can call this operation up to 50 times per second per account.
   * 
   * @param request - DescribeDcdnBlockedRegionsRequest
   * @returns DescribeDcdnBlockedRegionsResponse
   */
  async describeDcdnBlockedRegions(request: $_model.DescribeDcdnBlockedRegionsRequest): Promise<$_model.DescribeDcdnBlockedRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnBlockedRegionsWithOptions(request, runtime);
  }

  /**
   * Queries details about a certificate.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribeDcdnCertificateDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnCertificateDetailResponse
   */
  async describeDcdnCertificateDetailWithOptions(request: $_model.DescribeDcdnCertificateDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnCertificateDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certName)) {
      query["CertName"] = request.certName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnCertificateDetail",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnCertificateDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnCertificateDetailResponse({}));
  }

  /**
   * Queries details about a certificate.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribeDcdnCertificateDetailRequest
   * @returns DescribeDcdnCertificateDetailResponse
   */
  async describeDcdnCertificateDetail(request: $_model.DescribeDcdnCertificateDetailRequest): Promise<$_model.DescribeDcdnCertificateDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnCertificateDetailWithOptions(request, runtime);
  }

  /**
   * Queries the certificates of one or more accelerated domain names.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @deprecated OpenAPI DescribeDcdnCertificateList is deprecated, please use dcdn::2018-01-15::DescribeDcdnSSLCertificateList instead.
   * 
   * @param request - DescribeDcdnCertificateListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnCertificateListResponse
   */
  async describeDcdnCertificateListWithOptions(request: $_model.DescribeDcdnCertificateListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnCertificateListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnCertificateList",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnCertificateListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnCertificateListResponse({}));
  }

  /**
   * Queries the certificates of one or more accelerated domain names.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @deprecated OpenAPI DescribeDcdnCertificateList is deprecated, please use dcdn::2018-01-15::DescribeDcdnSSLCertificateList instead.
   * 
   * @param request - DescribeDcdnCertificateListRequest
   * @returns DescribeDcdnCertificateListResponse
   */
  // Deprecated
  async describeDcdnCertificateList(request: $_model.DescribeDcdnCertificateListRequest): Promise<$_model.DescribeDcdnCertificateListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnCertificateListWithOptions(request, runtime);
  }

  /**
   * Queries the status of DCDN DDoS mitigation.
   * 
   * @param request - DescribeDcdnDdosServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnDdosServiceResponse
   */
  async describeDcdnDdosServiceWithOptions(request: $_model.DescribeDcdnDdosServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnDdosServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnDdosService",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnDdosServiceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnDdosServiceResponse({}));
  }

  /**
   * Queries the status of DCDN DDoS mitigation.
   * 
   * @param request - DescribeDcdnDdosServiceRequest
   * @returns DescribeDcdnDdosServiceResponse
   */
  async describeDcdnDdosService(request: $_model.DescribeDcdnDdosServiceRequest): Promise<$_model.DescribeDcdnDdosServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnDdosServiceWithOptions(request, runtime);
  }

  /**
   * Queries the specifications of DCDN DDoS versions.
   * 
   * @param request - DescribeDcdnDdosSpecInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnDdosSpecInfoResponse
   */
  async describeDcdnDdosSpecInfoWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnDdosSpecInfoResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnDdosSpecInfo",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnDdosSpecInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnDdosSpecInfoResponse({}));
  }

  /**
   * Queries the specifications of DCDN DDoS versions.
   * @returns DescribeDcdnDdosSpecInfoResponse
   */
  async describeDcdnDdosSpecInfo(): Promise<$_model.DescribeDcdnDdosSpecInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnDdosSpecInfoWithOptions(runtime);
  }

  /**
   * Queries the domain names that are deleted from your Alibaba Cloud account.
   * 
   * @remarks
   * > You can call this operation up to 10 times per second per account.
   * 
   * @param request - DescribeDcdnDeletedDomainsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnDeletedDomainsResponse
   */
  async describeDcdnDeletedDomainsWithOptions(request: $_model.DescribeDcdnDeletedDomainsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnDeletedDomainsResponse> {
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
      action: "DescribeDcdnDeletedDomains",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnDeletedDomainsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnDeletedDomainsResponse({}));
  }

  /**
   * Queries the domain names that are deleted from your Alibaba Cloud account.
   * 
   * @remarks
   * > You can call this operation up to 10 times per second per account.
   * 
   * @param request - DescribeDcdnDeletedDomainsRequest
   * @returns DescribeDcdnDeletedDomainsResponse
   */
  async describeDcdnDeletedDomains(request: $_model.DescribeDcdnDeletedDomainsRequest): Promise<$_model.DescribeDcdnDeletedDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnDeletedDomainsWithOptions(request, runtime);
  }

  /**
   * Queries all tracking tasks of operations reports.
   * 
   * @remarks
   * >You can call this operation up to three times per second.
   * 
   * @param request - DescribeDcdnDeliverListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnDeliverListResponse
   */
  async describeDcdnDeliverListWithOptions(request: $_model.DescribeDcdnDeliverListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnDeliverListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deliverId)) {
      query["DeliverId"] = request.deliverId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnDeliverList",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnDeliverListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnDeliverListResponse({}));
  }

  /**
   * Queries all tracking tasks of operations reports.
   * 
   * @remarks
   * >You can call this operation up to three times per second.
   * 
   * @param request - DescribeDcdnDeliverListRequest
   * @returns DescribeDcdnDeliverListResponse
   */
  async describeDcdnDeliverList(request: $_model.DescribeDcdnDeliverListRequest): Promise<$_model.DescribeDcdnDeliverListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnDeliverListWithOptions(request, runtime);
  }

  /**
   * Queries the monitoring data of network bandwidth for one or more accelerated domain names. You can query data in the last 90 days.
   * 
   * @remarks
   * You can call this operation up to 100 times per second per account.
   * * If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the last 24 hours. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * |1 day|366 days|366 days|04:00 on the next day|
   * 
   * @param request - DescribeDcdnDomainBpsDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnDomainBpsDataResponse
   */
  async describeDcdnDomainBpsDataWithOptions(request: $_model.DescribeDcdnDomainBpsDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnDomainBpsDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!$dara.isNull(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnDomainBpsData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnDomainBpsDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnDomainBpsDataResponse({}));
  }

  /**
   * Queries the monitoring data of network bandwidth for one or more accelerated domain names. You can query data in the last 90 days.
   * 
   * @remarks
   * You can call this operation up to 100 times per second per account.
   * * If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the last 24 hours. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * |1 day|366 days|366 days|04:00 on the next day|
   * 
   * @param request - DescribeDcdnDomainBpsDataRequest
   * @returns DescribeDcdnDomainBpsDataResponse
   */
  async describeDcdnDomainBpsData(request: $_model.DescribeDcdnDomainBpsDataRequest): Promise<$_model.DescribeDcdnDomainBpsDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnDomainBpsDataWithOptions(request, runtime);
  }

  /**
   * Queries bandwidth data of accelerated domain names.
   * 
   * @remarks
   * You can call this operation up to 20 times per second per account.
   * * If you do not set **StartTime** or **EndTime**, the request returns the data collected in the last 24 hours. If you set both **StartTime** and **EndTime**, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the time range to query, as described in the following table.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * |1 day|366 days|366 days|04:00 on the next day|
   * 
   * @param request - DescribeDcdnDomainBpsDataByLayerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnDomainBpsDataByLayerResponse
   */
  async describeDcdnDomainBpsDataByLayerWithOptions(request: $_model.DescribeDcdnDomainBpsDataByLayerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnDomainBpsDataByLayerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!$dara.isNull(request.layer)) {
      query["Layer"] = request.layer;
    }

    if (!$dara.isNull(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnDomainBpsDataByLayer",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnDomainBpsDataByLayerResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnDomainBpsDataByLayerResponse({}));
  }

  /**
   * Queries bandwidth data of accelerated domain names.
   * 
   * @remarks
   * You can call this operation up to 20 times per second per account.
   * * If you do not set **StartTime** or **EndTime**, the request returns the data collected in the last 24 hours. If you set both **StartTime** and **EndTime**, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the time range to query, as described in the following table.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * |1 day|366 days|366 days|04:00 on the next day|
   * 
   * @param request - DescribeDcdnDomainBpsDataByLayerRequest
   * @returns DescribeDcdnDomainBpsDataByLayerResponse
   */
  async describeDcdnDomainBpsDataByLayer(request: $_model.DescribeDcdnDomainBpsDataByLayerRequest): Promise<$_model.DescribeDcdnDomainBpsDataByLayerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnDomainBpsDataByLayerWithOptions(request, runtime);
  }

  /**
   * Queries accelerated domain names by SSL certificate.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeDcdnDomainByCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnDomainByCertificateResponse
   */
  async describeDcdnDomainByCertificateWithOptions(request: $_model.DescribeDcdnDomainByCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnDomainByCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.exact)) {
      query["Exact"] = request.exact;
    }

    if (!$dara.isNull(request.SSLPub)) {
      query["SSLPub"] = request.SSLPub;
    }

    if (!$dara.isNull(request.SSLStatus)) {
      query["SSLStatus"] = request.SSLStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnDomainByCertificate",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnDomainByCertificateResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnDomainByCertificateResponse({}));
  }

  /**
   * Queries accelerated domain names by SSL certificate.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeDcdnDomainByCertificateRequest
   * @returns DescribeDcdnDomainByCertificateResponse
   */
  async describeDcdnDomainByCertificate(request: $_model.DescribeDcdnDomainByCertificateRequest): Promise<$_model.DescribeDcdnDomainByCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnDomainByCertificateWithOptions(request, runtime);
  }

  /**
   * Queries logs of rate limiting.
   * 
   * @remarks
   * > 
   * *   If you do not configure the StartTime or EndTime parameter, data collected over the last 24 hours is queried. If you configure both the StartTime and EndTime parameters, data collected within the specified time range is queried.
   * *   You can query data collected over the last 30 days.
   * *   You can call the RefreshObjectCaches operation up to 50 times per second per account.
   * 
   * @param request - DescribeDcdnDomainCcActivityLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnDomainCcActivityLogResponse
   */
  async describeDcdnDomainCcActivityLogWithOptions(request: $_model.DescribeDcdnDomainCcActivityLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnDomainCcActivityLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.triggerObject)) {
      query["TriggerObject"] = request.triggerObject;
    }

    if (!$dara.isNull(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnDomainCcActivityLog",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnDomainCcActivityLogResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnDomainCcActivityLogResponse({}));
  }

  /**
   * Queries logs of rate limiting.
   * 
   * @remarks
   * > 
   * *   If you do not configure the StartTime or EndTime parameter, data collected over the last 24 hours is queried. If you configure both the StartTime and EndTime parameters, data collected within the specified time range is queried.
   * *   You can query data collected over the last 30 days.
   * *   You can call the RefreshObjectCaches operation up to 50 times per second per account.
   * 
   * @param request - DescribeDcdnDomainCcActivityLogRequest
   * @returns DescribeDcdnDomainCcActivityLogResponse
   */
  async describeDcdnDomainCcActivityLog(request: $_model.DescribeDcdnDomainCcActivityLogRequest): Promise<$_model.DescribeDcdnDomainCcActivityLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnDomainCcActivityLogWithOptions(request, runtime);
  }

  /**
   * Queries the certificate information about an accelerated domain name.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeDcdnDomainCertificateInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnDomainCertificateInfoResponse
   */
  async describeDcdnDomainCertificateInfoWithOptions(request: $_model.DescribeDcdnDomainCertificateInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnDomainCertificateInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnDomainCertificateInfo",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnDomainCertificateInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnDomainCertificateInfoResponse({}));
  }

  /**
   * Queries the certificate information about an accelerated domain name.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeDcdnDomainCertificateInfoRequest
   * @returns DescribeDcdnDomainCertificateInfoResponse
   */
  async describeDcdnDomainCertificateInfo(request: $_model.DescribeDcdnDomainCertificateInfoRequest): Promise<$_model.DescribeDcdnDomainCertificateInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnDomainCertificateInfoWithOptions(request, runtime);
  }

  /**
   * Checks whether CNAME records are configured for one or more accelerated domain names.
   * 
   * @remarks
   * > You can call this operation up to 80 times per second per account.
   * 
   * @param request - DescribeDcdnDomainCnameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnDomainCnameResponse
   */
  async describeDcdnDomainCnameWithOptions(request: $_model.DescribeDcdnDomainCnameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnDomainCnameResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnDomainCname",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnDomainCnameResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnDomainCnameResponse({}));
  }

  /**
   * Checks whether CNAME records are configured for one or more accelerated domain names.
   * 
   * @remarks
   * > You can call this operation up to 80 times per second per account.
   * 
   * @param request - DescribeDcdnDomainCnameRequest
   * @returns DescribeDcdnDomainCnameResponse
   */
  async describeDcdnDomainCname(request: $_model.DescribeDcdnDomainCnameRequest): Promise<$_model.DescribeDcdnDomainCnameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnDomainCnameWithOptions(request, runtime);
  }

  /**
   * Queries the configurations of an accelerated domain name.
   * 
   * @remarks
   * > *   You can query the configurations of one or more features in a request.
   * > *   You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribeDcdnDomainConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnDomainConfigsResponse
   */
  async describeDcdnDomainConfigsWithOptions(request: $_model.DescribeDcdnDomainConfigsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnDomainConfigsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configId)) {
      query["ConfigId"] = request.configId;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.functionNames)) {
      query["FunctionNames"] = request.functionNames;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnDomainConfigs",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnDomainConfigsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnDomainConfigsResponse({}));
  }

  /**
   * Queries the configurations of an accelerated domain name.
   * 
   * @remarks
   * > *   You can query the configurations of one or more features in a request.
   * > *   You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribeDcdnDomainConfigsRequest
   * @returns DescribeDcdnDomainConfigsResponse
   */
  async describeDcdnDomainConfigs(request: $_model.DescribeDcdnDomainConfigsRequest): Promise<$_model.DescribeDcdnDomainConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnDomainConfigsWithOptions(request, runtime);
  }

  /**
   * Queries the basic configuration information about an accelerated domain name.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribeDcdnDomainDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnDomainDetailResponse
   */
  async describeDcdnDomainDetailWithOptions(request: $_model.DescribeDcdnDomainDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnDomainDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnDomainDetail",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnDomainDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnDomainDetailResponse({}));
  }

  /**
   * Queries the basic configuration information about an accelerated domain name.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribeDcdnDomainDetailRequest
   * @returns DescribeDcdnDomainDetailResponse
   */
  async describeDcdnDomainDetail(request: $_model.DescribeDcdnDomainDetailRequest): Promise<$_model.DescribeDcdnDomainDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnDomainDetailWithOptions(request, runtime);
  }

  /**
   * Queries the request hit ratios of one or more accelerated domain names. You can query data collected within the last 90 days.
   * 
   * @remarks
   * #
   * *   You can call this operation up to 100 times per second per account.
   * *   If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the last 24 hours. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
   * **Time granularity** The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table. |Time granularity |Maximum time range per query |Historical data available |Data delay | -------------- | -------------- | ------ |5 minutes |3 days |93 days |15 minutes |1 hour |31 days |186 days |4 hours |1 day |366 days |366 days |04:00 on the next day
   * 
   * @param request - DescribeDcdnDomainHitRateDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnDomainHitRateDataResponse
   */
  async describeDcdnDomainHitRateDataWithOptions(request: $_model.DescribeDcdnDomainHitRateDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnDomainHitRateDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnDomainHitRateData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnDomainHitRateDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnDomainHitRateDataResponse({}));
  }

  /**
   * Queries the request hit ratios of one or more accelerated domain names. You can query data collected within the last 90 days.
   * 
   * @remarks
   * #
   * *   You can call this operation up to 100 times per second per account.
   * *   If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the last 24 hours. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
   * **Time granularity** The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table. |Time granularity |Maximum time range per query |Historical data available |Data delay | -------------- | -------------- | ------ |5 minutes |3 days |93 days |15 minutes |1 hour |31 days |186 days |4 hours |1 day |366 days |366 days |04:00 on the next day
   * 
   * @param request - DescribeDcdnDomainHitRateDataRequest
   * @returns DescribeDcdnDomainHitRateDataResponse
   */
  async describeDcdnDomainHitRateData(request: $_model.DescribeDcdnDomainHitRateDataRequest): Promise<$_model.DescribeDcdnDomainHitRateDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnDomainHitRateDataWithOptions(request, runtime);
  }

  /**
   * Queries the total number and proportions of HTTP status codes returned from one or more accelerated domain names. Data is collected every 5 minutes. You can query data in the last 90 days.
   * 
   * @remarks
   * If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the last 24 hours. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
   * * You can call this operation up to 100 times per second per account.
   * **Time granularity**
   * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * |1 day|366 days|366 days|04:00 on the next day|
   * 
   * @param request - DescribeDcdnDomainHttpCodeDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnDomainHttpCodeDataResponse
   */
  async describeDcdnDomainHttpCodeDataWithOptions(request: $_model.DescribeDcdnDomainHttpCodeDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnDomainHttpCodeDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!$dara.isNull(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnDomainHttpCodeData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnDomainHttpCodeDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnDomainHttpCodeDataResponse({}));
  }

  /**
   * Queries the total number and proportions of HTTP status codes returned from one or more accelerated domain names. Data is collected every 5 minutes. You can query data in the last 90 days.
   * 
   * @remarks
   * If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the last 24 hours. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
   * * You can call this operation up to 100 times per second per account.
   * **Time granularity**
   * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * |1 day|366 days|366 days|04:00 on the next day|
   * 
   * @param request - DescribeDcdnDomainHttpCodeDataRequest
   * @returns DescribeDcdnDomainHttpCodeDataResponse
   */
  async describeDcdnDomainHttpCodeData(request: $_model.DescribeDcdnDomainHttpCodeDataRequest): Promise<$_model.DescribeDcdnDomainHttpCodeDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnDomainHttpCodeDataWithOptions(request, runtime);
  }

  /**
   * Queries the distribution of HTTP status codes by protocol.
   * 
   * @remarks
   * You can call this operation up to 20 times per second per account.
   * * You cannot query the distribution of HTTP status codes by IP protocol.
   * * If you do not specify the **StartTime** or **EndTime** parameter, the data that is collected within the last 24 hours is collected. If you specify both the **StartTime** and **EndTime** parameters, the data that is collected within the time range that you specify is collected.
   * **Time granularity**
   * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * |1 day|366 days|366 days|04:00 on the next day|
   * 
   * @param request - DescribeDcdnDomainHttpCodeDataByLayerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnDomainHttpCodeDataByLayerResponse
   */
  async describeDcdnDomainHttpCodeDataByLayerWithOptions(request: $_model.DescribeDcdnDomainHttpCodeDataByLayerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnDomainHttpCodeDataByLayerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!$dara.isNull(request.layer)) {
      query["Layer"] = request.layer;
    }

    if (!$dara.isNull(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnDomainHttpCodeDataByLayer",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnDomainHttpCodeDataByLayerResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnDomainHttpCodeDataByLayerResponse({}));
  }

  /**
   * Queries the distribution of HTTP status codes by protocol.
   * 
   * @remarks
   * You can call this operation up to 20 times per second per account.
   * * You cannot query the distribution of HTTP status codes by IP protocol.
   * * If you do not specify the **StartTime** or **EndTime** parameter, the data that is collected within the last 24 hours is collected. If you specify both the **StartTime** and **EndTime** parameters, the data that is collected within the time range that you specify is collected.
   * **Time granularity**
   * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * |1 day|366 days|366 days|04:00 on the next day|
   * 
   * @param request - DescribeDcdnDomainHttpCodeDataByLayerRequest
   * @returns DescribeDcdnDomainHttpCodeDataByLayerResponse
   */
  async describeDcdnDomainHttpCodeDataByLayer(request: $_model.DescribeDcdnDomainHttpCodeDataByLayerRequest): Promise<$_model.DescribeDcdnDomainHttpCodeDataByLayerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnDomainHttpCodeDataByLayerWithOptions(request, runtime);
  }

  /**
   * Queries bandwidth of accelerated domain names for which Layer 4 acceleration is enabled. You can query the data that is collected over the last 90 days.
   * 
   * @remarks
   * > 
   * *   The bandwidth is measured in bit/s.
   * *   If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the last 24 hours. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
   * *   You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeDcdnDomainIpaBpsDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnDomainIpaBpsDataResponse
   */
  async describeDcdnDomainIpaBpsDataWithOptions(request: $_model.DescribeDcdnDomainIpaBpsDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnDomainIpaBpsDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.fixTimeGap)) {
      query["FixTimeGap"] = request.fixTimeGap;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!$dara.isNull(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.timeMerge)) {
      query["TimeMerge"] = request.timeMerge;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnDomainIpaBpsData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnDomainIpaBpsDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnDomainIpaBpsDataResponse({}));
  }

  /**
   * Queries bandwidth of accelerated domain names for which Layer 4 acceleration is enabled. You can query the data that is collected over the last 90 days.
   * 
   * @remarks
   * > 
   * *   The bandwidth is measured in bit/s.
   * *   If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the last 24 hours. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
   * *   You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeDcdnDomainIpaBpsDataRequest
   * @returns DescribeDcdnDomainIpaBpsDataResponse
   */
  async describeDcdnDomainIpaBpsData(request: $_model.DescribeDcdnDomainIpaBpsDataRequest): Promise<$_model.DescribeDcdnDomainIpaBpsDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnDomainIpaBpsDataWithOptions(request, runtime);
  }

  /**
   * Queries the number of IPA user connections.
   * 
   * @remarks
   *   You can call this operation up to 10 times per second per user.
   * *   If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the last 24 hours. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
   * *   The minimum time granularity at which the data is queried is 5 minutes. The maximum time range for a single query is 31 days. The period within which historical data is available is 366 days. The data latency is no more than 10 minutes.
   * 
   * @param request - DescribeDcdnDomainIpaConnDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnDomainIpaConnDataResponse
   */
  async describeDcdnDomainIpaConnDataWithOptions(request: $_model.DescribeDcdnDomainIpaConnDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnDomainIpaConnDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.splitBy)) {
      query["SplitBy"] = request.splitBy;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnDomainIpaConnData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnDomainIpaConnDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnDomainIpaConnDataResponse({}));
  }

  /**
   * Queries the number of IPA user connections.
   * 
   * @remarks
   *   You can call this operation up to 10 times per second per user.
   * *   If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the last 24 hours. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
   * *   The minimum time granularity at which the data is queried is 5 minutes. The maximum time range for a single query is 31 days. The period within which historical data is available is 366 days. The data latency is no more than 10 minutes.
   * 
   * @param request - DescribeDcdnDomainIpaConnDataRequest
   * @returns DescribeDcdnDomainIpaConnDataResponse
   */
  async describeDcdnDomainIpaConnData(request: $_model.DescribeDcdnDomainIpaConnDataRequest): Promise<$_model.DescribeDcdnDomainIpaConnDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnDomainIpaConnDataWithOptions(request, runtime);
  }

  /**
   * Queries traffic of one or more accelerated domain names for which Layer 4 acceleration is enabled. You can query the data that is collected over the last 90 days.
   * 
   * @remarks
   * > 
   * *   If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the last 24 hours. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
   * *   Unit: bytes.
   * *   You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeDcdnDomainIpaTrafficDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnDomainIpaTrafficDataResponse
   */
  async describeDcdnDomainIpaTrafficDataWithOptions(request: $_model.DescribeDcdnDomainIpaTrafficDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnDomainIpaTrafficDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.fixTimeGap)) {
      query["FixTimeGap"] = request.fixTimeGap;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!$dara.isNull(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.timeMerge)) {
      query["TimeMerge"] = request.timeMerge;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnDomainIpaTrafficData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnDomainIpaTrafficDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnDomainIpaTrafficDataResponse({}));
  }

  /**
   * Queries traffic of one or more accelerated domain names for which Layer 4 acceleration is enabled. You can query the data that is collected over the last 90 days.
   * 
   * @remarks
   * > 
   * *   If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the last 24 hours. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
   * *   Unit: bytes.
   * *   You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeDcdnDomainIpaTrafficDataRequest
   * @returns DescribeDcdnDomainIpaTrafficDataResponse
   */
  async describeDcdnDomainIpaTrafficData(request: $_model.DescribeDcdnDomainIpaTrafficDataRequest): Promise<$_model.DescribeDcdnDomainIpaTrafficDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnDomainIpaTrafficDataWithOptions(request, runtime);
  }

  /**
   * Queries the proportions of data usage of different Internet service providers (ISPs). You can query data within the last 90 days.
   * 
   * @remarks
   * > 
   * *   You can call this operation up to 100 times per second per account.
   * *   If **StartTime** is set but **EndTime** is not set, the data within the hour that starts from **StartTime** is queried.
   * *   If **EndTime** is set but **StartTime** is not set, the data within the last hour that precedes **EndTime** is queried.
   * *   You can query data of a domain name or all domain names that belong to your account.
   * *   You can view data that is collected over the last seven days. The interval at which data is queried is based on the time range specified by **StartTime** and **EndTime**.
   *     *   **If the time range is shorter than or equal to one hour**, data is queried every minute.
   *     *   **If the time range is longer than 1 hour but shorter than or equal to three days**, data is queried every five minutes.
   *     *   **If the time range is longer than three days but shorter than or equal to seven days**, data is queried every hour.
   * 
   * @param request - DescribeDcdnDomainIspDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnDomainIspDataResponse
   */
  async describeDcdnDomainIspDataWithOptions(request: $_model.DescribeDcdnDomainIspDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnDomainIspDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnDomainIspData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnDomainIspDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnDomainIspDataResponse({}));
  }

  /**
   * Queries the proportions of data usage of different Internet service providers (ISPs). You can query data within the last 90 days.
   * 
   * @remarks
   * > 
   * *   You can call this operation up to 100 times per second per account.
   * *   If **StartTime** is set but **EndTime** is not set, the data within the hour that starts from **StartTime** is queried.
   * *   If **EndTime** is set but **StartTime** is not set, the data within the last hour that precedes **EndTime** is queried.
   * *   You can query data of a domain name or all domain names that belong to your account.
   * *   You can view data that is collected over the last seven days. The interval at which data is queried is based on the time range specified by **StartTime** and **EndTime**.
   *     *   **If the time range is shorter than or equal to one hour**, data is queried every minute.
   *     *   **If the time range is longer than 1 hour but shorter than or equal to three days**, data is queried every five minutes.
   *     *   **If the time range is longer than three days but shorter than or equal to seven days**, data is queried every hour.
   * 
   * @param request - DescribeDcdnDomainIspDataRequest
   * @returns DescribeDcdnDomainIspDataResponse
   */
  async describeDcdnDomainIspData(request: $_model.DescribeDcdnDomainIspDataRequest): Promise<$_model.DescribeDcdnDomainIspDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnDomainIspDataWithOptions(request, runtime);
  }

  /**
   * Queries the address where you can download the log data of a domain name.
   * 
   * @remarks
   * > 
   * *   If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.********
   * *   You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeDcdnDomainLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnDomainLogResponse
   */
  async describeDcdnDomainLogWithOptions(request: $_model.DescribeDcdnDomainLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnDomainLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnDomainLog",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnDomainLogResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnDomainLogResponse({}));
  }

  /**
   * Queries the address where you can download the log data of a domain name.
   * 
   * @remarks
   * > 
   * *   If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.********
   * *   You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeDcdnDomainLogRequest
   * @returns DescribeDcdnDomainLogResponse
   */
  async describeDcdnDomainLog(request: $_model.DescribeDcdnDomainLogRequest): Promise<$_model.DescribeDcdnDomainLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnDomainLogWithOptions(request, runtime);
  }

  /**
   * DescribeDcdnDomainLogExTtl
   * 
   * @param request - DescribeDcdnDomainLogExTtlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnDomainLogExTtlResponse
   */
  async describeDcdnDomainLogExTtlWithOptions(request: $_model.DescribeDcdnDomainLogExTtlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnDomainLogExTtlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnDomainLogExTtl",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnDomainLogExTtlResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnDomainLogExTtlResponse({}));
  }

  /**
   * DescribeDcdnDomainLogExTtl
   * 
   * @param request - DescribeDcdnDomainLogExTtlRequest
   * @returns DescribeDcdnDomainLogExTtlResponse
   */
  async describeDcdnDomainLogExTtl(request: $_model.DescribeDcdnDomainLogExTtlRequest): Promise<$_model.DescribeDcdnDomainLogExTtlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnDomainLogExTtlWithOptions(request, runtime);
  }

  /**
   * Queries the billable items of accelerated domain names. The data is collected at least every 5 minutes. The billable items do not include non-request items.
   * 
   * @remarks
   *   If you do not set the StartTime or EndTime parameter, data within the last 10 minutes is queried. You can set both the StartTime and EndTime parameters to specify a time range.
   * *   You can specify one or more accelerated domain names. Separate domain names with commas (,).
   * *   You can query data within the last 90 days.
   * *   The time range cannot exceed 1 hour.
   * 
   * @param request - DescribeDcdnDomainMultiUsageDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnDomainMultiUsageDataResponse
   */
  async describeDcdnDomainMultiUsageDataWithOptions(request: $_model.DescribeDcdnDomainMultiUsageDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnDomainMultiUsageDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnDomainMultiUsageData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnDomainMultiUsageDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnDomainMultiUsageDataResponse({}));
  }

  /**
   * Queries the billable items of accelerated domain names. The data is collected at least every 5 minutes. The billable items do not include non-request items.
   * 
   * @remarks
   *   If you do not set the StartTime or EndTime parameter, data within the last 10 minutes is queried. You can set both the StartTime and EndTime parameters to specify a time range.
   * *   You can specify one or more accelerated domain names. Separate domain names with commas (,).
   * *   You can query data within the last 90 days.
   * *   The time range cannot exceed 1 hour.
   * 
   * @param request - DescribeDcdnDomainMultiUsageDataRequest
   * @returns DescribeDcdnDomainMultiUsageDataResponse
   */
  async describeDcdnDomainMultiUsageData(request: $_model.DescribeDcdnDomainMultiUsageDataRequest): Promise<$_model.DescribeDcdnDomainMultiUsageDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnDomainMultiUsageDataWithOptions(request, runtime);
  }

  /**
   * Queries the origin bandwidth data for one or more accelerated domain names. You can query data in the last 90 days.
   * 
   * @remarks
   * You can call this operation up to 100 times per second per account.
   * * If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the last 24 hours. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * |1 day|366 days|366 days|04:00 on the next day|
   * 
   * @param request - DescribeDcdnDomainOriginBpsDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnDomainOriginBpsDataResponse
   */
  async describeDcdnDomainOriginBpsDataWithOptions(request: $_model.DescribeDcdnDomainOriginBpsDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnDomainOriginBpsDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnDomainOriginBpsData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnDomainOriginBpsDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnDomainOriginBpsDataResponse({}));
  }

  /**
   * Queries the origin bandwidth data for one or more accelerated domain names. You can query data in the last 90 days.
   * 
   * @remarks
   * You can call this operation up to 100 times per second per account.
   * * If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the last 24 hours. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * |1 day|366 days|366 days|04:00 on the next day|
   * 
   * @param request - DescribeDcdnDomainOriginBpsDataRequest
   * @returns DescribeDcdnDomainOriginBpsDataResponse
   */
  async describeDcdnDomainOriginBpsData(request: $_model.DescribeDcdnDomainOriginBpsDataRequest): Promise<$_model.DescribeDcdnDomainOriginBpsDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnDomainOriginBpsDataWithOptions(request, runtime);
  }

  /**
   * Queries the back-to-origin traffic of one or more accelerated domain names.
   * 
   * @remarks
   * - You can call this operation up to 100 times per second per account.
   * - If you do not set the **StartTime** or **EndTime** parameters, the request returns the data collected in the last 24 hours. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity supported by the Interval parameter varies with the maximum time range per query. The following table describes the time period within which historical data is available and the data delay. 
   * | Time granularity | Maximum time range per query | Historical data available | Data delay |
   * | ---------------- | ---------------------------- | ------------------------- | ---------- |
   * | 5 minutes | 3 days | 93 days | 15 minutes |
   * | 1 hour | 31 days | 186 days | 4 hours |
   * | 1 day | 366 days | 366 days | 04:00 on the next day |
   * 
   * @param request - DescribeDcdnDomainOriginTrafficDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnDomainOriginTrafficDataResponse
   */
  async describeDcdnDomainOriginTrafficDataWithOptions(request: $_model.DescribeDcdnDomainOriginTrafficDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnDomainOriginTrafficDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnDomainOriginTrafficData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnDomainOriginTrafficDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnDomainOriginTrafficDataResponse({}));
  }

  /**
   * Queries the back-to-origin traffic of one or more accelerated domain names.
   * 
   * @remarks
   * - You can call this operation up to 100 times per second per account.
   * - If you do not set the **StartTime** or **EndTime** parameters, the request returns the data collected in the last 24 hours. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity supported by the Interval parameter varies with the maximum time range per query. The following table describes the time period within which historical data is available and the data delay. 
   * | Time granularity | Maximum time range per query | Historical data available | Data delay |
   * | ---------------- | ---------------------------- | ------------------------- | ---------- |
   * | 5 minutes | 3 days | 93 days | 15 minutes |
   * | 1 hour | 31 days | 186 days | 4 hours |
   * | 1 day | 366 days | 366 days | 04:00 on the next day |
   * 
   * @param request - DescribeDcdnDomainOriginTrafficDataRequest
   * @returns DescribeDcdnDomainOriginTrafficDataResponse
   */
  async describeDcdnDomainOriginTrafficData(request: $_model.DescribeDcdnDomainOriginTrafficDataRequest): Promise<$_model.DescribeDcdnDomainOriginTrafficDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnDomainOriginTrafficDataWithOptions(request, runtime);
  }

  /**
   * Queries the protocol type of IP Application Accelerator (IPA).
   * 
   * @remarks
   * > You can call this operation up to 10 times per second per account.
   * 
   * @param request - DescribeDcdnDomainPropertyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnDomainPropertyResponse
   */
  async describeDcdnDomainPropertyWithOptions(request: $_model.DescribeDcdnDomainPropertyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnDomainPropertyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnDomainProperty",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnDomainPropertyResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnDomainPropertyResponse({}));
  }

  /**
   * Queries the protocol type of IP Application Accelerator (IPA).
   * 
   * @remarks
   * > You can call this operation up to 10 times per second per account.
   * 
   * @param request - DescribeDcdnDomainPropertyRequest
   * @returns DescribeDcdnDomainPropertyResponse
   */
  async describeDcdnDomainProperty(request: $_model.DescribeDcdnDomainPropertyRequest): Promise<$_model.DescribeDcdnDomainPropertyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnDomainPropertyWithOptions(request, runtime);
  }

  /**
   * Queries page view (PV) data of an accelerated domain name. Data can be collected at minimum intervals of one hour.
   * 
   * @param request - DescribeDcdnDomainPvDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnDomainPvDataResponse
   */
  async describeDcdnDomainPvDataWithOptions(request: $_model.DescribeDcdnDomainPvDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnDomainPvDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnDomainPvData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnDomainPvDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnDomainPvDataResponse({}));
  }

  /**
   * Queries page view (PV) data of an accelerated domain name. Data can be collected at minimum intervals of one hour.
   * 
   * @param request - DescribeDcdnDomainPvDataRequest
   * @returns DescribeDcdnDomainPvDataResponse
   */
  async describeDcdnDomainPvData(request: $_model.DescribeDcdnDomainPvDataRequest): Promise<$_model.DescribeDcdnDomainPvDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnDomainPvDataWithOptions(request, runtime);
  }

  /**
   * Queries the number of requests to an accelerated domain name per second. You can query data in the last 90 days.
   * 
   * @remarks
   * You can call this operation up to 100 times per second per account.
   * * If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the last 24 hours. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * |1 day|366 days|366 days|04:00 on the next day|
   * 
   * @param request - DescribeDcdnDomainQpsDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnDomainQpsDataResponse
   */
  async describeDcdnDomainQpsDataWithOptions(request: $_model.DescribeDcdnDomainQpsDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnDomainQpsDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!$dara.isNull(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnDomainQpsData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnDomainQpsDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnDomainQpsDataResponse({}));
  }

  /**
   * Queries the number of requests to an accelerated domain name per second. You can query data in the last 90 days.
   * 
   * @remarks
   * You can call this operation up to 100 times per second per account.
   * * If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the last 24 hours. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * |1 day|366 days|366 days|04:00 on the next day|
   * 
   * @param request - DescribeDcdnDomainQpsDataRequest
   * @returns DescribeDcdnDomainQpsDataResponse
   */
  async describeDcdnDomainQpsData(request: $_model.DescribeDcdnDomainQpsDataRequest): Promise<$_model.DescribeDcdnDomainQpsDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnDomainQpsDataWithOptions(request, runtime);
  }

  /**
   * The number of queries per second in the Chinese mainland.
   * 
   * @remarks
   * You can call this operation up to 20 times per second per account.
   * * If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the last 24 hours. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the time range to query, as described in the following table.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * |1 day|366 days|366 days|04:00 on the next day|
   * 
   * @param request - DescribeDcdnDomainQpsDataByLayerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnDomainQpsDataByLayerResponse
   */
  async describeDcdnDomainQpsDataByLayerWithOptions(request: $_model.DescribeDcdnDomainQpsDataByLayerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnDomainQpsDataByLayerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!$dara.isNull(request.layer)) {
      query["Layer"] = request.layer;
    }

    if (!$dara.isNull(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnDomainQpsDataByLayer",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnDomainQpsDataByLayerResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnDomainQpsDataByLayerResponse({}));
  }

  /**
   * The number of queries per second in the Chinese mainland.
   * 
   * @remarks
   * You can call this operation up to 20 times per second per account.
   * * If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the last 24 hours. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the time range to query, as described in the following table.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * |1 day|366 days|366 days|04:00 on the next day|
   * 
   * @param request - DescribeDcdnDomainQpsDataByLayerRequest
   * @returns DescribeDcdnDomainQpsDataByLayerResponse
   */
  async describeDcdnDomainQpsDataByLayer(request: $_model.DescribeDcdnDomainQpsDataByLayerRequest): Promise<$_model.DescribeDcdnDomainQpsDataByLayerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnDomainQpsDataByLayerWithOptions(request, runtime);
  }

  /**
   * Queries the real-time network bandwidth of a domain name.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account.
   * * If you do not specify **StartTime** or **EndTime**, the request returns the data collected in the last hour by default. If you specify both parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |1 minute|1 hour|7 days|5 minutes|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|3 to 4 hours|
   * 
   * @param request - DescribeDcdnDomainRealTimeBpsDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnDomainRealTimeBpsDataResponse
   */
  async describeDcdnDomainRealTimeBpsDataWithOptions(request: $_model.DescribeDcdnDomainRealTimeBpsDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnDomainRealTimeBpsDataResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnDomainRealTimeBpsData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnDomainRealTimeBpsDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnDomainRealTimeBpsDataResponse({}));
  }

  /**
   * Queries the real-time network bandwidth of a domain name.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account.
   * * If you do not specify **StartTime** or **EndTime**, the request returns the data collected in the last hour by default. If you specify both parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |1 minute|1 hour|7 days|5 minutes|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|3 to 4 hours|
   * 
   * @param request - DescribeDcdnDomainRealTimeBpsDataRequest
   * @returns DescribeDcdnDomainRealTimeBpsDataResponse
   */
  async describeDcdnDomainRealTimeBpsData(request: $_model.DescribeDcdnDomainRealTimeBpsDataRequest): Promise<$_model.DescribeDcdnDomainRealTimeBpsDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnDomainRealTimeBpsDataWithOptions(request, runtime);
  }

  /**
   * Queries byte hit ratios at a time granularity of 1 minute.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account.
   * * The network traffic destined for different domain names may be redirected to the same origin server. Therefore, the byte hit ratios may be inaccurate. The accuracy of query results is based on the actual configurations.
   * * If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the last hour. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay.
   * | Time granularity | Maximum time range per query | Historical data available | Data delay |
   * |----|------|-----|--------|
   * | 1 minute | 1 hour | 7 days | 5 minutes |
   * | 5 minutes | 3 days | 93 days | 15 minutes |
   * | 1 hour | 31 days | 186 days | 4 hours |
   * 
   * @param request - DescribeDcdnDomainRealTimeByteHitRateDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnDomainRealTimeByteHitRateDataResponse
   */
  async describeDcdnDomainRealTimeByteHitRateDataWithOptions(request: $_model.DescribeDcdnDomainRealTimeByteHitRateDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnDomainRealTimeByteHitRateDataResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnDomainRealTimeByteHitRateData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnDomainRealTimeByteHitRateDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnDomainRealTimeByteHitRateDataResponse({}));
  }

  /**
   * Queries byte hit ratios at a time granularity of 1 minute.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account.
   * * The network traffic destined for different domain names may be redirected to the same origin server. Therefore, the byte hit ratios may be inaccurate. The accuracy of query results is based on the actual configurations.
   * * If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the last hour. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay.
   * | Time granularity | Maximum time range per query | Historical data available | Data delay |
   * |----|------|-----|--------|
   * | 1 minute | 1 hour | 7 days | 5 minutes |
   * | 5 minutes | 3 days | 93 days | 15 minutes |
   * | 1 hour | 31 days | 186 days | 4 hours |
   * 
   * @param request - DescribeDcdnDomainRealTimeByteHitRateDataRequest
   * @returns DescribeDcdnDomainRealTimeByteHitRateDataResponse
   */
  async describeDcdnDomainRealTimeByteHitRateData(request: $_model.DescribeDcdnDomainRealTimeByteHitRateDataRequest): Promise<$_model.DescribeDcdnDomainRealTimeByteHitRateDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnDomainRealTimeByteHitRateDataWithOptions(request, runtime);
  }

  /**
   * Queries traffic usage through each Internet service provider (ISP) and the number of visits in each region. The resolution of the data is one minute. The maximum time range to query for this operation is 10 minutes.
   * 
   * @remarks
   * > 
   * > - You can call this operation up to 10 times per second per account.
   * > - This operation is available only to users whose daily peak bandwidth value is higher than 1 Gbit/s. If you meet this requirement, you can [submit a ticket](https://smartservice.console.aliyun.com/service/create-ticket-intl) to apply for permissions to use this operation.
   * 
   * @param request - DescribeDcdnDomainRealTimeDetailDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnDomainRealTimeDetailDataResponse
   */
  async describeDcdnDomainRealTimeDetailDataWithOptions(request: $_model.DescribeDcdnDomainRealTimeDetailDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnDomainRealTimeDetailDataResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnDomainRealTimeDetailData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnDomainRealTimeDetailDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnDomainRealTimeDetailDataResponse({}));
  }

  /**
   * Queries traffic usage through each Internet service provider (ISP) and the number of visits in each region. The resolution of the data is one minute. The maximum time range to query for this operation is 10 minutes.
   * 
   * @remarks
   * > 
   * > - You can call this operation up to 10 times per second per account.
   * > - This operation is available only to users whose daily peak bandwidth value is higher than 1 Gbit/s. If you meet this requirement, you can [submit a ticket](https://smartservice.console.aliyun.com/service/create-ticket-intl) to apply for permissions to use this operation.
   * 
   * @param request - DescribeDcdnDomainRealTimeDetailDataRequest
   * @returns DescribeDcdnDomainRealTimeDetailDataResponse
   */
  async describeDcdnDomainRealTimeDetailData(request: $_model.DescribeDcdnDomainRealTimeDetailDataRequest): Promise<$_model.DescribeDcdnDomainRealTimeDetailDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnDomainRealTimeDetailDataWithOptions(request, runtime);
  }

  /**
   * Queries the total number and proportions of HTTP status codes returned from one or more accelerated domain names.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account.
   * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last hour. If you set both the StartTime and EndTime parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |1 minute|1 hour|7 days|5 minutes|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * 
   * @param request - DescribeDcdnDomainRealTimeHttpCodeDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnDomainRealTimeHttpCodeDataResponse
   */
  async describeDcdnDomainRealTimeHttpCodeDataWithOptions(request: $_model.DescribeDcdnDomainRealTimeHttpCodeDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnDomainRealTimeHttpCodeDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!$dara.isNull(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnDomainRealTimeHttpCodeData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnDomainRealTimeHttpCodeDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnDomainRealTimeHttpCodeDataResponse({}));
  }

  /**
   * Queries the total number and proportions of HTTP status codes returned from one or more accelerated domain names.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account.
   * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last hour. If you set both the StartTime and EndTime parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |1 minute|1 hour|7 days|5 minutes|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * 
   * @param request - DescribeDcdnDomainRealTimeHttpCodeDataRequest
   * @returns DescribeDcdnDomainRealTimeHttpCodeDataResponse
   */
  async describeDcdnDomainRealTimeHttpCodeData(request: $_model.DescribeDcdnDomainRealTimeHttpCodeDataRequest): Promise<$_model.DescribeDcdnDomainRealTimeHttpCodeDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnDomainRealTimeHttpCodeDataWithOptions(request, runtime);
  }

  /**
   * The number of QPS for one or more accelerated domain names is queried. Data is collected every minute.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account.
   * * If you do not specify the StartTime or EndTime parameter, the request returns the data collected in the last hour. If you specify both the StartTime and EndTime parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |1 minute|1 hour|7 days|5 minutes|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * 
   * @param request - DescribeDcdnDomainRealTimeQpsDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnDomainRealTimeQpsDataResponse
   */
  async describeDcdnDomainRealTimeQpsDataWithOptions(request: $_model.DescribeDcdnDomainRealTimeQpsDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnDomainRealTimeQpsDataResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnDomainRealTimeQpsData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnDomainRealTimeQpsDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnDomainRealTimeQpsDataResponse({}));
  }

  /**
   * The number of QPS for one or more accelerated domain names is queried. Data is collected every minute.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account.
   * * If you do not specify the StartTime or EndTime parameter, the request returns the data collected in the last hour. If you specify both the StartTime and EndTime parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |1 minute|1 hour|7 days|5 minutes|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * 
   * @param request - DescribeDcdnDomainRealTimeQpsDataRequest
   * @returns DescribeDcdnDomainRealTimeQpsDataResponse
   */
  async describeDcdnDomainRealTimeQpsData(request: $_model.DescribeDcdnDomainRealTimeQpsDataRequest): Promise<$_model.DescribeDcdnDomainRealTimeQpsDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnDomainRealTimeQpsDataWithOptions(request, runtime);
  }

  /**
   * Queries the request hit rates with a time granularity of 1 minute.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per user.
   * * The network traffic destined for different domain names may be redirected to the same origin server. Therefore, the byte hit ratios may be inaccurate. The accuracy of query results is based on the actual configurations.
   * * If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the last hour. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
   * **Time granularity** The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |1 minute|1 hour|7 days|5 minutes|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * 
   * @param request - DescribeDcdnDomainRealTimeReqHitRateDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnDomainRealTimeReqHitRateDataResponse
   */
  async describeDcdnDomainRealTimeReqHitRateDataWithOptions(request: $_model.DescribeDcdnDomainRealTimeReqHitRateDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnDomainRealTimeReqHitRateDataResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnDomainRealTimeReqHitRateData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnDomainRealTimeReqHitRateDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnDomainRealTimeReqHitRateDataResponse({}));
  }

  /**
   * Queries the request hit rates with a time granularity of 1 minute.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per user.
   * * The network traffic destined for different domain names may be redirected to the same origin server. Therefore, the byte hit ratios may be inaccurate. The accuracy of query results is based on the actual configurations.
   * * If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the last hour. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
   * **Time granularity** The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |1 minute|1 hour|7 days|5 minutes|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * 
   * @param request - DescribeDcdnDomainRealTimeReqHitRateDataRequest
   * @returns DescribeDcdnDomainRealTimeReqHitRateDataResponse
   */
  async describeDcdnDomainRealTimeReqHitRateData(request: $_model.DescribeDcdnDomainRealTimeReqHitRateDataRequest): Promise<$_model.DescribeDcdnDomainRealTimeReqHitRateDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnDomainRealTimeReqHitRateDataWithOptions(request, runtime);
  }

  /**
   * Queries the bandwidth data of back-to-origin requests. Data is collected every minute. You can query data collected in the last 7 days.
   * 
   * @remarks
   *   You can call this operation up to 10 times per second per account.
   * *   If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last hour. If you set both the parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay.
   * | Time granularity | Maximum time range per query | Historical data available | Data delay | 
   * |-----|-----|-----|--------| 
   * | 1 minute | 1 hour | 7 days | 5 minutes | 
   * | 5 minutes | 3 days | 93 days | 15 minutes | | 1 hour | 31 days | 186 days | 4 hours |
   * 
   * @param request - DescribeDcdnDomainRealTimeSrcBpsDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnDomainRealTimeSrcBpsDataResponse
   */
  async describeDcdnDomainRealTimeSrcBpsDataWithOptions(request: $_model.DescribeDcdnDomainRealTimeSrcBpsDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnDomainRealTimeSrcBpsDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnDomainRealTimeSrcBpsData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnDomainRealTimeSrcBpsDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnDomainRealTimeSrcBpsDataResponse({}));
  }

  /**
   * Queries the bandwidth data of back-to-origin requests. Data is collected every minute. You can query data collected in the last 7 days.
   * 
   * @remarks
   *   You can call this operation up to 10 times per second per account.
   * *   If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last hour. If you set both the parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay.
   * | Time granularity | Maximum time range per query | Historical data available | Data delay | 
   * |-----|-----|-----|--------| 
   * | 1 minute | 1 hour | 7 days | 5 minutes | 
   * | 5 minutes | 3 days | 93 days | 15 minutes | | 1 hour | 31 days | 186 days | 4 hours |
   * 
   * @param request - DescribeDcdnDomainRealTimeSrcBpsDataRequest
   * @returns DescribeDcdnDomainRealTimeSrcBpsDataResponse
   */
  async describeDcdnDomainRealTimeSrcBpsData(request: $_model.DescribeDcdnDomainRealTimeSrcBpsDataRequest): Promise<$_model.DescribeDcdnDomainRealTimeSrcBpsDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnDomainRealTimeSrcBpsDataWithOptions(request, runtime);
  }

  /**
   * Queries the proportions of HTTP status codes based on back-to-origin statistics with a time granularity of one minute.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account.
   * * If you do not specify the StartTime or EndTime parameter, the request returns the data collected in the last hour. If you specify both the StartTime and EndTime parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |1 minute|1 hour|7 days|5 minutes|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * 
   * @param request - DescribeDcdnDomainRealTimeSrcHttpCodeDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnDomainRealTimeSrcHttpCodeDataResponse
   */
  async describeDcdnDomainRealTimeSrcHttpCodeDataWithOptions(request: $_model.DescribeDcdnDomainRealTimeSrcHttpCodeDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnDomainRealTimeSrcHttpCodeDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!$dara.isNull(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnDomainRealTimeSrcHttpCodeData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnDomainRealTimeSrcHttpCodeDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnDomainRealTimeSrcHttpCodeDataResponse({}));
  }

  /**
   * Queries the proportions of HTTP status codes based on back-to-origin statistics with a time granularity of one minute.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account.
   * * If you do not specify the StartTime or EndTime parameter, the request returns the data collected in the last hour. If you specify both the StartTime and EndTime parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |1 minute|1 hour|7 days|5 minutes|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * 
   * @param request - DescribeDcdnDomainRealTimeSrcHttpCodeDataRequest
   * @returns DescribeDcdnDomainRealTimeSrcHttpCodeDataResponse
   */
  async describeDcdnDomainRealTimeSrcHttpCodeData(request: $_model.DescribeDcdnDomainRealTimeSrcHttpCodeDataRequest): Promise<$_model.DescribeDcdnDomainRealTimeSrcHttpCodeDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnDomainRealTimeSrcHttpCodeDataWithOptions(request, runtime);
  }

  /**
   * Queries the origin traffic monitoring data for an accelerated domain name. Data is collected every minute. You can query data in the last 90 days.
   * 
   * @remarks
   * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last hour. If you set both the StartTime and EndTime parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |1 minute|1 hour|7 days|5 minutes|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * 
   * @param request - DescribeDcdnDomainRealTimeSrcTrafficDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnDomainRealTimeSrcTrafficDataResponse
   */
  async describeDcdnDomainRealTimeSrcTrafficDataWithOptions(request: $_model.DescribeDcdnDomainRealTimeSrcTrafficDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnDomainRealTimeSrcTrafficDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnDomainRealTimeSrcTrafficData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnDomainRealTimeSrcTrafficDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnDomainRealTimeSrcTrafficDataResponse({}));
  }

  /**
   * Queries the origin traffic monitoring data for an accelerated domain name. Data is collected every minute. You can query data in the last 90 days.
   * 
   * @remarks
   * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last hour. If you set both the StartTime and EndTime parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |1 minute|1 hour|7 days|5 minutes|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * 
   * @param request - DescribeDcdnDomainRealTimeSrcTrafficDataRequest
   * @returns DescribeDcdnDomainRealTimeSrcTrafficDataResponse
   */
  async describeDcdnDomainRealTimeSrcTrafficData(request: $_model.DescribeDcdnDomainRealTimeSrcTrafficDataRequest): Promise<$_model.DescribeDcdnDomainRealTimeSrcTrafficDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnDomainRealTimeSrcTrafficDataWithOptions(request, runtime);
  }

  /**
   * Queries the traffic monitoring data of an accelerated domain name. Data is collected every minute.
   * 
   * @remarks
   * You can call this operation up to 50 times per second per user.
   * **Time granularity**
   * The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |1 minute|1 hour|7 days|5 minutes|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * 
   * @param request - DescribeDcdnDomainRealTimeTrafficDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnDomainRealTimeTrafficDataResponse
   */
  async describeDcdnDomainRealTimeTrafficDataWithOptions(request: $_model.DescribeDcdnDomainRealTimeTrafficDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnDomainRealTimeTrafficDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnDomainRealTimeTrafficData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnDomainRealTimeTrafficDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnDomainRealTimeTrafficDataResponse({}));
  }

  /**
   * Queries the traffic monitoring data of an accelerated domain name. Data is collected every minute.
   * 
   * @remarks
   * You can call this operation up to 50 times per second per user.
   * **Time granularity**
   * The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |1 minute|1 hour|7 days|5 minutes|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * 
   * @param request - DescribeDcdnDomainRealTimeTrafficDataRequest
   * @returns DescribeDcdnDomainRealTimeTrafficDataResponse
   */
  async describeDcdnDomainRealTimeTrafficData(request: $_model.DescribeDcdnDomainRealTimeTrafficDataRequest): Promise<$_model.DescribeDcdnDomainRealTimeTrafficDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnDomainRealTimeTrafficDataWithOptions(request, runtime);
  }

  /**
   * Queries regional distribution of users. Data is collected every day. You can query data within the last 90 days.
   * 
   * @remarks
   * > 
   * *   If you do not specify the StartTime and EndTime parameters, the data within the last 24 hours is queried. If you specify the StartTime and EndTime parameters, the data within the specified time range is queried.
   * *   You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeDcdnDomainRegionDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnDomainRegionDataResponse
   */
  async describeDcdnDomainRegionDataWithOptions(request: $_model.DescribeDcdnDomainRegionDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnDomainRegionDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnDomainRegionData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnDomainRegionDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnDomainRegionDataResponse({}));
  }

  /**
   * Queries regional distribution of users. Data is collected every day. You can query data within the last 90 days.
   * 
   * @remarks
   * > 
   * *   If you do not specify the StartTime and EndTime parameters, the data within the last 24 hours is queried. If you specify the StartTime and EndTime parameters, the data within the specified time range is queried.
   * *   You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeDcdnDomainRegionDataRequest
   * @returns DescribeDcdnDomainRegionDataResponse
   */
  async describeDcdnDomainRegionData(request: $_model.DescribeDcdnDomainRegionDataRequest): Promise<$_model.DescribeDcdnDomainRegionDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnDomainRegionDataWithOptions(request, runtime);
  }

  /**
   * Queries the environment configuration in the canary release environment.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribeDcdnDomainStagingConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnDomainStagingConfigResponse
   */
  async describeDcdnDomainStagingConfigWithOptions(request: $_model.DescribeDcdnDomainStagingConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnDomainStagingConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.functionNames)) {
      query["FunctionNames"] = request.functionNames;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnDomainStagingConfig",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnDomainStagingConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnDomainStagingConfigResponse({}));
  }

  /**
   * Queries the environment configuration in the canary release environment.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribeDcdnDomainStagingConfigRequest
   * @returns DescribeDcdnDomainStagingConfigResponse
   */
  async describeDcdnDomainStagingConfig(request: $_model.DescribeDcdnDomainStagingConfigRequest): Promise<$_model.DescribeDcdnDomainStagingConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnDomainStagingConfigWithOptions(request, runtime);
  }

  /**
   * Queries and sorts frequently requested web pages on a specified day. You can query data collected within the last 90 days.
   * 
   * @remarks
   *   If you do not set the StartTime parameter, the data on the previous day is queried.
   * *   You can specify only one domain name.
   * 
   * @param request - DescribeDcdnDomainTopReferVisitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnDomainTopReferVisitResponse
   */
  async describeDcdnDomainTopReferVisitWithOptions(request: $_model.DescribeDcdnDomainTopReferVisitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnDomainTopReferVisitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnDomainTopReferVisit",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnDomainTopReferVisitResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnDomainTopReferVisitResponse({}));
  }

  /**
   * Queries and sorts frequently requested web pages on a specified day. You can query data collected within the last 90 days.
   * 
   * @remarks
   *   If you do not set the StartTime parameter, the data on the previous day is queried.
   * *   You can specify only one domain name.
   * 
   * @param request - DescribeDcdnDomainTopReferVisitRequest
   * @returns DescribeDcdnDomainTopReferVisitResponse
   */
  async describeDcdnDomainTopReferVisit(request: $_model.DescribeDcdnDomainTopReferVisitRequest): Promise<$_model.DescribeDcdnDomainTopReferVisitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnDomainTopReferVisitWithOptions(request, runtime);
  }

  /**
   * Queries frequently requested URLs on a day.
   * 
   * @remarks
   * > You can query data in the last seven days.
   * 
   * @param request - DescribeDcdnDomainTopUrlVisitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnDomainTopUrlVisitResponse
   */
  async describeDcdnDomainTopUrlVisitWithOptions(request: $_model.DescribeDcdnDomainTopUrlVisitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnDomainTopUrlVisitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnDomainTopUrlVisit",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnDomainTopUrlVisitResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnDomainTopUrlVisitResponse({}));
  }

  /**
   * Queries frequently requested URLs on a day.
   * 
   * @remarks
   * > You can query data in the last seven days.
   * 
   * @param request - DescribeDcdnDomainTopUrlVisitRequest
   * @returns DescribeDcdnDomainTopUrlVisitResponse
   */
  async describeDcdnDomainTopUrlVisit(request: $_model.DescribeDcdnDomainTopUrlVisitRequest): Promise<$_model.DescribeDcdnDomainTopUrlVisitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnDomainTopUrlVisitWithOptions(request, runtime);
  }

  /**
   * Queries the network traffic of accelerated domain names. You can query data collected in the last 90 days.
   * 
   * @remarks
   * If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the last 24 hours. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
   * * You can call this operation up to 100 times per second per account.
   * **Time granularity**
   * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * |1 day|366 days|366 days|04:00 on the next day|
   * 
   * @param request - DescribeDcdnDomainTrafficDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnDomainTrafficDataResponse
   */
  async describeDcdnDomainTrafficDataWithOptions(request: $_model.DescribeDcdnDomainTrafficDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnDomainTrafficDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!$dara.isNull(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnDomainTrafficData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnDomainTrafficDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnDomainTrafficDataResponse({}));
  }

  /**
   * Queries the network traffic of accelerated domain names. You can query data collected in the last 90 days.
   * 
   * @remarks
   * If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the last 24 hours. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
   * * You can call this operation up to 100 times per second per account.
   * **Time granularity**
   * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * |1 day|366 days|366 days|04:00 on the next day|
   * 
   * @param request - DescribeDcdnDomainTrafficDataRequest
   * @returns DescribeDcdnDomainTrafficDataResponse
   */
  async describeDcdnDomainTrafficData(request: $_model.DescribeDcdnDomainTrafficDataRequest): Promise<$_model.DescribeDcdnDomainTrafficDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnDomainTrafficDataWithOptions(request, runtime);
  }

  /**
   * Queries resource usage about domain names in a billable region.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account.
   * * Usage data includes traffic (measured in bytes), bandwidth values (measured in bit/s), and the number of requests.
   * **Time granularity**
   * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * |1 day|366 days|366 days|04:00 on the next day|
   * 
   * @param request - DescribeDcdnDomainUsageDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnDomainUsageDataResponse
   */
  async describeDcdnDomainUsageDataWithOptions(request: $_model.DescribeDcdnDomainUsageDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnDomainUsageDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.area)) {
      query["Area"] = request.area;
    }

    if (!$dara.isNull(request.dataProtocol)) {
      query["DataProtocol"] = request.dataProtocol;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.field)) {
      query["Field"] = request.field;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnDomainUsageData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnDomainUsageDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnDomainUsageDataResponse({}));
  }

  /**
   * Queries resource usage about domain names in a billable region.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account.
   * * Usage data includes traffic (measured in bytes), bandwidth values (measured in bit/s), and the number of requests.
   * **Time granularity**
   * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * |1 day|366 days|366 days|04:00 on the next day|
   * 
   * @param request - DescribeDcdnDomainUsageDataRequest
   * @returns DescribeDcdnDomainUsageDataResponse
   */
  async describeDcdnDomainUsageData(request: $_model.DescribeDcdnDomainUsageDataRequest): Promise<$_model.DescribeDcdnDomainUsageDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnDomainUsageDataWithOptions(request, runtime);
  }

  /**
   * Queries the number of unique visitors (UVs) to an accelerated domain name. Data is collected every hour. You can query data within the last 90 days.
   * 
   * @remarks
   *   If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
   * *   You can specify only one accelerated domain name or all the accelerated domain names that belong to your Alibaba Cloud account.
   * 
   * @param request - DescribeDcdnDomainUvDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnDomainUvDataResponse
   */
  async describeDcdnDomainUvDataWithOptions(request: $_model.DescribeDcdnDomainUvDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnDomainUvDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnDomainUvData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnDomainUvDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnDomainUvDataResponse({}));
  }

  /**
   * Queries the number of unique visitors (UVs) to an accelerated domain name. Data is collected every hour. You can query data within the last 90 days.
   * 
   * @remarks
   *   If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
   * *   You can specify only one accelerated domain name or all the accelerated domain names that belong to your Alibaba Cloud account.
   * 
   * @param request - DescribeDcdnDomainUvDataRequest
   * @returns DescribeDcdnDomainUvDataResponse
   */
  async describeDcdnDomainUvData(request: $_model.DescribeDcdnDomainUvDataRequest): Promise<$_model.DescribeDcdnDomainUvDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnDomainUvDataWithOptions(request, runtime);
  }

  /**
   * Queries bandwidth of one or more accelerated domain names for which WebSocket is enabled. You can query the data that is collected over the last 90 days.
   * 
   * @remarks
   * You can call this operation up to 100 times per second per account.
   * * If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the last 24 hours. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * |1 day|366 days|366 days|04:00 on the next day|
   * 
   * @param request - DescribeDcdnDomainWebsocketBpsDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnDomainWebsocketBpsDataResponse
   */
  async describeDcdnDomainWebsocketBpsDataWithOptions(request: $_model.DescribeDcdnDomainWebsocketBpsDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnDomainWebsocketBpsDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!$dara.isNull(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnDomainWebsocketBpsData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnDomainWebsocketBpsDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnDomainWebsocketBpsDataResponse({}));
  }

  /**
   * Queries bandwidth of one or more accelerated domain names for which WebSocket is enabled. You can query the data that is collected over the last 90 days.
   * 
   * @remarks
   * You can call this operation up to 100 times per second per account.
   * * If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the last 24 hours. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * |1 day|366 days|366 days|04:00 on the next day|
   * 
   * @param request - DescribeDcdnDomainWebsocketBpsDataRequest
   * @returns DescribeDcdnDomainWebsocketBpsDataResponse
   */
  async describeDcdnDomainWebsocketBpsData(request: $_model.DescribeDcdnDomainWebsocketBpsDataRequest): Promise<$_model.DescribeDcdnDomainWebsocketBpsDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnDomainWebsocketBpsDataWithOptions(request, runtime);
  }

  /**
   * The total number and proportions of HTTP status codes returned from one or more accelerated domain names for which WebSocket is enabled are queried. Data can be collected at minimum intervals of 5 minutes.
   * 
   * @remarks
   * You can call this operation up to 100 times per second per account.
   * **Time granularity**
   * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the time range to query, as described in the following table.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * |1 day|366 days|366 days|04:00 on the next day|
   * 
   * @param request - DescribeDcdnDomainWebsocketHttpCodeDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnDomainWebsocketHttpCodeDataResponse
   */
  async describeDcdnDomainWebsocketHttpCodeDataWithOptions(request: $_model.DescribeDcdnDomainWebsocketHttpCodeDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnDomainWebsocketHttpCodeDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!$dara.isNull(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnDomainWebsocketHttpCodeData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnDomainWebsocketHttpCodeDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnDomainWebsocketHttpCodeDataResponse({}));
  }

  /**
   * The total number and proportions of HTTP status codes returned from one or more accelerated domain names for which WebSocket is enabled are queried. Data can be collected at minimum intervals of 5 minutes.
   * 
   * @remarks
   * You can call this operation up to 100 times per second per account.
   * **Time granularity**
   * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the time range to query, as described in the following table.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * |1 day|366 days|366 days|04:00 on the next day|
   * 
   * @param request - DescribeDcdnDomainWebsocketHttpCodeDataRequest
   * @returns DescribeDcdnDomainWebsocketHttpCodeDataResponse
   */
  async describeDcdnDomainWebsocketHttpCodeData(request: $_model.DescribeDcdnDomainWebsocketHttpCodeDataRequest): Promise<$_model.DescribeDcdnDomainWebsocketHttpCodeDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnDomainWebsocketHttpCodeDataWithOptions(request, runtime);
  }

  /**
   * Queries the traffic monitoring data for an accelerated domain name with WebSocket enabled. You can query data in the last 90 days.
   * 
   * @remarks
   * You can call this operation up to 100 times per second per account.
   * * If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the last 24 hours. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * |1 day|366 days|366 days|04:00 on the next day|
   * 
   * @param request - DescribeDcdnDomainWebsocketTrafficDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnDomainWebsocketTrafficDataResponse
   */
  async describeDcdnDomainWebsocketTrafficDataWithOptions(request: $_model.DescribeDcdnDomainWebsocketTrafficDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnDomainWebsocketTrafficDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!$dara.isNull(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnDomainWebsocketTrafficData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnDomainWebsocketTrafficDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnDomainWebsocketTrafficDataResponse({}));
  }

  /**
   * Queries the traffic monitoring data for an accelerated domain name with WebSocket enabled. You can query data in the last 90 days.
   * 
   * @remarks
   * You can call this operation up to 100 times per second per account.
   * * If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the last 24 hours. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * |1 day|366 days|366 days|04:00 on the next day|
   * 
   * @param request - DescribeDcdnDomainWebsocketTrafficDataRequest
   * @returns DescribeDcdnDomainWebsocketTrafficDataResponse
   */
  async describeDcdnDomainWebsocketTrafficData(request: $_model.DescribeDcdnDomainWebsocketTrafficDataRequest): Promise<$_model.DescribeDcdnDomainWebsocketTrafficDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnDomainWebsocketTrafficDataWithOptions(request, runtime);
  }

  /**
   * Queries DCDN-accelerated domain names by origin server.
   * 
   * @param request - DescribeDcdnDomainsBySourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnDomainsBySourceResponse
   */
  async describeDcdnDomainsBySourceWithOptions(request: $_model.DescribeDcdnDomainsBySourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnDomainsBySourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.sources)) {
      query["Sources"] = request.sources;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnDomainsBySource",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnDomainsBySourceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnDomainsBySourceResponse({}));
  }

  /**
   * Queries DCDN-accelerated domain names by origin server.
   * 
   * @param request - DescribeDcdnDomainsBySourceRequest
   * @returns DescribeDcdnDomainsBySourceResponse
   */
  async describeDcdnDomainsBySource(request: $_model.DescribeDcdnDomainsBySourceRequest): Promise<$_model.DescribeDcdnDomainsBySourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnDomainsBySourceWithOptions(request, runtime);
  }

  /**
   * Queries the number of times that a routine is executed within a specified period of time.
   * 
   * @remarks
   *   You can call this operation up to 10 times per second per account.
   * *   The minimum time granularity for a query is 1 hour. The maximum time span for a query is 24 hours. The time period within which historical data is available for a query is 366 days.
   * 
   * @param request - DescribeDcdnErUsageDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnErUsageDataResponse
   */
  async describeDcdnErUsageDataWithOptions(request: $_model.DescribeDcdnErUsageDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnErUsageDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.routineID)) {
      query["RoutineID"] = request.routineID;
    }

    if (!$dara.isNull(request.spec)) {
      query["Spec"] = request.spec;
    }

    if (!$dara.isNull(request.splitBy)) {
      query["SplitBy"] = request.splitBy;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnErUsageData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnErUsageDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnErUsageDataResponse({}));
  }

  /**
   * Queries the number of times that a routine is executed within a specified period of time.
   * 
   * @remarks
   *   You can call this operation up to 10 times per second per account.
   * *   The minimum time granularity for a query is 1 hour. The maximum time span for a query is 24 hours. The time period within which historical data is available for a query is 366 days.
   * 
   * @param request - DescribeDcdnErUsageDataRequest
   * @returns DescribeDcdnErUsageDataResponse
   */
  async describeDcdnErUsageData(request: $_model.DescribeDcdnErUsageDataRequest): Promise<$_model.DescribeDcdnErUsageDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnErUsageDataWithOptions(request, runtime);
  }

  /**
   * Queries the configurations of blocked IP addresses.
   * 
   * @remarks
   * > *   If you specify IP addresses or CIDR blocks, IP addresses that are effective and the corresponding expiration time are returned. If you do not specify IP addresses or CIDR blocks, all effective IP addresses and the corresponding expiration time are returned.
   * > *   The results are written to OSS and returned as OSS URLs. The content in OSS objects is in the format of `IP address-Corresponding expiration time`. The expiration time is in the YYYY-MM-DD hh:mm:ss format.
   * > *   You can share OSS URLs with others. The shared URLs are valid for three days.
   * 
   * @param request - DescribeDcdnFullDomainsBlockIPConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnFullDomainsBlockIPConfigResponse
   */
  async describeDcdnFullDomainsBlockIPConfigWithOptions(request: $_model.DescribeDcdnFullDomainsBlockIPConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnFullDomainsBlockIPConfigResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnFullDomainsBlockIPConfig",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnFullDomainsBlockIPConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnFullDomainsBlockIPConfigResponse({}));
  }

  /**
   * Queries the configurations of blocked IP addresses.
   * 
   * @remarks
   * > *   If you specify IP addresses or CIDR blocks, IP addresses that are effective and the corresponding expiration time are returned. If you do not specify IP addresses or CIDR blocks, all effective IP addresses and the corresponding expiration time are returned.
   * > *   The results are written to OSS and returned as OSS URLs. The content in OSS objects is in the format of `IP address-Corresponding expiration time`. The expiration time is in the YYYY-MM-DD hh:mm:ss format.
   * > *   You can share OSS URLs with others. The shared URLs are valid for three days.
   * 
   * @param request - DescribeDcdnFullDomainsBlockIPConfigRequest
   * @returns DescribeDcdnFullDomainsBlockIPConfigResponse
   */
  async describeDcdnFullDomainsBlockIPConfig(request: $_model.DescribeDcdnFullDomainsBlockIPConfigRequest): Promise<$_model.DescribeDcdnFullDomainsBlockIPConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnFullDomainsBlockIPConfigWithOptions(request, runtime);
  }

  /**
   * 查询用户海量封禁历史
   * 
   * @remarks
   *   For a specified IP addresses and time range, the time when the IP address was delivered to the edge and the corresponding result are returned.
   * *   If a specified IP address or CIDR block has multiple blocking records in a specified time range, the records are sorted by delivery time in descending order.
   * *   The maximum time range to query is 90 days.
   * *   If no blocking record exists or delivery fails for the given IP address and time range, the delivery time is empty.
   * 
   * @param request - DescribeDcdnFullDomainsBlockIPHistoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnFullDomainsBlockIPHistoryResponse
   */
  async describeDcdnFullDomainsBlockIPHistoryWithOptions(request: $_model.DescribeDcdnFullDomainsBlockIPHistoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnFullDomainsBlockIPHistoryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.IPList)) {
      body["IPList"] = request.IPList;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnFullDomainsBlockIPHistory",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnFullDomainsBlockIPHistoryResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnFullDomainsBlockIPHistoryResponse({}));
  }

  /**
   * 查询用户海量封禁历史
   * 
   * @remarks
   *   For a specified IP addresses and time range, the time when the IP address was delivered to the edge and the corresponding result are returned.
   * *   If a specified IP address or CIDR block has multiple blocking records in a specified time range, the records are sorted by delivery time in descending order.
   * *   The maximum time range to query is 90 days.
   * *   If no blocking record exists or delivery fails for the given IP address and time range, the delivery time is empty.
   * 
   * @param request - DescribeDcdnFullDomainsBlockIPHistoryRequest
   * @returns DescribeDcdnFullDomainsBlockIPHistoryResponse
   */
  async describeDcdnFullDomainsBlockIPHistory(request: $_model.DescribeDcdnFullDomainsBlockIPHistoryRequest): Promise<$_model.DescribeDcdnFullDomainsBlockIPHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnFullDomainsBlockIPHistoryWithOptions(request, runtime);
  }

  /**
   * Queries information about all certificates that belong to your account.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeDcdnHttpsDomainListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnHttpsDomainListResponse
   */
  async describeDcdnHttpsDomainListWithOptions(request: $_model.DescribeDcdnHttpsDomainListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnHttpsDomainListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
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
      action: "DescribeDcdnHttpsDomainList",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnHttpsDomainListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnHttpsDomainListResponse({}));
  }

  /**
   * Queries information about all certificates that belong to your account.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeDcdnHttpsDomainListRequest
   * @returns DescribeDcdnHttpsDomainListResponse
   */
  async describeDcdnHttpsDomainList(request: $_model.DescribeDcdnHttpsDomainListRequest): Promise<$_model.DescribeDcdnHttpsDomainListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnHttpsDomainListWithOptions(request, runtime);
  }

  /**
   * Queries whether an IP address belongs to a POP.
   * 
   * @remarks
   * > You can call this operation up to 50 times per second per account.
   * 
   * @param request - DescribeDcdnIpInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnIpInfoResponse
   */
  async describeDcdnIpInfoWithOptions(request: $_model.DescribeDcdnIpInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnIpInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.IP)) {
      query["IP"] = request.IP;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnIpInfo",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnIpInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnIpInfoResponse({}));
  }

  /**
   * Queries whether an IP address belongs to a POP.
   * 
   * @remarks
   * > You can call this operation up to 50 times per second per account.
   * 
   * @param request - DescribeDcdnIpInfoRequest
   * @returns DescribeDcdnIpInfoResponse
   */
  async describeDcdnIpInfo(request: $_model.DescribeDcdnIpInfoRequest): Promise<$_model.DescribeDcdnIpInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnIpInfoWithOptions(request, runtime);
  }

  /**
   * Queries the back-to-origin CIDR blocks of IPA-accelerated domain names. If you want to call this API operation, you must submit a ticket to apply for the required permissions.
   * 
   * @remarks
   * >  This operation can be called globally up to 50 times per second. This operation can be called up to 10 times per second per account.
   * 
   * @param request - DescribeDcdnIpaDomainCidrRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnIpaDomainCidrResponse
   */
  async describeDcdnIpaDomainCidrWithOptions(request: $_model.DescribeDcdnIpaDomainCidrRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnIpaDomainCidrResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnIpaDomainCidr",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnIpaDomainCidrResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnIpaDomainCidrResponse({}));
  }

  /**
   * Queries the back-to-origin CIDR blocks of IPA-accelerated domain names. If you want to call this API operation, you must submit a ticket to apply for the required permissions.
   * 
   * @remarks
   * >  This operation can be called globally up to 50 times per second. This operation can be called up to 10 times per second per account.
   * 
   * @param request - DescribeDcdnIpaDomainCidrRequest
   * @returns DescribeDcdnIpaDomainCidrResponse
   */
  async describeDcdnIpaDomainCidr(request: $_model.DescribeDcdnIpaDomainCidrRequest): Promise<$_model.DescribeDcdnIpaDomainCidrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnIpaDomainCidrWithOptions(request, runtime);
  }

  /**
   * Queries the configurations of an accelerated domain name. You can query the configurations of one or more features in each request.
   * 
   * @remarks
   * > You can call this operation up to 20 times per second per account.
   * 
   * @param request - DescribeDcdnIpaDomainConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnIpaDomainConfigsResponse
   */
  async describeDcdnIpaDomainConfigsWithOptions(request: $_model.DescribeDcdnIpaDomainConfigsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnIpaDomainConfigsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.functionNames)) {
      query["FunctionNames"] = request.functionNames;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnIpaDomainConfigs",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnIpaDomainConfigsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnIpaDomainConfigsResponse({}));
  }

  /**
   * Queries the configurations of an accelerated domain name. You can query the configurations of one or more features in each request.
   * 
   * @remarks
   * > You can call this operation up to 20 times per second per account.
   * 
   * @param request - DescribeDcdnIpaDomainConfigsRequest
   * @returns DescribeDcdnIpaDomainConfigsResponse
   */
  async describeDcdnIpaDomainConfigs(request: $_model.DescribeDcdnIpaDomainConfigsRequest): Promise<$_model.DescribeDcdnIpaDomainConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnIpaDomainConfigsWithOptions(request, runtime);
  }

  /**
   * Queries the basic configuration information about an accelerated domain name.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribeDcdnIpaDomainDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnIpaDomainDetailResponse
   */
  async describeDcdnIpaDomainDetailWithOptions(request: $_model.DescribeDcdnIpaDomainDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnIpaDomainDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnIpaDomainDetail",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnIpaDomainDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnIpaDomainDetailResponse({}));
  }

  /**
   * Queries the basic configuration information about an accelerated domain name.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribeDcdnIpaDomainDetailRequest
   * @returns DescribeDcdnIpaDomainDetailResponse
   */
  async describeDcdnIpaDomainDetail(request: $_model.DescribeDcdnIpaDomainDetailRequest): Promise<$_model.DescribeDcdnIpaDomainDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnIpaDomainDetailWithOptions(request, runtime);
  }

  /**
   * Queries the status of IPA. The information includes the time when the service was activated, the current service status, the current billing method, and the billing method of the next cycle.
   * 
   * @remarks
   * *
   * **The maximum number of times that each user can call this operation per second is 20.
   * 
   * @param request - DescribeDcdnIpaServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnIpaServiceResponse
   */
  async describeDcdnIpaServiceWithOptions(request: $_model.DescribeDcdnIpaServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnIpaServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnIpaService",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnIpaServiceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnIpaServiceResponse({}));
  }

  /**
   * Queries the status of IPA. The information includes the time when the service was activated, the current service status, the current billing method, and the billing method of the next cycle.
   * 
   * @remarks
   * *
   * **The maximum number of times that each user can call this operation per second is 20.
   * 
   * @param request - DescribeDcdnIpaServiceRequest
   * @returns DescribeDcdnIpaServiceResponse
   */
  async describeDcdnIpaService(request: $_model.DescribeDcdnIpaServiceRequest): Promise<$_model.DescribeDcdnIpaServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnIpaServiceWithOptions(request, runtime);
  }

  /**
   * Queries information about all domain names that are accelerated by IP Application Accelerator (IPA) in your account. Fuzzy search and filtering by domain status are supported.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribeDcdnIpaUserDomainsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnIpaUserDomainsResponse
   */
  async describeDcdnIpaUserDomainsWithOptions(request: $_model.DescribeDcdnIpaUserDomainsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnIpaUserDomainsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.checkDomainShow)) {
      query["CheckDomainShow"] = request.checkDomainShow;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.domainSearchType)) {
      query["DomainSearchType"] = request.domainSearchType;
    }

    if (!$dara.isNull(request.domainStatus)) {
      query["DomainStatus"] = request.domainStatus;
    }

    if (!$dara.isNull(request.funcFilter)) {
      query["FuncFilter"] = request.funcFilter;
    }

    if (!$dara.isNull(request.funcId)) {
      query["FuncId"] = request.funcId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnIpaUserDomains",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnIpaUserDomainsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnIpaUserDomainsResponse({}));
  }

  /**
   * Queries information about all domain names that are accelerated by IP Application Accelerator (IPA) in your account. Fuzzy search and filtering by domain status are supported.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribeDcdnIpaUserDomainsRequest
   * @returns DescribeDcdnIpaUserDomainsResponse
   */
  async describeDcdnIpaUserDomains(request: $_model.DescribeDcdnIpaUserDomainsRequest): Promise<$_model.DescribeDcdnIpaUserDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnIpaUserDomainsWithOptions(request, runtime);
  }

  /**
   * Queries the information about the key-value pairs that belong to your account.
   * 
   * @param request - DescribeDcdnKvAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnKvAccountResponse
   */
  async describeDcdnKvAccountWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnKvAccountResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnKvAccount",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnKvAccountResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnKvAccountResponse({}));
  }

  /**
   * Queries the information about the key-value pairs that belong to your account.
   * @returns DescribeDcdnKvAccountResponse
   */
  async describeDcdnKvAccount(): Promise<$_model.DescribeDcdnKvAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnKvAccountWithOptions(runtime);
  }

  /**
   * Queries the KV status of an account.
   * 
   * @param request - DescribeDcdnKvAccountStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnKvAccountStatusResponse
   */
  async describeDcdnKvAccountStatusWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnKvAccountStatusResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnKvAccountStatus",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnKvAccountStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnKvAccountStatusResponse({}));
  }

  /**
   * Queries the KV status of an account.
   * @returns DescribeDcdnKvAccountStatusResponse
   */
  async describeDcdnKvAccountStatus(): Promise<$_model.DescribeDcdnKvAccountStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnKvAccountStatusWithOptions(runtime);
  }

  /**
   * Queries the information about a namespace.
   * 
   * @param request - DescribeDcdnKvNamespaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnKvNamespaceResponse
   */
  async describeDcdnKvNamespaceWithOptions(request: $_model.DescribeDcdnKvNamespaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnKvNamespaceResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnKvNamespace",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnKvNamespaceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnKvNamespaceResponse({}));
  }

  /**
   * Queries the information about a namespace.
   * 
   * @param request - DescribeDcdnKvNamespaceRequest
   * @returns DescribeDcdnKvNamespaceResponse
   */
  async describeDcdnKvNamespace(request: $_model.DescribeDcdnKvNamespaceRequest): Promise<$_model.DescribeDcdnKvNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnKvNamespaceWithOptions(request, runtime);
  }

  /**
   * Queries CIDR blocks of Dynamic Content Delivery Network (DCDN) points of presence (POPs).
   * 
   * @remarks
   * > *   To use this operation, [submit a ticket](https://workorder-intl.console.aliyun.com/?spm=5176.2020520001.aliyun_topbar.18.dbd44bd3e4f845#/ticket/createIndex).
   * > *   You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeDcdnL2IpsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnL2IpsResponse
   */
  async describeDcdnL2IpsWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnL2IpsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnL2Ips",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnL2IpsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnL2IpsResponse({}));
  }

  /**
   * Queries CIDR blocks of Dynamic Content Delivery Network (DCDN) points of presence (POPs).
   * 
   * @remarks
   * > *   To use this operation, [submit a ticket](https://workorder-intl.console.aliyun.com/?spm=5176.2020520001.aliyun_topbar.18.dbd44bd3e4f845#/ticket/createIndex).
   * > *   You can call this operation up to 100 times per second per account.
   * @returns DescribeDcdnL2IpsResponse
   */
  async describeDcdnL2Ips(): Promise<$_model.DescribeDcdnL2IpsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnL2IpsWithOptions(runtime);
  }

  /**
   * Queries the origin CIDR blocks by domain name. The CIDR blocks include IPv4 and IPv6 CIDR blocks.
   * 
   * @param request - DescribeDcdnL2VipsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnL2VipsResponse
   */
  async describeDcdnL2VipsWithOptions(request: $_model.DescribeDcdnL2VipsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnL2VipsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnL2Vips",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnL2VipsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnL2VipsResponse({}));
  }

  /**
   * Queries the origin CIDR blocks by domain name. The CIDR blocks include IPv4 and IPv6 CIDR blocks.
   * 
   * @param request - DescribeDcdnL2VipsRequest
   * @returns DescribeDcdnL2VipsResponse
   */
  async describeDcdnL2Vips(request: $_model.DescribeDcdnL2VipsRequest): Promise<$_model.DescribeDcdnL2VipsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnL2VipsWithOptions(request, runtime);
  }

  /**
   * Queries the status of the origin server for a DCDN-accelerated domain name.
   * 
   * @param request - DescribeDcdnOriginSiteHealthStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnOriginSiteHealthStatusResponse
   */
  async describeDcdnOriginSiteHealthStatusWithOptions(request: $_model.DescribeDcdnOriginSiteHealthStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnOriginSiteHealthStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnOriginSiteHealthStatus",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnOriginSiteHealthStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnOriginSiteHealthStatusResponse({}));
  }

  /**
   * Queries the status of the origin server for a DCDN-accelerated domain name.
   * 
   * @param request - DescribeDcdnOriginSiteHealthStatusRequest
   * @returns DescribeDcdnOriginSiteHealthStatusResponse
   */
  async describeDcdnOriginSiteHealthStatus(request: $_model.DescribeDcdnOriginSiteHealthStatusRequest): Promise<$_model.DescribeDcdnOriginSiteHealthStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnOriginSiteHealthStatusWithOptions(request, runtime);
  }

  /**
   * Queries the fields in real-time log entries.
   * 
   * @remarks
   * >  You can call this API operation up to 100 times per second per account.
   * 
   * @param request - DescribeDcdnRealTimeDeliveryFieldRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnRealTimeDeliveryFieldResponse
   */
  async describeDcdnRealTimeDeliveryFieldWithOptions(request: $_model.DescribeDcdnRealTimeDeliveryFieldRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnRealTimeDeliveryFieldResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.businessType)) {
      query["BusinessType"] = request.businessType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnRealTimeDeliveryField",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnRealTimeDeliveryFieldResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnRealTimeDeliveryFieldResponse({}));
  }

  /**
   * Queries the fields in real-time log entries.
   * 
   * @remarks
   * >  You can call this API operation up to 100 times per second per account.
   * 
   * @param request - DescribeDcdnRealTimeDeliveryFieldRequest
   * @returns DescribeDcdnRealTimeDeliveryFieldResponse
   */
  async describeDcdnRealTimeDeliveryField(request: $_model.DescribeDcdnRealTimeDeliveryFieldRequest): Promise<$_model.DescribeDcdnRealTimeDeliveryFieldResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnRealTimeDeliveryFieldWithOptions(request, runtime);
  }

  /**
   * Queries the maximum number and the remaining number of URLs and directories that can be refreshed or the maximum number and the remaining number of URLs that can be prefetched per day.
   * 
   * @remarks
   * > 
   * *   You can call the **RefreshDcdnObjectCaches** operation to refresh content and call the **PreloadDcdnObjectCaches** operation to prefetch content.
   * *   You can call this operation up to 20 times per second per account.
   * 
   * @param request - DescribeDcdnRefreshQuotaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnRefreshQuotaResponse
   */
  async describeDcdnRefreshQuotaWithOptions(request: $_model.DescribeDcdnRefreshQuotaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnRefreshQuotaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnRefreshQuota",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnRefreshQuotaResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnRefreshQuotaResponse({}));
  }

  /**
   * Queries the maximum number and the remaining number of URLs and directories that can be refreshed or the maximum number and the remaining number of URLs that can be prefetched per day.
   * 
   * @remarks
   * > 
   * *   You can call the **RefreshDcdnObjectCaches** operation to refresh content and call the **PreloadDcdnObjectCaches** operation to prefetch content.
   * *   You can call this operation up to 20 times per second per account.
   * 
   * @param request - DescribeDcdnRefreshQuotaRequest
   * @returns DescribeDcdnRefreshQuotaResponse
   */
  async describeDcdnRefreshQuota(request: $_model.DescribeDcdnRefreshQuotaRequest): Promise<$_model.DescribeDcdnRefreshQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnRefreshQuotaWithOptions(request, runtime);
  }

  /**
   * Queries the status of refresh or prefetch tasks by task ID.
   * 
   * @remarks
   * > 
   * *   You can query data within the last three days.
   * *   You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribeDcdnRefreshTaskByIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnRefreshTaskByIdResponse
   */
  async describeDcdnRefreshTaskByIdWithOptions(request: $_model.DescribeDcdnRefreshTaskByIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnRefreshTaskByIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnRefreshTaskById",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnRefreshTaskByIdResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnRefreshTaskByIdResponse({}));
  }

  /**
   * Queries the status of refresh or prefetch tasks by task ID.
   * 
   * @remarks
   * > 
   * *   You can query data within the last three days.
   * *   You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribeDcdnRefreshTaskByIdRequest
   * @returns DescribeDcdnRefreshTaskByIdResponse
   */
  async describeDcdnRefreshTaskById(request: $_model.DescribeDcdnRefreshTaskByIdRequest): Promise<$_model.DescribeDcdnRefreshTaskByIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnRefreshTaskByIdWithOptions(request, runtime);
  }

  /**
   * Queries the refresh or prefetch tasks. You can query the tasks in the last three days.
   * 
   * @remarks
   *   You can query the refresh or prefetch tasks by ID or URL.
   * *   You can set both **TaskId** and **ObjectPath** in a request. If you do not set **TaskId** or **ObjectPath**, the data in the last 3 days on the first page is returned. By default, a maximum of 20 entries can be displayed on each page.
   * *   If you specify **DomainName** or **Status**, you must also specify **ObjectType**.
   * *   You can call this operation up to 10 times per second per account.
   * 
   * @param request - DescribeDcdnRefreshTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnRefreshTasksResponse
   */
  async describeDcdnRefreshTasksWithOptions(request: $_model.DescribeDcdnRefreshTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnRefreshTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.objectPath)) {
      query["ObjectPath"] = request.objectPath;
    }

    if (!$dara.isNull(request.objectType)) {
      query["ObjectType"] = request.objectType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnRefreshTasks",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnRefreshTasksResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnRefreshTasksResponse({}));
  }

  /**
   * Queries the refresh or prefetch tasks. You can query the tasks in the last three days.
   * 
   * @remarks
   *   You can query the refresh or prefetch tasks by ID or URL.
   * *   You can set both **TaskId** and **ObjectPath** in a request. If you do not set **TaskId** or **ObjectPath**, the data in the last 3 days on the first page is returned. By default, a maximum of 20 entries can be displayed on each page.
   * *   If you specify **DomainName** or **Status**, you must also specify **ObjectType**.
   * *   You can call this operation up to 10 times per second per account.
   * 
   * @param request - DescribeDcdnRefreshTasksRequest
   * @returns DescribeDcdnRefreshTasksResponse
   */
  async describeDcdnRefreshTasks(request: $_model.DescribeDcdnRefreshTasksRequest): Promise<$_model.DescribeDcdnRefreshTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnRefreshTasksWithOptions(request, runtime);
  }

  /**
   * Queries the list of Internet service providers (ISPs) and regions.
   * 
   * @remarks
   * >  You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribeDcdnRegionAndIspRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnRegionAndIspResponse
   */
  async describeDcdnRegionAndIspWithOptions(request: $_model.DescribeDcdnRegionAndIspRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnRegionAndIspResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnRegionAndIsp",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnRegionAndIspResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnRegionAndIspResponse({}));
  }

  /**
   * Queries the list of Internet service providers (ISPs) and regions.
   * 
   * @remarks
   * >  You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribeDcdnRegionAndIspRequest
   * @returns DescribeDcdnRegionAndIspResponse
   */
  async describeDcdnRegionAndIsp(request: $_model.DescribeDcdnRegionAndIspRequest): Promise<$_model.DescribeDcdnRegionAndIspResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnRegionAndIspWithOptions(request, runtime);
  }

  /**
   * Queries the content of an operations report.
   * 
   * @remarks
   * > You can call this operation up to three times per second per account.
   * 
   * @param request - DescribeDcdnReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnReportResponse
   */
  async describeDcdnReportWithOptions(request: $_model.DescribeDcdnReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnReportResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.area)) {
      query["Area"] = request.area;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.httpCode)) {
      query["HttpCode"] = request.httpCode;
    }

    if (!$dara.isNull(request.isOverseas)) {
      query["IsOverseas"] = request.isOverseas;
    }

    if (!$dara.isNull(request.reportId)) {
      query["ReportId"] = request.reportId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnReport",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnReportResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnReportResponse({}));
  }

  /**
   * Queries the content of an operations report.
   * 
   * @remarks
   * > You can call this operation up to three times per second per account.
   * 
   * @param request - DescribeDcdnReportRequest
   * @returns DescribeDcdnReportResponse
   */
  async describeDcdnReport(request: $_model.DescribeDcdnReportRequest): Promise<$_model.DescribeDcdnReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnReportWithOptions(request, runtime);
  }

  /**
   * Queries custom operations reports.
   * 
   * @remarks
   * > * This operation queries the metadata of all operations reports. The statistics in the reports are not returned.
   * > * You can call this operation up to three times per second per account.
   * 
   * @param request - DescribeDcdnReportListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnReportListResponse
   */
  async describeDcdnReportListWithOptions(request: $_model.DescribeDcdnReportListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnReportListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.reportId)) {
      query["ReportId"] = request.reportId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnReportList",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnReportListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnReportListResponse({}));
  }

  /**
   * Queries custom operations reports.
   * 
   * @remarks
   * > * This operation queries the metadata of all operations reports. The statistics in the reports are not returned.
   * > * You can call this operation up to three times per second per account.
   * 
   * @param request - DescribeDcdnReportListRequest
   * @returns DescribeDcdnReportListResponse
   */
  async describeDcdnReportList(request: $_model.DescribeDcdnReportListRequest): Promise<$_model.DescribeDcdnReportListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnReportListWithOptions(request, runtime);
  }

  /**
   * Queries supported types of real-time logs.
   * 
   * @param request - DescribeDcdnSLSRealTimeLogTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnSLSRealTimeLogTypeResponse
   */
  async describeDcdnSLSRealTimeLogTypeWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnSLSRealTimeLogTypeResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnSLSRealTimeLogType",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnSLSRealTimeLogTypeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnSLSRealTimeLogTypeResponse({}));
  }

  /**
   * Queries supported types of real-time logs.
   * @returns DescribeDcdnSLSRealTimeLogTypeResponse
   */
  async describeDcdnSLSRealTimeLogType(): Promise<$_model.DescribeDcdnSLSRealTimeLogTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnSLSRealTimeLogTypeWithOptions(runtime);
  }

  /**
   * Queries a real-time log delivery project.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeDcdnSLSRealtimeLogDeliveryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnSLSRealtimeLogDeliveryResponse
   */
  async describeDcdnSLSRealtimeLogDeliveryWithOptions(request: $_model.DescribeDcdnSLSRealtimeLogDeliveryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnSLSRealtimeLogDeliveryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnSLSRealtimeLogDelivery",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnSLSRealtimeLogDeliveryResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnSLSRealtimeLogDeliveryResponse({}));
  }

  /**
   * Queries a real-time log delivery project.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeDcdnSLSRealtimeLogDeliveryRequest
   * @returns DescribeDcdnSLSRealtimeLogDeliveryResponse
   */
  async describeDcdnSLSRealtimeLogDelivery(request: $_model.DescribeDcdnSLSRealtimeLogDeliveryRequest): Promise<$_model.DescribeDcdnSLSRealtimeLogDeliveryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnSLSRealtimeLogDeliveryWithOptions(request, runtime);
  }

  /**
   * Queries the details about a ShangMi (SM) certificate.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribeDcdnSMCertificateDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnSMCertificateDetailResponse
   */
  async describeDcdnSMCertificateDetailWithOptions(request: $_model.DescribeDcdnSMCertificateDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnSMCertificateDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certIdentifier)) {
      query["CertIdentifier"] = request.certIdentifier;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnSMCertificateDetail",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnSMCertificateDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnSMCertificateDetailResponse({}));
  }

  /**
   * Queries the details about a ShangMi (SM) certificate.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribeDcdnSMCertificateDetailRequest
   * @returns DescribeDcdnSMCertificateDetailResponse
   */
  async describeDcdnSMCertificateDetail(request: $_model.DescribeDcdnSMCertificateDetailRequest): Promise<$_model.DescribeDcdnSMCertificateDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnSMCertificateDetailWithOptions(request, runtime);
  }

  /**
   * Queries the ShangMi (SM) certificates of an accelerated domain name.
   * 
   * @remarks
   * >  You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribeDcdnSMCertificateListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnSMCertificateListResponse
   */
  async describeDcdnSMCertificateListWithOptions(request: $_model.DescribeDcdnSMCertificateListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnSMCertificateListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnSMCertificateList",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnSMCertificateListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnSMCertificateListResponse({}));
  }

  /**
   * Queries the ShangMi (SM) certificates of an accelerated domain name.
   * 
   * @remarks
   * >  You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribeDcdnSMCertificateListRequest
   * @returns DescribeDcdnSMCertificateListResponse
   */
  async describeDcdnSMCertificateList(request: $_model.DescribeDcdnSMCertificateListRequest): Promise<$_model.DescribeDcdnSMCertificateListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnSMCertificateListWithOptions(request, runtime);
  }

  /**
   * Queries the certificates of accelerated domain names.
   * 
   * @param request - DescribeDcdnSSLCertificateListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnSSLCertificateListResponse
   */
  async describeDcdnSSLCertificateListWithOptions(request: $_model.DescribeDcdnSSLCertificateListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnSSLCertificateListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchKeyword)) {
      query["SearchKeyword"] = request.searchKeyword;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnSSLCertificateList",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnSSLCertificateListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnSSLCertificateListResponse({}));
  }

  /**
   * Queries the certificates of accelerated domain names.
   * 
   * @param request - DescribeDcdnSSLCertificateListRequest
   * @returns DescribeDcdnSSLCertificateListResponse
   */
  async describeDcdnSSLCertificateList(request: $_model.DescribeDcdnSSLCertificateListRequest): Promise<$_model.DescribeDcdnSSLCertificateListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnSSLCertificateListWithOptions(request, runtime);
  }

  /**
   * Creates an edge security drop-down list in the Dynamic Content Delivery Network (DCDN) console.
   * 
   * @remarks
   * > You can call this operation up to 50 times per second per account.
   * 
   * @param request - DescribeDcdnSecFuncInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnSecFuncInfoResponse
   */
  async describeDcdnSecFuncInfoWithOptions(request: $_model.DescribeDcdnSecFuncInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnSecFuncInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.secFuncType)) {
      query["SecFuncType"] = request.secFuncType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnSecFuncInfo",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnSecFuncInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnSecFuncInfoResponse({}));
  }

  /**
   * Creates an edge security drop-down list in the Dynamic Content Delivery Network (DCDN) console.
   * 
   * @remarks
   * > You can call this operation up to 50 times per second per account.
   * 
   * @param request - DescribeDcdnSecFuncInfoRequest
   * @returns DescribeDcdnSecFuncInfoResponse
   */
  async describeDcdnSecFuncInfo(request: $_model.DescribeDcdnSecFuncInfoRequest): Promise<$_model.DescribeDcdnSecFuncInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnSecFuncInfoWithOptions(request, runtime);
  }

  /**
   * Queries the version of secure Dynamic Route for CDN (DCDN) and the security rules.
   * 
   * @remarks
   * > You can call this operation up to 50 times per second per account.
   * 
   * @param request - DescribeDcdnSecSpecInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnSecSpecInfoResponse
   */
  async describeDcdnSecSpecInfoWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnSecSpecInfoResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnSecSpecInfo",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnSecSpecInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnSecSpecInfoResponse({}));
  }

  /**
   * Queries the version of secure Dynamic Route for CDN (DCDN) and the security rules.
   * 
   * @remarks
   * > You can call this operation up to 50 times per second per account.
   * @returns DescribeDcdnSecSpecInfoResponse
   */
  async describeDcdnSecSpecInfo(): Promise<$_model.DescribeDcdnSecSpecInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnSecSpecInfoWithOptions(runtime);
  }

  /**
   * Queries information about the Dynamic Content Delivery Network (DCDN) service. The information includes the time when the service was activated, the current service status, the current billing method, and the billing method of the next cycle.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribeDcdnServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnServiceResponse
   */
  async describeDcdnServiceWithOptions(request: $_model.DescribeDcdnServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnService",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnServiceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnServiceResponse({}));
  }

  /**
   * Queries information about the Dynamic Content Delivery Network (DCDN) service. The information includes the time when the service was activated, the current service status, the current billing method, and the billing method of the next cycle.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribeDcdnServiceRequest
   * @returns DescribeDcdnServiceResponse
   */
  async describeDcdnService(request: $_model.DescribeDcdnServiceRequest): Promise<$_model.DescribeDcdnServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnServiceWithOptions(request, runtime);
  }

  /**
   * Queries valid virtual IP addresses (VIPs) in the staging environment.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribeDcdnStagingIpRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnStagingIpResponse
   */
  async describeDcdnStagingIpWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnStagingIpResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnStagingIp",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnStagingIpResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnStagingIpResponse({}));
  }

  /**
   * Queries valid virtual IP addresses (VIPs) in the staging environment.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * @returns DescribeDcdnStagingIpResponse
   */
  async describeDcdnStagingIp(): Promise<$_model.DescribeDcdnStagingIpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnStagingIpWithOptions(runtime);
  }

  /**
   * Queries custom operations reports.
   * 
   * @remarks
   * > *   By default, this operation queries all custom operations reports. However, only one operations report can be displayed. Therefore, only one operations report is returned.
   * > *   You can call this API operation up to three times per second per account.
   * 
   * @param request - DescribeDcdnSubListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnSubListResponse
   */
  async describeDcdnSubListWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnSubListResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnSubList",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnSubListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnSubListResponse({}));
  }

  /**
   * Queries custom operations reports.
   * 
   * @remarks
   * > *   By default, this operation queries all custom operations reports. However, only one operations report can be displayed. Therefore, only one operations report is returned.
   * > *   You can call this API operation up to three times per second per account.
   * @returns DescribeDcdnSubListResponse
   */
  async describeDcdnSubList(): Promise<$_model.DescribeDcdnSubListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnSubListWithOptions(runtime);
  }

  /**
   * Queries the tags of one or more resources.
   * 
   * @remarks
   * > You can call this operation up to 10 times per second per account.
   * 
   * @param request - DescribeDcdnTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnTagResourcesResponse
   */
  async describeDcdnTagResourcesWithOptions(request: $_model.DescribeDcdnTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnTagResourcesResponse> {
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
      action: "DescribeDcdnTagResources",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnTagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnTagResourcesResponse({}));
  }

  /**
   * Queries the tags of one or more resources.
   * 
   * @remarks
   * > You can call this operation up to 10 times per second per account.
   * 
   * @param request - DescribeDcdnTagResourcesRequest
   * @returns DescribeDcdnTagResourcesResponse
   */
  async describeDcdnTagResources(request: $_model.DescribeDcdnTagResourcesRequest): Promise<$_model.DescribeDcdnTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnTagResourcesWithOptions(request, runtime);
  }

  /**
   * Queries domain names ranked by network traffic. You can query data within the last 90 days.
   * 
   * @remarks
   * If you do not specify the StartTime and EndTime parameters, the data within the current month is queried. If you specify the StartTime and EndTime parameters, the data within the specified time range is queried.
   * 
   * @param request - DescribeDcdnTopDomainsByFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnTopDomainsByFlowResponse
   */
  async describeDcdnTopDomainsByFlowWithOptions(request: $_model.DescribeDcdnTopDomainsByFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnTopDomainsByFlowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnTopDomainsByFlow",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnTopDomainsByFlowResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnTopDomainsByFlowResponse({}));
  }

  /**
   * Queries domain names ranked by network traffic. You can query data within the last 90 days.
   * 
   * @remarks
   * If you do not specify the StartTime and EndTime parameters, the data within the current month is queried. If you specify the StartTime and EndTime parameters, the data within the specified time range is queried.
   * 
   * @param request - DescribeDcdnTopDomainsByFlowRequest
   * @returns DescribeDcdnTopDomainsByFlowResponse
   */
  async describeDcdnTopDomainsByFlow(request: $_model.DescribeDcdnTopDomainsByFlowRequest): Promise<$_model.DescribeDcdnTopDomainsByFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnTopDomainsByFlowWithOptions(request, runtime);
  }

  /**
   * Queries the billing records of an Alibaba Cloud account. The maximum time range that you can specify is one month.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeDcdnUserBillHistoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnUserBillHistoryResponse
   */
  async describeDcdnUserBillHistoryWithOptions(request: $_model.DescribeDcdnUserBillHistoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnUserBillHistoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnUserBillHistory",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnUserBillHistoryResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnUserBillHistoryResponse({}));
  }

  /**
   * Queries the billing records of an Alibaba Cloud account. The maximum time range that you can specify is one month.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeDcdnUserBillHistoryRequest
   * @returns DescribeDcdnUserBillHistoryResponse
   */
  async describeDcdnUserBillHistory(request: $_model.DescribeDcdnUserBillHistoryRequest): Promise<$_model.DescribeDcdnUserBillHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnUserBillHistoryWithOptions(request, runtime);
  }

  /**
   * Queries the metering method that is used in Dynamic Content Delivery Network (DCDN).
   * 
   * @param request - DescribeDcdnUserBillTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnUserBillTypeResponse
   */
  async describeDcdnUserBillTypeWithOptions(request: $_model.DescribeDcdnUserBillTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnUserBillTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnUserBillType",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnUserBillTypeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnUserBillTypeResponse({}));
  }

  /**
   * Queries the metering method that is used in Dynamic Content Delivery Network (DCDN).
   * 
   * @param request - DescribeDcdnUserBillTypeRequest
   * @returns DescribeDcdnUserBillTypeResponse
   */
  async describeDcdnUserBillType(request: $_model.DescribeDcdnUserBillTypeRequest): Promise<$_model.DescribeDcdnUserBillTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnUserBillTypeWithOptions(request, runtime);
  }

  /**
   * Queries the number of domain names whose SSL certificates are about to expire or have already expired.
   * 
   * @remarks
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeDcdnUserCertificateExpireCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnUserCertificateExpireCountResponse
   */
  async describeDcdnUserCertificateExpireCountWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnUserCertificateExpireCountResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnUserCertificateExpireCount",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnUserCertificateExpireCountResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnUserCertificateExpireCountResponse({}));
  }

  /**
   * Queries the number of domain names whose SSL certificates are about to expire or have already expired.
   * 
   * @remarks
   * You can call this operation up to 100 times per second per account.
   * @returns DescribeDcdnUserCertificateExpireCountResponse
   */
  async describeDcdnUserCertificateExpireCount(): Promise<$_model.DescribeDcdnUserCertificateExpireCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnUserCertificateExpireCountWithOptions(runtime);
  }

  /**
   * Queries the configurations of security features.
   * 
   * @remarks
   * You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribeDcdnUserConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnUserConfigsResponse
   */
  async describeDcdnUserConfigsWithOptions(request: $_model.DescribeDcdnUserConfigsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnUserConfigsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.functionName)) {
      query["FunctionName"] = request.functionName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnUserConfigs",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnUserConfigsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnUserConfigsResponse({}));
  }

  /**
   * Queries the configurations of security features.
   * 
   * @remarks
   * You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribeDcdnUserConfigsRequest
   * @returns DescribeDcdnUserConfigsResponse
   */
  async describeDcdnUserConfigs(request: $_model.DescribeDcdnUserConfigsRequest): Promise<$_model.DescribeDcdnUserConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnUserConfigsWithOptions(request, runtime);
  }

  /**
   * Queries the accelerated domain names that belong to your Alibaba Cloud account. You can filter domains by name or by status. Fuzzy match is supported when you filter domains by name.
   * 
   * @remarks
   * > You can call this operation up to 80 times per second per account.
   * 
   * @param request - DescribeDcdnUserDomainsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnUserDomainsResponse
   */
  async describeDcdnUserDomainsWithOptions(request: $_model.DescribeDcdnUserDomainsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnUserDomainsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.changeEndTime)) {
      query["ChangeEndTime"] = request.changeEndTime;
    }

    if (!$dara.isNull(request.changeStartTime)) {
      query["ChangeStartTime"] = request.changeStartTime;
    }

    if (!$dara.isNull(request.checkDomainShow)) {
      query["CheckDomainShow"] = request.checkDomainShow;
    }

    if (!$dara.isNull(request.coverage)) {
      query["Coverage"] = request.coverage;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.domainSearchType)) {
      query["DomainSearchType"] = request.domainSearchType;
    }

    if (!$dara.isNull(request.domainStatus)) {
      query["DomainStatus"] = request.domainStatus;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.webSiteType)) {
      query["WebSiteType"] = request.webSiteType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnUserDomains",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnUserDomainsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnUserDomainsResponse({}));
  }

  /**
   * Queries the accelerated domain names that belong to your Alibaba Cloud account. You can filter domains by name or by status. Fuzzy match is supported when you filter domains by name.
   * 
   * @remarks
   * > You can call this operation up to 80 times per second per account.
   * 
   * @param request - DescribeDcdnUserDomainsRequest
   * @returns DescribeDcdnUserDomainsResponse
   */
  async describeDcdnUserDomains(request: $_model.DescribeDcdnUserDomainsRequest): Promise<$_model.DescribeDcdnUserDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnUserDomainsWithOptions(request, runtime);
  }

  /**
   * Queries all accelerated domain names with specified features configured that belong to your Alibaba Cloud account based on the FuncId parameter.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeDcdnUserDomainsByFuncRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnUserDomainsByFuncResponse
   */
  async describeDcdnUserDomainsByFuncWithOptions(request: $_model.DescribeDcdnUserDomainsByFuncRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnUserDomainsByFuncResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.funcFilter)) {
      query["FuncFilter"] = request.funcFilter;
    }

    if (!$dara.isNull(request.funcId)) {
      query["FuncId"] = request.funcId;
    }

    if (!$dara.isNull(request.matchType)) {
      query["MatchType"] = request.matchType;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnUserDomainsByFunc",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnUserDomainsByFuncResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnUserDomainsByFuncResponse({}));
  }

  /**
   * Queries all accelerated domain names with specified features configured that belong to your Alibaba Cloud account based on the FuncId parameter.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeDcdnUserDomainsByFuncRequest
   * @returns DescribeDcdnUserDomainsByFuncResponse
   */
  async describeDcdnUserDomainsByFunc(request: $_model.DescribeDcdnUserDomainsByFuncRequest): Promise<$_model.DescribeDcdnUserDomainsByFuncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnUserDomainsByFuncWithOptions(request, runtime);
  }

  /**
   * Queries the resource quotas and the used resources.
   * 
   * @remarks
   * >  The maximum number of times that each user can call this operation per second is 30.
   * 
   * @param request - DescribeDcdnUserQuotaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnUserQuotaResponse
   */
  async describeDcdnUserQuotaWithOptions(request: $_model.DescribeDcdnUserQuotaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnUserQuotaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnUserQuota",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnUserQuotaResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnUserQuotaResponse({}));
  }

  /**
   * Queries the resource quotas and the used resources.
   * 
   * @remarks
   * >  The maximum number of times that each user can call this operation per second is 30.
   * 
   * @param request - DescribeDcdnUserQuotaRequest
   * @returns DescribeDcdnUserQuotaResponse
   */
  async describeDcdnUserQuota(request: $_model.DescribeDcdnUserQuotaRequest): Promise<$_model.DescribeDcdnUserQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnUserQuotaWithOptions(request, runtime);
  }

  /**
   * Queries the fields that are selected.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeDcdnUserRealTimeDeliveryFieldRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnUserRealTimeDeliveryFieldResponse
   */
  async describeDcdnUserRealTimeDeliveryFieldWithOptions(request: $_model.DescribeDcdnUserRealTimeDeliveryFieldRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnUserRealTimeDeliveryFieldResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnUserRealTimeDeliveryField",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnUserRealTimeDeliveryFieldResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnUserRealTimeDeliveryFieldResponse({}));
  }

  /**
   * Queries the fields that are selected.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeDcdnUserRealTimeDeliveryFieldRequest
   * @returns DescribeDcdnUserRealTimeDeliveryFieldResponse
   */
  async describeDcdnUserRealTimeDeliveryField(request: $_model.DescribeDcdnUserRealTimeDeliveryFieldRequest): Promise<$_model.DescribeDcdnUserRealTimeDeliveryFieldResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnUserRealTimeDeliveryFieldWithOptions(request, runtime);
  }

  /**
   * Queries information about the resource plans in your Alibaba Cloud account.
   * 
   * @remarks
   * The maximum number of times that each user can call this operation per second is 30.
   * 
   * @param request - DescribeDcdnUserResourcePackageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnUserResourcePackageResponse
   */
  async describeDcdnUserResourcePackageWithOptions(request: $_model.DescribeDcdnUserResourcePackageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnUserResourcePackageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnUserResourcePackage",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnUserResourcePackageResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnUserResourcePackageResponse({}));
  }

  /**
   * Queries information about the resource plans in your Alibaba Cloud account.
   * 
   * @remarks
   * The maximum number of times that each user can call this operation per second is 30.
   * 
   * @param request - DescribeDcdnUserResourcePackageRequest
   * @returns DescribeDcdnUserResourcePackageResponse
   */
  async describeDcdnUserResourcePackage(request: $_model.DescribeDcdnUserResourcePackageRequest): Promise<$_model.DescribeDcdnUserResourcePackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnUserResourcePackageWithOptions(request, runtime);
  }

  /**
   * Queries the number of packets blocked by a specified security feature.
   * 
   * @remarks
   * > You can call this operation up to 50 times per second per account.
   * 
   * @param request - DescribeDcdnUserSecDropRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnUserSecDropResponse
   */
  async describeDcdnUserSecDropWithOptions(request: $_model.DescribeDcdnUserSecDropRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnUserSecDropResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.data)) {
      query["Data"] = request.data;
    }

    if (!$dara.isNull(request.metric)) {
      query["Metric"] = request.metric;
    }

    if (!$dara.isNull(request.secFunc)) {
      query["SecFunc"] = request.secFunc;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnUserSecDrop",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnUserSecDropResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnUserSecDropResponse({}));
  }

  /**
   * Queries the number of packets blocked by a specified security feature.
   * 
   * @remarks
   * > You can call this operation up to 50 times per second per account.
   * 
   * @param request - DescribeDcdnUserSecDropRequest
   * @returns DescribeDcdnUserSecDropResponse
   */
  async describeDcdnUserSecDrop(request: $_model.DescribeDcdnUserSecDropRequest): Promise<$_model.DescribeDcdnUserSecDropResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnUserSecDropWithOptions(request, runtime);
  }

  /**
   * Queries the number of packets that are blocked by security features at the application layer in a specific time range.
   * 
   * @remarks
   * > You can call this operation up to 50 times per second per account.
   * 
   * @param request - DescribeDcdnUserSecDropByMinuteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnUserSecDropByMinuteResponse
   */
  async describeDcdnUserSecDropByMinuteWithOptions(request: $_model.DescribeDcdnUserSecDropByMinuteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnUserSecDropByMinuteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.object)) {
      query["Object"] = request.object;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.secFunc)) {
      query["SecFunc"] = request.secFunc;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnUserSecDropByMinute",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnUserSecDropByMinuteResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnUserSecDropByMinuteResponse({}));
  }

  /**
   * Queries the number of packets that are blocked by security features at the application layer in a specific time range.
   * 
   * @remarks
   * > You can call this operation up to 50 times per second per account.
   * 
   * @param request - DescribeDcdnUserSecDropByMinuteRequest
   * @returns DescribeDcdnUserSecDropByMinuteResponse
   */
  async describeDcdnUserSecDropByMinute(request: $_model.DescribeDcdnUserSecDropByMinuteRequest): Promise<$_model.DescribeDcdnUserSecDropByMinuteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnUserSecDropByMinuteWithOptions(request, runtime);
  }

  /**
   * Queries user tags.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeDcdnUserTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnUserTagsResponse
   */
  async describeDcdnUserTagsWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnUserTagsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnUserTags",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnUserTagsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnUserTagsResponse({}));
  }

  /**
   * Queries user tags.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * @returns DescribeDcdnUserTagsResponse
   */
  async describeDcdnUserTags(): Promise<$_model.DescribeDcdnUserTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnUserTagsWithOptions(runtime);
  }

  /**
   * Queries virtual IP addresses of the POPs by domain name.
   * 
   * @remarks
   * >  You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribeDcdnUserVipsByDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnUserVipsByDomainResponse
   */
  async describeDcdnUserVipsByDomainWithOptions(request: $_model.DescribeDcdnUserVipsByDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnUserVipsByDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.available)) {
      query["Available"] = request.available;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnUserVipsByDomain",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnUserVipsByDomainResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnUserVipsByDomainResponse({}));
  }

  /**
   * Queries virtual IP addresses of the POPs by domain name.
   * 
   * @remarks
   * >  You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribeDcdnUserVipsByDomainRequest
   * @returns DescribeDcdnUserVipsByDomainResponse
   */
  async describeDcdnUserVipsByDomain(request: $_model.DescribeDcdnUserVipsByDomainRequest): Promise<$_model.DescribeDcdnUserVipsByDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnUserVipsByDomainWithOptions(request, runtime);
  }

  /**
   * Queries the ownership verification content of a domain name.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeDcdnVerifyContentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnVerifyContentResponse
   */
  async describeDcdnVerifyContentWithOptions(request: $_model.DescribeDcdnVerifyContentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnVerifyContentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnVerifyContent",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnVerifyContentResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnVerifyContentResponse({}));
  }

  /**
   * Queries the ownership verification content of a domain name.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeDcdnVerifyContentRequest
   * @returns DescribeDcdnVerifyContentResponse
   */
  async describeDcdnVerifyContent(request: $_model.DescribeDcdnVerifyContentRequest): Promise<$_model.DescribeDcdnVerifyContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnVerifyContentWithOptions(request, runtime);
  }

  /**
   * Queries the SDK authentication key for the Alibaba Cloud account. You can also use the SDK authentication key to send SDK initialization requests. The key must be included in the integration code.
   * 
   * @param request - DescribeDcdnWafBotAppKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnWafBotAppKeyResponse
   */
  async describeDcdnWafBotAppKeyWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnWafBotAppKeyResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnWafBotAppKey",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnWafBotAppKeyResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnWafBotAppKeyResponse({}));
  }

  /**
   * Queries the SDK authentication key for the Alibaba Cloud account. You can also use the SDK authentication key to send SDK initialization requests. The key must be included in the integration code.
   * @returns DescribeDcdnWafBotAppKeyResponse
   */
  async describeDcdnWafBotAppKey(): Promise<$_model.DescribeDcdnWafBotAppKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnWafBotAppKeyWithOptions(runtime);
  }

  /**
   * Queries the default configurations of a WAF rule.
   * 
   * @param request - DescribeDcdnWafDefaultRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnWafDefaultRulesResponse
   */
  async describeDcdnWafDefaultRulesWithOptions(request: $_model.DescribeDcdnWafDefaultRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnWafDefaultRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.queryArgs)) {
      query["QueryArgs"] = request.queryArgs;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnWafDefaultRules",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnWafDefaultRulesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnWafDefaultRulesResponse({}));
  }

  /**
   * Queries the default configurations of a WAF rule.
   * 
   * @param request - DescribeDcdnWafDefaultRulesRequest
   * @returns DescribeDcdnWafDefaultRulesResponse
   */
  async describeDcdnWafDefaultRules(request: $_model.DescribeDcdnWafDefaultRulesRequest): Promise<$_model.DescribeDcdnWafDefaultRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnWafDefaultRulesWithOptions(request, runtime);
  }

  /**
   * Queries domain names that have Web Application Firewall (WAF) enabled and the relevant information, including the status of the access control list (ACL), protection against HTTP flood attacks, domain name, and WAF.
   * 
   * @remarks
   * > You can call this operation up to 50 times per second per account.
   * 
   * @param request - DescribeDcdnWafDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnWafDomainResponse
   */
  async describeDcdnWafDomainWithOptions(request: $_model.DescribeDcdnWafDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnWafDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnWafDomain",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnWafDomainResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnWafDomainResponse({}));
  }

  /**
   * Queries domain names that have Web Application Firewall (WAF) enabled and the relevant information, including the status of the access control list (ACL), protection against HTTP flood attacks, domain name, and WAF.
   * 
   * @remarks
   * > You can call this operation up to 50 times per second per account.
   * 
   * @param request - DescribeDcdnWafDomainRequest
   * @returns DescribeDcdnWafDomainResponse
   */
  async describeDcdnWafDomain(request: $_model.DescribeDcdnWafDomainRequest): Promise<$_model.DescribeDcdnWafDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnWafDomainWithOptions(request, runtime);
  }

  /**
   * Queries the information about the protection policy of a domain name.
   * 
   * @remarks
   * You can call this operation up to 20 times per second per account.
   * 
   * @param request - DescribeDcdnWafDomainDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnWafDomainDetailResponse
   */
  async describeDcdnWafDomainDetailWithOptions(request: $_model.DescribeDcdnWafDomainDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnWafDomainDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnWafDomainDetail",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnWafDomainDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnWafDomainDetailResponse({}));
  }

  /**
   * Queries the information about the protection policy of a domain name.
   * 
   * @remarks
   * You can call this operation up to 20 times per second per account.
   * 
   * @param request - DescribeDcdnWafDomainDetailRequest
   * @returns DescribeDcdnWafDomainDetailResponse
   */
  async describeDcdnWafDomainDetail(request: $_model.DescribeDcdnWafDomainDetailRequest): Promise<$_model.DescribeDcdnWafDomainDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnWafDomainDetailWithOptions(request, runtime);
  }

  /**
   * Queries the accelerated domain names that are protected by Web Application Firewall (WAF). Fuzzy search is supported.
   * 
   * @remarks
   * You can call this operation up to 20 times per second per account.
   * 
   * @param request - DescribeDcdnWafDomainsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnWafDomainsResponse
   */
  async describeDcdnWafDomainsWithOptions(request: $_model.DescribeDcdnWafDomainsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnWafDomainsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryArgs)) {
      query["QueryArgs"] = request.queryArgs;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnWafDomains",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnWafDomainsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnWafDomainsResponse({}));
  }

  /**
   * Queries the accelerated domain names that are protected by Web Application Firewall (WAF). Fuzzy search is supported.
   * 
   * @remarks
   * You can call this operation up to 20 times per second per account.
   * 
   * @param request - DescribeDcdnWafDomainsRequest
   * @returns DescribeDcdnWafDomainsResponse
   */
  async describeDcdnWafDomains(request: $_model.DescribeDcdnWafDomainsRequest): Promise<$_model.DescribeDcdnWafDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnWafDomainsWithOptions(request, runtime);
  }

  /**
   * Queries the information about match conditions in a custom protection rule, such as the match fields, logical characters, and match content.
   * 
   * @remarks
   * You can call this operation up to 20 times per second per account.
   * 
   * @param request - DescribeDcdnWafFilterInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnWafFilterInfoResponse
   */
  async describeDcdnWafFilterInfoWithOptions(request: $_model.DescribeDcdnWafFilterInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnWafFilterInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.defenseScenes)) {
      query["DefenseScenes"] = request.defenseScenes;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnWafFilterInfo",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnWafFilterInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnWafFilterInfoResponse({}));
  }

  /**
   * Queries the information about match conditions in a custom protection rule, such as the match fields, logical characters, and match content.
   * 
   * @remarks
   * You can call this operation up to 20 times per second per account.
   * 
   * @param request - DescribeDcdnWafFilterInfoRequest
   * @returns DescribeDcdnWafFilterInfoResponse
   */
  async describeDcdnWafFilterInfo(request: $_model.DescribeDcdnWafFilterInfoRequest): Promise<$_model.DescribeDcdnWafFilterInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnWafFilterInfoWithOptions(request, runtime);
  }

  /**
   * Queries the countries and regions that can be added to the blacklist of Web Application Firewall (WAF).
   * 
   * @remarks
   * > You can call this operation up to 20 times per second per account.
   * 
   * @param request - DescribeDcdnWafGeoInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnWafGeoInfoResponse
   */
  async describeDcdnWafGeoInfoWithOptions(request: $_model.DescribeDcdnWafGeoInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnWafGeoInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnWafGeoInfo",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnWafGeoInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnWafGeoInfoResponse({}));
  }

  /**
   * Queries the countries and regions that can be added to the blacklist of Web Application Firewall (WAF).
   * 
   * @remarks
   * > You can call this operation up to 20 times per second per account.
   * 
   * @param request - DescribeDcdnWafGeoInfoRequest
   * @returns DescribeDcdnWafGeoInfoResponse
   */
  async describeDcdnWafGeoInfo(request: $_model.DescribeDcdnWafGeoInfoRequest): Promise<$_model.DescribeDcdnWafGeoInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnWafGeoInfoWithOptions(request, runtime);
  }

  /**
   * Queries the details of a custom WAF rule group by page.
   * 
   * @param request - DescribeDcdnWafGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnWafGroupResponse
   */
  async describeDcdnWafGroupWithOptions(request: $_model.DescribeDcdnWafGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnWafGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryArgs)) {
      query["QueryArgs"] = request.queryArgs;
    }

    if (!$dara.isNull(request.scope)) {
      query["Scope"] = request.scope;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnWafGroup",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnWafGroupResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnWafGroupResponse({}));
  }

  /**
   * Queries the details of a custom WAF rule group by page.
   * 
   * @param request - DescribeDcdnWafGroupRequest
   * @returns DescribeDcdnWafGroupResponse
   */
  async describeDcdnWafGroup(request: $_model.DescribeDcdnWafGroupRequest): Promise<$_model.DescribeDcdnWafGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnWafGroupWithOptions(request, runtime);
  }

  /**
   * Queries custom Web Application Firewall (WAF) rule groups.
   * 
   * @param request - DescribeDcdnWafGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnWafGroupsResponse
   */
  async describeDcdnWafGroupsWithOptions(request: $_model.DescribeDcdnWafGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnWafGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryArgs)) {
      query["QueryArgs"] = request.queryArgs;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnWafGroups",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnWafGroupsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnWafGroupsResponse({}));
  }

  /**
   * Queries custom Web Application Firewall (WAF) rule groups.
   * 
   * @param request - DescribeDcdnWafGroupsRequest
   * @returns DescribeDcdnWafGroupsResponse
   */
  async describeDcdnWafGroups(request: $_model.DescribeDcdnWafGroupsRequest): Promise<$_model.DescribeDcdnWafGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnWafGroupsWithOptions(request, runtime);
  }

  /**
   * Queries the address from which you can download the Web Application Firewall (WAF) logs of a domain name.
   * 
   * @remarks
   * > 
   * *   If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
   * *   The log data is collected every hour.
   * *   You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeDcdnWafLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnWafLogsResponse
   */
  async describeDcdnWafLogsWithOptions(request: $_model.DescribeDcdnWafLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnWafLogsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnWafLogs",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnWafLogsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnWafLogsResponse({}));
  }

  /**
   * Queries the address from which you can download the Web Application Firewall (WAF) logs of a domain name.
   * 
   * @remarks
   * > 
   * *   If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
   * *   The log data is collected every hour.
   * *   You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeDcdnWafLogsRequest
   * @returns DescribeDcdnWafLogsResponse
   */
  async describeDcdnWafLogs(request: $_model.DescribeDcdnWafLogsRequest): Promise<$_model.DescribeDcdnWafLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnWafLogsWithOptions(request, runtime);
  }

  /**
   * Queries the details of the Web Application Firewall (WAF) protection policies that you configured.
   * 
   * @remarks
   * You can call this operation up to 20 times per second per account.
   * 
   * @param request - DescribeDcdnWafPoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnWafPoliciesResponse
   */
  async describeDcdnWafPoliciesWithOptions(request: $_model.DescribeDcdnWafPoliciesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnWafPoliciesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryArgs)) {
      query["QueryArgs"] = request.queryArgs;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnWafPolicies",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnWafPoliciesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnWafPoliciesResponse({}));
  }

  /**
   * Queries the details of the Web Application Firewall (WAF) protection policies that you configured.
   * 
   * @remarks
   * You can call this operation up to 20 times per second per account.
   * 
   * @param request - DescribeDcdnWafPoliciesRequest
   * @returns DescribeDcdnWafPoliciesResponse
   */
  async describeDcdnWafPolicies(request: $_model.DescribeDcdnWafPoliciesRequest): Promise<$_model.DescribeDcdnWafPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnWafPoliciesWithOptions(request, runtime);
  }

  /**
   * Queries the details of a protection policy.
   * 
   * @remarks
   * > You can call this operation up to 20 times per second per account.
   * 
   * @param request - DescribeDcdnWafPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnWafPolicyResponse
   */
  async describeDcdnWafPolicyWithOptions(request: $_model.DescribeDcdnWafPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnWafPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnWafPolicy",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnWafPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnWafPolicyResponse({}));
  }

  /**
   * Queries the details of a protection policy.
   * 
   * @remarks
   * > You can call this operation up to 20 times per second per account.
   * 
   * @param request - DescribeDcdnWafPolicyRequest
   * @returns DescribeDcdnWafPolicyResponse
   */
  async describeDcdnWafPolicy(request: $_model.DescribeDcdnWafPolicyRequest): Promise<$_model.DescribeDcdnWafPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnWafPolicyWithOptions(request, runtime);
  }

  /**
   * Queries the accelerated domain names that are protected by a specified Web Application Firewall (WAF) protection policy.
   * 
   * @remarks
   * You can call this operation up to 20 times per second per user.
   * 
   * @param request - DescribeDcdnWafPolicyDomainsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnWafPolicyDomainsResponse
   */
  async describeDcdnWafPolicyDomainsWithOptions(request: $_model.DescribeDcdnWafPolicyDomainsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnWafPolicyDomainsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnWafPolicyDomains",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnWafPolicyDomainsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnWafPolicyDomainsResponse({}));
  }

  /**
   * Queries the accelerated domain names that are protected by a specified Web Application Firewall (WAF) protection policy.
   * 
   * @remarks
   * You can call this operation up to 20 times per second per user.
   * 
   * @param request - DescribeDcdnWafPolicyDomainsRequest
   * @returns DescribeDcdnWafPolicyDomainsResponse
   */
  async describeDcdnWafPolicyDomains(request: $_model.DescribeDcdnWafPolicyDomainsRequest): Promise<$_model.DescribeDcdnWafPolicyDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnWafPolicyDomainsWithOptions(request, runtime);
  }

  /**
   * Queries the domain names that can be bound to a custom protection policy.
   * 
   * @remarks
   * You can call this operation up to 20 times per second per account.
   * 
   * @param request - DescribeDcdnWafPolicyValidDomainsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnWafPolicyValidDomainsResponse
   */
  async describeDcdnWafPolicyValidDomainsWithOptions(request: $_model.DescribeDcdnWafPolicyValidDomainsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnWafPolicyValidDomainsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.defenseScene)) {
      query["DefenseScene"] = request.defenseScene;
    }

    if (!$dara.isNull(request.domainNameLike)) {
      query["DomainNameLike"] = request.domainNameLike;
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
      action: "DescribeDcdnWafPolicyValidDomains",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnWafPolicyValidDomainsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnWafPolicyValidDomainsResponse({}));
  }

  /**
   * Queries the domain names that can be bound to a custom protection policy.
   * 
   * @remarks
   * You can call this operation up to 20 times per second per account.
   * 
   * @param request - DescribeDcdnWafPolicyValidDomainsRequest
   * @returns DescribeDcdnWafPolicyValidDomainsResponse
   */
  async describeDcdnWafPolicyValidDomains(request: $_model.DescribeDcdnWafPolicyValidDomainsRequest): Promise<$_model.DescribeDcdnWafPolicyValidDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnWafPolicyValidDomainsWithOptions(request, runtime);
  }

  /**
   * Queries the details of a specified protection rule.
   * 
   * @remarks
   * #
   * You can call this operation up to 20 times per second per account.
   * 
   * @param request - DescribeDcdnWafRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnWafRuleResponse
   */
  async describeDcdnWafRuleWithOptions(request: $_model.DescribeDcdnWafRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnWafRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnWafRule",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnWafRuleResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnWafRuleResponse({}));
  }

  /**
   * Queries the details of a specified protection rule.
   * 
   * @remarks
   * #
   * You can call this operation up to 20 times per second per account.
   * 
   * @param request - DescribeDcdnWafRuleRequest
   * @returns DescribeDcdnWafRuleResponse
   */
  async describeDcdnWafRule(request: $_model.DescribeDcdnWafRuleRequest): Promise<$_model.DescribeDcdnWafRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnWafRuleWithOptions(request, runtime);
  }

  /**
   * Queries the details of the protection rules that you configured.
   * 
   * @remarks
   * You can call this operation up to 20 times per second per account.
   * 
   * @param request - DescribeDcdnWafRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnWafRulesResponse
   */
  async describeDcdnWafRulesWithOptions(request: $_model.DescribeDcdnWafRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnWafRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryArgs)) {
      query["QueryArgs"] = request.queryArgs;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnWafRules",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnWafRulesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnWafRulesResponse({}));
  }

  /**
   * Queries the details of the protection rules that you configured.
   * 
   * @remarks
   * You can call this operation up to 20 times per second per account.
   * 
   * @param request - DescribeDcdnWafRulesRequest
   * @returns DescribeDcdnWafRulesResponse
   */
  async describeDcdnWafRules(request: $_model.DescribeDcdnWafRulesRequest): Promise<$_model.DescribeDcdnWafRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnWafRulesWithOptions(request, runtime);
  }

  /**
   * Queries the information about the type of the protection policy that you use.
   * 
   * @remarks
   * You can call this operation up to 20 times per second per user.
   * 
   * @param request - DescribeDcdnWafScenesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnWafScenesResponse
   */
  async describeDcdnWafScenesWithOptions(request: $_model.DescribeDcdnWafScenesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnWafScenesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.defenseScenes)) {
      query["DefenseScenes"] = request.defenseScenes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnWafScenes",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnWafScenesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnWafScenesResponse({}));
  }

  /**
   * Queries the information about the type of the protection policy that you use.
   * 
   * @remarks
   * You can call this operation up to 20 times per second per user.
   * 
   * @param request - DescribeDcdnWafScenesRequest
   * @returns DescribeDcdnWafScenesResponse
   */
  async describeDcdnWafScenes(request: $_model.DescribeDcdnWafScenesRequest): Promise<$_model.DescribeDcdnWafScenesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnWafScenesWithOptions(request, runtime);
  }

  /**
   * Queries the information about Dynamic Content Delivery Network (DCDN) Web Application Firewall WAF), including the time when WAF is enabled, edition of WAF, current status of WAF, metering method for requests, and metering method for rules.
   * 
   * @remarks
   * # Usage notes
   * You can call this operation up to 20 times per second per account.
   * 
   * @param request - DescribeDcdnWafServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnWafServiceResponse
   */
  async describeDcdnWafServiceWithOptions(request: $_model.DescribeDcdnWafServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnWafServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnWafService",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnWafServiceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnWafServiceResponse({}));
  }

  /**
   * Queries the information about Dynamic Content Delivery Network (DCDN) Web Application Firewall WAF), including the time when WAF is enabled, edition of WAF, current status of WAF, metering method for requests, and metering method for rules.
   * 
   * @remarks
   * # Usage notes
   * You can call this operation up to 20 times per second per account.
   * 
   * @param request - DescribeDcdnWafServiceRequest
   * @returns DescribeDcdnWafServiceResponse
   */
  async describeDcdnWafService(request: $_model.DescribeDcdnWafServiceRequest): Promise<$_model.DescribeDcdnWafServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnWafServiceWithOptions(request, runtime);
  }

  /**
   * Queries the version of Web Application Firewall (WAF) used in Dynamic Content Delivery Network (DCDN).
   * 
   * @remarks
   * You can call this operation up to 20 times per second per account.
   * 
   * @param request - DescribeDcdnWafSpecInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnWafSpecInfoResponse
   */
  async describeDcdnWafSpecInfoWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnWafSpecInfoResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnWafSpecInfo",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnWafSpecInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnWafSpecInfoResponse({}));
  }

  /**
   * Queries the version of Web Application Firewall (WAF) used in Dynamic Content Delivery Network (DCDN).
   * 
   * @remarks
   * You can call this operation up to 20 times per second per account.
   * @returns DescribeDcdnWafSpecInfoResponse
   */
  async describeDcdnWafSpecInfo(): Promise<$_model.DescribeDcdnWafSpecInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnWafSpecInfoWithOptions(runtime);
  }

  /**
   * The number of used SeCUs.
   * 
   * @remarks
   *   You can call this operation up to 10 times per second per account.
   * *   The minimum time granularity for a query is 5 minutes. The maximum time span for a query is 31 days. The time period within which historical data is available for a query is 90 days.
   * 
   * @param request - DescribeDcdnWafUsageDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnWafUsageDataResponse
   */
  async describeDcdnWafUsageDataWithOptions(request: $_model.DescribeDcdnWafUsageDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnWafUsageDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.splitBy)) {
      query["SplitBy"] = request.splitBy;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnWafUsageData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnWafUsageDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnWafUsageDataResponse({}));
  }

  /**
   * The number of used SeCUs.
   * 
   * @remarks
   *   You can call this operation up to 10 times per second per account.
   * *   The minimum time granularity for a query is 5 minutes. The maximum time span for a query is 31 days. The time period within which historical data is available for a query is 90 days.
   * 
   * @param request - DescribeDcdnWafUsageDataRequest
   * @returns DescribeDcdnWafUsageDataResponse
   */
  async describeDcdnWafUsageData(request: $_model.DescribeDcdnWafUsageDataRequest): Promise<$_model.DescribeDcdnWafUsageDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnWafUsageDataWithOptions(request, runtime);
  }

  /**
   * Queries the information about Dynamic Content Delivery Network (DCDN), such as the service activation time, the expiration time, and the current status.
   * 
   * @remarks
   * > You can call this operation up to 20 times per second per account.
   * 
   * @param request - DescribeDcdnsecServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDcdnsecServiceResponse
   */
  async describeDcdnsecServiceWithOptions(request: $_model.DescribeDcdnsecServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDcdnsecServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDcdnsecService",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDcdnsecServiceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDcdnsecServiceResponse({}));
  }

  /**
   * Queries the information about Dynamic Content Delivery Network (DCDN), such as the service activation time, the expiration time, and the current status.
   * 
   * @remarks
   * > You can call this operation up to 20 times per second per account.
   * 
   * @param request - DescribeDcdnsecServiceRequest
   * @returns DescribeDcdnsecServiceResponse
   */
  async describeDcdnsecService(request: $_model.DescribeDcdnsecServiceRequest): Promise<$_model.DescribeDcdnsecServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDcdnsecServiceWithOptions(request, runtime);
  }

  /**
   * Queries attack events.
   * 
   * @param request - DescribeDdosAllEventListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDdosAllEventListResponse
   */
  async describeDdosAllEventListWithOptions(request: $_model.DescribeDdosAllEventListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDdosAllEventListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.eventType)) {
      query["EventType"] = request.eventType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDdosAllEventList",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDdosAllEventListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDdosAllEventListResponse({}));
  }

  /**
   * Queries attack events.
   * 
   * @param request - DescribeDdosAllEventListRequest
   * @returns DescribeDdosAllEventListResponse
   */
  async describeDdosAllEventList(request: $_model.DescribeDdosAllEventListRequest): Promise<$_model.DescribeDdosAllEventListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDdosAllEventListWithOptions(request, runtime);
  }

  /**
   * Queries the encrypted RoutineUid of a routine.
   * 
   * @param request - DescribeEncryptRoutineUidRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEncryptRoutineUidResponse
   */
  async describeEncryptRoutineUidWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEncryptRoutineUidResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEncryptRoutineUid",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEncryptRoutineUidResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEncryptRoutineUidResponse({}));
  }

  /**
   * Queries the encrypted RoutineUid of a routine.
   * @returns DescribeEncryptRoutineUidResponse
   */
  async describeEncryptRoutineUid(): Promise<$_model.DescribeEncryptRoutineUidResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEncryptRoutineUidWithOptions(runtime);
  }

  /**
   * Queries the highlighted data of attack details. You can query the reasons for which requests are blocked based on TraceIDs in logs of requests that are blocked by Basic Web Protection. The highlighted data matches the content blocked by the basic web protection module.
   * 
   * @param request - DescribeHighlightInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHighlightInfoResponse
   */
  async describeHighlightInfoWithOptions(request: $_model.DescribeHighlightInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHighlightInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.traceId)) {
      query["TraceId"] = request.traceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHighlightInfo",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHighlightInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHighlightInfoResponse({}));
  }

  /**
   * Queries the highlighted data of attack details. You can query the reasons for which requests are blocked based on TraceIDs in logs of requests that are blocked by Basic Web Protection. The highlighted data matches the content blocked by the basic web protection module.
   * 
   * @param request - DescribeHighlightInfoRequest
   * @returns DescribeHighlightInfoResponse
   */
  async describeHighlightInfo(request: $_model.DescribeHighlightInfoRequest): Promise<$_model.DescribeHighlightInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHighlightInfoWithOptions(request, runtime);
  }

  /**
   * kv存储实时Qps监控数据
   * 
   * @param request - DescribeKvRealTimeQpsDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeKvRealTimeQpsDataResponse
   */
  async describeKvRealTimeQpsDataWithOptions(request: $_model.DescribeKvRealTimeQpsDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeKvRealTimeQpsDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessType)) {
      query["AccessType"] = request.accessType;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.splitBy)) {
      query["SplitBy"] = request.splitBy;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeKvRealTimeQpsData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeKvRealTimeQpsDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeKvRealTimeQpsDataResponse({}));
  }

  /**
   * kv存储实时Qps监控数据
   * 
   * @param request - DescribeKvRealTimeQpsDataRequest
   * @returns DescribeKvRealTimeQpsDataResponse
   */
  async describeKvRealTimeQpsData(request: $_model.DescribeKvRealTimeQpsDataRequest): Promise<$_model.DescribeKvRealTimeQpsDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeKvRealTimeQpsDataWithOptions(request, runtime);
  }

  /**
   * Queries the usage data of KV storage.
   * 
   * @remarks
   * *Note*** You can call this operation up to 5 times per second per account.
   * * The usage data indicates the number of requests.
   * **Time granularity:** This operation supports only the time granularity of 1 hour.
   * |Time granularity|Time range to query|Historical data available|Data latency|
   * |---|---|---|---|
   * |1 hour|31 days|90 days|3 to 4 hours|
   * 
   * @param request - DescribeKvUsageDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeKvUsageDataResponse
   */
  async describeKvUsageDataWithOptions(request: $_model.DescribeKvUsageDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeKvUsageDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessType)) {
      query["AccessType"] = request.accessType;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.field)) {
      query["Field"] = request.field;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.responseType)) {
      query["ResponseType"] = request.responseType;
    }

    if (!$dara.isNull(request.splitBy)) {
      query["SplitBy"] = request.splitBy;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeKvUsageData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeKvUsageDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeKvUsageDataResponse({}));
  }

  /**
   * Queries the usage data of KV storage.
   * 
   * @remarks
   * *Note*** You can call this operation up to 5 times per second per account.
   * * The usage data indicates the number of requests.
   * **Time granularity:** This operation supports only the time granularity of 1 hour.
   * |Time granularity|Time range to query|Historical data available|Data latency|
   * |---|---|---|---|
   * |1 hour|31 days|90 days|3 to 4 hours|
   * 
   * @param request - DescribeKvUsageDataRequest
   * @returns DescribeKvUsageDataResponse
   */
  async describeKvUsageData(request: $_model.DescribeKvUsageDataRequest): Promise<$_model.DescribeKvUsageDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeKvUsageDataWithOptions(request, runtime);
  }

  /**
   * Queries the feature configurations of an accelerated domain name in the resource directory.
   * 
   * @param request - DescribeRDDomainConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRDDomainConfigResponse
   */
  async describeRDDomainConfigWithOptions(request: $_model.DescribeRDDomainConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRDDomainConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.functionName)) {
      query["FunctionName"] = request.functionName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRDDomainConfig",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRDDomainConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRDDomainConfigResponse({}));
  }

  /**
   * Queries the feature configurations of an accelerated domain name in the resource directory.
   * 
   * @param request - DescribeRDDomainConfigRequest
   * @returns DescribeRDDomainConfigResponse
   */
  async describeRDDomainConfig(request: $_model.DescribeRDDomainConfigRequest): Promise<$_model.DescribeRDDomainConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRDDomainConfigWithOptions(request, runtime);
  }

  /**
   * Queries all domain names of Alibaba Cloud CDN and Dynamic Content Delivery Network (DCDN) in a Resource Directory (RD).
   * 
   * @remarks
   * A domain name can be in one of the following states:
   * *   online
   * *   offline
   * *   configuring
   * *   configure_failed
   * *   checking
   * *   check_failed
   * 
   * @param request - DescribeRDDomainsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRDDomainsResponse
   */
  async describeRDDomainsWithOptions(request: $_model.DescribeRDDomainsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRDDomainsResponse> {
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
      action: "DescribeRDDomains",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRDDomainsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRDDomainsResponse({}));
  }

  /**
   * Queries all domain names of Alibaba Cloud CDN and Dynamic Content Delivery Network (DCDN) in a Resource Directory (RD).
   * 
   * @remarks
   * A domain name can be in one of the following states:
   * *   online
   * *   offline
   * *   configuring
   * *   configure_failed
   * *   checking
   * *   check_failed
   * 
   * @param request - DescribeRDDomainsRequest
   * @returns DescribeRDDomainsResponse
   */
  async describeRDDomains(request: $_model.DescribeRDDomainsRequest): Promise<$_model.DescribeRDDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRDDomainsWithOptions(request, runtime);
  }

  /**
   * Queries the metadata of a specified routine. The metadata includes the routine configuration, configuration version, and code version.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeRoutineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRoutineResponse
   */
  async describeRoutineWithOptions(request: $_model.DescribeRoutineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRoutineResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRoutine",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRoutineResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRoutineResponse({}));
  }

  /**
   * Queries the metadata of a specified routine. The metadata includes the routine configuration, configuration version, and code version.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeRoutineRequest
   * @returns DescribeRoutineResponse
   */
  async describeRoutine(request: $_model.DescribeRoutineRequest): Promise<$_model.DescribeRoutineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRoutineWithOptions(request, runtime);
  }

  /**
   * Queries the canary release environments that are supported by a routine.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeRoutineCanaryEnvsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRoutineCanaryEnvsResponse
   */
  async describeRoutineCanaryEnvsWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRoutineCanaryEnvsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRoutineCanaryEnvs",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRoutineCanaryEnvsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRoutineCanaryEnvsResponse({}));
  }

  /**
   * Queries the canary release environments that are supported by a routine.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * @returns DescribeRoutineCanaryEnvsResponse
   */
  async describeRoutineCanaryEnvs(): Promise<$_model.DescribeRoutineCanaryEnvsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRoutineCanaryEnvsWithOptions(runtime);
  }

  /**
   * Queries the JavaScript code version of a routine.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeRoutineCodeRevisionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRoutineCodeRevisionResponse
   */
  async describeRoutineCodeRevisionWithOptions(request: $_model.DescribeRoutineCodeRevisionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRoutineCodeRevisionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.selectCodeRevision)) {
      body["SelectCodeRevision"] = request.selectCodeRevision;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRoutineCodeRevision",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRoutineCodeRevisionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRoutineCodeRevisionResponse({}));
  }

  /**
   * Queries the JavaScript code version of a routine.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeRoutineCodeRevisionRequest
   * @returns DescribeRoutineCodeRevisionResponse
   */
  async describeRoutineCodeRevision(request: $_model.DescribeRoutineCodeRevisionRequest): Promise<$_model.DescribeRoutineCodeRevisionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRoutineCodeRevisionWithOptions(request, runtime);
  }

  /**
   * Queries the list of domain names that are associated with a routine.
   * 
   * @param request - DescribeRoutineRelatedDomainsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRoutineRelatedDomainsResponse
   */
  async describeRoutineRelatedDomainsWithOptions(request: $_model.DescribeRoutineRelatedDomainsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRoutineRelatedDomainsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRoutineRelatedDomains",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRoutineRelatedDomainsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRoutineRelatedDomainsResponse({}));
  }

  /**
   * Queries the list of domain names that are associated with a routine.
   * 
   * @param request - DescribeRoutineRelatedDomainsRequest
   * @returns DescribeRoutineRelatedDomainsResponse
   */
  async describeRoutineRelatedDomains(request: $_model.DescribeRoutineRelatedDomainsRequest): Promise<$_model.DescribeRoutineRelatedDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRoutineRelatedDomainsWithOptions(request, runtime);
  }

  /**
   * Queries the supported specifications for routines. The private preview supports the following CPU time slice specifications: 5 ms, 50 ms, and 100 ms.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeRoutineSpecRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRoutineSpecResponse
   */
  async describeRoutineSpecWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRoutineSpecResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRoutineSpec",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRoutineSpecResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRoutineSpecResponse({}));
  }

  /**
   * Queries the supported specifications for routines. The private preview supports the following CPU time slice specifications: 5 ms, 50 ms, and 100 ms.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * @returns DescribeRoutineSpecResponse
   */
  async describeRoutineSpec(): Promise<$_model.DescribeRoutineSpecResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRoutineSpecWithOptions(runtime);
  }

  /**
   * Queries the subdomains and routines that belong to your Alibaba Cloud account.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeRoutineUserInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRoutineUserInfoResponse
   */
  async describeRoutineUserInfoWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRoutineUserInfoResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRoutineUserInfo",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRoutineUserInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRoutineUserInfoResponse({}));
  }

  /**
   * Queries the subdomains and routines that belong to your Alibaba Cloud account.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * @returns DescribeRoutineUserInfoResponse
   */
  async describeRoutineUserInfo(): Promise<$_model.DescribeRoutineUserInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRoutineUserInfoWithOptions(runtime);
  }

  /**
   * Whether IPA is enabled and whether you have overdue payments for your IPA are queried.
   * 
   * @remarks
   * *
   * **The maximum number of times that each user can call this operation per second is 20.
   * 
   * @param request - DescribeUserDcdnIpaStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserDcdnIpaStatusResponse
   */
  async describeUserDcdnIpaStatusWithOptions(request: $_model.DescribeUserDcdnIpaStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserDcdnIpaStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUserDcdnIpaStatus",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUserDcdnIpaStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUserDcdnIpaStatusResponse({}));
  }

  /**
   * Whether IPA is enabled and whether you have overdue payments for your IPA are queried.
   * 
   * @remarks
   * *
   * **The maximum number of times that each user can call this operation per second is 20.
   * 
   * @param request - DescribeUserDcdnIpaStatusRequest
   * @returns DescribeUserDcdnIpaStatusResponse
   */
  async describeUserDcdnIpaStatus(request: $_model.DescribeUserDcdnIpaStatusRequest): Promise<$_model.DescribeUserDcdnIpaStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserDcdnIpaStatusWithOptions(request, runtime);
  }

  /**
   * Queries whether DCDN is activated and whether your account has overdue payments.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribeUserDcdnStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserDcdnStatusResponse
   */
  async describeUserDcdnStatusWithOptions(request: $_model.DescribeUserDcdnStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserDcdnStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUserDcdnStatus",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUserDcdnStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUserDcdnStatusResponse({}));
  }

  /**
   * Queries whether DCDN is activated and whether your account has overdue payments.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribeUserDcdnStatusRequest
   * @returns DescribeUserDcdnStatusResponse
   */
  async describeUserDcdnStatus(request: $_model.DescribeUserDcdnStatusRequest): Promise<$_model.DescribeUserDcdnStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserDcdnStatusWithOptions(request, runtime);
  }

  /**
   * Queries whether EdgeRoutine (ER) is activated or has an overdue payment.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribeUserErStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserErStatusResponse
   */
  async describeUserErStatusWithOptions(request: $_model.DescribeUserErStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserErStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUserErStatus",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUserErStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUserErStatusResponse({}));
  }

  /**
   * Queries whether EdgeRoutine (ER) is activated or has an overdue payment.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribeUserErStatusRequest
   * @returns DescribeUserErStatusResponse
   */
  async describeUserErStatus(request: $_model.DescribeUserErStatusRequest): Promise<$_model.DescribeUserErStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserErStatusWithOptions(request, runtime);
  }

  /**
   * Queries whether Log Service is activated and whether you have overdue payments for your Log Service.
   * 
   * @remarks
   * > You can call this operation up to 20 times per second per account.
   * 
   * @param request - DescribeUserLogserviceStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserLogserviceStatusResponse
   */
  async describeUserLogserviceStatusWithOptions(request: $_model.DescribeUserLogserviceStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserLogserviceStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUserLogserviceStatus",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUserLogserviceStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUserLogserviceStatusResponse({}));
  }

  /**
   * Queries whether Log Service is activated and whether you have overdue payments for your Log Service.
   * 
   * @remarks
   * > You can call this operation up to 20 times per second per account.
   * 
   * @param request - DescribeUserLogserviceStatusRequest
   * @returns DescribeUserLogserviceStatusResponse
   */
  async describeUserLogserviceStatus(request: $_model.DescribeUserLogserviceStatusRequest): Promise<$_model.DescribeUserLogserviceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserLogserviceStatusWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of a routine.
   * 
   * @remarks
   * > 
   * *   This operation modifies only the specified configurations. Other configurations remain unchanged.
   * *   If you want to delete a setting, delete the parameter value.
   * *   This operation can add canary release environments. Make sure that the environment names comply with the naming rules. Otherwise, you will fail to add the environments.
   * *   Dynamic Route for CDN (DCDN) provides 35 canary release environments. Among these environments, 34 are deployed in China and 1 is deployed outside China. The canary release environments are:
   *     *   Outside China: presetCanaryOverseas.
   *     *   In China: The 34 canary release environments are named in the format of presetCanaryXX. For example, presetCanaryBeijing represents the canary release environment in Beijing. A canary release environment is in each of the following regions: Anhui, Beijing, Chongqing, Fujian, Gansu, Guangdong, Guangxi, Guizhou, Hainan, Hebei, Heilongjiang, Henan, Hong Kong, Hubei, Hunan, Jiangsu, Jiangxi, Jilin, Liaoning, Macao, Neimenggu, Ningxia, Qinghai, Shaanxi, Shandong, Shanghai, Shanxi, Sichuan, Taiwan, Tianjin, Xinjiang, Xizang, Yunan, and Zhejiang.
   * *   You can call this operation up to 100 times per second per account.
   * 
   * @param tmpReq - EditRoutineConfRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EditRoutineConfResponse
   */
  async editRoutineConfWithOptions(tmpReq: $_model.EditRoutineConfRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EditRoutineConfResponse> {
    tmpReq.validate();
    let request = new $_model.EditRoutineConfShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.envConf)) {
      request.envConfShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.envConf, "EnvConf", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.envConfShrink)) {
      body["EnvConf"] = request.envConfShrink;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EditRoutineConf",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EditRoutineConfResponse>(await this.callApi(params, req, runtime), new $_model.EditRoutineConfResponse({}));
  }

  /**
   * Modifies the configurations of a routine.
   * 
   * @remarks
   * > 
   * *   This operation modifies only the specified configurations. Other configurations remain unchanged.
   * *   If you want to delete a setting, delete the parameter value.
   * *   This operation can add canary release environments. Make sure that the environment names comply with the naming rules. Otherwise, you will fail to add the environments.
   * *   Dynamic Route for CDN (DCDN) provides 35 canary release environments. Among these environments, 34 are deployed in China and 1 is deployed outside China. The canary release environments are:
   *     *   Outside China: presetCanaryOverseas.
   *     *   In China: The 34 canary release environments are named in the format of presetCanaryXX. For example, presetCanaryBeijing represents the canary release environment in Beijing. A canary release environment is in each of the following regions: Anhui, Beijing, Chongqing, Fujian, Gansu, Guangdong, Guangxi, Guizhou, Hainan, Hebei, Heilongjiang, Henan, Hong Kong, Hubei, Hunan, Jiangsu, Jiangxi, Jilin, Liaoning, Macao, Neimenggu, Ningxia, Qinghai, Shaanxi, Shandong, Shanghai, Shanxi, Sichuan, Taiwan, Tianjin, Xinjiang, Xizang, Yunan, and Zhejiang.
   * *   You can call this operation up to 100 times per second per account.
   * 
   * @param request - EditRoutineConfRequest
   * @returns EditRoutineConfResponse
   */
  async editRoutineConf(request: $_model.EditRoutineConfRequest): Promise<$_model.EditRoutineConfResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.editRoutineConfWithOptions(request, runtime);
  }

  /**
   * Queries the value of a key in a key-value pair.
   * 
   * @param request - GetDcdnKvRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDcdnKvResponse
   */
  async getDcdnKvWithOptions(request: $_model.GetDcdnKvRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDcdnKvResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDcdnKv",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDcdnKvResponse>(await this.callApi(params, req, runtime), new $_model.GetDcdnKvResponse({}));
  }

  /**
   * Queries the value of a key in a key-value pair.
   * 
   * @param request - GetDcdnKvRequest
   * @returns GetDcdnKvResponse
   */
  async getDcdnKv(request: $_model.GetDcdnKvRequest): Promise<$_model.GetDcdnKvResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDcdnKvWithOptions(request, runtime);
  }

  /**
   * 查询KV对的值以及TTL信息
   * 
   * @param request - GetDcdnKvDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDcdnKvDetailResponse
   */
  async getDcdnKvDetailWithOptions(request: $_model.GetDcdnKvDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDcdnKvDetailResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDcdnKvDetail",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDcdnKvDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetDcdnKvDetailResponse({}));
  }

  /**
   * 查询KV对的值以及TTL信息
   * 
   * @param request - GetDcdnKvDetailRequest
   * @returns GetDcdnKvDetailResponse
   */
  async getDcdnKvDetail(request: $_model.GetDcdnKvDetailRequest): Promise<$_model.GetDcdnKvDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDcdnKvDetailWithOptions(request, runtime);
  }

  /**
   * Queries the KV status by key value.
   * 
   * @param request - GetDcdnKvStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDcdnKvStatusResponse
   */
  async getDcdnKvStatusWithOptions(request: $_model.GetDcdnKvStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDcdnKvStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDcdnKvStatus",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDcdnKvStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetDcdnKvStatusResponse({}));
  }

  /**
   * Queries the KV status by key value.
   * 
   * @param request - GetDcdnKvStatusRequest
   * @returns GetDcdnKvStatusResponse
   */
  async getDcdnKvStatus(request: $_model.GetDcdnKvStatusRequest): Promise<$_model.GetDcdnKvStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDcdnKvStatusWithOptions(request, runtime);
  }

  /**
   * Traverses the values of keys in a namespace.
   * 
   * @param request - ListDcdnKvRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDcdnKvResponse
   */
  async listDcdnKvWithOptions(request: $_model.ListDcdnKvRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDcdnKvResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDcdnKv",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDcdnKvResponse>(await this.callApi(params, req, runtime), new $_model.ListDcdnKvResponse({}));
  }

  /**
   * Traverses the values of keys in a namespace.
   * 
   * @param request - ListDcdnKvRequest
   * @returns ListDcdnKvResponse
   */
  async listDcdnKv(request: $_model.ListDcdnKvRequest): Promise<$_model.ListDcdnKvResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDcdnKvWithOptions(request, runtime);
  }

  /**
   * Queries information about a real-time log delivery project.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - ListDcdnRealTimeDeliveryProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDcdnRealTimeDeliveryProjectResponse
   */
  async listDcdnRealTimeDeliveryProjectWithOptions(request: $_model.ListDcdnRealTimeDeliveryProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDcdnRealTimeDeliveryProjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.businessType)) {
      query["BusinessType"] = request.businessType;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
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
      action: "ListDcdnRealTimeDeliveryProject",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDcdnRealTimeDeliveryProjectResponse>(await this.callApi(params, req, runtime), new $_model.ListDcdnRealTimeDeliveryProjectResponse({}));
  }

  /**
   * Queries information about a real-time log delivery project.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - ListDcdnRealTimeDeliveryProjectRequest
   * @returns ListDcdnRealTimeDeliveryProjectResponse
   */
  async listDcdnRealTimeDeliveryProject(request: $_model.ListDcdnRealTimeDeliveryProjectRequest): Promise<$_model.ListDcdnRealTimeDeliveryProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDcdnRealTimeDeliveryProjectWithOptions(request, runtime);
  }

  /**
   * A客户定制新增修改域名采样率接口
   * 
   * @param request - ModifyCustomDomainSampleRateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyCustomDomainSampleRateResponse
   */
  async modifyCustomDomainSampleRateWithOptions(request: $_model.ModifyCustomDomainSampleRateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyCustomDomainSampleRateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.baseConfigID)) {
      body["BaseConfigID"] = request.baseConfigID;
    }

    if (!$dara.isNull(request.domainNames)) {
      body["DomainNames"] = request.domainNames;
    }

    if (!$dara.isNull(request.sampleRate)) {
      body["SampleRate"] = request.sampleRate;
    }

    if (!$dara.isNull(request.sinkID)) {
      body["SinkID"] = request.sinkID;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyCustomDomainSampleRate",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyCustomDomainSampleRateResponse>(await this.callApi(params, req, runtime), new $_model.ModifyCustomDomainSampleRateResponse({}));
  }

  /**
   * A客户定制新增修改域名采样率接口
   * 
   * @param request - ModifyCustomDomainSampleRateRequest
   * @returns ModifyCustomDomainSampleRateResponse
   */
  async modifyCustomDomainSampleRate(request: $_model.ModifyCustomDomainSampleRateRequest): Promise<$_model.ModifyCustomDomainSampleRateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyCustomDomainSampleRateWithOptions(request, runtime);
  }

  /**
   * Changes the acceleration region.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - ModifyDCdnDomainSchdmByPropertyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDCdnDomainSchdmByPropertyResponse
   */
  async modifyDCdnDomainSchdmByPropertyWithOptions(request: $_model.ModifyDCdnDomainSchdmByPropertyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDCdnDomainSchdmByPropertyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.property)) {
      query["Property"] = request.property;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDCdnDomainSchdmByProperty",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDCdnDomainSchdmByPropertyResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDCdnDomainSchdmByPropertyResponse({}));
  }

  /**
   * Changes the acceleration region.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - ModifyDCdnDomainSchdmByPropertyRequest
   * @returns ModifyDCdnDomainSchdmByPropertyResponse
   */
  async modifyDCdnDomainSchdmByProperty(request: $_model.ModifyDCdnDomainSchdmByPropertyRequest): Promise<$_model.ModifyDCdnDomainSchdmByPropertyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDCdnDomainSchdmByPropertyWithOptions(request, runtime);
  }

  /**
   * Modifies a custom Web Application Firewall (WAF) rule group.
   * 
   * @param request - ModifyDcdnWafGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDcdnWafGroupResponse
   */
  async modifyDcdnWafGroupWithOptions(request: $_model.ModifyDcdnWafGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDcdnWafGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.rules)) {
      body["Rules"] = request.rules;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDcdnWafGroup",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDcdnWafGroupResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDcdnWafGroupResponse({}));
  }

  /**
   * Modifies a custom Web Application Firewall (WAF) rule group.
   * 
   * @param request - ModifyDcdnWafGroupRequest
   * @returns ModifyDcdnWafGroupResponse
   */
  async modifyDcdnWafGroup(request: $_model.ModifyDcdnWafGroupRequest): Promise<$_model.ModifyDcdnWafGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDcdnWafGroupWithOptions(request, runtime);
  }

  /**
   * Changes the name or the status of a protection policy.
   * 
   * @remarks
   *   You can call this operation up to 20 times per second per account.
   * *   Alibaba Cloud Dynamic Content Delivery Network (DCDN) supports POST requests.
   * 
   * @param request - ModifyDcdnWafPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDcdnWafPolicyResponse
   */
  async modifyDcdnWafPolicyWithOptions(request: $_model.ModifyDcdnWafPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDcdnWafPolicyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.policyId)) {
      body["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.policyName)) {
      body["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.policyStatus)) {
      body["PolicyStatus"] = request.policyStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDcdnWafPolicy",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDcdnWafPolicyResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDcdnWafPolicyResponse({}));
  }

  /**
   * Changes the name or the status of a protection policy.
   * 
   * @remarks
   *   You can call this operation up to 20 times per second per account.
   * *   Alibaba Cloud Dynamic Content Delivery Network (DCDN) supports POST requests.
   * 
   * @param request - ModifyDcdnWafPolicyRequest
   * @returns ModifyDcdnWafPolicyResponse
   */
  async modifyDcdnWafPolicy(request: $_model.ModifyDcdnWafPolicyRequest): Promise<$_model.ModifyDcdnWafPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDcdnWafPolicyWithOptions(request, runtime);
  }

  /**
   * Changes the accelerated domain names that are bound to a protection policy.
   * 
   * @remarks
   * # Usage notes
   * *   You can call this operation up to 20 times per second per account.
   * *   Alibaba Cloud Dynamic Route for CDN (DCDN) supports POST requests.
   * 
   * @param request - ModifyDcdnWafPolicyDomainsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDcdnWafPolicyDomainsResponse
   */
  async modifyDcdnWafPolicyDomainsWithOptions(request: $_model.ModifyDcdnWafPolicyDomainsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDcdnWafPolicyDomainsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bindDomains)) {
      body["BindDomains"] = request.bindDomains;
    }

    if (!$dara.isNull(request.method)) {
      body["Method"] = request.method;
    }

    if (!$dara.isNull(request.policyId)) {
      body["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.unbindDomains)) {
      body["UnbindDomains"] = request.unbindDomains;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDcdnWafPolicyDomains",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDcdnWafPolicyDomainsResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDcdnWafPolicyDomainsResponse({}));
  }

  /**
   * Changes the accelerated domain names that are bound to a protection policy.
   * 
   * @remarks
   * # Usage notes
   * *   You can call this operation up to 20 times per second per account.
   * *   Alibaba Cloud Dynamic Route for CDN (DCDN) supports POST requests.
   * 
   * @param request - ModifyDcdnWafPolicyDomainsRequest
   * @returns ModifyDcdnWafPolicyDomainsResponse
   */
  async modifyDcdnWafPolicyDomains(request: $_model.ModifyDcdnWafPolicyDomainsRequest): Promise<$_model.ModifyDcdnWafPolicyDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDcdnWafPolicyDomainsWithOptions(request, runtime);
  }

  /**
   * Changes the name, status, or configurations of a protection rule.
   * 
   * @remarks
   *   You can call this operation up to 20 times per second per account.
   * *   Alibaba Cloud Dynamic Content Delivery Network (DCDN) supports POST requests.
   * *   You must configure at least one of the **RuleStatus**, **RuleName** and **RuleConfig** parameters.
   * 
   * @param request - ModifyDcdnWafRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDcdnWafRuleResponse
   */
  async modifyDcdnWafRuleWithOptions(request: $_model.ModifyDcdnWafRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDcdnWafRuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ruleConfig)) {
      body["RuleConfig"] = request.ruleConfig;
    }

    if (!$dara.isNull(request.ruleId)) {
      body["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.ruleName)) {
      body["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.ruleStatus)) {
      body["RuleStatus"] = request.ruleStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDcdnWafRule",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDcdnWafRuleResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDcdnWafRuleResponse({}));
  }

  /**
   * Changes the name, status, or configurations of a protection rule.
   * 
   * @remarks
   *   You can call this operation up to 20 times per second per account.
   * *   Alibaba Cloud Dynamic Content Delivery Network (DCDN) supports POST requests.
   * *   You must configure at least one of the **RuleStatus**, **RuleName** and **RuleConfig** parameters.
   * 
   * @param request - ModifyDcdnWafRuleRequest
   * @returns ModifyDcdnWafRuleResponse
   */
  async modifyDcdnWafRule(request: $_model.ModifyDcdnWafRuleRequest): Promise<$_model.ModifyDcdnWafRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDcdnWafRuleWithOptions(request, runtime);
  }

  /**
   * Activates Dynamic Route for CDN (DCDN).
   * 
   * @remarks
   * > 
   * *   DCDN can be activated only once per Alibaba Cloud account. The Alibaba Cloud account must pass real-name verification.
   * *   You can call this operation up to five times per second per user.
   * 
   * @param request - OpenDcdnServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenDcdnServiceResponse
   */
  async openDcdnServiceWithOptions(request: $_model.OpenDcdnServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OpenDcdnServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.billType)) {
      query["BillType"] = request.billType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.websocketBillType)) {
      query["WebsocketBillType"] = request.websocketBillType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OpenDcdnService",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OpenDcdnServiceResponse>(await this.callApi(params, req, runtime), new $_model.OpenDcdnServiceResponse({}));
  }

  /**
   * Activates Dynamic Route for CDN (DCDN).
   * 
   * @remarks
   * > 
   * *   DCDN can be activated only once per Alibaba Cloud account. The Alibaba Cloud account must pass real-name verification.
   * *   You can call this operation up to five times per second per user.
   * 
   * @param request - OpenDcdnServiceRequest
   * @returns OpenDcdnServiceResponse
   */
  async openDcdnService(request: $_model.OpenDcdnServiceRequest): Promise<$_model.OpenDcdnServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.openDcdnServiceWithOptions(request, runtime);
  }

  /**
   * Prefetches content from origin servers to points of presence (POPs). This reduces workloads on origin servers because users can hit cache upon their first visits.
   * 
   * @remarks
   *   You can call the [RefreshDcdnObjectCaches](https://help.aliyun.com/document_detail/130620.html) operation to refresh content and call the [PreloadDcdnObjectCaches](https://help.aliyun.com/document_detail/130636.html) operation to prefetch content.
   * *   Dynamic Content Delivery Network (DCDN) supports POST requests in which parameters are sent as a form.
   * *   By default, each Alibaba Cloud account can submit up to 1,000 URLs per day. If the daily peak bandwidth value of your workloads exceeds 200 Mbit/s, you can [submit a ticket](https://account.alibabacloud.com/login/login.htm?oauth_callback=https%3A//ticket-intl.console.aliyun.com/%23/ticket/createIndex) to increase your daily quota. Alibaba Cloud reviews your application and then increases the quota accordingly.
   * *   You can specify up to 100 URLs to prefetch.
   * *   The prefetch queue of each Alibaba Cloud account can contain up to 100,000 URLs. DCDN executes prefetch tasks based on the time at which you submit the URLs.
   * *   You can call this operation up to 15 times per second per account.
   * ## Description
   * *   After a refresh task is submitted and completed, the POPs immediately start to retrieve resources from the origin server. Therefore, a large number of refresh tasks cause a large number of concurrent download tasks. This increases the number of requests that are redirected to the origin server. The back-to-origin routing process consumes more bandwidth resources and the origin server may be overwhelmed.
   * *   The time required for a prefetch task to complete is proportional to the size of the prefetched file. In actual practice, most prefetch tasks require 5 to 30 minutes to complete. A task with a smaller average file size requires less time.
   * *   To allow RAM users to perform this operation, you need to first grant them the required permissions. For more information, see [Authorize a RAM user to prefetch and refresh resources](https://help.aliyun.com/document_detail/445051.html).
   * 
   * @param request - PreloadDcdnObjectCachesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PreloadDcdnObjectCachesResponse
   */
  async preloadDcdnObjectCachesWithOptions(request: $_model.PreloadDcdnObjectCachesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PreloadDcdnObjectCachesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.area)) {
      query["Area"] = request.area;
    }

    if (!$dara.isNull(request.l2Preload)) {
      query["L2Preload"] = request.l2Preload;
    }

    if (!$dara.isNull(request.objectPath)) {
      query["ObjectPath"] = request.objectPath;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.queryHashkey)) {
      query["QueryHashkey"] = request.queryHashkey;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.withHeader)) {
      query["WithHeader"] = request.withHeader;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PreloadDcdnObjectCaches",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PreloadDcdnObjectCachesResponse>(await this.callApi(params, req, runtime), new $_model.PreloadDcdnObjectCachesResponse({}));
  }

  /**
   * Prefetches content from origin servers to points of presence (POPs). This reduces workloads on origin servers because users can hit cache upon their first visits.
   * 
   * @remarks
   *   You can call the [RefreshDcdnObjectCaches](https://help.aliyun.com/document_detail/130620.html) operation to refresh content and call the [PreloadDcdnObjectCaches](https://help.aliyun.com/document_detail/130636.html) operation to prefetch content.
   * *   Dynamic Content Delivery Network (DCDN) supports POST requests in which parameters are sent as a form.
   * *   By default, each Alibaba Cloud account can submit up to 1,000 URLs per day. If the daily peak bandwidth value of your workloads exceeds 200 Mbit/s, you can [submit a ticket](https://account.alibabacloud.com/login/login.htm?oauth_callback=https%3A//ticket-intl.console.aliyun.com/%23/ticket/createIndex) to increase your daily quota. Alibaba Cloud reviews your application and then increases the quota accordingly.
   * *   You can specify up to 100 URLs to prefetch.
   * *   The prefetch queue of each Alibaba Cloud account can contain up to 100,000 URLs. DCDN executes prefetch tasks based on the time at which you submit the URLs.
   * *   You can call this operation up to 15 times per second per account.
   * ## Description
   * *   After a refresh task is submitted and completed, the POPs immediately start to retrieve resources from the origin server. Therefore, a large number of refresh tasks cause a large number of concurrent download tasks. This increases the number of requests that are redirected to the origin server. The back-to-origin routing process consumes more bandwidth resources and the origin server may be overwhelmed.
   * *   The time required for a prefetch task to complete is proportional to the size of the prefetched file. In actual practice, most prefetch tasks require 5 to 30 minutes to complete. A task with a smaller average file size requires less time.
   * *   To allow RAM users to perform this operation, you need to first grant them the required permissions. For more information, see [Authorize a RAM user to prefetch and refresh resources](https://help.aliyun.com/document_detail/445051.html).
   * 
   * @param request - PreloadDcdnObjectCachesRequest
   * @returns PreloadDcdnObjectCachesResponse
   */
  async preloadDcdnObjectCaches(request: $_model.PreloadDcdnObjectCachesRequest): Promise<$_model.PreloadDcdnObjectCachesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.preloadDcdnObjectCachesWithOptions(request, runtime);
  }

  /**
   * Publishes the configurations of an accelerated domain name from the staging environment to the production environment.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - PublishDcdnStagingConfigToProductionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishDcdnStagingConfigToProductionResponse
   */
  async publishDcdnStagingConfigToProductionWithOptions(request: $_model.PublishDcdnStagingConfigToProductionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PublishDcdnStagingConfigToProductionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.functionName)) {
      query["FunctionName"] = request.functionName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PublishDcdnStagingConfigToProduction",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PublishDcdnStagingConfigToProductionResponse>(await this.callApi(params, req, runtime), new $_model.PublishDcdnStagingConfigToProductionResponse({}));
  }

  /**
   * Publishes the configurations of an accelerated domain name from the staging environment to the production environment.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - PublishDcdnStagingConfigToProductionRequest
   * @returns PublishDcdnStagingConfigToProductionResponse
   */
  async publishDcdnStagingConfigToProduction(request: $_model.PublishDcdnStagingConfigToProductionRequest): Promise<$_model.PublishDcdnStagingConfigToProductionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.publishDcdnStagingConfigToProductionWithOptions(request, runtime);
  }

  /**
   * Publishes a specified version of routine code to an environment.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param tmpReq - PublishRoutineCodeRevisionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishRoutineCodeRevisionResponse
   */
  async publishRoutineCodeRevisionWithOptions(tmpReq: $_model.PublishRoutineCodeRevisionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PublishRoutineCodeRevisionResponse> {
    tmpReq.validate();
    let request = new $_model.PublishRoutineCodeRevisionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.envs)) {
      request.envsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.envs, "Envs", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.envsShrink)) {
      body["Envs"] = request.envsShrink;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.selectCodeRevision)) {
      body["SelectCodeRevision"] = request.selectCodeRevision;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PublishRoutineCodeRevision",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PublishRoutineCodeRevisionResponse>(await this.callApi(params, req, runtime), new $_model.PublishRoutineCodeRevisionResponse({}));
  }

  /**
   * Publishes a specified version of routine code to an environment.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - PublishRoutineCodeRevisionRequest
   * @returns PublishRoutineCodeRevisionResponse
   */
  async publishRoutineCodeRevision(request: $_model.PublishRoutineCodeRevisionRequest): Promise<$_model.PublishRoutineCodeRevisionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.publishRoutineCodeRevisionWithOptions(request, runtime);
  }

  /**
   * Sets key-value pairs in a namespace.
   * 
   * @param request - PutDcdnKvRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutDcdnKvResponse
   */
  async putDcdnKvWithOptions(request: $_model.PutDcdnKvRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PutDcdnKvResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.expiration)) {
      query["Expiration"] = request.expiration;
    }

    if (!$dara.isNull(request.expirationTtl)) {
      query["ExpirationTtl"] = request.expirationTtl;
    }

    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.value)) {
      body["Value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutDcdnKv",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutDcdnKvResponse>(await this.callApi(params, req, runtime), new $_model.PutDcdnKvResponse({}));
  }

  /**
   * Sets key-value pairs in a namespace.
   * 
   * @param request - PutDcdnKvRequest
   * @returns PutDcdnKvResponse
   */
  async putDcdnKv(request: $_model.PutDcdnKvRequest): Promise<$_model.PutDcdnKvResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putDcdnKvWithOptions(request, runtime);
  }

  /**
   * Adds namespaces to your account.
   * 
   * @param request - PutDcdnKvNamespaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutDcdnKvNamespaceResponse
   */
  async putDcdnKvNamespaceWithOptions(request: $_model.PutDcdnKvNamespaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PutDcdnKvNamespaceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutDcdnKvNamespace",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutDcdnKvNamespaceResponse>(await this.callApi(params, req, runtime), new $_model.PutDcdnKvNamespaceResponse({}));
  }

  /**
   * Adds namespaces to your account.
   * 
   * @param request - PutDcdnKvNamespaceRequest
   * @returns PutDcdnKvNamespaceResponse
   */
  async putDcdnKvNamespace(request: $_model.PutDcdnKvNamespaceRequest): Promise<$_model.PutDcdnKvNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putDcdnKvNamespaceWithOptions(request, runtime);
  }

  /**
   * 设置Namespace的key-value对，支持最大25M的请求体
   * 
   * @param request - PutDcdnKvWithHighCapacityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutDcdnKvWithHighCapacityResponse
   */
  async putDcdnKvWithHighCapacityWithOptions(request: $_model.PutDcdnKvWithHighCapacityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PutDcdnKvWithHighCapacityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutDcdnKvWithHighCapacity",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutDcdnKvWithHighCapacityResponse>(await this.callApi(params, req, runtime), new $_model.PutDcdnKvWithHighCapacityResponse({}));
  }

  /**
   * 设置Namespace的key-value对，支持最大25M的请求体
   * 
   * @param request - PutDcdnKvWithHighCapacityRequest
   * @returns PutDcdnKvWithHighCapacityResponse
   */
  async putDcdnKvWithHighCapacity(request: $_model.PutDcdnKvWithHighCapacityRequest): Promise<$_model.PutDcdnKvWithHighCapacityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putDcdnKvWithHighCapacityWithOptions(request, runtime);
  }

  /**
   * 指定缓存tag刷新节点上的文件内容
   * 
   * @param request - RefreshDcdnObjectCacheByCacheTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefreshDcdnObjectCacheByCacheTagResponse
   */
  async refreshDcdnObjectCacheByCacheTagWithOptions(request: $_model.RefreshDcdnObjectCacheByCacheTagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RefreshDcdnObjectCacheByCacheTagResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cacheTag)) {
      query["CacheTag"] = request.cacheTag;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.force)) {
      query["Force"] = request.force;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RefreshDcdnObjectCacheByCacheTag",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RefreshDcdnObjectCacheByCacheTagResponse>(await this.callApi(params, req, runtime), new $_model.RefreshDcdnObjectCacheByCacheTagResponse({}));
  }

  /**
   * 指定缓存tag刷新节点上的文件内容
   * 
   * @param request - RefreshDcdnObjectCacheByCacheTagRequest
   * @returns RefreshDcdnObjectCacheByCacheTagResponse
   */
  async refreshDcdnObjectCacheByCacheTag(request: $_model.RefreshDcdnObjectCacheByCacheTagRequest): Promise<$_model.RefreshDcdnObjectCacheByCacheTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.refreshDcdnObjectCacheByCacheTagWithOptions(request, runtime);
  }

  /**
   * Refreshes specified objects on points of presence (POPs). The objects can be included in the content of files or URLs. You can refresh multiple URLs in each request.
   * 
   * @remarks
   *   Dynamic Content Delivery Network (DCDN) supports POST requests in which parameters are sent as a form.
   * *   You can call the [RefreshDcdnObjectCaches](https://help.aliyun.com/document_detail/130620.html) operation to purge content and call the [PreloadDcdnObjectCaches](https://help.aliyun.com/document_detail/130636.html) operation to prefetch content.
   * *   By default, each Alibaba Cloud account can purge content from a maximum of 10,000 URLs and 100 directories including subdirectories per day. If the daily peak bandwidth of your Alibaba Cloud account exceeds 200 Mbit/s, [submit a ticket](https://account.alibabacloud.com/login/login.htm?oauth_callback=https%3A//ticket-intl.console.aliyun.com/%23/ticket/createIndex) to request a quota increase. Alibaba Cloud determines whether to approve your application based on your workloads.
   * *   You can specify up to 1,000 URLs or 100 directories that you want to purge in each request.
   * *   You can specify up to 1,000 URLs that you want to purge per minute for each domain name.
   * *   You can call this operation up to 30 times per second per account.
   * #### [](#)Precautions
   * *   After a purge task is completed, your resources that are cached on points of presence (POPs) are removed. When a POP receives a request for your resources, the request is redirected to the origin server to retrieve the resources. Then, the resources are returned to the client and cached on POPs. If you frequently run purge tasks, more requests are redirected to the origin server for resources. This results in high bandwidth costs and more loads on the origin server.
   * *   A purge task takes effect 5 to 6 minutes after being submitted. If the resource you want to purge has a TTL of less than 5 minutes, you wait for it to expire instead of manually running a purge task.
   * *   To allow RAM users to perform this operation, you need to first grant them the required permissions. For more information, see [Authorize a RAM user to prefetch and refresh resources](https://help.aliyun.com/document_detail/445051.html).
   * 
   * @param request - RefreshDcdnObjectCachesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefreshDcdnObjectCachesResponse
   */
  async refreshDcdnObjectCachesWithOptions(request: $_model.RefreshDcdnObjectCachesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RefreshDcdnObjectCachesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.force)) {
      query["Force"] = request.force;
    }

    if (!$dara.isNull(request.objectPath)) {
      query["ObjectPath"] = request.objectPath;
    }

    if (!$dara.isNull(request.objectType)) {
      query["ObjectType"] = request.objectType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RefreshDcdnObjectCaches",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RefreshDcdnObjectCachesResponse>(await this.callApi(params, req, runtime), new $_model.RefreshDcdnObjectCachesResponse({}));
  }

  /**
   * Refreshes specified objects on points of presence (POPs). The objects can be included in the content of files or URLs. You can refresh multiple URLs in each request.
   * 
   * @remarks
   *   Dynamic Content Delivery Network (DCDN) supports POST requests in which parameters are sent as a form.
   * *   You can call the [RefreshDcdnObjectCaches](https://help.aliyun.com/document_detail/130620.html) operation to purge content and call the [PreloadDcdnObjectCaches](https://help.aliyun.com/document_detail/130636.html) operation to prefetch content.
   * *   By default, each Alibaba Cloud account can purge content from a maximum of 10,000 URLs and 100 directories including subdirectories per day. If the daily peak bandwidth of your Alibaba Cloud account exceeds 200 Mbit/s, [submit a ticket](https://account.alibabacloud.com/login/login.htm?oauth_callback=https%3A//ticket-intl.console.aliyun.com/%23/ticket/createIndex) to request a quota increase. Alibaba Cloud determines whether to approve your application based on your workloads.
   * *   You can specify up to 1,000 URLs or 100 directories that you want to purge in each request.
   * *   You can specify up to 1,000 URLs that you want to purge per minute for each domain name.
   * *   You can call this operation up to 30 times per second per account.
   * #### [](#)Precautions
   * *   After a purge task is completed, your resources that are cached on points of presence (POPs) are removed. When a POP receives a request for your resources, the request is redirected to the origin server to retrieve the resources. Then, the resources are returned to the client and cached on POPs. If you frequently run purge tasks, more requests are redirected to the origin server for resources. This results in high bandwidth costs and more loads on the origin server.
   * *   A purge task takes effect 5 to 6 minutes after being submitted. If the resource you want to purge has a TTL of less than 5 minutes, you wait for it to expire instead of manually running a purge task.
   * *   To allow RAM users to perform this operation, you need to first grant them the required permissions. For more information, see [Authorize a RAM user to prefetch and refresh resources](https://help.aliyun.com/document_detail/445051.html).
   * 
   * @param request - RefreshDcdnObjectCachesRequest
   * @returns RefreshDcdnObjectCachesResponse
   */
  async refreshDcdnObjectCaches(request: $_model.RefreshDcdnObjectCachesRequest): Promise<$_model.RefreshDcdnObjectCachesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.refreshDcdnObjectCachesWithOptions(request, runtime);
  }

  /**
   * Refreshes the cache that is written by calling the cache operation of EdgeRoutine. You can refresh multiple URLs in each request.
   * 
   * @remarks
   * > *   Dynamic Content Delivery Network (DCDN) supports POST requests in which parameters are sent as a form.
   * > *   Related operation: [RefreshDcdnObjectCaches](https://help.aliyun.com/document_detail/130620.html).
   * > *   By default, each Alibaba Cloud account can purge content from a maxim> um of 10,000 URLs and 100 directories including subdirectories per day.
   * > *   You can specify up to 1,000 URLs or 100 directories that you want to purge in each request.
   * > *   You can specify up to 1,000 URLs that you want to purge per minute for each domain name.
   * > *   You can call this operation up to 30 times per second per account.
   * 
   * @param request - RefreshErObjectCachesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefreshErObjectCachesResponse
   */
  async refreshErObjectCachesWithOptions(request: $_model.RefreshErObjectCachesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RefreshErObjectCachesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.force)) {
      query["Force"] = request.force;
    }

    if (!$dara.isNull(request.mergeDomainName)) {
      query["MergeDomainName"] = request.mergeDomainName;
    }

    if (!$dara.isNull(request.objectPath)) {
      query["ObjectPath"] = request.objectPath;
    }

    if (!$dara.isNull(request.objectType)) {
      query["ObjectType"] = request.objectType;
    }

    if (!$dara.isNull(request.routineId)) {
      query["RoutineId"] = request.routineId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RefreshErObjectCaches",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RefreshErObjectCachesResponse>(await this.callApi(params, req, runtime), new $_model.RefreshErObjectCachesResponse({}));
  }

  /**
   * Refreshes the cache that is written by calling the cache operation of EdgeRoutine. You can refresh multiple URLs in each request.
   * 
   * @remarks
   * > *   Dynamic Content Delivery Network (DCDN) supports POST requests in which parameters are sent as a form.
   * > *   Related operation: [RefreshDcdnObjectCaches](https://help.aliyun.com/document_detail/130620.html).
   * > *   By default, each Alibaba Cloud account can purge content from a maxim> um of 10,000 URLs and 100 directories including subdirectories per day.
   * > *   You can specify up to 1,000 URLs or 100 directories that you want to purge in each request.
   * > *   You can specify up to 1,000 URLs that you want to purge per minute for each domain name.
   * > *   You can call this operation up to 30 times per second per account.
   * 
   * @param request - RefreshErObjectCachesRequest
   * @returns RefreshErObjectCachesResponse
   */
  async refreshErObjectCaches(request: $_model.RefreshErObjectCachesRequest): Promise<$_model.RefreshErObjectCachesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.refreshErObjectCachesWithOptions(request, runtime);
  }

  /**
   * ER场景下的cache tag粒度的刷新接口
   * 
   * @param request - RefreshErObjectCachesByCacheTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefreshErObjectCachesByCacheTagResponse
   */
  async refreshErObjectCachesByCacheTagWithOptions(request: $_model.RefreshErObjectCachesByCacheTagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RefreshErObjectCachesByCacheTagResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cacheTag)) {
      query["CacheTag"] = request.cacheTag;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.force)) {
      query["Force"] = request.force;
    }

    if (!$dara.isNull(request.mergeDomainName)) {
      query["MergeDomainName"] = request.mergeDomainName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RefreshErObjectCachesByCacheTag",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RefreshErObjectCachesByCacheTagResponse>(await this.callApi(params, req, runtime), new $_model.RefreshErObjectCachesByCacheTagResponse({}));
  }

  /**
   * ER场景下的cache tag粒度的刷新接口
   * 
   * @param request - RefreshErObjectCachesByCacheTagRequest
   * @returns RefreshErObjectCachesByCacheTagResponse
   */
  async refreshErObjectCachesByCacheTag(request: $_model.RefreshErObjectCachesByCacheTagRequest): Promise<$_model.RefreshErObjectCachesByCacheTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.refreshErObjectCachesByCacheTagWithOptions(request, runtime);
  }

  /**
   * Rolls back the configurations of an accelerated domain name from the staging environment to the production environment.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - RollbackDcdnStagingConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RollbackDcdnStagingConfigResponse
   */
  async rollbackDcdnStagingConfigWithOptions(request: $_model.RollbackDcdnStagingConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RollbackDcdnStagingConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RollbackDcdnStagingConfig",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RollbackDcdnStagingConfigResponse>(await this.callApi(params, req, runtime), new $_model.RollbackDcdnStagingConfigResponse({}));
  }

  /**
   * Rolls back the configurations of an accelerated domain name from the staging environment to the production environment.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - RollbackDcdnStagingConfigRequest
   * @returns RollbackDcdnStagingConfigResponse
   */
  async rollbackDcdnStagingConfig(request: $_model.RollbackDcdnStagingConfigRequest): Promise<$_model.RollbackDcdnStagingConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rollbackDcdnStagingConfigWithOptions(request, runtime);
  }

  /**
   * Configures an SSL certificate for a specified domain name.
   * 
   * @param request - SetDcdnDomainCSRCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDcdnDomainCSRCertificateResponse
   */
  async setDcdnDomainCSRCertificateWithOptions(request: $_model.SetDcdnDomainCSRCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetDcdnDomainCSRCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.serverCertificate)) {
      query["ServerCertificate"] = request.serverCertificate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDcdnDomainCSRCertificate",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetDcdnDomainCSRCertificateResponse>(await this.callApi(params, req, runtime), new $_model.SetDcdnDomainCSRCertificateResponse({}));
  }

  /**
   * Configures an SSL certificate for a specified domain name.
   * 
   * @param request - SetDcdnDomainCSRCertificateRequest
   * @returns SetDcdnDomainCSRCertificateResponse
   */
  async setDcdnDomainCSRCertificate(request: $_model.SetDcdnDomainCSRCertificateRequest): Promise<$_model.SetDcdnDomainCSRCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDcdnDomainCSRCertificateWithOptions(request, runtime);
  }

  /**
   * Enables or disables the ShangMi (SM) certificate for a domain name.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - SetDcdnDomainSMCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDcdnDomainSMCertificateResponse
   */
  async setDcdnDomainSMCertificateWithOptions(request: $_model.SetDcdnDomainSMCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetDcdnDomainSMCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certIdentifier)) {
      query["CertIdentifier"] = request.certIdentifier;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.SSLProtocol)) {
      query["SSLProtocol"] = request.SSLProtocol;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDcdnDomainSMCertificate",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetDcdnDomainSMCertificateResponse>(await this.callApi(params, req, runtime), new $_model.SetDcdnDomainSMCertificateResponse({}));
  }

  /**
   * Enables or disables the ShangMi (SM) certificate for a domain name.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - SetDcdnDomainSMCertificateRequest
   * @returns SetDcdnDomainSMCertificateResponse
   */
  async setDcdnDomainSMCertificate(request: $_model.SetDcdnDomainSMCertificateRequest): Promise<$_model.SetDcdnDomainSMCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDcdnDomainSMCertificateWithOptions(request, runtime);
  }

  /**
   * Enables or disables the SSL certificate for a domain name and updates certificate details.
   * 
   * @param request - SetDcdnDomainSSLCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDcdnDomainSSLCertificateResponse
   */
  async setDcdnDomainSSLCertificateWithOptions(request: $_model.SetDcdnDomainSSLCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetDcdnDomainSSLCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certId)) {
      query["CertId"] = request.certId;
    }

    if (!$dara.isNull(request.certName)) {
      query["CertName"] = request.certName;
    }

    if (!$dara.isNull(request.certRegion)) {
      query["CertRegion"] = request.certRegion;
    }

    if (!$dara.isNull(request.certType)) {
      query["CertType"] = request.certType;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.SSLPri)) {
      query["SSLPri"] = request.SSLPri;
    }

    if (!$dara.isNull(request.SSLProtocol)) {
      query["SSLProtocol"] = request.SSLProtocol;
    }

    if (!$dara.isNull(request.SSLPub)) {
      query["SSLPub"] = request.SSLPub;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDcdnDomainSSLCertificate",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetDcdnDomainSSLCertificateResponse>(await this.callApi(params, req, runtime), new $_model.SetDcdnDomainSSLCertificateResponse({}));
  }

  /**
   * Enables or disables the SSL certificate for a domain name and updates certificate details.
   * 
   * @param request - SetDcdnDomainSSLCertificateRequest
   * @returns SetDcdnDomainSSLCertificateResponse
   */
  async setDcdnDomainSSLCertificate(request: $_model.SetDcdnDomainSSLCertificateRequest): Promise<$_model.SetDcdnDomainSSLCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDcdnDomainSSLCertificateWithOptions(request, runtime);
  }

  /**
   * Sets or modifies the domain name configuration in the canary release environment.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - SetDcdnDomainStagingConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDcdnDomainStagingConfigResponse
   */
  async setDcdnDomainStagingConfigWithOptions(request: $_model.SetDcdnDomainStagingConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetDcdnDomainStagingConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.functions)) {
      query["Functions"] = request.functions;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDcdnDomainStagingConfig",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetDcdnDomainStagingConfigResponse>(await this.callApi(params, req, runtime), new $_model.SetDcdnDomainStagingConfigResponse({}));
  }

  /**
   * Sets or modifies the domain name configuration in the canary release environment.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - SetDcdnDomainStagingConfigRequest
   * @returns SetDcdnDomainStagingConfigResponse
   */
  async setDcdnDomainStagingConfig(request: $_model.SetDcdnDomainStagingConfigRequest): Promise<$_model.SetDcdnDomainStagingConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDcdnDomainStagingConfigWithOptions(request, runtime);
  }

  /**
   * Blocks or unblocks IP addresses or CIDR blocks.
   * 
   * @remarks
   * >  You can call this operation to block or unblock a large number of IP addresses or CIDR blocks. You can block or unblock up to 1,000 IP addresses or CIDR blocks in a request.
   * 
   * @param request - SetDcdnFullDomainsBlockIPRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDcdnFullDomainsBlockIPResponse
   */
  async setDcdnFullDomainsBlockIPWithOptions(request: $_model.SetDcdnFullDomainsBlockIPRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetDcdnFullDomainsBlockIPResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.blockInterval)) {
      body["BlockInterval"] = request.blockInterval;
    }

    if (!$dara.isNull(request.IPList)) {
      body["IPList"] = request.IPList;
    }

    if (!$dara.isNull(request.operationType)) {
      body["OperationType"] = request.operationType;
    }

    if (!$dara.isNull(request.updateType)) {
      body["UpdateType"] = request.updateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDcdnFullDomainsBlockIP",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetDcdnFullDomainsBlockIPResponse>(await this.callApi(params, req, runtime), new $_model.SetDcdnFullDomainsBlockIPResponse({}));
  }

  /**
   * Blocks or unblocks IP addresses or CIDR blocks.
   * 
   * @remarks
   * >  You can call this operation to block or unblock a large number of IP addresses or CIDR blocks. You can block or unblock up to 1,000 IP addresses or CIDR blocks in a request.
   * 
   * @param request - SetDcdnFullDomainsBlockIPRequest
   * @returns SetDcdnFullDomainsBlockIPResponse
   */
  async setDcdnFullDomainsBlockIP(request: $_model.SetDcdnFullDomainsBlockIPRequest): Promise<$_model.SetDcdnFullDomainsBlockIPResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDcdnFullDomainsBlockIPWithOptions(request, runtime);
  }

  /**
   * Configures features for a user.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - SetDcdnUserConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDcdnUserConfigResponse
   */
  async setDcdnUserConfigWithOptions(request: $_model.SetDcdnUserConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetDcdnUserConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configs)) {
      query["Configs"] = request.configs;
    }

    if (!$dara.isNull(request.functionId)) {
      query["FunctionId"] = request.functionId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDcdnUserConfig",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetDcdnUserConfigResponse>(await this.callApi(params, req, runtime), new $_model.SetDcdnUserConfigResponse({}));
  }

  /**
   * Configures features for a user.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - SetDcdnUserConfigRequest
   * @returns SetDcdnUserConfigResponse
   */
  async setDcdnUserConfig(request: $_model.SetDcdnUserConfigRequest): Promise<$_model.SetDcdnUserConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDcdnUserConfigWithOptions(request, runtime);
  }

  /**
   * Configures a subdomain for a routine.
   * 
   * @remarks
   * > 
   * *   Each subdomain is globally unique. Resource Access Management (RAM) users cannot create duplicate subdomains.
   * *   You can call this operation up to 100 times per second per account.
   * 
   * @param tmpReq - SetRoutineSubdomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetRoutineSubdomainResponse
   */
  async setRoutineSubdomainWithOptions(tmpReq: $_model.SetRoutineSubdomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetRoutineSubdomainResponse> {
    tmpReq.validate();
    let request = new $_model.SetRoutineSubdomainShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.subdomains)) {
      request.subdomainsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.subdomains, "Subdomains", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.subdomainsShrink)) {
      body["Subdomains"] = request.subdomainsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetRoutineSubdomain",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetRoutineSubdomainResponse>(await this.callApi(params, req, runtime), new $_model.SetRoutineSubdomainResponse({}));
  }

  /**
   * Configures a subdomain for a routine.
   * 
   * @remarks
   * > 
   * *   Each subdomain is globally unique. Resource Access Management (RAM) users cannot create duplicate subdomains.
   * *   You can call this operation up to 100 times per second per account.
   * 
   * @param request - SetRoutineSubdomainRequest
   * @returns SetRoutineSubdomainResponse
   */
  async setRoutineSubdomain(request: $_model.SetRoutineSubdomainRequest): Promise<$_model.SetRoutineSubdomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setRoutineSubdomainWithOptions(request, runtime);
  }

  /**
   * Enables a specified disabled accelerated domain. After the accelerated domain is enabled, the value of the DomainStatus parameter changes to Online for the domain.
   * 
   * @remarks
   * > 
   * *   If an accelerated domain name is in invalid state or your account has an overdue payment, the accelerated domain name cannot be enabled.
   * *   You can call this operation up to 30 times per second per account.
   * 
   * @param request - StartDcdnDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartDcdnDomainResponse
   */
  async startDcdnDomainWithOptions(request: $_model.StartDcdnDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartDcdnDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartDcdnDomain",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartDcdnDomainResponse>(await this.callApi(params, req, runtime), new $_model.StartDcdnDomainResponse({}));
  }

  /**
   * Enables a specified disabled accelerated domain. After the accelerated domain is enabled, the value of the DomainStatus parameter changes to Online for the domain.
   * 
   * @remarks
   * > 
   * *   If an accelerated domain name is in invalid state or your account has an overdue payment, the accelerated domain name cannot be enabled.
   * *   You can call this operation up to 30 times per second per account.
   * 
   * @param request - StartDcdnDomainRequest
   * @returns StartDcdnDomainResponse
   */
  async startDcdnDomain(request: $_model.StartDcdnDomainRequest): Promise<$_model.StartDcdnDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startDcdnDomainWithOptions(request, runtime);
  }

  /**
   * Enables one or more accelerated domain names. After the accelerated domain names are enabled, the value of the DomainStatus parameter for the domain names changes to Online.
   * 
   * @remarks
   *   If an accelerated domain name is in invalid state or your account has an overdue payment, the accelerated domain name cannot be enabled.
   * *   You can call this operation up to 20 times per second per account.
   * 
   * @param request - StartDcdnIpaDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartDcdnIpaDomainResponse
   */
  async startDcdnIpaDomainWithOptions(request: $_model.StartDcdnIpaDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartDcdnIpaDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartDcdnIpaDomain",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartDcdnIpaDomainResponse>(await this.callApi(params, req, runtime), new $_model.StartDcdnIpaDomainResponse({}));
  }

  /**
   * Enables one or more accelerated domain names. After the accelerated domain names are enabled, the value of the DomainStatus parameter for the domain names changes to Online.
   * 
   * @remarks
   *   If an accelerated domain name is in invalid state or your account has an overdue payment, the accelerated domain name cannot be enabled.
   * *   You can call this operation up to 20 times per second per account.
   * 
   * @param request - StartDcdnIpaDomainRequest
   * @returns StartDcdnIpaDomainResponse
   */
  async startDcdnIpaDomain(request: $_model.StartDcdnIpaDomainRequest): Promise<$_model.StartDcdnIpaDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startDcdnIpaDomainWithOptions(request, runtime);
  }

  /**
   * Disables a specified accelerated domain. After the accelerated domain is disabled,
   *                   the value of the DomainStatus parameter changes to Offline for the domain.
   * 
   * @remarks
   * > 
   * *   After an accelerated domain is disabled, Dynamic Content Delivery Network (DCDN) retains its information and routes all the requests that are destined for the accelerated domain to the origin server.
   * *   You can call this operation up to 30 times per second per account.
   * 
   * @param request - StopDcdnDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopDcdnDomainResponse
   */
  async stopDcdnDomainWithOptions(request: $_model.StopDcdnDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopDcdnDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopDcdnDomain",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopDcdnDomainResponse>(await this.callApi(params, req, runtime), new $_model.StopDcdnDomainResponse({}));
  }

  /**
   * Disables a specified accelerated domain. After the accelerated domain is disabled,
   *                   the value of the DomainStatus parameter changes to Offline for the domain.
   * 
   * @remarks
   * > 
   * *   After an accelerated domain is disabled, Dynamic Content Delivery Network (DCDN) retains its information and routes all the requests that are destined for the accelerated domain to the origin server.
   * *   You can call this operation up to 30 times per second per account.
   * 
   * @param request - StopDcdnDomainRequest
   * @returns StopDcdnDomainResponse
   */
  async stopDcdnDomain(request: $_model.StopDcdnDomainRequest): Promise<$_model.StopDcdnDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopDcdnDomainWithOptions(request, runtime);
  }

  /**
   * Disables an accelerated domain name. After an accelerated domain name is disabled, the value of the DomainStatus parameter for the domain name changes to Offline.
   * 
   * @remarks
   * > 
   * *   If you disable an accelerated domain, the configurations of the accelerated domain are still retained. The system automatically forwards all the requests that are destined for this domain to the origin.
   * *   You can call this operation up to 20 times per second per account.
   * 
   * @param request - StopDcdnIpaDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopDcdnIpaDomainResponse
   */
  async stopDcdnIpaDomainWithOptions(request: $_model.StopDcdnIpaDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopDcdnIpaDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopDcdnIpaDomain",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopDcdnIpaDomainResponse>(await this.callApi(params, req, runtime), new $_model.StopDcdnIpaDomainResponse({}));
  }

  /**
   * Disables an accelerated domain name. After an accelerated domain name is disabled, the value of the DomainStatus parameter for the domain name changes to Offline.
   * 
   * @remarks
   * > 
   * *   If you disable an accelerated domain, the configurations of the accelerated domain are still retained. The system automatically forwards all the requests that are destined for this domain to the origin.
   * *   You can call this operation up to 20 times per second per account.
   * 
   * @param request - StopDcdnIpaDomainRequest
   * @returns StopDcdnIpaDomainResponse
   */
  async stopDcdnIpaDomain(request: $_model.StopDcdnIpaDomainRequest): Promise<$_model.StopDcdnIpaDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopDcdnIpaDomainWithOptions(request, runtime);
  }

  /**
   * Adds one or more tags to a resource.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - TagDcdnResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagDcdnResourcesResponse
   */
  async tagDcdnResourcesWithOptions(request: $_model.TagDcdnResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagDcdnResourcesResponse> {
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
      action: "TagDcdnResources",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TagDcdnResourcesResponse>(await this.callApi(params, req, runtime), new $_model.TagDcdnResourcesResponse({}));
  }

  /**
   * Adds one or more tags to a resource.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - TagDcdnResourcesRequest
   * @returns TagDcdnResourcesResponse
   */
  async tagDcdnResources(request: $_model.TagDcdnResourcesRequest): Promise<$_model.TagDcdnResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagDcdnResourcesWithOptions(request, runtime);
  }

  /**
   * Removes one or more tags from a resource.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - UntagDcdnResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagDcdnResourcesResponse
   */
  async untagDcdnResourcesWithOptions(request: $_model.UntagDcdnResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UntagDcdnResourcesResponse> {
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
      action: "UntagDcdnResources",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UntagDcdnResourcesResponse>(await this.callApi(params, req, runtime), new $_model.UntagDcdnResourcesResponse({}));
  }

  /**
   * Removes one or more tags from a resource.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - UntagDcdnResourcesRequest
   * @returns UntagDcdnResourcesResponse
   */
  async untagDcdnResources(request: $_model.UntagDcdnResourcesRequest): Promise<$_model.UntagDcdnResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagDcdnResourcesWithOptions(request, runtime);
  }

  /**
   * Updates a tracking task by task ID.
   * 
   * @remarks
   * > You can call this operation up to three times per second per account.
   * 
   * @param request - UpdateDcdnDeliverTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDcdnDeliverTaskResponse
   */
  async updateDcdnDeliverTaskWithOptions(request: $_model.UpdateDcdnDeliverTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDcdnDeliverTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deliver)) {
      body["Deliver"] = request.deliver;
    }

    if (!$dara.isNull(request.deliverId)) {
      body["DeliverId"] = request.deliverId;
    }

    if (!$dara.isNull(request.domainName)) {
      body["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.reports)) {
      body["Reports"] = request.reports;
    }

    if (!$dara.isNull(request.schedule)) {
      body["Schedule"] = request.schedule;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDcdnDeliverTask",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDcdnDeliverTaskResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDcdnDeliverTaskResponse({}));
  }

  /**
   * Updates a tracking task by task ID.
   * 
   * @remarks
   * > You can call this operation up to three times per second per account.
   * 
   * @param request - UpdateDcdnDeliverTaskRequest
   * @returns UpdateDcdnDeliverTaskResponse
   */
  async updateDcdnDeliverTask(request: $_model.UpdateDcdnDeliverTaskRequest): Promise<$_model.UpdateDcdnDeliverTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDcdnDeliverTaskWithOptions(request, runtime);
  }

  /**
   * Modifies an accelerated domain name.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - UpdateDcdnDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDcdnDomainResponse
   */
  async updateDcdnDomainWithOptions(request: $_model.UpdateDcdnDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDcdnDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.sources)) {
      query["Sources"] = request.sources;
    }

    if (!$dara.isNull(request.topLevelDomain)) {
      query["TopLevelDomain"] = request.topLevelDomain;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDcdnDomain",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDcdnDomainResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDcdnDomainResponse({}));
  }

  /**
   * Modifies an accelerated domain name.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - UpdateDcdnDomainRequest
   * @returns UpdateDcdnDomainResponse
   */
  async updateDcdnDomain(request: $_model.UpdateDcdnDomainRequest): Promise<$_model.UpdateDcdnDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDcdnDomainWithOptions(request, runtime);
  }

  /**
   * Modifies a domain name that is accelerated by IP Application Accelerator (IPA).
   * 
   * @remarks
   * >  You can call this operation up to 20 times per second per account.
   * 
   * @param request - UpdateDcdnIpaDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDcdnIpaDomainResponse
   */
  async updateDcdnIpaDomainWithOptions(request: $_model.UpdateDcdnIpaDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDcdnIpaDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.sources)) {
      query["Sources"] = request.sources;
    }

    if (!$dara.isNull(request.topLevelDomain)) {
      query["TopLevelDomain"] = request.topLevelDomain;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDcdnIpaDomain",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDcdnIpaDomainResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDcdnIpaDomainResponse({}));
  }

  /**
   * Modifies a domain name that is accelerated by IP Application Accelerator (IPA).
   * 
   * @remarks
   * >  You can call this operation up to 20 times per second per account.
   * 
   * @param request - UpdateDcdnIpaDomainRequest
   * @returns UpdateDcdnIpaDomainResponse
   */
  async updateDcdnIpaDomain(request: $_model.UpdateDcdnIpaDomainRequest): Promise<$_model.UpdateDcdnIpaDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDcdnIpaDomainWithOptions(request, runtime);
  }

  /**
   * Updates a real-time log delivery project.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - UpdateDcdnSLSRealtimeLogDeliveryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDcdnSLSRealtimeLogDeliveryResponse
   */
  async updateDcdnSLSRealtimeLogDeliveryWithOptions(request: $_model.UpdateDcdnSLSRealtimeLogDeliveryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDcdnSLSRealtimeLogDeliveryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataCenter)) {
      body["DataCenter"] = request.dataCenter;
    }

    if (!$dara.isNull(request.domainName)) {
      body["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.SLSLogStore)) {
      body["SLSLogStore"] = request.SLSLogStore;
    }

    if (!$dara.isNull(request.SLSProject)) {
      body["SLSProject"] = request.SLSProject;
    }

    if (!$dara.isNull(request.SLSRegion)) {
      body["SLSRegion"] = request.SLSRegion;
    }

    if (!$dara.isNull(request.samplingRate)) {
      body["SamplingRate"] = request.samplingRate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDcdnSLSRealtimeLogDelivery",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDcdnSLSRealtimeLogDeliveryResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDcdnSLSRealtimeLogDeliveryResponse({}));
  }

  /**
   * Updates a real-time log delivery project.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - UpdateDcdnSLSRealtimeLogDeliveryRequest
   * @returns UpdateDcdnSLSRealtimeLogDeliveryResponse
   */
  async updateDcdnSLSRealtimeLogDelivery(request: $_model.UpdateDcdnSLSRealtimeLogDeliveryRequest): Promise<$_model.UpdateDcdnSLSRealtimeLogDeliveryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDcdnSLSRealtimeLogDeliveryWithOptions(request, runtime);
  }

  /**
   * Updates one or more operations reports.
   * 
   * @remarks
   * > You can call this operation up to three times per second per account.
   * 
   * @param request - UpdateDcdnSubTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDcdnSubTaskResponse
   */
  async updateDcdnSubTaskWithOptions(request: $_model.UpdateDcdnSubTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDcdnSubTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.domainName)) {
      body["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.reportIds)) {
      body["ReportIds"] = request.reportIds;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDcdnSubTask",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDcdnSubTaskResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDcdnSubTaskResponse({}));
  }

  /**
   * Updates one or more operations reports.
   * 
   * @remarks
   * > You can call this operation up to three times per second per account.
   * 
   * @param request - UpdateDcdnSubTaskRequest
   * @returns UpdateDcdnSubTaskResponse
   */
  async updateDcdnSubTask(request: $_model.UpdateDcdnSubTaskRequest): Promise<$_model.UpdateDcdnSubTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDcdnSubTaskWithOptions(request, runtime);
  }

  /**
   * Updates the fields in real-time log entries.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - UpdateDcdnUserRealTimeDeliveryFieldRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDcdnUserRealTimeDeliveryFieldResponse
   */
  async updateDcdnUserRealTimeDeliveryFieldWithOptions(request: $_model.UpdateDcdnUserRealTimeDeliveryFieldRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDcdnUserRealTimeDeliveryFieldResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.businessType)) {
      query["BusinessType"] = request.businessType;
    }

    if (!$dara.isNull(request.fields)) {
      query["Fields"] = request.fields;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDcdnUserRealTimeDeliveryField",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDcdnUserRealTimeDeliveryFieldResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDcdnUserRealTimeDeliveryFieldResponse({}));
  }

  /**
   * Updates the fields in real-time log entries.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - UpdateDcdnUserRealTimeDeliveryFieldRequest
   * @returns UpdateDcdnUserRealTimeDeliveryFieldResponse
   */
  async updateDcdnUserRealTimeDeliveryField(request: $_model.UpdateDcdnUserRealTimeDeliveryFieldRequest): Promise<$_model.UpdateDcdnUserRealTimeDeliveryFieldResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDcdnUserRealTimeDeliveryFieldWithOptions(request, runtime);
  }

  /**
   * Uploads code to EdgeRoutine (ER).
   * 
   * @remarks
   * > 
   * *   Each time you submit code, a version of the code is generated. You can manage and publish code by version.
   * *   Each routine can retain at most 10 versions. If the upper limit is reached, you must call the DeleteRoutineCodeRevision operation to manually delete versions that are no longer needed before new versions can be saved.
   * *   You can call this operation up to 100 times per second per account.
   * 
   * @param request - UploadRoutineCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadRoutineCodeResponse
   */
  async uploadRoutineCodeWithOptions(request: $_model.UploadRoutineCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadRoutineCodeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.codeDescription)) {
      body["CodeDescription"] = request.codeDescription;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadRoutineCode",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UploadRoutineCodeResponse>(await this.callApi(params, req, runtime), new $_model.UploadRoutineCodeResponse({}));
  }

  /**
   * Uploads code to EdgeRoutine (ER).
   * 
   * @remarks
   * > 
   * *   Each time you submit code, a version of the code is generated. You can manage and publish code by version.
   * *   Each routine can retain at most 10 versions. If the upper limit is reached, you must call the DeleteRoutineCodeRevision operation to manually delete versions that are no longer needed before new versions can be saved.
   * *   You can call this operation up to 100 times per second per account.
   * 
   * @param request - UploadRoutineCodeRequest
   * @returns UploadRoutineCodeResponse
   */
  async uploadRoutineCode(request: $_model.UploadRoutineCodeRequest): Promise<$_model.UploadRoutineCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadRoutineCodeWithOptions(request, runtime);
  }

  /**
   * Uploads code to a routine for testing.
   * 
   * @remarks
   * > 
   * *   Each time you upload code to a routine, a version is generated. The number of versions is counted by CodeRev. The uploaded code is used only for testing.
   * *   The code is automatically published to a staging environment.
   * *   Each routine can retain at most 10 versions. If the upper limit is reached, you need to call the DeleteRoutineCodeRevision operation to manually delete versions that are no longer needed before new versions can be saved.
   * *   You can call this operation up to 100 times per second per account.
   * 
   * @param request - UploadStagingRoutineCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadStagingRoutineCodeResponse
   */
  async uploadStagingRoutineCodeWithOptions(request: $_model.UploadStagingRoutineCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadStagingRoutineCodeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.codeDescription)) {
      body["CodeDescription"] = request.codeDescription;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadStagingRoutineCode",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UploadStagingRoutineCodeResponse>(await this.callApi(params, req, runtime), new $_model.UploadStagingRoutineCodeResponse({}));
  }

  /**
   * Uploads code to a routine for testing.
   * 
   * @remarks
   * > 
   * *   Each time you upload code to a routine, a version is generated. The number of versions is counted by CodeRev. The uploaded code is used only for testing.
   * *   The code is automatically published to a staging environment.
   * *   Each routine can retain at most 10 versions. If the upper limit is reached, you need to call the DeleteRoutineCodeRevision operation to manually delete versions that are no longer needed before new versions can be saved.
   * *   You can call this operation up to 100 times per second per account.
   * 
   * @param request - UploadStagingRoutineCodeRequest
   * @returns UploadStagingRoutineCodeResponse
   */
  async uploadStagingRoutineCode(request: $_model.UploadStagingRoutineCodeRequest): Promise<$_model.UploadStagingRoutineCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadStagingRoutineCodeWithOptions(request, runtime);
  }

  /**
   * Verifies the ownership of a domain name.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - VerifyDcdnDomainOwnerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifyDcdnDomainOwnerResponse
   */
  async verifyDcdnDomainOwnerWithOptions(request: $_model.VerifyDcdnDomainOwnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.VerifyDcdnDomainOwnerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.verifyType)) {
      query["VerifyType"] = request.verifyType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "VerifyDcdnDomainOwner",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.VerifyDcdnDomainOwnerResponse>(await this.callApi(params, req, runtime), new $_model.VerifyDcdnDomainOwnerResponse({}));
  }

  /**
   * Verifies the ownership of a domain name.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - VerifyDcdnDomainOwnerRequest
   * @returns VerifyDcdnDomainOwnerResponse
   */
  async verifyDcdnDomainOwner(request: $_model.VerifyDcdnDomainOwnerRequest): Promise<$_model.VerifyDcdnDomainOwnerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.verifyDcdnDomainOwnerWithOptions(request, runtime);
  }

}
