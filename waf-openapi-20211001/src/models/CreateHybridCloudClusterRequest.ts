// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHybridCloudClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The network access mode of the cluster. Valid values:
   * 
   * - **internet**: access over the Internet.
   * 
   * - **vpc**: access over an Express Connect circuit.
   * 
   * This parameter is required.
   * 
   * @example
   * internet
   */
  accessMode?: string;
  /**
   * @remarks
   * The region for Express Connect circuit access. Valid values:
   * 
   * - **cn-hangzhou**: Hangzhou.
   * 
   * - **cn-beijing**: Beijing.
   * 
   * - **cn-shanghai**: Shanghai.
   * 
   * @example
   * cn-hangzhou
   */
  accessRegion?: string;
  /**
   * @remarks
   * The name of the hybrid cloud cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  clusterName?: string;
  /**
   * @remarks
   * The listening ports for the HTTP protocol. Separate multiple ports with commas (,), such as **port1,port2,port3**.
   * 
   * This parameter is required.
   * 
   * @example
   * 80,8080
   */
  httpPorts?: string;
  /**
   * @remarks
   * The listening ports for the HTTPS protocol. Separate multiple ports with commas (,), such as **port1,port2,port3**.
   * 
   * This parameter is required.
   * 
   * @example
   * 443,8443
   */
  httpsPorts?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > Call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * > This parameter is deprecated. It no longer returns meaningful data.
   * 
   * @example
   * deprecated
   * 
   * @deprecated
   */
  logFieldsNotReturned?: string;
  /**
   * @remarks
   * The maximum number of protection nodes that can be added to the hybrid cloud cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  protectionServerCount?: number;
  /**
   * @remarks
   * Indicates whether the proxy gateway is enabled for the cluster. Valid values:
   * 
   * - **on**: The proxy gateway is enabled.
   * 
   * - **off**: The proxy gateway is disabled.
   * 
   * @example
   * off
   */
  proxyStatus?: string;
  /**
   * @remarks
   * The type of the hybrid cloud cluster. Valid values:
   * 
   * - **cname**: reverse proxy cluster. Traffic is forwarded through CNAME resolution.
   * 
   * - **service**: transparent proxy cluster. Traffic is forwarded at the service level.
   * 
   * @example
   * cname
   */
  proxyType?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * - **cn-hangzhou**: the Chinese mainland.
   * 
   * - **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The description of the hybrid cloud cluster.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The configuration of the bypass rule, in JSON format. This includes settings such as circuit breaker thresholds, request body size limits, and timeout values.
   * 
   * @example
   * {
   *       "enable": true,
   *       "param": {
   *             "breaker": {
   *                   "duration": 1,
   *                   "failed": 1,
   *                   "recent_failed": 1
   *             },
   *             "disable_protect": false,
   *             "max_request_body_len": 1,
   *             "timeout": 1
   *       }
   * }
   */
  ruleConfig?: string;
  /**
   * @remarks
   * Indicates whether manual bypass is enabled for the cluster. Valid values:
   * 
   * - **on**: Manual bypass is enabled.
   * 
   * - **off**: Manual bypass is disabled.
   * 
   * @example
   * on
   */
  ruleStatus?: string;
  /**
   * @remarks
   * The type of the bypass rule. Valid values:
   * 
   * - **bypass**: skips WAF security checks and allows traffic to pass through directly.
   * 
   * @example
   * bypass
   */
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      accessMode: 'AccessMode',
      accessRegion: 'AccessRegion',
      clusterName: 'ClusterName',
      httpPorts: 'HttpPorts',
      httpsPorts: 'HttpsPorts',
      instanceId: 'InstanceId',
      logFieldsNotReturned: 'LogFieldsNotReturned',
      protectionServerCount: 'ProtectionServerCount',
      proxyStatus: 'ProxyStatus',
      proxyType: 'ProxyType',
      regionId: 'RegionId',
      remark: 'Remark',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      ruleConfig: 'RuleConfig',
      ruleStatus: 'RuleStatus',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessMode: 'string',
      accessRegion: 'string',
      clusterName: 'string',
      httpPorts: 'string',
      httpsPorts: 'string',
      instanceId: 'string',
      logFieldsNotReturned: 'string',
      protectionServerCount: 'number',
      proxyStatus: 'string',
      proxyType: 'string',
      regionId: 'string',
      remark: 'string',
      resourceManagerResourceGroupId: 'string',
      ruleConfig: 'string',
      ruleStatus: 'string',
      ruleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

