// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocateIpAddressRequest extends $dara.Model {
  bandwidth?: number;
  internetChargeType?: string;
  name?: string;
  networkInterfaceId?: string;
  officeSiteId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      internetChargeType: 'InternetChargeType',
      name: 'Name',
      networkInterfaceId: 'NetworkInterfaceId',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      internetChargeType: 'string',
      name: 'string',
      networkInterfaceId: 'string',
      officeSiteId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

