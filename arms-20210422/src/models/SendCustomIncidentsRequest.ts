// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendCustomIncidentsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  incidents?: string;
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
      incidents: 'Incidents',
      productType: 'ProductType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      incidents: 'string',
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

