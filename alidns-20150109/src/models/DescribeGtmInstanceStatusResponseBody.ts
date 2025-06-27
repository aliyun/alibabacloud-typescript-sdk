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
   * The request ID.
   * 
   * @example
   * 389DFFA3-77A5-4A9E-BF3D-147C6F98A5BA
   */
  requestId?: string;
  /**
   * @remarks
   * The state of the instance. Valid values:
   * 
   * *   ALLOW: The operation on the instance is allowed.
   * *   DENY: The operation on the instance is not allowed.
   * 
   * @example
   * ALLOW
   */
  status?: string;
  /**
   * @remarks
   * The reasons why the instance is in the current state. Valid values:
   * 
   * *   INSTANCE_OPERATE_BLACK_LIST: The operation on the instance is not allowed.
   * *   BETA_INSTANCE: The instance is in public preview.
   * 
   * @example
   * ["BETA_INSTANCE"]
   */
  statusReason?: string;
  /**
   * @remarks
   * The number of unavailable access policies.
   * 
   * @example
   * 10
   */
  strategyNotAvailableNum?: number;
  /**
   * @remarks
   * The number of access policies switched to the secondary address pool.
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

