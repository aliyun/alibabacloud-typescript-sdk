// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGtmInstanceStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of unavailable addresses.
   * 
   * @example
   * 10
   */
  addrNotAvailableNum?: number;
  /**
   * @remarks
   * The number of unavailable address pools.
   * 
   * @example
   * 10
   */
  addrPoolNotAvailableNum?: number;
  /**
   * @remarks
   * The unique request ID.
   * 
   * @example
   * 389DFFA3-77A5-4A9E-BF3D-147C6F98A5BA
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the instance. Valid values:
   * 
   * - ALLOW: Operations are allowed.
   * 
   * - DENY: Operations are denied.
   * 
   * @example
   * ALLOW
   */
  status?: string;
  /**
   * @remarks
   * A list of reasons for the instance status. Valid values:
   * 
   * - INSTANCE_OPERATE_BLACK_LIST: The instance is in a blacklist.
   * 
   * - BETA_INSTANCE: The instance is in public preview.
   * 
   * @example
   * ["BETA_INSTANCE"]
   */
  statusReason?: string;
  /**
   * @remarks
   * The number of access policies for which the active address pool is unavailable.
   * 
   * @example
   * 10
   */
  strategyNotAvailableNum?: number;
  /**
   * @remarks
   * The number of access policies that are switched to the failover address pool.
   * 
   * @example
   * 10
   */
  switchToFailoverStrategyNum?: number;
  static names(): { [key: string]: string } {
    return {
      addrNotAvailableNum: 'AddrNotAvailableNum',
      addrPoolNotAvailableNum: 'AddrPoolNotAvailableNum',
      requestId: 'RequestId',
      status: 'Status',
      statusReason: 'StatusReason',
      strategyNotAvailableNum: 'StrategyNotAvailableNum',
      switchToFailoverStrategyNum: 'SwitchToFailoverStrategyNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrNotAvailableNum: 'number',
      addrPoolNotAvailableNum: 'number',
      requestId: 'string',
      status: 'string',
      statusReason: 'string',
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

