// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResolverRuleResponseBodyBindEdgeDnsClusters extends $dara.Model {
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

export class DescribeResolverRuleResponseBodyBindVpcs extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The region name.
   * 
   * @example
   * hangzhou
   */
  regionName?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-f8zvrvr1payllgz38****
   */
  vpcId?: string;
  /**
   * @remarks
   * The VPC name.
   * 
   * @example
   * vpc-name-test
   */
  vpcName?: string;
  /**
   * @remarks
   * The VPC type. Valid values:
   * 
   * *   STANDARD: standard VPC
   * *   EDS: Elastic Desktop Service (EDS) workspace VPC
   * 
   * @example
   * STANDARD
   */
  vpcType?: string;
  /**
   * @remarks
   * The ID of the user to which the VPC belongs.
   * 
   * @example
   * 32454****
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

export class DescribeResolverRuleResponseBodyForwardIps extends $dara.Model {
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
   * The port number.
   * 
   * @example
   * 8080
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

export class DescribeResolverRuleResponseBody extends $dara.Model {
  bindEdgeDnsClusters?: DescribeResolverRuleResponseBodyBindEdgeDnsClusters[];
  /**
   * @remarks
   * The virtual private clouds (VPCs) that are associated with the forwarding rule.
   */
  bindVpcs?: DescribeResolverRuleResponseBodyBindVpcs[];
  /**
   * @remarks
   * The time when the forwarding rule was created.
   * 
   * @example
   * 2020-07-13 10:51:44
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the forwarding rule was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1594608704000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The endpoint ID.
   * 
   * @example
   * hr****
   */
  endpointId?: string;
  /**
   * @remarks
   * The endpoint name.
   * 
   * @example
   * endpoint-test
   */
  endpointName?: string;
  /**
   * @remarks
   * The destination IP addresses.
   */
  forwardIps?: DescribeResolverRuleResponseBodyForwardIps[];
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
   * forward rule-test
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 13D5113B-7E34-407F-A9C1-D96CD2B04277
   */
  requestId?: string;
  /**
   * @remarks
   * The type of the forwarding rule. Valid value:
   * 
   * OUTBOUND: outbound forwarding rule. This type of rule forwards Domain Name System (DNS) requests to one or more external IP addresses.
   * 
   * @example
   * OUTBOUND
   */
  type?: string;
  /**
   * @remarks
   * The time when the forwarding rule was updated.
   * 
   * @example
   * 2020-07-13 10:51:44
   */
  updateTime?: string;
  /**
   * @remarks
   * The time when the forwarding rule was updated. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1594608704000
   */
  updateTimestamp?: number;
  /**
   * @remarks
   * The name of the forward zone.
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
      requestId: 'RequestId',
      type: 'Type',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindEdgeDnsClusters: { 'type': 'array', 'itemType': DescribeResolverRuleResponseBodyBindEdgeDnsClusters },
      bindVpcs: { 'type': 'array', 'itemType': DescribeResolverRuleResponseBodyBindVpcs },
      createTime: 'string',
      createTimestamp: 'number',
      endpointId: 'string',
      endpointName: 'string',
      forwardIps: { 'type': 'array', 'itemType': DescribeResolverRuleResponseBodyForwardIps },
      id: 'string',
      name: 'string',
      requestId: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

