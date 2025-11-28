// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBaaSAntChainPeerRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  baaSAntChainChainId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  baaSAntChainConsortiumId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      baaSAntChainChainId: 'BaaSAntChainChainId',
      baaSAntChainConsortiumId: 'BaaSAntChainConsortiumId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baaSAntChainChainId: 'string',
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

