// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGtmAccessStrategyAvailableConfigResponseBodyAddrPoolsAddrPool extends $dara.Model {
  /**
   * @remarks
   * The ID of the address pool.
   * 
   * @example
   * hra0ix
   */
  addrPoolId?: string;
  /**
   * @remarks
   * The name of the address pool.
   * 
   * @example
   * test
   */
  addrPoolName?: string;
  static names(): { [key: string]: string } {
    return {
      addrPoolId: 'AddrPoolId',
      addrPoolName: 'AddrPoolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrPoolId: 'string',
      addrPoolName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmAccessStrategyAvailableConfigResponseBodyAddrPools extends $dara.Model {
  addrPool?: DescribeGtmAccessStrategyAvailableConfigResponseBodyAddrPoolsAddrPool[];
  static names(): { [key: string]: string } {
    return {
      addrPool: 'AddrPool',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrPool: { 'type': 'array', 'itemType': DescribeGtmAccessStrategyAvailableConfigResponseBodyAddrPoolsAddrPool },
    };
  }

  validate() {
    if(Array.isArray(this.addrPool)) {
      $dara.Model.validateArray(this.addrPool);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmAccessStrategyAvailableConfigResponseBodyLinesLine extends $dara.Model {
  /**
   * @remarks
   * The code of the parent line. No value is returned if no parent line exists.
   * 
   * @example
   * telecom
   */
  fatherCode?: string;
  /**
   * @remarks
   * The group number of the DNS request source.
   * 
   * @example
   * ISP
   */
  groupCode?: string;
  /**
   * @remarks
   * The group name of the DNS request source.
   * 
   * @example
   * Mainland China
   */
  groupName?: string;
  /**
   * @remarks
   * The code of the DNS request source.
   * 
   * @example
   * cn_telecom_hubei
   */
  lineCode?: string;
  /**
   * @remarks
   * The name of the DNS request source.
   * 
   * @example
   * South China
   */
  lineName?: string;
  /**
   * @remarks
   * The state of the line. Valid values:
   * 
   * *   **FORBIDDEN**: The line is unavailable.
   * *   **OPTIONAL**: The line is available.
   * 
   * @example
   * FORBIDDEN
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      fatherCode: 'FatherCode',
      groupCode: 'GroupCode',
      groupName: 'GroupName',
      lineCode: 'LineCode',
      lineName: 'LineName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fatherCode: 'string',
      groupCode: 'string',
      groupName: 'string',
      lineCode: 'string',
      lineName: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmAccessStrategyAvailableConfigResponseBodyLines extends $dara.Model {
  line?: DescribeGtmAccessStrategyAvailableConfigResponseBodyLinesLine[];
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: { 'type': 'array', 'itemType': DescribeGtmAccessStrategyAvailableConfigResponseBodyLinesLine },
    };
  }

  validate() {
    if(Array.isArray(this.line)) {
      $dara.Model.validateArray(this.line);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmAccessStrategyAvailableConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The address pools.
   */
  addrPools?: DescribeGtmAccessStrategyAvailableConfigResponseBodyAddrPools;
  /**
   * @remarks
   * The Domain Name System (DNS) request sources.
   */
  lines?: DescribeGtmAccessStrategyAvailableConfigResponseBodyLines;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C2851BA9-CE56-49AF-8D12-4FC6A49EE688
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the global line is recommended.
   * 
   * @example
   * True
   */
  suggestSetDefaultLine?: boolean;
  static names(): { [key: string]: string } {
    return {
      addrPools: 'AddrPools',
      lines: 'Lines',
      requestId: 'RequestId',
      suggestSetDefaultLine: 'SuggestSetDefaultLine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrPools: DescribeGtmAccessStrategyAvailableConfigResponseBodyAddrPools,
      lines: DescribeGtmAccessStrategyAvailableConfigResponseBodyLines,
      requestId: 'string',
      suggestSetDefaultLine: 'boolean',
    };
  }

  validate() {
    if(this.addrPools && typeof (this.addrPools as any).validate === 'function') {
      (this.addrPools as any).validate();
    }
    if(this.lines && typeof (this.lines as any).validate === 'function') {
      (this.lines as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

