// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyHybridCloudClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The network access mode. Valid values:
   * 
   * - **internet**: public network access.
   * - **vpc**: Express Connect private network access.
   * 
   * This parameter is required.
   * 
   * @example
   * internet
   */
  accessMode?: string;
  /**
   * @remarks
   * The Express Connect access region. Valid values:
   * - **cn-hangzhou**: Hangzhou.
   * - **cn-beiijng**: Beijing.
   * - **cn-shanghai**: Shanghai.
   * 
   * @example
   * cn-beijing
   */
  accessRegion?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * This parameter is required.
   * 
   * @example
   * waf-example-***
   */
  clusterName?: string;
  /**
   * @remarks
   * The list of available ports for the HTTP protocol. The value is a string. If multiple ports are specified, they are returned in the format of **port1,port2,port3**.
   * 
   * This parameter is required.
   * 
   * @example
   * 80,8080
   */
  httpPorts?: string;
  /**
   * @remarks
   * The list of available ports for the HTTPS protocol. The value is a string. If multiple ports are specified, they are returned in the format of **port1,port2,port3**.
   * 
   * This parameter is required.
   * 
   * @example
   * 443,8443
   */
  httpsPorts?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The WAF instance ID.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the current WAF instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * waf-cn-mp9153****
   */
  instanceId?: string;
  /**
   * @remarks
   * The log fields to be returned.
   * 
   * @example
   * log_example
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
   * 
   * - on: enabled.
   * - off: disabled.
   * 
   * @example
   * off
   */
  proxyStatus?: string;
  /**
   * @remarks
   * The cluster type. Valid values:
   * - **cname**: reverse proxy cluster.
   * - **service**: service-based cluster.
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
   * The remarks.
   * 
   * @example
   * remarkExample
   */
  remark?: string;
  /**
   * @remarks
   * The Alibaba Cloud resource group ID.
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
   * The rule status. Valid values:
   * - **on**: enabled.
   * - **off**: disabled.
   * 
   * @example
   * off
   */
  ruleStatus?: string;
  /**
   * @remarks
   * The rule type. Valid values:
   * 
   * bypass: bypasses security checks and directly allows the request.
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

