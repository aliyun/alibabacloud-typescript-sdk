// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyHybridCloudClusterRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  accessMode?: string;
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
   * The ID of the cluster.
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
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf-cn-mp9153****
   */
  instanceId?: string;
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
  proxyStatus?: string;
  proxyType?: string;
  /**
   * @remarks
   * The region ID of the WAF instance. Valid values:
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
  ruleConfig?: string;
  ruleStatus?: string;
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

