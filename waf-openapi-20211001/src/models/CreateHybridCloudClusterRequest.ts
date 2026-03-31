// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHybridCloudClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The network access mode. Valid values:
   * 
   * *   **internet**: Internet access.
   * *   **vpc**: internal network access by using Express Connect circuits.
   * 
   * This parameter is required.
   * 
   * @example
   * internet
   */
  accessMode?: string;
  /**
   * @remarks
   * The region where the virtual private cloud (VPC) resides. Valid values:
   * 
   * *   **cn-hangzhou**: China (Hangzhou).
   * *   **cn-beiijng**: China (Beijing).
   * *   **cn-shanghai**: China (Shanghai).
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
   */
  clusterName?: string;
  /**
   * @remarks
   * The HTTP ports that are supported. Set this parameter to a string. Specify multiple ports in the **port1,port2,port3** format.
   * 
   * This parameter is required.
   * 
   * @example
   * 80,8080
   */
  httpPorts?: string;
  /**
   * @remarks
   * The HTTPS ports that are supported. Set this parameter to a string. Specify multiple ports in the **port1,port2,port3** format.
   * 
   * This parameter is required.
   * 
   * @example
   * 443,8443
   */
  httpsPorts?: string;
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
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
   * The status of the proxy gateway. Valid value:
   * 
   * *   **on**: enabled.
   * *   **off**: disabled.
   * 
   * @example
   * off
   */
  proxyStatus?: string;
  /**
   * @remarks
   * The type of the cluster. Valid value:
   * 
   * *   **cname**: reverse proxy cluster.
   * *   **service**: SDK-based traffic mirroring cluster.
   * 
   * @example
   * cname
   */
  proxyType?: string;
  /**
   * @remarks
   * The region in which the WAF instance is deployed. Valid value:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The remarks about the cluster.
   */
  remark?: string;
  /**
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The configurations of the rule.
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
   * The status of manual bypass. Valid values:
   * 
   * *   **on**: enabled.
   * *   **off**: disabled.
   * 
   * @example
   * on
   */
  ruleStatus?: string;
  /**
   * @remarks
   * The type of the rule. Valid value:
   * 
   * *   **bypass**: allows requests without security checks.
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

