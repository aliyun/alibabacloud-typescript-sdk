// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetGatewayResponseBodyDataZonesVSwitch } from "./GetGatewayResponseBodyDataZonesVswitch";


export class GetGatewayResponseBodyDataZones extends $dara.Model {
  /**
   * @remarks
   * Availability zone name.
   * 
   * @example
   * 杭州可用区E
   */
  name?: string;
  /**
   * @remarks
   * Virtual switch.
   */
  vSwitch?: GetGatewayResponseBodyDataZonesVSwitch;
  /**
   * @remarks
   * Availability zone ID.
   * 
   * @example
   * cn-hangzhou-e
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      vSwitch: 'vSwitch',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      vSwitch: GetGatewayResponseBodyDataZonesVSwitch,
      zoneId: 'string',
    };
  }

  validate() {
    if(this.vSwitch && typeof (this.vSwitch as any).validate === 'function') {
      (this.vSwitch as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

