// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWhiteIpsResponseBodyResultNetworkConfigWhiteIpGroupList extends $dara.Model {
  /**
   * @remarks
   * The name of the whitelist group. The default group is included by default.
   * 
   * @example
   * test_group
   */
  groupName?: string;
  /**
   * @remarks
   * The IP address information in the whitelist group.
   */
  ips?: string[];
  /**
   * @remarks
   * The whitelist type. The value is fixed as PRIVATE_ES, which indicates the private network internal-facing access whitelist.
   * 
   * @example
   * PRIVATE_ES
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

export class UpdateWhiteIpsResponseBodyResultNetworkConfig extends $dara.Model {
  /**
   * @remarks
   * The list of whitelist groups.
   */
  whiteIpGroupList?: UpdateWhiteIpsResponseBodyResultNetworkConfigWhiteIpGroupList[];
  static names(): { [key: string]: string } {
    return {
      whiteIpGroupList: 'whiteIpGroupList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      whiteIpGroupList: { 'type': 'array', 'itemType': UpdateWhiteIpsResponseBodyResultNetworkConfigWhiteIpGroupList },
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

export class UpdateWhiteIpsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The private network internal-facing access whitelist (deprecated).
   */
  esIPWhitelist?: string[];
  /**
   * @remarks
   * The network configuration.
   */
  networkConfig?: UpdateWhiteIpsResponseBodyResultNetworkConfig;
  static names(): { [key: string]: string } {
    return {
      esIPWhitelist: 'esIPWhitelist',
      networkConfig: 'networkConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      esIPWhitelist: { 'type': 'array', 'itemType': 'string' },
      networkConfig: UpdateWhiteIpsResponseBodyResultNetworkConfig,
    };
  }

  validate() {
    if(Array.isArray(this.esIPWhitelist)) {
      $dara.Model.validateArray(this.esIPWhitelist);
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

export class UpdateWhiteIpsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8D58B014-BBD7-4D80-B219-00B9D5C6860C
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: UpdateWhiteIpsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdateWhiteIpsResponseBodyResult,
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

