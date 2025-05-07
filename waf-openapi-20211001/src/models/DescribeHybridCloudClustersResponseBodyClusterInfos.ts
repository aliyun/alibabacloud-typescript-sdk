// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHybridCloudClustersResponseBodyClusterInfos extends $dara.Model {
  /**
   * @remarks
   * The network access mode. Valid values:
   * 
   * *   **internet**: Internet access.
   * *   **vpc**: internal network access by using Express Connect circuits.
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
   * @example
   * test
   */
  clusterName?: string;
  /**
   * @remarks
   * The ID of the hybrid cloud cluster resource.
   * 
   * @example
   * hdbc-cluster-t1****a
   */
  clusterResourceId?: string;
  /**
   * @remarks
   * The HTTP ports. The value is a string. If multiple ports are returned, the value is in the **port1,port2,port3** format.
   * 
   * @example
   * 80,8080
   */
  httpPorts?: string;
  /**
   * @remarks
   * The HTTPS ports. The value is a string. If multiple ports are returned, the value is in the **port1,port2,port3** format.
   * 
   * @example
   * 443,8443
   */
  httpsPorts?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * 524**8
   */
  id?: number;
  /**
   * @remarks
   * The number of protection nodes that can be added to the cluster.
   * 
   * @example
   * 1
   */
  protectionServerCount?: number;
  /**
   * @remarks
   * The status of the proxy gateway. Valid values:
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
   * The type of the cluster. Valid values:
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
   * The remarks about the cluster.
   * 
   * @example
   * demo
   */
  remark?: string;
  /**
   * @remarks
   * The configurations of the rule.
   * 
   * @example
   * {"enable":true,"param":{"breaker":{"duration":1,"failed":1,"recent_failed":1},"disable_protect":false,"max_request_body_len":1,"timeout":1}}
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
   * off
   */
  ruleStatus?: string;
  /**
   * @remarks
   * The type of the rule. Valid value:
   * 
   * *   **bypass**: Requests are allowed without security checks.
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
      clusterResourceId: 'ClusterResourceId',
      httpPorts: 'HttpPorts',
      httpsPorts: 'HttpsPorts',
      id: 'Id',
      protectionServerCount: 'ProtectionServerCount',
      proxyStatus: 'ProxyStatus',
      proxyType: 'ProxyType',
      remark: 'Remark',
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
      clusterResourceId: 'string',
      httpPorts: 'string',
      httpsPorts: 'string',
      id: 'number',
      protectionServerCount: 'number',
      proxyStatus: 'string',
      proxyType: 'string',
      remark: 'string',
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

