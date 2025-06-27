// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNatTopNResponseBodyNatGatewayTopN extends $dara.Model {
  /**
   * @remarks
   * The number of concurrent connections. Unit: connections.
   * 
   * @example
   * 8
   */
  activeSessionCount?: number;
  /**
   * @remarks
   * The inbound data transfer. Unit: bit/s.
   * 
   * @example
   * 100
   */
  inBps?: number;
  /**
   * @remarks
   * This field is reserved and not in use.
   * 
   * @example
   * 10
   */
  inFlowPerMinute?: number;
  /**
   * @remarks
   * The inbound packet forwarding rate. Unit: packets per second.
   * 
   * @example
   * 10
   */
  inPps?: number;
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 192.168.156.101
   */
  ip?: string;
  /**
   * @remarks
   * The new connection creation rate. Unit: connections per second.
   * 
   * @example
   * 2
   */
  newSessionPerSecond?: number;
  /**
   * @remarks
   * The outbound data transfer. Unit: bit/s.
   * 
   * @example
   * 200
   */
  outBps?: number;
  /**
   * @remarks
   * This field is reserved and not in use.
   * 
   * @example
   * 10
   */
  outFlowPerMinute?: number;
  /**
   * @remarks
   * The outbound packet forwarding rate. Unit: packets per second.
   * 
   * @example
   * 20
   */
  outPps?: number;
  static names(): { [key: string]: string } {
    return {
      activeSessionCount: 'ActiveSessionCount',
      inBps: 'InBps',
      inFlowPerMinute: 'InFlowPerMinute',
      inPps: 'InPps',
      ip: 'Ip',
      newSessionPerSecond: 'NewSessionPerSecond',
      outBps: 'OutBps',
      outFlowPerMinute: 'OutFlowPerMinute',
      outPps: 'OutPps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeSessionCount: 'number',
      inBps: 'number',
      inFlowPerMinute: 'number',
      inPps: 'number',
      ip: 'string',
      newSessionPerSecond: 'number',
      outBps: 'number',
      outFlowPerMinute: 'number',
      outPps: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

