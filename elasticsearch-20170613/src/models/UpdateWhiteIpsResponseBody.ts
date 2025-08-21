// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWhiteIpsResponseBodyResultNetworkConfigWhiteIpGroupList extends $dara.Model {
  /**
   * @remarks
   * The type of the whitelist. The value of this parameter is fixed as PRIVATE_ES, which indicates a private IP address whitelist.
   * 
   * @example
   * test_group
   */
  groupName?: string;
  ips?: string[];
  /**
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
   * The IP addresses in the whitelist.
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
   * The list of whitelists.
   */
  esIPWhitelist?: string[];
  /**
   * @remarks
   * The name of the whitelist. By default, the default whitelist is included.
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
   * The updated whitelist.
   * 
   * @example
   * 8D58B014-BBD7-4D80-B219-00B9D5C6860C
   */
  requestId?: string;
  /**
   * @remarks
   * The network configurations.
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

