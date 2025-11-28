// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBaaSAntChainRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  baaSAntChainConsortiumId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      baaSAntChainConsortiumId: 'BaaSAntChainConsortiumId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baaSAntChainConsortiumId: 'string',
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

