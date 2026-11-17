// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHybridCloudClustersResponseBodyClusterInfos extends $dara.Model {
  /**
   * @remarks
   * The network access mode. Valid values:
   * 
   * - **internet**: Internet access.
   * - **vpc**: Express Connect private network access.
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
   * cn-hangzhou
   */
  accessRegion?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * testcluster
   */
  clusterName?: string;
  /**
   * @remarks
   * The resource ID of the hybrid cloud cluster.
   * 
   * @example
   * hdbc-cluster-t1****a
   */
  clusterResourceId?: string;
  /**
   * @remarks
   * The list of HTTP ports. Separate multiple ports with commas (,). Example: port1,port2,port3.
   * 
   * @example
   * 80,8080
   */
  httpPorts?: string;
  /**
   * @remarks
   * The list of HTTPS ports. Separate multiple ports with commas (,). Example: port1,port2,port3.
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
   * The proxy gateway mode. Valid values:
   * 
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
   * 
   * - **cname**: Reverse proxy cluster.
   * - **service**: Service cluster.
   * 
   * @example
   * cname
   */
  proxyType?: string;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The rule configuration.
   * 
   * @example
   * {"enable":true,"param":{"breaker":{"duration":1,"failed":1,"recent_failed":1},"disable_protect":false,"max_request_body_len":1,"timeout":1}}
   */
  ruleConfig?: string;
  /**
   * @remarks
   * The manual bypass status. Valid values:
   * 
   * - **on**: Enabled.
   * 
   * - **off**: Disabled.
   * 
   * @example
   * off
   */
  ruleStatus?: string;
  /**
   * @remarks
   * The rule type. Valid values:
   * 
   * - **bypass**: Skips security checks and directly allows requests.
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

export class DescribeHybridCloudClustersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of clusters.
   */
  clusterInfos?: DescribeHybridCloudClustersResponseBodyClusterInfos[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 66A98669-ER12-WE34-23PO-301469*****E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterInfos: 'ClusterInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterInfos: { 'type': 'array', 'itemType': DescribeHybridCloudClustersResponseBodyClusterInfos },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clusterInfos)) {
      $dara.Model.validateArray(this.clusterInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

