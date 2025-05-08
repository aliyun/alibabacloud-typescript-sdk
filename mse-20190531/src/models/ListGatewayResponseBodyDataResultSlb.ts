// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayResponseBodyDataResultSlb extends $dara.Model {
  /**
   * @remarks
   * The mode of the SLB instance.
   * 
   * @example
   * UserHost
   */
  gatewaySlbMode?: string;
  /**
   * @remarks
   * The state of the SLB instance.
   * 
   * @example
   * Ready
   */
  gatewaySlbStatus?: string;
  /**
   * @remarks
   * The ID of the SLB instance.
   * 
   * @example
   * lb-bp1ut8asdfgucjk****
   */
  slbId?: string;
  /**
   * @remarks
   * The IP address of the SLB instance.
   * 
   * @example
   * 153.12.XX.XX
   */
  slbIp?: string;
  /**
   * @remarks
   * The port number of the SLB instance.
   * 
   * @example
   * 80
   */
  slbPort?: string;
  /**
   * @remarks
   * The specifications of the SLB instance.
   * 
   * @example
   * slb.s2.small
   */
  slbSpec?: string;
  /**
   * @remarks
   * The description of the state.
   * 
   * @example
   * Creating
   */
  statusDesc?: string;
  /**
   * @remarks
   * The network type. Valid values:
   * 
   * *   PUB_NET
   * *   PRIVATE_NET
   * 
   * @example
   * PUB_NET
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      gatewaySlbMode: 'GatewaySlbMode',
      gatewaySlbStatus: 'GatewaySlbStatus',
      slbId: 'SlbId',
      slbIp: 'SlbIp',
      slbPort: 'SlbPort',
      slbSpec: 'SlbSpec',
      statusDesc: 'StatusDesc',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewaySlbMode: 'string',
      gatewaySlbStatus: 'string',
      slbId: 'string',
      slbIp: 'string',
      slbPort: 'string',
      slbSpec: 'string',
      statusDesc: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

