// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class KopilotQueryStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The account ID of the owner.
   * 
   * This parameter is required.
   * 
   * @example
   * 1590639435720201
   */
  owner?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
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

