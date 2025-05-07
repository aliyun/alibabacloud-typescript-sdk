// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCInstanceIpAddressResponseBodyRCInstanceListIpAddressConfig extends $dara.Model {
  /**
   * @example
   * 5200
   */
  blackholeThreshold?: number;
  /**
   * @example
   * 300
   */
  defenseBpsThreshold?: number;
  /**
   * @example
   * 70000
   */
  defensePpsThreshold?: number;
  /**
   * @example
   * 12310
   */
  elasticThreshold?: number;
  /**
   * @example
   * 39.105.XXX.XXX
   */
  instanceIp?: string;
  /**
   * @example
   * normal
   */
  ipStatus?: string;
  /**
   * @example
   * v4
   */
  ipVersion?: string;
  /**
   * @example
   * true
   */
  isBgppack?: boolean;
  /**
   * @example
   * 0
   */
  isFullProtection?: number;
  /**
   * @example
   * cn-beijing-wt97-a01
   */
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

