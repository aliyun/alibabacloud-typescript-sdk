// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIntegrationTokenRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  productType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      productType: 'ProductType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productType: 'string',
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

