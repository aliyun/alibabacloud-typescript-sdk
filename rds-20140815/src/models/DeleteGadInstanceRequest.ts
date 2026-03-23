// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteGadInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  gadInstanceName?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      gadInstanceName: 'GadInstanceName',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gadInstanceName: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

