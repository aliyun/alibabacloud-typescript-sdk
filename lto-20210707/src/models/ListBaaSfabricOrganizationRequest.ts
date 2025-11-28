// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBaaSFabricOrganizationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  baaSFabricChannelId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      baaSFabricChannelId: 'BaaSFabricChannelId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baaSFabricChannelId: 'string',
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

