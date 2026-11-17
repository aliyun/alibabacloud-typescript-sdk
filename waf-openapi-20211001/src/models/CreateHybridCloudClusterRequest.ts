// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHybridCloudClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The network access mode. Valid values:
   * - **internet**: Internet access.
   * - **vpc**: Private network access over Express Connect.
   * 
   * This parameter is required.
   * 
   * @example
   * internet
   */
  accessMode?: string;
  /**
   * @remarks
   * The region for Express Connect access. Valid values:
   * - **cn-hangzhou**: Hangzhou.
   * - **cn-beiijng**: Beijing.
   * - **cn-shanghai**: Shanghai.
   * 
   * @example
   * cn-hangzhou
   */
  accessRegion?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  clusterName?: string;
  /**
   * @remarks
   * The list of available ports for the HTTP protocol. The value is a string. If multiple ports are specified, use the **port1,port2,port3** format.
   * 
   * This parameter is required.
   * 
   * @example
   * 80,8080
   */
  httpPorts?: string;
  /**
   * @remarks
   * The list of available ports for the HTTPS protocol. The value is a string. If multiple ports are specified, use the **port1,port2,port3** format.
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
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * > **[Deprecated]** This parameter is deprecated and no longer returns meaningful data.
   * 
   * @example
   * deprecated
   * 
   * @deprecated
   */
  logFieldsNotReturned?: string;
  /**
   * @remarks
   * The number of protection nodes that can be added to the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  protectionServerCount?: number;
  /**
   * @remarks
   * The proxy gateway mode. Valid values:
   * - **on**: Enabled.
   * - **off**: Disabled.
   * 
   * @example
   * off
   */
  proxyStatus?: string;
  /**
   * @remarks
   * The cluster type. Valid values:
   * - **cname**: Reverse proxy cluster.
   * - **service**: Service cluster.
   * 
   * @example
   * cname
   */
  proxyType?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * - **cn-hangzhou**: The Chinese mainland.
   * - **ap-southeast-1**: Outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The remark.
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
   * The rule configuration.
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
   * The manual bypass status. Valid values:
   * - **on**: Enabled.
   * - **off**: Disabled.
   * 
   * @example
   * on
   */
  ruleStatus?: string;
  /**
   * @remarks
   * The rule type. Valid values:
   * - **bypass**: Skips security checks and directly allows traffic.
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

