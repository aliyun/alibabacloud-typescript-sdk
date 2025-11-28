// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBaaSFabricChannelRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  baaSFabricConsortiumId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      baaSFabricConsortiumId: 'BaaSFabricConsortiumId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baaSFabricConsortiumId: 'string',
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

