// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceEndpointResponseBodyDataItemsEndpoint extends $dara.Model {
  /**
   * @example
   * 10.21.1.82
   */
  address?: string;
  /**
   * @example
   * mdb.shard.4x.large.d
   */
  class?: string;
  /**
   * @example
   * epg-bp14wgzai7flglwdtkxfa
   */
  endpointGroupId?: number;
  /**
   * @example
   * 2899
   */
  id?: number;
  /**
   * @example
   * True
   */
  isDefault?: boolean;
  /**
   * @example
   * instance
   */
  kind?: string;
  /**
   * @example
   * VPC
   */
  netType?: string;
  /**
   * @example
   * 0
   */
  readType?: string;
  /**
   * @example
   * sas-app
   */
  targetName?: string;
  /**
   * @example
   * 3522367
   */
  tunnelId?: number;
  /**
   * @example
   * TXT
   */
  type?: string;
  userVisible?: boolean;
  /**
   * @example
   * vsw-2ze51hh6s8tsjgy19g5eu
   */
  vSwitchId?: string;
  /**
   * @example
   * http://100.100.100.200/latest/meta-data
   */
  vip?: string;
  /**
   * @example
   * vpc-bp1s9j8s4h4uqejp9k2z3
   */
  vpcId?: string;
  /**
   * @example
   * vport
   */
  vport?: number;
  /**
   * @example
   * `curl uUys2ThR.popscan.xaliyun.com`
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      class: 'Class',
      endpointGroupId: 'EndpointGroupId',
      id: 'Id',
      isDefault: 'IsDefault',
      kind: 'Kind',
      netType: 'NetType',
      readType: 'ReadType',
      targetName: 'TargetName',
      tunnelId: 'TunnelId',
      type: 'Type',
      userVisible: 'UserVisible',
      vSwitchId: 'VSwitchId',
      vip: 'Vip',
      vpcId: 'VpcId',
      vport: 'Vport',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      class: 'string',
      endpointGroupId: 'number',
      id: 'number',
      isDefault: 'boolean',
      kind: 'string',
      netType: 'string',
      readType: 'string',
      targetName: 'string',
      tunnelId: 'number',
      type: 'string',
      userVisible: 'boolean',
      vSwitchId: 'string',
      vip: 'string',
      vpcId: 'string',
      vport: 'number',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceEndpointResponseBodyDataItemsRealServer extends $dara.Model {
  /**
   * @example
   * False
   */
  activated?: boolean;
  /**
   * @example
   * dds.cs.mid
   */
  class?: string;
  /**
   * @example
   * 172.29.32.166
   */
  ip?: string;
  /**
   * @example
   * 3306
   */
  port?: string;
  /**
   * @example
   * 节点id
   */
  replicaId?: number;
  /**
   * @example
   * 255
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      activated: 'Activated',
      class: 'Class',
      ip: 'Ip',
      port: 'Port',
      replicaId: 'ReplicaId',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activated: 'boolean',
      class: 'string',
      ip: 'string',
      port: 'string',
      replicaId: 'number',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceEndpointResponseBodyDataItems extends $dara.Model {
  endpoint?: DescribeDBInstanceEndpointResponseBodyDataItemsEndpoint;
  realServer?: DescribeDBInstanceEndpointResponseBodyDataItemsRealServer[];
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      realServer: 'RealServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: DescribeDBInstanceEndpointResponseBodyDataItemsEndpoint,
      realServer: { 'type': 'array', 'itemType': DescribeDBInstanceEndpointResponseBodyDataItemsRealServer },
    };
  }

  validate() {
    if(this.endpoint && typeof (this.endpoint as any).validate === 'function') {
      (this.endpoint as any).validate();
    }
    if(Array.isArray(this.realServer)) {
      $dara.Model.validateArray(this.realServer);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceEndpointResponseBodyData extends $dara.Model {
  items?: DescribeDBInstanceEndpointResponseBodyDataItems[];
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeDBInstanceEndpointResponseBodyDataItems },
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceEndpointResponseBody extends $dara.Model {
  data?: DescribeDBInstanceEndpointResponseBodyData;
  /**
   * @example
   * 1000
   */
  maxResults?: number;
  /**
   * @example
   * xxdds
   */
  nextToken?: string;
  /**
   * @example
   * A501A191-BD70-5E50-98A9-C2A486A82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeDBInstanceEndpointResponseBodyData,
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

