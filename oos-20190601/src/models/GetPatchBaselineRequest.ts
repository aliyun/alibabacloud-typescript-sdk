// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPatchBaselineRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the patch baseline.
   * 
   * This parameter is required.
   * 
   * @example
   * MyPatchBaseline
   */
  name?: string;
  /**
   * @remarks
   * The ID of the region in which the patch baseline whose details you want to query resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

