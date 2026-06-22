// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class KopilotQueryStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  owner?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      owner: 'Owner',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      owner: 'string',
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

