// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKibanaWhiteIpsResponseBodyResultNetworkConfigWhiteIpGroupList extends $dara.Model {
  /**
   * @remarks
   * The name of the whitelist group.
   * 
   * @example
   * test_group_name
   */
  groupName?: string;
  /**
   * @remarks
   * The list of IP addresses in the whitelist group.
   */
  ips?: string[];
  /**
   * @remarks
   * The whitelist type.
   * 
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
   * The network type.
   * 
   * @example
   * vpc
   */
  type?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-bp1jy348ibzulk6hn****
   */
  vpcId?: string;
  /**
   * @remarks
   * The region where the instance resides.
   * 
   * @example
   * cn-hangzhou-h
   */
  vsArea?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp1a0mifpletdd1da****
   */
  vswitchId?: string;
  /**
   * @remarks
   * The whitelist group list.
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
   * The Kibana access whitelist.
   */
  kibanaIPWhitelist?: string[];
  /**
   * @remarks
   * The Kibana internal-facing whitelist.
   */
  kibanaPrivateIPWhitelist?: string[];
  /**
   * @remarks
   * The network configuration.
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
   * The request ID.
   * 
   * @example
   * E5EF11F1-DBAE-4020-AC24-DFA6C4345CAE
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the Elasticsearch instance.
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

