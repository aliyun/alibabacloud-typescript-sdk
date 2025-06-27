// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGtmAccessStrategyAvailableConfigResponseBodyAddrPools } from "./DescribeGtmAccessStrategyAvailableConfigResponseBodyAddrPools";
import { DescribeGtmAccessStrategyAvailableConfigResponseBodyLines } from "./DescribeGtmAccessStrategyAvailableConfigResponseBodyLines";


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

