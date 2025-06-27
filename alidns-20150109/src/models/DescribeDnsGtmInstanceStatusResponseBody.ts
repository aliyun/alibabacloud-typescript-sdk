// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDnsGtmInstanceStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of available addresses.
   * 
   * @example
   * 1
   */
  addrAvailableNum?: number;
  /**
   * @remarks
   * The number of unavailable addresses.
   * 
   * @example
   * 1
   */
  addrNotAvailableNum?: number;
  /**
   * @remarks
   * The number of unavailable address pool groups.
   * 
   * @example
   * 1
   */
  addrPoolGroupNotAvailableNum?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 389DFFA3-77A5-4A9E-BF3D-147C6F98A5BA
   */
  requestId?: string;
  /**
   * @remarks
   * The number of access policies that are unavailable in the current active address pool group.
   * 
   * @example
   * 1
   */
  strategyNotAvailableNum?: number;
  /**
   * @remarks
   * The number of access policies switched to the secondary address pool group.
   * 
   * @example
   * 1
   */
  switchToFailoverStrategyNum?: number;
  static names(): { [key: string]: string } {
    return {
      addrAvailableNum: 'AddrAvailableNum',
      addrNotAvailableNum: 'AddrNotAvailableNum',
      addrPoolGroupNotAvailableNum: 'AddrPoolGroupNotAvailableNum',
      requestId: 'RequestId',
      strategyNotAvailableNum: 'StrategyNotAvailableNum',
      switchToFailoverStrategyNum: 'SwitchToFailoverStrategyNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrAvailableNum: 'number',
      addrNotAvailableNum: 'number',
      addrPoolGroupNotAvailableNum: 'number',
      requestId: 'string',
      strategyNotAvailableNum: 'number',
      switchToFailoverStrategyNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

