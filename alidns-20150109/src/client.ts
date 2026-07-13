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
      public: "alidns.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("alidns", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Adds a custom line for a domain name.
   * 
   * @remarks
   * The end IP address of an IP address segment must be greater than or equal to its start IP address.
   * The IP address ranges of segments cannot overlap across any custom lines for the domain name.
   * 
   * @param request - AddCustomLineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddCustomLineResponse
   */
  async addCustomLineWithOptions(request: $_model.AddCustomLineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddCustomLineResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ipSegment)) {
      query["IpSegment"] = request.ipSegment;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.lineName)) {
      query["LineName"] = request.lineName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddCustomLine",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddCustomLineResponse>(await this.callApi(params, req, runtime), new $_model.AddCustomLineResponse({}));
  }

  /**
   * Adds a custom line for a domain name.
   * 
   * @remarks
   * The end IP address of an IP address segment must be greater than or equal to its start IP address.
   * The IP address ranges of segments cannot overlap across any custom lines for the domain name.
   * 
   * @param request - AddCustomLineRequest
   * @returns AddCustomLineResponse
   */
  async addCustomLine(request: $_model.AddCustomLineRequest): Promise<$_model.AddCustomLineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addCustomLineWithOptions(request, runtime);
  }

  /**
   * Adds a domain name to the DNS authoritative proxy service.
   * 
   * @param request - AddDnsCacheDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddDnsCacheDomainResponse
   */
  async addDnsCacheDomainWithOptions(request: $_model.AddDnsCacheDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddDnsCacheDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cacheTtlMax)) {
      query["CacheTtlMax"] = request.cacheTtlMax;
    }

    if (!$dara.isNull(request.cacheTtlMin)) {
      query["CacheTtlMin"] = request.cacheTtlMin;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.sourceDnsServer)) {
      query["SourceDnsServer"] = request.sourceDnsServer;
    }

    if (!$dara.isNull(request.sourceEdns)) {
      query["SourceEdns"] = request.sourceEdns;
    }

    if (!$dara.isNull(request.sourceProtocol)) {
      query["SourceProtocol"] = request.sourceProtocol;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddDnsCacheDomain",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddDnsCacheDomainResponse>(await this.callApi(params, req, runtime), new $_model.AddDnsCacheDomainResponse({}));
  }

  /**
   * Adds a domain name to the DNS authoritative proxy service.
   * 
   * @param request - AddDnsCacheDomainRequest
   * @returns AddDnsCacheDomainResponse
   */
  async addDnsCacheDomain(request: $_model.AddDnsCacheDomainRequest): Promise<$_model.AddDnsCacheDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addDnsCacheDomainWithOptions(request, runtime);
  }

  /**
   * Adds an access strategy.
   * 
   * @param request - AddDnsGtmAccessStrategyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddDnsGtmAccessStrategyResponse
   */
  async addDnsGtmAccessStrategyWithOptions(request: $_model.AddDnsGtmAccessStrategyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddDnsGtmAccessStrategyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.defaultAddrPool)) {
      query["DefaultAddrPool"] = request.defaultAddrPool;
    }

    if (!$dara.isNull(request.defaultAddrPoolType)) {
      query["DefaultAddrPoolType"] = request.defaultAddrPoolType;
    }

    if (!$dara.isNull(request.defaultLatencyOptimization)) {
      query["DefaultLatencyOptimization"] = request.defaultLatencyOptimization;
    }

    if (!$dara.isNull(request.defaultLbaStrategy)) {
      query["DefaultLbaStrategy"] = request.defaultLbaStrategy;
    }

    if (!$dara.isNull(request.defaultMaxReturnAddrNum)) {
      query["DefaultMaxReturnAddrNum"] = request.defaultMaxReturnAddrNum;
    }

    if (!$dara.isNull(request.defaultMinAvailableAddrNum)) {
      query["DefaultMinAvailableAddrNum"] = request.defaultMinAvailableAddrNum;
    }

    if (!$dara.isNull(request.failoverAddrPool)) {
      query["FailoverAddrPool"] = request.failoverAddrPool;
    }

    if (!$dara.isNull(request.failoverAddrPoolType)) {
      query["FailoverAddrPoolType"] = request.failoverAddrPoolType;
    }

    if (!$dara.isNull(request.failoverLatencyOptimization)) {
      query["FailoverLatencyOptimization"] = request.failoverLatencyOptimization;
    }

    if (!$dara.isNull(request.failoverLbaStrategy)) {
      query["FailoverLbaStrategy"] = request.failoverLbaStrategy;
    }

    if (!$dara.isNull(request.failoverMaxReturnAddrNum)) {
      query["FailoverMaxReturnAddrNum"] = request.failoverMaxReturnAddrNum;
    }

    if (!$dara.isNull(request.failoverMinAvailableAddrNum)) {
      query["FailoverMinAvailableAddrNum"] = request.failoverMinAvailableAddrNum;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.lines)) {
      query["Lines"] = request.lines;
    }

    if (!$dara.isNull(request.strategyMode)) {
      query["StrategyMode"] = request.strategyMode;
    }

    if (!$dara.isNull(request.strategyName)) {
      query["StrategyName"] = request.strategyName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddDnsGtmAccessStrategy",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddDnsGtmAccessStrategyResponse>(await this.callApi(params, req, runtime), new $_model.AddDnsGtmAccessStrategyResponse({}));
  }

  /**
   * Adds an access strategy.
   * 
   * @param request - AddDnsGtmAccessStrategyRequest
   * @returns AddDnsGtmAccessStrategyResponse
   */
  async addDnsGtmAccessStrategy(request: $_model.AddDnsGtmAccessStrategyRequest): Promise<$_model.AddDnsGtmAccessStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addDnsGtmAccessStrategyWithOptions(request, runtime);
  }

  /**
   * Adds an address pool.
   * 
   * @param request - AddDnsGtmAddressPoolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddDnsGtmAddressPoolResponse
   */
  async addDnsGtmAddressPoolWithOptions(request: $_model.AddDnsGtmAddressPoolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddDnsGtmAddressPoolResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addr)) {
      query["Addr"] = request.addr;
    }

    if (!$dara.isNull(request.evaluationCount)) {
      query["EvaluationCount"] = request.evaluationCount;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.ispCityNode)) {
      query["IspCityNode"] = request.ispCityNode;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.lbaStrategy)) {
      query["LbaStrategy"] = request.lbaStrategy;
    }

    if (!$dara.isNull(request.monitorExtendInfo)) {
      query["MonitorExtendInfo"] = request.monitorExtendInfo;
    }

    if (!$dara.isNull(request.monitorStatus)) {
      query["MonitorStatus"] = request.monitorStatus;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.protocolType)) {
      query["ProtocolType"] = request.protocolType;
    }

    if (!$dara.isNull(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddDnsGtmAddressPool",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddDnsGtmAddressPoolResponse>(await this.callApi(params, req, runtime), new $_model.AddDnsGtmAddressPoolResponse({}));
  }

  /**
   * Adds an address pool.
   * 
   * @param request - AddDnsGtmAddressPoolRequest
   * @returns AddDnsGtmAddressPoolResponse
   */
  async addDnsGtmAddressPool(request: $_model.AddDnsGtmAddressPoolRequest): Promise<$_model.AddDnsGtmAddressPoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addDnsGtmAddressPoolWithOptions(request, runtime);
  }

  /**
   * Creates a health check.
   * 
   * @remarks
   * **
   * 
   * @param request - AddDnsGtmMonitorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddDnsGtmMonitorResponse
   */
  async addDnsGtmMonitorWithOptions(request: $_model.AddDnsGtmMonitorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddDnsGtmMonitorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addrPoolId)) {
      query["AddrPoolId"] = request.addrPoolId;
    }

    if (!$dara.isNull(request.evaluationCount)) {
      query["EvaluationCount"] = request.evaluationCount;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.ispCityNode)) {
      query["IspCityNode"] = request.ispCityNode;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.monitorExtendInfo)) {
      query["MonitorExtendInfo"] = request.monitorExtendInfo;
    }

    if (!$dara.isNull(request.protocolType)) {
      query["ProtocolType"] = request.protocolType;
    }

    if (!$dara.isNull(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddDnsGtmMonitor",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddDnsGtmMonitorResponse>(await this.callApi(params, req, runtime), new $_model.AddDnsGtmMonitorResponse({}));
  }

  /**
   * Creates a health check.
   * 
   * @remarks
   * **
   * 
   * @param request - AddDnsGtmMonitorRequest
   * @returns AddDnsGtmMonitorResponse
   */
  async addDnsGtmMonitor(request: $_model.AddDnsGtmMonitorRequest): Promise<$_model.AddDnsGtmMonitorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addDnsGtmMonitorWithOptions(request, runtime);
  }

  /**
   * Adds a domain name.
   * 
   * @remarks
   * For more information, see <props="china">[Domain name validity](https://help.aliyun.com/document_detail/67788.html)<props="intl">[Domain name validity](https://www.alibabacloud.com/help/zh/doc-detail/67788.htm).
   * 
   * @param request - AddDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddDomainResponse
   */
  async addDomainWithOptions(request: $_model.AddDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddDomain",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddDomainResponse>(await this.callApi(params, req, runtime), new $_model.AddDomainResponse({}));
  }

  /**
   * Adds a domain name.
   * 
   * @remarks
   * For more information, see <props="china">[Domain name validity](https://help.aliyun.com/document_detail/67788.html)<props="intl">[Domain name validity](https://www.alibabacloud.com/help/zh/doc-detail/67788.htm).
   * 
   * @param request - AddDomainRequest
   * @returns AddDomainResponse
   */
  async addDomain(request: $_model.AddDomainRequest): Promise<$_model.AddDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addDomainWithOptions(request, runtime);
  }

  /**
   * Creates a backup for a domain based on the specified domain name and backup cycle.
   * 
   * @param request - AddDomainBackupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddDomainBackupResponse
   */
  async addDomainBackupWithOptions(request: $_model.AddDomainBackupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddDomainBackupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.periodType)) {
      query["PeriodType"] = request.periodType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddDomainBackup",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddDomainBackupResponse>(await this.callApi(params, req, runtime), new $_model.AddDomainBackupResponse({}));
  }

  /**
   * Creates a backup for a domain based on the specified domain name and backup cycle.
   * 
   * @param request - AddDomainBackupRequest
   * @returns AddDomainBackupResponse
   */
  async addDomainBackup(request: $_model.AddDomainBackupRequest): Promise<$_model.AddDomainBackupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addDomainBackupWithOptions(request, runtime);
  }

  /**
   * Creates a domain name group.
   * 
   * @param request - AddDomainGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddDomainGroupResponse
   */
  async addDomainGroupWithOptions(request: $_model.AddDomainGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddDomainGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddDomainGroup",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddDomainGroupResponse>(await this.callApi(params, req, runtime), new $_model.AddDomainGroupResponse({}));
  }

  /**
   * Creates a domain name group.
   * 
   * @param request - AddDomainGroupRequest
   * @returns AddDomainGroupResponse
   */
  async addDomainGroup(request: $_model.AddDomainGroupRequest): Promise<$_model.AddDomainGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addDomainGroupWithOptions(request, runtime);
  }

  /**
   * Adds a DNS record.
   * 
   * @param request - AddDomainRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddDomainRecordResponse
   */
  async addDomainRecordWithOptions(request: $_model.AddDomainRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddDomainRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.line)) {
      query["Line"] = request.line;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.RR)) {
      query["RR"] = request.RR;
    }

    if (!$dara.isNull(request.TTL)) {
      query["TTL"] = request.TTL;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!$dara.isNull(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddDomainRecord",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddDomainRecordResponse>(await this.callApi(params, req, runtime), new $_model.AddDomainRecordResponse({}));
  }

  /**
   * Adds a DNS record.
   * 
   * @param request - AddDomainRecordRequest
   * @returns AddDomainRecordResponse
   */
  async addDomainRecord(request: $_model.AddDomainRecordRequest): Promise<$_model.AddDomainRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addDomainRecordWithOptions(request, runtime);
  }

  /**
   * Creates an access strategy based on the specified parameters.
   * 
   * @param request - AddGtmAccessStrategyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddGtmAccessStrategyResponse
   */
  async addGtmAccessStrategyWithOptions(request: $_model.AddGtmAccessStrategyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddGtmAccessStrategyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessLines)) {
      query["AccessLines"] = request.accessLines;
    }

    if (!$dara.isNull(request.defaultAddrPoolId)) {
      query["DefaultAddrPoolId"] = request.defaultAddrPoolId;
    }

    if (!$dara.isNull(request.failoverAddrPoolId)) {
      query["FailoverAddrPoolId"] = request.failoverAddrPoolId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.strategyName)) {
      query["StrategyName"] = request.strategyName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddGtmAccessStrategy",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddGtmAccessStrategyResponse>(await this.callApi(params, req, runtime), new $_model.AddGtmAccessStrategyResponse({}));
  }

  /**
   * Creates an access strategy based on the specified parameters.
   * 
   * @param request - AddGtmAccessStrategyRequest
   * @returns AddGtmAccessStrategyResponse
   */
  async addGtmAccessStrategy(request: $_model.AddGtmAccessStrategyRequest): Promise<$_model.AddGtmAccessStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addGtmAccessStrategyWithOptions(request, runtime);
  }

  /**
   * Adds an address pool.
   * 
   * @param request - AddGtmAddressPoolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddGtmAddressPoolResponse
   */
  async addGtmAddressPoolWithOptions(request: $_model.AddGtmAddressPoolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddGtmAddressPoolResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addr)) {
      query["Addr"] = request.addr;
    }

    if (!$dara.isNull(request.evaluationCount)) {
      query["EvaluationCount"] = request.evaluationCount;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.ispCityNode)) {
      query["IspCityNode"] = request.ispCityNode;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.minAvailableAddrNum)) {
      query["MinAvailableAddrNum"] = request.minAvailableAddrNum;
    }

    if (!$dara.isNull(request.monitorExtendInfo)) {
      query["MonitorExtendInfo"] = request.monitorExtendInfo;
    }

    if (!$dara.isNull(request.monitorStatus)) {
      query["MonitorStatus"] = request.monitorStatus;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.protocolType)) {
      query["ProtocolType"] = request.protocolType;
    }

    if (!$dara.isNull(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddGtmAddressPool",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddGtmAddressPoolResponse>(await this.callApi(params, req, runtime), new $_model.AddGtmAddressPoolResponse({}));
  }

  /**
   * Adds an address pool.
   * 
   * @param request - AddGtmAddressPoolRequest
   * @returns AddGtmAddressPoolResponse
   */
  async addGtmAddressPool(request: $_model.AddGtmAddressPoolRequest): Promise<$_model.AddGtmAddressPoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addGtmAddressPoolWithOptions(request, runtime);
  }

  /**
   * Adds a health check.
   * 
   * @param request - AddGtmMonitorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddGtmMonitorResponse
   */
  async addGtmMonitorWithOptions(request: $_model.AddGtmMonitorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddGtmMonitorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addrPoolId)) {
      query["AddrPoolId"] = request.addrPoolId;
    }

    if (!$dara.isNull(request.evaluationCount)) {
      query["EvaluationCount"] = request.evaluationCount;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.ispCityNode)) {
      query["IspCityNode"] = request.ispCityNode;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.monitorExtendInfo)) {
      query["MonitorExtendInfo"] = request.monitorExtendInfo;
    }

    if (!$dara.isNull(request.protocolType)) {
      query["ProtocolType"] = request.protocolType;
    }

    if (!$dara.isNull(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddGtmMonitor",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddGtmMonitorResponse>(await this.callApi(params, req, runtime), new $_model.AddGtmMonitorResponse({}));
  }

  /**
   * Adds a health check.
   * 
   * @param request - AddGtmMonitorRequest
   * @returns AddGtmMonitorResponse
   */
  async addGtmMonitor(request: $_model.AddGtmMonitorRequest): Promise<$_model.AddGtmMonitorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addGtmMonitorWithOptions(request, runtime);
  }

  /**
   * Adds a disaster recovery plan.
   * 
   * @param request - AddGtmRecoveryPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddGtmRecoveryPlanResponse
   */
  async addGtmRecoveryPlanWithOptions(request: $_model.AddGtmRecoveryPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddGtmRecoveryPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.faultAddrPool)) {
      query["FaultAddrPool"] = request.faultAddrPool;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddGtmRecoveryPlan",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddGtmRecoveryPlanResponse>(await this.callApi(params, req, runtime), new $_model.AddGtmRecoveryPlanResponse({}));
  }

  /**
   * Adds a disaster recovery plan.
   * 
   * @param request - AddGtmRecoveryPlanRequest
   * @returns AddGtmRecoveryPlanResponse
   */
  async addGtmRecoveryPlan(request: $_model.AddGtmRecoveryPlanRequest): Promise<$_model.AddGtmRecoveryPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addGtmRecoveryPlanWithOptions(request, runtime);
  }

  /**
   * Adds an authoritative record for recursive resolution.
   * 
   * @remarks
   * - You can specify a domain name (DomainName), page number (PageNumber), and page size (PageSize) to retrieve the list of DNS records for that domain name.
   * - To find DNS records that contain a specific keyword, you can specify the keyword for the host record (RRKeyWord), record type (TypeKeyWord), or record value (ValueKeyWord).
   * - By default, the list of DNS records is sorted from newest to oldest.
   * - You can specify a domain group ID (GroupId). The \\`All Domains\\` group includes all domain names. The \\`Default Group\\` includes domain names that are not assigned to a group.
   * 
   * @param request - AddRecursionRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddRecursionRecordResponse
   */
  async addRecursionRecordWithOptions(request: $_model.AddRecursionRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddRecursionRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.requestSource)) {
      query["RequestSource"] = request.requestSource;
    }

    if (!$dara.isNull(request.rr)) {
      query["Rr"] = request.rr;
    }

    if (!$dara.isNull(request.ttl)) {
      query["Ttl"] = request.ttl;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!$dara.isNull(request.value)) {
      query["Value"] = request.value;
    }

    if (!$dara.isNull(request.weight)) {
      query["Weight"] = request.weight;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddRecursionRecord",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddRecursionRecordResponse>(await this.callApi(params, req, runtime), new $_model.AddRecursionRecordResponse({}));
  }

  /**
   * Adds an authoritative record for recursive resolution.
   * 
   * @remarks
   * - You can specify a domain name (DomainName), page number (PageNumber), and page size (PageSize) to retrieve the list of DNS records for that domain name.
   * - To find DNS records that contain a specific keyword, you can specify the keyword for the host record (RRKeyWord), record type (TypeKeyWord), or record value (ValueKeyWord).
   * - By default, the list of DNS records is sorted from newest to oldest.
   * - You can specify a domain group ID (GroupId). The \\`All Domains\\` group includes all domain names. The \\`Default Group\\` includes domain names that are not assigned to a group.
   * 
   * @param request - AddRecursionRecordRequest
   * @returns AddRecursionRecordResponse
   */
  async addRecursionRecord(request: $_model.AddRecursionRecordRequest): Promise<$_model.AddRecursionRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addRecursionRecordWithOptions(request, runtime);
  }

  /**
   * Adds a built-in authoritative domain name zone for recursive resolution.
   * 
   * @remarks
   * The end IP address of each IP range must be greater than or equal to the start IP address.
   * The IP address ranges of all IP ranges in all custom lines for a domain name cannot overlap.
   * 
   * @param request - AddRecursionZoneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddRecursionZoneResponse
   */
  async addRecursionZoneWithOptions(request: $_model.AddRecursionZoneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddRecursionZoneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.proxyPattern)) {
      query["ProxyPattern"] = request.proxyPattern;
    }

    if (!$dara.isNull(request.zoneName)) {
      query["ZoneName"] = request.zoneName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddRecursionZone",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddRecursionZoneResponse>(await this.callApi(params, req, runtime), new $_model.AddRecursionZoneResponse({}));
  }

  /**
   * Adds a built-in authoritative domain name zone for recursive resolution.
   * 
   * @remarks
   * The end IP address of each IP range must be greater than or equal to the start IP address.
   * The IP address ranges of all IP ranges in all custom lines for a domain name cannot overlap.
   * 
   * @param request - AddRecursionZoneRequest
   * @returns AddRecursionZoneResponse
   */
  async addRecursionZone(request: $_model.AddRecursionZoneRequest): Promise<$_model.AddRecursionZoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addRecursionZoneWithOptions(request, runtime);
  }

  /**
   * Adds the serverHold status to a specified domain name.
   * 
   * @remarks
   * ## Request description
   * - This API adds the serverHold property to a specified domain name.
   * 
   * @param request - AddRspDomainServerHoldStatusForGatewayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddRspDomainServerHoldStatusForGatewayResponse
   */
  async addRspDomainServerHoldStatusForGatewayWithOptions(request: $_model.AddRspDomainServerHoldStatusForGatewayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddRspDomainServerHoldStatusForGatewayResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.statusMsg)) {
      query["StatusMsg"] = request.statusMsg;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddRspDomainServerHoldStatusForGateway",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddRspDomainServerHoldStatusForGatewayResponse>(await this.callApi(params, req, runtime), new $_model.AddRspDomainServerHoldStatusForGatewayResponse({}));
  }

  /**
   * Adds the serverHold status to a specified domain name.
   * 
   * @remarks
   * ## Request description
   * - This API adds the serverHold property to a specified domain name.
   * 
   * @param request - AddRspDomainServerHoldStatusForGatewayRequest
   * @returns AddRspDomainServerHoldStatusForGatewayResponse
   */
  async addRspDomainServerHoldStatusForGateway(request: $_model.AddRspDomainServerHoldStatusForGatewayRequest): Promise<$_model.AddRspDomainServerHoldStatusForGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addRspDomainServerHoldStatusForGatewayWithOptions(request, runtime);
  }

  /**
   * Adds the serverHold status for a specified domain name.
   * 
   * @remarks
   * ## Request description
   * - Adds the serverHold status for a specified domain name.
   * 
   * @param request - AddRspDomainServerHoldStatusForGatewayOteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddRspDomainServerHoldStatusForGatewayOteResponse
   */
  async addRspDomainServerHoldStatusForGatewayOteWithOptions(request: $_model.AddRspDomainServerHoldStatusForGatewayOteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddRspDomainServerHoldStatusForGatewayOteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.statusMsg)) {
      query["StatusMsg"] = request.statusMsg;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddRspDomainServerHoldStatusForGatewayOte",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddRspDomainServerHoldStatusForGatewayOteResponse>(await this.callApi(params, req, runtime), new $_model.AddRspDomainServerHoldStatusForGatewayOteResponse({}));
  }

  /**
   * Adds the serverHold status for a specified domain name.
   * 
   * @remarks
   * ## Request description
   * - Adds the serverHold status for a specified domain name.
   * 
   * @param request - AddRspDomainServerHoldStatusForGatewayOteRequest
   * @returns AddRspDomainServerHoldStatusForGatewayOteResponse
   */
  async addRspDomainServerHoldStatusForGatewayOte(request: $_model.AddRspDomainServerHoldStatusForGatewayOteRequest): Promise<$_model.AddRspDomainServerHoldStatusForGatewayOteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addRspDomainServerHoldStatusForGatewayOteWithOptions(request, runtime);
  }

  /**
   * Binds paid domain names in Alibaba Cloud DNS to an instance ID.
   * 
   * @remarks
   * An instance is considered a new instance if its ID starts with \\"dns-\\". New instances support multiple domain names. You can call this operation to bind domain names directly to the instance. An error occurs if the number of domain names exceeds the instance\\"s limit.
   * An instance is considered a legacy instance if its ID does not start with \\"dns-\\". Legacy instances support only one domain name. If you call this operation on a legacy instance that already has a domain name, the existing domain name is replaced.
   * 
   * @param request - BindInstanceDomainsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindInstanceDomainsResponse
   */
  async bindInstanceDomainsWithOptions(request: $_model.BindInstanceDomainsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindInstanceDomainsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainNames)) {
      query["DomainNames"] = request.domainNames;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindInstanceDomains",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindInstanceDomainsResponse>(await this.callApi(params, req, runtime), new $_model.BindInstanceDomainsResponse({}));
  }

  /**
   * Binds paid domain names in Alibaba Cloud DNS to an instance ID.
   * 
   * @remarks
   * An instance is considered a new instance if its ID starts with \\"dns-\\". New instances support multiple domain names. You can call this operation to bind domain names directly to the instance. An error occurs if the number of domain names exceeds the instance\\"s limit.
   * An instance is considered a legacy instance if its ID does not start with \\"dns-\\". Legacy instances support only one domain name. If you call this operation on a legacy instance that already has a domain name, the existing domain name is replaced.
   * 
   * @param request - BindInstanceDomainsRequest
   * @returns BindInstanceDomainsResponse
   */
  async bindInstanceDomains(request: $_model.BindInstanceDomainsRequest): Promise<$_model.BindInstanceDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindInstanceDomainsWithOptions(request, runtime);
  }

  /**
   * Moves a domain name to a new group.
   * 
   * @remarks
   * You can specify the ID of a domain name group (GroupId). The All Domains group contains all domain names, while the Default group contains domain names that are not assigned to any group.
   * 
   * @param request - ChangeDomainGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeDomainGroupResponse
   */
  async changeDomainGroupWithOptions(request: $_model.ChangeDomainGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeDomainGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeDomainGroup",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeDomainGroupResponse>(await this.callApi(params, req, runtime), new $_model.ChangeDomainGroupResponse({}));
  }

  /**
   * Moves a domain name to a new group.
   * 
   * @remarks
   * You can specify the ID of a domain name group (GroupId). The All Domains group contains all domain names, while the Default group contains domain names that are not assigned to any group.
   * 
   * @param request - ChangeDomainGroupRequest
   * @returns ChangeDomainGroupResponse
   */
  async changeDomainGroup(request: $_model.ChangeDomainGroupRequest): Promise<$_model.ChangeDomainGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeDomainGroupWithOptions(request, runtime);
  }

  /**
   * Changes the domain name that is attached to a Cloud DNS product.
   * 
   * @remarks
   * - **You can call this operation to change the domain name that is attached to a Cloud DNS product. To detach a domain name, call this operation and leave the NewDomain parameter empty.**
   * - **This operation applies to instances of earlier versions. If you use a new edition, such as Personal Edition, Enterprise Standard Edition, or Enterprise Ultimate Edition, call the BindInstanceDomains operation instead.**
   * 
   * @param request - ChangeDomainOfDnsProductRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeDomainOfDnsProductResponse
   */
  async changeDomainOfDnsProductWithOptions(request: $_model.ChangeDomainOfDnsProductRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeDomainOfDnsProductResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.force)) {
      query["Force"] = request.force;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.newDomain)) {
      query["NewDomain"] = request.newDomain;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeDomainOfDnsProduct",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeDomainOfDnsProductResponse>(await this.callApi(params, req, runtime), new $_model.ChangeDomainOfDnsProductResponse({}));
  }

  /**
   * Changes the domain name that is attached to a Cloud DNS product.
   * 
   * @remarks
   * - **You can call this operation to change the domain name that is attached to a Cloud DNS product. To detach a domain name, call this operation and leave the NewDomain parameter empty.**
   * - **This operation applies to instances of earlier versions. If you use a new edition, such as Personal Edition, Enterprise Standard Edition, or Enterprise Ultimate Edition, call the BindInstanceDomains operation instead.**
   * 
   * @param request - ChangeDomainOfDnsProductRequest
   * @returns ChangeDomainOfDnsProductResponse
   */
  async changeDomainOfDnsProduct(request: $_model.ChangeDomainOfDnsProductRequest): Promise<$_model.ChangeDomainOfDnsProductResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeDomainOfDnsProductWithOptions(request, runtime);
  }

  /**
   * Copies a Global Traffic Manager (GTM) configuration.
   * 
   * @param request - CopyGtmConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CopyGtmConfigResponse
   */
  async copyGtmConfigWithOptions(request: $_model.CopyGtmConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CopyGtmConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.copyType)) {
      query["CopyType"] = request.copyType;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.sourceId)) {
      query["SourceId"] = request.sourceId;
    }

    if (!$dara.isNull(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CopyGtmConfig",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CopyGtmConfigResponse>(await this.callApi(params, req, runtime), new $_model.CopyGtmConfigResponse({}));
  }

  /**
   * Copies a Global Traffic Manager (GTM) configuration.
   * 
   * @param request - CopyGtmConfigRequest
   * @returns CopyGtmConfigResponse
   */
  async copyGtmConfig(request: $_model.CopyGtmConfigRequest): Promise<$_model.CopyGtmConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.copyGtmConfigWithOptions(request, runtime);
  }

  /**
   * Registers an agent.
   * 
   * @param tmpReq - CreateAtiAgentRegisterInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAtiAgentRegisterInfoResponse
   */
  async createAtiAgentRegisterInfoWithOptions(tmpReq: $_model.CreateAtiAgentRegisterInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAtiAgentRegisterInfoResponse> {
    tmpReq.validate();
    let request = new $_model.CreateAtiAgentRegisterInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.endpoints)) {
      request.endpointsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.endpoints, "Endpoints", "json");
    }

    let query = { };
    if (!$dara.isNull(request.agentDescription)) {
      query["AgentDescription"] = request.agentDescription;
    }

    if (!$dara.isNull(request.agentDisplayName)) {
      query["AgentDisplayName"] = request.agentDisplayName;
    }

    if (!$dara.isNull(request.agentHost)) {
      query["AgentHost"] = request.agentHost;
    }

    if (!$dara.isNull(request.agentVersion)) {
      query["AgentVersion"] = request.agentVersion;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.endpointsShrink)) {
      query["Endpoints"] = request.endpointsShrink;
    }

    if (!$dara.isNull(request.registrantId)) {
      query["RegistrantId"] = request.registrantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAtiAgentRegisterInfo",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAtiAgentRegisterInfoResponse>(await this.callApi(params, req, runtime), new $_model.CreateAtiAgentRegisterInfoResponse({}));
  }

  /**
   * Registers an agent.
   * 
   * @param request - CreateAtiAgentRegisterInfoRequest
   * @returns CreateAtiAgentRegisterInfoResponse
   */
  async createAtiAgentRegisterInfo(request: $_model.CreateAtiAgentRegisterInfoRequest): Promise<$_model.CreateAtiAgentRegisterInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAtiAgentRegisterInfoWithOptions(request, runtime);
  }

  /**
   * Registers an agent - Step 2: Generates a DNS record for domain ownership verification.
   * 
   * @param request - CreateAtiAgentRegisterInfoAcmeChallengeRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAtiAgentRegisterInfoAcmeChallengeRecordResponse
   */
  async createAtiAgentRegisterInfoAcmeChallengeRecordWithOptions(request: $_model.CreateAtiAgentRegisterInfoAcmeChallengeRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAtiAgentRegisterInfoAcmeChallengeRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentRegisterInfoId)) {
      query["AgentRegisterInfoId"] = request.agentRegisterInfoId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAtiAgentRegisterInfoAcmeChallengeRecord",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAtiAgentRegisterInfoAcmeChallengeRecordResponse>(await this.callApi(params, req, runtime), new $_model.CreateAtiAgentRegisterInfoAcmeChallengeRecordResponse({}));
  }

  /**
   * Registers an agent - Step 2: Generates a DNS record for domain ownership verification.
   * 
   * @param request - CreateAtiAgentRegisterInfoAcmeChallengeRecordRequest
   * @returns CreateAtiAgentRegisterInfoAcmeChallengeRecordResponse
   */
  async createAtiAgentRegisterInfoAcmeChallengeRecord(request: $_model.CreateAtiAgentRegisterInfoAcmeChallengeRecordRequest): Promise<$_model.CreateAtiAgentRegisterInfoAcmeChallengeRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAtiAgentRegisterInfoAcmeChallengeRecordWithOptions(request, runtime);
  }

  /**
   * Submits a real-name registrant.
   * 
   * @param request - CreateAtiRegistrantRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAtiRegistrantResponse
   */
  async createAtiRegistrantWithOptions(request: $_model.CreateAtiRegistrantRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAtiRegistrantResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cc)) {
      query["Cc"] = request.cc;
    }

    if (!$dara.isNull(request.city)) {
      query["City"] = request.city;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.documentCode)) {
      query["DocumentCode"] = request.documentCode;
    }

    if (!$dara.isNull(request.documentImage)) {
      query["DocumentImage"] = request.documentImage;
    }

    if (!$dara.isNull(request.documentType)) {
      query["DocumentType"] = request.documentType;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.phone)) {
      query["Phone"] = request.phone;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    if (!$dara.isNull(request.street)) {
      query["Street"] = request.street;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAtiRegistrant",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAtiRegistrantResponse>(await this.callApi(params, req, runtime), new $_model.CreateAtiRegistrantResponse({}));
  }

  /**
   * Submits a real-name registrant.
   * 
   * @param request - CreateAtiRegistrantRequest
   * @returns CreateAtiRegistrantResponse
   */
  async createAtiRegistrant(request: $_model.CreateAtiRegistrantRequest): Promise<$_model.CreateAtiRegistrantResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAtiRegistrantWithOptions(request, runtime);
  }

  /**
   * Creates an address in Global Traffic Manager (GTM) 3.0.
   * 
   * @param tmpReq - CreateCloudGtmAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCloudGtmAddressResponse
   */
  async createCloudGtmAddressWithOptions(tmpReq: $_model.CreateCloudGtmAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCloudGtmAddressResponse> {
    tmpReq.validate();
    let request = new $_model.CreateCloudGtmAddressShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.healthTasks)) {
      request.healthTasksShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.healthTasks, "HealthTasks", "json");
    }

    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.address)) {
      query["Address"] = request.address;
    }

    if (!$dara.isNull(request.attributeInfo)) {
      query["AttributeInfo"] = request.attributeInfo;
    }

    if (!$dara.isNull(request.availableMode)) {
      query["AvailableMode"] = request.availableMode;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.enableStatus)) {
      query["EnableStatus"] = request.enableStatus;
    }

    if (!$dara.isNull(request.healthJudgement)) {
      query["HealthJudgement"] = request.healthJudgement;
    }

    if (!$dara.isNull(request.healthTasksShrink)) {
      query["HealthTasks"] = request.healthTasksShrink;
    }

    if (!$dara.isNull(request.manualAvailableStatus)) {
      query["ManualAvailableStatus"] = request.manualAvailableStatus;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCloudGtmAddress",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCloudGtmAddressResponse>(await this.callApi(params, req, runtime), new $_model.CreateCloudGtmAddressResponse({}));
  }

  /**
   * Creates an address in Global Traffic Manager (GTM) 3.0.
   * 
   * @param request - CreateCloudGtmAddressRequest
   * @returns CreateCloudGtmAddressResponse
   */
  async createCloudGtmAddress(request: $_model.CreateCloudGtmAddressRequest): Promise<$_model.CreateCloudGtmAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCloudGtmAddressWithOptions(request, runtime);
  }

  /**
   * Creates an address pool based on the specified parameters.
   * 
   * @param request - CreateCloudGtmAddressPoolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCloudGtmAddressPoolResponse
   */
  async createCloudGtmAddressPoolWithOptions(request: $_model.CreateCloudGtmAddressPoolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCloudGtmAddressPoolResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.addressPoolName)) {
      query["AddressPoolName"] = request.addressPoolName;
    }

    if (!$dara.isNull(request.addressPoolType)) {
      query["AddressPoolType"] = request.addressPoolType;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.enableStatus)) {
      query["EnableStatus"] = request.enableStatus;
    }

    if (!$dara.isNull(request.healthJudgement)) {
      query["HealthJudgement"] = request.healthJudgement;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCloudGtmAddressPool",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCloudGtmAddressPoolResponse>(await this.callApi(params, req, runtime), new $_model.CreateCloudGtmAddressPoolResponse({}));
  }

  /**
   * Creates an address pool based on the specified parameters.
   * 
   * @param request - CreateCloudGtmAddressPoolRequest
   * @returns CreateCloudGtmAddressPoolResponse
   */
  async createCloudGtmAddressPool(request: $_model.CreateCloudGtmAddressPoolRequest): Promise<$_model.CreateCloudGtmAddressPoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCloudGtmAddressPoolWithOptions(request, runtime);
  }

  /**
   * Creates a configuration for a Global Traffic Manager (GTM) instance.
   * 
   * @param request - CreateCloudGtmInstanceConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCloudGtmInstanceConfigResponse
   */
  async createCloudGtmInstanceConfigWithOptions(request: $_model.CreateCloudGtmInstanceConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCloudGtmInstanceConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.enableStatus)) {
      query["EnableStatus"] = request.enableStatus;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.scheduleHostname)) {
      query["ScheduleHostname"] = request.scheduleHostname;
    }

    if (!$dara.isNull(request.scheduleRrType)) {
      query["ScheduleRrType"] = request.scheduleRrType;
    }

    if (!$dara.isNull(request.scheduleZoneMode)) {
      query["ScheduleZoneMode"] = request.scheduleZoneMode;
    }

    if (!$dara.isNull(request.scheduleZoneName)) {
      query["ScheduleZoneName"] = request.scheduleZoneName;
    }

    if (!$dara.isNull(request.ttl)) {
      query["Ttl"] = request.ttl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCloudGtmInstanceConfig",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCloudGtmInstanceConfigResponse>(await this.callApi(params, req, runtime), new $_model.CreateCloudGtmInstanceConfigResponse({}));
  }

  /**
   * Creates a configuration for a Global Traffic Manager (GTM) instance.
   * 
   * @param request - CreateCloudGtmInstanceConfigRequest
   * @returns CreateCloudGtmInstanceConfigResponse
   */
  async createCloudGtmInstanceConfig(request: $_model.CreateCloudGtmInstanceConfigRequest): Promise<$_model.CreateCloudGtmInstanceConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCloudGtmInstanceConfigWithOptions(request, runtime);
  }

  /**
   * Creates a health check template in Global Traffic Manager (GTM) 3.0.
   * 
   * @param tmpReq - CreateCloudGtmMonitorTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCloudGtmMonitorTemplateResponse
   */
  async createCloudGtmMonitorTemplateWithOptions(tmpReq: $_model.CreateCloudGtmMonitorTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCloudGtmMonitorTemplateResponse> {
    tmpReq.validate();
    let request = new $_model.CreateCloudGtmMonitorTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ispCityNodes)) {
      request.ispCityNodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ispCityNodes, "IspCityNodes", "json");
    }

    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.evaluationCount)) {
      query["EvaluationCount"] = request.evaluationCount;
    }

    if (!$dara.isNull(request.extendInfo)) {
      query["ExtendInfo"] = request.extendInfo;
    }

    if (!$dara.isNull(request.failureRate)) {
      query["FailureRate"] = request.failureRate;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.ipVersion)) {
      query["IpVersion"] = request.ipVersion;
    }

    if (!$dara.isNull(request.ispCityNodesShrink)) {
      query["IspCityNodes"] = request.ispCityNodesShrink;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.protocol)) {
      query["Protocol"] = request.protocol;
    }

    if (!$dara.isNull(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCloudGtmMonitorTemplate",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCloudGtmMonitorTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CreateCloudGtmMonitorTemplateResponse({}));
  }

  /**
   * Creates a health check template in Global Traffic Manager (GTM) 3.0.
   * 
   * @param request - CreateCloudGtmMonitorTemplateRequest
   * @returns CreateCloudGtmMonitorTemplateResponse
   */
  async createCloudGtmMonitorTemplate(request: $_model.CreateCloudGtmMonitorTemplateRequest): Promise<$_model.CreateCloudGtmMonitorTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCloudGtmMonitorTemplateWithOptions(request, runtime);
  }

  /**
   * Creates a public DNS AccessKey.
   * 
   * @param request - CreatePdnsAppKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePdnsAppKeyResponse
   */
  async createPdnsAppKeyWithOptions(request: $_model.CreatePdnsAppKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePdnsAppKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePdnsAppKey",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePdnsAppKeyResponse>(await this.callApi(params, req, runtime), new $_model.CreatePdnsAppKeyResponse({}));
  }

  /**
   * Creates a public DNS AccessKey.
   * 
   * @param request - CreatePdnsAppKeyRequest
   * @returns CreatePdnsAppKeyResponse
   */
  async createPdnsAppKey(request: $_model.CreatePdnsAppKeyRequest): Promise<$_model.CreatePdnsAppKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPdnsAppKeyWithOptions(request, runtime);
  }

  /**
   * Create Public DNS UDP IP Address Segment
   * 
   * @param request - CreatePdnsUdpIpSegmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePdnsUdpIpSegmentResponse
   */
  async createPdnsUdpIpSegmentWithOptions(request: $_model.CreatePdnsUdpIpSegmentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePdnsUdpIpSegmentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.ipToken)) {
      query["IpToken"] = request.ipToken;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePdnsUdpIpSegment",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePdnsUdpIpSegmentResponse>(await this.callApi(params, req, runtime), new $_model.CreatePdnsUdpIpSegmentResponse({}));
  }

  /**
   * Create Public DNS UDP IP Address Segment
   * 
   * @param request - CreatePdnsUdpIpSegmentRequest
   * @returns CreatePdnsUdpIpSegmentResponse
   */
  async createPdnsUdpIpSegment(request: $_model.CreatePdnsUdpIpSegmentRequest): Promise<$_model.CreatePdnsUdpIpSegmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPdnsUdpIpSegmentWithOptions(request, runtime);
  }

  /**
   * Deletes Agent registration information.
   * 
   * @param request - DeleteAtiAgentRegisterInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAtiAgentRegisterInfoResponse
   */
  async deleteAtiAgentRegisterInfoWithOptions(request: $_model.DeleteAtiAgentRegisterInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAtiAgentRegisterInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentRegisterInfoId)) {
      query["AgentRegisterInfoId"] = request.agentRegisterInfoId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAtiAgentRegisterInfo",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAtiAgentRegisterInfoResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAtiAgentRegisterInfoResponse({}));
  }

  /**
   * Deletes Agent registration information.
   * 
   * @param request - DeleteAtiAgentRegisterInfoRequest
   * @returns DeleteAtiAgentRegisterInfoResponse
   */
  async deleteAtiAgentRegisterInfo(request: $_model.DeleteAtiAgentRegisterInfoRequest): Promise<$_model.DeleteAtiAgentRegisterInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAtiAgentRegisterInfoWithOptions(request, runtime);
  }

  /**
   * Revokes a verified registrant.
   * 
   * @param request - DeleteAtiRegistrantRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAtiRegistrantResponse
   */
  async deleteAtiRegistrantWithOptions(request: $_model.DeleteAtiRegistrantRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAtiRegistrantResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.registrantId)) {
      query["RegistrantId"] = request.registrantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAtiRegistrant",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAtiRegistrantResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAtiRegistrantResponse({}));
  }

  /**
   * Revokes a verified registrant.
   * 
   * @param request - DeleteAtiRegistrantRequest
   * @returns DeleteAtiRegistrantResponse
   */
  async deleteAtiRegistrant(request: $_model.DeleteAtiRegistrantRequest): Promise<$_model.DeleteAtiRegistrantResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAtiRegistrantWithOptions(request, runtime);
  }

  /**
   * Deletes an address.
   * 
   * @param request - DeleteCloudGtmAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCloudGtmAddressResponse
   */
  async deleteCloudGtmAddressWithOptions(request: $_model.DeleteCloudGtmAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCloudGtmAddressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.addressId)) {
      query["AddressId"] = request.addressId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCloudGtmAddress",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCloudGtmAddressResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCloudGtmAddressResponse({}));
  }

  /**
   * Deletes an address.
   * 
   * @param request - DeleteCloudGtmAddressRequest
   * @returns DeleteCloudGtmAddressResponse
   */
  async deleteCloudGtmAddress(request: $_model.DeleteCloudGtmAddressRequest): Promise<$_model.DeleteCloudGtmAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCloudGtmAddressWithOptions(request, runtime);
  }

  /**
   * Deletes an address pool.
   * 
   * @param request - DeleteCloudGtmAddressPoolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCloudGtmAddressPoolResponse
   */
  async deleteCloudGtmAddressPoolWithOptions(request: $_model.DeleteCloudGtmAddressPoolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCloudGtmAddressPoolResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.addressPoolId)) {
      query["AddressPoolId"] = request.addressPoolId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCloudGtmAddressPool",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCloudGtmAddressPoolResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCloudGtmAddressPoolResponse({}));
  }

  /**
   * Deletes an address pool.
   * 
   * @param request - DeleteCloudGtmAddressPoolRequest
   * @returns DeleteCloudGtmAddressPoolResponse
   */
  async deleteCloudGtmAddressPool(request: $_model.DeleteCloudGtmAddressPoolRequest): Promise<$_model.DeleteCloudGtmAddressPoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCloudGtmAddressPoolWithOptions(request, runtime);
  }

  /**
   * Deletes an access domain name from the configuration of a Global Traffic Manager (GTM) 3.0 instance.
   * 
   * @param request - DeleteCloudGtmInstanceConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCloudGtmInstanceConfigResponse
   */
  async deleteCloudGtmInstanceConfigWithOptions(request: $_model.DeleteCloudGtmInstanceConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCloudGtmInstanceConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.configId)) {
      query["ConfigId"] = request.configId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCloudGtmInstanceConfig",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCloudGtmInstanceConfigResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCloudGtmInstanceConfigResponse({}));
  }

  /**
   * Deletes an access domain name from the configuration of a Global Traffic Manager (GTM) 3.0 instance.
   * 
   * @param request - DeleteCloudGtmInstanceConfigRequest
   * @returns DeleteCloudGtmInstanceConfigResponse
   */
  async deleteCloudGtmInstanceConfig(request: $_model.DeleteCloudGtmInstanceConfigRequest): Promise<$_model.DeleteCloudGtmInstanceConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCloudGtmInstanceConfigWithOptions(request, runtime);
  }

  /**
   * Deletes a health check template.
   * 
   * @param request - DeleteCloudGtmMonitorTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCloudGtmMonitorTemplateResponse
   */
  async deleteCloudGtmMonitorTemplateWithOptions(request: $_model.DeleteCloudGtmMonitorTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCloudGtmMonitorTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCloudGtmMonitorTemplate",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCloudGtmMonitorTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCloudGtmMonitorTemplateResponse({}));
  }

  /**
   * Deletes a health check template.
   * 
   * @param request - DeleteCloudGtmMonitorTemplateRequest
   * @returns DeleteCloudGtmMonitorTemplateResponse
   */
  async deleteCloudGtmMonitorTemplate(request: $_model.DeleteCloudGtmMonitorTemplateRequest): Promise<$_model.DeleteCloudGtmMonitorTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCloudGtmMonitorTemplateWithOptions(request, runtime);
  }

  /**
   * Deletes a batch of custom lines by specifying their unique IDs.
   * 
   * @param request - DeleteCustomLinesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomLinesResponse
   */
  async deleteCustomLinesWithOptions(request: $_model.DeleteCustomLinesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCustomLinesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.lineIds)) {
      query["LineIds"] = request.lineIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCustomLines",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCustomLinesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCustomLinesResponse({}));
  }

  /**
   * Deletes a batch of custom lines by specifying their unique IDs.
   * 
   * @param request - DeleteCustomLinesRequest
   * @returns DeleteCustomLinesResponse
   */
  async deleteCustomLines(request: $_model.DeleteCustomLinesRequest): Promise<$_model.DeleteCustomLinesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCustomLinesWithOptions(request, runtime);
  }

  /**
   * Deletes a specified domain name from the authoritative DNS proxy.
   * 
   * @param request - DeleteDnsCacheDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDnsCacheDomainResponse
   */
  async deleteDnsCacheDomainWithOptions(request: $_model.DeleteDnsCacheDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDnsCacheDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDnsCacheDomain",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDnsCacheDomainResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDnsCacheDomainResponse({}));
  }

  /**
   * Deletes a specified domain name from the authoritative DNS proxy.
   * 
   * @param request - DeleteDnsCacheDomainRequest
   * @returns DeleteDnsCacheDomainResponse
   */
  async deleteDnsCacheDomain(request: $_model.DeleteDnsCacheDomainRequest): Promise<$_model.DeleteDnsCacheDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDnsCacheDomainWithOptions(request, runtime);
  }

  /**
   * Deletes an access policy by its ID.
   * 
   * @param request - DeleteDnsGtmAccessStrategyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDnsGtmAccessStrategyResponse
   */
  async deleteDnsGtmAccessStrategyWithOptions(request: $_model.DeleteDnsGtmAccessStrategyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDnsGtmAccessStrategyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.strategyId)) {
      query["StrategyId"] = request.strategyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDnsGtmAccessStrategy",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDnsGtmAccessStrategyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDnsGtmAccessStrategyResponse({}));
  }

  /**
   * Deletes an access policy by its ID.
   * 
   * @param request - DeleteDnsGtmAccessStrategyRequest
   * @returns DeleteDnsGtmAccessStrategyResponse
   */
  async deleteDnsGtmAccessStrategy(request: $_model.DeleteDnsGtmAccessStrategyRequest): Promise<$_model.DeleteDnsGtmAccessStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDnsGtmAccessStrategyWithOptions(request, runtime);
  }

  /**
   * Deletes an address pool by its ID.
   * 
   * @param request - DeleteDnsGtmAddressPoolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDnsGtmAddressPoolResponse
   */
  async deleteDnsGtmAddressPoolWithOptions(request: $_model.DeleteDnsGtmAddressPoolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDnsGtmAddressPoolResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addrPoolId)) {
      query["AddrPoolId"] = request.addrPoolId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDnsGtmAddressPool",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDnsGtmAddressPoolResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDnsGtmAddressPoolResponse({}));
  }

  /**
   * Deletes an address pool by its ID.
   * 
   * @param request - DeleteDnsGtmAddressPoolRequest
   * @returns DeleteDnsGtmAddressPoolResponse
   */
  async deleteDnsGtmAddressPool(request: $_model.DeleteDnsGtmAddressPoolRequest): Promise<$_model.DeleteDnsGtmAddressPoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDnsGtmAddressPoolWithOptions(request, runtime);
  }

  /**
   * Deletes the specified domain name.
   * 
   * @param request - DeleteDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDomainResponse
   */
  async deleteDomainWithOptions(request: $_model.DeleteDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDomain",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDomainResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDomainResponse({}));
  }

  /**
   * Deletes the specified domain name.
   * 
   * @param request - DeleteDomainRequest
   * @returns DeleteDomainResponse
   */
  async deleteDomain(request: $_model.DeleteDomainRequest): Promise<$_model.DeleteDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDomainWithOptions(request, runtime);
  }

  /**
   * Deletes a domain name group and moves its domain names to the default group.
   * 
   * @remarks
   * > The default group cannot be deleted.
   * 
   * @param request - DeleteDomainGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDomainGroupResponse
   */
  async deleteDomainGroupWithOptions(request: $_model.DeleteDomainGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDomainGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDomainGroup",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDomainGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDomainGroupResponse({}));
  }

  /**
   * Deletes a domain name group and moves its domain names to the default group.
   * 
   * @remarks
   * > The default group cannot be deleted.
   * 
   * @param request - DeleteDomainGroupRequest
   * @returns DeleteDomainGroupResponse
   */
  async deleteDomainGroup(request: $_model.DeleteDomainGroupRequest): Promise<$_model.DeleteDomainGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDomainGroupWithOptions(request, runtime);
  }

  /**
   * Deletes a DNS record based on the specified request parameters.
   * 
   * @param request - DeleteDomainRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDomainRecordResponse
   */
  async deleteDomainRecordWithOptions(request: $_model.DeleteDomainRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDomainRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDomainRecord",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDomainRecordResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDomainRecordResponse({}));
  }

  /**
   * Deletes a DNS record based on the specified request parameters.
   * 
   * @param request - DeleteDomainRecordRequest
   * @returns DeleteDomainRecordResponse
   */
  async deleteDomainRecord(request: $_model.DeleteDomainRecordRequest): Promise<$_model.DeleteDomainRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDomainRecordWithOptions(request, runtime);
  }

  /**
   * Deletes an access policy.
   * 
   * @param request - DeleteGtmAccessStrategyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGtmAccessStrategyResponse
   */
  async deleteGtmAccessStrategyWithOptions(request: $_model.DeleteGtmAccessStrategyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteGtmAccessStrategyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.strategyId)) {
      query["StrategyId"] = request.strategyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGtmAccessStrategy",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteGtmAccessStrategyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteGtmAccessStrategyResponse({}));
  }

  /**
   * Deletes an access policy.
   * 
   * @param request - DeleteGtmAccessStrategyRequest
   * @returns DeleteGtmAccessStrategyResponse
   */
  async deleteGtmAccessStrategy(request: $_model.DeleteGtmAccessStrategyRequest): Promise<$_model.DeleteGtmAccessStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteGtmAccessStrategyWithOptions(request, runtime);
  }

  /**
   * Deletes an address pool.
   * 
   * @param request - DeleteGtmAddressPoolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGtmAddressPoolResponse
   */
  async deleteGtmAddressPoolWithOptions(request: $_model.DeleteGtmAddressPoolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteGtmAddressPoolResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addrPoolId)) {
      query["AddrPoolId"] = request.addrPoolId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGtmAddressPool",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteGtmAddressPoolResponse>(await this.callApi(params, req, runtime), new $_model.DeleteGtmAddressPoolResponse({}));
  }

  /**
   * Deletes an address pool.
   * 
   * @param request - DeleteGtmAddressPoolRequest
   * @returns DeleteGtmAddressPoolResponse
   */
  async deleteGtmAddressPool(request: $_model.DeleteGtmAddressPoolRequest): Promise<$_model.DeleteGtmAddressPoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteGtmAddressPoolWithOptions(request, runtime);
  }

  /**
   * Deletes a disaster recovery plan.
   * 
   * @param request - DeleteGtmRecoveryPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGtmRecoveryPlanResponse
   */
  async deleteGtmRecoveryPlanWithOptions(request: $_model.DeleteGtmRecoveryPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteGtmRecoveryPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.recoveryPlanId)) {
      query["RecoveryPlanId"] = request.recoveryPlanId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGtmRecoveryPlan",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteGtmRecoveryPlanResponse>(await this.callApi(params, req, runtime), new $_model.DeleteGtmRecoveryPlanResponse({}));
  }

  /**
   * Deletes a disaster recovery plan.
   * 
   * @param request - DeleteGtmRecoveryPlanRequest
   * @returns DeleteGtmRecoveryPlanResponse
   */
  async deleteGtmRecoveryPlan(request: $_model.DeleteGtmRecoveryPlanRequest): Promise<$_model.DeleteGtmRecoveryPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteGtmRecoveryPlanWithOptions(request, runtime);
  }

  /**
   * Deletes a built-in authoritative DNS record used for recursive resolution.
   * 
   * @param request - DeleteRecursionRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRecursionRecordResponse
   */
  async deleteRecursionRecordWithOptions(request: $_model.DeleteRecursionRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRecursionRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRecursionRecord",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRecursionRecordResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRecursionRecordResponse({}));
  }

  /**
   * Deletes a built-in authoritative DNS record used for recursive resolution.
   * 
   * @param request - DeleteRecursionRecordRequest
   * @returns DeleteRecursionRecordResponse
   */
  async deleteRecursionRecord(request: $_model.DeleteRecursionRecordRequest): Promise<$_model.DeleteRecursionRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRecursionRecordWithOptions(request, runtime);
  }

  /**
   * Deletes a built-in authoritative zone used for recursive resolution.
   * 
   * @remarks
   * If a zone contains locked DNS records, this operation does not delete them.
   * 
   * @param request - DeleteRecursionZoneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRecursionZoneResponse
   */
  async deleteRecursionZoneWithOptions(request: $_model.DeleteRecursionZoneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRecursionZoneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRecursionZone",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRecursionZoneResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRecursionZoneResponse({}));
  }

  /**
   * Deletes a built-in authoritative zone used for recursive resolution.
   * 
   * @remarks
   * If a zone contains locked DNS records, this operation does not delete them.
   * 
   * @param request - DeleteRecursionZoneRequest
   * @returns DeleteRecursionZoneResponse
   */
  async deleteRecursionZone(request: $_model.DeleteRecursionZoneRequest): Promise<$_model.DeleteRecursionZoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRecursionZoneWithOptions(request, runtime);
  }

  /**
   * Deletes the DNS records for a specified host record.
   * 
   * @remarks
   * Locked DNS records will not be deleted.
   * 
   * @param request - DeleteSubDomainRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSubDomainRecordsResponse
   */
  async deleteSubDomainRecordsWithOptions(request: $_model.DeleteSubDomainRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSubDomainRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.RR)) {
      query["RR"] = request.RR;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSubDomainRecords",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSubDomainRecordsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSubDomainRecordsResponse({}));
  }

  /**
   * Deletes the DNS records for a specified host record.
   * 
   * @remarks
   * Locked DNS records will not be deleted.
   * 
   * @param request - DeleteSubDomainRecordsRequest
   * @returns DeleteSubDomainRecordsResponse
   */
  async deleteSubDomainRecords(request: $_model.DeleteSubDomainRecordsRequest): Promise<$_model.DeleteSubDomainRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSubDomainRecordsWithOptions(request, runtime);
  }

  /**
   * Queries the details of an Agent registration.
   * 
   * @param request - DescribeAtiAgentRegisterInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAtiAgentRegisterInfoResponse
   */
  async describeAtiAgentRegisterInfoWithOptions(request: $_model.DescribeAtiAgentRegisterInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAtiAgentRegisterInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentRegisterInfoId)) {
      query["AgentRegisterInfoId"] = request.agentRegisterInfoId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAtiAgentRegisterInfo",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAtiAgentRegisterInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAtiAgentRegisterInfoResponse({}));
  }

  /**
   * Queries the details of an Agent registration.
   * 
   * @param request - DescribeAtiAgentRegisterInfoRequest
   * @returns DescribeAtiAgentRegisterInfoResponse
   */
  async describeAtiAgentRegisterInfo(request: $_model.DescribeAtiAgentRegisterInfoRequest): Promise<$_model.DescribeAtiAgentRegisterInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAtiAgentRegisterInfoWithOptions(request, runtime);
  }

  /**
   * Queries alert settings.
   * 
   * @param request - DescribeAtiAlertSettingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAtiAlertSettingsResponse
   */
  async describeAtiAlertSettingsWithOptions(request: $_model.DescribeAtiAlertSettingsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAtiAlertSettingsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAtiAlertSettings",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAtiAlertSettingsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAtiAlertSettingsResponse({}));
  }

  /**
   * Queries alert settings.
   * 
   * @param request - DescribeAtiAlertSettingsRequest
   * @returns DescribeAtiAlertSettingsResponse
   */
  async describeAtiAlertSettings(request: $_model.DescribeAtiAlertSettingsRequest): Promise<$_model.DescribeAtiAlertSettingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAtiAlertSettingsWithOptions(request, runtime);
  }

  /**
   * Queries the details of a certificate.
   * 
   * @param request - DescribeAtiCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAtiCertificateResponse
   */
  async describeAtiCertificateWithOptions(request: $_model.DescribeAtiCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAtiCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentCertificateId)) {
      query["AgentCertificateId"] = request.agentCertificateId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAtiCertificate",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAtiCertificateResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAtiCertificateResponse({}));
  }

  /**
   * Queries the details of a certificate.
   * 
   * @param request - DescribeAtiCertificateRequest
   * @returns DescribeAtiCertificateResponse
   */
  async describeAtiCertificate(request: $_model.DescribeAtiCertificateRequest): Promise<$_model.DescribeAtiCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAtiCertificateWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of a real-name verified registrant.
   * 
   * @param request - DescribeAtiRegistrantRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAtiRegistrantResponse
   */
  async describeAtiRegistrantWithOptions(request: $_model.DescribeAtiRegistrantRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAtiRegistrantResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.registrantId)) {
      query["RegistrantId"] = request.registrantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAtiRegistrant",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAtiRegistrantResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAtiRegistrantResponse({}));
  }

  /**
   * Retrieves the details of a real-name verified registrant.
   * 
   * @param request - DescribeAtiRegistrantRequest
   * @returns DescribeAtiRegistrantResponse
   */
  async describeAtiRegistrant(request: $_model.DescribeAtiRegistrantRequest): Promise<$_model.DescribeAtiRegistrantResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAtiRegistrantWithOptions(request, runtime);
  }

  /**
   * Queries the execution results of a batch operation task using a task ID. If you do not specify a task ID, the results of the most recent batch task are returned.
   * 
   * @param request - DescribeBatchResultCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBatchResultCountResponse
   */
  async describeBatchResultCountWithOptions(request: $_model.DescribeBatchResultCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBatchResultCountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.batchType)) {
      query["BatchType"] = request.batchType;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBatchResultCount",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBatchResultCountResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBatchResultCountResponse({}));
  }

  /**
   * Queries the execution results of a batch operation task using a task ID. If you do not specify a task ID, the results of the most recent batch task are returned.
   * 
   * @param request - DescribeBatchResultCountRequest
   * @returns DescribeBatchResultCountResponse
   */
  async describeBatchResultCount(request: $_model.DescribeBatchResultCountRequest): Promise<$_model.DescribeBatchResultCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBatchResultCountWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of a batch processing result.
   * 
   * @remarks
   * *Prerequisite: You can call this operation after the batch task is complete.**
   * 
   * @param request - DescribeBatchResultDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBatchResultDetailResponse
   */
  async describeBatchResultDetailWithOptions(request: $_model.DescribeBatchResultDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBatchResultDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.batchType)) {
      query["BatchType"] = request.batchType;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
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

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBatchResultDetail",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBatchResultDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBatchResultDetailResponse({}));
  }

  /**
   * Retrieves the details of a batch processing result.
   * 
   * @remarks
   * *Prerequisite: You can call this operation after the batch task is complete.**
   * 
   * @param request - DescribeBatchResultDetailRequest
   * @returns DescribeBatchResultDetailResponse
   */
  async describeBatchResultDetail(request: $_model.DescribeBatchResultDetailRequest): Promise<$_model.DescribeBatchResultDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBatchResultDetailWithOptions(request, runtime);
  }

  /**
   * Queries the configuration of an address based on the specified input parameters.
   * 
   * @param request - DescribeCloudGtmAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCloudGtmAddressResponse
   */
  async describeCloudGtmAddressWithOptions(request: $_model.DescribeCloudGtmAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCloudGtmAddressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.addressId)) {
      query["AddressId"] = request.addressId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCloudGtmAddress",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCloudGtmAddressResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCloudGtmAddressResponse({}));
  }

  /**
   * Queries the configuration of an address based on the specified input parameters.
   * 
   * @param request - DescribeCloudGtmAddressRequest
   * @returns DescribeCloudGtmAddressResponse
   */
  async describeCloudGtmAddress(request: $_model.DescribeCloudGtmAddressRequest): Promise<$_model.DescribeCloudGtmAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCloudGtmAddressWithOptions(request, runtime);
  }

  /**
   * Retrieves the configuration of a specified address pool.
   * 
   * @param request - DescribeCloudGtmAddressPoolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCloudGtmAddressPoolResponse
   */
  async describeCloudGtmAddressPoolWithOptions(request: $_model.DescribeCloudGtmAddressPoolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCloudGtmAddressPoolResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.addressPoolId)) {
      query["AddressPoolId"] = request.addressPoolId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCloudGtmAddressPool",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCloudGtmAddressPoolResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCloudGtmAddressPoolResponse({}));
  }

  /**
   * Retrieves the configuration of a specified address pool.
   * 
   * @param request - DescribeCloudGtmAddressPoolRequest
   * @returns DescribeCloudGtmAddressPoolResponse
   */
  async describeCloudGtmAddressPool(request: $_model.DescribeCloudGtmAddressPoolRequest): Promise<$_model.DescribeCloudGtmAddressPoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCloudGtmAddressPoolWithOptions(request, runtime);
  }

  /**
   * Retrieves information about the instances that reference an address pool.
   * 
   * @param request - DescribeCloudGtmAddressPoolReferenceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCloudGtmAddressPoolReferenceResponse
   */
  async describeCloudGtmAddressPoolReferenceWithOptions(request: $_model.DescribeCloudGtmAddressPoolReferenceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCloudGtmAddressPoolReferenceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.addressPoolId)) {
      query["AddressPoolId"] = request.addressPoolId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCloudGtmAddressPoolReference",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCloudGtmAddressPoolReferenceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCloudGtmAddressPoolReferenceResponse({}));
  }

  /**
   * Retrieves information about the instances that reference an address pool.
   * 
   * @param request - DescribeCloudGtmAddressPoolReferenceRequest
   * @returns DescribeCloudGtmAddressPoolReferenceResponse
   */
  async describeCloudGtmAddressPoolReference(request: $_model.DescribeCloudGtmAddressPoolReferenceRequest): Promise<$_model.DescribeCloudGtmAddressPoolReferenceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCloudGtmAddressPoolReferenceWithOptions(request, runtime);
  }

  /**
   * Queries the address pools and Global Traffic Manager (GTM) 3.0 instances that reference a specified address.
   * 
   * @param request - DescribeCloudGtmAddressReferenceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCloudGtmAddressReferenceResponse
   */
  async describeCloudGtmAddressReferenceWithOptions(request: $_model.DescribeCloudGtmAddressReferenceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCloudGtmAddressReferenceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.addressId)) {
      query["AddressId"] = request.addressId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCloudGtmAddressReference",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCloudGtmAddressReferenceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCloudGtmAddressReferenceResponse({}));
  }

  /**
   * Queries the address pools and Global Traffic Manager (GTM) 3.0 instances that reference a specified address.
   * 
   * @param request - DescribeCloudGtmAddressReferenceRequest
   * @returns DescribeCloudGtmAddressReferenceResponse
   */
  async describeCloudGtmAddressReference(request: $_model.DescribeCloudGtmAddressReferenceRequest): Promise<$_model.DescribeCloudGtmAddressReferenceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCloudGtmAddressReferenceWithOptions(request, runtime);
  }

  /**
   * Queries the global alert configuration for Global Traffic Manager (GTM).
   * 
   * @param request - DescribeCloudGtmGlobalAlertRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCloudGtmGlobalAlertResponse
   */
  async describeCloudGtmGlobalAlertWithOptions(request: $_model.DescribeCloudGtmGlobalAlertRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCloudGtmGlobalAlertResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCloudGtmGlobalAlert",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCloudGtmGlobalAlertResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCloudGtmGlobalAlertResponse({}));
  }

  /**
   * Queries the global alert configuration for Global Traffic Manager (GTM).
   * 
   * @param request - DescribeCloudGtmGlobalAlertRequest
   * @returns DescribeCloudGtmGlobalAlertResponse
   */
  async describeCloudGtmGlobalAlert(request: $_model.DescribeCloudGtmGlobalAlertRequest): Promise<$_model.DescribeCloudGtmGlobalAlertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCloudGtmGlobalAlertWithOptions(request, runtime);
  }

  /**
   * Queries the alert configuration for an instance.
   * 
   * @param request - DescribeCloudGtmInstanceConfigAlertRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCloudGtmInstanceConfigAlertResponse
   */
  async describeCloudGtmInstanceConfigAlertWithOptions(request: $_model.DescribeCloudGtmInstanceConfigAlertRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCloudGtmInstanceConfigAlertResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.configId)) {
      query["ConfigId"] = request.configId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCloudGtmInstanceConfigAlert",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCloudGtmInstanceConfigAlertResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCloudGtmInstanceConfigAlertResponse({}));
  }

  /**
   * Queries the alert configuration for an instance.
   * 
   * @param request - DescribeCloudGtmInstanceConfigAlertRequest
   * @returns DescribeCloudGtmInstanceConfigAlertResponse
   */
  async describeCloudGtmInstanceConfigAlert(request: $_model.DescribeCloudGtmInstanceConfigAlertRequest): Promise<$_model.DescribeCloudGtmInstanceConfigAlertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCloudGtmInstanceConfigAlertWithOptions(request, runtime);
  }

  /**
   * Queries the full configuration of a GTM 3.0 access domain name, including alert settings, address pools, and address details.
   * 
   * @param request - DescribeCloudGtmInstanceConfigFullInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCloudGtmInstanceConfigFullInfoResponse
   */
  async describeCloudGtmInstanceConfigFullInfoWithOptions(request: $_model.DescribeCloudGtmInstanceConfigFullInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCloudGtmInstanceConfigFullInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.configId)) {
      query["ConfigId"] = request.configId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCloudGtmInstanceConfigFullInfo",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCloudGtmInstanceConfigFullInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCloudGtmInstanceConfigFullInfoResponse({}));
  }

  /**
   * Queries the full configuration of a GTM 3.0 access domain name, including alert settings, address pools, and address details.
   * 
   * @param request - DescribeCloudGtmInstanceConfigFullInfoRequest
   * @returns DescribeCloudGtmInstanceConfigFullInfoResponse
   */
  async describeCloudGtmInstanceConfigFullInfo(request: $_model.DescribeCloudGtmInstanceConfigFullInfoRequest): Promise<$_model.DescribeCloudGtmInstanceConfigFullInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCloudGtmInstanceConfigFullInfoWithOptions(request, runtime);
  }

  /**
   * Retrieves the configuration of a specified health check template.
   * 
   * @param request - DescribeCloudGtmMonitorTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCloudGtmMonitorTemplateResponse
   */
  async describeCloudGtmMonitorTemplateWithOptions(request: $_model.DescribeCloudGtmMonitorTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCloudGtmMonitorTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCloudGtmMonitorTemplate",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCloudGtmMonitorTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCloudGtmMonitorTemplateResponse({}));
  }

  /**
   * Retrieves the configuration of a specified health check template.
   * 
   * @param request - DescribeCloudGtmMonitorTemplateRequest
   * @returns DescribeCloudGtmMonitorTemplateResponse
   */
  async describeCloudGtmMonitorTemplate(request: $_model.DescribeCloudGtmMonitorTemplateRequest): Promise<$_model.DescribeCloudGtmMonitorTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCloudGtmMonitorTemplateWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeCloudGtmSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCloudGtmSummaryResponse
   */
  async describeCloudGtmSummaryWithOptions(request: $_model.DescribeCloudGtmSummaryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCloudGtmSummaryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCloudGtmSummary",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCloudGtmSummaryResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCloudGtmSummaryResponse({}));
  }

  /**
   * @param request - DescribeCloudGtmSummaryRequest
   * @returns DescribeCloudGtmSummaryResponse
   */
  async describeCloudGtmSummary(request: $_model.DescribeCloudGtmSummaryRequest): Promise<$_model.DescribeCloudGtmSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCloudGtmSummaryWithOptions(request, runtime);
  }

  /**
   * Queries the system lines supported by Global Traffic Manager (GTM).
   * 
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCloudGtmSystemLinesResponse
   */
  async describeCloudGtmSystemLinesWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCloudGtmSystemLinesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCloudGtmSystemLines",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCloudGtmSystemLinesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCloudGtmSystemLinesResponse({}));
  }

  /**
   * Queries the system lines supported by Global Traffic Manager (GTM).
   * @returns DescribeCloudGtmSystemLinesResponse
   */
  async describeCloudGtmSystemLines(): Promise<$_model.DescribeCloudGtmSystemLinesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCloudGtmSystemLinesWithOptions(runtime);
  }

  /**
   * Queries a custom line by its unique ID.
   * 
   * @param request - DescribeCustomLineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCustomLineResponse
   */
  async describeCustomLineWithOptions(request: $_model.DescribeCustomLineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCustomLineResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.lineId)) {
      query["LineId"] = request.lineId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCustomLine",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCustomLineResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCustomLineResponse({}));
  }

  /**
   * Queries a custom line by its unique ID.
   * 
   * @param request - DescribeCustomLineRequest
   * @returns DescribeCustomLineResponse
   */
  async describeCustomLine(request: $_model.DescribeCustomLineRequest): Promise<$_model.DescribeCustomLineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCustomLineWithOptions(request, runtime);
  }

  /**
   * Queries the custom lines for a domain name.
   * 
   * @param request - DescribeCustomLinesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCustomLinesResponse
   */
  async describeCustomLinesWithOptions(request: $_model.DescribeCustomLinesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCustomLinesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
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
      action: "DescribeCustomLines",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCustomLinesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCustomLinesResponse({}));
  }

  /**
   * Queries the custom lines for a domain name.
   * 
   * @param request - DescribeCustomLinesRequest
   * @returns DescribeCustomLinesResponse
   */
  async describeCustomLines(request: $_model.DescribeCustomLinesRequest): Promise<$_model.DescribeCustomLinesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCustomLinesWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of subdomains that have weight configurations based on the specified parameters.
   * 
   * @param request - DescribeDNSSLBSubDomainsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDNSSLBSubDomainsResponse
   */
  async describeDNSSLBSubDomainsWithOptions(request: $_model.DescribeDNSSLBSubDomainsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDNSSLBSubDomainsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.rr)) {
      query["Rr"] = request.rr;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDNSSLBSubDomains",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDNSSLBSubDomainsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDNSSLBSubDomainsResponse({}));
  }

  /**
   * Retrieves a list of subdomains that have weight configurations based on the specified parameters.
   * 
   * @param request - DescribeDNSSLBSubDomainsRequest
   * @returns DescribeDNSSLBSubDomainsResponse
   */
  async describeDNSSLBSubDomains(request: $_model.DescribeDNSSLBSubDomainsRequest): Promise<$_model.DescribeDNSSLBSubDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDNSSLBSubDomainsWithOptions(request, runtime);
  }

  /**
   * Queries authoritative proxy domain names based on the specified parameters.
   * 
   * @param request - DescribeDnsCacheDomainsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDnsCacheDomainsResponse
   */
  async describeDnsCacheDomainsWithOptions(request: $_model.DescribeDnsCacheDomainsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDnsCacheDomainsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
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
      action: "DescribeDnsCacheDomains",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDnsCacheDomainsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDnsCacheDomainsResponse({}));
  }

  /**
   * Queries authoritative proxy domain names based on the specified parameters.
   * 
   * @param request - DescribeDnsCacheDomainsRequest
   * @returns DescribeDnsCacheDomainsResponse
   */
  async describeDnsCacheDomains(request: $_model.DescribeDnsCacheDomainsRequest): Promise<$_model.DescribeDnsCacheDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDnsCacheDomainsWithOptions(request, runtime);
  }

  /**
   * Queries the access strategies for a Global Traffic Manager (GTM) instance.
   * 
   * @param request - DescribeDnsGtmAccessStrategiesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDnsGtmAccessStrategiesResponse
   */
  async describeDnsGtmAccessStrategiesWithOptions(request: $_model.DescribeDnsGtmAccessStrategiesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDnsGtmAccessStrategiesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.strategyMode)) {
      query["StrategyMode"] = request.strategyMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDnsGtmAccessStrategies",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDnsGtmAccessStrategiesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDnsGtmAccessStrategiesResponse({}));
  }

  /**
   * Queries the access strategies for a Global Traffic Manager (GTM) instance.
   * 
   * @param request - DescribeDnsGtmAccessStrategiesRequest
   * @returns DescribeDnsGtmAccessStrategiesResponse
   */
  async describeDnsGtmAccessStrategies(request: $_model.DescribeDnsGtmAccessStrategiesRequest): Promise<$_model.DescribeDnsGtmAccessStrategiesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDnsGtmAccessStrategiesWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of a specified access strategy.
   * 
   * @param request - DescribeDnsGtmAccessStrategyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDnsGtmAccessStrategyResponse
   */
  async describeDnsGtmAccessStrategyWithOptions(request: $_model.DescribeDnsGtmAccessStrategyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDnsGtmAccessStrategyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.strategyId)) {
      query["StrategyId"] = request.strategyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDnsGtmAccessStrategy",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDnsGtmAccessStrategyResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDnsGtmAccessStrategyResponse({}));
  }

  /**
   * Retrieves the details of a specified access strategy.
   * 
   * @param request - DescribeDnsGtmAccessStrategyRequest
   * @returns DescribeDnsGtmAccessStrategyResponse
   */
  async describeDnsGtmAccessStrategy(request: $_model.DescribeDnsGtmAccessStrategyRequest): Promise<$_model.DescribeDnsGtmAccessStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDnsGtmAccessStrategyWithOptions(request, runtime);
  }

  /**
   * Describes the available configurations for an access policy based on an instance ID.
   * 
   * @param request - DescribeDnsGtmAccessStrategyAvailableConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDnsGtmAccessStrategyAvailableConfigResponse
   */
  async describeDnsGtmAccessStrategyAvailableConfigWithOptions(request: $_model.DescribeDnsGtmAccessStrategyAvailableConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDnsGtmAccessStrategyAvailableConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.strategyMode)) {
      query["StrategyMode"] = request.strategyMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDnsGtmAccessStrategyAvailableConfig",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDnsGtmAccessStrategyAvailableConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDnsGtmAccessStrategyAvailableConfigResponse({}));
  }

  /**
   * Describes the available configurations for an access policy based on an instance ID.
   * 
   * @param request - DescribeDnsGtmAccessStrategyAvailableConfigRequest
   * @returns DescribeDnsGtmAccessStrategyAvailableConfigResponse
   */
  async describeDnsGtmAccessStrategyAvailableConfig(request: $_model.DescribeDnsGtmAccessStrategyAvailableConfigRequest): Promise<$_model.DescribeDnsGtmAccessStrategyAvailableConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDnsGtmAccessStrategyAvailableConfigWithOptions(request, runtime);
  }

  /**
   * Queries the region where an address is located.
   * 
   * @param request - DescribeDnsGtmAddrAttributeInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDnsGtmAddrAttributeInfoResponse
   */
  async describeDnsGtmAddrAttributeInfoWithOptions(request: $_model.DescribeDnsGtmAddrAttributeInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDnsGtmAddrAttributeInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addrs)) {
      query["Addrs"] = request.addrs;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDnsGtmAddrAttributeInfo",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDnsGtmAddrAttributeInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDnsGtmAddrAttributeInfoResponse({}));
  }

  /**
   * Queries the region where an address is located.
   * 
   * @param request - DescribeDnsGtmAddrAttributeInfoRequest
   * @returns DescribeDnsGtmAddrAttributeInfoResponse
   */
  async describeDnsGtmAddrAttributeInfo(request: $_model.DescribeDnsGtmAddrAttributeInfoRequest): Promise<$_model.DescribeDnsGtmAddrAttributeInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDnsGtmAddrAttributeInfoWithOptions(request, runtime);
  }

  /**
   * Queries the available configurations for an address pool in a Global Traffic Manager (GTM) instance.
   * 
   * @param request - DescribeDnsGtmAddressPoolAvailableConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDnsGtmAddressPoolAvailableConfigResponse
   */
  async describeDnsGtmAddressPoolAvailableConfigWithOptions(request: $_model.DescribeDnsGtmAddressPoolAvailableConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDnsGtmAddressPoolAvailableConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDnsGtmAddressPoolAvailableConfig",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDnsGtmAddressPoolAvailableConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDnsGtmAddressPoolAvailableConfigResponse({}));
  }

  /**
   * Queries the available configurations for an address pool in a Global Traffic Manager (GTM) instance.
   * 
   * @param request - DescribeDnsGtmAddressPoolAvailableConfigRequest
   * @returns DescribeDnsGtmAddressPoolAvailableConfigResponse
   */
  async describeDnsGtmAddressPoolAvailableConfig(request: $_model.DescribeDnsGtmAddressPoolAvailableConfigRequest): Promise<$_model.DescribeDnsGtmAddressPoolAvailableConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDnsGtmAddressPoolAvailableConfigWithOptions(request, runtime);
  }

  /**
   * Queries the available alert contact groups.
   * 
   * @param request - DescribeDnsGtmAvailableAlertGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDnsGtmAvailableAlertGroupResponse
   */
  async describeDnsGtmAvailableAlertGroupWithOptions(request: $_model.DescribeDnsGtmAvailableAlertGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDnsGtmAvailableAlertGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDnsGtmAvailableAlertGroup",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDnsGtmAvailableAlertGroupResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDnsGtmAvailableAlertGroupResponse({}));
  }

  /**
   * Queries the available alert contact groups.
   * 
   * @param request - DescribeDnsGtmAvailableAlertGroupRequest
   * @returns DescribeDnsGtmAvailableAlertGroupResponse
   */
  async describeDnsGtmAvailableAlertGroup(request: $_model.DescribeDnsGtmAvailableAlertGroupRequest): Promise<$_model.DescribeDnsGtmAvailableAlertGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDnsGtmAvailableAlertGroupWithOptions(request, runtime);
  }

  /**
   * Queries the details of an instance based on the specified instance ID.
   * 
   * @param request - DescribeDnsGtmInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDnsGtmInstanceResponse
   */
  async describeDnsGtmInstanceWithOptions(request: $_model.DescribeDnsGtmInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDnsGtmInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDnsGtmInstance",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDnsGtmInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDnsGtmInstanceResponse({}));
  }

  /**
   * Queries the details of an instance based on the specified instance ID.
   * 
   * @param request - DescribeDnsGtmInstanceRequest
   * @returns DescribeDnsGtmInstanceResponse
   */
  async describeDnsGtmInstance(request: $_model.DescribeDnsGtmInstanceRequest): Promise<$_model.DescribeDnsGtmInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDnsGtmInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the details of an address pool by its ID.
   * 
   * @param request - DescribeDnsGtmInstanceAddressPoolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDnsGtmInstanceAddressPoolResponse
   */
  async describeDnsGtmInstanceAddressPoolWithOptions(request: $_model.DescribeDnsGtmInstanceAddressPoolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDnsGtmInstanceAddressPoolResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addrPoolId)) {
      query["AddrPoolId"] = request.addrPoolId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDnsGtmInstanceAddressPool",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDnsGtmInstanceAddressPoolResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDnsGtmInstanceAddressPoolResponse({}));
  }

  /**
   * Queries the details of an address pool by its ID.
   * 
   * @param request - DescribeDnsGtmInstanceAddressPoolRequest
   * @returns DescribeDnsGtmInstanceAddressPoolResponse
   */
  async describeDnsGtmInstanceAddressPool(request: $_model.DescribeDnsGtmInstanceAddressPoolRequest): Promise<$_model.DescribeDnsGtmInstanceAddressPoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDnsGtmInstanceAddressPoolWithOptions(request, runtime);
  }

  /**
   * Retrieves the address pools of a Global Traffic Manager (GTM) instance.
   * 
   * @param request - DescribeDnsGtmInstanceAddressPoolsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDnsGtmInstanceAddressPoolsResponse
   */
  async describeDnsGtmInstanceAddressPoolsWithOptions(request: $_model.DescribeDnsGtmInstanceAddressPoolsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDnsGtmInstanceAddressPoolsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
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
      action: "DescribeDnsGtmInstanceAddressPools",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDnsGtmInstanceAddressPoolsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDnsGtmInstanceAddressPoolsResponse({}));
  }

  /**
   * Retrieves the address pools of a Global Traffic Manager (GTM) instance.
   * 
   * @param request - DescribeDnsGtmInstanceAddressPoolsRequest
   * @returns DescribeDnsGtmInstanceAddressPoolsResponse
   */
  async describeDnsGtmInstanceAddressPools(request: $_model.DescribeDnsGtmInstanceAddressPoolsRequest): Promise<$_model.DescribeDnsGtmInstanceAddressPoolsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDnsGtmInstanceAddressPoolsWithOptions(request, runtime);
  }

  /**
   * Describes the status of an instance based on its ID.
   * 
   * @param request - DescribeDnsGtmInstanceStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDnsGtmInstanceStatusResponse
   */
  async describeDnsGtmInstanceStatusWithOptions(request: $_model.DescribeDnsGtmInstanceStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDnsGtmInstanceStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDnsGtmInstanceStatus",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDnsGtmInstanceStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDnsGtmInstanceStatusResponse({}));
  }

  /**
   * Describes the status of an instance based on its ID.
   * 
   * @param request - DescribeDnsGtmInstanceStatusRequest
   * @returns DescribeDnsGtmInstanceStatusResponse
   */
  async describeDnsGtmInstanceStatus(request: $_model.DescribeDnsGtmInstanceStatusRequest): Promise<$_model.DescribeDnsGtmInstanceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDnsGtmInstanceStatusWithOptions(request, runtime);
  }

  /**
   * Retrieves the system-assigned CNAME based on the specified instance ID.
   * 
   * @param request - DescribeDnsGtmInstanceSystemCnameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDnsGtmInstanceSystemCnameResponse
   */
  async describeDnsGtmInstanceSystemCnameWithOptions(request: $_model.DescribeDnsGtmInstanceSystemCnameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDnsGtmInstanceSystemCnameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDnsGtmInstanceSystemCname",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDnsGtmInstanceSystemCnameResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDnsGtmInstanceSystemCnameResponse({}));
  }

  /**
   * Retrieves the system-assigned CNAME based on the specified instance ID.
   * 
   * @param request - DescribeDnsGtmInstanceSystemCnameRequest
   * @returns DescribeDnsGtmInstanceSystemCnameResponse
   */
  async describeDnsGtmInstanceSystemCname(request: $_model.DescribeDnsGtmInstanceSystemCnameRequest): Promise<$_model.DescribeDnsGtmInstanceSystemCnameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDnsGtmInstanceSystemCnameWithOptions(request, runtime);
  }

  /**
   * Queries a list of instances.
   * 
   * @param request - DescribeDnsGtmInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDnsGtmInstancesResponse
   */
  async describeDnsGtmInstancesWithOptions(request: $_model.DescribeDnsGtmInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDnsGtmInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
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
      action: "DescribeDnsGtmInstances",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDnsGtmInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDnsGtmInstancesResponse({}));
  }

  /**
   * Queries a list of instances.
   * 
   * @param request - DescribeDnsGtmInstancesRequest
   * @returns DescribeDnsGtmInstancesResponse
   */
  async describeDnsGtmInstances(request: $_model.DescribeDnsGtmInstancesRequest): Promise<$_model.DescribeDnsGtmInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDnsGtmInstancesWithOptions(request, runtime);
  }

  /**
   * Queries the operation logs for an instance.
   * 
   * @param request - DescribeDnsGtmLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDnsGtmLogsResponse
   */
  async describeDnsGtmLogsWithOptions(request: $_model.DescribeDnsGtmLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDnsGtmLogsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDnsGtmLogs",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDnsGtmLogsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDnsGtmLogsResponse({}));
  }

  /**
   * Queries the operation logs for an instance.
   * 
   * @param request - DescribeDnsGtmLogsRequest
   * @returns DescribeDnsGtmLogsResponse
   */
  async describeDnsGtmLogs(request: $_model.DescribeDnsGtmLogsRequest): Promise<$_model.DescribeDnsGtmLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDnsGtmLogsWithOptions(request, runtime);
  }

  /**
   * Queries the available configurations for DNS health checks.
   * 
   * @param request - DescribeDnsGtmMonitorAvailableConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDnsGtmMonitorAvailableConfigResponse
   */
  async describeDnsGtmMonitorAvailableConfigWithOptions(request: $_model.DescribeDnsGtmMonitorAvailableConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDnsGtmMonitorAvailableConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDnsGtmMonitorAvailableConfig",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDnsGtmMonitorAvailableConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDnsGtmMonitorAvailableConfigResponse({}));
  }

  /**
   * Queries the available configurations for DNS health checks.
   * 
   * @param request - DescribeDnsGtmMonitorAvailableConfigRequest
   * @returns DescribeDnsGtmMonitorAvailableConfigResponse
   */
  async describeDnsGtmMonitorAvailableConfig(request: $_model.DescribeDnsGtmMonitorAvailableConfigRequest): Promise<$_model.DescribeDnsGtmMonitorAvailableConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDnsGtmMonitorAvailableConfigWithOptions(request, runtime);
  }

  /**
   * Queries the health check configuration for an address pool.
   * 
   * @param request - DescribeDnsGtmMonitorConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDnsGtmMonitorConfigResponse
   */
  async describeDnsGtmMonitorConfigWithOptions(request: $_model.DescribeDnsGtmMonitorConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDnsGtmMonitorConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.monitorConfigId)) {
      query["MonitorConfigId"] = request.monitorConfigId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDnsGtmMonitorConfig",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDnsGtmMonitorConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDnsGtmMonitorConfigResponse({}));
  }

  /**
   * Queries the health check configuration for an address pool.
   * 
   * @param request - DescribeDnsGtmMonitorConfigRequest
   * @returns DescribeDnsGtmMonitorConfigResponse
   */
  async describeDnsGtmMonitorConfig(request: $_model.DescribeDnsGtmMonitorConfigRequest): Promise<$_model.DescribeDnsGtmMonitorConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDnsGtmMonitorConfigWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of a paid Alibaba Cloud DNS instance by its instance ID.
   * 
   * @param request - DescribeDnsProductInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDnsProductInstanceResponse
   */
  async describeDnsProductInstanceWithOptions(request: $_model.DescribeDnsProductInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDnsProductInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDnsProductInstance",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDnsProductInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDnsProductInstanceResponse({}));
  }

  /**
   * Retrieves the details of a paid Alibaba Cloud DNS instance by its instance ID.
   * 
   * @param request - DescribeDnsProductInstanceRequest
   * @returns DescribeDnsProductInstanceResponse
   */
  async describeDnsProductInstance(request: $_model.DescribeDnsProductInstanceRequest): Promise<$_model.DescribeDnsProductInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDnsProductInstanceWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of paid DNS product instances that match the specified parameters.
   * 
   * @remarks
   * > **If the response does not contain a domain name, the Alibaba Cloud DNS instance is not associated with any domain names.**
   * 
   * @param request - DescribeDnsProductInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDnsProductInstancesResponse
   */
  async describeDnsProductInstancesWithOptions(request: $_model.DescribeDnsProductInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDnsProductInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.domainType)) {
      query["DomainType"] = request.domainType;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!$dara.isNull(request.versionCode)) {
      query["VersionCode"] = request.versionCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDnsProductInstances",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDnsProductInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDnsProductInstancesResponse({}));
  }

  /**
   * Retrieves a list of paid DNS product instances that match the specified parameters.
   * 
   * @remarks
   * > **If the response does not contain a domain name, the Alibaba Cloud DNS instance is not associated with any domain names.**
   * 
   * @param request - DescribeDnsProductInstancesRequest
   * @returns DescribeDnsProductInstancesResponse
   */
  async describeDnsProductInstances(request: $_model.DescribeDnsProductInstancesRequest): Promise<$_model.DescribeDnsProductInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDnsProductInstancesWithOptions(request, runtime);
  }

  /**
   * Queries an overview of request statistics for a DNS over HTTPS (DoH) account.
   * 
   * @param request - DescribeDohAccountStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDohAccountStatisticsResponse
   */
  async describeDohAccountStatisticsWithOptions(request: $_model.DescribeDohAccountStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDohAccountStatisticsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDohAccountStatistics",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDohAccountStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDohAccountStatisticsResponse({}));
  }

  /**
   * Queries an overview of request statistics for a DNS over HTTPS (DoH) account.
   * 
   * @param request - DescribeDohAccountStatisticsRequest
   * @returns DescribeDohAccountStatisticsResponse
   */
  async describeDohAccountStatistics(request: $_model.DescribeDohAccountStatisticsRequest): Promise<$_model.DescribeDohAccountStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDohAccountStatisticsWithOptions(request, runtime);
  }

  /**
   * Retrieves an overview of statistics for DNS over HTTPS (DoH) requests for a domain name.
   * 
   * @param request - DescribeDohDomainStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDohDomainStatisticsResponse
   */
  async describeDohDomainStatisticsWithOptions(request: $_model.DescribeDohDomainStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDohDomainStatisticsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDohDomainStatistics",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDohDomainStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDohDomainStatisticsResponse({}));
  }

  /**
   * Retrieves an overview of statistics for DNS over HTTPS (DoH) requests for a domain name.
   * 
   * @param request - DescribeDohDomainStatisticsRequest
   * @returns DescribeDohDomainStatisticsResponse
   */
  async describeDohDomainStatistics(request: $_model.DescribeDohDomainStatisticsRequest): Promise<$_model.DescribeDohDomainStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDohDomainStatisticsWithOptions(request, runtime);
  }

  /**
   * Queries request statistics for DNS over HTTPS (DoH) domain names.
   * 
   * @param request - DescribeDohDomainStatisticsSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDohDomainStatisticsSummaryResponse
   */
  async describeDohDomainStatisticsSummaryWithOptions(request: $_model.DescribeDohDomainStatisticsSummaryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDohDomainStatisticsSummaryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDohDomainStatisticsSummary",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDohDomainStatisticsSummaryResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDohDomainStatisticsSummaryResponse({}));
  }

  /**
   * Queries request statistics for DNS over HTTPS (DoH) domain names.
   * 
   * @param request - DescribeDohDomainStatisticsSummaryRequest
   * @returns DescribeDohDomainStatisticsSummaryResponse
   */
  async describeDohDomainStatisticsSummary(request: $_model.DescribeDohDomainStatisticsSummaryRequest): Promise<$_model.DescribeDohDomainStatisticsSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDohDomainStatisticsSummaryWithOptions(request, runtime);
  }

  /**
   * Queries for statistics on DNS over HTTPS (DoH) requests for a subdomain.
   * 
   * @param request - DescribeDohSubDomainStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDohSubDomainStatisticsResponse
   */
  async describeDohSubDomainStatisticsWithOptions(request: $_model.DescribeDohSubDomainStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDohSubDomainStatisticsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.subDomain)) {
      query["SubDomain"] = request.subDomain;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDohSubDomainStatistics",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDohSubDomainStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDohSubDomainStatisticsResponse({}));
  }

  /**
   * Queries for statistics on DNS over HTTPS (DoH) requests for a subdomain.
   * 
   * @param request - DescribeDohSubDomainStatisticsRequest
   * @returns DescribeDohSubDomainStatisticsResponse
   */
  async describeDohSubDomainStatistics(request: $_model.DescribeDohSubDomainStatisticsRequest): Promise<$_model.DescribeDohSubDomainStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDohSubDomainStatisticsWithOptions(request, runtime);
  }

  /**
   * Queries a summary of request statistics for subdomains using DNS over HTTPS (DoH).
   * 
   * @param request - DescribeDohSubDomainStatisticsSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDohSubDomainStatisticsSummaryResponse
   */
  async describeDohSubDomainStatisticsSummaryWithOptions(request: $_model.DescribeDohSubDomainStatisticsSummaryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDohSubDomainStatisticsSummaryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.subDomain)) {
      query["SubDomain"] = request.subDomain;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDohSubDomainStatisticsSummary",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDohSubDomainStatisticsSummaryResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDohSubDomainStatisticsSummaryResponse({}));
  }

  /**
   * Queries a summary of request statistics for subdomains using DNS over HTTPS (DoH).
   * 
   * @param request - DescribeDohSubDomainStatisticsSummaryRequest
   * @returns DescribeDohSubDomainStatisticsSummaryResponse
   */
  async describeDohSubDomainStatisticsSummary(request: $_model.DescribeDohSubDomainStatisticsSummaryRequest): Promise<$_model.DescribeDohSubDomainStatisticsSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDohSubDomainStatisticsSummaryWithOptions(request, runtime);
  }

  /**
   * Retrieves the basic information of a DNS over HTTPS (DoH) user.
   * 
   * @param request - DescribeDohUserInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDohUserInfoResponse
   */
  async describeDohUserInfoWithOptions(request: $_model.DescribeDohUserInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDohUserInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDohUserInfo",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDohUserInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDohUserInfoResponse({}));
  }

  /**
   * Retrieves the basic information of a DNS over HTTPS (DoH) user.
   * 
   * @param request - DescribeDohUserInfoRequest
   * @returns DescribeDohUserInfoResponse
   */
  async describeDohUserInfo(request: $_model.DescribeDohUserInfoRequest): Promise<$_model.DescribeDohUserInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDohUserInfoWithOptions(request, runtime);
  }

  /**
   * Queries the Domain Name System Security Extensions (DNSSEC) information for a specified domain name.
   * 
   * @param request - DescribeDomainDnssecInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainDnssecInfoResponse
   */
  async describeDomainDnssecInfoWithOptions(request: $_model.DescribeDomainDnssecInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainDnssecInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainDnssecInfo",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainDnssecInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainDnssecInfoResponse({}));
  }

  /**
   * Queries the Domain Name System Security Extensions (DNSSEC) information for a specified domain name.
   * 
   * @param request - DescribeDomainDnssecInfoRequest
   * @returns DescribeDomainDnssecInfoResponse
   */
  async describeDomainDnssecInfo(request: $_model.DescribeDomainDnssecInfoRequest): Promise<$_model.DescribeDomainDnssecInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainDnssecInfoWithOptions(request, runtime);
  }

  /**
   * Queries domain name groups.
   * 
   * @param request - DescribeDomainGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainGroupsResponse
   */
  async describeDomainGroupsWithOptions(request: $_model.DescribeDomainGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyWord)) {
      query["KeyWord"] = request.keyWord;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
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
      action: "DescribeDomainGroups",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainGroupsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainGroupsResponse({}));
  }

  /**
   * Queries domain name groups.
   * 
   * @param request - DescribeDomainGroupsRequest
   * @returns DescribeDomainGroupsResponse
   */
  async describeDomainGroups(request: $_model.DescribeDomainGroupsRequest): Promise<$_model.DescribeDomainGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainGroupsWithOptions(request, runtime);
  }

  /**
   * Queries information about a specified domain name.
   * 
   * @remarks
   * In this example, the domain name is bound to an instance of Alibaba Cloud DNS Ultimate Edition. For more information about line enumeration, see the RecordLines response parameter.
   * 
   * @param request - DescribeDomainInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainInfoResponse
   */
  async describeDomainInfoWithOptions(request: $_model.DescribeDomainInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.needDetailAttributes)) {
      query["NeedDetailAttributes"] = request.needDetailAttributes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainInfo",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainInfoResponse({}));
  }

  /**
   * Queries information about a specified domain name.
   * 
   * @remarks
   * In this example, the domain name is bound to an instance of Alibaba Cloud DNS Ultimate Edition. For more information about line enumeration, see the RecordLines response parameter.
   * 
   * @param request - DescribeDomainInfoRequest
   * @returns DescribeDomainInfoResponse
   */
  async describeDomainInfo(request: $_model.DescribeDomainInfoRequest): Promise<$_model.DescribeDomainInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainInfoWithOptions(request, runtime);
  }

  /**
   * Queries the operation logs for a domain name based on the specified parameters.
   * 
   * @param request - DescribeDomainLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainLogsResponse
   */
  async describeDomainLogsWithOptions(request: $_model.DescribeDomainLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainLogsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.keyWord)) {
      query["KeyWord"] = request.keyWord;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.endDate)) {
      query["endDate"] = request.endDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainLogs",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainLogsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainLogsResponse({}));
  }

  /**
   * Queries the operation logs for a domain name based on the specified parameters.
   * 
   * @param request - DescribeDomainLogsRequest
   * @returns DescribeDomainLogsResponse
   */
  async describeDomainLogs(request: $_model.DescribeDomainLogsRequest): Promise<$_model.DescribeDomainLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainLogsWithOptions(request, runtime);
  }

  /**
   * Queries the current list of name servers for a domain name and determines whether the servers are managed by Alibaba Cloud DNS.
   * 
   * @remarks
   * > This operation directly queries the authoritative server of the domain name registry to retrieve the DNS server names for the domain name. An error may be returned if the domain name is inactive. For example, if the domain name has a serverHold or clientHold status, or has not passed identity verification.
   * 
   * @param request - DescribeDomainNsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainNsResponse
   */
  async describeDomainNsWithOptions(request: $_model.DescribeDomainNsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainNsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainNs",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainNsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainNsResponse({}));
  }

  /**
   * Queries the current list of name servers for a domain name and determines whether the servers are managed by Alibaba Cloud DNS.
   * 
   * @remarks
   * > This operation directly queries the authoritative server of the domain name registry to retrieve the DNS server names for the domain name. An error may be returned if the domain name is inactive. For example, if the domain name has a serverHold or clientHold status, or has not passed identity verification.
   * 
   * @param request - DescribeDomainNsRequest
   * @returns DescribeDomainNsResponse
   */
  async describeDomainNs(request: $_model.DescribeDomainNsRequest): Promise<$_model.DescribeDomainNsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainNsWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of a DNS record by its ID.
   * 
   * @param request - DescribeDomainRecordInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainRecordInfoResponse
   */
  async describeDomainRecordInfoWithOptions(request: $_model.DescribeDomainRecordInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainRecordInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainRecordInfo",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainRecordInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainRecordInfoResponse({}));
  }

  /**
   * Retrieves the details of a DNS record by its ID.
   * 
   * @param request - DescribeDomainRecordInfoRequest
   * @returns DescribeDomainRecordInfoResponse
   */
  async describeDomainRecordInfo(request: $_model.DescribeDomainRecordInfoRequest): Promise<$_model.DescribeDomainRecordInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainRecordInfoWithOptions(request, runtime);
  }

  /**
   * Retrieves the DNS records for a specified root domain based on the input parameters.
   * 
   * @remarks
   * - You can specify the domain name (DomainName), page number (PageNumber), and page size (PageSize) to retrieve a list of DNS records.
   * - You can specify a keyword for the host record (RRKeyWord), record type (TypeKeyWord), or record value (ValueKeyWord) to query DNS records that contain the keyword.
   * - By default, DNS records are sorted in descending order by the time they were added.
   * - You can specify a domain group ID (GroupId) to query the DNS records in a specific group.
   * 
   * @param request - DescribeDomainRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainRecordsResponse
   */
  async describeDomainRecordsWithOptions(request: $_model.DescribeDomainRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.keyWord)) {
      query["KeyWord"] = request.keyWord;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.line)) {
      query["Line"] = request.line;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.RRKeyWord)) {
      query["RRKeyWord"] = request.RRKeyWord;
    }

    if (!$dara.isNull(request.searchMode)) {
      query["SearchMode"] = request.searchMode;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.typeKeyWord)) {
      query["TypeKeyWord"] = request.typeKeyWord;
    }

    if (!$dara.isNull(request.valueKeyWord)) {
      query["ValueKeyWord"] = request.valueKeyWord;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainRecords",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainRecordsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainRecordsResponse({}));
  }

  /**
   * Retrieves the DNS records for a specified root domain based on the input parameters.
   * 
   * @remarks
   * - You can specify the domain name (DomainName), page number (PageNumber), and page size (PageSize) to retrieve a list of DNS records.
   * - You can specify a keyword for the host record (RRKeyWord), record type (TypeKeyWord), or record value (ValueKeyWord) to query DNS records that contain the keyword.
   * - By default, DNS records are sorted in descending order by the time they were added.
   * - You can specify a domain group ID (GroupId) to query the DNS records in a specific group.
   * 
   * @param request - DescribeDomainRecordsRequest
   * @returns DescribeDomainRecordsResponse
   */
  async describeDomainRecords(request: $_model.DescribeDomainRecordsRequest): Promise<$_model.DescribeDomainRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainRecordsWithOptions(request, runtime);
  }

  /**
   * Queries the request volumes for all paid domain names in your account.
   * 
   * @param request - DescribeDomainResolveStatisticsSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainResolveStatisticsSummaryResponse
   */
  async describeDomainResolveStatisticsSummaryWithOptions(request: $_model.DescribeDomainResolveStatisticsSummaryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainResolveStatisticsSummaryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchMode)) {
      query["SearchMode"] = request.searchMode;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.threshold)) {
      query["Threshold"] = request.threshold;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainResolveStatisticsSummary",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainResolveStatisticsSummaryResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainResolveStatisticsSummaryResponse({}));
  }

  /**
   * Queries the request volumes for all paid domain names in your account.
   * 
   * @param request - DescribeDomainResolveStatisticsSummaryRequest
   * @returns DescribeDomainResolveStatisticsSummaryResponse
   */
  async describeDomainResolveStatisticsSummary(request: $_model.DescribeDomainResolveStatisticsSummaryRequest): Promise<$_model.DescribeDomainResolveStatisticsSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainResolveStatisticsSummaryWithOptions(request, runtime);
  }

  /**
   * Queries the number of real-time requests for a specified primary domain name.
   * 
   * @remarks
   * Real-time data is collected hourly.
   * 
   * @param request - DescribeDomainStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainStatisticsResponse
   */
  async describeDomainStatisticsWithOptions(request: $_model.DescribeDomainStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainStatisticsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.domainType)) {
      query["DomainType"] = request.domainType;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainStatistics",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainStatisticsResponse({}));
  }

  /**
   * Queries the number of real-time requests for a specified primary domain name.
   * 
   * @remarks
   * Real-time data is collected hourly.
   * 
   * @param request - DescribeDomainStatisticsRequest
   * @returns DescribeDomainStatisticsResponse
   */
  async describeDomainStatistics(request: $_model.DescribeDomainStatisticsRequest): Promise<$_model.DescribeDomainStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainStatisticsWithOptions(request, runtime);
  }

  /**
   * Queries the number of requests for all paid domain names in your account.
   * 
   * @param request - DescribeDomainStatisticsSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainStatisticsSummaryResponse
   */
  async describeDomainStatisticsSummaryWithOptions(request: $_model.DescribeDomainStatisticsSummaryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainStatisticsSummaryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchMode)) {
      query["SearchMode"] = request.searchMode;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.threshold)) {
      query["Threshold"] = request.threshold;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainStatisticsSummary",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainStatisticsSummaryResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainStatisticsSummaryResponse({}));
  }

  /**
   * Queries the number of requests for all paid domain names in your account.
   * 
   * @param request - DescribeDomainStatisticsSummaryRequest
   * @returns DescribeDomainStatisticsSummaryResponse
   */
  async describeDomainStatisticsSummary(request: $_model.DescribeDomainStatisticsSummaryRequest): Promise<$_model.DescribeDomainStatisticsSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainStatisticsSummaryWithOptions(request, runtime);
  }

  /**
   * Queries a list of domain names based on specified parameters.
   * 
   * @remarks
   * 1. You can specify a page number (PageNumber) and page size (PageSize) to retrieve a paginated list of domain names.
   * 2. You can specify a keyword (KeyWord) to query for domain names that contain the specified keyword.
   * 3. By default, domain names are sorted in descending order of their creation time.
   * 4. You can specify a domain name group ID (GroupId) to query for domain names in a specific group. This lets you retrieve all domain names or only the domain names that are not assigned to a group.
   * 
   * @param request - DescribeDomainsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainsResponse
   */
  async describeDomainsWithOptions(request: $_model.DescribeDomainsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.keyWord)) {
      query["KeyWord"] = request.keyWord;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
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

    if (!$dara.isNull(request.searchMode)) {
      query["SearchMode"] = request.searchMode;
    }

    if (!$dara.isNull(request.starmark)) {
      query["Starmark"] = request.starmark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomains",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainsResponse({}));
  }

  /**
   * Queries a list of domain names based on specified parameters.
   * 
   * @remarks
   * 1. You can specify a page number (PageNumber) and page size (PageSize) to retrieve a paginated list of domain names.
   * 2. You can specify a keyword (KeyWord) to query for domain names that contain the specified keyword.
   * 3. By default, domain names are sorted in descending order of their creation time.
   * 4. You can specify a domain name group ID (GroupId) to query for domain names in a specific group. This lets you retrieve all domain names or only the domain names that are not assigned to a group.
   * 
   * @param request - DescribeDomainsRequest
   * @returns DescribeDomainsResponse
   */
  async describeDomains(request: $_model.DescribeDomainsRequest): Promise<$_model.DescribeDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainsWithOptions(request, runtime);
  }

  /**
   * Queries the access policies for an instance.
   * 
   * @param request - DescribeGtmAccessStrategiesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGtmAccessStrategiesResponse
   */
  async describeGtmAccessStrategiesWithOptions(request: $_model.DescribeGtmAccessStrategiesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGtmAccessStrategiesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
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
      action: "DescribeGtmAccessStrategies",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGtmAccessStrategiesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGtmAccessStrategiesResponse({}));
  }

  /**
   * Queries the access policies for an instance.
   * 
   * @param request - DescribeGtmAccessStrategiesRequest
   * @returns DescribeGtmAccessStrategiesResponse
   */
  async describeGtmAccessStrategies(request: $_model.DescribeGtmAccessStrategiesRequest): Promise<$_model.DescribeGtmAccessStrategiesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGtmAccessStrategiesWithOptions(request, runtime);
  }

  /**
   * Queries the details of an access policy based on the policy ID.
   * 
   * @param request - DescribeGtmAccessStrategyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGtmAccessStrategyResponse
   */
  async describeGtmAccessStrategyWithOptions(request: $_model.DescribeGtmAccessStrategyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGtmAccessStrategyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.strategyId)) {
      query["StrategyId"] = request.strategyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGtmAccessStrategy",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGtmAccessStrategyResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGtmAccessStrategyResponse({}));
  }

  /**
   * Queries the details of an access policy based on the policy ID.
   * 
   * @param request - DescribeGtmAccessStrategyRequest
   * @returns DescribeGtmAccessStrategyResponse
   */
  async describeGtmAccessStrategy(request: $_model.DescribeGtmAccessStrategyRequest): Promise<$_model.DescribeGtmAccessStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGtmAccessStrategyWithOptions(request, runtime);
  }

  /**
   * Queries the available configurations for an access policy.
   * 
   * @param request - DescribeGtmAccessStrategyAvailableConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGtmAccessStrategyAvailableConfigResponse
   */
  async describeGtmAccessStrategyAvailableConfigWithOptions(request: $_model.DescribeGtmAccessStrategyAvailableConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGtmAccessStrategyAvailableConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGtmAccessStrategyAvailableConfig",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGtmAccessStrategyAvailableConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGtmAccessStrategyAvailableConfigResponse({}));
  }

  /**
   * Queries the available configurations for an access policy.
   * 
   * @param request - DescribeGtmAccessStrategyAvailableConfigRequest
   * @returns DescribeGtmAccessStrategyAvailableConfigResponse
   */
  async describeGtmAccessStrategyAvailableConfig(request: $_model.DescribeGtmAccessStrategyAvailableConfigRequest): Promise<$_model.DescribeGtmAccessStrategyAvailableConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGtmAccessStrategyAvailableConfigWithOptions(request, runtime);
  }

  /**
   * Queries the list of available alert contact groups for a Global Traffic Manager (GTM) instance.
   * 
   * @param request - DescribeGtmAvailableAlertGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGtmAvailableAlertGroupResponse
   */
  async describeGtmAvailableAlertGroupWithOptions(request: $_model.DescribeGtmAvailableAlertGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGtmAvailableAlertGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGtmAvailableAlertGroup",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGtmAvailableAlertGroupResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGtmAvailableAlertGroupResponse({}));
  }

  /**
   * Queries the list of available alert contact groups for a Global Traffic Manager (GTM) instance.
   * 
   * @param request - DescribeGtmAvailableAlertGroupRequest
   * @returns DescribeGtmAvailableAlertGroupResponse
   */
  async describeGtmAvailableAlertGroup(request: $_model.DescribeGtmAvailableAlertGroupRequest): Promise<$_model.DescribeGtmAvailableAlertGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGtmAvailableAlertGroupWithOptions(request, runtime);
  }

  /**
   * Queries the details of a Global Traffic Manager (GTM) instance.
   * 
   * @param request - DescribeGtmInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGtmInstanceResponse
   */
  async describeGtmInstanceWithOptions(request: $_model.DescribeGtmInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGtmInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.needDetailAttributes)) {
      query["NeedDetailAttributes"] = request.needDetailAttributes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGtmInstance",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGtmInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGtmInstanceResponse({}));
  }

  /**
   * Queries the details of a Global Traffic Manager (GTM) instance.
   * 
   * @param request - DescribeGtmInstanceRequest
   * @returns DescribeGtmInstanceResponse
   */
  async describeGtmInstance(request: $_model.DescribeGtmInstanceRequest): Promise<$_model.DescribeGtmInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGtmInstanceWithOptions(request, runtime);
  }

  /**
   * Describes the details of an address pool.
   * 
   * @param request - DescribeGtmInstanceAddressPoolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGtmInstanceAddressPoolResponse
   */
  async describeGtmInstanceAddressPoolWithOptions(request: $_model.DescribeGtmInstanceAddressPoolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGtmInstanceAddressPoolResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addrPoolId)) {
      query["AddrPoolId"] = request.addrPoolId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGtmInstanceAddressPool",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGtmInstanceAddressPoolResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGtmInstanceAddressPoolResponse({}));
  }

  /**
   * Describes the details of an address pool.
   * 
   * @param request - DescribeGtmInstanceAddressPoolRequest
   * @returns DescribeGtmInstanceAddressPoolResponse
   */
  async describeGtmInstanceAddressPool(request: $_model.DescribeGtmInstanceAddressPoolRequest): Promise<$_model.DescribeGtmInstanceAddressPoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGtmInstanceAddressPoolWithOptions(request, runtime);
  }

  /**
   * Describes the address pools of a Global Traffic Manager (GTM) instance.
   * 
   * @param request - DescribeGtmInstanceAddressPoolsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGtmInstanceAddressPoolsResponse
   */
  async describeGtmInstanceAddressPoolsWithOptions(request: $_model.DescribeGtmInstanceAddressPoolsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGtmInstanceAddressPoolsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
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
      action: "DescribeGtmInstanceAddressPools",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGtmInstanceAddressPoolsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGtmInstanceAddressPoolsResponse({}));
  }

  /**
   * Describes the address pools of a Global Traffic Manager (GTM) instance.
   * 
   * @param request - DescribeGtmInstanceAddressPoolsRequest
   * @returns DescribeGtmInstanceAddressPoolsResponse
   */
  async describeGtmInstanceAddressPools(request: $_model.DescribeGtmInstanceAddressPoolsRequest): Promise<$_model.DescribeGtmInstanceAddressPoolsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGtmInstanceAddressPoolsWithOptions(request, runtime);
  }

  /**
   * Queries the current status of an instance.
   * 
   * @param request - DescribeGtmInstanceStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGtmInstanceStatusResponse
   */
  async describeGtmInstanceStatusWithOptions(request: $_model.DescribeGtmInstanceStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGtmInstanceStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGtmInstanceStatus",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGtmInstanceStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGtmInstanceStatusResponse({}));
  }

  /**
   * Queries the current status of an instance.
   * 
   * @param request - DescribeGtmInstanceStatusRequest
   * @returns DescribeGtmInstanceStatusResponse
   */
  async describeGtmInstanceStatus(request: $_model.DescribeGtmInstanceStatusRequest): Promise<$_model.DescribeGtmInstanceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGtmInstanceStatusWithOptions(request, runtime);
  }

  /**
   * Retrieves the system-assigned CNAME domain name.
   * 
   * @param request - DescribeGtmInstanceSystemCnameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGtmInstanceSystemCnameResponse
   */
  async describeGtmInstanceSystemCnameWithOptions(request: $_model.DescribeGtmInstanceSystemCnameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGtmInstanceSystemCnameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGtmInstanceSystemCname",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGtmInstanceSystemCnameResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGtmInstanceSystemCnameResponse({}));
  }

  /**
   * Retrieves the system-assigned CNAME domain name.
   * 
   * @param request - DescribeGtmInstanceSystemCnameRequest
   * @returns DescribeGtmInstanceSystemCnameResponse
   */
  async describeGtmInstanceSystemCname(request: $_model.DescribeGtmInstanceSystemCnameRequest): Promise<$_model.DescribeGtmInstanceSystemCnameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGtmInstanceSystemCnameWithOptions(request, runtime);
  }

  /**
   * Queries Global Traffic Manager (GTM) instances.
   * 
   * @param request - DescribeGtmInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGtmInstancesResponse
   */
  async describeGtmInstancesWithOptions(request: $_model.DescribeGtmInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGtmInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.needDetailAttributes)) {
      query["NeedDetailAttributes"] = request.needDetailAttributes;
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
      action: "DescribeGtmInstances",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGtmInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGtmInstancesResponse({}));
  }

  /**
   * Queries Global Traffic Manager (GTM) instances.
   * 
   * @param request - DescribeGtmInstancesRequest
   * @returns DescribeGtmInstancesResponse
   */
  async describeGtmInstances(request: $_model.DescribeGtmInstancesRequest): Promise<$_model.DescribeGtmInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGtmInstancesWithOptions(request, runtime);
  }

  /**
   * Queries a list of logs.
   * 
   * @param request - DescribeGtmLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGtmLogsResponse
   */
  async describeGtmLogsWithOptions(request: $_model.DescribeGtmLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGtmLogsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGtmLogs",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGtmLogsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGtmLogsResponse({}));
  }

  /**
   * Queries a list of logs.
   * 
   * @param request - DescribeGtmLogsRequest
   * @returns DescribeGtmLogsResponse
   */
  async describeGtmLogs(request: $_model.DescribeGtmLogsRequest): Promise<$_model.DescribeGtmLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGtmLogsWithOptions(request, runtime);
  }

  /**
   * Retrieves the available configurations for health checks.
   * 
   * @param request - DescribeGtmMonitorAvailableConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGtmMonitorAvailableConfigResponse
   */
  async describeGtmMonitorAvailableConfigWithOptions(request: $_model.DescribeGtmMonitorAvailableConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGtmMonitorAvailableConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGtmMonitorAvailableConfig",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGtmMonitorAvailableConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGtmMonitorAvailableConfigResponse({}));
  }

  /**
   * Retrieves the available configurations for health checks.
   * 
   * @param request - DescribeGtmMonitorAvailableConfigRequest
   * @returns DescribeGtmMonitorAvailableConfigResponse
   */
  async describeGtmMonitorAvailableConfig(request: $_model.DescribeGtmMonitorAvailableConfigRequest): Promise<$_model.DescribeGtmMonitorAvailableConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGtmMonitorAvailableConfigWithOptions(request, runtime);
  }

  /**
   * Retrieves the health check configuration for an address pool.
   * 
   * @param request - DescribeGtmMonitorConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGtmMonitorConfigResponse
   */
  async describeGtmMonitorConfigWithOptions(request: $_model.DescribeGtmMonitorConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGtmMonitorConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.monitorConfigId)) {
      query["MonitorConfigId"] = request.monitorConfigId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGtmMonitorConfig",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGtmMonitorConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGtmMonitorConfigResponse({}));
  }

  /**
   * Retrieves the health check configuration for an address pool.
   * 
   * @param request - DescribeGtmMonitorConfigRequest
   * @returns DescribeGtmMonitorConfigResponse
   */
  async describeGtmMonitorConfig(request: $_model.DescribeGtmMonitorConfigRequest): Promise<$_model.DescribeGtmMonitorConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGtmMonitorConfigWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of a disaster recovery plan.
   * 
   * @param request - DescribeGtmRecoveryPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGtmRecoveryPlanResponse
   */
  async describeGtmRecoveryPlanWithOptions(request: $_model.DescribeGtmRecoveryPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGtmRecoveryPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.recoveryPlanId)) {
      query["RecoveryPlanId"] = request.recoveryPlanId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGtmRecoveryPlan",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGtmRecoveryPlanResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGtmRecoveryPlanResponse({}));
  }

  /**
   * Retrieves the details of a disaster recovery plan.
   * 
   * @param request - DescribeGtmRecoveryPlanRequest
   * @returns DescribeGtmRecoveryPlanResponse
   */
  async describeGtmRecoveryPlan(request: $_model.DescribeGtmRecoveryPlanRequest): Promise<$_model.DescribeGtmRecoveryPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGtmRecoveryPlanWithOptions(request, runtime);
  }

  /**
   * Describes the available configurations for a disaster recovery plan.
   * 
   * @param request - DescribeGtmRecoveryPlanAvailableConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGtmRecoveryPlanAvailableConfigResponse
   */
  async describeGtmRecoveryPlanAvailableConfigWithOptions(request: $_model.DescribeGtmRecoveryPlanAvailableConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGtmRecoveryPlanAvailableConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGtmRecoveryPlanAvailableConfig",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGtmRecoveryPlanAvailableConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGtmRecoveryPlanAvailableConfigResponse({}));
  }

  /**
   * Describes the available configurations for a disaster recovery plan.
   * 
   * @param request - DescribeGtmRecoveryPlanAvailableConfigRequest
   * @returns DescribeGtmRecoveryPlanAvailableConfigResponse
   */
  async describeGtmRecoveryPlanAvailableConfig(request: $_model.DescribeGtmRecoveryPlanAvailableConfigRequest): Promise<$_model.DescribeGtmRecoveryPlanAvailableConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGtmRecoveryPlanAvailableConfigWithOptions(request, runtime);
  }

  /**
   * Queries a list of disaster recovery plans.
   * 
   * @param request - DescribeGtmRecoveryPlansRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGtmRecoveryPlansResponse
   */
  async describeGtmRecoveryPlansWithOptions(request: $_model.DescribeGtmRecoveryPlansRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGtmRecoveryPlansResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
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
      action: "DescribeGtmRecoveryPlans",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGtmRecoveryPlansResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGtmRecoveryPlansResponse({}));
  }

  /**
   * Queries a list of disaster recovery plans.
   * 
   * @param request - DescribeGtmRecoveryPlansRequest
   * @returns DescribeGtmRecoveryPlansResponse
   */
  async describeGtmRecoveryPlans(request: $_model.DescribeGtmRecoveryPlansRequest): Promise<$_model.DescribeGtmRecoveryPlansResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGtmRecoveryPlansWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of domain names that are attached to an instance.
   * 
   * @param request - DescribeInstanceDomainsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceDomainsResponse
   */
  async describeInstanceDomainsWithOptions(request: $_model.DescribeInstanceDomainsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceDomainsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainKeywords)) {
      query["DomainKeywords"] = request.domainKeywords;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
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
      action: "DescribeInstanceDomains",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceDomainsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceDomainsResponse({}));
  }

  /**
   * Retrieves a list of domain names that are attached to an instance.
   * 
   * @param request - DescribeInstanceDomainsRequest
   * @returns DescribeInstanceDomainsResponse
   */
  async describeInstanceDomains(request: $_model.DescribeInstanceDomainsRequest): Promise<$_model.DescribeInstanceDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceDomainsWithOptions(request, runtime);
  }

  /**
   * Retrieves a global overview of statistics for public authoritative DNS.
   * 
   * @remarks
   * Real-time data is aggregated hourly.
   * 
   * @param request - DescribeInterAuthStatisticsGlobalOverviewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInterAuthStatisticsGlobalOverviewResponse
   */
  async describeInterAuthStatisticsGlobalOverviewWithOptions(request: $_model.DescribeInterAuthStatisticsGlobalOverviewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInterAuthStatisticsGlobalOverviewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.overviewPeriod)) {
      query["OverviewPeriod"] = request.overviewPeriod;
    }

    if (!$dara.isNull(request.serverRegion)) {
      query["ServerRegion"] = request.serverRegion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInterAuthStatisticsGlobalOverview",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInterAuthStatisticsGlobalOverviewResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInterAuthStatisticsGlobalOverviewResponse({}));
  }

  /**
   * Retrieves a global overview of statistics for public authoritative DNS.
   * 
   * @remarks
   * Real-time data is aggregated hourly.
   * 
   * @param request - DescribeInterAuthStatisticsGlobalOverviewRequest
   * @returns DescribeInterAuthStatisticsGlobalOverviewResponse
   */
  async describeInterAuthStatisticsGlobalOverview(request: $_model.DescribeInterAuthStatisticsGlobalOverviewRequest): Promise<$_model.DescribeInterAuthStatisticsGlobalOverviewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInterAuthStatisticsGlobalOverviewWithOptions(request, runtime);
  }

  /**
   * Historical statistics for public authoritative DNS resolution
   * 
   * @remarks
   * Real-time data statistics are aggregated hourly.
   * 
   * @param request - DescribeInterAuthStatisticsHistoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInterAuthStatisticsHistoryResponse
   */
  async describeInterAuthStatisticsHistoryWithOptions(request: $_model.DescribeInterAuthStatisticsHistoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInterAuthStatisticsHistoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!$dara.isNull(request.rcode)) {
      query["Rcode"] = request.rcode;
    }

    if (!$dara.isNull(request.serverRegion)) {
      query["ServerRegion"] = request.serverRegion;
    }

    if (!$dara.isNull(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    if (!$dara.isNull(request.statisticalType)) {
      query["StatisticalType"] = request.statisticalType;
    }

    if (!$dara.isNull(request.zoneName)) {
      query["ZoneName"] = request.zoneName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInterAuthStatisticsHistory",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInterAuthStatisticsHistoryResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInterAuthStatisticsHistoryResponse({}));
  }

  /**
   * Historical statistics for public authoritative DNS resolution
   * 
   * @remarks
   * Real-time data statistics are aggregated hourly.
   * 
   * @param request - DescribeInterAuthStatisticsHistoryRequest
   * @returns DescribeInterAuthStatisticsHistoryResponse
   */
  async describeInterAuthStatisticsHistory(request: $_model.DescribeInterAuthStatisticsHistoryRequest): Promise<$_model.DescribeInterAuthStatisticsHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInterAuthStatisticsHistoryWithOptions(request, runtime);
  }

  /**
   * Queries the summary list of public authoritative parse statistics.
   * 
   * @remarks
   * Real-time data is aggregated by hour.
   * 
   * @param request - DescribeInterAuthStatisticsSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInterAuthStatisticsSummaryResponse
   */
  async describeInterAuthStatisticsSummaryWithOptions(request: $_model.DescribeInterAuthStatisticsSummaryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInterAuthStatisticsSummaryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!$dara.isNull(request.growType)) {
      query["GrowType"] = request.growType;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.rcode)) {
      query["Rcode"] = request.rcode;
    }

    if (!$dara.isNull(request.serverRegion)) {
      query["ServerRegion"] = request.serverRegion;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    if (!$dara.isNull(request.statisticalType)) {
      query["StatisticalType"] = request.statisticalType;
    }

    if (!$dara.isNull(request.zoneName)) {
      query["ZoneName"] = request.zoneName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInterAuthStatisticsSummary",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInterAuthStatisticsSummaryResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInterAuthStatisticsSummaryResponse({}));
  }

  /**
   * Queries the summary list of public authoritative parse statistics.
   * 
   * @remarks
   * Real-time data is aggregated by hour.
   * 
   * @param request - DescribeInterAuthStatisticsSummaryRequest
   * @returns DescribeInterAuthStatisticsSummaryResponse
   */
  async describeInterAuthStatisticsSummary(request: $_model.DescribeInterAuthStatisticsSummaryRequest): Promise<$_model.DescribeInterAuthStatisticsSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInterAuthStatisticsSummaryWithOptions(request, runtime);
  }

  /**
   * Retrieves a zone-level overview of statistics for public authoritative DNS.
   * 
   * @param request - DescribeInterAuthStatisticsZoneOverviewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInterAuthStatisticsZoneOverviewResponse
   */
  async describeInterAuthStatisticsZoneOverviewWithOptions(request: $_model.DescribeInterAuthStatisticsZoneOverviewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInterAuthStatisticsZoneOverviewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.overviewPeriod)) {
      query["OverviewPeriod"] = request.overviewPeriod;
    }

    if (!$dara.isNull(request.serverRegion)) {
      query["ServerRegion"] = request.serverRegion;
    }

    if (!$dara.isNull(request.zoneName)) {
      query["ZoneName"] = request.zoneName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInterAuthStatisticsZoneOverview",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInterAuthStatisticsZoneOverviewResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInterAuthStatisticsZoneOverviewResponse({}));
  }

  /**
   * Retrieves a zone-level overview of statistics for public authoritative DNS.
   * 
   * @param request - DescribeInterAuthStatisticsZoneOverviewRequest
   * @returns DescribeInterAuthStatisticsZoneOverviewResponse
   */
  async describeInterAuthStatisticsZoneOverview(request: $_model.DescribeInterAuthStatisticsZoneOverviewRequest): Promise<$_model.DescribeInterAuthStatisticsZoneOverviewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInterAuthStatisticsZoneOverviewWithOptions(request, runtime);
  }

  /**
   * Query parsing logs
   * 
   * @param request - DescribeInternetDnsLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInternetDnsLogsResponse
   */
  async describeInternetDnsLogsWithOptions(request: $_model.DescribeInternetDnsLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInternetDnsLogsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.module)) {
      query["Module"] = request.module;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.preciseSort)) {
      query["PreciseSort"] = request.preciseSort;
    }

    if (!$dara.isNull(request.queryCondition)) {
      query["QueryCondition"] = request.queryCondition;
    }

    if (!$dara.isNull(request.recursionProtocolType)) {
      query["RecursionProtocolType"] = request.recursionProtocolType;
    }

    if (!$dara.isNull(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInternetDnsLogs",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInternetDnsLogsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInternetDnsLogsResponse({}));
  }

  /**
   * Query parsing logs
   * 
   * @param request - DescribeInternetDnsLogsRequest
   * @returns DescribeInternetDnsLogsResponse
   */
  async describeInternetDnsLogs(request: $_model.DescribeInternetDnsLogsRequest): Promise<$_model.DescribeInternetDnsLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInternetDnsLogsWithOptions(request, runtime);
  }

  /**
   * Queries the list of cache refresh instances.
   * 
   * @param request - DescribeIspFlushCacheInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeIspFlushCacheInstancesResponse
   */
  async describeIspFlushCacheInstancesWithOptions(request: $_model.DescribeIspFlushCacheInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeIspFlushCacheInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.isp)) {
      query["Isp"] = request.isp;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeIspFlushCacheInstances",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeIspFlushCacheInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeIspFlushCacheInstancesResponse({}));
  }

  /**
   * Queries the list of cache refresh instances.
   * 
   * @param request - DescribeIspFlushCacheInstancesRequest
   * @returns DescribeIspFlushCacheInstancesResponse
   */
  async describeIspFlushCacheInstances(request: $_model.DescribeIspFlushCacheInstancesRequest): Promise<$_model.DescribeIspFlushCacheInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeIspFlushCacheInstancesWithOptions(request, runtime);
  }

  /**
   * Retrieves the remaining number of cache refresh operations available.
   * 
   * @param request - DescribeIspFlushCacheRemainQuotaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeIspFlushCacheRemainQuotaResponse
   */
  async describeIspFlushCacheRemainQuotaWithOptions(request: $_model.DescribeIspFlushCacheRemainQuotaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeIspFlushCacheRemainQuotaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeIspFlushCacheRemainQuota",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeIspFlushCacheRemainQuotaResponse>(await this.callApi(params, req, runtime), new $_model.DescribeIspFlushCacheRemainQuotaResponse({}));
  }

  /**
   * Retrieves the remaining number of cache refresh operations available.
   * 
   * @param request - DescribeIspFlushCacheRemainQuotaRequest
   * @returns DescribeIspFlushCacheRemainQuotaResponse
   */
  async describeIspFlushCacheRemainQuota(request: $_model.DescribeIspFlushCacheRemainQuotaRequest): Promise<$_model.DescribeIspFlushCacheRemainQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeIspFlushCacheRemainQuotaWithOptions(request, runtime);
  }

  /**
   * Queries the details of a cache flush task.
   * 
   * @param request - DescribeIspFlushCacheTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeIspFlushCacheTaskResponse
   */
  async describeIspFlushCacheTaskWithOptions(request: $_model.DescribeIspFlushCacheTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeIspFlushCacheTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeIspFlushCacheTask",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeIspFlushCacheTaskResponse>(await this.callApi(params, req, runtime), new $_model.DescribeIspFlushCacheTaskResponse({}));
  }

  /**
   * Queries the details of a cache flush task.
   * 
   * @param request - DescribeIspFlushCacheTaskRequest
   * @returns DescribeIspFlushCacheTaskResponse
   */
  async describeIspFlushCacheTask(request: $_model.DescribeIspFlushCacheTaskRequest): Promise<$_model.DescribeIspFlushCacheTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeIspFlushCacheTaskWithOptions(request, runtime);
  }

  /**
   * Queries the list of cache refresh tasks.
   * 
   * @param request - DescribeIspFlushCacheTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeIspFlushCacheTasksResponse
   */
  async describeIspFlushCacheTasksWithOptions(request: $_model.DescribeIspFlushCacheTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeIspFlushCacheTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.isp)) {
      query["Isp"] = request.isp;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
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
      action: "DescribeIspFlushCacheTasks",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeIspFlushCacheTasksResponse>(await this.callApi(params, req, runtime), new $_model.DescribeIspFlushCacheTasksResponse({}));
  }

  /**
   * Queries the list of cache refresh tasks.
   * 
   * @param request - DescribeIspFlushCacheTasksRequest
   * @returns DescribeIspFlushCacheTasksResponse
   */
  async describeIspFlushCacheTasks(request: $_model.DescribeIspFlushCacheTasksRequest): Promise<$_model.DescribeIspFlushCacheTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeIspFlushCacheTasksWithOptions(request, runtime);
  }

  /**
   * Queries the overview of Public DNS user data.
   * 
   * @param request - DescribePdnsAccountSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePdnsAccountSummaryResponse
   */
  async describePdnsAccountSummaryWithOptions(request: $_model.DescribePdnsAccountSummaryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePdnsAccountSummaryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePdnsAccountSummary",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePdnsAccountSummaryResponse>(await this.callApi(params, req, runtime), new $_model.DescribePdnsAccountSummaryResponse({}));
  }

  /**
   * Queries the overview of Public DNS user data.
   * 
   * @param request - DescribePdnsAccountSummaryRequest
   * @returns DescribePdnsAccountSummaryResponse
   */
  async describePdnsAccountSummary(request: $_model.DescribePdnsAccountSummaryRequest): Promise<$_model.DescribePdnsAccountSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePdnsAccountSummaryWithOptions(request, runtime);
  }

  /**
   * Query the details of a public DNS AppKey
   * 
   * @param request - DescribePdnsAppKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePdnsAppKeyResponse
   */
  async describePdnsAppKeyWithOptions(request: $_model.DescribePdnsAppKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePdnsAppKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKeyId)) {
      query["AppKeyId"] = request.appKeyId;
    }

    if (!$dara.isNull(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePdnsAppKey",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePdnsAppKeyResponse>(await this.callApi(params, req, runtime), new $_model.DescribePdnsAppKeyResponse({}));
  }

  /**
   * Query the details of a public DNS AppKey
   * 
   * @param request - DescribePdnsAppKeyRequest
   * @returns DescribePdnsAppKeyResponse
   */
  async describePdnsAppKey(request: $_model.DescribePdnsAppKeyRequest): Promise<$_model.DescribePdnsAppKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePdnsAppKeyWithOptions(request, runtime);
  }

  /**
   * Queries the list of AppKeys of Public DNS
   * 
   * @param request - DescribePdnsAppKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePdnsAppKeysResponse
   */
  async describePdnsAppKeysWithOptions(request: $_model.DescribePdnsAppKeysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePdnsAppKeysResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePdnsAppKeys",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePdnsAppKeysResponse>(await this.callApi(params, req, runtime), new $_model.DescribePdnsAppKeysResponse({}));
  }

  /**
   * Queries the list of AppKeys of Public DNS
   * 
   * @param request - DescribePdnsAppKeysRequest
   * @returns DescribePdnsAppKeysResponse
   */
  async describePdnsAppKeys(request: $_model.DescribePdnsAppKeysRequest): Promise<$_model.DescribePdnsAppKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePdnsAppKeysWithOptions(request, runtime);
  }

  /**
   * Queries the operation log list of Public DNS.
   * 
   * @param request - DescribePdnsOperateLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePdnsOperateLogsResponse
   */
  async describePdnsOperateLogsWithOptions(request: $_model.DescribePdnsOperateLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePdnsOperateLogsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.actionType)) {
      query["ActionType"] = request.actionType;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePdnsOperateLogs",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePdnsOperateLogsResponse>(await this.callApi(params, req, runtime), new $_model.DescribePdnsOperateLogsResponse({}));
  }

  /**
   * Queries the operation log list of Public DNS.
   * 
   * @param request - DescribePdnsOperateLogsRequest
   * @returns DescribePdnsOperateLogsResponse
   */
  async describePdnsOperateLogs(request: $_model.DescribePdnsOperateLogsRequest): Promise<$_model.DescribePdnsOperateLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePdnsOperateLogsWithOptions(request, runtime);
  }

  /**
   * Queries the request statistics for Public DNS.
   * 
   * @param request - DescribePdnsRequestStatisticRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePdnsRequestStatisticResponse
   */
  async describePdnsRequestStatisticWithOptions(request: $_model.DescribePdnsRequestStatisticRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePdnsRequestStatisticResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.subDomain)) {
      query["SubDomain"] = request.subDomain;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePdnsRequestStatistic",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePdnsRequestStatisticResponse>(await this.callApi(params, req, runtime), new $_model.DescribePdnsRequestStatisticResponse({}));
  }

  /**
   * Queries the request statistics for Public DNS.
   * 
   * @param request - DescribePdnsRequestStatisticRequest
   * @returns DescribePdnsRequestStatisticResponse
   */
  async describePdnsRequestStatistic(request: $_model.DescribePdnsRequestStatisticRequest): Promise<$_model.DescribePdnsRequestStatisticResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePdnsRequestStatisticWithOptions(request, runtime);
  }

  /**
   * Queries the request statistics for a specified subdomain.
   * 
   * @param request - DescribePdnsRequestStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePdnsRequestStatisticsResponse
   */
  async describePdnsRequestStatisticsWithOptions(request: $_model.DescribePdnsRequestStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePdnsRequestStatisticsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.subDomain)) {
      query["SubDomain"] = request.subDomain;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePdnsRequestStatistics",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePdnsRequestStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.DescribePdnsRequestStatisticsResponse({}));
  }

  /**
   * Queries the request statistics for a specified subdomain.
   * 
   * @param request - DescribePdnsRequestStatisticsRequest
   * @returns DescribePdnsRequestStatisticsResponse
   */
  async describePdnsRequestStatistics(request: $_model.DescribePdnsRequestStatisticsRequest): Promise<$_model.DescribePdnsRequestStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePdnsRequestStatisticsWithOptions(request, runtime);
  }

  /**
   * Queries the list of Public DNS threat logs.
   * 
   * @param request - DescribePdnsThreatLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePdnsThreatLogsResponse
   */
  async describePdnsThreatLogsWithOptions(request: $_model.DescribePdnsThreatLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePdnsThreatLogsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.threatLevel)) {
      query["ThreatLevel"] = request.threatLevel;
    }

    if (!$dara.isNull(request.threatSourceIp)) {
      query["ThreatSourceIp"] = request.threatSourceIp;
    }

    if (!$dara.isNull(request.threatType)) {
      query["ThreatType"] = request.threatType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePdnsThreatLogs",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePdnsThreatLogsResponse>(await this.callApi(params, req, runtime), new $_model.DescribePdnsThreatLogsResponse({}));
  }

  /**
   * Queries the list of Public DNS threat logs.
   * 
   * @param request - DescribePdnsThreatLogsRequest
   * @returns DescribePdnsThreatLogsResponse
   */
  async describePdnsThreatLogs(request: $_model.DescribePdnsThreatLogsRequest): Promise<$_model.DescribePdnsThreatLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePdnsThreatLogsWithOptions(request, runtime);
  }

  /**
   * Retrieves Public DNS threat statistics.
   * 
   * @param request - DescribePdnsThreatStatisticRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePdnsThreatStatisticResponse
   */
  async describePdnsThreatStatisticWithOptions(request: $_model.DescribePdnsThreatStatisticRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePdnsThreatStatisticResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.threatSourceIp)) {
      query["ThreatSourceIp"] = request.threatSourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePdnsThreatStatistic",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePdnsThreatStatisticResponse>(await this.callApi(params, req, runtime), new $_model.DescribePdnsThreatStatisticResponse({}));
  }

  /**
   * Retrieves Public DNS threat statistics.
   * 
   * @param request - DescribePdnsThreatStatisticRequest
   * @returns DescribePdnsThreatStatisticResponse
   */
  async describePdnsThreatStatistic(request: $_model.DescribePdnsThreatStatisticRequest): Promise<$_model.DescribePdnsThreatStatisticResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePdnsThreatStatisticWithOptions(request, runtime);
  }

  /**
   * Retrieves the public DNS threat statistics list.
   * 
   * @param request - DescribePdnsThreatStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePdnsThreatStatisticsResponse
   */
  async describePdnsThreatStatisticsWithOptions(request: $_model.DescribePdnsThreatStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePdnsThreatStatisticsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.subDomain)) {
      query["SubDomain"] = request.subDomain;
    }

    if (!$dara.isNull(request.threatLevel)) {
      query["ThreatLevel"] = request.threatLevel;
    }

    if (!$dara.isNull(request.threatSourceIp)) {
      query["ThreatSourceIp"] = request.threatSourceIp;
    }

    if (!$dara.isNull(request.threatType)) {
      query["ThreatType"] = request.threatType;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePdnsThreatStatistics",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePdnsThreatStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.DescribePdnsThreatStatisticsResponse({}));
  }

  /**
   * Retrieves the public DNS threat statistics list.
   * 
   * @param request - DescribePdnsThreatStatisticsRequest
   * @returns DescribePdnsThreatStatisticsResponse
   */
  async describePdnsThreatStatistics(request: $_model.DescribePdnsThreatStatisticsRequest): Promise<$_model.DescribePdnsThreatStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePdnsThreatStatisticsWithOptions(request, runtime);
  }

  /**
   * Retrieves the list of Public DNS UDP IP address ranges.
   * 
   * @param request - DescribePdnsUdpIpSegmentsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePdnsUdpIpSegmentsResponse
   */
  async describePdnsUdpIpSegmentsWithOptions(request: $_model.DescribePdnsUdpIpSegmentsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePdnsUdpIpSegmentsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
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
      action: "DescribePdnsUdpIpSegments",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePdnsUdpIpSegmentsResponse>(await this.callApi(params, req, runtime), new $_model.DescribePdnsUdpIpSegmentsResponse({}));
  }

  /**
   * Retrieves the list of Public DNS UDP IP address ranges.
   * 
   * @param request - DescribePdnsUdpIpSegmentsRequest
   * @returns DescribePdnsUdpIpSegmentsResponse
   */
  async describePdnsUdpIpSegments(request: $_model.DescribePdnsUdpIpSegmentsRequest): Promise<$_model.DescribePdnsUdpIpSegmentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePdnsUdpIpSegmentsWithOptions(request, runtime);
  }

  /**
   * Retrieves user information for Public DNS.
   * 
   * @param request - DescribePdnsUserInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePdnsUserInfoResponse
   */
  async describePdnsUserInfoWithOptions(request: $_model.DescribePdnsUserInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePdnsUserInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePdnsUserInfo",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePdnsUserInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribePdnsUserInfoResponse({}));
  }

  /**
   * Retrieves user information for Public DNS.
   * 
   * @param request - DescribePdnsUserInfoRequest
   * @returns DescribePdnsUserInfoResponse
   */
  async describePdnsUserInfo(request: $_model.DescribePdnsUserInfoRequest): Promise<$_model.DescribePdnsUserInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePdnsUserInfoWithOptions(request, runtime);
  }

  /**
   * Queries the operation logs for the DNS records of a domain name.
   * 
   * @param request - DescribeRecordLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRecordLogsResponse
   */
  async describeRecordLogsWithOptions(request: $_model.DescribeRecordLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRecordLogsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.keyWord)) {
      query["KeyWord"] = request.keyWord;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!$dara.isNull(request.endDate)) {
      query["endDate"] = request.endDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRecordLogs",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRecordLogsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRecordLogsResponse({}));
  }

  /**
   * Queries the operation logs for the DNS records of a domain name.
   * 
   * @param request - DescribeRecordLogsRequest
   * @returns DescribeRecordLogsResponse
   */
  async describeRecordLogs(request: $_model.DescribeRecordLogsRequest): Promise<$_model.DescribeRecordLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRecordLogsWithOptions(request, runtime);
  }

  /**
   * Queries statistics on the request volume for all subdomains of a specified domain name.
   * 
   * @param request - DescribeRecordResolveStatisticsSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRecordResolveStatisticsSummaryResponse
   */
  async describeRecordResolveStatisticsSummaryWithOptions(request: $_model.DescribeRecordResolveStatisticsSummaryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRecordResolveStatisticsSummaryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.domainType)) {
      query["DomainType"] = request.domainType;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchMode)) {
      query["SearchMode"] = request.searchMode;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.threshold)) {
      query["Threshold"] = request.threshold;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRecordResolveStatisticsSummary",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRecordResolveStatisticsSummaryResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRecordResolveStatisticsSummaryResponse({}));
  }

  /**
   * Queries statistics on the request volume for all subdomains of a specified domain name.
   * 
   * @param request - DescribeRecordResolveStatisticsSummaryRequest
   * @returns DescribeRecordResolveStatisticsSummaryResponse
   */
  async describeRecordResolveStatisticsSummary(request: $_model.DescribeRecordResolveStatisticsSummaryRequest): Promise<$_model.DescribeRecordResolveStatisticsSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRecordResolveStatisticsSummaryWithOptions(request, runtime);
  }

  /**
   * Queries real-time data about DNS requests for a specified subdomain.
   * 
   * @remarks
   * Real-time data is collected hourly.
   * 
   * @param request - DescribeRecordStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRecordStatisticsResponse
   */
  async describeRecordStatisticsWithOptions(request: $_model.DescribeRecordStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRecordStatisticsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.domainType)) {
      query["DomainType"] = request.domainType;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.rr)) {
      query["Rr"] = request.rr;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRecordStatistics",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRecordStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRecordStatisticsResponse({}));
  }

  /**
   * Queries real-time data about DNS requests for a specified subdomain.
   * 
   * @remarks
   * Real-time data is collected hourly.
   * 
   * @param request - DescribeRecordStatisticsRequest
   * @returns DescribeRecordStatisticsResponse
   */
  async describeRecordStatistics(request: $_model.DescribeRecordStatisticsRequest): Promise<$_model.DescribeRecordStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRecordStatisticsWithOptions(request, runtime);
  }

  /**
   * Queries statistics on the request volume for all subdomains of a specified domain name.
   * 
   * @param request - DescribeRecordStatisticsSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRecordStatisticsSummaryResponse
   */
  async describeRecordStatisticsSummaryWithOptions(request: $_model.DescribeRecordStatisticsSummaryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRecordStatisticsSummaryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.domainType)) {
      query["DomainType"] = request.domainType;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchMode)) {
      query["SearchMode"] = request.searchMode;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.threshold)) {
      query["Threshold"] = request.threshold;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRecordStatisticsSummary",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRecordStatisticsSummaryResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRecordStatisticsSummaryResponse({}));
  }

  /**
   * Queries statistics on the request volume for all subdomains of a specified domain name.
   * 
   * @param request - DescribeRecordStatisticsSummaryRequest
   * @returns DescribeRecordStatisticsSummaryResponse
   */
  async describeRecordStatisticsSummary(request: $_model.DescribeRecordStatisticsSummaryRequest): Promise<$_model.DescribeRecordStatisticsSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRecordStatisticsSummaryWithOptions(request, runtime);
  }

  /**
   * Describes a built-in authoritative DNS record used for recursive resolution.
   * 
   * @param request - DescribeRecursionRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRecursionRecordResponse
   */
  async describeRecursionRecordWithOptions(request: $_model.DescribeRecursionRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRecursionRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRecursionRecord",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRecursionRecordResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRecursionRecordResponse({}));
  }

  /**
   * Describes a built-in authoritative DNS record used for recursive resolution.
   * 
   * @param request - DescribeRecursionRecordRequest
   * @returns DescribeRecursionRecordResponse
   */
  async describeRecursionRecord(request: $_model.DescribeRecursionRecordRequest): Promise<$_model.DescribeRecursionRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRecursionRecordWithOptions(request, runtime);
  }

  /**
   * Queries the details of an authoritative zone for recursive resolution.
   * 
   * @remarks
   * Real-time data is measured hourly.
   * 
   * @param request - DescribeRecursionZoneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRecursionZoneResponse
   */
  async describeRecursionZoneWithOptions(request: $_model.DescribeRecursionZoneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRecursionZoneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRecursionZone",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRecursionZoneResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRecursionZoneResponse({}));
  }

  /**
   * Queries the details of an authoritative zone for recursive resolution.
   * 
   * @remarks
   * Real-time data is measured hourly.
   * 
   * @param request - DescribeRecursionZoneRequest
   * @returns DescribeRecursionZoneResponse
   */
  async describeRecursionZone(request: $_model.DescribeRecursionZoneRequest): Promise<$_model.DescribeRecursionZoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRecursionZoneWithOptions(request, runtime);
  }

  /**
   * Retrieves all DNS records for a specific subdomain based on the specified parameters.
   * 
   * @param request - DescribeSubDomainRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSubDomainRecordsResponse
   */
  async describeSubDomainRecordsWithOptions(request: $_model.DescribeSubDomainRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSubDomainRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.line)) {
      query["Line"] = request.line;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.subDomain)) {
      query["SubDomain"] = request.subDomain;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSubDomainRecords",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSubDomainRecordsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSubDomainRecordsResponse({}));
  }

  /**
   * Retrieves all DNS records for a specific subdomain based on the specified parameters.
   * 
   * @param request - DescribeSubDomainRecordsRequest
   * @returns DescribeSubDomainRecordsResponse
   */
  async describeSubDomainRecords(request: $_model.DescribeSubDomainRecordsRequest): Promise<$_model.DescribeSubDomainRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSubDomainRecordsWithOptions(request, runtime);
  }

  /**
   * Queries all lines supported by Cloud DNS.
   * 
   * @param request - DescribeSupportLinesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSupportLinesResponse
   */
  async describeSupportLinesWithOptions(request: $_model.DescribeSupportLinesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSupportLinesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSupportLines",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSupportLinesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSupportLinesResponse({}));
  }

  /**
   * Queries all lines supported by Cloud DNS.
   * 
   * @param request - DescribeSupportLinesRequest
   * @returns DescribeSupportLinesResponse
   */
  async describeSupportLines(request: $_model.DescribeSupportLinesRequest): Promise<$_model.DescribeSupportLinesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSupportLinesWithOptions(request, runtime);
  }

  /**
   * Queries existing tags.
   * 
   * @param request - DescribeTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTagsResponse
   */
  async describeTagsWithOptions(request: $_model.DescribeTagsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTagsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTags",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTagsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTagsResponse({}));
  }

  /**
   * Queries existing tags.
   * 
   * @param request - DescribeTagsRequest
   * @returns DescribeTagsResponse
   */
  async describeTags(request: $_model.DescribeTagsRequest): Promise<$_model.DescribeTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTagsWithOptions(request, runtime);
  }

  /**
   * Queries the domain names transferred between accounts based on the specified input parameters.
   * 
   * @param request - DescribeTransferDomainsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTransferDomainsResponse
   */
  async describeTransferDomainsWithOptions(request: $_model.DescribeTransferDomainsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTransferDomainsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.fromUserId)) {
      query["FromUserId"] = request.fromUserId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.targetUserId)) {
      query["TargetUserId"] = request.targetUserId;
    }

    if (!$dara.isNull(request.transferType)) {
      query["TransferType"] = request.transferType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTransferDomains",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTransferDomainsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTransferDomainsResponse({}));
  }

  /**
   * Queries the domain names transferred between accounts based on the specified input parameters.
   * 
   * @param request - DescribeTransferDomainsRequest
   * @returns DescribeTransferDomainsResponse
   */
  async describeTransferDomains(request: $_model.DescribeTransferDomainsRequest): Promise<$_model.DescribeTransferDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTransferDomainsWithOptions(request, runtime);
  }

  /**
   * Executes a disaster recovery plan.
   * 
   * @param request - ExecuteGtmRecoveryPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteGtmRecoveryPlanResponse
   */
  async executeGtmRecoveryPlanWithOptions(request: $_model.ExecuteGtmRecoveryPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteGtmRecoveryPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.recoveryPlanId)) {
      query["RecoveryPlanId"] = request.recoveryPlanId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteGtmRecoveryPlan",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteGtmRecoveryPlanResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteGtmRecoveryPlanResponse({}));
  }

  /**
   * Executes a disaster recovery plan.
   * 
   * @param request - ExecuteGtmRecoveryPlanRequest
   * @returns ExecuteGtmRecoveryPlanResponse
   */
  async executeGtmRecoveryPlan(request: $_model.ExecuteGtmRecoveryPlanRequest): Promise<$_model.ExecuteGtmRecoveryPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.executeGtmRecoveryPlanWithOptions(request, runtime);
  }

  /**
   * Retrieves the primary domain name from a specified domain name.
   * 
   * @remarks
   * For more information about primary and subdomain name levels, see
   * <props="china">[Domain name levels](https://help.aliyun.com/document_detail/39803.html?spm=a2c4g.2357293.0.0.211f41ffUR1cPb). For example, if you enter `www.abc.com`, the output is abc.com.
   * <props="intl">[Domain name levels](https://www.alibabacloud.com/help/zh/faq-detail/39803.htm). For example, if you enter `www.abc.com`, the output is abc.com.
   * 
   * @param request - GetMainDomainNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMainDomainNameResponse
   */
  async getMainDomainNameWithOptions(request: $_model.GetMainDomainNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMainDomainNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.inputString)) {
      query["InputString"] = request.inputString;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMainDomainName",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMainDomainNameResponse>(await this.callApi(params, req, runtime), new $_model.GetMainDomainNameResponse({}));
  }

  /**
   * Retrieves the primary domain name from a specified domain name.
   * 
   * @remarks
   * For more information about primary and subdomain name levels, see
   * <props="china">[Domain name levels](https://help.aliyun.com/document_detail/39803.html?spm=a2c4g.2357293.0.0.211f41ffUR1cPb). For example, if you enter `www.abc.com`, the output is abc.com.
   * <props="intl">[Domain name levels](https://www.alibabacloud.com/help/zh/faq-detail/39803.htm). For example, if you enter `www.abc.com`, the output is abc.com.
   * 
   * @param request - GetMainDomainNameRequest
   * @returns GetMainDomainNameResponse
   */
  async getMainDomainName(request: $_model.GetMainDomainNameRequest): Promise<$_model.GetMainDomainNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMainDomainNameWithOptions(request, runtime);
  }

  /**
   * Generates a TXT record for domain and subdomain verification. This operation supports batch retrieval.
   * 
   * @param request - GetTxtRecordForVerifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTxtRecordForVerifyResponse
   */
  async getTxtRecordForVerifyWithOptions(request: $_model.GetTxtRecordForVerifyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTxtRecordForVerifyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTxtRecordForVerify",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTxtRecordForVerifyResponse>(await this.callApi(params, req, runtime), new $_model.GetTxtRecordForVerifyResponse({}));
  }

  /**
   * Generates a TXT record for domain and subdomain verification. This operation supports batch retrieval.
   * 
   * @param request - GetTxtRecordForVerifyRequest
   * @returns GetTxtRecordForVerifyResponse
   */
  async getTxtRecordForVerify(request: $_model.GetTxtRecordForVerifyRequest): Promise<$_model.GetTxtRecordForVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTxtRecordForVerifyWithOptions(request, runtime);
  }

  /**
   * Queries the list of Agent registration information.
   * 
   * @param request - ListAtiAgentRegisterInfosRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAtiAgentRegisterInfosResponse
   */
  async listAtiAgentRegisterInfosWithOptions(request: $_model.ListAtiAgentRegisterInfosRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAtiAgentRegisterInfosResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentDisplayName)) {
      query["AgentDisplayName"] = request.agentDisplayName;
    }

    if (!$dara.isNull(request.agentHost)) {
      query["AgentHost"] = request.agentHost;
    }

    if (!$dara.isNull(request.agentId)) {
      query["AgentId"] = request.agentId;
    }

    if (!$dara.isNull(request.agentVersion)) {
      query["AgentVersion"] = request.agentVersion;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAtiAgentRegisterInfos",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAtiAgentRegisterInfosResponse>(await this.callApi(params, req, runtime), new $_model.ListAtiAgentRegisterInfosResponse({}));
  }

  /**
   * Queries the list of Agent registration information.
   * 
   * @param request - ListAtiAgentRegisterInfosRequest
   * @returns ListAtiAgentRegisterInfosResponse
   */
  async listAtiAgentRegisterInfos(request: $_model.ListAtiAgentRegisterInfosRequest): Promise<$_model.ListAtiAgentRegisterInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAtiAgentRegisterInfosWithOptions(request, runtime);
  }

  /**
   * Queries the list of real-name registered contacts.
   * 
   * @param request - ListAtiChangeLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAtiChangeLogsResponse
   */
  async listAtiChangeLogsWithOptions(request: $_model.ListAtiChangeLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAtiChangeLogsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentId)) {
      query["AgentId"] = request.agentId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!$dara.isNull(request.operationType)) {
      query["OperationType"] = request.operationType;
    }

    if (!$dara.isNull(request.operatorAccount)) {
      query["OperatorAccount"] = request.operatorAccount;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    if (!$dara.isNull(request.timeRange)) {
      query["TimeRange"] = request.timeRange;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAtiChangeLogs",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAtiChangeLogsResponse>(await this.callApi(params, req, runtime), new $_model.ListAtiChangeLogsResponse({}));
  }

  /**
   * Queries the list of real-name registered contacts.
   * 
   * @param request - ListAtiChangeLogsRequest
   * @returns ListAtiChangeLogsResponse
   */
  async listAtiChangeLogs(request: $_model.ListAtiChangeLogsRequest): Promise<$_model.ListAtiChangeLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAtiChangeLogsWithOptions(request, runtime);
  }

  /**
   * 查询实名注册人列表
   * 
   * @param request - ListAtiRegistrantsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAtiRegistrantsResponse
   */
  async listAtiRegistrantsWithOptions(request: $_model.ListAtiRegistrantsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAtiRegistrantsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAtiRegistrants",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAtiRegistrantsResponse>(await this.callApi(params, req, runtime), new $_model.ListAtiRegistrantsResponse({}));
  }

  /**
   * 查询实名注册人列表
   * 
   * @param request - ListAtiRegistrantsRequest
   * @returns ListAtiRegistrantsResponse
   */
  async listAtiRegistrants(request: $_model.ListAtiRegistrantsRequest): Promise<$_model.ListAtiRegistrantsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAtiRegistrantsWithOptions(request, runtime);
  }

  /**
   * Queries the list of address pools in Global Traffic Manager (GTM) 3.0.
   * 
   * @param request - ListCloudGtmAddressPoolsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCloudGtmAddressPoolsResponse
   */
  async listCloudGtmAddressPoolsWithOptions(request: $_model.ListCloudGtmAddressPoolsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCloudGtmAddressPoolsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.addressPoolName)) {
      query["AddressPoolName"] = request.addressPoolName;
    }

    if (!$dara.isNull(request.addressPoolType)) {
      query["AddressPoolType"] = request.addressPoolType;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.enableStatus)) {
      query["EnableStatus"] = request.enableStatus;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCloudGtmAddressPools",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCloudGtmAddressPoolsResponse>(await this.callApi(params, req, runtime), new $_model.ListCloudGtmAddressPoolsResponse({}));
  }

  /**
   * Queries the list of address pools in Global Traffic Manager (GTM) 3.0.
   * 
   * @param request - ListCloudGtmAddressPoolsRequest
   * @returns ListCloudGtmAddressPoolsResponse
   */
  async listCloudGtmAddressPools(request: $_model.ListCloudGtmAddressPoolsRequest): Promise<$_model.ListCloudGtmAddressPoolsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCloudGtmAddressPoolsWithOptions(request, runtime);
  }

  /**
   * Queries a list of addresses based on the specified parameters.
   * 
   * @param request - ListCloudGtmAddressesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCloudGtmAddressesResponse
   */
  async listCloudGtmAddressesWithOptions(request: $_model.ListCloudGtmAddressesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCloudGtmAddressesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.address)) {
      query["Address"] = request.address;
    }

    if (!$dara.isNull(request.addressId)) {
      query["AddressId"] = request.addressId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.enableStatus)) {
      query["EnableStatus"] = request.enableStatus;
    }

    if (!$dara.isNull(request.healthStatus)) {
      query["HealthStatus"] = request.healthStatus;
    }

    if (!$dara.isNull(request.monitorTemplateId)) {
      query["MonitorTemplateId"] = request.monitorTemplateId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCloudGtmAddresses",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCloudGtmAddressesResponse>(await this.callApi(params, req, runtime), new $_model.ListCloudGtmAddressesResponse({}));
  }

  /**
   * Queries a list of addresses based on the specified parameters.
   * 
   * @param request - ListCloudGtmAddressesRequest
   * @returns ListCloudGtmAddressesResponse
   */
  async listCloudGtmAddresses(request: $_model.ListCloudGtmAddressesRequest): Promise<$_model.ListCloudGtmAddressesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCloudGtmAddressesWithOptions(request, runtime);
  }

  /**
   * Queries a list of alert logs.
   * 
   * @param request - ListCloudGtmAlertLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCloudGtmAlertLogsResponse
   */
  async listCloudGtmAlertLogsWithOptions(request: $_model.ListCloudGtmAlertLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCloudGtmAlertLogsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.actionType)) {
      query["ActionType"] = request.actionType;
    }

    if (!$dara.isNull(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!$dara.isNull(request.entityType)) {
      query["EntityType"] = request.entityType;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCloudGtmAlertLogs",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCloudGtmAlertLogsResponse>(await this.callApi(params, req, runtime), new $_model.ListCloudGtmAlertLogsResponse({}));
  }

  /**
   * Queries a list of alert logs.
   * 
   * @param request - ListCloudGtmAlertLogsRequest
   * @returns ListCloudGtmAlertLogsResponse
   */
  async listCloudGtmAlertLogs(request: $_model.ListCloudGtmAlertLogsRequest): Promise<$_model.ListCloudGtmAlertLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCloudGtmAlertLogsWithOptions(request, runtime);
  }

  /**
   * @param request - ListCloudGtmAvailableAlertGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCloudGtmAvailableAlertGroupsResponse
   */
  async listCloudGtmAvailableAlertGroupsWithOptions(request: $_model.ListCloudGtmAvailableAlertGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCloudGtmAvailableAlertGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCloudGtmAvailableAlertGroups",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCloudGtmAvailableAlertGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListCloudGtmAvailableAlertGroupsResponse({}));
  }

  /**
   * @param request - ListCloudGtmAvailableAlertGroupsRequest
   * @returns ListCloudGtmAvailableAlertGroupsResponse
   */
  async listCloudGtmAvailableAlertGroups(request: $_model.ListCloudGtmAvailableAlertGroupsRequest): Promise<$_model.ListCloudGtmAvailableAlertGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCloudGtmAvailableAlertGroupsWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of instance configurations that contain access domain names and address pool information.
   * 
   * @param request - ListCloudGtmInstanceConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCloudGtmInstanceConfigsResponse
   */
  async listCloudGtmInstanceConfigsWithOptions(request: $_model.ListCloudGtmInstanceConfigsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCloudGtmInstanceConfigsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.enableStatus)) {
      query["EnableStatus"] = request.enableStatus;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.scheduleDomainName)) {
      query["ScheduleDomainName"] = request.scheduleDomainName;
    }

    if (!$dara.isNull(request.scheduleZoneName)) {
      query["ScheduleZoneName"] = request.scheduleZoneName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCloudGtmInstanceConfigs",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCloudGtmInstanceConfigsResponse>(await this.callApi(params, req, runtime), new $_model.ListCloudGtmInstanceConfigsResponse({}));
  }

  /**
   * Retrieves a list of instance configurations that contain access domain names and address pool information.
   * 
   * @param request - ListCloudGtmInstanceConfigsRequest
   * @returns ListCloudGtmInstanceConfigsResponse
   */
  async listCloudGtmInstanceConfigs(request: $_model.ListCloudGtmInstanceConfigsRequest): Promise<$_model.ListCloudGtmInstanceConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCloudGtmInstanceConfigsWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of GTM 3.0 instances based on the specified parameters.
   * 
   * @param request - ListCloudGtmInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCloudGtmInstancesResponse
   */
  async listCloudGtmInstancesWithOptions(request: $_model.ListCloudGtmInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCloudGtmInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
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
      action: "ListCloudGtmInstances",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCloudGtmInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListCloudGtmInstancesResponse({}));
  }

  /**
   * Retrieves a list of GTM 3.0 instances based on the specified parameters.
   * 
   * @param request - ListCloudGtmInstancesRequest
   * @returns ListCloudGtmInstancesResponse
   */
  async listCloudGtmInstances(request: $_model.ListCloudGtmInstancesRequest): Promise<$_model.ListCloudGtmInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCloudGtmInstancesWithOptions(request, runtime);
  }

  /**
   * Lists the health check monitoring nodes based on the specified input parameters.
   * 
   * @param request - ListCloudGtmMonitorNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCloudGtmMonitorNodesResponse
   */
  async listCloudGtmMonitorNodesWithOptions(request: $_model.ListCloudGtmMonitorNodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCloudGtmMonitorNodesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.showDisabledNodes)) {
      query["ShowDisabledNodes"] = request.showDisabledNodes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCloudGtmMonitorNodes",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCloudGtmMonitorNodesResponse>(await this.callApi(params, req, runtime), new $_model.ListCloudGtmMonitorNodesResponse({}));
  }

  /**
   * Lists the health check monitoring nodes based on the specified input parameters.
   * 
   * @param request - ListCloudGtmMonitorNodesRequest
   * @returns ListCloudGtmMonitorNodesResponse
   */
  async listCloudGtmMonitorNodes(request: $_model.ListCloudGtmMonitorNodesRequest): Promise<$_model.ListCloudGtmMonitorNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCloudGtmMonitorNodesWithOptions(request, runtime);
  }

  /**
   * Queries health check templates based on the specified parameters.
   * 
   * @param request - ListCloudGtmMonitorTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCloudGtmMonitorTemplatesResponse
   */
  async listCloudGtmMonitorTemplatesWithOptions(request: $_model.ListCloudGtmMonitorTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCloudGtmMonitorTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.ipVersion)) {
      query["IpVersion"] = request.ipVersion;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.protocol)) {
      query["Protocol"] = request.protocol;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCloudGtmMonitorTemplates",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCloudGtmMonitorTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.ListCloudGtmMonitorTemplatesResponse({}));
  }

  /**
   * Queries health check templates based on the specified parameters.
   * 
   * @param request - ListCloudGtmMonitorTemplatesRequest
   * @returns ListCloudGtmMonitorTemplatesResponse
   */
  async listCloudGtmMonitorTemplates(request: $_model.ListCloudGtmMonitorTemplatesRequest): Promise<$_model.ListCloudGtmMonitorTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCloudGtmMonitorTemplatesWithOptions(request, runtime);
  }

  /**
   * Lists the built-in authoritative records for recursive resolution.
   * 
   * @param request - ListRecursionRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRecursionRecordsResponse
   */
  async listRecursionRecordsWithOptions(request: $_model.ListRecursionRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRecursionRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.requestSource)) {
      query["RequestSource"] = request.requestSource;
    }

    if (!$dara.isNull(request.rr)) {
      query["Rr"] = request.rr;
    }

    if (!$dara.isNull(request.ttl)) {
      query["Ttl"] = request.ttl;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.weight)) {
      query["Weight"] = request.weight;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRecursionRecords",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRecursionRecordsResponse>(await this.callApi(params, req, runtime), new $_model.ListRecursionRecordsResponse({}));
  }

  /**
   * Lists the built-in authoritative records for recursive resolution.
   * 
   * @param request - ListRecursionRecordsRequest
   * @returns ListRecursionRecordsResponse
   */
  async listRecursionRecords(request: $_model.ListRecursionRecordsRequest): Promise<$_model.ListRecursionRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRecursionRecordsWithOptions(request, runtime);
  }

  /**
   * Queries the zones that are used for recursive resolution of built-in authoritative domain names.
   * 
   * @remarks
   * - Specify at least ResourceId.N or Tag.N (Tag.N.Key and Tag.N.Value) in your request to identify the resources to retrieve.
   * - Tag.N is a resource tag that consists of a key-value pair. If you specify only Tag.N.Key, all tag values associated with the tag key are returned. An error is returned if you specify only Tag.N.Value.
   * - If you specify both Tag.N and ResourceId.N to filter resources, only the resources that are specified by ResourceId.N and match all the specified key-value pairs are returned.
   * - If you specify multiple tag key-value pairs, the resources that match all of them are returned.
   * 
   * @param request - ListRecursionZonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRecursionZonesResponse
   */
  async listRecursionZonesWithOptions(request: $_model.ListRecursionZonesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRecursionZonesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.zoneName)) {
      query["ZoneName"] = request.zoneName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRecursionZones",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRecursionZonesResponse>(await this.callApi(params, req, runtime), new $_model.ListRecursionZonesResponse({}));
  }

  /**
   * Queries the zones that are used for recursive resolution of built-in authoritative domain names.
   * 
   * @remarks
   * - Specify at least ResourceId.N or Tag.N (Tag.N.Key and Tag.N.Value) in your request to identify the resources to retrieve.
   * - Tag.N is a resource tag that consists of a key-value pair. If you specify only Tag.N.Key, all tag values associated with the tag key are returned. An error is returned if you specify only Tag.N.Value.
   * - If you specify both Tag.N and ResourceId.N to filter resources, only the resources that are specified by ResourceId.N and match all the specified key-value pairs are returned.
   * - If you specify multiple tag key-value pairs, the resources that match all of them are returned.
   * 
   * @param request - ListRecursionZonesRequest
   * @returns ListRecursionZonesResponse
   */
  async listRecursionZones(request: $_model.ListRecursionZonesRequest): Promise<$_model.ListRecursionZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRecursionZonesWithOptions(request, runtime);
  }

  /**
   * Queries resources by tag.
   * 
   * @remarks
   * - To specify the objects to retrieve, your request must contain at least one of the following parameters: `ResourceId.N` or `Tag.N` (which consists of Tag.N.Key and Tag.N.Value).
   * - Tag.N is a resource tag that consists of a key-value pair. If you specify only Tag.N.Key, all tag values associated with that tag key are returned. An error occurs if you specify only Tag.N.Value.
   * - If you specify both Tag.N and ResourceId.N to filter resources, only the resources that are specified by ResourceId.N and match all the specified tag key-value pairs are returned.
   * - If you specify multiple tag key-value pairs, only the resources that have all the specified key-value pairs are returned.
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: $_model.ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

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
      version: "2015-01-09",
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
   * Queries resources by tag.
   * 
   * @remarks
   * - To specify the objects to retrieve, your request must contain at least one of the following parameters: `ResourceId.N` or `Tag.N` (which consists of Tag.N.Key and Tag.N.Value).
   * - Tag.N is a resource tag that consists of a key-value pair. If you specify only Tag.N.Key, all tag values associated with that tag key are returned. An error occurs if you specify only Tag.N.Value.
   * - If you specify both Tag.N and ResourceId.N to filter resources, only the resources that are specified by ResourceId.N and match all the specified tag key-value pairs are returned.
   * - If you specify multiple tag key-value pairs, only the resources that have all the specified key-value pairs are returned.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Changes the DNS servers for a domain name from a third-party provider to Alibaba Cloud DNS.
   * 
   * @remarks
   * After the operation is successful, the DNS servers are changed to Alibaba Cloud DNS servers. The names of these new servers end with hichina.com.
   * > **Prerequisite: This operation applies to domain names that are registered with Alibaba Cloud and currently use third-party DNS servers.**
   * 
   * @param request - ModifyHichinaDomainDNSRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyHichinaDomainDNSResponse
   */
  async modifyHichinaDomainDNSWithOptions(request: $_model.ModifyHichinaDomainDNSRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyHichinaDomainDNSResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyHichinaDomainDNS",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyHichinaDomainDNSResponse>(await this.callApi(params, req, runtime), new $_model.ModifyHichinaDomainDNSResponse({}));
  }

  /**
   * Changes the DNS servers for a domain name from a third-party provider to Alibaba Cloud DNS.
   * 
   * @remarks
   * After the operation is successful, the DNS servers are changed to Alibaba Cloud DNS servers. The names of these new servers end with hichina.com.
   * > **Prerequisite: This operation applies to domain names that are registered with Alibaba Cloud and currently use third-party DNS servers.**
   * 
   * @param request - ModifyHichinaDomainDNSRequest
   * @returns ModifyHichinaDomainDNSResponse
   */
  async modifyHichinaDomainDNS(request: $_model.ModifyHichinaDomainDNSRequest): Promise<$_model.ModifyHichinaDomainDNSResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyHichinaDomainDNSWithOptions(request, runtime);
  }

  /**
   * Moves a domain name to a different resource group.
   * 
   * @param request - MoveDomainResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveDomainResourceGroupResponse
   */
  async moveDomainResourceGroupWithOptions(request: $_model.MoveDomainResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MoveDomainResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.newResourceGroupId)) {
      query["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MoveDomainResourceGroup",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MoveDomainResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.MoveDomainResourceGroupResponse({}));
  }

  /**
   * Moves a domain name to a different resource group.
   * 
   * @param request - MoveDomainResourceGroupRequest
   * @returns MoveDomainResourceGroupResponse
   */
  async moveDomainResourceGroup(request: $_model.MoveDomainResourceGroupRequest): Promise<$_model.MoveDomainResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.moveDomainResourceGroupWithOptions(request, runtime);
  }

  /**
   * Moves a Global Traffic Manager (GTM) instance to a new resource group.
   * 
   * @param request - MoveGtmResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveGtmResourceGroupResponse
   */
  async moveGtmResourceGroupWithOptions(request: $_model.MoveGtmResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MoveGtmResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.newResourceGroupId)) {
      query["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MoveGtmResourceGroup",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MoveGtmResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.MoveGtmResourceGroupResponse({}));
  }

  /**
   * Moves a Global Traffic Manager (GTM) instance to a new resource group.
   * 
   * @param request - MoveGtmResourceGroupRequest
   * @returns MoveGtmResourceGroupResponse
   */
  async moveGtmResourceGroup(request: $_model.MoveGtmResourceGroupRequest): Promise<$_model.MoveGtmResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.moveGtmResourceGroupWithOptions(request, runtime);
  }

  /**
   * Adds or deletes domain names and DNS records in batches.
   * 
   * @remarks
   * Use this operation for batch DNS tasks that do not require immediate execution.
   * 
   * @param request - OperateBatchDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateBatchDomainResponse
   */
  async operateBatchDomainWithOptions(request: $_model.OperateBatchDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OperateBatchDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainRecordInfo)) {
      query["DomainRecordInfo"] = request.domainRecordInfo;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OperateBatchDomain",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OperateBatchDomainResponse>(await this.callApi(params, req, runtime), new $_model.OperateBatchDomainResponse({}));
  }

  /**
   * Adds or deletes domain names and DNS records in batches.
   * 
   * @remarks
   * Use this operation for batch DNS tasks that do not require immediate execution.
   * 
   * @param request - OperateBatchDomainRequest
   * @returns OperateBatchDomainResponse
   */
  async operateBatchDomain(request: $_model.OperateBatchDomainRequest): Promise<$_model.OperateBatchDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.operateBatchDomainWithOptions(request, runtime);
  }

  /**
   * Pause Public DNS Service
   * 
   * @param request - PausePdnsServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PausePdnsServiceResponse
   */
  async pausePdnsServiceWithOptions(request: $_model.PausePdnsServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PausePdnsServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.serviceType)) {
      query["ServiceType"] = request.serviceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PausePdnsService",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PausePdnsServiceResponse>(await this.callApi(params, req, runtime), new $_model.PausePdnsServiceResponse({}));
  }

  /**
   * Pause Public DNS Service
   * 
   * @param request - PausePdnsServiceRequest
   * @returns PausePdnsServiceResponse
   */
  async pausePdnsService(request: $_model.PausePdnsServiceRequest): Promise<$_model.PausePdnsServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pausePdnsServiceWithOptions(request, runtime);
  }

  /**
   * Previews a disaster recovery plan.
   * 
   * @param request - PreviewGtmRecoveryPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PreviewGtmRecoveryPlanResponse
   */
  async previewGtmRecoveryPlanWithOptions(request: $_model.PreviewGtmRecoveryPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PreviewGtmRecoveryPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.recoveryPlanId)) {
      query["RecoveryPlanId"] = request.recoveryPlanId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PreviewGtmRecoveryPlan",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PreviewGtmRecoveryPlanResponse>(await this.callApi(params, req, runtime), new $_model.PreviewGtmRecoveryPlanResponse({}));
  }

  /**
   * Previews a disaster recovery plan.
   * 
   * @param request - PreviewGtmRecoveryPlanRequest
   * @returns PreviewGtmRecoveryPlanResponse
   */
  async previewGtmRecoveryPlan(request: $_model.PreviewGtmRecoveryPlanRequest): Promise<$_model.PreviewGtmRecoveryPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.previewGtmRecoveryPlanWithOptions(request, runtime);
  }

  /**
   * Delete Public DNS AppKey
   * 
   * @param request - RemovePdnsAppKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemovePdnsAppKeyResponse
   */
  async removePdnsAppKeyWithOptions(request: $_model.RemovePdnsAppKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemovePdnsAppKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKeyId)) {
      query["AppKeyId"] = request.appKeyId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemovePdnsAppKey",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemovePdnsAppKeyResponse>(await this.callApi(params, req, runtime), new $_model.RemovePdnsAppKeyResponse({}));
  }

  /**
   * Delete Public DNS AppKey
   * 
   * @param request - RemovePdnsAppKeyRequest
   * @returns RemovePdnsAppKeyResponse
   */
  async removePdnsAppKey(request: $_model.RemovePdnsAppKeyRequest): Promise<$_model.RemovePdnsAppKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removePdnsAppKeyWithOptions(request, runtime);
  }

  /**
   * Remove Public DNS UDP IP Segment
   * 
   * @param request - RemovePdnsUdpIpSegmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemovePdnsUdpIpSegmentResponse
   */
  async removePdnsUdpIpSegmentWithOptions(request: $_model.RemovePdnsUdpIpSegmentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemovePdnsUdpIpSegmentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemovePdnsUdpIpSegment",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemovePdnsUdpIpSegmentResponse>(await this.callApi(params, req, runtime), new $_model.RemovePdnsUdpIpSegmentResponse({}));
  }

  /**
   * Remove Public DNS UDP IP Segment
   * 
   * @param request - RemovePdnsUdpIpSegmentRequest
   * @returns RemovePdnsUdpIpSegmentResponse
   */
  async removePdnsUdpIpSegment(request: $_model.RemovePdnsUdpIpSegmentRequest): Promise<$_model.RemovePdnsUdpIpSegmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removePdnsUdpIpSegmentWithOptions(request, runtime);
  }

  /**
   * Removes the serverHold status of a specified domain name.
   * 
   * @remarks
   * ## Description
   * - This operation removes the serverHold status of a specified domain name.
   * 
   * @param request - RemoveRspDomainServerHoldStatusForGatewayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveRspDomainServerHoldStatusForGatewayResponse
   */
  async removeRspDomainServerHoldStatusForGatewayWithOptions(request: $_model.RemoveRspDomainServerHoldStatusForGatewayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveRspDomainServerHoldStatusForGatewayResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.statusMsg)) {
      query["StatusMsg"] = request.statusMsg;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveRspDomainServerHoldStatusForGateway",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveRspDomainServerHoldStatusForGatewayResponse>(await this.callApi(params, req, runtime), new $_model.RemoveRspDomainServerHoldStatusForGatewayResponse({}));
  }

  /**
   * Removes the serverHold status of a specified domain name.
   * 
   * @remarks
   * ## Description
   * - This operation removes the serverHold status of a specified domain name.
   * 
   * @param request - RemoveRspDomainServerHoldStatusForGatewayRequest
   * @returns RemoveRspDomainServerHoldStatusForGatewayResponse
   */
  async removeRspDomainServerHoldStatusForGateway(request: $_model.RemoveRspDomainServerHoldStatusForGatewayRequest): Promise<$_model.RemoveRspDomainServerHoldStatusForGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeRspDomainServerHoldStatusForGatewayWithOptions(request, runtime);
  }

  /**
   * Removes the serverHold status for a specified domain name.
   * 
   * @remarks
   * ## Description
   * - This operation removes the serverHold status for a specified domain name.
   * 
   * @param request - RemoveRspDomainServerHoldStatusForGatewayOteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveRspDomainServerHoldStatusForGatewayOteResponse
   */
  async removeRspDomainServerHoldStatusForGatewayOteWithOptions(request: $_model.RemoveRspDomainServerHoldStatusForGatewayOteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveRspDomainServerHoldStatusForGatewayOteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.statusMsg)) {
      query["StatusMsg"] = request.statusMsg;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveRspDomainServerHoldStatusForGatewayOte",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveRspDomainServerHoldStatusForGatewayOteResponse>(await this.callApi(params, req, runtime), new $_model.RemoveRspDomainServerHoldStatusForGatewayOteResponse({}));
  }

  /**
   * Removes the serverHold status for a specified domain name.
   * 
   * @remarks
   * ## Description
   * - This operation removes the serverHold status for a specified domain name.
   * 
   * @param request - RemoveRspDomainServerHoldStatusForGatewayOteRequest
   * @returns RemoveRspDomainServerHoldStatusForGatewayOteResponse
   */
  async removeRspDomainServerHoldStatusForGatewayOte(request: $_model.RemoveRspDomainServerHoldStatusForGatewayOteRequest): Promise<$_model.RemoveRspDomainServerHoldStatusForGatewayOteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeRspDomainServerHoldStatusForGatewayOteWithOptions(request, runtime);
  }

  /**
   * Replaces the addresses in a specified address pool.
   * 
   * @param tmpReq - ReplaceCloudGtmAddressPoolAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReplaceCloudGtmAddressPoolAddressResponse
   */
  async replaceCloudGtmAddressPoolAddressWithOptions(tmpReq: $_model.ReplaceCloudGtmAddressPoolAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReplaceCloudGtmAddressPoolAddressResponse> {
    tmpReq.validate();
    let request = new $_model.ReplaceCloudGtmAddressPoolAddressShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.addresses)) {
      request.addressesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.addresses, "Addresses", "json");
    }

    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.addressPoolId)) {
      query["AddressPoolId"] = request.addressPoolId;
    }

    if (!$dara.isNull(request.addressesShrink)) {
      query["Addresses"] = request.addressesShrink;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReplaceCloudGtmAddressPoolAddress",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReplaceCloudGtmAddressPoolAddressResponse>(await this.callApi(params, req, runtime), new $_model.ReplaceCloudGtmAddressPoolAddressResponse({}));
  }

  /**
   * Replaces the addresses in a specified address pool.
   * 
   * @param request - ReplaceCloudGtmAddressPoolAddressRequest
   * @returns ReplaceCloudGtmAddressPoolAddressResponse
   */
  async replaceCloudGtmAddressPoolAddress(request: $_model.ReplaceCloudGtmAddressPoolAddressRequest): Promise<$_model.ReplaceCloudGtmAddressPoolAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.replaceCloudGtmAddressPoolAddressWithOptions(request, runtime);
  }

  /**
   * Replaces the address pools associated with an instance.
   * 
   * @param tmpReq - ReplaceCloudGtmInstanceConfigAddressPoolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReplaceCloudGtmInstanceConfigAddressPoolResponse
   */
  async replaceCloudGtmInstanceConfigAddressPoolWithOptions(tmpReq: $_model.ReplaceCloudGtmInstanceConfigAddressPoolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReplaceCloudGtmInstanceConfigAddressPoolResponse> {
    tmpReq.validate();
    let request = new $_model.ReplaceCloudGtmInstanceConfigAddressPoolShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.addressPools)) {
      request.addressPoolsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.addressPools, "AddressPools", "json");
    }

    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.addressPoolsShrink)) {
      query["AddressPools"] = request.addressPoolsShrink;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.configId)) {
      query["ConfigId"] = request.configId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReplaceCloudGtmInstanceConfigAddressPool",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReplaceCloudGtmInstanceConfigAddressPoolResponse>(await this.callApi(params, req, runtime), new $_model.ReplaceCloudGtmInstanceConfigAddressPoolResponse({}));
  }

  /**
   * Replaces the address pools associated with an instance.
   * 
   * @param request - ReplaceCloudGtmInstanceConfigAddressPoolRequest
   * @returns ReplaceCloudGtmInstanceConfigAddressPoolResponse
   */
  async replaceCloudGtmInstanceConfigAddressPool(request: $_model.ReplaceCloudGtmInstanceConfigAddressPoolRequest): Promise<$_model.ReplaceCloudGtmInstanceConfigAddressPoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.replaceCloudGtmInstanceConfigAddressPoolWithOptions(request, runtime);
  }

  /**
   * Resume Public DNS Service
   * 
   * @param request - ResumePdnsServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResumePdnsServiceResponse
   */
  async resumePdnsServiceWithOptions(request: $_model.ResumePdnsServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResumePdnsServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.serviceType)) {
      query["ServiceType"] = request.serviceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResumePdnsService",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResumePdnsServiceResponse>(await this.callApi(params, req, runtime), new $_model.ResumePdnsServiceResponse({}));
  }

  /**
   * Resume Public DNS Service
   * 
   * @param request - ResumePdnsServiceRequest
   * @returns ResumePdnsServiceResponse
   */
  async resumePdnsService(request: $_model.ResumePdnsServiceRequest): Promise<$_model.ResumePdnsServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resumePdnsServiceWithOptions(request, runtime);
  }

  /**
   * Retrieves a domain name.
   * 
   * @remarks
   * Before you can retrieve a domain name, you must verify it using a TXT record. Use this operation in conjunction with the <props="china">[Generate a TXT record](https://help.aliyun.com/document_detail/145533.html) <props="intl">[Generate a TXT record](https://www.alibabacloud.com/help/zh/alibaba-cloud-dns/latest/generating-a-txt-record) operation.
   * 
   * @param request - RetrieveDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RetrieveDomainResponse
   */
  async retrieveDomainWithOptions(request: $_model.RetrieveDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RetrieveDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RetrieveDomain",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RetrieveDomainResponse>(await this.callApi(params, req, runtime), new $_model.RetrieveDomainResponse({}));
  }

  /**
   * Retrieves a domain name.
   * 
   * @remarks
   * Before you can retrieve a domain name, you must verify it using a TXT record. Use this operation in conjunction with the <props="china">[Generate a TXT record](https://help.aliyun.com/document_detail/145533.html) <props="intl">[Generate a TXT record](https://www.alibabacloud.com/help/zh/alibaba-cloud-dns/latest/generating-a-txt-record) operation.
   * 
   * @param request - RetrieveDomainRequest
   * @returns RetrieveDomainResponse
   */
  async retrieveDomain(request: $_model.RetrieveDomainRequest): Promise<$_model.RetrieveDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.retrieveDomainWithOptions(request, runtime);
  }

  /**
   * Revokes the registration information of an Agent.
   * 
   * @param request - RevokeAtiAgentRegisterInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeAtiAgentRegisterInfoResponse
   */
  async revokeAtiAgentRegisterInfoWithOptions(request: $_model.RevokeAtiAgentRegisterInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeAtiAgentRegisterInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentRegisterInfoId)) {
      query["AgentRegisterInfoId"] = request.agentRegisterInfoId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.reason)) {
      query["Reason"] = request.reason;
    }

    if (!$dara.isNull(request.reasonCode)) {
      query["ReasonCode"] = request.reasonCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokeAtiAgentRegisterInfo",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokeAtiAgentRegisterInfoResponse>(await this.callApi(params, req, runtime), new $_model.RevokeAtiAgentRegisterInfoResponse({}));
  }

  /**
   * Revokes the registration information of an Agent.
   * 
   * @param request - RevokeAtiAgentRegisterInfoRequest
   * @returns RevokeAtiAgentRegisterInfoResponse
   */
  async revokeAtiAgentRegisterInfo(request: $_model.RevokeAtiAgentRegisterInfoRequest): Promise<$_model.RevokeAtiAgentRegisterInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revokeAtiAgentRegisterInfoWithOptions(request, runtime);
  }

  /**
   * Revokes a real-name registrant.
   * 
   * @param request - RevokeAtiRegistrantRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeAtiRegistrantResponse
   */
  async revokeAtiRegistrantWithOptions(request: $_model.RevokeAtiRegistrantRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeAtiRegistrantResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.registrantId)) {
      query["RegistrantId"] = request.registrantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokeAtiRegistrant",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokeAtiRegistrantResponse>(await this.callApi(params, req, runtime), new $_model.RevokeAtiRegistrantResponse({}));
  }

  /**
   * Revokes a real-name registrant.
   * 
   * @param request - RevokeAtiRegistrantRequest
   * @returns RevokeAtiRegistrantResponse
   */
  async revokeAtiRegistrant(request: $_model.RevokeAtiRegistrantRequest): Promise<$_model.RevokeAtiRegistrantResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revokeAtiRegistrantWithOptions(request, runtime);
  }

  /**
   * Rolls back a disaster recovery plan.
   * 
   * @param request - RollbackGtmRecoveryPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RollbackGtmRecoveryPlanResponse
   */
  async rollbackGtmRecoveryPlanWithOptions(request: $_model.RollbackGtmRecoveryPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RollbackGtmRecoveryPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.recoveryPlanId)) {
      query["RecoveryPlanId"] = request.recoveryPlanId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RollbackGtmRecoveryPlan",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RollbackGtmRecoveryPlanResponse>(await this.callApi(params, req, runtime), new $_model.RollbackGtmRecoveryPlanResponse({}));
  }

  /**
   * Rolls back a disaster recovery plan.
   * 
   * @param request - RollbackGtmRecoveryPlanRequest
   * @returns RollbackGtmRecoveryPlanResponse
   */
  async rollbackGtmRecoveryPlan(request: $_model.RollbackGtmRecoveryPlanRequest): Promise<$_model.RollbackGtmRecoveryPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rollbackGtmRecoveryPlanWithOptions(request, runtime);
  }

  /**
   * Searches for agents in the Agent Marketplace.
   * 
   * @param request - SearchAtiAgentRegisterInfoMarketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchAtiAgentRegisterInfoMarketResponse
   */
  async searchAtiAgentRegisterInfoMarketWithOptions(request: $_model.SearchAtiAgentRegisterInfoMarketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchAtiAgentRegisterInfoMarketResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.protocol)) {
      query["Protocol"] = request.protocol;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.trustLevel)) {
      query["TrustLevel"] = request.trustLevel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchAtiAgentRegisterInfoMarket",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchAtiAgentRegisterInfoMarketResponse>(await this.callApi(params, req, runtime), new $_model.SearchAtiAgentRegisterInfoMarketResponse({}));
  }

  /**
   * Searches for agents in the Agent Marketplace.
   * 
   * @param request - SearchAtiAgentRegisterInfoMarketRequest
   * @returns SearchAtiAgentRegisterInfoMarketResponse
   */
  async searchAtiAgentRegisterInfoMarket(request: $_model.SearchAtiAgentRegisterInfoMarketRequest): Promise<$_model.SearchAtiAgentRegisterInfoMarketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchAtiAgentRegisterInfoMarketWithOptions(request, runtime);
  }

  /**
   * Searches for address pools by name, remarks, or other criteria.
   * 
   * @param request - SearchCloudGtmAddressPoolsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchCloudGtmAddressPoolsResponse
   */
  async searchCloudGtmAddressPoolsWithOptions(request: $_model.SearchCloudGtmAddressPoolsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchCloudGtmAddressPoolsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.addressPoolName)) {
      query["AddressPoolName"] = request.addressPoolName;
    }

    if (!$dara.isNull(request.addressPoolType)) {
      query["AddressPoolType"] = request.addressPoolType;
    }

    if (!$dara.isNull(request.availableStatus)) {
      query["AvailableStatus"] = request.availableStatus;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.enableStatus)) {
      query["EnableStatus"] = request.enableStatus;
    }

    if (!$dara.isNull(request.healthStatus)) {
      query["HealthStatus"] = request.healthStatus;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchCloudGtmAddressPools",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchCloudGtmAddressPoolsResponse>(await this.callApi(params, req, runtime), new $_model.SearchCloudGtmAddressPoolsResponse({}));
  }

  /**
   * Searches for address pools by name, remarks, or other criteria.
   * 
   * @param request - SearchCloudGtmAddressPoolsRequest
   * @returns SearchCloudGtmAddressPoolsResponse
   */
  async searchCloudGtmAddressPools(request: $_model.SearchCloudGtmAddressPoolsRequest): Promise<$_model.SearchCloudGtmAddressPoolsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchCloudGtmAddressPoolsWithOptions(request, runtime);
  }

  /**
   * Searches for addresses based on criteria such as address name, remarks, referenced health check template, or address ID.
   * 
   * @param request - SearchCloudGtmAddressesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchCloudGtmAddressesResponse
   */
  async searchCloudGtmAddressesWithOptions(request: $_model.SearchCloudGtmAddressesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchCloudGtmAddressesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.address)) {
      query["Address"] = request.address;
    }

    if (!$dara.isNull(request.addressId)) {
      query["AddressId"] = request.addressId;
    }

    if (!$dara.isNull(request.availableStatus)) {
      query["AvailableStatus"] = request.availableStatus;
    }

    if (!$dara.isNull(request.enableStatus)) {
      query["EnableStatus"] = request.enableStatus;
    }

    if (!$dara.isNull(request.healthStatus)) {
      query["HealthStatus"] = request.healthStatus;
    }

    if (!$dara.isNull(request.monitorTemplateName)) {
      query["MonitorTemplateName"] = request.monitorTemplateName;
    }

    if (!$dara.isNull(request.nameSearchCondition)) {
      query["NameSearchCondition"] = request.nameSearchCondition;
    }

    if (!$dara.isNull(request.names)) {
      query["Names"] = request.names;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.remarkSearchCondition)) {
      query["RemarkSearchCondition"] = request.remarkSearchCondition;
    }

    if (!$dara.isNull(request.remarks)) {
      query["Remarks"] = request.remarks;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchCloudGtmAddresses",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchCloudGtmAddressesResponse>(await this.callApi(params, req, runtime), new $_model.SearchCloudGtmAddressesResponse({}));
  }

  /**
   * Searches for addresses based on criteria such as address name, remarks, referenced health check template, or address ID.
   * 
   * @param request - SearchCloudGtmAddressesRequest
   * @returns SearchCloudGtmAddressesResponse
   */
  async searchCloudGtmAddresses(request: $_model.SearchCloudGtmAddressesRequest): Promise<$_model.SearchCloudGtmAddressesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchCloudGtmAddressesWithOptions(request, runtime);
  }

  /**
   * Retrieves instance configurations that match the specified parameters.
   * 
   * @param request - SearchCloudGtmInstanceConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchCloudGtmInstanceConfigsResponse
   */
  async searchCloudGtmInstanceConfigsWithOptions(request: $_model.SearchCloudGtmInstanceConfigsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchCloudGtmInstanceConfigsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.availableStatus)) {
      query["AvailableStatus"] = request.availableStatus;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.enableStatus)) {
      query["EnableStatus"] = request.enableStatus;
    }

    if (!$dara.isNull(request.healthStatus)) {
      query["HealthStatus"] = request.healthStatus;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.scheduleDomainName)) {
      query["ScheduleDomainName"] = request.scheduleDomainName;
    }

    if (!$dara.isNull(request.scheduleZoneName)) {
      query["ScheduleZoneName"] = request.scheduleZoneName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchCloudGtmInstanceConfigs",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchCloudGtmInstanceConfigsResponse>(await this.callApi(params, req, runtime), new $_model.SearchCloudGtmInstanceConfigsResponse({}));
  }

  /**
   * Retrieves instance configurations that match the specified parameters.
   * 
   * @param request - SearchCloudGtmInstanceConfigsRequest
   * @returns SearchCloudGtmInstanceConfigsResponse
   */
  async searchCloudGtmInstanceConfigs(request: $_model.SearchCloudGtmInstanceConfigsRequest): Promise<$_model.SearchCloudGtmInstanceConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchCloudGtmInstanceConfigsWithOptions(request, runtime);
  }

  /**
   * This operation searches for instances based on specified parameters.
   * 
   * @param request - SearchCloudGtmInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchCloudGtmInstancesResponse
   */
  async searchCloudGtmInstancesWithOptions(request: $_model.SearchCloudGtmInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchCloudGtmInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
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
      action: "SearchCloudGtmInstances",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchCloudGtmInstancesResponse>(await this.callApi(params, req, runtime), new $_model.SearchCloudGtmInstancesResponse({}));
  }

  /**
   * This operation searches for instances based on specified parameters.
   * 
   * @param request - SearchCloudGtmInstancesRequest
   * @returns SearchCloudGtmInstancesResponse
   */
  async searchCloudGtmInstances(request: $_model.SearchCloudGtmInstancesRequest): Promise<$_model.SearchCloudGtmInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchCloudGtmInstancesWithOptions(request, runtime);
  }

  /**
   * Searches for health check templates.
   * 
   * @param request - SearchCloudGtmMonitorTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchCloudGtmMonitorTemplatesResponse
   */
  async searchCloudGtmMonitorTemplatesWithOptions(request: $_model.SearchCloudGtmMonitorTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchCloudGtmMonitorTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.ipVersion)) {
      query["IpVersion"] = request.ipVersion;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.protocol)) {
      query["Protocol"] = request.protocol;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchCloudGtmMonitorTemplates",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchCloudGtmMonitorTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.SearchCloudGtmMonitorTemplatesResponse({}));
  }

  /**
   * Searches for health check templates.
   * 
   * @param request - SearchCloudGtmMonitorTemplatesRequest
   * @returns SearchCloudGtmMonitorTemplatesResponse
   */
  async searchCloudGtmMonitorTemplates(request: $_model.SearchCloudGtmMonitorTemplatesRequest): Promise<$_model.SearchCloudGtmMonitorTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchCloudGtmMonitorTemplatesWithOptions(request, runtime);
  }

  /**
   * Searches for built-in authoritative DNS records used for recursive resolution.
   * 
   * @param request - SearchRecursionRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchRecursionRecordsResponse
   */
  async searchRecursionRecordsWithOptions(request: $_model.SearchRecursionRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchRecursionRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.enableStatus)) {
      query["EnableStatus"] = request.enableStatus;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.requestSource)) {
      query["RequestSource"] = request.requestSource;
    }

    if (!$dara.isNull(request.rr)) {
      query["Rr"] = request.rr;
    }

    if (!$dara.isNull(request.ttl)) {
      query["Ttl"] = request.ttl;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.value)) {
      query["Value"] = request.value;
    }

    if (!$dara.isNull(request.weight)) {
      query["Weight"] = request.weight;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchRecursionRecords",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchRecursionRecordsResponse>(await this.callApi(params, req, runtime), new $_model.SearchRecursionRecordsResponse({}));
  }

  /**
   * Searches for built-in authoritative DNS records used for recursive resolution.
   * 
   * @param request - SearchRecursionRecordsRequest
   * @returns SearchRecursionRecordsResponse
   */
  async searchRecursionRecords(request: $_model.SearchRecursionRecordsRequest): Promise<$_model.SearchRecursionRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchRecursionRecordsWithOptions(request, runtime);
  }

  /**
   * Searches for zones of built-in authoritative domain names used for recursive resolution.
   * 
   * @remarks
   * - To retrieve resources, you must specify at least `ResourceId.N` or `Tag.N` (`Tag.N.Key` and `Tag.N.Value`) in the request.
   * - `Tag.N` is a resource tag that consists of a key-value pair. If you specify only `Tag.N.Key`, all tag values associated with that key are returned. If you specify only `Tag.N.Value`, an error is returned.
   * - If you specify both `Tag.N` and `ResourceId.N`, the operation returns only the resources that are identified by `ResourceId.N` and match all the specified tag key-value pairs.
   * - If you specify multiple tag key-value pairs, only resources that match all of them are returned.
   * 
   * @param tmpReq - SearchRecursionZonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchRecursionZonesResponse
   */
  async searchRecursionZonesWithOptions(tmpReq: $_model.SearchRecursionZonesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchRecursionZonesResponse> {
    tmpReq.validate();
    let request = new $_model.SearchRecursionZonesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.effectiveScopes)) {
      request.effectiveScopesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.effectiveScopes, "EffectiveScopes", "json");
    }

    let query = { };
    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.effectiveScopesShrink)) {
      query["EffectiveScopes"] = request.effectiveScopesShrink;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.zoneName)) {
      query["ZoneName"] = request.zoneName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchRecursionZones",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchRecursionZonesResponse>(await this.callApi(params, req, runtime), new $_model.SearchRecursionZonesResponse({}));
  }

  /**
   * Searches for zones of built-in authoritative domain names used for recursive resolution.
   * 
   * @remarks
   * - To retrieve resources, you must specify at least `ResourceId.N` or `Tag.N` (`Tag.N.Key` and `Tag.N.Value`) in the request.
   * - `Tag.N` is a resource tag that consists of a key-value pair. If you specify only `Tag.N.Key`, all tag values associated with that key are returned. If you specify only `Tag.N.Value`, an error is returned.
   * - If you specify both `Tag.N` and `ResourceId.N`, the operation returns only the resources that are identified by `ResourceId.N` and match all the specified tag key-value pairs.
   * - If you specify multiple tag key-value pairs, only resources that match all of them are returned.
   * 
   * @param request - SearchRecursionZonesRequest
   * @returns SearchRecursionZonesResponse
   */
  async searchRecursionZones(request: $_model.SearchRecursionZonesRequest): Promise<$_model.SearchRecursionZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchRecursionZonesWithOptions(request, runtime);
  }

  /**
   * Enables or disables the network traffic analysis feature for a Global Traffic Manager (GTM) instance. After this feature is enabled, you can view resolution logs and statistical reports for the domain name. You can also use the intelligent alerting feature based on abnormal metrics, such as resolution success rate and sudden changes in queries per second (QPS). This improves the observability and operations and maintenance (O&M) efficiency of the GTM instance.
   * 
   * @param request - SetCloudGtmInstanceConfigLogSwitchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetCloudGtmInstanceConfigLogSwitchResponse
   */
  async setCloudGtmInstanceConfigLogSwitchWithOptions(request: $_model.SetCloudGtmInstanceConfigLogSwitchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetCloudGtmInstanceConfigLogSwitchResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.configId)) {
      query["ConfigId"] = request.configId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetCloudGtmInstanceConfigLogSwitch",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetCloudGtmInstanceConfigLogSwitchResponse>(await this.callApi(params, req, runtime), new $_model.SetCloudGtmInstanceConfigLogSwitchResponse({}));
  }

  /**
   * Enables or disables the network traffic analysis feature for a Global Traffic Manager (GTM) instance. After this feature is enabled, you can view resolution logs and statistical reports for the domain name. You can also use the intelligent alerting feature based on abnormal metrics, such as resolution success rate and sudden changes in queries per second (QPS). This improves the observability and operations and maintenance (O&M) efficiency of the GTM instance.
   * 
   * @param request - SetCloudGtmInstanceConfigLogSwitchRequest
   * @returns SetCloudGtmInstanceConfigLogSwitchResponse
   */
  async setCloudGtmInstanceConfigLogSwitch(request: $_model.SetCloudGtmInstanceConfigLogSwitchRequest): Promise<$_model.SetCloudGtmInstanceConfigLogSwitchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setCloudGtmInstanceConfigLogSwitchWithOptions(request, runtime);
  }

  /**
   * Enables or disables the weight configuration.
   * 
   * @param request - SetDNSSLBStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDNSSLBStatusResponse
   */
  async setDNSSLBStatusWithOptions(request: $_model.SetDNSSLBStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetDNSSLBStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.line)) {
      query["Line"] = request.line;
    }

    if (!$dara.isNull(request.open)) {
      query["Open"] = request.open;
    }

    if (!$dara.isNull(request.subDomain)) {
      query["SubDomain"] = request.subDomain;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDNSSLBStatus",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetDNSSLBStatusResponse>(await this.callApi(params, req, runtime), new $_model.SetDNSSLBStatusResponse({}));
  }

  /**
   * Enables or disables the weight configuration.
   * 
   * @param request - SetDNSSLBStatusRequest
   * @returns SetDNSSLBStatusResponse
   */
  async setDNSSLBStatus(request: $_model.SetDNSSLBStatusRequest): Promise<$_model.SetDNSSLBStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDNSSLBStatusWithOptions(request, runtime);
  }

  /**
   * Sets the access mode for an access policy.
   * 
   * @remarks
   * **
   * 
   * @param request - SetDnsGtmAccessModeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDnsGtmAccessModeResponse
   */
  async setDnsGtmAccessModeWithOptions(request: $_model.SetDnsGtmAccessModeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetDnsGtmAccessModeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessMode)) {
      query["AccessMode"] = request.accessMode;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.strategyId)) {
      query["StrategyId"] = request.strategyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDnsGtmAccessMode",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetDnsGtmAccessModeResponse>(await this.callApi(params, req, runtime), new $_model.SetDnsGtmAccessModeResponse({}));
  }

  /**
   * Sets the access mode for an access policy.
   * 
   * @remarks
   * **
   * 
   * @param request - SetDnsGtmAccessModeRequest
   * @returns SetDnsGtmAccessModeResponse
   */
  async setDnsGtmAccessMode(request: $_model.SetDnsGtmAccessModeRequest): Promise<$_model.SetDnsGtmAccessModeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDnsGtmAccessModeWithOptions(request, runtime);
  }

  /**
   * Sets the health check status for an address pool.
   * 
   * @param request - SetDnsGtmMonitorStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDnsGtmMonitorStatusResponse
   */
  async setDnsGtmMonitorStatusWithOptions(request: $_model.SetDnsGtmMonitorStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetDnsGtmMonitorStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.monitorConfigId)) {
      query["MonitorConfigId"] = request.monitorConfigId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDnsGtmMonitorStatus",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetDnsGtmMonitorStatusResponse>(await this.callApi(params, req, runtime), new $_model.SetDnsGtmMonitorStatusResponse({}));
  }

  /**
   * Sets the health check status for an address pool.
   * 
   * @param request - SetDnsGtmMonitorStatusRequest
   * @returns SetDnsGtmMonitorStatusResponse
   */
  async setDnsGtmMonitorStatus(request: $_model.SetDnsGtmMonitorStatusRequest): Promise<$_model.SetDnsGtmMonitorStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDnsGtmMonitorStatusWithOptions(request, runtime);
  }

  /**
   * Enables or disables Domain Name System Security Extensions (DNSSEC) for a domain name. This feature is available only to users of paid Alibaba Cloud DNS.
   * 
   * @param request - SetDomainDnssecStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDomainDnssecStatusResponse
   */
  async setDomainDnssecStatusWithOptions(request: $_model.SetDomainDnssecStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetDomainDnssecStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDomainDnssecStatus",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetDomainDnssecStatusResponse>(await this.callApi(params, req, runtime), new $_model.SetDomainDnssecStatusResponse({}));
  }

  /**
   * Enables or disables Domain Name System Security Extensions (DNSSEC) for a domain name. This feature is available only to users of paid Alibaba Cloud DNS.
   * 
   * @param request - SetDomainDnssecStatusRequest
   * @returns SetDomainDnssecStatusResponse
   */
  async setDomainDnssecStatus(request: $_model.SetDomainDnssecStatusRequest): Promise<$_model.SetDomainDnssecStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDomainDnssecStatusWithOptions(request, runtime);
  }

  /**
   * Sets the status of a DNS record.
   * 
   * @param request - SetDomainRecordStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDomainRecordStatusResponse
   */
  async setDomainRecordStatusWithOptions(request: $_model.SetDomainRecordStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetDomainRecordStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDomainRecordStatus",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetDomainRecordStatusResponse>(await this.callApi(params, req, runtime), new $_model.SetDomainRecordStatusResponse({}));
  }

  /**
   * Sets the status of a DNS record.
   * 
   * @param request - SetDomainRecordStatusRequest
   * @returns SetDomainRecordStatusResponse
   */
  async setDomainRecordStatus(request: $_model.SetDomainRecordStatusRequest): Promise<$_model.SetDomainRecordStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDomainRecordStatusWithOptions(request, runtime);
  }

  /**
   * Modifies the address pool switchover policy based on the request parameters.
   * 
   * @param request - SetGtmAccessModeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetGtmAccessModeResponse
   */
  async setGtmAccessModeWithOptions(request: $_model.SetGtmAccessModeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetGtmAccessModeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessMode)) {
      query["AccessMode"] = request.accessMode;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.strategyId)) {
      query["StrategyId"] = request.strategyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetGtmAccessMode",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetGtmAccessModeResponse>(await this.callApi(params, req, runtime), new $_model.SetGtmAccessModeResponse({}));
  }

  /**
   * Modifies the address pool switchover policy based on the request parameters.
   * 
   * @param request - SetGtmAccessModeRequest
   * @returns SetGtmAccessModeResponse
   */
  async setGtmAccessMode(request: $_model.SetGtmAccessModeRequest): Promise<$_model.SetGtmAccessModeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setGtmAccessModeWithOptions(request, runtime);
  }

  /**
   * Sets the health check status of an address pool.
   * 
   * @param request - SetGtmMonitorStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetGtmMonitorStatusResponse
   */
  async setGtmMonitorStatusWithOptions(request: $_model.SetGtmMonitorStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetGtmMonitorStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.monitorConfigId)) {
      query["MonitorConfigId"] = request.monitorConfigId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetGtmMonitorStatus",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetGtmMonitorStatusResponse>(await this.callApi(params, req, runtime), new $_model.SetGtmMonitorStatusResponse({}));
  }

  /**
   * Sets the health check status of an address pool.
   * 
   * @param request - SetGtmMonitorStatusRequest
   * @returns SetGtmMonitorStatusResponse
   */
  async setGtmMonitorStatus(request: $_model.SetGtmMonitorStatusRequest): Promise<$_model.SetGtmMonitorStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setGtmMonitorStatusWithOptions(request, runtime);
  }

  /**
   * Submits Agent registration information.
   * 
   * @param request - SubmitAtiAgentRegisterInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitAtiAgentRegisterInfoResponse
   */
  async submitAtiAgentRegisterInfoWithOptions(request: $_model.SubmitAtiAgentRegisterInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitAtiAgentRegisterInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentRegisterInfoId)) {
      query["AgentRegisterInfoId"] = request.agentRegisterInfoId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.identityCsr)) {
      query["IdentityCsr"] = request.identityCsr;
    }

    if (!$dara.isNull(request.serverCertPem)) {
      query["ServerCertPem"] = request.serverCertPem;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitAtiAgentRegisterInfo",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitAtiAgentRegisterInfoResponse>(await this.callApi(params, req, runtime), new $_model.SubmitAtiAgentRegisterInfoResponse({}));
  }

  /**
   * Submits Agent registration information.
   * 
   * @param request - SubmitAtiAgentRegisterInfoRequest
   * @returns SubmitAtiAgentRegisterInfoResponse
   */
  async submitAtiAgentRegisterInfo(request: $_model.SubmitAtiAgentRegisterInfoRequest): Promise<$_model.SubmitAtiAgentRegisterInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitAtiAgentRegisterInfoWithOptions(request, runtime);
  }

  /**
   * Submits a cache refresh task.
   * 
   * @param request - SubmitIspFlushCacheTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitIspFlushCacheTaskResponse
   */
  async submitIspFlushCacheTaskWithOptions(request: $_model.SubmitIspFlushCacheTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitIspFlushCacheTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.isp)) {
      query["Isp"] = request.isp;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitIspFlushCacheTask",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitIspFlushCacheTaskResponse>(await this.callApi(params, req, runtime), new $_model.SubmitIspFlushCacheTaskResponse({}));
  }

  /**
   * Submits a cache refresh task.
   * 
   * @param request - SubmitIspFlushCacheTaskRequest
   * @returns SubmitIspFlushCacheTaskResponse
   */
  async submitIspFlushCacheTask(request: $_model.SubmitIspFlushCacheTaskRequest): Promise<$_model.SubmitIspFlushCacheTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitIspFlushCacheTaskWithOptions(request, runtime);
  }

  /**
   * Switches the access strategy mode of an instance.
   * 
   * @param request - SwitchDnsGtmInstanceStrategyModeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SwitchDnsGtmInstanceStrategyModeResponse
   */
  async switchDnsGtmInstanceStrategyModeWithOptions(request: $_model.SwitchDnsGtmInstanceStrategyModeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SwitchDnsGtmInstanceStrategyModeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.strategyMode)) {
      query["StrategyMode"] = request.strategyMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SwitchDnsGtmInstanceStrategyMode",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SwitchDnsGtmInstanceStrategyModeResponse>(await this.callApi(params, req, runtime), new $_model.SwitchDnsGtmInstanceStrategyModeResponse({}));
  }

  /**
   * Switches the access strategy mode of an instance.
   * 
   * @param request - SwitchDnsGtmInstanceStrategyModeRequest
   * @returns SwitchDnsGtmInstanceStrategyModeResponse
   */
  async switchDnsGtmInstanceStrategyMode(request: $_model.SwitchDnsGtmInstanceStrategyModeRequest): Promise<$_model.SwitchDnsGtmInstanceStrategyModeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.switchDnsGtmInstanceStrategyModeWithOptions(request, runtime);
  }

  /**
   * Adds or modifies tags for resources.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
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
      action: "TagResources",
      version: "2015-01-09",
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
   * Adds or modifies tags for resources.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Batch transfers DNS permissions for multiple domain names to a specified execution account.
   * 
   * @param request - TransferDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TransferDomainResponse
   */
  async transferDomainWithOptions(request: $_model.TransferDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TransferDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainNames)) {
      query["DomainNames"] = request.domainNames;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.targetUserId)) {
      query["TargetUserId"] = request.targetUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TransferDomain",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TransferDomainResponse>(await this.callApi(params, req, runtime), new $_model.TransferDomainResponse({}));
  }

  /**
   * Batch transfers DNS permissions for multiple domain names to a specified execution account.
   * 
   * @param request - TransferDomainRequest
   * @returns TransferDomainResponse
   */
  async transferDomain(request: $_model.TransferDomainRequest): Promise<$_model.TransferDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.transferDomainWithOptions(request, runtime);
  }

  /**
   * Detaches domain names from a paid Alibaba Cloud DNS instance.
   * 
   * @remarks
   * An instance with an ID that starts with \\`dns-\\` is a new version instance. New version instances support attaching multiple domain names. You can call an API operation to attach domain names directly to an instance. An error is returned if the number of domain names exceeds the instance limit.
   * An instance with an ID that does not start with \\`dns-\\` is a legacy instance. Legacy instances support only one domain name. Therefore, if you call this operation for an instance that already has a domain name attached, the domain name is replaced.
   * 
   * @param request - UnbindInstanceDomainsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindInstanceDomainsResponse
   */
  async unbindInstanceDomainsWithOptions(request: $_model.UnbindInstanceDomainsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnbindInstanceDomainsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainNames)) {
      query["DomainNames"] = request.domainNames;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnbindInstanceDomains",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnbindInstanceDomainsResponse>(await this.callApi(params, req, runtime), new $_model.UnbindInstanceDomainsResponse({}));
  }

  /**
   * Detaches domain names from a paid Alibaba Cloud DNS instance.
   * 
   * @remarks
   * An instance with an ID that starts with \\`dns-\\` is a new version instance. New version instances support attaching multiple domain names. You can call an API operation to attach domain names directly to an instance. An error is returned if the number of domain names exceeds the instance limit.
   * An instance with an ID that does not start with \\`dns-\\` is a legacy instance. Legacy instances support only one domain name. Therefore, if you call this operation for an instance that already has a domain name attached, the domain name is replaced.
   * 
   * @param request - UnbindInstanceDomainsRequest
   * @returns UnbindInstanceDomainsResponse
   */
  async unbindInstanceDomains(request: $_model.UnbindInstanceDomainsRequest): Promise<$_model.UnbindInstanceDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unbindInstanceDomainsWithOptions(request, runtime);
  }

  /**
   * Removes tags from resources.
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

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
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
      version: "2015-01-09",
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
   * Removes tags from resources.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Modify AppKey State
   * 
   * @param request - UpdateAppKeyStateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAppKeyStateResponse
   */
  async updateAppKeyStateWithOptions(request: $_model.UpdateAppKeyStateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAppKeyStateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKeyId)) {
      query["AppKeyId"] = request.appKeyId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAppKeyState",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAppKeyStateResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAppKeyStateResponse({}));
  }

  /**
   * Modify AppKey State
   * 
   * @param request - UpdateAppKeyStateRequest
   * @returns UpdateAppKeyStateResponse
   */
  async updateAppKeyState(request: $_model.UpdateAppKeyStateRequest): Promise<$_model.UpdateAppKeyStateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAppKeyStateWithOptions(request, runtime);
  }

  /**
   * Updates the registration information of an Agent.
   * 
   * @param tmpReq - UpdateAtiAgentRegisterInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAtiAgentRegisterInfoResponse
   */
  async updateAtiAgentRegisterInfoWithOptions(tmpReq: $_model.UpdateAtiAgentRegisterInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAtiAgentRegisterInfoResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateAtiAgentRegisterInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.endpoints)) {
      request.endpointsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.endpoints, "Endpoints", "json");
    }

    let query = { };
    if (!$dara.isNull(request.agentDescription)) {
      query["AgentDescription"] = request.agentDescription;
    }

    if (!$dara.isNull(request.agentDisplayName)) {
      query["AgentDisplayName"] = request.agentDisplayName;
    }

    if (!$dara.isNull(request.agentHost)) {
      query["AgentHost"] = request.agentHost;
    }

    if (!$dara.isNull(request.agentRegisterInfoId)) {
      query["AgentRegisterInfoId"] = request.agentRegisterInfoId;
    }

    if (!$dara.isNull(request.agentVersion)) {
      query["AgentVersion"] = request.agentVersion;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.endpointsShrink)) {
      query["Endpoints"] = request.endpointsShrink;
    }

    if (!$dara.isNull(request.registrantId)) {
      query["RegistrantId"] = request.registrantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAtiAgentRegisterInfo",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAtiAgentRegisterInfoResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAtiAgentRegisterInfoResponse({}));
  }

  /**
   * Updates the registration information of an Agent.
   * 
   * @param request - UpdateAtiAgentRegisterInfoRequest
   * @returns UpdateAtiAgentRegisterInfoResponse
   */
  async updateAtiAgentRegisterInfo(request: $_model.UpdateAtiAgentRegisterInfoRequest): Promise<$_model.UpdateAtiAgentRegisterInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAtiAgentRegisterInfoWithOptions(request, runtime);
  }

  /**
   * 更新告警设置
   * 
   * @param request - UpdateAtiAlertSettingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAtiAlertSettingsResponse
   */
  async updateAtiAlertSettingsWithOptions(request: $_model.UpdateAtiAlertSettingsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAtiAlertSettingsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alertConfig)) {
      query["AlertConfig"] = request.alertConfig;
    }

    if (!$dara.isNull(request.alertGroup)) {
      query["AlertGroup"] = request.alertGroup;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAtiAlertSettings",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAtiAlertSettingsResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAtiAlertSettingsResponse({}));
  }

  /**
   * 更新告警设置
   * 
   * @param request - UpdateAtiAlertSettingsRequest
   * @returns UpdateAtiAlertSettingsResponse
   */
  async updateAtiAlertSettings(request: $_model.UpdateAtiAlertSettingsRequest): Promise<$_model.UpdateAtiAlertSettingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAtiAlertSettingsWithOptions(request, runtime);
  }

  /**
   * Modifies a registrant profile.
   * 
   * @param request - UpdateAtiRegistrantRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAtiRegistrantResponse
   */
  async updateAtiRegistrantWithOptions(request: $_model.UpdateAtiRegistrantRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAtiRegistrantResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cc)) {
      query["Cc"] = request.cc;
    }

    if (!$dara.isNull(request.city)) {
      query["City"] = request.city;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.documentCode)) {
      query["DocumentCode"] = request.documentCode;
    }

    if (!$dara.isNull(request.documentImage)) {
      query["DocumentImage"] = request.documentImage;
    }

    if (!$dara.isNull(request.documentType)) {
      query["DocumentType"] = request.documentType;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.phone)) {
      query["Phone"] = request.phone;
    }

    if (!$dara.isNull(request.registrantId)) {
      query["RegistrantId"] = request.registrantId;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    if (!$dara.isNull(request.street)) {
      query["Street"] = request.street;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAtiRegistrant",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAtiRegistrantResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAtiRegistrantResponse({}));
  }

  /**
   * Modifies a registrant profile.
   * 
   * @param request - UpdateAtiRegistrantRequest
   * @returns UpdateAtiRegistrantResponse
   */
  async updateAtiRegistrant(request: $_model.UpdateAtiRegistrantRequest): Promise<$_model.UpdateAtiRegistrantResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAtiRegistrantWithOptions(request, runtime);
  }

  /**
   * Modifies the basic configuration of a specified address, such as the address name, type, and value.
   * 
   * @param tmpReq - UpdateCloudGtmAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCloudGtmAddressResponse
   */
  async updateCloudGtmAddressWithOptions(tmpReq: $_model.UpdateCloudGtmAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCloudGtmAddressResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateCloudGtmAddressShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.healthTasks)) {
      request.healthTasksShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.healthTasks, "HealthTasks", "json");
    }

    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.address)) {
      query["Address"] = request.address;
    }

    if (!$dara.isNull(request.addressId)) {
      query["AddressId"] = request.addressId;
    }

    if (!$dara.isNull(request.attributeInfo)) {
      query["AttributeInfo"] = request.attributeInfo;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.healthJudgement)) {
      query["HealthJudgement"] = request.healthJudgement;
    }

    if (!$dara.isNull(request.healthTasksShrink)) {
      query["HealthTasks"] = request.healthTasksShrink;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCloudGtmAddress",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCloudGtmAddressResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCloudGtmAddressResponse({}));
  }

  /**
   * Modifies the basic configuration of a specified address, such as the address name, type, and value.
   * 
   * @param request - UpdateCloudGtmAddressRequest
   * @returns UpdateCloudGtmAddressResponse
   */
  async updateCloudGtmAddress(request: $_model.UpdateCloudGtmAddressRequest): Promise<$_model.UpdateCloudGtmAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCloudGtmAddressWithOptions(request, runtime);
  }

  /**
   * Updates the enabled status of an address.
   * 
   * @remarks
   * - The service status of an address is **active** if the address is **enabled** and its health check status is **Normal**.
   * - The service status of an address is **unavailable** if the address is **disabled** or its health check status is **abnormal**.
   * 
   * @param request - UpdateCloudGtmAddressEnableStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCloudGtmAddressEnableStatusResponse
   */
  async updateCloudGtmAddressEnableStatusWithOptions(request: $_model.UpdateCloudGtmAddressEnableStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCloudGtmAddressEnableStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.addressId)) {
      query["AddressId"] = request.addressId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.enableStatus)) {
      query["EnableStatus"] = request.enableStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCloudGtmAddressEnableStatus",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCloudGtmAddressEnableStatusResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCloudGtmAddressEnableStatusResponse({}));
  }

  /**
   * Updates the enabled status of an address.
   * 
   * @remarks
   * - The service status of an address is **active** if the address is **enabled** and its health check status is **Normal**.
   * - The service status of an address is **unavailable** if the address is **disabled** or its health check status is **abnormal**.
   * 
   * @param request - UpdateCloudGtmAddressEnableStatusRequest
   * @returns UpdateCloudGtmAddressEnableStatusResponse
   */
  async updateCloudGtmAddressEnableStatus(request: $_model.UpdateCloudGtmAddressEnableStatusRequest): Promise<$_model.UpdateCloudGtmAddressEnableStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCloudGtmAddressEnableStatusWithOptions(request, runtime);
  }

  /**
   * Updates the failover method for an address based on the specified parameters.
   * 
   * @param request - UpdateCloudGtmAddressManualAvailableStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCloudGtmAddressManualAvailableStatusResponse
   */
  async updateCloudGtmAddressManualAvailableStatusWithOptions(request: $_model.UpdateCloudGtmAddressManualAvailableStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCloudGtmAddressManualAvailableStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.addressId)) {
      query["AddressId"] = request.addressId;
    }

    if (!$dara.isNull(request.availableMode)) {
      query["AvailableMode"] = request.availableMode;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.manualAvailableStatus)) {
      query["ManualAvailableStatus"] = request.manualAvailableStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCloudGtmAddressManualAvailableStatus",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCloudGtmAddressManualAvailableStatusResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCloudGtmAddressManualAvailableStatusResponse({}));
  }

  /**
   * Updates the failover method for an address based on the specified parameters.
   * 
   * @param request - UpdateCloudGtmAddressManualAvailableStatusRequest
   * @returns UpdateCloudGtmAddressManualAvailableStatusResponse
   */
  async updateCloudGtmAddressManualAvailableStatus(request: $_model.UpdateCloudGtmAddressManualAvailableStatusRequest): Promise<$_model.UpdateCloudGtmAddressManualAvailableStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCloudGtmAddressManualAvailableStatusWithOptions(request, runtime);
  }

  /**
   * Modifies the basic configuration of an address pool.
   * 
   * @param request - UpdateCloudGtmAddressPoolBasicConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCloudGtmAddressPoolBasicConfigResponse
   */
  async updateCloudGtmAddressPoolBasicConfigWithOptions(request: $_model.UpdateCloudGtmAddressPoolBasicConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCloudGtmAddressPoolBasicConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.addressPoolId)) {
      query["AddressPoolId"] = request.addressPoolId;
    }

    if (!$dara.isNull(request.addressPoolName)) {
      query["AddressPoolName"] = request.addressPoolName;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.healthJudgement)) {
      query["HealthJudgement"] = request.healthJudgement;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCloudGtmAddressPoolBasicConfig",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCloudGtmAddressPoolBasicConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCloudGtmAddressPoolBasicConfigResponse({}));
  }

  /**
   * Modifies the basic configuration of an address pool.
   * 
   * @param request - UpdateCloudGtmAddressPoolBasicConfigRequest
   * @returns UpdateCloudGtmAddressPoolBasicConfigResponse
   */
  async updateCloudGtmAddressPoolBasicConfig(request: $_model.UpdateCloudGtmAddressPoolBasicConfigRequest): Promise<$_model.UpdateCloudGtmAddressPoolBasicConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCloudGtmAddressPoolBasicConfigWithOptions(request, runtime);
  }

  /**
   * Updates the enabled status of an address pool.
   * 
   * @remarks
   * - An address pool is considered **active** if it is **enabled** and its health check status is **Normal**.
   * - An address pool is considered **unavailable** if it is **disabled** or its health check status is **abnormal**.
   * 
   * @param request - UpdateCloudGtmAddressPoolEnableStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCloudGtmAddressPoolEnableStatusResponse
   */
  async updateCloudGtmAddressPoolEnableStatusWithOptions(request: $_model.UpdateCloudGtmAddressPoolEnableStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCloudGtmAddressPoolEnableStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.addressPoolId)) {
      query["AddressPoolId"] = request.addressPoolId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.enableStatus)) {
      query["EnableStatus"] = request.enableStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCloudGtmAddressPoolEnableStatus",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCloudGtmAddressPoolEnableStatusResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCloudGtmAddressPoolEnableStatusResponse({}));
  }

  /**
   * Updates the enabled status of an address pool.
   * 
   * @remarks
   * - An address pool is considered **active** if it is **enabled** and its health check status is **Normal**.
   * - An address pool is considered **unavailable** if it is **disabled** or its health check status is **abnormal**.
   * 
   * @param request - UpdateCloudGtmAddressPoolEnableStatusRequest
   * @returns UpdateCloudGtmAddressPoolEnableStatusResponse
   */
  async updateCloudGtmAddressPoolEnableStatus(request: $_model.UpdateCloudGtmAddressPoolEnableStatusRequest): Promise<$_model.UpdateCloudGtmAddressPoolEnableStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCloudGtmAddressPoolEnableStatusWithOptions(request, runtime);
  }

  /**
   * Updates the load balancing policy of an address pool.
   * 
   * @param request - UpdateCloudGtmAddressPoolLbStrategyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCloudGtmAddressPoolLbStrategyResponse
   */
  async updateCloudGtmAddressPoolLbStrategyWithOptions(request: $_model.UpdateCloudGtmAddressPoolLbStrategyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCloudGtmAddressPoolLbStrategyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.addressLbStrategy)) {
      query["AddressLbStrategy"] = request.addressLbStrategy;
    }

    if (!$dara.isNull(request.addressPoolId)) {
      query["AddressPoolId"] = request.addressPoolId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.sequenceLbStrategyMode)) {
      query["SequenceLbStrategyMode"] = request.sequenceLbStrategyMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCloudGtmAddressPoolLbStrategy",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCloudGtmAddressPoolLbStrategyResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCloudGtmAddressPoolLbStrategyResponse({}));
  }

  /**
   * Updates the load balancing policy of an address pool.
   * 
   * @param request - UpdateCloudGtmAddressPoolLbStrategyRequest
   * @returns UpdateCloudGtmAddressPoolLbStrategyResponse
   */
  async updateCloudGtmAddressPoolLbStrategy(request: $_model.UpdateCloudGtmAddressPoolLbStrategyRequest): Promise<$_model.UpdateCloudGtmAddressPoolLbStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCloudGtmAddressPoolLbStrategyWithOptions(request, runtime);
  }

  /**
   * Updates the remarks of an address pool.
   * 
   * @param request - UpdateCloudGtmAddressPoolRemarkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCloudGtmAddressPoolRemarkResponse
   */
  async updateCloudGtmAddressPoolRemarkWithOptions(request: $_model.UpdateCloudGtmAddressPoolRemarkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCloudGtmAddressPoolRemarkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.addressPoolId)) {
      query["AddressPoolId"] = request.addressPoolId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCloudGtmAddressPoolRemark",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCloudGtmAddressPoolRemarkResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCloudGtmAddressPoolRemarkResponse({}));
  }

  /**
   * Updates the remarks of an address pool.
   * 
   * @param request - UpdateCloudGtmAddressPoolRemarkRequest
   * @returns UpdateCloudGtmAddressPoolRemarkResponse
   */
  async updateCloudGtmAddressPoolRemark(request: $_model.UpdateCloudGtmAddressPoolRemarkRequest): Promise<$_model.UpdateCloudGtmAddressPoolRemarkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCloudGtmAddressPoolRemarkWithOptions(request, runtime);
  }

  /**
   * Updates the remarks for an address in Global Traffic Manager (GTM) 3.0.
   * 
   * @param request - UpdateCloudGtmAddressRemarkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCloudGtmAddressRemarkResponse
   */
  async updateCloudGtmAddressRemarkWithOptions(request: $_model.UpdateCloudGtmAddressRemarkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCloudGtmAddressRemarkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.addressId)) {
      query["AddressId"] = request.addressId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCloudGtmAddressRemark",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCloudGtmAddressRemarkResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCloudGtmAddressRemarkResponse({}));
  }

  /**
   * Updates the remarks for an address in Global Traffic Manager (GTM) 3.0.
   * 
   * @param request - UpdateCloudGtmAddressRemarkRequest
   * @returns UpdateCloudGtmAddressRemarkResponse
   */
  async updateCloudGtmAddressRemark(request: $_model.UpdateCloudGtmAddressRemarkRequest): Promise<$_model.UpdateCloudGtmAddressRemarkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCloudGtmAddressRemarkWithOptions(request, runtime);
  }

  /**
   * 更新全局流量管理告警设置
   * 
   * @param tmpReq - UpdateCloudGtmGlobalAlertRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCloudGtmGlobalAlertResponse
   */
  async updateCloudGtmGlobalAlertWithOptions(tmpReq: $_model.UpdateCloudGtmGlobalAlertRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCloudGtmGlobalAlertResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateCloudGtmGlobalAlertShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.alertConfig)) {
      request.alertConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.alertConfig, "AlertConfig", "json");
    }

    if (!$dara.isNull(tmpReq.alertGroup)) {
      request.alertGroupShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.alertGroup, "AlertGroup", "json");
    }

    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.alertConfigShrink)) {
      query["AlertConfig"] = request.alertConfigShrink;
    }

    if (!$dara.isNull(request.alertGroupShrink)) {
      query["AlertGroup"] = request.alertGroupShrink;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCloudGtmGlobalAlert",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCloudGtmGlobalAlertResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCloudGtmGlobalAlertResponse({}));
  }

  /**
   * 更新全局流量管理告警设置
   * 
   * @param request - UpdateCloudGtmGlobalAlertRequest
   * @returns UpdateCloudGtmGlobalAlertResponse
   */
  async updateCloudGtmGlobalAlert(request: $_model.UpdateCloudGtmGlobalAlertRequest): Promise<$_model.UpdateCloudGtmGlobalAlertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCloudGtmGlobalAlertWithOptions(request, runtime);
  }

  /**
   * @param tmpReq - UpdateCloudGtmInstanceConfigAlertRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCloudGtmInstanceConfigAlertResponse
   */
  async updateCloudGtmInstanceConfigAlertWithOptions(tmpReq: $_model.UpdateCloudGtmInstanceConfigAlertRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCloudGtmInstanceConfigAlertResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateCloudGtmInstanceConfigAlertShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.alertConfig)) {
      request.alertConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.alertConfig, "AlertConfig", "json");
    }

    if (!$dara.isNull(tmpReq.alertGroup)) {
      request.alertGroupShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.alertGroup, "AlertGroup", "json");
    }

    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.alertConfigShrink)) {
      query["AlertConfig"] = request.alertConfigShrink;
    }

    if (!$dara.isNull(request.alertGroupShrink)) {
      query["AlertGroup"] = request.alertGroupShrink;
    }

    if (!$dara.isNull(request.alertMode)) {
      query["AlertMode"] = request.alertMode;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.configId)) {
      query["ConfigId"] = request.configId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCloudGtmInstanceConfigAlert",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCloudGtmInstanceConfigAlertResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCloudGtmInstanceConfigAlertResponse({}));
  }

  /**
   * @param request - UpdateCloudGtmInstanceConfigAlertRequest
   * @returns UpdateCloudGtmInstanceConfigAlertResponse
   */
  async updateCloudGtmInstanceConfigAlert(request: $_model.UpdateCloudGtmInstanceConfigAlertRequest): Promise<$_model.UpdateCloudGtmInstanceConfigAlertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCloudGtmInstanceConfigAlertWithOptions(request, runtime);
  }

  /**
   * Updates the global TTL configuration of a Global Traffic Manager (GTM) 3.0 instance based on the specified parameters.
   * 
   * @param request - UpdateCloudGtmInstanceConfigBasicRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCloudGtmInstanceConfigBasicResponse
   */
  async updateCloudGtmInstanceConfigBasicWithOptions(request: $_model.UpdateCloudGtmInstanceConfigBasicRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCloudGtmInstanceConfigBasicResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.configId)) {
      query["ConfigId"] = request.configId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.scheduleHostname)) {
      query["ScheduleHostname"] = request.scheduleHostname;
    }

    if (!$dara.isNull(request.scheduleZoneName)) {
      query["ScheduleZoneName"] = request.scheduleZoneName;
    }

    if (!$dara.isNull(request.ttl)) {
      query["Ttl"] = request.ttl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCloudGtmInstanceConfigBasic",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCloudGtmInstanceConfigBasicResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCloudGtmInstanceConfigBasicResponse({}));
  }

  /**
   * Updates the global TTL configuration of a Global Traffic Manager (GTM) 3.0 instance based on the specified parameters.
   * 
   * @param request - UpdateCloudGtmInstanceConfigBasicRequest
   * @returns UpdateCloudGtmInstanceConfigBasicResponse
   */
  async updateCloudGtmInstanceConfigBasic(request: $_model.UpdateCloudGtmInstanceConfigBasicRequest): Promise<$_model.UpdateCloudGtmInstanceConfigBasicResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCloudGtmInstanceConfigBasicWithOptions(request, runtime);
  }

  /**
   * Updates the enablement status of an instance configuration based on the input parameters.
   * 
   * @remarks
   * - If a domain name is **enabled** and its health status is **Normal**, the service associated with the access domain name is **active**.
   * - If a domain name is **disabled** or its health status is **abnormal**, the service associated with the access domain name is **unavailable**.
   * 
   * @param request - UpdateCloudGtmInstanceConfigEnableStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCloudGtmInstanceConfigEnableStatusResponse
   */
  async updateCloudGtmInstanceConfigEnableStatusWithOptions(request: $_model.UpdateCloudGtmInstanceConfigEnableStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCloudGtmInstanceConfigEnableStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.configId)) {
      query["ConfigId"] = request.configId;
    }

    if (!$dara.isNull(request.enableStatus)) {
      query["EnableStatus"] = request.enableStatus;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCloudGtmInstanceConfigEnableStatus",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCloudGtmInstanceConfigEnableStatusResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCloudGtmInstanceConfigEnableStatusResponse({}));
  }

  /**
   * Updates the enablement status of an instance configuration based on the input parameters.
   * 
   * @remarks
   * - If a domain name is **enabled** and its health status is **Normal**, the service associated with the access domain name is **active**.
   * - If a domain name is **disabled** or its health status is **abnormal**, the service associated with the access domain name is **unavailable**.
   * 
   * @param request - UpdateCloudGtmInstanceConfigEnableStatusRequest
   * @returns UpdateCloudGtmInstanceConfigEnableStatusResponse
   */
  async updateCloudGtmInstanceConfigEnableStatus(request: $_model.UpdateCloudGtmInstanceConfigEnableStatusRequest): Promise<$_model.UpdateCloudGtmInstanceConfigEnableStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCloudGtmInstanceConfigEnableStatusWithOptions(request, runtime);
  }

  /**
   * Updates the load balancing policy for an instance configuration.
   * 
   * @param request - UpdateCloudGtmInstanceConfigLbStrategyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCloudGtmInstanceConfigLbStrategyResponse
   */
  async updateCloudGtmInstanceConfigLbStrategyWithOptions(request: $_model.UpdateCloudGtmInstanceConfigLbStrategyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCloudGtmInstanceConfigLbStrategyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.addressPoolLbStrategy)) {
      query["AddressPoolLbStrategy"] = request.addressPoolLbStrategy;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.configId)) {
      query["ConfigId"] = request.configId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.sequenceLbStrategyMode)) {
      query["SequenceLbStrategyMode"] = request.sequenceLbStrategyMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCloudGtmInstanceConfigLbStrategy",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCloudGtmInstanceConfigLbStrategyResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCloudGtmInstanceConfigLbStrategyResponse({}));
  }

  /**
   * Updates the load balancing policy for an instance configuration.
   * 
   * @param request - UpdateCloudGtmInstanceConfigLbStrategyRequest
   * @returns UpdateCloudGtmInstanceConfigLbStrategyResponse
   */
  async updateCloudGtmInstanceConfigLbStrategy(request: $_model.UpdateCloudGtmInstanceConfigLbStrategyRequest): Promise<$_model.UpdateCloudGtmInstanceConfigLbStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCloudGtmInstanceConfigLbStrategyWithOptions(request, runtime);
  }

  /**
   * Updates the remarks for an instance configuration.
   * 
   * @param request - UpdateCloudGtmInstanceConfigRemarkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCloudGtmInstanceConfigRemarkResponse
   */
  async updateCloudGtmInstanceConfigRemarkWithOptions(request: $_model.UpdateCloudGtmInstanceConfigRemarkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCloudGtmInstanceConfigRemarkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.configId)) {
      query["ConfigId"] = request.configId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCloudGtmInstanceConfigRemark",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCloudGtmInstanceConfigRemarkResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCloudGtmInstanceConfigRemarkResponse({}));
  }

  /**
   * Updates the remarks for an instance configuration.
   * 
   * @param request - UpdateCloudGtmInstanceConfigRemarkRequest
   * @returns UpdateCloudGtmInstanceConfigRemarkResponse
   */
  async updateCloudGtmInstanceConfigRemark(request: $_model.UpdateCloudGtmInstanceConfigRemarkRequest): Promise<$_model.UpdateCloudGtmInstanceConfigRemarkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCloudGtmInstanceConfigRemarkWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateCloudGtmInstanceNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCloudGtmInstanceNameResponse
   */
  async updateCloudGtmInstanceNameWithOptions(request: $_model.UpdateCloudGtmInstanceNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCloudGtmInstanceNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCloudGtmInstanceName",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCloudGtmInstanceNameResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCloudGtmInstanceNameResponse({}));
  }

  /**
   * @param request - UpdateCloudGtmInstanceNameRequest
   * @returns UpdateCloudGtmInstanceNameResponse
   */
  async updateCloudGtmInstanceName(request: $_model.UpdateCloudGtmInstanceNameRequest): Promise<$_model.UpdateCloudGtmInstanceNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCloudGtmInstanceNameWithOptions(request, runtime);
  }

  /**
   * Updates the configuration of a health check template.
   * 
   * @param tmpReq - UpdateCloudGtmMonitorTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCloudGtmMonitorTemplateResponse
   */
  async updateCloudGtmMonitorTemplateWithOptions(tmpReq: $_model.UpdateCloudGtmMonitorTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCloudGtmMonitorTemplateResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateCloudGtmMonitorTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ispCityNodes)) {
      request.ispCityNodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ispCityNodes, "IspCityNodes", "json");
    }

    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.evaluationCount)) {
      query["EvaluationCount"] = request.evaluationCount;
    }

    if (!$dara.isNull(request.extendInfo)) {
      query["ExtendInfo"] = request.extendInfo;
    }

    if (!$dara.isNull(request.failureRate)) {
      query["FailureRate"] = request.failureRate;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.ispCityNodesShrink)) {
      query["IspCityNodes"] = request.ispCityNodesShrink;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCloudGtmMonitorTemplate",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCloudGtmMonitorTemplateResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCloudGtmMonitorTemplateResponse({}));
  }

  /**
   * Updates the configuration of a health check template.
   * 
   * @param request - UpdateCloudGtmMonitorTemplateRequest
   * @returns UpdateCloudGtmMonitorTemplateResponse
   */
  async updateCloudGtmMonitorTemplate(request: $_model.UpdateCloudGtmMonitorTemplateRequest): Promise<$_model.UpdateCloudGtmMonitorTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCloudGtmMonitorTemplateWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateCloudGtmMonitorTemplateRemarkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCloudGtmMonitorTemplateRemarkResponse
   */
  async updateCloudGtmMonitorTemplateRemarkWithOptions(request: $_model.UpdateCloudGtmMonitorTemplateRemarkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCloudGtmMonitorTemplateRemarkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCloudGtmMonitorTemplateRemark",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCloudGtmMonitorTemplateRemarkResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCloudGtmMonitorTemplateRemarkResponse({}));
  }

  /**
   * @param request - UpdateCloudGtmMonitorTemplateRemarkRequest
   * @returns UpdateCloudGtmMonitorTemplateRemarkResponse
   */
  async updateCloudGtmMonitorTemplateRemark(request: $_model.UpdateCloudGtmMonitorTemplateRemarkRequest): Promise<$_model.UpdateCloudGtmMonitorTemplateRemarkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCloudGtmMonitorTemplateRemarkWithOptions(request, runtime);
  }

  /**
   * Updates a custom line specified by its unique ID.
   * 
   * @remarks
   * For each IP range, the value of EndIp must be greater than or equal to the value of StartIp.
   * The IP ranges of IP ranges cannot overlap across all custom lines for a domain name.
   * 
   * @param request - UpdateCustomLineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCustomLineResponse
   */
  async updateCustomLineWithOptions(request: $_model.UpdateCustomLineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCustomLineResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ipSegment)) {
      query["IpSegment"] = request.ipSegment;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.lineId)) {
      query["LineId"] = request.lineId;
    }

    if (!$dara.isNull(request.lineName)) {
      query["LineName"] = request.lineName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCustomLine",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCustomLineResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCustomLineResponse({}));
  }

  /**
   * Updates a custom line specified by its unique ID.
   * 
   * @remarks
   * For each IP range, the value of EndIp must be greater than or equal to the value of StartIp.
   * The IP ranges of IP ranges cannot overlap across all custom lines for a domain name.
   * 
   * @param request - UpdateCustomLineRequest
   * @returns UpdateCustomLineResponse
   */
  async updateCustomLine(request: $_model.UpdateCustomLineRequest): Promise<$_model.UpdateCustomLineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCustomLineWithOptions(request, runtime);
  }

  /**
   * Modifies the weight of a DNS record based on the specified parameters.
   * 
   * @param request - UpdateDNSSLBWeightRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDNSSLBWeightResponse
   */
  async updateDNSSLBWeightWithOptions(request: $_model.UpdateDNSSLBWeightRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDNSSLBWeightResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!$dara.isNull(request.weight)) {
      query["Weight"] = request.weight;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDNSSLBWeight",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDNSSLBWeightResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDNSSLBWeightResponse({}));
  }

  /**
   * Modifies the weight of a DNS record based on the specified parameters.
   * 
   * @param request - UpdateDNSSLBWeightRequest
   * @returns UpdateDNSSLBWeightResponse
   */
  async updateDNSSLBWeight(request: $_model.UpdateDNSSLBWeightRequest): Promise<$_model.UpdateDNSSLBWeightResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDNSSLBWeightWithOptions(request, runtime);
  }

  /**
   * Updates a DNS authoritative proxy domain.
   * 
   * @param request - UpdateDnsCacheDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDnsCacheDomainResponse
   */
  async updateDnsCacheDomainWithOptions(request: $_model.UpdateDnsCacheDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDnsCacheDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cacheTtlMax)) {
      query["CacheTtlMax"] = request.cacheTtlMax;
    }

    if (!$dara.isNull(request.cacheTtlMin)) {
      query["CacheTtlMin"] = request.cacheTtlMin;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.sourceDnsServer)) {
      query["SourceDnsServer"] = request.sourceDnsServer;
    }

    if (!$dara.isNull(request.sourceEdns)) {
      query["SourceEdns"] = request.sourceEdns;
    }

    if (!$dara.isNull(request.sourceProtocol)) {
      query["SourceProtocol"] = request.sourceProtocol;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDnsCacheDomain",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDnsCacheDomainResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDnsCacheDomainResponse({}));
  }

  /**
   * Updates a DNS authoritative proxy domain.
   * 
   * @param request - UpdateDnsCacheDomainRequest
   * @returns UpdateDnsCacheDomainResponse
   */
  async updateDnsCacheDomain(request: $_model.UpdateDnsCacheDomainRequest): Promise<$_model.UpdateDnsCacheDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDnsCacheDomainWithOptions(request, runtime);
  }

  /**
   * Updates the remark for a domain name in the DNS cache.
   * 
   * @param request - UpdateDnsCacheDomainRemarkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDnsCacheDomainRemarkResponse
   */
  async updateDnsCacheDomainRemarkWithOptions(request: $_model.UpdateDnsCacheDomainRemarkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDnsCacheDomainRemarkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDnsCacheDomainRemark",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDnsCacheDomainRemarkResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDnsCacheDomainRemarkResponse({}));
  }

  /**
   * Updates the remark for a domain name in the DNS cache.
   * 
   * @param request - UpdateDnsCacheDomainRemarkRequest
   * @returns UpdateDnsCacheDomainRemarkResponse
   */
  async updateDnsCacheDomainRemark(request: $_model.UpdateDnsCacheDomainRemarkRequest): Promise<$_model.UpdateDnsCacheDomainRemarkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDnsCacheDomainRemarkWithOptions(request, runtime);
  }

  /**
   * Updates an existing access policy.
   * 
   * @param request - UpdateDnsGtmAccessStrategyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDnsGtmAccessStrategyResponse
   */
  async updateDnsGtmAccessStrategyWithOptions(request: $_model.UpdateDnsGtmAccessStrategyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDnsGtmAccessStrategyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessMode)) {
      query["AccessMode"] = request.accessMode;
    }

    if (!$dara.isNull(request.defaultAddrPool)) {
      query["DefaultAddrPool"] = request.defaultAddrPool;
    }

    if (!$dara.isNull(request.defaultAddrPoolType)) {
      query["DefaultAddrPoolType"] = request.defaultAddrPoolType;
    }

    if (!$dara.isNull(request.defaultLatencyOptimization)) {
      query["DefaultLatencyOptimization"] = request.defaultLatencyOptimization;
    }

    if (!$dara.isNull(request.defaultLbaStrategy)) {
      query["DefaultLbaStrategy"] = request.defaultLbaStrategy;
    }

    if (!$dara.isNull(request.defaultMaxReturnAddrNum)) {
      query["DefaultMaxReturnAddrNum"] = request.defaultMaxReturnAddrNum;
    }

    if (!$dara.isNull(request.defaultMinAvailableAddrNum)) {
      query["DefaultMinAvailableAddrNum"] = request.defaultMinAvailableAddrNum;
    }

    if (!$dara.isNull(request.failoverAddrPool)) {
      query["FailoverAddrPool"] = request.failoverAddrPool;
    }

    if (!$dara.isNull(request.failoverAddrPoolType)) {
      query["FailoverAddrPoolType"] = request.failoverAddrPoolType;
    }

    if (!$dara.isNull(request.failoverLatencyOptimization)) {
      query["FailoverLatencyOptimization"] = request.failoverLatencyOptimization;
    }

    if (!$dara.isNull(request.failoverLbaStrategy)) {
      query["FailoverLbaStrategy"] = request.failoverLbaStrategy;
    }

    if (!$dara.isNull(request.failoverMaxReturnAddrNum)) {
      query["FailoverMaxReturnAddrNum"] = request.failoverMaxReturnAddrNum;
    }

    if (!$dara.isNull(request.failoverMinAvailableAddrNum)) {
      query["FailoverMinAvailableAddrNum"] = request.failoverMinAvailableAddrNum;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.lines)) {
      query["Lines"] = request.lines;
    }

    if (!$dara.isNull(request.strategyId)) {
      query["StrategyId"] = request.strategyId;
    }

    if (!$dara.isNull(request.strategyName)) {
      query["StrategyName"] = request.strategyName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDnsGtmAccessStrategy",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDnsGtmAccessStrategyResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDnsGtmAccessStrategyResponse({}));
  }

  /**
   * Updates an existing access policy.
   * 
   * @param request - UpdateDnsGtmAccessStrategyRequest
   * @returns UpdateDnsGtmAccessStrategyResponse
   */
  async updateDnsGtmAccessStrategy(request: $_model.UpdateDnsGtmAccessStrategyRequest): Promise<$_model.UpdateDnsGtmAccessStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDnsGtmAccessStrategyWithOptions(request, runtime);
  }

  /**
   * Updates the configuration of an address pool.
   * 
   * @param request - UpdateDnsGtmAddressPoolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDnsGtmAddressPoolResponse
   */
  async updateDnsGtmAddressPoolWithOptions(request: $_model.UpdateDnsGtmAddressPoolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDnsGtmAddressPoolResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addr)) {
      query["Addr"] = request.addr;
    }

    if (!$dara.isNull(request.addrPoolId)) {
      query["AddrPoolId"] = request.addrPoolId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.lbaStrategy)) {
      query["LbaStrategy"] = request.lbaStrategy;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDnsGtmAddressPool",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDnsGtmAddressPoolResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDnsGtmAddressPoolResponse({}));
  }

  /**
   * Updates the configuration of an address pool.
   * 
   * @param request - UpdateDnsGtmAddressPoolRequest
   * @returns UpdateDnsGtmAddressPoolResponse
   */
  async updateDnsGtmAddressPool(request: $_model.UpdateDnsGtmAddressPoolRequest): Promise<$_model.UpdateDnsGtmAddressPoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDnsGtmAddressPoolWithOptions(request, runtime);
  }

  /**
   * Updates the configuration of a Global Traffic Manager (GTM) instance.
   * 
   * @param request - UpdateDnsGtmInstanceGlobalConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDnsGtmInstanceGlobalConfigResponse
   */
  async updateDnsGtmInstanceGlobalConfigWithOptions(request: $_model.UpdateDnsGtmInstanceGlobalConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDnsGtmInstanceGlobalConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alertConfig)) {
      query["AlertConfig"] = request.alertConfig;
    }

    if (!$dara.isNull(request.alertGroup)) {
      query["AlertGroup"] = request.alertGroup;
    }

    if (!$dara.isNull(request.cnameType)) {
      query["CnameType"] = request.cnameType;
    }

    if (!$dara.isNull(request.forceUpdate)) {
      query["ForceUpdate"] = request.forceUpdate;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.publicCnameMode)) {
      query["PublicCnameMode"] = request.publicCnameMode;
    }

    if (!$dara.isNull(request.publicRr)) {
      query["PublicRr"] = request.publicRr;
    }

    if (!$dara.isNull(request.publicUserDomainName)) {
      query["PublicUserDomainName"] = request.publicUserDomainName;
    }

    if (!$dara.isNull(request.publicZoneName)) {
      query["PublicZoneName"] = request.publicZoneName;
    }

    if (!$dara.isNull(request.ttl)) {
      query["Ttl"] = request.ttl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDnsGtmInstanceGlobalConfig",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDnsGtmInstanceGlobalConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDnsGtmInstanceGlobalConfigResponse({}));
  }

  /**
   * Updates the configuration of a Global Traffic Manager (GTM) instance.
   * 
   * @param request - UpdateDnsGtmInstanceGlobalConfigRequest
   * @returns UpdateDnsGtmInstanceGlobalConfigResponse
   */
  async updateDnsGtmInstanceGlobalConfig(request: $_model.UpdateDnsGtmInstanceGlobalConfigRequest): Promise<$_model.UpdateDnsGtmInstanceGlobalConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDnsGtmInstanceGlobalConfigWithOptions(request, runtime);
  }

  /**
   * Modifies a health check configuration.
   * 
   * @param request - UpdateDnsGtmMonitorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDnsGtmMonitorResponse
   */
  async updateDnsGtmMonitorWithOptions(request: $_model.UpdateDnsGtmMonitorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDnsGtmMonitorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.evaluationCount)) {
      query["EvaluationCount"] = request.evaluationCount;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.ispCityNode)) {
      query["IspCityNode"] = request.ispCityNode;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.monitorConfigId)) {
      query["MonitorConfigId"] = request.monitorConfigId;
    }

    if (!$dara.isNull(request.monitorExtendInfo)) {
      query["MonitorExtendInfo"] = request.monitorExtendInfo;
    }

    if (!$dara.isNull(request.protocolType)) {
      query["ProtocolType"] = request.protocolType;
    }

    if (!$dara.isNull(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDnsGtmMonitor",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDnsGtmMonitorResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDnsGtmMonitorResponse({}));
  }

  /**
   * Modifies a health check configuration.
   * 
   * @param request - UpdateDnsGtmMonitorRequest
   * @returns UpdateDnsGtmMonitorResponse
   */
  async updateDnsGtmMonitor(request: $_model.UpdateDnsGtmMonitorRequest): Promise<$_model.UpdateDnsGtmMonitorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDnsGtmMonitorWithOptions(request, runtime);
  }

  /**
   * Modifies the name of a domain name group.
   * 
   * @remarks
   * This operation modifies the name of an existing domain name group.
   * 
   * @param request - UpdateDomainGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDomainGroupResponse
   */
  async updateDomainGroupWithOptions(request: $_model.UpdateDomainGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDomainGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDomainGroup",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDomainGroupResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDomainGroupResponse({}));
  }

  /**
   * Modifies the name of a domain name group.
   * 
   * @remarks
   * This operation modifies the name of an existing domain name group.
   * 
   * @param request - UpdateDomainGroupRequest
   * @returns UpdateDomainGroupResponse
   */
  async updateDomainGroup(request: $_model.UpdateDomainGroupRequest): Promise<$_model.UpdateDomainGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDomainGroupWithOptions(request, runtime);
  }

  /**
   * Modifies a DNS record based on the specified parameters.
   * 
   * @param request - UpdateDomainRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDomainRecordResponse
   */
  async updateDomainRecordWithOptions(request: $_model.UpdateDomainRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDomainRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.line)) {
      query["Line"] = request.line;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.RR)) {
      query["RR"] = request.RR;
    }

    if (!$dara.isNull(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    if (!$dara.isNull(request.TTL)) {
      query["TTL"] = request.TTL;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!$dara.isNull(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDomainRecord",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDomainRecordResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDomainRecordResponse({}));
  }

  /**
   * Modifies a DNS record based on the specified parameters.
   * 
   * @param request - UpdateDomainRecordRequest
   * @returns UpdateDomainRecordResponse
   */
  async updateDomainRecord(request: $_model.UpdateDomainRecordRequest): Promise<$_model.UpdateDomainRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDomainRecordWithOptions(request, runtime);
  }

  /**
   * Updates the remarks of a DNS record.
   * 
   * @param request - UpdateDomainRecordRemarkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDomainRecordRemarkResponse
   */
  async updateDomainRecordRemarkWithOptions(request: $_model.UpdateDomainRecordRemarkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDomainRecordRemarkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDomainRecordRemark",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDomainRecordRemarkResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDomainRecordRemarkResponse({}));
  }

  /**
   * Updates the remarks of a DNS record.
   * 
   * @param request - UpdateDomainRecordRemarkRequest
   * @returns UpdateDomainRecordRemarkResponse
   */
  async updateDomainRecordRemark(request: $_model.UpdateDomainRecordRemarkRequest): Promise<$_model.UpdateDomainRecordRemarkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDomainRecordRemarkWithOptions(request, runtime);
  }

  /**
   * Updates the remarks for a domain name.
   * 
   * @param request - UpdateDomainRemarkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDomainRemarkResponse
   */
  async updateDomainRemarkWithOptions(request: $_model.UpdateDomainRemarkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDomainRemarkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDomainRemark",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDomainRemarkResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDomainRemarkResponse({}));
  }

  /**
   * Updates the remarks for a domain name.
   * 
   * @param request - UpdateDomainRemarkRequest
   * @returns UpdateDomainRemarkResponse
   */
  async updateDomainRemark(request: $_model.UpdateDomainRemarkRequest): Promise<$_model.UpdateDomainRemarkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDomainRemarkWithOptions(request, runtime);
  }

  /**
   * Updates an access policy.
   * 
   * @param request - UpdateGtmAccessStrategyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGtmAccessStrategyResponse
   */
  async updateGtmAccessStrategyWithOptions(request: $_model.UpdateGtmAccessStrategyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGtmAccessStrategyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessLines)) {
      query["AccessLines"] = request.accessLines;
    }

    if (!$dara.isNull(request.defaultAddrPoolId)) {
      query["DefaultAddrPoolId"] = request.defaultAddrPoolId;
    }

    if (!$dara.isNull(request.failoverAddrPoolId)) {
      query["FailoverAddrPoolId"] = request.failoverAddrPoolId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.strategyId)) {
      query["StrategyId"] = request.strategyId;
    }

    if (!$dara.isNull(request.strategyName)) {
      query["StrategyName"] = request.strategyName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGtmAccessStrategy",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateGtmAccessStrategyResponse>(await this.callApi(params, req, runtime), new $_model.UpdateGtmAccessStrategyResponse({}));
  }

  /**
   * Updates an access policy.
   * 
   * @param request - UpdateGtmAccessStrategyRequest
   * @returns UpdateGtmAccessStrategyResponse
   */
  async updateGtmAccessStrategy(request: $_model.UpdateGtmAccessStrategyRequest): Promise<$_model.UpdateGtmAccessStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateGtmAccessStrategyWithOptions(request, runtime);
  }

  /**
   * Modifies an address pool.
   * 
   * @param request - UpdateGtmAddressPoolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGtmAddressPoolResponse
   */
  async updateGtmAddressPoolWithOptions(request: $_model.UpdateGtmAddressPoolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGtmAddressPoolResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addr)) {
      query["Addr"] = request.addr;
    }

    if (!$dara.isNull(request.addrPoolId)) {
      query["AddrPoolId"] = request.addrPoolId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.minAvailableAddrNum)) {
      query["MinAvailableAddrNum"] = request.minAvailableAddrNum;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGtmAddressPool",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateGtmAddressPoolResponse>(await this.callApi(params, req, runtime), new $_model.UpdateGtmAddressPoolResponse({}));
  }

  /**
   * Modifies an address pool.
   * 
   * @param request - UpdateGtmAddressPoolRequest
   * @returns UpdateGtmAddressPoolResponse
   */
  async updateGtmAddressPool(request: $_model.UpdateGtmAddressPoolRequest): Promise<$_model.UpdateGtmAddressPoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateGtmAddressPoolWithOptions(request, runtime);
  }

  /**
   * Updates the global configuration of a Global Traffic Manager (GTM) instance.
   * 
   * @param request - UpdateGtmInstanceGlobalConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGtmInstanceGlobalConfigResponse
   */
  async updateGtmInstanceGlobalConfigWithOptions(request: $_model.UpdateGtmInstanceGlobalConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGtmInstanceGlobalConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alertGroup)) {
      query["AlertGroup"] = request.alertGroup;
    }

    if (!$dara.isNull(request.cnameCustomDomainName)) {
      query["CnameCustomDomainName"] = request.cnameCustomDomainName;
    }

    if (!$dara.isNull(request.cnameMode)) {
      query["CnameMode"] = request.cnameMode;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.lbaStrategy)) {
      query["LbaStrategy"] = request.lbaStrategy;
    }

    if (!$dara.isNull(request.ttl)) {
      query["Ttl"] = request.ttl;
    }

    if (!$dara.isNull(request.userDomainName)) {
      query["UserDomainName"] = request.userDomainName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGtmInstanceGlobalConfig",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateGtmInstanceGlobalConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdateGtmInstanceGlobalConfigResponse({}));
  }

  /**
   * Updates the global configuration of a Global Traffic Manager (GTM) instance.
   * 
   * @param request - UpdateGtmInstanceGlobalConfigRequest
   * @returns UpdateGtmInstanceGlobalConfigResponse
   */
  async updateGtmInstanceGlobalConfig(request: $_model.UpdateGtmInstanceGlobalConfigRequest): Promise<$_model.UpdateGtmInstanceGlobalConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateGtmInstanceGlobalConfigWithOptions(request, runtime);
  }

  /**
   * Updates a health check configuration.
   * 
   * @param request - UpdateGtmMonitorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGtmMonitorResponse
   */
  async updateGtmMonitorWithOptions(request: $_model.UpdateGtmMonitorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGtmMonitorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.evaluationCount)) {
      query["EvaluationCount"] = request.evaluationCount;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.ispCityNode)) {
      query["IspCityNode"] = request.ispCityNode;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.monitorConfigId)) {
      query["MonitorConfigId"] = request.monitorConfigId;
    }

    if (!$dara.isNull(request.monitorExtendInfo)) {
      query["MonitorExtendInfo"] = request.monitorExtendInfo;
    }

    if (!$dara.isNull(request.protocolType)) {
      query["ProtocolType"] = request.protocolType;
    }

    if (!$dara.isNull(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGtmMonitor",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateGtmMonitorResponse>(await this.callApi(params, req, runtime), new $_model.UpdateGtmMonitorResponse({}));
  }

  /**
   * Updates a health check configuration.
   * 
   * @param request - UpdateGtmMonitorRequest
   * @returns UpdateGtmMonitorResponse
   */
  async updateGtmMonitor(request: $_model.UpdateGtmMonitorRequest): Promise<$_model.UpdateGtmMonitorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateGtmMonitorWithOptions(request, runtime);
  }

  /**
   * Updates a disaster recovery plan.
   * 
   * @param request - UpdateGtmRecoveryPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGtmRecoveryPlanResponse
   */
  async updateGtmRecoveryPlanWithOptions(request: $_model.UpdateGtmRecoveryPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGtmRecoveryPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.faultAddrPool)) {
      query["FaultAddrPool"] = request.faultAddrPool;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.recoveryPlanId)) {
      query["RecoveryPlanId"] = request.recoveryPlanId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGtmRecoveryPlan",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateGtmRecoveryPlanResponse>(await this.callApi(params, req, runtime), new $_model.UpdateGtmRecoveryPlanResponse({}));
  }

  /**
   * Updates a disaster recovery plan.
   * 
   * @param request - UpdateGtmRecoveryPlanRequest
   * @returns UpdateGtmRecoveryPlanResponse
   */
  async updateGtmRecoveryPlan(request: $_model.UpdateGtmRecoveryPlanRequest): Promise<$_model.UpdateGtmRecoveryPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateGtmRecoveryPlanWithOptions(request, runtime);
  }

  /**
   * Modifies the configuration of a cache refresh plan.
   * 
   * @param request - UpdateIspFlushCacheInstanceConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateIspFlushCacheInstanceConfigResponse
   */
  async updateIspFlushCacheInstanceConfigWithOptions(request: $_model.UpdateIspFlushCacheInstanceConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateIspFlushCacheInstanceConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateIspFlushCacheInstanceConfig",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateIspFlushCacheInstanceConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdateIspFlushCacheInstanceConfigResponse({}));
  }

  /**
   * Modifies the configuration of a cache refresh plan.
   * 
   * @param request - UpdateIspFlushCacheInstanceConfigRequest
   * @returns UpdateIspFlushCacheInstanceConfigResponse
   */
  async updateIspFlushCacheInstanceConfig(request: $_model.UpdateIspFlushCacheInstanceConfigRequest): Promise<$_model.UpdateIspFlushCacheInstanceConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateIspFlushCacheInstanceConfigWithOptions(request, runtime);
  }

  /**
   * Modifies a built-in authoritative record for recursive resolution.
   * 
   * @remarks
   * If a DNS record is locked, it cannot be deleted.
   * 
   * @param request - UpdateRecursionRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRecursionRecordResponse
   */
  async updateRecursionRecordWithOptions(request: $_model.UpdateRecursionRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRecursionRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    if (!$dara.isNull(request.requestSource)) {
      query["RequestSource"] = request.requestSource;
    }

    if (!$dara.isNull(request.rr)) {
      query["Rr"] = request.rr;
    }

    if (!$dara.isNull(request.ttl)) {
      query["Ttl"] = request.ttl;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.value)) {
      query["Value"] = request.value;
    }

    if (!$dara.isNull(request.weight)) {
      query["Weight"] = request.weight;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRecursionRecord",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRecursionRecordResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRecursionRecordResponse({}));
  }

  /**
   * Modifies a built-in authoritative record for recursive resolution.
   * 
   * @remarks
   * If a DNS record is locked, it cannot be deleted.
   * 
   * @param request - UpdateRecursionRecordRequest
   * @returns UpdateRecursionRecordResponse
   */
  async updateRecursionRecord(request: $_model.UpdateRecursionRecordRequest): Promise<$_model.UpdateRecursionRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRecursionRecordWithOptions(request, runtime);
  }

  /**
   * Updates the enable status of a recursion record.
   * 
   * @param request - UpdateRecursionRecordEnableStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRecursionRecordEnableStatusResponse
   */
  async updateRecursionRecordEnableStatusWithOptions(request: $_model.UpdateRecursionRecordEnableStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRecursionRecordEnableStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.enableStatus)) {
      query["EnableStatus"] = request.enableStatus;
    }

    if (!$dara.isNull(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRecursionRecordEnableStatus",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRecursionRecordEnableStatusResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRecursionRecordEnableStatusResponse({}));
  }

  /**
   * Updates the enable status of a recursion record.
   * 
   * @param request - UpdateRecursionRecordEnableStatusRequest
   * @returns UpdateRecursionRecordEnableStatusResponse
   */
  async updateRecursionRecordEnableStatus(request: $_model.UpdateRecursionRecordEnableStatusRequest): Promise<$_model.UpdateRecursionRecordEnableStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRecursionRecordEnableStatusWithOptions(request, runtime);
  }

  /**
   * Updates the remarks for a built-in authoritative record in HTTPDNS.
   * 
   * @param request - UpdateRecursionRecordRemarkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRecursionRecordRemarkResponse
   */
  async updateRecursionRecordRemarkWithOptions(request: $_model.UpdateRecursionRecordRemarkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRecursionRecordRemarkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRecursionRecordRemark",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRecursionRecordRemarkResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRecursionRecordRemarkResponse({}));
  }

  /**
   * Updates the remarks for a built-in authoritative record in HTTPDNS.
   * 
   * @param request - UpdateRecursionRecordRemarkRequest
   * @returns UpdateRecursionRecordRemarkResponse
   */
  async updateRecursionRecordRemark(request: $_model.UpdateRecursionRecordRemarkRequest): Promise<$_model.UpdateRecursionRecordRemarkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRecursionRecordRemarkWithOptions(request, runtime);
  }

  /**
   * Updates the weight of a DNS record for recursive resolution.
   * 
   * @param request - UpdateRecursionRecordWeightRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRecursionRecordWeightResponse
   */
  async updateRecursionRecordWeightWithOptions(request: $_model.UpdateRecursionRecordWeightRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRecursionRecordWeightResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    if (!$dara.isNull(request.weight)) {
      query["Weight"] = request.weight;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRecursionRecordWeight",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRecursionRecordWeightResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRecursionRecordWeightResponse({}));
  }

  /**
   * Updates the weight of a DNS record for recursive resolution.
   * 
   * @param request - UpdateRecursionRecordWeightRequest
   * @returns UpdateRecursionRecordWeightResponse
   */
  async updateRecursionRecordWeight(request: $_model.UpdateRecursionRecordWeightRequest): Promise<$_model.UpdateRecursionRecordWeightResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRecursionRecordWeightWithOptions(request, runtime);
  }

  /**
   * Updates the enabled status of the weight algorithm for a DNS record used for recursive resolution.
   * 
   * @param request - UpdateRecursionRecordWeightEnableStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRecursionRecordWeightEnableStatusResponse
   */
  async updateRecursionRecordWeightEnableStatusWithOptions(request: $_model.UpdateRecursionRecordWeightEnableStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRecursionRecordWeightEnableStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.enableStatus)) {
      query["EnableStatus"] = request.enableStatus;
    }

    if (!$dara.isNull(request.requestSource)) {
      query["RequestSource"] = request.requestSource;
    }

    if (!$dara.isNull(request.rr)) {
      query["Rr"] = request.rr;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRecursionRecordWeightEnableStatus",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRecursionRecordWeightEnableStatusResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRecursionRecordWeightEnableStatusResponse({}));
  }

  /**
   * Updates the enabled status of the weight algorithm for a DNS record used for recursive resolution.
   * 
   * @param request - UpdateRecursionRecordWeightEnableStatusRequest
   * @returns UpdateRecursionRecordWeightEnableStatusResponse
   */
  async updateRecursionRecordWeightEnableStatus(request: $_model.UpdateRecursionRecordWeightEnableStatusRequest): Promise<$_model.UpdateRecursionRecordWeightEnableStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRecursionRecordWeightEnableStatusWithOptions(request, runtime);
  }

  /**
   * Updates the effective scope of a built-in authoritative domain name zone in HTTPDNS.
   * 
   * @param tmpReq - UpdateRecursionZoneEffectiveScopeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRecursionZoneEffectiveScopeResponse
   */
  async updateRecursionZoneEffectiveScopeWithOptions(tmpReq: $_model.UpdateRecursionZoneEffectiveScopeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRecursionZoneEffectiveScopeResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateRecursionZoneEffectiveScopeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.effectiveScopes)) {
      request.effectiveScopesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.effectiveScopes, "EffectiveScopes", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.effectiveScopesShrink)) {
      query["EffectiveScopes"] = request.effectiveScopesShrink;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRecursionZoneEffectiveScope",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRecursionZoneEffectiveScopeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRecursionZoneEffectiveScopeResponse({}));
  }

  /**
   * Updates the effective scope of a built-in authoritative domain name zone in HTTPDNS.
   * 
   * @param request - UpdateRecursionZoneEffectiveScopeRequest
   * @returns UpdateRecursionZoneEffectiveScopeResponse
   */
  async updateRecursionZoneEffectiveScope(request: $_model.UpdateRecursionZoneEffectiveScopeRequest): Promise<$_model.UpdateRecursionZoneEffectiveScopeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRecursionZoneEffectiveScopeWithOptions(request, runtime);
  }

  /**
   * Modifies the recursive proxy mode for a zone.
   * 
   * @remarks
   * The end IP address of each IP segment must be greater than or equal to the start IP address.
   * The IP address ranges of all IP segments for the domain name cannot overlap across custom lines.
   * 
   * @param request - UpdateRecursionZoneProxyPatternRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRecursionZoneProxyPatternResponse
   */
  async updateRecursionZoneProxyPatternWithOptions(request: $_model.UpdateRecursionZoneProxyPatternRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRecursionZoneProxyPatternResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.proxyPattern)) {
      query["ProxyPattern"] = request.proxyPattern;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRecursionZoneProxyPattern",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRecursionZoneProxyPatternResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRecursionZoneProxyPatternResponse({}));
  }

  /**
   * Modifies the recursive proxy mode for a zone.
   * 
   * @remarks
   * The end IP address of each IP segment must be greater than or equal to the start IP address.
   * The IP address ranges of all IP segments for the domain name cannot overlap across custom lines.
   * 
   * @param request - UpdateRecursionZoneProxyPatternRequest
   * @returns UpdateRecursionZoneProxyPatternResponse
   */
  async updateRecursionZoneProxyPattern(request: $_model.UpdateRecursionZoneProxyPatternRequest): Promise<$_model.UpdateRecursionZoneProxyPatternResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRecursionZoneProxyPatternWithOptions(request, runtime);
  }

  /**
   * Modifies the remarks for a built-in authoritative domain name zone used for recursive resolution.
   * 
   * @remarks
   * The end IP address of each IP segment must be greater than or equal to the start IP address.
   * For a domain name, the IP address ranges of all IP segments in all custom lines cannot overlap.
   * 
   * @param request - UpdateRecursionZoneRemarkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRecursionZoneRemarkResponse
   */
  async updateRecursionZoneRemarkWithOptions(request: $_model.UpdateRecursionZoneRemarkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRecursionZoneRemarkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRecursionZoneRemark",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRecursionZoneRemarkResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRecursionZoneRemarkResponse({}));
  }

  /**
   * Modifies the remarks for a built-in authoritative domain name zone used for recursive resolution.
   * 
   * @remarks
   * The end IP address of each IP segment must be greater than or equal to the start IP address.
   * For a domain name, the IP address ranges of all IP segments in all custom lines cannot overlap.
   * 
   * @param request - UpdateRecursionZoneRemarkRequest
   * @returns UpdateRecursionZoneRemarkResponse
   */
  async updateRecursionZoneRemark(request: $_model.UpdateRecursionZoneRemarkRequest): Promise<$_model.UpdateRecursionZoneRemarkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRecursionZoneRemarkWithOptions(request, runtime);
  }

  /**
   * Updates the server-side status of a domain name.
   * 
   * @remarks
   * ## Request description
   * - This operation updates the server-side status of a domain name.
   * 
   * @param request - UpdateRspDomainServerProhibitStatusForGatewayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRspDomainServerProhibitStatusForGatewayResponse
   */
  async updateRspDomainServerProhibitStatusForGatewayWithOptions(request: $_model.UpdateRspDomainServerProhibitStatusForGatewayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRspDomainServerProhibitStatusForGatewayResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addStatusList)) {
      query["AddStatusList"] = request.addStatusList;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.deleteStatusList)) {
      query["DeleteStatusList"] = request.deleteStatusList;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRspDomainServerProhibitStatusForGateway",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRspDomainServerProhibitStatusForGatewayResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRspDomainServerProhibitStatusForGatewayResponse({}));
  }

  /**
   * Updates the server-side status of a domain name.
   * 
   * @remarks
   * ## Request description
   * - This operation updates the server-side status of a domain name.
   * 
   * @param request - UpdateRspDomainServerProhibitStatusForGatewayRequest
   * @returns UpdateRspDomainServerProhibitStatusForGatewayResponse
   */
  async updateRspDomainServerProhibitStatusForGateway(request: $_model.UpdateRspDomainServerProhibitStatusForGatewayRequest): Promise<$_model.UpdateRspDomainServerProhibitStatusForGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRspDomainServerProhibitStatusForGatewayWithOptions(request, runtime);
  }

  /**
   * Updates the server-side status of a domain name.
   * 
   * @remarks
   * This operation updates the server-side status of a domain name.
   * 
   * @param request - UpdateRspDomainServerProhibitStatusForGatewayOteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRspDomainServerProhibitStatusForGatewayOteResponse
   */
  async updateRspDomainServerProhibitStatusForGatewayOteWithOptions(request: $_model.UpdateRspDomainServerProhibitStatusForGatewayOteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRspDomainServerProhibitStatusForGatewayOteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addStatusList)) {
      query["AddStatusList"] = request.addStatusList;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.deleteStatusList)) {
      query["DeleteStatusList"] = request.deleteStatusList;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRspDomainServerProhibitStatusForGatewayOte",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRspDomainServerProhibitStatusForGatewayOteResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRspDomainServerProhibitStatusForGatewayOteResponse({}));
  }

  /**
   * Updates the server-side status of a domain name.
   * 
   * @remarks
   * This operation updates the server-side status of a domain name.
   * 
   * @param request - UpdateRspDomainServerProhibitStatusForGatewayOteRequest
   * @returns UpdateRspDomainServerProhibitStatusForGatewayOteResponse
   */
  async updateRspDomainServerProhibitStatusForGatewayOte(request: $_model.UpdateRspDomainServerProhibitStatusForGatewayOteRequest): Promise<$_model.UpdateRspDomainServerProhibitStatusForGatewayOteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRspDomainServerProhibitStatusForGatewayOteWithOptions(request, runtime);
  }

  /**
   * Checks whether an instance hostname can be added.
   * 
   * @param request - ValidateDnsGtmCnameRrCanUseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ValidateDnsGtmCnameRrCanUseResponse
   */
  async validateDnsGtmCnameRrCanUseWithOptions(request: $_model.ValidateDnsGtmCnameRrCanUseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ValidateDnsGtmCnameRrCanUseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cnameMode)) {
      query["CnameMode"] = request.cnameMode;
    }

    if (!$dara.isNull(request.cnameRr)) {
      query["CnameRr"] = request.cnameRr;
    }

    if (!$dara.isNull(request.cnameType)) {
      query["CnameType"] = request.cnameType;
    }

    if (!$dara.isNull(request.cnameZone)) {
      query["CnameZone"] = request.cnameZone;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ValidateDnsGtmCnameRrCanUse",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ValidateDnsGtmCnameRrCanUseResponse>(await this.callApi(params, req, runtime), new $_model.ValidateDnsGtmCnameRrCanUseResponse({}));
  }

  /**
   * Checks whether an instance hostname can be added.
   * 
   * @param request - ValidateDnsGtmCnameRrCanUseRequest
   * @returns ValidateDnsGtmCnameRrCanUseResponse
   */
  async validateDnsGtmCnameRrCanUse(request: $_model.ValidateDnsGtmCnameRrCanUseRequest): Promise<$_model.ValidateDnsGtmCnameRrCanUseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.validateDnsGtmCnameRrCanUseWithOptions(request, runtime);
  }

  /**
   * Validates a UDP IP address segment for Public DNS.
   * 
   * @param request - ValidatePdnsUdpIpSegmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ValidatePdnsUdpIpSegmentResponse
   */
  async validatePdnsUdpIpSegmentWithOptions(request: $_model.ValidatePdnsUdpIpSegmentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ValidatePdnsUdpIpSegmentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.ipToken)) {
      query["IpToken"] = request.ipToken;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ValidatePdnsUdpIpSegment",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ValidatePdnsUdpIpSegmentResponse>(await this.callApi(params, req, runtime), new $_model.ValidatePdnsUdpIpSegmentResponse({}));
  }

  /**
   * Validates a UDP IP address segment for Public DNS.
   * 
   * @param request - ValidatePdnsUdpIpSegmentRequest
   * @returns ValidatePdnsUdpIpSegmentResponse
   */
  async validatePdnsUdpIpSegment(request: $_model.ValidatePdnsUdpIpSegmentRequest): Promise<$_model.ValidatePdnsUdpIpSegmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.validatePdnsUdpIpSegmentWithOptions(request, runtime);
  }

  /**
   * Verifies DNS records.
   * 
   * @param request - VerifyAtiAgentDnsRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifyAtiAgentDnsRecordsResponse
   */
  async verifyAtiAgentDnsRecordsWithOptions(request: $_model.VerifyAtiAgentDnsRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.VerifyAtiAgentDnsRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentRegisterInfoId)) {
      query["AgentRegisterInfoId"] = request.agentRegisterInfoId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "VerifyAtiAgentDnsRecords",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.VerifyAtiAgentDnsRecordsResponse>(await this.callApi(params, req, runtime), new $_model.VerifyAtiAgentDnsRecordsResponse({}));
  }

  /**
   * Verifies DNS records.
   * 
   * @param request - VerifyAtiAgentDnsRecordsRequest
   * @returns VerifyAtiAgentDnsRecordsResponse
   */
  async verifyAtiAgentDnsRecords(request: $_model.VerifyAtiAgentDnsRecordsRequest): Promise<$_model.VerifyAtiAgentDnsRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.verifyAtiAgentDnsRecordsWithOptions(request, runtime);
  }

  /**
   * 触发 ACME 预检
   * 
   * @param request - VerifyAtiAgentRegisterInfoAcmeChallengeRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifyAtiAgentRegisterInfoAcmeChallengeRecordResponse
   */
  async verifyAtiAgentRegisterInfoAcmeChallengeRecordWithOptions(request: $_model.VerifyAtiAgentRegisterInfoAcmeChallengeRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.VerifyAtiAgentRegisterInfoAcmeChallengeRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentRegisterInfoId)) {
      query["AgentRegisterInfoId"] = request.agentRegisterInfoId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "VerifyAtiAgentRegisterInfoAcmeChallengeRecord",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.VerifyAtiAgentRegisterInfoAcmeChallengeRecordResponse>(await this.callApi(params, req, runtime), new $_model.VerifyAtiAgentRegisterInfoAcmeChallengeRecordResponse({}));
  }

  /**
   * 触发 ACME 预检
   * 
   * @param request - VerifyAtiAgentRegisterInfoAcmeChallengeRecordRequest
   * @returns VerifyAtiAgentRegisterInfoAcmeChallengeRecordResponse
   */
  async verifyAtiAgentRegisterInfoAcmeChallengeRecord(request: $_model.VerifyAtiAgentRegisterInfoAcmeChallengeRecordRequest): Promise<$_model.VerifyAtiAgentRegisterInfoAcmeChallengeRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.verifyAtiAgentRegisterInfoAcmeChallengeRecordWithOptions(request, runtime);
  }

}
