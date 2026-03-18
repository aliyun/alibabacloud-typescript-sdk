// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTrafficResponseBodyFlowList extends $dara.Model {
  /**
   * @remarks
   * The bandwidth of attack traffic. Unit: bit/s.
   * 
   * >  This parameter is returned only if attack traffic exists.
   * 
   * @example
   * 0
   */
  attackBps?: number;
  /**
   * @remarks
   * The packet forwarding rate of attack traffic. Unit: packets per second.
   * 
   * >  This parameter is returned only if attack traffic exists.
   * 
   * @example
   * 0
   */
  attackPps?: number;
  /**
   * @remarks
   * The type of the traffic statistics. Valid values:
   * 
   * *   **max**: the peak traffic within the specified interval
   * *   **avg**: the average traffic within the specified interval
   * 
   * @example
   * max
   */
  flowType?: string;
  /**
   * @remarks
   * The bandwidth of the total traffic. Unit: Kbit/s.
   * 
   * @example
   * 417
   */
  kbps?: number;
  /**
   * @remarks
   * The ID of the traffic statistics.
   * 
   * @example
   * 8e33f19e-5644-11eb-b5c1-d89d67182200
   */
  name?: string;
  /**
   * @remarks
   * The packet forwarding rate of the total traffic. Unit: packets per second.
   * 
   * @example
   * 274
   */
  pps?: number;
  /**
   * @remarks
   * The time when the traffic statistics are calculated. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1620951900
   */
  time?: number;
  static names(): { [key: string]: string } {
    return {
      attackBps: 'AttackBps',
      attackPps: 'AttackPps',
      flowType: 'FlowType',
      kbps: 'Kbps',
      name: 'Name',
      pps: 'Pps',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackBps: 'number',
      attackPps: 'number',
      flowType: 'string',
      kbps: 'number',
      name: 'string',
      pps: 'number',
      time: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrafficResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried traffic statistics.
   */
  flowList?: DescribeTrafficResponseBodyFlowList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6A507DC8-F657-4C13-84E2-D1D1B9400753
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      flowList: 'FlowList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowList: { 'type': 'array', 'itemType': DescribeTrafficResponseBodyFlowList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.flowList)) {
      $dara.Model.validateArray(this.flowList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

