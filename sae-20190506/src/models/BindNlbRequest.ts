// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindNlbRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the IP addresses. Valid values:
   * 
   * *   Internet: public endpoint.
   * *   Intranet: private endpoint.
   * 
   * @example
   * Internet
   */
  addressType?: string;
  /**
   * @remarks
   * The ID of the application to which the NLB instance is bound.
   * 
   * @example
   * 7171a6ca-d1cd-4928-8642-7d5cfe69****
   */
  appId?: string;
  /**
   * @remarks
   * The listener that you want to manage. The value is a string that consists of JSON arrays. Each listener contains the following fields:
   * 
   * *   **port**: the port number of the NLB listener. This field is required. Data type: integer. Valid values: 0 to 65535.
   * *   **TargetPort**: the port number of the container listener. This field is required. Data type: integer. Valid values: 0 to 65535.
   * *   **Protocol**: the listener protocol. This field is required. Data type: string. Valid values: TCP, UDP, and TCPSSL.
   * *   **CertIds**: the IDs of the server certificates. This field is optional. Data type: string. This field is supported only by TCPSSL listeners.
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
   * The mappings between zones and vSwitches. The value is a JSON string. You can specify at most 10 zones. If the region supports two or more zones, specify at least two zones. A ZoneMapping contains the following fields:
   * 
   * *   The ID of the vSwitch in the zone. Each zone can contain only one vSwitch and one subnet. Data type: string.
   * *   The zone ID of the NLB instance. Data type: string.
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

