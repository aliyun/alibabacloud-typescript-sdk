// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeZoneInfoResponseBodyBindEdgeDnsClustersEdgeDnsCluster extends $dara.Model {
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

export class DescribeZoneInfoResponseBodyBindEdgeDnsClusters extends $dara.Model {
  edgeDnsCluster?: DescribeZoneInfoResponseBodyBindEdgeDnsClustersEdgeDnsCluster[];
  static names(): { [key: string]: string } {
    return {
      edgeDnsCluster: 'EdgeDnsCluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edgeDnsCluster: { 'type': 'array', 'itemType': DescribeZoneInfoResponseBodyBindEdgeDnsClustersEdgeDnsCluster },
    };
  }

  validate() {
    if(Array.isArray(this.edgeDnsCluster)) {
      $dara.Model.validateArray(this.edgeDnsCluster);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneInfoResponseBodyBindVpcsVpc extends $dara.Model {
  regionId?: string;
  regionName?: string;
  vpcId?: string;
  vpcName?: string;
  vpcType?: string;
  vpcUserId?: number;
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
      vpcUserId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneInfoResponseBodyBindVpcs extends $dara.Model {
  vpc?: DescribeZoneInfoResponseBodyBindVpcsVpc[];
  static names(): { [key: string]: string } {
    return {
      vpc: 'Vpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpc: { 'type': 'array', 'itemType': DescribeZoneInfoResponseBodyBindVpcsVpc },
    };
  }

  validate() {
    if(Array.isArray(this.vpc)) {
      $dara.Model.validateArray(this.vpc);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneInfoResponseBody extends $dara.Model {
  bindEdgeDnsClusters?: DescribeZoneInfoResponseBodyBindEdgeDnsClusters;
  bindVpcs?: DescribeZoneInfoResponseBodyBindVpcs;
  /**
   * @remarks
   * The time when the zone was created.
   * 
   * @example
   * 2024-07-15T09:40Z
   */
  createTime?: string;
  /**
   * @remarks
   * The timestamp that indicates when the zone was created.
   * 
   * @example
   * 1721036404000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The creator of the zone.
   * 
   * @example
   * 141339776561****
   */
  creator?: string;
  /**
   * @remarks
   * The type of the creator.
   * 
   * @example
   * USER
   */
  creatorType?: string;
  /**
   * @remarks
   * The DNS group. Valid values:
   * 
   * - **NORMAL_ZONE**: Regular group
   * 
   * - **FAST_ZONE**: Fast group
   * 
   * @example
   * FAST_ZONE
   */
  dnsGroup?: string;
  /**
   * @remarks
   * The status of switching the DNS group for the zone. You can switch a zone between the regular and fast groups. Valid values:
   * 
   * - true: The DNS group is being switched.
   * 
   * - false: The DNS group is not being switched.
   * 
   * @example
   * false
   */
  dnsGroupChanging?: boolean;
  /**
   * @remarks
   * Indicates whether the zone is a reverse lookup zone. Valid values:
   * 
   * - true: The zone is a reverse lookup zone.
   * 
   * - false: The zone is not a reverse lookup zone.
   * 
   * @example
   * false
   */
  isPtr?: boolean;
  /**
   * @remarks
   * Indicates whether the recursive proxy for subdomains is enabled.
   * 
   * - ZONE: Disabled. If a non-existent subdomain is resolved, an NXDOMAIN response is returned to indicate that the subdomain does not exist.
   * 
   * - RECORD: Enabled. If a non-existent subdomain is resolved, the system queries the forwarding and recursion modules in sequence and uses the final result to respond to the DNS query.
   * 
   * @example
   * ZONE
   */
  proxyPattern?: string;
  /**
   * @remarks
   * The total number of DNS records in the zone.
   * 
   * @example
   * 5
   */
  recordCount?: number;
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
   * The unique ID of the request.
   * 
   * @example
   * F73F41A3-B6DD-42CA-A793-FFF93277835D
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the zone belongs.
   * 
   * @example
   * rg-acfmykd63gt****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Indicates whether secondary DNS is enabled. Valid values:
   * 
   * - **true**: Enabled
   * 
   * - **false**: Disabled
   * 
   * @example
   * false
   */
  slaveDns?: boolean;
  /**
   * @remarks
   * The time when the zone was last updated.
   * 
   * @example
   * 2024-07-22T09:39Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The timestamp that indicates when the zone was last updated.
   * 
   * @example
   * 1721641148000
   */
  updateTimestamp?: number;
  /**
   * @remarks
   * The unique ID of the zone.
   * 
   * @example
   * df2d03865266bd9842306db586d3****
   */
  zoneId?: string;
  /**
   * @remarks
   * The name of the zone.
   * 
   * @example
   * zone-test.cn
   */
  zoneName?: string;
  /**
   * @remarks
   * The tag of the zone.
   * 
   * @example
   * pvtz
   */
  zoneTag?: string;
  /**
   * @remarks
   * The type of the zone. Valid values:
   * 
   * - **AUTH_ZONE**: Authoritative zone.
   * 
   * - **CLOUD_PRODUCT_ZONE**: Authoritative zone for a cloud product.
   * 
   * @example
   * AUTH_ZONE
   */
  zoneType?: string;
  static names(): { [key: string]: string } {
    return {
      bindEdgeDnsClusters: 'BindEdgeDnsClusters',
      bindVpcs: 'BindVpcs',
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      creator: 'Creator',
      creatorType: 'CreatorType',
      dnsGroup: 'DnsGroup',
      dnsGroupChanging: 'DnsGroupChanging',
      isPtr: 'IsPtr',
      proxyPattern: 'ProxyPattern',
      recordCount: 'RecordCount',
      remark: 'Remark',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      slaveDns: 'SlaveDns',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
      zoneId: 'ZoneId',
      zoneName: 'ZoneName',
      zoneTag: 'ZoneTag',
      zoneType: 'ZoneType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindEdgeDnsClusters: DescribeZoneInfoResponseBodyBindEdgeDnsClusters,
      bindVpcs: DescribeZoneInfoResponseBodyBindVpcs,
      createTime: 'string',
      createTimestamp: 'number',
      creator: 'string',
      creatorType: 'string',
      dnsGroup: 'string',
      dnsGroupChanging: 'boolean',
      isPtr: 'boolean',
      proxyPattern: 'string',
      recordCount: 'number',
      remark: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      slaveDns: 'boolean',
      updateTime: 'string',
      updateTimestamp: 'number',
      zoneId: 'string',
      zoneName: 'string',
      zoneTag: 'string',
      zoneType: 'string',
    };
  }

  validate() {
    if(this.bindEdgeDnsClusters && typeof (this.bindEdgeDnsClusters as any).validate === 'function') {
      (this.bindEdgeDnsClusters as any).validate();
    }
    if(this.bindVpcs && typeof (this.bindVpcs as any).validate === 'function') {
      (this.bindVpcs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

