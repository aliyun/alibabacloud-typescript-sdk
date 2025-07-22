// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DissociateIpAddressRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  eipId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      eipId: 'EipId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipId: 'string',
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

