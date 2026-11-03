// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindNlbRequest extends $dara.Model {
  /**
   * @remarks
   * The address type. Valid values:
   * - Internet: public network address.
   * - Intranet: private network address.
   * 
   * @example
   * Internet
   */
  addressType?: string;
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 7171a6ca-d1cd-4928-8642-7d5cfe69****
   */
  appId?: string;
  /**
   * @remarks
   * The JSON array string of the listeners to be configured. The structure of each listener is as follows:
   * 
   * - **Port**: Integer type, required. The load balancing listener port. Valid values: 0 to 65535.
   * 
   * - **TargetPort**: Integer type, required. The listening port of the container in the instance. Valid values: 0 to 65535.
   * 
   * - **Protocol**: String type, required. The listening protocol. Valid values: TCP, UDP, and TCPSSL.
   * 
   * - **CertIds**: String type, optional. The list of server certificates. This parameter takes effect only for TCPSSL listeners.
   * 
   * @example
   * [{"Port":80,"TargetPort":8080,"Protocol":"TCP"}]
   */
  listeners?: string;
  /**
   * @remarks
   * The ID of the NLB instance.
   * 
   * @example
   * nlb-7z7jjbzz44d82c9***
   */
  nlbId?: string;
  /**
   * @remarks
   * The JSON string of the zone and vSwitch mapping list. You can add up to 10 zones. If the current region supports two or more zones, you must add at least two zones. The structure of a ZoneMapping is as follows:
   * 
   * - VSwitchId: String type. The vSwitch corresponding to the zone. Each zone can use only one vSwitch and one subnet.
   * 
   * - ZoneId: String type. The zone ID of the Network Load Balancer (NLB) instance.
   * 
   * @example
   * vsw-sersdf****
   * cn-hangzhou-a
   */
  zoneMappings?: string;
  static names(): { [key: string]: string } {
    return {
      addressType: 'AddressType',
      appId: 'AppId',
      listeners: 'Listeners',
      nlbId: 'NlbId',
      zoneMappings: 'ZoneMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressType: 'string',
      appId: 'string',
      listeners: 'string',
      nlbId: 'string',
      zoneMappings: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

