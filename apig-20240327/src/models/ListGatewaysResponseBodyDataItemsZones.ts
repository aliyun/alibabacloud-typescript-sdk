// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListGatewaysResponseBodyDataItemsZonesVSwitch } from "./ListGatewaysResponseBodyDataItemsZonesVswitch";


export class ListGatewaysResponseBodyDataItemsZones extends $dara.Model {
  /**
   * @remarks
   * The vSwitch information.
   */
  vSwitch?: ListGatewaysResponseBodyDataItemsZonesVSwitch;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-f
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitch: 'vSwitch',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitch: ListGatewaysResponseBodyDataItemsZonesVSwitch,
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

