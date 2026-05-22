// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSiteAccessTypeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  accessType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
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

