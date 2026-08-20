// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResolverRulesResponseBodyRulesBindEdgeDnsClusters extends $dara.Model {
  clusterId?: string;
  clusterName?: string;
  clusterUserId?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      clusterUserId: 'ClusterUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      clusterUserId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResolverRulesResponseBodyRulesBindVpcs extends $dara.Model {
  /**
   * @remarks
   * The ID of the region where the VPC resides.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the region where the VPC resides.
   * 
   * @example
   * China (Ulanqab)
   */
  regionName?: string;
  /**
   * @remarks
   * The unique ID of the VPC.
   * 
   * @example
   * vpc-0jl96awrjt75ezglc****
   */
  vpcId?: string;
  /**
   * @remarks
   * The name of the VPC.
   * 
   * @example
   * vpc-name-test
   */
  vpcName?: string;
  /**
   * @remarks
   * The type of the VPC. Valid values:
   * 
   * - STANDARD: a standard VPC.
   * 
   * - EDS: a workspace VPC of Elastic Desktop Service (EDS).
   * 
   * @example
   * STANDARD
   */
  vpcType?: string;
  /**
   * @remarks
   * The user ID (UID) of the account to which the VPC belongs.
   * 
   * @example
   * 141339776561****
   */
  vpcUserId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      regionName: 'RegionName',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
      vpcType: 'VpcType',
      vpcUserId: 'VpcUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      regionName: 'string',
      vpcId: 'string',
      vpcName: 'string',
      vpcType: 'string',
      vpcUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResolverRulesResponseBodyRulesForwardIps extends $dara.Model {
  /**
   * @remarks
   * The destination IP address.
   * 
   * @example
   * 172.16.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The port of the destination IP address.
   * 
   * @example
   * 80
   */
  port?: number;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      port: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResolverRulesResponseBodyRulesPriorityForwardConfigs extends $dara.Model {
  alidnsServiceAddresses?: string[];
  customAddresses?: string[];
  enableStatus?: string;
  priority?: number;
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      alidnsServiceAddresses: 'AlidnsServiceAddresses',
      customAddresses: 'CustomAddresses',
      enableStatus: 'EnableStatus',
      priority: 'Priority',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alidnsServiceAddresses: { 'type': 'array', 'itemType': 'string' },
      customAddresses: { 'type': 'array', 'itemType': 'string' },
      enableStatus: 'string',
      priority: 'number',
      protocol: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.alidnsServiceAddresses)) {
      $dara.Model.validateArray(this.alidnsServiceAddresses);
    }
    if(Array.isArray(this.customAddresses)) {
      $dara.Model.validateArray(this.customAddresses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResolverRulesResponseBodyRules extends $dara.Model {
  bindEdgeDnsClusters?: DescribeResolverRulesResponseBodyRulesBindEdgeDnsClusters[];
  /**
   * @remarks
   * The list of associated VPCs.
   */
  bindVpcs?: DescribeResolverRulesResponseBodyRulesBindVpcs[];
  /**
   * @remarks
   * The time when the rule was created.
   * 
   * @example
   * 2020-07-13 10:51:44
   */
  createTime?: string;
  /**
   * @remarks
   * The UNIX timestamp when the rule was created.
   * 
   * @example
   * 1594608704000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The ID of the endpoint.
   * 
   * @example
   * hr****
   */
  endpointId?: string;
  /**
   * @remarks
   * The name of the endpoint.
   * 
   * @example
   * Endpoint-test
   */
  endpointName?: string;
  /**
   * @remarks
   * The IP addresses and ports of the destination servers in an external DNS system. DNS query traffic is forwarded to these servers.
   */
  forwardIps?: DescribeResolverRulesResponseBodyRulesForwardIps[];
  /**
   * @remarks
   * The ID of the forwarding rule.
   * 
   * @example
   * hr****
   */
  id?: string;
  /**
   * @remarks
   * The name of the forwarding rule.
   * 
   * @example
   * Forwarding rule-test
   */
  name?: string;
  priorityForwardConfigs?: DescribeResolverRulesResponseBodyRulesPriorityForwardConfigs[];
  /**
   * @remarks
   * The type of the forwarding rule. Currently, only forwarding to an external IP address is supported. Valid value:
   * 
   * OUTBOUND: Forwards DNS requests to an external IP address.
   * 
   * @example
   * OUTBOUND
   */
  type?: string;
  /**
   * @remarks
   * The time when the rule was last updated.
   * 
   * @example
   * 2020-07-13 10:51:44
   */
  updateTime?: string;
  /**
   * @remarks
   * The UNIX timestamp when the rule was last updated.
   * 
   * @example
   * 1594608704000
   */
  updateTimestamp?: number;
  /**
   * @remarks
   * The domain name (zone) for which DNS requests are forwarded.
   * 
   * @example
   * example.com
   */
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      bindEdgeDnsClusters: 'BindEdgeDnsClusters',
      bindVpcs: 'BindVpcs',
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      endpointId: 'EndpointId',
      endpointName: 'EndpointName',
      forwardIps: 'ForwardIps',
      id: 'Id',
      name: 'Name',
      priorityForwardConfigs: 'PriorityForwardConfigs',
      type: 'Type',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindEdgeDnsClusters: { 'type': 'array', 'itemType': DescribeResolverRulesResponseBodyRulesBindEdgeDnsClusters },
      bindVpcs: { 'type': 'array', 'itemType': DescribeResolverRulesResponseBodyRulesBindVpcs },
      createTime: 'string',
      createTimestamp: 'number',
      endpointId: 'string',
      endpointName: 'string',
      forwardIps: { 'type': 'array', 'itemType': DescribeResolverRulesResponseBodyRulesForwardIps },
      id: 'string',
      name: 'string',
      priorityForwardConfigs: { 'type': 'array', 'itemType': DescribeResolverRulesResponseBodyRulesPriorityForwardConfigs },
      type: 'string',
      updateTime: 'string',
      updateTimestamp: 'number',
      zoneName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bindEdgeDnsClusters)) {
      $dara.Model.validateArray(this.bindEdgeDnsClusters);
    }
    if(Array.isArray(this.bindVpcs)) {
      $dara.Model.validateArray(this.bindVpcs);
    }
    if(Array.isArray(this.forwardIps)) {
      $dara.Model.validateArray(this.forwardIps);
    }
    if(Array.isArray(this.priorityForwardConfigs)) {
      $dara.Model.validateArray(this.priorityForwardConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResolverRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The unique request ID.
   * 
   * @example
   * A10E03D7-808C-422D-9144-F8586C2E2297
   */
  requestId?: string;
  /**
   * @remarks
   * The list of forwarding rules.
   */
  rules?: DescribeResolverRulesResponseBodyRules[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalItems?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      rules: 'Rules',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': DescribeResolverRulesResponseBodyRules },
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

