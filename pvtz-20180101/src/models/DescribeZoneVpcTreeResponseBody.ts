// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeZoneVpcTreeResponseBodyZonesZoneVpcsVpc extends $dara.Model {
  /**
   * @remarks
   * The region ID of the VPC.
   * 
   * @example
   * cn-heyuan
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the region to which the VPC belongs.
   * 
   * @example
   * China (Heyuan)
   */
  regionName?: string;
  /**
   * @remarks
   * The VPC ID. The unique ID of the VPC.
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
   * demo-vpc
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
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      regionName: 'RegionName',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
      vpcType: 'VpcType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      regionName: 'string',
      vpcId: 'string',
      vpcName: 'string',
      vpcType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneVpcTreeResponseBodyZonesZoneVpcs extends $dara.Model {
  vpc?: DescribeZoneVpcTreeResponseBodyZonesZoneVpcsVpc[];
  static names(): { [key: string]: string } {
    return {
      vpc: 'Vpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpc: { 'type': 'array', 'itemType': DescribeZoneVpcTreeResponseBodyZonesZoneVpcsVpc },
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

export class DescribeZoneVpcTreeResponseBodyZonesZone extends $dara.Model {
  /**
   * @remarks
   * The time when the zone was created. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2019-09-18T08:20Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the zone was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1568794812000
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
   * The operator type.
   * 
   * @example
   * USER
   */
  creatorType?: string;
  /**
   * @remarks
   * The logical location of the built-in authoritative module in which the zone is added. Valid values:
   * 
   * *   NORMAL_ZONE: regular module
   * *   FAST_ZONE: acceleration module
   * 
   * @example
   * NORMAL_ZONE
   */
  dnsGroup?: string;
  /**
   * @remarks
   * Indicates whether the zone is being removed to another logical location. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  dnsGroupChanging?: boolean;
  /**
   * @remarks
   * Indicates whether the zone is a reverse lookup zone. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  isPtr?: boolean;
  /**
   * @remarks
   * The number of Domain Name System (DNS) records added for the zone.
   * 
   * @example
   * 1
   */
  recordCount?: number;
  /**
   * @remarks
   * The description of the zone.
   * 
   * @example
   * demo
   */
  remark?: string;
  /**
   * @remarks
   * The time when the zone was last modified. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2019-09-18T08:20Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The time when the zone was last modified. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1568794834000
   */
  updateTimestamp?: number;
  /**
   * @remarks
   * The VPCs associated with the zone.
   */
  vpcs?: DescribeZoneVpcTreeResponseBodyZonesZoneVpcs;
  /**
   * @remarks
   * The zone ID. This ID uniquely identifies the zone.
   * 
   * @example
   * 6d83e3b31aa60ca4aaa7161f1b6baa95
   */
  zoneId?: string;
  /**
   * @remarks
   * The zone name.
   * 
   * @example
   * example.com
   */
  zoneName?: string;
  /**
   * @remarks
   * The type of the cloud service.
   * 
   * 
   * **Valid values:**
   * 
   * *   If ZoneType is set to AUTH_ZONE, no value is returned for this parameter.
   * 
   * *   If ZoneType is set to CLOUD_PRODUCT_ZONE, the type of the cloud service is returned.
   * 
   * @example
   * BLINK
   */
  zoneTag?: string;
  /**
   * @remarks
   * The zone type. Valid values:
   * 
   * *   AUTH_ZONE: authoritative zone
   * *   CLOUD_PRODUCT_ZONE: authoritative zone for cloud services
   * 
   * @example
   * AUTH_ZONE
   */
  zoneType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      creator: 'Creator',
      creatorType: 'CreatorType',
      dnsGroup: 'DnsGroup',
      dnsGroupChanging: 'DnsGroupChanging',
      isPtr: 'IsPtr',
      recordCount: 'RecordCount',
      remark: 'Remark',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
      vpcs: 'Vpcs',
      zoneId: 'ZoneId',
      zoneName: 'ZoneName',
      zoneTag: 'ZoneTag',
      zoneType: 'ZoneType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createTimestamp: 'number',
      creator: 'string',
      creatorType: 'string',
      dnsGroup: 'string',
      dnsGroupChanging: 'boolean',
      isPtr: 'boolean',
      recordCount: 'number',
      remark: 'string',
      updateTime: 'string',
      updateTimestamp: 'number',
      vpcs: DescribeZoneVpcTreeResponseBodyZonesZoneVpcs,
      zoneId: 'string',
      zoneName: 'string',
      zoneTag: 'string',
      zoneType: 'string',
    };
  }

  validate() {
    if(this.vpcs && typeof (this.vpcs as any).validate === 'function') {
      (this.vpcs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneVpcTreeResponseBodyZones extends $dara.Model {
  zone?: DescribeZoneVpcTreeResponseBodyZonesZone[];
  static names(): { [key: string]: string } {
    return {
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zone: { 'type': 'array', 'itemType': DescribeZoneVpcTreeResponseBodyZonesZone },
    };
  }

  validate() {
    if(Array.isArray(this.zone)) {
      $dara.Model.validateArray(this.zone);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneVpcTreeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7B07FBC3-3A53-4939-A3C6-2BDFE407BAB2
   */
  requestId?: string;
  /**
   * @remarks
   * The zones.
   */
  zones?: DescribeZoneVpcTreeResponseBodyZones;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      zones: DescribeZoneVpcTreeResponseBodyZones,
    };
  }

  validate() {
    if(this.zones && typeof (this.zones as any).validate === 'function') {
      (this.zones as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

