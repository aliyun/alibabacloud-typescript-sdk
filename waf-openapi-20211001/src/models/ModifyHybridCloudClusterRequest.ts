// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyHybridCloudClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The network access mode of the hybrid cloud cluster. Valid values:
   * 
   * - **internet**: access over the Internet.
   * 
   * - **vpc**: access over a leased line through a virtual private cloud (VPC).
   * 
   * This parameter is required.
   * 
   * @example
   * internet
   */
  accessMode?: string;
  /**
   * @remarks
   * The region in which the leased line resides. This parameter is required when AccessMode is set to vpc. Valid values:
   * 
   * - **cn-hangzhou**: Hangzhou.
   * 
   * - **cn-beijing**: Beijing.
   * 
   * - **cn-shanghai**: Shanghai.
   * 
   * @example
   * cn-beijing
   */
  accessRegion?: string;
  /**
   * @remarks
   * The name of the hybrid cloud cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * waf-example-***
   */
  clusterName?: string;
  /**
   * @remarks
   * The list of HTTP ports supported by the hybrid cloud cluster. Separate multiple ports with commas (,). Format: **port1,port2,port3**.
   * 
   * This parameter is required.
   * 
   * @example
   * 80,8080
   */
  httpPorts?: string;
  /**
   * @remarks
   * The list of HTTPS ports supported by the hybrid cloud cluster. Separate multiple ports with commas (,). Format: **port1,port2,port3**.
   * 
   * This parameter is required.
   * 
   * @example
   * 443,8443
   */
  httpsPorts?: string;
  /**
   * @remarks
   * The ID of the hybrid cloud cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * > Call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf-cn-mp9153****
   */
  instanceId?: string;
  /**
   * @remarks
   * The log fields that are excluded from the response.
   * 
   * @example
   * log_example
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
   * Indicates whether the proxy gateway is enabled. Valid values:
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
   * - **cname**: a reverse proxy cluster.
   * 
   * - **service**: a service cluster.
   * 
   * @example
   * service
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
   * The remarks of the hybrid cloud cluster.
   * 
   * @example
   * remarkExample
   */
  remark?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group to which the WAF instance belongs.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The rule configuration in JSON format. This includes settings such as the circuit breaker, request body length limit, and timeout.
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
   * Indicates whether the rule is enabled. Valid values:
   * 
   * - **on**: The rule is enabled.
   * 
   * - **off**: The rule is disabled.
   * 
   * @example
   * off
   */
  ruleStatus?: string;
  /**
   * @remarks
   * The rule type. Valid values:
   * 
   * - **bypass**: WAF bypasses security checks.
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
      id: 'Id',
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
      id: 'number',
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

