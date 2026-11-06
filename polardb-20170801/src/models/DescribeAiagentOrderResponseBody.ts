// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAIAgentOrderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The AI assistant version.
   * 
   * @example
   * 1.0
   */
  agentVersion?: string;
  /**
   * @remarks
   * The capacity package specifications.
   * 
   * @example
   * small
   */
  capacityPack?: string;
  /**
   * @remarks
   * The expiration time of the order in RFC 3339 format.
   * 
   * @example
   * 2027-01-01T00:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * Indicates whether the current account has an AI assistant order.
   */
  hasOrder?: boolean;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * order-001
   */
  orderId?: string;
  /**
   * @remarks
   * The order name.
   * 
   * @example
   * pc-copilot-001
   */
  orderName?: string;
  /**
   * @remarks
   * The order number.
   * 
   * @example
   * ord-001
   */
  orderNum?: string;
  /**
   * @remarks
   * The order status.
   * 
   * @example
   * active
   */
  orderStatus?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2921D843-433A-5FB3-A03B-4EC093B219F8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      agentVersion: 'AgentVersion',
      capacityPack: 'CapacityPack',
      expireTime: 'ExpireTime',
      hasOrder: 'HasOrder',
      orderId: 'OrderId',
      orderName: 'OrderName',
      orderNum: 'OrderNum',
      orderStatus: 'OrderStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentVersion: 'string',
      capacityPack: 'string',
      expireTime: 'string',
      hasOrder: 'boolean',
      orderId: 'string',
      orderName: 'string',
      orderNum: 'string',
      orderStatus: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

