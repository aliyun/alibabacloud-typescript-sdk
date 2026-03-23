// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCInstanceIpAddressResponseBodyRCInstanceListIpAddressConfig extends $dara.Model {
  blackholeThreshold?: number;
  defenseBpsThreshold?: number;
  defensePpsThreshold?: number;
  elasticThreshold?: number;
  instanceIp?: string;
  ipStatus?: string;
  ipVersion?: string;
  isBgppack?: boolean;
  isFullProtection?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      blackholeThreshold: 'BlackholeThreshold',
      defenseBpsThreshold: 'DefenseBpsThreshold',
      defensePpsThreshold: 'DefensePpsThreshold',
      elasticThreshold: 'ElasticThreshold',
      instanceIp: 'InstanceIp',
      ipStatus: 'IpStatus',
      ipVersion: 'IpVersion',
      isBgppack: 'IsBgppack',
      isFullProtection: 'IsFullProtection',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackholeThreshold: 'number',
      defenseBpsThreshold: 'number',
      defensePpsThreshold: 'number',
      elasticThreshold: 'number',
      instanceIp: 'string',
      ipStatus: 'string',
      ipVersion: 'string',
      isBgppack: 'boolean',
      isFullProtection: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRCInstanceIpAddressResponseBodyRCInstanceList extends $dara.Model {
  instanceId?: string;
  instanceName?: string;
  instanceStatus?: string;
  instanceType?: string;
  ipAddressConfig?: DescribeRCInstanceIpAddressResponseBodyRCInstanceListIpAddressConfig[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceStatus: 'InstanceStatus',
      instanceType: 'InstanceType',
      ipAddressConfig: 'IpAddressConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceName: 'string',
      instanceStatus: 'string',
      instanceType: 'string',
      ipAddressConfig: { 'type': 'array', 'itemType': DescribeRCInstanceIpAddressResponseBodyRCInstanceListIpAddressConfig },
    };
  }

  validate() {
    if(Array.isArray(this.ipAddressConfig)) {
      $dara.Model.validateArray(this.ipAddressConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRCInstanceIpAddressResponseBody extends $dara.Model {
  RCInstanceList?: DescribeRCInstanceIpAddressResponseBodyRCInstanceList[];
  requestId?: string;
  total?: string;
  static names(): { [key: string]: string } {
    return {
      RCInstanceList: 'RCInstanceList',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      RCInstanceList: { 'type': 'array', 'itemType': DescribeRCInstanceIpAddressResponseBodyRCInstanceList },
      requestId: 'string',
      total: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.RCInstanceList)) {
      $dara.Model.validateArray(this.RCInstanceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

