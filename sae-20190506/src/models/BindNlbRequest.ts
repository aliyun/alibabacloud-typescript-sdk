// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindNlbRequest extends $dara.Model {
  /**
   * @remarks
   * The address type of the NLB instance.
   * 
   * - `Internet`: a public IP address.
   * 
   * - `Intranet`: a private IP address.
   * 
   * @example
   * Internet
   */
  addressType?: string;
  /**
   * @remarks
   * The ID of the target application.
   * 
   * @example
   * 7171a6ca-d1cd-4928-8642-7d5cfe69****
   */
  appId?: string;
  /**
   * @remarks
   * The listeners, specified as a JSON-formatted string. Each listener object contains the following fields:
   * 
   * - **Port**: Integer. Required. The listener port. Valid values: 0 to 65535.
   * 
   * - **TargetPort**: Integer. Required. The port on the application instance that receives traffic. Valid values: 0 to 65535.
   * 
   * - **Protocol**: String. Required. The listener protocol. Valid values: `TCP`, `UDP`, and `TCPSSL`.
   * 
   * - **CertIds**: String. Optional. The server certificate IDs. This parameter is required only for `TCPSSL` listeners.
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
   * The mappings between zones and vSwitches, specified as a JSON-formatted string. You can add up to 10 zones. If the current region supports two or more zones, you must specify at least two zones. Each `ZoneMapping` object contains the following fields:
   * 
   * - **VSwitchId**: String. The ID of the vSwitch in the specified zone. Each zone can have only one vSwitch and one subnet.
   * 
   * - ZoneId, String, the zone ID of the Network Load Balancer instance.
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

