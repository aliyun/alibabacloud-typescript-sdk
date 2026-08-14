// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyWebAreaBlockRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  domain?: string;
  regions?: string[];
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      regions: 'Regions',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      regions: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.regions)) {
      $dara.Model.validateArray(this.regions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

