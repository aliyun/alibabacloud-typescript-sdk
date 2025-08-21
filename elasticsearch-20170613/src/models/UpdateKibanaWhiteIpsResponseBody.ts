// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKibanaWhiteIpsResponseBodyResultNetworkConfigWhiteIpGroupList extends $dara.Model {
  /**
   * @remarks
   * The IP addresses in the whitelist.
   * 
   * @example
   * test_group_name
   */
  groupName?: string;
  /**
   * @remarks
   * The IP addresses in the whitelist.
   */
  ips?: string[];
  /**
   * @example
   * PUBLIC_KIBANA
   */
  whiteIpType?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'groupName',
      ips: 'ips',
      whiteIpType: 'whiteIpType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      ips: { 'type': 'array', 'itemType': 'string' },
      whiteIpType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ips)) {
      $dara.Model.validateArray(this.ips);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateKibanaWhiteIpsResponseBodyResultNetworkConfig extends $dara.Model {
  /**
   * @remarks
   * The IP address whitelists.
   * 
   * @example
   * vpc
   */
  type?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vpc-bp1jy348ibzulk6hn****
   */
  vpcId?: string;
  /**
   * @remarks
   * The network type.
   * 
   * @example
   * cn-hangzhou-h
   */
  vsArea?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * vsw-bp1a0mifpletdd1da****
   */
  vswitchId?: string;
  /**
   * @remarks
   * The IP address whitelists.
   */
  whiteIpGroupList?: UpdateKibanaWhiteIpsResponseBodyResultNetworkConfigWhiteIpGroupList[];
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      vpcId: 'vpcId',
      vsArea: 'vsArea',
      vswitchId: 'vswitchId',
      whiteIpGroupList: 'whiteIpGroupList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      vpcId: 'string',
      vsArea: 'string',
      vswitchId: 'string',
      whiteIpGroupList: { 'type': 'array', 'itemType': UpdateKibanaWhiteIpsResponseBodyResultNetworkConfigWhiteIpGroupList },
    };
  }

  validate() {
    if(Array.isArray(this.whiteIpGroupList)) {
      $dara.Model.validateArray(this.whiteIpGroupList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateKibanaWhiteIpsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The public IP address whitelists for access to the Kibana console of the cluster.
   */
  kibanaIPWhitelist?: string[];
  /**
   * @remarks
   * The private IP address whitelists for access to the Kibana console of the cluster.
   */
  kibanaPrivateIPWhitelist?: string[];
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   */
  networkConfig?: UpdateKibanaWhiteIpsResponseBodyResultNetworkConfig;
  static names(): { [key: string]: string } {
    return {
      kibanaIPWhitelist: 'kibanaIPWhitelist',
      kibanaPrivateIPWhitelist: 'kibanaPrivateIPWhitelist',
      networkConfig: 'networkConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kibanaIPWhitelist: { 'type': 'array', 'itemType': 'string' },
      kibanaPrivateIPWhitelist: { 'type': 'array', 'itemType': 'string' },
      networkConfig: UpdateKibanaWhiteIpsResponseBodyResultNetworkConfig,
    };
  }

  validate() {
    if(Array.isArray(this.kibanaIPWhitelist)) {
      $dara.Model.validateArray(this.kibanaIPWhitelist);
    }
    if(Array.isArray(this.kibanaPrivateIPWhitelist)) {
      $dara.Model.validateArray(this.kibanaPrivateIPWhitelist);
    }
    if(this.networkConfig && typeof (this.networkConfig as any).validate === 'function') {
      (this.networkConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateKibanaWhiteIpsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the Elasticsearch cluster.
   * 
   * @example
   * E5EF11F1-DBAE-4020-AC24-DFA6C4345CAE
   */
  requestId?: string;
  /**
   * @remarks
   * The private IP address whitelists for access to the Kibana console of the cluster.
   */
  result?: UpdateKibanaWhiteIpsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdateKibanaWhiteIpsResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

