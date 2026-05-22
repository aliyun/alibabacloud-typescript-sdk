// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSiteLogDeliveryQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  businessType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      siteId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

